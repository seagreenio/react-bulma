import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileStringAsync } from 'sass';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';
import { resolvePrefix, type BulmaConfig } from './config';
import { helperClasses } from './helpers';

export type { BulmaConfig } from './config';

export async function buildStyles(config: BulmaConfig = {}): Promise<string> {
  const prefix = resolvePrefix(config);
  const entry = new URL('../styles/_entry.scss', import.meta.url);
  const require = createRequire(import.meta.url);
  const bulmaDirectory = dirname(require.resolve('bulma/package.json'));
  const source = await readFile(entry, 'utf8');
  const compiled = await compileStringAsync(
    `
    @use 'bulma/sass/utilities/initial-variables' with (
      $class-prefix: '${prefix}',
      $cssvars-prefix: '${prefix}',
      $variables-host: '.${prefix}root'
    );
    ${source}
  `,
    {
      url: entry,
      loadPaths: [dirname(bulmaDirectory), dirname(fileURLToPath(entry))],
      quietDeps: true,
      style: 'expanded',
    },
  );
  const css = postcss.parse(compiled.css);
  const rootHelpers = new Set(
    Object.values(helperClasses).flatMap((variants) =>
      Object.values(variants).map((name) => `${prefix}${name}`),
    ),
  );
  css.walkRules((rule) => {
    if (rule.selector.includes(`${prefix}is-palette-`)) rule.remove();
  });
  css.walkRules((rule) => {
    if (
      rule.parent?.type === 'atrule' &&
      rule.parent.name.endsWith('keyframes')
    )
      return;
    rule.selector = selectorParser((selectors) => {
      selectors.each((selector) => {
        let hasClass = false;
        selector.walkClasses((node) => {
          if (
            [
              'is-auto-fill',
              'is-hoverable',
              'is-active',
              'is-selected',
            ].includes(node.value) ||
            !node.value.startsWith(prefix)
          )
            node.value = `${prefix}${node.value}`;
          hasClass = true;
          if (node.value === `${prefix}root`)
            node.replaceWith(selectorParser.pseudo({ value: ':scope' }));
        });
        selector.walkTags((node) => {
          if (
            node.value.startsWith(`${prefix}has-text-`) ||
            node.value.startsWith(`${prefix}has-background-`)
          )
            node.replaceWith(selectorParser.className({ value: node.value }));
        });
        const documentTags = selector.nodes.filter(
          (node) =>
            node.type === 'tag' &&
            (node.value === 'html' || node.value === 'body'),
        );
        if (documentTags.length && !hasClass) {
          selector.remove();
          return;
        }
        for (const node of documentTags)
          node.replaceWith(selectorParser.pseudo({ value: ':scope' }));
        if (
          selector.nodes.some(
            (node) => node.type === 'class' && node.value === `${prefix}tabs`,
          )
        ) {
          const buttonSelector = selector.clone();
          let hasLink = false;
          buttonSelector.walkTags((node) => {
            if (node.value !== 'a') return;
            hasLink = true;
            node.replaceWith(
              selectorParser.tag({ value: 'button' }),
              selectorParser.className({ value: `${prefix}tab` }),
            );
          });
          if (hasLink) selectors.append(buttonSelector);
        }
        const ariaDisabledSelector = selector.clone();
        let hasDisabledButton = false;
        ariaDisabledSelector.walkAttributes((node) => {
          if (node.attribute !== 'disabled') return;
          let sibling = node.prev();
          while (sibling && sibling.type !== 'combinator') {
            if (
              sibling.type === 'class' &&
              sibling.value === `${prefix}button`
            ) {
              node.attribute = 'aria-disabled';
              node.operator = '=';
              node.setValue('true', { quoteMark: '"' });
              hasDisabledButton = true;
              break;
            }
            sibling = sibling.prev();
          }
        });
        if (hasDisabledButton) selectors.append(ariaDisabledSelector);
        const helper = selector.nodes[0];
        if (
          selector.nodes.length === 1 &&
          helper?.type === 'class' &&
          rootHelpers.has(helper.value)
        ) {
          const rootSelector = selector.clone();
          rootSelector.nodes[0]!.spaces.before = '';
          rootSelector.prepend(
            selectorParser.pseudo({
              value: ':where',
              nodes: [
                selectorParser.selector({
                  value: '',
                  nodes: [selectorParser.pseudo({ value: ':scope' })],
                }),
              ],
            }),
          );
          selectors.append(rootSelector);
        }
      });
    }).processSync(rule.selector);
    if (!rule.selector.trim()) rule.remove();
  });
  css.walkAtRules('container', (rule) => {
    rule.params = rule.params.replace(
      /\bbulma-fixed-grid\b/g,
      `${prefix}fixed-grid`,
    );
  });
  css.walkDecls('container-name', (declaration) => {
    declaration.value = declaration.value.replace(
      /\bbulma-fixed-grid\b/g,
      `${prefix}fixed-grid`,
    );
  });
  const animations = new Map<string, string>();
  css.walkAtRules('keyframes', (rule) => {
    const name = rule.params;
    const prefixed = `${prefix}${name}`;
    animations.set(name, prefixed);
    rule.params = prefixed;
  });
  css.walkDecls(/^(?:animation|animation-name)$/, (declaration) => {
    declaration.value = declaration.value.replace(
      /[a-zA-Z_][\w-]*/g,
      (word) => animations.get(word) ?? word,
    );
  });
  const scope = postcss.atRule({
    name: 'scope',
    params: `(.${prefix}root) to (:scope [data-react-bulma-root])`,
  });
  for (const node of [...css.nodes]) {
    if (node.type !== 'atrule' || node.name !== 'charset') scope.append(node);
  }
  css.append(scope);
  return css.toString();
}

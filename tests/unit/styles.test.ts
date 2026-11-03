import { beforeAll, describe, expect, test } from 'bun:test';
import postcss, { type Root } from 'postcss';
import selectorParser from 'postcss-selector-parser';
import { createBulma } from '../../src';
import { helperClasses, type Helpers } from '../../src/helpers';
import { buildStyles } from '../../src/styles';

describe.each(['rb-', 'my-ui-'])('%s CSS contract', (prefix) => {
  let css: Root;
  const classes = new Set<string>();

  beforeAll(async () => {
    css = postcss.parse(await buildStyles({ prefix }));
    if (prefix === 'my-ui-')
      css.walkRules((rule) => {
        if (rule.parent?.type === 'atrule' && rule.parent.name === 'keyframes')
          return;
        selectorParser((selectors) => {
          selectors.walkClasses((node) => {
            classes.add(node.value);
          });
        }).processSync(rule.selector);
      });
  });

  test('contains no global selectors or unprefixed classes, variables, and animations', () => {
    const keyframes = new Set<string>();
    css.walkAtRules('keyframes', (rule) => {
      expect(rule.params.startsWith(prefix)).toBe(true);
      keyframes.add(rule.params);
    });
    expect(keyframes.has(`${prefix}spinAround`)).toBe(true);
    css.walkRules((rule) => {
      if (rule.parent?.type === 'atrule' && rule.parent.name === 'keyframes')
        return;
      selectorParser((selectors) => {
        selectors.each((selector) => {
          let scoped = false;
          selector.walkClasses((node) => {
            expect(node.value.startsWith(prefix)).toBe(true);
            scoped = true;
          });
          let container = rule.parent;
          while (container?.type !== 'root' && container?.type !== 'atrule')
            container = container?.parent;
          expect(
            scoped ||
              (container?.type === 'atrule' &&
                container.name === 'scope' &&
                container.params ===
                  `(.${prefix}root) to (:scope [data-react-bulma-root])`),
          ).toBe(true);
          expect(selector.toString()).not.toContain(':root');
          expect(selector.toString()).not.toContain('[data-theme');
        });
      }).processSync(rule.selector);
    });
    css.walkDecls('container-name', (declaration) =>
      expect(declaration.value.startsWith(prefix)).toBe(true),
    );
    css.walkAtRules('container', (rule) =>
      expect(rule.params.startsWith(`${prefix}fixed-grid `)).toBe(true),
    );
    css.walkDecls((declaration) => {
      if (declaration.prop.startsWith('--'))
        expect(declaration.prop.startsWith(`--${prefix}`)).toBe(true);
      for (const [, variable] of declaration.value.matchAll(
        /var\(\s*(--[\w-]+)/g,
      ))
        expect(variable!.startsWith(`--${prefix}`)).toBe(true);
      if (
        declaration.prop === 'animation' ||
        declaration.prop === 'animation-name'
      ) {
        const name = declaration.value.split(/\s+/)[0];
        expect(name === 'none' || keyframes.has(name!)).toBe(true);
      }
    });
  });

  if (prefix === 'my-ui-') {
    test('every exposed helper variant has a selector in compiled Bulma', () => {
      const { helpers } = createBulma({ prefix });
      for (const [key, variants] of Object.entries(helperClasses)) {
        for (const value of Object.keys(variants)) {
          const input =
            value === 'true'
              ? true
              : /^\d+$/.test(value)
                ? Number(value)
                : value;
          const names = helpers({ [key]: input } as Helpers).split(' ');
          expect(names.length).toBe(1);
          expect(classes.has(names[0]!)).toBe(true);
        }
      }
    });
  }
});

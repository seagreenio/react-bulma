import { createHash } from 'node:crypto'
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { Liquid } from 'liquidjs'
import { marked } from 'marked'
import { load, type CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'
import { compileAsync } from 'sass'
import postcss from 'postcss'
import selectorParser from 'postcss-selector-parser'
import { helperClasses } from '../../src/helpers'
import { homedir } from 'node:os'
import lock from '../../official/source-lock.json'
import { exampleNames } from '../../official/example-names'
import type { OfficialCorpus, OfficialExample, OfficialPreview } from './types'
import type { OfficialDocuments } from './documents'

export interface OfficialNavigation {
  pages: { page: string; path: string[] }[]
  excluded: { page: string; reason: string }[]
}
export interface OfficialSource {
  corpus: OfficialCorpus
  documents: OfficialDocuments
  navigation: OfficialNavigation
  stylesheet: string
  decorations: string
}
const hash = (value: string) => createHash('sha256').update(value).digest('hex')
const baseClasses = new Set(
  'block box button buttons content delete icon icon-text image notification progress table table-container tag tags title subtitle loader skeleton-block skeleton-lines field field-label field-body label control help input textarea select checkbox radio checkboxes radios file container hero hero-head hero-body hero-foot section footer level level-left level-right level-item media media-left media-right media-content columns column grid fixed-grid cell breadcrumb card card-header card-header-title card-header-icon card-image card-content card-footer card-footer-item menu menu-label menu-list message message-header message-body pagination pagination-list pagination-link pagination-previous pagination-next pagination-ellipsis panel panel-heading panel-tabs panel-block panel-icon dropdown dropdown-menu dropdown-content dropdown-item dropdown-divider modal modal-content modal-card-title modal-close modal-card modal-card-head modal-card-body modal-card-foot tabs navbar navbar-brand navbar-burger navbar-menu navbar-start navbar-end navbar-item navbar-link navbar-dropdown navbar-divider'.split(
    ' ',
  ),
)
const helperTokens = new Set(
  Object.values(helperClasses).flatMap((values) => Object.values(values)),
)
async function files(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true })
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? files(join(root, entry.name))
          : [join(root, entry.name)],
      ),
    )
  )
    .flat()
    .sort()
}
export function prepareLiquid(source: string): string {
  let index = 0
  return source.replace(
    /\{%[-\s]*highlight\s+(\w+)[\s\S]*?%\}([\s\S]*?)\{%[-\s]*endhighlight\s*[-]?%\}/g,
    (_, language: string, body: string) => {
      const name = `__highlight_${index++}`
      return `{% capture ${name} %}${body}{% endcapture %}<div class="highlight"><pre><code class="language-${language}">{{ ${name} | escape }}</code></pre></div>`
    },
  )
}
export function renderMarkdownPage(source: string): string {
  const $ = load(source, {}, false)
  return $.root()
    .contents()
    .toArray()
    .map((node) =>
      node.type === 'text'
        ? node.data.trim()
          ? marked.parse(node.data, { async: false })
          : node.data
        : $.html(node),
    )
    .join('')
}
function frontmatter(source: string): {
  page: Record<string, any>
  body: string
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source)
  if (!match) throw new Error('Official document has no YAML front matter')
  return {
    page: Bun.YAML.parse(match[1]!) as Record<string, any>,
    body: source.slice(match[0].length),
  }
}
export function compileDecorations(css: string, baseCss = ''): string {
  const root = postcss.parse(css)
  const inherited = new Set<string>()
  postcss.parse(baseCss).walkDecls(/^--/, (declaration) => {
    inherited.add(declaration.prop)
  })
  const variables = new Map<string, string>()
  root.walkRules((rule) => {
    if (rule.selector !== ':root' || rule.parent?.type !== 'root') return
    rule.walkDecls(/^--/, (declaration) => {
      if (!inherited.has(declaration.prop))
        variables.set(declaration.prop, declaration.value)
    })
  })
  root.walkRules((rule) => {
    if (rule.parent?.type === 'atrule' && /keyframes$/.test(rule.parent.name))
      return
    const selected = rule.selectors.filter((selector) =>
      /\.(?:bd-[\w-]+|example)(?![\w-])/.test(selector),
    )
    if (!selected.length) {
      rule.remove()
      return
    }
    rule.selector = selectorParser((selectors) => {
      selectors.walkClasses((node) => {
        let start = node.prev()
        let end = node.next()
        const compound = [node]
        while (start && start.type !== 'combinator') {
          compound.push(start as typeof node)
          start = start.prev()
        }
        while (end && end.type !== 'combinator') {
          compound.push(end as typeof node)
          end = end.next()
        }
        const classes = compound
          .filter((item) => item.type === 'class')
          .map((item) => item.value)
        if (
          baseClasses.has(node.value) ||
          helperTokens.has(node.value) ||
          (/^(?:is-|has-|are-)/.test(node.value) &&
            !classes.some((name) => name.startsWith('bd-')))
        )
          node.value = `rb-${node.value}`
      })
    }).processSync(selected.join(','))
    rule.selector = rule.selectors
      .map((selector) => `.official-root ${selector}`)
      .join(',')
  })
  root.walkAtRules((rule) => {
    if (
      !['media', 'supports', 'keyframes', 'font-face'].includes(rule.name) ||
      !rule.nodes?.length
    )
      rule.remove()
  })
  const required = new Map<string, string>()
  const collect = (value: string) => {
    for (const [, name] of value.matchAll(/var\(\s*(--[\w-]+)/g)) {
      if (!name || required.has(name)) continue
      const dependency = variables.get(name)
      if (dependency === undefined) continue
      required.set(name, dependency)
      collect(dependency)
    }
  }
  root.walkDecls((declaration) => collect(declaration.value))
  if (required.size) {
    const defaults = postcss.rule({ selector: '.official-root' })
    for (const [prop, value] of required)
      defaults.append(postcss.decl({ prop, value }))
    root.prepend(defaults)
  }
  root.walkDecls((declaration) => {
    declaration.prop = declaration.prop.replace(/^--bulma-/, '--rb-')
    declaration.value = declaration.value.replace(/--bulma-/g, '--rb-')
  })
  return `/* Compiled from the pinned Bulma website Sass source. */\n${root}`
}
export function officialSourceRoot(): string {
  return (
    process.env.REACT_BULMA_SOURCE_ROOT ??
    join(homedir(), '.cache/react-bulma/bulma', lock.revision, 'source')
  )
}
export function findExampleRoots($: CheerioAPI): Element[] {
  const roots = new Set<Element>()
  $('.bd-snippet-preview').each((_, node) => {
    if ($(node).text().trim() || $(node).children().length) roots.add(node)
  })
  $('.bd-docs-content .js-modal-trigger[data-target]').each((_, node) => {
    if ($(node).closest('pre,code').length) return
    if (
      $('.modal')
        .toArray()
        .some((modal) => modal.attribs.id === node.attribs['data-target'])
    )
      roots.add(node)
  })
  const candidates = [...baseClasses].map((name) => `.${name}`).join(',')
  const documentColumns = new Set<Element>()
  $('.bd-docs-content .columns').each((_, row) => {
    if ($(row).closest('.bd-snippet-preview,.bd-example,.example').length)
      return
    const columns = $(row).children('.column')
    const sources = columns.filter(
      (_, column) => $(column).children('.highlight').length > 0,
    )
    if (!sources.length) return
    for (const column of columns.toArray()) documentColumns.add(column)
    columns.not(sources).each((_, column) => {
      const components = $(column)
        .find(candidates)
        .filter(
          (_, node) => !$(node).closest('.content,.message,pre,code').length,
        )
      if (components.length) roots.add(column)
    })
  })
  $('.bd-docs-content')
    .find(candidates)
    .each((_, node) => {
      if (
        roots.has(node) ||
        documentColumns.has(node) ||
        $(node)
          .find('*')
          .toArray()
          .some((child) => roots.has(child))
      )
        return
      if (
        /^h[1-6]$/.test(node.name) &&
        !$(node).closest('.bd-snippet-preview,.bd-example,.example').length
      )
        return
      if (
        $(node).closest(
          '.bd-snippet,.bd-anchor-title,.bd-subnav,pre,code,.content,.message',
        ).length
      )
        return
      if (
        $(node).closest('table,.table-container').length &&
        !$(node).closest('.bd-example,.example').length
      )
        return
      if (
        $(node)
          .parents()
          .toArray()
          .some((parent) => roots.has(parent as Element))
      )
        return
      let rootNode = node
      for (const ancestor of $(node)
        .parentsUntil('.bd-docs-content')
        .toArray()) {
        if ($(ancestor).is('.content')) return
        if (
          $(ancestor).find('h1,h2,h3,h4,h5,h6').length &&
          !$(ancestor).is('.bd-example,.example')
        )
          break
        rootNode = ancestor
      }
      roots.add(rootNode)
    })
  return $('.bd-docs-content *')
    .toArray()
    .filter(
      (node) =>
        roots.has(node) &&
        !$(node)
          .parents()
          .toArray()
          .some((parent) => roots.has(parent as Element)),
    )
}

export function readExamplePreview(
  $: CheerioAPI,
  node: Element,
): OfficialPreview | undefined {
  if (!$(node).is('.bd-snippet-preview')) return
  const snippet = $(node).closest('.bd-snippet')
  if (!snippet.length) return
  const classNames = (value: string) => value.trim().split(/\s+/)
  const ancestors = snippet
    .parentsUntil('.bd-docs-content')
    .toArray()
    .reverse()
    .map((ancestor) => classNames(ancestor.attribs.class ?? ''))
    .filter((names) => names.some((name) => name.startsWith('bd-')))
    .map((names) =>
      names
        .map((name) =>
          baseClasses.has(name) || helperTokens.has(name) ? `rb-${name}` : name,
        )
        .join(' '),
    )
  return {
    className: classNames(snippet.attr('class') ?? '').join(' '),
    ...(ancestors.length ? { ancestors } : {}),
  }
}

export async function loadOfficialSource(
  root = officialSourceRoot(),
): Promise<OfficialSource> {
  const upstream = JSON.parse(
    await readFile(join(root, 'upstream.json'), 'utf8'),
  ) as { repository: string; commit: string }
  if (
    upstream.repository !== lock.repository ||
    upstream.commit !== lock.revision
  )
    throw new Error('Official source differs from source-lock.json')
  const data: Record<string, any> = {}
  for (const file of await files(join(root, 'docs/_data'))) {
    if (!file.endsWith('.json')) continue
    const path = relative(join(root, 'docs/_data'), file)
      .replace(/\.json$/, '')
      .split('/')
    let container = data
    for (const key of path.slice(0, -1)) container = container[key] ??= {}
    container[path.at(-1)!] = JSON.parse(await readFile(file, 'utf8'))
  }
  const templates: Record<string, string> = {}
  for (const file of await files(join(root, 'docs/_includes')))
    templates[relative(join(root, 'docs/_includes'), file)] = prepareLiquid(
      await readFile(file, 'utf8'),
    )
  const engine = new Liquid({
    templates,
    jekyllInclude: true,
    strictFilters: true,
  })
  engine.registerFilter('markdownify', (value: unknown) =>
    marked.parse(String(value ?? ''), { async: false }),
  )
  engine.registerFilter('slugify', (value: unknown) =>
    String(value)
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, '-')
      .replace(/^-|-$/g, ''),
  )
  engine.registerFilter(
    'absolute_url',
    (value: unknown) => new URL(String(value), 'https://bulma.io').href,
  )
  const byId = data.links.by_id as Record<
    string,
    { name: string; path: string; subtitle: string }
  >
  const menu = await engine.renderFile('docs/menu.html', {
    site: { url: 'https://bulma.io', data },
    page: {},
  })
  const $menu = load(menu)
  const groups = $menu('#js-library-menu > li > a')
    .map((_, node) => {
      const path = $menu(node).attr('href') ?? ''
      return path.split('/').filter(Boolean).at(-1)
    })
    .get()
  if (!groups.length) throw new Error('Official library navigation is missing')
  const ids = [
    'features-skeletons',
    ...groups
      .flatMap((group) => data.links.categories[group] as string[])
      .filter((id) => id !== 'grid-playground'),
  ]
  const libraryLabel =
    $menu('.bd-menu-section.is-library .bd-menu-heading strong')
      .text()
      .trim() || byId.library!.name
  const featuresLabel =
    $menu('.bd-menu-section.is-features .bd-menu-heading strong')
      .text()
      .trim() || byId.features!.name
  const navigation: OfficialNavigation = {
    pages: [],
    excluded: [
      {
        page: 'grid-playground',
        reason:
          'The source declares an interactive Grid playground, outside the component documentation pages.',
      },
    ],
  }
  const corpus: OfficialCorpus = {
    source: { repository: upstream.repository, revision: upstream.commit },
    upstreamVersion: data.meta.version,
    pages: [],
    assets: [],
  }
  const documents = new Map<string, string>()
  for (const id of ids) {
    const link = byId[id]!
    const file = `docs${link.path.replace(/\/$/, '')}.html`
    const { page, body } = frontmatter(await readFile(join(root, file), 'utf8'))
    const sourceRef = { file, revision: upstream.commit }
    const context = { site: { url: 'https://bulma.io', data }, page }
    const content = await engine.parseAndRender(prepareLiquid(body), context)
    const hero = await engine.renderFile('docs/hero.html', {
      ...context,
      include: {
        variant: 'docs',
        title: marked.parse(page.title),
        subtitle: marked.parse(link.subtitle),
        prints: page.hero_prints,
        hide_carbon: true,
      },
    })
    const modalTargets = await Promise.all(
      (page.modals ?? []).map((target: string) =>
        engine.renderFile(target, context),
      ),
    )
    const raw = `<html class="bd-theme-${page.theme}"><body>${hero}<div class="bd-docs-content">${page.markdown ? `<div class="content">${renderMarkdownPage(content)}</div>` : content}</div>${modalTargets.join('')}</body></html>`
    const $ = load(raw)
    $('.bd-vars-table,#sass-and-css-variables').remove()
    if (id === 'components-modal') {
      const tutorial = $('#javascript-implementation-example')
      tutorial.nextAll().remove()
      tutorial.remove()
      $(
        '.bd-docs-content .highlight,.bd-docs-content .bd-highlight-full',
      ).remove()
      $(
        '.bd-docs-content .message:has(a[href="#javascript-implementation-example"])',
      ).remove()
      $('.bd-docs-content > .content')
        .filter((_, node) => /^To\s+activate/.test($(node).text().trim()))
        .remove()
      const intro = $('.bd-docs-content > .content').first()
      intro.children('p,ul').not(':has(.js-modal-trigger)').remove()
      intro.prepend(
        '<p>Use <code>Modal</code> with <code>ModalTrigger</code> and <code>ModalContent</code>. The components handle opening, closing, keyboard interaction, and focus. Use <code>ModalClose</code> for a close button.</p>',
      )
    }
    if (id === 'elements-notification') {
      const tutorial = $('#javascript-example')
      tutorial.nextAll().remove()
      tutorial.remove()
    }
    $('#navbarJsExample').remove()
    const examples: OfficialExample[] = []
    const ordered = findExampleRoots($)
    let section = 'basic'
    const sectionCounts = new Map<string, number>()
    $('.bd-docs-content *').each((_, node) => {
      if (/^h[2-4]$/.test(node.name) && !$(node).closest('.bd-snippet').length)
        section =
          node.attribs.id ??
          $(node)
            .text()
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
      if (!ordered.includes(node)) return
      const ordinal = (sectionCounts.get(section) ?? 0) + 1
      sectionCounts.set(section, ordinal)
      const key = `${id}/${section}/${String(ordinal).padStart(3, '0')}`
      $(node).attr('data-source-example', key)
      const snippet = $(node).is('.bd-snippet-preview')
      const trigger = $(node).is('.js-modal-trigger')
        ? $(node)
        : $(node).find('.js-modal-trigger').first()
      const target = trigger.attr('data-target')
      const modal = target
        ? $(`[id="${target}"]`).filter('.modal').first()
        : undefined
      let html = $(node).is('.bd-snippet-preview,.column')
        ? $(node).html()!
        : $.html(node)
      let kind: OfficialExample['kind'] = snippet ? 'snippet' : 'demo'
      if (modal?.length) {
        kind = 'modal'
        $(node).attr('data-target', target!)
        html = $.html(node) + $.html(modal[0]!)
      }
      const name = exampleNames[id]?.[section]?.[ordinal - 1]
      if (!name) throw new Error(`Official example has no display name: ${key}`)
      examples.push({
        id: key,
        name,
        kind,
        selector: `[data-source-example="${key}"]`,
        html,
        sha256: hash(html),
        preview: readExamplePreview($, node),
      })
    })
    if (!examples.length)
      throw new Error(`${id}: source document has no React examples`)
    if (
      $('.bd-docs-content')
        .find('h1,h2,h3,h4,h5,h6')
        .filter(
          (_, node) =>
            !$(node).closest('.bd-snippet-preview,.bd-example,.example')
              .length && $(node).closest('[data-source-example]').length > 0,
        ).length
    )
      throw new Error(`${id}: documentation heading was claimed by an example`)
    documents.set(id, $.html())
    corpus.pages.push({
      id,
      title: page.title,
      url: `https://bulma.io${link.path}`,
      examples,
      source: sourceRef,
    })
    const group = id.split('-')[0]!
    navigation.pages.push({
      page: id,
      path:
        group === 'features'
          ? [featuresLabel, link.name]
          : [libraryLabel, byId[group]!.name, link.name],
    })
  }
  const sassFiles = (await files(root)).filter(
    (file) => file.endsWith('.scss') || file.endsWith('.sass'),
  )
  const styleKey = hash(
    (await Promise.all(sassFiles.map((file) => readFile(file, 'utf8')))).join(
      '\n',
    ),
  )
  let stylesheet: string
  try {
    const cached = JSON.parse(
      await readFile('.generated/source-styles.json', 'utf8'),
    ) as { key: string; css: string }
    if (cached.key !== styleKey) throw new Error('stale')
    stylesheet = cached.css
  } catch {
    stylesheet = (
      await compileAsync(join(root, 'docs/website.scss'), {
        loadPaths: [root],
        quietDeps: true,
        logger: { warn() {}, debug() {} },
      })
    ).css
    await mkdir('.generated', { recursive: true })
    await writeFile(
      '.generated/source-styles.json',
      JSON.stringify({ key: styleKey, css: stylesheet }),
    )
  }
  const inlineStyles = [...documents.values()]
    .map((document) => {
      const $ = load(document)
      return $('style')
        .map((_, node) => $(node).html())
        .get()
        .join('\n')
    })
    .join('\n')
  return {
    corpus,
    documents,
    navigation,
    stylesheet: stylesheet + '\n' + inlineStyles,
    decorations: compileDecorations(
      stylesheet,
      await readFile(
        new URL(import.meta.resolve('bulma/css/bulma.min.css')),
        'utf8',
      ),
    ),
  }
}

import { createHash } from 'node:crypto'
import { basename } from 'node:path'
import { load } from 'cheerio'
import postcss from 'postcss'
import selectorParser from 'postcss-selector-parser'
import { isTag, type AnyNode, type Element } from 'domhandler'
import type {
  CompiledExample,
  OfficialAsset,
  OfficialCorpus,
  OfficialPage,
} from './types'

export type OfficialDocuments = ReadonlyMap<string, string>
const hash = (value: string) => createHash('sha256').update(value).digest('hex')
const quote = JSON.stringify

type Part = {
  jsx: string
  block: boolean
  meaningful: boolean
  indentation?: boolean
}
const voidTags = new Set(['br', 'hr', 'img', 'input', 'wbr', 'col'])
const inlineTags = new Set([
  'a',
  'span',
  'strong',
  'em',
  'b',
  'i',
  'small',
  'code',
  'kbd',
  'samp',
  'sub',
  'sup',
  'abbr',
  's',
  'u',
  'mark',
  'time',
  'label',
])
const allowedTags = new Set([
  ...inlineTags,
  ...voidTags,
  'article',
  'section',
  'header',
  'footer',
  'nav',
  'aside',
  'div',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ul',
  'ol',
  'li',
  'dl',
  'dt',
  'dd',
  'blockquote',
  'figure',
  'figcaption',
  'pre',
  'table',
  'caption',
  'colgroup',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'th',
  'td',
  'button',
  'svg',
  'path',
])
const attributes: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  viewbox: 'viewBox',
}
type DocumentController = 'skeleton-cycle' | 'fixed-navbar'
const ordinaryAttributes = new Set([
  'id',
  'title',
  'role',
  'alt',
  'href',
  'src',
  'target',
  'rel',
  'type',
  'placeholder',
  'name',
  'value',
  'width',
  'height',
  'scope',
  'start',
  'span',
  'd',
  'fill',
  'xmlns',
  'viewBox',
])
const numericAttributes = new Set([
  'colSpan',
  'rowSpan',
  'tabIndex',
  'start',
  'span',
])

export function compileDocument(
  raw: string,
  page: OfficialPage,
  examples: readonly CompiledExample[],
  assets: readonly OfficialAsset[] = [],
  compileDependency?: (html: string, name: string) => string,
): string {
  const $ = load(raw)
  const root = $('.bd-docs-content')
  const hero = $('.bd-hero-body')
  if (
    root.length !== 1 ||
    hero.find('h1').length !== 1 ||
    hero.find('h2').length !== 1
  )
    throw new Error(`${page.id}: expected one document body, title and lead`)
  const location = (node: AnyNode) =>
    isTag(node)
      ? `${node.name}${node.attribs.id ? '#' + node.attribs.id : ''}${node.attribs.class ? '.' + node.attribs.class.trim().replace(/\s+/g, '.') : ''}`
      : node.type
  const fail = (node: AnyNode, message: string): never => {
    throw new Error(`${page.id}: ${location(node)}: ${message}`)
  }
  const ownership = new Map<AnyNode, string>()
  const own = (node: AnyNode, reason: string, deep = false) => {
    if (ownership.has(node))
      fail(
        node,
        `overlapping document ownership (${ownership.get(node)}, ${reason})`,
      )
    ownership.set(node, reason)
    if (deep && 'children' in node)
      for (const child of node.children) own(child, reason, true)
  }
  const slots = new Map<Element, { example: CompiledExample; inner: boolean }>()
  const removed = new Map<AnyNode, string>()
  const pairedSnippets = new Set<Element>()
  const storyById = new Map(examples.map((example) => [example.id, example]))
  if (
    storyById.size !== examples.length ||
    examples.length !== page.examples.length
  )
    throw new Error(`${page.id}: duplicate or missing compiled examples`)
  for (const example of page.examples) {
    const selected = $(example.selector)
    const node = selected[0]
    const story = storyById.get(example.id)
    if (
      selected.length !== 1 ||
      !node ||
      !isTag(node) ||
      !story ||
      !$(node).parents().toArray().includes(root[0]!)
    )
      throw new Error(
        `${page.id}: invalid example binding ${example.id} at ${example.selector}`,
      )
    if (slots.has(node)) fail(node, `duplicate example footprint ${example.id}`)
    let inner = false
    if (example.kind === 'modal') {
      const target = selected.attr('data-target')
      const matches = $('[id]').filter(
        (_, candidate) => candidate.attribs.id === target,
      )
      const modal = matches[0]
      if (
        !modal ||
        matches.length !== 1 ||
        hash($.html(node) + $.html(modal)) !== example.sha256
      )
        return fail(node, `modal source hash drift for ${example.id}`)
      removed.set(modal, `modal target for ${example.id}`)
    } else {
      const modes = [
        hash($.html(node)) === example.sha256,
        hash(selected.html() ?? '') === example.sha256,
      ]
      if (modes.filter(Boolean).length !== 1)
        fail(node, `source hash drift or ambiguous footprint for ${example.id}`)
      inner = modes[1]!
    }
    slots.set(node, { example: story, inner })
    const snippet = selected.closest('.bd-snippet')[0]
    if (snippet && isTag(snippet)) pairedSnippets.add(snippet)
  }
  for (const snippet of pairedSnippets) {
    $(snippet)
      .find('.bd-snippet-source.bd-theme-html')
      .each((_, node) => {
        if ($(node).closest('.bd-snippet')[0] === snippet)
          removed.set(node, 'paired example HTML source')
      })
    $(snippet)
      .find('.bd-snippet-example > .bd-snippet-title')
      .each((_, node) => {
        if ($(node).closest('.bd-snippet')[0] === snippet)
          removed.set(node, 'example presentation label')
      })
  }
  for (const [node, slot] of slots) {
    if (slot.inner)
      for (const child of node.children) own(child, slot.example.id, true)
    else own(node, slot.example.id, true)
  }
  for (const [node, reason] of removed) own(node, reason, true)
  const assetPaths = new Map(
    assets.map((asset) => [
      asset.url,
      `./official-assets/${basename(asset.file)}`,
    ]),
  )
  const url = (value: string, node: AnyNode) => {
    if (!value || value.startsWith('#')) return value
    const resolved = new URL(value, page.url)
    if (!['https:', 'http:', 'mailto:', 'tel:'].includes(resolved.protocol))
      fail(node, `unsupported URL ${value}`)
    return assetPaths.get(resolved.href) ?? resolved.href
  }
  const controllers = new Set<DocumentController>()
  const props = (node: Element) => {
    const output = ['data-official-prose=""']
    if (page.id === 'features-skeletons') {
      if ($(node).is('.skeleton-toggler'))
        output.push('data-official-control="skeleton-toggle"')
      if (node.attribs.id === 'js-timer')
        output.push('data-official-control-part="timer"')
      if ($(node).is('#js-toggle-skeleton .tag'))
        output.push('data-official-control-part="status"')
    }
    for (const [name, value] of Object.entries(node.attribs)) {
      if (/^on/i.test(name))
        fail(node, `event attribute ${name} is not documentation`)
      if (name === 'style') {
        const rule = postcss.parse(`document { ${value} }`).first
        if (!rule || rule.type !== 'rule')
          return fail(node, 'invalid inline style')
        const style: Record<string, string> = {}
        for (const declaration of rule.nodes) {
          if (
            declaration.type !== 'decl' ||
            declaration.important ||
            /(?:url\s*\(|expression\s*\(|@|\\)/i.test(declaration.value)
          )
            return fail(node, 'unsupported active inline style')
          const key = declaration.prop.startsWith('--')
            ? declaration.prop
            : declaration.prop.replace(/-([a-z])/g, (_, letter: string) =>
                letter.toUpperCase(),
              )
          style[key] = declaration.value
        }
        output.push(`style={${quote(style)} as React.CSSProperties}`)
        continue
      }
      if (name === 'disabled') {
        output.push('disabled')
        continue
      }
      const prop = attributes[name] ?? name
      if (
        !attributes[name] &&
        !ordinaryAttributes.has(name) &&
        !name.startsWith('aria-') &&
        !name.startsWith('data-')
      )
        fail(node, `unsupported attribute ${name}`)
      if (numericAttributes.has(prop)) {
        if (!/^-?\d+$/.test(value))
          fail(node, `invalid numeric attribute ${name}`)
        output.push(`${prop}={${Number(value)}}`)
      } else
        output.push(
          `${prop}={${quote(name === 'href' || name === 'src' ? url(value, node) : value)}}`,
        )
    }
    return output.join(' ')
  }
  const emitted: string[] = []
  const render = (
    node: AnyNode,
    heading = false,
    preserveWhitespace = false,
  ): Part[] => {
    const removedReason = removed.get(node)
    if (removedReason) return []
    const slot = isTag(node) ? slots.get(node) : undefined
    if (slot && isTag(node)) {
      emitted.push(slot.example.id)
      const canvas = `<div data-official-example=${quote(slot.example.id)}><Canvas of={${slot.example.exportName}} /></div>`
      if (slot.inner) {
        own(node, 'example contents wrapper')
        if (!$(node).is('.bd-snippet-preview'))
          return [
            {
              jsx: `<${node.name} ${props(node)}>${canvas}</${node.name}>`,
              block: true,
              meaningful: true,
            },
          ]
      }
      return [{ jsx: canvas, block: true, meaningful: true }]
    }
    if (node.type === 'comment') {
      own(node, 'source comment')
      return []
    }
    if (node.type === 'text') {
      own(node, 'text')
      if (
        /^[\t\n\f\r ]*$/.test(node.data) &&
        node.parent &&
        isTag(node.parent) &&
        ['table', 'thead', 'tbody', 'tfoot', 'tr', 'colgroup'].includes(
          node.parent.name,
        )
      )
        return []
      const text = preserveWhitespace
        ? node.data
        : node.data.replace(/[\t\f\r ]*[\n\r][\t\n\f\r ]*/g, ' ')
      return [
        {
          jsx: `{${quote(text)}}`,
          block: false,
          meaningful: /[^\t\n\f\r ]/.test(text),
          indentation:
            !preserveWhitespace &&
            /^[\t\n\f\r ]*[\n\r][\t\n\f\r ]*$/.test(node.data),
        },
      ]
    }
    if (!isTag(node)) return fail(node, 'unsupported document node')
    if (['script', 'style'].includes(node.name)) {
      const controller =
        node.name === 'script' && page.id === 'columns-gap'
          ? {
              reason: 'column gap examples use React state',
            }
          : page.id === 'components-navbar'
            ? {
                reason: 'source navbar controller',
                controller: 'fixed-navbar' as const,
              }
            : page.id === 'features-skeletons'
              ? {
                  reason: 'source skeleton controller',
                  controller: 'skeleton-cycle' as const,
                }
              : undefined
      if (!controller)
        return fail(node, 'unknown active document content requires an adapter')
      if (controller.controller) controllers.add(controller.controller)
      own(node, controller.reason, true)
      return []
    }
    if (!allowedTags.has(node.name)) fail(node, 'unsupported document element')
    own(node, 'markup')
    const isHeading = /^h[1-6]$/.test(node.name)
    const children = node.children
      .flatMap((child) =>
        render(
          child,
          heading || isHeading,
          preserveWhitespace || node.name === 'pre' || node.name === 'code',
        ),
      )
      .filter(
        (part, index, parts) =>
          !part.indentation ||
          inlineTags.has(node.name) ||
          (index > 0 &&
            index < parts.length - 1 &&
            !parts[index - 1]!.block &&
            !parts[index + 1]!.block),
      )
    if (
      (heading && node.name === 'p') ||
      ($(node).is('.bd-snippet,.bd-snippet-example') &&
        [...pairedSnippets].some(
          (snippet) =>
            snippet === node || $(node).parents().toArray().includes(snippet),
        ))
    )
      return children
    const attr = props(node)
    if (voidTags.has(node.name))
      return [
        {
          jsx: `<${node.name} ${attr} />`,
          block: node.name === 'hr',
          meaningful: true,
        },
      ]
    const wrap = (parts: Part[]): Part => ({
      jsx: `<${node.name} ${attr}>${parts.map((part) => part.jsx).join('')}</${node.name}>`,
      block: !inlineTags.has(node.name),
      meaningful: parts.some((part) => part.meaningful),
    })
    if (
      (inlineTags.has(node.name) || node.name === 'p') &&
      children.some((part) => part.block)
    ) {
      const result: Part[] = []
      let pending: Part[] = []
      const flush = () => {
        if (pending.some((part) => part.meaningful)) result.push(wrap(pending))
        pending = []
      }
      for (const part of children) {
        if (part.block) {
          flush()
          result.push(part)
        } else pending.push(part)
      }
      flush()
      return result
    }
    return [wrap(children)]
  }
  const regions = [hero[0]!, root[0]!]
  const jsx = regions
    .flatMap((node) => render(node))
    .map((part) => part.jsx)
    .join('')
  const audit = (node: AnyNode) => {
    if (!ownership.has(node)) fail(node, 'unaccounted document content')
    if ('children' in node) for (const child of node.children) audit(child)
  }
  for (const region of regions) audit(region)
  if (
    emitted.length !== page.examples.length ||
    new Set(emitted).size !== emitted.length ||
    page.examples.some((example) => !emitted.includes(example.id))
  )
    throw new Error(`${page.id}: document example coverage differs from corpus`)
  let dependency = ''
  if (controllers.has('fixed-navbar')) {
    const target = $('#navbarBottom')
    if (target.length !== 1)
      throw new Error(`${page.id}: fixed navbar dependency source hash drift`)
    if (!compileDependency)
      throw new Error(
        `${page.id}: fixed navbar dependency compiler is required`,
      )
    target.removeClass('is-hidden')
    dependency = compileDependency($.html(target[0]!), 'FixedNavbarTarget')
  }
  return `${dependency}\nfunction OfficialDocs() { return <OfficialDocument pageId=${quote(page.id)} controllers={${quote([...controllers])}}${dependency ? ' fixedNavbar={<FixedNavbarTarget />}' : ''}>${jsx}</OfficialDocument>; }`
}

export function compileDocumentStyles(
  css: string,
  documents: OfficialDocuments,
  corpus: OfficialCorpus,
): string {
  const classes = new Set<string>(['is-danger', 'is-light'])
  const tags = new Set<string>()
  const themes = new Map<string, string[]>()
  for (const page of corpus.pages) {
    const $ = load(documents.get(page.id)!)
    for (const theme of ($('html').attr('class') ?? '')
      .split(/\s+/)
      .filter((name) => name.startsWith('bd-theme-'))) {
      themes.set(theme, [...(themes.get(theme) ?? []), page.id])
    }
    for (const example of page.examples) {
      const selected = $(example.selector)
      if (example.kind === 'modal')
        $(`[id="${selected.attr('data-target')}"]`).remove()
      selected.empty()
    }
    $('.bd-hero-body,.bd-hero-body *,.bd-docs-content,.bd-docs-content *').each(
      (_, node) => {
        tags.add(node.name)
        for (const name of (node.attribs.class ?? '').split(/\s+/))
          if (name) classes.add(name)
      },
    )
  }
  const original = postcss.parse(css)
  const variables = new Map<string, string>()
  original.walkRules((rule) => {
    if (rule.selector !== ':root' || rule.parent?.type !== 'root') return
    rule.walkDecls(/^--/, (declaration) => {
      variables.set(declaration.prop, declaration.value)
    })
  })
  const themeRules = postcss.root()
  original.walkRules((rule) => {
    const ids = themes.get(rule.selector.slice(1))
    if (rule.selector.startsWith('.') && ids)
      themeRules.append(
        rule.clone({
          selector: ids
            .map((id) => `[data-official-document="${id}"]`)
            .join(','),
        }),
      )
  })
  if (themeRules.nodes.length !== themes.size)
    throw new Error('Missing official document theme rules.')
  const output = original.clone()
  output.walkAtRules((rule) => {
    if (!['media', 'supports', 'layer'].includes(rule.name)) rule.remove()
  })
  output.walkRules((rule) => {
    const selectors: string[] = []
    selectorParser((root) => {
      for (const selector of root.nodes) {
        let relevant = false
        let supported = true
        selector.walk((node) => {
          if (node.type === 'pseudo' && [':root', ':host'].includes(node.value))
            supported = false
          if (node.type === 'tag' && ['html', 'body'].includes(node.value))
            supported = false
          let parent = node.parent
          while (parent && parent.type !== 'pseudo') parent = parent.parent
          if (parent?.type === 'pseudo' && parent.value === ':not') return
          if (node.type === 'class') {
            if (!classes.has(node.value)) supported = false
            else relevant = true
          }
          if (node.type === 'tag' && tags.has(node.value)) relevant = true
        })
        if (!relevant || !supported) continue
        const compounds: (typeof selector.nodes)[] = []
        let compound: typeof selector.nodes = []
        for (const node of [...selector.nodes]) {
          if (node.type === 'combinator') {
            compounds.push(compound)
            compound = []
          } else compound.push(node)
        }
        compounds.push(compound)
        for (const nodes of compounds) {
          const marker = selectorParser.attribute({
            attribute: 'data-official-prose',
            raws: {},
            value: undefined,
          })
          const before = nodes.find((node) => node.type === 'pseudo')
          if (before) selector.insertBefore(before, marker)
          else if (nodes.length) selector.insertAfter(nodes.at(-1)!, marker)
        }
        selectors.push(selector.toString())
      }
    }).processSync(
      rule.selectors
        .map((selector) => selector.replace(/^\.bd-hero\.is-docs\s+/, ''))
        .join(','),
    )
    if (!selectors.length) rule.remove()
    else rule.selector = selectors.join(',')
  })
  output.walkAtRules((rule) => {
    if (!rule.nodes?.length) rule.remove()
  })
  // Adapt the site's html clipping without making the embedded document a scroll container.
  const base = `[data-official-document] { overflow-x: clip; --scale: 1; --theme-h: var(--bulma-primary-h); --theme-s: var(--bulma-primary-s); --theme-l: var(--bulma-primary-l); --theme-color: hsl(var(--theme-h), var(--theme-s), var(--theme-l)); font-family: var(--bulma-family-primary); color: var(--bulma-text); font-size: 16px; font-weight: 400; line-height: 1.5; }\n[data-official-prose] { box-sizing: border-box; margin: 0; padding: 0; }\n`
  const required = new Map<string, string>()
  const collect = (value: string) => {
    for (const [, name] of value.matchAll(/var\(\s*(--[\w-]+)/g)) {
      if (!name || required.has(name)) continue
      const declaration = variables.get(name)
      if (declaration === undefined) continue
      required.set(name, declaration)
      collect(declaration)
    }
  }
  const headerSpacing =
    '.bd-hero-body[data-official-prose] { margin-bottom: 2rem; }\n@media print, screen and (min-width: 769px) { .bd-hero-body[data-official-prose] { margin-bottom: 3rem; } }\n'
  collect(base + output.toString() + themeRules.toString())
  return `/* Scoped from the pinned official website stylesheet. */\n[data-official-document] {${[...required].map(([name, value]) => `${name}:${value};`).join('')}}\n${base}${themeRules}\n${output}\n/* Original bd-docs-lead gap, without the site navigation layout. */\n${headerSpacing}`
}

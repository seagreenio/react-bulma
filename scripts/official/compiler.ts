import { load, type CheerioAPI } from 'cheerio'
import postcss from 'postcss'
import selectorParser from 'postcss-selector-parser'
import { format, type Options } from 'prettier'
import { basename } from 'node:path'
import { isTag, type AnyNode, type Element } from 'domhandler'
import { helperClasses } from '../../src/helpers'
import type { OfficialNavigation } from './source'
import { compileDocument, type OfficialDocuments } from './documents'
import type {
  CompiledExample,
  CompiledPage,
  OfficialAsset,
  OfficialCorpus,
  OfficialExample,
  OfficialPage,
} from './types'

type Props = Record<string, string>
type Context = {
  page: OfficialPage
  assets: ReadonlyMap<string, string>
  example: OfficialExample
  imports: Set<string>
  states: string[]
  overrides: Map<Element, Props>
  layout: ReadonlyMap<Element, Layout>
  modalPairs: ReadonlyMap<Element, Element>
  modal?: boolean
}

type Component = { name: string; tag: string }
const components: Record<string, Component> = Object.fromEntries(
  [
    ['Block', 'div', 'block'],
    ['Box', 'div', 'box'],
    ['Button', 'button', 'button'],
    ['Buttons', 'div', 'buttons'],
    ['Content', 'div', 'content'],
    ['Delete', 'button', 'delete'],
    ['Icon', 'span', 'icon'],
    ['IconText', 'span', 'icon-text'],
    ['Image', 'figure', 'image'],
    ['Notification', 'div', 'notification'],
    ['Progress', 'progress', 'progress'],
    ['Table', 'table', 'table'],
    ['TableContainer', 'div', 'table-container'],
    ['Tag', 'span', 'tag'],
    ['Tags', 'div', 'tags'],
    ['Title', 'h1', 'title'],
    ['Subtitle', 'h2', 'subtitle'],
    ['Loader', 'span', 'loader'],
    ['SkeletonBlock', 'div', 'skeleton-block'],
    ['SkeletonLines', 'div', 'skeleton-lines'],
    ['Field', 'div', 'field'],
    ['FieldLabel', 'div', 'field-label'],
    ['FieldBody', 'div', 'field-body'],
    ['Label', 'label', 'label'],
    ['Control', 'div', 'control'],
    ['Help', 'p', 'help'],
    ['Input', 'input', 'input'],
    ['Textarea', 'textarea', 'textarea'],
    ['Select', 'div', 'select'],
    ['Checkbox', 'label', 'checkbox'],
    ['Radio', 'label', 'radio'],
    ['Checkboxes', 'div', 'checkboxes'],
    ['Radios', 'div', 'radios'],
    ['File', 'div', 'file'],
    ['Container', 'div', 'container'],
    ['Hero', 'section', 'hero'],
    ['HeroHead', 'div', 'hero-head'],
    ['HeroBody', 'div', 'hero-body'],
    ['HeroFoot', 'div', 'hero-foot'],
    ['Section', 'section', 'section'],
    ['Footer', 'footer', 'footer'],
    ['Level', 'nav', 'level'],
    ['LevelLeft', 'div', 'level-left'],
    ['LevelRight', 'div', 'level-right'],
    ['LevelItem', 'div', 'level-item'],
    ['Media', 'article', 'media'],
    ['MediaLeft', 'div', 'media-left'],
    ['MediaRight', 'div', 'media-right'],
    ['MediaContent', 'div', 'media-content'],
    ['Columns', 'div', 'columns'],
    ['Column', 'div', 'column'],
    ['SmartGrid', 'div', 'grid'],
    ['FixedGrid', 'div', 'fixed-grid'],
    ['Cell', 'div', 'cell'],
    ['Breadcrumb', 'nav', 'breadcrumb'],
    ['Card', 'div', 'card'],
    ['CardHeader', 'header', 'card-header'],
    ['CardHeaderTitle', 'p', 'card-header-title'],
    ['CardHeaderIcon', 'button', 'card-header-icon'],
    ['CardImage', 'div', 'card-image'],
    ['CardContent', 'div', 'card-content'],
    ['CardFooter', 'footer', 'card-footer'],
    ['CardFooterItem', 'a', 'card-footer-item'],
    ['Menu', 'aside', 'menu'],
    ['MenuLabel', 'p', 'menu-label'],
    ['MenuList', 'ul', 'menu-list'],
    ['Message', 'article', 'message'],
    ['MessageHeader', 'div', 'message-header'],
    ['MessageBody', 'div', 'message-body'],
    ['Pagination', 'nav', 'pagination'],
    ['PaginationList', 'ul', 'pagination-list'],
    ['PaginationLink', 'a', 'pagination-link'],
    ['PaginationPrevious', 'a', 'pagination-previous'],
    ['PaginationNext', 'a', 'pagination-next'],
    ['PaginationEllipsis', 'span', 'pagination-ellipsis'],
    ['Panel', 'nav', 'panel'],
    ['PanelHeading', 'p', 'panel-heading'],
    ['PanelTabs', 'p', 'panel-tabs'],
    ['PanelBlock', 'div', 'panel-block'],
    ['PanelIcon', 'span', 'panel-icon'],
    ['Dropdown', 'div', 'dropdown'],
    ['DropdownMenu', 'div', 'dropdown-menu'],
    ['DropdownContent', 'div', 'dropdown-content'],
    ['DropdownItem', 'button', 'dropdown-item'],
    ['DropdownDivider', 'hr', 'dropdown-divider'],
    ['Modal', 'div', 'modal'],
    ['ModalContent', 'div', 'modal-content'],
    ['ModalTitle', 'h2', 'modal-card-title'],
    ['ModalClose', 'button', 'modal-close'],
    ['ModalCard', 'div', 'modal-card'],
    ['ModalCardHead', 'header', 'modal-card-head'],
    ['ModalCardBody', 'section', 'modal-card-body'],
    ['ModalCardFoot', 'footer', 'modal-card-foot'],
    ['TabsList', 'div', 'tabs'],
    ['Navbar', 'nav', 'navbar'],
    ['NavbarBrand', 'div', 'navbar-brand'],
    ['NavbarBurger', 'button', 'navbar-burger'],
    ['NavbarMenu', 'div', 'navbar-menu'],
    ['NavbarStart', 'div', 'navbar-start'],
    ['NavbarEnd', 'div', 'navbar-end'],
    ['NavbarItem', 'a', 'navbar-item'],
    ['NavbarLink', 'a', 'navbar-link'],
    ['NavbarDropdown', 'div', 'navbar-dropdown'],
    ['NavbarDivider', 'hr', 'navbar-divider'],
  ].map(([name, tag, token]) => [token!, { name: name!, tag: tag! }]),
)

const alternativeTags: Record<string, readonly string[]> = {
  Block: ['p'],
  Box: ['form'],
  Button: ['input', 'span'],
  Buttons: ['p'],
  Control: ['p'],
  Field: ['p'],
  Icon: ['div'],
  IconText: ['div'],
  CardFooterItem: ['p'],
  LevelItem: ['a', 'p'],
  Media: ['div'],
  MediaLeft: ['figure'],
  Message: ['div'],
  Panel: ['article'],
  Navbar: ['header'],
  NavbarItem: ['div', 'button', 'span'],
  Tag: ['div', 'button'],
  TagDelete: ['a', 'button'],
  Title: ['p'],
  Subtitle: ['p'],
  Image: ['p'],
  Select: ['span'],
  ModalTitle: ['p'],
  ModalTrigger: ['a'],
  NavbarBurger: ['a', 'div', 'span'],
  NavbarDropdown: ['div'],
  TabsList: ['nav'],
  Tab: ['a'],
  DropdownItem: ['a', 'button', 'div'],
  PanelBlock: ['a', 'label'],
}
const ownedTokens = new Set([
  'dropdown-trigger',
  'modal-background',
  'file-input',
  'file-label',
  'file-cta',
  'file-icon',
  'file-name',
])
const helperByClass = new Map<string, [string, string | number | boolean]>()
for (const [key, values] of Object.entries(helperClasses)) {
  for (const [value, token] of Object.entries(values)) {
    helperByClass.set(token, [
      key,
      value === 'true' ? true : /^\d+$/.test(value) ? Number(value) : value,
    ])
  }
}
const colors = new Set([
  'white',
  'black',
  'light',
  'dark',
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
])
const sizes = new Set(['small', 'normal', 'medium', 'large'])
const colorComponents = new Set([
  'Button',
  'LinkButton',
  'InputButton',
  'Notification',
  'Progress',
  'Tag',
  'LinkTag',
  'TagDelete',
  'Help',
  'Input',
  'Textarea',
  'Select',
  'File',
  'Hero',
  'Message',
  'Panel',
  'Navbar',
])
const sizeComponents = new Set([
  'Button',
  'LinkButton',
  'InputButton',
  'Content',
  'Delete',
  'Icon',
  'Progress',
  'Tag',
  'LinkTag',
  'TagDelete',
  'FieldLabel',
  'Label',
  'Control',
  'Input',
  'Textarea',
  'Select',
  'File',
  'Hero',
  'Section',
  'Media',
  'Breadcrumb',
  'Menu',
  'Message',
  'Pagination',
  'TabsList',
  'ModalClose',
])
const booleans: Record<string, Record<string, string>> = {
  Button: {
    outlined: 'outlined',
    inverted: 'inverted',
    rounded: 'rounded',
    fullwidth: 'fullWidth',
    responsive: 'responsive',
    loading: 'loading',
    selected: 'selected',
    expanded: 'expanded',
  },
  LinkButton: {
    outlined: 'outlined',
    inverted: 'inverted',
    rounded: 'rounded',
    fullwidth: 'fullWidth',
    responsive: 'responsive',
    loading: 'loading',
    selected: 'selected',
    expanded: 'expanded',
    disabled: 'disabled',
  },
  InputButton: {
    outlined: 'outlined',
    inverted: 'inverted',
    rounded: 'rounded',
    fullwidth: 'fullWidth',
    responsive: 'responsive',
    loading: 'loading',
    selected: 'selected',
    expanded: 'expanded',
  },
  Table: {
    bordered: 'bordered',
    striped: 'striped',
    narrow: 'narrow',
    hoverable: 'hoverable',
    fullwidth: 'fullWidth',
  },
  Tag: { light: 'light', rounded: 'rounded' },
  LinkTag: { light: 'light', rounded: 'rounded' },
  TagDelete: { light: 'light', rounded: 'rounded' },
  Title: { spaced: 'spaced' },
  Subtitle: { spaced: 'spaced' },
  Input: {
    rounded: 'rounded',
    static: 'static',
    fullwidth: 'fullWidth',
    inline: 'inline',
  },
  Textarea: { fullwidth: 'fullWidth', inline: 'inline' },
  Select: {
    rounded: 'rounded',
    loading: 'loading',
    fullwidth: 'fullWidth',
    multiple: 'multiple',
    disabled: 'disabled',
  },
  File: { boxed: 'boxed', fullwidth: 'fullWidth' },
  Field: {
    horizontal: 'horizontal',
    narrow: 'narrow',
    'grouped-multiline': 'multiline',
  },
  Control: { expanded: 'expanded', loading: 'loading' },
  Columns: {
    gapless: 'gapless',
    multiline: 'multiline',
    centered: 'centered',
    vcentered: 'verticallyCentered',
  },
  Level: { mobile: 'mobile' },
  LevelItem: { narrow: 'narrow', flexible: 'flexible' },
  Hero: { bold: 'bold' },
  Section: { fullheight: 'fullHeight' },
  Pagination: { rounded: 'rounded' },
  PaginationLink: { current: 'current', disabled: 'disabled' },
  PaginationPrevious: { disabled: 'disabled' },
  PaginationNext: { disabled: 'disabled' },
  CardHeaderTitle: { centered: 'centered' },
  BreadcrumbItem: { active: 'active' },
  MenuItem: { active: 'active' },
  PanelTab: { active: 'active' },
  PanelBlock: { active: 'active', wrapped: 'wrapped' },
  Dropdown: {
    active: 'defaultOpen',
    right: 'right',
    up: 'up',
    hoverable: 'hoverable',
  },
  DropdownItem: { active: 'active' },
  TabsList: { fullwidth: 'fullWidth' },
  Navbar: { transparent: 'transparent', spaced: 'spaced' },
  NavbarItem: { active: 'active', expanded: 'expanded', tab: 'tab' },
  NavbarLink: { active: 'active', arrowless: 'arrowless' },
  NavbarDropdown: {
    right: 'right',
    boxed: 'boxed',
    hoverable: 'hoverable',
    active: 'defaultOpen',
  },
}

export const officialClassNameEscapes = [
  'is-default',
  'is-static',
  'is-skeleton',
  'has-skeleton',
  'is-selected',
  'is-left',
  'is-right',
  'is-hovered',
  'is-focused',
  'is-normal',
  'is-small',
  'is-medium',
  'is-large',
  'is-delete',
  'is-variable',
  'is-paddingless',
  'is-hoverable',
  'is-expanded',
  'is-fullwidth',
  'is-expanded',
  'is-hoverable',
  'is-fullwidth',
  'has-radius-normal',
  'has-ratio',
  'has-text-grey',
  'has-text-primary-invert',
  'has-text-primary-light-invert',
  'has-background-primary-light',
  'is-lower-alpha',
  'is-lower-roman',
  'is-upper-alpha',
  'is-upper-roman',
] as const
const escapeClasses = new Set<string>(officialClassNameEscapes)
const attributeNames: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  autofocus: 'autoFocus',
  maxlength: 'maxLength',
  minlength: 'minLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  datetime: 'dateTime',
  autocomplete: 'autoComplete',
  novalidate: 'noValidate',
  formnovalidate: 'formNoValidate',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  enctype: 'encType',
  srcset: 'srcSet',
  crossorigin: 'crossOrigin',
  referrerpolicy: 'referrerPolicy',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  viewbox: 'viewBox',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  'clip-path': 'clipPath',
  'xlink:href': 'xlinkHref',
  'xml:space': 'xmlSpace',
  preserveaspectratio: 'preserveAspectRatio',
  playsinline: 'playsInline',
  usemap: 'useMap',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
}
const booleanAttributes = new Set([
  'disabled',
  'multiple',
  'required',
  'readOnly',
  'autoFocus',
  'hidden',
  'checked',
  'selected',
  'noValidate',
  'formNoValidate',
  'allowFullScreen',
  'controls',
  'loop',
  'muted',
  'open',
  'download',
])
const numberAttributes = new Set([
  'tabIndex',
  'maxLength',
  'minLength',
  'colSpan',
  'rowSpan',
  'rows',
  'cols',
  'size',
  'start',
  'span',
])
const voidTags = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])
const q = JSON.stringify
const classes = (node: Element) =>
  (node.attribs.class ?? '').split(/\s+/).filter(Boolean)
const has = (node: AnyNode, token: string): boolean =>
  isTag(node) && classes(node).includes(token)
const elements = (node: Element) => node.children.filter(isTag)
const textContent = (node: AnyNode): string =>
  node.type === 'text'
    ? node.data
    : 'children' in node
      ? node.children.map(textContent).join('')
      : ''
const object = (props: Props) =>
  `{ ${Object.entries(props)
    .map(([key, value]) => `${/^[$\w]+$/.test(key) ? key : q(key)}: ${value}`)
    .join(', ')} }`
function fail(ctx: Context, node: Element, message: string): never {
  throw new Error(
    `${ctx.example.id}: <${node.name}${node.attribs.class ? ` class=${q(node.attribs.class)}` : ''}> ${message}`,
  )
}
function jsx(tag: string, props: Props, children = ''): string {
  const attributes = Object.entries(props)
    .map(([name, value]) =>
      value === 'true' ? ` ${name}` : ` ${name}={${value}}`,
    )
    .join('')
  return !children
    ? `<${tag}${attributes} />`
    : `<${tag}${attributes}>${children}</${tag}>`
}
function component(ctx: Context, name: string, props: Props, children = '') {
  if (props.as && !alternativeTags[name]?.includes(JSON.parse(props.as))) {
    throw new Error(
      `${ctx.example.id}: ${name} has no supported as=${props.as} adapter`,
    )
  }
  ctx.imports.add(name)
  return jsx(name, props, children)
}
function nativeProps(node: Element, ctx: Context, omit: string[] = []): Props {
  const result: Props = {}
  for (const [attribute, value] of Object.entries(node.attribs)) {
    if (
      attribute === 'class' ||
      attribute === 'data-source-example' ||
      omit.includes(attribute)
    )
      continue
    if (attribute.startsWith('on'))
      fail(
        ctx,
        node,
        `inline event attribute ${attribute} needs an explicit React behavior adapter`,
      )
    let name = attributeNames[attribute] ?? attribute
    if (name === 'style') {
      const style: Props = {}
      for (const declaration of value.split(';')) {
        const index = declaration.indexOf(':')
        if (index < 0) continue
        const key = declaration.slice(0, index).trim()
        const cssValue = declaration
          .slice(index + 1)
          .trim()
          .replace(/var\(--bulma-/g, 'var(--rb-')
          .replace(/url\(['"]?([^'")]+)['"]?\)/g, (_, url: string) => {
            const absolute = new URL(url, ctx.page.url).href
            return `url(${q(ctx.assets.get(absolute) ?? absolute)})`
          })
        style[
          key.startsWith('--')
            ? key.replace(/^--bulma-/, '--rb-')
            : key
                .replace(/^-ms-/, 'ms-')
                .replace(/-([a-z])/g, (_, letter: string) =>
                  letter.toUpperCase(),
                )
        ] = q(cssValue)
      }
      result.style = `{ ...${object(style)} }`
      continue
    }
    if (
      name === 'value' &&
      ['input', 'select', 'textarea'].includes(node.name) &&
      !(
        node.name === 'input' &&
        ['button', 'submit', 'reset'].includes(node.attribs.type ?? '')
      )
    )
      name = 'defaultValue'
    if (name === 'checked') name = 'defaultChecked'
    if (name === 'selected' && node.name === 'option') continue
    if (
      (booleanAttributes.has(name) || name === 'defaultChecked') &&
      value === ''
    )
      result[name] = 'true'
    else if (numberAttributes.has(name) && /^-?\d+$/.test(value))
      result[name] = String(Number(value))
    else if (
      (name === 'href' ||
        name === 'src' ||
        name === 'action' ||
        name === 'poster') &&
      value &&
      !/^(?:#|data:|blob:|mailto:|tel:)/.test(value)
    ) {
      const absolute = new URL(value, ctx.page.url).href
      result[name] = q(
        name === 'src' || name === 'poster'
          ? (ctx.assets.get(absolute) ?? absolute)
          : absolute,
      )
    } else result[name] = q(value)
  }
  return result
}
function styleProps(
  node: Element,
  name: string | undefined,
  base: string[],
  ctx: Context,
): Props {
  const props: Props = {}
  const styleName = name
  if (
    name === 'ModalTrigger' ||
    name === 'DropdownTrigger' ||
    name === 'ModalClose'
  )
    name = 'Button'
  const helpers: Record<string, string | number | boolean> = {}
  const remaining: string[] = []
  const tokens = classes(node)
  const responsive: Record<string, Record<string, string | number>> = {}
  const addResponsive = (key: string, value: string, breakpoint = 'base') => {
    ;(responsive[key] ??= {})[breakpoint] = /^\d+$/.test(value)
      ? Number(value)
      : value
  }
  for (const token of tokens) {
    if (base.includes(token)) continue
    if (
      !name &&
      tokens.some((value) => value.startsWith('bd-')) &&
      /^(?:is-|has-|are-)/.test(token) &&
      !helperByClass.has(token)
    ) {
      remaining.push(token)
      continue
    }
    const modifier = token.replace(/^is-/, '')
    const boolean =
      name && token.startsWith('is-') && booleans[name]?.[modifier]
    if (boolean) {
      props[boolean] = 'true'
      continue
    }
    if (
      name &&
      ['Button', 'LinkButton', 'InputButton', 'Notification'].includes(name) &&
      (['soft', 'bold'].includes(modifier) ||
        (['light', 'dark'].includes(modifier) &&
          token !==
            tokens.find(
              (value) => value.startsWith('is-') && colors.has(value.slice(3)),
            )))
    ) {
      props.tone = q(modifier)
      continue
    }
    if (
      name &&
      colorComponents.has(name) &&
      token.startsWith('is-') &&
      colors.has(modifier)
    ) {
      props.color = q(modifier)
      continue
    }
    if (
      name &&
      sizeComponents.has(name) &&
      token.startsWith('is-') &&
      sizes.has(modifier) &&
      !(name === 'ModalClose')
    ) {
      if (
        (['Tag', 'LinkTag', 'TagDelete'].includes(name) &&
          modifier === 'small') ||
        (['Delete', 'Icon', 'Progress', 'Hero'].includes(name) &&
          modifier === 'normal')
      )
        remaining.push(`rb-${token}`)
      else props.size = q(modifier)
      continue
    }
    if (
      name &&
      ['Button', 'LinkButton', 'InputButton'].includes(name) &&
      ['text', 'ghost'].includes(modifier)
    ) {
      props.variant = q(modifier)
      continue
    }
    if (
      name &&
      ['Button', 'Input', 'Textarea'].includes(name) &&
      ['hovered', 'focused', 'active'].includes(modifier)
    ) {
      props.state = q(modifier)
      continue
    }
    if ((name === 'Title' || name === 'Subtitle') && /^is-[1-6]$/.test(token)) {
      props.size = modifier
      continue
    }
    if (
      (name === 'Buttons' || name === 'Tags') &&
      /^are-(small|medium|large)$/.test(token)
    ) {
      props.size = q(token.slice(4))
      continue
    }
    if (
      (name === 'Buttons' || name === 'Tags') &&
      ['is-centered', 'is-right'].includes(token)
    ) {
      props.align = q(token === 'is-centered' ? 'center' : 'right')
      continue
    }
    if ((name === 'Buttons' || name === 'Tags') && token === 'has-addons') {
      props.addons = 'true'
      continue
    }
    if (
      name &&
      ['File', 'Breadcrumb', 'Pagination', 'TabsList'].includes(name) &&
      ['is-centered', 'is-right'].includes(token)
    ) {
      props.alignment = q(modifier)
      continue
    }
    if (
      name === 'Breadcrumb' &&
      /^has-(arrow|bullet|dot|succeeds)-separator$/.test(token)
    ) {
      props.separator = q(token.slice(4, -10))
      continue
    }
    if (name === 'Field') {
      if (token.startsWith('has-addons')) {
        props.layout = q('addons')
        if (token === 'has-addons-fullwidth') props.fullWidth = 'true'
        else if (token !== 'has-addons') props.alignment = q(token.slice(11))
        continue
      }
      if (token.startsWith('is-grouped')) {
        props.layout = q('grouped')
        if (token === 'is-grouped-multiline') props.multiline = 'true'
        else if (token !== 'is-grouped') props.alignment = q(token.slice(11))
        continue
      }
    }
    if (name === 'Control' && /^has-icons-(left|right)$/.test(token)) {
      props.icons = q(
        tokens.includes('has-icons-left') && tokens.includes('has-icons-right')
          ? 'both'
          : token.slice(10),
      )
      continue
    }
    if (name === 'Textarea' && token === 'has-fixed-size') {
      props.fixedSize = 'true'
      continue
    }
    if (name === 'Container') {
      if (/^is-(fluid|widescreen|fullhd)$/.test(token)) {
        props.width = q(modifier)
        continue
      }
      if (/^is-max-(tablet|desktop|widescreen)$/.test(token)) {
        props.maxWidth = q(token.slice(7))
        continue
      }
    }
    if (
      name === 'Hero' &&
      ['is-halfheight', 'is-fullheight', 'is-fullheight-with-navbar'].includes(
        token,
      )
    ) {
      props.height = q(
        token === 'is-halfheight'
          ? 'half'
          : token === 'is-fullheight'
            ? 'full'
            : 'full-with-navbar',
      )
      continue
    }
    if (name === 'Columns') {
      if (/^is-(mobile|tablet|desktop)$/.test(token)) {
        props.displayFrom = q(modifier)
        continue
      }
      const match =
        /^is-([0-8])(?:-(mobile|tablet(?:-only)?|touch|desktop(?:-only)?|widescreen(?:-only)?|fullhd))?$/.exec(
          token,
        )
      if (match) {
        addResponsive('gap', match[1]!, match[2])
        continue
      }
    }
    if (name === 'Column') {
      const match =
        /^is-(offset-)?(\d+|three-quarters|two-thirds|half|one-third|one-quarter|one-fifth|two-fifths|three-fifths|four-fifths|full|narrow)(?:-(mobile|tablet|touch|desktop|widescreen|fullhd))?$/.exec(
          token,
        )
      if (match) {
        addResponsive(match[1] ? 'offset' : 'width', match[2]!, match[3])
        continue
      }
    }
    if (name === 'FixedGrid') {
      if (token === 'has-auto-count') {
        props.columns = q('auto')
        continue
      }
      const match =
        /^has-(\d+)-cols(?:-(mobile|tablet|desktop|widescreen|fullhd))?$/.exec(
          token,
        )
      if (match) {
        addResponsive('columns', match[1]!, match[2])
        continue
      }
    }
    if (name === 'Cell') {
      const match =
        /^is-(col|row)-(span|start|end|from-end)-(\d+)(?:-(mobile|tablet(?:-only)?|desktop(?:-only)?|widescreen(?:-only)?|fullhd))?$/.exec(
          token,
        )
      if (match) {
        addResponsive(
          `${match[1] === 'col' ? 'column' : 'row'}${match[2]!
            .split('-')
            .map((v) => v[0]!.toUpperCase() + v.slice(1))
            .join('')}`,
          match[3]!,
          match[4],
        )
        continue
      }
    }
    if (
      name === 'TabsList' &&
      ['is-boxed', 'is-toggle', 'is-toggle-rounded'].includes(token)
    ) {
      props.variant = q(
        tokens.includes('is-toggle-rounded') ? 'toggle-rounded' : modifier,
      )
      continue
    }
    if (name === 'Navbar' && token === 'has-shadow') {
      props.shadow = 'true'
      continue
    }
    if (name === 'Navbar' && /^is-fixed-(top|bottom)$/.test(token)) {
      props.fixed = q(token.slice(9))
      continue
    }
    if (name === 'NavbarDropdown' && token === 'has-dropdown-up') {
      props.up = 'true'
      continue
    }
    if (name === 'NavbarDropdown' && token === 'has-dropdown') continue
    if (name === 'NavbarBurger' || name === 'NavbarMenu') {
      if (token === 'is-active') {
        if (name === 'NavbarBurger') props.defaultExpanded = 'true'
        continue
      }
    }
    const helper = helperByClass.get(token)
    if (helper) {
      helpers[helper[0]] = helper[1]
      continue
    }
    if (
      !name &&
      tokens.some((t) => t.startsWith('bd-')) &&
      /^(?:is-|has-)/.test(token)
    ) {
      remaining.push(token)
      continue
    }
    if (components[token] || ownedTokens.has(token))
      fail(ctx, node, `unclaimed Bulma component class ${token}`)
    if (/^(?:is-|has-|are-)/.test(token)) {
      if (escapeClasses.has(token) || (!name && colors.has(modifier)))
        remaining.push(`rb-${token}`)
      else
        fail(
          ctx,
          node,
          `unsupported modifier ${token}${name ? ` on ${name}` : ''}`,
        )
    } else remaining.push(token)
  }
  for (const [key, value] of Object.entries(responsive))
    props[key] = q(
      Object.keys(value).length === 1 && 'base' in value ? value.base : value,
    )
  if (
    styleName === 'ModalTrigger' ||
    styleName === 'DropdownTrigger' ||
    styleName === 'ModalClose'
  ) {
    for (const [key, value] of Object.entries(props)) {
      if (key !== 'className' && key !== 'helpers') {
        const text = JSON.parse(value)
        const token =
          text === true
            ? Object.entries(booleans.Button!).find(
                ([, prop]) => prop === key,
              )?.[0]
            : text
        if (token) remaining.push(`rb-is-${token}`)
        delete props[key]
      }
    }
  }
  if (Object.keys(helpers).length) {
    if (name) props.helpers = q(helpers)
    else {
      ctx.imports.add('helpers')
      props.className = `helpers(${q(helpers)})`
    }
  }
  if (remaining.length)
    props.className = props.className
      ? `[${props.className}, ${q(remaining.join(' '))}].filter(Boolean).join(' ')`
      : q(remaining.join(' '))
  return props
}
function propsFor(
  node: Element,
  name: string | undefined,
  base: string[],
  ctx: Context,
): Props {
  return {
    ...nativeProps(node, ctx),
    ...styleProps(node, name, base, ctx),
    ...ctx.overrides.get(node),
  }
}
function requireChild(
  node: Element,
  predicate: (child: Element) => boolean,
  ctx: Context,
  description: string,
) {
  const found = elements(node).filter(predicate)
  if (found.length !== 1)
    fail(
      ctx,
      node,
      `expected exactly one ${description}, found ${found.length}`,
    )
  return found[0]!
}
function children(node: Element, ctx: Context) {
  return nodes(node.children, ctx)
}
function descendants(node: Element): Element[] {
  return elements(node).flatMap((child) => [child, ...descendants(child)])
}
function state(ctx: Context, initial: string, stem: string) {
  const name = `${stem}${ctx.states.length + 1}`
  const setter = `set${name[0]!.toUpperCase()}${name.slice(1)}`
  ctx.states.push(`const [${name}, ${setter}] = useState(${initial});`)
  return [name, setter] as const
}
function wrapProps(props: Props, key: string, childProps: Props) {
  if (Object.keys(childProps).length) props[key] = object(childProps)
}

function emit(node: Element, ctx: Context): string {
  const tokens = classes(node)
  if (tokens.includes('bd-klmn')) {
    const [gap, setGap] = state(
      ctx,
      '3 as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8',
      'gap',
    )
    for (const child of descendants(node)) {
      if (has(child, 'bd-klmn-gap')) {
        const value = child.attribs['data-value']
        if (!value || !/^[0-8]$/.test(value))
          fail(ctx, child, 'column gap option requires a value from 0 to 8')
        const className = classes(child)
          .filter((name) => name !== 'bd-is-selected')
          .join(' ')
        ctx.overrides.set(child, {
          role: q('button'),
          tabIndex: '0',
          'aria-pressed': `${gap} === ${value}`,
          className: `${gap} === ${value} ? ${q(`${className} bd-is-selected`)} : ${q(className)}`,
          onMouseEnter: `() => ${setGap}(${value})`,
          onFocus: `() => ${setGap}(${value})`,
          onClick: `() => ${setGap}(${value})`,
          onKeyDown: `(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); ${setGap}(${value}); } }`,
        })
      } else if (has(child, 'bd-klmn-columns')) {
        ctx.overrides.set(child, { gap })
      } else if (child.attribs.id === 'klmnValue') {
        ctx.overrides.set(child, { children: `${gap} * 0.25 + 'rem'` })
      }
    }
  }
  const base = tokens.find((token) => components[token])
  const definition = base ? components[base] : undefined
  let name = definition?.name
  if (node.name === 'li' && node.parent && has(node.parent, 'menu-list')) {
    const anchor = requireChild(
      node,
      (child) => child.name === 'a',
      ctx,
      'menu anchor',
    )
    const nested = elements(node).filter((child) => child !== anchor)
    const props = propsFor(anchor, 'MenuItem', [], ctx)
    wrapProps(props, 'wrapperProps', propsFor(node, undefined, [], ctx))
    if (nested.length)
      props.nested = `<>${nested.map((child) => emit(child, ctx)).join('')}</>`
    return component(ctx, 'MenuItem', props, children(anchor, ctx))
  }
  if (
    node.name === 'li' &&
    elements(node).some(
      (child) =>
        has(child, 'pagination-link') || has(child, 'pagination-ellipsis'),
    )
  ) {
    const child = requireChild(
      node,
      (child) =>
        has(child, 'pagination-link') || has(child, 'pagination-ellipsis'),
      ctx,
      'pagination item',
    )
    const token = has(child, 'pagination-link')
      ? 'pagination-link'
      : 'pagination-ellipsis'
    const itemName = components[token]!.name
    const props = propsFor(child, itemName, [token], ctx)
    wrapProps(props, 'wrapperProps', propsFor(node, undefined, [], ctx))
    return component(ctx, itemName, props, children(child, ctx))
  }
  if (name === 'Image') {
    const media = requireChild(
      node,
      (child) => ['img', 'iframe', 'video'].includes(child.name),
      ctx,
      'image media',
    )
    const wrapper = propsFor(
      node,
      'Image',
      [
        'image',
        ...tokens.filter((token) =>
          /^is-(?:\d+x\d+|\d+by\d+|square|fullwidth)$/.test(token),
        ),
      ],
      ctx,
    )
    const props: Props = {}
    for (const token of tokens) {
      const size = /^is-(\d+)x\d+$/.exec(token)
      if (size) props.size = size[1]!
      else if (/^is-(\d+by\d+|square)$/.test(token))
        props.ratio = q(token.slice(3))
      else if (token === 'is-fullwidth') props.fullWidth = 'true'
    }
    if (node.name !== 'figure') props.as = q(node.name)
    wrapProps(props, 'wrapperProps', wrapper)
    if (media.name !== 'img')
      return component(ctx, 'Image', props, emit(media, ctx))
    Object.assign(props, propsFor(media, undefined, ['is-rounded'], ctx))
    props.alt ??= q('')
    if (has(media, 'is-rounded')) props.rounded = 'true'
    return component(ctx, 'Image', props)
  }
  if (name === 'Select') {
    const select = requireChild(
      node,
      (child) => child.name === 'select',
      ctx,
      'select',
    )
    const props = {
      ...nativeProps(select, ctx, ['size']),
      ...styleProps(node, 'Select', ['select'], ctx),
    }
    if (select.attribs.size)
      props.htmlSize = String(Number(select.attribs.size))
    const wrapper = nativeProps(node, ctx)
    if (props.className) {
      wrapper.className = props.className
      delete props.className
    }
    if (node.name !== 'div') props.as = q(node.name)
    wrapProps(props, 'wrapperProps', wrapper)
    const selectStyle = styleProps(select, undefined, [], ctx)
    if (selectStyle.className) props.className = selectStyle.className
    const selected = descendants(select)
      .filter(
        (option) => option.name === 'option' && 'selected' in option.attribs,
      )
      .map((option) => option.attribs.value ?? textContent(option))
    if (selected.length)
      props.defaultValue = q(
        'multiple' in select.attribs ? selected : selected[0],
      )
    return component(ctx, 'Select', props, children(select, ctx))
  }
  if (name === 'Checkbox' || name === 'Radio') {
    const input = requireChild(
      node,
      (child) => child.name === 'input',
      ctx,
      `${name.toLowerCase()} input`,
    )
    const props = {
      ...nativeProps(input, ctx, ['type']),
      ...styleProps(node, name, [base!], ctx),
    }
    const wrapper = nativeProps(node, ctx)
    if (props.className) {
      wrapper.className = props.className
      delete props.className
    }
    if ('disabled' in wrapper) {
      wrapper['aria-disabled'] = wrapper.disabled!
      delete wrapper.disabled
    }
    wrapProps(props, 'wrapperProps', wrapper)
    Object.assign(props, styleProps(input, undefined, [], ctx))
    return component(
      ctx,
      name,
      props,
      nodes(node.children.slice(node.children.indexOf(input) + 1), ctx),
    )
  }
  if (name === 'File') {
    const all = descendants(node)
    const input = all.find((child) => has(child, 'file-input'))
    const label = all.find(
      (child) => has(child, 'file-label') && child.name === 'span',
    )
    if (!input || !label)
      fail(ctx, node, 'file requires its input and visible label')
    const props = {
      ...nativeProps(input, ctx, ['type']),
      ...styleProps(node, 'File', ['file', 'has-name', 'is-empty'], ctx),
    }
    const wrapper = nativeProps(node, ctx)
    if (props.className) {
      wrapper.className = props.className
      delete props.className
    }
    wrapProps(props, 'wrapperProps', wrapper)
    const icon = all.find((child) => has(child, 'file-icon'))
    if (icon) props.icon = `<>${children(icon, ctx)}</>`
    const filename = all.find((child) => has(child, 'file-name'))
    if (filename) {
      const initial = q(textContent(filename))
      const [value, setter] = state(ctx, initial, 'filename')
      props.filename = value
      props.onChange = `(event) => ${setter}(event.currentTarget.files?.[0]?.name ?? ${initial})`
    }
    return component(ctx, 'File', props, children(label, ctx))
  }
  if (name === 'Breadcrumb') {
    const list = requireChild(
      node,
      (child) => child.name === 'ul',
      ctx,
      'breadcrumb list',
    )
    const props = propsFor(node, name, [base!], ctx)
    wrapProps(props, 'listProps', propsFor(list, undefined, [], ctx))
    const items = list.children
      .map((child) => {
        if (!isTag(child)) return nodes([child], ctx)
        if (child.name !== 'li')
          fail(ctx, child, 'breadcrumb list requires li children')
        const anchor = requireChild(
          child,
          (item) => item.name === 'a',
          ctx,
          'breadcrumb anchor',
        )
        const item = {
          ...propsFor(anchor, undefined, [], ctx),
          ...styleProps(child, 'BreadcrumbItem', [], ctx),
        }
        wrapProps(item, 'wrapperProps', nativeProps(child, ctx))
        return component(ctx, 'BreadcrumbItem', item, children(anchor, ctx))
      })
      .join('')
    return component(ctx, name, props, items)
  }
  if (name === 'FixedGrid') {
    const grid = requireChild(
      node,
      (child) => has(child, 'grid'),
      ctx,
      'inner grid',
    )
    const props = propsFor(node, name, [base!], ctx)
    wrapProps(props, 'gridProps', propsFor(grid, 'SmartGrid', ['grid'], ctx))
    return component(ctx, name, props, children(grid, ctx))
  }
  if (name === 'TabsList') {
    const container = elements(node).find((child) => has(child, 'container'))
    const list = requireChild(
      container ?? node,
      (child) => child.name === 'ul',
      ctx,
      'tab list',
    )
    const items = elements(list)
    const props = propsFor(node, name, ['tabs'], ctx)
    if (node.name !== 'div') props.as = q(node.name)
    wrapProps(props, 'listProps', propsFor(list, undefined, [], ctx))
    if (container)
      props.listWrapper = component(
        ctx,
        'Container',
        propsFor(container, 'Container', ['container'], ctx),
      )
    const tabs = items
      .map((item, index) => {
        const anchor = requireChild(
          item,
          (child) => child.name === 'a' || child.name === 'button',
          ctx,
          'tab control',
        )
        const tabProps = propsFor(anchor, undefined, [], ctx)
        tabProps.value = q(`tab-${index + 1}`)
        if (anchor.name === 'a') tabProps.as = q('a')
        wrapProps(
          tabProps,
          'wrapperProps',
          propsFor(item, undefined, ['is-active'], ctx),
        )
        return component(ctx, 'Tab', tabProps, children(anchor, ctx))
      })
      .join('')
    const active = items.findIndex((item) => has(item, 'is-active'))
    return component(
      ctx,
      'Tabs',
      { defaultValue: active < 0 ? 'null' : q(`tab-${active + 1}`) },
      component(ctx, name, props, tabs),
    )
  }
  if (has(node, 'dropdown-trigger')) {
    const trigger = requireChild(
      node,
      (child) => child.name === 'button',
      ctx,
      'dropdown trigger button',
    )
    const props = propsFor(trigger, 'DropdownTrigger', ['button'], ctx)
    wrapProps(
      props,
      'wrapperProps',
      propsFor(node, undefined, ['dropdown-trigger'], ctx),
    )
    return component(ctx, 'DropdownTrigger', props, children(trigger, ctx))
  }
  if (name === 'NavbarItem' && tokens.includes('has-dropdown')) {
    const trigger = requireChild(
      node,
      (child) => has(child, 'navbar-link'),
      ctx,
      'navbar dropdown link',
    )
    const menu = requireChild(
      node,
      (child) => has(child, 'navbar-dropdown'),
      ctx,
      'navbar dropdown menu',
    )
    const props = {
      ...propsFor(node, 'NavbarDropdown', ['navbar-item', 'has-dropdown'], ctx),
      ...styleProps(menu, 'NavbarDropdown', ['navbar-dropdown'], ctx),
    }
    if (node.name !== 'details') props.as = q(node.name)
    props.trigger = `<>${children(trigger, ctx)}</>`
    if (has(trigger, 'is-arrowless')) props.arrowless = 'true'
    wrapProps(
      props,
      'triggerProps',
      propsFor(trigger, undefined, ['navbar-link', 'is-arrowless'], ctx),
    )
    wrapProps(props, 'menuProps', nativeProps(menu, ctx))
    return component(ctx, 'NavbarDropdown', props, children(menu, ctx))
  }
  if (name === 'Modal') return modal(node, undefined, ctx)
  if (name === 'Navbar') {
    const props = propsFor(node, name, [base!], ctx)
    if (node.name !== 'nav') props.as = q(node.name)
    if (
      descendants(node).some(
        (child) =>
          (has(child, 'navbar-burger') || has(child, 'navbar-menu')) &&
          has(child, 'is-active'),
      )
    )
      props.defaultExpanded = 'true'
    return component(ctx, name, props, children(node, ctx))
  }
  if (name === 'Button' && node.name === 'a') name = 'LinkButton'

  if (name === 'Tag' && has(node, 'is-delete')) name = 'TagDelete'
  else if (name === 'Tag' && node.name === 'a') name = 'LinkTag'
  let modalFooterButton = false
  if (ctx.modal && name === 'Button') {
    let parent = node.parent
    while (parent && isTag(parent)) {
      if (has(parent, 'modal-card-foot')) {
        modalFooterButton = true
        break
      }
      parent = parent.parent
    }
  }
  if (ctx.modal && (name === 'Delete' || modalFooterButton)) name = 'ModalClose'
  if (
    !name &&
    node.name === 'a' &&
    node.parent &&
    has(node.parent, 'panel-tabs')
  )
    name = 'PanelTab'
  const props = propsFor(
    node,
    name,
    base ? [base, ...(name === 'TagDelete' ? ['is-delete'] : [])] : [],
    ctx,
  )
  if (name === 'ModalClose' && base === 'delete') props.variant = q('delete')
  if (modalFooterButton) props.variant = q('button')
  if (name === 'TagDelete') props.as = q(node.name)
  if (name === 'PanelBlock' && node.name !== 'div') props.as = q(node.name)
  else if (name === 'NavbarItem' && node.name !== 'a') props.as = q(node.name)
  else if (name === 'DropdownItem') props.as = q(node.name)
  else if (name === 'Title' || name === 'Subtitle') {
    if (/^h[1-6]$/.test(node.name)) props.level = node.name.slice(1)
    else props.as = q(node.name)
  } else if (
    name &&
    definition &&
    node.name !== definition.tag &&
    ![
      'LinkButton',
      'InputButton',
      'LinkTag',
      'TagDelete',
      'ModalClose',
      'PanelBlock',
      'NavbarItem',
    ].includes(name)
  )
    props.as = q(node.name)
  if (name === 'Input' && 'size' in node.attribs) {
    props.htmlSize = String(Number(node.attribs.size))
    if (!tokens.some((token) => /^is-(small|normal|medium|large)$/.test(token)))
      delete props.size
  }
  if (node.name === 'textarea') props.defaultValue = q(textContent(node))
  if (name === 'SkeletonLines') {
    props.lines = String(elements(node).length)
    return component(ctx, name, props)
  }
  let visibleState: string | undefined
  if (name === 'Notification' || name === 'Message') {
    const close = descendants(node).find((child) => has(child, 'delete'))
    if (close) {
      const [visible, setter] = state(ctx, 'true', 'visible')
      ctx.overrides.set(close, { onClick: `() => ${setter}(false)` })
      visibleState = visible
    }
  }
  const body =
    node.name === 'textarea' || voidTags.has(node.name)
      ? ''
      : children(node, ctx)
  if (visibleState && name)
    return `{${visibleState} && (${component(ctx, name, props, body)})}`
  if (name) return component(ctx, name, props, body)
  return jsx(node.name, props, body)
}

function modal(node: Element, trigger: Element | undefined, ctx: Context) {
  const surface = requireChild(
    node,
    (child) => has(child, 'modal-content') || has(child, 'modal-card'),
    ctx,
    'modal content or card',
  )
  const inner = { ...ctx, modal: true }
  const surfaceName = has(surface, 'modal-card') ? 'ModalCard' : 'ModalContent'
  const props = propsFor(
    surface,
    surfaceName,
    [has(surface, 'modal-card') ? 'modal-card' : 'modal-content'],
    ctx,
  )
  wrapProps(
    props,
    'wrapperProps',
    propsFor(node, undefined, ['modal', 'is-active'], ctx),
  )
  const backdrop = elements(node).find((child) =>
    has(child, 'modal-background'),
  )
  if (backdrop)
    wrapProps(
      props,
      'backdropProps',
      propsFor(backdrop, undefined, ['modal-background'], ctx),
    )
  const outside = elements(node).filter(
    (child) => child !== surface && child !== backdrop,
  )
  if (outside.length)
    props.close = `<>${outside.map((child) => emit(child, inner)).join('')}</>`
  const triggerProps = trigger
    ? propsFor(
        trigger,
        'ModalTrigger',
        ['button', 'modal-button', 'js-modal-trigger'],
        ctx,
      )
    : {}
  if (trigger && trigger.name !== 'button') triggerProps.as = q(trigger.name)
  if (trigger && !has(trigger, 'button')) triggerProps.unstyled = 'true'
  return component(
    ctx,
    'Modal',
    { defaultOpen: has(node, 'is-active') ? 'true' : 'false' },
    (trigger
      ? component(ctx, 'ModalTrigger', triggerProps, children(trigger, ctx))
      : '') + component(ctx, surfaceName, props, children(surface, inner)),
  )
}
const blockTags = new Set(
  'address article aside blockquote dd details dialog div dl dt fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr li main menu nav ol p pre section summary table tbody td tfoot th thead tr ul'.split(
    ' ',
  ),
)

const structuralPseudos = new Set([
  ':not',
  ':is',
  ':where',
  ':has',
  ':empty',
  ':first-child',
  ':last-child',
  ':only-child',
  ':nth-child',
  ':nth-last-child',
  ':first-of-type',
  ':last-of-type',
  ':only-of-type',
  ':nth-of-type',
  ':nth-last-of-type',
])

type DisplayRule = { selector: string; display: string; conditional: boolean }
type Layout = { blockBoundary: boolean; separateChildren: boolean }

export function compileDisplayRules(stylesheet: string): DisplayRule[] {
  const rules: DisplayRule[] = []
  postcss.parse(stylesheet).walkDecls('display', (declaration) => {
    const rule = declaration.parent
    if (rule?.type !== 'rule') return
    selectorParser((root) => {
      for (const selector of root.nodes) {
        let pseudoElement = false
        let conditional = rule.parent?.type !== 'root'
        selector.walkPseudos((pseudo) => {
          if (
            /^::|^:(?:before|after|first-line|first-letter)$/.test(pseudo.value)
          )
            pseudoElement = true
        })
        if (pseudoElement) continue
        for (const node of [...selector.nodes]) {
          if (node.type !== 'pseudo') continue
          let structural = structuralPseudos.has(node.value.toLowerCase())
          node.walkPseudos((nested) => {
            structural &&= structuralPseudos.has(nested.value.toLowerCase())
          })
          if (structural) continue
          conditional = true
          node.replaceWith(selectorParser.universal())
        }
        rules.push({
          selector: selector.toString(),
          display: declaration.value.toLowerCase(),
          conditional,
        })
      }
    }).processSync(rule.selector)
  })
  return rules
}

function exampleLayout($: CheerioAPI, rules: readonly DisplayRule[]) {
  const displayHelpers = Object.entries(helperClasses.display).sort(
    ([, a], [, b]) => b.length - a.length,
  )
  const candidates = new Map<
    Element,
    { values: string[]; unconditional: boolean }
  >()
  for (const rule of rules) {
    $(rule.selector).each((_, node) => {
      if (!isTag(node)) return
      const current = candidates.get(node) ?? {
        values: [],
        unconditional: false,
      }
      current.values.push(rule.display)
      current.unconditional ||= !rule.conditional && rule.display !== 'none'
      candidates.set(node, current)
    })
  }
  const result = new Map<Element, Layout>()
  $('*').each((_, node) => {
    if (!isTag(node)) return
    const candidate = candidates.get(node)
    const values = candidate?.values.slice() ?? []
    if (!candidate?.unconditional)
      values.push(blockTags.has(node.name) ? 'block' : 'inline')
    const tokens = classes(node)
    const helpers: string[] = []
    let unconditionalHelper = false
    for (const token of tokens) {
      const helper = displayHelpers.find(
        ([, value]) => token === value || token.startsWith(`${value}-`),
      )
      if (!helper) continue
      helpers.push(helper[0])
      unconditionalHelper ||= token === helper[1]
    }
    const inline = [
      ...(node.attribs.style ?? '').matchAll(
        /(?:^|;)\s*display\s*:\s*([^;]+)/gi,
      ),
    ].map(([, value]) =>
      value!
        .replace(/\s*!important\s*$/i, '')
        .trim()
        .toLowerCase(),
    )
    const displays = [
      ...(inline.length || unconditionalHelper
        ? (candidate?.values ?? [])
        : values),
      ...inline,
      ...helpers,
    ]
    const visible = displays.filter((value) => value !== 'none')
    result.set(node, {
      blockBoundary:
        displays.length > 0 &&
        displays.every((value) =>
          /^(?:block|flow-root|flex|grid|table|list-item)$/.test(value),
        ),
      separateChildren:
        visible.length > 0 &&
        visible.every((value) => /^(?:inline-)?(?:flex|grid)$/.test(value)),
    })
  })
  return result
}

function blockBoundary(
  node: AnyNode | null | undefined,
  ctx: Context,
): boolean {
  if (!node) return false
  if (node.type === 'root') return true
  return isTag(node) && ctx.layout.get(node)?.blockBoundary === true
}

function nodes(input: AnyNode[], ctx: Context): string {
  return input
    .map((node) => {
      if (
        isTag(node) &&
        has(node, 'modal') &&
        [...ctx.modalPairs.values()].includes(node)
      )
        return ''
      if (node.type === 'text') {
        for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
          if (
            isTag(ancestor) &&
            (['pre', 'code'].includes(ancestor.name) ||
              /(?:^|;)\s*white-space\s*:\s*(?:pre(?:-wrap|-line)?|break-spaces)\b/i.test(
                ancestor.attribs.style ?? '',
              ))
          )
            return `{${q(node.data)}}`
        }
        const parent = node.parent
        const whitespaceOnly = /^[\t\n\f\r ]*$/.test(node.data)
        if (
          whitespaceOnly &&
          parent &&
          isTag(parent) &&
          ['table', 'thead', 'tbody', 'tfoot', 'tr', 'colgroup'].includes(
            parent.name,
          )
        )
          return ''
        let previous = node.prev
        let next = node.next
        while (
          previous &&
          (previous.type === 'comment' ||
            (previous.type === 'text' && /^[\t\n\f\r ]*$/.test(previous.data)))
        )
          previous = previous.prev
        while (
          next &&
          (next.type === 'comment' ||
            (next.type === 'text' && /^[\t\n\f\r ]*$/.test(next.data)))
        )
          next = next.next
        const separateChildren =
          parent && isTag(parent) && ctx.layout.get(parent)?.separateChildren
        if (
          whitespaceOnly &&
          ((separateChildren &&
            !(previous?.type === 'text' && next?.type === 'text')) ||
            blockBoundary(previous, ctx) ||
            blockBoundary(next, ctx))
        )
          return ''
        let text = node.data.replace(/[\t\n\f\r ]+/g, ' ')
        if (blockBoundary(parent, ctx) || separateChildren) {
          if (!previous || (separateChildren && previous.type !== 'text'))
            text = text.replace(/^ /, '')
          if (!next || (separateChildren && next.type !== 'text'))
            text = text.replace(/ $/, '')
        }
        if (!text) return ''
        if (text === ' ') return "{' '}"
        const escaped = text.replace(/^ | $/g, '').replace(
          /[&<>{}\u00a0]/g,
          (character) =>
            ({
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '{': '&#123;',
              '}': '&#125;',
              '\u00a0': '&nbsp;',
            })[character]!,
        )
        return `${text.startsWith(' ') ? "{' '}" : ''}${escaped}${text.endsWith(' ') ? "{' '}" : ''}`
      }
      if (node.type === 'comment') return ''
      if (!isTag(node)) return ''
      if (
        node.name === 'script' &&
        ctx.page.id === 'form-file' &&
        ctx.imports.has('File')
      ) {
        const source =
          'const fileInput = document.querySelector("#file-js-example input[type=file]"); fileInput.onchange = () => { if (fileInput.files.length > 0) { const fileName = document.querySelector("#file-js-example .file-name"); fileName.textContent = fileInput.files[0].name; } };'
        if (textContent(node).replace(/\s/g, '') === source.replace(/\s/g, ''))
          return ''
      }
      if (node.name === 'script' || node.name === 'style')
        fail(
          ctx,
          node,
          'inline script/style requires a source documentation adapter',
        )
      const dialog = ctx.modalPairs.get(node)
      if (dialog) return modal(dialog, node, ctx)
      return emit(node, ctx)
    })
    .join('')
}

function namedImport(names: ReadonlySet<string>, from: string) {
  return names.size
    ? `import { ${[...names].sort().join(', ')} } from ${q(from)};\n`
    : ''
}

export async function compilePage(
  page: OfficialPage,
  assets: OfficialAsset[] = [],
  title = page.title,
  document?: string,
  formatOptions: Options = {},
  displayRules: readonly DisplayRule[] = [],
): Promise<CompiledPage> {
  const assetPaths = new Map(
    assets.map((asset) => [
      asset.url,
      `./official-assets/${basename(asset.file)}`,
    ]),
  )
  const functions: string[] = []
  const stories: string[] = []
  const pageImports = new Set<string>()
  let usesState = false
  const compileDemo = (example: OfficialExample, name: string) => {
    const $ = load(example.html, {}, false)
    const modalPairs = new Map<Element, Element>()
    const ctx: Context = {
      page,
      assets: assetPaths,
      example,
      imports: new Set(),
      states: [],
      overrides: new Map(),
      layout: exampleLayout($, displayRules),
      modalPairs,
    }
    for (const trigger of $(
      '.js-modal-trigger[data-target],.modal-button[data-target]',
    ).toArray()) {
      const dialogs = $('.modal')
        .toArray()
        .filter(
          (dialog) => dialog.attribs.id === trigger.attribs['data-target'],
        )
      if (dialogs.length !== 1)
        fail(ctx, trigger, 'modal trigger requires exactly one matching dialog')
      modalPairs.set(trigger, dialogs[0]!)
    }
    const body = nodes($.root().contents().toArray(), ctx)
    for (const name of ctx.imports) pageImports.add(name)
    if (ctx.states.length) usesState = true
    const fn = `function ${name}() {\n${ctx.states.map((line) => `  ${line}\n`).join('')}  return (<>${body}</>);\n}`
    return { fn, ctx }
  }
  const examples: CompiledExample[] = []
  const names = new Set<string>()
  for (const example of page.examples) {
    const words = example.name.match(/[A-Za-z0-9]+/g)
    if (!words?.length)
      throw new Error(`Example needs a descriptive name: ${example.id}`)
    const name = words
      .map((word) => word[0]!.toUpperCase() + word.slice(1))
      .join('')
    const baseName = /^\d/.test(name) ? `With${name}` : name
    if (names.has(baseName))
      throw new Error(`Duplicate example name in ${page.id}: ${example.name}`)
    names.add(baseName)
    const exportName = `${baseName}Story`
    const functionName = `${baseName}Demo`
    const { fn, ctx } = compileDemo(example, functionName)
    const source = await format(
      `${ctx.states.length ? "import { useState } from 'react';\n" : ''}${namedImport(ctx.imports, '@seagreenio/react-bulma')}\n${fn}\n`,
      { ...formatOptions, parser: 'typescript' },
    )
    functions.push(fn)
    stories.push(
      `export const ${exportName} = {\n  name: ${q(example.name)},\n  parameters: { official: { id: ${q(example.id)} }, docs: { source: { code: ${q(source)}, language: 'tsx', type: 'code' } } },\n  render: ${functionName},\n} satisfies StoryObj;`,
    )
    examples.push({
      id: example.id,
      exportName,
    })
  }
  const docs =
    document === undefined
      ? ''
      : compileDocument(
          document,
          page,
          examples,
          assets,
          (html, name) =>
            compileDemo(
              {
                id: `${page.id}/dependency/fixed-navbar`,
                name,
                html,
                selector: '#navbarBottom',
                kind: 'demo',
                sha256: '',
              },
              name,
            ).fn,
        )
  return {
    id: page.id,
    source: `import type { Meta, StoryObj } from '@storybook/react-vite';\n${docs ? "import { Canvas } from '@storybook/addon-docs/blocks';\nimport { OfficialDocument } from '../document';\n" : ''}${usesState ? "import { useState } from 'react';\n" : ''}${namedImport(pageImports, '../../../src')}import { officialPage } from '../support';\n\nconst meta = { ...officialPage(${q({ id: page.id, title: page.title, url: page.url })}${docs ? ', OfficialDocs' : ''}), tags: ['autodocs'], id: ${q('official-' + page.id)}, title: ${q(title)} } satisfies Meta;\nexport default meta;\n\n${docs}\n\n${functions.join('\n\n')}\n\n${stories.join('\n\n')}\n`,
    examples,
  }
}

export async function compileCorpus(
  corpus: OfficialCorpus,
  documents: OfficialDocuments,
  navigation?: OfficialNavigation,
  formatOptions: Options = {},
  stylesheet = '',
): Promise<CompiledPage[]> {
  const displayRules = compileDisplayRules(stylesheet)
  return Promise.all(
    corpus.pages.map((page) => {
      const document = documents.get(page.id)
      if (document === undefined)
        throw new Error(`Missing official document: ${page.id}`)
      return compilePage(
        page,
        corpus.assets,
        navigation?.pages
          .find((entry) => entry.page === page.id)
          ?.path.join('/') ?? page.title,
        document,
        formatOptions,
        displayRules,
      )
    }),
  )
}

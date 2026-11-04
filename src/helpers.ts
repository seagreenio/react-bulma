import { defaultPrefix, type Prefix } from './config'

const spacing = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
} as const
const margin = { ...spacing, auto: 'auto' } as const

export const colors = {
  white: 'white',
  black: 'black',
  light: 'light',
  dark: 'dark',
  primary: 'primary',
  link: 'link',
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
} as const

function suffixes<const T extends Record<string | number, string>>(
  start: string,
  values: T,
): { [K in keyof T]: string } {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, `${start}${value}`]),
  ) as { [K in keyof T]: string }
}

export const helperClasses = {
  m: suffixes('m-', margin),
  mt: suffixes('mt-', margin),
  mr: suffixes('mr-', margin),
  mb: suffixes('mb-', margin),
  ml: suffixes('ml-', margin),
  mx: suffixes('mx-', margin),
  my: suffixes('my-', margin),
  p: suffixes('p-', spacing),
  pt: suffixes('pt-', spacing),
  pr: suffixes('pr-', spacing),
  pb: suffixes('pb-', spacing),
  pl: suffixes('pl-', spacing),
  px: suffixes('px-', spacing),
  py: suffixes('py-', spacing),
  textAlign: {
    left: 'has-text-left',
    center: 'has-text-centered',
    right: 'has-text-right',
    justify: 'has-text-justified',
  },
  textWeight: suffixes('has-text-weight-', {
    light: 'light',
    normal: 'normal',
    medium: 'medium',
    semibold: 'semibold',
    bold: 'bold',
    extrabold: 'extrabold',
  }),
  textSize: suffixes('is-size-', {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
  }),
  textColor: suffixes('has-text-', colors),
  backgroundColor: suffixes('has-background-', colors),
  display: suffixes('is-', {
    block: 'block',
    flex: 'flex',
    inline: 'inline',
    'inline-block': 'inline-block',
    'inline-flex': 'inline-flex',
    grid: 'grid',
  }),
  hidden: {
    true: 'is-hidden',
    mobile: 'is-hidden-mobile',
    tablet: 'is-hidden-tablet',
    'tablet-only': 'is-hidden-tablet-only',
    touch: 'is-hidden-touch',
    desktop: 'is-hidden-desktop',
    'desktop-only': 'is-hidden-desktop-only',
    widescreen: 'is-hidden-widescreen',
    'widescreen-only': 'is-hidden-widescreen-only',
    fullhd: 'is-hidden-fullhd',
  },
  flexDirection: suffixes('is-flex-direction-', {
    row: 'row',
    'row-reverse': 'row-reverse',
    column: 'column',
    'column-reverse': 'column-reverse',
  }),
  flexWrap: suffixes('is-flex-wrap-', {
    nowrap: 'nowrap',
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse',
  }),
  justifyContent: suffixes('is-justify-content-', {
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    center: 'center',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly',
  }),
  alignItems: suffixes('is-align-items-', {
    stretch: 'stretch',
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    center: 'center',
    baseline: 'baseline',
  }),
} as const

export type Helpers = {
  readonly [K in keyof typeof helperClasses]?: K extends 'hidden'
    ? boolean | Exclude<keyof (typeof helperClasses)[K], 'true'>
    : keyof (typeof helperClasses)[K]
}

export function helperNames(prefix: Prefix, values: Helpers = {}): string {
  const result: string[] = []
  for (const key of Object.keys(helperClasses) as (keyof Helpers)[]) {
    const value = values[key]
    if (value === undefined || value === false) continue
    const variants: Readonly<Record<string, string>> = helperClasses[key]
    const name = variants[String(value)]
    if (name) result.push(`${prefix}${name}`)
  }
  return result.join(' ')
}

export function helpers(values?: Helpers): string {
  return helperNames(defaultPrefix, values)
}

export function createHelpers(prefix: Prefix) {
  return (values?: Helpers) => helperNames(prefix, values)
}

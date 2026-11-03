export interface BulmaConfig {
  readonly prefix?: string
}

declare const prefixBrand: unique symbol
export type Prefix = string & { readonly [prefixBrand]: true }

export function resolvePrefix(config: BulmaConfig = {}): Prefix {
  const prefix = config.prefix ?? 'rb-'
  if (
    typeof prefix !== 'string' ||
    !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*-$/.test(prefix)
  ) {
    throw new TypeError(
      'Bulma prefix must use lowercase ASCII letters and digits, separated by hyphens, and end in a hyphen (for example "my-ui-").',
    )
  }
  return prefix as Prefix
}

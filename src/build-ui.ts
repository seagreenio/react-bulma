import { resolvePrefix, type BulmaConfig } from './config'
import { uiComponents } from './ui-manifest'

export function buildUI(config: BulmaConfig = {}): string {
  const prefix = resolvePrefix(config)
  const imports = new Set(['resolvePrefix', 'createHelpers'])
  const families = new Set<string>()
  const declarations: string[] = []

  for (const [name, family] of Object.entries(uiComponents)) {
    if (family === null) {
      imports.add(`create${name}`)
      declarations.push(
        `export const ${name} = /* @__PURE__ */ create${name}(prefix)`,
      )
    } else {
      const constructor = `create${family[0]!.toUpperCase()}${family.slice(1)}`
      imports.add(constructor)
      families.add(family)
      declarations.push(
        `export const ${name} = /* @__PURE__ */ (() => ${family}.${name})()`,
      )
    }
  }

  return [
    "'use client'",
    '',
    'import {',
    ...[...imports].map((name) => `  ${name},`),
    "} from '@seagreenio/react-bulma/factories'",
    '',
    `const prefix = resolvePrefix({ prefix: ${JSON.stringify(prefix)} })`,
    ...[...families].map(
      (family) =>
        `const ${family} = /* @__PURE__ */ create${family[0]!.toUpperCase()}${family.slice(1)}(prefix)`,
    ),
    '',
    'export const helpers = /* @__PURE__ */ createHelpers(prefix)',
    ...declarations,
    '',
  ].join('\n')
}

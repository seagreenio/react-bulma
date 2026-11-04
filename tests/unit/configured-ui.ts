import { buildUI } from '../../src/build-ui'
import type { BulmaConfig } from '../../src/config'

let moduleId = 0

export async function generateTestUI(
  config: BulmaConfig,
): Promise<typeof import('../../src')> {
  const source = buildUI(config).replace(
    "'@seagreenio/react-bulma/factories'",
    JSON.stringify(
      new URL('../../src/component-factories.ts', import.meta.url).href,
    ),
  )
  const moduleSource = `${source}\n//# sourceURL=react-bulma-test-${++moduleId}.js\n`
  return import(
    `data:text/javascript;base64,${Buffer.from(moduleSource).toString('base64')}`
  )
}

import { buildUI } from '../src/build-ui'
import { customConfig } from '../tests/browser/custom-config'

await Bun.write(
  new URL('../.generated/custom-ui.ts', import.meta.url),
  buildUI(customConfig),
)

await Bun.write(
  new URL('../.generated/reserved-ui.ts', import.meta.url),
  buildUI({ prefix: 'is-' }),
)

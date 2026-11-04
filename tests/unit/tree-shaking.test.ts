import { afterAll, beforeAll, expect, test } from 'bun:test'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { build as buildPackage } from 'tsdown'
import { build } from 'vite'
import { build as buildEsbuild } from 'esbuild'
import packageConfig from '../../tsdown.config'
import { buildUI } from '../../src/styles'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import type * as UI from '../../src'

let outputDirectory: string
let entry: string
let configuredEntry: string
let configured: typeof UI
let secondConfigured: typeof UI

beforeAll(async () => {
  await mkdir('.generated', { recursive: true })
  outputDirectory = await mkdtemp(
    join(process.cwd(), '.generated/tree-shaking-test-'),
  )
  await buildPackage({
    ...packageConfig,
    dts: false,
    outDir: outputDirectory,
    logLevel: 'error',
  })
  entry = join(outputDirectory, 'index.js')
  configuredEntry = join(outputDirectory, 'configured-ui.ts')
  const source = buildUI({ prefix: 'custom-' })
  await writeFile(configuredEntry, source)
  const executable = source.replace(
    "'@seagreenio/react-bulma/factories'",
    JSON.stringify(join(outputDirectory, 'component-factories.js')),
  )
  const localEntry = join(outputDirectory, 'configured-local.ts')
  const secondEntry = join(outputDirectory, 'configured-second.ts')
  await writeFile(localEntry, executable)
  await writeFile(secondEntry, executable)
  configured = await import(localEntry)
  secondConfigured = await import(secondEntry)
}, 30_000)

afterAll(async () => {
  if (outputDirectory)
    await rm(outputDirectory, { recursive: true, force: true })
})

test('generated components and helpers use the configured prefix', () => {
  expect(configured.helpers({ mt: 0 })).toBe('custom-mt-0')
  const html = renderToStaticMarkup(
    createElement(
      configured.BulmaRoot,
      { theme: 'dark' },
      createElement(
        configured.Button,
        { type: 'submit', color: 'primary' },
        'Save',
      ),
    ),
  )
  expect(html).toContain('class="custom-root custom-theme-dark"')
  expect(html).toContain('class="custom-button custom-is-primary"')
  expect(html).toContain('type="submit"')
  expect(configured.Button).toBe(configured.Button)
})

test('separately generated modules keep their contexts isolated with the same prefix', () => {
  const html = renderToStaticMarkup(
    createElement(
      configured.Navbar,
      { defaultExpanded: true },
      createElement(secondConfigured.NavbarBurger),
    ),
  )
  expect(html).toContain('aria-expanded="false"')
  expect(configured.Navbar).not.toBe(secondConfigured.Navbar)
})

test('UI generation rejects invalid prefixes before emitting a module', () => {
  expect(() => buildUI({ prefix: 'bad' })).toThrow(TypeError)
})

test.each([
  ['Button', 'Button', 'Button', [], false],
  ['helpers', 'helpers', 'helpers({ mt: 4 })', [], false],
  ['Modal', 'Modal', 'Modal', ['dialog'], false],
  ['Dropdown', 'Dropdown', 'Dropdown', ['menu'], false],
  ['Tabs', 'Tabs', 'Tabs', ['tabs'], false],
  ['custom Button', 'Button', 'Button', [], true],
  ['custom helpers', 'helpers', 'helpers({ mt: 4 })', [], true],
  ['custom Modal', 'Modal', 'Modal', ['dialog'], true],
  ['custom Dropdown', 'Dropdown', 'Dropdown', ['menu'], true],
  ['custom Tabs', 'Tabs', 'Tabs', ['tabs'], true],
] as const)(
  '%s excludes unused Base UI families from the consumer bundle',
  async (_label, name, value, allowedFamilies, configured) => {
    const result = await build({
      configFile: false,
      logLevel: 'silent',
      resolve: {
        alias: {
          '@seagreenio/react-bulma/factories': join(
            outputDirectory,
            'component-factories.js',
          ),
        },
      },
      plugins: [
        {
          name: 'tree-shaking-entry',
          resolveId: (id) => (id === 'tree-shaking-entry' ? '\0entry' : null),
          load: (id) =>
            id === '\0entry'
              ? `import { ${name} } from ${JSON.stringify(configured ? configuredEntry : entry)}; globalThis.__treeShakingProbe = ${value};`
              : null,
        },
      ],
      build: {
        write: false,
        minify: false,
        rolldownOptions: {
          input: 'tree-shaking-entry',
          external: [/^react(?:\/|$)/, /^react-dom(?:\/|$)/],
        },
      },
    })
    if (Array.isArray(result) || !('output' in result))
      throw new Error('Expected a consumer bundle.')
    const modules = result.output.flatMap((output) =>
      output.type === 'chunk'
        ? Object.entries(output.modules)
            .filter(([, module]) => module.renderedLength > 0)
            .map(([id]) => id)
        : [],
    )
    expect(
      result.output.some(
        (output) =>
          output.type === 'chunk' && output.code.includes('__treeShakingProbe'),
      ),
    ).toBe(true)
    const baseUI = modules.filter((id) => id.includes('/@base-ui/'))
    if (allowedFamilies.length === 0) expect(baseUI).toEqual([])
    for (const family of ['dialog', 'menu', 'tabs']) {
      const includesFamily = baseUI.some((id) =>
        id.includes(`/@base-ui/react/${family}/`),
      )
      expect(includesFamily).toBe(
        (allowedFamilies as readonly string[]).includes(family),
      )
    }
    if (configured) {
      const esbuild = await buildEsbuild({
        stdin: {
          contents: `import { ${name} } from ${JSON.stringify(configuredEntry)}; globalThis.__treeShakingProbe = ${value};`,
          resolveDir: process.cwd(),
        },
        plugins: [
          {
            name: 'configured-factories',
            setup(build) {
              build.onResolve(
                { filter: /^@seagreenio\/react-bulma\/factories$/ },
                () => ({
                  path: join(outputDirectory, 'component-factories.js'),
                }),
              )
            },
          },
        ],
        bundle: true,
        write: false,
        minify: true,
        format: 'esm',
        metafile: true,
        logLevel: 'silent',
        external: ['react', 'react/*', 'react-dom', 'react-dom/*'],
      })
      const retained = Object.values(esbuild.metafile.outputs).flatMap(
        (output) =>
          Object.entries(output.inputs)
            .filter(([, input]) => input.bytesInOutput > 0)
            .map(([id]) => id),
      )
      for (const family of ['dialog', 'menu', 'tabs']) {
        expect(
          retained.some((id) => id.includes(`/@base-ui/react/${family}/`)),
        ).toBe((allowedFamilies as readonly string[]).includes(family))
      }
    }
  },
  30_000,
)

import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.tsx', 'src/styles.ts', 'src/component-factories.ts'],
  format: {
    esm: { unbundle: true },
    cjs: {
      entry: {
        index: 'src/index.tsx',
        'component-factories': 'src/component-factories.ts',
      },
    },
  },
  dts: true,
  clean: true,
  outputOptions: {
    banner: (chunk) =>
      chunk.isEntry && chunk.name === 'index' ? "'use client';" : '',
  },
  deps: { neverBundle: ['react', 'react/jsx-runtime', 'sass', 'postcss'] },
  outExtensions: ({ format }) =>
    format === 'cjs'
      ? { js: '.cjs', dts: '.d.cts' }
      : { js: '.js', dts: '.d.ts' },
})

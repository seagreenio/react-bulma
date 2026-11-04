import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.tsx', 'src/styles.ts'],
  format: {
    esm: {},
    cjs: { entry: { index: 'src/index.tsx' } },
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

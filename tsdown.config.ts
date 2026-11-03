import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.tsx', 'src/styles.ts'],
  format: 'esm',
  dts: true,
  clean: true,
  outputOptions: {
    banner: (chunk) =>
      chunk.isEntry && chunk.name === 'index' ? "'use client';" : '',
  },
  deps: { neverBundle: ['react', 'react/jsx-runtime', 'sass', 'postcss'] },
  outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
});

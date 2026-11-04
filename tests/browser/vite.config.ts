import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@seagreenio/react-bulma/factories': fileURLToPath(
        new URL('../../src/component-factories.ts', import.meta.url),
      ),
    },
  },
  server: { host: '127.0.0.1', port: 4173, strictPort: true },
})

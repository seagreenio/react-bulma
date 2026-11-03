import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/browser',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  use: {
    channel: 'chrome',
    baseURL: 'http://127.0.0.1:4173',
    viewport: { width: 1100, height: 850 },
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'bunx --no-install vite --config tests/browser/vite.config.ts',
    url: 'http://127.0.0.1:4173/tests/browser/',
    reuseExistingServer: false,
  },
})

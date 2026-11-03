import type { StorybookConfig } from '@storybook/react-vite'
import remarkGfm from 'remark-gfm'

const config: StorybookConfig = {
  stories: [
    '../stories/*.mdx',
    '../stories/official/generated/**/*.stories.tsx',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: '@storybook/react-vite',
  staticDirs: [
    { from: '../assets', to: '/brand' },
    { from: '../.generated/official-assets', to: '/official-assets' },
  ],
}

export default config

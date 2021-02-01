module.exports = {
  stories: ['../stories/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-storysource', '@storybook/addon-viewport'],
  refs: {
    rollup: { disable: true },
    '@rollup/plugin-node-resolve': { disable: true },
  },
}

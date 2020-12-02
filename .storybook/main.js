module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-storysource'],
  refs: {
    rollup: { disable: true },
    '@rollup/plugin-node-resolve': { disable: true },
  },
}

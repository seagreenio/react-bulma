module.exports = {
  stories: ['../stories/**/*.stories.ts[x]'],
  addons: ['@storybook/addon-storysource'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: require.resolve('babel-loader'),
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}

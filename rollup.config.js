import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

const peerDependencies = pkg.peerDependencies
const dependencies = pkg.dependencies

const external = Object.keys({
  ...peerDependencies,
  ...dependencies,
}).concat(['@babel/runtime/helpers/extends'])
const extensions = ['.ts', '.tsx']

const plugins = [
  resolve({
    extensions,
  }),
  commonjs(),
  babel({
    extensions,
    exclude: 'node_modules/**',
    babelHelpers: 'runtime',
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            lib: './src/lib',
          },
        },
      ],
      '@babel/plugin-transform-runtime',
      [
        '@g1eny0ung/transform-react-handled-props',
        {
          commonProps: ['as', 'className'],
          ignoredProps: ['children'],
        },
      ],
      ['transform-react-remove-prop-types', { removeImport: true }],
    ],
  }),
]

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    external,
    output: {
      file: pkg.main,
      format: 'cjs',
      indent: false,
    },
    plugins,
  },
  // ES
  {
    input: 'src/index.ts',
    external,
    output: {
      file: pkg.module,
      format: 'es',
      indent: false,
    },
    plugins,
  },
]

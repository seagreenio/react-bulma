import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'

const dependencies = pkg.dependencies
const peerDependencies = pkg.peerDependencies
// // For UMD
// const globals = peerDependencies
const external = Object.keys({
  ...dependencies,
  ...peerDependencies,
})
const extensions = ['.ts', '.tsx']

const plugins = [
  resolve({
    extensions,
  }),
  babel({
    extensions,
    exclude: 'node_modules/**',
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
      [
        'transform-react-handled-props',
        {
          ignoredProps: ['children'],
        },
      ],
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

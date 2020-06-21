import { differenceObject } from './utils'

// Reference: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getUnhandledProps.js
export default function getUnhandledProps(
  C: React.FunctionComponent<unknown> | React.ComponentClass<unknown>,
  props: { [key: string]: any }
) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  return differenceObject(props, (C as any).handledProps)
}

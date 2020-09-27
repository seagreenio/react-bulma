import _difference from 'lodash.difference'

// Reference: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getUnhandledProps.js
export default function getUnhandledProps(
  C: React.FunctionComponent<unknown>,
  props: Record<string, any>
) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  return _difference(Object.keys(props), (C as any).handledProps).reduce(
    (acc: Record<string, any>, prop) => {
      acc[prop] = props[prop]

      return acc
    },
    {}
  )
}

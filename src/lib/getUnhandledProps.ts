// Reference: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getUnhandledProps.js
function getUnhandledProps(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>,
  props: any
) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  const handledProps = (Component as any).handledProps

  return Object.keys(props).reduce((acc, prop) => {
    if (handledProps.indexOf(prop) === -1) {
      acc[prop] = props[prop]
    }

    return acc
  }, {} as { [key: string]: any })
}

export default getUnhandledProps

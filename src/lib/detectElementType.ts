import React from 'react'

interface Props {
  as?: string
  href?: string
}

// Reference: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getElementType.js
function detectElementType(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>,
  props: Props
) {
  const defaultProps = Component.defaultProps as Pick<Props, 'as'>

  if (props.as && props.as !== defaultProps.as) {
    return (props.as as unknown) as keyof JSX.IntrinsicElements
  }

  if (props.href) {
    return 'a'
  }

  return ((defaultProps.as || 'div') as unknown) as keyof JSX.IntrinsicElements
}

export default detectElementType

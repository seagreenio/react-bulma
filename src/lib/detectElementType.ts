interface Props {
  as?: string
  href?: string
}

// Reference: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getElementType.js
export default function detectElementType(Component: React.FunctionComponent<any>, props: Props) {
  const defaultProps = Component.defaultProps

  if (props.as && props.as !== defaultProps?.as) {
    return props.as as keyof JSX.IntrinsicElements
  }

  if (props.href) {
    return 'a'
  }

  return (defaultProps?.as || 'div') as keyof JSX.IntrinsicElements
}

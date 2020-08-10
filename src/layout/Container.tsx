import Responsive, { ResponsiveType } from 'types/Responsive'

import CommonProps from 'types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ContainerProps extends CommonProps {
  fluid?: boolean
  breakpoint?: Responsive | ResponsiveType
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const rest = getUnhandledProps(Container, props)
  const ElementType = detectElementType(Container, props)
  const classes = cx('container', className, {
    [`is-fluid`]: props.fluid,
    [`is-${props.breakpoint}`]: props.breakpoint,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Container.defaultProps = {
  as: 'div',
  className: undefined,
  fluid: undefined,
  breakpoint: undefined,
}

export default Container

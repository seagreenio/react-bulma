import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import CommonProps from '../types/CommonProps'

export type BoxProps = CommonProps

const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Box, props)
  const ElementType = detectElementType(Box, props)
  const classes = cx('box', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Box.defaultProps = {
  as: 'div',
  className: undefined,
}

export default Box

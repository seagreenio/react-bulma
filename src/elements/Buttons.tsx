import CommonProps from '../types/CommonProps'
import React from 'react'
import Size from '../types/Size'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'

export interface ButtonsProps extends Omit<CommonProps, 'size'> {
  size?: Exclude<Size, Size.Normal> | string
}

const Buttons: React.FC<ButtonsProps> = ({ children, className, ...props }) => {
  const ElementType = detectElementType(Buttons, props)
  const classes = cx('buttons', className, {
    [`are-${props.size}`]: props.size,
  })

  return <ElementType className={classes}>{children}</ElementType>
}

Buttons.defaultProps = {
  as: 'div',
  className: undefined,
  size: undefined,
}

export default Buttons

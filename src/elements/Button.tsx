import Color from '../types/Color'
import CommonProps from '../types/CommonProps'
import React from 'react'
import Size from '../types/Size'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ButtonProps extends Omit<CommonProps, 'size'> {
  color?: Color | string
  light?: boolean
  size?: Size | string
  fullwidth?: boolean
  outlined?: boolean
  inverted?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Button, props)
  const ElementType = detectElementType(Button, props)
  const classes = cx('button', className, {
    [`is-${props.color}`]: props.color,
    'is-light': props.light,
    [`is-${props.size}`]: props.size,
    'is-fullwidth': props.fullwidth,
    'is-outlined': props.outlined,
    'is-inverted': props.inverted,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Button.defaultProps = {
  as: 'button',
  className: undefined,
  color: undefined,
  light: undefined,
  size: undefined,
  fullwidth: undefined,
  outlined: undefined,
  inverted: undefined,
}

export default Button

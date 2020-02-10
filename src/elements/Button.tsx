import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ButtonProps extends Omit<CommonProps, 'size'> {
  color?: Color | ColorType
  light?: boolean
  size?: Size | SizeType
  fullwidth?: boolean
  outlined?: boolean
  inverted?: boolean
  rounded?: boolean
  hovered?: boolean
  focused?: boolean
  active?: boolean
  loading?: boolean
  static?: boolean
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
    'is-rounded': props.rounded,
    'is-hovered': props.hovered,
    'is-focused': props.focused,
    'is-active': props.active,
    'is-loading': props.loading,
    'is-static': props.static,
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
  rounded: undefined,
  hovered: undefined,
  focused: undefined,
  active: undefined,
  loading: undefined,
  static: undefined,
}

export default Button

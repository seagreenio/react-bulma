import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ButtonProps extends CommonProps {
  color?: Color | ColorType | 'text'
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
  selected?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Button, props)
  const ElementType = detectElementType(Button, props)
  const classes = cx('button', className, {
    [`is-${props.color}`]: props.color,
    'is-light': props.color === 'light' || props.light,
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
    'is-selected': props.selected,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Button.propTypes = {
  color: PropTypes.string as any,
  light: PropTypes.bool,
  size: PropTypes.any,
  fullwidth: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  static: PropTypes.bool,
  selected: PropTypes.bool,
}

Button.defaultProps = {
  as: 'button',
}

export default Button

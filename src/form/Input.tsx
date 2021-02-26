import Color, { ColorType } from 'types/Color'
import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface InputProps extends CommonProps<HTMLInputElement> {
  color?: Color | ColorType
  size?: Size | SizeType
  rounded?: boolean
  hovered?: boolean
  focused?: boolean
  static?: boolean
}

const Input: React.FC<InputProps> = ({ children, className, ...props }) => {
  const { color, size, rounded, hovered, focused } = props

  const rest = getUnhandledProps(Input, props)
  const classes = cx('input', className, {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    'is-rounded': rounded,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-static': props.static,
  })

  return <input {...rest} className={classes} />
}

Input.propTypes = {
  color: PropTypes.string as any,
  size: PropTypes.string as any,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  static: PropTypes.bool,
}

export default Input

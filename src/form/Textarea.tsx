import Color, { ColorType } from 'types/Color'
import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface TextareaProps extends CommonProps<HTMLTextAreaElement> {
  color?: Color | ColorType
  size?: Size | SizeType
  hovered?: boolean
  focused?: boolean
  active?: boolean
  fixed?: boolean
}

const Textarea: React.FC<TextareaProps> = ({ children, className, ...props }) => {
  const { color, size, hovered, focused, active, fixed } = props

  const rest = getUnhandledProps(Textarea, props)
  const classes = cx('textarea', className, {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'has-fixed-size': fixed,
  })

  return (
    <textarea {...rest} className={classes}>
      {children}
    </textarea>
  )
}

Textarea.propTypes = {
  color: PropTypes.string as any,
  size: PropTypes.any,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  fixed: PropTypes.bool,
}

export default Textarea

import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import Color, { ColorType } from 'types/Color'
import Size, { SizeType } from 'types/Size'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface SelectProps extends CommonProps {
  multiple?: boolean
  color?: Color | ColorType
  rounded?: boolean
  size?: Size | SizeType
  hovered?: boolean
  focused?: boolean
  loading?: boolean
  hasIcons?: 'left' | 'right' | 'all'
  selectProps?: JSX.IntrinsicElements['select']
}

const Select: React.FC<SelectProps> = ({ children, className, ...props }) => {
  const { multiple, color, rounded, size, hovered, focused, loading, hasIcons, selectProps } = props

  const ElementType = detectElementType(Select, props)
  const rest = getUnhandledProps(Select, props)
  const classes = cx('select', className, {
    'is-multiple': multiple,
    [`is-${color}`]: color,
    'is-rounded': rounded,
    [`is-${size}`]: size,
    'is-loading': loading,
    'has-icons-left': hasIcons === 'left' || hasIcons === 'all',
    'has-icons-right': hasIcons === 'right' || hasIcons === 'all',
  })
  const selectClasses = cx(selectProps?.className, {
    'is-hovered': hovered,
    'is-focused': focused,
  })

  return (
    <ElementType {...rest} className={classes}>
      <select {...selectProps} className={selectClasses}>
        {children}
      </select>
    </ElementType>
  )
}

Select.propTypes = {
  multiple: PropTypes.bool,
  color: PropTypes.string as any,
  rounded: PropTypes.bool,
  size: PropTypes.any,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  loading: PropTypes.bool,
  hasIcons: PropTypes.oneOf(['left', 'right', 'all']),
  selectProps: PropTypes.object,
}

export default Select

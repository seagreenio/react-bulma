import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ControlProps extends CommonProps {
  loading?: boolean
  size?: Size | SizeType
  hasIcons?: 'left' | 'right' | 'all'
}

const Control: React.FC<ControlProps> = ({ children, className, ...props }) => {
  const { loading, size, hasIcons } = props

  const rest = getUnhandledProps(Control, props)
  const ElementType = detectElementType(Control, props)
  const classes = cx('control', className, {
    'is-loading': loading,
    [`is-${size}`]: size,
    'has-icons-left': hasIcons === 'left' || hasIcons === 'all',
    'has-icons-right': hasIcons === 'right' || hasIcons === 'all',
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Control.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.any,
  hasIcons: PropTypes.oneOf(['left', 'right', 'all']),
}

export default Control

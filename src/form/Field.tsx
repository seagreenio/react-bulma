import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface FieldProps extends CommonProps {
  label?: React.ReactNode
  help?: React.ReactNode
  loading?: boolean
  size?: Size | SizeType
  hasIcons?: 'left' | 'right' | 'all'
}

const Field: React.FC<FieldProps> = ({ children, className, ...props }) => {
  const { label, help, loading, size, hasIcons } = props

  const rest = getUnhandledProps(Field, props)
  const ElementType = detectElementType(Field, props)
  const classes = cx('field', className)
  const controlClasses = cx('control', {
    'is-loading': loading,
    [`is-${size}`]: size,
    'has-icons-left': hasIcons === 'left' || hasIcons === 'all',
    'has-icons-right': hasIcons === 'right' || hasIcons === 'all',
  })

  return (
    <ElementType {...rest} className={classes}>
      <div {...controlClasses}>
        {label && <label className="label">{label}</label>}
        {children}
        {help && <p className="help">{help}</p>}
      </div>
    </ElementType>
  )
}

Field.propTypes = {
  label: PropTypes.element,
  help: PropTypes.element,
  loading: PropTypes.bool,
  size: PropTypes.string as any,
  hasIcons: PropTypes.oneOf(['left', 'right']),
}

export default Field

import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface FieldProps extends CommonProps {
  label?: React.ReactNode
  labelSize?: Size | SizeType
  help?: React.ReactNode
  hasAddons?: boolean
  horizontal?: boolean
  grouped?: boolean
  groupedMultiline?: boolean
}

const Field: React.FC<FieldProps> = ({ children, className, ...props }) => {
  const { label, labelSize, help, hasAddons, horizontal, grouped, groupedMultiline } = props

  const rest = getUnhandledProps(Field, props)
  const ElementType = detectElementType(Field, props)
  const classes = cx('field', className, {
    'has-addons': hasAddons,
    'is-horizontal': horizontal,
    'is-grouped': grouped,
    'is-grouped-multiline': groupedMultiline,
  })
  const fieldLabelClasses = cx('field-label', {
    [`is-${labelSize}`]: labelSize,
  })

  return (
    <ElementType {...rest} className={classes}>
      {label &&
        (horizontal ? (
          <div className={fieldLabelClasses}>
            <label className="label">{label}</label>
          </div>
        ) : (
          <label className="label">{label}</label>
        ))}
      {horizontal ? (
        <div className="field-body">
          <div className="field">{children}</div>
        </div>
      ) : (
        children
      )}
      {help && <p className="help">{help}</p>}
    </ElementType>
  )
}

Field.propTypes = {
  label: PropTypes.element,
  labelSize: PropTypes.any,
  help: PropTypes.element,
  hasAddons: PropTypes.bool,
  horizontal: PropTypes.bool,
  grouped: PropTypes.bool,
  groupedMultiline: PropTypes.bool,
}

export default Field

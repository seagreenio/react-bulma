import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface CheckboxProps extends CommonProps<HTMLInputElement> {
  labelProps?: JSX.IntrinsicElements['label'] & { disabled: boolean }
}

const Checkbox: React.FC<CheckboxProps> = ({ children, className, ...props }) => {
  const { labelProps } = props

  const rest = getUnhandledProps(Checkbox, props)
  const labelClasses = cx('checkbox', labelProps?.className)

  return (
    <label {...labelProps} className={labelClasses}>
      <input {...rest} type="checkbox" />
      {children}
    </label>
  )
}

Checkbox.propTypes = {
  labelProps: PropTypes.any,
}

export default Checkbox

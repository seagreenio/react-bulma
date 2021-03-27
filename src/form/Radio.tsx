import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface RadioProps extends CommonProps<HTMLInputElement> {
  labelProps?: JSX.IntrinsicElements['label'] & { disabled: boolean }
}

const Radio: React.FC<RadioProps> = ({ children, className, ...props }) => {
  const { labelProps } = props

  const rest = getUnhandledProps(Radio, props)
  const labelClasses = cx('radio', labelProps?.className)

  return (
    <label {...labelProps} className={labelClasses}>
      <input {...rest} type="radio" />
      {children}
    </label>
  )
}

Radio.propTypes = {
  labelProps: PropTypes.any,
}

export default Radio

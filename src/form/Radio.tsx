import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

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

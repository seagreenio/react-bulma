import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from '../types/Size'

import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  color?: Color | ColorType
  size?: Size | SizeType
  indeterminate?: boolean
}

const Progress: React.FC<ProgressProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Progress, props)
  const classes = cx('progress', className, {
    [`is-${props.color}`]: props.color,
    [`is-${props.size}`]: props.size,
  })

  return (
    <progress {...rest} className={classes} value={!props.indeterminate && rest.value}>
      {children || (rest.value ? `${rest.value}%` : null)}
    </progress>
  )
}

Progress.propTypes = {
  color: PropTypes.string as any,
  size: PropTypes.string as any,
  indeterminate: PropTypes.bool,
}

export default Progress

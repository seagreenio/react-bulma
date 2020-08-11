import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from '../types/Size'

import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  color?: Color | ColorType
  size?: Size | SizeType
  indeterminate?: boolean
}

const Progress: React.FC<ProgressProps> = ({
  children,
  className,
  ...props
}) => {
  const rest = getUnhandledProps(Progress, props)
  const classes = cx('progress', className, {
    [`is-${props.color}`]: props.color,
    [`is-${props.size}`]: props.size,
  })

  return (
    <progress
      {...rest}
      value={props.indeterminate ? undefined : rest.value}
      className={classes}
    >
      {children}
    </progress>
  )
}

Progress.defaultProps = {
  className: undefined,
  color: undefined,
  size: undefined,
  indeterminate: undefined,
}

export default Progress

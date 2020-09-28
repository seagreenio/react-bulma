import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import { properRange } from 'lib/utils'

export interface SubtitleProps extends Omit<CommonProps, 'size'> {
  size?: Unit
}

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className,
  ...props
}) => {
  const rest = getUnhandledProps(Subtitle, props)
  const ElementType = detectElementType(Subtitle, props)
  const size = props.as
    ? properRange(props.as.substring(1), [1, 6])
    : props.size
    ? properRange(props.size, [1, 6])
    : undefined
  const classes = cx('subtitle', className, {
    [`is-${size}`]: size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Subtitle.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) as any,
}

export default Subtitle

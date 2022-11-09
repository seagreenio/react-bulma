import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import { properRange } from 'lib/utils'

import CommonProps from '../types/CommonProps'

export interface SubtitleProps extends CommonProps {
  size?: Unit
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Subtitle, props)
  const ElementType = detectElementType(Subtitle, props)
  const size =
    props.as && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(props.as)
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
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) as any,
}

export default Subtitle

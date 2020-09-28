import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import { properRange } from 'lib/utils'

export interface TitleProps extends Omit<CommonProps, 'size'> {
  size?: Unit
  spaced?: boolean
}

const Title: React.FC<TitleProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Title, props)
  const ElementType = detectElementType(Title, props)
  const size = props.as
    ? properRange(props.as.substring(1), [1, 6])
    : props.size
    ? properRange(props.size, [1, 6])
    : undefined
  const classes = cx('title', className, {
    [`is-${size}`]: size,
    'is-spaced': props.spaced,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Title.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  spaced: PropTypes.bool,
}

export default Title

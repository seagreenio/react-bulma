import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import { properRange } from 'lib/utils'

export interface TitleProps extends CommonProps {
  size?: Unit
  spaced?: boolean
}

const Title: React.FC<TitleProps> = ({ children, className, ...props }) => {
  const { as, spaced } = props

  const rest = getUnhandledProps(Title, props)
  const ElementType = detectElementType(Title, props)
  const size =
    as && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as)
      ? properRange(as.substring(1), [1, 6])
      : props.size
      ? properRange(props.size, [1, 6])
      : undefined
  const classes = cx('title', className, {
    [`is-${size}`]: size,
    'is-spaced': spaced,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Title.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  spaced: PropTypes.bool,
}

export default Title

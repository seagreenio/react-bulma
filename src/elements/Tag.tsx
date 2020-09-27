import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface TagProps extends Omit<CommonProps, 'size'> {
  color?: Color | ColorType
  light?: boolean
  size?: Exclude<Size, Size.Small> | Exclude<SizeType, 'small'>
  rounded?: boolean
  delete?: boolean
}

const Tag: React.FC<TagProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Tag, props)
  const ElementType = detectElementType(Tag, props)
  const classes = cx('tag', className, {
    [`is-${props.color}`]: props.color,
    [`is-light`]: props.color === 'light' || props.light,
    [`is-${props.size}`]: props.size,
    'is-rounded': props.rounded,
    'is-delete': props.delete,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Tag.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string as any,
  light: PropTypes.bool,
  size: PropTypes.string as any,
  rounded: PropTypes.bool,
  delete: PropTypes.bool,
}

Tag.defaultProps = {
  as: 'span',
}

export default Tag

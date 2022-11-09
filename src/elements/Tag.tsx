import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import Color, { ColorType } from '../types/Color'
import CommonProps from '../types/CommonProps'
import Size, { SizeType } from '../types/Size'

export interface TagProps extends CommonProps {
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
  color: PropTypes.string as any,
  light: PropTypes.bool,
  size: PropTypes.any,
  rounded: PropTypes.bool,
  delete: PropTypes.bool,
}

Tag.defaultProps = {
  as: 'span',
}

export default Tag

import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
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

Tag.defaultProps = {
  as: 'span',
  className: undefined,
  color: undefined,
  light: undefined,
  size: undefined,
  rounded: undefined,
  delete: undefined,
}

export default Tag

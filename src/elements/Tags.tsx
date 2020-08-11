import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'

export interface TagsProps extends Omit<CommonProps, 'size'> {
  size?: Exclude<Size, Size.Small> | Exclude<SizeType, 'small'>
  addons?: boolean
}

const Tags: React.FC<TagsProps> = ({ children, className, ...props }) => {
  const ElementType = detectElementType(Tags, props)
  const classes = cx('tags', className, {
    [`are-${props.size}`]: props.size,
    'has-addons': props.addons,
  })

  return <ElementType className={classes}>{children}</ElementType>
}

Tags.defaultProps = {
  as: 'div',
  className: undefined,
  size: undefined,
  addons: undefined,
}

export default Tags

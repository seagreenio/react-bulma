import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'

import CommonProps from '../types/CommonProps'
import Size, { SizeType } from '../types/Size'

export interface TagsProps extends CommonProps {
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

Tags.propTypes = {
  size: PropTypes.any,
  addons: PropTypes.bool,
}

export default Tags

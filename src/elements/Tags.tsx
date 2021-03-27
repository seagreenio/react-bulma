import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'

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

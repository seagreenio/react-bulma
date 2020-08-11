import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ContentProps extends Omit<CommonProps, 'size'> {
  size?: Size | SizeType
}

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Content, props)
  const ElementType = detectElementType(Content, props)
  const classes = cx('content', className, {
    [`is-${props.size}`]: props.size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Content.defaultProps = {
  as: 'div',
  className: undefined,
  size: undefined,
}

export default Content

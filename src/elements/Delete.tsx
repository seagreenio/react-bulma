import Size, { SizeType } from 'types/Size'

import CommonProps from 'types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface DeleteProps extends Omit<CommonProps, 'size'> {
  size?: Exclude<Size, Size.Normal> | Exclude<SizeType, 'normal'>
}

const Delete: React.FC<DeleteProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Delete, props)
  const ElementType = detectElementType(Delete, props)
  const classes = cx('Delete', className, {
    [`is-${props.size}`]: props.size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Delete.defaultProps = {
  as: 'button',
  className: undefined,
  size: undefined,
}

export default Delete

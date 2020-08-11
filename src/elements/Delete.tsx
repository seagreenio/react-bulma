import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface DeleteProps extends Omit<CommonProps, 'size'> {
  size?: Size | SizeType
}

const Delete: React.FC<DeleteProps> = ({ className, ...props }) => {
  const rest = getUnhandledProps(Delete, props)
  const ElementType = detectElementType(Delete, props)
  const classes = cx('delete', className, {
    [`is-${props.size}`]: props.size,
  })

  return <ElementType {...rest} className={classes} />
}

Delete.defaultProps = {
  as: 'button',
  className: undefined,
  size: undefined,
}

export default Delete

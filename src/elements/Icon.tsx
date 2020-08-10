import Size, { SizeType } from 'types/Size'

import CommonProps from 'types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface IconProps extends Omit<CommonProps, 'size'> {
  size?: Exclude<Size, Size.Normal> | Exclude<SizeType, 'normal'>
}

const Icon: React.FC<IconProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Icon, props)
  const ElementType = detectElementType(Icon, props)
  const classes = cx('icon', className, {
    [`is-${props.size}`]: props.size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Icon.defaultProps = {
  as: 'span',
  className: undefined,
  size: undefined,
}

export default Icon

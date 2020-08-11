import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface IconProps extends Omit<CommonProps, 'size'> {
  name?: string
  size?: Exclude<Size, Size.Normal> | Exclude<SizeType, 'normal'>
}

const Icon: React.FC<IconProps> = ({ className, ...props }) => {
  const rest = getUnhandledProps(Icon, props)
  const ElementType = detectElementType(Icon, props)
  const classes = cx('icon', className, {
    [`is-${props.size}`]: props.size,
  })

  return (
    <ElementType {...rest} className={classes}>
      <i className={props.name} />
    </ElementType>
  )
}

Icon.defaultProps = {
  as: 'span',
  className: undefined,
  name: undefined,
  size: undefined,
}

export default Icon

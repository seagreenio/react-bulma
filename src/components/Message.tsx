import Color, { ColorType } from 'types/Color'
import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface MessageProps extends CommonProps {
  color?: Color | ColorType
  size?: Size | SizeType
}

const Message: React.FC<MessageProps> = ({ children, className, ...props }) => {
  const { color, size } = props
  const rest = getUnhandledProps(Message, props)
  const ElementType = detectElementType(Message, props)
  const classes = cx('message', className, {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Message.propTypes = {
  color: PropTypes.string as any,
  size: PropTypes.any,
}

export default Message

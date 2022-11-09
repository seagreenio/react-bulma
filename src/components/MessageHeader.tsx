import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type MessageHeaderProps = CommonProps

const MessageHeader: React.FC<MessageHeaderProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(MessageHeader, props)
  const ElementType = detectElementType(MessageHeader, props)
  const classes = cx('message-header', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default MessageHeader

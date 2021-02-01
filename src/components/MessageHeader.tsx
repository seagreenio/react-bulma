import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

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

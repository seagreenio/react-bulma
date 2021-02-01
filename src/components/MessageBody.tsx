import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type MessageBodyProps = CommonProps

const MessageBody: React.FC<MessageBodyProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(MessageBody, props)
  const ElementType = detectElementType(MessageBody, props)
  const classes = cx('message-body', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default MessageBody

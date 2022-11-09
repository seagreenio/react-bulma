import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

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

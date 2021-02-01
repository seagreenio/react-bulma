import Color, { ColorType } from '../types/Color'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface NotificationProps extends CommonProps {
  color?: Color | ColorType
  light?: boolean
}

const Notification: React.FC<NotificationProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Notification, props)
  const ElementType = detectElementType(Notification, props)
  const classes = cx('notification', className, {
    [`is-${props.color}`]: props.color,
    [`is-light`]: props.color === 'light' || props.light,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Notification.propTypes = {
  color: PropTypes.string as any,
  light: PropTypes.bool,
}

export default Notification

import cx from 'clsx'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type CardProps = CommonProps

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Card, props)
  const ElementType = detectElementType(Card, props)
  const classes = cx('card', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default Card

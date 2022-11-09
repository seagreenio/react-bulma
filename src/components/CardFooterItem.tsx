import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type CardFooterItemProps = CommonProps

const CardFooterItem: React.FC<CardFooterItemProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(CardFooterItem, props)
  const ElementType = detectElementType(CardFooterItem, props)
  const classes = cx('card-footer-item', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default CardFooterItem

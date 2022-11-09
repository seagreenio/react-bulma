import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type CardFooterProps = CommonProps

const CardFooter: React.FC<CardFooterProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(CardFooter, props)
  const ElementType = detectElementType(CardFooter, props)
  const classes = cx('card-footer', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default CardFooter

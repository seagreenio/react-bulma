import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type CardHeaderProps = CommonProps

const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(CardHeader, props)
  const ElementType = detectElementType(CardHeader, props)
  const classes = cx('card-header', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default CardHeader

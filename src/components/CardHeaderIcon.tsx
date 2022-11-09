import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type CardHeaderIconProps = CommonProps

const CardHeaderIcon: React.FC<CardHeaderIconProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(CardHeaderIcon, props)
  const ElementType = detectElementType(CardHeaderIcon, props)
  const classes = cx('card-header-icon', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default CardHeaderIcon

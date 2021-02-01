import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

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

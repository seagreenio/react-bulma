import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type CardContentProps = CommonProps

const CardContent: React.FC<CardContentProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(CardContent, props)
  const ElementType = detectElementType(CardContent, props)
  const classes = cx('card-content', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default CardContent

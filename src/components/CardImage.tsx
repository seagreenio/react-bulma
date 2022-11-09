import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type CardImageProps = CommonProps

const CardImage: React.FC<CardImageProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(CardImage, props)
  const ElementType = detectElementType(CardImage, props)
  const classes = cx('card-image', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default CardImage

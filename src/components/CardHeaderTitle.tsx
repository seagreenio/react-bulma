import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface CardHeaderTitleProps extends CommonProps {
  centered?: boolean
}

const CardHeaderTitle: React.FC<CardHeaderTitleProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(CardHeaderTitle, props)
  const ElementType = detectElementType(CardHeaderTitle, props)
  const classes = cx('card-header-title', className, {
    'is-centered': props.centered,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

CardHeaderTitle.propTypes = {
  centered: PropTypes.bool,
}

export default CardHeaderTitle

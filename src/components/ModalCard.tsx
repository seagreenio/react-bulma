import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type ModalCardProps = CommonProps

const ModalCard: React.FC<ModalCardProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalCard, props)
  const ElementType = detectElementType(ModalCard, props)
  const classes = cx('modal-card', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default ModalCard

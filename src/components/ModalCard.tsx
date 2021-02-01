import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

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

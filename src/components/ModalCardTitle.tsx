import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type ModalCardTitleProps = CommonProps

const ModalCardTitle: React.FC<ModalCardTitleProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalCardTitle, props)
  const ElementType = detectElementType(ModalCardTitle, props)
  const classes = cx('modal-card-title', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default ModalCardTitle

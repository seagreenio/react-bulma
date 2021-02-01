import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type ModalCardHeadProps = CommonProps

const ModalCardHead: React.FC<ModalCardHeadProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalCardHead, props)
  const ElementType = detectElementType(ModalCardHead, props)
  const classes = cx('modal-card-head', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

ModalCardHead.defaultProps = {
  as: 'header',
}

export default ModalCardHead

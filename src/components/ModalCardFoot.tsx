import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type ModalCardFootProps = CommonProps

const ModalCardFoot: React.FC<ModalCardFootProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalCardFoot, props)
  const ElementType = detectElementType(ModalCardFoot, props)
  const classes = cx('modal-card-foot', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

ModalCardFoot.defaultProps = {
  as: 'footer',
}

export default ModalCardFoot

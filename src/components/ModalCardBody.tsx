import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type ModalCardBodyProps = CommonProps

const ModalCardBody: React.FC<ModalCardBodyProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalCardBody, props)
  const ElementType = detectElementType(ModalCardBody, props)
  const classes = cx('modal-card-body', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

ModalCardBody.defaultProps = {
  as: 'section',
}

export default ModalCardBody

import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type ModalContentProps = CommonProps

const ModalContent: React.FC<ModalContentProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalContent, props)
  const ElementType = detectElementType(ModalContent, props)
  const classes = cx('modal-content', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default ModalContent

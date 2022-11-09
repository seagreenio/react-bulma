import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface ModalProps extends CommonProps {
  active?: boolean
}

const Modal: React.FC<ModalProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Modal, props)
  const ElementType = detectElementType(Modal, props)
  const classes = cx('modal', className, {
    'is-active': props.active,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Modal.propTypes = {
  active: PropTypes.bool,
}

export default Modal

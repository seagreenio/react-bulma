import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import getUnhandledProps from 'lib/getUnhandledProps'

import Button, { ButtonProps } from '../elements/Button'

export type ModalCloseProps = ButtonProps

const ModalClose: React.FC<ModalCloseProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalClose, props)
  const classes = cx('modal-close', className)

  return (
    <Button aria-label="close" {...rest} className={classes}>
      {children}
    </Button>
  )
}

export default ModalClose

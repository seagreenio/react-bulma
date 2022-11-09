import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type ModalBackgroundProps = CommonProps

const ModalBackground: React.FC<ModalBackgroundProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(ModalBackground, props)
  const ElementType = detectElementType(ModalBackground, props)
  const classes = cx('modal-background', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default ModalBackground

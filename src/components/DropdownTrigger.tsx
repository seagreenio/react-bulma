import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type DropdownTriggerProps = CommonProps

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(DropdownTrigger, props)
  const ElementType = detectElementType(DropdownTrigger, props)
  const classes = cx('dropdown-trigger', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default DropdownTrigger

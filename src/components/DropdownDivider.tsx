import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type DropdownDividerProps = CommonProps

const DropdownDivider: React.FC<DropdownDividerProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(DropdownDivider, props)
  const ElementType = detectElementType(DropdownDivider, props)
  const classes = cx('dropdown-divider', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

DropdownDivider.defaultProps = {
  as: 'hr',
}

export default DropdownDivider

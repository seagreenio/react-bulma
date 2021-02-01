import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type DropdownMenuProps = CommonProps

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(DropdownMenu, props)
  const ElementType = detectElementType(DropdownMenu, props)
  const classes = cx('dropdown-menu', className)

  return (
    <ElementType role="menu" {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default DropdownMenu

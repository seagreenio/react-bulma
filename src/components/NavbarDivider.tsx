import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type NavbarDividerProps = CommonProps

const NavbarDivider: React.FC<NavbarDividerProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(NavbarDivider, props)
  const ElementType = detectElementType(NavbarDivider, props)
  const classes = cx('navbar-divider', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

NavbarDivider.defaultProps = {
  as: 'hr',
}

export default NavbarDivider

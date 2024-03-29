import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface NavbarMenuProps extends CommonProps {
  active?: boolean
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(NavbarMenu, props)
  const ElementType = detectElementType(NavbarMenu, props)
  const classes = cx('navbar-menu', className, {
    'is-active': props.active,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

NavbarMenu.propTypes = {
  active: PropTypes.bool,
}

export default NavbarMenu

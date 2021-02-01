import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type NavbarBrandProps = CommonProps

const NavbarBrand: React.FC<NavbarBrandProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(NavbarBrand, props)
  const ElementType = detectElementType(NavbarBrand, props)
  const classes = cx('navbar-brand', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default NavbarBrand

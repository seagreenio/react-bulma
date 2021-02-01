import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type NavbarStartProps = CommonProps

const NavbarStart: React.FC<NavbarStartProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(NavbarStart, props)
  const ElementType = detectElementType(NavbarStart, props)
  const classes = cx('navbar-start', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default NavbarStart

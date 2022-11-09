import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type NavbarEndProps = CommonProps

const NavbarEnd: React.FC<NavbarEndProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(NavbarEnd, props)
  const ElementType = detectElementType(NavbarEnd, props)
  const classes = cx('navbar-end', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default NavbarEnd

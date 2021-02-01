import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface NavbarDropdownProps extends CommonProps {
  active?: boolean
  alignment?: 'left' | 'right'
  boxed?: boolean
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ children, className, ...props }) => {
  const { active, alignment, boxed } = props

  const rest = getUnhandledProps(NavbarDropdown, props)
  const ElementType = detectElementType(NavbarDropdown, props)
  const classes = cx('navbar-dropdown', className, {
    'is-active': active,
    [`is-${alignment}`]: alignment,
    'is-boxed': boxed,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

NavbarDropdown.propTypes = {
  active: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right']),
  boxed: PropTypes.bool,
}

export default NavbarDropdown

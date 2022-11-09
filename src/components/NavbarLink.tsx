import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface NavbarLinkProps extends CommonProps<HTMLAnchorElement> {
  arrowless?: boolean
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(NavbarLink, props)
  const ElementType = detectElementType(NavbarLink, props)
  const classes = cx('navbar-link', className, {
    'is-arrowless': props.arrowless,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

NavbarLink.propTypes = {
  arrowless: PropTypes.bool,
}

NavbarLink.defaultProps = {
  as: 'a',
}

export default NavbarLink

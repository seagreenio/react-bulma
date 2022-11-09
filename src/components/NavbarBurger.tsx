import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface NavbarBurgerProps extends CommonProps {
  active?: boolean
}

const NavbarBurger: React.FC<NavbarBurgerProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(NavbarBurger, props)
  const ElementType = detectElementType(NavbarBurger, props)
  const classes = cx('navbar-burger', className, {
    'is-active': props.active,
  })

  return (
    <ElementType role="button" {...rest} className={classes}>
      {children ? (
        children
      ) : (
        <>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </>
      )}
    </ElementType>
  )
}

NavbarBurger.propTypes = {
  active: PropTypes.bool,
}

NavbarBurger.defaultProps = {
  as: 'a',
}

export default NavbarBurger

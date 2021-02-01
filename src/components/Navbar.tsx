import Color, { ColorType } from 'types/Color'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface NavbarProps extends CommonProps {
  transparent?: boolean
  fixed?: 'top' | 'bottom'
  hasFixed?: 'top' | 'bottom'
  color?: Color | ColorType
  spaced?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ children, className, ...props }) => {
  const { transparent, fixed, hasFixed, color, spaced } = props

  const rest = getUnhandledProps(Navbar, props)
  const ElementType = detectElementType(Navbar, props)
  const classes = cx('navbar', className, {
    'is-transparent': transparent,
    [`is-fixed-${fixed}`]: fixed,
    [`has-navbar-fixed-${hasFixed}`]: hasFixed,
    [`is-${color}`]: color,
    'is-spaced': spaced,
  })

  return (
    <ElementType role="navigation" {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Navbar.propTypes = {
  transparent: PropTypes.bool,
  fixed: PropTypes.oneOf(['top', 'bottom']),
  hasFixed: PropTypes.oneOf(['top', 'bottom']),
  color: PropTypes.string as any,
  spaced: PropTypes.bool,
}

export default Navbar

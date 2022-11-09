import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type MenuProps = CommonProps

const Menu: React.FC<MenuProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Menu, props)
  const ElementType = detectElementType(Menu, props)
  const classes = cx('menu', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Menu.defaultProps = {
  as: 'aside',
}

export default Menu

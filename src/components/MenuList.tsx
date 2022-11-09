import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type MenuListProps = CommonProps

const MenuList: React.FC<MenuListProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(MenuList, props)
  const ElementType = detectElementType(MenuList, props)
  const classes = cx('menu-list', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

MenuList.defaultProps = {
  as: 'ul',
}

export default MenuList

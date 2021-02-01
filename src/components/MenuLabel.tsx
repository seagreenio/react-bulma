import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type MenuLabelProps = CommonProps

const MenuLabel: React.FC<MenuLabelProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(MenuLabel, props)
  const ElementType = detectElementType(MenuLabel, props)
  const classes = cx('menu-label', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

MenuLabel.defaultProps = {
  as: 'p',
}

export default MenuLabel

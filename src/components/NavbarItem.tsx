import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface NavbarItemProps extends CommonProps<HTMLAnchorElement> {
  dropdown?: boolean
  hoverable?: boolean
  active?: boolean
  expanded?: boolean
  tab?: boolean
  dropdownUp?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, className, ...props }) => {
  const { dropdown, hoverable, active, expanded, tab, dropdownUp } = props

  const rest = getUnhandledProps(NavbarItem, props)
  const ElementType = detectElementType(NavbarItem, props)
  const classes = cx('navbar-item', className, {
    'has-dropdown': dropdown,
    'is-hoverable': hoverable,
    'is-active': active,
    'is-expanded': expanded,
    'is-tab': tab,
    'has-dropdown-up': dropdownUp,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

NavbarItem.propTypes = {
  dropdown: PropTypes.bool,
  hoverable: PropTypes.bool,
  active: PropTypes.bool,
  expanded: PropTypes.bool,
  tab: PropTypes.bool,
  dropdownUp: PropTypes.bool,
}

NavbarItem.defaultProps = {
  as: 'a',
}

export default NavbarItem

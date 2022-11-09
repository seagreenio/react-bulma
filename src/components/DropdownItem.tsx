import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export interface DropdownItemProps extends CommonProps<HTMLAnchorElement> {
  active?: boolean
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(DropdownItem, props)
  const ElementType = detectElementType(DropdownItem, props)
  const classes = cx('dropdown-item', className, {
    'is-active': props.active,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

DropdownItem.propTypes = {
  active: PropTypes.bool,
}

DropdownItem.defaultProps = {
  as: 'a',
}

export default DropdownItem

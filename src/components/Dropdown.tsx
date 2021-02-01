import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface DropdownProps extends CommonProps {
  active?: boolean
  hoverable?: boolean
  right?: boolean
  up?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ children, className, ...props }) => {
  const { active, hoverable, right, up } = props

  const rest = getUnhandledProps(Dropdown, props)
  const ElementType = detectElementType(Dropdown, props)
  const classes = cx('dropdown', className, {
    'is-active': active,
    'is-hoverable': hoverable,
    'is-right': right,
    'is-up': up,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Dropdown.propTypes = {
  active: PropTypes.bool,
  hoverable: PropTypes.bool,
  right: PropTypes.bool,
  up: PropTypes.bool,
}

export default Dropdown

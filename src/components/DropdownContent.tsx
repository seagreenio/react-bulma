import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type DropdownContentProps = CommonProps

const DropdownContent: React.FC<DropdownContentProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(DropdownContent, props)
  const ElementType = detectElementType(DropdownContent, props)
  const classes = cx('dropdown-content', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default DropdownContent

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type PaginationProps = CommonProps

const Pagination: React.FC<PaginationProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Pagination, props)
  const ElementType = detectElementType(Pagination, props)
  const classes = cx('pagination', className)

  return (
    <ElementType role="navigation" {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Pagination.defaultProps = {
  as: 'nav',
}

export default Pagination

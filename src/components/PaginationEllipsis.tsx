import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type PaginationEllipsisProps = CommonProps

const PaginationEllipsis: React.FC<PaginationEllipsisProps> = ({ className, ...props }) => {
  const rest = getUnhandledProps(PaginationEllipsis, props)
  const ElementType = detectElementType(PaginationEllipsis, props)
  const classes = cx('pagination-ellipsis', className)

  return (
    <li>
      <ElementType {...rest} className={classes}>
        &hellip;
      </ElementType>
    </li>
  )
}

PaginationEllipsis.defaultProps = {
  as: 'span',
}

export default PaginationEllipsis

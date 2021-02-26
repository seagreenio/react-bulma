import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export type PaginationListProps = CommonProps

const PaginationList: React.FC<PaginationListProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(PaginationList, props)
  const classes = cx('pagination-list', className)

  return (
    <ul {...rest} className={classes}>
      {children}
    </ul>
  )
}

export default PaginationList

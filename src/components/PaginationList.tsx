import cx from 'clsx'
import React from 'react'

import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

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

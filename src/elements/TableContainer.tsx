import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type TableContainerProps = CommonProps

const TableContainer: React.FC<TableContainerProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(TableContainer, props)
  const ElementType = detectElementType(TableContainer, props)
  const classes = cx('table-container', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default TableContainer

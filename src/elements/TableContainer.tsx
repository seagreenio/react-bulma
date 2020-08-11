import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type TableContainerProps = CommonProps

const TableContainer: React.FC<TableContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const rest = getUnhandledProps(TableContainer, props)
  const ElementType = detectElementType(TableContainer, props)
  const classes = cx('table-container', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

TableContainer.defaultProps = {
  as: 'div',
  className: undefined,
}

export default TableContainer

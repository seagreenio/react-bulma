import CommonProps from 'types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export type ColumnProps = CommonProps

const Column: React.FC<ColumnProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Column, props)
  const ElementType = detectElementType(Column, props)
  const classes = cx('column', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Column.defaultProps = {
  as: 'div',
  className: undefined,
}

export type ColumnsProps = CommonProps

const Columns: React.FC<ColumnsProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Column, props)
  const ElementType = detectElementType(Column, props)
  const classes = cx('columns', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Columns.defaultProps = {
  as: 'div',
  className: undefined,
}

export { Column, Columns }

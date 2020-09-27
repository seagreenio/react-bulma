import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
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

Column.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
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

Columns.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
}

export { Column, Columns }

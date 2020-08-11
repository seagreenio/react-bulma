import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  bordered?: boolean
  striped?: boolean
  narrow?: boolean
  hoverable?: boolean
  fullwidth?: boolean
}

const Table: React.FC<TableProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Table, props)
  const classes = cx('table', className, {
    'is-bordered': props.bordered,
    'is-striped': props.striped,
    'is-narrow': props.narrow,
    'is-hoverable': props.hoverable,
    'is-fullwidth': props.fullwidth,
  })

  return (
    <table {...rest} className={classes}>
      {children}
    </table>
  )
}

Table.defaultProps = {
  className: undefined,
  bordered: undefined,
  striped: undefined,
  narrow: undefined,
  hoverable: undefined,
  fullwidth: undefined,
}

export default Table

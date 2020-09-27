import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
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

TableContainer.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
}

export default TableContainer

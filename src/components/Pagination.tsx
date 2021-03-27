import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface PaginationProps extends CommonProps {
  alignment?: 'centered' | 'right'
  rounded?: boolean
  size?: Size | SizeType
}

const Pagination: React.FC<PaginationProps> = ({ children, className, ...props }) => {
  const { alignment, rounded, size } = props

  const rest = getUnhandledProps(Pagination, props)
  const ElementType = detectElementType(Pagination, props)
  const classes = cx('pagination', className, {
    [`is-${alignment}`]: alignment,
    'is-rounded': rounded,
    [`is-${size}`]: size,
  })

  return (
    <ElementType role="navigation" {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Pagination.propTypes = {
  alignment: PropTypes.oneOf(['centered', 'right']),
  rounded: PropTypes.bool,
  size: PropTypes.any,
}

Pagination.defaultProps = {
  as: 'nav',
}

export default Pagination

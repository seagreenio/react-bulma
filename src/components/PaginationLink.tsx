import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface PaginationLinkProps extends CommonProps<HTMLAnchorElement> {
  current?: boolean
}

const PaginationLink: React.FC<PaginationLinkProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(PaginationLink, props)
  const ElementType = detectElementType(PaginationLink, props)
  const classes = cx('pagination-link', className, {
    'is-current': props.current,
  })

  return (
    <li>
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    </li>
  )
}

PaginationLink.propTypes = {
  current: PropTypes.bool,
}

PaginationLink.defaultProps = {
  as: 'a',
}

export default PaginationLink

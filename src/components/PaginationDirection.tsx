import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface PaginationDirectionProps extends CommonProps<HTMLAnchorElement> {
  direction: 'previous' | 'next'
  disabled?: boolean
}

const PaginationDirection: React.FC<PaginationDirectionProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(PaginationDirection as React.FunctionComponent<unknown>, props)
  const ElementType = detectElementType(PaginationDirection, props)
  const classes = cx(`pagination-${props.direction}`, className)

  return (
    <ElementType role="navigation" {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

PaginationDirection.propTypes = {
  direction: PropTypes.oneOf<'previous' | 'next'>(['previous', 'next']).isRequired,
}

PaginationDirection.defaultProps = {
  as: 'a',
}

export default PaginationDirection

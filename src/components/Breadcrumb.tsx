import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface BreadcrumbProps extends CommonProps {
  alignment?: 'center' | 'right'
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  className,
  ...props
}) => {
  const { alignment } = props

  const rest = getUnhandledProps(Breadcrumb, props)
  const ElementType = detectElementType(Breadcrumb, props)
  const classes = cx('breadcrumb', className, {
    [`is-${alignment}`]: alignment,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Breadcrumb.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
}

Breadcrumb.defaultProps = {
  as: 'nav',
}

export default Breadcrumb

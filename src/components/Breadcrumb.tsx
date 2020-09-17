import CommonProps from '../types/CommonProps'
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

Breadcrumb.defaultProps = {
  as: 'nav',
  className: undefined,
}

export default Breadcrumb

import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface BreadcrumbProps extends CommonProps {
  alignment?: 'centered' | 'right'
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds'
  size?: Size | SizeType
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className, ...props }) => {
  const { alignment, separator, size } = props

  const rest = getUnhandledProps(Breadcrumb, props)
  const ElementType = detectElementType(Breadcrumb, props)
  const classes = cx('breadcrumb', className, {
    [`is-${alignment}`]: alignment,
    [`has-${separator}-separator`]: separator,
    [`is-${size}`]: size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Breadcrumb.propTypes = {
  alignment: PropTypes.string as any,
  separator: PropTypes.string as any,
  size: PropTypes.any,
}

Breadcrumb.defaultProps = {
  as: 'nav',
}

export default Breadcrumb

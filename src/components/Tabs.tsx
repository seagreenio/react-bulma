import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface TabsProps extends CommonProps {
  alignment?: 'centered' | 'right'
  size?: Size | SizeType
  boxed?: boolean
  toggle?: boolean
  toggleRounded?: boolean
  fullwidth?: boolean
}

const Tabs: React.FC<TabsProps> = ({ children, className, ...props }) => {
  const { alignment, size, boxed, toggle, toggleRounded, fullwidth } = props

  const rest = getUnhandledProps(Tabs, props)
  const ElementType = detectElementType(Tabs, props)
  const classes = cx('tabs', className, {
    [`is-${alignment}`]: alignment,
    [`is-${size}`]: size,
    'is-boxed': boxed,
    'is-toggle': toggle,
    'is-toggle-rounded': toggleRounded,
    'is-fullwidth': fullwidth,
  })

  return (
    <ElementType {...rest} className={classes}>
      <ul>{children}</ul>
    </ElementType>
  )
}

Tabs.propTypes = {
  alignment: PropTypes.oneOf(['centered', 'right']),
  size: PropTypes.string as any,
  boxed: PropTypes.bool,
  toggle: PropTypes.bool,
  toggleRounded: PropTypes.bool,
  fullwidth: PropTypes.bool,
}

export default Tabs

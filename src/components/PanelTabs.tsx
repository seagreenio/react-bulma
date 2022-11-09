import cx from 'clsx'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type PanelTabsProps = CommonProps

const PanelTabs: React.FC<PanelTabsProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(PanelTabs, props)
  const ElementType = detectElementType(PanelTabs, props)
  const classes = cx('panel-tabs', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

PanelTabs.defaultProps = {
  as: 'p',
}

export default PanelTabs

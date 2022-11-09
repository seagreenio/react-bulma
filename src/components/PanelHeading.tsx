import cx from 'clsx'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type PanelHeadingProps = CommonProps

const PanelHeading: React.FC<PanelHeadingProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(PanelHeading, props)
  const ElementType = detectElementType(PanelHeading, props)
  const classes = cx('panel-heading', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

PanelHeading.defaultProps = {
  as: 'p',
}

export default PanelHeading

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

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

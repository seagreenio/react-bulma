import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import Color, { ColorType } from '../types/Color'
import CommonProps from '../types/CommonProps'

export interface PanelProps extends CommonProps {
  color?: Color | ColorType
}

const Panel: React.FC<PanelProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Panel, props)
  const ElementType = detectElementType(Panel, props)
  const classes = cx('panel', className, {
    [`is-${props.color}`]: props.color,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Panel.propTypes = {
  color: PropTypes.string as any,
}

Panel.defaultProps = {
  as: 'nav',
}

export default Panel

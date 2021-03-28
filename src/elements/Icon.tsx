import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface IconProps extends CommonProps {
  name?: string
  size?: Size | SizeType
  alignment?: 'left' | 'right'
  panel?: boolean
}

const Icon: React.FC<IconProps> = ({ className, ...props }) => {
  const { name, size, alignment, panel } = props

  const rest = getUnhandledProps(Icon, props)
  const ElementType = detectElementType(Icon, props)
  const classes = cx(panel ? 'panel-icon' : 'icon', className, {
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
  })

  return (
    <ElementType {...rest} className={classes}>
      <i className={name} />
    </ElementType>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.any,
  alignment: PropTypes.oneOf(['left', 'right']),
  panel: PropTypes.bool,
}

Icon.defaultProps = {
  as: 'span',
}

export default Icon

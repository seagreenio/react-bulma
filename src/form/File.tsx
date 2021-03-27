import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from 'types/Size'

import CommonProps from '../types/CommonProps'
import Icon from 'elements/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface FileProps extends CommonProps<HTMLInputElement> {
  icon?: typeof Icon
  hasName?: string
  alignment?: 'centered' | 'right'
  fullwidth?: boolean
  boxed?: boolean
  color?: Color | ColorType
  size?: Size | SizeType
}

const File: React.FC<FileProps> = ({ children, className, ...props }) => {
  const { icon, hasName, alignment, fullwidth, boxed, color, size } = props

  const rest = getUnhandledProps(File, props)
  const ElementType = detectElementType(File, props)
  const classes = cx('file-input', className)
  const containerClasses = cx('file', {
    'has-name': hasName,
    [`is-${alignment}`]: alignment,
    'is-fullwidth': fullwidth,
    'is-boxed': boxed,
    [`is-${color}`]: color,
    [`is-${size}`]: size,
  })

  return (
    <ElementType className={containerClasses}>
      <label className="file-label">
        <input {...rest} type="file" className={classes} />
        <span className="file-cta">
          <span className="file-icon">{icon}</span>
          <span className="file-label">{children}</span>
        </span>
        {hasName && <span className="file-name">{hasName}</span>}
      </label>
    </ElementType>
  )
}

File.propTypes = {
  icon: PropTypes.any,
  hasName: PropTypes.string,
  alignment: PropTypes.oneOf(['centered', 'right']),
  fullwidth: PropTypes.bool,
  boxed: PropTypes.bool,
  color: PropTypes.any,
  size: PropTypes.any,
}

export default File

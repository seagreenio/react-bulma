import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type IconTextProps = CommonProps

const IconText: React.FC<IconTextProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(IconText, props)
  const ElementType = detectElementType(IconText, props)
  const classes = cx('icon-text', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

IconText.defaultProps = {
  as: 'span',
}

export default IconText

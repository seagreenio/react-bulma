import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type BoxProps = CommonProps

const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Box, props)
  const ElementType = detectElementType(Box, props)
  const classes = cx('box', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default Box

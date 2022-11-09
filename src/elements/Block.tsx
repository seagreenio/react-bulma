import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type BlockProps = CommonProps

const Block: React.FC<BlockProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Block, props)
  const ElementType = detectElementType(Block, props)
  const classes = cx('block', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

export default Block

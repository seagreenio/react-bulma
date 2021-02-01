import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

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

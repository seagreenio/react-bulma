import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'
import Size, { SizeType } from '../types/Size'

export interface ContentProps extends CommonProps {
  size?: Size | SizeType
}

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Content, props)
  const ElementType = detectElementType(Content, props)
  const classes = cx('content', className, {
    [`is-${props.size}`]: props.size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Content.propTypes = {
  size: PropTypes.any,
}

export default Content

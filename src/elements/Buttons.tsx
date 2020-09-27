import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'

export interface ButtonsProps extends Omit<CommonProps, 'size'> {
  size?: Size | SizeType
}

const Buttons: React.FC<ButtonsProps> = ({ children, className, ...props }) => {
  const ElementType = detectElementType(Buttons, props)
  const classes = cx('buttons', className, {
    [`are-${props.size}`]: props.size,
  })

  return <ElementType className={classes}>{children}</ElementType>
}

Buttons.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string as any,
}

export default Buttons

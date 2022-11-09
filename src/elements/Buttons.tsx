import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'

import CommonProps from '../types/CommonProps'
import Size, { SizeType } from '../types/Size'

export interface ButtonsProps extends CommonProps {
  size?: Size | SizeType
  addons?: boolean
  align?: 'centered' | 'right'
}

const Buttons: React.FC<ButtonsProps> = ({ children, className, ...props }) => {
  const ElementType = detectElementType(Buttons, props)
  const classes = cx('buttons', className, {
    [`are-${props.size}`]: props.size,
    'has-addons': props.addons,
    [`is-${props.align}`]: props.align,
  })

  return <ElementType className={classes}>{children}</ElementType>
}

Buttons.propTypes = {
  size: PropTypes.any,
  addons: PropTypes.bool,
  align: PropTypes.string as any,
}

export default Buttons

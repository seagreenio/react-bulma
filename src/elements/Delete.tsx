import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'
import Size, { SizeType } from '../types/Size'

export interface DeleteProps extends CommonProps {
  size?: Size | SizeType
}

const Delete: React.FC<DeleteProps> = ({ className, ...props }) => {
  const rest = getUnhandledProps(Delete, props)
  const ElementType = detectElementType(Delete, props)
  const classes = cx('delete', className, {
    [`is-${props.size}`]: props.size,
  })

  return <ElementType {...rest} className={classes} />
}

Delete.propTypes = {
  size: PropTypes.any,
}

Delete.defaultProps = {
  as: 'button',
}

export default Delete

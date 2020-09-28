import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import { properRange } from 'lib/utils'

export interface TileProps extends Omit<CommonProps, 'size'> {
  ancestor?: boolean
  parent?: boolean
  child?: boolean
  vertical?: boolean
  size?: Unit
}

const Tile: React.FC<TileProps> = ({ children, className, ...props }) => {
  const { ancestor, parent, child, size } = props
  let tileClassName = 'tile'
  if (ancestor) {
    tileClassName = 'is-ancestor'
  } else if (parent) {
    tileClassName = 'is-parent'
  } else if (child) {
    tileClassName = 'is-child'
  }

  const rest = getUnhandledProps(Tile, props)
  const ElementType = detectElementType(Tile, props)
  const classes = cx('tile', className, {
    'is-ancestor': ancestor,
    'is-parent': parent,
    'is-child': child,
    [`is-${properRange(size!, [1, 12])}`]: size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Tile.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  ancestor: PropTypes.bool,
  parent: PropTypes.bool,
  child: PropTypes.bool,
  vertical: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Tile

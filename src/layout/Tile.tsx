import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import { Unit } from 'types/Size'
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
    [`is-${size}`]: size || properRange(size!, [1, 12]),
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Tile.defaultProps = {
  as: 'div',
  className: undefined,
  ancestor: undefined,
  parent: undefined,
  child: undefined,
  vertical: undefined,
  size: undefined,
}

export default Tile

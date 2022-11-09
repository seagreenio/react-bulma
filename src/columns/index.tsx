import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'
import { properRange } from 'lib/utils'

import CommonProps from '../types/CommonProps'
import { Viewport, ViewportType } from '../types/Responsive'

export interface ColumnProps extends CommonProps {
  size?: Unit
  offset?: Unit
  narrow?: boolean | Viewport | ViewportType
  mobile?: Unit
  touch?: Unit
  tablet?: Unit
  desktop?: Unit
  widescreen?: Unit
  fullhd?: Unit
}

const Column: React.FC<ColumnProps> = ({ children, className, ...props }) => {
  const { size, offset, narrow, mobile, touch, tablet, desktop, widescreen, fullhd } = props

  const rest = getUnhandledProps(Column, props)
  const ElementType = detectElementType(Column, props)
  const classes = cx('column', className, {
    [`is-${properRange(size!, [1, 12])}`]: size,
    [`is-offset-${properRange(offset!, [1, 12])}`]: offset,
    [`is-narrow${typeof narrow !== 'boolean' ? `-${narrow}` : ''}`]: narrow,
    [`is-${properRange(mobile!, [1, 12])}-mobile`]: mobile,
    [`is-${properRange(touch!, [1, 12])}-touch`]: touch,
    [`is-${properRange(tablet!, [1, 12])}-tablet`]: tablet,
    [`is-${properRange(desktop!, [1, 12])}-desktop`]: desktop,
    [`is-${properRange(widescreen!, [1, 12])}-widescreen`]: widescreen,
    [`is-${properRange(fullhd!, [1, 12])}-mobile`]: fullhd,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Column.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  narrow: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) as any,
  mobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  touch: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tablet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  desktop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  widescreen: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fullhd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export interface ColumnsProps extends CommonProps {
  mobiled?: boolean
  desktoped?: boolean
  gapless?: boolean
  multiline?: boolean
  vcentered?: boolean
  centered?: boolean
  gap?: Unit
  mobile?: Unit
  touch?: Unit
  tablet?: Unit
  desktop?: Unit
  widescreen?: Unit
  fullhd?: Unit
}

const Columns: React.FC<ColumnsProps> = ({ children, className, ...props }) => {
  const {
    mobiled,
    desktoped,
    gapless,
    multiline,
    vcentered,
    centered,
    gap,
    mobile,
    touch,
    tablet,
    desktop,
    widescreen,
    fullhd,
  } = props

  const rest = getUnhandledProps(Columns, props)
  const ElementType = detectElementType(Columns, props)
  const classes = cx('columns', className, {
    'is-mobile': mobiled,
    'is-desktop': desktoped,
    'is-gapless': gapless,
    'is-multiline': multiline,
    'is-vcentered': vcentered,
    'is-centered': centered,
    'is-variable':
      gap || (typeof gap === 'number' && gap >= 0) || mobile || touch || tablet || desktop || widescreen || fullhd,
    [`is-${properRange(gap!, [0, 8])}`]: gap || (typeof gap === 'number' && gap >= 0),
    [`is-${properRange(mobile!, [0, 8])}-mobile`]: mobile,
    [`is-${properRange(touch!, [0, 8])}-touch`]: touch,
    [`is-${properRange(tablet!, [0, 8])}-tablet`]: tablet,
    [`is-${properRange(desktop!, [0, 8])}-desktop`]: desktop,
    [`is-${properRange(widescreen!, [0, 8])}-widescreen`]: widescreen,
    [`is-${properRange(fullhd!, [0, 8])}-mobile`]: fullhd,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Columns.propTypes = {
  mobiled: PropTypes.bool,
  desktoped: PropTypes.bool,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  vcentered: PropTypes.bool,
  centered: PropTypes.bool,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  touch: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tablet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  desktop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  widescreen: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fullhd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export { Column, Columns }

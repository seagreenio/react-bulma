import cx from 'clsx'
import React from 'react'

import { differenceObject, properRange } from 'lib/utils'

import CommonProps from '../types/CommonProps'
import Responsive, { ResponsiveType, Viewport, ViewportType } from '../types/Responsive'

export interface TypographyProps extends CommonProps {
  isSize?: Unit
  viewport?: Viewport | ViewportType
  textAlignment?: 'centered' | 'justified' | 'left' | 'right'
  responsive?: Responsive | ResponsiveType
  textTransformation?: 'capitalized' | 'lowercase' | 'uppercase' | 'italic'
  textWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  isFamily?: 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code'
}

const defaultProps = {
  isSize: undefined,
  viewport: undefined,
  textAlignment: undefined,
  responsive: undefined,
  textTransformation: undefined,
  textWeight: undefined,
  isFamily: undefined,
}

function withTypography<P>(Component: React.ElementType) {
  return (props: TypographyProps & P) => {
    const { isSize, viewport, textAlignment, responsive, textTransformation, textWeight, isFamily } = props
    const rest = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`is-size-${properRange(isSize!, [1, 7])}${viewport ? `-${viewport}` : ''}`]: isSize,
      [`has-text-${textAlignment}${responsive ? `-${responsive}` : ''}`]: textAlignment,
      [`is-${textTransformation}`]: textTransformation,
      [`has-text-weight-${textWeight}`]: textWeight,
      [`is-family-${isFamily}`]: isFamily,
    })

    return <Component className={classes} {...rest} />
  }
}

export default withTypography

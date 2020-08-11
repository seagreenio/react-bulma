import Responsive, {
  ResponsiveType,
  Viewport,
  ViewportType,
} from '../types/Responsive'
import { differenceObject, properRange } from 'lib/utils'

import CommonProps from '../types/CommonProps'
import React from 'react'
import { Unit } from '../types/Size'
import cx from 'classnames'

interface TypographyProps extends CommonProps {
  isSize?: Unit
  viewport?: Viewport | ViewportType
  hasText?: 'centered' | 'justified' | 'left' | 'right'
  responsive?: Responsive | ResponsiveType
  textTransformation?: 'capitalized' | 'lowercase' | 'uppercase' | 'italic'
  hasTextWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  fontFamily?: 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code'
}

const defaultProps = {
  isSize: undefined,
  viewport: undefined,
  hasText: undefined,
  responsive: undefined,
  textTransformation: undefined,
  hasTextWeight: undefined,
  fontFamily: undefined,
}

function withTypography<P>(
  Component:
    | React.FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | keyof JSX.IntrinsicElements
) {
  return (props: TypographyProps & P) => {
    const {
      isSize,
      viewport,
      hasText,
      responsive,
      textTransformation,
      hasTextWeight,
      fontFamily,
    } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`is-size-${properRange(isSize!, [1, 7])}${
        viewport ? `-${viewport}` : ''
      }`]: isSize,
      [`has-text-${hasText}${responsive ? `-${responsive}` : ''}`]: hasText,
      [`is-${textTransformation}`]: textTransformation,
      [`has-text-weight-${hasTextWeight}`]: hasTextWeight,
      [`is-${fontFamily}`]: fontFamily,
    })

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withTypography

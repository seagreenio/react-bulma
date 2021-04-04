import Color, {
  ColorType,
  DarkColor,
  DarkColorType,
  LightColor,
  LightColorType,
  ShadesOfGrey,
  ShadesOfGreyType,
} from '../types/Color'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import { differenceObject } from 'lib/utils'

export interface ColorProps extends CommonProps {
  hasText?:
    | Color
    | ColorType
    | LightColor
    | LightColorType
    | DarkColor
    | DarkColorType
    | ShadesOfGrey
    | ShadesOfGreyType
  hasBackground?:
    | Color
    | ColorType
    | LightColor
    | LightColorType
    | DarkColor
    | DarkColorType
    | ShadesOfGrey
    | ShadesOfGreyType
}

const defaultProps = {
  className: undefined,
  hasText: undefined,
  hasBackground: undefined,
}

function withColor<P>(Component: React.ElementType) {
  return (props: ColorProps & P) => {
    const { hasText, hasBackground } = props
    const rest = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`has-text-${hasText}`]: hasText,
      [`has-background-${hasBackground}`]: hasBackground,
    })

    return <Component className={classes} {...rest} />
  }
}

export default withColor

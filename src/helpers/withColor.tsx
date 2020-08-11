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

interface ColorProps extends CommonProps {
  hasBackground?:
    | Color
    | LightColor
    | DarkColor
    | ShadesOfGrey
    | ColorType
    | LightColorType
    | DarkColorType
    | ShadesOfGreyType
  hasText?:
    | Color
    | LightColor
    | DarkColor
    | ShadesOfGrey
    | ColorType
    | LightColorType
    | DarkColorType
    | ShadesOfGreyType
}

const defaultProps = {
  className: undefined,
  hasText: undefined,
  hasBackground: undefined,
}

function withColor<P>(
  Component:
    | React.FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | keyof JSX.IntrinsicElements
) {
  return (props: ColorProps & P) => {
    const { hasText, hasBackground } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`has-background-${hasBackground}`]: hasBackground,
      [`has-text-${hasText}`]: hasText,
    })

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withColor

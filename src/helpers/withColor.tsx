import Color, { ColorType, ExtendColor, ExtendColorType } from '../types/Color'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import { differenceObject } from 'lib/utils'

interface ColorProps extends CommonProps {
  hasText?: Color | ExtendColor | ColorType | ExtendColorType
  hasBackground?: Color | ExtendColor | ColorType | ExtendColorType
}

const defaultProps = {
  className: undefined,
  hasText: undefined,
  hasBackground: undefined,
}

function withColor<P>(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>
) {
  return (props: ColorProps & P) => {
    const { hasText, hasBackground } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`has-text-${hasText}`]: hasText,
      [`has-background-${hasBackground}`]: hasBackground,
    })

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withColor

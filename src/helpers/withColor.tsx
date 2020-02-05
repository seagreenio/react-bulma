import React from 'react'
import cx from 'classnames'
import { differenceObject } from 'lib/utils'
import CommonProps from '../types/CommonProps'
import Color, { ExtendColor } from '../types/Color'

interface ColorProps extends Omit<CommonProps, 'unselectable'> {
  hasText?: Color | ExtendColor | string
  hasBackground?: Color | ExtendColor | string
}

const defaultProps = {
  hasText: undefined,
  hasBackground: undefined,
}

function withColor<P>(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>
) {
  return (props: ColorProps & P) => {
    const { hasText, hasBackground } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx({
      [`has-text-${hasText}`]: hasText,
      [`has-background-${hasBackground}`]: hasBackground,
    })

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withColor

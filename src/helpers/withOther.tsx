import CommonProps from 'types/CommonProps'
import React from 'react'
import cx from 'classnames'
import { differenceObject } from 'lib/utils'

interface OtherProps extends CommonProps {
  clearfix?: boolean
  pulled?: 'left' | 'right'
  overlay?: boolean
  clipped?: boolean
  radiusless?: boolean
  shadowless?: boolean
  bulmaUnselectable?: boolean
  relative?: boolean
}

const defaultProps = {
  className: undefined,
  clearfix: undefined,
  pulled: undefined,
  overlay: undefined,
  clipped: undefined,
  radiusless: undefined,
  shadowless: undefined,
  bulmaUnselectable: undefined,
  relative: undefined,
}

function withOther<P>(
  Component:
    | React.FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | keyof JSX.IntrinsicElements
) {
  return (props: OtherProps & P) => {
    const {
      clearfix,
      pulled,
      overlay,
      clipped,
      radiusless,
      shadowless,
      bulmaUnselectable,
      relative,
    } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      'is-clearfix': clearfix,
      [`is-pulled-${pulled}`]: pulled,
      'is-overlay': overlay,
      'is-clipped': clipped,
      'is-radiusless': radiusless,
      'is-shadowless': shadowless,
      'is-unselectable': bulmaUnselectable,
      'is-relative': relative,
    })

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withOther

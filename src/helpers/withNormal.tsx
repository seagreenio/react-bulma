import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import { differenceObject } from 'lib/utils'

interface NormalProps extends CommonProps {
  clearfix?: boolean
  pulled?: 'left' | 'right'
  marginless?: boolean
  paddingless?: boolean
  overlay?: boolean
  clipped?: boolean
  radiusless?: boolean
  shadowless?: boolean
  bulmaUnselectable?: boolean
  invisible?: boolean
  hidden?: boolean
  srOnly?: boolean
  relative?: boolean
}

const defaultProps = {
  className: undefined,
  clearfix: undefined,
  pulled: undefined,
  marginless: undefined,
  paddingless: undefined,
  overlay: undefined,
  clipped: undefined,
  radiusless: undefined,
  shadowless: undefined,
  bulmaUnselectable: undefined,
  invisible: undefined,
  hidden: undefined,
  srOnly: undefined,
  relative: undefined,
}

function withNormal<P>(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>
) {
  return (props: NormalProps & P) => {
    const {
      clearfix,
      pulled,
      marginless,
      paddingless,
      overlay,
      clipped,
      radiusless,
      shadowless,
      bulmaUnselectable,
      invisible,
      hidden,
      srOnly,
      relative,
    } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx(
      {
        'is-clearfix': clearfix,
        [`is-pulled-${pulled}`]: pulled,
        'is-paddingless': paddingless,
        'is-marginless': marginless,
        'is-overlay': overlay,
        'is-clipped': clipped,
        'is-radiusless': radiusless,
        'is-shadowless': shadowless,
        'is-unselectable': bulmaUnselectable,
        'is-invisible': invisible,
        'is-hidden': hidden,
        'is-sr-only': srOnly,
        'is-relative': relative,
      },
      props.className
    )

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withNormal

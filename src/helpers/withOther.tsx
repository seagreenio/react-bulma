import cx from 'clsx'
import React from 'react'

import { differenceObject } from 'lib/utils'

import CommonProps from '../types/CommonProps'

export interface OtherProps extends CommonProps {
  clearfix?: boolean
  pulled?: 'left' | 'right'
  overlay?: boolean
  clipped?: boolean
  radiusless?: boolean
  shadowless?: boolean
  bulmaUnselectable?: boolean
  clickable?: boolean
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
  clickable: undefined,
  relative: undefined,
}

function withOther<P>(Component: React.ElementType) {
  return (props: OtherProps & P) => {
    const { clearfix, pulled, overlay, clipped, radiusless, shadowless, bulmaUnselectable, clickable, relative } = props
    const rest = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      'is-clearfix': clearfix,
      [`is-pulled-${pulled}`]: pulled,
      'is-overlay': overlay,
      'is-clipped': clipped,
      'is-radiusless': radiusless,
      'is-shadowless': shadowless,
      'is-unselectable': bulmaUnselectable,
      'is-clickable': clickable,
      'is-relative': relative,
    })

    return <Component className={classes} {...rest} />
  }
}

export default withOther

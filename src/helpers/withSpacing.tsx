import cx from 'clsx'
import React from 'react'

import { differenceObject, properRange } from 'lib/utils'

import CommonProps from '../types/CommonProps'

export interface SpacingProps extends CommonProps {
  m?: Unit
  mt?: Unit
  mr?: Unit
  mb?: Unit
  ml?: Unit
  mx?: Unit
  my?: Unit
  p?: Unit
  pt?: Unit
  pr?: Unit
  pb?: Unit
  pl?: Unit
  px?: Unit
  py?: Unit
}

const defaultProps = {
  className: undefined,
  m: undefined,
  mt: undefined,
  mr: undefined,
  mb: undefined,
  ml: undefined,
  mx: undefined,
  my: undefined,
  p: undefined,
  pt: undefined,
  pr: undefined,
  pb: undefined,
  pl: undefined,
  px: undefined,
  py: undefined,
}

function withSpacing<P>(Component: React.ElementType) {
  return (props: SpacingProps & P) => {
    const { m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py } = props
    const rest = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`m-${properRange(m!, [0, 6])}`]: m,
      [`mt-${properRange(mt!, [0, 6])}`]: mt,
      [`mr-${properRange(mr!, [0, 6])}`]: mr,
      [`mb-${properRange(mb!, [0, 6])}`]: mb,
      [`ml-${properRange(ml!, [0, 6])}`]: ml,
      [`mx-${properRange(mx!, [0, 6])}`]: mx,
      [`my-${properRange(my!, [0, 6])}`]: my,
      [`p-${properRange(p!, [0, 6])}`]: p,
      [`pt-${properRange(pt!, [0, 6])}`]: pt,
      [`pr-${properRange(pr!, [0, 6])}`]: pr,
      [`pb-${properRange(pb!, [0, 6])}`]: pb,
      [`pl-${properRange(pl!, [0, 6])}`]: pl,
      [`px-${properRange(px!, [0, 6])}`]: px,
      [`py-${properRange(py!, [0, 6])}`]: py,
    })

    return <Component className={classes} {...rest} />
  }
}

export default withSpacing

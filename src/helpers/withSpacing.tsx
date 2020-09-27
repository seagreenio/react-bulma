import { differenceObject, properRange } from 'lib/utils'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'

interface SpacingProps extends CommonProps {
  mt?: Unit
  mr?: Unit
  mb?: Unit
  ml?: Unit
  mx?: Unit
  my?: Unit
  pt?: Unit
  pr?: Unit
  pb?: Unit
  pl?: Unit
  px?: Unit
  py?: Unit
}

const defaultProps = {
  className: undefined,
  mt: undefined,
  mr: undefined,
  mb: undefined,
  ml: undefined,
  mx: undefined,
  my: undefined,
  pt: undefined,
  pr: undefined,
  pb: undefined,
  pl: undefined,
  px: undefined,
  py: undefined,
}

function withSpacing<P>(
  Component:
    | React.FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | keyof JSX.IntrinsicElements
) {
  return (props: SpacingProps & P) => {
    const { mt, mr, mb, ml, mx, my, pt, pr, pb, pl, px, py } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`mt-${properRange(mt!, [0, 6])}`]: mt,
      [`mr-${properRange(mr!, [0, 6])}`]: mr,
      [`mb-${properRange(mb!, [0, 6])}`]: mb,
      [`ml-${properRange(ml!, [0, 6])}`]: ml,
      [`mx-${properRange(mx!, [0, 6])}`]: mx,
      [`my-${properRange(my!, [0, 6])}`]: my,
      [`pt-${properRange(pt!, [0, 6])}`]: pt,
      [`pr-${properRange(pr!, [0, 6])}`]: pr,
      [`pb-${properRange(pb!, [0, 6])}`]: pb,
      [`pl-${properRange(pl!, [0, 6])}`]: pl,
      [`px-${properRange(px!, [0, 6])}`]: px,
      [`py-${properRange(py!, [0, 6])}`]: py,
    })

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withSpacing

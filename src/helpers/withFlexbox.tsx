import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import { differenceObject } from 'lib/utils'

export interface FlexboxProps extends CommonProps {
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
  alignContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
  alignItems:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end'
  alignSelf: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  flexGrow: number
  flexShrink: number
}

const defaultProps = {
  className: undefined,
  flexDirection: undefined,
  flexWrap: undefined,
  justifyContent: undefined,
  alignContent: undefined,
  alignItems: undefined,
  alignSelf: undefined,
  flexGrow: undefined,
  flexShrink: undefined,
}

function withFlexbox<P>(Component: React.ElementType) {
  return (props: FlexboxProps & P) => {
    const { flexDirection, flexWrap, justifyContent, alignContent, alignItems, alignSelf, flexGrow, flexShrink } = props
    const rest = differenceObject(props, defaultProps)

    const classes = cx(props.className, {
      [`is-flex-direction-${flexDirection}`]: flexDirection,
      [`is-flex-wrap`]: flexWrap,
      [`is-justify-content`]: justifyContent,
      [`is-align-content`]: alignContent,
      [`is-align-items`]: alignItems,
      [`is-align-self`]: alignSelf,
      [`is-flex-grow`]: flexGrow,
      [`is-flex-shrink`]: flexShrink,
    })

    return <Component className={classes} {...rest} />
  }
}

export default withFlexbox

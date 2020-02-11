import Responsive, { ResponsiveType } from '../types/Responsive'

import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import { differenceObject } from 'lib/utils'

interface ResponsiveProps extends CommonProps {
  isBlock?: boolean | Responsive | ResponsiveType
  isFlex?: boolean | Responsive | ResponsiveType
  isInline?: boolean | Responsive | ResponsiveType
  isInlineBlock?: boolean | Responsive | ResponsiveType
  isInlineFlex?: boolean | Responsive | ResponsiveType
  isHidden?: boolean | Responsive | ResponsiveType
}

const defaultProps = {
  className: undefined,
  isBlock: undefined,
  isFlex: undefined,
  isInline: undefined,
  isInlineBlock: undefined,
  isInlineFlex: undefined,
  isHidden: undefined,
}

function withResponsive<p>(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>
) {
  return (props: ResponsiveProps & p) => {
    const {
      isBlock,
      isFlex,
      isInline,
      isInlineBlock,
      isInlineFlex,
      isHidden,
    } = props
    const unHandledProps = differenceObject(props, defaultProps)

    const classes = cx(
      {
        [`is-block`]: typeof isBlock === 'boolean' && isBlock,
        [`is-block-${isBlock}`]: typeof isBlock === 'string' && isBlock,
        [`is-flex`]: typeof isFlex === 'boolean' && isFlex,
        [`is-flex-${isFlex}`]: typeof isFlex === 'string' && isFlex,
        [`is-inline`]: typeof isInline === 'boolean' && isInline,
        [`is-inline-${isInline}`]: typeof isInline === 'boolean' && isInline,
        [`is-inline-block`]:
          typeof isInlineBlock === 'boolean' && isInlineBlock,
        [`is-inline-block-${isInlineBlock}`]:
          typeof isInlineBlock === 'boolean' && isInlineBlock,
        [`is-inline-flex`]: typeof isInlineFlex === 'boolean' && isInlineFlex,
        [`is-inline-flex-${isInlineFlex}`]:
          typeof isInlineFlex === 'boolean' && isInlineFlex,
        [`is-hidden`]: typeof isHidden === 'boolean' && isHidden,
        [`is-hidden-${isHidden}`]: typeof isHidden === 'string' && isHidden,
      },
      props.className
    )

    return <Component className={classes} {...unHandledProps} />
  }
}

export default withResponsive

import { Viewport, ViewportType } from '../types/Responsive'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

type Breakpoint =
  | Viewport.Desktop
  | Viewport.Widescreen
  | Viewport.FullHD
  | Extract<ViewportType, 'desktop' | 'widescreen' | 'fullhd'>

export interface ContainerProps extends CommonProps {
  breakpoint?: Breakpoint
  max?: Breakpoint
  fluid?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  const { breakpoint, max, fluid } = props

  const rest = getUnhandledProps(Container, props)
  const ElementType = detectElementType(Container, props)
  const classes = cx('container', className, {
    [`is-${breakpoint}`]: breakpoint,
    [`is-max-${breakpoint}`]: max,
    [`is-fluid`]: fluid,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Container.propTypes = {
  breakpoint: PropTypes.string as any,
  max: PropTypes.string as any,
  fluid: PropTypes.bool,
}

export default Container

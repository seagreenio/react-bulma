import Color, { ColorType } from '../types/Color'
import Size, { SizeType } from '../types/Size'

import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface HeroProps extends CommonProps {
  head?: boolean
  body?: boolean
  foot?: boolean
  color?: Color | ColorType
  size?: Size | SizeType | 'halfheight' | 'fullheight'
  fullheightWithNavbar?: boolean
}

const Hero: React.FC<HeroProps> = ({ children, className, ...props }) => {
  const { head, body, foot } = props
  let heroClassName = 'hero'
  if (head) {
    heroClassName = 'hero-head'
  } else if (body) {
    heroClassName = 'hero-body'
  } else if (foot) {
    heroClassName = 'hero-foot'
  }

  const rest = getUnhandledProps(Hero, props)
  const ElementType = detectElementType(Hero, props)
  const classes = cx(heroClassName, className, {
    [`is-${props.color}`]: props.color,
    [`is-${props.size}`]: props.size,
    [`is-fullheight-with-navbar`]: props.fullheightWithNavbar,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Hero.propTypes = {
  head: PropTypes.bool,
  body: PropTypes.bool,
  foot: PropTypes.bool,
  color: PropTypes.string as any,
  size: PropTypes.any,
  fullheightWithNavbar: PropTypes.bool,
}

export default Hero

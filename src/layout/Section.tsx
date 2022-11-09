import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'
import Size, { SizeType } from '../types/Size'

export interface SectionProps extends CommonProps {
  size?: Size.Medium | Size.Large | Extract<SizeType, 'medium' | 'large'>
}

const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Section, props)
  const ElementType = detectElementType(Section, props)
  const classes = cx('section', className, {
    [`is-${props.size}`]: props.size,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Section.propTypes = {
  size: PropTypes.string as any,
}

export default Section

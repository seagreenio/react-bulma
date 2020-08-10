import Size, { SizeType } from 'types/Size'

import CommonProps from 'types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface SectionProps extends CommonProps {
  padding?: Size.Medium | Size.Large | Extract<SizeType, 'medium' | 'large'>
}

const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Section, props)
  const ElementType = detectElementType(Section, props)
  const classes = cx('section', className, {
    [`is-${props.padding}`]: props.padding,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Section.defaultProps = {
  as: 'div',
  className: undefined,
  padding: undefined,
}

export default Section

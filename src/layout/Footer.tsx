import cx from 'clsx'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

export type FooterProps = CommonProps

const Footer: React.FC<FooterProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Footer, props)
  const ElementType = detectElementType(Footer, props)
  const classes = cx('footer', className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Footer.defaultProps = {
  as: 'footer',
}

export default Footer

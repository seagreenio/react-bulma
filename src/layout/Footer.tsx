import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

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

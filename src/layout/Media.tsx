import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface MediaProps extends Omit<CommonProps, 'content'> {
  left?: boolean
  right?: boolean
  content?: boolean
}

const Media: React.FC<MediaProps> = ({ children, className, ...props }) => {
  const { left, right, content } = props
  let mediaClassName = 'media'
  if (left) {
    mediaClassName = 'media-left'
  } else if (right) {
    mediaClassName = 'media-right'
  } else if (content) {
    mediaClassName = 'media-content'
  }

  const rest = getUnhandledProps(Media, props)
  const ElementType = detectElementType(Media, props)
  const classes = cx(mediaClassName, className)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Media.defaultProps = {
  as: 'div',
  className: undefined,
  left: undefined,
  right: undefined,
  content: undefined,
}

export default Media

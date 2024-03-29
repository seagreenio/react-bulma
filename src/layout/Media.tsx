import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

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

Media.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  content: PropTypes.bool,
}

export default Media

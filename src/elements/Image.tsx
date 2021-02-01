import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ImageProps extends CommonProps {
  src?: string
  alt?: string
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>
  size?: 16 | '16' | 24 | '24' | 32 | '32' | 48 | '48' | 64 | '64' | 96 | '96' | 128 | '128'
  rounded?: boolean
  square?: boolean
  by?: string
}

const Image: React.FC<ImageProps> = ({ children, className, ...props }) => {
  const { src, alt } = props
  const imgProps = props.imgProps
  const imgClassName = props.rounded
    ? `${imgProps?.className ? imgProps.className + ' ' : ''}is-rounded`
    : imgProps?.className

  const rest = getUnhandledProps(Image, props)
  const ElementType = detectElementType(Image, props)
  const classes = cx('image', className, {
    [`is-${props.size}x${props.size}`]: props.size,
    [`is-square`]: props.square,
    [`is-${props.by}`]: props.by,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children || <img {...imgProps} className={imgClassName} src={src} alt={alt} />}
    </ElementType>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imgProps: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) as any,
  rounded: PropTypes.bool,
  square: PropTypes.bool,
  by: PropTypes.string,
}

Image.defaultProps = {
  as: 'figure',
}

export default Image

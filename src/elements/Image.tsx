import CommonProps from '../types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface ImageProps extends Omit<CommonProps, 'size'> {
  src?: string
  alt?: string
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>
  size?:
    | 16
    | '16'
    | 24
    | '24'
    | 32
    | '32'
    | 48
    | '48'
    | 64
    | '64'
    | 96
    | '96'
    | 128
    | '128'
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
      {children || (
        <img {...imgProps} className={imgClassName} src={src} alt={alt} />
      )}
    </ElementType>
  )
}

Image.defaultProps = {
  as: 'figure',
  className: undefined,
  src: undefined,
  alt: undefined,
  imgProps: undefined,
  size: undefined,
  rounded: undefined,
  square: undefined,
  by: undefined,
}

export default Image

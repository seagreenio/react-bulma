import { createElement } from 'react'
import { defaultPrefix, type Prefix } from './config'
import { helperNames, type Helpers } from './helpers'
import {
  classNames,
  forwardRefComponent,
  type Color,
  type NativeProps,
  type NativeTagProps,
} from './shared'

export type ButtonProps = NativeTagProps<
  'button',
  'input' | 'span',
  {
    color?: Color
    tone?: 'light' | 'dark' | 'soft' | 'bold'
    variant?: 'text' | 'ghost'
    state?: 'hovered' | 'focused' | 'active'
    selected?: boolean
    expanded?: boolean
    size?: 'small' | 'normal' | 'medium' | 'large'
    outlined?: boolean
    inverted?: boolean
    rounded?: boolean
    fullWidth?: boolean
    responsive?: boolean
    loading?: boolean
    helpers?: Helpers
    disabled?: boolean
  }
>

export interface BulmaRootProps extends NativeProps<'div'> {
  theme?: 'light' | 'dark' | 'system'
  helpers?: Helpers
}

export function createButton(prefix: Prefix) {
  const helpers = (values?: Helpers) => helperNames(prefix, values)
  return forwardRefComponent(function Button({
    as,
    color,
    tone,
    variant,
    state,
    selected,
    expanded,
    size,
    outlined,
    inverted,
    rounded,
    fullWidth,
    responsive,
    loading,
    helpers: values,
    className,
    disabled,
    'aria-busy': ariaBusy,
    ...nativeProps
  }: ButtonProps) {
    const modifiers = [
      color,
      tone,
      variant,
      state,
      selected && 'selected',
      expanded && 'expanded',
      size,
      outlined && 'outlined',
      inverted && 'inverted',
      rounded && 'rounded',
      fullWidth && 'fullwidth',
      responsive && 'responsive',
      loading && 'loading',
    ]
      .filter(Boolean)
      .map((value) => `${prefix}is-${value}`)
    return createElement(as ?? 'button', {
      ...nativeProps,
      type:
        as === 'span'
          ? undefined
          : (('type' in nativeProps ? nativeProps.type : undefined) ??
            'button'),
      onClick:
        as === 'span' && (loading || disabled)
          ? (event: { preventDefault(): void }) => event.preventDefault()
          : nativeProps.onClick,
      disabled: as === 'span' ? undefined : loading || disabled,
      'aria-disabled':
        as === 'span'
          ? loading || disabled || nativeProps['aria-disabled']
          : nativeProps['aria-disabled'],
      'aria-busy': loading || ariaBusy,
      'data-loading-disabled': loading && !disabled ? '' : undefined,
      className: [`${prefix}button`, ...modifiers, helpers(values), className]
        .filter(Boolean)
        .join(' '),
    })
  })
}

export const Button = /* @__PURE__ */ createButton(defaultPrefix)

export function createBulmaRoot(prefix: Prefix) {
  return forwardRefComponent(function BulmaRoot({
    theme = 'light',
    helpers: values,
    className,
    ...nativeProps
  }: BulmaRootProps) {
    return (
      <div
        {...nativeProps}
        data-react-bulma-root=""
        className={classNames(
          prefix,
          ['root', theme !== 'light' && `theme-${theme}`],
          values,
          className,
        )}
      />
    )
  })
}

export const BulmaRoot = /* @__PURE__ */ createBulmaRoot(defaultPrefix)

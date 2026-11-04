import { Children, createElement, type ReactNode } from 'react'
import { defaultPrefix, type Prefix } from './config'
import {
  classNames,
  forwardRefComponent,
  styledElement,
  type NativeProps,
  type NativeTagProps,
  type Color,
  type Size,
} from './shared'

export type FieldProps = NativeTagProps<
  'div',
  'p',
  {
    horizontal?: boolean
    narrow?: boolean
    layout?: 'addons' | 'grouped'
    alignment?: 'centered' | 'right'
    multiline?: boolean
    fullWidth?: boolean
  }
>
export type FieldLabelProps = NativeProps<'div'> & { size?: Size }
export type FieldBodyProps = NativeProps<'div'>
export type LabelProps = NativeProps<'label'> & { size?: Size }
export type ControlProps = NativeTagProps<
  'div',
  'p',
  {
    expanded?: boolean
    loading?: boolean
    size?: Size
    icons?: 'left' | 'right' | 'both'
  }
>
export type HelpProps = NativeProps<'p'> & { color?: Color }
type InputStyleProps = {
  color?: Color
  size?: Size
  fullWidth?: boolean
  inline?: boolean
  state?: 'hovered' | 'focused' | 'active'
}
export type InputProps = Omit<NativeProps<'input'>, 'size' | 'color'> &
  InputStyleProps & {
    htmlSize?: number
    rounded?: boolean
    static?: boolean
  }
export type TextareaProps = Omit<NativeProps<'textarea'>, 'color'> &
  InputStyleProps & { fixedSize?: boolean }
export type SelectProps = Omit<NativeProps<'select'>, 'size' | 'color'> & {
  color?: Color
  size?: Size
  htmlSize?: number
  rounded?: boolean
  loading?: boolean
  fullWidth?: boolean
} & (
    | {
        as?: 'div'
        wrapperProps?: Omit<NativeProps<'div'>, 'children' | 'helpers'>
      }
    | {
        as: 'span'
        wrapperProps?: Omit<NativeProps<'span'>, 'children' | 'helpers'>
      }
  )
export type CheckboxProps = Omit<NativeProps<'input'>, 'type' | 'children'> & {
  children?: ReactNode
  wrapperProps?: Omit<NativeProps<'label'>, 'children' | 'helpers'>
}
export type RadioProps = CheckboxProps
export type CheckboxesProps = NativeProps<'div'>
export type RadiosProps = NativeProps<'div'>
export type FileProps = Omit<
  NativeProps<'input'>,
  'type' | 'size' | 'color' | 'value' | 'defaultValue' | 'children'
> & {
  children?: ReactNode
  color?: Color
  size?: Size
  boxed?: boolean
  fullWidth?: boolean
  alignment?: 'centered' | 'right'
  filename?: string
  icon?: ReactNode
  wrapperProps?: Omit<NativeProps<'div'>, 'children' | 'helpers'>
}

function checkLabel(children: ReactNode): ReactNode {
  const content = Children.toArray(children)
  const first = content[0]
  if (typeof first === 'string')
    content[0] = /^\s/.test(first) ? first : ` ${first}`
  else if (content.length) content.unshift(' ')
  return content
}

export function createField(prefix: Prefix) {
  return forwardRefComponent(function Field({
    as,
    horizontal,
    narrow,
    layout,
    alignment,
    multiline,
    fullWidth,
    helpers,
    className,
    ...props
  }: FieldProps) {
    return createElement(as ?? 'div', {
      ...props,
      className: classNames(
        prefix,
        [
          'field',
          horizontal && 'is-horizontal',
          narrow && 'is-narrow',
          layout === 'addons' && 'has-addons',
          layout === 'grouped' && 'is-grouped',
          layout === 'addons' && alignment && `has-addons-${alignment}`,
          layout === 'grouped' && alignment && `is-grouped-${alignment}`,
          layout === 'grouped' && multiline && 'is-grouped-multiline',
          layout === 'addons' && fullWidth && 'has-addons-fullwidth',
        ],
        helpers,
        className,
      ),
    })
  })
}

export const Field = /* @__PURE__ */ createField(defaultPrefix)

export function createFieldLabel(prefix: Prefix) {
  return forwardRefComponent(function FieldLabel({
    size,
    helpers,
    className,
    ...props
  }: FieldLabelProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          ['field-label', size && `is-${size}`],
          helpers,
          className,
        )}
      />
    )
  })
}

export const FieldLabel = /* @__PURE__ */ createFieldLabel(defaultPrefix)

export function createFieldBody(prefix: Prefix) {
  return styledElement(prefix, 'div', 'field-body')
}

export const FieldBody = /* @__PURE__ */ createFieldBody(defaultPrefix)

export function createLabel(prefix: Prefix) {
  return forwardRefComponent(function Label({
    size,
    helpers,
    className,
    ...props
  }: LabelProps) {
    return (
      <label
        {...props}
        className={classNames(
          prefix,
          ['label', size && `is-${size}`],
          helpers,
          className,
        )}
      />
    )
  })
}

export const Label = /* @__PURE__ */ createLabel(defaultPrefix)

export function createControl(prefix: Prefix) {
  return forwardRefComponent(function Control({
    as,
    expanded,
    loading,
    size,
    icons,
    helpers,
    className,
    ...props
  }: ControlProps) {
    return createElement(as ?? 'div', {
      ...props,
      className: classNames(
        prefix,
        [
          'control',
          expanded && 'is-expanded',
          loading && 'is-loading',
          size && `is-${size}`,
          (icons === 'left' || icons === 'both') && 'has-icons-left',
          (icons === 'right' || icons === 'both') && 'has-icons-right',
        ],
        helpers,
        className,
      ),
    })
  })
}

export const Control = /* @__PURE__ */ createControl(defaultPrefix)

export function createHelp(prefix: Prefix) {
  return forwardRefComponent(function Help({
    color,
    helpers,
    className,
    ...props
  }: HelpProps) {
    return (
      <p
        {...props}
        className={classNames(
          prefix,
          ['help', color && `is-${color}`],
          helpers,
          className,
        )}
      />
    )
  })
}

export const Help = /* @__PURE__ */ createHelp(defaultPrefix)

export function createInput(prefix: Prefix) {
  return forwardRefComponent(function Input({
    color,
    size,
    htmlSize,
    rounded,
    static: isStatic,
    fullWidth,
    inline,
    state,
    helpers,
    className,
    ...props
  }: InputProps) {
    return (
      <input
        {...props}
        size={htmlSize}
        className={classNames(
          prefix,
          [
            'input',
            color && `is-${color}`,
            size && `is-${size}`,
            rounded && 'is-rounded',
            isStatic && 'is-static',
            fullWidth && 'is-fullwidth',
            inline && 'is-inline',
            state && `is-${state}`,
          ],
          helpers,
          className,
        )}
      />
    )
  })
}

export const Input = /* @__PURE__ */ createInput(defaultPrefix)

export function createTextarea(prefix: Prefix) {
  return forwardRefComponent(function Textarea({
    color,
    size,
    fixedSize,
    fullWidth,
    inline,
    state,
    helpers,
    className,
    ...props
  }: TextareaProps) {
    return (
      <textarea
        {...props}
        className={classNames(
          prefix,
          [
            'textarea',
            color && `is-${color}`,
            size && `is-${size}`,
            fixedSize && 'has-fixed-size',
            fullWidth && 'is-fullwidth',
            inline && 'is-inline',
            state && `is-${state}`,
          ],
          helpers,
          className,
        )}
      />
    )
  })
}

export const Textarea = /* @__PURE__ */ createTextarea(defaultPrefix)

export function createSelect(prefix: Prefix) {
  return forwardRefComponent(function Select({
    as,
    color,
    size,
    htmlSize,
    rounded,
    loading,
    fullWidth,
    multiple,
    disabled,
    helpers,
    wrapperProps,
    ...props
  }: SelectProps) {
    return createElement(as ?? 'div', {
      ...wrapperProps,
      className: classNames(
        prefix,
        [
          'select',
          color && `is-${color}`,
          size && `is-${size}`,
          rounded && 'is-rounded',
          loading && 'is-loading',
          fullWidth && 'is-fullwidth',
          multiple && 'is-multiple',
          disabled && 'is-disabled',
        ],
        helpers,
        wrapperProps?.className,
      ),
      children: (
        <select
          {...props}
          size={htmlSize}
          multiple={multiple}
          disabled={disabled}
        />
      ),
    })
  })
}

export const Select = /* @__PURE__ */ createSelect(defaultPrefix)

export function createCheckbox(prefix: Prefix) {
  return forwardRefComponent(function Checkbox({
    children,
    helpers,
    wrapperProps,
    ...props
  }: CheckboxProps) {
    return (
      <label
        {...wrapperProps}
        className={classNames(
          prefix,
          ['checkbox'],
          helpers,
          wrapperProps?.className,
        )}
      >
        <input {...props} type="checkbox" />
        {checkLabel(children)}
      </label>
    )
  })
}

export const Checkbox = /* @__PURE__ */ createCheckbox(defaultPrefix)

export function createRadio(prefix: Prefix) {
  return forwardRefComponent(function Radio({
    children,
    helpers,
    wrapperProps,
    ...props
  }: RadioProps) {
    return (
      <label
        {...wrapperProps}
        className={classNames(
          prefix,
          ['radio'],
          helpers,
          wrapperProps?.className,
        )}
      >
        <input {...props} type="radio" />
        {checkLabel(children)}
      </label>
    )
  })
}

export const Radio = /* @__PURE__ */ createRadio(defaultPrefix)

export function createCheckboxes(prefix: Prefix) {
  return forwardRefComponent(function Checkboxes({
    helpers,
    className,
    ...props
  }: CheckboxesProps) {
    return (
      <div
        role="group"
        {...props}
        className={classNames(prefix, ['checkboxes'], helpers, className)}
      />
    )
  })
}

export const Checkboxes = /* @__PURE__ */ createCheckboxes(defaultPrefix)

export function createRadios(prefix: Prefix) {
  return forwardRefComponent(function Radios({
    helpers,
    className,
    ...props
  }: RadiosProps) {
    return (
      <div
        role="group"
        {...props}
        className={classNames(prefix, ['radios'], helpers, className)}
      />
    )
  })
}

export const Radios = /* @__PURE__ */ createRadios(defaultPrefix)

export function createFile(prefix: Prefix) {
  return forwardRefComponent(function File({
    children = 'Choose a file…',
    disabled,
    color,
    size,
    boxed,
    fullWidth,
    alignment,
    filename,
    icon,
    helpers,
    wrapperProps,
    className,
    ...props
  }: FileProps) {
    return (
      <div
        {...wrapperProps}
        aria-disabled={disabled || wrapperProps?.['aria-disabled']}
        className={classNames(
          prefix,
          [
            'file',
            color && `is-${color}`,
            size && `is-${size}`,
            boxed && 'is-boxed',
            fullWidth && 'is-fullwidth',
            alignment && `is-${alignment}`,
            filename !== undefined && 'has-name',
            filename === '' && 'is-empty',
          ],
          helpers,
          wrapperProps?.className,
        )}
      >
        <label className={classNames(prefix, ['file-label'])}>
          <input
            {...props}
            type="file"
            disabled={disabled}
            className={classNames(prefix, ['file-input'], undefined, className)}
          />
          <span className={classNames(prefix, ['file-cta'])}>
            {icon && (
              <span
                className={classNames(prefix, ['file-icon'])}
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            <span className={classNames(prefix, ['file-label'])}>
              {children}
            </span>
          </span>
          {filename !== undefined && (
            <span className={classNames(prefix, ['file-name'])}>
              {filename}
            </span>
          )}
        </label>
      </div>
    )
  })
}

export const File = /* @__PURE__ */ createFile(defaultPrefix)

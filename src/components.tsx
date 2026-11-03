import { createElement, type ReactNode } from 'react'
import type { Prefix } from './config'
import {
  classNames,
  forwardRefComponent,
  styledElement,
  type NativeProps,
  type NativeTagProps,
  type Color,
  type Size,
} from './shared'

export type BreadcrumbProps = NativeProps<'nav'> & {
  size?: Size
  alignment?: 'centered' | 'right'
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds'
  listProps?: Omit<NativeProps<'ul'>, 'children'>
}
export type BreadcrumbItemProps = NativeProps<'a'> & {
  active?: boolean
  wrapperProps?: Omit<NativeProps<'li'>, 'children' | 'helpers'>
}
export type CardProps = NativeProps<'div'>
export type CardHeaderProps = NativeProps<'header'>
export type CardHeaderTitleProps = NativeProps<'p'> & { centered?: boolean }
export type CardHeaderIconProps = NativeProps<'button'>
export type CardImageProps = NativeProps<'div'>
export type CardContentProps = NativeProps<'div'>
export type CardFooterProps = NativeProps<'footer'>
export type CardFooterItemProps = NativeTagProps<'a', 'p'>
export type MenuProps = NativeProps<'aside'> & { size?: Size }
export type MenuLabelProps = NativeProps<'p'>
export type MenuListProps = NativeProps<'ul'>
export type MenuItemProps = NativeProps<'a'> & {
  active?: boolean
  nested?: ReactNode
  wrapperProps?: Omit<NativeProps<'li'>, 'children' | 'helpers'>
}
export type MessageProps = NativeTagProps<
  'article',
  'div',
  {
    color?: Color
    size?: Size
  }
>
export type MessageHeaderProps = NativeProps<'div'>
export type MessageBodyProps = NativeProps<'div'>
export type PaginationProps = NativeProps<'nav'> & {
  size?: Size
  alignment?: 'centered' | 'right'
  rounded?: boolean
}
export type PaginationListProps = NativeProps<'ul'>
export type PaginationLinkProps = NativeProps<'a'> & {
  current?: boolean
  disabled?: boolean
  wrapperProps?: Omit<NativeProps<'li'>, 'children' | 'helpers'>
}
export type PaginationPreviousProps = NativeProps<'a'> & { disabled?: boolean }
export type PaginationNextProps = PaginationPreviousProps
export type PaginationEllipsisProps = NativeProps<'span'> & {
  wrapperProps?: Omit<NativeProps<'li'>, 'children' | 'helpers'>
}
export type PanelProps = NativeTagProps<'nav', 'article', { color?: Color }>
export type PanelHeadingProps = NativeProps<'p'>
export type PanelTabsProps = NativeProps<'p'>
export type PanelTabProps = NativeProps<'a'> & { active?: boolean }
type PanelBlockStyle = { active?: boolean; wrapped?: boolean }
export type PanelBlockProps = PanelBlockStyle &
  (
    | (NativeProps<'div'> & { as?: 'div' })
    | (NativeProps<'a'> & { as: 'a' })
    | (NativeProps<'label'> & { as: 'label' })
  )
export type PanelIconProps = NativeProps<'span'>

export function createComponents(prefix: Prefix) {
  const Breadcrumb = forwardRefComponent(function Breadcrumb({
    size,
    alignment,
    separator,
    listProps,
    children,
    helpers,
    className,
    ...props
  }: BreadcrumbProps) {
    const {
      helpers: listHelpers,
      className: listClassName,
      ...listNativeProps
    } = listProps ?? {}
    return (
      <nav
        aria-label="Breadcrumb"
        {...props}
        className={classNames(
          prefix,
          [
            'breadcrumb',
            size && `is-${size}`,
            alignment && `is-${alignment}`,
            separator && `has-${separator}-separator`,
          ],
          helpers,
          className,
        )}
      >
        <ul
          {...listNativeProps}
          className={classNames(prefix, [], listHelpers, listClassName)}
        >
          {children}
        </ul>
      </nav>
    )
  })
  const BreadcrumbItem = forwardRefComponent(function BreadcrumbItem({
    active,
    wrapperProps,
    helpers,
    children,
    ...props
  }: BreadcrumbItemProps) {
    return (
      <li
        {...wrapperProps}
        className={classNames(
          prefix,
          [active && 'is-active'],
          helpers,
          wrapperProps?.className,
        )}
      >
        <a {...props} aria-current={active ? 'page' : props['aria-current']}>
          {children}
        </a>
      </li>
    )
  })
  const Card = styledElement(prefix, 'div', 'card')
  const CardHeader = styledElement(prefix, 'header', 'card-header')
  const CardHeaderTitle = forwardRefComponent(function CardHeaderTitle({
    centered,
    helpers,
    className,
    ...props
  }: CardHeaderTitleProps) {
    return (
      <p
        {...props}
        className={classNames(
          prefix,
          ['card-header-title', centered && 'is-centered'],
          helpers,
          className,
        )}
      />
    )
  })
  const CardHeaderIcon = forwardRefComponent(function CardHeaderIcon({
    helpers,
    className,
    type = 'button',
    ...props
  }: CardHeaderIconProps) {
    return (
      <button
        {...props}
        type={type}
        className={classNames(prefix, ['card-header-icon'], helpers, className)}
      />
    )
  })
  const CardImage = styledElement(prefix, 'div', 'card-image')
  const CardContent = styledElement(prefix, 'div', 'card-content')
  const CardFooter = styledElement(prefix, 'footer', 'card-footer')
  const CardFooterItem = styledElement(prefix, 'a', 'card-footer-item', ['p'])
  const Menu = forwardRefComponent(function Menu({
    size,
    helpers,
    className,
    ...props
  }: MenuProps) {
    return (
      <aside
        {...props}
        className={classNames(
          prefix,
          ['menu', size && `is-${size}`],
          helpers,
          className,
        )}
      />
    )
  })
  const MenuLabel = styledElement(prefix, 'p', 'menu-label')
  const MenuList = styledElement(prefix, 'ul', 'menu-list')
  const MenuItem = forwardRefComponent(function MenuItem({
    active,
    nested,
    wrapperProps,
    helpers,
    className,
    children,
    ...props
  }: MenuItemProps) {
    return (
      <li {...wrapperProps}>
        <a
          {...props}
          aria-current={active ? 'page' : props['aria-current']}
          className={classNames(
            prefix,
            [active && 'is-active'],
            helpers,
            className,
          )}
        >
          {children}
        </a>
        {nested}
      </li>
    )
  })
  const Message = forwardRefComponent(function Message({
    as,
    color,
    size,
    helpers,
    className,
    ...props
  }: MessageProps) {
    return createElement(as ?? 'article', {
      ...props,
      className: classNames(
        prefix,
        ['message', color && `is-${color}`, size && `is-${size}`],
        helpers,
        className,
      ),
    })
  })
  const MessageHeader = styledElement(prefix, 'div', 'message-header')
  const MessageBody = styledElement(prefix, 'div', 'message-body')
  const Pagination = forwardRefComponent(function Pagination({
    size,
    alignment,
    rounded,
    helpers,
    className,
    ...props
  }: PaginationProps) {
    return (
      <nav
        aria-label="Pagination"
        {...props}
        className={classNames(
          prefix,
          [
            'pagination',
            size && `is-${size}`,
            alignment && `is-${alignment}`,
            rounded && 'is-rounded',
          ],
          helpers,
          className,
        )}
      />
    )
  })
  const PaginationList = styledElement(prefix, 'ul', 'pagination-list')
  const PaginationLink = forwardRefComponent(function PaginationLink({
    current,
    disabled,
    wrapperProps,
    helpers,
    className,
    onClick,
    href,
    tabIndex,
    ...props
  }: PaginationLinkProps) {
    return (
      <li {...wrapperProps}>
        <a
          {...props}
          href={disabled ? undefined : href}
          tabIndex={disabled ? -1 : tabIndex}
          aria-current={current ? 'page' : props['aria-current']}
          aria-disabled={disabled || props['aria-disabled']}
          role={props.role ?? (disabled ? 'link' : undefined)}
          className={classNames(
            prefix,
            [
              'pagination-link',
              current && 'is-current',
              disabled && 'is-disabled',
            ],
            helpers,
            className,
          )}
          onClick={(event) => {
            if (disabled) {
              event.preventDefault()
              return
            }
            onClick?.(event)
          }}
        />
      </li>
    )
  })
  const PaginationPrevious = forwardRefComponent(function PaginationPrevious({
    disabled,
    helpers,
    className,
    children = 'Previous',
    onClick,
    href,
    tabIndex,
    ...props
  }: PaginationPreviousProps) {
    return (
      <a
        aria-label="Previous page"
        {...props}
        href={disabled ? undefined : href}
        tabIndex={disabled ? -1 : tabIndex}
        aria-disabled={disabled || props['aria-disabled']}
        role={props.role ?? (disabled ? 'link' : undefined)}
        className={classNames(
          prefix,
          ['pagination-previous', disabled && 'is-disabled'],
          helpers,
          className,
        )}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }
          onClick?.(event)
        }}
      >
        {children}
      </a>
    )
  })
  const PaginationNext = forwardRefComponent(function PaginationNext({
    disabled,
    helpers,
    className,
    children = 'Next page',
    onClick,
    href,
    tabIndex,
    ...props
  }: PaginationNextProps) {
    return (
      <a
        aria-label="Next page"
        {...props}
        href={disabled ? undefined : href}
        tabIndex={disabled ? -1 : tabIndex}
        aria-disabled={disabled || props['aria-disabled']}
        role={props.role ?? (disabled ? 'link' : undefined)}
        className={classNames(
          prefix,
          ['pagination-next', disabled && 'is-disabled'],
          helpers,
          className,
        )}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }
          onClick?.(event)
        }}
      >
        {children}
      </a>
    )
  })
  const PaginationEllipsis = forwardRefComponent(function PaginationEllipsis({
    wrapperProps,
    helpers,
    className,
    children = '…',
    ...props
  }: PaginationEllipsisProps) {
    return (
      <li {...wrapperProps}>
        <span
          aria-hidden="true"
          {...props}
          className={classNames(
            prefix,
            ['pagination-ellipsis'],
            helpers,
            className,
          )}
        >
          {children}
        </span>
      </li>
    )
  })
  const Panel = forwardRefComponent(function Panel({
    as,
    color,
    helpers,
    className,
    ...props
  }: PanelProps) {
    return createElement(as ?? 'nav', {
      ...props,
      className: classNames(
        prefix,
        ['panel', color && `is-${color}`],
        helpers,
        className,
      ),
    })
  })
  const PanelHeading = styledElement(prefix, 'p', 'panel-heading')
  const PanelTabs = styledElement(prefix, 'p', 'panel-tabs')
  const PanelTab = forwardRefComponent(function PanelTab({
    active,
    helpers,
    className,
    ...props
  }: PanelTabProps) {
    return (
      <a
        {...props}
        aria-current={active ? 'page' : props['aria-current']}
        className={classNames(
          prefix,
          [active && 'is-active'],
          helpers,
          className,
        )}
      />
    )
  })
  const PanelBlock = forwardRefComponent(function PanelBlock({
    as = 'div',
    active,
    wrapped,
    helpers,
    className,
    ...props
  }: PanelBlockProps) {
    return createElement(as, {
      ...props,
      ...(as === 'a' && {
        'aria-current': active ? 'page' : props['aria-current'],
      }),
      className: classNames(
        prefix,
        ['panel-block', active && 'is-active', wrapped && 'is-wrapped'],
        helpers,
        className,
      ),
    })
  })
  const PanelIcon = styledElement(prefix, 'span', 'panel-icon')
  return {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader,
    CardHeaderTitle,
    CardHeaderIcon,
    CardImage,
    CardContent,
    CardFooter,
    CardFooterItem,
    Menu,
    MenuLabel,
    MenuList,
    MenuItem,
    Message,
    MessageHeader,
    MessageBody,
    Pagination,
    PaginationList,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    Panel,
    PanelHeading,
    PanelTabs,
    PanelTab,
    PanelBlock,
    PanelIcon,
  }
}

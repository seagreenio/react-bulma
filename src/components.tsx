import { createElement, type ReactNode } from 'react'
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

export function createBreadcrumb(prefix: Prefix) {
  return forwardRefComponent(function Breadcrumb({
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
}

export const Breadcrumb = /* @__PURE__ */ createBreadcrumb(defaultPrefix)

export function createBreadcrumbItem(prefix: Prefix) {
  return forwardRefComponent(function BreadcrumbItem({
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
}

export const BreadcrumbItem =
  /* @__PURE__ */ createBreadcrumbItem(defaultPrefix)

export function createCard(prefix: Prefix) {
  return styledElement(prefix, 'div', 'card')
}

export const Card = /* @__PURE__ */ createCard(defaultPrefix)

export function createCardHeader(prefix: Prefix) {
  return styledElement(prefix, 'header', 'card-header')
}

export const CardHeader = /* @__PURE__ */ createCardHeader(defaultPrefix)

export function createCardHeaderTitle(prefix: Prefix) {
  return forwardRefComponent(function CardHeaderTitle({
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
}

export const CardHeaderTitle =
  /* @__PURE__ */ createCardHeaderTitle(defaultPrefix)

export function createCardHeaderIcon(prefix: Prefix) {
  return forwardRefComponent(function CardHeaderIcon({
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
}

export const CardHeaderIcon =
  /* @__PURE__ */ createCardHeaderIcon(defaultPrefix)

export function createCardImage(prefix: Prefix) {
  return styledElement(prefix, 'div', 'card-image')
}

export const CardImage = /* @__PURE__ */ createCardImage(defaultPrefix)

export function createCardContent(prefix: Prefix) {
  return styledElement(prefix, 'div', 'card-content')
}

export const CardContent = /* @__PURE__ */ createCardContent(defaultPrefix)

export function createCardFooter(prefix: Prefix) {
  return styledElement(prefix, 'footer', 'card-footer')
}

export const CardFooter = /* @__PURE__ */ createCardFooter(defaultPrefix)

export function createCardFooterItem(prefix: Prefix) {
  return styledElement(prefix, 'a', 'card-footer-item', ['p'])
}

export const CardFooterItem =
  /* @__PURE__ */ createCardFooterItem(defaultPrefix)

export function createMenu(prefix: Prefix) {
  return forwardRefComponent(function Menu({
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
}

export const Menu = /* @__PURE__ */ createMenu(defaultPrefix)

export function createMenuLabel(prefix: Prefix) {
  return styledElement(prefix, 'p', 'menu-label')
}

export const MenuLabel = /* @__PURE__ */ createMenuLabel(defaultPrefix)

export function createMenuList(prefix: Prefix) {
  return styledElement(prefix, 'ul', 'menu-list')
}

export const MenuList = /* @__PURE__ */ createMenuList(defaultPrefix)

export function createMenuItem(prefix: Prefix) {
  return forwardRefComponent(function MenuItem({
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
}

export const MenuItem = /* @__PURE__ */ createMenuItem(defaultPrefix)

export function createMessage(prefix: Prefix) {
  return forwardRefComponent(function Message({
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
}

export const Message = /* @__PURE__ */ createMessage(defaultPrefix)

export function createMessageHeader(prefix: Prefix) {
  return styledElement(prefix, 'div', 'message-header')
}

export const MessageHeader = /* @__PURE__ */ createMessageHeader(defaultPrefix)

export function createMessageBody(prefix: Prefix) {
  return styledElement(prefix, 'div', 'message-body')
}

export const MessageBody = /* @__PURE__ */ createMessageBody(defaultPrefix)

export function createPagination(prefix: Prefix) {
  return forwardRefComponent(function Pagination({
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
}

export const Pagination = /* @__PURE__ */ createPagination(defaultPrefix)

export function createPaginationList(prefix: Prefix) {
  return styledElement(prefix, 'ul', 'pagination-list')
}

export const PaginationList =
  /* @__PURE__ */ createPaginationList(defaultPrefix)

export function createPaginationLink(prefix: Prefix) {
  return forwardRefComponent(function PaginationLink({
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
}

export const PaginationLink =
  /* @__PURE__ */ createPaginationLink(defaultPrefix)

export function createPaginationPrevious(prefix: Prefix) {
  return forwardRefComponent(function PaginationPrevious({
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
}

export const PaginationPrevious =
  /* @__PURE__ */ createPaginationPrevious(defaultPrefix)

export function createPaginationNext(prefix: Prefix) {
  return forwardRefComponent(function PaginationNext({
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
}

export const PaginationNext =
  /* @__PURE__ */ createPaginationNext(defaultPrefix)

export function createPaginationEllipsis(prefix: Prefix) {
  return forwardRefComponent(function PaginationEllipsis({
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
}

export const PaginationEllipsis =
  /* @__PURE__ */ createPaginationEllipsis(defaultPrefix)

export function createPanel(prefix: Prefix) {
  return forwardRefComponent(function Panel({
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
}

export const Panel = /* @__PURE__ */ createPanel(defaultPrefix)

export function createPanelHeading(prefix: Prefix) {
  return styledElement(prefix, 'p', 'panel-heading')
}

export const PanelHeading = /* @__PURE__ */ createPanelHeading(defaultPrefix)

export function createPanelTabs(prefix: Prefix) {
  return styledElement(prefix, 'p', 'panel-tabs')
}

export const PanelTabs = /* @__PURE__ */ createPanelTabs(defaultPrefix)

export function createPanelTab(prefix: Prefix) {
  return forwardRefComponent(function PanelTab({
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
}

export const PanelTab = /* @__PURE__ */ createPanelTab(defaultPrefix)

export function createPanelBlock(prefix: Prefix) {
  return forwardRefComponent(function PanelBlock({
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
}

export const PanelBlock = /* @__PURE__ */ createPanelBlock(defaultPrefix)

export function createPanelIcon(prefix: Prefix) {
  return styledElement(prefix, 'span', 'panel-icon')
}

export const PanelIcon = /* @__PURE__ */ createPanelIcon(defaultPrefix)

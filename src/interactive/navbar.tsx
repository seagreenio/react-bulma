import * as React from 'react'
import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type ReactElement,
  type Ref,
} from 'react'
import { defaultPrefix, type Prefix } from '../config'
import { classNames, forwardRefComponent, styledElement } from '../shared'

import { assignRef } from './shared'
import type {
  NavbarBurgerProps,
  NavbarDropdownProps,
  NavbarItemProps,
  NavbarLinkProps,
  NavbarMenuProps,
  NavbarProps,
} from './types'

type NavbarState = {
  expanded: boolean
  setExpanded: (value: boolean) => void
  menuId: string | undefined
  setMenuId: (id: string | undefined) => void
  burger: { current: HTMLElement | null }
}

let nextId = 0
function useFallbackId() {
  const [id, setId] = useState<string>()
  useEffect(() => {
    setId((current) => current ?? `react-bulma-${++nextId}`)
  }, [])
  return id
}

const useStableId =
  ({ ...React } as typeof React & { useId?: () => string }).useId ??
  useFallbackId
const useClientLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export function createNavbar(prefix: Prefix) {
  const NavbarContext = createContext<NavbarState | null>(null)
  const Navbar = forwardRefComponent(function Navbar({
    as,
    color,
    transparent,
    spaced,
    shadow,
    fixed,
    expanded,
    defaultExpanded = false,
    onExpandedChange,
    children,
    helpers,
    className,
    onKeyDown,
    ...props
  }: NavbarProps) {
    const [localExpanded, setLocalExpanded] = useState(defaultExpanded)
    const burger = useRef<HTMLElement | null>(null)
    const defaultMenuId = useStableId()
    const [registeredMenuId, setMenuId] = useState<string>()
    const state: NavbarState = {
      expanded: expanded ?? localExpanded,
      burger,
      menuId: registeredMenuId ?? defaultMenuId,
      setMenuId,
      setExpanded(value) {
        if (expanded === undefined) setLocalExpanded(value)
        onExpandedChange?.(value)
      },
    }
    const Tag = as ?? 'nav'
    return (
      <NavbarContext.Provider value={state}>
        <Tag
          {...props}
          className={classNames(
            prefix,
            [
              'navbar',
              color && `is-${color}`,
              transparent && 'is-transparent',
              spaced && 'is-spaced',
              shadow && 'has-shadow',
              fixed && `is-fixed-${fixed}`,
            ],
            helpers,
            className,
          )}
          onKeyDown={(event) => {
            onKeyDown?.(event)
            if (
              !event.defaultPrevented &&
              event.key === 'Escape' &&
              state.expanded
            ) {
              state.setExpanded(false)
              burger.current?.focus()
              event.preventDefault()
            }
          }}
        >
          {children}
        </Tag>
      </NavbarContext.Provider>
    )
  })
  const NavbarBrand = styledElement(prefix, 'div', 'navbar-brand')
  const NavbarBurger = forwardRefComponent(function NavbarBurger(
    props: NavbarBurgerProps,
  ): ReactElement {
    const state = useContext(NavbarContext)
    const [localExpanded, setLocalExpanded] = useState(
      props.defaultExpanded ?? false,
    )
    const expanded = props.expanded ?? state?.expanded ?? localExpanded
    const {
      as: _as,
      expanded: _expanded,
      defaultExpanded: _defaultExpanded,
      onExpandedChange,
      helpers,
      className,
      children,
      ...native
    } = props
    const common = {
      'aria-label': props['aria-label'] ?? 'Toggle navigation',
      'aria-expanded': expanded,
      'aria-controls': props['aria-controls'] ?? state?.menuId,
      className: classNames(
        prefix,
        ['navbar-burger', expanded && 'is-active'],
        helpers,
        className,
      ),
      children: children ?? (
        <>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </>
      ),
    }
    function behavior<Element extends HTMLElement>(
      ref: Ref<Element> | undefined,
      onClick: MouseEventHandler<Element> | undefined,
      onKeyDown: KeyboardEventHandler<Element> | undefined,
      nativeButton: boolean,
      nativeEnter = false,
    ) {
      return {
        ref(element: Element | null) {
          if (state) state.burger.current = element
          return assignRef(ref, element)
        },
        onClick: ((event) => {
          onClick?.(event)
          if (event.defaultPrevented) return
          if (state) state.setExpanded(!expanded)
          else if (props.expanded === undefined) setLocalExpanded(!expanded)
          onExpandedChange?.(!expanded)
        }) satisfies MouseEventHandler<Element>,
        onKeyDown: ((event) => {
          onKeyDown?.(event)
          if (event.defaultPrevented || nativeButton) return
          if (event.key === ' ' || (event.key === 'Enter' && !nativeEnter)) {
            event.preventDefault()
            event.currentTarget.click()
          }
        }) satisfies KeyboardEventHandler<Element>,
      }
    }
    if (props.as === 'a') {
      return createElement('a', {
        ...native,
        ...common,
        role: props.role ?? 'button',
        tabIndex: props.tabIndex ?? 0,
        ...behavior(
          props.ref,
          props.onClick,
          props.onKeyDown,
          false,
          !!props.href,
        ),
      })
    }
    if (props.as === 'div') {
      return createElement('div', {
        ...native,
        ...common,
        role: props.role ?? 'button',
        tabIndex: props.tabIndex ?? 0,
        ...behavior(props.ref, props.onClick, props.onKeyDown, false),
      })
    }
    if (props.as === 'span') {
      return createElement('span', {
        ...native,
        ...common,
        role: props.role ?? 'button',
        tabIndex: props.tabIndex ?? 0,
        ...behavior(props.ref, props.onClick, props.onKeyDown, false),
      })
    }
    return createElement('button', {
      ...native,
      ...common,
      type: props.type ?? 'button',
      ...behavior(props.ref, props.onClick, props.onKeyDown, true),
    })
  })
  const NavbarMenu = forwardRefComponent(function NavbarMenu({
    helpers,
    className,
    id,
    expanded,
    ...props
  }: NavbarMenuProps) {
    const state = useContext(NavbarContext)
    const registerMenuId = state?.setMenuId
    useClientLayoutEffect(() => {
      registerMenuId?.(id)
      return () => registerMenuId?.(undefined)
    }, [id, registerMenuId])
    return (
      <div
        {...props}
        id={id ?? state?.menuId}
        className={classNames(
          prefix,
          ['navbar-menu', (expanded ?? state?.expanded) && 'is-active'],
          helpers,
          className,
        )}
      />
    )
  })
  const NavbarStart = styledElement(prefix, 'div', 'navbar-start')
  const NavbarEnd = styledElement(prefix, 'div', 'navbar-end')
  const NavbarItem = forwardRefComponent(function NavbarItem(
    props: NavbarItemProps,
  ) {
    const tokens = [
      'navbar-item',
      props.active && 'is-active',
      props.expanded && 'is-expanded',
      props.tab && 'is-tab',
    ]
    if (props.as === 'div' || props.as === 'span') {
      const {
        as,
        helpers,
        className,
        active: _active,
        expanded: _expanded,
        tab: _tab,
        ...native
      } = props
      return createElement(as, {
        ...native,
        className: classNames(prefix, tokens, helpers, className),
      })
    }
    if (props.as === 'button') {
      const {
        as: _as,
        helpers,
        className,
        active: _active,
        expanded: _expanded,
        tab: _tab,
        type = 'button',
        ...native
      } = props
      return (
        <button
          {...native}
          type={type}
          className={classNames(prefix, tokens, helpers, className)}
        />
      )
    }
    const {
      as: _as,
      helpers,
      className,
      active: _active,
      expanded: _expanded,
      tab: _tab,
      ...native
    } = props
    return (
      <a
        {...native}
        className={classNames(prefix, tokens, helpers, className)}
      />
    )
  })
  const NavbarLink = forwardRefComponent(function NavbarLink({
    helpers,
    className,
    active,
    arrowless,
    ...props
  }: NavbarLinkProps) {
    return (
      <a
        {...props}
        className={classNames(
          prefix,
          ['navbar-link', active && 'is-active', arrowless && 'is-arrowless'],
          helpers,
          className,
        )}
      />
    )
  })
  const NavbarDropdown = forwardRefComponent(function NavbarDropdown(
    props: NavbarDropdownProps,
  ) {
    const [localOpen, setLocalOpen] = useState(
      props.open ?? props.defaultOpen ?? false,
    )
    const open = props.as === 'div' ? (props.open ?? localOpen) : localOpen
    const triggerRef = useRef<HTMLElement | null>(null)
    const menuId = useStableId()
    const {
      helpers: menuHelpers,
      className: menuClassName,
      ...menuNative
    } = props.menuProps ?? {}
    const menu = (
      <div
        {...menuNative}
        id={menuNative.id ?? menuId}
        className={classNames(
          prefix,
          [
            'navbar-dropdown',
            props.right && 'is-right',
            props.boxed && 'is-boxed',
          ],
          menuHelpers,
          menuClassName,
        )}
      >
        {props.children}
      </div>
    )
    const rootClassName = classNames(
      prefix,
      [
        'navbar-item',
        'has-dropdown',
        props.up && 'has-dropdown-up',
        open && 'is-active',
      ],
      props.helpers,
      props.className,
    )
    function changeOpen(value: boolean) {
      if (props.open === undefined) setLocalOpen(value)
    }
    function keyDown<Element extends HTMLElement>(
      handler: KeyboardEventHandler<Element> | undefined,
    ): KeyboardEventHandler<Element> {
      return (event) => {
        handler?.(event)
        const details =
          event.currentTarget instanceof HTMLDetailsElement
            ? event.currentTarget
            : undefined
        if (
          !event.defaultPrevented &&
          event.key === 'Escape' &&
          (details?.open ?? open)
        ) {
          if (details) details.open = false
          else changeOpen(false)
          triggerRef.current?.focus()
          event.preventDefault()
          event.stopPropagation()
        }
      }
    }
    if (props.as === 'div') {
      const {
        as: _as,
        trigger,
        children: _children,
        helpers: _helpers,
        className: _className,
        right: _right,
        boxed: _boxed,
        up: _up,
        arrowless,
        defaultOpen: _defaultOpen,
        open: _open,
        hoverable,
        triggerProps,
        menuProps: _menuProps,
        onKeyDown,
        onPointerEnter,
        onPointerLeave,
        ...native
      } = props
      const {
        helpers: triggerHelpers,
        className: triggerClassName,
        ref,
        onClick,
        onKeyDown: onTriggerKeyDown,
        ...triggerNative
      } = triggerProps ?? {}
      return (
        <div
          {...native}
          className={rootClassName}
          onKeyDown={keyDown(onKeyDown)}
          onPointerEnter={(event) => {
            onPointerEnter?.(event)
            if (
              !event.defaultPrevented &&
              hoverable &&
              event.pointerType !== 'touch'
            )
              changeOpen(true)
          }}
          onPointerLeave={(event) => {
            onPointerLeave?.(event)
            if (
              !event.defaultPrevented &&
              hoverable &&
              event.pointerType !== 'touch'
            )
              changeOpen(false)
          }}
        >
          <a
            {...triggerNative}
            ref={(element) => {
              triggerRef.current = element
              return assignRef(ref, element)
            }}
            role={
              triggerNative.role ?? (triggerNative.href ? undefined : 'button')
            }
            tabIndex={triggerNative.tabIndex ?? 0}
            aria-expanded={open}
            aria-controls={menuNative.id ?? menuId}
            className={classNames(
              prefix,
              ['navbar-link', arrowless && 'is-arrowless'],
              triggerHelpers,
              triggerClassName,
            )}
            onClick={(event) => {
              onClick?.(event)
              if (!event.defaultPrevented) changeOpen(!open)
            }}
            onKeyDown={(event) => {
              onTriggerKeyDown?.(event)
              if (
                !event.defaultPrevented &&
                (event.key === ' ' ||
                  (event.key === 'Enter' && !triggerNative.href))
              ) {
                event.preventDefault()
                event.currentTarget.click()
              }
            }}
          >
            {trigger}
          </a>
          {menu}
        </div>
      )
    }
    const {
      as: _as,
      trigger,
      children: _children,
      helpers: _helpers,
      className: _className,
      right: _right,
      boxed: _boxed,
      up: _up,
      arrowless,
      defaultOpen: _defaultOpen,
      open: _open,
      hoverable,
      triggerProps,
      menuProps: _menuProps,
      onKeyDown,
      onToggle,
      onPointerEnter,
      onPointerLeave,
      ...native
    } = props
    const {
      helpers: triggerHelpers,
      className: triggerClassName,
      ref,
      ...triggerNative
    } = triggerProps ?? {}
    return (
      <details
        {...native}
        open={props.open ?? localOpen}
        className={rootClassName}
        onKeyDown={keyDown(onKeyDown)}
        onToggle={(event) => {
          onToggle?.(event)
          setLocalOpen(event.currentTarget.open)
        }}
        onPointerEnter={(event) => {
          onPointerEnter?.(event)
          if (
            !event.defaultPrevented &&
            hoverable &&
            event.pointerType !== 'touch'
          )
            event.currentTarget.open = true
        }}
        onPointerLeave={(event) => {
          onPointerLeave?.(event)
          if (
            !event.defaultPrevented &&
            hoverable &&
            event.pointerType !== 'touch'
          )
            event.currentTarget.open = false
        }}
      >
        <summary
          {...triggerNative}
          ref={(element) => {
            triggerRef.current = element
            return assignRef(ref, element)
          }}
          className={classNames(
            prefix,
            ['navbar-link', arrowless && 'is-arrowless'],
            triggerHelpers,
            triggerClassName,
          )}
        >
          {trigger}
        </summary>
        {menu}
      </details>
    )
  })
  const NavbarDivider = styledElement(prefix, 'hr', 'navbar-divider')
  return {
    Navbar,
    NavbarBrand,
    NavbarBurger,
    NavbarMenu,
    NavbarStart,
    NavbarEnd,
    NavbarItem,
    NavbarLink,
    NavbarDropdown,
    NavbarDivider,
  }
}

export const {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
} = /* @__PURE__ */ createNavbar(defaultPrefix)

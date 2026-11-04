import { Menu as BaseMenu } from '@base-ui/react/menu'
import { createContext, useCallback, useContext, useState } from 'react'
import { defaultPrefix, type Prefix } from '../config'
import { classNames, forwardRefComponent, styledElement } from '../shared'

import { assignRef } from './shared'
import type {
  DropdownContentProps,
  DropdownItemProps,
  DropdownMenuProps,
  DropdownProps,
  DropdownTriggerProps,
} from './types'

export function createDropdown(prefix: Prefix) {
  const DropdownContext = createContext<{
    right: boolean
    up: boolean
    hoverable: boolean
    container: HTMLDivElement | null
  }>({ right: false, up: false, hoverable: false, container: null })
  const Dropdown = forwardRefComponent(function Dropdown({
    open,
    defaultOpen = false,
    onOpenChange,
    right = false,
    up = false,
    disabled,
    hoverable = false,
    children,
    helpers,
    className,
    ref,
    ...props
  }: DropdownProps) {
    const [uncontrolledOpen, setOpen] = useState(defaultOpen)
    const currentOpen = open ?? uncontrolledOpen
    const [container, setContainer] = useState<HTMLDivElement | null>(null)
    const rootRef = useCallback(
      (element: HTMLDivElement | null) => {
        setContainer(element)
        return assignRef(ref, element)
      },
      [ref],
    )
    return (
      <DropdownContext.Provider value={{ right, up, hoverable, container }}>
        <BaseMenu.Root
          open={currentOpen}
          disabled={disabled}
          modal={false}
          onOpenChange={(next, details) => {
            onOpenChange?.(next, details)
            if (open === undefined && !details.isCanceled) setOpen(next)
          }}
        >
          <div
            {...props}
            ref={rootRef}
            className={classNames(
              prefix,
              [
                'dropdown',
                currentOpen && 'is-active',
                hoverable && 'is-hoverable',
                right && 'is-right',
                up && 'is-up',
              ],
              helpers,
              className,
            )}
          >
            {children}
          </div>
        </BaseMenu.Root>
      </DropdownContext.Provider>
    )
  })
  const DropdownTrigger = forwardRefComponent(function DropdownTrigger({
    helpers,
    className,
    type = 'button',
    wrapperProps,
    ...props
  }: DropdownTriggerProps) {
    const { hoverable } = useContext(DropdownContext)
    const {
      helpers: wrapperHelpers,
      className: wrapperClassName,
      ...wrapper
    } = wrapperProps ?? {}
    return (
      <div
        {...wrapper}
        className={classNames(
          prefix,
          ['dropdown-trigger'],
          wrapperHelpers,
          wrapperClassName,
        )}
      >
        <BaseMenu.Trigger
          {...props}
          type={type}
          openOnHover={hoverable}
          delay={0}
          className={classNames(prefix, ['button'], helpers, className)}
        />
      </div>
    )
  })
  const DropdownMenu = forwardRefComponent(function DropdownMenu({
    helpers,
    className,
    style,
    ...props
  }: DropdownMenuProps) {
    const { right, up, container } = useContext(DropdownContext)
    if (!container) return null
    return (
      <BaseMenu.Portal container={container}>
        <BaseMenu.Positioner
          {...props}
          side={up ? 'top' : 'bottom'}
          align={right ? 'end' : 'start'}
          collisionAvoidance={{ side: 'none', align: 'none' }}
          style={{
            position: undefined,
            top: undefined,
            left: undefined,
            transform: undefined,
            ...style,
          }}
          className={classNames(prefix, ['dropdown-menu'], helpers, className)}
        />
      </BaseMenu.Portal>
    )
  })
  const DropdownContent = forwardRefComponent(function DropdownContent({
    helpers,
    className,
    ...props
  }: DropdownContentProps) {
    return (
      <BaseMenu.Popup
        {...props}
        className={classNames(prefix, ['dropdown-content'], helpers, className)}
      />
    )
  })
  const DropdownItem = forwardRefComponent(function DropdownItem(
    props: DropdownItemProps,
  ) {
    if (props.as === 'div') {
      const {
        as: _as,
        helpers,
        className,
        active,
        closeOnClick: _closeOnClick,
        label: _label,
        ...native
      } = props
      return (
        <div
          {...native}
          className={classNames(
            prefix,
            ['dropdown-item', active && 'is-active'],
            helpers,
            className,
          )}
        />
      )
    }
    // Base UI types Item events as div events even when render supplies a native tag.
    // Forward handlers through Item so its disabled guard runs before user callbacks.
    if (props.as === 'a') {
      const {
        as: _as,
        helpers,
        className,
        active,
        disabled,
        closeOnClick,
        label,
        ref,
        ...native
      } = props
      return (
        <BaseMenu.Item
          {...(native as BaseMenu.Item.Props)}
          render={<a ref={ref} />}
          disabled={disabled}
          closeOnClick={closeOnClick}
          label={label}
          className={classNames(
            prefix,
            ['dropdown-item', active && 'is-active'],
            helpers,
            className,
          )}
        />
      )
    }
    const {
      as: _as,
      helpers,
      className,
      active,
      closeOnClick,
      label,
      ref,
      disabled,
      type = 'button',
      ...native
    } = props
    return (
      <BaseMenu.Item
        {...(native as BaseMenu.Item.Props)}
        nativeButton
        render={<button type={type} ref={ref} />}
        disabled={disabled}
        closeOnClick={closeOnClick}
        label={label}
        className={classNames(
          prefix,
          ['dropdown-item', active && 'is-active'],
          helpers,
          className,
        )}
      />
    )
  })
  const DropdownDivider = styledElement(prefix, 'hr', 'dropdown-divider')
  return {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
    DropdownDivider,
  }
}

export const {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
} = /* @__PURE__ */ createDropdown(defaultPrefix)

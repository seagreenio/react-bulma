import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import { cloneElement, createElement, type ComponentPropsWithRef } from 'react'
import { defaultPrefix, type Prefix } from '../config'
import { classNames, forwardRefComponent, type NativeProps } from '../shared'

import type { TabPanelProps, TabProps, TabsListProps, TabsProps } from './types'

export function createTabs(prefix: Prefix) {
  const Tabs = forwardRefComponent(function Tabs({
    helpers,
    className,
    ...props
  }: TabsProps) {
    return (
      <BaseTabs.Root
        {...props}
        className={classNames(prefix, [], helpers, className)}
      />
    )
  })
  const TabsList = forwardRefComponent(function TabsList({
    as,
    helpers,
    className,
    size,
    alignment,
    variant,
    fullWidth,
    activateOnFocus,
    loopFocus,
    children,
    listProps,
    listWrapper,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    ...props
  }: TabsListProps) {
    const Tag = as ?? 'div'
    const {
      helpers: listHelpers,
      className: listClassName,
      ...listNative
    } = listProps ?? {}
    const list = (
      <BaseTabs.List
        render={<ul {...listNative} />}
        className={classNames(prefix, [], listHelpers, listClassName)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        activateOnFocus={activateOnFocus}
        loopFocus={loopFocus}
      >
        {children}
      </BaseTabs.List>
    )
    return createElement<NativeProps<'div'> | NativeProps<'nav'>>(Tag, {
      ...props,
      className: classNames(
        prefix,
        [
          'tabs',
          size && `is-${size}`,
          alignment && `is-${alignment}`,
          variant && `is-${variant}`,
          variant === 'toggle-rounded' && 'is-toggle',
          fullWidth && 'is-fullwidth',
        ],
        helpers,
        className,
      ),
      children: listWrapper ? cloneElement(listWrapper, undefined, list) : list,
    })
  })
  const Tab = forwardRefComponent(function Tab(props: TabProps) {
    const { as: _as, helpers, className, wrapperProps, ...native } = props
    const {
      helpers: wrapperHelpers,
      className: wrapperClassName,
      ...wrapper
    } = wrapperProps ?? {}
    if (props.as === 'a') {
      return (
        <BaseTabs.Tab
          {...(native as BaseTabs.Tab.Props)}
          nativeButton={false}
          className={classNames(prefix, [], helpers, className)}
          render={(anchorProps, state) => (
            <li
              {...wrapper}
              role={wrapper.role ?? 'presentation'}
              className={classNames(
                prefix,
                [state.active && 'is-active'],
                wrapperHelpers,
                wrapperClassName,
              )}
            >
              <a {...(anchorProps as ComponentPropsWithRef<'a'>)} />
            </li>
          )}
        />
      )
    }
    return (
      <BaseTabs.Tab
        {...(native as BaseTabs.Tab.Props)}
        type={props.type ?? 'button'}
        className={classNames(prefix, ['tab'], helpers, className)}
        render={(buttonProps, state) => (
          <li
            {...wrapper}
            role={wrapper.role ?? 'presentation'}
            className={classNames(
              prefix,
              [state.active && 'is-active'],
              wrapperHelpers,
              wrapperClassName,
            )}
          >
            <button {...buttonProps} />
          </li>
        )}
      />
    )
  })
  const TabPanel = forwardRefComponent(function TabPanel({
    helpers,
    className,
    ...props
  }: TabPanelProps) {
    return (
      <BaseTabs.Panel
        {...props}
        className={classNames(prefix, [], helpers, className)}
      />
    )
  })
  return { Tabs, TabsList, Tab, TabPanel }
}

export const { Tabs, TabsList, Tab, TabPanel } =
  /* @__PURE__ */ createTabs(defaultPrefix)

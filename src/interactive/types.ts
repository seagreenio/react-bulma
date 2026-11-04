import type { ReactNode, ReactElement, RefObject } from 'react'
import type { BaseUIChangeEventDetails } from '@base-ui/react/types'
import type { Color, NativeProps, NativeTagProps, Size } from '../shared'

type ModalChangeReason =
  | 'trigger-press'
  | 'outside-press'
  | 'escape-key'
  | 'close-press'
  | 'focus-out'
  | 'imperative-action'
  | 'none'
type DropdownChangeReason =
  | ModalChangeReason
  | 'trigger-hover'
  | 'trigger-focus'
  | 'list-navigation'
  | 'item-press'
  | 'sibling-open'
  | 'cancel-open'
type OpenChangeDetails<Reason extends string> =
  BaseUIChangeEventDetails<Reason> & {
    preventUnmountOnClose: () => void
  }
type ModalFocusTarget =
  | boolean
  | RefObject<HTMLElement | null>
  | ((
      interactionType: 'mouse' | 'touch' | 'pen' | 'keyboard' | '',
    ) => boolean | HTMLElement | null | void)

export interface DropdownProps extends Omit<NativeProps<'div'>, 'onChange'> {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?:
    | ((
        open: boolean,
        details: OpenChangeDetails<DropdownChangeReason>,
      ) => void)
    | undefined
  right?: boolean
  up?: boolean
  disabled?: boolean
  hoverable?: boolean
}
export type DropdownTriggerProps = NativeProps<'button'> & {
  wrapperProps?: NativeProps<'div'>
}
export type DropdownMenuProps = NativeProps<'div'>
export type DropdownContentProps = NativeProps<'div'>
export type DropdownItemProps = (
  | ({ as?: 'button' } & NativeProps<'button'>)
  | ({ as: 'a'; disabled?: boolean } & NativeProps<'a'>)
  | ({ as: 'div' } & NativeProps<'div'>)
) & { active?: boolean; closeOnClick?: boolean; label?: string }
export type DropdownDividerProps = NativeProps<'hr'>
export interface ModalProps {
  children?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?:
    | ((open: boolean, details: OpenChangeDetails<ModalChangeReason>) => void)
    | undefined
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
}
export type ModalTriggerProps = NativeTagProps<
  'button',
  'a',
  { unstyled?: boolean }
>
export interface ModalContentProps extends NativeProps<'div'> {
  container?:
    | HTMLElement
    | ShadowRoot
    | RefObject<HTMLElement | ShadowRoot | null>
    | null
    | undefined
  initialFocus?: ModalFocusTarget | undefined
  finalFocus?: ModalFocusTarget | undefined
  wrapperProps?: NativeProps<'div'>
  backdropProps?: NativeProps<'div'>
  close?: ReactNode
}
export type ModalCardProps = ModalContentProps
export type ModalTitleProps = NativeTagProps<'h2', 'p'>
export type ModalDescriptionProps = NativeProps<'p'>
export type ModalCloseProps = NativeProps<'button'> & {
  variant?: 'icon' | 'button' | 'delete'
}
export type ModalCardHeadProps = NativeProps<'header'>
export type ModalCardBodyProps = NativeProps<'section'>
export type ModalCardFootProps = NativeProps<'footer'>
export type TabValue = string | number
export interface TabsProps extends Omit<
  NativeProps<'div'>,
  'defaultValue' | 'onChange'
> {
  value?: TabValue | null
  defaultValue?: TabValue | null
  onValueChange?: (
    value: TabValue | null,
    details: BaseUIChangeEventDetails<
      'none' | 'disabled' | 'missing' | 'initial',
      { activationDirection: 'left' | 'right' | 'up' | 'down' | 'none' }
    >,
  ) => void
}
export type TabsListProps = NativeTagProps<
  'div',
  'nav',
  {
    size?: Size
    alignment?: 'left' | 'centered' | 'right'
    variant?: 'boxed' | 'toggle' | 'toggle-rounded'
    fullWidth?: boolean
    activateOnFocus?: boolean
    loopFocus?: boolean
    listProps?: NativeProps<'ul'>
    listWrapper?: ReactElement<{ children?: ReactNode }>
  }
>
export type TabProps = NativeTagProps<
  'button',
  'a',
  {
    value: TabValue
    disabled?: boolean
    wrapperProps?: NativeProps<'li'>
  }
>
export interface TabPanelProps extends NativeProps<'div'> {
  value: TabValue
  keepMounted?: boolean
}
export type NavbarProps = NativeTagProps<
  'nav',
  'header',
  {
    color?: Color
    transparent?: boolean
    spaced?: boolean
    shadow?: boolean
    fixed?: 'top' | 'bottom'
    expanded?: boolean
    defaultExpanded?: boolean
    onExpandedChange?: (expanded: boolean) => void
  }
>
export type NavbarBrandProps = NativeProps<'div'>
export type NavbarBurgerProps = NativeTagProps<
  'button',
  'a' | 'div' | 'span',
  {
    expanded?: boolean
    defaultExpanded?: boolean
    onExpandedChange?: (expanded: boolean) => void
  }
>
export type NavbarMenuProps = NativeProps<'div'> & { expanded?: boolean }
export type NavbarStartProps = NativeProps<'div'>
export type NavbarEndProps = NativeProps<'div'>
export type NavbarItemProps = (
  | ({ as?: 'a' } & NativeProps<'a'>)
  | ({ as: 'div' } & NativeProps<'div'>)
  | ({ as: 'span' } & NativeProps<'span'>)
  | ({ as: 'button' } & NativeProps<'button'>)
) & { active?: boolean; expanded?: boolean; tab?: boolean }
export type NavbarLinkProps = NativeProps<'a'> & {
  active?: boolean
  arrowless?: boolean
}
type NavbarDropdownOptions = {
  trigger: ReactNode
  right?: boolean
  boxed?: boolean
  up?: boolean
  arrowless?: boolean
  defaultOpen?: boolean
  open?: boolean
  hoverable?: boolean
  menuProps?: NativeProps<'div'>
}
export type NavbarDropdownProps = NavbarDropdownOptions &
  (
    | (NativeProps<'details'> & {
        as?: 'details'
        triggerProps?: NativeProps<'summary'>
      })
    | (NativeProps<'div'> & { as: 'div'; triggerProps?: NativeProps<'a'> })
  )
export type NavbarDividerProps = NativeProps<'hr'>

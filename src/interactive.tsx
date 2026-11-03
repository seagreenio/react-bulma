import * as React from 'react';
import {
  createContext,
  createElement,
  cloneElement,
  useContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type ReactElement,
  type ComponentPropsWithRef,
  type MouseEventHandler,
  type KeyboardEventHandler,
  type Ref,
  type MutableRefObject,
  type RefObject,
} from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import type { BaseUIChangeEventDetails } from '@base-ui/react/types';
import type { Prefix } from './config';
import {
  classNames,
  forwardRefComponent,
  styledElement,
  type Color,
  type NativeProps,
  type NativeTagProps,
  type Size,
} from './shared';

type ModalChangeReason =
  | 'trigger-press'
  | 'outside-press'
  | 'escape-key'
  | 'close-press'
  | 'focus-out'
  | 'imperative-action'
  | 'none';
type DropdownChangeReason =
  | ModalChangeReason
  | 'trigger-hover'
  | 'trigger-focus'
  | 'list-navigation'
  | 'item-press'
  | 'sibling-open'
  | 'cancel-open';
type OpenChangeDetails<Reason extends string> =
  BaseUIChangeEventDetails<Reason> & {
    preventUnmountOnClose: () => void;
  };
type ModalFocusTarget =
  | boolean
  | RefObject<HTMLElement | null>
  | ((
      interactionType: 'mouse' | 'touch' | 'pen' | 'keyboard' | '',
    ) => boolean | HTMLElement | null | void);

export interface DropdownProps extends Omit<NativeProps<'div'>, 'onChange'> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?:
    | ((
        open: boolean,
        details: OpenChangeDetails<DropdownChangeReason>,
      ) => void)
    | undefined;
  right?: boolean;
  up?: boolean;
  disabled?: boolean;
  hoverable?: boolean;
}
export type DropdownTriggerProps = NativeProps<'button'> & {
  wrapperProps?: NativeProps<'div'>;
};
export type DropdownMenuProps = NativeProps<'div'>;
export type DropdownContentProps = NativeProps<'div'>;
export type DropdownItemProps = (
  | ({ as?: 'button' } & NativeProps<'button'>)
  | ({ as: 'a'; disabled?: boolean } & NativeProps<'a'>)
  | ({ as: 'div' } & NativeProps<'div'>)
) & { active?: boolean; closeOnClick?: boolean; label?: string };
export type DropdownDividerProps = NativeProps<'hr'>;
export interface ModalProps {
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?:
    | ((open: boolean, details: OpenChangeDetails<ModalChangeReason>) => void)
    | undefined;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
}
export type ModalTriggerProps = NativeTagProps<
  'button',
  'a',
  { unstyled?: boolean }
>;
export interface ModalContentProps extends NativeProps<'div'> {
  container?:
    | HTMLElement
    | ShadowRoot
    | RefObject<HTMLElement | ShadowRoot | null>
    | null
    | undefined;
  initialFocus?: ModalFocusTarget | undefined;
  finalFocus?: ModalFocusTarget | undefined;
  wrapperProps?: NativeProps<'div'>;
  backdropProps?: NativeProps<'div'>;
  close?: ReactNode;
}
export type ModalCardProps = ModalContentProps;
export type ModalTitleProps = NativeTagProps<'h2', 'p'>;
export type ModalDescriptionProps = NativeProps<'p'>;
export type ModalCloseProps = NativeProps<'button'> & {
  variant?: 'icon' | 'button' | 'delete';
};
export type ModalCardHeadProps = NativeProps<'header'>;
export type ModalCardBodyProps = NativeProps<'section'>;
export type ModalCardFootProps = NativeProps<'footer'>;
export type TabValue = string | number;
export interface TabsProps extends Omit<
  NativeProps<'div'>,
  'defaultValue' | 'onChange'
> {
  value?: TabValue | null;
  defaultValue?: TabValue | null;
  onValueChange?: (
    value: TabValue | null,
    details: BaseUIChangeEventDetails<
      'none' | 'disabled' | 'missing' | 'initial',
      { activationDirection: 'left' | 'right' | 'up' | 'down' | 'none' }
    >,
  ) => void;
}
export type TabsListProps = NativeTagProps<
  'div',
  'nav',
  {
    size?: Size;
    alignment?: 'left' | 'centered' | 'right';
    variant?: 'boxed' | 'toggle' | 'toggle-rounded';
    fullWidth?: boolean;
    activateOnFocus?: boolean;
    loopFocus?: boolean;
    listProps?: NativeProps<'ul'>;
    listWrapper?: ReactElement<{ children?: ReactNode }>;
  }
>;
export type TabProps = NativeTagProps<
  'button',
  'a',
  {
    value: TabValue;
    disabled?: boolean;
    wrapperProps?: NativeProps<'li'>;
  }
>;
export interface TabPanelProps extends NativeProps<'div'> {
  value: TabValue;
  keepMounted?: boolean;
}
export type NavbarProps = NativeTagProps<
  'nav',
  'header',
  {
    color?: Color;
    transparent?: boolean;
    spaced?: boolean;
    shadow?: boolean;
    fixed?: 'top' | 'bottom';
    expanded?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
  }
>;
export type NavbarBrandProps = NativeProps<'div'>;
export type NavbarBurgerProps = NativeTagProps<
  'button',
  'a' | 'div' | 'span',
  {
    expanded?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
  }
>;
export type NavbarMenuProps = NativeProps<'div'> & { expanded?: boolean };
export type NavbarStartProps = NativeProps<'div'>;
export type NavbarEndProps = NativeProps<'div'>;
export type NavbarItemProps = (
  | ({ as?: 'a' } & NativeProps<'a'>)
  | ({ as: 'div' } & NativeProps<'div'>)
  | ({ as: 'span' } & NativeProps<'span'>)
  | ({ as: 'button' } & NativeProps<'button'>)
) & { active?: boolean; expanded?: boolean; tab?: boolean };
export type NavbarLinkProps = NativeProps<'a'> & {
  active?: boolean;
  arrowless?: boolean;
};
type NavbarDropdownOptions = {
  trigger: ReactNode;
  right?: boolean;
  boxed?: boolean;
  up?: boolean;
  arrowless?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  hoverable?: boolean;
  menuProps?: NativeProps<'div'>;
};
export type NavbarDropdownProps = NavbarDropdownOptions &
  (
    | (NativeProps<'details'> & {
        as?: 'details';
        triggerProps?: NativeProps<'summary'>;
      })
    | (NativeProps<'div'> & { as: 'div'; triggerProps?: NativeProps<'a'> })
  );
export type NavbarDividerProps = NativeProps<'hr'>;

type NavbarState = {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  menuId: string | undefined;
  setMenuId: (id: string | undefined) => void;
  burger: { current: HTMLElement | null };
};

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') return ref(value);
  if (ref) (ref as MutableRefObject<T | null>).current = value;
}

let nextId = 0;
function useFallbackId() {
  const [id, setId] = useState<string>();
  useEffect(() => {
    setId((current) => current ?? `react-bulma-${++nextId}`);
  }, []);
  return id;
}

const useStableId =
  ({ ...React } as typeof React & { useId?: () => string }).useId ??
  useFallbackId;
const useClientLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function createInteractive(prefix: Prefix) {
  const DropdownContext = createContext<{
    right: boolean;
    up: boolean;
    hoverable: boolean;
    container: HTMLDivElement | null;
  }>({ right: false, up: false, hoverable: false, container: null });
  const ModalContainerContext = createContext<HTMLElement | null>(null);
  const NavbarContext = createContext<NavbarState | null>(null);
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
    const [uncontrolledOpen, setOpen] = useState(defaultOpen);
    const currentOpen = open ?? uncontrolledOpen;
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const rootRef = useCallback(
      (element: HTMLDivElement | null) => {
        setContainer(element);
        return assignRef(ref, element);
      },
      [ref],
    );
    return (
      <DropdownContext.Provider value={{ right, up, hoverable, container }}>
        <BaseMenu.Root
          open={currentOpen}
          disabled={disabled}
          modal={false}
          onOpenChange={(next, details) => {
            onOpenChange?.(next, details);
            if (open === undefined && !details.isCanceled) setOpen(next);
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
    );
  });
  const DropdownTrigger = forwardRefComponent(function DropdownTrigger({
    helpers,
    className,
    type = 'button',
    wrapperProps,
    ...props
  }: DropdownTriggerProps) {
    const { hoverable } = useContext(DropdownContext);
    const {
      helpers: wrapperHelpers,
      className: wrapperClassName,
      ...wrapper
    } = wrapperProps ?? {};
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
    );
  });
  const DropdownMenu = forwardRefComponent(function DropdownMenu({
    helpers,
    className,
    style,
    ...props
  }: DropdownMenuProps) {
    const { right, up, container } = useContext(DropdownContext);
    if (!container) return null;
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
    );
  });
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
    );
  });
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
      } = props;
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
      );
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
      } = props;
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
      );
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
    } = props;
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
    );
  });
  const DropdownDivider = styledElement(prefix, 'hr', 'dropdown-divider');

  function Modal({
    children,
    open,
    defaultOpen,
    onOpenChange,
    closeOnEscape = true,
    closeOnOutsideClick = true,
  }: ModalProps) {
    const [container, setContainer] = useState<HTMLElement | null>(null);
    return (
      <BaseDialog.Root
        open={open}
        defaultOpen={defaultOpen}
        disablePointerDismissal={!closeOnOutsideClick}
        onOpenChange={(next, details) => {
          if (!next && !closeOnEscape && details.reason === 'escape-key') {
            details.cancel();
            return;
          }
          onOpenChange?.(next, details);
        }}
      >
        <span
          hidden
          ref={(element) => {
            if (element)
              setContainer(element.closest<HTMLElement>(`.${prefix}root`));
          }}
        />
        <ModalContainerContext.Provider value={container}>
          {children}
        </ModalContainerContext.Provider>
      </BaseDialog.Root>
    );
  }
  const ModalTrigger = forwardRefComponent(function ModalTrigger(
    props: ModalTriggerProps,
  ) {
    if (props.as === 'a') {
      const { as: _as, helpers, className, unstyled, ...native } = props;
      return (
        <BaseDialog.Trigger
          nativeButton={false}
          render={<a {...native} />}
          className={classNames(
            prefix,
            [!unstyled && 'button'],
            helpers,
            className,
          )}
        />
      );
    }
    const {
      as: _as,
      helpers,
      className,
      unstyled,
      type = 'button',
      ...native
    } = props;
    return (
      <BaseDialog.Trigger
        {...native}
        type={type}
        className={classNames(
          prefix,
          [!unstyled && 'button'],
          helpers,
          className,
        )}
      />
    );
  });

  const ModalSurface = forwardRefComponent(function ModalSurface({
    token,
    container: explicitContainer,
    helpers,
    className,
    wrapperProps,
    backdropProps,
    children,
    close,
    ...props
  }: ModalContentProps & { token: 'modal-content' | 'modal-card' }) {
    const localContainer = useContext(ModalContainerContext);
    const container = explicitContainer ?? localContainer;
    const {
      helpers: wrapperHelpers,
      className: wrapperClassName,
      ...wrapper
    } = wrapperProps ?? {};
    const {
      helpers: backdropHelpers,
      className: backdropClassName,
      ...backdrop
    } = backdropProps ?? {};
    if (!container) return null;
    return (
      <BaseDialog.Portal container={container}>
        <div
          {...wrapper}
          className={classNames(
            prefix,
            ['modal', 'is-active'],
            wrapperHelpers,
            wrapperClassName,
          )}
        >
          <BaseDialog.Backdrop
            {...backdrop}
            forceRender
            className={classNames(
              prefix,
              ['modal-background'],
              backdropHelpers,
              backdropClassName,
            )}
          />
          <BaseDialog.Popup
            {...props}
            className={classNames(prefix, [token], helpers, className)}
          >
            {children}
            {close}
          </BaseDialog.Popup>
        </div>
      </BaseDialog.Portal>
    );
  });
  const ModalContent = forwardRefComponent(function ModalContent(
    props: ModalContentProps,
  ) {
    return <ModalSurface {...props} token="modal-content" />;
  });
  const ModalCard = forwardRefComponent(function ModalCard(
    props: ModalCardProps,
  ) {
    return <ModalSurface {...props} token="modal-card" />;
  });
  const ModalTitle = forwardRefComponent(function ModalTitle(
    props: ModalTitleProps,
  ) {
    if (props.as === 'p') {
      const { as: _as, helpers, className, ...native } = props;
      return (
        <BaseDialog.Title
          render={<p {...native} />}
          className={classNames(
            prefix,
            ['modal-card-title'],
            helpers,
            className,
          )}
        />
      );
    }
    const { as: _as, helpers, className, ...native } = props;
    return (
      <BaseDialog.Title
        {...native}
        className={classNames(prefix, ['modal-card-title'], helpers, className)}
      />
    );
  });

  const ModalDescription = forwardRefComponent(function ModalDescription({
    helpers,
    className,
    ...props
  }: ModalDescriptionProps) {
    return (
      <BaseDialog.Description
        {...props}
        className={classNames(prefix, [], helpers, className)}
      />
    );
  });
  const ModalClose = forwardRefComponent(function ModalClose({
    helpers,
    className,
    variant = 'icon',
    type = 'button',
    'aria-label': ariaLabel,
    ...props
  }: ModalCloseProps) {
    return (
      <BaseDialog.Close
        {...props}
        type={type}
        aria-label={ariaLabel ?? (variant === 'button' ? undefined : 'Close')}
        className={classNames(
          prefix,
          [variant === 'icon' ? 'modal-close' : variant],
          helpers,
          className,
        )}
      />
    );
  });
  const ModalCardHead = styledElement(prefix, 'header', 'modal-card-head');
  const ModalCardBody = styledElement(prefix, 'section', 'modal-card-body');
  const ModalCardFoot = styledElement(prefix, 'footer', 'modal-card-foot');

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
    );
  });
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
    const Tag = as ?? 'div';
    const {
      helpers: listHelpers,
      className: listClassName,
      ...listNative
    } = listProps ?? {};
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
    );
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
    });
  });
  const Tab = forwardRefComponent(function Tab(props: TabProps) {
    const { as: _as, helpers, className, wrapperProps, ...native } = props;
    const {
      helpers: wrapperHelpers,
      className: wrapperClassName,
      ...wrapper
    } = wrapperProps ?? {};
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
      );
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
    );
  });
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
    );
  });

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
    const [localExpanded, setLocalExpanded] = useState(defaultExpanded);
    const burger = useRef<HTMLElement | null>(null);
    const defaultMenuId = useStableId();
    const [registeredMenuId, setMenuId] = useState<string>();
    const state: NavbarState = {
      expanded: expanded ?? localExpanded,
      burger,
      menuId: registeredMenuId ?? defaultMenuId,
      setMenuId,
      setExpanded(value) {
        if (expanded === undefined) setLocalExpanded(value);
        onExpandedChange?.(value);
      },
    };
    const Tag = as ?? 'nav';
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
            onKeyDown?.(event);
            if (
              !event.defaultPrevented &&
              event.key === 'Escape' &&
              state.expanded
            ) {
              state.setExpanded(false);
              burger.current?.focus();
              event.preventDefault();
            }
          }}
        >
          {children}
        </Tag>
      </NavbarContext.Provider>
    );
  });
  const NavbarBrand = styledElement(prefix, 'div', 'navbar-brand');
  const NavbarBurger = forwardRefComponent(function NavbarBurger(
    props: NavbarBurgerProps,
  ): ReactElement {
    const state = useContext(NavbarContext);
    const [localExpanded, setLocalExpanded] = useState(
      props.defaultExpanded ?? false,
    );
    const expanded = props.expanded ?? state?.expanded ?? localExpanded;
    const {
      as: _as,
      expanded: _expanded,
      defaultExpanded: _defaultExpanded,
      onExpandedChange,
      helpers,
      className,
      children,
      ...native
    } = props;
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
    };
    function behavior<Element extends HTMLElement>(
      ref: Ref<Element> | undefined,
      onClick: MouseEventHandler<Element> | undefined,
      onKeyDown: KeyboardEventHandler<Element> | undefined,
      nativeButton: boolean,
      nativeEnter = false,
    ) {
      return {
        ref(element: Element | null) {
          if (state) state.burger.current = element;
          return assignRef(ref, element);
        },
        onClick: ((event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          if (state) state.setExpanded(!expanded);
          else if (props.expanded === undefined) setLocalExpanded(!expanded);
          onExpandedChange?.(!expanded);
        }) satisfies MouseEventHandler<Element>,
        onKeyDown: ((event) => {
          onKeyDown?.(event);
          if (event.defaultPrevented || nativeButton) return;
          if (event.key === ' ' || (event.key === 'Enter' && !nativeEnter)) {
            event.preventDefault();
            event.currentTarget.click();
          }
        }) satisfies KeyboardEventHandler<Element>,
      };
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
      });
    }
    if (props.as === 'div') {
      return createElement('div', {
        ...native,
        ...common,
        role: props.role ?? 'button',
        tabIndex: props.tabIndex ?? 0,
        ...behavior(props.ref, props.onClick, props.onKeyDown, false),
      });
    }
    if (props.as === 'span') {
      return createElement('span', {
        ...native,
        ...common,
        role: props.role ?? 'button',
        tabIndex: props.tabIndex ?? 0,
        ...behavior(props.ref, props.onClick, props.onKeyDown, false),
      });
    }
    return createElement('button', {
      ...native,
      ...common,
      type: props.type ?? 'button',
      ...behavior(props.ref, props.onClick, props.onKeyDown, true),
    });
  });

  const NavbarMenu = forwardRefComponent(function NavbarMenu({
    helpers,
    className,
    id,
    expanded,
    ...props
  }: NavbarMenuProps) {
    const state = useContext(NavbarContext);
    const registerMenuId = state?.setMenuId;
    useClientLayoutEffect(() => {
      registerMenuId?.(id);
      return () => registerMenuId?.(undefined);
    }, [id, registerMenuId]);
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
    );
  });
  const NavbarStart = styledElement(prefix, 'div', 'navbar-start');
  const NavbarEnd = styledElement(prefix, 'div', 'navbar-end');
  const NavbarItem = forwardRefComponent(function NavbarItem(
    props: NavbarItemProps,
  ) {
    const tokens = [
      'navbar-item',
      props.active && 'is-active',
      props.expanded && 'is-expanded',
      props.tab && 'is-tab',
    ];
    if (props.as === 'div' || props.as === 'span') {
      const {
        as,
        helpers,
        className,
        active: _active,
        expanded: _expanded,
        tab: _tab,
        ...native
      } = props;
      return createElement(as, {
        ...native,
        className: classNames(prefix, tokens, helpers, className),
      });
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
      } = props;
      return (
        <button
          {...native}
          type={type}
          className={classNames(prefix, tokens, helpers, className)}
        />
      );
    }
    const {
      as: _as,
      helpers,
      className,
      active: _active,
      expanded: _expanded,
      tab: _tab,
      ...native
    } = props;
    return (
      <a
        {...native}
        className={classNames(prefix, tokens, helpers, className)}
      />
    );
  });
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
    );
  });
  const NavbarDropdown = forwardRefComponent(function NavbarDropdown(
    props: NavbarDropdownProps,
  ) {
    const [localOpen, setLocalOpen] = useState(props.defaultOpen ?? false);
    const open = props.open ?? localOpen;
    const triggerRef = useRef<HTMLElement | null>(null);
    const menuId = useStableId();
    const {
      helpers: menuHelpers,
      className: menuClassName,
      ...menuNative
    } = props.menuProps ?? {};
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
    );
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
    );
    function changeOpen(value: boolean) {
      if (props.open === undefined) setLocalOpen(value);
    }
    function keyDown<Element extends HTMLElement>(
      handler: KeyboardEventHandler<Element> | undefined,
    ): KeyboardEventHandler<Element> {
      return (event) => {
        handler?.(event);
        const details =
          event.currentTarget instanceof HTMLDetailsElement
            ? event.currentTarget
            : undefined;
        if (
          !event.defaultPrevented &&
          event.key === 'Escape' &&
          (details?.open ?? open)
        ) {
          if (details && props.open === undefined) details.open = false;
          changeOpen(false);
          triggerRef.current?.focus();
          event.preventDefault();
          event.stopPropagation();
        }
      };
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
      } = props;
      const {
        helpers: triggerHelpers,
        className: triggerClassName,
        ref,
        onClick,
        onKeyDown: onTriggerKeyDown,
        ...triggerNative
      } = triggerProps ?? {};
      return (
        <div
          {...native}
          className={rootClassName}
          onKeyDown={keyDown(onKeyDown)}
          onPointerEnter={(event) => {
            onPointerEnter?.(event);
            if (
              !event.defaultPrevented &&
              hoverable &&
              event.pointerType !== 'touch'
            )
              changeOpen(true);
          }}
          onPointerLeave={(event) => {
            onPointerLeave?.(event);
            if (
              !event.defaultPrevented &&
              hoverable &&
              event.pointerType !== 'touch'
            )
              changeOpen(false);
          }}
        >
          <a
            {...triggerNative}
            ref={(element) => {
              triggerRef.current = element;
              return assignRef(ref, element);
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
              onClick?.(event);
              if (!event.defaultPrevented) changeOpen(!open);
            }}
            onKeyDown={(event) => {
              onTriggerKeyDown?.(event);
              if (
                !event.defaultPrevented &&
                (event.key === ' ' ||
                  (event.key === 'Enter' && !triggerNative.href))
              ) {
                event.preventDefault();
                event.currentTarget.click();
              }
            }}
          >
            {trigger}
          </a>
          {menu}
        </div>
      );
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
    } = props;
    const {
      helpers: triggerHelpers,
      className: triggerClassName,
      ref,
      ...triggerNative
    } = triggerProps ?? {};
    return (
      <details
        {...native}
        open={open}
        className={rootClassName}
        onKeyDown={keyDown(onKeyDown)}
        onToggle={(event) => {
          onToggle?.(event);
          changeOpen(event.currentTarget.open);
        }}
        onPointerEnter={(event) => {
          onPointerEnter?.(event);
          if (
            !event.defaultPrevented &&
            hoverable &&
            event.pointerType !== 'touch'
          )
            changeOpen(true);
        }}
        onPointerLeave={(event) => {
          onPointerLeave?.(event);
          if (
            !event.defaultPrevented &&
            hoverable &&
            event.pointerType !== 'touch'
          )
            changeOpen(false);
        }}
      >
        <summary
          {...triggerNative}
          ref={(element) => {
            triggerRef.current = element;
            return assignRef(ref, element);
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
    );
  });
  const NavbarDivider = styledElement(prefix, 'hr', 'navbar-divider');

  return {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
    DropdownDivider,
    Modal,
    ModalTrigger,
    ModalContent,
    ModalTitle,
    ModalDescription,
    ModalClose,
    ModalCard,
    ModalCardHead,
    ModalCardBody,
    ModalCardFoot,
    Tabs,
    TabsList,
    Tab,
    TabPanel,
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
  };
}

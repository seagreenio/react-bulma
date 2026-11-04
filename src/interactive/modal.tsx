import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { createContext, useContext, useState } from 'react'
import { defaultPrefix, type Prefix } from '../config'
import { classNames, forwardRefComponent, styledElement } from '../shared'

import type {
  ModalCardProps,
  ModalCloseProps,
  ModalContentProps,
  ModalDescriptionProps,
  ModalProps,
  ModalTitleProps,
  ModalTriggerProps,
} from './types'

export function createModal(prefix: Prefix) {
  const ModalContainerContext = createContext<HTMLElement | null>(null)
  function Modal({
    children,
    open,
    defaultOpen,
    onOpenChange,
    closeOnEscape = true,
    closeOnOutsideClick = true,
  }: ModalProps) {
    const [container, setContainer] = useState<HTMLElement | null>(null)
    return (
      <BaseDialog.Root
        open={open}
        defaultOpen={defaultOpen}
        disablePointerDismissal={!closeOnOutsideClick}
        onOpenChange={(next, details) => {
          if (!next && !closeOnEscape && details.reason === 'escape-key') {
            details.cancel()
            return
          }
          onOpenChange?.(next, details)
        }}
      >
        <span
          hidden
          ref={(element) => {
            if (element)
              setContainer(element.closest<HTMLElement>(`.${prefix}root`))
          }}
        />
        <ModalContainerContext.Provider value={container}>
          {children}
        </ModalContainerContext.Provider>
      </BaseDialog.Root>
    )
  }
  const ModalTrigger = forwardRefComponent(function ModalTrigger(
    props: ModalTriggerProps,
  ) {
    if (props.as === 'a') {
      const { as: _as, helpers, className, unstyled, ...native } = props
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
      )
    }
    const {
      as: _as,
      helpers,
      className,
      unstyled,
      type = 'button',
      ...native
    } = props
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
    )
  })
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
    const localContainer = useContext(ModalContainerContext)
    const container = explicitContainer ?? localContainer
    const {
      helpers: wrapperHelpers,
      className: wrapperClassName,
      ...wrapper
    } = wrapperProps ?? {}
    const {
      helpers: backdropHelpers,
      className: backdropClassName,
      ...backdrop
    } = backdropProps ?? {}
    if (!container) return null
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
    )
  })
  const ModalContent = forwardRefComponent(function ModalContent(
    props: ModalContentProps,
  ) {
    return <ModalSurface {...props} token="modal-content" />
  })
  const ModalCard = forwardRefComponent(function ModalCard(
    props: ModalCardProps,
  ) {
    return <ModalSurface {...props} token="modal-card" />
  })
  const ModalTitle = forwardRefComponent(function ModalTitle(
    props: ModalTitleProps,
  ) {
    if (props.as === 'p') {
      const { as: _as, helpers, className, ...native } = props
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
      )
    }
    const { as: _as, helpers, className, ...native } = props
    return (
      <BaseDialog.Title
        {...native}
        className={classNames(prefix, ['modal-card-title'], helpers, className)}
      />
    )
  })
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
    )
  })
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
    )
  })
  const ModalCardHead = styledElement(prefix, 'header', 'modal-card-head')
  const ModalCardBody = styledElement(prefix, 'section', 'modal-card-body')
  const ModalCardFoot = styledElement(prefix, 'footer', 'modal-card-foot')
  return {
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
  }
}

export const {
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
} = /* @__PURE__ */ createModal(defaultPrefix)

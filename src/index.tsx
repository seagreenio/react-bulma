import { createElement } from 'react'
import { resolvePrefix, type BulmaConfig } from './config'
import { helperNames, type Helpers } from './helpers'
import { createElements } from './elements'
import { createForms } from './forms'
import { createLayout } from './layout'
import { createComponents } from './components'
import { createInteractive } from './interactive'
import {
  classNames,
  forwardRefComponent,
  type Color,
  type NativeProps,
  type NativeTagProps,
} from './shared'

export type { BulmaConfig } from './config'
export type { Helpers } from './helpers'
export type { Color, Size, StyledProps, Style } from './shared'
export type * from './elements'
export type * from './forms'
export type * from './layout'
export type * from './components'
export type * from './interactive'

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

export function createBulma(config: BulmaConfig = {}) {
  const prefix = resolvePrefix(config)
  const helpers = (values?: Helpers) => helperNames(prefix, values)

  const Button = forwardRefComponent(function Button({
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

  const BulmaRoot = forwardRefComponent(function BulmaRoot({
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

  return Object.freeze({
    Button,
    BulmaRoot,
    helpers,
    ...createElements(prefix),
    ...createForms(prefix),
    ...createLayout(prefix),
    ...createComponents(prefix),
    ...createInteractive(prefix),
  })
}

export type Bulma = ReturnType<typeof createBulma>

export const {
  Button,
  BulmaRoot,
  helpers,
  Block,
  Box,
  Buttons,
  LinkButton,
  Content,
  Delete,
  Icon,
  IconText,
  Image,
  Notification,
  Progress,
  Table,
  TableContainer,
  Tag,
  LinkTag,
  TagDelete,
  Tags,
  Title,
  Subtitle,
  Loader,
  SkeletonBlock,
  SkeletonLines,
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Control,
  Help,
  Input,
  Textarea,
  Select,
  Checkbox,
  Checkboxes,
  Radio,
  Radios,
  File,
  Container,
  Hero,
  HeroHead,
  HeroBody,
  HeroFoot,
  Section,
  Footer,
  Level,
  LevelLeft,
  LevelRight,
  LevelItem,
  Media,
  MediaLeft,
  MediaRight,
  MediaContent,
  Columns,
  Column,
  SmartGrid,
  FixedGrid,
  Cell,
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
} = createBulma()

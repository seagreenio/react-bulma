import { createElement, type ReactElement } from 'react';
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

export type BlockProps = NativeTagProps<'div', 'p'>;
export type BoxProps = NativeTagProps<'div', 'form'>;
export type IconTextProps = NativeTagProps<'span', 'div'>;
export type TableContainerProps = NativeProps<'div'>;
export type LoaderProps = NativeProps<'span'>;
export type ButtonsProps = NativeTagProps<
  'div',
  'p',
  {
    size?: Exclude<Size, 'normal'>;
    align?: 'center' | 'right';
    addons?: boolean;
  }
>;
export interface LinkButtonProps extends Omit<NativeProps<'a'>, 'color'> {
  color?: Color;
  size?: Size;
  tone?: 'light' | 'dark' | 'soft' | 'bold';
  variant?: 'text' | 'ghost';
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  responsive?: boolean;
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  expanded?: boolean;
}
export interface ContentProps extends NativeProps<'div'> {
  size?: Size;
}
export interface DeleteProps extends NativeProps<'button'> {
  size?: Exclude<Size, 'normal'>;
}
export type IconProps = NativeTagProps<
  'span',
  'div',
  {
    size?: Exclude<Size, 'normal'>;
  }
>;
export type ImageSize = 16 | 24 | 32 | 48 | 64 | 96 | 128;
export type ImageRatio =
  | 'square'
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3';
type ImageWrapperProps =
  | { as?: 'figure'; wrapperProps?: NativeProps<'figure'> }
  | { as: 'p'; wrapperProps?: NativeProps<'p'> };
export type ImageProps = ImageWrapperProps & {
  size?: ImageSize;
  ratio?: ImageRatio;
  fullWidth?: boolean;
} & (
    | (Omit<NativeProps<'img'>, 'alt' | 'children'> & {
        alt: string;
        rounded?: boolean;
        children?: never;
      })
    | {
        children: ReactElement;
        alt?: never;
        src?: never;
        ref?: never;
        rounded?: never;
        helpers?: NativeProps<'figure'>['helpers'];
        className?: string;
      }
  );
export interface NotificationProps extends Omit<NativeProps<'div'>, 'color'> {
  color?: Color;
  tone?: 'light' | 'dark';
}
export interface ProgressProps extends Omit<NativeProps<'progress'>, 'color'> {
  color?: Color;
  size?: Exclude<Size, 'normal'>;
}
export interface TableProps extends NativeProps<'table'> {
  bordered?: boolean;
  striped?: boolean;
  narrow?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
}
export interface TagModifiers {
  color?: Color;
  size?: Exclude<Size, 'small'>;
  light?: boolean;
  rounded?: boolean;
}
export type TagProps = NativeTagProps<'span', 'div' | 'button', TagModifiers>;
export interface LinkTagProps
  extends Omit<NativeProps<'a'>, 'color'>, TagModifiers {}
export type TagDeleteProps = NativeTagProps<
  'button',
  'a',
  TagModifiers & { children?: never }
>;
export interface TagsProps extends NativeProps<'div'> {
  size?: 'medium' | 'large';
  align?: 'center' | 'right';
  addons?: boolean;
}
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleProps = NativeTagProps<
  'h1',
  'p',
  {
    level?: HeadingLevel;
    size?: HeadingLevel;
    spaced?: boolean;
  }
>;
export type SubtitleProps = TitleProps;
export type SkeletonBlockProps = Omit<NativeProps<'div'>, 'aria-hidden'>;
export interface SkeletonLinesProps extends Omit<
  SkeletonBlockProps,
  'children'
> {
  lines?: number;
}

export function createElements(prefix: Prefix) {
  const Block = styledElement(prefix, 'div', 'block', ['p']);
  const Box = styledElement(prefix, 'div', 'box', ['form']);
  const IconText = styledElement(prefix, 'span', 'icon-text', ['div']);
  const TableContainer = styledElement(prefix, 'div', 'table-container');
  const Loader = styledElement(prefix, 'span', 'loader');

  const Buttons = forwardRefComponent(function Buttons({
    as,
    size,
    align,
    addons,
    helpers,
    className,
    ...props
  }: ButtonsProps) {
    return createElement(as ?? 'div', {
      ...props,
      className: classNames(
        prefix,
        [
          'buttons',
          size && `are-${size}`,
          align && `is-${align === 'center' ? 'centered' : 'right'}`,
          addons && 'has-addons',
        ],
        helpers,
        className,
      ),
    });
  });

  const LinkButton = forwardRefComponent(function LinkButton({
    color,
    size,
    tone,
    variant,
    outlined,
    inverted,
    rounded,
    fullWidth,
    responsive,
    loading,
    disabled,
    selected,
    expanded,
    helpers,
    className,
    'aria-busy': ariaBusy,
    'aria-disabled': ariaDisabled,
    href,
    tabIndex,
    onClick,
    ...props
  }: LinkButtonProps) {
    return (
      <a
        {...props}
        href={loading || disabled ? undefined : href}
        role={props.role ?? (loading || disabled ? 'link' : undefined)}
        tabIndex={loading || disabled ? -1 : tabIndex}
        aria-disabled={loading || disabled || ariaDisabled}
        aria-busy={loading || ariaBusy}
        data-loading-disabled={loading && !disabled ? '' : undefined}
        onClick={(event) => {
          if (loading || disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        className={classNames(
          prefix,
          [
            'button',
            color && `is-${color}`,
            size && `is-${size}`,
            tone && `is-${tone}`,
            variant && `is-${variant}`,
            outlined && 'is-outlined',
            inverted && 'is-inverted',
            rounded && 'is-rounded',
            fullWidth && 'is-fullwidth',
            responsive && 'is-responsive',
            loading && 'is-loading',
            selected && 'is-selected',
            expanded && 'is-expanded',
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const Content = forwardRefComponent(function Content({
    size,
    helpers,
    className,
    ...props
  }: ContentProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          ['content', size && `is-${size}`],
          helpers,
          className,
        )}
      />
    );
  });

  const Delete = forwardRefComponent(function Delete({
    size,
    helpers,
    className,
    type = 'button',
    'aria-label': label = 'Close',
    ...props
  }: DeleteProps) {
    return (
      <button
        {...props}
        type={type}
        aria-label={label}
        className={classNames(
          prefix,
          ['delete', size && `is-${size}`],
          helpers,
          className,
        )}
      />
    );
  });

  const Icon = forwardRefComponent(function Icon({
    as,
    size,
    helpers,
    className,
    ...props
  }: IconProps) {
    return createElement(as ?? 'span', {
      ...props,
      className: classNames(
        prefix,
        ['icon', size && `is-${size}`],
        helpers,
        className,
      ),
    });
  });

  const Image = forwardRefComponent(function Image({
    as = 'figure',
    size,
    ratio,
    rounded,
    fullWidth,
    children,
    wrapperProps = {},
    helpers,
    className,
    ...props
  }: ImageProps) {
    const {
      helpers: wrapperHelpers,
      className: wrapperClass,
      ...nativeWrapperProps
    } = wrapperProps;
    return createElement(as, {
      ...nativeWrapperProps,
      className: classNames(
        prefix,
        [
          'image',
          size && `is-${size}x${size}`,
          ratio && `is-${ratio}`,
          fullWidth && 'is-fullwidth',
        ],
        { ...helpers, ...wrapperHelpers },
        [wrapperClass, children && className].filter(Boolean).join(' ') ||
          undefined,
      ),
      children: children ?? (
        <img
          {...props}
          className={
            classNames(
              prefix,
              [rounded && 'is-rounded'],
              undefined,
              className,
            ) || undefined
          }
        />
      ),
    });
  });

  const Notification = forwardRefComponent(function Notification({
    color,
    tone,
    helpers,
    className,
    ...props
  }: NotificationProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          ['notification', color && `is-${color}`, tone && `is-${tone}`],
          helpers,
          className,
        )}
      />
    );
  });

  const Progress = forwardRefComponent(function Progress({
    color,
    size,
    helpers,
    className,
    ...props
  }: ProgressProps) {
    return (
      <progress
        {...props}
        className={classNames(
          prefix,
          ['progress', color && `is-${color}`, size && `is-${size}`],
          helpers,
          className,
        )}
      />
    );
  });

  const Table = forwardRefComponent(function Table({
    bordered,
    striped,
    narrow,
    hoverable,
    fullWidth,
    helpers,
    className,
    ...props
  }: TableProps) {
    return (
      <table
        {...props}
        className={classNames(
          prefix,
          [
            'table',
            bordered && 'is-bordered',
            striped && 'is-striped',
            narrow && 'is-narrow',
            hoverable && 'is-hoverable',
            fullWidth && 'is-fullwidth',
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const Tag = forwardRefComponent(function Tag({
    as,
    color,
    size,
    light,
    rounded,
    helpers,
    className,
    ...props
  }: TagProps) {
    return createElement(as ?? 'span', {
      ...props,
      className: classNames(
        prefix,
        [
          'tag',
          color && `is-${color}`,
          size && `is-${size}`,
          light && 'is-light',
          rounded && 'is-rounded',
        ],
        helpers,
        className,
      ),
    });
  });

  const Tags = forwardRefComponent(function Tags({
    size,
    align,
    addons,
    helpers,
    className,
    ...props
  }: TagsProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          [
            'tags',
            size && `are-${size}`,
            align && `is-${align === 'center' ? 'centered' : 'right'}`,
            addons && 'has-addons',
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const LinkTag = forwardRefComponent(function LinkTag({
    color,
    size,
    light,
    rounded,
    helpers,
    className,
    ...props
  }: LinkTagProps) {
    return (
      <a
        {...props}
        className={classNames(
          prefix,
          [
            'tag',
            color && `is-${color}`,
            size && `is-${size}`,
            light && 'is-light',
            rounded && 'is-rounded',
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const TagDelete = forwardRefComponent(function TagDelete({
    as,
    color,
    size,
    light,
    rounded,
    helpers,
    className,
    type,
    'aria-label': label = 'Remove tag',
    ...props
  }: TagDeleteProps) {
    return createElement(as ?? 'button', {
      ...props,
      type: as === 'a' ? type : (type ?? 'button'),
      'aria-label': label,
      className: classNames(
        prefix,
        [
          'tag',
          'is-delete',
          color && `is-${color}`,
          size && `is-${size}`,
          light && 'is-light',
          rounded && 'is-rounded',
        ],
        helpers,
        className,
      ),
    });
  });

  const Title = forwardRefComponent(function Title({
    as,
    level = 1,
    size,
    spaced,
    helpers,
    className,
    ...props
  }: TitleProps) {
    return createElement(as ?? `h${level}`, {
      ...props,
      className: classNames(
        prefix,
        ['title', size && `is-${size}`, spaced && 'is-spaced'],
        helpers,
        className,
      ),
    });
  });

  const Subtitle = forwardRefComponent(function Subtitle({
    as,
    level = 2,
    size,
    spaced,
    helpers,
    className,
    ...props
  }: SubtitleProps) {
    return createElement(as ?? `h${level}`, {
      ...props,
      className: classNames(
        prefix,
        ['subtitle', size && `is-${size}`, spaced && 'is-spaced'],
        helpers,
        className,
      ),
    });
  });

  const SkeletonBlock = forwardRefComponent(function SkeletonBlock({
    helpers,
    className,
    ...props
  }: SkeletonBlockProps) {
    return (
      <div
        {...props}
        aria-hidden="true"
        className={classNames(prefix, ['skeleton-block'], helpers, className)}
      />
    );
  });

  const SkeletonLines = forwardRefComponent(function SkeletonLines({
    lines = 3,
    helpers,
    className,
    ...props
  }: SkeletonLinesProps) {
    if (!Number.isInteger(lines) || lines < 1)
      throw new RangeError('SkeletonLines lines must be a positive integer.');
    return (
      <div
        {...props}
        aria-hidden="true"
        className={classNames(prefix, ['skeleton-lines'], helpers, className)}
      >
        {Array.from({ length: lines }, (_, index) => (
          <div key={index} />
        ))}
      </div>
    );
  });

  return {
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
  };
}

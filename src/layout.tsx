import { createElement, type CSSProperties } from 'react';
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

export interface ContainerProps extends NativeProps<'div'> {
  width?: 'fluid' | 'widescreen' | 'fullhd';
  maxWidth?: 'tablet' | 'desktop' | 'widescreen';
}
export interface HeroProps extends Omit<NativeProps<'section'>, 'color'> {
  color?: Color;
  size?: Exclude<Size, 'normal'>;
  height?: 'half' | 'full' | 'full-with-navbar';
  bold?: boolean;
}
export type HeroHeadProps = NativeProps<'div'>;
export type HeroBodyProps = NativeProps<'div'>;
export type HeroFootProps = NativeProps<'div'>;
export interface SectionProps extends NativeProps<'section'> {
  size?: 'medium' | 'large';
  fullHeight?: boolean;
}
export type FooterProps = NativeProps<'footer'>;
export interface LevelProps extends NativeProps<'nav'> {
  mobile?: boolean;
}
export type LevelLeftProps = NativeProps<'div'>;
export type LevelRightProps = NativeProps<'div'>;
export type LevelItemProps = NativeTagProps<
  'div',
  'a' | 'p',
  {
    narrow?: boolean;
    flexible?: boolean;
  }
>;
export type MediaProps = NativeTagProps<
  'article',
  'div',
  {
    size?: 'large';
  }
>;
export type MediaLeftProps = NativeTagProps<'div', 'figure'>;
export type MediaRightProps = NativeProps<'div'>;
export type MediaContentProps = NativeProps<'div'>;

export type GridCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnFraction =
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'one-fifth'
  | 'two-fifths'
  | 'three-fifths'
  | 'four-fifths';
export type ColumnWidth = GridCount | ColumnFraction | 'full' | 'narrow';
export type ColumnOffset = 0 | GridCount | ColumnFraction;
export type ColumnBreakpoint =
  'base' | 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd';
export type ColumnResponsive<T> = T | Partial<Record<ColumnBreakpoint, T>>;
export type ColumnGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type GapBreakpoint =
  ColumnBreakpoint | 'tablet-only' | 'desktop-only' | 'widescreen-only';
export interface ColumnsProps extends NativeProps<'div'> {
  displayFrom?: 'mobile' | 'tablet' | 'desktop';
  gap?: ColumnGap | Partial<Record<GapBreakpoint, ColumnGap>>;
  gapless?: boolean;
  multiline?: boolean;
  centered?: boolean;
  verticallyCentered?: boolean;
}
export interface ColumnProps extends NativeProps<'div'> {
  width?: ColumnResponsive<ColumnWidth>;
  offset?: ColumnResponsive<ColumnOffset>;
}
export type GridBreakpoint =
  'base' | 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd';
export type GridResponsive<T> = T | Partial<Record<GridBreakpoint, T>>;
export interface SmartGridProps extends NativeProps<'div'> {
  minColumnWidth?: string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  autoFill?: boolean;
}
export interface FixedGridProps extends NativeProps<'div'> {
  columns?: GridResponsive<GridCount> | 'auto';
  gridProps?: Omit<SmartGridProps, 'children' | 'minColumnWidth' | 'autoFill'>;
}
export type CellBreakpoint =
  GridBreakpoint | 'tablet-only' | 'desktop-only' | 'widescreen-only';
export type CellResponsive =
  GridCount | Partial<Record<CellBreakpoint, GridCount>>;
export interface CellProps extends NativeProps<'div'> {
  columnSpan?: CellResponsive;
  rowSpan?: CellResponsive;
  columnStart?: CellResponsive | 'end';
  rowStart?: CellResponsive | 'end';
  columnEnd?: CellResponsive;
  rowEnd?: CellResponsive;
  columnFromEnd?: CellResponsive;
  rowFromEnd?: CellResponsive;
}

function responsiveTokens(
  value: string | number | Partial<Record<string, string | number>> | undefined,
  stem: string,
  suffix = '',
): string[] {
  if (value === undefined) return [];
  if (typeof value !== 'object') return [`${stem}${value}${suffix}`];
  return Object.entries(value)
    .filter(([, item]) => item !== undefined)
    .map(
      ([breakpoint, item]) =>
        `${stem}${item}${suffix}${breakpoint === 'base' ? '' : `-${breakpoint}`}`,
    );
}

function gridStyle(
  prefix: Prefix,
  style: CSSProperties | undefined,
  minColumnWidth?: string,
  gap?: string,
  columnGap?: string,
  rowGap?: string,
): CSSProperties {
  return {
    ...(minColumnWidth !== undefined && {
      [`--${prefix}grid-column-min`]: minColumnWidth,
    }),
    ...(gap !== undefined && { [`--${prefix}grid-gap`]: gap }),
    ...(columnGap !== undefined && {
      [`--${prefix}grid-column-gap`]: columnGap,
    }),
    ...(rowGap !== undefined && { [`--${prefix}grid-row-gap`]: rowGap }),
    ...style,
  };
}

export function createLayout(prefix: Prefix) {
  const HeroHead = styledElement(prefix, 'div', 'hero-head');
  const HeroBody = styledElement(prefix, 'div', 'hero-body');
  const HeroFoot = styledElement(prefix, 'div', 'hero-foot');
  const Footer = styledElement(prefix, 'footer', 'footer');
  const LevelLeft = styledElement(prefix, 'div', 'level-left');
  const LevelRight = styledElement(prefix, 'div', 'level-right');
  const MediaLeft = styledElement(prefix, 'div', 'media-left', ['figure']);
  const MediaRight = styledElement(prefix, 'div', 'media-right');
  const MediaContent = styledElement(prefix, 'div', 'media-content');

  const Container = forwardRefComponent(function Container({
    width,
    maxWidth,
    helpers,
    className,
    ...props
  }: ContainerProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          [
            'container',
            width && `is-${width}`,
            maxWidth && `is-max-${maxWidth}`,
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const Hero = forwardRefComponent(function Hero({
    color,
    size,
    height,
    bold,
    helpers,
    className,
    ...props
  }: HeroProps) {
    const heights = {
      half: 'is-halfheight',
      full: 'is-fullheight',
      'full-with-navbar': 'is-fullheight-with-navbar',
    } as const;
    return (
      <section
        {...props}
        className={classNames(
          prefix,
          [
            'hero',
            color && `is-${color}`,
            size && `is-${size}`,
            height && heights[height],
            bold && 'is-bold',
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const Section = forwardRefComponent(function Section({
    size,
    fullHeight,
    helpers,
    className,
    ...props
  }: SectionProps) {
    return (
      <section
        {...props}
        className={classNames(
          prefix,
          ['section', size && `is-${size}`, fullHeight && 'is-fullheight'],
          helpers,
          className,
        )}
      />
    );
  });

  const Level = forwardRefComponent(function Level({
    mobile,
    helpers,
    className,
    ...props
  }: LevelProps) {
    return (
      <nav
        {...props}
        className={classNames(
          prefix,
          ['level', mobile && 'is-mobile'],
          helpers,
          className,
        )}
      />
    );
  });

  const LevelItem = forwardRefComponent(function LevelItem({
    as,
    narrow,
    flexible,
    helpers,
    className,
    ...props
  }: LevelItemProps) {
    return createElement(as ?? 'div', {
      ...props,
      className: classNames(
        prefix,
        ['level-item', narrow && 'is-narrow', flexible && 'is-flexible'],
        helpers,
        className,
      ),
    });
  });

  const Media = forwardRefComponent(function Media({
    as,
    size,
    helpers,
    className,
    ...props
  }: MediaProps) {
    return createElement(as ?? 'article', {
      ...props,
      className: classNames(
        prefix,
        ['media', size && `is-${size}`],
        helpers,
        className,
      ),
    });
  });

  const Columns = forwardRefComponent(function Columns({
    displayFrom,
    gap,
    gapless,
    multiline,
    centered,
    verticallyCentered,
    helpers,
    className,
    ...props
  }: ColumnsProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          [
            'columns',
            displayFrom && displayFrom !== 'tablet' && `is-${displayFrom}`,
            ...responsiveTokens(gap, 'is-'),
            gapless && 'is-gapless',
            multiline && 'is-multiline',
            centered && 'is-centered',
            verticallyCentered && 'is-vcentered',
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const Column = forwardRefComponent(function Column({
    width,
    offset,
    helpers,
    className,
    ...props
  }: ColumnProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          [
            'column',
            ...responsiveTokens(width, 'is-'),
            ...responsiveTokens(offset, 'is-offset-'),
          ],
          helpers,
          className,
        )}
      />
    );
  });

  const SmartGrid = forwardRefComponent(function SmartGrid({
    minColumnWidth,
    gap,
    columnGap,
    rowGap,
    autoFill,
    style,
    helpers,
    className,
    ...props
  }: SmartGridProps) {
    return (
      <div
        {...props}
        style={gridStyle(prefix, style, minColumnWidth, gap, columnGap, rowGap)}
        className={classNames(
          prefix,
          ['grid', autoFill && 'is-auto-fill'],
          helpers,
          className,
        )}
      />
    );
  });

  const FixedGrid = forwardRefComponent(function FixedGrid({
    columns,
    gridProps = {},
    children,
    helpers,
    className,
    ...props
  }: FixedGridProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          [
            'fixed-grid',
            ...(columns === 'auto'
              ? ['has-auto-count']
              : responsiveTokens(columns, 'has-', '-cols')),
          ],
          helpers,
          className,
        )}
      >
        <SmartGrid {...gridProps}>{children}</SmartGrid>
      </div>
    );
  });

  const Cell = forwardRefComponent(function Cell({
    columnSpan,
    rowSpan,
    columnStart,
    rowStart,
    columnEnd,
    rowEnd,
    columnFromEnd,
    rowFromEnd,
    helpers,
    className,
    ...props
  }: CellProps) {
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          [
            'cell',
            ...responsiveTokens(columnSpan, 'is-col-span-'),
            ...responsiveTokens(rowSpan, 'is-row-span-'),
            ...responsiveTokens(columnStart, 'is-col-start-'),
            ...responsiveTokens(rowStart, 'is-row-start-'),
            ...responsiveTokens(columnEnd, 'is-col-end-'),
            ...responsiveTokens(rowEnd, 'is-row-end-'),
            ...responsiveTokens(columnFromEnd, 'is-col-from-end-'),
            ...responsiveTokens(rowFromEnd, 'is-row-from-end-'),
          ],
          helpers,
          className,
        )}
      />
    );
  });

  return {
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
  };
}

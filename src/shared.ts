import {
  createElement,
  forwardRef,
  type ComponentPropsWithRef,
  type CSSProperties,
  type NamedExoticComponent,
  type JSX,
  type ReactElement,
} from 'react';
import type { Prefix } from './config';
import { helperNames, type Helpers, colors } from './helpers';

export type Color = keyof typeof colors;
export type Size = 'small' | 'normal' | 'medium' | 'large';
export interface StyledProps {
  helpers?: Helpers;
}
export type Style = CSSProperties &
  Partial<Record<`--${string}`, string | number>>;
export type NativeProps<Tag extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithRef<Tag> & StyledProps;
export type NativeTagProps<
  Default extends keyof JSX.IntrinsicElements,
  Alternate extends keyof JSX.IntrinsicElements = never,
  Own = object,
> =
  | (Omit<NativeProps<Default>, keyof Own> & Own & { as?: Default })
  | {
      [Tag in Alternate]: Omit<NativeProps<Tag>, keyof Own> & Own & { as: Tag };
    }[Alternate];
export type ClassToken = string | false | undefined | null;

export function forwardRefComponent<Props>(
  render: (props: Props) => ReactElement | null,
): NamedExoticComponent<Props> {
  const component = forwardRef<unknown, Props>((props, ref) =>
    render({ ...props, ref } as Props),
  );
  component.displayName = render.name;
  return component as NamedExoticComponent<Props>;
}

export function classNames(
  prefix: Prefix,
  tokens: readonly ClassToken[],
  helpers?: Helpers,
  className?: string,
): string {
  return [
    ...tokens.filter(Boolean).map((token) => `${prefix}${token}`),
    helperNames(prefix, helpers),
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export function styledElement<
  Tag extends keyof JSX.IntrinsicElements,
  Alternate extends keyof JSX.IntrinsicElements = never,
>(
  prefix: Prefix,
  tag: Tag,
  token: string,
  _alternateTags?: readonly Alternate[],
): NamedExoticComponent<NativeTagProps<Tag, Alternate>> {
  return forwardRefComponent(function StyledElement({
    as,
    helpers,
    className,
    ...props
  }: NativeTagProps<Tag, Alternate>) {
    return createElement<Record<string, unknown>>(as ?? tag, {
      ...props,
      className: classNames(prefix, [token], helpers, className),
    });
  });
}

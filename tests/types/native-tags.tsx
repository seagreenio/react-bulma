import {
  createRef,
  type ComponentProps,
  type ComponentPropsWithRef,
} from 'react'
import {
  createBulma,
  type BoxProps,
  type ButtonProps,
  type ImageProps,
  type NavbarBurgerProps,
} from '../../src'

const ui = createBulma()
;<ui.Box
  as="form"
  ref={createRef<HTMLFormElement>()}
  action="/save"
  method="post"
  onSubmit={(event) => event.currentTarget.requestSubmit()}
/>
;<ui.Button
  as="input"
  ref={createRef<HTMLInputElement>()}
  type="submit"
  value="Save"
  onChange={(event) => event.currentTarget.value}
/>
;<ui.Button as="span" ref={createRef<HTMLSpanElement>()}>
  Static
</ui.Button>
;<ui.Image
  as="p"
  alt="Portrait"
  ref={createRef<HTMLImageElement>()}
  wrapperProps={{ ref: createRef<HTMLParagraphElement>() }}
/>
;<ui.Image ratio="16by9">
  <iframe title="Demo" />
</ui.Image>
;<ui.Select
  as="span"
  ref={createRef<HTMLSelectElement>()}
  wrapperProps={{ ref: createRef<HTMLSpanElement>() }}
/>
;<ui.LevelItem as="a" href="/about" ref={createRef<HTMLAnchorElement>()} />
;<ui.NavbarBurger
  as="a"
  ref={createRef<HTMLAnchorElement>()}
  onClick={(event) => event.currentTarget.href}
  defaultExpanded
/>
;<ui.NavbarBurger
  as="div"
  ref={createRef<HTMLDivElement>()}
  onExpandedChange={(expanded) => expanded.valueOf()}
/>
;<ui.NavbarBurger as="span" ref={createRef<HTMLSpanElement>()} />
;<ui.ModalTrigger as="a" href="#modal" ref={createRef<HTMLAnchorElement>()} />
;<ui.ModalTitle as="p" ref={createRef<HTMLParagraphElement>()} />
;<ui.TagDelete as="a" href="#remove" ref={createRef<HTMLAnchorElement>()} />
;<ui.Tag as="button" ref={createRef<HTMLButtonElement>()} disabled />
;<ui.SkeletonBlock>
  Text determines the placeholder dimensions.
</ui.SkeletonBlock>

type Assert<Value extends true> = Value
type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false
type Rejected<Props, Input> = Input extends Props ? false : true
export type NativeTagContracts = [
  Assert<Equal<ComponentProps<typeof ui.Button>, ButtonProps>>,
  Assert<Equal<ComponentProps<typeof ui.Box>, BoxProps>>,
  Assert<Equal<ComponentProps<typeof ui.NavbarBurger>, NavbarBurgerProps>>,
  Assert<
    Equal<
      Extract<BoxProps, { as: 'form' }>['ref'],
      ComponentPropsWithRef<'form'>['ref']
    >
  >,
  Assert<
    Equal<
      Extract<ButtonProps, { as: 'input' }>['ref'],
      ComponentPropsWithRef<'input'>['ref']
    >
  >,
  Assert<
    Equal<
      Extract<NavbarBurgerProps, { as: 'a' }>['ref'],
      ComponentPropsWithRef<'a'>['ref']
    >
  >,
  Assert<
    Rejected<
      BoxProps,
      { as: 'form'; ref: ReturnType<typeof createRef<HTMLButtonElement>> }
    >
  >,
  Assert<Rejected<ButtonProps, { as: 'a'; href: string }>>,
  Assert<
    Rejected<
      ButtonProps,
      { as: 'input'; ref: ReturnType<typeof createRef<HTMLButtonElement>> }
    >
  >,
  Assert<Rejected<ImageProps, { src: string }>>,
  Assert<Rejected<ImageProps, { as: 'p'; src: string }>>,
  Assert<
    Rejected<
      ImageProps,
      { alt: string; ref: ReturnType<typeof createRef<HTMLDivElement>> }
    >
  >,
]

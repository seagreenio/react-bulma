import { createRef } from 'react';
import type { Dialog } from '@base-ui/react/dialog';
import type { Menu } from '@base-ui/react/menu';
import type { Tabs } from '@base-ui/react/tabs';
import type {
  DropdownProps,
  ModalProps,
  ModalContentProps,
  TabsProps,
} from '../../src';
import { createBulma } from '../../src';

const ui = createBulma();
const button = createRef<HTMLButtonElement>();
const anchor = createRef<HTMLAnchorElement>();
const div = createRef<HTMLDivElement>();

<ui.Dropdown
  ref={div}
  onOpenChange={(open, details) => {
    if (open) details.cancel();
  }}
>
  <ui.DropdownTrigger ref={button} />
  <ui.DropdownMenu ref={div}>
    <ui.DropdownContent ref={div}>
      <ui.DropdownItem
        ref={button}
        onClick={(event) => event.currentTarget.disabled}
      />
      <ui.DropdownItem
        as="a"
        href="/guide"
        ref={anchor}
        onClick={(event) => event.currentTarget.href}
      />
    </ui.DropdownContent>
  </ui.DropdownMenu>
</ui.Dropdown>;
<ui.Modal>
  <ui.ModalTrigger ref={button} />
  <ui.ModalContent ref={div}>
    <ui.ModalClose ref={button} />
  </ui.ModalContent>
</ui.Modal>;
<ui.Tabs
  defaultValue="one"
  onValueChange={(value) => {
    const typed: string | number | null = value;
    void typed;
  }}
>
  <ui.TabsList ref={div}>
    <ui.Tab ref={button} value="one" />
  </ui.TabsList>
  <ui.TabPanel value="one" ref={div} />
</ui.Tabs>;
<ui.Navbar>
  <ui.NavbarBurger ref={button} />
  <ui.NavbarMenu ref={div}>
    <ui.NavbarItem ref={anchor} href="/" />
    <ui.NavbarItem as="button" ref={button} />
    <ui.NavbarItem as="div" ref={div} />
  </ui.NavbarMenu>
</ui.Navbar>;
// @ts-expect-error Button menu items do not accept link destinations.
<ui.DropdownItem href="/guide" />;
// @ts-expect-error Link menu items require anchor refs.
<ui.DropdownItem as="a" ref={button} />;
// @ts-expect-error Tab values have a stable primitive identity.
<ui.Tab value={{ id: 'one' }} />;
// @ts-expect-error Tab callbacks cannot assume all values are strings.
<ui.Tabs onValueChange={(value: string) => value.toUpperCase()} />;
// @ts-expect-error Navbar button items do not accept link destinations.
<ui.NavbarItem as="button" href="/guide" />;
<ui.NavbarMenu id="navigation" expanded ref={div} />;
<ui.Dropdown hoverable>
  <ui.DropdownTrigger wrapperProps={{ id: 'trigger', ref: div }} />
</ui.Dropdown>;
<ui.DropdownItem
  as="div"
  ref={div}
  onClick={(event) => event.currentTarget.align}
>
  <p>Static content</p>
</ui.DropdownItem>;
<ui.TabsList as="nav" listProps={{ id: 'links' }} listWrapper={<section />} />;
<ui.Tab
  as="a"
  value="guide"
  href="/guide"
  ref={anchor}
  wrapperProps={{ title: 'Guide' }}
  onClick={(event) => event.currentTarget.href}
/>;
<ui.ModalContent
  wrapperProps={{ id: 'modal', ref: div }}
  backdropProps={{ title: 'Dismiss' }}
  close={<ui.ModalClose />}
/>;
<ui.NavbarDropdown
  as="div"
  trigger="Guide"
  triggerProps={{
    href: '/guide',
    ref: anchor,
    onClick: (event) => event.currentTarget.href,
  }}
  menuProps={{ ref: div }}
  defaultOpen
  hoverable
/>;
<ui.NavbarDropdown
  trigger="Guide"
  triggerProps={{ onClick: (event) => event.currentTarget.title }}
/>;
// @ts-expect-error Static dropdown content does not accept link destinations.
<ui.DropdownItem as="div" href="/guide" />;
// @ts-expect-error Anchor tabs require anchor refs.
<ui.Tab as="a" value="guide" ref={button} />;
// @ts-expect-error The details trigger is a summary, not a link.
<ui.NavbarDropdown trigger="Guide" triggerProps={{ href: '/guide' }} />;

type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
type Assert<Value extends true> = Value;
export type InteractiveCallbackContracts = [
  Assert<Equal<DropdownProps['onOpenChange'], Menu.Root.Props['onOpenChange']>>,
  Assert<Equal<ModalProps['onOpenChange'], Dialog.Root.Props['onOpenChange']>>,
  Assert<
    Equal<ModalContentProps['container'], Dialog.Portal.Props['container']>
  >,
  Assert<
    Equal<ModalContentProps['initialFocus'], Dialog.Popup.Props['initialFocus']>
  >,
  Assert<
    Equal<ModalContentProps['finalFocus'], Dialog.Popup.Props['finalFocus']>
  >,
  Assert<
    Equal<
      NonNullable<TabsProps['onValueChange']>,
      (
        value: string | number | null,
        details: Tabs.Root.ChangeEventDetails,
      ) => void
    >
  >,
];

<ui.Dropdown onOpenChange={undefined} />;
<ui.Modal onOpenChange={undefined} />;
<ui.ModalContent
  container={undefined}
  initialFocus={undefined}
  finalFocus={undefined}
/>;

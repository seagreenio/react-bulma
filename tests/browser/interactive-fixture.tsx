import { useState, type CSSProperties } from 'react'
import { createBulma } from '../../src'

const ui = createBulma()
const custom = createBulma({ prefix: 'acme-' })

export function InteractiveFixture() {
  const [selection, setSelection] = useState('None')
  const [mounted, setMounted] = useState(false)
  const [protectedOpen, setProtectedOpen] = useState(false)
  const [initialMenu, setInitialMenu] = useState(false)
  return (
    <section aria-label="Interactive components">
      <ui.BulmaRoot helpers={{ p: 4 }}>
        <ui.Dropdown>
          <ui.DropdownTrigger
            ref={(element) => {
              element?.setAttribute('data-ref-target', 'dropdown-trigger')
            }}
          >
            Choose action
          </ui.DropdownTrigger>
          <ui.DropdownMenu>
            <ui.DropdownContent>
              <ui.DropdownItem onClick={() => setSelection('First')}>
                First action
              </ui.DropdownItem>
              <ui.DropdownItem
                disabled
                onClick={() => setSelection('Disabled')}
              >
                Disabled action
              </ui.DropdownItem>
              <ui.DropdownDivider />
              <ui.DropdownItem onClick={() => setSelection('Last')}>
                Last action
              </ui.DropdownItem>
              <ui.DropdownItem
                as="a"
                href="#interactive-target"
                disabled
                onClick={() => setSelection('Disabled link')}
              >
                Disabled link
              </ui.DropdownItem>
            </ui.DropdownContent>
          </ui.DropdownMenu>
        </ui.Dropdown>
        <output data-testid="interactive-selection">{selection}</output>
        <button type="button" data-testid="interactive-outside">
          Outside interactive control
        </button>
        <ui.Tabs defaultValue="first">
          <ui.TabsList aria-label="Example sections" variant="boxed" fullWidth>
            <ui.Tab value="first">First tab</ui.Tab>
            <ui.Tab value="disabled" disabled>
              Disabled tab
            </ui.Tab>
            <ui.Tab value="last">Last tab</ui.Tab>
          </ui.TabsList>
          <ui.TabPanel value="first">First panel</ui.TabPanel>
          <ui.TabPanel value="last">Last panel</ui.TabPanel>
        </ui.Tabs>
        <ui.Navbar aria-label="Example navigation">
          <ui.NavbarBrand>
            <ui.NavbarItem href="#brand">Example brand</ui.NavbarItem>
            <ui.NavbarBurger />
          </ui.NavbarBrand>
          <ui.NavbarMenu data-testid="interactive-navbar-menu">
            <ui.NavbarStart>
              <ui.NavbarItem href="#overview">Overview link</ui.NavbarItem>
              <ui.NavbarDropdown trigger="More navigation">
                <ui.NavbarItem href="#guide">Guide link</ui.NavbarItem>
                <ui.NavbarDivider />
                <ui.NavbarItem href="#support">Support link</ui.NavbarItem>
              </ui.NavbarDropdown>
            </ui.NavbarStart>
            <ui.NavbarEnd>
              <ui.NavbarItem as="button">Account action</ui.NavbarItem>
            </ui.NavbarEnd>
          </ui.NavbarMenu>
        </ui.Navbar>
        <button type="button" onClick={() => setMounted(true)}>
          Mount default-open dialog
        </button>
        {mounted && (
          <ui.Modal
            defaultOpen
            onOpenChange={(open) => {
              if (!open) setMounted(false)
            }}
          >
            <ui.ModalContent aria-label="Initially open dialog">
              <ui.ModalClose variant="button">
                Close initially open
              </ui.ModalClose>
            </ui.ModalContent>
          </ui.Modal>
        )}
        <ui.Modal
          open={protectedOpen}
          onOpenChange={setProtectedOpen}
          closeOnEscape={false}
          closeOnOutsideClick={false}
        >
          <ui.ModalTrigger>Open protected dialog</ui.ModalTrigger>
          <ui.ModalContent aria-label="Protected dialog">
            <ui.ModalClose variant="button">
              Confirm protected dialog
            </ui.ModalClose>
          </ui.ModalContent>
        </ui.Modal>
      </ui.BulmaRoot>
      <custom.BulmaRoot
        data-testid="interactive-custom-root"
        style={{ '--acme-scheme-main-l': '85%' } as CSSProperties}
      >
        <button type="button" onClick={() => setInitialMenu(true)}>
          Mount initially open menu
        </button>
        {initialMenu && (
          <custom.Dropdown
            defaultOpen
            right
            data-testid="interactive-custom-dropdown"
            onOpenChange={(open) => {
              if (!open) setInitialMenu(false)
            }}
          >
            <custom.DropdownTrigger>Initial actions</custom.DropdownTrigger>
            <custom.DropdownMenu>
              <custom.DropdownContent data-testid="interactive-initial-menu">
                <custom.DropdownItem>
                  Confirm initial action
                </custom.DropdownItem>
              </custom.DropdownContent>
            </custom.DropdownMenu>
          </custom.Dropdown>
        )}
        <custom.Modal>
          <custom.ModalTrigger>Open themed dialog</custom.ModalTrigger>
          <custom.ModalCard
            ref={(element) => {
              element?.setAttribute('data-ref-target', 'modal-card')
            }}
          >
            <custom.ModalCardHead>
              <custom.ModalTitle>Themed dialog</custom.ModalTitle>
              <custom.ModalClose
                variant="delete"
                aria-label="Close themed dialog"
              />
            </custom.ModalCardHead>
            <custom.ModalCardBody data-testid="interactive-modal-body">
              <custom.ModalDescription>
                Local theme stays live in the portal.
              </custom.ModalDescription>
              <label>
                Dialog field
                <input aria-label="Dialog field" />
              </label>
              <custom.Modal>
                <custom.ModalTrigger>Open nested dialog</custom.ModalTrigger>
                <custom.ModalContent>
                  <custom.ModalTitle>Nested dialog</custom.ModalTitle>
                  <custom.ModalClose variant="button">
                    Close nested dialog
                  </custom.ModalClose>
                </custom.ModalContent>
              </custom.Modal>
            </custom.ModalCardBody>
            <custom.ModalCardFoot>
              <custom.ModalClose variant="button">
                Save themed dialog
              </custom.ModalClose>
            </custom.ModalCardFoot>
          </custom.ModalCard>
        </custom.Modal>
      </custom.BulmaRoot>
    </section>
  )
}

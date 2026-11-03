import { expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { createBulma } from '../../src'

const ui = createBulma({ prefix: 'example-' })

test('interactive parts preserve native attributes and prefix helpers', () => {
  const markup = renderToStaticMarkup(
    <ui.Dropdown right up hoverable>
      <ui.DropdownTrigger
        name="action"
        helpers={{ mt: 0 }}
        wrapperProps={{ id: 'actions', title: 'Actions', helpers: { mt: 0 } }}
      >
        Actions
      </ui.DropdownTrigger>
    </ui.Dropdown>,
  )
  expect(markup).toContain(
    'example-dropdown example-is-hoverable example-is-right example-is-up',
  )
  expect(markup).toContain('example-button example-mt-0')
  expect(markup).toContain('type="button"')
  expect(markup).toContain('aria-haspopup="menu"')
  expect(markup).toContain(
    'id="actions" title="Actions" class="example-dropdown-trigger example-mt-0"',
  )
  expect(markup).not.toMatch(/\s(?:helpers|hoverable|wrapperProps)=/)
})

test('tabs keep the styled tab bar separate from panel content', () => {
  const markup = renderToStaticMarkup(
    <ui.Tabs defaultValue="details">
      <ui.TabsList
        variant="toggle-rounded"
        alignment="centered"
        size="small"
        fullWidth
        aria-label="Sections"
      >
        <ui.Tab value="details">Details</ui.Tab>
      </ui.TabsList>
      <ui.TabPanel value="details">Panel content</ui.TabPanel>
    </ui.Tabs>,
  )
  expect(markup).toContain(
    'example-tabs example-is-small example-is-centered example-is-toggle-rounded example-is-toggle example-is-fullwidth',
  )
  expect(markup).toContain('role="tablist"')
  expect(markup).toContain('aria-label="Sections"')
  expect(markup).toContain('role="tab"')
  expect(markup).toContain('role="tabpanel"')
  expect(markup).toContain('example-is-active')
  expect(markup).not.toContain('variant=')
})

test('navbar uses buttons and native navigation links', () => {
  const markup = renderToStaticMarkup(
    <ui.Navbar defaultExpanded color="primary">
      <ui.NavbarBrand>
        <ui.NavbarBurger />
      </ui.NavbarBrand>
      <ui.NavbarMenu>
        <ui.NavbarItem href="/guide" active>
          Guide
        </ui.NavbarItem>
        <ui.NavbarDropdown
          defaultOpen
          trigger="More"
          triggerProps={{ title: 'More links' }}
        >
          <ui.NavbarLink href="/about">About</ui.NavbarLink>
        </ui.NavbarDropdown>
      </ui.NavbarMenu>
    </ui.Navbar>,
  )
  expect(markup).toContain('example-navbar example-is-primary')
  expect(markup).toContain('example-navbar-burger example-is-active')
  expect(markup).toContain('aria-expanded="true"')
  expect(markup).toContain('example-navbar-menu example-is-active')
  expect(markup).toContain('<details open=""')
  expect(markup).toContain(
    '<summary title="More links" class="example-navbar-link">More</summary>',
  )
  expect(markup).toContain('href="/guide"')
  expect(markup).not.toContain('role="menuitem"')
})

test('static dropdown content preserves rich native div semantics', () => {
  const markup = renderToStaticMarkup(
    <ui.DropdownItem as="div" title="Help">
      <p>
        A paragraph with <a href="/guide">a link</a>.
      </p>
    </ui.DropdownItem>,
  )
  expect(markup).toBe(
    '<div title="Help" class="example-dropdown-item"><p>A paragraph with <a href="/guide">a link</a>.</p></div>',
  )
})

test('tabs preserve the navigation, container, list, item, and native anchor', () => {
  const markup = renderToStaticMarkup(
    <ui.Tabs defaultValue="guide">
      <ui.TabsList
        as="nav"
        aria-label="Sections"
        listWrapper={<section id="container" />}
        listProps={{ id: 'sections', title: 'Sections' }}
      >
        <ui.Tab
          as="a"
          value="guide"
          href="/guide"
          title="Read guide"
          wrapperProps={{ id: 'guide', helpers: { mx: 0 } }}
        >
          <span aria-hidden="true">★</span>Guide
        </ui.Tab>
      </ui.TabsList>
    </ui.Tabs>,
  )
  expect(markup).toContain(
    '<nav class="example-tabs"><section id="container"><ul',
  )
  expect(markup).toContain('id="sections"')
  expect(markup).toContain('title="Sections"')
  expect(markup).toContain('role="tablist"')
  expect(markup).toContain(
    '<li id="guide" role="presentation" class="example-is-active example-mx-0"><a',
  )
  expect(markup).toContain('role="tab"')
  expect(markup).toContain('href="/guide"')
  expect(markup).toContain('title="Read guide"')
  expect(markup).toContain('<span aria-hidden="true">★</span>Guide</a>')
  expect(markup).not.toContain('<button')
})

test('navbar menus support source IDs and standalone expanded state', () => {
  const markup = renderToStaticMarkup(
    <ui.NavbarMenu id="main-navigation" expanded>
      Links
    </ui.NavbarMenu>,
  )
  expect(markup).toBe(
    '<div id="main-navigation" class="example-navbar-menu example-is-active">Links</div>',
  )
})

test('navbar dropdown can retain an original navigation anchor and menu attributes', () => {
  const markup = renderToStaticMarkup(
    <ui.NavbarDropdown
      as="div"
      defaultOpen
      hoverable
      trigger="Documentation"
      triggerProps={{ href: '/guide', title: 'Read the guide' }}
      menuProps={{ id: 'documentation-links', title: 'Documentation links' }}
    >
      <ui.NavbarItem href="/overview">Overview</ui.NavbarItem>
    </ui.NavbarDropdown>,
  )
  expect(markup).toContain(
    '<div class="example-navbar-item example-has-dropdown example-is-active"><a href="/guide" title="Read the guide"',
  )
  expect(markup).toContain('aria-expanded="true"')
  expect(markup).toContain('aria-controls="documentation-links"')
  expect(markup).toContain(
    '<div id="documentation-links" title="Documentation links" class="example-navbar-dropdown">',
  )
  expect(markup).not.toContain('<summary')
  expect(markup).not.toContain('hoverable=')
})

test('navbar alternatives retain navigation state and standalone burger semantics', () => {
  const markup = renderToStaticMarkup(
    <>
      <ui.Navbar as="header" defaultExpanded>
        <ui.NavbarBurger as="a" href="#menu" />
        <ui.NavbarMenu>
          <ui.NavbarItem as="span">Label</ui.NavbarItem>
        </ui.NavbarMenu>
      </ui.Navbar>
      <ui.NavbarBurger as="div" defaultExpanded />
      <ui.NavbarBurger as="span" expanded={false} aria-controls="custom-menu" />
    </>,
  )
  expect(markup).toContain('<header class="example-navbar">')
  expect(markup).toContain('<span class="example-navbar-item">Label</span>')
  expect(markup).toContain('example-navbar-menu example-is-active')
  expect(markup).toContain(
    '<div aria-label="Toggle navigation" aria-expanded="true" class="example-navbar-burger example-is-active" role="button" tabindex="0">',
  )
  expect(markup).toContain('aria-controls="custom-menu"')
  expect(markup).not.toContain('defaultExpanded=')
  const standalone = renderToStaticMarkup(<ui.NavbarBurger defaultExpanded />)
  expect(standalone).toContain('aria-expanded="true"')
  expect(standalone).toContain('example-navbar-burger example-is-active')
  expect(standalone).not.toContain('aria-controls=')
})

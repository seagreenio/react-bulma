import { describe, expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { createBulma } from '../../src'

const ui = createBulma({ prefix: 'acme-' })

describe('native forms', () => {
  test('input native size and textarea attributes remain separate from Bulma modifiers', () => {
    const html = renderToStaticMarkup(
      <>
        <ui.Input
          name="email"
          type="email"
          required
          defaultValue="reader@example.com"
          size="small"
          htmlSize={24}
          rounded
          className="business"
          helpers={{ mt: 2 }}
        />
        <ui.Textarea
          name="note"
          rows={4}
          maxLength={200}
          defaultValue="Hello"
          fixedSize
          size="large"
        />
      </>,
    )
    expect(html).toContain('size="24"')
    expect(html).toContain('name="email"')
    expect(html).toContain('value="reader@example.com"')
    expect(html).toContain(
      'acme-input acme-is-small acme-is-rounded acme-mt-2 business',
    )
    expect(html).toContain('rows="4"')
    expect(html).toContain('maxLength="200"')
    expect(html).toContain('acme-textarea acme-is-large acme-has-fixed-size')
    expect(html).not.toContain('htmlSize=')
    expect(html).not.toContain('fixedSize=')
  })
  test('select targets native attributes at the select and structural modifiers at its wrapper', () => {
    const html = renderToStaticMarkup(
      <ui.Select
        name="topics"
        multiple
        htmlSize={3}
        size="medium"
        disabled
        fullWidth
        className="native-select"
        style={{ color: 'red' }}
        helpers={{ mb: 3 }}
        wrapperProps={{ className: 'wrapper', id: 'select-wrapper' }}
        defaultValue={['css']}
      >
        <option value="css">CSS</option>
        <option value="react">React</option>
      </ui.Select>,
    )
    expect(html).toContain(
      'class="acme-select acme-is-medium acme-is-fullwidth acme-is-multiple acme-is-disabled acme-mb-3 wrapper"',
    )
    expect(html).toContain('id="select-wrapper"')
    expect(html).toContain(
      '<select name="topics" class="native-select" style="color:red" size="3" multiple="" disabled="">',
    )
    expect(html).toContain('<option value="css" selected="">CSS</option>')
    expect(html).not.toContain('acme-native-select')
  })
  test('checkbox and radio preserve native submission values and labels', () => {
    const html = renderToStaticMarkup(
      <>
        <ui.Checkbox
          name="terms"
          value="accepted"
          defaultChecked
          required
          className="native-check"
          wrapperProps={{ className: 'check-label' }}
        >
          Accept terms
        </ui.Checkbox>
        <ui.Radio name="plan" value="basic" defaultChecked>
          Basic
        </ui.Radio>
        <ui.Radio name="plan" value="pro" disabled>
          Pro
        </ui.Radio>
      </>,
    )
    expect(html).toContain('class="acme-checkbox check-label"')
    expect(html).toContain('name="terms"')
    expect(html).toContain('class="native-check"')
    expect(html).toContain('type="checkbox"')
    expect(html).toContain('checked="" value="accepted"')
    expect(html).toContain('type="radio" name="plan" checked="" value="basic"')
    expect(html).toContain('Accept terms</label>')
    expect(html).not.toContain('wrapperProps=')
  })
  test('choice containers expose labeled groups and scoped flex grouping classes', () => {
    const html = renderToStaticMarkup(
      <>
        <ui.Checkboxes aria-label="Notifications" helpers={{ mt: 3 }}>
          <ui.Checkbox name="email">Email</ui.Checkbox>
          <ui.Checkbox name="sms">SMS</ui.Checkbox>
        </ui.Checkboxes>
        <ui.Radios aria-label="Plan">
          <ui.Radio name="plan" value="basic">
            Basic
          </ui.Radio>
          <ui.Radio name="plan" value="pro">
            Pro
          </ui.Radio>
        </ui.Radios>
      </>,
    )
    expect(html).toContain(
      'role="group" aria-label="Notifications" class="acme-checkboxes acme-mt-3"',
    )
    expect(html).toContain('role="group" aria-label="Plan" class="acme-radios"')
  })
  test('file is an actual native multiple file input with a caller-provided filename', () => {
    const html = renderToStaticMarkup(
      <ui.File
        name="attachments"
        accept=".pdf"
        multiple
        disabled
        filename="notes.pdf"
        boxed
        fullWidth
        size="small"
        className="native-file"
        wrapperProps={{ className: 'upload' }}
        icon="↑"
      >
        Attach documents
      </ui.File>,
    )
    expect(html).toContain(
      'acme-file acme-is-small acme-is-boxed acme-is-fullwidth acme-has-name upload',
    )
    expect(html).toContain('aria-disabled="true"')
    expect(html).toContain('type="file" disabled=""')
    expect(html).toContain('multiple=""')
    expect(html).toContain('accept=".pdf"')
    expect(html).toContain('class="acme-file-input native-file"')
    expect(html).toContain('<span class="acme-file-name">notes.pdf</span>')
    expect(html).toContain('Attach documents')
  })
  test('horizontal fields and caller-owned error associations compose without hidden ids', () => {
    const html = renderToStaticMarkup(
      <ui.Field horizontal>
        <ui.FieldLabel size="normal">
          <ui.Label htmlFor="email">Email</ui.Label>
        </ui.FieldLabel>
        <ui.FieldBody>
          <ui.Field>
            <ui.Control loading icons="left">
              <ui.Input id="email" aria-invalid aria-describedby="email-help" />
            </ui.Control>
            <ui.Help id="email-help" color="danger">
              Email is required.
            </ui.Help>
          </ui.Field>
        </ui.FieldBody>
      </ui.Field>,
    )
    expect(html).toContain('acme-field acme-is-horizontal')
    expect(html).toContain('for="email"')
    expect(html).toContain('aria-describedby="email-help"')
    expect(html).toContain('id="email-help" class="acme-help acme-is-danger"')
    expect(html).toContain('acme-control acme-is-loading acme-has-icons-left')
  })
})

describe('static composites', () => {
  test('breadcrumb produces a navigation list and marks the current link', () => {
    const html = renderToStaticMarkup(
      <ui.Breadcrumb separator="arrow" listProps={{ helpers: { mb: 0 } }}>
        <ui.BreadcrumbItem href="/">Home</ui.BreadcrumbItem>
        <ui.BreadcrumbItem active href="/docs" className="business">
          Docs
        </ui.BreadcrumbItem>
      </ui.Breadcrumb>,
    )
    expect(html).toContain('aria-label="Breadcrumb"')
    expect(html).toContain('acme-breadcrumb acme-has-arrow-separator')
    expect(html).toContain('<ul class="acme-mb-0">')
    expect(html).toContain(
      '<li class="acme-is-active"><a href="/docs" class="business" aria-current="page">Docs</a></li>',
    )
  })
  test('menu nested links retain navigation semantics', () => {
    const html = renderToStaticMarkup(
      <ui.Menu size="small">
        <ui.MenuLabel>Settings</ui.MenuLabel>
        <ui.MenuList>
          <ui.MenuItem
            href="/account"
            active
            nested={
              <ui.MenuList>
                <ui.MenuItem href="/account/profile">Profile</ui.MenuItem>
              </ui.MenuList>
            }
          >
            Account
          </ui.MenuItem>
        </ui.MenuList>
      </ui.Menu>,
    )
    expect(html).toContain('class="acme-menu acme-is-small"')
    expect(html).toContain('aria-current="page" class="acme-is-active"')
    expect(html).toContain('Account</a><ul class="acme-menu-list">')
    expect(html).not.toContain('role="menu"')
  })
  test('pagination exposes current page and removes disabled links from navigation', () => {
    const html = renderToStaticMarkup(
      <ui.Pagination rounded alignment="centered">
        <ui.PaginationPrevious href="/page/0" disabled />
        <ui.PaginationNext href="/page/2" />
        <ui.PaginationList>
          <ui.PaginationLink current href="/page/1" aria-label="Page 1">
            1
          </ui.PaginationLink>
          <ui.PaginationLink disabled href="/page/2">
            2
          </ui.PaginationLink>
          <ui.PaginationEllipsis />
        </ui.PaginationList>
      </ui.Pagination>,
    )
    expect(html).toContain('aria-label="Pagination"')
    expect(html).toContain(
      'aria-label="Previous page" tabindex="-1" aria-disabled="true"',
    )
    expect(html).not.toContain('href="/page/0"')
    expect(html).toContain('aria-current="page"')
    expect(html).toContain(
      '<li><span aria-hidden="true" class="acme-pagination-ellipsis">…</span></li>',
    )
  })
  test('card action defaults to a non-submit button and footer items remain links', () => {
    const html = renderToStaticMarkup(
      <ui.Card>
        <ui.CardHeader>
          <ui.CardHeaderTitle centered>Project</ui.CardHeaderTitle>
          <ui.CardHeaderIcon aria-label="Expand">+</ui.CardHeaderIcon>
        </ui.CardHeader>
        <ui.CardImage>
          <img src="/cover.png" alt="Project cover" />
        </ui.CardImage>
        <ui.CardContent>Details</ui.CardContent>
        <ui.CardFooter>
          <ui.CardFooterItem href="/edit">Edit</ui.CardFooterItem>
        </ui.CardFooter>
      </ui.Card>,
    )
    expect(html).toContain(
      '<button aria-label="Expand" type="button" class="acme-card-header-icon">',
    )
    expect(html).toContain('<a href="/edit" class="acme-card-footer-item">')
    expect(html).toContain('acme-card-header-title acme-is-centered')
  })
  test('message and panel preserve semantic element choices and modifiers', () => {
    const html = renderToStaticMarkup(
      <>
        <ui.Message color="warning" size="small">
          <ui.MessageHeader>Notice</ui.MessageHeader>
          <ui.MessageBody>Read this.</ui.MessageBody>
        </ui.Message>
        <ui.Panel color="primary" aria-label="Repositories">
          <ui.PanelHeading>Repositories</ui.PanelHeading>
          <ui.PanelTabs>
            <ui.PanelTab href="/all" active>
              All
            </ui.PanelTab>
          </ui.PanelTabs>
          <ui.PanelBlock as="a" href="/repo" active>
            <ui.PanelIcon aria-hidden>↗</ui.PanelIcon>Repo
          </ui.PanelBlock>
          <ui.PanelBlock as="label">
            <input type="checkbox" />
            Only mine
          </ui.PanelBlock>
          <ui.PanelBlock wrapped>Summary</ui.PanelBlock>
        </ui.Panel>
      </>,
    )
    expect(html).toContain('acme-message acme-is-warning acme-is-small')
    expect(html).toContain(
      '<a href="/repo" aria-current="page" class="acme-panel-block acme-is-active">',
    )
    expect(html).toContain('<label class="acme-panel-block">')
    expect(html).toContain('<div class="acme-panel-block acme-is-wrapped">')
    expect(html).not.toContain(' as=')
  })
})

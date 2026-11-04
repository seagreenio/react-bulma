import { describe, expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import * as ui from '../../src'
import { generateTestUI } from './configured-ui'

const custom = await generateTestUI({ prefix: 'acme-' })

describe('elements', () => {
  test('simple elements retain native content, helper zero and caller classes', () => {
    const html = renderToStaticMarkup(
      <ui.Box id="box" helpers={{ p: 0 }} className="business  box">
        <ui.Block>
          <ui.Content size="small">
            <p>Readable text</p>
          </ui.Content>
        </ui.Block>
      </ui.Box>,
    )
    expect(html).toContain('id="box"')
    expect(html).toContain('class="rb-box rb-p-0 business  box"')
    expect(html).toContain(
      '<div class="rb-block"><div class="rb-content rb-is-small"><p>Readable text</p>',
    )
    expect(html).not.toMatch(/\s(?:helpers|size)=/)
  })

  test('link buttons preserve real links, group modifiers and accessible loading state', () => {
    const html = renderToStaticMarkup(
      <ui.Buttons addons size="small" align="center">
        <ui.LinkButton
          href="/docs"
          target="_blank"
          rel="noreferrer"
          color="primary"
          tone="light"
          outlined
          rounded
          loading
          aria-busy={false}
          className="business"
        >
          Docs
        </ui.LinkButton>
      </ui.Buttons>,
    )
    expect(html).toContain(
      'class="rb-buttons rb-are-small rb-is-centered rb-has-addons"',
    )
    expect(html).toContain('target="_blank" rel="noreferrer"')
    expect(html).toContain('aria-busy="true"')
    expect(html).toContain('aria-disabled="true"')
    expect(html).not.toContain('href=')
    expect(
      renderToStaticMarkup(<ui.LinkButton href="/docs">Docs</ui.LinkButton>),
    ).toContain('href="/docs"')
    expect(html).toContain(
      'rb-button rb-is-primary rb-is-light rb-is-outlined rb-is-rounded rb-is-loading business',
    )
    expect(html).not.toMatch(/\s(?:loading|outlined|rounded|color|tone)=/)
    expect(html).toContain('>Docs</a>')
  })

  test('Delete is a named native button and respects explicit type and label', () => {
    expect(renderToStaticMarkup(<ui.Delete />)).toBe(
      '<button type="button" aria-label="Close" class="rb-delete"></button>',
    )
    const html = renderToStaticMarkup(
      <ui.Delete
        type="reset"
        size="large"
        aria-label="Remove attachment"
        disabled
      />,
    )
    expect(html).toContain('disabled=""')
    expect(html).toContain('type="reset" aria-label="Remove attachment"')
    expect(html).toContain('rb-delete rb-is-large')
  })

  test('Image puts native image props and rounded style on the img, dimensions on its figure', () => {
    const html = renderToStaticMarkup(
      <custom.Image
        src="/avatar.svg"
        alt="Project avatar"
        loading="lazy"
        width={64}
        height={64}
        size={64}
        ratio="square"
        rounded
        className="photo"
        helpers={{ m: 0 }}
        wrapperProps={{
          id: 'portrait',
          className: 'frame',
          helpers: { mx: 'auto' },
        }}
      />,
    )
    expect(html).toContain(
      '<figure id="portrait" class="acme-image acme-is-64x64 acme-is-square acme-m-0 acme-mx-auto frame">',
    )
    expect(html).toContain('alt="Project avatar"')
    expect(html).toContain('loading="lazy" width="64" height="64"')
    expect(html).toContain('class="acme-is-rounded photo"')
    expect(html).not.toMatch(/\s(?:ratio|size|rounded|wrapperProps|helpers)=/)
  })

  test('Notification is static unless a caller sets an announcement role', () => {
    const html = renderToStaticMarkup(
      <ui.Notification color="warning" tone="light">
        <ui.Delete aria-label="Dismiss notice" />
        Review the changes
      </ui.Notification>,
    )
    expect(html).toContain('class="rb-notification rb-is-warning rb-is-light"')
    expect(html).not.toContain('role=')
    expect(
      renderToStaticMarkup(
        <ui.Notification role="status">Saved</ui.Notification>,
      ),
    ).toContain('role="status"')
  })

  test('Progress preserves determinate values including zero and absence means indeterminate', () => {
    const html = renderToStaticMarkup(
      <ui.Progress
        value={0}
        max={100}
        color="info"
        size="small"
        aria-label="Upload"
      />,
    )
    expect(html).toContain('value="0" max="100"')
    expect(html).toContain('rb-progress rb-is-info rb-is-small')
    expect(
      renderToStaticMarkup(<ui.Progress max={100} aria-label="Working" />),
    ).not.toContain('value=')
  })

  test('Table preserves native table structure and exposes its real modifiers', () => {
    const html = renderToStaticMarkup(
      <ui.TableContainer>
        <ui.Table
          bordered
          striped
          narrow
          hoverable
          fullWidth
          aria-label="Inventory"
        >
          <caption>Inventory</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>Book</td>
            </tr>
          </tbody>
        </ui.Table>
      </ui.TableContainer>,
    )
    expect(html).toContain(
      '<div class="rb-table-container"><table aria-label="Inventory" class="rb-table rb-is-bordered rb-is-striped rb-is-narrow rb-is-hoverable rb-is-fullwidth">',
    )
    expect(html).toContain('<th scope="col">Item</th>')
    expect(html).toContain('<td colSpan="2">Book</td>')
    expect(html).not.toMatch(
      /\s(?:bordered|striped|narrow|hoverable|fullWidth)=/,
    )
  })

  test('headings use semantic level independently of visual size', () => {
    const html = renderToStaticMarkup(
      <>
        <ui.Title level={3} size={1} spaced id="heading">
          Title
        </ui.Title>
        <ui.Subtitle level={4} size={6}>
          Details
        </ui.Subtitle>
      </>,
    )
    expect(html).toBe(
      '<h3 id="heading" class="rb-title rb-is-1 rb-is-spaced">Title</h3><h4 class="rb-subtitle rb-is-6">Details</h4>',
    )
  })

  test('Tags, icons and loader keep content and native accessibility attributes', () => {
    const html = renderToStaticMarkup(
      <ui.Tags size="medium" align="right" addons>
        <ui.Tag color="success" light rounded size="normal">
          <ui.IconText>
            <ui.Icon size="small" aria-hidden="true">
              ✓
            </ui.Icon>
            <span>Ready</span>
          </ui.IconText>
        </ui.Tag>
        <ui.Tag>
          <ui.Loader role="status" aria-label="Loading" />
        </ui.Tag>
      </ui.Tags>,
    )
    expect(html).toContain('rb-tags rb-are-medium rb-is-right rb-has-addons')
    expect(html).toContain(
      'rb-tag rb-is-success rb-is-normal rb-is-light rb-is-rounded',
    )
    expect(html).toContain('class="rb-icon-text"')
    expect(html).toContain('aria-hidden="true" class="rb-icon rb-is-small"')
    expect(html).toContain(
      'role="status" aria-label="Loading" class="rb-loader"',
    )
  })

  test('linked tags and delete tag addons retain native link and button semantics', () => {
    const html = renderToStaticMarkup(
      <custom.Tags addons>
        <custom.LinkTag href="/labels/react" color="info">
          React
        </custom.LinkTag>
        <custom.TagDelete color="danger" aria-label="Remove React label" />
      </custom.Tags>,
    )
    expect(html).toContain(
      '<a href="/labels/react" class="acme-tag acme-is-info">React</a>',
    )
    expect(html).toContain(
      '<button type="button" aria-label="Remove React label" class="acme-tag acme-is-delete acme-is-danger"></button>',
    )
    expect(renderToStaticMarkup(<ui.TagDelete />)).toContain(
      'aria-label="Remove tag"',
    )
  })

  test('skeletons have actual line children and hide decorative placeholders', () => {
    expect(renderToStaticMarkup(<ui.SkeletonLines lines={2} />)).toBe(
      '<div aria-hidden="true" class="rb-skeleton-lines"><div></div><div></div></div>',
    )
    expect(renderToStaticMarkup(<ui.SkeletonBlock />)).toBe(
      '<div aria-hidden="true" class="rb-skeleton-block"></div>',
    )
    for (const lines of [0, -1, 1.5, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(() =>
        renderToStaticMarkup(<ui.SkeletonLines lines={lines} />),
      ).toThrow(RangeError)
    }
    expect(
      renderToStaticMarkup(<ui.SkeletonLines lines={101} />).match(
        /<div><\/div>/g,
      ),
    ).toHaveLength(101)
  })
})

describe('layout and grids', () => {
  test('layout compounds retain semantic sections, navigation and article structure', () => {
    const html = renderToStaticMarkup(
      <ui.Container maxWidth="desktop">
        <ui.Hero color="primary" size="small" height="half" bold>
          <ui.HeroHead>Head</ui.HeroHead>
          <ui.HeroBody>Body</ui.HeroBody>
          <ui.HeroFoot>Foot</ui.HeroFoot>
        </ui.Hero>
        <ui.Section size="medium" fullHeight>
          <ui.Level mobile aria-label="Page actions">
            <ui.LevelLeft>
              <ui.LevelItem narrow>Left</ui.LevelItem>
            </ui.LevelLeft>
            <ui.LevelRight>
              <ui.LevelItem flexible>Right</ui.LevelItem>
            </ui.LevelRight>
          </ui.Level>
          <ui.Media size="large">
            <ui.MediaLeft>Avatar</ui.MediaLeft>
            <ui.MediaContent>Message</ui.MediaContent>
            <ui.MediaRight>Actions</ui.MediaRight>
          </ui.Media>
        </ui.Section>
        <ui.Footer>Footer</ui.Footer>
      </ui.Container>,
    )
    expect(html).toContain('rb-container rb-is-max-desktop')
    expect(html).toContain(
      '<section class="rb-hero rb-is-primary rb-is-small rb-is-halfheight rb-is-bold">',
    )
    expect(html).toContain(
      '<div class="rb-hero-head">Head</div><div class="rb-hero-body">Body</div><div class="rb-hero-foot">Foot</div>',
    )
    expect(html).toContain(
      '<section class="rb-section rb-is-medium rb-is-fullheight">',
    )
    expect(html).toContain(
      '<nav aria-label="Page actions" class="rb-level rb-is-mobile">',
    )
    expect(html).toContain('rb-level-item rb-is-narrow')
    expect(html).toContain('rb-level-item rb-is-flexible')
    expect(html).toContain(
      '<article class="rb-media rb-is-large"><div class="rb-media-left">Avatar</div><div class="rb-media-content">Message</div><div class="rb-media-right">Actions</div></article>',
    )
    expect(html).toContain('<footer class="rb-footer">Footer</footer>')
  })

  test('column responsive width, zero offset and zero gap use only their own prefixes', () => {
    const html = renderToStaticMarkup(
      <custom.Columns
        displayFrom="mobile"
        gap={{ base: 0, tablet: 3, 'desktop-only': 6 }}
        multiline
        centered
        verticallyCentered
        helpers={{ mb: 0 }}
        className="columns"
      >
        <custom.Column
          width={{
            mobile: 'full',
            tablet: 'half',
            desktop: 4,
            fullhd: 'narrow',
          }}
          offset={{ base: 0, desktop: 'one-quarter' }}
          id="column"
        >
          Body
        </custom.Column>
      </custom.Columns>,
    )
    expect(html).toContain(
      'class="acme-columns acme-is-mobile acme-is-0 acme-is-3-tablet acme-is-6-desktop-only acme-is-multiline acme-is-centered acme-is-vcentered acme-mb-0 columns"',
    )
    expect(html).toContain(
      'class="acme-column acme-is-full-mobile acme-is-half-tablet acme-is-4-desktop acme-is-narrow-fullhd acme-is-offset-0 acme-is-offset-one-quarter-desktop"',
    )
    expect(html).not.toContain('rb-')
    expect(html).not.toMatch(
      /\s(?:displayFrom|gap|width|offset|multiline|centered|verticallyCentered)=/,
    )
  })

  test('column display mode uses tablet default or explicit desktop modifier', () => {
    expect(renderToStaticMarkup(<ui.Columns displayFrom="tablet" />)).toBe(
      '<div class="rb-columns"></div>',
    )
    expect(
      renderToStaticMarkup(<ui.Columns displayFrom="desktop" gapless />),
    ).toBe('<div class="rb-columns rb-is-desktop rb-is-gapless"></div>')
  })

  test('smart grids put configurable CSS lengths on instance variables', () => {
    const html = renderToStaticMarkup(
      <custom.SmartGrid
        minColumnWidth="min(100%, 16rem)"
        gap="1.5rem"
        columnGap="2rem"
        rowGap="0"
        autoFill
        style={{ marginTop: 4 }}
        className="cards"
      >
        <custom.Cell
          columnSpan={{ mobile: 1, desktop: 2 }}
          rowSpan={2}
          columnStart={2}
        >
          Card
        </custom.Cell>
      </custom.SmartGrid>,
    )
    expect(html).toContain('--acme-grid-column-min:min(100%, 16rem)')
    expect(html).toContain('--acme-grid-gap:1.5rem')
    expect(html).toContain('--acme-grid-column-gap:2rem')
    expect(html).toContain('--acme-grid-row-gap:0')
    expect(html).toContain('margin-top:4px')
    expect(html).toContain('class="acme-grid acme-is-auto-fill cards"')
    expect(html).toContain(
      'acme-cell acme-is-col-span-1-mobile acme-is-col-span-2-desktop acme-is-row-span-2 acme-is-col-start-2',
    )
    expect(html).not.toContain('--bulma-')
    expect(html).not.toMatch(
      /\s(?:minColumnWidth|gap|columnSpan|rowSpan|columnStart|autoFill)=/,
    )
  })

  test('cell end lines use supported responsive positioning classes', () => {
    const html = renderToStaticMarkup(
      <custom.Cell
        columnStart={1}
        columnEnd={{ base: 3, 'desktop-only': 5 }}
        rowStart={1}
        rowEnd={{ tablet: 4 }}
      />,
    )
    expect(html).toContain('acme-is-col-start-1')
    expect(html).toContain('acme-is-col-end-3 acme-is-col-end-5-desktop-only')
    expect(html).toContain('acme-is-row-end-4-tablet')
    expect(html).not.toMatch(/\s(?:columnEnd|rowEnd)=/)
  })

  test('fixed grids keep the required wrapper, grid and cell nesting', () => {
    const html = renderToStaticMarkup(
      <ui.FixedGrid
        id="container"
        columns={{ base: 1, tablet: 3, desktop: 4 }}
        className="frame"
        gridProps={{
          id: 'grid',
          className: 'inside',
          gap: '2rem',
          helpers: { mt: 0 },
        }}
      >
        <ui.Cell>First</ui.Cell>
        <ui.Cell rowStart="end" columnFromEnd={2}>
          Last
        </ui.Cell>
      </ui.FixedGrid>,
    )
    expect(html).toContain(
      '<div id="container" class="rb-fixed-grid rb-has-1-cols rb-has-3-cols-tablet rb-has-4-cols-desktop frame"><div id="grid" style="--rb-grid-gap:2rem" class="rb-grid rb-mt-0 inside"><div class="rb-cell">First</div>',
    )
    expect(html).toContain('rb-cell rb-is-row-start-end rb-is-col-from-end-2')
    expect(html).not.toMatch(/\s(?:columns|gridProps)=/)
    expect(renderToStaticMarkup(<ui.FixedGrid columns="auto" />)).toContain(
      'rb-fixed-grid rb-has-auto-count',
    )
  })
})

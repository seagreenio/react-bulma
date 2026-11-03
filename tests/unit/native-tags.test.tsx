import { expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { createBulma } from '../../src'

const ui = createBulma({ prefix: 'example-' })

test('alternate tags retain the official element hierarchy and Bulma classes', () => {
  const markup = renderToStaticMarkup(
    <>
      <ui.Block as="p">Block</ui.Block>
      <ui.Buttons as="p" addons>
        Buttons
      </ui.Buttons>
      <ui.Control as="p" expanded>
        Control
      </ui.Control>
      <ui.Field as="p" layout="grouped">
        Field
      </ui.Field>
      <ui.Icon as="div" size="large">
        Icon
      </ui.Icon>
      <ui.IconText as="div">Icon text</ui.IconText>
      <ui.CardFooterItem as="p">Card footer</ui.CardFooterItem>
      <ui.LevelItem as="a" href="/about">
        Level link
      </ui.LevelItem>
      <ui.LevelItem as="p" narrow>
        Level text
      </ui.LevelItem>
      <ui.Media as="div">
        <ui.MediaLeft as="figure">Media</ui.MediaLeft>
      </ui.Media>
      <ui.Message as="div" color="info">
        Message
      </ui.Message>
      <ui.Panel as="article" color="primary">
        Panel
      </ui.Panel>
      <ui.Tag as="button" type="button">
        Tag button
      </ui.Tag>
      <ui.Tag as="div">Tag div</ui.Tag>
      <ui.TagDelete as="a" href="#remove" />
      <ui.Title as="p" size={1}>
        Title
      </ui.Title>
      <ui.Subtitle as="p" size={2}>
        Subtitle
      </ui.Subtitle>
    </>,
  )
  for (const fragment of [
    '<p class="example-block">',
    '<p class="example-buttons example-has-addons">',
    '<p class="example-control example-is-expanded">',
    '<p class="example-field example-is-grouped">',
    '<div class="example-icon example-is-large">',
    '<div class="example-icon-text">',
    '<p class="example-card-footer-item">',
    '<a href="/about" class="example-level-item">',
    '<p class="example-level-item example-is-narrow">',
    '<div class="example-media"><figure class="example-media-left">',
    '<div class="example-message example-is-info">',
    '<article class="example-panel example-is-primary">',
    '<button type="button" class="example-tag">',
    '<div class="example-tag">',
    '<a href="#remove" aria-label="Remove tag" class="example-tag example-is-delete">',
    '<p class="example-title example-is-1">',
    '<p class="example-subtitle example-is-2">',
  ])
    expect(markup).toContain(fragment)
  expect(markup).not.toContain(' as=')
})

test('form boxes and input buttons retain native submission properties', () => {
  const markup = renderToStaticMarkup(
    <ui.Box
      as="form"
      action="/save"
      method="post"
      noValidate
      helpers={{ mt: 0 }}
    >
      <ui.Button
        as="input"
        type="submit"
        name="action"
        value="Save"
        color="primary"
      />
      <ui.Button as="input" type="reset" value="Reset" loading />
      <ui.Button as="span" loading>
        Waiting
      </ui.Button>
    </ui.Box>,
  )
  expect(markup).toContain('<form ')
  expect(markup).toContain('action="/save"')
  expect(markup).toContain('method="post"')
  expect(markup).toContain('noValidate=""')
  expect(markup).toContain('class="example-box example-mt-0"')
  expect(markup).toContain('type="submit"')
  expect(markup).toContain('name="action"')
  expect(markup).toContain('value="Save"')
  expect(markup).toContain('example-button example-is-primary')
  expect(markup).toContain('<input type="reset" disabled="" aria-busy="true"')
  expect(markup).toContain(
    '<span aria-disabled="true" aria-busy="true" data-loading-disabled="" class="example-button example-is-loading">Waiting</span>',
  )
})

test('image and select wrappers preserve separate media and control attributes', () => {
  const markup = renderToStaticMarkup(
    <>
      <ui.Image
        as="p"
        alt="Portrait"
        src="/portrait.png"
        size={64}
        wrapperProps={{ id: 'portrait' }}
      />
      <ui.Image ratio="16by9" wrapperProps={{ id: 'video' }}>
        <iframe title="Demo" src="/demo" allowFullScreen />
      </ui.Image>
      <ui.Select as="span" name="color" wrapperProps={{ id: 'color-wrapper' }}>
        <option value="green">Green</option>
      </ui.Select>
    </>,
  )
  expect(markup).toContain(
    '<p id="portrait" class="example-image example-is-64x64"><img',
  )
  expect(markup).toContain(
    '<figure id="video" class="example-image example-is-16by9"><iframe title="Demo" src="/demo" allowFullScreen=""></iframe></figure>',
  )
  expect(markup).toContain(
    '<span id="color-wrapper" class="example-select"><select name="color">',
  )
})

test('modal alternatives keep dialog associations and skeleton text controls dimensions', () => {
  const markup = renderToStaticMarkup(
    <>
      <ui.Modal>
        <ui.ModalTrigger as="a" href="#dialog">
          Open
        </ui.ModalTrigger>
        <ui.ModalTitle as="p">Title</ui.ModalTitle>
      </ui.Modal>
      <ui.SkeletonBlock>Preserved sizing text</ui.SkeletonBlock>
    </>,
  )
  expect(markup).toContain('<a')
  expect(markup).toContain('href="#dialog"')
  expect(markup).toContain('aria-haspopup="dialog"')
  expect(markup).toContain('<p')
  expect(markup).toContain('example-modal-card-title')
  expect(markup).toContain(
    'aria-hidden="true" class="example-skeleton-block">Preserved sizing text</div>',
  )
})

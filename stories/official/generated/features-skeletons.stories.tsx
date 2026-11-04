import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'features-skeletons',
      title: 'Skeletons in Bulma',
      url: 'https://bulma.io/documentation/features/skeletons/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-features-skeletons',
  title: 'Features/Skeletons',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument
      pageId="features-skeletons"
      controllers={['skeleton-cycle']}
    >
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Skeletons in Bulma'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Transform almost any Bulma component into a '}
          <strong data-official-prose="">{'skeleton loader'}</strong>
          {', or use one of the pre-built utility elements'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
          <div data-official-prose="" className={'content'}>
            {'\n  '}
            <p data-official-prose="">
              {'A skeleton loader is a loading state that acts as a '}
              <strong data-official-prose="">{'placeholder'}</strong>
              {
                ' for content in an interface.\nBulma v1 ships with 2 skeleton elements, and skeleton variants for most Bulma components.'
              }
            </p>
            {'\n'}
            <p data-official-prose="">
              {'All skeleton loaders share these CSS variables:'}
            </p>
            {'\n'}
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-css'}>
                {
                  ':root {\n  --bulma-skeleton-background: var(--bulma-border);\n  --bulma-skeleton-radius: var(--bulma-radius-small);\n  --bulma-skeleton-block-min-height: 4.5em;\n  --bulma-skeleton-lines-gap: 0.75em;\n  --bulma-skeleton-line-height: 0.75em;\n}\n'
                }
              </code>
            </pre>
            {'\n\n'}
          </div>
          {'\n\n\n'}
          <h3
            data-official-prose=""
            id={'skeleton-block'}
            className={'title is-4 is-spaced bd-anchor-title '}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Skeleton Block\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#skeleton-block'}
            >
              {'\n    #\n  '}
            </a>
            {'\n  \n'}
          </h3>
          {'\n\n\n\n\n'}
          <div data-official-prose="" className={'content'}>
            {'\n  '}
            <p data-official-prose="">
              {
                'The skeleton block is a simple block element with a pulsating background. It has a minimum height of '
              }
              <code data-official-prose="">{'4.5em'}</code>
              {'.'}
            </p>
            {'\n\n'}
          </div>
          {'\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/skeleton-block/001">
            <Canvas of={Example001} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n\n\n'}
          <div data-official-prose="" className={'content'}>
            {'\n  '}
            <p data-official-prose="">
              {
                'If you insert text inside this block, you can make its height responsive:'
              }
            </p>
            {'\n\n'}
          </div>
          {'\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/skeleton-block/002">
            <Canvas of={Example002} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h3
            data-official-prose=""
            id={'skeleton-lines'}
            className={'title is-4 is-spaced bd-anchor-title '}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Skeleton Lines\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#skeleton-lines'}
            >
              {'\n    #\n  '}
            </a>
            {'\n  \n'}
          </h3>
          {'\n\n\n\n\n'}
          <div data-official-prose="" className={'content'}>
            {'\n  '}
            <p data-official-prose="">
              {
                'The skeleton lines element is a loading element which resembles a '
              }
              <strong data-official-prose="">{'paragraph'}</strong>
              {'. Each '}
              <code data-official-prose="">{'<div></div>'}</code>
              {' will render as a separate loading line.'}
            </p>
            {'\n\n'}
          </div>
          {'\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/skeleton-lines/001">
            <Canvas of={Example003} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h3
            data-official-prose=""
            id={'bulma-components-with-skeletons'}
            className={'title is-4 is-spaced bd-anchor-title '}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Bulma components with skeletons\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#bulma-components-with-skeletons'}
            >
              {'\n    #\n  '}
            </a>
            {'\n  \n'}
          </h3>
          {'\n\n\n\n\n'}
          <div data-official-prose="" className={'content'}>
            {'\n  '}
            <p data-official-prose="">
              {
                'Most Bulma elements and components have a skeleton variant, which can be enabled by adding either the '
              }
              <code data-official-prose="">{'is-skeleton'}</code>
              {' or '}
              <code data-official-prose="">{'has-skeleton'}</code>
              {' modifier.'}
            </p>
            {'\n\n'}
          </div>
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'button'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Button\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#button'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          {'\n\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/button/001">
            <Canvas of={Example004} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'icon'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Icon\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#icon'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          {'\n\n\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/icon/001">
            <Canvas of={Example005} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'image'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Image\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#image'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          {'\n\n\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/image/001">
            <Canvas of={Example006} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'media-object'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Media Object\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#media-object'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          {'\n\n\n\n\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/media-object/001">
            <Canvas of={Example007} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/media-object/002">
            <Canvas of={Example008} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'notification'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Notification\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#notification'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          {'\n\n\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/notification/001">
            <Canvas of={Example009} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'tag'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Tag\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#tag'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          {'\n\n\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/tag/001">
            <Canvas of={Example010} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'title-and-subtitle'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Title and Subtitle\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#title-and-subtitle'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'.title'}</code>
            {' and '}
            <code data-official-prose="">{'.subtitle'}</code>
            {' elements have both an '}
            <code data-official-prose="">{'is-skeleton'}</code>
            {' and '}
            <code data-official-prose="">{'has-skeleton'}</code>
            {' variant:'}
          </p>
          {'\n'}
          <ul data-official-prose="">
            {'\n'}
            <li data-official-prose="">
              <code data-official-prose="">{'is-skeleton'}</code>
              {' will turn the whole block into a loading skeleton'}
            </li>
            {'\n'}
            <li data-official-prose="">
              <code data-official-prose="">{'has-skeleton'}</code>
              {
                ' will turn only a small part of its content into a loading skeleton, to simulate loading only the inner text rather than the whole block'
              }
            </li>
            {'\n'}
          </ul>
          {'\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/title-and-subtitle/001">
            <Canvas of={Example011} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/title-and-subtitle/002">
            <Canvas of={Example012} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/title-and-subtitle/003">
            <Canvas of={Example013} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/title-and-subtitle/004">
            <Canvas of={Example014} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/title-and-subtitle/005">
            <Canvas of={Example015} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/title-and-subtitle/006">
            <Canvas of={Example016} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <h4
            data-official-prose=""
            id={'form-controls'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            {'\n  '}
            <span data-official-prose="" className={'bd-anchor-name'}>
              {'\n    Form Controls\n  '}
            </span>
            {'\n  '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#form-controls'}
            >
              {'\n    #\n  '}
            </a>
            {'\n'}
          </h4>
          {'\n\n\n\n\n\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/form-controls/001">
            <Canvas of={Example017} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n'}
          {'\n  \n    '}
          {'\n      '}
          {'\n\n      '}
          <div data-official-example="features-skeletons/form-controls/002">
            <Canvas of={Example018} />
          </div>
          {'\n    '}
          {'\n  \n\n  '}
          {'\n'}
          {'\n\n\n'}
          <div
            data-official-prose=""
            data-official-control="skeleton-toggle"
            className={'skeleton-toggler display-flex align-items-center gap-2'}
          >
            {'\n  '}
            <button
              data-official-prose=""
              id={'js-toggle-skeleton'}
              className={'button'}
            >
              {'\n    '}
              <div
                data-official-prose=""
                data-official-control-part="timer"
                id={'js-timer'}
                className={'timer is-active'}
              >
                {'\n      '}
                <div data-official-prose="" className={'timer-mask'}></div>
                {'\n    '}
              </div>
              {'\n    '}
              <span data-official-prose="" className={'mr-2'}>
                {'Toggle Skeleton Animations'}
              </span>
              {'\n    '}
              <span
                data-official-prose=""
                data-official-control-part="status"
                className={'tag is-success'}
                style={{ marginRight: '-0.5rem' } as React.CSSProperties}
              >
                {'Active'}
              </span>
              {'\n  '}
            </button>
            {'\n'}
          </div>
          {'\n\n'}
          {'\n\n'}
          {'\n'}
        </div>
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.SkeletonBlock />
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.SkeletonBlock>
        {
          '\n  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\n  ut fermentum massa justo sit amet risus. Donec sed odio dui.\n  Nullam quis risus eget urna mollis ornare vel eu leo.\n  Cum sociis natoque penatibus et magnis dis parturient montes,\n  nascetur ridiculus mus. Nullam id dolor id\n  nibh ultricies vehicula ut id elit.\n'
        }
      </ui.SkeletonBlock>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.SkeletonLines lines={5} />
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Buttons>
        {'\n  '}
        <ui.Button className={'rb-is-skeleton'}>{'Button'}</ui.Button>
        {'\n  '}
        <ui.Button color={'link'} className={'rb-is-skeleton'}>
          {'Link'}
        </ui.Button>
        {'\n  '}
        <ui.Button color={'primary'} className={'rb-is-skeleton'}>
          {'Primary'}
        </ui.Button>
        {'\n  '}
        <ui.Button color={'success'} className={'rb-is-skeleton'}>
          {'Success'}
        </ui.Button>
        {'\n  '}
        <ui.Button color={'info'} className={'rb-is-skeleton'}>
          {'Info'}
        </ui.Button>
        {'\n  '}
        <ui.Button color={'warning'} className={'rb-is-skeleton'}>
          {'Warning'}
        </ui.Button>
        {'\n  '}
        <ui.Button color={'danger'} className={'rb-is-skeleton'}>
          {'Danger'}
        </ui.Button>
        {'\n'}
      </ui.Buttons>
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Icon className={'rb-is-skeleton'}>
        {'\n  '}
        <i className={'fas fa-reply'} />
        {'\n'}
      </ui.Icon>
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Image
        size={16}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/16x16'}
      />
      {'\n\n'}
      <ui.Image
        size={32}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/32x32'}
      />
      {'\n\n'}
      <ui.Image
        size={64}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/64x64'}
      />
      {'\n\n'}
      <ui.Image
        size={128}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/128x128'}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n\n'}
      <ui.Media>
        {'\n  '}
        <ui.MediaLeft as={'figure'}>
          {'\n    '}
          <ui.Image
            size={64}
            as={'p'}
            wrapperProps={{ className: 'rb-is-skeleton' }}
            src={'https://placehold.co/128x128'}
            alt={'Placeholder image'}
          />
          {'\n  '}
        </ui.MediaLeft>
        {'\n  '}
        <ui.MediaContent>
          {'\n    '}
          <ui.Content className={'rb-is-skeleton'}>
            {'\n      '}
            <p>
              {'\n        '}
              <strong>{'John Smith'}</strong> <small>{'@johnsmith'}</small>{' '}
              <small>{'31m'}</small>
              {'\n        '}
              <br />
              {
                '\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor\n        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus est non commodo luctus,\n        nisi erat porttitor ligula, eget lacinia odio sem nec elit\n        vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\n      '
              }
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <ui.Level mobile>
            {'\n      '}
            <ui.LevelLeft>
              {'\n        '}
              <ui.LevelItem as={'a'}>
                <ui.Icon size={'small'} className={'rb-is-skeleton'}>
                  <i className={'fas fa-reply'} />
                </ui.Icon>
              </ui.LevelItem>
              {'\n        '}
              <ui.LevelItem as={'a'}>
                <ui.Icon size={'small'} className={'rb-is-skeleton'}>
                  <i className={'fas fa-retweet'} />
                </ui.Icon>
              </ui.LevelItem>
              {'\n        '}
              <ui.LevelItem as={'a'}>
                <ui.Icon size={'small'} className={'rb-is-skeleton'}>
                  <i className={'fas fa-heart'} />
                </ui.Icon>
              </ui.LevelItem>
              {'\n      '}
            </ui.LevelLeft>
            {'\n    '}
          </ui.Level>
          {'\n  '}
        </ui.MediaContent>
        {'\n  '}
        <ui.MediaRight>
          {'\n    '}
          <ui.Delete aria-label={'delete'} className={'rb-is-skeleton'} />
          {'\n  '}
        </ui.MediaRight>
        {'\n'}
      </ui.Media>
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n\n'}
      <ui.Media>
        {'\n  '}
        <ui.MediaLeft as={'figure'}>
          {'\n    '}
          <ui.Image
            size={64}
            as={'p'}
            wrapperProps={{ className: 'rb-is-skeleton' }}
            src={'https://placehold.co/128x128'}
            alt={'Placeholder image'}
          />
          {'\n  '}
        </ui.MediaLeft>
        {'\n  '}
        <ui.MediaContent>
          {'\n    '}
          <ui.Field>
            {'\n      '}
            <ui.Control as={'p'}>
              {'\n        '}
              <ui.Textarea
                placeholder={'Add a comment...'}
                className={'rb-is-skeleton'}
                defaultValue={''}
              />
              {'\n      '}
            </ui.Control>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Level>
            {'\n      '}
            <ui.LevelLeft>
              {'\n        '}
              <ui.LevelItem>
                {'\n          '}
                <ui.LinkButton color={'info'} className={'rb-is-skeleton'}>
                  {'Submit'}
                </ui.LinkButton>
                {'\n        '}
              </ui.LevelItem>
              {'\n      '}
            </ui.LevelLeft>
            {'\n      '}
            <ui.LevelRight>
              {'\n        '}
              <ui.LevelItem>
                {'\n          '}
                <ui.Checkbox wrapperProps={{ className: 'rb-is-skeleton' }}>
                  {' Press enter to submit '}
                </ui.Checkbox>
                {'\n        '}
              </ui.LevelItem>
              {'\n      '}
            </ui.LevelRight>
            {'\n    '}
          </ui.Level>
          {'\n  '}
        </ui.MediaContent>
        {'\n'}
      </ui.Media>
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Notification className={'rb-is-skeleton'}>
        {
          '\n  Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n'
        }
      </ui.Notification>
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tag className={'rb-is-skeleton'}>{'Tag'}</ui.Tag>
      {'\n'}
      <ui.Tag color={'link'} className={'rb-is-skeleton'}>
        {'Link'}
      </ui.Tag>
      {'\n'}
      <ui.Tag color={'primary'} className={'rb-is-skeleton'}>
        {'Primary'}
      </ui.Tag>
      {'\n'}
      <ui.Tag color={'info'} className={'rb-is-skeleton'}>
        {'Info'}
      </ui.Tag>
      {'\n'}
      <ui.Tag color={'success'} className={'rb-is-skeleton'}>
        {'Success'}
      </ui.Tag>
      {'\n'}
      <ui.Tag color={'warning'} className={'rb-is-skeleton'}>
        {'Warning'}
      </ui.Tag>
      {'\n'}
      <ui.Tag color={'danger'} className={'rb-is-skeleton'}>
        {'Danger'}
      </ui.Tag>
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Title className={'rb-is-skeleton'} level={1}>
        {'\n  Title\n'}
      </ui.Title>
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Title className={'rb-has-skeleton'} level={1}>
        {'\n  Title\n'}
      </ui.Title>
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Subtitle className={'rb-is-skeleton'} level={2}>
        {'\n  Subtitle\n'}
      </ui.Subtitle>
      {'\n\n        \n      '}
    </>
  )
}

function Example014Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Subtitle className={'rb-has-skeleton'} level={2}>
        {'\n  Subtitle\n'}
      </ui.Subtitle>
      {'\n\n        \n      '}
    </>
  )
}

function Example015Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Title className={'rb-is-skeleton'} level={1}>
        {'\n  Title\n'}
      </ui.Title>
      {'\n'}
      <ui.Subtitle className={'rb-is-skeleton'} level={2}>
        {'\n  Subtitle\n'}
      </ui.Subtitle>
      {'\n\n        \n      '}
    </>
  )
}

function Example016Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Title className={'rb-has-skeleton'} level={1}>
        {'\n  Title\n'}
      </ui.Title>
      {'\n'}
      <ui.Subtitle className={'rb-has-skeleton'} level={2}>
        {'\n  Subtitle\n'}
      </ui.Subtitle>
      {'\n\n        \n      '}
    </>
  )
}

function Example017Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input className={'rb-is-skeleton'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example018Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea className={'rb-is-skeleton'} defaultValue={''} />
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Empty skeleton block',
  parameters: {
    official: { id: 'features-skeletons/skeleton-block/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.SkeletonBlock />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Skeleton block with content',
  parameters: {
    official: { id: 'features-skeletons/skeleton-block/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.SkeletonBlock>{"\\n  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\\n  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\\n  ut fermentum massa justo sit amet risus. Donec sed odio dui.\\n  Nullam quis risus eget urna mollis ornare vel eu leo.\\n  Cum sociis natoque penatibus et magnis dis parturient montes,\\n  nascetur ridiculus mus. Nullam id dolor id\\n  nibh ultricies vehicula ut id elit.\\n"}</ui.SkeletonBlock>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Skeleton lines',
  parameters: {
    official: { id: 'features-skeletons/skeleton-lines/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.SkeletonLines lines={5} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Button skeletons',
  parameters: {
    official: { id: 'features-skeletons/button/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Buttons>{"\\n  "}<ui.Button className={"rb-is-skeleton"}>{"Button"}</ui.Button>{"\\n  "}<ui.Button color={"link"} className={"rb-is-skeleton"}>{"Link"}</ui.Button>{"\\n  "}<ui.Button color={"primary"} className={"rb-is-skeleton"}>{"Primary"}</ui.Button>{"\\n  "}<ui.Button color={"success"} className={"rb-is-skeleton"}>{"Success"}</ui.Button>{"\\n  "}<ui.Button color={"info"} className={"rb-is-skeleton"}>{"Info"}</ui.Button>{"\\n  "}<ui.Button color={"warning"} className={"rb-is-skeleton"}>{"Warning"}</ui.Button>{"\\n  "}<ui.Button color={"danger"} className={"rb-is-skeleton"}>{"Danger"}</ui.Button>{"\\n"}</ui.Buttons>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Icon skeleton',
  parameters: {
    official: { id: 'features-skeletons/icon/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Icon className={"rb-is-skeleton"}>{"\\n  "}<i className={"fas fa-reply"} />{"\\n"}</ui.Icon>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Image skeleton sizes',
  parameters: {
    official: { id: 'features-skeletons/image/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Image size={16} wrapperProps={{ className: "rb-is-skeleton" }} alt={"Placeholder"} src={"https://placehold.co/16x16"} />{"\\n\\n"}<ui.Image size={32} wrapperProps={{ className: "rb-is-skeleton" }} alt={"Placeholder"} src={"https://placehold.co/32x32"} />{"\\n\\n"}<ui.Image size={64} wrapperProps={{ className: "rb-is-skeleton" }} alt={"Placeholder"} src={"https://placehold.co/64x64"} />{"\\n\\n"}<ui.Image size={128} wrapperProps={{ className: "rb-is-skeleton" }} alt={"Placeholder"} src={"https://placehold.co/128x128"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Media object skeleton',
  parameters: {
    official: { id: 'features-skeletons/media-object/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n\\n"}<ui.Media>{"\\n  "}<ui.MediaLeft as={"figure"}>{"\\n    "}<ui.Image size={64} as={"p"} wrapperProps={{ className: "rb-is-skeleton" }} src={"https://placehold.co/128x128"} alt={"Placeholder image"} />{"\\n  "}</ui.MediaLeft>{"\\n  "}<ui.MediaContent>{"\\n    "}<ui.Content className={"rb-is-skeleton"}>{"\\n      "}<p>{"\\n        "}<strong>{"John Smith"}</strong>{" "}<small>{"@johnsmith"}</small>{" "}<small>{"31m"}</small>{"\\n        "}<br />{"\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor\\n        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus est non commodo luctus,\\n        nisi erat porttitor ligula, eget lacinia odio sem nec elit\\n        vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    "}<ui.Level mobile>{"\\n      "}<ui.LevelLeft>{"\\n        "}<ui.LevelItem as={"a"}><ui.Icon size={"small"} className={"rb-is-skeleton"}><i className={"fas fa-reply"} /></ui.Icon></ui.LevelItem>{"\\n        "}<ui.LevelItem as={"a"}><ui.Icon size={"small"} className={"rb-is-skeleton"}><i className={"fas fa-retweet"} /></ui.Icon></ui.LevelItem>{"\\n        "}<ui.LevelItem as={"a"}><ui.Icon size={"small"} className={"rb-is-skeleton"}><i className={"fas fa-heart"} /></ui.Icon></ui.LevelItem>{"\\n      "}</ui.LevelLeft>{"\\n    "}</ui.Level>{"\\n  "}</ui.MediaContent>{"\\n  "}<ui.MediaRight>{"\\n    "}<ui.Delete aria-label={"delete"} className={"rb-is-skeleton"} />{"\\n  "}</ui.MediaRight>{"\\n"}</ui.Media>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Media form skeleton',
  parameters: {
    official: { id: 'features-skeletons/media-object/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n\\n"}<ui.Media>{"\\n  "}<ui.MediaLeft as={"figure"}>{"\\n    "}<ui.Image size={64} as={"p"} wrapperProps={{ className: "rb-is-skeleton" }} src={"https://placehold.co/128x128"} alt={"Placeholder image"} />{"\\n  "}</ui.MediaLeft>{"\\n  "}<ui.MediaContent>{"\\n    "}<ui.Field>{"\\n      "}<ui.Control as={"p"}>{"\\n        "}<ui.Textarea placeholder={"Add a comment..."} className={"rb-is-skeleton"} defaultValue={""} />{"\\n      "}</ui.Control>{"\\n    "}</ui.Field>{"\\n    "}<ui.Level>{"\\n      "}<ui.LevelLeft>{"\\n        "}<ui.LevelItem>{"\\n          "}<ui.LinkButton color={"info"} className={"rb-is-skeleton"}>{"Submit"}</ui.LinkButton>{"\\n        "}</ui.LevelItem>{"\\n      "}</ui.LevelLeft>{"\\n      "}<ui.LevelRight>{"\\n        "}<ui.LevelItem>{"\\n          "}<ui.Checkbox wrapperProps={{ className: "rb-is-skeleton" }}>{" Press enter to submit "}</ui.Checkbox>{"\\n        "}</ui.LevelItem>{"\\n      "}</ui.LevelRight>{"\\n    "}</ui.Level>{"\\n  "}</ui.MediaContent>{"\\n"}</ui.Media>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Notification skeleton',
  parameters: {
    official: { id: 'features-skeletons/notification/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Notification className={"rb-is-skeleton"}>{"\\n  Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\\n"}</ui.Notification>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Tag skeletons',
  parameters: {
    official: { id: 'features-skeletons/tag/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tag className={"rb-is-skeleton"}>{"Tag"}</ui.Tag>{"\\n"}<ui.Tag color={"link"} className={"rb-is-skeleton"}>{"Link"}</ui.Tag>{"\\n"}<ui.Tag color={"primary"} className={"rb-is-skeleton"}>{"Primary"}</ui.Tag>{"\\n"}<ui.Tag color={"info"} className={"rb-is-skeleton"}>{"Info"}</ui.Tag>{"\\n"}<ui.Tag color={"success"} className={"rb-is-skeleton"}>{"Success"}</ui.Tag>{"\\n"}<ui.Tag color={"warning"} className={"rb-is-skeleton"}>{"Warning"}</ui.Tag>{"\\n"}<ui.Tag color={"danger"} className={"rb-is-skeleton"}>{"Danger"}</ui.Tag>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Title with is-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Title className={"rb-is-skeleton"} level={1}>{"\\n  Title\\n"}</ui.Title>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Title with has-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Title className={"rb-has-skeleton"} level={1}>{"\\n  Title\\n"}</ui.Title>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Subtitle with is-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example013Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Subtitle className={"rb-is-skeleton"} level={2}>{"\\n  Subtitle\\n"}</ui.Subtitle>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Subtitle with has-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example014Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Subtitle className={"rb-has-skeleton"} level={2}>{"\\n  Subtitle\\n"}</ui.Subtitle>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Heading pair with is-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example015Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Title className={"rb-is-skeleton"} level={1}>{"\\n  Title\\n"}</ui.Title>{"\\n"}<ui.Subtitle className={"rb-is-skeleton"} level={2}>{"\\n  Subtitle\\n"}</ui.Subtitle>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Heading pair with has-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/006' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example016Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Title className={"rb-has-skeleton"} level={1}>{"\\n  Title\\n"}</ui.Title>{"\\n"}<ui.Subtitle className={"rb-has-skeleton"} level={2}>{"\\n  Subtitle\\n"}</ui.Subtitle>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Input skeleton',
  parameters: {
    official: { id: 'features-skeletons/form-controls/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example017Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input className={"rb-is-skeleton"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Textarea skeleton',
  parameters: {
    official: { id: 'features-skeletons/form-controls/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example018Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea className={"rb-is-skeleton"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'columns-responsiveness',
      title: 'Columns responsiveness',
      url: 'https://bulma.io/documentation/columns/responsiveness/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-responsiveness',
  title: 'CSS Library/Columns/Responsiveness',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-responsiveness" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Columns responsiveness'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Handle '}
          <strong data-official-prose="">{'different'}</strong>
          {' column layouts for each '}
          <strong data-official-prose="">{'breakpoint'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'mobile-columns'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Mobile columns\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#mobile-columns'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    By default, columns are only activated from '}
            <strong data-official-prose="">{'tablet'}</strong>
            {
              ' onwards. This means columns are stacked on top\n    of each other on '
            }
            <strong data-official-prose="">{'mobile'}</strong>
            {'.\n    '}
            <br data-official-prose="" />
            {'\n    If you want columns to work on '}
            <strong data-official-prose="">{'mobile too'}</strong>
            {', just add the '}
            <code data-official-prose="">{'is-mobile'}</code>
            {' modifier on the\n    '}
            <code data-official-prose="">{'columns'}</code>
            {' container:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-responsiveness/mobile-columns/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-mobile">\n  <div class="column">1</div>\n  <div class="column">2</div>\n  <div class="column">3</div>\n  <div class="column">4</div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-info'}>
          {'\n  '}
          <p data-official-prose="" className={'message-header'}>
            {'Resize'}
          </p>
          {'\n  '}
          <p data-official-prose="" className={'message-body'}>
            {
              '\n    If you want to see the difference, resize your browser and see\n    '
            }
            <em data-official-prose="">{'when'}</em>
            {
              ' the columns are stacked and when they are horizontally distributed.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you '}
            <em data-official-prose="">{'only'}</em>
            {' want columns on '}
            <strong data-official-prose="">{'desktop'}</strong>
            {' upwards, just use the '}
            <code data-official-prose="">{'is-desktop'}</code>
            {' modifier\n    on the '}
            <code data-official-prose="">{'columns'}</code>
            {' container:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-responsiveness/mobile-columns/002">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-desktop">\n  <div class="column">1</div>\n  <div class="column">2</div>\n  <div class="column">3</div>\n  <div class="column">4</div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n'}
        <h3
          data-official-prose=""
          id={'different-column-sizes-per-breakpoint'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Different column sizes per breakpoint\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#different-column-sizes-per-breakpoint'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can define a '}
            <strong data-official-prose="">{'column size'}</strong>
            {' for '}
            <em data-official-prose="">{'each'}</em>
            {' viewport size: mobile, tablet, and desktop.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-responsiveness/different-column-sizes-per-breakpoint/001">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-info'}>
          {'\n  '}
          <p data-official-prose="" className={'message-header'}>
            {'Resize'}
          </p>
          {'\n  '}
          <p data-official-prose="" className={'message-body'}>
            {
              '\n    If you want to see these classes in action, resize your browser window and see how the same column varies in width\n    at each breakpoint.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-mobile">\n  <div\n    class="\n      column\n      is-three-quarters-mobile\n      is-two-thirds-tablet\n      is-half-desktop\n      is-one-third-widescreen\n      is-one-quarter-fullhd\n    "\n  >\n    <code>is-three-quarters-mobile</code><br />\n    <code>is-two-thirds-tablet</code><br />\n    <code>is-half-desktop</code><br />\n    <code>is-one-third-widescreen</code><br />\n    <code>is-one-quarter-fullhd</code>\n  </div>\n  <div class="column">2</div>\n  <div class="column">3</div>\n  <div class="column">4</div>\n  <div class="column">5</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'}>
        {' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>1</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>2</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>3</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>4</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Columns displayFrom={'desktop'}>
        {' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>1</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>2</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>3</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>4</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'}>
        {' '}
        <ui.Column
          width={{
            mobile: 'three-quarters',
            tablet: 'two-thirds',
            desktop: 'half',
            widescreen: 'one-third',
            fullhd: 'one-quarter',
          }}
        >
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code>{'is-three-quarters-mobile'}</code>
            <br /> <code>{'is-two-thirds-tablet'}</code>
            <br /> <code>{'is-half-desktop'}</code>
            <br /> <code>{'is-one-third-widescreen'}</code>
            <br /> <code>{'is-one-quarter-fullhd'}</code>
            <br />{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>2</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>3</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>4</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>5</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Columns on mobile',
  parameters: {
    official: { id: 'columns-responsiveness/mobile-columns/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Columns displayFrom={'mobile'}>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>1</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>2</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>3</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>4</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Columns from desktop',
  parameters: {
    official: { id: 'columns-responsiveness/mobile-columns/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Columns displayFrom={'desktop'}>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>1</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>2</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>3</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>4</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Widths at each breakpoint',
  parameters: {
    official: {
      id: 'columns-responsiveness/different-column-sizes-per-breakpoint/001',
    },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Columns displayFrom={'mobile'}>\n        {' '}\n        <ui.Column\n          width={{\n            mobile: 'three-quarters',\n            tablet: 'two-thirds',\n            desktop: 'half',\n            widescreen: 'one-third',\n            fullhd: 'one-quarter',\n          }}\n        >\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code>{'is-three-quarters-mobile'}</code>\n            <br /> <code>{'is-two-thirds-tablet'}</code>\n            <br /> <code>{'is-half-desktop'}</code>\n            <br /> <code>{'is-one-third-widescreen'}</code>\n            <br /> <code>{'is-one-quarter-fullhd'}</code>\n            <br />{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>2</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>3</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>4</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>5</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

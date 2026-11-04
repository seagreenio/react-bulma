import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Column, Columns } from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Columns responsiveness'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Handle '}
          <strong data-official-prose="">{'different'}</strong>
          {' column layouts for each '}
          <strong data-official-prose="">{'breakpoint'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <h3
          data-official-prose=""
          id={'mobile-columns'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Mobile columns '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#mobile-columns'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' By default, columns are only activated from '}
            <strong data-official-prose="">{'tablet'}</strong>
            {
              ' onwards. This means columns are stacked on top of each other on '
            }
            <strong data-official-prose="">{'mobile'}</strong>
            {'. '}
            <br data-official-prose="" />
            {' If you want columns to work on '}
            <strong data-official-prose="">{'mobile too'}</strong>
            {', just add the '}
            <code data-official-prose="">{'is-mobile'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'columns'}</code>
            {' container: '}
          </p>
        </div>
        <div data-official-example="columns-responsiveness/mobile-columns/001">
          <Canvas of={ColumnsOnMobileStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-mobile">\n  <div class="column">1</div>\n  <div class="column">2</div>\n  <div class="column">3</div>\n  <div class="column">4</div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'message is-info'}>
          <p data-official-prose="" className={'message-header'}>
            {'Resize'}
          </p>
          <p data-official-prose="" className={'message-body'}>
            {' If you want to see the difference, resize your browser and see '}
            <em data-official-prose="">{'when'}</em>
            {
              ' the columns are stacked and when they are horizontally distributed. '
            }
          </p>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you '}
            <em data-official-prose="">{'only'}</em>
            {' want columns on '}
            <strong data-official-prose="">{'desktop'}</strong>
            {' upwards, just use the '}
            <code data-official-prose="">{'is-desktop'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'columns'}</code>
            {' container: '}
          </p>
        </div>
        <div data-official-example="columns-responsiveness/mobile-columns/002">
          <Canvas of={ColumnsFromDesktopStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-desktop">\n  <div class="column">1</div>\n  <div class="column">2</div>\n  <div class="column">3</div>\n  <div class="column">4</div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <h3
          data-official-prose=""
          id={'different-column-sizes-per-breakpoint'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Different column sizes per breakpoint '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#different-column-sizes-per-breakpoint'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can define a '}
            <strong data-official-prose="">{'column size'}</strong>
            {' for '}
            <em data-official-prose="">{'each'}</em>
            {' viewport size: mobile, tablet, and desktop.'}
          </p>
        </div>
        <div data-official-example="columns-responsiveness/different-column-sizes-per-breakpoint/001">
          <Canvas of={WidthsAtEachBreakpointStory} />
        </div>
        <div data-official-prose="" className={'message is-info'}>
          <p data-official-prose="" className={'message-header'}>
            {'Resize'}
          </p>
          <p data-official-prose="" className={'message-body'}>
            {
              ' If you want to see these classes in action, resize your browser window and see how the same column varies in width at each breakpoint. '
            }
          </p>
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-mobile">\n  <div\n    class="\n      column\n      is-three-quarters-mobile\n      is-two-thirds-tablet\n      is-half-desktop\n      is-one-third-widescreen\n      is-one-quarter-fullhd\n    "\n  >\n    <code>is-three-quarters-mobile</code><br />\n    <code>is-two-thirds-tablet</code><br />\n    <code>is-half-desktop</code><br />\n    <code>is-one-third-widescreen</code><br />\n    <code>is-one-quarter-fullhd</code>\n  </div>\n  <div class="column">2</div>\n  <div class="column">3</div>\n  <div class="column">4</div>\n  <div class="column">5</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function ColumnsOnMobileDemo() {
  return (
    <>
      <Columns displayFrom={'mobile'}>
        <Column>
          <p className={'bd-notification is-primary'}>1</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>2</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>3</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>4</p>
        </Column>
      </Columns>
    </>
  )
}

function ColumnsFromDesktopDemo() {
  return (
    <>
      <Columns displayFrom={'desktop'}>
        <Column>
          <p className={'bd-notification is-primary'}>1</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>2</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>3</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>4</p>
        </Column>
      </Columns>
    </>
  )
}

function WidthsAtEachBreakpointDemo() {
  return (
    <>
      <Columns displayFrom={'mobile'}>
        <Column
          width={{
            mobile: 'three-quarters',
            tablet: 'two-thirds',
            desktop: 'half',
            widescreen: 'one-third',
            fullhd: 'one-quarter',
          }}
        >
          <p className={'bd-notification is-primary'}>
            <code>{'is-three-quarters-mobile'}</code>
            <br /> <code>{'is-two-thirds-tablet'}</code>
            <br /> <code>{'is-half-desktop'}</code>
            <br /> <code>{'is-one-third-widescreen'}</code>
            <br /> <code>{'is-one-quarter-fullhd'}</code>
            <br />
          </p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>2</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>3</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>4</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>5</p>
        </Column>
      </Columns>
    </>
  )
}

export const ColumnsOnMobileStory = {
  name: 'Columns on mobile',
  parameters: {
    official: { id: 'columns-responsiveness/mobile-columns/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction ColumnsOnMobileDemo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'}>\n        <Column>\n          <p className={'bd-notification is-primary'}>1</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>2</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>3</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>4</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColumnsOnMobileDemo,
} satisfies StoryObj

export const ColumnsFromDesktopStory = {
  name: 'Columns from desktop',
  parameters: {
    official: { id: 'columns-responsiveness/mobile-columns/002' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction ColumnsFromDesktopDemo() {\n  return (\n    <>\n      <Columns displayFrom={'desktop'}>\n        <Column>\n          <p className={'bd-notification is-primary'}>1</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>2</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>3</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>4</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColumnsFromDesktopDemo,
} satisfies StoryObj

export const WidthsAtEachBreakpointStory = {
  name: 'Widths at each breakpoint',
  parameters: {
    official: {
      id: 'columns-responsiveness/different-column-sizes-per-breakpoint/001',
    },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction WidthsAtEachBreakpointDemo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'}>\n        <Column\n          width={{\n            mobile: 'three-quarters',\n            tablet: 'two-thirds',\n            desktop: 'half',\n            widescreen: 'one-third',\n            fullhd: 'one-quarter',\n          }}\n        >\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-three-quarters-mobile'}</code>\n            <br /> <code>{'is-two-thirds-tablet'}</code>\n            <br /> <code>{'is-half-desktop'}</code>\n            <br /> <code>{'is-one-third-widescreen'}</code>\n            <br /> <code>{'is-one-quarter-fullhd'}</code>\n            <br />\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>2</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>3</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>4</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>5</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WidthsAtEachBreakpointDemo,
} satisfies StoryObj

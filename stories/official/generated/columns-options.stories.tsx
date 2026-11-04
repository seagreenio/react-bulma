import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Column, Columns } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'columns-options',
      title: 'Column options',
      url: 'https://bulma.io/documentation/columns/options/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-options',
  title: 'CSS Library/Columns/Options',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-options" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Column options'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Design different '}
          <strong data-official-prose="">{'types'}</strong>
          {' of column layouts'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <h3
          data-official-prose=""
          id={'vertical-alignment'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Vertical alignment '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#vertical-alignment'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' To align your columns vertically, add the '}
            <code data-official-prose="">{'is-vcentered'}</code>
            {' modifier to the '}
            <code data-official-prose="">{'columns'}</code>
            {' container. '}
          </p>
        </div>
        <div data-official-example="columns-options/vertical-alignment/001">
          <Canvas of={VerticallyCenteredColumnsStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-vcentered">\n  <div class="column is-8">\n    <p class="bd-notification is-primary">First column</p>\n  </div>\n  <div class="column">\n    <p class="bd-notification is-primary">\n      Second column with more content. This is so you can see the vertical\n      alignment.\n    </p>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>{' '}
        <h3
          data-official-prose=""
          id={'multiline'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Multiline '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#multiline'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Whenever you want to start a new line, you can close a '}
            <code data-official-prose="">{'columns'}</code>
            {' container and start a new one. But you can also add the '}
            <code data-official-prose="">{'is-multiline'}</code>
            {' modifier and add '}
            <strong data-official-prose="">{'more'}</strong>
            {' column elements than would fit in a single row. '}
          </p>
        </div>
        <div data-official-example="columns-options/multiline/001">
          <Canvas of={MultilineColumnsStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-multiline is-mobile">\n  <div class="column is-one-quarter">\n    <code>is-one-quarter</code>\n  </div>\n  <div class="column is-one-quarter">\n    <code>is-one-quarter</code>\n  </div>\n  <div class="column is-one-quarter">\n    <code>is-one-quarter</code>\n  </div>\n  <div class="column is-one-quarter">\n    <code>is-one-quarter</code>\n  </div>\n  <div class="column is-half">\n    <code>is-half</code>\n  </div>\n  <div class="column is-one-quarter">\n    <code>is-one-quarter</code>\n  </div>\n  <div class="column is-one-quarter">\n    <code>is-one-quarter</code>\n  </div>\n  <div class="column is-one-quarter">\n    <code>is-one-quarter</code>\n  </div>\n  <div class="column">Auto</div>\n</div>\n'
              }
            </code>
          </pre>
        </div>{' '}
        <h3
          data-official-prose=""
          id={'centering-columns'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Centering columns '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#centering-columns'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' While you can use '}
            <em data-official-prose="">{'empty columns'}</em>
            {' (like '}
            <code data-official-prose="">{'<div class="column"></div>'}</code>
            {') to create horizontal space around '}
            <code data-official-prose="">{'.column'}</code>
            {' elements, you can also use '}
            <code data-official-prose="">{'.is-centered'}</code>
            {' on the parent '}
            <code data-official-prose="">{'.columns'}</code>
            {' element: '}
          </p>
        </div>
        <div data-official-example="columns-options/centering-columns/001">
          <Canvas of={CenteredHalfWidthColumnStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-mobile is-centered">\n  <div class="column is-half">\n    <p class="bd-notification is-primary">\n      <code class="html">is-half</code><br />\n    </p>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Use with '}
            <code data-official-prose="">{'.is-multiline'}</code>
            {
              ' to create a flexible, centered list (try resizing to see centering in different viewport sizes): '
            }
          </p>
        </div>
        <div data-official-example="columns-options/centering-columns/002">
          <Canvas of={CenteredMultilineColumnsStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-mobile is-multiline is-centered">\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      First Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      Our Second Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      Third Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      The Fourth Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      Fifth Column\n    </p>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
      </div>
    </OfficialDocument>
  )
}

function VerticallyCenteredColumnsDemo() {
  return (
    <>
      <Columns verticallyCentered>
        <Column width={8}>
          <p className={'bd-notification is-primary'}>First column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>
            Second column with more content. This is so you can see the vertical
            alignment.
          </p>
        </Column>
      </Columns>
    </>
  )
}

function MultilineColumnsDemo() {
  return (
    <>
      <Columns multiline displayFrom={'mobile'}>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column width={'half'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-half'}</code>
          </p>
        </Column>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function CenteredHalfWidthColumnDemo() {
  return (
    <>
      <Columns displayFrom={'mobile'} centered>
        <Column width={'half'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-half'}</code>
            <br />
          </p>
        </Column>
      </Columns>
    </>
  )
}

function CenteredMultilineColumnsDemo() {
  return (
    <>
      <Columns displayFrom={'mobile'} multiline centered>
        <Column width={'narrow'}>
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            <code className={'html'}>{'is-narrow'}</code>
            <br /> First Column
          </p>
        </Column>
        <Column width={'narrow'}>
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            <code className={'html'}>{'is-narrow'}</code>
            <br /> Our Second Column
          </p>
        </Column>
        <Column width={'narrow'}>
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            <code className={'html'}>{'is-narrow'}</code>
            <br /> Third Column
          </p>
        </Column>
        <Column width={'narrow'}>
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            <code className={'html'}>{'is-narrow'}</code>
            <br /> The Fourth Column
          </p>
        </Column>
        <Column width={'narrow'}>
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            <code className={'html'}>{'is-narrow'}</code>
            <br /> Fifth Column
          </p>
        </Column>
      </Columns>
    </>
  )
}

export const VerticallyCenteredColumnsStory = {
  name: 'Vertically centered columns',
  parameters: {
    official: { id: 'columns-options/vertical-alignment/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction VerticallyCenteredColumnsDemo() {\n  return (\n    <>\n      <Columns verticallyCentered>\n        <Column width={8}>\n          <p className={'bd-notification is-primary'}>First column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>\n            Second column with more content. This is so you can see the vertical\n            alignment.\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: VerticallyCenteredColumnsDemo,
} satisfies StoryObj

export const MultilineColumnsStory = {
  name: 'Multiline columns',
  parameters: {
    official: { id: 'columns-options/multiline/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction MultilineColumnsDemo() {\n  return (\n    <>\n      <Columns multiline displayFrom={'mobile'}>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'half'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-half'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MultilineColumnsDemo,
} satisfies StoryObj

export const CenteredHalfWidthColumnStory = {
  name: 'Centered half-width column',
  parameters: {
    official: { id: 'columns-options/centering-columns/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction CenteredHalfWidthColumnDemo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'} centered>\n        <Column width={'half'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-half'}</code>\n            <br />\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredHalfWidthColumnDemo,
} satisfies StoryObj

export const CenteredMultilineColumnsStory = {
  name: 'Centered multiline columns',
  parameters: {
    official: { id: 'columns-options/centering-columns/002' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction CenteredMultilineColumnsDemo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'} multiline centered>\n        <Column width={'narrow'}>\n          <p\n            style={{ ...{ padding: '1.25rem 1.5rem' } }}\n            className={'bd-notification is-primary'}\n          >\n            <code className={'html'}>{'is-narrow'}</code>\n            <br /> First Column\n          </p>\n        </Column>\n        <Column width={'narrow'}>\n          <p\n            style={{ ...{ padding: '1.25rem 1.5rem' } }}\n            className={'bd-notification is-primary'}\n          >\n            <code className={'html'}>{'is-narrow'}</code>\n            <br /> Our Second Column\n          </p>\n        </Column>\n        <Column width={'narrow'}>\n          <p\n            style={{ ...{ padding: '1.25rem 1.5rem' } }}\n            className={'bd-notification is-primary'}\n          >\n            <code className={'html'}>{'is-narrow'}</code>\n            <br /> Third Column\n          </p>\n        </Column>\n        <Column width={'narrow'}>\n          <p\n            style={{ ...{ padding: '1.25rem 1.5rem' } }}\n            className={'bd-notification is-primary'}\n          >\n            <code className={'html'}>{'is-narrow'}</code>\n            <br /> The Fourth Column\n          </p>\n        </Column>\n        <Column width={'narrow'}>\n          <p\n            style={{ ...{ padding: '1.25rem 1.5rem' } }}\n            className={'bd-notification is-primary'}\n          >\n            <code className={'html'}>{'is-narrow'}</code>\n            <br /> Fifth Column\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredMultilineColumnsDemo,
} satisfies StoryObj

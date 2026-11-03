import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

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
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Column options'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Design different '}
          <strong data-official-prose="">{'types'}</strong>
          {' of column layouts'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n    '}
        <h3
          data-official-prose=""
          id={'vertical-alignment'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Vertical alignment\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#vertical-alignment'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    To align your columns vertically, add the '}
            <code data-official-prose="">{'is-vcentered'}</code>
            {' modifier\n    to the '}
            <code data-official-prose="">{'columns'}</code>
            {' container.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-options/vertical-alignment/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
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
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Multiline\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#multiline'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    Whenever you want to start a new line, you can close a\n    '
            }
            <code data-official-prose="">{'columns'}</code>
            {' container and start a new one. But you can also add the\n    '}
            <code data-official-prose="">{'is-multiline'}</code>
            {' modifier and add '}
            <strong data-official-prose="">{'more'}</strong>
            {' column\n    elements than would fit in a single row.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-options/multiline/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
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
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Centering columns\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#centering-columns'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    While you can use '}
            <em data-official-prose="">{'empty columns'}</em>
            {' (like\n    '}
            <code data-official-prose="">{'<div class="column"></div>'}</code>
            {') to create horizontal\n    space around '}
            <code data-official-prose="">{'.column'}</code>
            {' elements, you can also use\n    '}
            <code data-official-prose="">{'.is-centered'}</code>
            {' on the parent '}
            <code data-official-prose="">{'.columns'}</code>
            {' element:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-options/centering-columns/001">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-mobile is-centered">\n  <div class="column is-half">\n    <p class="bd-notification is-primary">\n      <code class="html">is-half</code><br />\n    </p>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Use with '}
            <code data-official-prose="">{'.is-multiline'}</code>
            {
              ' to create a flexible, centered list (try\n    resizing to see centering in different viewport sizes):\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-options/centering-columns/002">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="columns is-mobile is-multiline is-centered">\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      First Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      Our Second Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      Third Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      The Fourth Column\n    </p>\n  </div>\n  <div class="column is-narrow">\n    <p class="bd-notification is-primary">\n      <code class="html">is-narrow</code><br />\n      Fifth Column\n    </p>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Columns verticallyCentered>
        {'\n  '}
        <ui.Column width={8}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>{'First column'}</p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            {
              '\n      Second column with more content. This is so you can see the vertical\n      alignment.\n    '
            }
          </p>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Columns multiline displayFrom={'mobile'}>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-half'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-primary'}>{'Auto'}</p>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'} centered>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <p className={'bd-notification is-primary'}>
            {'\n      '}
            <code className={'html'}>{'is-half'}</code>
            <br />
            {'\n    '}
          </p>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'} multiline centered>
        {'\n  '}
        <ui.Column width={'narrow'}>
          {'\n    '}
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            {'\n      '}
            <code className={'html'}>{'is-narrow'}</code>
            <br />
            {'\n      First Column\n    '}
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'narrow'}>
          {'\n    '}
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            {'\n      '}
            <code className={'html'}>{'is-narrow'}</code>
            <br />
            {'\n      Our Second Column\n    '}
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'narrow'}>
          {'\n    '}
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            {'\n      '}
            <code className={'html'}>{'is-narrow'}</code>
            <br />
            {'\n      Third Column\n    '}
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'narrow'}>
          {'\n    '}
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            {'\n      '}
            <code className={'html'}>{'is-narrow'}</code>
            <br />
            {'\n      The Fourth Column\n    '}
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'narrow'}>
          {'\n    '}
          <p
            style={{ ...{ padding: '1.25rem 1.5rem' } }}
            className={'bd-notification is-primary'}
          >
            {'\n      '}
            <code className={'html'}>{'is-narrow'}</code>
            <br />
            {'\n      Fifth Column\n    '}
          </p>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'vertical alignment 01',
  parameters: {
    official: { id: 'columns-options/vertical-alignment/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<><ui.Columns verticallyCentered>{"\\n  "}<ui.Column width={8}>{"\\n    "}<p className={"bd-notification is-primary"}>{"First column"}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-primary"}>{"\\n      Second column with more content. This is so you can see the vertical\\n      alignment.\\n    "}</p>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'multiline 01',
  parameters: {
    official: { id: 'columns-options/multiline/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<><ui.Columns multiline displayFrom={"mobile"}>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-one-quarter"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-one-quarter"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-one-quarter"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-one-quarter"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-half"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-one-quarter"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-one-quarter"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<p className={"bd-notification is-primary"}><code>{"is-one-quarter"}</code></p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-primary"}>{"Auto"}</p>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'centering columns 01',
  parameters: {
    official: { id: 'columns-options/centering-columns/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<><ui.Columns displayFrom={"mobile"} centered>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<p className={"bd-notification is-primary"}>{"\\n      "}<code className={"html"}>{"is-half"}</code><br />{"\\n    "}</p>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'centering columns 02',
  parameters: {
    official: { id: 'columns-options/centering-columns/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<><ui.Columns displayFrom={"mobile"} multiline centered>{"\\n  "}<ui.Column width={"narrow"}>{"\\n    "}<p style={{ ...{ padding: "1.25rem 1.5rem" } }} className={"bd-notification is-primary"}>{"\\n      "}<code className={"html"}>{"is-narrow"}</code><br />{"\\n      First Column\\n    "}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"narrow"}>{"\\n    "}<p style={{ ...{ padding: "1.25rem 1.5rem" } }} className={"bd-notification is-primary"}>{"\\n      "}<code className={"html"}>{"is-narrow"}</code><br />{"\\n      Our Second Column\\n    "}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"narrow"}>{"\\n    "}<p style={{ ...{ padding: "1.25rem 1.5rem" } }} className={"bd-notification is-primary"}>{"\\n      "}<code className={"html"}>{"is-narrow"}</code><br />{"\\n      Third Column\\n    "}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"narrow"}>{"\\n    "}<p style={{ ...{ padding: "1.25rem 1.5rem" } }} className={"bd-notification is-primary"}>{"\\n      "}<code className={"html"}>{"is-narrow"}</code><br />{"\\n      The Fourth Column\\n    "}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"narrow"}>{"\\n    "}<p style={{ ...{ padding: "1.25rem 1.5rem" } }} className={"bd-notification is-primary"}>{"\\n      "}<code className={"html"}>{"is-narrow"}</code><br />{"\\n      Fifth Column\\n    "}</p>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

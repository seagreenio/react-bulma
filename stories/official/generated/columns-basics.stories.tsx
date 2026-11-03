import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

const meta = {
  ...officialPage(
    {
      id: 'columns-basics',
      title: 'Columns powered by Flexbox',
      url: 'https://bulma.io/documentation/columns/basics/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-basics',
  title: 'CSS Library/Columns/Basics',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-basics" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Columns powered by Flexbox'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A simple way to build '}
          <strong data-official-prose="">{'responsive columns'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Building a '}
            <strong data-official-prose="">{'columns layout'}</strong>
            {' with Bulma is very simple:'}
          </p>
          {'\n  '}
          <ol data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'Add a '}
              <code data-official-prose="">{'columns'}</code>
              {' container'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'Add as many '}
              <code data-official-prose="">{'column'}</code>
              {' elements as you want'}
            </li>
            {'\n  '}
          </ol>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Each column will have an '}
            <strong data-official-prose="">{'equal width'}</strong>
            {', no matter the number\n    of columns.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-basics/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column">First column</div>\n  <div class="column">Second column</div>\n  <div class="column">Third column</div>\n  <div class="column">Fourth column</div>\n</div>\n'
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
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-primary'}>{'First column'}</p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-primary'}>{'Second column'}</p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-primary'}>{'Third column'}</p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-primary'}>{'Fourth column'}</p>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Columns powered by Flexbox 01',
  parameters: {
    official: { id: 'columns-basics/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-primary"}>{"First column"}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-primary"}>{"Second column"}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-primary"}>{"Third column"}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-primary"}>{"Fourth column"}</p>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

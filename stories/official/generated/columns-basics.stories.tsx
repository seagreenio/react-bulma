import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Column, Columns } from '../../../src'
import { officialPage } from '../support'

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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Columns powered by Flexbox'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A simple way to build '}
          <strong data-official-prose="">{'responsive columns'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Building a '}
            <strong data-official-prose="">{'columns layout'}</strong>
            {' with Bulma is very simple:'}
          </p>
          <ol data-official-prose="">
            <li data-official-prose="">
              {'Add a '}
              <code data-official-prose="">{'columns'}</code>
              {' container'}
            </li>
            <li data-official-prose="">
              {'Add as many '}
              <code data-official-prose="">{'column'}</code>
              {' elements as you want'}
            </li>
          </ol>
          <p data-official-prose="">
            {' Each column will have an '}
            <strong data-official-prose="">{'equal width'}</strong>
            {', no matter the number of columns. '}
          </p>
        </div>
        <div data-official-example="columns-basics/basic/001">
          <Canvas of={FourEqualColumnsStory} />
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column">First column</div>\n  <div class="column">Second column</div>\n  <div class="column">Third column</div>\n  <div class="column">Fourth column</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function FourEqualColumnsDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p className={'bd-notification is-primary'}>First column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Second column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Third column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Fourth column</p>
        </Column>
      </Columns>
    </>
  )
}

export const FourEqualColumnsStory = {
  name: 'Four equal columns',
  parameters: {
    official: { id: 'columns-basics/basic/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction FourEqualColumnsDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p className={'bd-notification is-primary'}>First column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Second column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Third column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Fourth column</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FourEqualColumnsDemo,
} satisfies StoryObj

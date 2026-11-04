import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Column, Columns } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'columns-nesting',
      title: 'Nesting columns',
      url: 'https://bulma.io/documentation/columns/nesting/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-nesting',
  title: 'CSS Library/Columns/Nesting',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-nesting" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Nesting columns'}
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
            {' You can '}
            <strong data-official-prose="">{'nest'}</strong>
            {
              ' columns to have more flexibility in your design. You only need to follow this structure: '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'columns'}</code>
              {': top-level columns container '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'column'}</code>
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'columns'}</code>
                      {': nested columns '}
                      <ul data-official-prose="">
                        <li data-official-prose="">
                          <code data-official-prose="">{'column'}</code>
                          {' and so on…'}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p data-official-prose="">
            {' The difference with '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/columns/options/#multiline'}
            >
              {'multiline columns'}
            </a>
            {' is the '}
            <strong data-official-prose="">{'order'}</strong>
            {' in the HTML code: all the '}
            <strong data-official-prose="" className={'has-text-info'}>
              {'blue'}
            </strong>
            {' columns appear '}
            <em data-official-prose="">{'before'}</em>
            {' the '}
            <strong data-official-prose="" className={'has-text-danger'}>
              {'red'}
            </strong>
            {' ones. Resize to a narrower viewport to see the result. '}
          </p>
        </div>
        <div data-official-example="columns-nesting/basic/001">
          <Canvas of={NestedColumnsStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Multiline columns will also have a '}
            <strong data-official-prose="">{'gap'}</strong>
            {' between each '}
            <strong data-official-prose="">{'line'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column">\n    <p class="bd-notification is-info">First column</p>\n    <div class="columns is-mobile">\n      <div class="column">\n        <p class="bd-notification is-info">First nested column</p>\n      </div>\n      <div class="column">\n        <p class="bd-notification is-info">Second nested column</p>\n      </div>\n    </div>\n  </div>\n  <div class="column">\n    <p class="bd-notification is-danger">Second column</p>\n    <div class="columns is-mobile">\n      <div class="column is-half">\n        <p class="bd-notification is-danger">50%</p>\n      </div>\n      <div class="column">\n        <p class="bd-notification is-danger">Auto</p>\n      </div>\n      <div class="column">\n        <p class="bd-notification is-danger">Auto</p>\n      </div>\n    </div>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function NestedColumnsDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p className={'bd-notification is-info'}>First column</p>
          <Columns displayFrom={'mobile'}>
            <Column>
              <p className={'bd-notification is-info'}>First nested column</p>
            </Column>
            <Column>
              <p className={'bd-notification is-info'}>Second nested column</p>
            </Column>
          </Columns>
        </Column>
        <Column>
          <p className={'bd-notification is-danger'}>Second column</p>
          <Columns displayFrom={'mobile'}>
            <Column width={'half'}>
              <p className={'bd-notification is-danger'}>50%</p>
            </Column>
            <Column>
              <p className={'bd-notification is-danger'}>Auto</p>
            </Column>
            <Column>
              <p className={'bd-notification is-danger'}>Auto</p>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </>
  )
}

export const NestedColumnsStory = {
  name: 'Nested columns',
  parameters: {
    official: { id: 'columns-nesting/basic/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction NestedColumnsDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p className={'bd-notification is-info'}>First column</p>\n          <Columns displayFrom={'mobile'}>\n            <Column>\n              <p className={'bd-notification is-info'}>First nested column</p>\n            </Column>\n            <Column>\n              <p className={'bd-notification is-info'}>Second nested column</p>\n            </Column>\n          </Columns>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-danger'}>Second column</p>\n          <Columns displayFrom={'mobile'}>\n            <Column width={'half'}>\n              <p className={'bd-notification is-danger'}>50%</p>\n            </Column>\n            <Column>\n              <p className={'bd-notification is-danger'}>Auto</p>\n            </Column>\n            <Column>\n              <p className={'bd-notification is-danger'}>Auto</p>\n            </Column>\n          </Columns>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NestedColumnsDemo,
} satisfies StoryObj

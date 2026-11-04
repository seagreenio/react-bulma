import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import { Column, Columns, helpers } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'columns-gap',
      title: 'Columns gap',
      url: 'https://bulma.io/documentation/columns/gap/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-gap',
  title: 'CSS Library/Columns/Gap',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-gap" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Columns gap'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Customize the '}
          <strong data-official-prose="">{'gap'}</strong>
          {' between the columns'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <h3
          data-official-prose=""
          id={'default-gap'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Default gap '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#default-gap'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Each column has a '}
            <strong data-official-prose="">{'gap'}</strong>
            {' equal to the '}
            <strong data-official-prose="">{'variable'}</strong>{' '}
            <code data-official-prose="">{'$column-gap'}</code>
            {', which has a default value of '}
            <code data-official-prose="">{'0.75rem'}</code>
            {'. '}
            <br data-official-prose="" />
            {' Since the gap is on '}
            <em data-official-prose="">{'each side'}</em>
            {
              ' of a column, the gap between two adjacent columns will be twice the value of '
            }
            <code data-official-prose="">{'$column-gap'}</code>
            {', or '}
            <code data-official-prose="">{'1.5rem'}</code>
            {' by default. '}
          </p>
        </div>
        <div data-official-example="columns-gap/default-gap/001">
          <Canvas of={DefaultColumnGapStory} />
        </div>
        <h3
          data-official-prose=""
          id={'gapless'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Gapless '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#gapless'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to remove the '}
            <strong data-official-prose="">{'space'}</strong>
            {' between the columns, add the '}
            <code data-official-prose="">{'is-gapless'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'columns'}</code>
            {' container: '}
          </p>
        </div>
        <div data-official-example="columns-gap/gapless/001">
          <Canvas of={GaplessColumnsStory} />
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-gapless">\n  <div class="column">No gap</div>\n  <div class="column">No gap</div>\n  <div class="column">No gap</div>\n  <div class="column">No gap</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can combine it with the '}
            <code data-official-prose="">{'is-multiline'}</code>
            {' modifier:'}
          </p>
        </div>
        <div data-official-example="columns-gap/gapless/002">
          <Canvas of={GaplessMultilineColumnsStory} />
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-gapless is-multiline is-mobile">\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-half">is-half</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column">Auto</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'variable-gap'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Variable gap '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#variable-gap'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can specify a '}
            <strong data-official-prose="">{'custom column gap'}</strong>
            {' by appending one of '}
            <strong data-official-prose="">{'9 modifiers'}</strong>
            {' on the '}
            <code data-official-prose="">{'.columns'}</code>
            {' container. '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-0'}</code>
              {' will remove any gap (similar to '}
              <code data-official-prose="">{'is-gapless'}</code>
              {')'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-3'}</code>
              {' is the '}
              <strong data-official-prose="">{'default value'}</strong>
              {', equivalent to the '}
              <code data-official-prose="">{'0.75rem'}</code>
              {' value'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-8'}</code>
              {' is the maximum gap of '}
              <code data-official-prose="">{'2rem'}</code>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-8">\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
        <div data-official-example="columns-gap/variable-gap/001">
          <Canvas of={InteractiveGapSelectorStory} />
        </div>
        <h3
          data-official-prose=""
          id={'breakpoint-based-column-gaps'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Breakpoint based column gaps '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#breakpoint-based-column-gaps'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can define a column gap for each viewport size:'}
          </p>
          <p data-official-prose="">
            {" For example, here's how it looks with the following modifiers: "}
            <code data-official-prose="">
              {
                'is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd'
              }
            </code>
          </p>
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
        <div data-official-example="columns-gap/breakpoint-based-column-gaps/001">
          <Canvas of={GapsAtEachBreakpointStory} />
        </div>
        <div data-official-prose="" className={'message is-info'}>
          <p data-official-prose="" className={'message-body'}>
            {
              ' If you want to see the difference, resize your browser and see how the '
            }
            <strong data-official-prose="">{'columns gap'}</strong>
            {' varies. '}
          </p>
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultColumnGapDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p className={'bd-notification is-primary'}>Default gap</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Default gap</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Default gap</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Default gap</p>
        </Column>
      </Columns>
    </>
  )
}

function GaplessColumnsDemo() {
  return (
    <>
      <Columns gapless>
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

function GaplessMultilineColumnsDemo() {
  return (
    <>
      <Columns multiline displayFrom={'mobile'} gapless>
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

function InteractiveGapSelectorDemo() {
  const [gap1, setGap1] = useState(3 as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8)
  return (
    <>
      <div id={'klmn'} className={'bd-klmn'}>
        <div className={'bd-klmn-gaps'}>
          <strong className={'bd-klmn-label'}>
            {' '}
            Gap:{' '}
            <code
              id={'klmnValue'}
              className={'bd-klmn-value'}
              children={gap1 * 0.25 + 'rem'}
            />{' '}
          </strong>
          <a
            data-value={'0'}
            className={
              gap1 === 0 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 0}
            onMouseEnter={() => setGap1(0)}
            onFocus={() => setGap1(0)}
            onClick={() => setGap1(0)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(0)
              }
            }}
          >
            {' '}
            is-0{' '}
          </a>
          <a
            data-value={'1'}
            className={
              gap1 === 1 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 1}
            onMouseEnter={() => setGap1(1)}
            onFocus={() => setGap1(1)}
            onClick={() => setGap1(1)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(1)
              }
            }}
          >
            {' '}
            is-1{' '}
          </a>
          <a
            data-value={'2'}
            className={
              gap1 === 2 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 2}
            onMouseEnter={() => setGap1(2)}
            onFocus={() => setGap1(2)}
            onClick={() => setGap1(2)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(2)
              }
            }}
          >
            {' '}
            is-2{' '}
          </a>
          <a
            data-value={'3'}
            className={
              gap1 === 3 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 3}
            onMouseEnter={() => setGap1(3)}
            onFocus={() => setGap1(3)}
            onClick={() => setGap1(3)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(3)
              }
            }}
          >
            {' '}
            is-3{' '}
          </a>
          <a
            data-value={'4'}
            className={
              gap1 === 4 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 4}
            onMouseEnter={() => setGap1(4)}
            onFocus={() => setGap1(4)}
            onClick={() => setGap1(4)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(4)
              }
            }}
          >
            {' '}
            is-4{' '}
          </a>
          <a
            data-value={'5'}
            className={
              gap1 === 5 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 5}
            onMouseEnter={() => setGap1(5)}
            onFocus={() => setGap1(5)}
            onClick={() => setGap1(5)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(5)
              }
            }}
          >
            {' '}
            is-5{' '}
          </a>
          <a
            data-value={'6'}
            className={
              gap1 === 6 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 6}
            onMouseEnter={() => setGap1(6)}
            onFocus={() => setGap1(6)}
            onClick={() => setGap1(6)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(6)
              }
            }}
          >
            {' '}
            is-6{' '}
          </a>
          <a
            data-value={'7'}
            className={
              gap1 === 7 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 7}
            onMouseEnter={() => setGap1(7)}
            onFocus={() => setGap1(7)}
            onClick={() => setGap1(7)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(7)
              }
            }}
          >
            {' '}
            is-7{' '}
          </a>
          <a
            data-value={'8'}
            className={
              gap1 === 8 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'
            }
            role={'button'}
            tabIndex={0}
            aria-pressed={gap1 === 8}
            onMouseEnter={() => setGap1(8)}
            onFocus={() => setGap1(8)}
            onClick={() => setGap1(8)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setGap1(8)
              }
            }}
          >
            {' '}
            is-8{' '}
          </a>
        </div>
        <div className={'bd-klmn-lead'}>
          <Columns className={'rb-is-variable bd-klmn-columns'} gap={gap1}>
            <Column width={3}>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                Side
              </div>
            </Column>
            <Column width={9}>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                Main
              </div>
            </Column>
          </Columns>
          <Columns className={'rb-is-variable bd-klmn-columns'} gap={gap1}>
            <Column width={4}>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                Three columns
              </div>
            </Column>
            <Column width={4}>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                Three columns
              </div>
            </Column>
            <Column width={4}>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                Three columns
              </div>
            </Column>
          </Columns>
          <Columns className={'rb-is-variable bd-klmn-columns'} gap={gap1}>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                1
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                2
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                3
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                4
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                5
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                6
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                7
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                8
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                9
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                10
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                11
              </div>
            </Column>
            <Column>
              <div
                className={[
                  helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                12
              </div>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}

function GapsAtEachBreakpointDemo() {
  return (
    <>
      <Columns
        gap={{ mobile: 1, tablet: 0, desktop: 3, widescreen: 8, fullhd: 2 }}
      >
        <Column>
          <p className={'bd-notification is-primary'}>Column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Column</p>
        </Column>
        <Column>
          <p className={'bd-notification is-primary'}>Column</p>
        </Column>
      </Columns>
    </>
  )
}

export const DefaultColumnGapStory = {
  name: 'Default column gap',
  parameters: {
    official: { id: 'columns-gap/default-gap/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction DefaultColumnGapDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p className={'bd-notification is-primary'}>Default gap</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Default gap</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Default gap</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Default gap</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultColumnGapDemo,
} satisfies StoryObj

export const GaplessColumnsStory = {
  name: 'Gapless columns',
  parameters: {
    official: { id: 'columns-gap/gapless/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction GaplessColumnsDemo() {\n  return (\n    <>\n      <Columns gapless>\n        <Column>\n          <p className={'bd-notification is-primary'}>First column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Second column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Third column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Fourth column</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: GaplessColumnsDemo,
} satisfies StoryObj

export const GaplessMultilineColumnsStory = {
  name: 'Gapless multiline columns',
  parameters: {
    official: { id: 'columns-gap/gapless/002' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction GaplessMultilineColumnsDemo() {\n  return (\n    <>\n      <Columns multiline displayFrom={'mobile'} gapless>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'half'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-half'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: GaplessMultilineColumnsDemo,
} satisfies StoryObj

export const InteractiveGapSelectorStory = {
  name: 'Interactive gap selector',
  parameters: {
    official: { id: 'columns-gap/variable-gap/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction InteractiveGapSelectorDemo() {\n  const [gap1, setGap1] = useState(3 as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8)\n  return (\n    <>\n      <div id={'klmn'} className={'bd-klmn'}>\n        <div className={'bd-klmn-gaps'}>\n          <strong className={'bd-klmn-label'}>\n            {' '}\n            Gap:{' '}\n            <code\n              id={'klmnValue'}\n              className={'bd-klmn-value'}\n              children={gap1 * 0.25 + 'rem'}\n            />{' '}\n          </strong>\n          <a\n            data-value={'0'}\n            className={\n              gap1 === 0 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 0}\n            onMouseEnter={() => setGap1(0)}\n            onFocus={() => setGap1(0)}\n            onClick={() => setGap1(0)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(0)\n              }\n            }}\n          >\n            {' '}\n            is-0{' '}\n          </a>\n          <a\n            data-value={'1'}\n            className={\n              gap1 === 1 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 1}\n            onMouseEnter={() => setGap1(1)}\n            onFocus={() => setGap1(1)}\n            onClick={() => setGap1(1)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(1)\n              }\n            }}\n          >\n            {' '}\n            is-1{' '}\n          </a>\n          <a\n            data-value={'2'}\n            className={\n              gap1 === 2 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 2}\n            onMouseEnter={() => setGap1(2)}\n            onFocus={() => setGap1(2)}\n            onClick={() => setGap1(2)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(2)\n              }\n            }}\n          >\n            {' '}\n            is-2{' '}\n          </a>\n          <a\n            data-value={'3'}\n            className={\n              gap1 === 3 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 3}\n            onMouseEnter={() => setGap1(3)}\n            onFocus={() => setGap1(3)}\n            onClick={() => setGap1(3)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(3)\n              }\n            }}\n          >\n            {' '}\n            is-3{' '}\n          </a>\n          <a\n            data-value={'4'}\n            className={\n              gap1 === 4 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 4}\n            onMouseEnter={() => setGap1(4)}\n            onFocus={() => setGap1(4)}\n            onClick={() => setGap1(4)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(4)\n              }\n            }}\n          >\n            {' '}\n            is-4{' '}\n          </a>\n          <a\n            data-value={'5'}\n            className={\n              gap1 === 5 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 5}\n            onMouseEnter={() => setGap1(5)}\n            onFocus={() => setGap1(5)}\n            onClick={() => setGap1(5)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(5)\n              }\n            }}\n          >\n            {' '}\n            is-5{' '}\n          </a>\n          <a\n            data-value={'6'}\n            className={\n              gap1 === 6 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 6}\n            onMouseEnter={() => setGap1(6)}\n            onFocus={() => setGap1(6)}\n            onClick={() => setGap1(6)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(6)\n              }\n            }}\n          >\n            {' '}\n            is-6{' '}\n          </a>\n          <a\n            data-value={'7'}\n            className={\n              gap1 === 7 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 7}\n            onMouseEnter={() => setGap1(7)}\n            onFocus={() => setGap1(7)}\n            onClick={() => setGap1(7)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(7)\n              }\n            }}\n          >\n            {' '}\n            is-7{' '}\n          </a>\n          <a\n            data-value={'8'}\n            className={\n              gap1 === 8 ? 'bd-klmn-gap bd-is-selected' : 'bd-klmn-gap'\n            }\n            role={'button'}\n            tabIndex={0}\n            aria-pressed={gap1 === 8}\n            onMouseEnter={() => setGap1(8)}\n            onFocus={() => setGap1(8)}\n            onClick={() => setGap1(8)}\n            onKeyDown={(event) => {\n              if (event.key === 'Enter' || event.key === ' ') {\n                event.preventDefault()\n                setGap1(8)\n              }\n            }}\n          >\n            {' '}\n            is-8{' '}\n          </a>\n        </div>\n        <div className={'bd-klmn-lead'}>\n          <Columns className={'rb-is-variable bd-klmn-columns'} gap={gap1}>\n            <Column width={3}>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                Side\n              </div>\n            </Column>\n            <Column width={9}>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                Main\n              </div>\n            </Column>\n          </Columns>\n          <Columns className={'rb-is-variable bd-klmn-columns'} gap={gap1}>\n            <Column width={4}>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                Three columns\n              </div>\n            </Column>\n            <Column width={4}>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                Three columns\n              </div>\n            </Column>\n            <Column width={4}>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                Three columns\n              </div>\n            </Column>\n          </Columns>\n          <Columns className={'rb-is-variable bd-klmn-columns'} gap={gap1}>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                1\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                2\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                3\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                4\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                5\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                6\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                7\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                8\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                9\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                10\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                11\n              </div>\n            </Column>\n            <Column>\n              <div\n                className={[\n                  helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                12\n              </div>\n            </Column>\n          </Columns>\n        </div>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InteractiveGapSelectorDemo,
} satisfies StoryObj

export const GapsAtEachBreakpointStory = {
  name: 'Gaps at each breakpoint',
  parameters: {
    official: { id: 'columns-gap/breakpoint-based-column-gaps/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction GapsAtEachBreakpointDemo() {\n  return (\n    <>\n      <Columns\n        gap={{ mobile: 1, tablet: 0, desktop: 3, widescreen: 8, fullhd: 2 }}\n      >\n        <Column>\n          <p className={'bd-notification is-primary'}>Column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Column</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification is-primary'}>Column</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: GapsAtEachBreakpointDemo,
} satisfies StoryObj

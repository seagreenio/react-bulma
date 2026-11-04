import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Cell, FixedGrid } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'grid-fixed',
      title: 'Fixed Grid',
      url: 'https://bulma.io/documentation/grid/fixed-grid/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-grid-fixed',
  title: 'CSS Library/Grid/Fixed Grid',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="grid-fixed" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Fixed Grid'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A customizable 2D '}
          <strong data-official-prose="">{'fixed'}</strong>
          {' grid'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'If instead of having a minimum column width you want a '}
            <strong data-official-prose="">{'fixed'}</strong>
            {' number of columns, wrap your grid in a '}
            <code data-official-prose="">{'fixed-grid'}</code>
            {' container.'}
          </p>
          <p data-official-prose="">
            {'By default, this fixed grid has '}
            <strong data-official-prose="">{'2 columns'}</strong>
            {':'}
          </p>
        </div>
        <div data-official-example="grid-fixed/basic/001">
          <Canvas of={TwoColumnFixedGridStory} />
        </div>
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            <p data-official-prose="" className={'bd-snippet-title'}>
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
            </p>
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n    <div class="cell">Cell 7</div>\n    <div class="cell">Cell 8</div>\n    <div class="cell">Cell 9</div>\n    <div class="cell">Cell 10</div>\n    <div class="cell">Cell 11</div>\n    <div class="cell">Cell 12</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'applying-fixed-grid-modifiers'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Applying fixed grid modifiers '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#applying-fixed-grid-modifiers'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can change the '}
            <strong data-official-prose="">{'column count'}</strong>
            {' by adding the '}
            <code data-official-prose="">{'has-$n-cols'}</code>
            {' modifier class with a value ranging from '}
            <code data-official-prose="">{'1'}</code>
            {' to '}
            <code data-official-prose="">{'12'}</code>
            {':'}
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Class'}</th>
              <th data-official-prose="">{'Column Count'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-0-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'0'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'2'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'3'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'4'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'5'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'6'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'7'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'8'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'9'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'10'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'11'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'12'}</code>
              </td>
            </tr>
          </tbody>
        </table>
        <h3
          data-official-prose=""
          id={'container-breakpoints'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Container breakpoints '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#container-breakpoints'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can specify a different column count '}
            <strong data-official-prose="">{'per breakpoint'}</strong>
            {':'}
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="" rowSpan={2}>
                {'Column Count'}
              </th>
              <th data-official-prose="">{'Mobile'}</th>
              <th data-official-prose="">{'Tablet'}</th>
              <th data-official-prose="">{'Desktop'}</th>
              <th data-official-prose="">{'Widescreen'}</th>
              <th data-official-prose="">{'Full HD'}</th>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                {'Until '}
                <code data-official-prose="">{'768px'}</code>
              </td>
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'769px'}</code>
              </td>
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'1024px'}</code>
              </td>
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'1216px'}</code>
              </td>
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'1408px'}</code>
              </td>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'1'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'2'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'3'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'4'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'5'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'6'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'7'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'8'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'9'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'10'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'11'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-fullhd'}</code>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="">{'12'}</th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-mobile'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-tablet'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-desktop'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-widescreen'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-fullhd'}</code>
              </td>
            </tr>
          </tbody>
        </table>
        <h3
          data-official-prose=""
          id={'auto-count-fixed-grid'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Auto Count Fixed Grid '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#auto-count-fixed-grid'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'By adding the '}
            <code data-official-prose="">{'has-auto-count'}</code>
            {' modifier, the fixed grid will '}
            <strong data-official-prose="">{'automatically'}</strong>
            {' change its count for each '}
            <strong data-official-prose="">{'breakpoint'}</strong>
            {':'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">{'2 on mobile'}</li>
            <li data-official-prose="">{'4 on tablet'}</li>
            <li data-official-prose="">{'8 on desktop'}</li>
            <li data-official-prose="">{'12 on widescreen'}</li>
            <li data-official-prose="">{'16 on fullhd'}</li>
          </ul>
        </div>
        <div data-official-example="grid-fixed/auto-count-fixed-grid/001">
          <Canvas of={AutomaticColumnCountStory} />
        </div>
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            <p data-official-prose="" className={'bd-snippet-title'}>
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
            </p>
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid has-auto-count">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n    <div class="cell">Cell 7</div>\n    <div class="cell">Cell 8</div>\n    <div class="cell">Cell 9</div>\n    <div class="cell">Cell 10</div>\n    <div class="cell">Cell 11</div>\n    <div class="cell">Cell 12</div>\n    <div class="cell">Cell 13</div>\n    <div class="cell">Cell 14</div>\n    <div class="cell">Cell 15</div>\n    <div class="cell">Cell 16</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function TwoColumnFixedGridDemo() {
  return (
    <>
      <FixedGrid>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 1
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 6
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 7
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 8
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 9
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 10
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 11
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 12
        </Cell>
      </FixedGrid>
    </>
  )
}

function AutomaticColumnCountDemo() {
  return (
    <>
      <FixedGrid columns={'auto'}>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 1
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 6
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 7
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 8
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 9
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 10
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 11
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 12
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 13
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 14
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 15
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 16
        </Cell>
      </FixedGrid>
    </>
  )
}

export const TwoColumnFixedGridStory = {
  name: 'Two-column fixed grid',
  parameters: {
    official: { id: 'grid-fixed/basic/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction TwoColumnFixedGridDemo() {\n  return (\n    <>\n      <FixedGrid>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 6\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 7\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 8\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 9\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 10\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 11\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 12\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TwoColumnFixedGridDemo,
} satisfies StoryObj

export const AutomaticColumnCountStory = {
  name: 'Automatic column count',
  parameters: {
    official: { id: 'grid-fixed/auto-count-fixed-grid/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction AutomaticColumnCountDemo() {\n  return (\n    <>\n      <FixedGrid columns={'auto'}>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 6\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 7\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 8\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 9\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 10\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 11\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 12\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 13\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 14\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 15\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 16\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: AutomaticColumnCountDemo,
} satisfies StoryObj

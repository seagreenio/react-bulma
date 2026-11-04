import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Cell, FixedGrid } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'grid-cells',
      title: 'Grid Cells',
      url: 'https://bulma.io/documentation/grid/grid-cells/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-grid-cells',
  title: 'CSS Library/Grid/Grid Cells',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="grid-cells" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Grid Cells'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Adjust the width and height of each '}
          <strong data-official-prose="">{'individual cell'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Each Bulma grid is comprised of several '}
            <strong data-official-prose="">{'cells'}</strong>
            {
              '. You can adjust the width and height of each of these cells individually, and for each separate breakpoint.'
            }
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Description'}</th>
              <th data-official-prose="">{'Class'}</th>
              <th data-official-prose="">{'Example'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">
                {'Which column the cell '}
                <strong data-official-prose="">{'starts'}</strong>
                {' at'}
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-start'}</code>
              </td>
              <td
                data-official-prose=""
                className={'p-0'}
                style={{ '--hl-radius': '0' } as React.CSSProperties}
              >
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {'<div class="is-col-start-2"></div>'}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                {'Which column the cell '}
                <strong data-official-prose="">{'ends'}</strong>
                {' at, counting '}
                <em data-official-prose="">{'from the end'}</em>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-from-end'}</code>
              </td>
              <td
                data-official-prose=""
                className={'p-0'}
                style={{ '--hl-radius': '0' } as React.CSSProperties}
              >
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {'<div class="is-col-from-end-1"></div>'}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <strong data-official-prose="">{'How many columns'}</strong>
                {' the cell will span'}
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-span'}</code>
              </td>
              <td
                data-official-prose=""
                className={'p-0'}
                style={{ '--hl-radius': '0' } as React.CSSProperties}
              >
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {'<div class="is-col-span-3"></div>'}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                {'Which row the cell '}
                <strong data-official-prose="">{'starts'}</strong>
                {' at'}
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-start'}</code>
              </td>
              <td
                data-official-prose=""
                className={'p-0'}
                style={{ '--hl-radius': '0' } as React.CSSProperties}
              >
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {'<div class="is-row-start-2"></div>'}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                {'Which row the cell '}
                <strong data-official-prose="">{'ends'}</strong>
                {' at, counting '}
                <em data-official-prose="">{'from the end'}</em>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-from-end'}</code>
              </td>
              <td
                data-official-prose=""
                className={'p-0'}
                style={{ '--hl-radius': '0' } as React.CSSProperties}
              >
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {'<div class="is-row-from-end-1"></div>'}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <strong data-official-prose="">{'How many rows'}</strong>
                {' the cell will span'}
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-span'}</code>
              </td>
              <td
                data-official-prose=""
                className={'p-0'}
                style={{ '--hl-radius': '0' } as React.CSSProperties}
              >
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {'<div class="is-row-span-3"></div>'}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <h3
          data-official-prose=""
          id={'column-start'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Column Start '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#column-start'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Change which column a cell starts at.'}
          </p>
        </div>
        <div data-official-example="grid-cells/column-start/001">
          <Canvas of={ColumnStartPositionStory} />
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
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-col-start-3">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'column-from-end'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Column From End '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#column-from-end'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Change which column a cell ends at, counting from the end.'}
          </p>
        </div>
        <div data-official-example="grid-cells/column-from-end/001">
          <Canvas of={ColumnEndPositionStory} />
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
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-col-from-end-2">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'column-span'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Column Span '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#column-span'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Change how many columns a cell spans.'}
          </p>
        </div>
        <div data-official-example="grid-cells/column-span/001">
          <Canvas of={ColumnSpanStory} />
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
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-col-span-2">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'row-start'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Row Start '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#row-start'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">{'Change which row a cell starts at.'}</p>
        </div>
        <div data-official-example="grid-cells/row-start/001">
          <Canvas of={RowStartPositionStory} />
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
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-row-start-3">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'row-from-end'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Row From End '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#row-from-end'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Change which row a cell ends at, counting from the end.'}
          </p>
        </div>
        <div data-official-example="grid-cells/row-from-end/001">
          <Canvas of={RowEndPositionStory} />
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
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-row-from-end-1">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'row-span'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Row Span '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#row-span'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">{'Change how many rows a cell spans.'}</p>
        </div>
        <div data-official-example="grid-cells/row-span/001">
          <Canvas of={RowSpanStory} />
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
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-row-span-2">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
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

function ColumnStartPositionDemo() {
  return (
    <>
      <FixedGrid columns={4}>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 1
        </Cell>
        <Cell
          columnStart={3}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 6
        </Cell>
      </FixedGrid>
    </>
  )
}

function ColumnEndPositionDemo() {
  return (
    <>
      <FixedGrid columns={4}>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 1
        </Cell>
        <Cell
          columnFromEnd={2}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 6
        </Cell>
      </FixedGrid>
    </>
  )
}

function ColumnSpanDemo() {
  return (
    <>
      <FixedGrid columns={4}>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 1
        </Cell>
        <Cell
          columnSpan={2}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 6
        </Cell>
      </FixedGrid>
    </>
  )
}

function RowStartPositionDemo() {
  return (
    <>
      <FixedGrid columns={4}>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 1
        </Cell>
        <Cell
          rowStart={3}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 6
        </Cell>
      </FixedGrid>
    </>
  )
}

function RowEndPositionDemo() {
  return (
    <>
      <FixedGrid columns={4}>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 1
        </Cell>
        <Cell
          rowFromEnd={1}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 6
        </Cell>
      </FixedGrid>
    </>
  )
}

function RowSpanDemo() {
  return (
    <>
      <FixedGrid columns={4}>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 1
        </Cell>
        <Cell
          rowSpan={2}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          Cell 2
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 3
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 4
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 5
        </Cell>
        <Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          Cell 6
        </Cell>
      </FixedGrid>
    </>
  )
}

export const ColumnStartPositionStory = {
  name: 'Column start position',
  parameters: {
    official: { id: 'grid-cells/column-start/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction ColumnStartPositionDemo() {\n  return (\n    <>\n      <FixedGrid columns={4}>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          columnStart={3}\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 6\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColumnStartPositionDemo,
} satisfies StoryObj

export const ColumnEndPositionStory = {
  name: 'Column end position',
  parameters: {
    official: { id: 'grid-cells/column-from-end/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction ColumnEndPositionDemo() {\n  return (\n    <>\n      <FixedGrid columns={4}>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          columnFromEnd={2}\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 6\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColumnEndPositionDemo,
} satisfies StoryObj

export const ColumnSpanStory = {
  name: 'Column span',
  parameters: {
    official: { id: 'grid-cells/column-span/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction ColumnSpanDemo() {\n  return (\n    <>\n      <FixedGrid columns={4}>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          columnSpan={2}\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 6\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColumnSpanDemo,
} satisfies StoryObj

export const RowStartPositionStory = {
  name: 'Row start position',
  parameters: {
    official: { id: 'grid-cells/row-start/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction RowStartPositionDemo() {\n  return (\n    <>\n      <FixedGrid columns={4}>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          rowStart={3}\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 6\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RowStartPositionDemo,
} satisfies StoryObj

export const RowEndPositionStory = {
  name: 'Row end position',
  parameters: {
    official: { id: 'grid-cells/row-from-end/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction RowEndPositionDemo() {\n  return (\n    <>\n      <FixedGrid columns={4}>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          rowFromEnd={1}\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 6\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RowEndPositionDemo,
} satisfies StoryObj

export const RowSpanStory = {
  name: 'Row span',
  parameters: {
    official: { id: 'grid-cells/row-span/001' },
    docs: {
      source: {
        code: "import { Cell, FixedGrid } from '@seagreenio/react-bulma'\n\nfunction RowSpanDemo() {\n  return (\n    <>\n      <FixedGrid columns={4}>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 1\n        </Cell>\n        <Cell\n          rowSpan={2}\n          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}\n          className={'rb-has-text-primary-invert rb-has-radius-normal'}\n        >\n          Cell 2\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 3\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 4\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 5\n        </Cell>\n        <Cell\n          helpers={{ py: 3, px: 4 }}\n          className={\n            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'\n          }\n        >\n          Cell 6\n        </Cell>\n      </FixedGrid>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RowSpanDemo,
} satisfies StoryObj

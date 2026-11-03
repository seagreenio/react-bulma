import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

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
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Grid Cells'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Adjust the width and height of each '}
          <strong data-official-prose="">{'individual cell'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Each Bulma grid is comprised of several '}
            <strong data-official-prose="">{'cells'}</strong>
            {
              '. You can adjust the width and height of each of these cells individually, and for each separate breakpoint.'
            }
          </p>
          {'\n\n'}
        </div>
        {'\n\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <thead data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Description'}</th>
              {'\n      '}
              <th data-official-prose="">{'Class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Example'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'Which column the cell '}
                <strong data-official-prose="">{'starts'}</strong>
                {' at'}
              </td>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-start'}</code>
              </td>
              {'\n      '}
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
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'Which column the cell '}
                <strong data-official-prose="">{'ends'}</strong>
                {' at, counting '}
                <em data-official-prose="">{'from the end'}</em>
              </td>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-from-end'}</code>
              </td>
              {'\n      '}
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
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <strong data-official-prose="">{'How many columns'}</strong>
                {' the cell will span'}
              </td>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-span'}</code>
              </td>
              {'\n      '}
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
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'Which row the cell '}
                <strong data-official-prose="">{'starts'}</strong>
                {' at'}
              </td>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-start'}</code>
              </td>
              {'\n      '}
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
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'Which row the cell '}
                <strong data-official-prose="">{'ends'}</strong>
                {' at, counting '}
                <em data-official-prose="">{'from the end'}</em>
              </td>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-from-end'}</code>
              </td>
              {'\n      '}
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
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <strong data-official-prose="">{'How many rows'}</strong>
                {' the cell will span'}
              </td>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-span'}</code>
              </td>
              {'\n      '}
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
              {'\n    '}
            </tr>
            {'\n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'column-start'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Column Start\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#column-start'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Change which column a cell starts at.'}
          </p>
          {'\n\n'}
        </div>
        {'\n\n\n\n'}
        <div data-official-example="grid-cells/column-start/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n\n'}
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          {'\n  \n\n  '}
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            {'\n    '}
            <p data-official-prose="" className={'bd-snippet-title'}>
              {'\n      '}
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
              {'\n    '}
            </p>
            {'\n\n    '}
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-col-start-3">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'column-from-end'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Column From End\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#column-from-end'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Change which column a cell ends at, counting from the end.'}
          </p>
          {'\n\n'}
        </div>
        {'\n\n\n\n'}
        <div data-official-example="grid-cells/column-from-end/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n\n'}
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          {'\n  \n\n  '}
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            {'\n    '}
            <p data-official-prose="" className={'bd-snippet-title'}>
              {'\n      '}
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
              {'\n    '}
            </p>
            {'\n\n    '}
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-col-from-end-2">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'column-span'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Column Span\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#column-span'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Change how many columns a cell spans.'}
          </p>
          {'\n\n'}
        </div>
        {'\n\n\n\n'}
        <div data-official-example="grid-cells/column-span/001">
          <Canvas of={Example003} />
        </div>
        {'\n\n\n'}
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          {'\n  \n\n  '}
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            {'\n    '}
            <p data-official-prose="" className={'bd-snippet-title'}>
              {'\n      '}
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
              {'\n    '}
            </p>
            {'\n\n    '}
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-col-span-2">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'row-start'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Row Start\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#row-start'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">{'Change which row a cell starts at.'}</p>
          {'\n\n'}
        </div>
        {'\n\n\n\n'}
        <div data-official-example="grid-cells/row-start/001">
          <Canvas of={Example004} />
        </div>
        {'\n\n\n'}
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          {'\n  \n\n  '}
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            {'\n    '}
            <p data-official-prose="" className={'bd-snippet-title'}>
              {'\n      '}
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
              {'\n    '}
            </p>
            {'\n\n    '}
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-row-start-3">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'row-from-end'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Row From End\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#row-from-end'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Change which row a cell ends at, counting from the end.'}
          </p>
          {'\n\n'}
        </div>
        {'\n\n\n\n'}
        <div data-official-example="grid-cells/row-from-end/001">
          <Canvas of={Example005} />
        </div>
        {'\n\n\n'}
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          {'\n  \n\n  '}
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            {'\n    '}
            <p data-official-prose="" className={'bd-snippet-title'}>
              {'\n      '}
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
              {'\n    '}
            </p>
            {'\n\n    '}
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-row-from-end-1">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'row-span'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Row Span\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#row-span'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">{'Change how many rows a cell spans.'}</p>
          {'\n\n'}
        </div>
        {'\n\n\n\n'}
        <div data-official-example="grid-cells/row-span/001">
          <Canvas of={Example006} />
        </div>
        {'\n\n\n'}
        <div
          data-official-prose=""
          className={
            '\n    bd-snippet\n    bd-is-horizontal\n    bd-is-fullwidth\n    \n    bd-is-size-5\n  '
          }
        >
          {'\n  \n\n  '}
          <div
            data-official-prose=""
            className={'bd-snippet-source bd-theme-html'}
          >
            {'\n    '}
            <p data-official-prose="" className={'bd-snippet-title'}>
              {'\n      '}
              <span
                data-official-prose=""
                className={'bd-snippet-tag bd-is-html'}
              >
                {'HTML'}
              </span>
              {'\n    '}
            </p>
            {'\n\n    '}
            <div
              data-official-prose=""
              className={
                '\n        bd-snippet-code\n        bd-highlight-full\n        bd-is-more bd-is-more-clipped\n      '
              }
            >
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="fixed-grid has-4-cols">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell is-row-span-2">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.FixedGrid columns={4}>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 1'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          columnStart={3}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 2'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 3'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 4'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 5'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 6'}
        </ui.Cell>
        {'\n  '}
      </ui.FixedGrid>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.FixedGrid columns={4}>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 1'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          columnFromEnd={2}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 2'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 3'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 4'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 5'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 6'}
        </ui.Cell>
        {'\n  '}
      </ui.FixedGrid>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.FixedGrid columns={4}>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 1'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          columnSpan={2}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 2'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 3'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 4'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 5'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 6'}
        </ui.Cell>
        {'\n  '}
      </ui.FixedGrid>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.FixedGrid columns={4}>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 1'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          rowStart={3}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 2'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 3'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 4'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 5'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 6'}
        </ui.Cell>
        {'\n  '}
      </ui.FixedGrid>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.FixedGrid columns={4}>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 1'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          rowFromEnd={1}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 2'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 3'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 4'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 5'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 6'}
        </ui.Cell>
        {'\n  '}
      </ui.FixedGrid>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.FixedGrid columns={4}>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 1'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          rowSpan={2}
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 2'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 3'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 4'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 5'}
        </ui.Cell>
        {'\n    '}
        <ui.Cell
          helpers={{ py: 3, px: 4 }}
          className={
            'rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal'
          }
        >
          {'Cell 6'}
        </ui.Cell>
        {'\n  '}
      </ui.FixedGrid>
    </>
  )
}

export const Example001 = {
  name: 'column start 01',
  parameters: {
    official: { id: 'grid-cells/column-start/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<><ui.FixedGrid columns={4}>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 1"}</ui.Cell>{"\\n    "}<ui.Cell columnStart={3} helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 2"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 3"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 4"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 5"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 6"}</ui.Cell>{"\\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'column from end 01',
  parameters: {
    official: { id: 'grid-cells/column-from-end/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<><ui.FixedGrid columns={4}>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 1"}</ui.Cell>{"\\n    "}<ui.Cell columnFromEnd={2} helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 2"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 3"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 4"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 5"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 6"}</ui.Cell>{"\\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'column span 01',
  parameters: {
    official: { id: 'grid-cells/column-span/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<><ui.FixedGrid columns={4}>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 1"}</ui.Cell>{"\\n    "}<ui.Cell columnSpan={2} helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 2"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 3"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 4"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 5"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 6"}</ui.Cell>{"\\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'row start 01',
  parameters: {
    official: { id: 'grid-cells/row-start/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<><ui.FixedGrid columns={4}>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 1"}</ui.Cell>{"\\n    "}<ui.Cell rowStart={3} helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 2"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 3"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 4"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 5"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 6"}</ui.Cell>{"\\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'row from end 01',
  parameters: {
    official: { id: 'grid-cells/row-from-end/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  return (<><ui.FixedGrid columns={4}>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 1"}</ui.Cell>{"\\n    "}<ui.Cell rowFromEnd={1} helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 2"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 3"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 4"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 5"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 6"}</ui.Cell>{"\\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'row span 01',
  parameters: {
    official: { id: 'grid-cells/row-span/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  return (<><ui.FixedGrid columns={4}>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 1"}</ui.Cell>{"\\n    "}<ui.Cell rowSpan={2} helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 2"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 3"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 4"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 5"}</ui.Cell>{"\\n    "}<ui.Cell helpers={{"py":3,"px":4}} className={"rb-has-background-primary-light rb-has-text-primary-light-invert rb-has-radius-normal"}>{"Cell 6"}</ui.Cell>{"\\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

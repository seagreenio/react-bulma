import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from '@storybook/addon-docs/blocks';
import { OfficialDocument } from '../document';
import { createBulma } from '../../../src';
import { officialPage } from '../support';

const ui = createBulma();

const meta = {
  ...officialPage(
    {
      id: 'grid-smart',
      title: 'Smart Grid',
      url: 'https://bulma.io/documentation/grid/smart-grid/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-grid-smart',
  title: 'CSS Library/Grid/Smart Grid',
} satisfies Meta;
export default meta;

function OfficialDocs() {
  return (
    <OfficialDocument pageId="grid-smart" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Smart Grid'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A '}
          <strong data-official-prose="">{'smart'}</strong>
          {' 2D grid with '}
          <strong data-official-prose="">{'flexible'}</strong>
          {' columns'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Bulma v1 comes with a new '}
            <strong data-official-prose="">{'Smart Grid'}</strong>
            {'. This grid is a 2 dimensional layout component that features '}
            <strong data-official-prose="">{'flexible columns'}</strong>
            {': Bulma will '}
            <em data-official-prose="">{'fit'}</em>
            {
              ' as many columns as possible, given a minimum column width and a column and row gap.'
            }
          </p>
          {'\n'}
          <p data-official-prose="">{'By default, the Smart Grid has:'}</p>
          {'\n'}
          <ul data-official-prose="">
            {'\n'}
            <li data-official-prose="">
              {'a minimum column width of '}
              <code data-official-prose="">{'9rem'}</code>
            </li>
            {'\n'}
            <li data-official-prose="">
              {'a gap of '}
              <code data-official-prose="">{'0.75rem'}</code>
            </li>
            {'\n'}
          </ul>
          {'\n\n'}
        </div>
        {'\n\n\n\n\n\n\n\n'}
        <div data-official-example="grid-smart/basic/001">
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
                      '\n<div class="grid">\n  <div class="cell">Cell 1</div>\n  <div class="cell">Cell 2</div>\n  <div class="cell">Cell 3</div>\n  <div class="cell">Cell 4</div>\n  <div class="cell">Cell 5</div>\n  <div class="cell">Cell 6</div>\n  <div class="cell">Cell 7</div>\n  <div class="cell">Cell 8</div>\n  <div class="cell">Cell 9</div>\n  <div class="cell">Cell 10</div>\n  <div class="cell">Cell 11</div>\n  <div class="cell">Cell 12</div>\n  <div class="cell">Cell 13</div>\n  <div class="cell">Cell 14</div>\n  <div class="cell">Cell 15</div>\n  <div class="cell">Cell 16</div>\n  <div class="cell">Cell 17</div>\n  <div class="cell">Cell 18</div>\n  <div class="cell">Cell 19</div>\n  <div class="cell">Cell 20</div>\n  <div class="cell">Cell 21</div>\n  <div class="cell">Cell 22</div>\n  <div class="cell">Cell 23</div>\n  <div class="cell">Cell 24</div>\n</div>\n'
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
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'smart-grid-modifiers'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Smart Grid modifiers\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#smart-grid-modifiers'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can change the minimum column width by increments of '}
            <code data-official-prose="">{'1.5rem'}</code>
            {', by adding the '}
            <code data-official-prose="">{'is-col-min'}</code>
            {' modifier class with a value ranging from '}
            <code data-official-prose="">{'0'}</code>
            {' to '}
            <code data-official-prose="">{'32'}</code>
            {':'}
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
              <th data-official-prose="">{'Class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Value'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-1'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'1.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-2'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'3rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-3'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'4.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-4'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'6rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-5'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'7.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-6'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'9rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-7'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'10.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-8'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'12rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-9'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'13.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-10'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'15rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-11'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'16.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-12'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'18rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-13'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'19.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-14'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'21rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-15'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'22.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-16'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'24rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-17'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'25.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-18'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'27rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-19'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'28.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-20'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'30rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-21'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'31.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-22'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'33rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-23'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'34.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-24'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'36rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-25'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'37.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-26'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'39rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-27'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'40.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-28'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'42rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-29'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'43.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-30'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'45rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-31'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'46.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-col-min-32'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'48rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can also change the '}
            <code data-official-prose="">{'gap'}</code>
            {', '}
            <code data-official-prose="">{'column-gap'}</code>
            {' and/or '}
            <code data-official-prose="">{'row-gap'}</code>
            {' by increments of '}
            <code data-official-prose="">{'0.5rem'}</code>
            {':'}
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
              <th data-official-prose="">{'Gap Class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Column Gap'}</th>
              {'\n      '}
              <th data-official-prose="">{'Row Gap'}</th>
              {'\n      '}
              <th data-official-prose="">{'Value'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-0'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-0'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-0'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'0rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-1'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-1'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-1'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'0.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-2'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-2'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-2'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'1rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-3'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-3'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-3'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'1.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-4'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-4'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-4'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'2rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-5'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-5'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-5'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'2.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-6'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-6'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-6'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'3rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-7'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-7'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-7'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'3.5rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-gap-8'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-column-gap-8'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-row-gap-8'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'4rem'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n\n\n\n'}
      </div>
    </OfficialDocument>
  );
}

function Example001Demo() {
  return (
    <>
      <ui.SmartGrid>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 1'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 2'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 3'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 4'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 5'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 6'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 7'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 8'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 9'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 10'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 11'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 12'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 13'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 14'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 15'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 16'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 17'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 18'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 19'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 20'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 21'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 22'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 23'}
        </ui.Cell>
        {'\n  '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'Cell 24'}
        </ui.Cell>
        {'\n  \n'}
      </ui.SmartGrid>
    </>
  );
}

export const Example001 = {
  name: 'Smart Grid 01',
  parameters: {
    official: { id: 'grid-smart/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<><ui.SmartGrid>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 1"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 2"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 3"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 4"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 5"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 6"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 7"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 8"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 9"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 10"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 11"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 12"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 13"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 14"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 15"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 16"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 17"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 18"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 19"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 20"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 21"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 22"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 23"}</ui.Cell>{"\\n  "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"Cell 24"}</ui.Cell>{"\\n  \\n"}</ui.SmartGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj;

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
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
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Fixed Grid'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A customizable 2D '}
          <strong data-official-prose="">{'fixed'}</strong>
          {' grid'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'If instead of having a minimum column width you want a '}
            <strong data-official-prose="">{'fixed'}</strong>
            {' number of columns, wrap your grid in a '}
            <code data-official-prose="">{'fixed-grid'}</code>
            {' container.'}
          </p>
          {'\n'}
          <p data-official-prose="">
            {'By default, this fixed grid has '}
            <strong data-official-prose="">{'2 columns'}</strong>
            {':'}
          </p>
          {'\n\n'}
        </div>
        {'\n\n\n\n\n\n\n\n'}
        <div data-official-example="grid-fixed/basic/001">
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
                      '\n<div class="fixed-grid">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n    <div class="cell">Cell 7</div>\n    <div class="cell">Cell 8</div>\n    <div class="cell">Cell 9</div>\n    <div class="cell">Cell 10</div>\n    <div class="cell">Cell 11</div>\n    <div class="cell">Cell 12</div>\n  </div>\n</div>\n'
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
          id={'applying-fixed-grid-modifiers'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Applying fixed grid modifiers\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#applying-fixed-grid-modifiers'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
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
              <th data-official-prose="">{'Column Count'}</th>
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
                <code data-official-prose="">{'has-0-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'0'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'1'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'2'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'3'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'4'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'5'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'6'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'7'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'8'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'9'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'10'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'11'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols'}</code>
              </td>
              {'\n        '}
              <td data-official-prose="">
                <code data-official-prose="">{'12'}</code>
              </td>
              {'\n      '}
            </tr>
            {'\n    \n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'container-breakpoints'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Container breakpoints\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#container-breakpoints'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can specify a different column count '}
            <strong data-official-prose="">{'per breakpoint'}</strong>
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
              <th data-official-prose="" rowSpan={2}>
                {'Column Count'}
              </th>
              {'\n      '}
              <th data-official-prose="">{'Mobile'}</th>
              {'\n      '}
              <th data-official-prose="">{'Tablet'}</th>
              {'\n      '}
              <th data-official-prose="">{'Desktop'}</th>
              {'\n      '}
              <th data-official-prose="">{'Widescreen'}</th>
              {'\n      '}
              <th data-official-prose="">{'Full HD'}</th>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'Until '}
                <code data-official-prose="">{'768px'}</code>
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'769px'}</code>
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'1024px'}</code>
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'1216px'}</code>
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'From '}
                <code data-official-prose="">{'1408px'}</code>
              </td>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'1'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-1-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'2'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-2-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'3'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-3-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'4'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-4-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'5'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-5-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'6'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-6-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'7'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-7-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'8'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-8-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'9'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-9-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'10'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-10-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'11'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-11-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <th data-official-prose="">{'12'}</th>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-mobile'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-tablet'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-desktop'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-widescreen'}</code>
              </td>
              {'\n        \n          '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-12-cols-fullhd'}</code>
              </td>
              {'\n        \n      '}
            </tr>
            {'\n    \n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'auto-count-fixed-grid'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Auto Count Fixed Grid\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#auto-count-fixed-grid'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'By adding the '}
            <code data-official-prose="">{'has-auto-count'}</code>
            {' modifier, the fixed grid will '}
            <strong data-official-prose="">{'automatically'}</strong>
            {' change its count for each '}
            <strong data-official-prose="">{'breakpoint'}</strong>
            {':'}
          </p>
          {'\n'}
          <ul data-official-prose="">
            {'\n'}
            <li data-official-prose="">{'2 on mobile'}</li>
            {'\n'}
            <li data-official-prose="">{'4 on tablet'}</li>
            {'\n'}
            <li data-official-prose="">{'8 on desktop'}</li>
            {'\n'}
            <li data-official-prose="">{'12 on widescreen'}</li>
            {'\n'}
            <li data-official-prose="">{'16 on fullhd'}</li>
            {'\n'}
          </ul>
          {'\n\n'}
        </div>
        {'\n\n\n\n\n\n\n\n'}
        <div data-official-example="grid-fixed/auto-count-fixed-grid/001">
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
                      '\n<div class="fixed-grid has-auto-count">\n  <div class="grid">\n    <div class="cell">Cell 1</div>\n    <div class="cell">Cell 2</div>\n    <div class="cell">Cell 3</div>\n    <div class="cell">Cell 4</div>\n    <div class="cell">Cell 5</div>\n    <div class="cell">Cell 6</div>\n    <div class="cell">Cell 7</div>\n    <div class="cell">Cell 8</div>\n    <div class="cell">Cell 9</div>\n    <div class="cell">Cell 10</div>\n    <div class="cell">Cell 11</div>\n    <div class="cell">Cell 12</div>\n    <div class="cell">Cell 13</div>\n    <div class="cell">Cell 14</div>\n    <div class="cell">Cell 15</div>\n    <div class="cell">Cell 16</div>\n  </div>\n</div>\n'
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
        {'\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.FixedGrid>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 1\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 2\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 3\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 4\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 5\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 6\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 7\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 8\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 9\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 10\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 11\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 12\n      '}
        </ui.Cell>
        {'\n    \n  '}
      </ui.FixedGrid>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.FixedGrid columns={'auto'}>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 1\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 2\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 3\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 4\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 5\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 6\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 7\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 8\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 9\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 10\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 11\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 12\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 13\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 14\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 15\n      '}
        </ui.Cell>
        {'\n    \n      '}
        <ui.Cell
          helpers={{ py: 3, px: 4, backgroundColor: 'primary' }}
          className={'rb-has-text-primary-invert rb-has-radius-normal'}
        >
          {'\n        Cell 16\n      '}
        </ui.Cell>
        {'\n    \n  '}
      </ui.FixedGrid>
    </>
  )
}

export const Example001 = {
  name: 'Two-column fixed grid',
  parameters: {
    official: { id: 'grid-fixed/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<><ui.FixedGrid>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 1\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 2\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 3\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 4\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 5\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 6\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 7\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 8\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 9\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 10\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 11\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 12\\n      "}</ui.Cell>{"\\n    \\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Automatic column count',
  parameters: {
    official: { id: 'grid-fixed/auto-count-fixed-grid/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<><ui.FixedGrid columns={"auto"}>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 1\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 2\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 3\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 4\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 5\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 6\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 7\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 8\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 9\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 10\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 11\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 12\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 13\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 14\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 15\\n      "}</ui.Cell>{"\\n    \\n      "}<ui.Cell helpers={{"py":3,"px":4,"backgroundColor":"primary"}} className={"rb-has-text-primary-invert rb-has-radius-normal"}>{"\\n        Cell 16\\n      "}</ui.Cell>{"\\n    \\n  "}</ui.FixedGrid></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

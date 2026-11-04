import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-pagination',
      title: 'Pagination',
      url: 'https://bulma.io/documentation/components/pagination/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-pagination',
  title: 'CSS Library/Components/Pagination',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-pagination" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Pagination'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A responsive, usable, and flexible '}
          <strong data-official-prose="">{'pagination'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The pagination component consists of several elements:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'pagination-previous'}</code>
              {' and '}
              <code data-official-prose="">{'pagination-next'}</code>
              {' for incremental navigation'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'pagination-list'}</code>
              {' which displays page items:\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'pagination-link'}</code>
                  {' for the page numbers'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'pagination-ellipsis'}</code>
                  {' for range separators'}
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {
              'All elements are optional so you can compose your pagination as you wish.'
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              'You can disable some links if they are not active, or change the amount of page numbers available.'
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    By default on '}
            <strong data-official-prose="">{'tablet'}</strong>
            {
              ', the list is located on the left, and the previous/next buttons on the right.\n    But you can change the '
            }
            <strong data-official-prose="">{'order'}</strong>
            {' of these elements by using the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' and\n    '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifiers.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/basic/003">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/basic/004">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'styles'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Styles\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#styles'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <p data-official-prose="" className={'content'}>
          {'Add the '}
          <code data-official-prose="">{'is-rounded'}</code>
          {' modifier to have rounded pagination items.'}
        </p>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/styles/001">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Sizes\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sizes'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <p data-official-prose="" className={'content'}>
          {'\n  The pagination comes in '}
          <strong data-official-prose="">{'3 additional sizes'}</strong>
          {'.'}
          <br data-official-prose="" />
          {'\n  You only need to append the '}
          <strong data-official-prose="">{'modifier'}</strong>{' '}
          <code data-official-prose="">{'is-small'}</code>
          {', '}
          <code data-official-prose="">{'is-medium'}</code>
          {', or\n  '}
          <code data-official-prose="">{'is-large'}</code>
          {' to the '}
          <code data-official-prose="">{'pagination'}</code>
          {' component.\n'}
        </p>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/sizes/001">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/sizes/002">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-pagination/sizes/003">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n\n\n\n\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'sass-and-css-variables'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Sass and CSS variables\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sass-and-css-variables'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n'}
        <div
          data-official-prose=""
          className={'bd-vars-table block table-container'}
        >
          {'\n  '}
          <table data-official-prose="">
            {'\n    '}
            <thead data-official-prose="">
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <th data-official-prose="">
                  {'\n          '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n            '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-sass'}
                    >
                      <i data-official-prose="" className={'fab fa-sass'}></i>
                    </span>
                    {'\n            '}
                    <span data-official-prose="">{'Sass Variable'}</span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </th>
                {'\n        \n          '}
                <th data-official-prose="">
                  {'\n            '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n              '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-link'}
                    >
                      <i data-official-prose="" className={'fab fa-css3'}></i>
                    </span>
                    {'\n              '}
                    <span data-official-prose="">{'CSS Variable'}</span>
                    {'\n            '}
                  </div>
                  {'\n          '}
                </th>
                {'\n        \n        '}
                <th data-official-prose="">
                  {'\n          '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n            '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-success'}
                    >
                      <i data-official-prose="" className={'fas fa-code'}></i>
                    </span>
                    {'\n            '}
                    <span data-official-prose="">{'Value'}</span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </th>
                {'\n      '}
              </tr>
              {'\n    '}
            </thead>
            {'\n\n    '}
            <tbody data-official-prose="">
              {'\n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-margin'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-margin)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'-0.25rem'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-min-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-min-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-item-border-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-item-border-style)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'solid'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-item-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-item-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-item-font-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-item-font-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1em'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-item-margin'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-item-margin)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.25rem'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-item-padding-left'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-item-padding-left)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5em'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-item-padding-right'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-item-padding-right)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5em'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-nav-padding-left'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-nav-padding-left)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75em'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-nav-padding-right'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-nav-padding-right)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75em'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-disabled-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-disabled-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-weak)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-disabled-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-disabled-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-disabled-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-disabled-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-current-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-current-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-invert)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-current-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-current-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-current-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-current-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-ellipsis-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-ellipsis-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-weak)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$pagination-shadow-inset'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-pagination-shadow-inset)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'inset 0 0.0625em 0.125em hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.2\n)'
                        }
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Pagination role={'navigation'} aria-label={'pagination'}>
        {' '}
        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </ui.PaginationLink>{' '}
          <ui.PaginationLink
            aria-label={'Page 46'}
            aria-current={'page'}
            current
          >
            46
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Pagination role={'navigation'} aria-label={'pagination'}>
        {' '}
        <ui.PaginationPrevious title={'This is the first page'} disabled>
          Previous
        </ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink
            aria-label={'Page 1'}
            aria-current={'page'}
            current
          >
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 2'}>
            2
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 3'}>
            3
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Pagination
        role={'navigation'}
        aria-label={'pagination'}
        alignment={'centered'}
      >
        {' '}
        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </ui.PaginationLink>{' '}
          <ui.PaginationLink
            aria-label={'Page 46'}
            aria-current={'page'}
            current
          >
            46
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Pagination
        role={'navigation'}
        aria-label={'pagination'}
        alignment={'right'}
      >
        {' '}
        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </ui.PaginationLink>{' '}
          <ui.PaginationLink
            aria-label={'Page 46'}
            aria-current={'page'}
            current
          >
            46
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Pagination role={'navigation'} aria-label={'pagination'} rounded>
        {' '}
        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </ui.PaginationLink>{' '}
          <ui.PaginationLink
            aria-label={'Page 46'}
            aria-current={'page'}
            current
          >
            46
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.Pagination
        role={'navigation'}
        aria-label={'pagination'}
        size={'small'}
      >
        {' '}
        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </ui.PaginationLink>{' '}
          <ui.PaginationLink
            aria-label={'Page 46'}
            aria-current={'page'}
            current
          >
            46
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <ui.Pagination
        role={'navigation'}
        aria-label={'pagination'}
        size={'medium'}
      >
        {' '}
        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </ui.PaginationLink>{' '}
          <ui.PaginationLink
            aria-label={'Page 46'}
            aria-current={'page'}
            current
          >
            46
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

function Example008Demo() {
  return (
    <>
      <ui.Pagination
        role={'navigation'}
        aria-label={'pagination'}
        size={'large'}
      >
        {' '}
        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}
        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}
        <ui.PaginationList>
          {' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </ui.PaginationLink>{' '}
          <ui.PaginationLink
            aria-label={'Page 46'}
            aria-current={'page'}
            current
          >
            46
          </ui.PaginationLink>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </ui.PaginationLink>{' '}
          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}
          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </ui.PaginationLink>{' '}
        </ui.PaginationList>{' '}
      </ui.Pagination>
    </>
  )
}

export const Example001 = {
  name: 'Default pagination',
  parameters: {
    official: { id: 'components-pagination/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Pagination role={'navigation'} aria-label={'pagination'}>\n        {' '}\n        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink\n            aria-label={'Page 46'}\n            aria-current={'page'}\n            current\n          >\n            46\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Disabled previous link',
  parameters: {
    official: { id: 'components-pagination/basic/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Pagination role={'navigation'} aria-label={'pagination'}>\n        {' '}\n        <ui.PaginationPrevious title={'This is the first page'} disabled>\n          Previous\n        </ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink\n            aria-label={'Page 1'}\n            aria-current={'page'}\n            current\n          >\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 2'}>\n            2\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 3'}>\n            3\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Centered pagination',
  parameters: {
    official: { id: 'components-pagination/basic/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Pagination\n        role={'navigation'}\n        aria-label={'pagination'}\n        alignment={'centered'}\n      >\n        {' '}\n        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink\n            aria-label={'Page 46'}\n            aria-current={'page'}\n            current\n          >\n            46\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Right-aligned pagination',
  parameters: {
    official: { id: 'components-pagination/basic/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Pagination\n        role={'navigation'}\n        aria-label={'pagination'}\n        alignment={'right'}\n      >\n        {' '}\n        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink\n            aria-label={'Page 46'}\n            aria-current={'page'}\n            current\n          >\n            46\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Rounded pagination',
  parameters: {
    official: { id: 'components-pagination/styles/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Pagination role={'navigation'} aria-label={'pagination'} rounded>\n        {' '}\n        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink\n            aria-label={'Page 46'}\n            aria-current={'page'}\n            current\n          >\n            46\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Small pagination',
  parameters: {
    official: { id: 'components-pagination/sizes/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example006Demo() {\n  return (\n    <>\n      <ui.Pagination\n        role={'navigation'}\n        aria-label={'pagination'}\n        size={'small'}\n      >\n        {' '}\n        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink\n            aria-label={'Page 46'}\n            aria-current={'page'}\n            current\n          >\n            46\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Medium pagination',
  parameters: {
    official: { id: 'components-pagination/sizes/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example007Demo() {\n  return (\n    <>\n      <ui.Pagination\n        role={'navigation'}\n        aria-label={'pagination'}\n        size={'medium'}\n      >\n        {' '}\n        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink\n            aria-label={'Page 46'}\n            aria-current={'page'}\n            current\n          >\n            46\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Large pagination',
  parameters: {
    official: { id: 'components-pagination/sizes/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example008Demo() {\n  return (\n    <>\n      <ui.Pagination\n        role={'navigation'}\n        aria-label={'pagination'}\n        size={'large'}\n      >\n        {' '}\n        <ui.PaginationPrevious href={'#'}>Previous</ui.PaginationPrevious>{' '}\n        <ui.PaginationNext href={'#'}>Next page</ui.PaginationNext>{' '}\n        <ui.PaginationList>\n          {' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink\n            aria-label={'Page 46'}\n            aria-current={'page'}\n            current\n          >\n            46\n          </ui.PaginationLink>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </ui.PaginationLink>{' '}\n          <ui.PaginationEllipsis>…</ui.PaginationEllipsis>{' '}\n          <ui.PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </ui.PaginationLink>{' '}\n        </ui.PaginationList>{' '}\n      </ui.Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

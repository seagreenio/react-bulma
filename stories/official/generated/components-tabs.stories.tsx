import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

const meta = {
  ...officialPage(
    {
      id: 'components-tabs',
      title: 'Tabs',
      url: 'https://bulma.io/documentation/components/tabs/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-tabs',
  title: 'CSS Library/Components/Tabs',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-tabs" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Tabs'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Simple responsive horizontal navigation '}
          <strong data-official-prose="">{'tabs'}</strong>
          {', with different styles'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n              \n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The Bulma '}
            <code data-official-prose="">{'tabs'}</code>
            {
              ' are a straightforward navigation component that\n    come in a variety of versions. They only require the following structure:\n  '
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'a '}
              <code data-official-prose="">{'tabs'}</code>
              {' container'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'a '}
              <code data-official-prose="">{'<ul>'}</code>
              {' HTML element'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'a list of '}
              <code data-official-prose="">{'<li>'}</code>
              {' HTML element'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<a>'}</code>
              {' HTML anchor elements for each link'}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <strong data-official-prose="">{'default'}</strong>
            {' tabs style has a single border at the bottom.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'alignment'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Alignment\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#alignment'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    To align the tabs list, use the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' or\n    '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'.tabs'}</code>
            {' container:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/alignment/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/alignment/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Icons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#icons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can use any of the '}
            <a data-official-prose="" href={'https://fontawesome.com/'}>
              {'Font Awesome'}
            </a>
            {'\n    '}
            <strong data-official-prose="">{'icons'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/icons/001">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
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
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can choose between '}
            <strong data-official-prose="">{'3 additional sizes'}</strong>
            {':\n    '}
            <code data-official-prose="">{'is-small'}</code>{' '}
            <code data-official-prose="">{'is-medium'}</code>
            {' and '}
            <code data-official-prose="">{'is-large'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/sizes/001">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/sizes/002">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/sizes/003">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
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
        <div data-official-prose="" className={'content'}>
          {'\n  If you want a more classic style with '}
          <strong data-official-prose="">{'borders'}</strong>
          {', just append\n  the '}
          <code data-official-prose="">{'is-boxed'}</code>
          {' modifier.\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/styles/001">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <p data-official-prose="" className={'content'}>
          {'\n  If you want '}
          <strong data-official-prose="">{'mutually exclusive'}</strong>
          {
            ' tabs (like radio buttons where\n  clicking one deselects all other ones), use the\n  '
          }
          <code data-official-prose="">{'is-toggle'}</code>
          {' modifier.\n'}
        </p>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/styles/002">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <p data-official-prose="" className={'content'}>
          {'\n  If you use both '}
          <code data-official-prose="">{'is-toggle'}</code>
          {' and '}
          <code data-official-prose="">{'is-toggle-rounded'}</code>
          {', the\n  first and last items will be '}
          <strong data-official-prose="">{'rounded'}</strong>
          {'.\n'}
        </p>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/styles/003">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <p data-official-prose="" className={'content'}>
          {'\n  If you want the tabs to take up the '}
          <strong data-official-prose="">{'whole width'}</strong>
          {' available,\n  use '}
          <code data-official-prose="">{'is-fullwidth'}</code>
          {'.\n'}
        </p>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/styles/004">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'combining'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Combining\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#combining'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can '}
            <strong data-official-prose="">{'combine'}</strong>
            {' different modifiers. For example, you can\n    have '}
            <strong data-official-prose="">{'centered boxed'}</strong>
            {' tabs, or\n    '}
            <strong data-official-prose="">{'fullwidth toggle'}</strong>
            {' ones.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/combining/001">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/combining/002">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/combining/003">
          <Canvas of={Example014} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-tabs/combining/004">
          <Canvas of={Example015} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n\n\n\n\n\n\n\n'}
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
                        {'$tabs-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-border-bottom-color)'}
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
                        {'$tabs-border-bottom-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-border-bottom-style)'}
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
                        {'$tabs-border-bottom-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-border-bottom-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1px'}
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
                        {'$tabs-link-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-link-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text)'}
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
                        {'$tabs-link-hover-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-link-hover-border-bottom-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-strong)'}
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
                        {'$tabs-link-hover-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-link-hover-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-strong)'}
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
                        {'$tabs-link-active-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-link-active-border-bottom-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-text)'}
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
                        {'$tabs-link-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-link-active-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-text)'}
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
                        {'$tabs-link-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-link-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5em 1em'}
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
                        {'$tabs-boxed-link-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-boxed-link-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius)'}
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
                        {'$tabs-boxed-link-hover-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-boxed-link-hover-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-background)'}
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
                        {'$tabs-boxed-link-hover-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'var(--bulma-tabs-boxed-link-hover-border-bottom-color)'
                        }
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
                        {'$tabs-boxed-link-active-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-boxed-link-active-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main)'}
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
                        {'$tabs-boxed-link-active-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-boxed-link-active-border-color)'}
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
                        {'$tabs-boxed-link-active-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'var(--bulma-tabs-boxed-link-active-border-bottom-color)'
                        }
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'transparent'}
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
                        {'$tabs-toggle-link-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-border-color)'}
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
                        {'$tabs-toggle-link-border-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-border-style)'}
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
                        {'$tabs-toggle-link-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1px'}
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
                        {'$tabs-toggle-link-hover-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-hover-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-background)'}
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
                        {'$tabs-toggle-link-hover-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-hover-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border-hover)'}
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
                        {'$tabs-toggle-link-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius)'}
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
                        {'$tabs-toggle-link-active-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'var(--bulma-tabs-toggle-link-active-background-color)'
                        }
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
                        {'$tabs-toggle-link-active-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-active-border-color)'}
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
                        {'$tabs-toggle-link-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tabs-toggle-link-active-color)'}
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
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'Pictures'}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'Music'}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'Videos'}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'Documents'}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList alignment={'centered'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'Pictures'}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'Music'}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'Videos'}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'Documents'}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList alignment={'right'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'Pictures'}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'Music'}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'Videos'}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'Documents'}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList alignment={'centered'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList size={'small'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'Pictures'}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'Music'}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'Videos'}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'Documents'}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList size={'medium'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'Pictures'}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'Music'}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'Videos'}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'Documents'}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList size={'large'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'Pictures'}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'Music'}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'Videos'}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'Documents'}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList variant={'boxed'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList variant={'toggle'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList variant={'toggle-rounded'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i className={'fas fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={null}>
        <ui.TabsList fullWidth>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-left'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Left'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-up'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Up'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <span>{'Right'}</span>
            {'\n        '}
            <ui.Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-right'} />
            </ui.Icon>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList alignment={'centered'} variant={'boxed'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList variant={'toggle'} fullWidth>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example014Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList alignment={'centered'} variant={'boxed'} size={'medium'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

function Example015Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tabs defaultValue={'tab-1'}>
        <ui.TabsList variant={'toggle'} fullWidth size={'large'}>
          <ui.Tab value={'tab-1'} as={'a'}>
            {'\n        '}
            <ui.Icon>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Pictures'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-2'} as={'a'}>
            {'\n        '}
            <ui.Icon>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Music'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-3'} as={'a'}>
            {'\n        '}
            <ui.Icon>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Videos'}</span>
            {'\n      '}
          </ui.Tab>
          <ui.Tab value={'tab-4'} as={'a'}>
            {'\n        '}
            <ui.Icon>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </ui.Icon>
            {'\n        '}
            <span>{'Documents'}</span>
            {'\n      '}
          </ui.Tab>
        </ui.TabsList>
      </ui.Tabs>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Default tabs',
  parameters: {
    official: { id: 'components-tabs/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList><ui.Tab value={"tab-1"} as={"a"}>{"Pictures"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Music"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Videos"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Documents"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Centered tabs',
  parameters: {
    official: { id: 'components-tabs/alignment/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList alignment={"centered"}><ui.Tab value={"tab-1"} as={"a"}>{"Pictures"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Music"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Videos"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Documents"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Right-aligned tabs',
  parameters: {
    official: { id: 'components-tabs/alignment/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList alignment={"right"}><ui.Tab value={"tab-1"} as={"a"}>{"Pictures"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Music"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Videos"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Documents"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Tabs with icons',
  parameters: {
    official: { id: 'components-tabs/icons/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList alignment={"centered"}><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"far fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Small tabs',
  parameters: {
    official: { id: 'components-tabs/sizes/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList size={"small"}><ui.Tab value={"tab-1"} as={"a"}>{"Pictures"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Music"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Videos"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Documents"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Medium tabs',
  parameters: {
    official: { id: 'components-tabs/sizes/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList size={"medium"}><ui.Tab value={"tab-1"} as={"a"}>{"Pictures"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Music"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Videos"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Documents"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Large tabs',
  parameters: {
    official: { id: 'components-tabs/sizes/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList size={"large"}><ui.Tab value={"tab-1"} as={"a"}>{"Pictures"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Music"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Videos"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Documents"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Boxed tabs',
  parameters: {
    official: { id: 'components-tabs/styles/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList variant={"boxed"}><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"far fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Toggle tabs',
  parameters: {
    official: { id: 'components-tabs/styles/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList variant={"toggle"}><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"far fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Rounded toggle tabs',
  parameters: {
    official: { id: 'components-tabs/styles/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList variant={"toggle-rounded"}><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i className={"fas fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Full-width tabs',
  parameters: {
    official: { id: 'components-tabs/styles/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={null}><ui.TabsList fullWidth><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon><i aria-hidden={"true"} className={"fas fa-angle-left"} /></ui.Icon>{"\\n        "}<span>{"Left"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon><i aria-hidden={"true"} className={"fas fa-angle-up"} /></ui.Icon>{"\\n        "}<span>{"Up"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<span>{"Right"}</span>{"\\n        "}<ui.Icon><i aria-hidden={"true"} className={"fas fa-angle-right"} /></ui.Icon>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Centered boxed tabs',
  parameters: {
    official: { id: 'components-tabs/combining/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList alignment={"centered"} variant={"boxed"}><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"far fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Full-width toggle tabs',
  parameters: {
    official: { id: 'components-tabs/combining/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example013Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList variant={"toggle"} fullWidth><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"far fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Medium centered boxed tabs',
  parameters: {
    official: { id: 'components-tabs/combining/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example014Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList alignment={"centered"} variant={"boxed"} size={"medium"}><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon size={"small"}><i aria-hidden={"true"} className={"far fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Large full-width toggle tabs',
  parameters: {
    official: { id: 'components-tabs/combining/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example015Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList variant={"toggle"} fullWidth size={"large"}><ui.Tab value={"tab-1"} as={"a"}>{"\\n        "}<ui.Icon><i aria-hidden={"true"} className={"fas fa-image"} /></ui.Icon>{"\\n        "}<span>{"Pictures"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"\\n        "}<ui.Icon><i aria-hidden={"true"} className={"fas fa-music"} /></ui.Icon>{"\\n        "}<span>{"Music"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"\\n        "}<ui.Icon><i aria-hidden={"true"} className={"fas fa-film"} /></ui.Icon>{"\\n        "}<span>{"Videos"}</span>{"\\n      "}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"\\n        "}<ui.Icon><i aria-hidden={"true"} className={"far fa-file-alt"} /></ui.Icon>{"\\n        "}<span>{"Documents"}</span>{"\\n      "}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

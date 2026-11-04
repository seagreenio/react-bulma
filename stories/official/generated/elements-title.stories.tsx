import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-title',
      title: 'Title and Subtitle',
      url: 'https://bulma.io/documentation/elements/title/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-title',
  title: 'CSS Library/Elements/Title',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-title" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Title and Subtitle'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Simple '}
          <strong data-official-prose="">{'headings'}</strong>
          {' to add depth to your page'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n'}
        <div data-official-example="elements-title/basic/001">
          <Canvas of={Example001} />
        </div>
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
        <div data-official-example="elements-title/sizes/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-title/sizes/002">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <hr data-official-prose="" />
        {'\n\n'}
        <div data-official-example="elements-title/sizes/003">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <hr data-official-prose="" />
        {'\n\n'}
        <div data-official-example="elements-title/sizes/004">
          <Canvas of={Example005} />
        </div>
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
                        {'$title-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-color)'}
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
                        {'$title-family'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-family)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'false'}
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
                        {'$title-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-size-3)'}
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
                        {'$title-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-extrabold)'}
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
                        {'$title-line-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-line-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.125'}
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
                        {'$title-strong-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-strong-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'inherit'}
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
                        {'$title-strong-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-strong-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'inherit'}
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
                        {'$title-sub-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-sub-size)'}
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
                        {'$title-sup-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-title-sup-size)'}
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
                        {'$subtitle-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-subtitle-color)'}
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
                        {'$subtitle-family'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-subtitle-family)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'false'}
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
                        {'$subtitle-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-subtitle-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-size-5)'}
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
                        {'$subtitle-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-subtitle-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-normal)'}
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
                        {'$subtitle-line-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-subtitle-line-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25'}
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
                        {'$subtitle-strong-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-subtitle-strong-color)'}
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
                        {'$subtitle-strong-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-subtitle-strong-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-semibold)'}
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
      <ui.Columns>
        {' '}
        <ui.Column width={3}>
          {' '}
          <ui.Content>
            {' '}
            <p>
              There are <strong>2 types</strong> of heading:
            </p>{' '}
            <ul>
              {' '}
              <li>
                <code>{'title'}</code>
              </li>{' '}
              <li>
                <code>{'subtitle'}</code>
              </li>{' '}
            </ul>{' '}
          </ui.Content>{' '}
        </ui.Column>{' '}
        <ui.Column width={4}>
          {' '}
          <ui.Title as={'p'}>Title</ui.Title>{' '}
          <ui.Subtitle as={'p'}>Subtitle</ui.Subtitle>{' '}
        </ui.Column>{' '}
        <ui.Column width={5}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<h1 class="title">Title</h1>\n<h2 class="subtitle">Subtitle</h2>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={3}>
          {' '}
          <p>
            There are <strong>6 sizes</strong> available:
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={4}>
          {' '}
          <ui.Title size={1} as={'p'}>
            Title 1
          </ui.Title>{' '}
          <ui.Title size={2} as={'p'}>
            Title 2
          </ui.Title>{' '}
          <ui.Title size={3} as={'p'}>
            Title 3 (default size)
          </ui.Title>{' '}
          <ui.Title size={4} as={'p'}>
            Title 4
          </ui.Title>{' '}
          <ui.Title size={5} as={'p'}>
            Title 5
          </ui.Title>{' '}
          <ui.Title size={6} as={'p'}>
            Title 6
          </ui.Title>{' '}
        </ui.Column>{' '}
        <ui.Column width={5}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<h1 class="title is-1">Title 1</h1>\n<h2 class="title is-2">Title 2</h2>\n<h3 class="title is-3">Title 3</h3>\n<h4 class="title is-4">Title 4</h4>\n<h5 class="title is-5">Title 5</h5>\n<h6 class="title is-6">Title 6</h6>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={3} />{' '}
        <ui.Column width={4}>
          {' '}
          <ui.Subtitle size={1} as={'p'}>
            Subtitle 1
          </ui.Subtitle>{' '}
          <ui.Subtitle size={2} as={'p'}>
            Subtitle 2
          </ui.Subtitle>{' '}
          <ui.Subtitle size={3} as={'p'}>
            Subtitle 3
          </ui.Subtitle>{' '}
          <ui.Subtitle size={4} as={'p'}>
            Subtitle 4
          </ui.Subtitle>{' '}
          <ui.Subtitle size={5} as={'p'}>
            Subtitle 5 (default size)
          </ui.Subtitle>{' '}
          <ui.Subtitle size={6} as={'p'}>
            Subtitle 6
          </ui.Subtitle>{' '}
        </ui.Column>{' '}
        <ui.Column width={5}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<h1 class="subtitle is-1">Subtitle 1</h1>\n<h2 class="subtitle is-2">Subtitle 2</h2>\n<h3 class="subtitle is-3">Subtitle 3</h3>\n<h4 class="subtitle is-4">Subtitle 4</h4>\n<h5 class="subtitle is-5">Subtitle 5</h5>\n<h6 class="subtitle is-6">Subtitle 6</h6>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={3}>
          {' '}
          <ui.Content>
            {' '}
            <p>
              When you <strong>combine</strong> a title and a subtitle, they
              move closer together.
            </p>{' '}
            <p>
              As a rule of thumb, it is recommended to use a size difference of{' '}
              <strong>two</strong>. So if you use a <code>{'title is-1'}</code>,
              combine it with a <code>{'subtitle is-3'}</code>.
            </p>{' '}
          </ui.Content>{' '}
        </ui.Column>{' '}
        <ui.Column width={4}>
          {' '}
          <ui.Block>
            {' '}
            <ui.Title size={1} as={'p'}>
              Title 1
            </ui.Title>{' '}
            <ui.Subtitle size={3} as={'p'}>
              Subtitle 3
            </ui.Subtitle>{' '}
          </ui.Block>{' '}
          <ui.Block>
            {' '}
            <ui.Title size={2} as={'p'}>
              Title 2
            </ui.Title>{' '}
            <ui.Subtitle size={4} as={'p'}>
              Subtitle 4
            </ui.Subtitle>{' '}
          </ui.Block>{' '}
          <ui.Block>
            {' '}
            <ui.Title size={3} as={'p'}>
              Title 3
            </ui.Title>{' '}
            <ui.Subtitle size={5} as={'p'}>
              Subtitle 5
            </ui.Subtitle>{' '}
          </ui.Block>{' '}
        </ui.Column>{' '}
        <ui.Column width={5}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<p class="title is-1">Title 1</p>\n<p class="subtitle is-3">Subtitle 3</p>\n\n<p class="title is-2">Title 2</p>\n<p class="subtitle is-4">Subtitle 4</p>\n\n<p class="title is-3">Title 3</p>\n<p class="subtitle is-5">Subtitle 5</p>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={3}>
          {' '}
          <ui.Content>
            {' '}
            <p>
              You can maintain the normal spacing between titles and subtitles
              if you use the <code>{'is-spaced'}</code> modifier on the first
              element.
            </p>{' '}
          </ui.Content>{' '}
        </ui.Column>{' '}
        <ui.Column width={4}>
          {' '}
          <ui.Block>
            {' '}
            <ui.Title size={1} spaced as={'p'}>
              Title 1
            </ui.Title>{' '}
            <ui.Subtitle size={3} as={'p'}>
              Subtitle 3
            </ui.Subtitle>{' '}
          </ui.Block>{' '}
          <ui.Block>
            {' '}
            <ui.Title size={2} spaced as={'p'}>
              Title 2
            </ui.Title>{' '}
            <ui.Subtitle size={4} as={'p'}>
              Subtitle 4
            </ui.Subtitle>{' '}
          </ui.Block>{' '}
          <ui.Block>
            {' '}
            <ui.Title size={3} spaced as={'p'}>
              Title 3
            </ui.Title>{' '}
            <ui.Subtitle size={5} as={'p'}>
              Subtitle 5
            </ui.Subtitle>{' '}
          </ui.Block>{' '}
        </ui.Column>{' '}
        <ui.Column width={5}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<p class="title is-1 is-spaced">Title 1</p>\n<p class="subtitle is-3">Subtitle 3</p>\n\n<p class="title is-2 is-spaced">Title 2</p>\n<p class="subtitle is-4">Subtitle 4</p>\n\n<p class="title is-3 is-spaced">Title 3</p>\n<p class="subtitle is-5">Subtitle 5</p>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Title and subtitle',
  parameters: {
    official: { id: 'elements-title/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={3}>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              There are <strong>2 types</strong> of heading:\n            </p>{' '}\n            <ul>\n              {' '}\n              <li>\n                <code>{'title'}</code>\n              </li>{' '}\n              <li>\n                <code>{'subtitle'}</code>\n              </li>{' '}\n            </ul>{' '}\n          </ui.Content>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={4}>\n          {' '}\n          <ui.Title as={'p'}>Title</ui.Title>{' '}\n          <ui.Subtitle as={'p'}>Subtitle</ui.Subtitle>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={5}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<h1 class=\"title\">Title</h1>\\n<h2 class=\"subtitle\">Subtitle</h2>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Title sizes',
  parameters: {
    official: { id: 'elements-title/sizes/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={3}>\n          {' '}\n          <p>\n            There are <strong>6 sizes</strong> available:\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={4}>\n          {' '}\n          <ui.Title size={1} as={'p'}>\n            Title 1\n          </ui.Title>{' '}\n          <ui.Title size={2} as={'p'}>\n            Title 2\n          </ui.Title>{' '}\n          <ui.Title size={3} as={'p'}>\n            Title 3 (default size)\n          </ui.Title>{' '}\n          <ui.Title size={4} as={'p'}>\n            Title 4\n          </ui.Title>{' '}\n          <ui.Title size={5} as={'p'}>\n            Title 5\n          </ui.Title>{' '}\n          <ui.Title size={6} as={'p'}>\n            Title 6\n          </ui.Title>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={5}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<h1 class=\"title is-1\">Title 1</h1>\\n<h2 class=\"title is-2\">Title 2</h2>\\n<h3 class=\"title is-3\">Title 3</h3>\\n<h4 class=\"title is-4\">Title 4</h4>\\n<h5 class=\"title is-5\">Title 5</h5>\\n<h6 class=\"title is-6\">Title 6</h6>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Subtitle sizes',
  parameters: {
    official: { id: 'elements-title/sizes/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={3} />{' '}\n        <ui.Column width={4}>\n          {' '}\n          <ui.Subtitle size={1} as={'p'}>\n            Subtitle 1\n          </ui.Subtitle>{' '}\n          <ui.Subtitle size={2} as={'p'}>\n            Subtitle 2\n          </ui.Subtitle>{' '}\n          <ui.Subtitle size={3} as={'p'}>\n            Subtitle 3\n          </ui.Subtitle>{' '}\n          <ui.Subtitle size={4} as={'p'}>\n            Subtitle 4\n          </ui.Subtitle>{' '}\n          <ui.Subtitle size={5} as={'p'}>\n            Subtitle 5 (default size)\n          </ui.Subtitle>{' '}\n          <ui.Subtitle size={6} as={'p'}>\n            Subtitle 6\n          </ui.Subtitle>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={5}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<h1 class=\"subtitle is-1\">Subtitle 1</h1>\\n<h2 class=\"subtitle is-2\">Subtitle 2</h2>\\n<h3 class=\"subtitle is-3\">Subtitle 3</h3>\\n<h4 class=\"subtitle is-4\">Subtitle 4</h4>\\n<h5 class=\"subtitle is-5\">Subtitle 5</h5>\\n<h6 class=\"subtitle is-6\">Subtitle 6</h6>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Paired headings',
  parameters: {
    official: { id: 'elements-title/sizes/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={3}>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              When you <strong>combine</strong> a title and a subtitle, they\n              move closer together.\n            </p>{' '}\n            <p>\n              As a rule of thumb, it is recommended to use a size difference of{' '}\n              <strong>two</strong>. So if you use a <code>{'title is-1'}</code>,\n              combine it with a <code>{'subtitle is-3'}</code>.\n            </p>{' '}\n          </ui.Content>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={4}>\n          {' '}\n          <ui.Block>\n            {' '}\n            <ui.Title size={1} as={'p'}>\n              Title 1\n            </ui.Title>{' '}\n            <ui.Subtitle size={3} as={'p'}>\n              Subtitle 3\n            </ui.Subtitle>{' '}\n          </ui.Block>{' '}\n          <ui.Block>\n            {' '}\n            <ui.Title size={2} as={'p'}>\n              Title 2\n            </ui.Title>{' '}\n            <ui.Subtitle size={4} as={'p'}>\n              Subtitle 4\n            </ui.Subtitle>{' '}\n          </ui.Block>{' '}\n          <ui.Block>\n            {' '}\n            <ui.Title size={3} as={'p'}>\n              Title 3\n            </ui.Title>{' '}\n            <ui.Subtitle size={5} as={'p'}>\n              Subtitle 5\n            </ui.Subtitle>{' '}\n          </ui.Block>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={5}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<p class=\"title is-1\">Title 1</p>\\n<p class=\"subtitle is-3\">Subtitle 3</p>\\n\\n<p class=\"title is-2\">Title 2</p>\\n<p class=\"subtitle is-4\">Subtitle 4</p>\\n\\n<p class=\"title is-3\">Title 3</p>\\n<p class=\"subtitle is-5\">Subtitle 5</p>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Spaced headings',
  parameters: {
    official: { id: 'elements-title/sizes/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={3}>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              You can maintain the normal spacing between titles and subtitles\n              if you use the <code>{'is-spaced'}</code> modifier on the first\n              element.\n            </p>{' '}\n          </ui.Content>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={4}>\n          {' '}\n          <ui.Block>\n            {' '}\n            <ui.Title size={1} spaced as={'p'}>\n              Title 1\n            </ui.Title>{' '}\n            <ui.Subtitle size={3} as={'p'}>\n              Subtitle 3\n            </ui.Subtitle>{' '}\n          </ui.Block>{' '}\n          <ui.Block>\n            {' '}\n            <ui.Title size={2} spaced as={'p'}>\n              Title 2\n            </ui.Title>{' '}\n            <ui.Subtitle size={4} as={'p'}>\n              Subtitle 4\n            </ui.Subtitle>{' '}\n          </ui.Block>{' '}\n          <ui.Block>\n            {' '}\n            <ui.Title size={3} spaced as={'p'}>\n              Title 3\n            </ui.Title>{' '}\n            <ui.Subtitle size={5} as={'p'}>\n              Subtitle 5\n            </ui.Subtitle>{' '}\n          </ui.Block>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={5}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<p class=\"title is-1 is-spaced\">Title 1</p>\\n<p class=\"subtitle is-3\">Subtitle 3</p>\\n\\n<p class=\"title is-2 is-spaced\">Title 2</p>\\n<p class=\"subtitle is-4\">Subtitle 4</p>\\n\\n<p class=\"title is-3 is-spaced\">Title 3</p>\\n<p class=\"subtitle is-5\">Subtitle 5</p>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

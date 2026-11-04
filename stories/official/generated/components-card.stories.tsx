import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-card',
      title: 'Card',
      url: 'https://bulma.io/documentation/components/card/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-card',
  title: 'CSS Library/Components/Card',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-card" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Card'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'An all-around flexible and composable component'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <strong data-official-prose="">{'card'}</strong>
            {
              ' component comprises several elements that you can mix and match:'
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'card'}</code>
              {': the main container\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'card-header'}</code>
                  {': a horizontal bar with a shadow\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      <code data-official-prose="">{'card-header-title'}</code>
                      {': a left-aligned bold text'}
                    </li>
                    {'\n            '}
                    <li data-official-prose="">
                      <code data-official-prose="">{'card-header-icon'}</code>
                      {': a placeholder for an icon'}
                    </li>
                    {'\n          '}
                  </ul>
                  {'\n        '}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'card-image'}</code>
                  {': a fullwidth container for a responsive image'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'card-content'}</code>
                  {': a multi-purpose container for '}
                  <em data-official-prose="">{'any'}</em>
                  {' other element'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'card-footer'}</code>
                  {': a horizontal list of controls\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      <code data-official-prose="">{'card-footer-item'}</code>
                      {': a repeatable list item'}
                    </li>
                    {'\n          '}
                  </ul>
                  {'\n        '}
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can center the '}
            <code data-official-prose="">{'card-header-title'}</code>
            {' by appending the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' modifier.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-card/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'card-parts'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Card parts\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#card-parts'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-header'}</code>
            {' can have a '}
            <strong data-official-prose="">{'title'}</strong>
            {' and a Bulma '}
            <code data-official-prose="">{'icon'}</code>
            {':'}
          </p>
          {'\n'}
        </div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-card/card-parts/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-image'}</code>
            {' is a container for a Bulma '}
            <code data-official-prose="">{'image'}</code>
            {' element:'}
          </p>
          {'\n'}
        </div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-card/card-parts/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-content'}</code>
            {' is the main part, ideal for '}
            <strong data-official-prose="">{'text content'}</strong>
            {', thanks to its padding:'}
          </p>
          {'\n'}
        </div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-card/card-parts/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-footer'}</code>
            {' acts as a list of for several '}
            <code data-official-prose="">{'card-footer-item'}</code>
            {' elements:'}
          </p>
          {'\n'}
        </div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-card/card-parts/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'examples'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Examples\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#examples'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-card/examples/001">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-card/examples/002">
          <Canvas of={Example007} />
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
                        {'$card-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-color)'}
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
                        {'$card-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-background-color)'}
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
                        {'$card-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-shadow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-shadow)'}
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
                        {'$card-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75rem'}
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
                        {'$card-header-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-header-background-color)'}
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
                        {'$card-header-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-header-color)'}
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
                        {'$card-header-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-header-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75rem 1rem'}
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
                        {'$card-header-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-header-shadow)'}
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
                          '0 0.125em 0.25em hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.1\n)'
                        }
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
                        {'$card-header-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-header-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-bold)'}
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
                        {'$card-content-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-content-background-color)'}
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
                        {'$card-content-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-content-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.5rem'}
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
                        {'$card-footer-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-footer-background-color)'}
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
                        {'$card-footer-border-top'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-footer-border-top)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1px solid var(--bulma-border-weak)'}
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
                        {'$card-footer-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-footer-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75rem'}
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
                        {'$card-media-margin'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-card-media-margin)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-block-spacing)'}
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
      <ui.Card>
        {'\n  '}
        <ui.CardImage>
          {'\n    '}
          <ui.Image
            ratio={'4by3'}
            src={'./official-assets/1280x960.png'}
            alt={'Placeholder image'}
          />
          {'\n  '}
        </ui.CardImage>
        {'\n  '}
        <ui.CardContent>
          {'\n    '}
          <ui.Media as={'div'}>
            {'\n      '}
            <ui.MediaLeft>
              {'\n        '}
              <ui.Image
                size={48}
                src={'./official-assets/96x96.png'}
                alt={'Placeholder image'}
              />
              {'\n      '}
            </ui.MediaLeft>
            {'\n      '}
            <ui.MediaContent>
              {'\n        '}
              <ui.Title size={4} as={'p'}>
                {'John Smith'}
              </ui.Title>
              {'\n        '}
              <ui.Subtitle size={6} as={'p'}>
                {'@johnsmith'}
              </ui.Subtitle>
              {'\n      '}
            </ui.MediaContent>
            {'\n    '}
          </ui.Media>
          {'\n\n    '}
          <ui.Content>
            {
              '\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec\n      iaculis mauris. '
            }
            <a>{'@bulmaio'}</a>
            {'. '}
            <a href={'#'}>{'#css'}</a>
            {'\n      '}
            <a href={'#'}>{'#responsive'}</a>
            {'\n      '}
            <br />
            {'\n      '}
            <time dateTime={'2016-1-1'}>{'11:09 PM - 1 Jan 2016'}</time>
            {'\n    '}
          </ui.Content>
          {'\n  '}
        </ui.CardContent>
        {'\n'}
      </ui.Card>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Card>
        {'\n  '}
        <ui.CardHeader>
          {'\n    '}
          <ui.CardHeaderTitle>{'Card header'}</ui.CardHeaderTitle>
          {'\n    '}
          <ui.CardHeaderIcon aria-label={'more options'}>
            {'\n      '}
            <ui.Icon>
              {'\n        '}
              <i aria-hidden={'true'} className={'fas fa-angle-down'} />
              {'\n      '}
            </ui.Icon>
            {'\n    '}
          </ui.CardHeaderIcon>
          {'\n  '}
        </ui.CardHeader>
        {'\n'}
      </ui.Card>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Card>
        {'\n  '}
        <ui.CardImage>
          {'\n    '}
          <ui.Image
            ratio={'4by3'}
            src={'./official-assets/1280x960.png'}
            alt={'Placeholder image'}
          />
          {'\n  '}
        </ui.CardImage>
        {'\n'}
      </ui.Card>
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Card>
        {'\n  '}
        <ui.CardContent>
          {'\n    '}
          <ui.Content>
            {
              '\n      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec\n      id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus\n      et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis\n      consectetur purus sit amet fermentum.\n    '
            }
          </ui.Content>
          {'\n  '}
        </ui.CardContent>
        {'\n'}
      </ui.Card>
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Card>
        {'\n  '}
        <ui.CardFooter>
          {'\n    '}
          <ui.CardFooterItem href={'#'}>{'Save'}</ui.CardFooterItem>
          {'\n    '}
          <ui.CardFooterItem href={'#'}>{'Edit'}</ui.CardFooterItem>
          {'\n    '}
          <ui.CardFooterItem href={'#'}>{'Delete'}</ui.CardFooterItem>
          {'\n  '}
        </ui.CardFooter>
        {'\n'}
      </ui.Card>
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Card>
        {'\n  '}
        <ui.CardHeader>
          {'\n    '}
          <ui.CardHeaderTitle>{'Component'}</ui.CardHeaderTitle>
          {'\n    '}
          <ui.CardHeaderIcon aria-label={'more options'}>
            {'\n      '}
            <ui.Icon>
              {'\n        '}
              <i aria-hidden={'true'} className={'fas fa-angle-down'} />
              {'\n      '}
            </ui.Icon>
            {'\n    '}
          </ui.CardHeaderIcon>
          {'\n  '}
        </ui.CardHeader>
        {'\n  '}
        <ui.CardContent>
          {'\n    '}
          <ui.Content>
            {
              '\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec\n      iaculis mauris.\n      '
            }
            <a href={'#'}>{'@bulmaio'}</a>
            {'. '}
            <a href={'#'}>{'#css'}</a> <a href={'#'}>{'#responsive'}</a>
            {'\n      '}
            <br />
            {'\n      '}
            <time dateTime={'2016-1-1'}>{'11:09 PM - 1 Jan 2016'}</time>
            {'\n    '}
          </ui.Content>
          {'\n  '}
        </ui.CardContent>
        {'\n  '}
        <ui.CardFooter>
          {'\n    '}
          <ui.CardFooterItem href={'#'}>{'Save'}</ui.CardFooterItem>
          {'\n    '}
          <ui.CardFooterItem href={'#'}>{'Edit'}</ui.CardFooterItem>
          {'\n    '}
          <ui.CardFooterItem href={'#'}>{'Delete'}</ui.CardFooterItem>
          {'\n  '}
        </ui.CardFooter>
        {'\n'}
      </ui.Card>
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Card>
        {'\n  '}
        <ui.CardContent>
          {'\n    '}
          <ui.Title as={'p'}>
            {
              '\n      “There are two hard things in computer science: cache invalidation, naming\n      things, and off-by-one errors.”\n    '
            }
          </ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Jeff Atwood'}</ui.Subtitle>
          {'\n  '}
        </ui.CardContent>
        {'\n  '}
        <ui.CardFooter>
          {'\n    '}
          <ui.CardFooterItem as={'p'}>
            {'\n      '}
            <span>
              {'\n        View on\n        '}
              <a
                href={
                  'https://twitter.com/codinghorror/status/506010907021828096'
                }
              >
                {'Twitter'}
              </a>
              {'\n      '}
            </span>
            {'\n    '}
          </ui.CardFooterItem>
          {'\n    '}
          <ui.CardFooterItem as={'p'}>
            {'\n      '}
            <span>
              {' Share on '}
              <a href={'#'}>{'Facebook'}</a>{' '}
            </span>
            {'\n    '}
          </ui.CardFooterItem>
          {'\n  '}
        </ui.CardFooter>
        {'\n'}
      </ui.Card>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Profile card',
  parameters: {
    official: { id: 'components-card/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Card>{"\\n  "}<ui.CardImage>{"\\n    "}<ui.Image ratio={"4by3"} src={"./official-assets/1280x960.png"} alt={"Placeholder image"} />{"\\n  "}</ui.CardImage>{"\\n  "}<ui.CardContent>{"\\n    "}<ui.Media as={"div"}>{"\\n      "}<ui.MediaLeft>{"\\n        "}<ui.Image size={48} src={"./official-assets/96x96.png"} alt={"Placeholder image"} />{"\\n      "}</ui.MediaLeft>{"\\n      "}<ui.MediaContent>{"\\n        "}<ui.Title size={4} as={"p"}>{"John Smith"}</ui.Title>{"\\n        "}<ui.Subtitle size={6} as={"p"}>{"@johnsmith"}</ui.Subtitle>{"\\n      "}</ui.MediaContent>{"\\n    "}</ui.Media>{"\\n\\n    "}<ui.Content>{"\\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec\\n      iaculis mauris. "}<a>{"@bulmaio"}</a>{". "}<a href={"#"}>{"#css"}</a>{"\\n      "}<a href={"#"}>{"#responsive"}</a>{"\\n      "}<br />{"\\n      "}<time dateTime={"2016-1-1"}>{"11:09 PM - 1 Jan 2016"}</time>{"\\n    "}</ui.Content>{"\\n  "}</ui.CardContent>{"\\n"}</ui.Card>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Card header',
  parameters: {
    official: { id: 'components-card/card-parts/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Card>{"\\n  "}<ui.CardHeader>{"\\n    "}<ui.CardHeaderTitle>{"Card header"}</ui.CardHeaderTitle>{"\\n    "}<ui.CardHeaderIcon aria-label={"more options"}>{"\\n      "}<ui.Icon>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.CardHeaderIcon>{"\\n  "}</ui.CardHeader>{"\\n"}</ui.Card>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Card image',
  parameters: {
    official: { id: 'components-card/card-parts/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Card>{"\\n  "}<ui.CardImage>{"\\n    "}<ui.Image ratio={"4by3"} src={"./official-assets/1280x960.png"} alt={"Placeholder image"} />{"\\n  "}</ui.CardImage>{"\\n"}</ui.Card>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Card content',
  parameters: {
    official: { id: 'components-card/card-parts/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Card>{"\\n  "}<ui.CardContent>{"\\n    "}<ui.Content>{"\\n      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec\\n      id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus\\n      et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis\\n      consectetur purus sit amet fermentum.\\n    "}</ui.Content>{"\\n  "}</ui.CardContent>{"\\n"}</ui.Card>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Card footer',
  parameters: {
    official: { id: 'components-card/card-parts/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Card>{"\\n  "}<ui.CardFooter>{"\\n    "}<ui.CardFooterItem href={"#"}>{"Save"}</ui.CardFooterItem>{"\\n    "}<ui.CardFooterItem href={"#"}>{"Edit"}</ui.CardFooterItem>{"\\n    "}<ui.CardFooterItem href={"#"}>{"Delete"}</ui.CardFooterItem>{"\\n  "}</ui.CardFooter>{"\\n"}</ui.Card>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Card with header and footer',
  parameters: {
    official: { id: 'components-card/examples/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Card>{"\\n  "}<ui.CardHeader>{"\\n    "}<ui.CardHeaderTitle>{"Component"}</ui.CardHeaderTitle>{"\\n    "}<ui.CardHeaderIcon aria-label={"more options"}>{"\\n      "}<ui.Icon>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.CardHeaderIcon>{"\\n  "}</ui.CardHeader>{"\\n  "}<ui.CardContent>{"\\n    "}<ui.Content>{"\\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec\\n      iaculis mauris.\\n      "}<a href={"#"}>{"@bulmaio"}</a>{". "}<a href={"#"}>{"#css"}</a>{" "}<a href={"#"}>{"#responsive"}</a>{"\\n      "}<br />{"\\n      "}<time dateTime={"2016-1-1"}>{"11:09 PM - 1 Jan 2016"}</time>{"\\n    "}</ui.Content>{"\\n  "}</ui.CardContent>{"\\n  "}<ui.CardFooter>{"\\n    "}<ui.CardFooterItem href={"#"}>{"Save"}</ui.CardFooterItem>{"\\n    "}<ui.CardFooterItem href={"#"}>{"Edit"}</ui.CardFooterItem>{"\\n    "}<ui.CardFooterItem href={"#"}>{"Delete"}</ui.CardFooterItem>{"\\n  "}</ui.CardFooter>{"\\n"}</ui.Card>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Quote card',
  parameters: {
    official: { id: 'components-card/examples/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Card>{"\\n  "}<ui.CardContent>{"\\n    "}<ui.Title as={"p"}>{"\\n      “There are two hard things in computer science: cache invalidation, naming\\n      things, and off-by-one errors.”\\n    "}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Jeff Atwood"}</ui.Subtitle>{"\\n  "}</ui.CardContent>{"\\n  "}<ui.CardFooter>{"\\n    "}<ui.CardFooterItem as={"p"}>{"\\n      "}<span>{"\\n        View on\\n        "}<a href={"https://twitter.com/codinghorror/status/506010907021828096"}>{"Twitter"}</a>{"\\n      "}</span>{"\\n    "}</ui.CardFooterItem>{"\\n    "}<ui.CardFooterItem as={"p"}>{"\\n      "}<span>{" Share on "}<a href={"#"}>{"Facebook"}</a>{" "}</span>{"\\n    "}</ui.CardFooterItem>{"\\n  "}</ui.CardFooter>{"\\n"}</ui.Card>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

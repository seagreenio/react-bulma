import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-panel',
      title: 'Panel',
      url: 'https://bulma.io/documentation/components/panel/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-panel',
  title: 'CSS Library/Components/Panel',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-panel" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Panel'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A composable '}
          <strong data-official-prose="">{'panel'}</strong>
          {', for compact controls'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'panel'}</code>
            {' is a container for several types:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'panel-heading'}</code>
              {' as the first child'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'panel-tabs'}</code>
              {' for navigation'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'panel-block'}</code>
              {' which can contain other elements, like:\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'control'}</code>
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'input'}</code>
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'button'}</code>
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'panel-icon'}</code>
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'panel-block'}</code>
            {' can be an anchor tag '}
            <code data-official-prose="">{'<a>'}</code>
            {' or\n    a label '}
            <code data-official-prose="">{'<label>'}</code>
            {' with a checkbox inside.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-panel/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Colors\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#colors'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The panel component is available in all the\n    '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the\n    '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'. Simply append one of the color modifiers.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    For example, to use your primary color, use\n    '}
            <code data-official-prose="">{'"panel is-primary"'}</code>
            {' as a class.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-panel/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-panel/colors/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-panel/colors/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-panel/colors/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-panel/colors/005">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-panel/colors/006">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n \n\n\n\n\n\n\n\n\n\n'}
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
                        {'$panel-margin'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-margin)'}
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
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$panel-item-border'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-item-border)'}
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
                        {'$panel-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-large)'}
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
                        {'$panel-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-shadow)'}
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
                        {'$panel-heading-line-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-heading-line-height)'}
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
                        {'$panel-heading-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-heading-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1em 1.25em'}
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
                        {'$panel-heading-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-heading-radius)'}
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
                        {'$panel-heading-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-heading-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25em'}
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
                        {'$panel-heading-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-heading-weight)'}
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
                        {'$panel-tabs-font-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-tabs-font-size)'}
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
                        {'$panel-tab-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-tab-border-bottom-color)'}
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
                        {'$panel-tab-border-bottom-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-tab-border-bottom-style)'}
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
                        {'$panel-tab-border-bottom-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-tab-border-bottom-width)'}
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
                        {'$panel-tab-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-tab-active-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-active)'}
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
                        {'$panel-list-item-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-list-item-color)'}
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
                        {'$panel-list-item-hover-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-list-item-hover-color)'}
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
                        {'$panel-block-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-block-color)'}
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
                        {'$panel-block-hover-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-block-hover-background-color)'}
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
                        {'$panel-block-active-border-left-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-block-active-border-left-color)'}
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
                        {'$panel-block-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-block-active-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-active)'}
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
                        {'$panel-block-active-icon-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-block-active-icon-color)'}
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
                        {'$panel-icon-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-panel-icon-color)'}
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
              {'\n        \n      \n        \n      \n    '}
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
      <ui.Panel>
        {' '}
        <ui.PanelHeading>Repositories</ui.PanelHeading>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Control icons={'left'} as={'p'}>
            {' '}
            <ui.Input type={'text'} placeholder={'Search'} />{' '}
            <ui.Icon className={'rb-is-left'}>
              {' '}
              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}
            </ui.Icon>{' '}
          </ui.Control>{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelTabs>
          {' '}
          <ui.PanelTab active>All</ui.PanelTab>{' '}
          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}
          <ui.PanelTab>Sources</ui.PanelTab>{' '}
          <ui.PanelTab>Forks</ui.PanelTab>{' '}
        </ui.PanelTabs>{' '}
        <ui.PanelBlock active as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          bulma{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          marksheet{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          minireset.css{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          jgthms.github.io{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}
          </ui.PanelIcon>{' '}
          daniellowtw/infboard{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}
          </ui.PanelIcon>{' '}
          mojs{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'label'}>
          {' '}
          <input type={'checkbox'} /> remember me{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Button color={'link'} outlined fullWidth>
            {' '}
            Reset all filters{' '}
          </ui.Button>{' '}
        </ui.PanelBlock>{' '}
      </ui.Panel>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Panel color={'link'} as={'article'}>
        {' '}
        <ui.PanelHeading>Link</ui.PanelHeading>{' '}
        <ui.PanelTabs>
          {' '}
          <ui.PanelTab active>All</ui.PanelTab>{' '}
          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}
          <ui.PanelTab>Sources</ui.PanelTab>{' '}
          <ui.PanelTab>Forks</ui.PanelTab>{' '}
        </ui.PanelTabs>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Control icons={'left'} as={'p'}>
            {' '}
            <ui.Input
              type={'text'}
              placeholder={'Search'}
              color={'link'}
            />{' '}
            <ui.Icon className={'rb-is-left'}>
              {' '}
              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}
            </ui.Icon>{' '}
          </ui.Control>{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock active as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          bulma{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          marksheet{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          minireset.css{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          jgthms.github.io{' '}
        </ui.PanelBlock>{' '}
      </ui.Panel>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Panel color={'primary'} as={'article'}>
        {' '}
        <ui.PanelHeading>Primary</ui.PanelHeading>{' '}
        <ui.PanelTabs>
          {' '}
          <ui.PanelTab active>All</ui.PanelTab>{' '}
          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}
          <ui.PanelTab>Sources</ui.PanelTab>{' '}
          <ui.PanelTab>Forks</ui.PanelTab>{' '}
        </ui.PanelTabs>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Control icons={'left'} as={'p'}>
            {' '}
            <ui.Input
              type={'text'}
              placeholder={'Search'}
              color={'primary'}
            />{' '}
            <ui.Icon className={'rb-is-left'}>
              {' '}
              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}
            </ui.Icon>{' '}
          </ui.Control>{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock active as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          bulma{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          marksheet{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          minireset.css{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          jgthms.github.io{' '}
        </ui.PanelBlock>{' '}
      </ui.Panel>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Panel color={'info'} as={'article'}>
        {' '}
        <ui.PanelHeading>Info</ui.PanelHeading>{' '}
        <ui.PanelTabs>
          {' '}
          <ui.PanelTab active>All</ui.PanelTab>{' '}
          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}
          <ui.PanelTab>Sources</ui.PanelTab>{' '}
          <ui.PanelTab>Forks</ui.PanelTab>{' '}
        </ui.PanelTabs>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Control icons={'left'} as={'p'}>
            {' '}
            <ui.Input
              type={'text'}
              placeholder={'Search'}
              color={'info'}
            />{' '}
            <ui.Icon className={'rb-is-left'}>
              {' '}
              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}
            </ui.Icon>{' '}
          </ui.Control>{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock active as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          bulma{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          marksheet{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          minireset.css{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          jgthms.github.io{' '}
        </ui.PanelBlock>{' '}
      </ui.Panel>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Panel color={'success'} as={'article'}>
        {' '}
        <ui.PanelHeading>Success</ui.PanelHeading>{' '}
        <ui.PanelTabs>
          {' '}
          <ui.PanelTab active>All</ui.PanelTab>{' '}
          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}
          <ui.PanelTab>Sources</ui.PanelTab>{' '}
          <ui.PanelTab>Forks</ui.PanelTab>{' '}
        </ui.PanelTabs>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Control icons={'left'} as={'p'}>
            {' '}
            <ui.Input
              type={'text'}
              placeholder={'Search'}
              color={'success'}
            />{' '}
            <ui.Icon className={'rb-is-left'}>
              {' '}
              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}
            </ui.Icon>{' '}
          </ui.Control>{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock active as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          bulma{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          marksheet{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          minireset.css{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          jgthms.github.io{' '}
        </ui.PanelBlock>{' '}
      </ui.Panel>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.Panel color={'warning'} as={'article'}>
        {' '}
        <ui.PanelHeading>Warning</ui.PanelHeading>{' '}
        <ui.PanelTabs>
          {' '}
          <ui.PanelTab active>All</ui.PanelTab>{' '}
          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}
          <ui.PanelTab>Sources</ui.PanelTab>{' '}
          <ui.PanelTab>Forks</ui.PanelTab>{' '}
        </ui.PanelTabs>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Control icons={'left'} as={'p'}>
            {' '}
            <ui.Input
              type={'text'}
              placeholder={'Search'}
              color={'warning'}
            />{' '}
            <ui.Icon className={'rb-is-left'}>
              {' '}
              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}
            </ui.Icon>{' '}
          </ui.Control>{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock active as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          bulma{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          marksheet{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          minireset.css{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          jgthms.github.io{' '}
        </ui.PanelBlock>{' '}
      </ui.Panel>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <ui.Panel color={'danger'} as={'article'}>
        {' '}
        <ui.PanelHeading>Danger</ui.PanelHeading>{' '}
        <ui.PanelTabs>
          {' '}
          <ui.PanelTab active>All</ui.PanelTab>{' '}
          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}
          <ui.PanelTab>Sources</ui.PanelTab>{' '}
          <ui.PanelTab>Forks</ui.PanelTab>{' '}
        </ui.PanelTabs>{' '}
        <ui.PanelBlock>
          {' '}
          <ui.Control icons={'left'} as={'p'}>
            {' '}
            <ui.Input
              type={'text'}
              placeholder={'Search'}
              color={'danger'}
            />{' '}
            <ui.Icon className={'rb-is-left'}>
              {' '}
              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}
            </ui.Icon>{' '}
          </ui.Control>{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock active as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          bulma{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          marksheet{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          minireset.css{' '}
        </ui.PanelBlock>{' '}
        <ui.PanelBlock as={'a'}>
          {' '}
          <ui.PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </ui.PanelIcon>{' '}
          jgthms.github.io{' '}
        </ui.PanelBlock>{' '}
      </ui.Panel>
    </>
  )
}

export const Example001 = {
  name: 'Repository panel',
  parameters: {
    official: { id: 'components-panel/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Panel>\n        {' '}\n        <ui.PanelHeading>Repositories</ui.PanelHeading>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Control icons={'left'} as={'p'}>\n            {' '}\n            <ui.Input type={'text'} placeholder={'Search'} />{' '}\n            <ui.Icon className={'rb-is-left'}>\n              {' '}\n              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}\n            </ui.Icon>{' '}\n          </ui.Control>{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelTabs>\n          {' '}\n          <ui.PanelTab active>All</ui.PanelTab>{' '}\n          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}\n          <ui.PanelTab>Sources</ui.PanelTab>{' '}\n          <ui.PanelTab>Forks</ui.PanelTab>{' '}\n        </ui.PanelTabs>{' '}\n        <ui.PanelBlock active as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          bulma{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          marksheet{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          minireset.css{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          jgthms.github.io{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}\n          </ui.PanelIcon>{' '}\n          daniellowtw/infboard{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}\n          </ui.PanelIcon>{' '}\n          mojs{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'label'}>\n          {' '}\n          <input type={'checkbox'} /> remember me{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Button color={'link'} outlined fullWidth>\n            {' '}\n            Reset all filters{' '}\n          </ui.Button>{' '}\n        </ui.PanelBlock>{' '}\n      </ui.Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Link panel',
  parameters: {
    official: { id: 'components-panel/colors/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Panel color={'link'} as={'article'}>\n        {' '}\n        <ui.PanelHeading>Link</ui.PanelHeading>{' '}\n        <ui.PanelTabs>\n          {' '}\n          <ui.PanelTab active>All</ui.PanelTab>{' '}\n          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}\n          <ui.PanelTab>Sources</ui.PanelTab>{' '}\n          <ui.PanelTab>Forks</ui.PanelTab>{' '}\n        </ui.PanelTabs>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Control icons={'left'} as={'p'}>\n            {' '}\n            <ui.Input\n              type={'text'}\n              placeholder={'Search'}\n              color={'link'}\n            />{' '}\n            <ui.Icon className={'rb-is-left'}>\n              {' '}\n              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}\n            </ui.Icon>{' '}\n          </ui.Control>{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock active as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          bulma{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          marksheet{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          minireset.css{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          jgthms.github.io{' '}\n        </ui.PanelBlock>{' '}\n      </ui.Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Primary panel',
  parameters: {
    official: { id: 'components-panel/colors/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Panel color={'primary'} as={'article'}>\n        {' '}\n        <ui.PanelHeading>Primary</ui.PanelHeading>{' '}\n        <ui.PanelTabs>\n          {' '}\n          <ui.PanelTab active>All</ui.PanelTab>{' '}\n          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}\n          <ui.PanelTab>Sources</ui.PanelTab>{' '}\n          <ui.PanelTab>Forks</ui.PanelTab>{' '}\n        </ui.PanelTabs>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Control icons={'left'} as={'p'}>\n            {' '}\n            <ui.Input\n              type={'text'}\n              placeholder={'Search'}\n              color={'primary'}\n            />{' '}\n            <ui.Icon className={'rb-is-left'}>\n              {' '}\n              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}\n            </ui.Icon>{' '}\n          </ui.Control>{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock active as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          bulma{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          marksheet{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          minireset.css{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          jgthms.github.io{' '}\n        </ui.PanelBlock>{' '}\n      </ui.Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Info panel',
  parameters: {
    official: { id: 'components-panel/colors/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Panel color={'info'} as={'article'}>\n        {' '}\n        <ui.PanelHeading>Info</ui.PanelHeading>{' '}\n        <ui.PanelTabs>\n          {' '}\n          <ui.PanelTab active>All</ui.PanelTab>{' '}\n          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}\n          <ui.PanelTab>Sources</ui.PanelTab>{' '}\n          <ui.PanelTab>Forks</ui.PanelTab>{' '}\n        </ui.PanelTabs>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Control icons={'left'} as={'p'}>\n            {' '}\n            <ui.Input\n              type={'text'}\n              placeholder={'Search'}\n              color={'info'}\n            />{' '}\n            <ui.Icon className={'rb-is-left'}>\n              {' '}\n              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}\n            </ui.Icon>{' '}\n          </ui.Control>{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock active as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          bulma{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          marksheet{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          minireset.css{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          jgthms.github.io{' '}\n        </ui.PanelBlock>{' '}\n      </ui.Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Success panel',
  parameters: {
    official: { id: 'components-panel/colors/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Panel color={'success'} as={'article'}>\n        {' '}\n        <ui.PanelHeading>Success</ui.PanelHeading>{' '}\n        <ui.PanelTabs>\n          {' '}\n          <ui.PanelTab active>All</ui.PanelTab>{' '}\n          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}\n          <ui.PanelTab>Sources</ui.PanelTab>{' '}\n          <ui.PanelTab>Forks</ui.PanelTab>{' '}\n        </ui.PanelTabs>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Control icons={'left'} as={'p'}>\n            {' '}\n            <ui.Input\n              type={'text'}\n              placeholder={'Search'}\n              color={'success'}\n            />{' '}\n            <ui.Icon className={'rb-is-left'}>\n              {' '}\n              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}\n            </ui.Icon>{' '}\n          </ui.Control>{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock active as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          bulma{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          marksheet{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          minireset.css{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          jgthms.github.io{' '}\n        </ui.PanelBlock>{' '}\n      </ui.Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Warning panel',
  parameters: {
    official: { id: 'components-panel/colors/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example006Demo() {\n  return (\n    <>\n      <ui.Panel color={'warning'} as={'article'}>\n        {' '}\n        <ui.PanelHeading>Warning</ui.PanelHeading>{' '}\n        <ui.PanelTabs>\n          {' '}\n          <ui.PanelTab active>All</ui.PanelTab>{' '}\n          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}\n          <ui.PanelTab>Sources</ui.PanelTab>{' '}\n          <ui.PanelTab>Forks</ui.PanelTab>{' '}\n        </ui.PanelTabs>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Control icons={'left'} as={'p'}>\n            {' '}\n            <ui.Input\n              type={'text'}\n              placeholder={'Search'}\n              color={'warning'}\n            />{' '}\n            <ui.Icon className={'rb-is-left'}>\n              {' '}\n              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}\n            </ui.Icon>{' '}\n          </ui.Control>{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock active as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          bulma{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          marksheet{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          minireset.css{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          jgthms.github.io{' '}\n        </ui.PanelBlock>{' '}\n      </ui.Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Danger panel',
  parameters: {
    official: { id: 'components-panel/colors/006' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example007Demo() {\n  return (\n    <>\n      <ui.Panel color={'danger'} as={'article'}>\n        {' '}\n        <ui.PanelHeading>Danger</ui.PanelHeading>{' '}\n        <ui.PanelTabs>\n          {' '}\n          <ui.PanelTab active>All</ui.PanelTab>{' '}\n          <ui.PanelTab>Public</ui.PanelTab> <ui.PanelTab>Private</ui.PanelTab>{' '}\n          <ui.PanelTab>Sources</ui.PanelTab>{' '}\n          <ui.PanelTab>Forks</ui.PanelTab>{' '}\n        </ui.PanelTabs>{' '}\n        <ui.PanelBlock>\n          {' '}\n          <ui.Control icons={'left'} as={'p'}>\n            {' '}\n            <ui.Input\n              type={'text'}\n              placeholder={'Search'}\n              color={'danger'}\n            />{' '}\n            <ui.Icon className={'rb-is-left'}>\n              {' '}\n              <i aria-hidden={'true'} className={'fas fa-search'} />{' '}\n            </ui.Icon>{' '}\n          </ui.Control>{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock active as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          bulma{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          marksheet{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          minireset.css{' '}\n        </ui.PanelBlock>{' '}\n        <ui.PanelBlock as={'a'}>\n          {' '}\n          <ui.PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </ui.PanelIcon>{' '}\n          jgthms.github.io{' '}\n        </ui.PanelBlock>{' '}\n      </ui.Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

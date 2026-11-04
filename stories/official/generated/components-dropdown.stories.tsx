import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-dropdown',
      title: 'Dropdown',
      url: 'https://bulma.io/documentation/components/dropdown/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-dropdown',
  title: 'CSS Library/Components/Dropdown',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-dropdown" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Dropdown'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'An interactive '}
          <strong data-official-prose="">{'dropdown menu'}</strong>
          {' for discoverable content'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n      \n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'dropdown'}</code>
            {
              ' component is a container for a dropdown button and\n    a dropdown menu.\n  '
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'dropdown'}</code>
              {' the '}
              <strong data-official-prose="">{'main'}</strong>
              {' container\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'dropdown-trigger'}</code>
                  {' the container for a '}
                  <code data-official-prose="">{'button'}</code>
                  {'\n        '}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'dropdown-menu'}</code>
                  {' the toggable menu,\n          '}
                  <strong data-official-prose="">{'hidden'}</strong>
                  {' by default\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      {'\n              '}
                      <code data-official-prose="">{'dropdown-content'}</code>
                      {' the dropdown '}
                      <strong data-official-prose="">{'box'}</strong>
                      {
                        ',\n              with a white background and a shadow\n              '
                      }
                      <ul data-official-prose="">
                        {'\n                '}
                        <li data-official-prose="">
                          {'\n                  '}
                          <code data-official-prose="">{'dropdown-item'}</code>
                          {' each\n                  '}
                          <strong data-official-prose="">
                            {'single item'}
                          </strong>
                          {
                            ' of the dropdown, which can either\n                  be a '
                          }
                          <code data-official-prose="">{'a'}</code>
                          {' or a '}
                          <code data-official-prose="">{'div'}</code>
                          {'\n                '}
                        </li>
                        {'\n                '}
                        <li data-official-prose="">
                          {'\n                  '}
                          <code data-official-prose="">
                            {'dropdown-divider'}
                          </code>
                          {' a\n                  '}
                          <strong data-official-prose="">
                            {'horizontal line'}
                          </strong>
                          {' to separate dropdown items\n                '}
                        </li>
                        {'\n              '}
                      </ul>
                      {'\n            '}
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
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-dropdown/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'dropdown-content'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Dropdown content\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#dropdown-content'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    While the '}
            <code data-official-prose="">{'dropdown-item'}</code>
            {' can be used as an anchor link\n    '}
            <code data-official-prose="">{'<a>'}</code>
            {', you can also use a '}
            <code data-official-prose="">{'<div>'}</code>
            {' and\n    insert almost '}
            <strong data-official-prose="">{'any type of content'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-dropdown/dropdown-content/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'hoverable-or-toggable'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Hoverable or Toggable\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#hoverable-or-toggable'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'dropdown'}</code>
            {' component has\n    '}
            <strong data-official-prose="">{'2 additional modifiers'}</strong>
            {'\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-hoverable'}</code>
              {': the dropdown will show up when\n      '}
              <strong data-official-prose="">{'hovering'}</strong>
              {' the '}
              <code data-official-prose="">{'dropdown-trigger'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-active'}</code>
              {': the dropdown will show up\n      '}
              <strong data-official-prose="">{'all the time'}</strong>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-success'}>
          {'\n  '}
          <p data-official-prose="" className={'message-body'}>
            {'\n    While the CSS '}
            <code data-official-prose="">{':hover'}</code>
            {' implementation works perfectly, the\n    '}
            <code data-official-prose="">{'is-active'}</code>
            {
              ' class is available for users who want to control the\n    display of the dropdown with '
            }
            <strong data-official-prose="">{'JavaScript'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-dropdown/hoverable-or-toggable/001">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-dropdown/hoverable-or-toggable/002">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'right-aligned'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Right aligned\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#right-aligned'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can add the '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifier to have a\n    '}
            <strong data-official-prose="">{'right-aligned'}</strong>
            {' dropdown.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-dropdown/right-aligned/001">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-dropdown/right-aligned/002">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'dropup'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Dropup\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#dropup'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can add the '}
            <code data-official-prose="">{'is-up'}</code>
            {
              ' modifier to have a dropdown menu that\n    appears above the dropdown button.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-dropdown/dropup/001">
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
                        {'$dropdown-menu-min-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-menu-min-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'12rem'}
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
                        {'$dropdown-content-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-content-background-color)'}
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
                        {'$dropdown-content-offset'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-content-offset)'}
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
                        {'$dropdown-content-padding-bottom'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-content-padding-bottom)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5rem'}
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
                        {'$dropdown-content-padding-top'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-content-padding-top)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5rem'}
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
                        {'$dropdown-content-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-content-radius)'}
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
                        {'$dropdown-content-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-content-shadow)'}
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
                        {'$dropdown-content-z'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-content-z)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'20'}
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
                        {'$dropdown-divider-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-dropdown-divider-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border-weak)'}
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
      <ui.Dropdown defaultOpen>
        {'\n  '}
        <ui.DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu'}
        >
          {'\n      '}
          <span>{'Dropdown button'}</span>
          {'\n      '}
          <ui.Icon size={'small'}>
            {'\n        '}
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            {'\n      '}
          </ui.Icon>
          {'\n    '}
        </ui.DropdownTrigger>
        {'\n  '}
        <ui.DropdownMenu id={'dropdown-menu'} role={'menu'}>
          {'\n    '}
          <ui.DropdownContent>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Dropdown item '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem as={'a'}>
              {' Other dropdown item '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} active as={'a'}>
              {' Active dropdown item '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Other dropdown item '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownDivider />
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' With a divider '}
            </ui.DropdownItem>
            {'\n    '}
          </ui.DropdownContent>
          {'\n  '}
        </ui.DropdownMenu>
        {'\n'}
      </ui.Dropdown>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Dropdown defaultOpen>
        {'\n  '}
        <ui.DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu2'}
        >
          {'\n      '}
          <span>{'Content'}</span>
          {'\n      '}
          <ui.Icon size={'small'}>
            {'\n        '}
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            {'\n      '}
          </ui.Icon>
          {'\n    '}
        </ui.DropdownTrigger>
        {'\n  '}
        <ui.DropdownMenu id={'dropdown-menu2'} role={'menu'}>
          {'\n    '}
          <ui.DropdownContent>
            {'\n      '}
            <ui.DropdownItem as={'div'}>
              {'\n        '}
              <p>
                {'\n          You can insert '}
                <strong>{'any type of content'}</strong>
                {' within the\n          dropdown menu.\n        '}
              </p>
              {'\n      '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownDivider />
            {'\n      '}
            <ui.DropdownItem as={'div'}>
              {'\n        '}
              <p>
                {'You simply need to use a '}
                <code>{'<div>'}</code>
                {' instead.'}
              </p>
              {'\n      '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownDivider />
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' This is a link '}
            </ui.DropdownItem>
            {'\n    '}
          </ui.DropdownContent>
          {'\n  '}
        </ui.DropdownMenu>
        {'\n'}
      </ui.Dropdown>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Dropdown>
        {'\n  '}
        <ui.DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu3'}
        >
          {'\n      '}
          <span>{'Click me'}</span>
          {'\n      '}
          <ui.Icon size={'small'}>
            {'\n        '}
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            {'\n      '}
          </ui.Icon>
          {'\n    '}
        </ui.DropdownTrigger>
        {'\n  '}
        <ui.DropdownMenu id={'dropdown-menu3'} role={'menu'}>
          {'\n    '}
          <ui.DropdownContent>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Overview '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Modifiers '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Grid '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Form '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Elements '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Components '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' Layout '}
            </ui.DropdownItem>
            {'\n      '}
            <ui.DropdownDivider />
            {'\n      '}
            <ui.DropdownItem href={'#'} as={'a'}>
              {' More '}
            </ui.DropdownItem>
            {'\n    '}
          </ui.DropdownContent>
          {'\n  '}
        </ui.DropdownMenu>
        {'\n'}
      </ui.Dropdown>
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Dropdown hoverable>
        {'\n  '}
        <ui.DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu4'}
        >
          {'\n      '}
          <span>{'Hover me'}</span>
          {'\n      '}
          <ui.Icon size={'small'}>
            {'\n        '}
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            {'\n      '}
          </ui.Icon>
          {'\n    '}
        </ui.DropdownTrigger>
        {'\n  '}
        <ui.DropdownMenu id={'dropdown-menu4'} role={'menu'}>
          {'\n    '}
          <ui.DropdownContent>
            {'\n      '}
            <ui.DropdownItem as={'div'}>
              {'\n        '}
              <p>
                {'\n          You can insert '}
                <strong>{'any type of content'}</strong>
                {' within the\n          dropdown menu.\n        '}
              </p>
              {'\n      '}
            </ui.DropdownItem>
            {'\n    '}
          </ui.DropdownContent>
          {'\n  '}
        </ui.DropdownMenu>
        {'\n'}
      </ui.Dropdown>
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Dropdown defaultOpen>
        {'\n  '}
        <ui.DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu5'}
        >
          {'\n      '}
          <span>{'Left aligned'}</span>
          {'\n      '}
          <ui.Icon size={'small'}>
            {'\n        '}
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            {'\n      '}
          </ui.Icon>
          {'\n    '}
        </ui.DropdownTrigger>
        {'\n  '}
        <ui.DropdownMenu id={'dropdown-menu5'} role={'menu'}>
          {'\n    '}
          <ui.DropdownContent>
            {'\n      '}
            <ui.DropdownItem as={'div'}>
              {'\n        '}
              <p>
                {'The dropdown is '}
                <strong>{'left-aligned'}</strong>
                {' by default.'}
              </p>
              {'\n      '}
            </ui.DropdownItem>
            {'\n    '}
          </ui.DropdownContent>
          {'\n  '}
        </ui.DropdownMenu>
        {'\n'}
      </ui.Dropdown>
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Dropdown right defaultOpen>
        {'\n  '}
        <ui.DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu6'}
        >
          {'\n      '}
          <span>{'Right aligned'}</span>
          {'\n      '}
          <ui.Icon size={'small'}>
            {'\n        '}
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            {'\n      '}
          </ui.Icon>
          {'\n    '}
        </ui.DropdownTrigger>
        {'\n  '}
        <ui.DropdownMenu id={'dropdown-menu6'} role={'menu'}>
          {'\n    '}
          <ui.DropdownContent>
            {'\n      '}
            <ui.DropdownItem as={'div'}>
              {'\n        '}
              <p>
                {'\n          Add the '}
                <code>{'is-right'}</code>
                {' modifier for a\n          '}
                <strong>{'right-aligned'}</strong>
                {' dropdown.\n        '}
              </p>
              {'\n      '}
            </ui.DropdownItem>
            {'\n    '}
          </ui.DropdownContent>
          {'\n  '}
        </ui.DropdownMenu>
        {'\n'}
      </ui.Dropdown>
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Dropdown up>
        {'\n  '}
        <ui.DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu7'}
        >
          {'\n      '}
          <span>{'Dropup button'}</span>
          {'\n      '}
          <ui.Icon size={'small'}>
            {'\n        '}
            <i aria-hidden={'true'} className={'fas fa-angle-up'} />
            {'\n      '}
          </ui.Icon>
          {'\n    '}
        </ui.DropdownTrigger>
        {'\n  '}
        <ui.DropdownMenu id={'dropdown-menu7'} role={'menu'}>
          {'\n    '}
          <ui.DropdownContent>
            {'\n      '}
            <ui.DropdownItem as={'div'}>
              {'\n        '}
              <p>
                {'\n          You can add the '}
                <code>{'is-up'}</code>
                {
                  ' modifier to have a dropdown menu\n          that appears above the dropdown button.\n        '
                }
              </p>
              {'\n      '}
            </ui.DropdownItem>
            {'\n    '}
          </ui.DropdownContent>
          {'\n  '}
        </ui.DropdownMenu>
        {'\n'}
      </ui.Dropdown>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Open dropdown',
  parameters: {
    official: { id: 'components-dropdown/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Dropdown defaultOpen>{"\\n  "}<ui.DropdownTrigger aria-haspopup={"true"} aria-controls={"dropdown-menu"}>{"\\n      "}<span>{"Dropdown button"}</span>{"\\n      "}<ui.Icon size={"small"}>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.DropdownTrigger>{"\\n  "}<ui.DropdownMenu id={"dropdown-menu"} role={"menu"}>{"\\n    "}<ui.DropdownContent>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Dropdown item "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem as={"a"}>{" Other dropdown item "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} active as={"a"}>{" Active dropdown item "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Other dropdown item "}</ui.DropdownItem>{"\\n      "}<ui.DropdownDivider />{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" With a divider "}</ui.DropdownItem>{"\\n    "}</ui.DropdownContent>{"\\n  "}</ui.DropdownMenu>{"\\n"}</ui.Dropdown>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Rich dropdown content',
  parameters: {
    official: { id: 'components-dropdown/dropdown-content/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Dropdown defaultOpen>{"\\n  "}<ui.DropdownTrigger aria-haspopup={"true"} aria-controls={"dropdown-menu2"}>{"\\n      "}<span>{"Content"}</span>{"\\n      "}<ui.Icon size={"small"}>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.DropdownTrigger>{"\\n  "}<ui.DropdownMenu id={"dropdown-menu2"} role={"menu"}>{"\\n    "}<ui.DropdownContent>{"\\n      "}<ui.DropdownItem as={"div"}>{"\\n        "}<p>{"\\n          You can insert "}<strong>{"any type of content"}</strong>{" within the\\n          dropdown menu.\\n        "}</p>{"\\n      "}</ui.DropdownItem>{"\\n      "}<ui.DropdownDivider />{"\\n      "}<ui.DropdownItem as={"div"}>{"\\n        "}<p>{"You simply need to use a "}<code>{"<div>"}</code>{" instead."}</p>{"\\n      "}</ui.DropdownItem>{"\\n      "}<ui.DropdownDivider />{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" This is a link "}</ui.DropdownItem>{"\\n    "}</ui.DropdownContent>{"\\n  "}</ui.DropdownMenu>{"\\n"}</ui.Dropdown>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Click to toggle',
  parameters: {
    official: { id: 'components-dropdown/hoverable-or-toggable/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Dropdown>{"\\n  "}<ui.DropdownTrigger aria-haspopup={"true"} aria-controls={"dropdown-menu3"}>{"\\n      "}<span>{"Click me"}</span>{"\\n      "}<ui.Icon size={"small"}>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.DropdownTrigger>{"\\n  "}<ui.DropdownMenu id={"dropdown-menu3"} role={"menu"}>{"\\n    "}<ui.DropdownContent>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Overview "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Modifiers "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Grid "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Form "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Elements "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Components "}</ui.DropdownItem>{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" Layout "}</ui.DropdownItem>{"\\n      "}<ui.DropdownDivider />{"\\n      "}<ui.DropdownItem href={"#"} as={"a"}>{" More "}</ui.DropdownItem>{"\\n    "}</ui.DropdownContent>{"\\n  "}</ui.DropdownMenu>{"\\n"}</ui.Dropdown>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Hover to open',
  parameters: {
    official: { id: 'components-dropdown/hoverable-or-toggable/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Dropdown hoverable>{"\\n  "}<ui.DropdownTrigger aria-haspopup={"true"} aria-controls={"dropdown-menu4"}>{"\\n      "}<span>{"Hover me"}</span>{"\\n      "}<ui.Icon size={"small"}>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.DropdownTrigger>{"\\n  "}<ui.DropdownMenu id={"dropdown-menu4"} role={"menu"}>{"\\n    "}<ui.DropdownContent>{"\\n      "}<ui.DropdownItem as={"div"}>{"\\n        "}<p>{"\\n          You can insert "}<strong>{"any type of content"}</strong>{" within the\\n          dropdown menu.\\n        "}</p>{"\\n      "}</ui.DropdownItem>{"\\n    "}</ui.DropdownContent>{"\\n  "}</ui.DropdownMenu>{"\\n"}</ui.Dropdown>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Left-aligned dropdown',
  parameters: {
    official: { id: 'components-dropdown/right-aligned/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Dropdown defaultOpen>{"\\n  "}<ui.DropdownTrigger aria-haspopup={"true"} aria-controls={"dropdown-menu5"}>{"\\n      "}<span>{"Left aligned"}</span>{"\\n      "}<ui.Icon size={"small"}>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.DropdownTrigger>{"\\n  "}<ui.DropdownMenu id={"dropdown-menu5"} role={"menu"}>{"\\n    "}<ui.DropdownContent>{"\\n      "}<ui.DropdownItem as={"div"}>{"\\n        "}<p>{"The dropdown is "}<strong>{"left-aligned"}</strong>{" by default."}</p>{"\\n      "}</ui.DropdownItem>{"\\n    "}</ui.DropdownContent>{"\\n  "}</ui.DropdownMenu>{"\\n"}</ui.Dropdown>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Right-aligned dropdown',
  parameters: {
    official: { id: 'components-dropdown/right-aligned/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Dropdown right defaultOpen>{"\\n  "}<ui.DropdownTrigger aria-haspopup={"true"} aria-controls={"dropdown-menu6"}>{"\\n      "}<span>{"Right aligned"}</span>{"\\n      "}<ui.Icon size={"small"}>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-down"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.DropdownTrigger>{"\\n  "}<ui.DropdownMenu id={"dropdown-menu6"} role={"menu"}>{"\\n    "}<ui.DropdownContent>{"\\n      "}<ui.DropdownItem as={"div"}>{"\\n        "}<p>{"\\n          Add the "}<code>{"is-right"}</code>{" modifier for a\\n          "}<strong>{"right-aligned"}</strong>{" dropdown.\\n        "}</p>{"\\n      "}</ui.DropdownItem>{"\\n    "}</ui.DropdownContent>{"\\n  "}</ui.DropdownMenu>{"\\n"}</ui.Dropdown>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Dropup menu',
  parameters: {
    official: { id: 'components-dropdown/dropup/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Dropdown up>{"\\n  "}<ui.DropdownTrigger aria-haspopup={"true"} aria-controls={"dropdown-menu7"}>{"\\n      "}<span>{"Dropup button"}</span>{"\\n      "}<ui.Icon size={"small"}>{"\\n        "}<i aria-hidden={"true"} className={"fas fa-angle-up"} />{"\\n      "}</ui.Icon>{"\\n    "}</ui.DropdownTrigger>{"\\n  "}<ui.DropdownMenu id={"dropdown-menu7"} role={"menu"}>{"\\n    "}<ui.DropdownContent>{"\\n      "}<ui.DropdownItem as={"div"}>{"\\n        "}<p>{"\\n          You can add the "}<code>{"is-up"}</code>{" modifier to have a dropdown menu\\n          that appears above the dropdown button.\\n        "}</p>{"\\n      "}</ui.DropdownItem>{"\\n    "}</ui.DropdownContent>{"\\n  "}</ui.DropdownMenu>{"\\n"}</ui.Dropdown>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

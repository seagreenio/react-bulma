import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

const meta = {
  ...officialPage(
    {
      id: 'elements-notification',
      title: 'Notification',
      url: 'https://bulma.io/documentation/elements/notification/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-notification',
  title: 'CSS Library/Elements/Notification',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-notification" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Notification'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Bold '}
          <strong data-official-prose="">{'notification'}</strong>
          {' blocks, to alert your users of something'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              "\n    The notification is a simple colored block meant to draw the attention to the user about something. As such, it can\n    be used as a pinned notification in the corner of the viewport. That's why it supports the use of the\n    "
            }
            <code data-official-prose="">{'delete'}</code>
            {' element.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
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
            {'\n    The notification element is available in all the\n    '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the\n    '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/colors/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/colors/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/colors/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/colors/005">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/colors/006">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'light-colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Light colors\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#light-colors'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  Each color also comes in its '}
          <strong data-official-prose="">{'light'}</strong>
          {' version. Simply append the '}
          <code data-official-prose="">{'is-light'}</code>
          {' modifier to\n  obtain the light version of the notification.\n'}
        </div>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/light-colors/001">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/light-colors/002">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/light-colors/003">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/light-colors/004">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/light-colors/005">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-notification/light-colors/006">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'javascript-example'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    JavaScript example\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#javascript-example'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The Bulma package '}
            <strong data-official-prose="">
              {'does not come with any JavaScript'}
            </strong>
            {
              '. Here is however an implementation example,\n    which sets the '
            }
            <code data-official-prose="">{'click'}</code>
            {' handler for Bulma '}
            <code data-official-prose="">{'delete'}</code>
            {' elements, anywhere on the page, in vanilla\n    JavaScript.\n  '}
          </p>
          {'\n\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="notification">\n  <button class="delete"></button>\n  Lorem ipsum\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-javascript'}>
                {
                  "\ndocument.addEventListener('DOMContentLoaded', () => {\n  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {\n    const $notification = $delete.parentNode;\n\n    $delete.addEventListener('click', () => {\n      $notification.parentNode.removeChild($notification);\n    });\n  });\n});\n"
                }
              </code>
            </pre>
          </div>
          {'\n'}
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
                        {'$notification-code-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-notification-code-background-color)'}
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
                        {'$notification-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-notification-radius)'}
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
                        {'$notification-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-notification-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.375em 1.5em'}
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
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\n  '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,\n  et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'link'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'primary'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'info'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'success'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'warning'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'danger'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'link'} tone={'light'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'primary'} tone={'light'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'info'} tone={'light'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'success'} tone={'light'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'warning'} tone={'light'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Notification color={'danger'} tone={'light'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\n  dolor. '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur.\n'}
        </ui.Notification>
      )}
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Notification 01',
  parameters: {
    official: { id: 'elements-notification/basic/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\\n  "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,\\n  et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'colors 01',
  parameters: {
    official: { id: 'elements-notification/colors/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"link"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'colors 02',
  parameters: {
    official: { id: 'elements-notification/colors/002' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"primary"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'colors 03',
  parameters: {
    official: { id: 'elements-notification/colors/003' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"info"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'colors 04',
  parameters: {
    official: { id: 'elements-notification/colors/004' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"success"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'colors 05',
  parameters: {
    official: { id: 'elements-notification/colors/005' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"warning"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'colors 06',
  parameters: {
    official: { id: 'elements-notification/colors/006' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"danger"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'light colors 01',
  parameters: {
    official: { id: 'elements-notification/light-colors/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"link"} tone={"light"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'light colors 02',
  parameters: {
    official: { id: 'elements-notification/light-colors/002' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"primary"} tone={"light"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'light colors 03',
  parameters: {
    official: { id: 'elements-notification/light-colors/003' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"info"} tone={"light"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'light colors 04',
  parameters: {
    official: { id: 'elements-notification/light-colors/004' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"success"} tone={"light"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'light colors 05',
  parameters: {
    official: { id: 'elements-notification/light-colors/005' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example012Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"warning"} tone={"light"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'light colors 06',
  parameters: {
    official: { id: 'elements-notification/light-colors/006' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example013Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Notification color={"danger"} tone={"light"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum\\n  dolor. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta\\n  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n  diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n"}</ui.Notification>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

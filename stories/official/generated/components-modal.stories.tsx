import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

const meta = {
  ...officialPage(
    {
      id: 'components-modal',
      title: 'Modal',
      url: 'https://bulma.io/documentation/components/modal/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-modal',
  title: 'CSS Library/Components/Modal',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-modal" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Modal'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A classic '}
          <strong data-official-prose="">{'modal'}</strong>
          {' overlay, in which you can include '}
          <em data-official-prose="">{'any'}</em>
          {' content you want'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">{'The modal structure is very simple:'}</p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'modal'}</code>
              {': the main container\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'modal-background'}</code>
                  {
                    ': a transparent overlay that can act as a click target to close the modal'
                  }
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'modal-content'}</code>
                  {
                    ': a horizontally and vertically centered container, with a maximum width of 640px,\n          in which you can include '
                  }
                  <em data-official-prose="">{'any'}</em>
                  {' content\n        '}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'modal-close'}</code>
                  {': a simple cross located in the top right corner'}
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <button
            data-official-prose=""
            className={
              'button is-primary is-large modal-button js-modal-trigger'
            }
            data-target={'modal'}
            aria-haspopup={'true'}
          >
            {'\n      Launch example modal\n    '}
          </button>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="modal">\n  <div class="modal-background"></div>\n  <div class="modal-content">\n    <!-- Any other Bulma elements you want -->\n  </div>\n  <button class="modal-close is-large" aria-label="close"></button>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    To '}
            <strong data-official-prose="">{'activate'}</strong>
            {' the modal, just add the '}
            <code data-official-prose="">{'is-active'}</code>
            {' modifier on the\n    '}
            <code data-official-prose="">{'.modal'}</code>
            {' container. You may also want to add '}
            <code data-official-prose="">{'is-clipped'}</code>
            {' modifier to a containing element\n    (usually '}
            <code data-official-prose="">{'html'}</code>
            {') to stop scroll overflow.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-info'}>
          {'\n  '}
          <div data-official-prose="" className={'message-header'}>
            {'JavaScript implementation example'}
          </div>
          {'\n  '}
          <div data-official-prose="" className={'message-body'}>
            {
              '\n    Bulma does not include any JavaScript. However, this documentation provides a\n    '
            }
            <a
              data-official-prose=""
              href={'#javascript-implementation-example'}
            >
              {'JS implementation example'}
            </a>
            {' that you are free to use.\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'image-modal'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Image modal\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#image-modal'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Because a modal can contain '}
            <strong data-official-prose="">{'anything you want'}</strong>
            {
              ', you can very simply use it to build an image gallery\n    for example:\n  '
            }
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    '}
            <a
              data-official-prose=""
              className={
                'button is-primary is-large modal-button js-modal-trigger'
              }
              data-target={'modal-bis'}
            >
              {'Launch image modal'}
            </a>
            {'\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="modal">\n  <div class="modal-background"></div>\n  <div class="modal-content">\n    <p class="image is-4by3">\n      <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">\n    </p>\n  </div>\n  <button class="modal-close is-large" aria-label="close"></button>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'modal-card'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Modal card\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#modal-card'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want a more classic modal, with a '}
            <strong data-official-prose="">{'head'}</strong>
            {', a '}
            <strong data-official-prose="">{'body'}</strong>
            {' and a '}
            <strong data-official-prose="">{'foot'}</strong>
            {',\n    use the '}
            <code data-official-prose="">{'modal-card'}</code>
            {'.\n  '}
          </p>
          {'\n  '}
          <button
            data-official-prose=""
            className={
              'button is-primary is-large modal-button js-modal-trigger'
            }
            data-target={'modal-ter'}
            aria-haspopup={'true'}
          >
            {'\n      Launch card modal\n    '}
          </button>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="modal">\n  <div class="modal-background"></div>\n  <div class="modal-card">\n    <header class="modal-card-head">\n      <p class="modal-card-title">Modal title</p>\n      <button class="delete" aria-label="close"></button>\n    </header>\n    <section class="modal-card-body">\n      <!-- Content ... -->\n    </section>\n    <footer class="modal-card-foot">\n      <div class="buttons">\n        <button class="button is-success">Save changes</button>\n        <button class="button">Cancel</button>\n      </div>\n    </footer>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'javascript-implementation-example'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    JavaScript implementation example\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#javascript-implementation-example'}
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
            {' handlers for custom elements, in vanilla JavaScript.\n  '}
          </p>
          {'\n\n  '}
          <p data-official-prose="">
            {'There are 3 parts to this implementation:'}
          </p>
          {'\n\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'add the HTML for the '}
              <strong data-official-prose="">{'modal'}</strong>
              {' (this modal is hidden by default)'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      add the HTML for a button to '}
              <strong data-official-prose="">{'trigger'}</strong>
              {' the modal (you can style this button however you want)\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      add the JS code to add the '}
              <code data-official-prose="">{'click'}</code>
              {' event on the '}
              <strong data-official-prose="">{'trigger'}</strong>
              {' to open the\n      '}
              <strong data-official-prose="">{'modal'}</strong>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <h4 data-official-prose="">{'1. Add the HTML for the modal'}</h4>
          {'\n\n  '}
          <p data-official-prose="">
            {'At the end of your page, before the closing '}
            <code data-official-prose="">{'</body>'}</code>
            {' tag, at the following HTML snippet:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div id="modal-js-example" class="modal">\n  <div class="modal-background"></div>\n\n  <div class="modal-content">\n    <div class="box">\n      <p>Modal JS example</p>\n      <!-- Your content -->\n    </div>\n  </div>\n\n  <button class="modal-close is-large" aria-label="close"></button>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'id'}</code>
            {" attribute's value must be "}
            <strong data-official-prose="">{'unique'}</strong>
            {'.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <h4 data-official-prose="">{'2. Add the HTML for the trigger'}</h4>
          {'\n\n  '}
          <p data-official-prose="">
            {'Somewhere on your page, add the following HTML button:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-modal/2-add-the-html-for-the-trigger/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<button class="js-modal-trigger" data-target="modal-js-example">\n  Open JS example modal\n</button>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can style it however you want, as long as it has the '}
            <code data-official-prose="">{'js-modal-trigger'}</code>
            {' CSS class and the appropriate\n    '}
            <code data-official-prose="">{'data-target'}</code>
            {' value. For example, you can add the '}
            <code data-official-prose="">{'button is-primary'}</code>
            {' Bulma classes:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-modal/2-add-the-html-for-the-trigger/002">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <h4 data-official-prose="">{'3. Add the JS for the trigger'}</h4>
          {'\n\n  '}
          <p data-official-prose="">
            {'In a '}
            <code data-official-prose="">{'script'}</code>
            {' element (or in a separate '}
            <code data-official-prose="">{'.js'}</code>
            {' file), add the following JS code:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-javascript'}>
              {
                "\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Functions to open and close a modal\n  function openModal($el) {\n    $el.classList.add('is-active');\n  }\n\n  function closeModal($el) {\n    $el.classList.remove('is-active');\n  }\n\n  function closeAllModals() {\n    (document.querySelectorAll('.modal') || []).forEach(($modal) => {\n      closeModal($modal);\n    });\n  }\n\n  // Add a click event on buttons to open a specific modal\n  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {\n    const modal = $trigger.dataset.target;\n    const $target = document.getElementById(modal);\n\n    $trigger.addEventListener('click', () => {\n      openModal($target);\n    });\n  });\n\n  // Add a click event on various child elements to close the parent modal\n  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {\n    const $target = $close.closest('.modal');\n\n    $close.addEventListener('click', () => {\n      closeModal($target);\n    });\n  });\n\n  // Add a keyboard event to close all modals\n  document.addEventListener('keydown', (event) => {\n    if(event.key === \"Escape\") {\n      closeAllModals();\n    }\n  });\n});\n"
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    As long as you can toggle the '}
            <code data-official-prose="">{'is-active'}</code>
            {' modifier class on the '}
            <code data-official-prose="">{'modal'}</code>
            {' element, you can\n    choose how you want to implement it.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n\n\n'}
        {'\n\n\n\n\n\n\n\n\n\n'}
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
                        {'$modal-z'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-z)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'40'}
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
                        {'$modal-background-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-background-background-color)'}
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
                          'hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.86\n)'
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
                        {'$modal-content-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-content-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'40rem'}
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
                        {'$modal-content-margin-mobile'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-content-margin-mobile)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25rem'}
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
                        {'$modal-content-spacing-mobile'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-content-spacing-mobile)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'10rem'}
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
                        {'$modal-content-spacing-tablet'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-content-spacing-tablet)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2.5rem'}
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
                        {'$modal-close-dimensions'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-close-dimensions)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2.5rem'}
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
                        {'$modal-close-right'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-close-right)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25rem'}
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
                        {'$modal-close-top'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-close-top)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25rem'}
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
                        {'$modal-card-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-spacing)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2.5rem'}
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
                        {'$modal-card-head-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-head-background-color)'}
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
                        {'$modal-card-head-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-head-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2rem'}
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
                        {'$modal-card-head-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-head-radius)'}
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
                        {'$modal-card-title-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-title-color)'}
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
                        {'$modal-card-title-line-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-title-line-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1'}
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
                        {'$modal-card-title-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-title-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-size-4)'}
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
                        {'$modal-card-foot-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-foot-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main-bis)'}
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
                        {'$modal-card-foot-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-foot-radius)'}
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
                        {'$modal-card-body-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-body-background-color)'}
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
                        {'$modal-card-body-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-modal-card-body-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2rem'}
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
      <ui.Block data-target={'modal-js-example'}>
        {'\n  \n'}
        <button data-target={'modal-js-example'} className={'js-modal-trigger'}>
          {'\n  Open JS example modal\n'}
        </button>
        {'\n\n'}
      </ui.Block>
      <ui.Modal defaultOpen={false}>
        <ui.ModalContent
          wrapperProps={{ id: 'modal-js-example' }}
          close={
            <>
              <ui.ModalClose aria-label={'close'} className={'rb-is-large'} />
            </>
          }
        >
          {'\n    '}
          <ui.Box>
            {'\n      '}
            <p>{'Modal JS example'}</p>
            {'\n      '}
            {'\n    '}
          </ui.Box>
          {'\n  '}
        </ui.ModalContent>
      </ui.Modal>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Block data-target={'modal-js-example'}>
        {'\n  \n'}
        <ui.Button
          data-target={'modal-js-example'}
          color={'primary'}
          className={'js-modal-trigger'}
        >
          {'\n  Open JS example modal\n'}
        </ui.Button>
        {'\n\n'}
      </ui.Block>
      <ui.Modal defaultOpen={false}>
        <ui.ModalContent
          wrapperProps={{ id: 'modal-js-example' }}
          close={
            <>
              <ui.ModalClose aria-label={'close'} className={'rb-is-large'} />
            </>
          }
        >
          {'\n    '}
          <ui.Box>
            {'\n      '}
            <p>{'Modal JS example'}</p>
            {'\n      '}
            {'\n    '}
          </ui.Box>
          {'\n  '}
        </ui.ModalContent>
      </ui.Modal>
    </>
  )
}

export const Example001 = {
  name: '2 add the html for the trigger 01',
  parameters: {
    official: { id: 'components-modal/2-add-the-html-for-the-trigger/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<><ui.Block data-target={"modal-js-example"}>{"\\n  \\n"}<button data-target={"modal-js-example"} className={"js-modal-trigger"}>{"\\n  Open JS example modal\\n"}</button>{"\\n\\n"}</ui.Block><ui.Modal defaultOpen={false}><ui.ModalContent wrapperProps={{ id: "modal-js-example" }} close={<><ui.ModalClose aria-label={"close"} className={"rb-is-large"} /></>}>{"\\n    "}<ui.Box>{"\\n      "}<p>{"Modal JS example"}</p>{"\\n      "}{"\\n    "}</ui.Box>{"\\n  "}</ui.ModalContent></ui.Modal></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: '2 add the html for the trigger 02',
  parameters: {
    official: { id: 'components-modal/2-add-the-html-for-the-trigger/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<><ui.Block data-target={"modal-js-example"}>{"\\n  \\n"}<ui.Button data-target={"modal-js-example"} color={"primary"} className={"js-modal-trigger"}>{"\\n  Open JS example modal\\n"}</ui.Button>{"\\n\\n"}</ui.Block><ui.Modal defaultOpen={false}><ui.ModalContent wrapperProps={{ id: "modal-js-example" }} close={<><ui.ModalClose aria-label={"close"} className={"rb-is-large"} /></>}>{"\\n    "}<ui.Box>{"\\n      "}<p>{"Modal JS example"}</p>{"\\n      "}{"\\n    "}</ui.Box>{"\\n  "}</ui.ModalContent></ui.Modal></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

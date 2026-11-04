import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-input',
      title: 'Input',
      url: 'https://bulma.io/documentation/form/input/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-input',
  title: 'CSS Library/Form/Input',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-input" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Input'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The '}
          <strong data-official-prose="">{'text input'}</strong>
          {' and its variations'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The Bulma '}
            <code data-official-prose="">{'input'}</code>
            {' CSS class is meant for '}
            <code data-official-prose="">{'<input>'}</code>
            {' HTML elements. The following\n    '}
            <a
              data-official-prose=""
              href={'http://htmlreference.io/element/input/'}
              target={'_blank'}
            >
              {'type attributes'}
            </a>
            {'\n    are supported:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'type="text"'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'type="password"'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'type="email"'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'type="tel"'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'Several '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' are supported which affect:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#colors'}>
                  {'color'}
                </a>
              </strong>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#sizes'}>
                  {'size'}
                </a>
              </strong>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#states'}>
                  {'state'}
                </a>
              </strong>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-input/basic/001">
          <Canvas of={Example001} />
        </div>
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
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/colors/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/colors/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/colors/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/colors/005">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/colors/006">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
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
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/sizes/001">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/sizes/002">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/sizes/003">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-input/sizes/004">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
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
        <div data-official-example="form-input/styles/001">
          <Canvas of={Example012} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'states'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    States\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#states'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <h4 data-official-prose="" className={'title is-5'}>
          {'Normal'}
        </h4>
        {'\n\n'}
        <div data-official-example="form-input/normal/001">
          <Canvas of={Example013} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-5'}>
          {'Hover'}
        </h4>
        {'\n\n'}
        <div data-official-example="form-input/hover/001">
          <Canvas of={Example014} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-5'}>
          {'Focus'}
        </h4>
        {'\n\n'}
        <div data-official-example="form-input/focus/001">
          <Canvas of={Example015} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-5'}>
          {'Loading'}
        </h4>
        {'\n\n'}
        <div data-official-example="form-input/loading/001">
          <Canvas of={Example016} />
        </div>
        {'\n\n'}
        <div data-official-example="form-input/loading/002">
          <Canvas of={Example017} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-5'}>
          {'Disabled'}
        </h4>
        {'\n\n'}
        <div data-official-example="form-input/disabled/001">
          <Canvas of={Example018} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-5'}>
          {'Readonly and static inputs'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you use the '}
            <code data-official-prose="">{'readonly'}</code>
            {
              ' HTML attribute, the input will look similar to a normal one, but is not\n    editable and has no shadow.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n'}
        <div data-official-example="form-input/readonly-and-static-inputs/001">
          <Canvas of={Example019} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you '}
            <em data-official-prose="">{'also'}</em>
            {' append the '}
            <code data-official-prose="">{'is-static'}</code>
            {
              ' modifier, it removes the background, border, shadow, and\n    horizontal padding, while maintaining the '
            }
            <strong data-official-prose="">{'vertical spacing'}</strong>
            {
              ' so you can easily align the input in any\n    context, like a horizontal form.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-input/readonly-and-static-inputs/002">
          <Canvas of={Example020} />
        </div>
        {'\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="field is-horizontal">\n  <div class="field-label is-normal">\n    <label class="label">From</label>\n  </div>\n  <div class="field-body">\n    <div class="field">\n      <p class="control">\n        <input\n          class="input is-static"\n          type="email"\n          value="me@example.com"\n          readonly\n        />\n      </p>\n    </div>\n  </div>\n</div>\n\n<div class="field is-horizontal">\n  <div class="field-label is-normal">\n    <label class="label">To</label>\n  </div>\n  <div class="field-body">\n    <div class="field">\n      <p class="control">\n        <input class="input" type="email" placeholder="Recipient email" />\n      </p>\n    </div>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'with-font-awesome-icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    With Font Awesome icons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#with-font-awesome-icons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can append one of 2 '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' on a control:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'and/or '}
              <code data-official-prose="">{'has-icons-right'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'You also need to add a modifier on the '}
            <strong data-official-prose="">{'icon'}</strong>
            {':'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-left'}</code>
              {' if '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {' is used'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-right'}</code>
              {' if '}
              <code data-official-prose="">{'has-icons-right'}</code>
              {' is used'}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'The size of the '}
            <strong data-official-prose="">{'input'}</strong>
            {' will define the size of the icon container.'}
          </p>
          {'\n'}
        </div>
        {'\n'}
        <div data-official-example="form-input/with-font-awesome-icons/001">
          <Canvas of={Example021} />
        </div>
        {'\n\n'}
        <div data-official-example="form-input/with-font-awesome-icons/002">
          <Canvas of={Example022} />
        </div>
        {'\n\n'}
        <div data-official-example="form-input/with-font-awesome-icons/003">
          <Canvas of={Example023} />
        </div>
        {'\n\n'}
        <div data-official-example="form-input/with-font-awesome-icons/004">
          <Canvas of={Example024} />
        </div>
        {'\n\n'}
        <div data-official-example="form-input/with-font-awesome-icons/005">
          <Canvas of={Example025} />
        </div>
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
                        {'$input-h'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-h)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-h)'}
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
                        {'$input-s'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-s)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-s)'}
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
                        {'$input-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main-l)'}
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
                        {'$input-border-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-border-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border-l)'}
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
                        {'$input-border-l-delta'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-border-l-delta)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0%'}
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
                        {'$input-hover-border-l-delta'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-hover-border-l-delta)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hover-border-l-delta)'}
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
                        {'$input-active-border-l-delta'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-active-border-l-delta)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-active-border-l-delta)'}
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
                        {'$input-color-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-color-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-strong-l)'}
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
                        {'$input-background-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-background-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main-l)'}
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
                        {'$input-background-l-delta'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-background-l-delta)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0%'}
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
                        {'$input-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-height)'}
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
                        {'$input-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-shadow)'}
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
                          'inset 0 0.0625em 0.125em hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.05\n)'
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
                        {'$input-placeholder-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-placeholder-color)'}
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
                          'hsla(\n  var(--bulma-text-h),\n  var(--bulma-text-s),\n  var(--bulma-text-strong-l),\n  0.3\n)'
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
                        {'$input-focus-h'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-focus-h)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-focus-h)'}
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
                        {'$input-focus-s'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-focus-s)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-focus-s)'}
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
                        {'$input-focus-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-focus-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-focus-l)'}
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
                        {'$input-focus-shadow-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-focus-shadow-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-focus-shadow-size)'}
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
                        {'$input-focus-shadow-alpha'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-focus-shadow-alpha)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-focus-shadow-alpha)'}
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
                        {'$input-disabled-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-disabled-color)'}
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
                        {'$input-disabled-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-disabled-background-color)'}
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
                        {'$input-disabled-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-disabled-border-color)'}
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
                        {'$input-disabled-placeholder-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-disabled-placeholder-color)'}
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
                          'hsla(\n  var(--bulma-text-h),\n  var(--bulma-text-s),\n  var(--bulma-text-weak-l),\n  0.3\n)'
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
                        {'$input-arrow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-arrow)'}
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
                        {'$input-icon-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-icon-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-light)'}
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
                        {'$input-icon-hover-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-icon-hover-color)'}
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
                        {'$input-icon-focus-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-icon-focus-color)'}
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
                        {'$input-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-input-radius)'}
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
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Input type={'text'} placeholder={'Text input'} />
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<input class="input" type="text" placeholder="Text input" />\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Link input'} color={'link'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Primary input'} color={'primary'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Info input'} color={'info'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Success input'} color={'success'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Warning input'} color={'warning'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Danger input'} color={'danger'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Small input'} size={'small'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Normal input'} size={'normal'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Medium input'} size={'medium'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Input type={'text'} placeholder={'Large input'} size={'large'} />
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Input type={'text'} placeholder={'Rounded input'} rounded />
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<input class="input is-rounded" type="text" placeholder="Rounded input" />\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example013Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Input type={'text'} placeholder={'Normal input'} />
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <input class="input" type="text" placeholder="Normal input" />\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example014Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Input
              type={'text'}
              placeholder={'Hovered input'}
              state={'hovered'}
            />
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <input class="input is-hovered" type="text" placeholder="Hovered input" />\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example015Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Input
              type={'text'}
              placeholder={'Focused input'}
              state={'focused'}
            />
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <input class="input is-focused" type="text" placeholder="Focused input" />\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example016Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control loading>
            {'\n  '}
            <ui.Input type={'text'} placeholder={'Loading input'} />
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control is-loading">\n  <input class="input" type="text" placeholder="Loading input" />\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example017Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'\n        You can resize the loading spinner by appending '}
              <code>{'is-small'}</code>
              {', '}
              <code>{'is-medium'}</code>
              {' or\n        '}
              <code>{'is-large'}</code>
              {' to the '}
              <code>{'control'}</code>
              {' container.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    \n'}
          <ui.Field>
            {'\n  '}
            <ui.Control size={'small'} loading>
              {'\n    '}
              <ui.Input
                type={'text'}
                placeholder={'Small loading input'}
                size={'small'}
              />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control loading>
              {'\n    '}
              <ui.Input type={'text'} placeholder={'Normal loading input'} />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control size={'medium'} loading>
              {'\n    '}
              <ui.Input
                type={'text'}
                placeholder={'Medium loading input'}
                size={'medium'}
              />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control size={'large'} loading>
              {'\n    '}
              <ui.Input
                type={'text'}
                placeholder={'Large loading input'}
                size={'large'}
              />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="field">\n  <div class="control is-small is-loading">\n    <input\n      class="input is-small"\n      type="text"\n      placeholder="Small loading input"\n    />\n  </div>\n</div>\n<div class="field">\n  <div class="control is-loading">\n    <input class="input" type="text" placeholder="Normal loading input" />\n  </div>\n</div>\n<div class="field">\n  <div class="control is-medium is-loading">\n    <input\n      class="input is-medium"\n      type="text"\n      placeholder="Medium loading input"\n    />\n  </div>\n</div>\n<div class="field">\n  <div class="control is-large is-loading">\n    <input\n      class="input is-large"\n      type="text"\n      placeholder="Large loading input"\n    />\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example018Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Input type={'text'} placeholder={'Disabled input'} disabled />
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <input class="input" type="text" placeholder="Disabled input" disabled />\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example019Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Input
              type={'text'}
              defaultValue={'This text is readonly'}
              readOnly
            />
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <input class="input" type="text" value="This text is readonly" readonly />\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example020Demo() {
  return (
    <>
      <div className={'bd-example'}>
        {'\n'}
        <ui.Field horizontal>
          {'\n  '}
          <ui.FieldLabel size={'normal'}>
            {'\n    '}
            <ui.Label>{'From'}</ui.Label>
            {'\n  '}
          </ui.FieldLabel>
          {'\n  '}
          <ui.FieldBody>
            {'\n    '}
            <ui.Field>
              {'\n      '}
              <ui.Control as={'p'}>
                {'\n        '}
                <ui.Input
                  type={'email'}
                  defaultValue={'me@example.com'}
                  readOnly
                  static
                />
                {'\n      '}
              </ui.Control>
              {'\n    '}
            </ui.Field>
            {'\n  '}
          </ui.FieldBody>
          {'\n'}
        </ui.Field>
        {'\n\n'}
        <ui.Field horizontal>
          {'\n  '}
          <ui.FieldLabel size={'normal'}>
            {'\n    '}
            <ui.Label>{'To'}</ui.Label>
            {'\n  '}
          </ui.FieldLabel>
          {'\n  '}
          <ui.FieldBody>
            {'\n    '}
            <ui.Field>
              {'\n      '}
              <ui.Control as={'p'}>
                {'\n        '}
                <ui.Input type={'email'} placeholder={'Recipient email'} />
                {'\n      '}
              </ui.Control>
              {'\n    '}
            </ui.Field>
            {'\n  '}
          </ui.FieldBody>
          {'\n'}
        </ui.Field>
        {'\n'}
      </div>
    </>
  )
}

function Example021Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control icons={'both'} as={'p'}>
              {'\n    '}
              <ui.Input type={'email'} placeholder={'Email'} />
              {'\n    '}
              <ui.Icon size={'small'} className={'rb-is-left'}>
                {'\n      '}
                <i className={'fas fa-envelope'} />
                {'\n    '}
              </ui.Icon>
              {'\n    '}
              <ui.Icon size={'small'} className={'rb-is-right'}>
                {'\n      '}
                <i className={'fas fa-check'} />
                {'\n    '}
              </ui.Icon>
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control icons={'left'} as={'p'}>
              {'\n    '}
              <ui.Input type={'password'} placeholder={'Password'} />
              {'\n    '}
              <ui.Icon size={'small'} className={'rb-is-left'}>
                {'\n      '}
                <i className={'fas fa-lock'} />
                {'\n    '}
              </ui.Icon>
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="field">\n  <p class="control has-icons-left has-icons-right">\n    <input class="input" type="email" placeholder="Email" />\n    <span class="icon is-small is-left">\n      <i class="fas fa-envelope"></i>\n    </span>\n    <span class="icon is-small is-right">\n      <i class="fas fa-check"></i>\n    </span>\n  </p>\n</div>\n<div class="field">\n  <p class="control has-icons-left">\n    <input class="input" type="password" placeholder="Password" />\n    <span class="icon is-small is-left">\n      <i class="fas fa-lock"></i>\n    </span>\n  </p>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example022Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {
                '\n        If the control contains an icon, Bulma will make sure the icon remains\n        '
              }
              <strong>{'centered'}</strong>
              {', no matter the size of the input '}
              <em>{'or'}</em>
              {' of the icon.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    \n'}
          <ui.Control icons={'both'}>
            {'\n  '}
            <ui.Input type={'email'} placeholder={'Email'} size={'small'} />
            {'\n  '}
            <ui.Icon size={'small'} className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-envelope'} />
              {'\n  '}
            </ui.Icon>
            {'\n  '}
            <ui.Icon size={'small'} className={'rb-is-right'}>
              {'\n    '}
              <i className={'fas fa-check'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left has-icons-right">\n  <input class="input is-small" type="email" placeholder="Email" />\n  <span class="icon is-small is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-small is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example023Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control icons={'both'}>
            {'\n  '}
            <ui.Input type={'email'} placeholder={'Email'} />
            {'\n  '}
            <ui.Icon size={'small'} className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-envelope'} />
              {'\n  '}
            </ui.Icon>
            {'\n  '}
            <ui.Icon size={'small'} className={'rb-is-right'}>
              {'\n    '}
              <i className={'fas fa-check'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left has-icons-right">\n  <input class="input" type="email" placeholder="Email" />\n  <span class="icon is-small is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-small is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example024Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control icons={'both'}>
            {'\n  '}
            <ui.Input type={'email'} placeholder={'Email'} size={'medium'} />
            {'\n  '}
            <ui.Icon className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-envelope'} />
              {'\n  '}
            </ui.Icon>
            {'\n  '}
            <ui.Icon className={'rb-is-right'}>
              {'\n    '}
              <i className={'fas fa-check'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left has-icons-right">\n  <input class="input is-medium" type="email" placeholder="Email" />\n  <span class="icon is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example025Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control icons={'both'}>
            {'\n  '}
            <ui.Input type={'email'} placeholder={'Email'} size={'large'} />
            {'\n  '}
            <ui.Icon size={'medium'} className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-envelope'} />
              {'\n  '}
            </ui.Icon>
            {'\n  '}
            <ui.Icon size={'medium'} className={'rb-is-right'}>
              {'\n    '}
              <i className={'fas fa-check'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left has-icons-right">\n  <input class="input is-large" type="email" placeholder="Email" />\n  <span class="icon is-medium is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-medium is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Text input',
  parameters: {
    official: { id: 'form-input/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Input type={"text"} placeholder={"Text input"} />{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<input class=\\"input\\" type=\\"text\\" placeholder=\\"Text input\\" />\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Link input',
  parameters: {
    official: { id: 'form-input/colors/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Link input"} color={"link"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Primary input',
  parameters: {
    official: { id: 'form-input/colors/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Primary input"} color={"primary"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Info input',
  parameters: {
    official: { id: 'form-input/colors/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Info input"} color={"info"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Success input',
  parameters: {
    official: { id: 'form-input/colors/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Success input"} color={"success"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Warning input',
  parameters: {
    official: { id: 'form-input/colors/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Warning input"} color={"warning"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Danger input',
  parameters: {
    official: { id: 'form-input/colors/006' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Danger input"} color={"danger"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Small input',
  parameters: {
    official: { id: 'form-input/sizes/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Small input"} size={"small"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Normal size input',
  parameters: {
    official: { id: 'form-input/sizes/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Normal input"} size={"normal"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Medium input',
  parameters: {
    official: { id: 'form-input/sizes/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Medium input"} size={"medium"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Large input',
  parameters: {
    official: { id: 'form-input/sizes/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Input type={"text"} placeholder={"Large input"} size={"large"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Rounded input',
  parameters: {
    official: { id: 'form-input/styles/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example012Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Input type={"text"} placeholder={"Rounded input"} rounded />{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<input class=\\"input is-rounded\\" type=\\"text\\" placeholder=\\"Rounded input\\" />\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Normal state',
  parameters: {
    official: { id: 'form-input/normal/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example013Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Input type={"text"} placeholder={"Normal input"} />{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <input class=\\"input\\" type=\\"text\\" placeholder=\\"Normal input\\" />\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Hover state',
  parameters: {
    official: { id: 'form-input/hover/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example014Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Input type={"text"} placeholder={"Hovered input"} state={"hovered"} />{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <input class=\\"input is-hovered\\" type=\\"text\\" placeholder=\\"Hovered input\\" />\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Focus state',
  parameters: {
    official: { id: 'form-input/focus/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example015Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Input type={"text"} placeholder={"Focused input"} state={"focused"} />{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <input class=\\"input is-focused\\" type=\\"text\\" placeholder=\\"Focused input\\" />\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Loading input',
  parameters: {
    official: { id: 'form-input/loading/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example016Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control loading>{"\\n  "}<ui.Input type={"text"} placeholder={"Loading input"} />{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control is-loading\\">\\n  <input class=\\"input\\" type=\\"text\\" placeholder=\\"Loading input\\" />\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Loading spinner sizes',
  parameters: {
    official: { id: 'form-input/loading/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example017Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        You can resize the loading spinner by appending "}<code>{"is-small"}</code>{", "}<code>{"is-medium"}</code>{" or\\n        "}<code>{"is-large"}</code>{" to the "}<code>{"control"}</code>{" container.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    \\n"}<ui.Field>{"\\n  "}<ui.Control size={"small"} loading>{"\\n    "}<ui.Input type={"text"} placeholder={"Small loading input"} size={"small"} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control loading>{"\\n    "}<ui.Input type={"text"} placeholder={"Normal loading input"} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control size={"medium"} loading>{"\\n    "}<ui.Input type={"text"} placeholder={"Medium loading input"} size={"medium"} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control size={"large"} loading>{"\\n    "}<ui.Input type={"text"} placeholder={"Large loading input"} size={"large"} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"field\\">\\n  <div class=\\"control is-small is-loading\\">\\n    <input\\n      class=\\"input is-small\\"\\n      type=\\"text\\"\\n      placeholder=\\"Small loading input\\"\\n    />\\n  </div>\\n</div>\\n<div class=\\"field\\">\\n  <div class=\\"control is-loading\\">\\n    <input class=\\"input\\" type=\\"text\\" placeholder=\\"Normal loading input\\" />\\n  </div>\\n</div>\\n<div class=\\"field\\">\\n  <div class=\\"control is-medium is-loading\\">\\n    <input\\n      class=\\"input is-medium\\"\\n      type=\\"text\\"\\n      placeholder=\\"Medium loading input\\"\\n    />\\n  </div>\\n</div>\\n<div class=\\"field\\">\\n  <div class=\\"control is-large is-loading\\">\\n    <input\\n      class=\\"input is-large\\"\\n      type=\\"text\\"\\n      placeholder=\\"Large loading input\\"\\n    />\\n  </div>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Disabled input',
  parameters: {
    official: { id: 'form-input/disabled/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example018Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Input type={"text"} placeholder={"Disabled input"} disabled />{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <input class=\\"input\\" type=\\"text\\" placeholder=\\"Disabled input\\" disabled />\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'Read-only input',
  parameters: {
    official: { id: 'form-input/readonly-and-static-inputs/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example019Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Input type={"text"} defaultValue={"This text is readonly"} readOnly />{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <input class=\\"input\\" type=\\"text\\" value=\\"This text is readonly\\" readonly />\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'Static input',
  parameters: {
    official: { id: 'form-input/readonly-and-static-inputs/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example020Demo() {\n  return (<><div className={"bd-example"}>{"\\n"}<ui.Field horizontal>{"\\n  "}<ui.FieldLabel size={"normal"}>{"\\n    "}<ui.Label>{"From"}</ui.Label>{"\\n  "}</ui.FieldLabel>{"\\n  "}<ui.FieldBody>{"\\n    "}<ui.Field>{"\\n      "}<ui.Control as={"p"}>{"\\n        "}<ui.Input type={"email"} defaultValue={"me@example.com"} readOnly static />{"\\n      "}</ui.Control>{"\\n    "}</ui.Field>{"\\n  "}</ui.FieldBody>{"\\n"}</ui.Field>{"\\n\\n"}<ui.Field horizontal>{"\\n  "}<ui.FieldLabel size={"normal"}>{"\\n    "}<ui.Label>{"To"}</ui.Label>{"\\n  "}</ui.FieldLabel>{"\\n  "}<ui.FieldBody>{"\\n    "}<ui.Field>{"\\n      "}<ui.Control as={"p"}>{"\\n        "}<ui.Input type={"email"} placeholder={"Recipient email"} />{"\\n      "}</ui.Control>{"\\n    "}</ui.Field>{"\\n  "}</ui.FieldBody>{"\\n"}</ui.Field>{"\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

export const Example021 = {
  name: 'Inputs with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example021Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Field>{"\\n  "}<ui.Control icons={"both"} as={"p"}>{"\\n    "}<ui.Input type={"email"} placeholder={"Email"} />{"\\n    "}<ui.Icon size={"small"} className={"rb-is-left"}>{"\\n      "}<i className={"fas fa-envelope"} />{"\\n    "}</ui.Icon>{"\\n    "}<ui.Icon size={"small"} className={"rb-is-right"}>{"\\n      "}<i className={"fas fa-check"} />{"\\n    "}</ui.Icon>{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control icons={"left"} as={"p"}>{"\\n    "}<ui.Input type={"password"} placeholder={"Password"} />{"\\n    "}<ui.Icon size={"small"} className={"rb-is-left"}>{"\\n      "}<i className={"fas fa-lock"} />{"\\n    "}</ui.Icon>{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"field\\">\\n  <p class=\\"control has-icons-left has-icons-right\\">\\n    <input class=\\"input\\" type=\\"email\\" placeholder=\\"Email\\" />\\n    <span class=\\"icon is-small is-left\\">\\n      <i class=\\"fas fa-envelope\\"></i>\\n    </span>\\n    <span class=\\"icon is-small is-right\\">\\n      <i class=\\"fas fa-check\\"></i>\\n    </span>\\n  </p>\\n</div>\\n<div class=\\"field\\">\\n  <p class=\\"control has-icons-left\\">\\n    <input class=\\"input\\" type=\\"password\\" placeholder=\\"Password\\" />\\n    <span class=\\"icon is-small is-left\\">\\n      <i class=\\"fas fa-lock\\"></i>\\n    </span>\\n  </p>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example021Demo,
} satisfies StoryObj

export const Example022 = {
  name: 'Small input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example022Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        If the control contains an icon, Bulma will make sure the icon remains\\n        "}<strong>{"centered"}</strong>{", no matter the size of the input "}<em>{"or"}</em>{" of the icon.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    \\n"}<ui.Control icons={"both"}>{"\\n  "}<ui.Input type={"email"} placeholder={"Email"} size={"small"} />{"\\n  "}<ui.Icon size={"small"} className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-envelope"} />{"\\n  "}</ui.Icon>{"\\n  "}<ui.Icon size={"small"} className={"rb-is-right"}>{"\\n    "}<i className={"fas fa-check"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left has-icons-right\\">\\n  <input class=\\"input is-small\\" type=\\"email\\" placeholder=\\"Email\\" />\\n  <span class=\\"icon is-small is-left\\">\\n    <i class=\\"fas fa-envelope\\"></i>\\n  </span>\\n  <span class=\\"icon is-small is-right\\">\\n    <i class=\\"fas fa-check\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example022Demo,
} satisfies StoryObj

export const Example023 = {
  name: 'Normal input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example023Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control icons={"both"}>{"\\n  "}<ui.Input type={"email"} placeholder={"Email"} />{"\\n  "}<ui.Icon size={"small"} className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-envelope"} />{"\\n  "}</ui.Icon>{"\\n  "}<ui.Icon size={"small"} className={"rb-is-right"}>{"\\n    "}<i className={"fas fa-check"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left has-icons-right\\">\\n  <input class=\\"input\\" type=\\"email\\" placeholder=\\"Email\\" />\\n  <span class=\\"icon is-small is-left\\">\\n    <i class=\\"fas fa-envelope\\"></i>\\n  </span>\\n  <span class=\\"icon is-small is-right\\">\\n    <i class=\\"fas fa-check\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example023Demo,
} satisfies StoryObj

export const Example024 = {
  name: 'Medium input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example024Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control icons={"both"}>{"\\n  "}<ui.Input type={"email"} placeholder={"Email"} size={"medium"} />{"\\n  "}<ui.Icon className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-envelope"} />{"\\n  "}</ui.Icon>{"\\n  "}<ui.Icon className={"rb-is-right"}>{"\\n    "}<i className={"fas fa-check"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left has-icons-right\\">\\n  <input class=\\"input is-medium\\" type=\\"email\\" placeholder=\\"Email\\" />\\n  <span class=\\"icon is-left\\">\\n    <i class=\\"fas fa-envelope\\"></i>\\n  </span>\\n  <span class=\\"icon is-right\\">\\n    <i class=\\"fas fa-check\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example024Demo,
} satisfies StoryObj

export const Example025 = {
  name: 'Large input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example025Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control icons={"both"}>{"\\n  "}<ui.Input type={"email"} placeholder={"Email"} size={"large"} />{"\\n  "}<ui.Icon size={"medium"} className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-envelope"} />{"\\n  "}</ui.Icon>{"\\n  "}<ui.Icon size={"medium"} className={"rb-is-right"}>{"\\n    "}<i className={"fas fa-check"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left has-icons-right\\">\\n  <input class=\\"input is-large\\" type=\\"email\\" placeholder=\\"Email\\" />\\n  <span class=\\"icon is-medium is-left\\">\\n    <i class=\\"fas fa-envelope\\"></i>\\n  </span>\\n  <span class=\\"icon is-medium is-right\\">\\n    <i class=\\"fas fa-check\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example025Demo,
} satisfies StoryObj

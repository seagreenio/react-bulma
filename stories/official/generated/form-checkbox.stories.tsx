import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-checkbox',
      title: 'Checkbox',
      url: 'https://bulma.io/documentation/form/checkbox/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-checkbox',
  title: 'CSS Library/Form/Checkbox',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-checkbox" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Checkbox'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The 2-state '}
          <strong data-official-prose="">{'checkbox'}</strong>
          {' in its native format'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n   \n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'checkbox'}</code>
            {' class is a simple wrapper around the\n    '}
            <code data-official-prose="">{'<input type="checkbox">'}</code>
            {
              ' HTML element. It is intentionally\n    not styled, to preserve cross-browser compatibility and the user experience.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-checkbox/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can add '}
            <strong data-official-prose="">{'links'}</strong>
            {' to your checkbox, or even\n    '}
            <strong data-official-prose="">{'disable'}</strong>
            {' it.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-checkbox/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-example="form-checkbox/basic/003">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'list-of-checkboxes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    List of Checkboxes\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-checkboxes'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    If you want to list several checkbox elements, wrap them in a\n    '
            }
            <code data-official-prose="">{'<div class="checkboxes">'}</code>
            {' element:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-checkbox/list-of-checkboxes/001">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="checkboxes">\n  <label class="checkbox">\n    <input type="checkbox" />\n    Monday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Tuesday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Wednesday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Thursday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Friday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" checked />\n    Saturday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" checked />\n    Sunday\n  </label>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'half'}>
          {' '}
          <ui.Checkbox> Remember me </ui.Checkbox>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<label class="checkbox">\n  <input type="checkbox" />\n  Remember me\n</label>\n'
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
        <ui.Column width={'half'}>
          {' '}
          <ui.Checkbox>
            {' '}
            I agree to the <a href={'#'}>terms and conditions</a>{' '}
          </ui.Checkbox>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<label class="checkbox">\n  <input type="checkbox" />\n  I agree to the <a href="#">terms and conditions</a>\n</label>\n'
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
        <ui.Column width={'half'}>
          {' '}
          <ui.Checkbox disabled wrapperProps={{ 'aria-disabled': true }}>
            {' '}
            Save my preferences{' '}
          </ui.Checkbox>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<label class="checkbox" disabled>\n  <input type="checkbox" disabled />\n  Save my preferences\n</label>\n'
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
      <ui.Block>
        {' '}
        <ui.Checkboxes>
          {' '}
          <ui.Checkbox> Monday </ui.Checkbox>{' '}
          <ui.Checkbox> Tuesday </ui.Checkbox>{' '}
          <ui.Checkbox> Wednesday </ui.Checkbox>{' '}
          <ui.Checkbox> Thursday </ui.Checkbox>{' '}
          <ui.Checkbox> Friday </ui.Checkbox>{' '}
          <ui.Checkbox defaultChecked> Saturday </ui.Checkbox>{' '}
          <ui.Checkbox defaultChecked> Sunday </ui.Checkbox>{' '}
        </ui.Checkboxes>{' '}
      </ui.Block>
    </>
  )
}

export const Example001 = {
  name: 'Remember-me checkbox',
  parameters: {
    official: { id: 'form-checkbox/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Checkbox> Remember me </ui.Checkbox>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'} className={'bd-highlight-full'}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<label class=\"checkbox\">\\n  <input type=\"checkbox\" />\\n  Remember me\\n</label>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Checkbox with a link',
  parameters: {
    official: { id: 'form-checkbox/basic/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Checkbox>\n            {' '}\n            I agree to the <a href={'#'}>terms and conditions</a>{' '}\n          </ui.Checkbox>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'} className={'bd-highlight-full'}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<label class=\"checkbox\">\\n  <input type=\"checkbox\" />\\n  I agree to the <a href=\"#\">terms and conditions</a>\\n</label>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Disabled checkbox',
  parameters: {
    official: { id: 'form-checkbox/basic/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Checkbox disabled wrapperProps={{ 'aria-disabled': true }}>\n            {' '}\n            Save my preferences{' '}\n          </ui.Checkbox>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'} className={'bd-highlight-full'}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<label class=\"checkbox\" disabled>\\n  <input type=\"checkbox\" disabled />\\n  Save my preferences\\n</label>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Checkbox list',
  parameters: {
    official: { id: 'form-checkbox/list-of-checkboxes/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Block>\n        {' '}\n        <ui.Checkboxes>\n          {' '}\n          <ui.Checkbox> Monday </ui.Checkbox>{' '}\n          <ui.Checkbox> Tuesday </ui.Checkbox>{' '}\n          <ui.Checkbox> Wednesday </ui.Checkbox>{' '}\n          <ui.Checkbox> Thursday </ui.Checkbox>{' '}\n          <ui.Checkbox> Friday </ui.Checkbox>{' '}\n          <ui.Checkbox defaultChecked> Saturday </ui.Checkbox>{' '}\n          <ui.Checkbox defaultChecked> Sunday </ui.Checkbox>{' '}\n        </ui.Checkboxes>{' '}\n      </ui.Block>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

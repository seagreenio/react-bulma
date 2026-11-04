import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Block, Checkbox, Checkboxes } from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Checkbox'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The 2-state '}
          <strong data-official-prose="">{'checkbox'}</strong>
          {' in its native format'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'checkbox'}</code>
            {' class is a simple wrapper around the '}
            <code data-official-prose="">{'<input type="checkbox">'}</code>
            {
              ' HTML element. It is intentionally not styled, to preserve cross-browser compatibility and the user experience. '
            }
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-checkbox/basic/001'}
          >
            <div data-official-example="form-checkbox/basic/001">
              <Canvas of={RememberMeCheckboxStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-half bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<label class="checkbox">\n  <input type="checkbox" />\n  Remember me\n</label>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can add '}
            <strong data-official-prose="">{'links'}</strong>
            {' to your checkbox, or even '}
            <strong data-official-prose="">{'disable'}</strong>
            {' it. '}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-checkbox/basic/002'}
          >
            <div data-official-example="form-checkbox/basic/002">
              <Canvas of={CheckboxWithALinkStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-half bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<label class="checkbox">\n  <input type="checkbox" />\n  I agree to the <a href="#">terms and conditions</a>\n</label>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-checkbox/basic/003'}
          >
            <div data-official-example="form-checkbox/basic/003">
              <Canvas of={DisabledCheckboxStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-half bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<label class="checkbox" disabled>\n  <input type="checkbox" disabled />\n  Save my preferences\n</label>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'list-of-checkboxes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' List of Checkboxes '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-checkboxes'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to list several checkbox elements, wrap them in a '}
            <code data-official-prose="">{'<div class="checkboxes">'}</code>
            {' element: '}
          </p>
        </div>
        <div data-official-example="form-checkbox/list-of-checkboxes/001">
          <Canvas of={CheckboxListStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="checkboxes">\n  <label class="checkbox">\n    <input type="checkbox" />\n    Monday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Tuesday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Wednesday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Thursday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" />\n    Friday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" checked />\n    Saturday\n  </label>\n\n  <label class="checkbox">\n    <input type="checkbox" checked />\n    Sunday\n  </label>\n</div>\n'
              }
            </code>
          </pre>
        </div>
      </div>
    </OfficialDocument>
  )
}

function RememberMeCheckboxDemo() {
  return (
    <>
      <Checkbox> Remember me </Checkbox>
    </>
  )
}

function CheckboxWithALinkDemo() {
  return (
    <>
      <Checkbox>
        {' '}
        I agree to the <a href={'#'}>terms and conditions</a>{' '}
      </Checkbox>
    </>
  )
}

function DisabledCheckboxDemo() {
  return (
    <>
      <Checkbox disabled wrapperProps={{ 'aria-disabled': true }}>
        {' '}
        Save my preferences{' '}
      </Checkbox>
    </>
  )
}

function CheckboxListDemo() {
  return (
    <>
      <Block>
        <Checkboxes>
          <Checkbox> Monday </Checkbox>
          <Checkbox> Tuesday </Checkbox>
          <Checkbox> Wednesday </Checkbox>
          <Checkbox> Thursday </Checkbox>
          <Checkbox> Friday </Checkbox>
          <Checkbox defaultChecked> Saturday </Checkbox>
          <Checkbox defaultChecked> Sunday </Checkbox>
        </Checkboxes>
      </Block>
    </>
  )
}

export const RememberMeCheckboxStory = {
  name: 'Remember-me checkbox',
  parameters: {
    official: { id: 'form-checkbox/basic/001' },
    docs: {
      source: {
        code: "import { Checkbox } from '@seagreenio/react-bulma'\n\nfunction RememberMeCheckboxDemo() {\n  return (\n    <>\n      <Checkbox> Remember me </Checkbox>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RememberMeCheckboxDemo,
} satisfies StoryObj

export const CheckboxWithALinkStory = {
  name: 'Checkbox with a link',
  parameters: {
    official: { id: 'form-checkbox/basic/002' },
    docs: {
      source: {
        code: "import { Checkbox } from '@seagreenio/react-bulma'\n\nfunction CheckboxWithALinkDemo() {\n  return (\n    <>\n      <Checkbox>\n        {' '}\n        I agree to the <a href={'#'}>terms and conditions</a>{' '}\n      </Checkbox>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CheckboxWithALinkDemo,
} satisfies StoryObj

export const DisabledCheckboxStory = {
  name: 'Disabled checkbox',
  parameters: {
    official: { id: 'form-checkbox/basic/003' },
    docs: {
      source: {
        code: "import { Checkbox } from '@seagreenio/react-bulma'\n\nfunction DisabledCheckboxDemo() {\n  return (\n    <>\n      <Checkbox disabled wrapperProps={{ 'aria-disabled': true }}>\n        {' '}\n        Save my preferences{' '}\n      </Checkbox>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DisabledCheckboxDemo,
} satisfies StoryObj

export const CheckboxListStory = {
  name: 'Checkbox list',
  parameters: {
    official: { id: 'form-checkbox/list-of-checkboxes/001' },
    docs: {
      source: {
        code: "import { Block, Checkbox, Checkboxes } from '@seagreenio/react-bulma'\n\nfunction CheckboxListDemo() {\n  return (\n    <>\n      <Block>\n        <Checkboxes>\n          <Checkbox> Monday </Checkbox>\n          <Checkbox> Tuesday </Checkbox>\n          <Checkbox> Wednesday </Checkbox>\n          <Checkbox> Thursday </Checkbox>\n          <Checkbox> Friday </Checkbox>\n          <Checkbox defaultChecked> Saturday </Checkbox>\n          <Checkbox defaultChecked> Sunday </Checkbox>\n        </Checkboxes>\n      </Block>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CheckboxListDemo,
} satisfies StoryObj

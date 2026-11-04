import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Block, Control, Radio, Radios } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-radio',
      title: 'Radio button',
      url: 'https://bulma.io/documentation/form/radio/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-radio',
  title: 'CSS Library/Form/Radio',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-radio" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Radio button'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The mutually exclusive '}
          <strong data-official-prose="">{'radio buttons'}</strong>
          {' in their native format'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'radio'}</code>
            {' class is a simple wrapper around the '}
            <code data-official-prose="">{'<input type="radio">'}</code>
            {
              ' HTML elements. It is intentionally not styled, to preserve cross-browser compatibility and the user experience. '
            }
          </p>
          <p data-official-prose="">
            {' Make sure the linked radio buttons have the '}
            <strong data-official-prose="">{'same value'}</strong>
            {' for their '}
            <code data-official-prose="">{'name'}</code>
            {' HTML attribute. '}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-radio/basic/001'}
          >
            <div data-official-example="form-radio/basic/001">
              <Canvas of={RadioGroupStory} />
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
                    '\n<div class="control">\n  <label class="radio">\n    <input type="radio" name="answer" />\n    Yes\n  </label>\n  <label class="radio">\n    <input type="radio" name="answer" />\n    No\n  </label>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can check a radio button by '}
            <strong data-official-prose="">{'default'}</strong>
            {' by adding the '}
            <code data-official-prose="">{'checked'}</code>
            {' HTML attribute to the '}
            <code data-official-prose="">{'<input>'}</code>
            {' element. '}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-radio/basic/002'}
          >
            <div data-official-example="form-radio/basic/002">
              <Canvas of={PreselectedRadioStory} />
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
                    '\n<div class="control">\n  <label class="radio">\n    <input type="radio" name="foobar" />\n    Foo\n  </label>\n  <label class="radio">\n    <input type="radio" name="foobar" checked />\n    Bar\n  </label>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can '}
            <strong data-official-prose="">{'disable'}</strong>
            {' a radio button by adding the '}
            <code data-official-prose="">{'disabled'}</code>
            {' HTML attribute to both the '}
            <code data-official-prose="">{'<label>'}</code>
            {' and the '}
            <code data-official-prose="">{'<input>'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-radio/basic/003'}
          >
            <div data-official-example="form-radio/basic/003">
              <Canvas of={DisabledRadioStory} />
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
                    '\n<div class="control">\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Going\n  </label>\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Not going\n  </label>\n  <label class="radio" disabled>\n    <input type="radio" name="rsvp" disabled />\n    Maybe\n  </label>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'list-of-radio-buttons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' List of Radio Buttons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-radio-buttons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to list several radio buttons, wrap them in a '}
            <code data-official-prose="">{'<div class="radios">'}</code>
            {' element: '}
          </p>
        </div>
        <div data-official-example="form-radio/list-of-radio-buttons/001">
          <Canvas of={RadioButtonListStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="radios">\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Going\n  </label>\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Not going\n  </label>\n  <label class="radio" disabled>\n    <input type="radio" name="rsvp" disabled />\n    Maybe\n  </label>\n</div>\n'
              }
            </code>
          </pre>
        </div>
      </div>
    </OfficialDocument>
  )
}

function RadioGroupDemo() {
  return (
    <>
      <Control>
        <Radio name={'answer'}> Yes </Radio> <Radio name={'answer'}> No </Radio>
      </Control>
    </>
  )
}

function PreselectedRadioDemo() {
  return (
    <>
      <Control>
        <Radio name={'foobar'}> Foo </Radio>{' '}
        <Radio name={'foobar'} defaultChecked>
          {' '}
          Bar{' '}
        </Radio>
      </Control>
    </>
  )
}

function DisabledRadioDemo() {
  return (
    <>
      <Control>
        <Radio name={'rsvp'}> Going </Radio>{' '}
        <Radio name={'rsvp'}> Not going </Radio>{' '}
        <Radio name={'rsvp'} disabled wrapperProps={{ 'aria-disabled': true }}>
          {' '}
          Maybe{' '}
        </Radio>
      </Control>
    </>
  )
}

function RadioButtonListDemo() {
  return (
    <>
      <Block>
        <Radios>
          <Radio name={'rsvp'}> Going </Radio>
          <Radio name={'rsvp'}> Not going </Radio>
          <Radio
            name={'rsvp'}
            disabled
            wrapperProps={{ 'aria-disabled': true }}
          >
            {' '}
            Maybe{' '}
          </Radio>
        </Radios>
      </Block>
    </>
  )
}

export const RadioGroupStory = {
  name: 'Radio group',
  parameters: {
    official: { id: 'form-radio/basic/001' },
    docs: {
      source: {
        code: "import { Control, Radio } from '@seagreenio/react-bulma'\n\nfunction RadioGroupDemo() {\n  return (\n    <>\n      <Control>\n        <Radio name={'answer'}> Yes </Radio> <Radio name={'answer'}> No </Radio>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RadioGroupDemo,
} satisfies StoryObj

export const PreselectedRadioStory = {
  name: 'Preselected radio',
  parameters: {
    official: { id: 'form-radio/basic/002' },
    docs: {
      source: {
        code: "import { Control, Radio } from '@seagreenio/react-bulma'\n\nfunction PreselectedRadioDemo() {\n  return (\n    <>\n      <Control>\n        <Radio name={'foobar'}> Foo </Radio>{' '}\n        <Radio name={'foobar'} defaultChecked>\n          {' '}\n          Bar{' '}\n        </Radio>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PreselectedRadioDemo,
} satisfies StoryObj

export const DisabledRadioStory = {
  name: 'Disabled radio',
  parameters: {
    official: { id: 'form-radio/basic/003' },
    docs: {
      source: {
        code: "import { Control, Radio } from '@seagreenio/react-bulma'\n\nfunction DisabledRadioDemo() {\n  return (\n    <>\n      <Control>\n        <Radio name={'rsvp'}> Going </Radio>{' '}\n        <Radio name={'rsvp'}> Not going </Radio>{' '}\n        <Radio name={'rsvp'} disabled wrapperProps={{ 'aria-disabled': true }}>\n          {' '}\n          Maybe{' '}\n        </Radio>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DisabledRadioDemo,
} satisfies StoryObj

export const RadioButtonListStory = {
  name: 'Radio button list',
  parameters: {
    official: { id: 'form-radio/list-of-radio-buttons/001' },
    docs: {
      source: {
        code: "import { Block, Radio, Radios } from '@seagreenio/react-bulma'\n\nfunction RadioButtonListDemo() {\n  return (\n    <>\n      <Block>\n        <Radios>\n          <Radio name={'rsvp'}> Going </Radio>\n          <Radio name={'rsvp'}> Not going </Radio>\n          <Radio\n            name={'rsvp'}\n            disabled\n            wrapperProps={{ 'aria-disabled': true }}\n          >\n            {' '}\n            Maybe{' '}\n          </Radio>\n        </Radios>\n      </Block>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RadioButtonListDemo,
} satisfies StoryObj

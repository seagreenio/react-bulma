import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Content,
  Control,
  Field,
  FieldBody,
  FieldLabel,
  Icon,
  Input,
  Label,
} from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Input'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The '}
          <strong data-official-prose="">{'text input'}</strong>
          {' and its variations'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <code data-official-prose="">{'input'}</code>
            {' CSS class is meant for '}
            <code data-official-prose="">{'<input>'}</code>
            {' HTML elements. The following '}
            <a
              data-official-prose=""
              href={'http://htmlreference.io/element/input/'}
              target={'_blank'}
            >
              {'type attributes'}
            </a>
            {' are supported: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'type="text"'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'type="password"'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'type="email"'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'type="tel"'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {'Several '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' are supported which affect:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {' the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#colors'}>
                  {'color'}
                </a>
              </strong>
            </li>
            <li data-official-prose="">
              {' the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#sizes'}>
                  {'size'}
                </a>
              </strong>
            </li>
            <li data-official-prose="">
              {' the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#states'}>
                  {'state'}
                </a>
              </strong>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/basic/001'}
          >
            <div data-official-example="form-input/basic/001">
              <Canvas of={TextInputStory} />
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
                    '\n<input class="input" type="text" placeholder="Text input" />\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Colors '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#colors'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-example="form-input/colors/001">
          <Canvas of={LinkInputStory} />
        </div>
        <div data-official-example="form-input/colors/002">
          <Canvas of={PrimaryInputStory} />
        </div>
        <div data-official-example="form-input/colors/003">
          <Canvas of={InfoInputStory} />
        </div>
        <div data-official-example="form-input/colors/004">
          <Canvas of={SuccessInputStory} />
        </div>
        <div data-official-example="form-input/colors/005">
          <Canvas of={WarningInputStory} />
        </div>
        <div data-official-example="form-input/colors/006">
          <Canvas of={DangerInputStory} />
        </div>
        <h3
          data-official-prose=""
          id={'sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Sizes '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sizes'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-example="form-input/sizes/001">
          <Canvas of={SmallInputStory} />
        </div>
        <div data-official-example="form-input/sizes/002">
          <Canvas of={NormalSizeInputStory} />
        </div>
        <div data-official-example="form-input/sizes/003">
          <Canvas of={MediumInputStory} />
        </div>
        <div data-official-example="form-input/sizes/004">
          <Canvas of={LargeInputStory} />
        </div>
        <h3
          data-official-prose=""
          id={'styles'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Styles '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#styles'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/styles/001'}
          >
            <div data-official-example="form-input/styles/001">
              <Canvas of={RoundedInputStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<input class="input is-rounded" type="text" placeholder="Rounded input" />\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'states'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' States '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#states'}
          >
            {' # '}
          </a>
        </h3>
        <h4 data-official-prose="" className={'title is-5'}>
          {'Normal'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/normal/001'}
          >
            <div data-official-example="form-input/normal/001">
              <Canvas of={NormalStateStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control">\n  <input class="input" type="text" placeholder="Normal input" />\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-5'}>
          {'Hover'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/hover/001'}
          >
            <div data-official-example="form-input/hover/001">
              <Canvas of={HoverStateStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control">\n  <input class="input is-hovered" type="text" placeholder="Hovered input" />\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-5'}>
          {'Focus'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/focus/001'}
          >
            <div data-official-example="form-input/focus/001">
              <Canvas of={FocusStateStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control">\n  <input class="input is-focused" type="text" placeholder="Focused input" />\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-5'}>
          {'Loading'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/loading/001'}
          >
            <div data-official-example="form-input/loading/001">
              <Canvas of={LoadingInputStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control is-loading">\n  <input class="input" type="text" placeholder="Loading input" />\n</div>\n'
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
            data-source-example={'form-input/loading/002'}
          >
            <div data-official-example="form-input/loading/002">
              <Canvas of={LoadingSpinnerSizesStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="field">\n  <div class="control is-small is-loading">\n    <input\n      class="input is-small"\n      type="text"\n      placeholder="Small loading input"\n    />\n  </div>\n</div>\n<div class="field">\n  <div class="control is-loading">\n    <input class="input" type="text" placeholder="Normal loading input" />\n  </div>\n</div>\n<div class="field">\n  <div class="control is-medium is-loading">\n    <input\n      class="input is-medium"\n      type="text"\n      placeholder="Medium loading input"\n    />\n  </div>\n</div>\n<div class="field">\n  <div class="control is-large is-loading">\n    <input\n      class="input is-large"\n      type="text"\n      placeholder="Large loading input"\n    />\n  </div>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-5'}>
          {'Disabled'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/disabled/001'}
          >
            <div data-official-example="form-input/disabled/001">
              <Canvas of={DisabledInputStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control">\n  <input class="input" type="text" placeholder="Disabled input" disabled />\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-5'}>
          {'Readonly and static inputs'}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you use the '}
            <code data-official-prose="">{'readonly'}</code>
            {
              ' HTML attribute, the input will look similar to a normal one, but is not editable and has no shadow. '
            }
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/readonly-and-static-inputs/001'}
          >
            <div data-official-example="form-input/readonly-and-static-inputs/001">
              <Canvas of={ReadOnlyInputStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control">\n  <input class="input" type="text" value="This text is readonly" readonly />\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you '}
            <em data-official-prose="">{'also'}</em>
            {' append the '}
            <code data-official-prose="">{'is-static'}</code>
            {
              ' modifier, it removes the background, border, shadow, and horizontal padding, while maintaining the '
            }
            <strong data-official-prose="">{'vertical spacing'}</strong>
            {
              ' so you can easily align the input in any context, like a horizontal form. '
            }
          </p>
        </div>
        <div data-official-example="form-input/readonly-and-static-inputs/002">
          <Canvas of={StaticInputStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="field is-horizontal">\n  <div class="field-label is-normal">\n    <label class="label">From</label>\n  </div>\n  <div class="field-body">\n    <div class="field">\n      <p class="control">\n        <input\n          class="input is-static"\n          type="email"\n          value="me@example.com"\n          readonly\n        />\n      </p>\n    </div>\n  </div>\n</div>\n\n<div class="field is-horizontal">\n  <div class="field-label is-normal">\n    <label class="label">To</label>\n  </div>\n  <div class="field-body">\n    <div class="field">\n      <p class="control">\n        <input class="input" type="email" placeholder="Recipient email" />\n      </p>\n    </div>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <h3
          data-official-prose=""
          id={'with-font-awesome-icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' With Font Awesome icons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#with-font-awesome-icons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can append one of 2 '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' on a control:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'has-icons-left'}</code>
            </li>
            <li data-official-prose="">
              {'and/or '}
              <code data-official-prose="">{'has-icons-right'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {'You also need to add a modifier on the '}
            <strong data-official-prose="">{'icon'}</strong>
            {':'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-left'}</code>
              {' if '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {' is used'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-right'}</code>
              {' if '}
              <code data-official-prose="">{'has-icons-right'}</code>
              {' is used'}
            </li>
          </ul>
          <p data-official-prose="">
            {'The size of the '}
            <strong data-official-prose="">{'input'}</strong>
            {' will define the size of the icon container.'}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-input/with-font-awesome-icons/001'}
          >
            <div data-official-example="form-input/with-font-awesome-icons/001">
              <Canvas of={InputsWithIconsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="field">\n  <p class="control has-icons-left has-icons-right">\n    <input class="input" type="email" placeholder="Email" />\n    <span class="icon is-small is-left">\n      <i class="fas fa-envelope"></i>\n    </span>\n    <span class="icon is-small is-right">\n      <i class="fas fa-check"></i>\n    </span>\n  </p>\n</div>\n<div class="field">\n  <p class="control has-icons-left">\n    <input class="input" type="password" placeholder="Password" />\n    <span class="icon is-small is-left">\n      <i class="fas fa-lock"></i>\n    </span>\n  </p>\n</div>\n'
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
            data-source-example={'form-input/with-font-awesome-icons/002'}
          >
            <div data-official-example="form-input/with-font-awesome-icons/002">
              <Canvas of={SmallInputWithIconsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left has-icons-right">\n  <input class="input is-small" type="email" placeholder="Email" />\n  <span class="icon is-small is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-small is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
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
            data-source-example={'form-input/with-font-awesome-icons/003'}
          >
            <div data-official-example="form-input/with-font-awesome-icons/003">
              <Canvas of={NormalInputWithIconsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left has-icons-right">\n  <input class="input" type="email" placeholder="Email" />\n  <span class="icon is-small is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-small is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
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
            data-source-example={'form-input/with-font-awesome-icons/004'}
          >
            <div data-official-example="form-input/with-font-awesome-icons/004">
              <Canvas of={MediumInputWithIconsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left has-icons-right">\n  <input class="input is-medium" type="email" placeholder="Email" />\n  <span class="icon is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
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
            data-source-example={'form-input/with-font-awesome-icons/005'}
          >
            <div data-official-example="form-input/with-font-awesome-icons/005">
              <Canvas of={LargeInputWithIconsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left has-icons-right">\n  <input class="input is-large" type="email" placeholder="Email" />\n  <span class="icon is-medium is-left">\n    <i class="fas fa-envelope"></i>\n  </span>\n  <span class="icon is-medium is-right">\n    <i class="fas fa-check"></i>\n  </span>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function TextInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Text input'} />
    </>
  )
}

function LinkInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Link input'} color={'link'} />
    </>
  )
}

function PrimaryInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Primary input'} color={'primary'} />
    </>
  )
}

function InfoInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Info input'} color={'info'} />
    </>
  )
}

function SuccessInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Success input'} color={'success'} />
    </>
  )
}

function WarningInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Warning input'} color={'warning'} />
    </>
  )
}

function DangerInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Danger input'} color={'danger'} />
    </>
  )
}

function SmallInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Small input'} size={'small'} />
    </>
  )
}

function NormalSizeInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Normal input'} size={'normal'} />
    </>
  )
}

function MediumInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Medium input'} size={'medium'} />
    </>
  )
}

function LargeInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Large input'} size={'large'} />
    </>
  )
}

function RoundedInputDemo() {
  return (
    <>
      <Input type={'text'} placeholder={'Rounded input'} rounded />
    </>
  )
}

function NormalStateDemo() {
  return (
    <>
      <Control>
        <Input type={'text'} placeholder={'Normal input'} />
      </Control>
    </>
  )
}

function HoverStateDemo() {
  return (
    <>
      <Control>
        <Input type={'text'} placeholder={'Hovered input'} state={'hovered'} />
      </Control>
    </>
  )
}

function FocusStateDemo() {
  return (
    <>
      <Control>
        <Input type={'text'} placeholder={'Focused input'} state={'focused'} />
      </Control>
    </>
  )
}

function LoadingInputDemo() {
  return (
    <>
      <Control loading>
        <Input type={'text'} placeholder={'Loading input'} />
      </Control>
    </>
  )
}

function LoadingSpinnerSizesDemo() {
  return (
    <>
      <Content>
        <p>
          You can resize the loading spinner by appending{' '}
          <code>{'is-small'}</code>, <code>{'is-medium'}</code> or{' '}
          <code>{'is-large'}</code> to the <code>{'control'}</code> container.
        </p>
      </Content>
      <Field>
        <Control size={'small'} loading>
          <Input
            type={'text'}
            placeholder={'Small loading input'}
            size={'small'}
          />
        </Control>
      </Field>
      <Field>
        <Control loading>
          <Input type={'text'} placeholder={'Normal loading input'} />
        </Control>
      </Field>
      <Field>
        <Control size={'medium'} loading>
          <Input
            type={'text'}
            placeholder={'Medium loading input'}
            size={'medium'}
          />
        </Control>
      </Field>
      <Field>
        <Control size={'large'} loading>
          <Input
            type={'text'}
            placeholder={'Large loading input'}
            size={'large'}
          />
        </Control>
      </Field>
    </>
  )
}

function DisabledInputDemo() {
  return (
    <>
      <Control>
        <Input type={'text'} placeholder={'Disabled input'} disabled />
      </Control>
    </>
  )
}

function ReadOnlyInputDemo() {
  return (
    <>
      <Control>
        <Input type={'text'} defaultValue={'This text is readonly'} readOnly />
      </Control>
    </>
  )
}

function StaticInputDemo() {
  return (
    <>
      <div className={'bd-example'}>
        <Field horizontal>
          <FieldLabel size={'normal'}>
            <Label>From</Label>
          </FieldLabel>
          <FieldBody>
            <Field>
              <Control as={'p'}>
                <Input
                  type={'email'}
                  defaultValue={'me@example.com'}
                  readOnly
                  static
                />
              </Control>
            </Field>
          </FieldBody>
        </Field>
        <Field horizontal>
          <FieldLabel size={'normal'}>
            <Label>To</Label>
          </FieldLabel>
          <FieldBody>
            <Field>
              <Control as={'p'}>
                <Input type={'email'} placeholder={'Recipient email'} />
              </Control>
            </Field>
          </FieldBody>
        </Field>
      </div>
    </>
  )
}

function InputsWithIconsDemo() {
  return (
    <>
      <Field>
        <Control icons={'both'} as={'p'}>
          <Input type={'email'} placeholder={'Email'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-envelope'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-check'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'left'} as={'p'}>
          <Input type={'password'} placeholder={'Password'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-lock'} />
          </Icon>
        </Control>
      </Field>
    </>
  )
}

function SmallInputWithIconsDemo() {
  return (
    <>
      <Content>
        <p>
          If the control contains an icon, Bulma will make sure the icon remains{' '}
          <strong>centered</strong>, no matter the size of the input <em>or</em>{' '}
          of the icon.
        </p>
      </Content>
      <Control icons={'both'}>
        <Input type={'email'} placeholder={'Email'} size={'small'} />{' '}
        <Icon size={'small'} className={'rb-is-left'}>
          <i className={'fas fa-envelope'} />
        </Icon>{' '}
        <Icon size={'small'} className={'rb-is-right'}>
          <i className={'fas fa-check'} />
        </Icon>
      </Control>
    </>
  )
}

function NormalInputWithIconsDemo() {
  return (
    <>
      <Control icons={'both'}>
        <Input type={'email'} placeholder={'Email'} />{' '}
        <Icon size={'small'} className={'rb-is-left'}>
          <i className={'fas fa-envelope'} />
        </Icon>{' '}
        <Icon size={'small'} className={'rb-is-right'}>
          <i className={'fas fa-check'} />
        </Icon>
      </Control>
    </>
  )
}

function MediumInputWithIconsDemo() {
  return (
    <>
      <Control icons={'both'}>
        <Input type={'email'} placeholder={'Email'} size={'medium'} />{' '}
        <Icon className={'rb-is-left'}>
          <i className={'fas fa-envelope'} />
        </Icon>{' '}
        <Icon className={'rb-is-right'}>
          <i className={'fas fa-check'} />
        </Icon>
      </Control>
    </>
  )
}

function LargeInputWithIconsDemo() {
  return (
    <>
      <Control icons={'both'}>
        <Input type={'email'} placeholder={'Email'} size={'large'} />{' '}
        <Icon size={'medium'} className={'rb-is-left'}>
          <i className={'fas fa-envelope'} />
        </Icon>{' '}
        <Icon size={'medium'} className={'rb-is-right'}>
          <i className={'fas fa-check'} />
        </Icon>
      </Control>
    </>
  )
}

export const TextInputStory = {
  name: 'Text input',
  parameters: {
    official: { id: 'form-input/basic/001' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction TextInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Text input'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TextInputDemo,
} satisfies StoryObj

export const LinkInputStory = {
  name: 'Link input',
  parameters: {
    official: { id: 'form-input/colors/001' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction LinkInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Link input'} color={'link'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkInputDemo,
} satisfies StoryObj

export const PrimaryInputStory = {
  name: 'Primary input',
  parameters: {
    official: { id: 'form-input/colors/002' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction PrimaryInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Primary input'} color={'primary'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryInputDemo,
} satisfies StoryObj

export const InfoInputStory = {
  name: 'Info input',
  parameters: {
    official: { id: 'form-input/colors/003' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction InfoInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Info input'} color={'info'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoInputDemo,
} satisfies StoryObj

export const SuccessInputStory = {
  name: 'Success input',
  parameters: {
    official: { id: 'form-input/colors/004' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction SuccessInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Success input'} color={'success'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessInputDemo,
} satisfies StoryObj

export const WarningInputStory = {
  name: 'Warning input',
  parameters: {
    official: { id: 'form-input/colors/005' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction WarningInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Warning input'} color={'warning'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningInputDemo,
} satisfies StoryObj

export const DangerInputStory = {
  name: 'Danger input',
  parameters: {
    official: { id: 'form-input/colors/006' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction DangerInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Danger input'} color={'danger'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerInputDemo,
} satisfies StoryObj

export const SmallInputStory = {
  name: 'Small input',
  parameters: {
    official: { id: 'form-input/sizes/001' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction SmallInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Small input'} size={'small'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallInputDemo,
} satisfies StoryObj

export const NormalSizeInputStory = {
  name: 'Normal size input',
  parameters: {
    official: { id: 'form-input/sizes/002' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction NormalSizeInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Normal input'} size={'normal'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalSizeInputDemo,
} satisfies StoryObj

export const MediumInputStory = {
  name: 'Medium input',
  parameters: {
    official: { id: 'form-input/sizes/003' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction MediumInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Medium input'} size={'medium'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumInputDemo,
} satisfies StoryObj

export const LargeInputStory = {
  name: 'Large input',
  parameters: {
    official: { id: 'form-input/sizes/004' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction LargeInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Large input'} size={'large'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeInputDemo,
} satisfies StoryObj

export const RoundedInputStory = {
  name: 'Rounded input',
  parameters: {
    official: { id: 'form-input/styles/001' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction RoundedInputDemo() {\n  return (\n    <>\n      <Input type={'text'} placeholder={'Rounded input'} rounded />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RoundedInputDemo,
} satisfies StoryObj

export const NormalStateStory = {
  name: 'Normal state',
  parameters: {
    official: { id: 'form-input/normal/001' },
    docs: {
      source: {
        code: "import { Control, Input } from '@seagreenio/react-bulma'\n\nfunction NormalStateDemo() {\n  return (\n    <>\n      <Control>\n        <Input type={'text'} placeholder={'Normal input'} />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalStateDemo,
} satisfies StoryObj

export const HoverStateStory = {
  name: 'Hover state',
  parameters: {
    official: { id: 'form-input/hover/001' },
    docs: {
      source: {
        code: "import { Control, Input } from '@seagreenio/react-bulma'\n\nfunction HoverStateDemo() {\n  return (\n    <>\n      <Control>\n        <Input type={'text'} placeholder={'Hovered input'} state={'hovered'} />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HoverStateDemo,
} satisfies StoryObj

export const FocusStateStory = {
  name: 'Focus state',
  parameters: {
    official: { id: 'form-input/focus/001' },
    docs: {
      source: {
        code: "import { Control, Input } from '@seagreenio/react-bulma'\n\nfunction FocusStateDemo() {\n  return (\n    <>\n      <Control>\n        <Input type={'text'} placeholder={'Focused input'} state={'focused'} />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FocusStateDemo,
} satisfies StoryObj

export const LoadingInputStory = {
  name: 'Loading input',
  parameters: {
    official: { id: 'form-input/loading/001' },
    docs: {
      source: {
        code: "import { Control, Input } from '@seagreenio/react-bulma'\n\nfunction LoadingInputDemo() {\n  return (\n    <>\n      <Control loading>\n        <Input type={'text'} placeholder={'Loading input'} />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LoadingInputDemo,
} satisfies StoryObj

export const LoadingSpinnerSizesStory = {
  name: 'Loading spinner sizes',
  parameters: {
    official: { id: 'form-input/loading/002' },
    docs: {
      source: {
        code: "import { Content, Control, Field, Input } from '@seagreenio/react-bulma'\n\nfunction LoadingSpinnerSizesDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can resize the loading spinner by appending{' '}\n          <code>{'is-small'}</code>, <code>{'is-medium'}</code> or{' '}\n          <code>{'is-large'}</code> to the <code>{'control'}</code> container.\n        </p>\n      </Content>\n      <Field>\n        <Control size={'small'} loading>\n          <Input\n            type={'text'}\n            placeholder={'Small loading input'}\n            size={'small'}\n          />\n        </Control>\n      </Field>\n      <Field>\n        <Control loading>\n          <Input type={'text'} placeholder={'Normal loading input'} />\n        </Control>\n      </Field>\n      <Field>\n        <Control size={'medium'} loading>\n          <Input\n            type={'text'}\n            placeholder={'Medium loading input'}\n            size={'medium'}\n          />\n        </Control>\n      </Field>\n      <Field>\n        <Control size={'large'} loading>\n          <Input\n            type={'text'}\n            placeholder={'Large loading input'}\n            size={'large'}\n          />\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LoadingSpinnerSizesDemo,
} satisfies StoryObj

export const DisabledInputStory = {
  name: 'Disabled input',
  parameters: {
    official: { id: 'form-input/disabled/001' },
    docs: {
      source: {
        code: "import { Control, Input } from '@seagreenio/react-bulma'\n\nfunction DisabledInputDemo() {\n  return (\n    <>\n      <Control>\n        <Input type={'text'} placeholder={'Disabled input'} disabled />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DisabledInputDemo,
} satisfies StoryObj

export const ReadOnlyInputStory = {
  name: 'Read-only input',
  parameters: {
    official: { id: 'form-input/readonly-and-static-inputs/001' },
    docs: {
      source: {
        code: "import { Control, Input } from '@seagreenio/react-bulma'\n\nfunction ReadOnlyInputDemo() {\n  return (\n    <>\n      <Control>\n        <Input type={'text'} defaultValue={'This text is readonly'} readOnly />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ReadOnlyInputDemo,
} satisfies StoryObj

export const StaticInputStory = {
  name: 'Static input',
  parameters: {
    official: { id: 'form-input/readonly-and-static-inputs/002' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  FieldBody,\n  FieldLabel,\n  Input,\n  Label,\n} from '@seagreenio/react-bulma'\n\nfunction StaticInputDemo() {\n  return (\n    <>\n      <div className={'bd-example'}>\n        <Field horizontal>\n          <FieldLabel size={'normal'}>\n            <Label>From</Label>\n          </FieldLabel>\n          <FieldBody>\n            <Field>\n              <Control as={'p'}>\n                <Input\n                  type={'email'}\n                  defaultValue={'me@example.com'}\n                  readOnly\n                  static\n                />\n              </Control>\n            </Field>\n          </FieldBody>\n        </Field>\n        <Field horizontal>\n          <FieldLabel size={'normal'}>\n            <Label>To</Label>\n          </FieldLabel>\n          <FieldBody>\n            <Field>\n              <Control as={'p'}>\n                <Input type={'email'} placeholder={'Recipient email'} />\n              </Control>\n            </Field>\n          </FieldBody>\n        </Field>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: StaticInputDemo,
} satisfies StoryObj

export const InputsWithIconsStory = {
  name: 'Inputs with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/001' },
    docs: {
      source: {
        code: "import { Control, Field, Icon, Input } from '@seagreenio/react-bulma'\n\nfunction InputsWithIconsDemo() {\n  return (\n    <>\n      <Field>\n        <Control icons={'both'} as={'p'}>\n          <Input type={'email'} placeholder={'Email'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'left'} as={'p'}>\n          <Input type={'password'} placeholder={'Password'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-lock'} />\n          </Icon>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InputsWithIconsDemo,
} satisfies StoryObj

export const SmallInputWithIconsStory = {
  name: 'Small input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/002' },
    docs: {
      source: {
        code: "import { Content, Control, Icon, Input } from '@seagreenio/react-bulma'\n\nfunction SmallInputWithIconsDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          If the control contains an icon, Bulma will make sure the icon remains{' '}\n          <strong>centered</strong>, no matter the size of the input <em>or</em>{' '}\n          of the icon.\n        </p>\n      </Content>\n      <Control icons={'both'}>\n        <Input type={'email'} placeholder={'Email'} size={'small'} />{' '}\n        <Icon size={'small'} className={'rb-is-left'}>\n          <i className={'fas fa-envelope'} />\n        </Icon>{' '}\n        <Icon size={'small'} className={'rb-is-right'}>\n          <i className={'fas fa-check'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallInputWithIconsDemo,
} satisfies StoryObj

export const NormalInputWithIconsStory = {
  name: 'Normal input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/003' },
    docs: {
      source: {
        code: "import { Control, Icon, Input } from '@seagreenio/react-bulma'\n\nfunction NormalInputWithIconsDemo() {\n  return (\n    <>\n      <Control icons={'both'}>\n        <Input type={'email'} placeholder={'Email'} />{' '}\n        <Icon size={'small'} className={'rb-is-left'}>\n          <i className={'fas fa-envelope'} />\n        </Icon>{' '}\n        <Icon size={'small'} className={'rb-is-right'}>\n          <i className={'fas fa-check'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalInputWithIconsDemo,
} satisfies StoryObj

export const MediumInputWithIconsStory = {
  name: 'Medium input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/004' },
    docs: {
      source: {
        code: "import { Control, Icon, Input } from '@seagreenio/react-bulma'\n\nfunction MediumInputWithIconsDemo() {\n  return (\n    <>\n      <Control icons={'both'}>\n        <Input type={'email'} placeholder={'Email'} size={'medium'} />{' '}\n        <Icon className={'rb-is-left'}>\n          <i className={'fas fa-envelope'} />\n        </Icon>{' '}\n        <Icon className={'rb-is-right'}>\n          <i className={'fas fa-check'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumInputWithIconsDemo,
} satisfies StoryObj

export const LargeInputWithIconsStory = {
  name: 'Large input with icons',
  parameters: {
    official: { id: 'form-input/with-font-awesome-icons/005' },
    docs: {
      source: {
        code: "import { Control, Icon, Input } from '@seagreenio/react-bulma'\n\nfunction LargeInputWithIconsDemo() {\n  return (\n    <>\n      <Control icons={'both'}>\n        <Input type={'email'} placeholder={'Email'} size={'large'} />{' '}\n        <Icon size={'medium'} className={'rb-is-left'}>\n          <i className={'fas fa-envelope'} />\n        </Icon>{' '}\n        <Icon size={'medium'} className={'rb-is-right'}>\n          <i className={'fas fa-check'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeInputWithIconsDemo,
} satisfies StoryObj

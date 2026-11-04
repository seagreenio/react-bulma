import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Content, Control, Field, Textarea } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-textarea',
      title: 'Textarea',
      url: 'https://bulma.io/documentation/form/textarea/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-textarea',
  title: 'CSS Library/Form/Textarea',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-textarea" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Textarea'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The multiline '}
          <strong data-official-prose="">{'textarea'}</strong>
          {' and its variations'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <code data-official-prose="">{'textarea'}</code>
            {' CSS class is the multiline version of the '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/form/input/'}
            >
              <code data-official-prose="">{'input'}</code>
              {' element'}
            </a>
            {': '}
          </p>
        </div>
        <div data-official-example="form-textarea/basic/001">
          <Canvas of={DefaultTextareaStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can set the height of the textarea using the '}
            <code data-official-prose="">{'rows'}</code>
            {' HTML attribute.'}
          </p>
        </div>
        <div data-official-example="form-textarea/basic/002">
          <Canvas of={TextareaWithTenRowsStory} />
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
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'textarea'}</code>
            {' element is available in several colors:'}
          </p>
        </div>
        <div data-official-example="form-textarea/colors/001">
          <Canvas of={LinkTextareaStory} />
        </div>
        <div data-official-example="form-textarea/colors/002">
          <Canvas of={PrimaryTextareaStory} />
        </div>
        <div data-official-example="form-textarea/colors/003">
          <Canvas of={InfoTextareaStory} />
        </div>
        <div data-official-example="form-textarea/colors/004">
          <Canvas of={SuccessTextareaStory} />
        </div>
        <div data-official-example="form-textarea/colors/005">
          <Canvas of={WarningTextareaStory} />
        </div>
        <div data-official-example="form-textarea/colors/006">
          <Canvas of={DangerTextareaStory} />
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
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'textarea'}</code>
            {' element comes in '}
            <strong data-official-prose="">{'4 different sizes:'}</strong>
          </p>
        </div>
        <div data-official-example="form-textarea/sizes/001">
          <Canvas of={TextareaSizesStory} />
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
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Bulma styles the different '}
            <strong data-official-prose="">{'states'}</strong>
            {' of the '}
            <code data-official-prose="">{'textarea'}</code>
            {
              ' element. Each state is available as a pseudo-class and a CSS class: '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{':hover'}</code>
              {' and '}
              <code data-official-prose="">{'is-hovered'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{':focus'}</code>
              {' and '}
              <code data-official-prose="">{'is-focused'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{':active'}</code>
              {' and '}
              <code data-official-prose="">{'is-active'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {
              'This allows you to obtain the style of a certain state without having to trigger it.'
            }
          </p>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Normal'}
        </h4>
        <div data-official-example="form-textarea/normal/001">
          <Canvas of={NormalStateStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Hover'}
        </h4>
        <div data-official-example="form-textarea/hover/001">
          <Canvas of={HoverStateStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Focus'}
        </h4>
        <div data-official-example="form-textarea/focus/001">
          <Canvas of={FocusStateStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Loading'}
        </h4>
        <div data-official-example="form-textarea/loading/001">
          <Canvas of={LoadingTextareaStory} />
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-textarea/loading/002'}
          >
            <div data-official-example="form-textarea/loading/002">
              <Canvas of={LoadingSpinnerSizesStory} />
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
                    '\n<div class="field">\n  <div class="control is-small is-loading">\n    <textarea\n      class="textarea is-small"\n      placeholder="Small loading textarea"\n    ></textarea>\n  </div>\n</div>\n<div class="field">\n  <div class="control is-loading">\n    <textarea class="textarea" placeholder="Normal loading textarea"></textarea>\n  </div>\n</div>\n<div class="field">\n  <div class="control is-medium is-loading">\n    <textarea\n      class="textarea is-medium"\n      placeholder="Medium loading textarea"\n    ></textarea>\n  </div>\n</div>\n<div class="field">\n  <div class="control is-large is-loading">\n    <textarea\n      class="textarea is-large"\n      placeholder="Large loading textarea"\n    ></textarea>\n  </div>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Disabled'}
        </h4>
        <div data-official-example="form-textarea/disabled/001">
          <Canvas of={DisabledTextareaStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Readonly'}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you use the '}
            <code data-official-prose="">{'readonly'}</code>
            {
              ' HTML attribute, the textarea will look similar to a normal one, but is not editable and has no shadow. '
            }
          </p>
        </div>
        <div data-official-example="form-textarea/readonly/001">
          <Canvas of={ReadOnlyTextareaStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Fixed Size'}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can disable a '}
            <code data-official-prose="">{'textarea'}</code>
            {' resizing by appending the '}
            <code data-official-prose="">{'has-fixed-size'}</code>
            {' modifier:'}
          </p>
        </div>
        <div data-official-example="form-textarea/fixed-size/001">
          <Canvas of={FixedSizeTextareaStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultTextareaDemo() {
  return (
    <>
      <Textarea placeholder={'e.g. Hello world'} defaultValue={''} />
    </>
  )
}

function TextareaWithTenRowsDemo() {
  return (
    <>
      <Textarea
        placeholder={'10 lines of textarea'}
        rows={10}
        defaultValue={''}
      />
    </>
  )
}

function LinkTextareaDemo() {
  return (
    <>
      <Textarea
        placeholder={'Link textarea'}
        color={'link'}
        defaultValue={''}
      />
    </>
  )
}

function PrimaryTextareaDemo() {
  return (
    <>
      <Textarea
        placeholder={'Primary textarea'}
        color={'primary'}
        defaultValue={''}
      />
    </>
  )
}

function InfoTextareaDemo() {
  return (
    <>
      <Textarea
        placeholder={'Info textarea'}
        color={'info'}
        defaultValue={''}
      />
    </>
  )
}

function SuccessTextareaDemo() {
  return (
    <>
      <Textarea
        placeholder={'Success textarea'}
        color={'success'}
        defaultValue={''}
      />
    </>
  )
}

function WarningTextareaDemo() {
  return (
    <>
      <Textarea
        placeholder={'Warning textarea'}
        color={'warning'}
        defaultValue={''}
      />
    </>
  )
}

function DangerTextareaDemo() {
  return (
    <>
      <Textarea
        placeholder={'Danger textarea'}
        color={'danger'}
        defaultValue={''}
      />
    </>
  )
}

function TextareaSizesDemo() {
  return (
    <>
      <Field>
        <Control>
          <Textarea
            placeholder={'Small textarea'}
            size={'small'}
            defaultValue={''}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Textarea placeholder={'Normal textarea'} defaultValue={''} />
        </Control>
      </Field>
      <Field>
        <Control>
          <Textarea
            placeholder={'Medium textarea'}
            size={'medium'}
            defaultValue={''}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Textarea
            placeholder={'Large textarea'}
            size={'large'}
            defaultValue={''}
          />
        </Control>
      </Field>
    </>
  )
}

function NormalStateDemo() {
  return (
    <>
      <Control>
        <Textarea placeholder={'Normal textarea'} defaultValue={''} />
      </Control>
    </>
  )
}

function HoverStateDemo() {
  return (
    <>
      <Control>
        <Textarea
          placeholder={'Hovered textarea'}
          state={'hovered'}
          defaultValue={''}
        />
      </Control>
    </>
  )
}

function FocusStateDemo() {
  return (
    <>
      <Control>
        <Textarea
          placeholder={'Focused textarea'}
          state={'focused'}
          defaultValue={''}
        />
      </Control>
    </>
  )
}

function LoadingTextareaDemo() {
  return (
    <>
      <Control loading>
        <Textarea placeholder={'Loading textarea'} defaultValue={''} />
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
          <Textarea
            placeholder={'Small loading textarea'}
            size={'small'}
            defaultValue={''}
          />
        </Control>
      </Field>
      <Field>
        <Control loading>
          <Textarea placeholder={'Normal loading textarea'} defaultValue={''} />
        </Control>
      </Field>
      <Field>
        <Control size={'medium'} loading>
          <Textarea
            placeholder={'Medium loading textarea'}
            size={'medium'}
            defaultValue={''}
          />
        </Control>
      </Field>
      <Field>
        <Control size={'large'} loading>
          <Textarea
            placeholder={'Large loading textarea'}
            size={'large'}
            defaultValue={''}
          />
        </Control>
      </Field>
    </>
  )
}

function DisabledTextareaDemo() {
  return (
    <>
      <Control>
        <Textarea
          placeholder={'Disabled textarea'}
          disabled
          defaultValue={''}
        />
      </Control>
    </>
  )
}

function ReadOnlyTextareaDemo() {
  return (
    <>
      <Control>
        <Textarea readOnly defaultValue={'This content is readonly'} />
      </Control>
    </>
  )
}

function FixedSizeTextareaDemo() {
  return (
    <>
      <Control>
        <Textarea
          placeholder={'Fixed size textarea'}
          fixedSize
          defaultValue={''}
        />
      </Control>
    </>
  )
}

export const DefaultTextareaStory = {
  name: 'Default textarea',
  parameters: {
    official: { id: 'form-textarea/basic/001' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction DefaultTextareaDemo() {\n  return (\n    <>\n      <Textarea placeholder={'e.g. Hello world'} defaultValue={''} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultTextareaDemo,
} satisfies StoryObj

export const TextareaWithTenRowsStory = {
  name: 'Textarea with ten rows',
  parameters: {
    official: { id: 'form-textarea/basic/002' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction TextareaWithTenRowsDemo() {\n  return (\n    <>\n      <Textarea\n        placeholder={'10 lines of textarea'}\n        rows={10}\n        defaultValue={''}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TextareaWithTenRowsDemo,
} satisfies StoryObj

export const LinkTextareaStory = {
  name: 'Link textarea',
  parameters: {
    official: { id: 'form-textarea/colors/001' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction LinkTextareaDemo() {\n  return (\n    <>\n      <Textarea\n        placeholder={'Link textarea'}\n        color={'link'}\n        defaultValue={''}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkTextareaDemo,
} satisfies StoryObj

export const PrimaryTextareaStory = {
  name: 'Primary textarea',
  parameters: {
    official: { id: 'form-textarea/colors/002' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction PrimaryTextareaDemo() {\n  return (\n    <>\n      <Textarea\n        placeholder={'Primary textarea'}\n        color={'primary'}\n        defaultValue={''}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryTextareaDemo,
} satisfies StoryObj

export const InfoTextareaStory = {
  name: 'Info textarea',
  parameters: {
    official: { id: 'form-textarea/colors/003' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction InfoTextareaDemo() {\n  return (\n    <>\n      <Textarea\n        placeholder={'Info textarea'}\n        color={'info'}\n        defaultValue={''}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoTextareaDemo,
} satisfies StoryObj

export const SuccessTextareaStory = {
  name: 'Success textarea',
  parameters: {
    official: { id: 'form-textarea/colors/004' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction SuccessTextareaDemo() {\n  return (\n    <>\n      <Textarea\n        placeholder={'Success textarea'}\n        color={'success'}\n        defaultValue={''}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessTextareaDemo,
} satisfies StoryObj

export const WarningTextareaStory = {
  name: 'Warning textarea',
  parameters: {
    official: { id: 'form-textarea/colors/005' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction WarningTextareaDemo() {\n  return (\n    <>\n      <Textarea\n        placeholder={'Warning textarea'}\n        color={'warning'}\n        defaultValue={''}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningTextareaDemo,
} satisfies StoryObj

export const DangerTextareaStory = {
  name: 'Danger textarea',
  parameters: {
    official: { id: 'form-textarea/colors/006' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction DangerTextareaDemo() {\n  return (\n    <>\n      <Textarea\n        placeholder={'Danger textarea'}\n        color={'danger'}\n        defaultValue={''}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerTextareaDemo,
} satisfies StoryObj

export const TextareaSizesStory = {
  name: 'Textarea sizes',
  parameters: {
    official: { id: 'form-textarea/sizes/001' },
    docs: {
      source: {
        code: "import { Control, Field, Textarea } from '@seagreenio/react-bulma'\n\nfunction TextareaSizesDemo() {\n  return (\n    <>\n      <Field>\n        <Control>\n          <Textarea\n            placeholder={'Small textarea'}\n            size={'small'}\n            defaultValue={''}\n          />\n        </Control>\n      </Field>\n      <Field>\n        <Control>\n          <Textarea placeholder={'Normal textarea'} defaultValue={''} />\n        </Control>\n      </Field>\n      <Field>\n        <Control>\n          <Textarea\n            placeholder={'Medium textarea'}\n            size={'medium'}\n            defaultValue={''}\n          />\n        </Control>\n      </Field>\n      <Field>\n        <Control>\n          <Textarea\n            placeholder={'Large textarea'}\n            size={'large'}\n            defaultValue={''}\n          />\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TextareaSizesDemo,
} satisfies StoryObj

export const NormalStateStory = {
  name: 'Normal state',
  parameters: {
    official: { id: 'form-textarea/normal/001' },
    docs: {
      source: {
        code: "import { Control, Textarea } from '@seagreenio/react-bulma'\n\nfunction NormalStateDemo() {\n  return (\n    <>\n      <Control>\n        <Textarea placeholder={'Normal textarea'} defaultValue={''} />\n      </Control>\n    </>\n  )\n}\n",
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
    official: { id: 'form-textarea/hover/001' },
    docs: {
      source: {
        code: "import { Control, Textarea } from '@seagreenio/react-bulma'\n\nfunction HoverStateDemo() {\n  return (\n    <>\n      <Control>\n        <Textarea\n          placeholder={'Hovered textarea'}\n          state={'hovered'}\n          defaultValue={''}\n        />\n      </Control>\n    </>\n  )\n}\n",
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
    official: { id: 'form-textarea/focus/001' },
    docs: {
      source: {
        code: "import { Control, Textarea } from '@seagreenio/react-bulma'\n\nfunction FocusStateDemo() {\n  return (\n    <>\n      <Control>\n        <Textarea\n          placeholder={'Focused textarea'}\n          state={'focused'}\n          defaultValue={''}\n        />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FocusStateDemo,
} satisfies StoryObj

export const LoadingTextareaStory = {
  name: 'Loading textarea',
  parameters: {
    official: { id: 'form-textarea/loading/001' },
    docs: {
      source: {
        code: "import { Control, Textarea } from '@seagreenio/react-bulma'\n\nfunction LoadingTextareaDemo() {\n  return (\n    <>\n      <Control loading>\n        <Textarea placeholder={'Loading textarea'} defaultValue={''} />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LoadingTextareaDemo,
} satisfies StoryObj

export const LoadingSpinnerSizesStory = {
  name: 'Loading spinner sizes',
  parameters: {
    official: { id: 'form-textarea/loading/002' },
    docs: {
      source: {
        code: "import { Content, Control, Field, Textarea } from '@seagreenio/react-bulma'\n\nfunction LoadingSpinnerSizesDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can resize the loading spinner by appending{' '}\n          <code>{'is-small'}</code>, <code>{'is-medium'}</code> or{' '}\n          <code>{'is-large'}</code> to the <code>{'control'}</code> container.\n        </p>\n      </Content>\n      <Field>\n        <Control size={'small'} loading>\n          <Textarea\n            placeholder={'Small loading textarea'}\n            size={'small'}\n            defaultValue={''}\n          />\n        </Control>\n      </Field>\n      <Field>\n        <Control loading>\n          <Textarea placeholder={'Normal loading textarea'} defaultValue={''} />\n        </Control>\n      </Field>\n      <Field>\n        <Control size={'medium'} loading>\n          <Textarea\n            placeholder={'Medium loading textarea'}\n            size={'medium'}\n            defaultValue={''}\n          />\n        </Control>\n      </Field>\n      <Field>\n        <Control size={'large'} loading>\n          <Textarea\n            placeholder={'Large loading textarea'}\n            size={'large'}\n            defaultValue={''}\n          />\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LoadingSpinnerSizesDemo,
} satisfies StoryObj

export const DisabledTextareaStory = {
  name: 'Disabled textarea',
  parameters: {
    official: { id: 'form-textarea/disabled/001' },
    docs: {
      source: {
        code: "import { Control, Textarea } from '@seagreenio/react-bulma'\n\nfunction DisabledTextareaDemo() {\n  return (\n    <>\n      <Control>\n        <Textarea\n          placeholder={'Disabled textarea'}\n          disabled\n          defaultValue={''}\n        />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DisabledTextareaDemo,
} satisfies StoryObj

export const ReadOnlyTextareaStory = {
  name: 'Read-only textarea',
  parameters: {
    official: { id: 'form-textarea/readonly/001' },
    docs: {
      source: {
        code: "import { Control, Textarea } from '@seagreenio/react-bulma'\n\nfunction ReadOnlyTextareaDemo() {\n  return (\n    <>\n      <Control>\n        <Textarea readOnly defaultValue={'This content is readonly'} />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ReadOnlyTextareaDemo,
} satisfies StoryObj

export const FixedSizeTextareaStory = {
  name: 'Fixed-size textarea',
  parameters: {
    official: { id: 'form-textarea/fixed-size/001' },
    docs: {
      source: {
        code: "import { Control, Textarea } from '@seagreenio/react-bulma'\n\nfunction FixedSizeTextareaDemo() {\n  return (\n    <>\n      <Control>\n        <Textarea\n          placeholder={'Fixed size textarea'}\n          fixedSize\n          defaultValue={''}\n        />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FixedSizeTextareaDemo,
} satisfies StoryObj

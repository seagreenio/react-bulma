import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Progress } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-progress',
      title: 'Progress Bar',
      url: 'https://bulma.io/documentation/elements/progress/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-progress',
  title: 'CSS Library/Elements/Progress bars',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-progress" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Progress Bar'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Native HTML '}
          <strong data-official-prose="">{'progress'}</strong>
          {' bars'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' The Bulma progress bar is a simple CSS class that styles the native '
            }
            <a
              data-official-prose=""
              href={
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress'
              }
              target={'_blank'}
            >
              <code data-official-prose="">{'<progress>'}</code>
              {' HTML element'}
            </a>
            {'. '}
          </p>
        </div>
        <div data-official-example="elements-progress/basic/001">
          <Canvas of={DefaultProgressStory} />
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
            {' The progress bar element is available in all the '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'. '}
          </p>
        </div>
        <div data-official-example="elements-progress/colors/001">
          <Canvas of={LinkProgressStory} />
        </div>
        <div data-official-example="elements-progress/colors/002">
          <Canvas of={PrimaryProgressStory} />
        </div>
        <div data-official-example="elements-progress/colors/003">
          <Canvas of={InfoProgressStory} />
        </div>
        <div data-official-example="elements-progress/colors/004">
          <Canvas of={SuccessProgressStory} />
        </div>
        <div data-official-example="elements-progress/colors/005">
          <Canvas of={WarningProgressStory} />
        </div>
        <div data-official-example="elements-progress/colors/006">
          <Canvas of={DangerProgressStory} />
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
        <div data-official-example="elements-progress/sizes/001">
          <Canvas of={SmallProgressStory} />
        </div>
        <div data-official-example="elements-progress/sizes/002">
          <Canvas of={NormalProgressStory} />
        </div>
        <div data-official-example="elements-progress/sizes/003">
          <Canvas of={MediumProgressStory} />
        </div>
        <div data-official-example="elements-progress/sizes/004">
          <Canvas of={LargeProgressStory} />
        </div>
        <h3
          data-official-prose=""
          id={'indeterminate'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Indeterminate '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#indeterminate'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {" If you don't set the HTML "}
            <code data-official-prose="">{'value'}</code>
            {' attribute, you can display an '}
            <strong data-official-prose="">{'indeterminate'}</strong>
            {
              " progress bar. It's used to show that some progress is going on, but the total duration is not yet determined. "
            }
          </p>
        </div>
        <div data-official-example="elements-progress/indeterminate/001">
          <Canvas of={IndeterminateProgressStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultProgressDemo() {
  return (
    <>
      <Progress value={'15'} max={'100'}>
        15%
      </Progress>
    </>
  )
}

function LinkProgressDemo() {
  return (
    <>
      <Progress value={'15'} max={'100'} color={'link'}>
        15%
      </Progress>
    </>
  )
}

function PrimaryProgressDemo() {
  return (
    <>
      <Progress value={'30'} max={'100'} color={'primary'}>
        30%
      </Progress>
    </>
  )
}

function InfoProgressDemo() {
  return (
    <>
      <Progress value={'45'} max={'100'} color={'info'}>
        45%
      </Progress>
    </>
  )
}

function SuccessProgressDemo() {
  return (
    <>
      <Progress value={'60'} max={'100'} color={'success'}>
        60%
      </Progress>
    </>
  )
}

function WarningProgressDemo() {
  return (
    <>
      <Progress value={'75'} max={'100'} color={'warning'}>
        75%
      </Progress>
    </>
  )
}

function DangerProgressDemo() {
  return (
    <>
      <Progress value={'90'} max={'100'} color={'danger'}>
        90%
      </Progress>
    </>
  )
}

function SmallProgressDemo() {
  return (
    <>
      <Progress value={'20'} max={'100'} size={'small'}>
        20%
      </Progress>
    </>
  )
}

function NormalProgressDemo() {
  return (
    <>
      <Progress value={'40'} max={'100'} className={'rb-is-normal'}>
        40%
      </Progress>
    </>
  )
}

function MediumProgressDemo() {
  return (
    <>
      <Progress value={'60'} max={'100'} size={'medium'}>
        60%
      </Progress>
    </>
  )
}

function LargeProgressDemo() {
  return (
    <>
      <Progress value={'80'} max={'100'} size={'large'}>
        80%
      </Progress>
    </>
  )
}

function IndeterminateProgressDemo() {
  return (
    <>
      <Progress max={'100'} size={'small'} color={'primary'}>
        15%
      </Progress>
      <Progress max={'100'} color={'danger'}>
        30%
      </Progress>
      <Progress max={'100'} size={'medium'} color={'dark'}>
        45%
      </Progress>
      <Progress max={'100'} size={'large'} color={'info'}>
        60%
      </Progress>
    </>
  )
}

export const DefaultProgressStory = {
  name: 'Default progress',
  parameters: {
    official: { id: 'elements-progress/basic/001' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction DefaultProgressDemo() {\n  return (\n    <>\n      <Progress value={'15'} max={'100'}>\n        15%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultProgressDemo,
} satisfies StoryObj

export const LinkProgressStory = {
  name: 'Link progress',
  parameters: {
    official: { id: 'elements-progress/colors/001' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction LinkProgressDemo() {\n  return (\n    <>\n      <Progress value={'15'} max={'100'} color={'link'}>\n        15%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkProgressDemo,
} satisfies StoryObj

export const PrimaryProgressStory = {
  name: 'Primary progress',
  parameters: {
    official: { id: 'elements-progress/colors/002' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction PrimaryProgressDemo() {\n  return (\n    <>\n      <Progress value={'30'} max={'100'} color={'primary'}>\n        30%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryProgressDemo,
} satisfies StoryObj

export const InfoProgressStory = {
  name: 'Info progress',
  parameters: {
    official: { id: 'elements-progress/colors/003' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction InfoProgressDemo() {\n  return (\n    <>\n      <Progress value={'45'} max={'100'} color={'info'}>\n        45%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoProgressDemo,
} satisfies StoryObj

export const SuccessProgressStory = {
  name: 'Success progress',
  parameters: {
    official: { id: 'elements-progress/colors/004' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction SuccessProgressDemo() {\n  return (\n    <>\n      <Progress value={'60'} max={'100'} color={'success'}>\n        60%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessProgressDemo,
} satisfies StoryObj

export const WarningProgressStory = {
  name: 'Warning progress',
  parameters: {
    official: { id: 'elements-progress/colors/005' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction WarningProgressDemo() {\n  return (\n    <>\n      <Progress value={'75'} max={'100'} color={'warning'}>\n        75%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningProgressDemo,
} satisfies StoryObj

export const DangerProgressStory = {
  name: 'Danger progress',
  parameters: {
    official: { id: 'elements-progress/colors/006' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction DangerProgressDemo() {\n  return (\n    <>\n      <Progress value={'90'} max={'100'} color={'danger'}>\n        90%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerProgressDemo,
} satisfies StoryObj

export const SmallProgressStory = {
  name: 'Small progress',
  parameters: {
    official: { id: 'elements-progress/sizes/001' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction SmallProgressDemo() {\n  return (\n    <>\n      <Progress value={'20'} max={'100'} size={'small'}>\n        20%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallProgressDemo,
} satisfies StoryObj

export const NormalProgressStory = {
  name: 'Normal progress',
  parameters: {
    official: { id: 'elements-progress/sizes/002' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction NormalProgressDemo() {\n  return (\n    <>\n      <Progress value={'40'} max={'100'} className={'rb-is-normal'}>\n        40%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalProgressDemo,
} satisfies StoryObj

export const MediumProgressStory = {
  name: 'Medium progress',
  parameters: {
    official: { id: 'elements-progress/sizes/003' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction MediumProgressDemo() {\n  return (\n    <>\n      <Progress value={'60'} max={'100'} size={'medium'}>\n        60%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumProgressDemo,
} satisfies StoryObj

export const LargeProgressStory = {
  name: 'Large progress',
  parameters: {
    official: { id: 'elements-progress/sizes/004' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction LargeProgressDemo() {\n  return (\n    <>\n      <Progress value={'80'} max={'100'} size={'large'}>\n        80%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeProgressDemo,
} satisfies StoryObj

export const IndeterminateProgressStory = {
  name: 'Indeterminate progress',
  parameters: {
    official: { id: 'elements-progress/indeterminate/001' },
    docs: {
      source: {
        code: "import { Progress } from '@seagreenio/react-bulma'\n\nfunction IndeterminateProgressDemo() {\n  return (\n    <>\n      <Progress max={'100'} size={'small'} color={'primary'}>\n        15%\n      </Progress>\n      <Progress max={'100'} color={'danger'}>\n        30%\n      </Progress>\n      <Progress max={'100'} size={'medium'} color={'dark'}>\n        45%\n      </Progress>\n      <Progress max={'100'} size={'large'} color={'info'}>\n        60%\n      </Progress>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: IndeterminateProgressDemo,
} satisfies StoryObj

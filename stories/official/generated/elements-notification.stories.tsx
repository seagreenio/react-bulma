import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import { Delete, Notification } from '../../../src'
import { officialPage } from '../support'

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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Notification'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Bold '}
          <strong data-official-prose="">{'notification'}</strong>
          {' blocks, to alert your users of something'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              " The notification is a simple colored block meant to draw the attention to the user about something. As such, it can be used as a pinned notification in the corner of the viewport. That's why it supports the use of the "
            }
            <code data-official-prose="">{'delete'}</code>
            {' element. '}
          </p>
        </div>
        <div data-official-example="elements-notification/basic/001">
          <Canvas of={DefaultNotificationStory} />
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
            {' The notification element is available in all the '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'. '}
          </p>
        </div>
        <div data-official-example="elements-notification/colors/001">
          <Canvas of={LinkNotificationStory} />
        </div>
        <div data-official-example="elements-notification/colors/002">
          <Canvas of={PrimaryNotificationStory} />
        </div>
        <div data-official-example="elements-notification/colors/003">
          <Canvas of={InfoNotificationStory} />
        </div>
        <div data-official-example="elements-notification/colors/004">
          <Canvas of={SuccessNotificationStory} />
        </div>
        <div data-official-example="elements-notification/colors/005">
          <Canvas of={WarningNotificationStory} />
        </div>
        <div data-official-example="elements-notification/colors/006">
          <Canvas of={DangerNotificationStory} />
        </div>
        <h3
          data-official-prose=""
          id={'light-colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Light colors '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#light-colors'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          {' Each color also comes in its '}
          <strong data-official-prose="">{'light'}</strong>
          {' version. Simply append the '}
          <code data-official-prose="">{'is-light'}</code>
          {' modifier to obtain the light version of the notification. '}
        </div>
        <div data-official-example="elements-notification/light-colors/001">
          <Canvas of={LightLinkNotificationStory} />
        </div>
        <div data-official-example="elements-notification/light-colors/002">
          <Canvas of={LightPrimaryNotificationStory} />
        </div>
        <div data-official-example="elements-notification/light-colors/003">
          <Canvas of={LightInfoNotificationStory} />
        </div>
        <div data-official-example="elements-notification/light-colors/004">
          <Canvas of={LightSuccessNotificationStory} />
        </div>
        <div data-official-example="elements-notification/light-colors/005">
          <Canvas of={LightWarningNotificationStory} />
        </div>
        <div data-official-example="elements-notification/light-colors/006">
          <Canvas of={LightDangerNotificationStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification>
          <Delete onClick={() => setVisible1(false)} /> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function LinkNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'link'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function PrimaryNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'primary'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function InfoNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'info'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function SuccessNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'success'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function WarningNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'warning'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function DangerNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'danger'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function LightLinkNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'link'} tone={'light'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function LightPrimaryNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'primary'} tone={'light'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function LightInfoNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'info'} tone={'light'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function LightSuccessNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'success'} tone={'light'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function LightWarningNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'warning'} tone={'light'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

function LightDangerNotificationDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Notification color={'danger'} tone={'light'}>
          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor
          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur.
        </Notification>
      )}
    </>
  )
}

export const DefaultNotificationStory = {
  name: 'Default notification',
  parameters: {
    official: { id: 'elements-notification/basic/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction DefaultNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification>\n          <Delete onClick={() => setVisible1(false)} /> Lorem ipsum dolor sit\n          amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultNotificationDemo,
} satisfies StoryObj

export const LinkNotificationStory = {
  name: 'Link notification',
  parameters: {
    official: { id: 'elements-notification/colors/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction LinkNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'link'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkNotificationDemo,
} satisfies StoryObj

export const PrimaryNotificationStory = {
  name: 'Primary notification',
  parameters: {
    official: { id: 'elements-notification/colors/002' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction PrimaryNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'primary'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryNotificationDemo,
} satisfies StoryObj

export const InfoNotificationStory = {
  name: 'Info notification',
  parameters: {
    official: { id: 'elements-notification/colors/003' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction InfoNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'info'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoNotificationDemo,
} satisfies StoryObj

export const SuccessNotificationStory = {
  name: 'Success notification',
  parameters: {
    official: { id: 'elements-notification/colors/004' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction SuccessNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'success'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessNotificationDemo,
} satisfies StoryObj

export const WarningNotificationStory = {
  name: 'Warning notification',
  parameters: {
    official: { id: 'elements-notification/colors/005' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction WarningNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'warning'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningNotificationDemo,
} satisfies StoryObj

export const DangerNotificationStory = {
  name: 'Danger notification',
  parameters: {
    official: { id: 'elements-notification/colors/006' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction DangerNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'danger'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerNotificationDemo,
} satisfies StoryObj

export const LightLinkNotificationStory = {
  name: 'Light link notification',
  parameters: {
    official: { id: 'elements-notification/light-colors/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction LightLinkNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'link'} tone={'light'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightLinkNotificationDemo,
} satisfies StoryObj

export const LightPrimaryNotificationStory = {
  name: 'Light primary notification',
  parameters: {
    official: { id: 'elements-notification/light-colors/002' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction LightPrimaryNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'primary'} tone={'light'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightPrimaryNotificationDemo,
} satisfies StoryObj

export const LightInfoNotificationStory = {
  name: 'Light info notification',
  parameters: {
    official: { id: 'elements-notification/light-colors/003' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction LightInfoNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'info'} tone={'light'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightInfoNotificationDemo,
} satisfies StoryObj

export const LightSuccessNotificationStory = {
  name: 'Light success notification',
  parameters: {
    official: { id: 'elements-notification/light-colors/004' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction LightSuccessNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'success'} tone={'light'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightSuccessNotificationDemo,
} satisfies StoryObj

export const LightWarningNotificationStory = {
  name: 'Light warning notification',
  parameters: {
    official: { id: 'elements-notification/light-colors/005' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction LightWarningNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'warning'} tone={'light'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightWarningNotificationDemo,
} satisfies StoryObj

export const LightDangerNotificationStory = {
  name: 'Light danger notification',
  parameters: {
    official: { id: 'elements-notification/light-colors/006' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Delete, Notification } from '@seagreenio/react-bulma'\n\nfunction LightDangerNotificationDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Notification color={'danger'} tone={'light'}>\n          <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum dolor\n          sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur.\n        </Notification>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightDangerNotificationDemo,
} satisfies StoryObj

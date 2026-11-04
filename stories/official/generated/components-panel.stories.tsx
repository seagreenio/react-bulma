import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Button,
  Control,
  Icon,
  Input,
  Panel,
  PanelBlock,
  PanelHeading,
  PanelIcon,
  PanelTab,
  PanelTabs,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-panel',
      title: 'Panel',
      url: 'https://bulma.io/documentation/components/panel/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-panel',
  title: 'CSS Library/Components/Panel',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-panel" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Panel'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A composable '}
          <strong data-official-prose="">{'panel'}</strong>
          {', for compact controls'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'panel'}</code>
            {' is a container for several types:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'panel-heading'}</code>
              {' as the first child'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'panel-tabs'}</code>
              {' for navigation'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'panel-block'}</code>
              {' which can contain other elements, like: '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'control'}</code>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'input'}</code>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'button'}</code>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'panel-icon'}</code>
                </li>
              </ul>
            </li>
          </ul>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'panel-block'}</code>
            {' can be an anchor tag '}
            <code data-official-prose="">{'<a>'}</code>
            {' or a label '}
            <code data-official-prose="">{'<label>'}</code>
            {' with a checkbox inside. '}
          </p>
        </div>
        <div data-official-example="components-panel/basic/001">
          <Canvas of={RepositoryPanelStory} />
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
            {' The panel component is available in all the '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'. Simply append one of the color modifiers. '}
          </p>
          <p data-official-prose="">
            {' For example, to use your primary color, use '}
            <code data-official-prose="">{'"panel is-primary"'}</code>
            {' as a class. '}
          </p>
        </div>
        <div data-official-example="components-panel/colors/001">
          <Canvas of={LinkPanelStory} />
        </div>
        <div data-official-example="components-panel/colors/002">
          <Canvas of={PrimaryPanelStory} />
        </div>
        <div data-official-example="components-panel/colors/003">
          <Canvas of={InfoPanelStory} />
        </div>
        <div data-official-example="components-panel/colors/004">
          <Canvas of={SuccessPanelStory} />
        </div>
        <div data-official-example="components-panel/colors/005">
          <Canvas of={WarningPanelStory} />
        </div>
        <div data-official-example="components-panel/colors/006">
          <Canvas of={DangerPanelStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function RepositoryPanelDemo() {
  return (
    <>
      <Panel>
        <PanelHeading>Repositories</PanelHeading>
        <PanelBlock>
          <Control icons={'left'} as={'p'}>
            <Input type={'text'} placeholder={'Search'} />{' '}
            <Icon className={'rb-is-left'}>
              <i aria-hidden={'true'} className={'fas fa-search'} />
            </Icon>
          </Control>
        </PanelBlock>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock active as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          marksheet
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          minireset.css
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          jgthms.github.io
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}
          </PanelIcon>
          daniellowtw/infboard
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}
          </PanelIcon>
          mojs
        </PanelBlock>
        <PanelBlock as={'label'}>
          <input type={'checkbox'} />
          remember me
        </PanelBlock>
        <PanelBlock>
          <Button color={'link'} outlined fullWidth>
            Reset all filters
          </Button>
        </PanelBlock>
      </Panel>
    </>
  )
}

function LinkPanelDemo() {
  return (
    <>
      <Panel color={'link'} as={'article'}>
        <PanelHeading>Link</PanelHeading>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock>
          <Control icons={'left'} as={'p'}>
            <Input type={'text'} placeholder={'Search'} color={'link'} />{' '}
            <Icon className={'rb-is-left'}>
              <i aria-hidden={'true'} className={'fas fa-search'} />
            </Icon>
          </Control>
        </PanelBlock>
        <PanelBlock active as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          marksheet
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          minireset.css
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          jgthms.github.io
        </PanelBlock>
      </Panel>
    </>
  )
}

function PrimaryPanelDemo() {
  return (
    <>
      <Panel color={'primary'} as={'article'}>
        <PanelHeading>Primary</PanelHeading>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock>
          <Control icons={'left'} as={'p'}>
            <Input type={'text'} placeholder={'Search'} color={'primary'} />{' '}
            <Icon className={'rb-is-left'}>
              <i aria-hidden={'true'} className={'fas fa-search'} />
            </Icon>
          </Control>
        </PanelBlock>
        <PanelBlock active as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          marksheet
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          minireset.css
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          jgthms.github.io
        </PanelBlock>
      </Panel>
    </>
  )
}

function InfoPanelDemo() {
  return (
    <>
      <Panel color={'info'} as={'article'}>
        <PanelHeading>Info</PanelHeading>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock>
          <Control icons={'left'} as={'p'}>
            <Input type={'text'} placeholder={'Search'} color={'info'} />{' '}
            <Icon className={'rb-is-left'}>
              <i aria-hidden={'true'} className={'fas fa-search'} />
            </Icon>
          </Control>
        </PanelBlock>
        <PanelBlock active as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          marksheet
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          minireset.css
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          jgthms.github.io
        </PanelBlock>
      </Panel>
    </>
  )
}

function SuccessPanelDemo() {
  return (
    <>
      <Panel color={'success'} as={'article'}>
        <PanelHeading>Success</PanelHeading>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock>
          <Control icons={'left'} as={'p'}>
            <Input type={'text'} placeholder={'Search'} color={'success'} />{' '}
            <Icon className={'rb-is-left'}>
              <i aria-hidden={'true'} className={'fas fa-search'} />
            </Icon>
          </Control>
        </PanelBlock>
        <PanelBlock active as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          marksheet
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          minireset.css
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          jgthms.github.io
        </PanelBlock>
      </Panel>
    </>
  )
}

function WarningPanelDemo() {
  return (
    <>
      <Panel color={'warning'} as={'article'}>
        <PanelHeading>Warning</PanelHeading>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock>
          <Control icons={'left'} as={'p'}>
            <Input type={'text'} placeholder={'Search'} color={'warning'} />{' '}
            <Icon className={'rb-is-left'}>
              <i aria-hidden={'true'} className={'fas fa-search'} />
            </Icon>
          </Control>
        </PanelBlock>
        <PanelBlock active as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          marksheet
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          minireset.css
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          jgthms.github.io
        </PanelBlock>
      </Panel>
    </>
  )
}

function DangerPanelDemo() {
  return (
    <>
      <Panel color={'danger'} as={'article'}>
        <PanelHeading>Danger</PanelHeading>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock>
          <Control icons={'left'} as={'p'}>
            <Input type={'text'} placeholder={'Search'} color={'danger'} />{' '}
            <Icon className={'rb-is-left'}>
              <i aria-hidden={'true'} className={'fas fa-search'} />
            </Icon>
          </Control>
        </PanelBlock>
        <PanelBlock active as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          marksheet
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          minireset.css
        </PanelBlock>
        <PanelBlock as={'a'}>
          <PanelIcon>
            {' '}
            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}
          </PanelIcon>
          jgthms.github.io
        </PanelBlock>
      </Panel>
    </>
  )
}

export const RepositoryPanelStory = {
  name: 'Repository panel',
  parameters: {
    official: { id: 'components-panel/basic/001' },
    docs: {
      source: {
        code: "import {\n  Button,\n  Control,\n  Icon,\n  Input,\n  Panel,\n  PanelBlock,\n  PanelHeading,\n  PanelIcon,\n  PanelTab,\n  PanelTabs,\n} from '@seagreenio/react-bulma'\n\nfunction RepositoryPanelDemo() {\n  return (\n    <>\n      <Panel>\n        <PanelHeading>Repositories</PanelHeading>\n        <PanelBlock>\n          <Control icons={'left'} as={'p'}>\n            <Input type={'text'} placeholder={'Search'} />{' '}\n            <Icon className={'rb-is-left'}>\n              <i aria-hidden={'true'} className={'fas fa-search'} />\n            </Icon>\n          </Control>\n        </PanelBlock>\n        <PanelTabs>\n          <PanelTab active>All</PanelTab>\n          <PanelTab>Public</PanelTab>\n          <PanelTab>Private</PanelTab>\n          <PanelTab>Sources</PanelTab>\n          <PanelTab>Forks</PanelTab>\n        </PanelTabs>\n        <PanelBlock active as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          bulma\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          marksheet\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          minireset.css\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          jgthms.github.io\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}\n          </PanelIcon>\n          daniellowtw/infboard\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-code-branch'} />{' '}\n          </PanelIcon>\n          mojs\n        </PanelBlock>\n        <PanelBlock as={'label'}>\n          <input type={'checkbox'} />\n          remember me\n        </PanelBlock>\n        <PanelBlock>\n          <Button color={'link'} outlined fullWidth>\n            Reset all filters\n          </Button>\n        </PanelBlock>\n      </Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RepositoryPanelDemo,
} satisfies StoryObj

export const LinkPanelStory = {
  name: 'Link panel',
  parameters: {
    official: { id: 'components-panel/colors/001' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Icon,\n  Input,\n  Panel,\n  PanelBlock,\n  PanelHeading,\n  PanelIcon,\n  PanelTab,\n  PanelTabs,\n} from '@seagreenio/react-bulma'\n\nfunction LinkPanelDemo() {\n  return (\n    <>\n      <Panel color={'link'} as={'article'}>\n        <PanelHeading>Link</PanelHeading>\n        <PanelTabs>\n          <PanelTab active>All</PanelTab>\n          <PanelTab>Public</PanelTab>\n          <PanelTab>Private</PanelTab>\n          <PanelTab>Sources</PanelTab>\n          <PanelTab>Forks</PanelTab>\n        </PanelTabs>\n        <PanelBlock>\n          <Control icons={'left'} as={'p'}>\n            <Input type={'text'} placeholder={'Search'} color={'link'} />{' '}\n            <Icon className={'rb-is-left'}>\n              <i aria-hidden={'true'} className={'fas fa-search'} />\n            </Icon>\n          </Control>\n        </PanelBlock>\n        <PanelBlock active as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          bulma\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          marksheet\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          minireset.css\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          jgthms.github.io\n        </PanelBlock>\n      </Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkPanelDemo,
} satisfies StoryObj

export const PrimaryPanelStory = {
  name: 'Primary panel',
  parameters: {
    official: { id: 'components-panel/colors/002' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Icon,\n  Input,\n  Panel,\n  PanelBlock,\n  PanelHeading,\n  PanelIcon,\n  PanelTab,\n  PanelTabs,\n} from '@seagreenio/react-bulma'\n\nfunction PrimaryPanelDemo() {\n  return (\n    <>\n      <Panel color={'primary'} as={'article'}>\n        <PanelHeading>Primary</PanelHeading>\n        <PanelTabs>\n          <PanelTab active>All</PanelTab>\n          <PanelTab>Public</PanelTab>\n          <PanelTab>Private</PanelTab>\n          <PanelTab>Sources</PanelTab>\n          <PanelTab>Forks</PanelTab>\n        </PanelTabs>\n        <PanelBlock>\n          <Control icons={'left'} as={'p'}>\n            <Input type={'text'} placeholder={'Search'} color={'primary'} />{' '}\n            <Icon className={'rb-is-left'}>\n              <i aria-hidden={'true'} className={'fas fa-search'} />\n            </Icon>\n          </Control>\n        </PanelBlock>\n        <PanelBlock active as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          bulma\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          marksheet\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          minireset.css\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          jgthms.github.io\n        </PanelBlock>\n      </Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryPanelDemo,
} satisfies StoryObj

export const InfoPanelStory = {
  name: 'Info panel',
  parameters: {
    official: { id: 'components-panel/colors/003' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Icon,\n  Input,\n  Panel,\n  PanelBlock,\n  PanelHeading,\n  PanelIcon,\n  PanelTab,\n  PanelTabs,\n} from '@seagreenio/react-bulma'\n\nfunction InfoPanelDemo() {\n  return (\n    <>\n      <Panel color={'info'} as={'article'}>\n        <PanelHeading>Info</PanelHeading>\n        <PanelTabs>\n          <PanelTab active>All</PanelTab>\n          <PanelTab>Public</PanelTab>\n          <PanelTab>Private</PanelTab>\n          <PanelTab>Sources</PanelTab>\n          <PanelTab>Forks</PanelTab>\n        </PanelTabs>\n        <PanelBlock>\n          <Control icons={'left'} as={'p'}>\n            <Input type={'text'} placeholder={'Search'} color={'info'} />{' '}\n            <Icon className={'rb-is-left'}>\n              <i aria-hidden={'true'} className={'fas fa-search'} />\n            </Icon>\n          </Control>\n        </PanelBlock>\n        <PanelBlock active as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          bulma\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          marksheet\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          minireset.css\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          jgthms.github.io\n        </PanelBlock>\n      </Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoPanelDemo,
} satisfies StoryObj

export const SuccessPanelStory = {
  name: 'Success panel',
  parameters: {
    official: { id: 'components-panel/colors/004' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Icon,\n  Input,\n  Panel,\n  PanelBlock,\n  PanelHeading,\n  PanelIcon,\n  PanelTab,\n  PanelTabs,\n} from '@seagreenio/react-bulma'\n\nfunction SuccessPanelDemo() {\n  return (\n    <>\n      <Panel color={'success'} as={'article'}>\n        <PanelHeading>Success</PanelHeading>\n        <PanelTabs>\n          <PanelTab active>All</PanelTab>\n          <PanelTab>Public</PanelTab>\n          <PanelTab>Private</PanelTab>\n          <PanelTab>Sources</PanelTab>\n          <PanelTab>Forks</PanelTab>\n        </PanelTabs>\n        <PanelBlock>\n          <Control icons={'left'} as={'p'}>\n            <Input type={'text'} placeholder={'Search'} color={'success'} />{' '}\n            <Icon className={'rb-is-left'}>\n              <i aria-hidden={'true'} className={'fas fa-search'} />\n            </Icon>\n          </Control>\n        </PanelBlock>\n        <PanelBlock active as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          bulma\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          marksheet\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          minireset.css\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          jgthms.github.io\n        </PanelBlock>\n      </Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessPanelDemo,
} satisfies StoryObj

export const WarningPanelStory = {
  name: 'Warning panel',
  parameters: {
    official: { id: 'components-panel/colors/005' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Icon,\n  Input,\n  Panel,\n  PanelBlock,\n  PanelHeading,\n  PanelIcon,\n  PanelTab,\n  PanelTabs,\n} from '@seagreenio/react-bulma'\n\nfunction WarningPanelDemo() {\n  return (\n    <>\n      <Panel color={'warning'} as={'article'}>\n        <PanelHeading>Warning</PanelHeading>\n        <PanelTabs>\n          <PanelTab active>All</PanelTab>\n          <PanelTab>Public</PanelTab>\n          <PanelTab>Private</PanelTab>\n          <PanelTab>Sources</PanelTab>\n          <PanelTab>Forks</PanelTab>\n        </PanelTabs>\n        <PanelBlock>\n          <Control icons={'left'} as={'p'}>\n            <Input type={'text'} placeholder={'Search'} color={'warning'} />{' '}\n            <Icon className={'rb-is-left'}>\n              <i aria-hidden={'true'} className={'fas fa-search'} />\n            </Icon>\n          </Control>\n        </PanelBlock>\n        <PanelBlock active as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          bulma\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          marksheet\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          minireset.css\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          jgthms.github.io\n        </PanelBlock>\n      </Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningPanelDemo,
} satisfies StoryObj

export const DangerPanelStory = {
  name: 'Danger panel',
  parameters: {
    official: { id: 'components-panel/colors/006' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Icon,\n  Input,\n  Panel,\n  PanelBlock,\n  PanelHeading,\n  PanelIcon,\n  PanelTab,\n  PanelTabs,\n} from '@seagreenio/react-bulma'\n\nfunction DangerPanelDemo() {\n  return (\n    <>\n      <Panel color={'danger'} as={'article'}>\n        <PanelHeading>Danger</PanelHeading>\n        <PanelTabs>\n          <PanelTab active>All</PanelTab>\n          <PanelTab>Public</PanelTab>\n          <PanelTab>Private</PanelTab>\n          <PanelTab>Sources</PanelTab>\n          <PanelTab>Forks</PanelTab>\n        </PanelTabs>\n        <PanelBlock>\n          <Control icons={'left'} as={'p'}>\n            <Input type={'text'} placeholder={'Search'} color={'danger'} />{' '}\n            <Icon className={'rb-is-left'}>\n              <i aria-hidden={'true'} className={'fas fa-search'} />\n            </Icon>\n          </Control>\n        </PanelBlock>\n        <PanelBlock active as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          bulma\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          marksheet\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          minireset.css\n        </PanelBlock>\n        <PanelBlock as={'a'}>\n          <PanelIcon>\n            {' '}\n            <i aria-hidden={'true'} className={'fas fa-book'} />{' '}\n          </PanelIcon>\n          jgthms.github.io\n        </PanelBlock>\n      </Panel>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerPanelDemo,
} satisfies StoryObj

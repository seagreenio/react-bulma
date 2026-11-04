import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Icon, Tab, Tabs, TabsList } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-tabs',
      title: 'Tabs',
      url: 'https://bulma.io/documentation/components/tabs/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-tabs',
  title: 'CSS Library/Components/Tabs',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-tabs" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Tabs'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Simple responsive horizontal navigation '}
          <strong data-official-prose="">{'tabs'}</strong>
          {', with different styles'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <code data-official-prose="">{'tabs'}</code>
            {
              ' are a straightforward navigation component that come in a variety of versions. They only require the following structure: '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {'a '}
              <code data-official-prose="">{'tabs'}</code>
              {' container'}
            </li>
            <li data-official-prose="">
              {'a '}
              <code data-official-prose="">{'<ul>'}</code>
              {' HTML element'}
            </li>
            <li data-official-prose="">
              {'a list of '}
              <code data-official-prose="">{'<li>'}</code>
              {' HTML element'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<a>'}</code>
              {' HTML anchor elements for each link'}
            </li>
          </ul>
          <p data-official-prose="">
            {' The '}
            <strong data-official-prose="">{'default'}</strong>
            {' tabs style has a single border at the bottom. '}
          </p>
        </div>
        <div data-official-example="components-tabs/basic/001">
          <Canvas of={DefaultTabsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'alignment'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Alignment '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#alignment'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' To align the tabs list, use the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' or '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'.tabs'}</code>
            {' container: '}
          </p>
        </div>
        <div data-official-example="components-tabs/alignment/001">
          <Canvas of={CenteredTabsStory} />
        </div>
        <div data-official-example="components-tabs/alignment/002">
          <Canvas of={RightAlignedTabsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Icons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#icons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can use any of the '}
            <a data-official-prose="" href={'https://fontawesome.com/'}>
              {'Font Awesome'}
            </a>{' '}
            <strong data-official-prose="">{'icons'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-tabs/icons/001">
          <Canvas of={TabsWithIconsStory} />
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
            {' You can choose between '}
            <strong data-official-prose="">{'3 additional sizes'}</strong>
            {': '}
            <code data-official-prose="">{'is-small'}</code>{' '}
            <code data-official-prose="">{'is-medium'}</code>
            {' and '}
            <code data-official-prose="">{'is-large'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-tabs/sizes/001">
          <Canvas of={SmallTabsStory} />
        </div>
        <div data-official-example="components-tabs/sizes/002">
          <Canvas of={MediumTabsStory} />
        </div>
        <div data-official-example="components-tabs/sizes/003">
          <Canvas of={LargeTabsStory} />
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
        <div data-official-prose="" className={'content'}>
          {' If you want a more classic style with '}
          <strong data-official-prose="">{'borders'}</strong>
          {', just append the '}
          <code data-official-prose="">{'is-boxed'}</code>
          {' modifier. '}
        </div>
        <div data-official-example="components-tabs/styles/001">
          <Canvas of={BoxedTabsStory} />
        </div>
        <p data-official-prose="" className={'content'}>
          {' If you want '}
          <strong data-official-prose="">{'mutually exclusive'}</strong>
          {
            ' tabs (like radio buttons where clicking one deselects all other ones), use the '
          }
          <code data-official-prose="">{'is-toggle'}</code>
          {' modifier. '}
        </p>
        <div data-official-example="components-tabs/styles/002">
          <Canvas of={ToggleTabsStory} />
        </div>
        <p data-official-prose="" className={'content'}>
          {' If you use both '}
          <code data-official-prose="">{'is-toggle'}</code>
          {' and '}
          <code data-official-prose="">{'is-toggle-rounded'}</code>
          {', the first and last items will be '}
          <strong data-official-prose="">{'rounded'}</strong>
          {'. '}
        </p>
        <div data-official-example="components-tabs/styles/003">
          <Canvas of={RoundedToggleTabsStory} />
        </div>
        <p data-official-prose="" className={'content'}>
          {' If you want the tabs to take up the '}
          <strong data-official-prose="">{'whole width'}</strong>
          {' available, use '}
          <code data-official-prose="">{'is-fullwidth'}</code>
          {'. '}
        </p>
        <div data-official-example="components-tabs/styles/004">
          <Canvas of={FullWidthTabsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'combining'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Combining '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#combining'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can '}
            <strong data-official-prose="">{'combine'}</strong>
            {' different modifiers. For example, you can have '}
            <strong data-official-prose="">{'centered boxed'}</strong>
            {' tabs, or '}
            <strong data-official-prose="">{'fullwidth toggle'}</strong>
            {' ones. '}
          </p>
        </div>
        <div data-official-example="components-tabs/combining/001">
          <Canvas of={CenteredBoxedTabsStory} />
        </div>
        <div data-official-example="components-tabs/combining/002">
          <Canvas of={FullWidthToggleTabsStory} />
        </div>
        <div data-official-example="components-tabs/combining/003">
          <Canvas of={MediumCenteredBoxedTabsStory} />
        </div>
        <div data-official-example="components-tabs/combining/004">
          <Canvas of={LargeFullWidthToggleTabsStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList>
          <Tab value={'tab-1'} as={'a'}>
            Pictures
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            Music
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            Videos
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            Documents
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function CenteredTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList alignment={'centered'}>
          <Tab value={'tab-1'} as={'a'}>
            Pictures
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            Music
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            Videos
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            Documents
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function RightAlignedTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList alignment={'right'}>
          <Tab value={'tab-1'} as={'a'}>
            Pictures
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            Music
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            Videos
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            Documents
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function TabsWithIconsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList alignment={'centered'}>
          <Tab value={'tab-1'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function SmallTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList size={'small'}>
          <Tab value={'tab-1'} as={'a'}>
            Pictures
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            Music
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            Videos
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            Documents
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function MediumTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList size={'medium'}>
          <Tab value={'tab-1'} as={'a'}>
            Pictures
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            Music
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            Videos
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            Documents
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function LargeTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList size={'large'}>
          <Tab value={'tab-1'} as={'a'}>
            Pictures
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            Music
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            Videos
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            Documents
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function BoxedTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList variant={'boxed'}>
          <Tab value={'tab-1'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function ToggleTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList variant={'toggle'}>
          <Tab value={'tab-1'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function RoundedToggleTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList variant={'toggle-rounded'}>
          <Tab value={'tab-1'} as={'a'}>
            <Icon size={'small'}>
              <i className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon size={'small'}>
              <i className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon size={'small'}>
              <i className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon size={'small'}>
              <i className={'fas fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function FullWidthTabsDemo() {
  return (
    <>
      <Tabs defaultValue={null}>
        <TabsList fullWidth>
          <Tab value={'tab-1'} as={'a'}>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-left'} />
            </Icon>
            <span>Left</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-up'} />
            </Icon>
            <span>Up</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <span>Right</span>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-right'} />
            </Icon>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function CenteredBoxedTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList alignment={'centered'} variant={'boxed'}>
          <Tab value={'tab-1'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function FullWidthToggleTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList variant={'toggle'} fullWidth>
          <Tab value={'tab-1'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function MediumCenteredBoxedTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList alignment={'centered'} variant={'boxed'} size={'medium'}>
          <Tab value={'tab-1'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon size={'small'}>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

function LargeFullWidthToggleTabsDemo() {
  return (
    <>
      <Tabs defaultValue={'tab-1'}>
        <TabsList variant={'toggle'} fullWidth size={'large'}>
          <Tab value={'tab-1'} as={'a'}>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-image'} />
            </Icon>
            <span>Pictures</span>
          </Tab>
          <Tab value={'tab-2'} as={'a'}>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-music'} />
            </Icon>
            <span>Music</span>
          </Tab>
          <Tab value={'tab-3'} as={'a'}>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-film'} />
            </Icon>
            <span>Videos</span>
          </Tab>
          <Tab value={'tab-4'} as={'a'}>
            <Icon>
              <i aria-hidden={'true'} className={'far fa-file-alt'} />
            </Icon>
            <span>Documents</span>
          </Tab>
        </TabsList>
      </Tabs>
    </>
  )
}

export const DefaultTabsStory = {
  name: 'Default tabs',
  parameters: {
    official: { id: 'components-tabs/basic/001' },
    docs: {
      source: {
        code: "import { Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction DefaultTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList>\n          <Tab value={'tab-1'} as={'a'}>\n            Pictures\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            Music\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            Videos\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            Documents\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultTabsDemo,
} satisfies StoryObj

export const CenteredTabsStory = {
  name: 'Centered tabs',
  parameters: {
    official: { id: 'components-tabs/alignment/001' },
    docs: {
      source: {
        code: "import { Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction CenteredTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList alignment={'centered'}>\n          <Tab value={'tab-1'} as={'a'}>\n            Pictures\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            Music\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            Videos\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            Documents\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredTabsDemo,
} satisfies StoryObj

export const RightAlignedTabsStory = {
  name: 'Right-aligned tabs',
  parameters: {
    official: { id: 'components-tabs/alignment/002' },
    docs: {
      source: {
        code: "import { Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction RightAlignedTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList alignment={'right'}>\n          <Tab value={'tab-1'} as={'a'}>\n            Pictures\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            Music\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            Videos\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            Documents\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RightAlignedTabsDemo,
} satisfies StoryObj

export const TabsWithIconsStory = {
  name: 'Tabs with icons',
  parameters: {
    official: { id: 'components-tabs/icons/001' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction TabsWithIconsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList alignment={'centered'}>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'far fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TabsWithIconsDemo,
} satisfies StoryObj

export const SmallTabsStory = {
  name: 'Small tabs',
  parameters: {
    official: { id: 'components-tabs/sizes/001' },
    docs: {
      source: {
        code: "import { Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction SmallTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList size={'small'}>\n          <Tab value={'tab-1'} as={'a'}>\n            Pictures\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            Music\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            Videos\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            Documents\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallTabsDemo,
} satisfies StoryObj

export const MediumTabsStory = {
  name: 'Medium tabs',
  parameters: {
    official: { id: 'components-tabs/sizes/002' },
    docs: {
      source: {
        code: "import { Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction MediumTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList size={'medium'}>\n          <Tab value={'tab-1'} as={'a'}>\n            Pictures\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            Music\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            Videos\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            Documents\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumTabsDemo,
} satisfies StoryObj

export const LargeTabsStory = {
  name: 'Large tabs',
  parameters: {
    official: { id: 'components-tabs/sizes/003' },
    docs: {
      source: {
        code: "import { Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction LargeTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList size={'large'}>\n          <Tab value={'tab-1'} as={'a'}>\n            Pictures\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            Music\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            Videos\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            Documents\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeTabsDemo,
} satisfies StoryObj

export const BoxedTabsStory = {
  name: 'Boxed tabs',
  parameters: {
    official: { id: 'components-tabs/styles/001' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction BoxedTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList variant={'boxed'}>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'far fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BoxedTabsDemo,
} satisfies StoryObj

export const ToggleTabsStory = {
  name: 'Toggle tabs',
  parameters: {
    official: { id: 'components-tabs/styles/002' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction ToggleTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList variant={'toggle'}>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'far fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ToggleTabsDemo,
} satisfies StoryObj

export const RoundedToggleTabsStory = {
  name: 'Rounded toggle tabs',
  parameters: {
    official: { id: 'components-tabs/styles/003' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction RoundedToggleTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList variant={'toggle-rounded'}>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon size={'small'}>\n              <i className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon size={'small'}>\n              <i className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon size={'small'}>\n              <i className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon size={'small'}>\n              <i className={'fas fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RoundedToggleTabsDemo,
} satisfies StoryObj

export const FullWidthTabsStory = {
  name: 'Full-width tabs',
  parameters: {
    official: { id: 'components-tabs/styles/004' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction FullWidthTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={null}>\n        <TabsList fullWidth>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-angle-left'} />\n            </Icon>\n            <span>Left</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-angle-up'} />\n            </Icon>\n            <span>Up</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <span>Right</span>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-angle-right'} />\n            </Icon>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullWidthTabsDemo,
} satisfies StoryObj

export const CenteredBoxedTabsStory = {
  name: 'Centered boxed tabs',
  parameters: {
    official: { id: 'components-tabs/combining/001' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction CenteredBoxedTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList alignment={'centered'} variant={'boxed'}>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'far fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredBoxedTabsDemo,
} satisfies StoryObj

export const FullWidthToggleTabsStory = {
  name: 'Full-width toggle tabs',
  parameters: {
    official: { id: 'components-tabs/combining/002' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction FullWidthToggleTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList variant={'toggle'} fullWidth>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'far fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullWidthToggleTabsDemo,
} satisfies StoryObj

export const MediumCenteredBoxedTabsStory = {
  name: 'Medium centered boxed tabs',
  parameters: {
    official: { id: 'components-tabs/combining/003' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction MediumCenteredBoxedTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList alignment={'centered'} variant={'boxed'} size={'medium'}>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon size={'small'}>\n              <i aria-hidden={'true'} className={'far fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumCenteredBoxedTabsDemo,
} satisfies StoryObj

export const LargeFullWidthToggleTabsStory = {
  name: 'Large full-width toggle tabs',
  parameters: {
    official: { id: 'components-tabs/combining/004' },
    docs: {
      source: {
        code: "import { Icon, Tab, Tabs, TabsList } from '@seagreenio/react-bulma'\n\nfunction LargeFullWidthToggleTabsDemo() {\n  return (\n    <>\n      <Tabs defaultValue={'tab-1'}>\n        <TabsList variant={'toggle'} fullWidth size={'large'}>\n          <Tab value={'tab-1'} as={'a'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-image'} />\n            </Icon>\n            <span>Pictures</span>\n          </Tab>\n          <Tab value={'tab-2'} as={'a'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-music'} />\n            </Icon>\n            <span>Music</span>\n          </Tab>\n          <Tab value={'tab-3'} as={'a'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-film'} />\n            </Icon>\n            <span>Videos</span>\n          </Tab>\n          <Tab value={'tab-4'} as={'a'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'far fa-file-alt'} />\n            </Icon>\n            <span>Documents</span>\n          </Tab>\n        </TabsList>\n      </Tabs>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeFullWidthToggleTabsDemo,
} satisfies StoryObj

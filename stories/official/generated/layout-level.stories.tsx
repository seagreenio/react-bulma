import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Button,
  Control,
  Field,
  Input,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  LinkButton,
  Subtitle,
  Title,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-level',
      title: 'Level',
      url: 'https://bulma.io/documentation/layout/level/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-level',
  title: 'CSS Library/Layout/Level',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-level" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Level'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A multi-purpose '}
          <strong data-official-prose="">{'horizontal level'}</strong>
          {', which can contain almost any other element'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <strong data-official-prose="">{'structure'}</strong>
            {' of a level is the following:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'level'}</code>
              {': main container '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'level-left'}</code>
                  {' for the left side'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'level-right'}</code>
                  {' for the right side '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'level-item'}</code>
                      {' for each individual element'}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p data-official-prose="">
            {' In a '}
            <code data-official-prose="">{'level-item'}</code>
            {', you can then insert almost '}
            <em data-official-prose="">{'anything'}</em>
            {
              ' you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Bulma '
            }
            <code data-official-prose="">{'level'}</code>
            {', they will always be '}
            <strong data-official-prose="">{'vertically centered'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="layout-level/basic/001">
          <Canvas of={ToolbarWithLeftAndRightItemsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'centered-level'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Centered level '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#centered-level'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          {' If you want a '}
          <strong data-official-prose="">{'centered level'}</strong>
          {', you can use as many '}
          <code data-official-prose="">{'level-item'}</code>
          {' as you want, as long as they are '}
          <strong data-official-prose="">{'direct'}</strong>
          {' children of the '}
          <code data-official-prose="">{'level'}</code>
          {' container. '}
        </div>
        <div data-official-example="layout-level/centered-level/001">
          <Canvas of={CenteredStatisticsStory} />
        </div>
        <div data-official-example="layout-level/centered-level/002">
          <Canvas of={CenteredNavigationLinksStory} />
        </div>
        <h3
          data-official-prose=""
          id={'mobile-level'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Mobile level '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#mobile-level'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          {
            ' By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the '
          }
          <code data-official-prose="">{'is-mobile'}</code>
          {' modifier on the '}
          <code data-official-prose="">{'level'}</code>
          {' container. '}
        </div>
        <div data-official-example="layout-level/mobile-level/001">
          <Canvas of={MobileStatisticsStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function ToolbarWithLeftAndRightItemsDemo() {
  return (
    <>
      <Level>
        <LevelLeft>
          <LevelItem>
            <Subtitle size={5} as={'p'}>
              <strong>123</strong> posts
            </Subtitle>
          </LevelItem>
          <LevelItem>
            <Field layout={'addons'}>
              <Control as={'p'}>
                <Input type={'text'} placeholder={'Find a post'} />
              </Control>
              <Control as={'p'}>
                <Button>Search</Button>
              </Control>
            </Field>
          </LevelItem>
        </LevelLeft>
        <LevelRight>
          <LevelItem as={'p'}>
            <strong>All</strong>
          </LevelItem>
          <LevelItem as={'p'}>
            <a>Published</a>
          </LevelItem>
          <LevelItem as={'p'}>
            <a>Drafts</a>
          </LevelItem>
          <LevelItem as={'p'}>
            <a>Deleted</a>
          </LevelItem>
          <LevelItem as={'p'}>
            <LinkButton color={'success'}>New</LinkButton>
          </LevelItem>
        </LevelRight>
      </Level>
    </>
  )
}

function CenteredStatisticsDemo() {
  return (
    <>
      <Level>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Tweets</p>
            <Title as={'p'}>3,456</Title>
          </div>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Following</p>
            <Title as={'p'}>123</Title>
          </div>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Followers</p>
            <Title as={'p'}>456K</Title>
          </div>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Likes</p>
            <Title as={'p'}>789</Title>
          </div>
        </LevelItem>
      </Level>
    </>
  )
}

function CenteredNavigationLinksDemo() {
  return (
    <>
      <Level>
        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          <a className={'link rb-is-info'}>Home</a>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          <a className={'link rb-is-info'}>Menu</a>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          <img
            src={'./official-assets/bulma-type.png'}
            alt={''}
            style={{ ...{ height: '30px' } }}
          />
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          <a className={'link rb-is-info'}>Reservations</a>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          <a className={'link rb-is-info'}>Contact</a>
        </LevelItem>
      </Level>
    </>
  )
}

function MobileStatisticsDemo() {
  return (
    <>
      <Level mobile>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Tweets</p>
            <Title as={'p'}>3,456</Title>
          </div>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Following</p>
            <Title as={'p'}>123</Title>
          </div>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Followers</p>
            <Title as={'p'}>456K</Title>
          </div>
        </LevelItem>
        <LevelItem helpers={{ textAlign: 'center' }}>
          <div>
            <p className={'heading'}>Likes</p>
            <Title as={'p'}>789</Title>
          </div>
        </LevelItem>
      </Level>
    </>
  )
}

export const ToolbarWithLeftAndRightItemsStory = {
  name: 'Toolbar with left and right items',
  parameters: {
    official: { id: 'layout-level/basic/001' },
    docs: {
      source: {
        code: "import {\n  Button,\n  Control,\n  Field,\n  Input,\n  Level,\n  LevelItem,\n  LevelLeft,\n  LevelRight,\n  LinkButton,\n  Subtitle,\n} from '@seagreenio/react-bulma'\n\nfunction ToolbarWithLeftAndRightItemsDemo() {\n  return (\n    <>\n      <Level>\n        <LevelLeft>\n          <LevelItem>\n            <Subtitle size={5} as={'p'}>\n              <strong>123</strong> posts\n            </Subtitle>\n          </LevelItem>\n          <LevelItem>\n            <Field layout={'addons'}>\n              <Control as={'p'}>\n                <Input type={'text'} placeholder={'Find a post'} />\n              </Control>\n              <Control as={'p'}>\n                <Button>Search</Button>\n              </Control>\n            </Field>\n          </LevelItem>\n        </LevelLeft>\n        <LevelRight>\n          <LevelItem as={'p'}>\n            <strong>All</strong>\n          </LevelItem>\n          <LevelItem as={'p'}>\n            <a>Published</a>\n          </LevelItem>\n          <LevelItem as={'p'}>\n            <a>Drafts</a>\n          </LevelItem>\n          <LevelItem as={'p'}>\n            <a>Deleted</a>\n          </LevelItem>\n          <LevelItem as={'p'}>\n            <LinkButton color={'success'}>New</LinkButton>\n          </LevelItem>\n        </LevelRight>\n      </Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ToolbarWithLeftAndRightItemsDemo,
} satisfies StoryObj

export const CenteredStatisticsStory = {
  name: 'Centered statistics',
  parameters: {
    official: { id: 'layout-level/centered-level/001' },
    docs: {
      source: {
        code: "import { Level, LevelItem, Title } from '@seagreenio/react-bulma'\n\nfunction CenteredStatisticsDemo() {\n  return (\n    <>\n      <Level>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Tweets</p>\n            <Title as={'p'}>3,456</Title>\n          </div>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Following</p>\n            <Title as={'p'}>123</Title>\n          </div>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Followers</p>\n            <Title as={'p'}>456K</Title>\n          </div>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Likes</p>\n            <Title as={'p'}>789</Title>\n          </div>\n        </LevelItem>\n      </Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredStatisticsDemo,
} satisfies StoryObj

export const CenteredNavigationLinksStory = {
  name: 'Centered navigation links',
  parameters: {
    official: { id: 'layout-level/centered-level/002' },
    docs: {
      source: {
        code: "import { Level, LevelItem } from '@seagreenio/react-bulma'\n\nfunction CenteredNavigationLinksDemo() {\n  return (\n    <>\n      <Level>\n        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          <a className={'link rb-is-info'}>Home</a>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          <a className={'link rb-is-info'}>Menu</a>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          <img\n            src={'./official-assets/bulma-type.png'}\n            alt={''}\n            style={{ ...{ height: '30px' } }}\n          />\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          <a className={'link rb-is-info'}>Reservations</a>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          <a className={'link rb-is-info'}>Contact</a>\n        </LevelItem>\n      </Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredNavigationLinksDemo,
} satisfies StoryObj

export const MobileStatisticsStory = {
  name: 'Mobile statistics',
  parameters: {
    official: { id: 'layout-level/mobile-level/001' },
    docs: {
      source: {
        code: "import { Level, LevelItem, Title } from '@seagreenio/react-bulma'\n\nfunction MobileStatisticsDemo() {\n  return (\n    <>\n      <Level mobile>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Tweets</p>\n            <Title as={'p'}>3,456</Title>\n          </div>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Following</p>\n            <Title as={'p'}>123</Title>\n          </div>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Followers</p>\n            <Title as={'p'}>456K</Title>\n          </div>\n        </LevelItem>\n        <LevelItem helpers={{ textAlign: 'center' }}>\n          <div>\n            <p className={'heading'}>Likes</p>\n            <Title as={'p'}>789</Title>\n          </div>\n        </LevelItem>\n      </Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MobileStatisticsDemo,
} satisfies StoryObj

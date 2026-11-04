import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
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
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Level'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A multi-purpose '}
          <strong data-official-prose="">{'horizontal level'}</strong>
          {', which can contain almost any other element'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <strong data-official-prose="">{'structure'}</strong>
            {' of a level is the following:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'level'}</code>
              {': main container\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'level-left'}</code>
                  {' for the left side'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'level-right'}</code>
                  {' for the right side\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      <code data-official-prose="">{'level-item'}</code>
                      {' for each individual element'}
                    </li>
                    {'\n          '}
                  </ul>
                  {'\n        '}
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    In a '}
            <code data-official-prose="">{'level-item'}</code>
            {', you can then insert almost '}
            <em data-official-prose="">{'anything'}</em>
            {
              ' you want: a title, a button, a text\n    input, or just simple text. No matter what elements you put inside a Bulma '
            }
            <code data-official-prose="">{'level'}</code>
            {', they will always be\n    '}
            <strong data-official-prose="">{'vertically centered'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-level/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'centered-level'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Centered level\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#centered-level'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  If you want a '}
          <strong data-official-prose="">{'centered level'}</strong>
          {', you can use as many '}
          <code data-official-prose="">{'level-item'}</code>
          {' as you want, as long as\n  they are '}
          <strong data-official-prose="">{'direct'}</strong>
          {' children of the '}
          <code data-official-prose="">{'level'}</code>
          {' container.\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-level/centered-level/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-level/centered-level/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'mobile-level'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Mobile level\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#mobile-level'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {
            '\n  By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as\n  well, add the\n  '
          }
          <code data-official-prose="">{'is-mobile'}</code>
          {' modifier on the '}
          <code data-official-prose="">{'level'}</code>
          {' container.\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-level/mobile-level/001">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n\n\n\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'sass-and-css-variables'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Sass and CSS variables\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sass-and-css-variables'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n'}
        <div
          data-official-prose=""
          className={'bd-vars-table block table-container'}
        >
          {'\n  '}
          <table data-official-prose="">
            {'\n    '}
            <thead data-official-prose="">
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <th data-official-prose="">
                  {'\n          '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n            '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-sass'}
                    >
                      <i data-official-prose="" className={'fab fa-sass'}></i>
                    </span>
                    {'\n            '}
                    <span data-official-prose="">{'Sass Variable'}</span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </th>
                {'\n        \n        '}
                <th data-official-prose="">
                  {'\n          '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n            '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-success'}
                    >
                      <i data-official-prose="" className={'fas fa-code'}></i>
                    </span>
                    {'\n            '}
                    <span data-official-prose="">{'Value'}</span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </th>
                {'\n      '}
              </tr>
              {'\n    '}
            </thead>
            {'\n\n    '}
            <tbody data-official-prose="">
              {'\n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$level-item-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'calc(var(--bulma-block-spacing) * 0.5)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      {' '}
      <ui.Level>
        {' '}
        <ui.LevelLeft>
          {' '}
          <ui.LevelItem>
            {' '}
            <ui.Subtitle size={5} as={'p'}>
              <strong>123</strong> posts
            </ui.Subtitle>{' '}
          </ui.LevelItem>{' '}
          <ui.LevelItem>
            {' '}
            <ui.Field layout={'addons'}>
              {' '}
              <ui.Control as={'p'}>
                {' '}
                <ui.Input type={'text'} placeholder={'Find a post'} />{' '}
              </ui.Control>{' '}
              <ui.Control as={'p'}>
                {' '}
                <ui.Button>Search</ui.Button>{' '}
              </ui.Control>{' '}
            </ui.Field>{' '}
          </ui.LevelItem>{' '}
        </ui.LevelLeft>{' '}
        <ui.LevelRight>
          {' '}
          <ui.LevelItem as={'p'}>
            <strong>All</strong>
          </ui.LevelItem>{' '}
          <ui.LevelItem as={'p'}>
            <a>Published</a>
          </ui.LevelItem>{' '}
          <ui.LevelItem as={'p'}>
            <a>Drafts</a>
          </ui.LevelItem>{' '}
          <ui.LevelItem as={'p'}>
            <a>Deleted</a>
          </ui.LevelItem>{' '}
          <ui.LevelItem as={'p'}>
            <ui.LinkButton color={'success'}>New</ui.LinkButton>
          </ui.LevelItem>{' '}
        </ui.LevelRight>{' '}
      </ui.Level>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Level>
        {' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Tweets</p>{' '}
            <ui.Title as={'p'}>3,456</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Following</p>{' '}
            <ui.Title as={'p'}>123</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Followers</p>{' '}
            <ui.Title as={'p'}>456K</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Likes</p> <ui.Title as={'p'}>789</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
      </ui.Level>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Level>
        {' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          {' '}
          <a className={'link rb-is-info'}>Home</a>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          {' '}
          <a className={'link rb-is-info'}>Menu</a>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          {' '}
          <img
            src={'./official-assets/bulma-type.png'}
            alt={''}
            style={{ ...{ height: '30px' } }}
          />{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          {' '}
          <a className={'link rb-is-info'}>Reservations</a>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>
          {' '}
          <a className={'link rb-is-info'}>Contact</a>{' '}
        </ui.LevelItem>{' '}
      </ui.Level>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Level mobile>
        {' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Tweets</p>{' '}
            <ui.Title as={'p'}>3,456</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Following</p>{' '}
            <ui.Title as={'p'}>123</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Followers</p>{' '}
            <ui.Title as={'p'}>456K</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
        <ui.LevelItem helpers={{ textAlign: 'center' }}>
          {' '}
          <div>
            <p className={'heading'}>Likes</p> <ui.Title as={'p'}>789</ui.Title>
          </div>{' '}
        </ui.LevelItem>{' '}
      </ui.Level>
    </>
  )
}

export const Example001 = {
  name: 'Toolbar with left and right items',
  parameters: {
    official: { id: 'layout-level/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      {' '}\n      <ui.Level>\n        {' '}\n        <ui.LevelLeft>\n          {' '}\n          <ui.LevelItem>\n            {' '}\n            <ui.Subtitle size={5} as={'p'}>\n              <strong>123</strong> posts\n            </ui.Subtitle>{' '}\n          </ui.LevelItem>{' '}\n          <ui.LevelItem>\n            {' '}\n            <ui.Field layout={'addons'}>\n              {' '}\n              <ui.Control as={'p'}>\n                {' '}\n                <ui.Input type={'text'} placeholder={'Find a post'} />{' '}\n              </ui.Control>{' '}\n              <ui.Control as={'p'}>\n                {' '}\n                <ui.Button>Search</ui.Button>{' '}\n              </ui.Control>{' '}\n            </ui.Field>{' '}\n          </ui.LevelItem>{' '}\n        </ui.LevelLeft>{' '}\n        <ui.LevelRight>\n          {' '}\n          <ui.LevelItem as={'p'}>\n            <strong>All</strong>\n          </ui.LevelItem>{' '}\n          <ui.LevelItem as={'p'}>\n            <a>Published</a>\n          </ui.LevelItem>{' '}\n          <ui.LevelItem as={'p'}>\n            <a>Drafts</a>\n          </ui.LevelItem>{' '}\n          <ui.LevelItem as={'p'}>\n            <a>Deleted</a>\n          </ui.LevelItem>{' '}\n          <ui.LevelItem as={'p'}>\n            <ui.LinkButton color={'success'}>New</ui.LinkButton>\n          </ui.LevelItem>{' '}\n        </ui.LevelRight>{' '}\n      </ui.Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Centered statistics',
  parameters: {
    official: { id: 'layout-level/centered-level/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Level>\n        {' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Tweets</p>{' '}\n            <ui.Title as={'p'}>3,456</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Following</p>{' '}\n            <ui.Title as={'p'}>123</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Followers</p>{' '}\n            <ui.Title as={'p'}>456K</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Likes</p> <ui.Title as={'p'}>789</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n      </ui.Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Centered navigation links',
  parameters: {
    official: { id: 'layout-level/centered-level/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Level>\n        {' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          {' '}\n          <a className={'link rb-is-info'}>Home</a>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          {' '}\n          <a className={'link rb-is-info'}>Menu</a>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          {' '}\n          <img\n            src={'./official-assets/bulma-type.png'}\n            alt={''}\n            style={{ ...{ height: '30px' } }}\n          />{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          {' '}\n          <a className={'link rb-is-info'}>Reservations</a>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }} as={'p'}>\n          {' '}\n          <a className={'link rb-is-info'}>Contact</a>{' '}\n        </ui.LevelItem>{' '}\n      </ui.Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Mobile statistics',
  parameters: {
    official: { id: 'layout-level/mobile-level/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Level mobile>\n        {' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Tweets</p>{' '}\n            <ui.Title as={'p'}>3,456</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Following</p>{' '}\n            <ui.Title as={'p'}>123</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Followers</p>{' '}\n            <ui.Title as={'p'}>456K</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n        <ui.LevelItem helpers={{ textAlign: 'center' }}>\n          {' '}\n          <div>\n            <p className={'heading'}>Likes</p> <ui.Title as={'p'}>789</ui.Title>\n          </div>{' '}\n        </ui.LevelItem>{' '}\n      </ui.Level>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

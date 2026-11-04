import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

const meta = {
  ...officialPage(
    {
      id: 'elements-box',
      title: 'Box',
      url: 'https://bulma.io/documentation/elements/box/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-box',
  title: 'CSS Library/Elements/Box',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-box" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Box'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A white '}
          <strong data-official-prose="">{'box'}</strong>
          {' to contain other elements'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'box'}</code>
            {
              ' element is a simple container with a white background, some padding, and a box shadow.'
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-box/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              'Because it acts as a container, you can easily include other components, like '
            }
            <strong data-official-prose="">{'form elements'}</strong>
            {':'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-box/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Or a '}
            <code data-official-prose="">{'media'}</code>
            {' object:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-box/basic/003">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n\n\n\n\n\n\n\n\n'}
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
                {'\n        \n          '}
                <th data-official-prose="">
                  {'\n            '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n              '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-link'}
                    >
                      <i data-official-prose="" className={'fab fa-css3'}></i>
                    </span>
                    {'\n              '}
                    <span data-official-prose="">{'CSS Variable'}</span>
                    {'\n            '}
                  </div>
                  {'\n          '}
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
                        {'$box-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-box-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$box-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-box-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$box-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-box-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-large)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$box-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-box-shadow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-shadow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$box-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-box-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25rem'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$box-link-hover-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-box-link-hover-shadow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          '0 0.5em 1em -0.125em hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.1\n),\n0 0 0 1px var(--bulma-link)'
                        }
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$box-link-active-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-box-link-active-shadow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'inset 0 1px 2px hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.2\n),\n0 0 0 1px var(--bulma-link)'
                        }
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
      {'\n        \n          \n'}
      <ui.Box>{"I'm in a box."}</ui.Box>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Box as={'form'}>
        {'\n  '}
        <ui.Field>
          {'\n    '}
          <ui.Label>{'Email'}</ui.Label>
          {'\n    '}
          <ui.Control>
            {'\n      '}
            <ui.Input type={'email'} placeholder={'e.g. alex@example.com'} />
            {'\n    '}
          </ui.Control>
          {'\n  '}
        </ui.Field>
        {'\n\n  '}
        <ui.Field>
          {'\n    '}
          <ui.Label>{'Password'}</ui.Label>
          {'\n    '}
          <ui.Control>
            {'\n      '}
            <ui.Input type={'password'} placeholder={'********'} />
            {'\n    '}
          </ui.Control>
          {'\n  '}
        </ui.Field>
        {'\n\n  '}
        <ui.Button color={'primary'}>{'Sign in'}</ui.Button>
        {'\n'}
      </ui.Box>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Box>
        {'\n  '}
        <ui.Media>
          {'\n    '}
          <ui.MediaLeft>
            {'\n      '}
            <ui.Image
              size={64}
              src={'./official-assets/128x128.png'}
              alt={'Image'}
            />
            {'\n    '}
          </ui.MediaLeft>
          {'\n    '}
          <ui.MediaContent>
            {'\n      '}
            <ui.Content>
              {'\n        '}
              <p>
                {'\n          '}
                <strong>{'John Smith'}</strong> <small>{'@johnsmith'}</small>
                {'\n          '}
                <small>{'31m'}</small>
                {'\n          '}
                <br />
                {
                  '\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean\n          efficitur sit amet massa fringilla egestas. Nullam condimentum luctus\n          turpis.\n        '
                }
              </p>
              {'\n      '}
            </ui.Content>
            {'\n      '}
            <ui.Level mobile>
              {'\n        '}
              <ui.LevelLeft>
                {'\n          '}
                <ui.LevelItem aria-label={'reply'} as={'a'}>
                  {'\n            '}
                  <ui.Icon size={'small'}>
                    {'\n              '}
                    <i aria-hidden={'true'} className={'fas fa-reply'} />
                    {'\n            '}
                  </ui.Icon>
                  {'\n          '}
                </ui.LevelItem>
                {'\n          '}
                <ui.LevelItem aria-label={'retweet'} as={'a'}>
                  {'\n            '}
                  <ui.Icon size={'small'}>
                    {'\n              '}
                    <i aria-hidden={'true'} className={'fas fa-retweet'} />
                    {'\n            '}
                  </ui.Icon>
                  {'\n          '}
                </ui.LevelItem>
                {'\n          '}
                <ui.LevelItem aria-label={'like'} as={'a'}>
                  {'\n            '}
                  <ui.Icon size={'small'}>
                    {'\n              '}
                    <i aria-hidden={'true'} className={'fas fa-heart'} />
                    {'\n            '}
                  </ui.Icon>
                  {'\n          '}
                </ui.LevelItem>
                {'\n        '}
              </ui.LevelLeft>
              {'\n      '}
            </ui.Level>
            {'\n    '}
          </ui.MediaContent>
          {'\n  '}
        </ui.Media>
        {'\n'}
      </ui.Box>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Default box',
  parameters: {
    official: { id: 'elements-box/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Box>{"I\'m in a box."}</ui.Box>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Sign-in form',
  parameters: {
    official: { id: 'elements-box/basic/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Box as={"form"}>{"\\n  "}<ui.Field>{"\\n    "}<ui.Label>{"Email"}</ui.Label>{"\\n    "}<ui.Control>{"\\n      "}<ui.Input type={"email"} placeholder={"e.g. alex@example.com"} />{"\\n    "}</ui.Control>{"\\n  "}</ui.Field>{"\\n\\n  "}<ui.Field>{"\\n    "}<ui.Label>{"Password"}</ui.Label>{"\\n    "}<ui.Control>{"\\n      "}<ui.Input type={"password"} placeholder={"********"} />{"\\n    "}</ui.Control>{"\\n  "}</ui.Field>{"\\n\\n  "}<ui.Button color={"primary"}>{"Sign in"}</ui.Button>{"\\n"}</ui.Box>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Media object',
  parameters: {
    official: { id: 'elements-box/basic/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Box>{"\\n  "}<ui.Media>{"\\n    "}<ui.MediaLeft>{"\\n      "}<ui.Image size={64} src={"./official-assets/128x128.png"} alt={"Image"} />{"\\n    "}</ui.MediaLeft>{"\\n    "}<ui.MediaContent>{"\\n      "}<ui.Content>{"\\n        "}<p>{"\\n          "}<strong>{"John Smith"}</strong>{" "}<small>{"@johnsmith"}</small>{"\\n          "}<small>{"31m"}</small>{"\\n          "}<br />{"\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean\\n          efficitur sit amet massa fringilla egestas. Nullam condimentum luctus\\n          turpis.\\n        "}</p>{"\\n      "}</ui.Content>{"\\n      "}<ui.Level mobile>{"\\n        "}<ui.LevelLeft>{"\\n          "}<ui.LevelItem aria-label={"reply"} as={"a"}>{"\\n            "}<ui.Icon size={"small"}>{"\\n              "}<i aria-hidden={"true"} className={"fas fa-reply"} />{"\\n            "}</ui.Icon>{"\\n          "}</ui.LevelItem>{"\\n          "}<ui.LevelItem aria-label={"retweet"} as={"a"}>{"\\n            "}<ui.Icon size={"small"}>{"\\n              "}<i aria-hidden={"true"} className={"fas fa-retweet"} />{"\\n            "}</ui.Icon>{"\\n          "}</ui.LevelItem>{"\\n          "}<ui.LevelItem aria-label={"like"} as={"a"}>{"\\n            "}<ui.Icon size={"small"}>{"\\n              "}<i aria-hidden={"true"} className={"fas fa-heart"} />{"\\n            "}</ui.Icon>{"\\n          "}</ui.LevelItem>{"\\n        "}</ui.LevelLeft>{"\\n      "}</ui.Level>{"\\n    "}</ui.MediaContent>{"\\n  "}</ui.Media>{"\\n"}</ui.Box>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

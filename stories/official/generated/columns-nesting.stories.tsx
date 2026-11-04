import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'columns-nesting',
      title: 'Nesting columns',
      url: 'https://bulma.io/documentation/columns/nesting/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-nesting',
  title: 'CSS Library/Columns/Nesting',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-nesting" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Nesting columns'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A simple way to build '}
          <strong data-official-prose="">{'responsive columns'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can '}
            <strong data-official-prose="">{'nest'}</strong>
            {
              ' columns to have more flexibility in your\n    design. You only need to follow this structure:\n  '
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'columns'}</code>
              {': top-level columns container\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'column'}</code>
                  {'\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      {'\n              '}
                      <code data-official-prose="">{'columns'}</code>
                      {': nested columns\n              '}
                      <ul data-official-prose="">
                        {'\n                '}
                        <li data-official-prose="">
                          <code data-official-prose="">{'column'}</code>
                          {' and so on…'}
                        </li>
                        {'\n              '}
                      </ul>
                      {'\n            '}
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
            {'\n    The difference with\n    '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/columns/options/#multiline'}
            >
              {'multiline columns'}
            </a>
            {'\n    is the '}
            <strong data-official-prose="">{'order'}</strong>
            {' in the HTML code: all the\n    '}
            <strong data-official-prose="" className={'has-text-info'}>
              {'blue'}
            </strong>
            {' columns appear\n    '}
            <em data-official-prose="">{'before'}</em>
            {' the '}
            <strong data-official-prose="" className={'has-text-danger'}>
              {'red'}
            </strong>
            {' ones.\n    Resize to a narrower viewport to see the result.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n \n'}
        <div data-official-example="columns-nesting/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Multiline columns will also have a '}
            <strong data-official-prose="">{'gap'}</strong>
            {' between each\n    '}
            <strong data-official-prose="">{'line'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column">\n    <p class="bd-notification is-info">First column</p>\n    <div class="columns is-mobile">\n      <div class="column">\n        <p class="bd-notification is-info">First nested column</p>\n      </div>\n      <div class="column">\n        <p class="bd-notification is-info">Second nested column</p>\n      </div>\n    </div>\n  </div>\n  <div class="column">\n    <p class="bd-notification is-danger">Second column</p>\n    <div class="columns is-mobile">\n      <div class="column is-half">\n        <p class="bd-notification is-danger">50%</p>\n      </div>\n      <div class="column">\n        <p class="bd-notification is-danger">Auto</p>\n      </div>\n      <div class="column">\n        <p class="bd-notification is-danger">Auto</p>\n      </div>\n    </div>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-info'}>{'First column'}</p>
          {'\n    '}
          <ui.Columns displayFrom={'mobile'}>
            {'\n      '}
            <ui.Column>
              {'\n        '}
              <p className={'bd-notification is-info'}>
                {'First nested column'}
              </p>
              {'\n      '}
            </ui.Column>
            {'\n      '}
            <ui.Column>
              {'\n        '}
              <p className={'bd-notification is-info'}>
                {'Second nested column'}
              </p>
              {'\n      '}
            </ui.Column>
            {'\n    '}
          </ui.Columns>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <p className={'bd-notification is-danger'}>{'Second column'}</p>
          {'\n    '}
          <ui.Columns displayFrom={'mobile'}>
            {'\n      '}
            <ui.Column width={'half'}>
              {'\n        '}
              <p className={'bd-notification is-danger'}>{'50%'}</p>
              {'\n      '}
            </ui.Column>
            {'\n      '}
            <ui.Column>
              {'\n        '}
              <p className={'bd-notification is-danger'}>{'Auto'}</p>
              {'\n      '}
            </ui.Column>
            {'\n      '}
            <ui.Column>
              {'\n        '}
              <p className={'bd-notification is-danger'}>{'Auto'}</p>
              {'\n      '}
            </ui.Column>
            {'\n    '}
          </ui.Columns>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Nested columns',
  parameters: {
    official: { id: 'columns-nesting/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-info"}>{"First column"}</p>{"\\n    "}<ui.Columns displayFrom={"mobile"}>{"\\n      "}<ui.Column>{"\\n        "}<p className={"bd-notification is-info"}>{"First nested column"}</p>{"\\n      "}</ui.Column>{"\\n      "}<ui.Column>{"\\n        "}<p className={"bd-notification is-info"}>{"Second nested column"}</p>{"\\n      "}</ui.Column>{"\\n    "}</ui.Columns>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<p className={"bd-notification is-danger"}>{"Second column"}</p>{"\\n    "}<ui.Columns displayFrom={"mobile"}>{"\\n      "}<ui.Column width={"half"}>{"\\n        "}<p className={"bd-notification is-danger"}>{"50%"}</p>{"\\n      "}</ui.Column>{"\\n      "}<ui.Column>{"\\n        "}<p className={"bd-notification is-danger"}>{"Auto"}</p>{"\\n      "}</ui.Column>{"\\n      "}<ui.Column>{"\\n        "}<p className={"bd-notification is-danger"}>{"Auto"}</p>{"\\n      "}</ui.Column>{"\\n    "}</ui.Columns>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

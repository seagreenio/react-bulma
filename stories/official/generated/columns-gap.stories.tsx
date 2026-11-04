import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'columns-gap',
      title: 'Columns gap',
      url: 'https://bulma.io/documentation/columns/gap/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-gap',
  title: 'CSS Library/Columns/Gap',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-gap" controllers={['column-gap']}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Columns gap'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Customize the '}
          <strong data-official-prose="">{'gap'}</strong>
          {' between the columns'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'default-gap'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Default gap\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#default-gap'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Each column has a '}
            <strong data-official-prose="">{'gap'}</strong>
            {' equal to the '}
            <strong data-official-prose="">{'variable'}</strong>{' '}
            <code data-official-prose="">{'$column-gap'}</code>
            {', which has a\n    default value of '}
            <code data-official-prose="">{'0.75rem'}</code>
            {'.\n    '}
            <br data-official-prose="" />
            {'\n    Since the gap is on '}
            <em data-official-prose="">{'each side'}</em>
            {
              ' of a column, the gap between two adjacent columns will be twice the value of\n    '
            }
            <code data-official-prose="">{'$column-gap'}</code>
            {', or '}
            <code data-official-prose="">{'1.5rem'}</code>
            {' by default.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n\n'}
        <div data-official-example="columns-gap/default-gap/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'gapless'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Gapless\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#gapless'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want to remove the '}
            <strong data-official-prose="">{'space'}</strong>
            {' between the columns, add the '}
            <code data-official-prose="">{'is-gapless'}</code>
            {' modifier on\n    the '}
            <code data-official-prose="">{'columns'}</code>
            {' container:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-gap/gapless/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-gapless">\n  <div class="column">No gap</div>\n  <div class="column">No gap</div>\n  <div class="column">No gap</div>\n  <div class="column">No gap</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can combine it with the '}
            <code data-official-prose="">{'is-multiline'}</code>
            {' modifier:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-gap/gapless/002">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-gapless is-multiline is-mobile">\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-half">is-half</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column">Auto</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'variable-gap'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Variable gap\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#variable-gap'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can specify a '}
            <strong data-official-prose="">{'custom column gap'}</strong>
            {' by appending one of '}
            <strong data-official-prose="">{'9 modifiers'}</strong>
            {' on the\n    '}
            <code data-official-prose="">{'.columns'}</code>
            {' container.\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-0'}</code>
              {' will remove any gap (similar to '}
              <code data-official-prose="">{'is-gapless'}</code>
              {')'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-3'}</code>
              {' is the '}
              <strong data-official-prose="">{'default value'}</strong>
              {', equivalent to the '}
              <code data-official-prose="">{'0.75rem'}</code>
              {' value'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-8'}</code>
              {' is the maximum gap of '}
              <code data-official-prose="">{'2rem'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-8">\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-gap/variable-gap/001">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        {'\n\n\n\n\n  '}
        <h3
          data-official-prose=""
          id={'breakpoint-based-column-gaps'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Breakpoint based column gaps\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#breakpoint-based-column-gaps'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n  '}
        <div data-official-prose="" className={'content'}>
          {'\n    '}
          <p data-official-prose="">
            {'You can define a column gap for each viewport size:'}
          </p>
          {'\n\n    '}
          <p data-official-prose="">
            {
              "\n      For example, here's how it looks with the following modifiers:\n      "
            }
            <code data-official-prose="">
              {
                'is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd'
              }
            </code>
            {'\n    '}
          </p>
          {'\n  '}
        </div>
        {'\n\n  '}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n    '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n  <div class="column">Column</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </div>
        {'\n\n  '}
        <div data-official-example="columns-gap/breakpoint-based-column-gaps/001">
          <Canvas of={Example005} />
        </div>
        {'\n\n  '}
        <div data-official-prose="" className={'message is-info'}>
          {'\n    '}
          <p data-official-prose="" className={'message-body'}>
            {
              '\n      If you want to see the difference, resize your browser and see how the\n      '
            }
            <strong data-official-prose="">{'columns gap'}</strong>
            {' varies.\n    '}
          </p>
          {'\n  '}
        </div>
        {'\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Default gap</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Default gap</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Default gap</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Default gap</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Columns gapless>
        {' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>First column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Second column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Third column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Fourth column</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Columns multiline displayFrom={'mobile'} gapless>
        {' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-half'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-one-quarter'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <div id={'klmn'} className={'bd-klmn'}>
        {' '}
        <div className={'bd-klmn-gaps'}>
          {' '}
          <strong className={'bd-klmn-label'}>
            {' '}
            Gap: <code id={'klmnValue'} className={'bd-klmn-value'} />{' '}
          </strong>{' '}
          <a data-value={'0'} className={'bd-klmn-gap'}>
            {' '}
            is-0{' '}
          </a>{' '}
          <a data-value={'1'} className={'bd-klmn-gap'}>
            {' '}
            is-1{' '}
          </a>{' '}
          <a data-value={'2'} className={'bd-klmn-gap'}>
            {' '}
            is-2{' '}
          </a>{' '}
          <a data-value={'3'} className={'bd-klmn-gap'}>
            {' '}
            is-3{' '}
          </a>{' '}
          <a data-value={'4'} className={'bd-klmn-gap'}>
            {' '}
            is-4{' '}
          </a>{' '}
          <a data-value={'5'} className={'bd-klmn-gap'}>
            {' '}
            is-5{' '}
          </a>{' '}
          <a data-value={'6'} className={'bd-klmn-gap'}>
            {' '}
            is-6{' '}
          </a>{' '}
          <a data-value={'7'} className={'bd-klmn-gap'}>
            {' '}
            is-7{' '}
          </a>{' '}
          <a data-value={'8'} className={'bd-klmn-gap'}>
            {' '}
            is-8{' '}
          </a>{' '}
        </div>{' '}
        <div className={'bd-klmn-lead'}>
          {' '}
          <ui.Columns className={'rb-is-variable bd-klmn-columns'}>
            {' '}
            <ui.Column width={3}>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                Side{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column width={9}>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                Main{' '}
              </div>{' '}
            </ui.Column>{' '}
          </ui.Columns>{' '}
          <ui.Columns className={'rb-is-variable bd-klmn-columns'}>
            {' '}
            <ui.Column width={4}>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                Three columns{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column width={4}>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                Three columns{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column width={4}>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                Three columns{' '}
              </div>{' '}
            </ui.Column>{' '}
          </ui.Columns>{' '}
          <ui.Columns className={'rb-is-variable bd-klmn-columns'}>
            {' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                1{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                2{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                3{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                4{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                5{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                6{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                7{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                8{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                9{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                10{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                11{' '}
              </div>{' '}
            </ui.Column>{' '}
            <ui.Column>
              {' '}
              <div
                className={[
                  ui.helpers({ textAlign: 'center' }),
                  'bd-notification is-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {' '}
                12{' '}
              </div>{' '}
            </ui.Column>{' '}
          </ui.Columns>{' '}
        </div>{' '}
      </div>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Columns
        gap={{ mobile: 1, tablet: 0, desktop: 3, widescreen: 8, fullhd: 2 }}
      >
        {' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Column</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification is-primary'}>Column</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Default column gap',
  parameters: {
    official: { id: 'columns-gap/default-gap/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Default gap</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Default gap</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Default gap</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Default gap</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Gapless columns',
  parameters: {
    official: { id: 'columns-gap/gapless/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Columns gapless>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>First column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Second column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Third column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Fourth column</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Gapless multiline columns',
  parameters: {
    official: { id: 'columns-gap/gapless/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Columns multiline displayFrom={'mobile'} gapless>\n        {' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-half'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-one-quarter'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Interactive gap selector',
  parameters: {
    official: { id: 'columns-gap/variable-gap/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <div id={'klmn'} className={'bd-klmn'}>\n        {' '}\n        <div className={'bd-klmn-gaps'}>\n          {' '}\n          <strong className={'bd-klmn-label'}>\n            {' '}\n            Gap: <code id={'klmnValue'} className={'bd-klmn-value'} />{' '}\n          </strong>{' '}\n          <a data-value={'0'} className={'bd-klmn-gap'}>\n            {' '}\n            is-0{' '}\n          </a>{' '}\n          <a data-value={'1'} className={'bd-klmn-gap'}>\n            {' '}\n            is-1{' '}\n          </a>{' '}\n          <a data-value={'2'} className={'bd-klmn-gap'}>\n            {' '}\n            is-2{' '}\n          </a>{' '}\n          <a data-value={'3'} className={'bd-klmn-gap'}>\n            {' '}\n            is-3{' '}\n          </a>{' '}\n          <a data-value={'4'} className={'bd-klmn-gap'}>\n            {' '}\n            is-4{' '}\n          </a>{' '}\n          <a data-value={'5'} className={'bd-klmn-gap'}>\n            {' '}\n            is-5{' '}\n          </a>{' '}\n          <a data-value={'6'} className={'bd-klmn-gap'}>\n            {' '}\n            is-6{' '}\n          </a>{' '}\n          <a data-value={'7'} className={'bd-klmn-gap'}>\n            {' '}\n            is-7{' '}\n          </a>{' '}\n          <a data-value={'8'} className={'bd-klmn-gap'}>\n            {' '}\n            is-8{' '}\n          </a>{' '}\n        </div>{' '}\n        <div className={'bd-klmn-lead'}>\n          {' '}\n          <ui.Columns className={'rb-is-variable bd-klmn-columns'}>\n            {' '}\n            <ui.Column width={3}>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                Side{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column width={9}>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                Main{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n          </ui.Columns>{' '}\n          <ui.Columns className={'rb-is-variable bd-klmn-columns'}>\n            {' '}\n            <ui.Column width={4}>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                Three columns{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column width={4}>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                Three columns{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column width={4}>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                Three columns{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n          </ui.Columns>{' '}\n          <ui.Columns className={'rb-is-variable bd-klmn-columns'}>\n            {' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                1{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                2{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                3{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                4{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                5{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                6{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                7{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                8{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                9{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                10{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                11{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n            <ui.Column>\n              {' '}\n              <div\n                className={[\n                  ui.helpers({ textAlign: 'center' }),\n                  'bd-notification is-primary',\n                ]\n                  .filter(Boolean)\n                  .join(' ')}\n              >\n                {' '}\n                12{' '}\n              </div>{' '}\n            </ui.Column>{' '}\n          </ui.Columns>{' '}\n        </div>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Gaps at each breakpoint',
  parameters: {
    official: { id: 'columns-gap/breakpoint-based-column-gaps/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Columns\n        gap={{ mobile: 1, tablet: 0, desktop: 3, widescreen: 8, fullhd: 2 }}\n      >\n        {' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Column</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification is-primary'}>Column</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

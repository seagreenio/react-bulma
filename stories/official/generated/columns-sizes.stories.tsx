import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'columns-sizes',
      title: 'Column sizes',
      url: 'https://bulma.io/documentation/columns/sizes/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-columns-sizes',
  title: 'CSS Library/Columns/Sizes',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="columns-sizes" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Column sizes'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Define the '}
          <strong data-official-prose="">{'size'}</strong>
          {' of each column '}
          <strong data-official-prose="">{'individually'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'If you want to change the '}
            <strong data-official-prose="">{'size'}</strong>
            {' of a single column, you can use one of the following classes:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-three-quarters'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-two-thirds'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-half'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-one-third'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-one-quarter'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-full'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <em data-official-prose="">{'other'}</em>
            {' columns will fill up the '}
            <strong data-official-prose="">{'remaining'}</strong>
            {' space automatically.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can now use the following multiples of '}
            <code data-official-prose="">{'20%'}</code>
            {' as well:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-four-fifths'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-three-fifths'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-two-fifths'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-one-fifth'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/003">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/004">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/005">
          <Canvas of={Example005} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/006">
          <Canvas of={Example006} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/007">
          <Canvas of={Example007} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/008">
          <Canvas of={Example008} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/009">
          <Canvas of={Example009} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/basic/010">
          <Canvas of={Example010} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column is-four-fifths">is-four-fifths</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-three-quarters">is-three-quarters</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-two-thirds">is-two-thirds</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-three-fifths">is-three-fifths</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-half">is-half</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-two-fifths">is-two-fifths</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-one-third">is-one-third</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-one-fifth">is-one-fifth</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'12-columns-system'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    12 columns system\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#12-columns-system'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'As the grid can be divided into '}
            <strong data-official-prose="">{'12'}</strong>
            {' columns, there are size classes for each division:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-1'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-2'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-3'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-4'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-5'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-6'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-7'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-8'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-9'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-10'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-11'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-12'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-info'}>
          {'\n  '}
          <p data-official-prose="" className={'message-header'}>
            {'Naming convention'}
          </p>
          {'\n  '}
          <p data-official-prose="" className={'message-body'}>
            {'\n    Each modifier class is named after\n    '}
            <strong data-official-prose="">
              {'how many columns you want out of 12'}
            </strong>
            {'. So if you want 7 columns out of 12, use '}
            <code data-official-prose="">{'is-7'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/001">
          <Canvas of={Example011} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/002">
          <Canvas of={Example012} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/003">
          <Canvas of={Example013} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/004">
          <Canvas of={Example014} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/005">
          <Canvas of={Example015} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/006">
          <Canvas of={Example016} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/007">
          <Canvas of={Example017} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/008">
          <Canvas of={Example018} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/009">
          <Canvas of={Example019} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/010">
          <Canvas of={Example020} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/011">
          <Canvas of={Example021} />
        </div>
        {'\n'}
        <div data-official-example="columns-sizes/12-columns-system/012">
          <Canvas of={Example022} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'offset'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Offset\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#offset'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    While you can use '}
            <em data-official-prose="">{'empty columns'}</em>
            {' (like '}
            <code data-official-prose="">{'<div class="column"></div>'}</code>
            {') to create\n    horizontal space around '}
            <code data-official-prose="">{'.column'}</code>
            {' elements, you can also use '}
            <strong data-official-prose="">{'offset'}</strong>
            {' modifiers like\n    '}
            <code data-official-prose="">{'.is-offset-x'}</code>
            {':\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/offset/001">
          <Canvas of={Example023} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/offset/002">
          <Canvas of={Example024} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/offset/003">
          <Canvas of={Example025} />
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/offset/004">
          <Canvas of={Example026} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-mobile">\n  <div class="column is-half is-offset-one-quarter"></div>\n</div>\n\n<div class="columns is-mobile">\n  <div class="column is-three-fifths is-offset-one-fifth"></div>\n</div>\n\n<div class="columns is-mobile">\n  <div class="column is-4 is-offset-8"></div>\n</div>\n\n<div class="columns is-mobile">\n  <div class="column is-11 is-offset-1"></div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'narrow-column'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Narrow column\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#narrow-column'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want a column to only take the '}
            <strong data-official-prose="">{'space it needs'}</strong>
            {', use the '}
            <code data-official-prose="">{'is-narrow'}</code>
            {
              ' modifier. The\n    other column(s) will fill up the remaining space.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="columns-sizes/narrow-column/001">
          <Canvas of={Example027} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'bd-highlight-full'}>
          {'\n  '}
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column is-narrow">\n    <div class="box" style="width: 200px">\n      <p class="title is-5">Narrow column</p>\n      <p class="subtitle">This column is only 200px wide.</p>\n    </div>\n  </div>\n  <div class="column">\n    <div class="box">\n      <p class="title is-5">Flexible column</p>\n      <p class="subtitle">\n        This column will take up the remaining space available.\n      </p>\n    </div>\n  </div>\n</div>\n'
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
            {
              '\n    As for the size modifiers, you can have narrow columns for different\n    '
            }
            <strong data-official-prose="">{'breakpoints'}</strong>
            {':\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.is-narrow-mobile'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.is-narrow-tablet'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.is-narrow-touch'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.is-narrow-desktop'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.is-narrow-widescreen'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.is-narrow-fullhd'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
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
        {' '}
        <ui.Column width={'full'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-full'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'four-fifths'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-four-fifths'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'three-quarters'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-three-quarters'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'two-thirds'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-two-thirds'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'three-fifths'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-three-fifths'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'half'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-half'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'two-fifths'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-two-fifths'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example008Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'one-third'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-one-third'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example009Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-one-quarter'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example010Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'one-fifth'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-one-fifth'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p className={'bd-notification'}>Auto</p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example011Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={1}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-1'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example012Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={2}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-2'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example013Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={3}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-3'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example014Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={4}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-4'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example015Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={5}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-5'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example016Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={6}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-6'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example017Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={7}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-7'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example018Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={8}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-8'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example019Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={9}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-9'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example020Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={10}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-10'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example021Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={11}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-11'}</code>
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <p
            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example022Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={12}>
          {' '}
          <p className={'bd-notification is-primary'}>
            <code>{'is-12'}</code>
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example023Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'}>
        {' '}
        <ui.Column width={'half'} offset={'one-quarter'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-half'}</code>
            <br />{' '}
            <code className={'html'}>{'is-offset-one-quarter'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example024Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'}>
        {' '}
        <ui.Column width={'three-fifths'} offset={'one-fifth'}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-three-fifths'}</code>
            <br /> <code className={'html'}>{'is-offset-one-fifth'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example025Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'}>
        {' '}
        <ui.Column width={4} offset={8}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-4'}</code>
            <br /> <code className={'html'}>{'is-offset-8'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example026Demo() {
  return (
    <>
      <ui.Columns displayFrom={'mobile'}>
        {' '}
        <ui.Column width={11} offset={1}>
          {' '}
          <p className={'bd-notification is-primary'}>
            {' '}
            <code className={'html'}>{'is-11'}</code>
            <br /> <code className={'html'}>{'is-offset-1'}</code>{' '}
          </p>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example027Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column width={'narrow'}>
          {' '}
          <ui.Box style={{ ...{ width: '200px' } }}>
            {' '}
            <ui.Title size={5} as={'p'}>
              Narrow column
            </ui.Title>{' '}
            <ui.Subtitle as={'p'}>
              This column is only 200px wide.
            </ui.Subtitle>{' '}
          </ui.Box>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <ui.Box>
            {' '}
            <ui.Title size={5} as={'p'}>
              Flexible column
            </ui.Title>{' '}
            <ui.Subtitle as={'p'}>
              This column will take up the remaining space available.
            </ui.Subtitle>{' '}
          </ui.Box>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Full-width column',
  parameters: {
    official: { id: 'columns-sizes/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'full'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-full'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Four-fifths column',
  parameters: {
    official: { id: 'columns-sizes/basic/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'four-fifths'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-four-fifths'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Three-quarters column',
  parameters: {
    official: { id: 'columns-sizes/basic/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'three-quarters'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-three-quarters'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Two-thirds column',
  parameters: {
    official: { id: 'columns-sizes/basic/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'two-thirds'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-two-thirds'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Three-fifths column',
  parameters: {
    official: { id: 'columns-sizes/basic/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'three-fifths'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-three-fifths'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Half-width column',
  parameters: {
    official: { id: 'columns-sizes/basic/006' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example006Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-half'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Two-fifths column',
  parameters: {
    official: { id: 'columns-sizes/basic/007' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example007Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'two-fifths'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-two-fifths'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'One-third column',
  parameters: {
    official: { id: 'columns-sizes/basic/008' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example008Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'one-third'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-one-third'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Quarter-width column',
  parameters: {
    official: { id: 'columns-sizes/basic/009' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example009Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-one-quarter'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'One-fifth column',
  parameters: {
    official: { id: 'columns-sizes/basic/010' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example010Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'one-fifth'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-one-fifth'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p className={'bd-notification'}>Auto</p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Width 1 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example011Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={1}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-1'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Width 2 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example012Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={2}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-2'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Width 3 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example013Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={3}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-3'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Width 4 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example014Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={4}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-4'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Width 5 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example015Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={5}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-5'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Width 6 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/006' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example016Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={6}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-6'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Width 7 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/007' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example017Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={7}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-7'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Width 8 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/008' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example018Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={8}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-8'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'Width 9 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/009' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example019Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={9}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-9'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'Width 10 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/010' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example020Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={10}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-10'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

export const Example021 = {
  name: 'Width 11 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/011' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example021Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={11}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-11'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <p\n            className={[ui.helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example021Demo,
} satisfies StoryObj

export const Example022 = {
  name: 'Width 12 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/012' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example022Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={12}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-12'}</code>\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example022Demo,
} satisfies StoryObj

export const Example023 = {
  name: 'Half-width with quarter offset',
  parameters: {
    official: { id: 'columns-sizes/offset/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example023Demo() {\n  return (\n    <>\n      <ui.Columns displayFrom={'mobile'}>\n        {' '}\n        <ui.Column width={'half'} offset={'one-quarter'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-half'}</code>\n            <br />{' '}\n            <code className={'html'}>{'is-offset-one-quarter'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example023Demo,
} satisfies StoryObj

export const Example024 = {
  name: 'Three-fifths with fifth offset',
  parameters: {
    official: { id: 'columns-sizes/offset/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example024Demo() {\n  return (\n    <>\n      <ui.Columns displayFrom={'mobile'}>\n        {' '}\n        <ui.Column width={'three-fifths'} offset={'one-fifth'}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-three-fifths'}</code>\n            <br /> <code className={'html'}>{'is-offset-one-fifth'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example024Demo,
} satisfies StoryObj

export const Example025 = {
  name: 'Width 4 with offset 8',
  parameters: {
    official: { id: 'columns-sizes/offset/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example025Demo() {\n  return (\n    <>\n      <ui.Columns displayFrom={'mobile'}>\n        {' '}\n        <ui.Column width={4} offset={8}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-4'}</code>\n            <br /> <code className={'html'}>{'is-offset-8'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example025Demo,
} satisfies StoryObj

export const Example026 = {
  name: 'Width 11 with offset 1',
  parameters: {
    official: { id: 'columns-sizes/offset/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example026Demo() {\n  return (\n    <>\n      <ui.Columns displayFrom={'mobile'}>\n        {' '}\n        <ui.Column width={11} offset={1}>\n          {' '}\n          <p className={'bd-notification is-primary'}>\n            {' '}\n            <code className={'html'}>{'is-11'}</code>\n            <br /> <code className={'html'}>{'is-offset-1'}</code>{' '}\n          </p>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example026Demo,
} satisfies StoryObj

export const Example027 = {
  name: 'Narrow and flexible columns',
  parameters: {
    official: { id: 'columns-sizes/narrow-column/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example027Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column width={'narrow'}>\n          {' '}\n          <ui.Box style={{ ...{ width: '200px' } }}>\n            {' '}\n            <ui.Title size={5} as={'p'}>\n              Narrow column\n            </ui.Title>{' '}\n            <ui.Subtitle as={'p'}>\n              This column is only 200px wide.\n            </ui.Subtitle>{' '}\n          </ui.Box>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <ui.Box>\n            {' '}\n            <ui.Title size={5} as={'p'}>\n              Flexible column\n            </ui.Title>{' '}\n            <ui.Subtitle as={'p'}>\n              This column will take up the remaining space available.\n            </ui.Subtitle>{' '}\n          </ui.Box>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example027Demo,
} satisfies StoryObj

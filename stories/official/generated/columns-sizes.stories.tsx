import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Box, Column, Columns, Subtitle, Title, helpers } from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Column sizes'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Define the '}
          <strong data-official-prose="">{'size'}</strong>
          {' of each column '}
          <strong data-official-prose="">{'individually'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'If you want to change the '}
            <strong data-official-prose="">{'size'}</strong>
            {' of a single column, you can use one of the following classes:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-three-quarters'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-two-thirds'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-half'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-one-third'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-one-quarter'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-full'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {'The '}
            <em data-official-prose="">{'other'}</em>
            {' columns will fill up the '}
            <strong data-official-prose="">{'remaining'}</strong>
            {' space automatically.'}
          </p>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can now use the following multiples of '}
            <code data-official-prose="">{'20%'}</code>
            {' as well:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-four-fifths'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-three-fifths'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-two-fifths'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-one-fifth'}</code>
            </li>
          </ul>
        </div>
        <div data-official-example="columns-sizes/basic/001">
          <Canvas of={FullWidthColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/002">
          <Canvas of={FourFifthsColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/003">
          <Canvas of={ThreeQuartersColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/004">
          <Canvas of={TwoThirdsColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/005">
          <Canvas of={ThreeFifthsColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/006">
          <Canvas of={HalfWidthColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/007">
          <Canvas of={TwoFifthsColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/008">
          <Canvas of={OneThirdColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/009">
          <Canvas of={QuarterWidthColumnStory} />
        </div>
        <div data-official-example="columns-sizes/basic/010">
          <Canvas of={OneFifthColumnStory} />
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column is-four-fifths">is-four-fifths</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-three-quarters">is-three-quarters</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-two-thirds">is-two-thirds</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-three-fifths">is-three-fifths</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-half">is-half</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-two-fifths">is-two-fifths</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-one-third">is-one-third</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-one-quarter">is-one-quarter</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n\n<div class="columns">\n  <div class="column is-one-fifth">is-one-fifth</div>\n  <div class="column">Auto</div>\n  <div class="column">Auto</div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'12-columns-system'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' 12 columns system '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#12-columns-system'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'As the grid can be divided into '}
            <strong data-official-prose="">{'12'}</strong>
            {' columns, there are size classes for each division:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-1'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-2'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-3'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-4'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-5'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-6'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-7'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-8'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-9'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-10'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-11'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-12'}</code>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'message is-info'}>
          <p data-official-prose="" className={'message-header'}>
            {'Naming convention'}
          </p>
          <p data-official-prose="" className={'message-body'}>
            {' Each modifier class is named after '}
            <strong data-official-prose="">
              {'how many columns you want out of 12'}
            </strong>
            {'. So if you want 7 columns out of 12, use '}
            <code data-official-prose="">{'is-7'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-example="columns-sizes/12-columns-system/001">
          <Canvas of={Width1Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/002">
          <Canvas of={Width2Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/003">
          <Canvas of={Width3Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/004">
          <Canvas of={Width4Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/005">
          <Canvas of={Width5Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/006">
          <Canvas of={Width6Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/007">
          <Canvas of={Width7Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/008">
          <Canvas of={Width8Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/009">
          <Canvas of={Width9Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/010">
          <Canvas of={Width10Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/011">
          <Canvas of={Width11Of12Story} />
        </div>
        <div data-official-example="columns-sizes/12-columns-system/012">
          <Canvas of={Width12Of12Story} />
        </div>
        <h3
          data-official-prose=""
          id={'offset'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Offset '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#offset'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' While you can use '}
            <em data-official-prose="">{'empty columns'}</em>
            {' (like '}
            <code data-official-prose="">{'<div class="column"></div>'}</code>
            {') to create horizontal space around '}
            <code data-official-prose="">{'.column'}</code>
            {' elements, you can also use '}
            <strong data-official-prose="">{'offset'}</strong>
            {' modifiers like '}
            <code data-official-prose="">{'.is-offset-x'}</code>
            {': '}
          </p>
        </div>
        <div data-official-example="columns-sizes/offset/001">
          <Canvas of={HalfWidthWithQuarterOffsetStory} />
        </div>
        <div data-official-example="columns-sizes/offset/002">
          <Canvas of={ThreeFifthsWithFifthOffsetStory} />
        </div>
        <div data-official-example="columns-sizes/offset/003">
          <Canvas of={Width4WithOffset8Story} />
        </div>
        <div data-official-example="columns-sizes/offset/004">
          <Canvas of={Width11WithOffset1Story} />
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns is-mobile">\n  <div class="column is-half is-offset-one-quarter"></div>\n</div>\n\n<div class="columns is-mobile">\n  <div class="column is-three-fifths is-offset-one-fifth"></div>\n</div>\n\n<div class="columns is-mobile">\n  <div class="column is-4 is-offset-8"></div>\n</div>\n\n<div class="columns is-mobile">\n  <div class="column is-11 is-offset-1"></div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'narrow-column'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Narrow column '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#narrow-column'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want a column to only take the '}
            <strong data-official-prose="">{'space it needs'}</strong>
            {', use the '}
            <code data-official-prose="">{'is-narrow'}</code>
            {
              ' modifier. The other column(s) will fill up the remaining space. '
            }
          </p>
        </div>
        <div data-official-example="columns-sizes/narrow-column/001">
          <Canvas of={NarrowAndFlexibleColumnsStory} />
        </div>
        <div data-official-prose="" className={'bd-highlight-full'}>
          <div data-official-prose="" className={'highlight'}>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-html'}>
                {
                  '\n<div class="columns">\n  <div class="column is-narrow">\n    <div class="box" style="width: 200px">\n      <p class="title is-5">Narrow column</p>\n      <p class="subtitle">This column is only 200px wide.</p>\n    </div>\n  </div>\n  <div class="column">\n    <div class="box">\n      <p class="title is-5">Flexible column</p>\n      <p class="subtitle">\n        This column will take up the remaining space available.\n      </p>\n    </div>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' As for the size modifiers, you can have narrow columns for different '
            }
            <strong data-official-prose="">{'breakpoints'}</strong>
            {': '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'.is-narrow-mobile'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'.is-narrow-tablet'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'.is-narrow-touch'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'.is-narrow-desktop'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'.is-narrow-widescreen'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'.is-narrow-fullhd'}</code>
            </li>
          </ul>
        </div>
      </div>
    </OfficialDocument>
  )
}

function FullWidthColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'full'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-full'}</code>
          </p>
        </Column>
      </Columns>
    </>
  )
}

function FourFifthsColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'four-fifths'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-four-fifths'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function ThreeQuartersColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'three-quarters'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-three-quarters'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function TwoThirdsColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'two-thirds'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-two-thirds'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function ThreeFifthsColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'three-fifths'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-three-fifths'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function HalfWidthColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'half'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-half'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function TwoFifthsColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'two-fifths'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-two-fifths'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function OneThirdColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'one-third'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-one-third'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function QuarterWidthColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-one-quarter'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function OneFifthColumnDemo() {
  return (
    <>
      <Columns>
        <Column width={'one-fifth'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-one-fifth'}</code>
          </p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
        <Column>
          <p className={'bd-notification'}>Auto</p>
        </Column>
      </Columns>
    </>
  )
}

function Width1Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={1}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-1'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width2Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={2}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-2'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width3Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={3}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-3'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width4Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={4}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-4'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width5Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={5}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-5'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width6Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={6}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-6'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width7Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={7}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-7'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width8Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={8}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-8'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width9Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={9}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-9'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width10Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={10}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-10'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width11Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={11}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-11'}</code>
          </p>
        </Column>
        <Column>
          <p
            className={[helpers({ textAlign: 'center' }), 'bd-notification']
              .filter(Boolean)
              .join(' ')}
          >
            1
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width12Of12Demo() {
  return (
    <>
      <Columns>
        <Column width={12}>
          <p className={'bd-notification is-primary'}>
            <code>{'is-12'}</code>
          </p>
        </Column>
      </Columns>
    </>
  )
}

function HalfWidthWithQuarterOffsetDemo() {
  return (
    <>
      <Columns displayFrom={'mobile'}>
        <Column width={'half'} offset={'one-quarter'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-half'}</code>
            <br /> <code className={'html'}>{'is-offset-one-quarter'}</code>
          </p>
        </Column>
      </Columns>
    </>
  )
}

function ThreeFifthsWithFifthOffsetDemo() {
  return (
    <>
      <Columns displayFrom={'mobile'}>
        <Column width={'three-fifths'} offset={'one-fifth'}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-three-fifths'}</code>
            <br /> <code className={'html'}>{'is-offset-one-fifth'}</code>
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width4WithOffset8Demo() {
  return (
    <>
      <Columns displayFrom={'mobile'}>
        <Column width={4} offset={8}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-4'}</code>
            <br /> <code className={'html'}>{'is-offset-8'}</code>
          </p>
        </Column>
      </Columns>
    </>
  )
}

function Width11WithOffset1Demo() {
  return (
    <>
      <Columns displayFrom={'mobile'}>
        <Column width={11} offset={1}>
          <p className={'bd-notification is-primary'}>
            <code className={'html'}>{'is-11'}</code>
            <br /> <code className={'html'}>{'is-offset-1'}</code>
          </p>
        </Column>
      </Columns>
    </>
  )
}

function NarrowAndFlexibleColumnsDemo() {
  return (
    <>
      <Columns>
        <Column width={'narrow'}>
          <Box style={{ ...{ width: '200px' } }}>
            <Title size={5} as={'p'}>
              Narrow column
            </Title>
            <Subtitle as={'p'}>This column is only 200px wide.</Subtitle>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title size={5} as={'p'}>
              Flexible column
            </Title>
            <Subtitle as={'p'}>
              This column will take up the remaining space available.
            </Subtitle>
          </Box>
        </Column>
      </Columns>
    </>
  )
}

export const FullWidthColumnStory = {
  name: 'Full-width column',
  parameters: {
    official: { id: 'columns-sizes/basic/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction FullWidthColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'full'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-full'}</code>\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullWidthColumnDemo,
} satisfies StoryObj

export const FourFifthsColumnStory = {
  name: 'Four-fifths column',
  parameters: {
    official: { id: 'columns-sizes/basic/002' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction FourFifthsColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'four-fifths'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-four-fifths'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FourFifthsColumnDemo,
} satisfies StoryObj

export const ThreeQuartersColumnStory = {
  name: 'Three-quarters column',
  parameters: {
    official: { id: 'columns-sizes/basic/003' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction ThreeQuartersColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'three-quarters'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-three-quarters'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ThreeQuartersColumnDemo,
} satisfies StoryObj

export const TwoThirdsColumnStory = {
  name: 'Two-thirds column',
  parameters: {
    official: { id: 'columns-sizes/basic/004' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction TwoThirdsColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'two-thirds'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-two-thirds'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TwoThirdsColumnDemo,
} satisfies StoryObj

export const ThreeFifthsColumnStory = {
  name: 'Three-fifths column',
  parameters: {
    official: { id: 'columns-sizes/basic/005' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction ThreeFifthsColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'three-fifths'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-three-fifths'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ThreeFifthsColumnDemo,
} satisfies StoryObj

export const HalfWidthColumnStory = {
  name: 'Half-width column',
  parameters: {
    official: { id: 'columns-sizes/basic/006' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction HalfWidthColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'half'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-half'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HalfWidthColumnDemo,
} satisfies StoryObj

export const TwoFifthsColumnStory = {
  name: 'Two-fifths column',
  parameters: {
    official: { id: 'columns-sizes/basic/007' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction TwoFifthsColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'two-fifths'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-two-fifths'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TwoFifthsColumnDemo,
} satisfies StoryObj

export const OneThirdColumnStory = {
  name: 'One-third column',
  parameters: {
    official: { id: 'columns-sizes/basic/008' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction OneThirdColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'one-third'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-one-third'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: OneThirdColumnDemo,
} satisfies StoryObj

export const QuarterWidthColumnStory = {
  name: 'Quarter-width column',
  parameters: {
    official: { id: 'columns-sizes/basic/009' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction QuarterWidthColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-one-quarter'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: QuarterWidthColumnDemo,
} satisfies StoryObj

export const OneFifthColumnStory = {
  name: 'One-fifth column',
  parameters: {
    official: { id: 'columns-sizes/basic/010' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction OneFifthColumnDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'one-fifth'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-one-fifth'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n        <Column>\n          <p className={'bd-notification'}>Auto</p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: OneFifthColumnDemo,
} satisfies StoryObj

export const Width1Of12Story = {
  name: 'Width 1 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/001' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width1Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={1}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-1'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width1Of12Demo,
} satisfies StoryObj

export const Width2Of12Story = {
  name: 'Width 2 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/002' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width2Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={2}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-2'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width2Of12Demo,
} satisfies StoryObj

export const Width3Of12Story = {
  name: 'Width 3 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/003' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width3Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={3}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-3'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width3Of12Demo,
} satisfies StoryObj

export const Width4Of12Story = {
  name: 'Width 4 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/004' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width4Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={4}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-4'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width4Of12Demo,
} satisfies StoryObj

export const Width5Of12Story = {
  name: 'Width 5 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/005' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width5Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={5}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-5'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width5Of12Demo,
} satisfies StoryObj

export const Width6Of12Story = {
  name: 'Width 6 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/006' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width6Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={6}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-6'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width6Of12Demo,
} satisfies StoryObj

export const Width7Of12Story = {
  name: 'Width 7 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/007' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width7Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={7}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-7'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width7Of12Demo,
} satisfies StoryObj

export const Width8Of12Story = {
  name: 'Width 8 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/008' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width8Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={8}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-8'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width8Of12Demo,
} satisfies StoryObj

export const Width9Of12Story = {
  name: 'Width 9 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/009' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width9Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={9}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-9'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width9Of12Demo,
} satisfies StoryObj

export const Width10Of12Story = {
  name: 'Width 10 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/010' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width10Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={10}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-10'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width10Of12Demo,
} satisfies StoryObj

export const Width11Of12Story = {
  name: 'Width 11 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/011' },
    docs: {
      source: {
        code: "import { Column, Columns, helpers } from '@seagreenio/react-bulma'\n\nfunction Width11Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={11}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-11'}</code>\n          </p>\n        </Column>\n        <Column>\n          <p\n            className={[helpers({ textAlign: 'center' }), 'bd-notification']\n              .filter(Boolean)\n              .join(' ')}\n          >\n            1\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width11Of12Demo,
} satisfies StoryObj

export const Width12Of12Story = {
  name: 'Width 12 of 12',
  parameters: {
    official: { id: 'columns-sizes/12-columns-system/012' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction Width12Of12Demo() {\n  return (\n    <>\n      <Columns>\n        <Column width={12}>\n          <p className={'bd-notification is-primary'}>\n            <code>{'is-12'}</code>\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width12Of12Demo,
} satisfies StoryObj

export const HalfWidthWithQuarterOffsetStory = {
  name: 'Half-width with quarter offset',
  parameters: {
    official: { id: 'columns-sizes/offset/001' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction HalfWidthWithQuarterOffsetDemo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'}>\n        <Column width={'half'} offset={'one-quarter'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-half'}</code>\n            <br /> <code className={'html'}>{'is-offset-one-quarter'}</code>\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HalfWidthWithQuarterOffsetDemo,
} satisfies StoryObj

export const ThreeFifthsWithFifthOffsetStory = {
  name: 'Three-fifths with fifth offset',
  parameters: {
    official: { id: 'columns-sizes/offset/002' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction ThreeFifthsWithFifthOffsetDemo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'}>\n        <Column width={'three-fifths'} offset={'one-fifth'}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-three-fifths'}</code>\n            <br /> <code className={'html'}>{'is-offset-one-fifth'}</code>\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ThreeFifthsWithFifthOffsetDemo,
} satisfies StoryObj

export const Width4WithOffset8Story = {
  name: 'Width 4 with offset 8',
  parameters: {
    official: { id: 'columns-sizes/offset/003' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction Width4WithOffset8Demo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'}>\n        <Column width={4} offset={8}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-4'}</code>\n            <br /> <code className={'html'}>{'is-offset-8'}</code>\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width4WithOffset8Demo,
} satisfies StoryObj

export const Width11WithOffset1Story = {
  name: 'Width 11 with offset 1',
  parameters: {
    official: { id: 'columns-sizes/offset/004' },
    docs: {
      source: {
        code: "import { Column, Columns } from '@seagreenio/react-bulma'\n\nfunction Width11WithOffset1Demo() {\n  return (\n    <>\n      <Columns displayFrom={'mobile'}>\n        <Column width={11} offset={1}>\n          <p className={'bd-notification is-primary'}>\n            <code className={'html'}>{'is-11'}</code>\n            <br /> <code className={'html'}>{'is-offset-1'}</code>\n          </p>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Width11WithOffset1Demo,
} satisfies StoryObj

export const NarrowAndFlexibleColumnsStory = {
  name: 'Narrow and flexible columns',
  parameters: {
    official: { id: 'columns-sizes/narrow-column/001' },
    docs: {
      source: {
        code: "import { Box, Column, Columns, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction NarrowAndFlexibleColumnsDemo() {\n  return (\n    <>\n      <Columns>\n        <Column width={'narrow'}>\n          <Box style={{ ...{ width: '200px' } }}>\n            <Title size={5} as={'p'}>\n              Narrow column\n            </Title>\n            <Subtitle as={'p'}>This column is only 200px wide.</Subtitle>\n          </Box>\n        </Column>\n        <Column>\n          <Box>\n            <Title size={5} as={'p'}>\n              Flexible column\n            </Title>\n            <Subtitle as={'p'}>\n              This column will take up the remaining space available.\n            </Subtitle>\n          </Box>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NarrowAndFlexibleColumnsDemo,
} satisfies StoryObj

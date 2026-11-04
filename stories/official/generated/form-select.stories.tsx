import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-select',
      title: 'Select',
      url: 'https://bulma.io/documentation/form/select/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-select',
  title: 'CSS Library/Form/Select',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-select" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Select'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The browser built-in '}
          <strong data-official-prose="">{'select dropdown'}</strong>
          {', styled accordingly'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'select'}</code>
            {' class is a simple wrapper around the '}
            <code data-official-prose="">{'<select>'}</code>
            {
              ' HTML element, which gives\n    the styling more flexibility and support for icons.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-select/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Several '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' are supported which affect:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#colors'}>
                  {'color'}
                </a>
              </strong>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#sizes'}>
                  {'size'}
                </a>
              </strong>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#states'}>
                  {'state'}
                </a>
              </strong>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'multiple-select'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Multiple select\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#multiple-select'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-example="form-select/multiple-select/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Colors\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#colors'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/colors/001">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/colors/002">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/colors/003">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/colors/004">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/colors/005">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/colors/006">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'styles'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Styles\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#styles'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can create a '}
            <strong data-official-prose="">{'rounded dropdown'}</strong>
            {' by appending the '}
            <code data-official-prose="">{'is-rounded'}</code>
            {' modifier:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-select/styles/001">
          <Canvas of={Example009} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Sizes\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sizes'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'select'}</code>
            {' element comes in '}
            <strong data-official-prose="">{'4'}</strong>
            {' different sizes:'}
          </p>
          {'\n'}
        </div>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/sizes/001">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/sizes/002">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/sizes/003">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-select/sizes/004">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'states'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    States\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#states'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Bulma styles the different '}
            <strong data-official-prose="">{'states'}</strong>
            {' of the '}
            <code data-official-prose="">{'select'}</code>
            {
              ' element. Each state is available as a\n    pseudo-class and a CSS class:\n  '
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{':hover'}</code>
              {' and '}
              <code data-official-prose="">{'is-hovered'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{':focus'}</code>
              {' and '}
              <code data-official-prose="">{'is-focused'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{':active'}</code>
              {' and '}
              <code data-official-prose="">{'is-active'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {
              'This allows you to obtain the style of a certain state without having to trigger it.'
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Normal'}
        </h4>
        {'\n\n'}
        <div data-official-example="form-select/normal/001">
          <Canvas of={Example014} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Hover'}
        </h4>
        {'\n'}
        <div data-official-example="form-select/hover/001">
          <Canvas of={Example015} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Focus'}
        </h4>
        {'\n'}
        <div data-official-example="form-select/focus/001">
          <Canvas of={Example016} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Loading'}
        </h4>
        {'\n'}
        <div data-official-example="form-select/loading/001">
          <Canvas of={Example017} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'with-icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    With icons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#with-icons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can append the '}
            <strong data-official-prose="">{'modifier'}</strong>
            {' on a control:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'You also need to add a modifier on the '}
            <strong data-official-prose="">{'icon'}</strong>
            {':'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-left'}</code>
              {' since '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {' is used'}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'The size of the '}
            <strong data-official-prose="">{'select'}</strong>
            {' will define the size of the icon container.'}
          </p>
          {'\n'}
        </div>
        {'\n'}
        <div data-official-example="form-select/with-icons/001">
          <Canvas of={Example018} />
        </div>
        {'\n\n'}
        <div data-official-example="form-select/with-icons/002">
          <Canvas of={Example019} />
        </div>
        {'\n\n'}
        <div data-official-example="form-select/with-icons/003">
          <Canvas of={Example020} />
        </div>
        {'\n\n'}
        <div data-official-example="form-select/with-icons/004">
          <Canvas of={Example021} />
        </div>
        {'\n\n'}
        <div data-official-example="form-select/with-icons/005">
          <Canvas of={Example022} />
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
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Select>
            {'\n    '}
            <option>{'Select dropdown'}</option>
            {'\n    '}
            <option>{'With options'}</option>
            {'\n  '}
          </ui.Select>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="select">\n  <select>\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'\n        You can style a '}
              <strong>{'multiple select'}</strong>
              {' dropdown, by using the '}
              <code>{'is-multiple'}</code>
              {' modifier, and\n        by using the '}
              <code>{'multiple'}</code>
              {' HTML attribute.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    \n'}
          <ui.Select multiple htmlSize={8}>
            {'\n    '}
            <option value={'Argentina'}>{'Argentina'}</option>
            {'\n    '}
            <option value={'Bolivia'}>{'Bolivia'}</option>
            {'\n    '}
            <option value={'Brazil'}>{'Brazil'}</option>
            {'\n    '}
            <option value={'Chile'}>{'Chile'}</option>
            {'\n    '}
            <option value={'Colombia'}>{'Colombia'}</option>
            {'\n    '}
            <option value={'Ecuador'}>{'Ecuador'}</option>
            {'\n    '}
            <option value={'Guyana'}>{'Guyana'}</option>
            {'\n    '}
            <option value={'Paraguay'}>{'Paraguay'}</option>
            {'\n    '}
            <option value={'Peru'}>{'Peru'}</option>
            {'\n    '}
            <option value={'Suriname'}>{'Suriname'}</option>
            {'\n    '}
            <option value={'Uruguay'}>{'Uruguay'}</option>
            {'\n    '}
            <option value={'Venezuela'}>{'Venezuela'}</option>
            {'\n  '}
          </ui.Select>
          {'\n\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="select is-multiple">\n  <select multiple size="8">\n    <option value="Argentina">Argentina</option>\n    <option value="Bolivia">Bolivia</option>\n    <option value="Brazil">Brazil</option>\n    <option value="Chile">Chile</option>\n    <option value="Colombia">Colombia</option>\n    <option value="Ecuador">Ecuador</option>\n    <option value="Guyana">Guyana</option>\n    <option value="Paraguay">Paraguay</option>\n    <option value="Peru">Peru</option>\n    <option value="Suriname">Suriname</option>\n    <option value="Uruguay">Uruguay</option>\n    <option value="Venezuela">Venezuela</option>\n  </select>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select color={'link'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select color={'primary'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select color={'info'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select color={'success'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select color={'warning'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select color={'danger'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Select rounded>
            {'\n    '}
            <option>{'Rounded dropdown'}</option>
            {'\n    '}
            <option>{'With options'}</option>
            {'\n  '}
          </ui.Select>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="select is-rounded">\n  <select>\n    <option>Rounded dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select size={'small'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select size={'normal'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select size={'medium'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Select size={'large'}>
        {'\n    '}
        <option>{'Select dropdown'}</option>
        {'\n    '}
        <option>{'With options'}</option>
        {'\n  '}
      </ui.Select>
      {'\n\n        \n      '}
    </>
  )
}

function Example014Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Select>
            {'\n    '}
            <option>{'Select dropdown'}</option>
            {'\n    '}
            <option>{'With options'}</option>
            {'\n  '}
          </ui.Select>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="select">\n  <select>\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example015Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Select className={'rb-is-hovered'}>
            {'\n    '}
            <option>{'Select dropdown'}</option>
            {'\n    '}
            <option>{'With options'}</option>
            {'\n  '}
          </ui.Select>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="select">\n  <select class="is-hovered">\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example016Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Select className={'rb-is-focused'}>
            {'\n    '}
            <option>{'Select dropdown'}</option>
            {'\n    '}
            <option>{'With options'}</option>
            {'\n  '}
          </ui.Select>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="select">\n  <select class="is-focused">\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example017Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Select loading>
            {'\n    '}
            <option>{'Select dropdown'}</option>
            {'\n    '}
            <option>{'With options'}</option>
            {'\n  '}
          </ui.Select>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="select is-loading">\n  <select>\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example018Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control icons={'left'}>
            {'\n  '}
            <ui.Select defaultValue={'Country'}>
              {'\n      '}
              <option>{'Country'}</option>
              {'\n      '}
              <option>{'Select dropdown'}</option>
              {'\n      '}
              <option>{'With options'}</option>
              {'\n    '}
            </ui.Select>
            {'\n  '}
            <ui.Icon size={'small'} className={'rb-is-left'} as={'div'}>
              {'\n    '}
              <i className={'fas fa-globe'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left">\n  <div class="select">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <div class="icon is-small is-left">\n    <i class="fas fa-globe"></i>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example019Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {
                '\n        If the control contains an icon, Bulma will make sure the icon remains\n        '
              }
              <strong>{'centered'}</strong>
              {', no matter the size of the input '}
              <em>{'or'}</em>
              {' of the icon.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    \n'}
          <ui.Control icons={'left'}>
            {'\n  '}
            <ui.Select size={'small'} defaultValue={'Country'}>
              {'\n      '}
              <option>{'Country'}</option>
              {'\n      '}
              <option>{'Select dropdown'}</option>
              {'\n      '}
              <option>{'With options'}</option>
              {'\n    '}
            </ui.Select>
            {'\n  '}
            <ui.Icon size={'small'} className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-globe'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left">\n  <div class="select is-small">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-small is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example020Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control icons={'left'}>
            {'\n  '}
            <ui.Select defaultValue={'Country'}>
              {'\n      '}
              <option>{'Country'}</option>
              {'\n      '}
              <option>{'Select dropdown'}</option>
              {'\n      '}
              <option>{'With options'}</option>
              {'\n    '}
            </ui.Select>
            {'\n  '}
            <ui.Icon className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-globe'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left">\n  <div class="select">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example021Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control icons={'left'}>
            {'\n  '}
            <ui.Select size={'medium'} defaultValue={'Country'}>
              {'\n      '}
              <option>{'Country'}</option>
              {'\n      '}
              <option>{'Select dropdown'}</option>
              {'\n      '}
              <option>{'With options'}</option>
              {'\n    '}
            </ui.Select>
            {'\n  '}
            <ui.Icon size={'medium'} className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-globe'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left">\n  <div class="select is-medium">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-medium is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example022Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control icons={'left'}>
            {'\n  '}
            <ui.Select size={'large'} defaultValue={'Country'}>
              {'\n      '}
              <option>{'Country'}</option>
              {'\n      '}
              <option>{'Select dropdown'}</option>
              {'\n      '}
              <option>{'With options'}</option>
              {'\n    '}
            </ui.Select>
            {'\n  '}
            <ui.Icon size={'large'} className={'rb-is-left'}>
              {'\n    '}
              <i className={'fas fa-globe'} />
              {'\n  '}
            </ui.Icon>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control has-icons-left">\n  <div class="select is-large">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-large is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Default select',
  parameters: {
    official: { id: 'form-select/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Select>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"select\\">\\n  <select>\\n    <option>Select dropdown</option>\\n    <option>With options</option>\\n  </select>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Multiple selection',
  parameters: {
    official: { id: 'form-select/multiple-select/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        You can style a "}<strong>{"multiple select"}</strong>{" dropdown, by using the "}<code>{"is-multiple"}</code>{" modifier, and\\n        by using the "}<code>{"multiple"}</code>{" HTML attribute.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    \\n"}<ui.Select multiple htmlSize={8}>{"\\n    "}<option value={"Argentina"}>{"Argentina"}</option>{"\\n    "}<option value={"Bolivia"}>{"Bolivia"}</option>{"\\n    "}<option value={"Brazil"}>{"Brazil"}</option>{"\\n    "}<option value={"Chile"}>{"Chile"}</option>{"\\n    "}<option value={"Colombia"}>{"Colombia"}</option>{"\\n    "}<option value={"Ecuador"}>{"Ecuador"}</option>{"\\n    "}<option value={"Guyana"}>{"Guyana"}</option>{"\\n    "}<option value={"Paraguay"}>{"Paraguay"}</option>{"\\n    "}<option value={"Peru"}>{"Peru"}</option>{"\\n    "}<option value={"Suriname"}>{"Suriname"}</option>{"\\n    "}<option value={"Uruguay"}>{"Uruguay"}</option>{"\\n    "}<option value={"Venezuela"}>{"Venezuela"}</option>{"\\n  "}</ui.Select>{"\\n\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"half"} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"select is-multiple\\">\\n  <select multiple size=\\"8\\">\\n    <option value=\\"Argentina\\">Argentina</option>\\n    <option value=\\"Bolivia\\">Bolivia</option>\\n    <option value=\\"Brazil\\">Brazil</option>\\n    <option value=\\"Chile\\">Chile</option>\\n    <option value=\\"Colombia\\">Colombia</option>\\n    <option value=\\"Ecuador\\">Ecuador</option>\\n    <option value=\\"Guyana\\">Guyana</option>\\n    <option value=\\"Paraguay\\">Paraguay</option>\\n    <option value=\\"Peru\\">Peru</option>\\n    <option value=\\"Suriname\\">Suriname</option>\\n    <option value=\\"Uruguay\\">Uruguay</option>\\n    <option value=\\"Venezuela\\">Venezuela</option>\\n  </select>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Link select',
  parameters: {
    official: { id: 'form-select/colors/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select color={"link"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Primary select',
  parameters: {
    official: { id: 'form-select/colors/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select color={"primary"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Info select',
  parameters: {
    official: { id: 'form-select/colors/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select color={"info"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Success select',
  parameters: {
    official: { id: 'form-select/colors/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select color={"success"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Warning select',
  parameters: {
    official: { id: 'form-select/colors/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select color={"warning"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Danger select',
  parameters: {
    official: { id: 'form-select/colors/006' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select color={"danger"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Rounded select',
  parameters: {
    official: { id: 'form-select/styles/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example009Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Select rounded>{"\\n    "}<option>{"Rounded dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"select is-rounded\\">\\n  <select>\\n    <option>Rounded dropdown</option>\\n    <option>With options</option>\\n  </select>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Small select',
  parameters: {
    official: { id: 'form-select/sizes/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select size={"small"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Normal size select',
  parameters: {
    official: { id: 'form-select/sizes/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select size={"normal"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Medium select',
  parameters: {
    official: { id: 'form-select/sizes/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select size={"medium"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Large select',
  parameters: {
    official: { id: 'form-select/sizes/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example013Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Select size={"large"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Normal state',
  parameters: {
    official: { id: 'form-select/normal/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example014Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Select>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"select\\">\\n  <select>\\n    <option>Select dropdown</option>\\n    <option>With options</option>\\n  </select>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Hover state',
  parameters: {
    official: { id: 'form-select/hover/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example015Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Select className={"rb-is-hovered"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"select\\">\\n  <select class=\\"is-hovered\\">\\n    <option>Select dropdown</option>\\n    <option>With options</option>\\n  </select>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Focus state',
  parameters: {
    official: { id: 'form-select/focus/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example016Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Select className={"rb-is-focused"}>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"select\\">\\n  <select class=\\"is-focused\\">\\n    <option>Select dropdown</option>\\n    <option>With options</option>\\n  </select>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Loading select',
  parameters: {
    official: { id: 'form-select/loading/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example017Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Select loading>{"\\n    "}<option>{"Select dropdown"}</option>{"\\n    "}<option>{"With options"}</option>{"\\n  "}</ui.Select>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"select is-loading\\">\\n  <select>\\n    <option>Select dropdown</option>\\n    <option>With options</option>\\n  </select>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example018Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control icons={"left"}>{"\\n  "}<ui.Select defaultValue={"Country"}>{"\\n      "}<option>{"Country"}</option>{"\\n      "}<option>{"Select dropdown"}</option>{"\\n      "}<option>{"With options"}</option>{"\\n    "}</ui.Select>{"\\n  "}<ui.Icon size={"small"} className={"rb-is-left"} as={"div"}>{"\\n    "}<i className={"fas fa-globe"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left\\">\\n  <div class=\\"select\\">\\n    <select>\\n      <option selected>Country</option>\\n      <option>Select dropdown</option>\\n      <option>With options</option>\\n    </select>\\n  </div>\\n  <div class=\\"icon is-small is-left\\">\\n    <i class=\\"fas fa-globe\\"></i>\\n  </div>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'Small select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example019Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        If the control contains an icon, Bulma will make sure the icon remains\\n        "}<strong>{"centered"}</strong>{", no matter the size of the input "}<em>{"or"}</em>{" of the icon.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    \\n"}<ui.Control icons={"left"}>{"\\n  "}<ui.Select size={"small"} defaultValue={"Country"}>{"\\n      "}<option>{"Country"}</option>{"\\n      "}<option>{"Select dropdown"}</option>{"\\n      "}<option>{"With options"}</option>{"\\n    "}</ui.Select>{"\\n  "}<ui.Icon size={"small"} className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-globe"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left\\">\\n  <div class=\\"select is-small\\">\\n    <select>\\n      <option selected>Country</option>\\n      <option>Select dropdown</option>\\n      <option>With options</option>\\n    </select>\\n  </div>\\n  <span class=\\"icon is-small is-left\\">\\n    <i class=\\"fas fa-globe\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'Normal select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example020Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control icons={"left"}>{"\\n  "}<ui.Select defaultValue={"Country"}>{"\\n      "}<option>{"Country"}</option>{"\\n      "}<option>{"Select dropdown"}</option>{"\\n      "}<option>{"With options"}</option>{"\\n    "}</ui.Select>{"\\n  "}<ui.Icon className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-globe"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left\\">\\n  <div class=\\"select\\">\\n    <select>\\n      <option selected>Country</option>\\n      <option>Select dropdown</option>\\n      <option>With options</option>\\n    </select>\\n  </div>\\n  <span class=\\"icon is-left\\">\\n    <i class=\\"fas fa-globe\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

export const Example021 = {
  name: 'Medium select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example021Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control icons={"left"}>{"\\n  "}<ui.Select size={"medium"} defaultValue={"Country"}>{"\\n      "}<option>{"Country"}</option>{"\\n      "}<option>{"Select dropdown"}</option>{"\\n      "}<option>{"With options"}</option>{"\\n    "}</ui.Select>{"\\n  "}<ui.Icon size={"medium"} className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-globe"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left\\">\\n  <div class=\\"select is-medium\\">\\n    <select>\\n      <option selected>Country</option>\\n      <option>Select dropdown</option>\\n      <option>With options</option>\\n    </select>\\n  </div>\\n  <span class=\\"icon is-medium is-left\\">\\n    <i class=\\"fas fa-globe\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example021Demo,
} satisfies StoryObj

export const Example022 = {
  name: 'Large select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example022Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control icons={"left"}>{"\\n  "}<ui.Select size={"large"} defaultValue={"Country"}>{"\\n      "}<option>{"Country"}</option>{"\\n      "}<option>{"Select dropdown"}</option>{"\\n      "}<option>{"With options"}</option>{"\\n    "}</ui.Select>{"\\n  "}<ui.Icon size={"large"} className={"rb-is-left"}>{"\\n    "}<i className={"fas fa-globe"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control has-icons-left\\">\\n  <div class=\\"select is-large\\">\\n    <select>\\n      <option selected>Country</option>\\n      <option>Select dropdown</option>\\n      <option>With options</option>\\n    </select>\\n  </div>\\n  <span class=\\"icon is-large is-left\\">\\n    <i class=\\"fas fa-globe\\"></i>\\n  </span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example022Demo,
} satisfies StoryObj

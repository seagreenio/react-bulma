import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

const meta = {
  ...officialPage(
    {
      id: 'form-textarea',
      title: 'Textarea',
      url: 'https://bulma.io/documentation/form/textarea/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-textarea',
  title: 'CSS Library/Form/Textarea',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-textarea" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Textarea'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The multiline '}
          <strong data-official-prose="">{'textarea'}</strong>
          {' and its variations'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The Bulma '}
            <code data-official-prose="">{'textarea'}</code>
            {' CSS class is the multiline version of the\n    '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/form/input/'}
            >
              <code data-official-prose="">{'input'}</code>
              {' element'}
            </a>
            {':\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can set the height of the textarea using the '}
            <code data-official-prose="">{'rows'}</code>
            {' HTML attribute.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
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
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'textarea'}</code>
            {' element is available in several colors:'}
          </p>
          {'\n'}
        </div>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/colors/001">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/colors/002">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/colors/003">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/colors/004">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/colors/005">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/colors/006">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
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
            {'\n    The '}
            <code data-official-prose="">{'textarea'}</code>
            {' element comes in\n    '}
            <strong data-official-prose="">{'4 different sizes:'}</strong>
            {'\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/sizes/001">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
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
            <code data-official-prose="">{'textarea'}</code>
            {
              ' element. Each state is available as\n    a pseudo-class and a CSS class:\n  '
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
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/normal/001">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Hover'}
        </h4>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/hover/001">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Focus'}
        </h4>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/focus/001">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Loading'}
        </h4>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/loading/001">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-example="form-textarea/loading/002">
          <Canvas of={Example014} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Disabled'}
        </h4>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/disabled/001">
          <Canvas of={Example015} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Readonly'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you use the '}
            <code data-official-prose="">{'readonly'}</code>
            {
              ' HTML attribute, the textarea will look similar to a normal one, but is not\n    editable and has no shadow.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/readonly/001">
          <Canvas of={Example016} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Fixed Size'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can disable a '}
            <code data-official-prose="">{'textarea'}</code>
            {' resizing by appending the '}
            <code data-official-prose="">{'has-fixed-size'}</code>
            {' modifier:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-textarea/fixed-size/001">
          <Canvas of={Example017} />
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
                        {'$textarea-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-textarea-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-padding-horizontal)'}
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
                        {'$textarea-max-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-textarea-max-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'40em'}
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
                        {'$textarea-min-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-textarea-min-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'8em'}
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
      <ui.Textarea placeholder={'e.g. Hello world'} defaultValue={''} />
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea
        placeholder={'10 lines of textarea'}
        rows={10}
        defaultValue={''}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea
        placeholder={'Link textarea'}
        color={'link'}
        defaultValue={''}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea
        placeholder={'Primary textarea'}
        color={'primary'}
        defaultValue={''}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea
        placeholder={'Info textarea'}
        color={'info'}
        defaultValue={''}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea
        placeholder={'Success textarea'}
        color={'success'}
        defaultValue={''}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea
        placeholder={'Warning textarea'}
        color={'warning'}
        defaultValue={''}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Textarea
        placeholder={'Danger textarea'}
        color={'danger'}
        defaultValue={''}
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Field>
        {'\n  '}
        <ui.Control>
          {'\n    '}
          <ui.Textarea
            placeholder={'Small textarea'}
            size={'small'}
            defaultValue={''}
          />
          {'\n  '}
        </ui.Control>
        {'\n'}
      </ui.Field>
      {'\n'}
      <ui.Field>
        {'\n  '}
        <ui.Control>
          {'\n    '}
          <ui.Textarea placeholder={'Normal textarea'} defaultValue={''} />
          {'\n  '}
        </ui.Control>
        {'\n'}
      </ui.Field>
      {'\n'}
      <ui.Field>
        {'\n  '}
        <ui.Control>
          {'\n    '}
          <ui.Textarea
            placeholder={'Medium textarea'}
            size={'medium'}
            defaultValue={''}
          />
          {'\n  '}
        </ui.Control>
        {'\n'}
      </ui.Field>
      {'\n'}
      <ui.Field>
        {'\n  '}
        <ui.Control>
          {'\n    '}
          <ui.Textarea
            placeholder={'Large textarea'}
            size={'large'}
            defaultValue={''}
          />
          {'\n  '}
        </ui.Control>
        {'\n'}
      </ui.Field>
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Control>
        {'\n  '}
        <ui.Textarea placeholder={'Normal textarea'} defaultValue={''} />
        {'\n'}
      </ui.Control>
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Control>
        {'\n  '}
        <ui.Textarea
          placeholder={'Hovered textarea'}
          state={'hovered'}
          defaultValue={''}
        />
        {'\n'}
      </ui.Control>
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Control>
        {'\n  '}
        <ui.Textarea
          placeholder={'Focused textarea'}
          state={'focused'}
          defaultValue={''}
        />
        {'\n'}
      </ui.Control>
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Control loading>
        {'\n  '}
        <ui.Textarea placeholder={'Loading textarea'} defaultValue={''} />
        {'\n'}
      </ui.Control>
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
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'\n        You can resize the loading spinner by appending '}
              <code>{'is-small'}</code>
              {', '}
              <code>{'is-medium'}</code>
              {' or\n        '}
              <code>{'is-large'}</code>
              {' to the '}
              <code>{'control'}</code>
              {' container.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    \n'}
          <ui.Field>
            {'\n  '}
            <ui.Control size={'small'} loading>
              {'\n    '}
              <ui.Textarea
                placeholder={'Small loading textarea'}
                size={'small'}
                defaultValue={''}
              />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control loading>
              {'\n    '}
              <ui.Textarea
                placeholder={'Normal loading textarea'}
                defaultValue={''}
              />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control size={'medium'} loading>
              {'\n    '}
              <ui.Textarea
                placeholder={'Medium loading textarea'}
                size={'medium'}
                defaultValue={''}
              />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n'}
          <ui.Field>
            {'\n  '}
            <ui.Control size={'large'} loading>
              {'\n    '}
              <ui.Textarea
                placeholder={'Large loading textarea'}
                size={'large'}
                defaultValue={''}
              />
              {'\n  '}
            </ui.Control>
            {'\n'}
          </ui.Field>
          {'\n\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="field">\n  <div class="control is-small is-loading">\n    <textarea\n      class="textarea is-small"\n      placeholder="Small loading textarea"\n    ></textarea>\n  </div>\n</div>\n<div class="field">\n  <div class="control is-loading">\n    <textarea class="textarea" placeholder="Normal loading textarea"></textarea>\n  </div>\n</div>\n<div class="field">\n  <div class="control is-medium is-loading">\n    <textarea\n      class="textarea is-medium"\n      placeholder="Medium loading textarea"\n    ></textarea>\n  </div>\n</div>\n<div class="field">\n  <div class="control is-large is-loading">\n    <textarea\n      class="textarea is-large"\n      placeholder="Large loading textarea"\n    ></textarea>\n  </div>\n</div>\n'
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
      {'\n        \n          \n'}
      <ui.Control>
        {'\n  '}
        <ui.Textarea
          placeholder={'Disabled textarea'}
          disabled
          defaultValue={''}
        />
        {'\n'}
      </ui.Control>
      {'\n\n        \n      '}
    </>
  )
}

function Example016Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Control>
        {'\n  '}
        <ui.Textarea readOnly defaultValue={'This content is readonly'} />
        {'\n'}
      </ui.Control>
      {'\n\n        \n      '}
    </>
  )
}

function Example017Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Control>
        {'\n  '}
        <ui.Textarea
          placeholder={'Fixed size textarea'}
          fixedSize
          defaultValue={''}
        />
        {'\n'}
      </ui.Control>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Default textarea',
  parameters: {
    official: { id: 'form-textarea/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"e.g. Hello world"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Textarea with ten rows',
  parameters: {
    official: { id: 'form-textarea/basic/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"10 lines of textarea"} rows={10} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Link textarea',
  parameters: {
    official: { id: 'form-textarea/colors/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"Link textarea"} color={"link"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Primary textarea',
  parameters: {
    official: { id: 'form-textarea/colors/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"Primary textarea"} color={"primary"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Info textarea',
  parameters: {
    official: { id: 'form-textarea/colors/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"Info textarea"} color={"info"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Success textarea',
  parameters: {
    official: { id: 'form-textarea/colors/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"Success textarea"} color={"success"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Warning textarea',
  parameters: {
    official: { id: 'form-textarea/colors/005' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"Warning textarea"} color={"warning"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Danger textarea',
  parameters: {
    official: { id: 'form-textarea/colors/006' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Textarea placeholder={"Danger textarea"} color={"danger"} defaultValue={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Textarea sizes',
  parameters: {
    official: { id: 'form-textarea/sizes/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Field>{"\\n  "}<ui.Control>{"\\n    "}<ui.Textarea placeholder={"Small textarea"} size={"small"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control>{"\\n    "}<ui.Textarea placeholder={"Normal textarea"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control>{"\\n    "}<ui.Textarea placeholder={"Medium textarea"} size={"medium"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control>{"\\n    "}<ui.Textarea placeholder={"Large textarea"} size={"large"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Normal state',
  parameters: {
    official: { id: 'form-textarea/normal/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Control>{"\\n  "}<ui.Textarea placeholder={"Normal textarea"} defaultValue={""} />{"\\n"}</ui.Control>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Hover state',
  parameters: {
    official: { id: 'form-textarea/hover/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Control>{"\\n  "}<ui.Textarea placeholder={"Hovered textarea"} state={"hovered"} defaultValue={""} />{"\\n"}</ui.Control>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Focus state',
  parameters: {
    official: { id: 'form-textarea/focus/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Control>{"\\n  "}<ui.Textarea placeholder={"Focused textarea"} state={"focused"} defaultValue={""} />{"\\n"}</ui.Control>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Loading textarea',
  parameters: {
    official: { id: 'form-textarea/loading/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example013Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Control loading>{"\\n  "}<ui.Textarea placeholder={"Loading textarea"} defaultValue={""} />{"\\n"}</ui.Control>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Loading spinner sizes',
  parameters: {
    official: { id: 'form-textarea/loading/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example014Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        You can resize the loading spinner by appending "}<code>{"is-small"}</code>{", "}<code>{"is-medium"}</code>{" or\\n        "}<code>{"is-large"}</code>{" to the "}<code>{"control"}</code>{" container.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    \\n"}<ui.Field>{"\\n  "}<ui.Control size={"small"} loading>{"\\n    "}<ui.Textarea placeholder={"Small loading textarea"} size={"small"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control loading>{"\\n    "}<ui.Textarea placeholder={"Normal loading textarea"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control size={"medium"} loading>{"\\n    "}<ui.Textarea placeholder={"Medium loading textarea"} size={"medium"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}<ui.Field>{"\\n  "}<ui.Control size={"large"} loading>{"\\n    "}<ui.Textarea placeholder={"Large loading textarea"} size={"large"} defaultValue={""} />{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n\\n  "}</ui.Column>{"\\n  "}<ui.Column width={"half"} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"field\\">\\n  <div class=\\"control is-small is-loading\\">\\n    <textarea\\n      class=\\"textarea is-small\\"\\n      placeholder=\\"Small loading textarea\\"\\n    ></textarea>\\n  </div>\\n</div>\\n<div class=\\"field\\">\\n  <div class=\\"control is-loading\\">\\n    <textarea class=\\"textarea\\" placeholder=\\"Normal loading textarea\\"></textarea>\\n  </div>\\n</div>\\n<div class=\\"field\\">\\n  <div class=\\"control is-medium is-loading\\">\\n    <textarea\\n      class=\\"textarea is-medium\\"\\n      placeholder=\\"Medium loading textarea\\"\\n    ></textarea>\\n  </div>\\n</div>\\n<div class=\\"field\\">\\n  <div class=\\"control is-large is-loading\\">\\n    <textarea\\n      class=\\"textarea is-large\\"\\n      placeholder=\\"Large loading textarea\\"\\n    ></textarea>\\n  </div>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Disabled textarea',
  parameters: {
    official: { id: 'form-textarea/disabled/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example015Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Control>{"\\n  "}<ui.Textarea placeholder={"Disabled textarea"} disabled defaultValue={""} />{"\\n"}</ui.Control>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Read-only textarea',
  parameters: {
    official: { id: 'form-textarea/readonly/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example016Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Control>{"\\n  "}<ui.Textarea readOnly defaultValue={"This content is readonly"} />{"\\n"}</ui.Control>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Fixed-size textarea',
  parameters: {
    official: { id: 'form-textarea/fixed-size/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example017Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Control>{"\\n  "}<ui.Textarea placeholder={"Fixed size textarea"} fixedSize defaultValue={""} />{"\\n"}</ui.Control>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-button',
      title: 'Button',
      url: 'https://bulma.io/documentation/elements/button/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-button',
  title: 'CSS Library/Elements/Button',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-button" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Button'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The classic '}
          <strong data-official-prose="">{'button'}</strong>
          {', in different colors, sizes, and states'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <strong data-official-prose="">{'button'}</strong>
            {
              " is an essential element of any design. It's meant to look and behave as an\n    "
            }
            <strong data-official-prose="">{'interactive'}</strong>
            {' element of your page.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'button'}</code>
            {' class can be used on:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<a>'}</code>
              {' anchor links'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<button>'}</code>
              {' form buttons'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<input type="submit">'}</code>
              {' submit inputs'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<input type="reset">'}</code>
              {' reset inputs'}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/basic/002">
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
            {'\n    The button is available in all the '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the\n    '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/colors/001">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/colors/002">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Each color also comes in its '}
            <strong data-official-prose="">{'light version'}</strong>
            {'. Simply append the modifier '}
            <code data-official-prose="">{'is-light'}</code>
            {
              ' to the\n    color modifier to apply the light version of the button.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/colors/003">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'A '}
            <strong data-official-prose="">{'dark version'}</strong>
            {' also exists. Simply append the modifier '}
            <code data-official-prose="">{'is-dark'}</code>
            {'.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/colors/004">
          <Canvas of={Example006} />
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
            {'The button comes in '}
            <strong data-official-prose="">{'4 different sizes:'}</strong>
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">{'small'}</li>
            {'\n    '}
            <li data-official-prose="">{'normal'}</li>
            {'\n    '}
            <li data-official-prose="">{'medium'}</li>
            {'\n    '}
            <li data-official-prose="">{'large'}</li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    While the default size is the '}
            <strong data-official-prose="">{'normal'}</strong>
            {' one, the '}
            <code data-official-prose="">{'is-normal'}</code>
            {
              ' modifier exists in case you\n    need to reset the button to its normal size.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/sizes/001">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can change the size of '}
            <strong data-official-prose="">{'multiple buttons'}</strong>
            {' at once by wrapping them in a\n    '}
            <code data-official-prose="">{'buttons'}</code>
            {' parent, and applying one of 3 modifiers:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'buttons are-small'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'buttons are-medium'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'buttons are-large'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/sizes/002">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can change the size of only a '}
            <strong data-official-prose="">{'subset of buttons'}</strong>
            {' by simply applying a modifier class to them.\n    '}
            <br data-official-prose="" />
            {'\n    For example, if you want all buttons to be '}
            <strong data-official-prose="">{'small'}</strong>
            {' but still have one in its\n    '}
            <strong data-official-prose="">{'normal'}</strong>
            {' size, simply do the following:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/sizes/003">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'responsive-sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Responsive sizes\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#responsive-sizes'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              "\n    If you want different button sizes for each breakpoint, you can use Bulma's\n    "
            }
            <strong data-official-prose="">{'responsive'}</strong>
            {' buttons. Simply append the '}
            <code data-official-prose="">{'is-responsive'}</code>
            {' modifier:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <thead data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Name'}</th>
              {'\n      '}
              <th data-official-prose="">{'Fixed size'}</th>
              {'\n      '}
              <th data-official-prose="">
                {'Responsive size '}
                <small
                  data-official-prose=""
                  className={'has-text-grey has-text-weight-normal'}
                >
                  {'(resize window to see in action)'}
                </small>
              </th>
              {'\n      '}
              <th data-official-prose="">{'Code'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    \n\n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">{'Default'}</td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <button data-official-prose="" className={'button is-default'}>
                  {'\n            Default\n          '}
                </button>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          \n'}
                <button
                  data-official-prose=""
                  className={'button is-responsive'}
                >
                  {'\n  Default\n'}
                </button>
                {'\n\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-responsive">\n  Default\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n        '}
              </td>
              {'\n      '}
            </tr>
            {'\n    \n\n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">{'Small'}</td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <button data-official-prose="" className={'button is-small'}>
                  {'\n            Small\n          '}
                </button>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          \n'}
                <button
                  data-official-prose=""
                  className={'button is-small is-responsive'}
                >
                  {'\n  Small\n'}
                </button>
                {'\n\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-small is-responsive">\n  Small\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n        '}
              </td>
              {'\n      '}
            </tr>
            {'\n    \n\n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">{'Normal'}</td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <button data-official-prose="" className={'button is-normal'}>
                  {'\n            Normal\n          '}
                </button>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          \n'}
                <button
                  data-official-prose=""
                  className={'button is-normal is-responsive'}
                >
                  {'\n  Normal\n'}
                </button>
                {'\n\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-normal is-responsive">\n  Normal\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n        '}
              </td>
              {'\n      '}
            </tr>
            {'\n    \n\n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">{'Medium'}</td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <button data-official-prose="" className={'button is-medium'}>
                  {'\n            Medium\n          '}
                </button>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          \n'}
                <button
                  data-official-prose=""
                  className={'button is-medium is-responsive'}
                >
                  {'\n  Medium\n'}
                </button>
                {'\n\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-medium is-responsive">\n  Medium\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n        '}
              </td>
              {'\n      '}
            </tr>
            {'\n    \n\n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">{'Large'}</td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <button data-official-prose="" className={'button is-large'}>
                  {'\n            Large\n          '}
                </button>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          \n'}
                <button
                  data-official-prose=""
                  className={'button is-large is-responsive'}
                >
                  {'\n  Large\n'}
                </button>
                {'\n\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-large is-responsive">\n  Large\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n        '}
              </td>
              {'\n      '}
            </tr>
            {'\n    \n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can customise the sizes by overwriting the\n    '}
            <code data-official-prose="">{'$button-responsive-sizes'}</code>
            {' Sass variable.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'displays'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Displays\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#displays'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/displays/001">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
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
        <h4 data-official-prose="" className={'subtitle'}>
          {'Outlined'}
        </h4>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/outlined/001">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {
            'Inverted (the text color becomes the background color, and vice-versa)'
          }
        </h4>
        {'\n\n'}
        <div data-official-example="elements-button/inverted-the-text-color-becomes-the-background-color-and-vice-versa/001">
          <Canvas of={Example012} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Rounded buttons'}
        </h4>
        {'\n\n'}
        <div data-official-example="elements-button/rounded-buttons/001">
          <Canvas of={Example013} />
        </div>
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
            {
              ' of its buttons. Each state is available as a pseudo-class and a\n    CSS class:\n  '
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
        <div data-official-example="elements-button/normal/001">
          <Canvas of={Example014} />
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
        <div data-official-example="elements-button/hover/001">
          <Canvas of={Example015} />
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
        <div data-official-example="elements-button/focus/001">
          <Canvas of={Example016} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Active'}
        </h4>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/active/001">
          <Canvas of={Example017} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Loading'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can very easily turn a button into its '}
            <strong data-official-prose="">{'loading'}</strong>
            {' version by appending the\n    '}
            <code data-official-prose="">{'is-loading'}</code>
            {
              " modifier. You don't even need to remove the inner text, which allows the button to maintain\n    its "
            }
            <strong data-official-prose="">{'original size'}</strong>
            {' between its default and loading states.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="elements-button/loading/001">
          <Canvas of={Example018} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" id={'static-button'} className={'subtitle'}>
          {'Static'}
        </h4>
        {'\n\n'}
        <div data-official-example="elements-button/static-button/001">
          <Canvas of={Example019} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'Disabled'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Bulma supports the use of the '}
            <code data-official-prose="">{'disabled'}</code>
            {'\n    '}
            <a
              data-official-prose=""
              href={
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
              }
              target={'_blank'}
            >
              {'Boolean HTML attribute'}
            </a>
            {', which prevents the user from interacting with the button.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="elements-button/disabled/001">
          <Canvas of={Example020} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'subtitle'}>
          {'With Font Awesome icons'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Bulma buttons can easily be enhanced by adding a\n    '}
            <strong data-official-prose="">{'Font Awesome icon'}</strong>
            {'. For the best results, wrap the inner text in a separate\n    '}
            <code data-official-prose="">{'<span>'}</code>
            {' element.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/with-font-awesome-icons/001">
          <Canvas of={Example021} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-example="elements-button/with-font-awesome-icons/002">
          <Canvas of={Example022} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'button-group'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Button group\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#button-group'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want to '}
            <strong data-official-prose="">{'group'}</strong>
            {' buttons together on a '}
            <strong data-official-prose="">{'single line'}</strong>
            {', use the\n    '}
            <code data-official-prose="">{'is-grouped'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'field'}</code>
            {' container:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/button-group/001">
          <Canvas of={Example023} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'button-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Button addons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#button-addons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want to use buttons as '}
            <strong data-official-prose="">{'addons'}</strong>
            {', use the '}
            <code data-official-prose="">{'has-addons'}</code>
            {' modifier on the\n    '}
            <code data-official-prose="">{'field'}</code>
            {' container:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/button-addons/001">
          <Canvas of={Example024} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'button-group-with-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Button group with addons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#button-group-with-addons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can group together addons as well:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-button/button-group-with-addons/001">
          <Canvas of={Example025} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'list-of-buttons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    List of buttons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-buttons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-example="elements-button/list-of-buttons/001">
          <Canvas of={Example026} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-button/list-of-buttons/002">
          <Canvas of={Example027} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-button/list-of-buttons/003">
          <Canvas of={Example028} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-button/list-of-buttons/004">
          <Canvas of={Example029} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-button/list-of-buttons/005">
          <Canvas of={Example030} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-info'}>
          {'\n  '}
          <div data-official-prose="" className={'message-header'}>
            {'\n    '}
            <p data-official-prose="">
              {'\n      Difference between\n      '}
              <a
                data-official-prose=""
                href={'https://bulma.io/documentation/form/general/#form-group'}
              >
                {'form groups'}
              </a>
              {'\n      and '}
              <strong data-official-prose="">{'list of buttons'}</strong>
              {'\n    '}
            </p>
            {'\n  '}
          </div>
          {'\n  '}
          <div data-official-prose="" className={'message-body'}>
            {'\n    '}
            <div data-official-prose="" className={'content'}>
              {'\n      '}
              <p data-official-prose="">
                {
                  '\n        While this list of buttons style can be achieved with either\n        '
                }
                <code data-official-prose="">{'field is-grouped'}</code>
                {' or the new '}
                <code data-official-prose="">{'buttons'}</code>
                {' class, there are a few differences:\n      '}
              </p>
              {'\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'buttons'}</code>
                  {' has a '}
                  <strong data-official-prose="">{'simpler markup'}</strong>
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'buttons'}</code>
                  {' can only contain '}
                  <code data-official-prose="">{'button'}</code>
                  {' elements'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'field is-grouped'}</code>
                  {' can contain '}
                  <em data-official-prose="">{'any'}</em>
                  {' type of '}
                  <code data-official-prose="">{'control'}</code>
                  {' inputs'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'field is-grouped'}</code>
                  {' can be forced to fit all controls on a\n          '}
                  <strong data-official-prose="">{'single line'}</strong>
                  {'\n        '}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'with '}
                  <code data-official-prose="">{'field is-grouped'}</code>
                  {' you can '}
                  <strong data-official-prose="">{'expand'}</strong>
                  {' one of the controls'}
                </li>
                {'\n      '}
              </ul>
              {'\n      '}
              <p data-official-prose="">
                {'\n        Basically, if you only want a list of '}
                <em data-official-prose="">{'buttons'}</em>
                {', using '}
                <code data-official-prose="">{'buttons'}</code>
                {
                  ' is recommended. If you need\n        more control on the styling and the elements, use a\n        '
                }
                <a
                  data-official-prose=""
                  href={
                    'https://bulma.io/documentation/form/general/#form-group'
                  }
                >
                  {'form group'}
                </a>
                {'.\n      '}
              </p>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
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
                        {'$button-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-medium)'}
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
                        {'$button-family'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-family)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'false'}
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
                        {'$button-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border)'}
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
                        {'$button-border-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-border-style)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'solid'}
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
                        {'$button-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-border-width)'}
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
                        {'$button-padding-vertical'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-padding-vertical)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5em'}
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
                        {'$button-padding-horizontal'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-padding-horizontal)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1em'}
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
                        {'$button-focus-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-focus-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-focus-border)'}
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
                        {'$button-focus-box-shadow-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-focus-box-shadow-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0 0 0.125em'}
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
                        {'$button-focus-box-shadow-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-focus-box-shadow-color)'}
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
                          'hsla(\n  var(--bulma-link-h),\n  var(--bulma-link-s),\n  var(--bulma-link-on-scheme-l),\n  0.25\n)'
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
                        {'$button-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-active-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-active)'}
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
                        {'$button-active-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-active-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-active-border)'}
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
                        {'$button-text-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-text-color)'}
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
                        {'$button-text-decoration'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-text-decoration)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'underline'}
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
                        {'$button-text-hover-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-text-hover-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-background)'}
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
                        {'$button-text-hover-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-text-hover-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-strong)'}
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
                        {'$button-ghost-background'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-ghost-background)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'none'}
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
                        {'$button-ghost-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-ghost-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'transparent'}
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
                        {'$button-ghost-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-ghost-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-text)'}
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
                        {'$button-ghost-decoration'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-ghost-decoration)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'none'}
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
                        {'$button-ghost-hover-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-ghost-hover-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link)'}
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
                        {'$button-ghost-hover-decoration'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-ghost-hover-decoration)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'underline'}
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
                        {'$button-disabled-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-disabled-background-color)'}
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
                        {'$button-disabled-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-disabled-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border)'}
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
                        {'$button-disabled-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-disabled-shadow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'none'}
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
                        {'$button-disabled-opacity'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-disabled-opacity)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5'}
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
                        {'$button-static-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-static-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-weak)'}
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
                        {'$button-static-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-static-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main-ter)'}
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
                        {'$button-static-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-button-static-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n      \n    '}
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
      <ui.Buttons>
        <ui.Button>Button</ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.LinkButton>Anchor</ui.LinkButton> <ui.Button>Button</ui.Button>{' '}
        <ui.Button type={'submit'} value={'Submit input'} as={'input'} />{' '}
        <ui.Button type={'reset'} value={'Reset input'} as={'input'} />
      </ui.Buttons>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button color={'white'}>White</ui.Button>{' '}
        <ui.Button color={'light'}>Light</ui.Button>{' '}
        <ui.Button color={'dark'}>Dark</ui.Button>{' '}
        <ui.Button color={'black'}>Black</ui.Button>{' '}
        <ui.Button variant={'text'}>Text</ui.Button>{' '}
        <ui.Button variant={'ghost'}>Ghost</ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button color={'primary'}>Primary</ui.Button>{' '}
        <ui.Button color={'link'}>Link</ui.Button>
      </ui.Buttons>{' '}
      <ui.Buttons>
        <ui.Button color={'info'}>Info</ui.Button>{' '}
        <ui.Button color={'success'}>Success</ui.Button>{' '}
        <ui.Button color={'warning'}>Warning</ui.Button>{' '}
        <ui.Button color={'danger'}>Danger</ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button color={'primary'} tone={'light'}>
          Primary
        </ui.Button>{' '}
        <ui.Button color={'link'} tone={'light'}>
          Link
        </ui.Button>
      </ui.Buttons>{' '}
      <ui.Buttons>
        <ui.Button color={'info'} tone={'light'}>
          Info
        </ui.Button>{' '}
        <ui.Button color={'success'} tone={'light'}>
          Success
        </ui.Button>{' '}
        <ui.Button color={'warning'} tone={'light'}>
          Warning
        </ui.Button>{' '}
        <ui.Button color={'danger'} tone={'light'}>
          Danger
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button color={'primary'} tone={'dark'}>
          Primary
        </ui.Button>{' '}
        <ui.Button color={'link'} tone={'dark'}>
          Link
        </ui.Button>
      </ui.Buttons>{' '}
      <ui.Buttons>
        <ui.Button color={'info'} tone={'dark'}>
          Info
        </ui.Button>{' '}
        <ui.Button color={'success'} tone={'dark'}>
          Success
        </ui.Button>{' '}
        <ui.Button color={'warning'} tone={'dark'}>
          Warning
        </ui.Button>{' '}
        <ui.Button color={'danger'} tone={'dark'}>
          Danger
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button size={'small'}>Small</ui.Button>{' '}
        <ui.Button>Default</ui.Button>{' '}
        <ui.Button size={'normal'}>Normal</ui.Button>{' '}
        <ui.Button size={'medium'}>Medium</ui.Button>{' '}
        <ui.Button size={'large'}>Large</ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example008Demo() {
  return (
    <>
      <ui.Buttons size={'medium'}>
        <ui.Button>All</ui.Button> <ui.Button>Medium</ui.Button>{' '}
        <ui.Button>Size</ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example009Demo() {
  return (
    <>
      <ui.Buttons size={'small'}>
        <ui.Button>Small</ui.Button> <ui.Button>Small</ui.Button>{' '}
        <ui.Button>Small</ui.Button>{' '}
        <ui.Button size={'normal'}>Normal</ui.Button>{' '}
        <ui.Button>Small</ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example010Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button size={'small'} fullWidth>
          Small
        </ui.Button>{' '}
        <ui.Button fullWidth>Normal</ui.Button>{' '}
        <ui.Button size={'medium'} fullWidth>
          Medium
        </ui.Button>{' '}
        <ui.Button size={'large'} fullWidth>
          Large
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example011Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button color={'link'} outlined>
          Outlined
        </ui.Button>{' '}
        <ui.Button color={'primary'} outlined>
          Outlined
        </ui.Button>{' '}
        <ui.Button color={'info'} outlined>
          Outlined
        </ui.Button>{' '}
        <ui.Button color={'success'} outlined>
          Outlined
        </ui.Button>{' '}
        <ui.Button color={'danger'} outlined>
          Outlined
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example012Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <div className={'bd-callout is-primary'}>
            {' '}
            <ui.Buttons>
              <ui.Button color={'link'} inverted>
                Inverted
              </ui.Button>{' '}
              <ui.Button color={'primary'} inverted>
                Inverted
              </ui.Button>{' '}
              <ui.Button color={'info'} inverted>
                Inverted
              </ui.Button>{' '}
              <ui.Button color={'success'} inverted>
                Inverted
              </ui.Button>{' '}
              <ui.Button color={'danger'} inverted>
                Inverted
              </ui.Button>
            </ui.Buttons>{' '}
          </div>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<button class="button is-link is-inverted">Inverted</button>\n<button class="button is-primary is-inverted">Inverted</button>\n<button class="button is-info is-inverted">Inverted</button>\n<button class="button is-success is-inverted">Inverted</button>\n<button class="button is-danger is-inverted">Inverted</button>\n'
                }
              </code>
            </pre>
          </div>{' '}
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
        <ui.Column>
          {' '}
          <ui.Buttons>
            <ui.Button rounded>Rounded</ui.Button>{' '}
            <ui.Button color={'link'} rounded>
              Rounded
            </ui.Button>{' '}
            <ui.Button color={'primary'} rounded>
              Rounded
            </ui.Button>{' '}
            <ui.Button color={'info'} rounded>
              Rounded
            </ui.Button>{' '}
            <ui.Button color={'success'} rounded>
              Rounded
            </ui.Button>{' '}
            <ui.Button color={'danger'} rounded>
              Rounded
            </ui.Button>
          </ui.Buttons>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<button class="button is-rounded">Rounded</button>\n<button class="button is-link is-rounded">Rounded</button>\n<button class="button is-primary is-rounded">Rounded</button>\n<button class="button is-info is-rounded">Rounded</button>\n<button class="button is-success is-rounded">Rounded</button>\n<button class="button is-danger is-rounded">Rounded</button>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example014Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button>Normal</ui.Button>{' '}
        <ui.Button color={'link'}>Normal</ui.Button>{' '}
        <ui.Button color={'primary'}>Normal</ui.Button>{' '}
        <ui.Button color={'info'}>Normal</ui.Button>{' '}
        <ui.Button color={'success'}>Normal</ui.Button>{' '}
        <ui.Button color={'warning'}>Normal</ui.Button>{' '}
        <ui.Button color={'danger'}>Normal</ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example015Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button state={'hovered'}>Hover</ui.Button>{' '}
        <ui.Button color={'link'} state={'hovered'}>
          Hover
        </ui.Button>{' '}
        <ui.Button color={'primary'} state={'hovered'}>
          Hover
        </ui.Button>{' '}
        <ui.Button color={'info'} state={'hovered'}>
          Hover
        </ui.Button>{' '}
        <ui.Button color={'success'} state={'hovered'}>
          Hover
        </ui.Button>{' '}
        <ui.Button color={'warning'} state={'hovered'}>
          Hover
        </ui.Button>{' '}
        <ui.Button color={'danger'} state={'hovered'}>
          Hover
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example016Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button state={'focused'}>Focus</ui.Button>{' '}
        <ui.Button color={'link'} state={'focused'}>
          Focus
        </ui.Button>{' '}
        <ui.Button color={'primary'} state={'focused'}>
          Focus
        </ui.Button>{' '}
        <ui.Button color={'info'} state={'focused'}>
          Focus
        </ui.Button>{' '}
        <ui.Button color={'success'} state={'focused'}>
          Focus
        </ui.Button>{' '}
        <ui.Button color={'warning'} state={'focused'}>
          Focus
        </ui.Button>{' '}
        <ui.Button color={'danger'} state={'focused'}>
          Focus
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example017Demo() {
  return (
    <>
      <ui.Buttons>
        <ui.Button state={'active'}>Active</ui.Button>{' '}
        <ui.Button color={'link'} state={'active'}>
          Active
        </ui.Button>{' '}
        <ui.Button color={'primary'} state={'active'}>
          Active
        </ui.Button>{' '}
        <ui.Button color={'info'} state={'active'}>
          Active
        </ui.Button>{' '}
        <ui.Button color={'success'} state={'active'}>
          Active
        </ui.Button>{' '}
        <ui.Button color={'warning'} state={'active'}>
          Active
        </ui.Button>{' '}
        <ui.Button color={'danger'} state={'active'}>
          Active
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example018Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <ui.Buttons>
            <ui.Button loading>Loading</ui.Button>{' '}
            <ui.Button color={'link'} loading>
              Loading
            </ui.Button>{' '}
            <ui.Button color={'primary'} loading>
              Loading
            </ui.Button>{' '}
            <ui.Button color={'info'} loading>
              Loading
            </ui.Button>{' '}
            <ui.Button color={'success'} loading>
              Loading
            </ui.Button>{' '}
            <ui.Button color={'warning'} loading>
              Loading
            </ui.Button>{' '}
            <ui.Button color={'danger'} loading>
              Loading
            </ui.Button>
          </ui.Buttons>{' '}
          <ui.Message color={'info'} as={'div'}>
            {' '}
            <ui.MessageBody>
              {' '}
              <p>
                Since the loading spinner is implemented using the{' '}
                <code>{'::after'}</code> pseudo-element, it is not supported by
                the <code>{'<input type="submit">'}</code> element. Consider
                using <code>{'<button type="submit">'}</code> instead.
              </p>{' '}
            </ui.MessageBody>{' '}
          </ui.Message>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<button class="button is-loading">Loading</button>\n<button class="button is-link is-loading">Loading</button>\n<button class="button is-primary is-loading">Loading</button>\n<button class="button is-info is-loading">Loading</button>\n<button class="button is-success is-loading">Loading</button>\n<button class="button is-warning is-loading">Loading</button>\n<button class="button is-danger is-loading">Loading</button>\n'
                }
              </code>
            </pre>
          </div>{' '}
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
        <ui.Column>
          {' '}
          <ui.Content>
            {' '}
            <p>
              You can create a <strong>non-interactive button</strong> by using
              the <code>{'is-static'}</code> modifier. This is useful to align a
              text label with an input, for example when using{' '}
              <a
                href={'https://bulma.io/documentation/form/general#form-addons'}
              >
                form addons
              </a>
              .
            </p>{' '}
          </ui.Content>{' '}
          <ui.Button className={'rb-is-static'} as={'span'}>
            Static
          </ui.Button>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {'\n<span class="button is-static">Static</span>\n'}
              </code>
            </pre>
          </div>{' '}
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
        <ui.Column>
          {' '}
          <ui.Buttons>
            <ui.Button title={'Disabled button'} disabled>
              Disabled
            </ui.Button>{' '}
            <ui.Button title={'Disabled button'} disabled color={'link'}>
              {' '}
              Disabled{' '}
            </ui.Button>{' '}
            <ui.Button title={'Disabled button'} disabled color={'primary'}>
              {' '}
              Disabled{' '}
            </ui.Button>{' '}
            <ui.Button title={'Disabled button'} disabled color={'info'}>
              {' '}
              Disabled{' '}
            </ui.Button>{' '}
            <ui.Button title={'Disabled button'} disabled color={'success'}>
              {' '}
              Disabled{' '}
            </ui.Button>{' '}
            <ui.Button title={'Disabled button'} disabled color={'warning'}>
              {' '}
              Disabled{' '}
            </ui.Button>{' '}
            <ui.Button title={'Disabled button'} disabled color={'danger'}>
              {' '}
              Disabled{' '}
            </ui.Button>
          </ui.Buttons>{' '}
          <ui.Message color={'danger'} as={'div'}>
            {' '}
            <ui.MessageBody>
              {' '}
              <p>
                The <code>{'is-disabled'}</code> CSS class has been deprecated
                in favor of the <code>{'disabled'}</code> HTML attribute.{' '}
                <a href={'https://github.com/jgthms/bulma/issues/276'}>
                  Learn more
                </a>
              </p>{' '}
            </ui.MessageBody>{' '}
          </ui.Message>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<button class="button" title="Disabled button" disabled>Disabled</button>\n<button class="button is-link" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-primary" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-info" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-success" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-warning" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-danger" title="Disabled button" disabled>\n  Disabled\n</button>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example021Demo() {
  return (
    <>
      <ui.Buttons as={'p'}>
        <ui.Button>
          {' '}
          <ui.Icon size={'small'}>
            {' '}
            <i className={'fas fa-bold'} />{' '}
          </ui.Icon>{' '}
        </ui.Button>{' '}
        <ui.Button>
          {' '}
          <ui.Icon size={'small'}>
            {' '}
            <i className={'fas fa-italic'} />{' '}
          </ui.Icon>{' '}
        </ui.Button>{' '}
        <ui.Button>
          {' '}
          <ui.Icon size={'small'}>
            {' '}
            <i className={'fas fa-underline'} />{' '}
          </ui.Icon>{' '}
        </ui.Button>
      </ui.Buttons>{' '}
      <ui.Buttons as={'p'}>
        <ui.Button>
          {' '}
          <ui.Icon>
            {' '}
            <i className={'fab fa-github'} />{' '}
          </ui.Icon>{' '}
          <span>GitHub</span>{' '}
        </ui.Button>{' '}
        <ui.Button color={'primary'}>
          {' '}
          <ui.Icon>
            {' '}
            <i className={'fab fa-twitter'} />{' '}
          </ui.Icon>{' '}
          <span>@jgthms</span>{' '}
        </ui.Button>{' '}
        <ui.Button color={'success'}>
          {' '}
          <ui.Icon size={'small'}>
            {' '}
            <i className={'fas fa-check'} />{' '}
          </ui.Icon>{' '}
          <span>Save</span>{' '}
        </ui.Button>{' '}
        <ui.Button color={'danger'} outlined>
          {' '}
          <span>Delete</span>{' '}
          <ui.Icon size={'small'}>
            {' '}
            <i className={'fas fa-times'} />{' '}
          </ui.Icon>{' '}
        </ui.Button>
      </ui.Buttons>{' '}
      <ui.Buttons as={'p'}>
        <ui.Button size={'small'}>
          {' '}
          <ui.Icon size={'small'}>
            {' '}
            <i className={'fab fa-github'} />{' '}
          </ui.Icon>{' '}
          <span>GitHub</span>{' '}
        </ui.Button>{' '}
        <ui.Button>
          {' '}
          <ui.Icon>
            {' '}
            <i className={'fab fa-github'} />{' '}
          </ui.Icon>{' '}
          <span>GitHub</span>{' '}
        </ui.Button>{' '}
        <ui.Button size={'medium'}>
          {' '}
          <ui.Icon>
            {' '}
            <i className={'fab fa-github'} />{' '}
          </ui.Icon>{' '}
          <span>GitHub</span>{' '}
        </ui.Button>{' '}
        <ui.Button size={'large'}>
          {' '}
          <ui.Icon size={'medium'}>
            {' '}
            <i className={'fab fa-github'} />{' '}
          </ui.Icon>{' '}
          <span>GitHub</span>{' '}
        </ui.Button>
      </ui.Buttons>
    </>
  )
}

function Example022Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <ui.Content>
            {' '}
            <p>
              If the button only contains an icon, Bulma will make sure the
              button remains <strong>square</strong>, no matter the size of the
              button <em>or</em> of the icon.
            </p>{' '}
          </ui.Content>{' '}
          <ui.Buttons as={'p'}>
            <ui.Button size={'small'}>
              {' '}
              <ui.Icon size={'small'}>
                {' '}
                <i className={'fas fa-heading'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>
          </ui.Buttons>{' '}
          <ui.Buttons as={'p'}>
            <ui.Button>
              {' '}
              <ui.Icon size={'small'}>
                {' '}
                <i className={'fas fa-heading'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>{' '}
            <ui.Button>
              {' '}
              <ui.Icon>
                {' '}
                <i className={'fas fa-heading fa-lg'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>
          </ui.Buttons>{' '}
          <ui.Buttons as={'p'}>
            <ui.Button size={'medium'}>
              {' '}
              <ui.Icon size={'small'}>
                {' '}
                <i className={'fas fa-heading'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>{' '}
            <ui.Button size={'medium'}>
              {' '}
              <ui.Icon>
                {' '}
                <i className={'fas fa-heading fa-lg'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>{' '}
            <ui.Button size={'medium'}>
              {' '}
              <ui.Icon size={'medium'}>
                {' '}
                <i className={'fas fa-heading fa-2x'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>
          </ui.Buttons>{' '}
          <ui.Buttons as={'p'}>
            <ui.Button size={'large'}>
              {' '}
              <ui.Icon size={'small'}>
                {' '}
                <i className={'fas fa-heading'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>{' '}
            <ui.Button size={'large'}>
              {' '}
              <ui.Icon>
                {' '}
                <i className={'fas fa-heading fa-lg'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>{' '}
            <ui.Button size={'large'}>
              {' '}
              <ui.Icon size={'medium'}>
                {' '}
                <i className={'fas fa-heading fa-2x'} />{' '}
              </ui.Icon>{' '}
            </ui.Button>
          </ui.Buttons>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<p class="buttons">\n  <button class="button is-small">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n</p>\n<p class="buttons">\n  <button class="button">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n  <button class="button">\n    <span class="icon">\n      <i class="fas fa-heading fa-lg"></i>\n    </span>\n  </button>\n</p>\n<p class="buttons">\n  <button class="button is-medium">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n  <button class="button is-medium">\n    <span class="icon">\n      <i class="fas fa-heading fa-lg"></i>\n    </span>\n  </button>\n  <button class="button is-medium">\n    <span class="icon is-medium">\n      <i class="fas fa-heading fa-2x"></i>\n    </span>\n  </button>\n</p>\n<p class="buttons">\n  <button class="button is-large">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n  <button class="button is-large">\n    <span class="icon">\n      <i class="fas fa-heading fa-lg"></i>\n    </span>\n  </button>\n  <button class="button is-large">\n    <span class="icon is-medium">\n      <i class="fas fa-heading fa-2x"></i>\n    </span>\n  </button>\n</p>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example023Demo() {
  return (
    <>
      <ui.Field layout={'grouped'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'link'}>Save changes</ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>Cancel</ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'danger'}>Delete post</ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example024Demo() {
  return (
    <>
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-align-left'} />{' '}
            </ui.Icon>{' '}
            <span>Left</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-align-center'} />{' '}
            </ui.Icon>{' '}
            <span>Center</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-align-right'} />{' '}
            </ui.Icon>{' '}
            <span>Right</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example025Demo() {
  return (
    <>
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-bold'} />{' '}
            </ui.Icon>{' '}
            <span>Bold</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-italic'} />{' '}
            </ui.Icon>{' '}
            <span>Italic</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-underline'} />{' '}
            </ui.Icon>{' '}
            <span>Underline</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-align-left'} />{' '}
            </ui.Icon>{' '}
            <span>Left</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-align-center'} />{' '}
            </ui.Icon>{' '}
            <span>Center</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button>
            {' '}
            <ui.Icon size={'small'}>
              {' '}
              <i className={'fas fa-align-right'} />{' '}
            </ui.Icon>{' '}
            <span>Right</span>{' '}
          </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example026Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <ui.Content>
            {' '}
            <p>
              You can create a <strong>list of buttons</strong> by using the{' '}
              <code>{'buttons'}</code> container.
            </p>{' '}
          </ui.Content>{' '}
          <div className={'bd-example'}>
            {' '}
            <ui.Buttons>
              <ui.Button color={'success'}>Save changes</ui.Button>{' '}
              <ui.Button color={'info'}>Save and continue</ui.Button>{' '}
              <ui.Button color={'danger'}>Cancel</ui.Button>
            </ui.Buttons>{' '}
          </div>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="buttons">\n  <button class="button is-success">Save changes</button>\n  <button class="button is-info">Save and continue</button>\n  <button class="button is-danger">Cancel</button>\n</div>\n'
                }
              </code>
            </pre>
          </div>{' '}
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
        <ui.Column>
          {' '}
          <ui.Content>
            {' '}
            <p>
              If the list is <strong>very long</strong>, it will automatically
              wrap on <strong>multiple lines</strong>, while keeping all buttons{' '}
              <strong>evenly spaced</strong>.
            </p>{' '}
          </ui.Content>{' '}
          <div className={'bd-example'}>
            {' '}
            <ui.Buttons>
              <ui.Button>One</ui.Button> <ui.Button>Two</ui.Button>{' '}
              <ui.Button>Three</ui.Button> <ui.Button>Four</ui.Button>{' '}
              <ui.Button>Five</ui.Button> <ui.Button>Six</ui.Button>{' '}
              <ui.Button>Seven</ui.Button> <ui.Button>Eight</ui.Button>{' '}
              <ui.Button>Nine</ui.Button> <ui.Button>Ten</ui.Button>{' '}
              <ui.Button>Eleven</ui.Button> <ui.Button>Twelve</ui.Button>{' '}
              <ui.Button>Thirteen</ui.Button> <ui.Button>Fourteen</ui.Button>{' '}
              <ui.Button>Fifteen</ui.Button> <ui.Button>Sixteen</ui.Button>{' '}
              <ui.Button>Seventeen</ui.Button> <ui.Button>Eighteen</ui.Button>{' '}
              <ui.Button>Nineteen</ui.Button> <ui.Button>Twenty</ui.Button>
            </ui.Buttons>{' '}
          </div>{' '}
        </ui.Column>{' '}
        <ui.Column className={'bd-highlight-full'}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="buttons">\n  <button class="button">One</button>\n  <button class="button">Two</button>\n  <button class="button">Three</button>\n  <button class="button">Four</button>\n  <button class="button">Five</button>\n  <button class="button">Six</button>\n  <button class="button">Seven</button>\n  <button class="button">Eight</button>\n  <button class="button">Nine</button>\n  <button class="button">Ten</button>\n  <button class="button">Eleven</button>\n  <button class="button">Twelve</button>\n  <button class="button">Thirteen</button>\n  <button class="button">Fourteen</button>\n  <button class="button">Fifteen</button>\n  <button class="button">Sixteen</button>\n  <button class="button">Seventeen</button>\n  <button class="button">Eighteen</button>\n  <button class="button">Nineteen</button>\n  <button class="button">Twenty</button>\n</div>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example028Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <ui.Content>
            {' '}
            <p>
              You can <strong>attach buttons together</strong> with the{' '}
              <code>{'has-addons'}</code> modifier.
            </p>{' '}
          </ui.Content>{' '}
          <div className={'bd-example'}>
            {' '}
            <ui.Buttons addons>
              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}
              <ui.Button>No</ui.Button>
            </ui.Buttons>{' '}
          </div>{' '}
        </ui.Column>{' '}
        <ui.Column className={'bd-highlight-full'}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="buttons has-addons">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example029Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <ui.Content>
            {' '}
            <p>
              Use the <code>{'is-centered'}</code> or the{' '}
              <code>{'is-right'}</code> modifiers to alter the{' '}
              <strong>alignment</strong>.
            </p>{' '}
          </ui.Content>{' '}
          <div className={'bd-example'}>
            {' '}
            <ui.Buttons addons align={'center'}>
              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}
              <ui.Button>No</ui.Button>
            </ui.Buttons>{' '}
            <ui.Buttons addons align={'right'}>
              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}
              <ui.Button>No</ui.Button>
            </ui.Buttons>{' '}
          </div>{' '}
        </ui.Column>{' '}
        <ui.Column className={'bd-highlight-full'}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="buttons has-addons is-centered">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n\n<div class="buttons has-addons is-right">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example030Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <ui.Content>
            {' '}
            <p>
              You can use any <strong>modifier</strong> class on each button to
              differentiate them. Make sure to add the{' '}
              <code>{'is-selected'}</code> modifier as well to make sure the
              selected button is <em>above</em> its siblings.
            </p>{' '}
          </ui.Content>{' '}
          <div className={'bd-example'}>
            {' '}
            <ui.Buttons addons>
              <ui.Button color={'success'} selected>
                Yes
              </ui.Button>{' '}
              <ui.Button>Maybe</ui.Button> <ui.Button>No</ui.Button>
            </ui.Buttons>{' '}
            <ui.Buttons addons>
              <ui.Button>Yes</ui.Button>{' '}
              <ui.Button color={'info'} selected>
                Maybe
              </ui.Button>{' '}
              <ui.Button>No</ui.Button>
            </ui.Buttons>{' '}
            <ui.Buttons addons>
              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}
              <ui.Button color={'danger'} selected>
                No
              </ui.Button>
            </ui.Buttons>{' '}
          </div>{' '}
        </ui.Column>{' '}
        <ui.Column className={'bd-highlight-full'}>
          {' '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="buttons has-addons">\n  <button class="button is-success is-selected">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n\n<div class="buttons has-addons">\n  <button class="button">Yes</button>\n  <button class="button is-info is-selected">Maybe</button>\n  <button class="button">No</button>\n</div>\n\n<div class="buttons has-addons">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button is-danger is-selected">No</button>\n</div>\n'
                }
              </code>
            </pre>
          </div>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Default button',
  parameters: {
    official: { id: 'elements-button/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button>Button</ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Native button elements',
  parameters: {
    official: { id: 'elements-button/basic/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.LinkButton>Anchor</ui.LinkButton> <ui.Button>Button</ui.Button>{' '}\n        <ui.Button type={'submit'} value={'Submit input'} as={'input'} />{' '}\n        <ui.Button type={'reset'} value={'Reset input'} as={'input'} />\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Neutral and text buttons',
  parameters: {
    official: { id: 'elements-button/colors/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button color={'white'}>White</ui.Button>{' '}\n        <ui.Button color={'light'}>Light</ui.Button>{' '}\n        <ui.Button color={'dark'}>Dark</ui.Button>{' '}\n        <ui.Button color={'black'}>Black</ui.Button>{' '}\n        <ui.Button variant={'text'}>Text</ui.Button>{' '}\n        <ui.Button variant={'ghost'}>Ghost</ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Semantic colors',
  parameters: {
    official: { id: 'elements-button/colors/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button color={'primary'}>Primary</ui.Button>{' '}\n        <ui.Button color={'link'}>Link</ui.Button>\n      </ui.Buttons>{' '}\n      <ui.Buttons>\n        <ui.Button color={'info'}>Info</ui.Button>{' '}\n        <ui.Button color={'success'}>Success</ui.Button>{' '}\n        <ui.Button color={'warning'}>Warning</ui.Button>{' '}\n        <ui.Button color={'danger'}>Danger</ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Light colors',
  parameters: {
    official: { id: 'elements-button/colors/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button color={'primary'} tone={'light'}>\n          Primary\n        </ui.Button>{' '}\n        <ui.Button color={'link'} tone={'light'}>\n          Link\n        </ui.Button>\n      </ui.Buttons>{' '}\n      <ui.Buttons>\n        <ui.Button color={'info'} tone={'light'}>\n          Info\n        </ui.Button>{' '}\n        <ui.Button color={'success'} tone={'light'}>\n          Success\n        </ui.Button>{' '}\n        <ui.Button color={'warning'} tone={'light'}>\n          Warning\n        </ui.Button>{' '}\n        <ui.Button color={'danger'} tone={'light'}>\n          Danger\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Dark colors',
  parameters: {
    official: { id: 'elements-button/colors/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example006Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button color={'primary'} tone={'dark'}>\n          Primary\n        </ui.Button>{' '}\n        <ui.Button color={'link'} tone={'dark'}>\n          Link\n        </ui.Button>\n      </ui.Buttons>{' '}\n      <ui.Buttons>\n        <ui.Button color={'info'} tone={'dark'}>\n          Info\n        </ui.Button>{' '}\n        <ui.Button color={'success'} tone={'dark'}>\n          Success\n        </ui.Button>{' '}\n        <ui.Button color={'warning'} tone={'dark'}>\n          Warning\n        </ui.Button>{' '}\n        <ui.Button color={'danger'} tone={'dark'}>\n          Danger\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Button sizes',
  parameters: {
    official: { id: 'elements-button/sizes/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example007Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button size={'small'}>Small</ui.Button>{' '}\n        <ui.Button>Default</ui.Button>{' '}\n        <ui.Button size={'normal'}>Normal</ui.Button>{' '}\n        <ui.Button size={'medium'}>Medium</ui.Button>{' '}\n        <ui.Button size={'large'}>Large</ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Shared medium size',
  parameters: {
    official: { id: 'elements-button/sizes/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example008Demo() {\n  return (\n    <>\n      <ui.Buttons size={'medium'}>\n        <ui.Button>All</ui.Button> <ui.Button>Medium</ui.Button>{' '}\n        <ui.Button>Size</ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Individual size override',
  parameters: {
    official: { id: 'elements-button/sizes/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example009Demo() {\n  return (\n    <>\n      <ui.Buttons size={'small'}>\n        <ui.Button>Small</ui.Button> <ui.Button>Small</ui.Button>{' '}\n        <ui.Button>Small</ui.Button>{' '}\n        <ui.Button size={'normal'}>Normal</ui.Button>{' '}\n        <ui.Button>Small</ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Full-width buttons',
  parameters: {
    official: { id: 'elements-button/displays/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example010Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button size={'small'} fullWidth>\n          Small\n        </ui.Button>{' '}\n        <ui.Button fullWidth>Normal</ui.Button>{' '}\n        <ui.Button size={'medium'} fullWidth>\n          Medium\n        </ui.Button>{' '}\n        <ui.Button size={'large'} fullWidth>\n          Large\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Outlined buttons',
  parameters: {
    official: { id: 'elements-button/outlined/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example011Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button color={'link'} outlined>\n          Outlined\n        </ui.Button>{' '}\n        <ui.Button color={'primary'} outlined>\n          Outlined\n        </ui.Button>{' '}\n        <ui.Button color={'info'} outlined>\n          Outlined\n        </ui.Button>{' '}\n        <ui.Button color={'success'} outlined>\n          Outlined\n        </ui.Button>{' '}\n        <ui.Button color={'danger'} outlined>\n          Outlined\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Inverted buttons',
  parameters: {
    official: {
      id: 'elements-button/inverted-the-text-color-becomes-the-background-color-and-vice-versa/001',
    },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example012Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <div className={'bd-callout is-primary'}>\n            {' '}\n            <ui.Buttons>\n              <ui.Button color={'link'} inverted>\n                Inverted\n              </ui.Button>{' '}\n              <ui.Button color={'primary'} inverted>\n                Inverted\n              </ui.Button>{' '}\n              <ui.Button color={'info'} inverted>\n                Inverted\n              </ui.Button>{' '}\n              <ui.Button color={'success'} inverted>\n                Inverted\n              </ui.Button>{' '}\n              <ui.Button color={'danger'} inverted>\n                Inverted\n              </ui.Button>\n            </ui.Buttons>{' '}\n          </div>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<button class=\"button is-link is-inverted\">Inverted</button>\\n<button class=\"button is-primary is-inverted\">Inverted</button>\\n<button class=\"button is-info is-inverted\">Inverted</button>\\n<button class=\"button is-success is-inverted\">Inverted</button>\\n<button class=\"button is-danger is-inverted\">Inverted</button>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Rounded buttons',
  parameters: {
    official: { id: 'elements-button/rounded-buttons/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example013Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Buttons>\n            <ui.Button rounded>Rounded</ui.Button>{' '}\n            <ui.Button color={'link'} rounded>\n              Rounded\n            </ui.Button>{' '}\n            <ui.Button color={'primary'} rounded>\n              Rounded\n            </ui.Button>{' '}\n            <ui.Button color={'info'} rounded>\n              Rounded\n            </ui.Button>{' '}\n            <ui.Button color={'success'} rounded>\n              Rounded\n            </ui.Button>{' '}\n            <ui.Button color={'danger'} rounded>\n              Rounded\n            </ui.Button>\n          </ui.Buttons>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<button class=\"button is-rounded\">Rounded</button>\\n<button class=\"button is-link is-rounded\">Rounded</button>\\n<button class=\"button is-primary is-rounded\">Rounded</button>\\n<button class=\"button is-info is-rounded\">Rounded</button>\\n<button class=\"button is-success is-rounded\">Rounded</button>\\n<button class=\"button is-danger is-rounded\">Rounded</button>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
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
    official: { id: 'elements-button/normal/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example014Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button>Normal</ui.Button>{' '}\n        <ui.Button color={'link'}>Normal</ui.Button>{' '}\n        <ui.Button color={'primary'}>Normal</ui.Button>{' '}\n        <ui.Button color={'info'}>Normal</ui.Button>{' '}\n        <ui.Button color={'success'}>Normal</ui.Button>{' '}\n        <ui.Button color={'warning'}>Normal</ui.Button>{' '}\n        <ui.Button color={'danger'}>Normal</ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
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
    official: { id: 'elements-button/hover/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example015Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button state={'hovered'}>Hover</ui.Button>{' '}\n        <ui.Button color={'link'} state={'hovered'}>\n          Hover\n        </ui.Button>{' '}\n        <ui.Button color={'primary'} state={'hovered'}>\n          Hover\n        </ui.Button>{' '}\n        <ui.Button color={'info'} state={'hovered'}>\n          Hover\n        </ui.Button>{' '}\n        <ui.Button color={'success'} state={'hovered'}>\n          Hover\n        </ui.Button>{' '}\n        <ui.Button color={'warning'} state={'hovered'}>\n          Hover\n        </ui.Button>{' '}\n        <ui.Button color={'danger'} state={'hovered'}>\n          Hover\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
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
    official: { id: 'elements-button/focus/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example016Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button state={'focused'}>Focus</ui.Button>{' '}\n        <ui.Button color={'link'} state={'focused'}>\n          Focus\n        </ui.Button>{' '}\n        <ui.Button color={'primary'} state={'focused'}>\n          Focus\n        </ui.Button>{' '}\n        <ui.Button color={'info'} state={'focused'}>\n          Focus\n        </ui.Button>{' '}\n        <ui.Button color={'success'} state={'focused'}>\n          Focus\n        </ui.Button>{' '}\n        <ui.Button color={'warning'} state={'focused'}>\n          Focus\n        </ui.Button>{' '}\n        <ui.Button color={'danger'} state={'focused'}>\n          Focus\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Active state',
  parameters: {
    official: { id: 'elements-button/active/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example017Demo() {\n  return (\n    <>\n      <ui.Buttons>\n        <ui.Button state={'active'}>Active</ui.Button>{' '}\n        <ui.Button color={'link'} state={'active'}>\n          Active\n        </ui.Button>{' '}\n        <ui.Button color={'primary'} state={'active'}>\n          Active\n        </ui.Button>{' '}\n        <ui.Button color={'info'} state={'active'}>\n          Active\n        </ui.Button>{' '}\n        <ui.Button color={'success'} state={'active'}>\n          Active\n        </ui.Button>{' '}\n        <ui.Button color={'warning'} state={'active'}>\n          Active\n        </ui.Button>{' '}\n        <ui.Button color={'danger'} state={'active'}>\n          Active\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Loading state',
  parameters: {
    official: { id: 'elements-button/loading/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example018Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Buttons>\n            <ui.Button loading>Loading</ui.Button>{' '}\n            <ui.Button color={'link'} loading>\n              Loading\n            </ui.Button>{' '}\n            <ui.Button color={'primary'} loading>\n              Loading\n            </ui.Button>{' '}\n            <ui.Button color={'info'} loading>\n              Loading\n            </ui.Button>{' '}\n            <ui.Button color={'success'} loading>\n              Loading\n            </ui.Button>{' '}\n            <ui.Button color={'warning'} loading>\n              Loading\n            </ui.Button>{' '}\n            <ui.Button color={'danger'} loading>\n              Loading\n            </ui.Button>\n          </ui.Buttons>{' '}\n          <ui.Message color={'info'} as={'div'}>\n            {' '}\n            <ui.MessageBody>\n              {' '}\n              <p>\n                Since the loading spinner is implemented using the{' '}\n                <code>{'::after'}</code> pseudo-element, it is not supported by\n                the <code>{'<input type=\"submit\">'}</code> element. Consider\n                using <code>{'<button type=\"submit\">'}</code> instead.\n              </p>{' '}\n            </ui.MessageBody>{' '}\n          </ui.Message>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<button class=\"button is-loading\">Loading</button>\\n<button class=\"button is-link is-loading\">Loading</button>\\n<button class=\"button is-primary is-loading\">Loading</button>\\n<button class=\"button is-info is-loading\">Loading</button>\\n<button class=\"button is-success is-loading\">Loading</button>\\n<button class=\"button is-warning is-loading\">Loading</button>\\n<button class=\"button is-danger is-loading\">Loading</button>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'Static button',
  parameters: {
    official: { id: 'elements-button/static-button/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example019Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              You can create a <strong>non-interactive button</strong> by using\n              the <code>{'is-static'}</code> modifier. This is useful to align a\n              text label with an input, for example when using{' '}\n              <a\n                href={'https://bulma.io/documentation/form/general#form-addons'}\n              >\n                form addons\n              </a>\n              .\n            </p>{' '}\n          </ui.Content>{' '}\n          <ui.Button className={'rb-is-static'} as={'span'}>\n            Static\n          </ui.Button>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {'\\n<span class=\"button is-static\">Static</span>\\n'}\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'Disabled buttons',
  parameters: {
    official: { id: 'elements-button/disabled/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example020Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Buttons>\n            <ui.Button title={'Disabled button'} disabled>\n              Disabled\n            </ui.Button>{' '}\n            <ui.Button title={'Disabled button'} disabled color={'link'}>\n              {' '}\n              Disabled{' '}\n            </ui.Button>{' '}\n            <ui.Button title={'Disabled button'} disabled color={'primary'}>\n              {' '}\n              Disabled{' '}\n            </ui.Button>{' '}\n            <ui.Button title={'Disabled button'} disabled color={'info'}>\n              {' '}\n              Disabled{' '}\n            </ui.Button>{' '}\n            <ui.Button title={'Disabled button'} disabled color={'success'}>\n              {' '}\n              Disabled{' '}\n            </ui.Button>{' '}\n            <ui.Button title={'Disabled button'} disabled color={'warning'}>\n              {' '}\n              Disabled{' '}\n            </ui.Button>{' '}\n            <ui.Button title={'Disabled button'} disabled color={'danger'}>\n              {' '}\n              Disabled{' '}\n            </ui.Button>\n          </ui.Buttons>{' '}\n          <ui.Message color={'danger'} as={'div'}>\n            {' '}\n            <ui.MessageBody>\n              {' '}\n              <p>\n                The <code>{'is-disabled'}</code> CSS class has been deprecated\n                in favor of the <code>{'disabled'}</code> HTML attribute.{' '}\n                <a href={'https://github.com/jgthms/bulma/issues/276'}>\n                  Learn more\n                </a>\n              </p>{' '}\n            </ui.MessageBody>{' '}\n          </ui.Message>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<button class=\"button\" title=\"Disabled button\" disabled>Disabled</button>\\n<button class=\"button is-link\" title=\"Disabled button\" disabled>\\n  Disabled\\n</button>\\n<button class=\"button is-primary\" title=\"Disabled button\" disabled>\\n  Disabled\\n</button>\\n<button class=\"button is-info\" title=\"Disabled button\" disabled>\\n  Disabled\\n</button>\\n<button class=\"button is-success\" title=\"Disabled button\" disabled>\\n  Disabled\\n</button>\\n<button class=\"button is-warning\" title=\"Disabled button\" disabled>\\n  Disabled\\n</button>\\n<button class=\"button is-danger\" title=\"Disabled button\" disabled>\\n  Disabled\\n</button>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

export const Example021 = {
  name: 'Buttons with icons',
  parameters: {
    official: { id: 'elements-button/with-font-awesome-icons/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example021Demo() {\n  return (\n    <>\n      <ui.Buttons as={'p'}>\n        <ui.Button>\n          {' '}\n          <ui.Icon size={'small'}>\n            {' '}\n            <i className={'fas fa-bold'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Button>{' '}\n        <ui.Button>\n          {' '}\n          <ui.Icon size={'small'}>\n            {' '}\n            <i className={'fas fa-italic'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Button>{' '}\n        <ui.Button>\n          {' '}\n          <ui.Icon size={'small'}>\n            {' '}\n            <i className={'fas fa-underline'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Button>\n      </ui.Buttons>{' '}\n      <ui.Buttons as={'p'}>\n        <ui.Button>\n          {' '}\n          <ui.Icon>\n            {' '}\n            <i className={'fab fa-github'} />{' '}\n          </ui.Icon>{' '}\n          <span>GitHub</span>{' '}\n        </ui.Button>{' '}\n        <ui.Button color={'primary'}>\n          {' '}\n          <ui.Icon>\n            {' '}\n            <i className={'fab fa-twitter'} />{' '}\n          </ui.Icon>{' '}\n          <span>@jgthms</span>{' '}\n        </ui.Button>{' '}\n        <ui.Button color={'success'}>\n          {' '}\n          <ui.Icon size={'small'}>\n            {' '}\n            <i className={'fas fa-check'} />{' '}\n          </ui.Icon>{' '}\n          <span>Save</span>{' '}\n        </ui.Button>{' '}\n        <ui.Button color={'danger'} outlined>\n          {' '}\n          <span>Delete</span>{' '}\n          <ui.Icon size={'small'}>\n            {' '}\n            <i className={'fas fa-times'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Button>\n      </ui.Buttons>{' '}\n      <ui.Buttons as={'p'}>\n        <ui.Button size={'small'}>\n          {' '}\n          <ui.Icon size={'small'}>\n            {' '}\n            <i className={'fab fa-github'} />{' '}\n          </ui.Icon>{' '}\n          <span>GitHub</span>{' '}\n        </ui.Button>{' '}\n        <ui.Button>\n          {' '}\n          <ui.Icon>\n            {' '}\n            <i className={'fab fa-github'} />{' '}\n          </ui.Icon>{' '}\n          <span>GitHub</span>{' '}\n        </ui.Button>{' '}\n        <ui.Button size={'medium'}>\n          {' '}\n          <ui.Icon>\n            {' '}\n            <i className={'fab fa-github'} />{' '}\n          </ui.Icon>{' '}\n          <span>GitHub</span>{' '}\n        </ui.Button>{' '}\n        <ui.Button size={'large'}>\n          {' '}\n          <ui.Icon size={'medium'}>\n            {' '}\n            <i className={'fab fa-github'} />{' '}\n          </ui.Icon>{' '}\n          <span>GitHub</span>{' '}\n        </ui.Button>\n      </ui.Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example021Demo,
} satisfies StoryObj

export const Example022 = {
  name: 'Icon-only buttons',
  parameters: {
    official: { id: 'elements-button/with-font-awesome-icons/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example022Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              If the button only contains an icon, Bulma will make sure the\n              button remains <strong>square</strong>, no matter the size of the\n              button <em>or</em> of the icon.\n            </p>{' '}\n          </ui.Content>{' '}\n          <ui.Buttons as={'p'}>\n            <ui.Button size={'small'}>\n              {' '}\n              <ui.Icon size={'small'}>\n                {' '}\n                <i className={'fas fa-heading'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>\n          </ui.Buttons>{' '}\n          <ui.Buttons as={'p'}>\n            <ui.Button>\n              {' '}\n              <ui.Icon size={'small'}>\n                {' '}\n                <i className={'fas fa-heading'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>{' '}\n            <ui.Button>\n              {' '}\n              <ui.Icon>\n                {' '}\n                <i className={'fas fa-heading fa-lg'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>\n          </ui.Buttons>{' '}\n          <ui.Buttons as={'p'}>\n            <ui.Button size={'medium'}>\n              {' '}\n              <ui.Icon size={'small'}>\n                {' '}\n                <i className={'fas fa-heading'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>{' '}\n            <ui.Button size={'medium'}>\n              {' '}\n              <ui.Icon>\n                {' '}\n                <i className={'fas fa-heading fa-lg'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>{' '}\n            <ui.Button size={'medium'}>\n              {' '}\n              <ui.Icon size={'medium'}>\n                {' '}\n                <i className={'fas fa-heading fa-2x'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>\n          </ui.Buttons>{' '}\n          <ui.Buttons as={'p'}>\n            <ui.Button size={'large'}>\n              {' '}\n              <ui.Icon size={'small'}>\n                {' '}\n                <i className={'fas fa-heading'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>{' '}\n            <ui.Button size={'large'}>\n              {' '}\n              <ui.Icon>\n                {' '}\n                <i className={'fas fa-heading fa-lg'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>{' '}\n            <ui.Button size={'large'}>\n              {' '}\n              <ui.Icon size={'medium'}>\n                {' '}\n                <i className={'fas fa-heading fa-2x'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Button>\n          </ui.Buttons>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<p class=\"buttons\">\\n  <button class=\"button is-small\">\\n    <span class=\"icon is-small\">\\n      <i class=\"fas fa-heading\"></i>\\n    </span>\\n  </button>\\n</p>\\n<p class=\"buttons\">\\n  <button class=\"button\">\\n    <span class=\"icon is-small\">\\n      <i class=\"fas fa-heading\"></i>\\n    </span>\\n  </button>\\n  <button class=\"button\">\\n    <span class=\"icon\">\\n      <i class=\"fas fa-heading fa-lg\"></i>\\n    </span>\\n  </button>\\n</p>\\n<p class=\"buttons\">\\n  <button class=\"button is-medium\">\\n    <span class=\"icon is-small\">\\n      <i class=\"fas fa-heading\"></i>\\n    </span>\\n  </button>\\n  <button class=\"button is-medium\">\\n    <span class=\"icon\">\\n      <i class=\"fas fa-heading fa-lg\"></i>\\n    </span>\\n  </button>\\n  <button class=\"button is-medium\">\\n    <span class=\"icon is-medium\">\\n      <i class=\"fas fa-heading fa-2x\"></i>\\n    </span>\\n  </button>\\n</p>\\n<p class=\"buttons\">\\n  <button class=\"button is-large\">\\n    <span class=\"icon is-small\">\\n      <i class=\"fas fa-heading\"></i>\\n    </span>\\n  </button>\\n  <button class=\"button is-large\">\\n    <span class=\"icon\">\\n      <i class=\"fas fa-heading fa-lg\"></i>\\n    </span>\\n  </button>\\n  <button class=\"button is-large\">\\n    <span class=\"icon is-medium\">\\n      <i class=\"fas fa-heading fa-2x\"></i>\\n    </span>\\n  </button>\\n</p>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example022Demo,
} satisfies StoryObj

export const Example023 = {
  name: 'Grouped buttons',
  parameters: {
    official: { id: 'elements-button/button-group/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example023Demo() {\n  return (\n    <>\n      <ui.Field layout={'grouped'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'link'}>Save changes</ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>Cancel</ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'danger'}>Delete post</ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example023Demo,
} satisfies StoryObj

export const Example024 = {
  name: 'Attached buttons',
  parameters: {
    official: { id: 'elements-button/button-addons/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example024Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-align-left'} />{' '}\n            </ui.Icon>{' '}\n            <span>Left</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-align-center'} />{' '}\n            </ui.Icon>{' '}\n            <span>Center</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-align-right'} />{' '}\n            </ui.Icon>{' '}\n            <span>Right</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example024Demo,
} satisfies StoryObj

export const Example025 = {
  name: 'Grouped button addons',
  parameters: {
    official: { id: 'elements-button/button-group-with-addons/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example025Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-bold'} />{' '}\n            </ui.Icon>{' '}\n            <span>Bold</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-italic'} />{' '}\n            </ui.Icon>{' '}\n            <span>Italic</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-underline'} />{' '}\n            </ui.Icon>{' '}\n            <span>Underline</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-align-left'} />{' '}\n            </ui.Icon>{' '}\n            <span>Left</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-align-center'} />{' '}\n            </ui.Icon>{' '}\n            <span>Center</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button>\n            {' '}\n            <ui.Icon size={'small'}>\n              {' '}\n              <i className={'fas fa-align-right'} />{' '}\n            </ui.Icon>{' '}\n            <span>Right</span>{' '}\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example025Demo,
} satisfies StoryObj

export const Example026 = {
  name: 'Button list',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example026Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              You can create a <strong>list of buttons</strong> by using the{' '}\n              <code>{'buttons'}</code> container.\n            </p>{' '}\n          </ui.Content>{' '}\n          <div className={'bd-example'}>\n            {' '}\n            <ui.Buttons>\n              <ui.Button color={'success'}>Save changes</ui.Button>{' '}\n              <ui.Button color={'info'}>Save and continue</ui.Button>{' '}\n              <ui.Button color={'danger'}>Cancel</ui.Button>\n            </ui.Buttons>{' '}\n          </div>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<div class=\"buttons\">\\n  <button class=\"button is-success\">Save changes</button>\\n  <button class=\"button is-info\">Save and continue</button>\\n  <button class=\"button is-danger\">Cancel</button>\\n</div>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example026Demo,
} satisfies StoryObj

export const Example027 = {
  name: 'Wrapping button list',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example027Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              If the list is <strong>very long</strong>, it will automatically\n              wrap on <strong>multiple lines</strong>, while keeping all buttons{' '}\n              <strong>evenly spaced</strong>.\n            </p>{' '}\n          </ui.Content>{' '}\n          <div className={'bd-example'}>\n            {' '}\n            <ui.Buttons>\n              <ui.Button>One</ui.Button> <ui.Button>Two</ui.Button>{' '}\n              <ui.Button>Three</ui.Button> <ui.Button>Four</ui.Button>{' '}\n              <ui.Button>Five</ui.Button> <ui.Button>Six</ui.Button>{' '}\n              <ui.Button>Seven</ui.Button> <ui.Button>Eight</ui.Button>{' '}\n              <ui.Button>Nine</ui.Button> <ui.Button>Ten</ui.Button>{' '}\n              <ui.Button>Eleven</ui.Button> <ui.Button>Twelve</ui.Button>{' '}\n              <ui.Button>Thirteen</ui.Button> <ui.Button>Fourteen</ui.Button>{' '}\n              <ui.Button>Fifteen</ui.Button> <ui.Button>Sixteen</ui.Button>{' '}\n              <ui.Button>Seventeen</ui.Button> <ui.Button>Eighteen</ui.Button>{' '}\n              <ui.Button>Nineteen</ui.Button> <ui.Button>Twenty</ui.Button>\n            </ui.Buttons>{' '}\n          </div>{' '}\n        </ui.Column>{' '}\n        <ui.Column className={'bd-highlight-full'}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<div class=\"buttons\">\\n  <button class=\"button\">One</button>\\n  <button class=\"button\">Two</button>\\n  <button class=\"button\">Three</button>\\n  <button class=\"button\">Four</button>\\n  <button class=\"button\">Five</button>\\n  <button class=\"button\">Six</button>\\n  <button class=\"button\">Seven</button>\\n  <button class=\"button\">Eight</button>\\n  <button class=\"button\">Nine</button>\\n  <button class=\"button\">Ten</button>\\n  <button class=\"button\">Eleven</button>\\n  <button class=\"button\">Twelve</button>\\n  <button class=\"button\">Thirteen</button>\\n  <button class=\"button\">Fourteen</button>\\n  <button class=\"button\">Fifteen</button>\\n  <button class=\"button\">Sixteen</button>\\n  <button class=\"button\">Seventeen</button>\\n  <button class=\"button\">Eighteen</button>\\n  <button class=\"button\">Nineteen</button>\\n  <button class=\"button\">Twenty</button>\\n</div>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example027Demo,
} satisfies StoryObj

export const Example028 = {
  name: 'Attached button list',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example028Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              You can <strong>attach buttons together</strong> with the{' '}\n              <code>{'has-addons'}</code> modifier.\n            </p>{' '}\n          </ui.Content>{' '}\n          <div className={'bd-example'}>\n            {' '}\n            <ui.Buttons addons>\n              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}\n              <ui.Button>No</ui.Button>\n            </ui.Buttons>{' '}\n          </div>{' '}\n        </ui.Column>{' '}\n        <ui.Column className={'bd-highlight-full'}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<div class=\"buttons has-addons\">\\n  <button class=\"button\">Yes</button>\\n  <button class=\"button\">Maybe</button>\\n  <button class=\"button\">No</button>\\n</div>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example028Demo,
} satisfies StoryObj

export const Example029 = {
  name: 'Aligned button addons',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example029Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              Use the <code>{'is-centered'}</code> or the{' '}\n              <code>{'is-right'}</code> modifiers to alter the{' '}\n              <strong>alignment</strong>.\n            </p>{' '}\n          </ui.Content>{' '}\n          <div className={'bd-example'}>\n            {' '}\n            <ui.Buttons addons align={'center'}>\n              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}\n              <ui.Button>No</ui.Button>\n            </ui.Buttons>{' '}\n            <ui.Buttons addons align={'right'}>\n              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}\n              <ui.Button>No</ui.Button>\n            </ui.Buttons>{' '}\n          </div>{' '}\n        </ui.Column>{' '}\n        <ui.Column className={'bd-highlight-full'}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<div class=\"buttons has-addons is-centered\">\\n  <button class=\"button\">Yes</button>\\n  <button class=\"button\">Maybe</button>\\n  <button class=\"button\">No</button>\\n</div>\\n\\n<div class=\"buttons has-addons is-right\">\\n  <button class=\"button\">Yes</button>\\n  <button class=\"button\">Maybe</button>\\n  <button class=\"button\">No</button>\\n</div>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example029Demo,
} satisfies StoryObj

export const Example030 = {
  name: 'Selected button addons',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example030Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              You can use any <strong>modifier</strong> class on each button to\n              differentiate them. Make sure to add the{' '}\n              <code>{'is-selected'}</code> modifier as well to make sure the\n              selected button is <em>above</em> its siblings.\n            </p>{' '}\n          </ui.Content>{' '}\n          <div className={'bd-example'}>\n            {' '}\n            <ui.Buttons addons>\n              <ui.Button color={'success'} selected>\n                Yes\n              </ui.Button>{' '}\n              <ui.Button>Maybe</ui.Button> <ui.Button>No</ui.Button>\n            </ui.Buttons>{' '}\n            <ui.Buttons addons>\n              <ui.Button>Yes</ui.Button>{' '}\n              <ui.Button color={'info'} selected>\n                Maybe\n              </ui.Button>{' '}\n              <ui.Button>No</ui.Button>\n            </ui.Buttons>{' '}\n            <ui.Buttons addons>\n              <ui.Button>Yes</ui.Button> <ui.Button>Maybe</ui.Button>{' '}\n              <ui.Button color={'danger'} selected>\n                No\n              </ui.Button>\n            </ui.Buttons>{' '}\n          </div>{' '}\n        </ui.Column>{' '}\n        <ui.Column className={'bd-highlight-full'}>\n          {' '}\n          <div className={'highlight'}>\n            <pre>\n              <code className={'language-html'}>\n                {\n                  '\\n<div class=\"buttons has-addons\">\\n  <button class=\"button is-success is-selected\">Yes</button>\\n  <button class=\"button\">Maybe</button>\\n  <button class=\"button\">No</button>\\n</div>\\n\\n<div class=\"buttons has-addons\">\\n  <button class=\"button\">Yes</button>\\n  <button class=\"button is-info is-selected\">Maybe</button>\\n  <button class=\"button\">No</button>\\n</div>\\n\\n<div class=\"buttons has-addons\">\\n  <button class=\"button\">Yes</button>\\n  <button class=\"button\">Maybe</button>\\n  <button class=\"button is-danger is-selected\">No</button>\\n</div>\\n'\n                }\n              </code>\n            </pre>\n          </div>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example030Demo,
} satisfies StoryObj

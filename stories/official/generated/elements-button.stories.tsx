import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Button,
  Buttons,
  Content,
  Control,
  Field,
  Icon,
  LinkButton,
  Message,
  MessageBody,
} from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Button'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The classic '}
          <strong data-official-prose="">{'button'}</strong>
          {', in different colors, sizes, and states'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <strong data-official-prose="">{'button'}</strong>
            {
              " is an essential element of any design. It's meant to look and behave as an "
            }
            <strong data-official-prose="">{'interactive'}</strong>
            {' element of your page. '}
          </p>
        </div>
        <div data-official-example="elements-button/basic/001">
          <Canvas of={DefaultButtonStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'button'}</code>
            {' class can be used on:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'<a>'}</code>
              {' anchor links'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<button>'}</code>
              {' form buttons'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<input type="submit">'}</code>
              {' submit inputs'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<input type="reset">'}</code>
              {' reset inputs'}
            </li>
          </ul>
        </div>
        <div data-official-example="elements-button/basic/002">
          <Canvas of={NativeButtonElementsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Colors '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#colors'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The button is available in all the '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'. '}
          </p>
        </div>
        <div data-official-example="elements-button/colors/001">
          <Canvas of={NeutralAndTextButtonsStory} />
        </div>
        <div data-official-example="elements-button/colors/002">
          <Canvas of={SemanticColorsStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Each color also comes in its '}
            <strong data-official-prose="">{'light version'}</strong>
            {'. Simply append the modifier '}
            <code data-official-prose="">{'is-light'}</code>
            {
              ' to the color modifier to apply the light version of the button. '
            }
          </p>
        </div>
        <div data-official-example="elements-button/colors/003">
          <Canvas of={LightColorsStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'A '}
            <strong data-official-prose="">{'dark version'}</strong>
            {' also exists. Simply append the modifier '}
            <code data-official-prose="">{'is-dark'}</code>
            {'.'}
          </p>
        </div>
        <div data-official-example="elements-button/colors/004">
          <Canvas of={DarkColorsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Sizes '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sizes'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The button comes in '}
            <strong data-official-prose="">{'4 different sizes:'}</strong>
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">{'small'}</li>
            <li data-official-prose="">{'normal'}</li>
            <li data-official-prose="">{'medium'}</li>
            <li data-official-prose="">{'large'}</li>
          </ul>
          <p data-official-prose="">
            {' While the default size is the '}
            <strong data-official-prose="">{'normal'}</strong>
            {' one, the '}
            <code data-official-prose="">{'is-normal'}</code>
            {
              ' modifier exists in case you need to reset the button to its normal size. '
            }
          </p>
        </div>
        <div data-official-example="elements-button/sizes/001">
          <Canvas of={ButtonSizesStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can change the size of '}
            <strong data-official-prose="">{'multiple buttons'}</strong>
            {' at once by wrapping them in a '}
            <code data-official-prose="">{'buttons'}</code>
            {' parent, and applying one of 3 modifiers: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'buttons are-small'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'buttons are-medium'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'buttons are-large'}</code>
            </li>
          </ul>
        </div>
        <div data-official-example="elements-button/sizes/002">
          <Canvas of={SharedMediumSizeStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can change the size of only a '}
            <strong data-official-prose="">{'subset of buttons'}</strong>
            {' by simply applying a modifier class to them. '}
            <br data-official-prose="" />
            {' For example, if you want all buttons to be '}
            <strong data-official-prose="">{'small'}</strong>
            {' but still have one in its '}
            <strong data-official-prose="">{'normal'}</strong>
            {' size, simply do the following: '}
          </p>
        </div>
        <div data-official-example="elements-button/sizes/003">
          <Canvas of={IndividualSizeOverrideStory} />
        </div>
        <h3
          data-official-prose=""
          id={'responsive-sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Responsive sizes '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#responsive-sizes'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              " If you want different button sizes for each breakpoint, you can use Bulma's "
            }
            <strong data-official-prose="">{'responsive'}</strong>
            {' buttons. Simply append the '}
            <code data-official-prose="">{'is-responsive'}</code>
            {' modifier: '}
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Name'}</th>
              <th data-official-prose="">{'Fixed size'}</th>
              <th data-official-prose="">
                {'Responsive size '}
                <small
                  data-official-prose=""
                  className={'has-text-grey has-text-weight-normal'}
                >
                  {'(resize window to see in action)'}
                </small>
              </th>
              <th data-official-prose="">{'Code'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">{'Default'}</td>
              <td data-official-prose="">
                <button data-official-prose="" className={'button is-default'}>
                  {' Default '}
                </button>
              </td>
              <td data-official-prose="">
                <button
                  data-official-prose=""
                  className={'button is-responsive'}
                >
                  {' Default '}
                </button>
              </td>
              <td data-official-prose="">
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-responsive">\n  Default\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Small'}</td>
              <td data-official-prose="">
                <button data-official-prose="" className={'button is-small'}>
                  {' Small '}
                </button>
              </td>
              <td data-official-prose="">
                <button
                  data-official-prose=""
                  className={'button is-small is-responsive'}
                >
                  {' Small '}
                </button>
              </td>
              <td data-official-prose="">
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-small is-responsive">\n  Small\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Normal'}</td>
              <td data-official-prose="">
                <button data-official-prose="" className={'button is-normal'}>
                  {' Normal '}
                </button>
              </td>
              <td data-official-prose="">
                <button
                  data-official-prose=""
                  className={'button is-normal is-responsive'}
                >
                  {' Normal '}
                </button>
              </td>
              <td data-official-prose="">
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-normal is-responsive">\n  Normal\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Medium'}</td>
              <td data-official-prose="">
                <button data-official-prose="" className={'button is-medium'}>
                  {' Medium '}
                </button>
              </td>
              <td data-official-prose="">
                <button
                  data-official-prose=""
                  className={'button is-medium is-responsive'}
                >
                  {' Medium '}
                </button>
              </td>
              <td data-official-prose="">
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-medium is-responsive">\n  Medium\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Large'}</td>
              <td data-official-prose="">
                <button data-official-prose="" className={'button is-large'}>
                  {' Large '}
                </button>
              </td>
              <td data-official-prose="">
                <button
                  data-official-prose=""
                  className={'button is-large is-responsive'}
                >
                  {' Large '}
                </button>
              </td>
              <td data-official-prose="">
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<button class="button is-large is-responsive">\n  Large\n</button>\n'
                      }
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can customise the sizes by overwriting the '}
            <code data-official-prose="">{'$button-responsive-sizes'}</code>
            {' Sass variable. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'displays'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Displays '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#displays'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-example="elements-button/displays/001">
          <Canvas of={FullWidthButtonsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'styles'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Styles '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#styles'}
          >
            {' # '}
          </a>
        </h3>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Outlined'}
        </h4>
        <div data-official-example="elements-button/outlined/001">
          <Canvas of={OutlinedButtonsStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {
            'Inverted (the text color becomes the background color, and vice-versa)'
          }
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={
              'elements-button/inverted-the-text-color-becomes-the-background-color-and-vice-versa/001'
            }
          >
            <div data-official-example="elements-button/inverted-the-text-color-becomes-the-background-color-and-vice-versa/001">
              <Canvas of={InvertedButtonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<button class="button is-link is-inverted">Inverted</button>\n<button class="button is-primary is-inverted">Inverted</button>\n<button class="button is-info is-inverted">Inverted</button>\n<button class="button is-success is-inverted">Inverted</button>\n<button class="button is-danger is-inverted">Inverted</button>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Rounded buttons'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/rounded-buttons/001'}
          >
            <div data-official-example="elements-button/rounded-buttons/001">
              <Canvas of={RoundedButtonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<button class="button is-rounded">Rounded</button>\n<button class="button is-link is-rounded">Rounded</button>\n<button class="button is-primary is-rounded">Rounded</button>\n<button class="button is-info is-rounded">Rounded</button>\n<button class="button is-success is-rounded">Rounded</button>\n<button class="button is-danger is-rounded">Rounded</button>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'states'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' States '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#states'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Bulma styles the different '}
            <strong data-official-prose="">{'states'}</strong>
            {
              ' of its buttons. Each state is available as a pseudo-class and a CSS class: '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{':hover'}</code>
              {' and '}
              <code data-official-prose="">{'is-hovered'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{':focus'}</code>
              {' and '}
              <code data-official-prose="">{'is-focused'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{':active'}</code>
              {' and '}
              <code data-official-prose="">{'is-active'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {
              'This allows you to obtain the style of a certain state without having to trigger it.'
            }
          </p>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Normal'}
        </h4>
        <div data-official-example="elements-button/normal/001">
          <Canvas of={NormalStateStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Hover'}
        </h4>
        <div data-official-example="elements-button/hover/001">
          <Canvas of={HoverStateStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Focus'}
        </h4>
        <div data-official-example="elements-button/focus/001">
          <Canvas of={FocusStateStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Active'}
        </h4>
        <div data-official-example="elements-button/active/001">
          <Canvas of={ActiveStateStory} />
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Loading'}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can very easily turn a button into its '}
            <strong data-official-prose="">{'loading'}</strong>
            {' version by appending the '}
            <code data-official-prose="">{'is-loading'}</code>
            {
              " modifier. You don't even need to remove the inner text, which allows the button to maintain its "
            }
            <strong data-official-prose="">{'original size'}</strong>
            {' between its default and loading states. '}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/loading/001'}
          >
            <div data-official-example="elements-button/loading/001">
              <Canvas of={LoadingStateStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<button class="button is-loading">Loading</button>\n<button class="button is-link is-loading">Loading</button>\n<button class="button is-primary is-loading">Loading</button>\n<button class="button is-info is-loading">Loading</button>\n<button class="button is-success is-loading">Loading</button>\n<button class="button is-warning is-loading">Loading</button>\n<button class="button is-danger is-loading">Loading</button>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" id={'static-button'} className={'subtitle'}>
          {'Static'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/static-button/001'}
          >
            <div data-official-example="elements-button/static-button/001">
              <Canvas of={StaticButtonStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {'\n<span class="button is-static">Static</span>\n'}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Disabled'}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Bulma supports the use of the '}
            <code data-official-prose="">{'disabled'}</code>{' '}
            <a
              data-official-prose=""
              href={
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
              }
              target={'_blank'}
            >
              {'Boolean HTML attribute'}
            </a>
            {', which prevents the user from interacting with the button. '}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/disabled/001'}
          >
            <div data-official-example="elements-button/disabled/001">
              <Canvas of={DisabledButtonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<button class="button" title="Disabled button" disabled>Disabled</button>\n<button class="button is-link" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-primary" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-info" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-success" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-warning" title="Disabled button" disabled>\n  Disabled\n</button>\n<button class="button is-danger" title="Disabled button" disabled>\n  Disabled\n</button>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'With Font Awesome icons'}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Bulma buttons can easily be enhanced by adding a '}
            <strong data-official-prose="">{'Font Awesome icon'}</strong>
            {'. For the best results, wrap the inner text in a separate '}
            <code data-official-prose="">{'<span>'}</code>
            {' element. '}
          </p>
        </div>
        <div data-official-example="elements-button/with-font-awesome-icons/001">
          <Canvas of={ButtonsWithIconsStory} />
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/with-font-awesome-icons/002'}
          >
            <div data-official-example="elements-button/with-font-awesome-icons/002">
              <Canvas of={IconOnlyButtonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<p class="buttons">\n  <button class="button is-small">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n</p>\n<p class="buttons">\n  <button class="button">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n  <button class="button">\n    <span class="icon">\n      <i class="fas fa-heading fa-lg"></i>\n    </span>\n  </button>\n</p>\n<p class="buttons">\n  <button class="button is-medium">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n  <button class="button is-medium">\n    <span class="icon">\n      <i class="fas fa-heading fa-lg"></i>\n    </span>\n  </button>\n  <button class="button is-medium">\n    <span class="icon is-medium">\n      <i class="fas fa-heading fa-2x"></i>\n    </span>\n  </button>\n</p>\n<p class="buttons">\n  <button class="button is-large">\n    <span class="icon is-small">\n      <i class="fas fa-heading"></i>\n    </span>\n  </button>\n  <button class="button is-large">\n    <span class="icon">\n      <i class="fas fa-heading fa-lg"></i>\n    </span>\n  </button>\n  <button class="button is-large">\n    <span class="icon is-medium">\n      <i class="fas fa-heading fa-2x"></i>\n    </span>\n  </button>\n</p>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'button-group'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Button group '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#button-group'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to '}
            <strong data-official-prose="">{'group'}</strong>
            {' buttons together on a '}
            <strong data-official-prose="">{'single line'}</strong>
            {', use the '}
            <code data-official-prose="">{'is-grouped'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'field'}</code>
            {' container: '}
          </p>
        </div>
        <div data-official-example="elements-button/button-group/001">
          <Canvas of={GroupedButtonsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'button-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Button addons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#button-addons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to use buttons as '}
            <strong data-official-prose="">{'addons'}</strong>
            {', use the '}
            <code data-official-prose="">{'has-addons'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'field'}</code>
            {' container: '}
          </p>
        </div>
        <div data-official-example="elements-button/button-addons/001">
          <Canvas of={AttachedButtonsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'button-group-with-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Button group with addons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#button-group-with-addons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can group together addons as well:'}
          </p>
        </div>
        <div data-official-example="elements-button/button-group-with-addons/001">
          <Canvas of={GroupedButtonAddonsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'list-of-buttons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' List of buttons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-buttons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/list-of-buttons/001'}
          >
            <div data-official-example="elements-button/list-of-buttons/001">
              <Canvas of={ButtonListStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="buttons">\n  <button class="button is-success">Save changes</button>\n  <button class="button is-info">Save and continue</button>\n  <button class="button is-danger">Cancel</button>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/list-of-buttons/002'}
          >
            <div data-official-example="elements-button/list-of-buttons/002">
              <Canvas of={WrappingButtonListStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="buttons">\n  <button class="button">One</button>\n  <button class="button">Two</button>\n  <button class="button">Three</button>\n  <button class="button">Four</button>\n  <button class="button">Five</button>\n  <button class="button">Six</button>\n  <button class="button">Seven</button>\n  <button class="button">Eight</button>\n  <button class="button">Nine</button>\n  <button class="button">Ten</button>\n  <button class="button">Eleven</button>\n  <button class="button">Twelve</button>\n  <button class="button">Thirteen</button>\n  <button class="button">Fourteen</button>\n  <button class="button">Fifteen</button>\n  <button class="button">Sixteen</button>\n  <button class="button">Seventeen</button>\n  <button class="button">Eighteen</button>\n  <button class="button">Nineteen</button>\n  <button class="button">Twenty</button>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/list-of-buttons/003'}
          >
            <div data-official-example="elements-button/list-of-buttons/003">
              <Canvas of={AttachedButtonListStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="buttons has-addons">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/list-of-buttons/004'}
          >
            <div data-official-example="elements-button/list-of-buttons/004">
              <Canvas of={AlignedButtonAddonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="buttons has-addons is-centered">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n\n<div class="buttons has-addons is-right">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-button/list-of-buttons/005'}
          >
            <div data-official-example="elements-button/list-of-buttons/005">
              <Canvas of={SelectedButtonAddonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="buttons has-addons">\n  <button class="button is-success is-selected">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button">No</button>\n</div>\n\n<div class="buttons has-addons">\n  <button class="button">Yes</button>\n  <button class="button is-info is-selected">Maybe</button>\n  <button class="button">No</button>\n</div>\n\n<div class="buttons has-addons">\n  <button class="button">Yes</button>\n  <button class="button">Maybe</button>\n  <button class="button is-danger is-selected">No</button>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'message is-info'}>
          <div data-official-prose="" className={'message-header'}>
            <p data-official-prose="">
              {' Difference between '}
              <a
                data-official-prose=""
                href={'https://bulma.io/documentation/form/general/#form-group'}
              >
                {'form groups'}
              </a>
              {' and '}
              <strong data-official-prose="">{'list of buttons'}</strong>
            </p>
          </div>
          <div data-official-prose="" className={'message-body'}>
            <div data-official-prose="" className={'content'}>
              <p data-official-prose="">
                {
                  ' While this list of buttons style can be achieved with either '
                }
                <code data-official-prose="">{'field is-grouped'}</code>
                {' or the new '}
                <code data-official-prose="">{'buttons'}</code>
                {' class, there are a few differences: '}
              </p>
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'buttons'}</code>
                  {' has a '}
                  <strong data-official-prose="">{'simpler markup'}</strong>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'buttons'}</code>
                  {' can only contain '}
                  <code data-official-prose="">{'button'}</code>
                  {' elements'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'field is-grouped'}</code>
                  {' can contain '}
                  <em data-official-prose="">{'any'}</em>
                  {' type of '}
                  <code data-official-prose="">{'control'}</code>
                  {' inputs'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'field is-grouped'}</code>
                  {' can be forced to fit all controls on a '}
                  <strong data-official-prose="">{'single line'}</strong>
                </li>
                <li data-official-prose="">
                  {'with '}
                  <code data-official-prose="">{'field is-grouped'}</code>
                  {' you can '}
                  <strong data-official-prose="">{'expand'}</strong>
                  {' one of the controls'}
                </li>
              </ul>
              <p data-official-prose="">
                {' Basically, if you only want a list of '}
                <em data-official-prose="">{'buttons'}</em>
                {', using '}
                <code data-official-prose="">{'buttons'}</code>
                {
                  ' is recommended. If you need more control on the styling and the elements, use a '
                }
                <a
                  data-official-prose=""
                  href={
                    'https://bulma.io/documentation/form/general/#form-group'
                  }
                >
                  {'form group'}
                </a>
                {'. '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultButtonDemo() {
  return (
    <>
      <Buttons>
        <Button>Button</Button>
      </Buttons>
    </>
  )
}

function NativeButtonElementsDemo() {
  return (
    <>
      <Buttons>
        <LinkButton>Anchor</LinkButton>
        <Button>Button</Button>
        <Button type={'submit'} value={'Submit input'} as={'input'} />
        <Button type={'reset'} value={'Reset input'} as={'input'} />
      </Buttons>
    </>
  )
}

function NeutralAndTextButtonsDemo() {
  return (
    <>
      <Buttons>
        <Button color={'white'}>White</Button>
        <Button color={'light'}>Light</Button>
        <Button color={'dark'}>Dark</Button>
        <Button color={'black'}>Black</Button>
        <Button variant={'text'}>Text</Button>
        <Button variant={'ghost'}>Ghost</Button>
      </Buttons>
    </>
  )
}

function SemanticColorsDemo() {
  return (
    <>
      <Buttons>
        <Button color={'primary'}>Primary</Button>
        <Button color={'link'}>Link</Button>
      </Buttons>
      <Buttons>
        <Button color={'info'}>Info</Button>
        <Button color={'success'}>Success</Button>
        <Button color={'warning'}>Warning</Button>
        <Button color={'danger'}>Danger</Button>
      </Buttons>
    </>
  )
}

function LightColorsDemo() {
  return (
    <>
      <Buttons>
        <Button color={'primary'} tone={'light'}>
          Primary
        </Button>
        <Button color={'link'} tone={'light'}>
          Link
        </Button>
      </Buttons>
      <Buttons>
        <Button color={'info'} tone={'light'}>
          Info
        </Button>
        <Button color={'success'} tone={'light'}>
          Success
        </Button>
        <Button color={'warning'} tone={'light'}>
          Warning
        </Button>
        <Button color={'danger'} tone={'light'}>
          Danger
        </Button>
      </Buttons>
    </>
  )
}

function DarkColorsDemo() {
  return (
    <>
      <Buttons>
        <Button color={'primary'} tone={'dark'}>
          Primary
        </Button>
        <Button color={'link'} tone={'dark'}>
          Link
        </Button>
      </Buttons>
      <Buttons>
        <Button color={'info'} tone={'dark'}>
          Info
        </Button>
        <Button color={'success'} tone={'dark'}>
          Success
        </Button>
        <Button color={'warning'} tone={'dark'}>
          Warning
        </Button>
        <Button color={'danger'} tone={'dark'}>
          Danger
        </Button>
      </Buttons>
    </>
  )
}

function ButtonSizesDemo() {
  return (
    <>
      <Buttons>
        <Button size={'small'}>Small</Button>
        <Button>Default</Button>
        <Button size={'normal'}>Normal</Button>
        <Button size={'medium'}>Medium</Button>
        <Button size={'large'}>Large</Button>
      </Buttons>
    </>
  )
}

function SharedMediumSizeDemo() {
  return (
    <>
      <Buttons size={'medium'}>
        <Button>All</Button>
        <Button>Medium</Button>
        <Button>Size</Button>
      </Buttons>
    </>
  )
}

function IndividualSizeOverrideDemo() {
  return (
    <>
      <Buttons size={'small'}>
        <Button>Small</Button>
        <Button>Small</Button>
        <Button>Small</Button>
        <Button size={'normal'}>Normal</Button>
        <Button>Small</Button>
      </Buttons>
    </>
  )
}

function FullWidthButtonsDemo() {
  return (
    <>
      <Buttons>
        <Button size={'small'} fullWidth>
          Small
        </Button>
        <Button fullWidth>Normal</Button>
        <Button size={'medium'} fullWidth>
          Medium
        </Button>
        <Button size={'large'} fullWidth>
          Large
        </Button>
      </Buttons>
    </>
  )
}

function OutlinedButtonsDemo() {
  return (
    <>
      <Buttons>
        <Button color={'link'} outlined>
          Outlined
        </Button>
        <Button color={'primary'} outlined>
          Outlined
        </Button>
        <Button color={'info'} outlined>
          Outlined
        </Button>
        <Button color={'success'} outlined>
          Outlined
        </Button>
        <Button color={'danger'} outlined>
          Outlined
        </Button>
      </Buttons>
    </>
  )
}

function InvertedButtonsDemo() {
  return (
    <>
      <div className={'bd-callout is-primary'}>
        <Buttons>
          <Button color={'link'} inverted>
            Inverted
          </Button>
          <Button color={'primary'} inverted>
            Inverted
          </Button>
          <Button color={'info'} inverted>
            Inverted
          </Button>
          <Button color={'success'} inverted>
            Inverted
          </Button>
          <Button color={'danger'} inverted>
            Inverted
          </Button>
        </Buttons>
      </div>
    </>
  )
}

function RoundedButtonsDemo() {
  return (
    <>
      <Buttons>
        <Button rounded>Rounded</Button>
        <Button color={'link'} rounded>
          Rounded
        </Button>
        <Button color={'primary'} rounded>
          Rounded
        </Button>
        <Button color={'info'} rounded>
          Rounded
        </Button>
        <Button color={'success'} rounded>
          Rounded
        </Button>
        <Button color={'danger'} rounded>
          Rounded
        </Button>
      </Buttons>
    </>
  )
}

function NormalStateDemo() {
  return (
    <>
      <Buttons>
        <Button>Normal</Button>
        <Button color={'link'}>Normal</Button>
        <Button color={'primary'}>Normal</Button>
        <Button color={'info'}>Normal</Button>
        <Button color={'success'}>Normal</Button>
        <Button color={'warning'}>Normal</Button>
        <Button color={'danger'}>Normal</Button>
      </Buttons>
    </>
  )
}

function HoverStateDemo() {
  return (
    <>
      <Buttons>
        <Button state={'hovered'}>Hover</Button>
        <Button color={'link'} state={'hovered'}>
          Hover
        </Button>
        <Button color={'primary'} state={'hovered'}>
          Hover
        </Button>
        <Button color={'info'} state={'hovered'}>
          Hover
        </Button>
        <Button color={'success'} state={'hovered'}>
          Hover
        </Button>
        <Button color={'warning'} state={'hovered'}>
          Hover
        </Button>
        <Button color={'danger'} state={'hovered'}>
          Hover
        </Button>
      </Buttons>
    </>
  )
}

function FocusStateDemo() {
  return (
    <>
      <Buttons>
        <Button state={'focused'}>Focus</Button>
        <Button color={'link'} state={'focused'}>
          Focus
        </Button>
        <Button color={'primary'} state={'focused'}>
          Focus
        </Button>
        <Button color={'info'} state={'focused'}>
          Focus
        </Button>
        <Button color={'success'} state={'focused'}>
          Focus
        </Button>
        <Button color={'warning'} state={'focused'}>
          Focus
        </Button>
        <Button color={'danger'} state={'focused'}>
          Focus
        </Button>
      </Buttons>
    </>
  )
}

function ActiveStateDemo() {
  return (
    <>
      <Buttons>
        <Button state={'active'}>Active</Button>
        <Button color={'link'} state={'active'}>
          Active
        </Button>
        <Button color={'primary'} state={'active'}>
          Active
        </Button>
        <Button color={'info'} state={'active'}>
          Active
        </Button>
        <Button color={'success'} state={'active'}>
          Active
        </Button>
        <Button color={'warning'} state={'active'}>
          Active
        </Button>
        <Button color={'danger'} state={'active'}>
          Active
        </Button>
      </Buttons>
    </>
  )
}

function LoadingStateDemo() {
  return (
    <>
      <Buttons>
        <Button loading>Loading</Button>
        <Button color={'link'} loading>
          Loading
        </Button>
        <Button color={'primary'} loading>
          Loading
        </Button>
        <Button color={'info'} loading>
          Loading
        </Button>
        <Button color={'success'} loading>
          Loading
        </Button>
        <Button color={'warning'} loading>
          Loading
        </Button>
        <Button color={'danger'} loading>
          Loading
        </Button>
      </Buttons>
      <Message color={'info'} as={'div'}>
        <MessageBody>
          <p>
            Since the loading spinner is implemented using the{' '}
            <code>{'::after'}</code> pseudo-element, it is not supported by the{' '}
            <code>{'<input type="submit">'}</code> element. Consider using{' '}
            <code>{'<button type="submit">'}</code> instead.
          </p>
        </MessageBody>
      </Message>
    </>
  )
}

function StaticButtonDemo() {
  return (
    <>
      <Content>
        <p>
          You can create a <strong>non-interactive button</strong> by using the{' '}
          <code>{'is-static'}</code> modifier. This is useful to align a text
          label with an input, for example when using{' '}
          <a href={'https://bulma.io/documentation/form/general#form-addons'}>
            form addons
          </a>
          .
        </p>
      </Content>
      <Button className={'rb-is-static'} as={'span'}>
        Static
      </Button>
    </>
  )
}

function DisabledButtonsDemo() {
  return (
    <>
      <Buttons>
        <Button title={'Disabled button'} disabled>
          Disabled
        </Button>
        <Button title={'Disabled button'} disabled color={'link'}>
          Disabled
        </Button>
        <Button title={'Disabled button'} disabled color={'primary'}>
          Disabled
        </Button>
        <Button title={'Disabled button'} disabled color={'info'}>
          Disabled
        </Button>
        <Button title={'Disabled button'} disabled color={'success'}>
          Disabled
        </Button>
        <Button title={'Disabled button'} disabled color={'warning'}>
          Disabled
        </Button>
        <Button title={'Disabled button'} disabled color={'danger'}>
          Disabled
        </Button>
      </Buttons>
      <Message color={'danger'} as={'div'}>
        <MessageBody>
          <p>
            The <code>{'is-disabled'}</code> CSS class has been deprecated in
            favor of the <code>{'disabled'}</code> HTML attribute.{' '}
            <a href={'https://github.com/jgthms/bulma/issues/276'}>
              Learn more
            </a>
          </p>
        </MessageBody>
      </Message>
    </>
  )
}

function ButtonsWithIconsDemo() {
  return (
    <>
      <Buttons as={'p'}>
        <Button>
          <Icon size={'small'}>
            <i className={'fas fa-bold'} />
          </Icon>
        </Button>
        <Button>
          <Icon size={'small'}>
            <i className={'fas fa-italic'} />
          </Icon>
        </Button>
        <Button>
          <Icon size={'small'}>
            <i className={'fas fa-underline'} />
          </Icon>
        </Button>
      </Buttons>
      <Buttons as={'p'}>
        <Button>
          <Icon>
            <i className={'fab fa-github'} />
          </Icon>
          <span>GitHub</span>
        </Button>
        <Button color={'primary'}>
          <Icon>
            <i className={'fab fa-twitter'} />
          </Icon>
          <span>@jgthms</span>
        </Button>
        <Button color={'success'}>
          <Icon size={'small'}>
            <i className={'fas fa-check'} />
          </Icon>
          <span>Save</span>
        </Button>
        <Button color={'danger'} outlined>
          <span>Delete</span>
          <Icon size={'small'}>
            <i className={'fas fa-times'} />
          </Icon>
        </Button>
      </Buttons>
      <Buttons as={'p'}>
        <Button size={'small'}>
          <Icon size={'small'}>
            <i className={'fab fa-github'} />
          </Icon>
          <span>GitHub</span>
        </Button>
        <Button>
          <Icon>
            <i className={'fab fa-github'} />
          </Icon>
          <span>GitHub</span>
        </Button>
        <Button size={'medium'}>
          <Icon>
            <i className={'fab fa-github'} />
          </Icon>
          <span>GitHub</span>
        </Button>
        <Button size={'large'}>
          <Icon size={'medium'}>
            <i className={'fab fa-github'} />
          </Icon>
          <span>GitHub</span>
        </Button>
      </Buttons>
    </>
  )
}

function IconOnlyButtonsDemo() {
  return (
    <>
      <Content>
        <p>
          If the button only contains an icon, Bulma will make sure the button
          remains <strong>square</strong>, no matter the size of the button{' '}
          <em>or</em> of the icon.
        </p>
      </Content>
      <Buttons as={'p'}>
        <Button size={'small'}>
          <Icon size={'small'}>
            <i className={'fas fa-heading'} />
          </Icon>
        </Button>
      </Buttons>
      <Buttons as={'p'}>
        <Button>
          <Icon size={'small'}>
            <i className={'fas fa-heading'} />
          </Icon>
        </Button>
        <Button>
          <Icon>
            <i className={'fas fa-heading fa-lg'} />
          </Icon>
        </Button>
      </Buttons>
      <Buttons as={'p'}>
        <Button size={'medium'}>
          <Icon size={'small'}>
            <i className={'fas fa-heading'} />
          </Icon>
        </Button>
        <Button size={'medium'}>
          <Icon>
            <i className={'fas fa-heading fa-lg'} />
          </Icon>
        </Button>
        <Button size={'medium'}>
          <Icon size={'medium'}>
            <i className={'fas fa-heading fa-2x'} />
          </Icon>
        </Button>
      </Buttons>
      <Buttons as={'p'}>
        <Button size={'large'}>
          <Icon size={'small'}>
            <i className={'fas fa-heading'} />
          </Icon>
        </Button>
        <Button size={'large'}>
          <Icon>
            <i className={'fas fa-heading fa-lg'} />
          </Icon>
        </Button>
        <Button size={'large'}>
          <Icon size={'medium'}>
            <i className={'fas fa-heading fa-2x'} />
          </Icon>
        </Button>
      </Buttons>
    </>
  )
}

function GroupedButtonsDemo() {
  return (
    <>
      <Field layout={'grouped'}>
        <Control as={'p'}>
          <Button color={'link'}>Save changes</Button>
        </Control>
        <Control as={'p'}>
          <Button>Cancel</Button>
        </Control>
        <Control as={'p'}>
          <Button color={'danger'}>Delete post</Button>
        </Control>
      </Field>
    </>
  )
}

function AttachedButtonsDemo() {
  return (
    <>
      <Field layout={'addons'}>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-align-left'} />
            </Icon>
            <span>Left</span>
          </Button>
        </Control>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-align-center'} />
            </Icon>
            <span>Center</span>
          </Button>
        </Control>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-align-right'} />
            </Icon>
            <span>Right</span>
          </Button>
        </Control>
      </Field>
    </>
  )
}

function GroupedButtonAddonsDemo() {
  return (
    <>
      <Field layout={'addons'}>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-bold'} />
            </Icon>
            <span>Bold</span>
          </Button>
        </Control>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-italic'} />
            </Icon>
            <span>Italic</span>
          </Button>
        </Control>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-underline'} />
            </Icon>
            <span>Underline</span>
          </Button>
        </Control>
      </Field>
      <Field layout={'addons'}>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-align-left'} />
            </Icon>
            <span>Left</span>
          </Button>
        </Control>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-align-center'} />
            </Icon>
            <span>Center</span>
          </Button>
        </Control>
        <Control as={'p'}>
          <Button>
            <Icon size={'small'}>
              <i className={'fas fa-align-right'} />
            </Icon>
            <span>Right</span>
          </Button>
        </Control>
      </Field>
    </>
  )
}

function ButtonListDemo() {
  return (
    <>
      <Content>
        <p>
          You can create a <strong>list of buttons</strong> by using the{' '}
          <code>{'buttons'}</code> container.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Buttons>
          <Button color={'success'}>Save changes</Button>
          <Button color={'info'}>Save and continue</Button>
          <Button color={'danger'}>Cancel</Button>
        </Buttons>
      </div>
    </>
  )
}

function WrappingButtonListDemo() {
  return (
    <>
      <Content>
        <p>
          If the list is <strong>very long</strong>, it will automatically wrap
          on <strong>multiple lines</strong>, while keeping all buttons{' '}
          <strong>evenly spaced</strong>.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Buttons>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
          <Button>Five</Button>
          <Button>Six</Button>
          <Button>Seven</Button>
          <Button>Eight</Button>
          <Button>Nine</Button>
          <Button>Ten</Button>
          <Button>Eleven</Button>
          <Button>Twelve</Button>
          <Button>Thirteen</Button>
          <Button>Fourteen</Button>
          <Button>Fifteen</Button>
          <Button>Sixteen</Button>
          <Button>Seventeen</Button>
          <Button>Eighteen</Button>
          <Button>Nineteen</Button>
          <Button>Twenty</Button>
        </Buttons>
      </div>
    </>
  )
}

function AttachedButtonListDemo() {
  return (
    <>
      <Content>
        <p>
          You can <strong>attach buttons together</strong> with the{' '}
          <code>{'has-addons'}</code> modifier.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Buttons addons>
          <Button>Yes</Button>
          <Button>Maybe</Button>
          <Button>No</Button>
        </Buttons>
      </div>
    </>
  )
}

function AlignedButtonAddonsDemo() {
  return (
    <>
      <Content>
        <p>
          Use the <code>{'is-centered'}</code> or the <code>{'is-right'}</code>{' '}
          modifiers to alter the <strong>alignment</strong>.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Buttons addons align={'center'}>
          <Button>Yes</Button>
          <Button>Maybe</Button>
          <Button>No</Button>
        </Buttons>
        <Buttons addons align={'right'}>
          <Button>Yes</Button>
          <Button>Maybe</Button>
          <Button>No</Button>
        </Buttons>
      </div>
    </>
  )
}

function SelectedButtonAddonsDemo() {
  return (
    <>
      <Content>
        <p>
          You can use any <strong>modifier</strong> class on each button to
          differentiate them. Make sure to add the <code>{'is-selected'}</code>{' '}
          modifier as well to make sure the selected button is <em>above</em>{' '}
          its siblings.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Buttons addons>
          <Button color={'success'} selected>
            Yes
          </Button>
          <Button>Maybe</Button>
          <Button>No</Button>
        </Buttons>
        <Buttons addons>
          <Button>Yes</Button>
          <Button color={'info'} selected>
            Maybe
          </Button>
          <Button>No</Button>
        </Buttons>
        <Buttons addons>
          <Button>Yes</Button>
          <Button>Maybe</Button>
          <Button color={'danger'} selected>
            No
          </Button>
        </Buttons>
      </div>
    </>
  )
}

export const DefaultButtonStory = {
  name: 'Default button',
  parameters: {
    official: { id: 'elements-button/basic/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction DefaultButtonDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button>Button</Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultButtonDemo,
} satisfies StoryObj

export const NativeButtonElementsStory = {
  name: 'Native button elements',
  parameters: {
    official: { id: 'elements-button/basic/002' },
    docs: {
      source: {
        code: "import { Button, Buttons, LinkButton } from '@seagreenio/react-bulma'\n\nfunction NativeButtonElementsDemo() {\n  return (\n    <>\n      <Buttons>\n        <LinkButton>Anchor</LinkButton>\n        <Button>Button</Button>\n        <Button type={'submit'} value={'Submit input'} as={'input'} />\n        <Button type={'reset'} value={'Reset input'} as={'input'} />\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NativeButtonElementsDemo,
} satisfies StoryObj

export const NeutralAndTextButtonsStory = {
  name: 'Neutral and text buttons',
  parameters: {
    official: { id: 'elements-button/colors/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction NeutralAndTextButtonsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button color={'white'}>White</Button>\n        <Button color={'light'}>Light</Button>\n        <Button color={'dark'}>Dark</Button>\n        <Button color={'black'}>Black</Button>\n        <Button variant={'text'}>Text</Button>\n        <Button variant={'ghost'}>Ghost</Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NeutralAndTextButtonsDemo,
} satisfies StoryObj

export const SemanticColorsStory = {
  name: 'Semantic colors',
  parameters: {
    official: { id: 'elements-button/colors/002' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction SemanticColorsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button color={'primary'}>Primary</Button>\n        <Button color={'link'}>Link</Button>\n      </Buttons>\n      <Buttons>\n        <Button color={'info'}>Info</Button>\n        <Button color={'success'}>Success</Button>\n        <Button color={'warning'}>Warning</Button>\n        <Button color={'danger'}>Danger</Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SemanticColorsDemo,
} satisfies StoryObj

export const LightColorsStory = {
  name: 'Light colors',
  parameters: {
    official: { id: 'elements-button/colors/003' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction LightColorsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button color={'primary'} tone={'light'}>\n          Primary\n        </Button>\n        <Button color={'link'} tone={'light'}>\n          Link\n        </Button>\n      </Buttons>\n      <Buttons>\n        <Button color={'info'} tone={'light'}>\n          Info\n        </Button>\n        <Button color={'success'} tone={'light'}>\n          Success\n        </Button>\n        <Button color={'warning'} tone={'light'}>\n          Warning\n        </Button>\n        <Button color={'danger'} tone={'light'}>\n          Danger\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightColorsDemo,
} satisfies StoryObj

export const DarkColorsStory = {
  name: 'Dark colors',
  parameters: {
    official: { id: 'elements-button/colors/004' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction DarkColorsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button color={'primary'} tone={'dark'}>\n          Primary\n        </Button>\n        <Button color={'link'} tone={'dark'}>\n          Link\n        </Button>\n      </Buttons>\n      <Buttons>\n        <Button color={'info'} tone={'dark'}>\n          Info\n        </Button>\n        <Button color={'success'} tone={'dark'}>\n          Success\n        </Button>\n        <Button color={'warning'} tone={'dark'}>\n          Warning\n        </Button>\n        <Button color={'danger'} tone={'dark'}>\n          Danger\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DarkColorsDemo,
} satisfies StoryObj

export const ButtonSizesStory = {
  name: 'Button sizes',
  parameters: {
    official: { id: 'elements-button/sizes/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction ButtonSizesDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button size={'small'}>Small</Button>\n        <Button>Default</Button>\n        <Button size={'normal'}>Normal</Button>\n        <Button size={'medium'}>Medium</Button>\n        <Button size={'large'}>Large</Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ButtonSizesDemo,
} satisfies StoryObj

export const SharedMediumSizeStory = {
  name: 'Shared medium size',
  parameters: {
    official: { id: 'elements-button/sizes/002' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction SharedMediumSizeDemo() {\n  return (\n    <>\n      <Buttons size={'medium'}>\n        <Button>All</Button>\n        <Button>Medium</Button>\n        <Button>Size</Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SharedMediumSizeDemo,
} satisfies StoryObj

export const IndividualSizeOverrideStory = {
  name: 'Individual size override',
  parameters: {
    official: { id: 'elements-button/sizes/003' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction IndividualSizeOverrideDemo() {\n  return (\n    <>\n      <Buttons size={'small'}>\n        <Button>Small</Button>\n        <Button>Small</Button>\n        <Button>Small</Button>\n        <Button size={'normal'}>Normal</Button>\n        <Button>Small</Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: IndividualSizeOverrideDemo,
} satisfies StoryObj

export const FullWidthButtonsStory = {
  name: 'Full-width buttons',
  parameters: {
    official: { id: 'elements-button/displays/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction FullWidthButtonsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button size={'small'} fullWidth>\n          Small\n        </Button>\n        <Button fullWidth>Normal</Button>\n        <Button size={'medium'} fullWidth>\n          Medium\n        </Button>\n        <Button size={'large'} fullWidth>\n          Large\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullWidthButtonsDemo,
} satisfies StoryObj

export const OutlinedButtonsStory = {
  name: 'Outlined buttons',
  parameters: {
    official: { id: 'elements-button/outlined/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction OutlinedButtonsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button color={'link'} outlined>\n          Outlined\n        </Button>\n        <Button color={'primary'} outlined>\n          Outlined\n        </Button>\n        <Button color={'info'} outlined>\n          Outlined\n        </Button>\n        <Button color={'success'} outlined>\n          Outlined\n        </Button>\n        <Button color={'danger'} outlined>\n          Outlined\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: OutlinedButtonsDemo,
} satisfies StoryObj

export const InvertedButtonsStory = {
  name: 'Inverted buttons',
  parameters: {
    official: {
      id: 'elements-button/inverted-the-text-color-becomes-the-background-color-and-vice-versa/001',
    },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction InvertedButtonsDemo() {\n  return (\n    <>\n      <div className={'bd-callout is-primary'}>\n        <Buttons>\n          <Button color={'link'} inverted>\n            Inverted\n          </Button>\n          <Button color={'primary'} inverted>\n            Inverted\n          </Button>\n          <Button color={'info'} inverted>\n            Inverted\n          </Button>\n          <Button color={'success'} inverted>\n            Inverted\n          </Button>\n          <Button color={'danger'} inverted>\n            Inverted\n          </Button>\n        </Buttons>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InvertedButtonsDemo,
} satisfies StoryObj

export const RoundedButtonsStory = {
  name: 'Rounded buttons',
  parameters: {
    official: { id: 'elements-button/rounded-buttons/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction RoundedButtonsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button rounded>Rounded</Button>\n        <Button color={'link'} rounded>\n          Rounded\n        </Button>\n        <Button color={'primary'} rounded>\n          Rounded\n        </Button>\n        <Button color={'info'} rounded>\n          Rounded\n        </Button>\n        <Button color={'success'} rounded>\n          Rounded\n        </Button>\n        <Button color={'danger'} rounded>\n          Rounded\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RoundedButtonsDemo,
} satisfies StoryObj

export const NormalStateStory = {
  name: 'Normal state',
  parameters: {
    official: { id: 'elements-button/normal/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction NormalStateDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button>Normal</Button>\n        <Button color={'link'}>Normal</Button>\n        <Button color={'primary'}>Normal</Button>\n        <Button color={'info'}>Normal</Button>\n        <Button color={'success'}>Normal</Button>\n        <Button color={'warning'}>Normal</Button>\n        <Button color={'danger'}>Normal</Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalStateDemo,
} satisfies StoryObj

export const HoverStateStory = {
  name: 'Hover state',
  parameters: {
    official: { id: 'elements-button/hover/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction HoverStateDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button state={'hovered'}>Hover</Button>\n        <Button color={'link'} state={'hovered'}>\n          Hover\n        </Button>\n        <Button color={'primary'} state={'hovered'}>\n          Hover\n        </Button>\n        <Button color={'info'} state={'hovered'}>\n          Hover\n        </Button>\n        <Button color={'success'} state={'hovered'}>\n          Hover\n        </Button>\n        <Button color={'warning'} state={'hovered'}>\n          Hover\n        </Button>\n        <Button color={'danger'} state={'hovered'}>\n          Hover\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HoverStateDemo,
} satisfies StoryObj

export const FocusStateStory = {
  name: 'Focus state',
  parameters: {
    official: { id: 'elements-button/focus/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction FocusStateDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button state={'focused'}>Focus</Button>\n        <Button color={'link'} state={'focused'}>\n          Focus\n        </Button>\n        <Button color={'primary'} state={'focused'}>\n          Focus\n        </Button>\n        <Button color={'info'} state={'focused'}>\n          Focus\n        </Button>\n        <Button color={'success'} state={'focused'}>\n          Focus\n        </Button>\n        <Button color={'warning'} state={'focused'}>\n          Focus\n        </Button>\n        <Button color={'danger'} state={'focused'}>\n          Focus\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FocusStateDemo,
} satisfies StoryObj

export const ActiveStateStory = {
  name: 'Active state',
  parameters: {
    official: { id: 'elements-button/active/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction ActiveStateDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button state={'active'}>Active</Button>\n        <Button color={'link'} state={'active'}>\n          Active\n        </Button>\n        <Button color={'primary'} state={'active'}>\n          Active\n        </Button>\n        <Button color={'info'} state={'active'}>\n          Active\n        </Button>\n        <Button color={'success'} state={'active'}>\n          Active\n        </Button>\n        <Button color={'warning'} state={'active'}>\n          Active\n        </Button>\n        <Button color={'danger'} state={'active'}>\n          Active\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ActiveStateDemo,
} satisfies StoryObj

export const LoadingStateStory = {
  name: 'Loading state',
  parameters: {
    official: { id: 'elements-button/loading/001' },
    docs: {
      source: {
        code: "import { Button, Buttons, Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction LoadingStateDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button loading>Loading</Button>\n        <Button color={'link'} loading>\n          Loading\n        </Button>\n        <Button color={'primary'} loading>\n          Loading\n        </Button>\n        <Button color={'info'} loading>\n          Loading\n        </Button>\n        <Button color={'success'} loading>\n          Loading\n        </Button>\n        <Button color={'warning'} loading>\n          Loading\n        </Button>\n        <Button color={'danger'} loading>\n          Loading\n        </Button>\n      </Buttons>\n      <Message color={'info'} as={'div'}>\n        <MessageBody>\n          <p>\n            Since the loading spinner is implemented using the{' '}\n            <code>{'::after'}</code> pseudo-element, it is not supported by the{' '}\n            <code>{'<input type=\"submit\">'}</code> element. Consider using{' '}\n            <code>{'<button type=\"submit\">'}</code> instead.\n          </p>\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LoadingStateDemo,
} satisfies StoryObj

export const StaticButtonStory = {
  name: 'Static button',
  parameters: {
    official: { id: 'elements-button/static-button/001' },
    docs: {
      source: {
        code: "import { Button, Content } from '@seagreenio/react-bulma'\n\nfunction StaticButtonDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can create a <strong>non-interactive button</strong> by using the{' '}\n          <code>{'is-static'}</code> modifier. This is useful to align a text\n          label with an input, for example when using{' '}\n          <a href={'https://bulma.io/documentation/form/general#form-addons'}>\n            form addons\n          </a>\n          .\n        </p>\n      </Content>\n      <Button className={'rb-is-static'} as={'span'}>\n        Static\n      </Button>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: StaticButtonDemo,
} satisfies StoryObj

export const DisabledButtonsStory = {
  name: 'Disabled buttons',
  parameters: {
    official: { id: 'elements-button/disabled/001' },
    docs: {
      source: {
        code: "import { Button, Buttons, Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction DisabledButtonsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button title={'Disabled button'} disabled>\n          Disabled\n        </Button>\n        <Button title={'Disabled button'} disabled color={'link'}>\n          Disabled\n        </Button>\n        <Button title={'Disabled button'} disabled color={'primary'}>\n          Disabled\n        </Button>\n        <Button title={'Disabled button'} disabled color={'info'}>\n          Disabled\n        </Button>\n        <Button title={'Disabled button'} disabled color={'success'}>\n          Disabled\n        </Button>\n        <Button title={'Disabled button'} disabled color={'warning'}>\n          Disabled\n        </Button>\n        <Button title={'Disabled button'} disabled color={'danger'}>\n          Disabled\n        </Button>\n      </Buttons>\n      <Message color={'danger'} as={'div'}>\n        <MessageBody>\n          <p>\n            The <code>{'is-disabled'}</code> CSS class has been deprecated in\n            favor of the <code>{'disabled'}</code> HTML attribute.{' '}\n            <a href={'https://github.com/jgthms/bulma/issues/276'}>\n              Learn more\n            </a>\n          </p>\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DisabledButtonsDemo,
} satisfies StoryObj

export const ButtonsWithIconsStory = {
  name: 'Buttons with icons',
  parameters: {
    official: { id: 'elements-button/with-font-awesome-icons/001' },
    docs: {
      source: {
        code: "import { Button, Buttons, Icon } from '@seagreenio/react-bulma'\n\nfunction ButtonsWithIconsDemo() {\n  return (\n    <>\n      <Buttons as={'p'}>\n        <Button>\n          <Icon size={'small'}>\n            <i className={'fas fa-bold'} />\n          </Icon>\n        </Button>\n        <Button>\n          <Icon size={'small'}>\n            <i className={'fas fa-italic'} />\n          </Icon>\n        </Button>\n        <Button>\n          <Icon size={'small'}>\n            <i className={'fas fa-underline'} />\n          </Icon>\n        </Button>\n      </Buttons>\n      <Buttons as={'p'}>\n        <Button>\n          <Icon>\n            <i className={'fab fa-github'} />\n          </Icon>\n          <span>GitHub</span>\n        </Button>\n        <Button color={'primary'}>\n          <Icon>\n            <i className={'fab fa-twitter'} />\n          </Icon>\n          <span>@jgthms</span>\n        </Button>\n        <Button color={'success'}>\n          <Icon size={'small'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n          <span>Save</span>\n        </Button>\n        <Button color={'danger'} outlined>\n          <span>Delete</span>\n          <Icon size={'small'}>\n            <i className={'fas fa-times'} />\n          </Icon>\n        </Button>\n      </Buttons>\n      <Buttons as={'p'}>\n        <Button size={'small'}>\n          <Icon size={'small'}>\n            <i className={'fab fa-github'} />\n          </Icon>\n          <span>GitHub</span>\n        </Button>\n        <Button>\n          <Icon>\n            <i className={'fab fa-github'} />\n          </Icon>\n          <span>GitHub</span>\n        </Button>\n        <Button size={'medium'}>\n          <Icon>\n            <i className={'fab fa-github'} />\n          </Icon>\n          <span>GitHub</span>\n        </Button>\n        <Button size={'large'}>\n          <Icon size={'medium'}>\n            <i className={'fab fa-github'} />\n          </Icon>\n          <span>GitHub</span>\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ButtonsWithIconsDemo,
} satisfies StoryObj

export const IconOnlyButtonsStory = {
  name: 'Icon-only buttons',
  parameters: {
    official: { id: 'elements-button/with-font-awesome-icons/002' },
    docs: {
      source: {
        code: "import { Button, Buttons, Content, Icon } from '@seagreenio/react-bulma'\n\nfunction IconOnlyButtonsDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          If the button only contains an icon, Bulma will make sure the button\n          remains <strong>square</strong>, no matter the size of the button{' '}\n          <em>or</em> of the icon.\n        </p>\n      </Content>\n      <Buttons as={'p'}>\n        <Button size={'small'}>\n          <Icon size={'small'}>\n            <i className={'fas fa-heading'} />\n          </Icon>\n        </Button>\n      </Buttons>\n      <Buttons as={'p'}>\n        <Button>\n          <Icon size={'small'}>\n            <i className={'fas fa-heading'} />\n          </Icon>\n        </Button>\n        <Button>\n          <Icon>\n            <i className={'fas fa-heading fa-lg'} />\n          </Icon>\n        </Button>\n      </Buttons>\n      <Buttons as={'p'}>\n        <Button size={'medium'}>\n          <Icon size={'small'}>\n            <i className={'fas fa-heading'} />\n          </Icon>\n        </Button>\n        <Button size={'medium'}>\n          <Icon>\n            <i className={'fas fa-heading fa-lg'} />\n          </Icon>\n        </Button>\n        <Button size={'medium'}>\n          <Icon size={'medium'}>\n            <i className={'fas fa-heading fa-2x'} />\n          </Icon>\n        </Button>\n      </Buttons>\n      <Buttons as={'p'}>\n        <Button size={'large'}>\n          <Icon size={'small'}>\n            <i className={'fas fa-heading'} />\n          </Icon>\n        </Button>\n        <Button size={'large'}>\n          <Icon>\n            <i className={'fas fa-heading fa-lg'} />\n          </Icon>\n        </Button>\n        <Button size={'large'}>\n          <Icon size={'medium'}>\n            <i className={'fas fa-heading fa-2x'} />\n          </Icon>\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: IconOnlyButtonsDemo,
} satisfies StoryObj

export const GroupedButtonsStory = {
  name: 'Grouped buttons',
  parameters: {
    official: { id: 'elements-button/button-group/001' },
    docs: {
      source: {
        code: "import { Button, Control, Field } from '@seagreenio/react-bulma'\n\nfunction GroupedButtonsDemo() {\n  return (\n    <>\n      <Field layout={'grouped'}>\n        <Control as={'p'}>\n          <Button color={'link'}>Save changes</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Cancel</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button color={'danger'}>Delete post</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: GroupedButtonsDemo,
} satisfies StoryObj

export const AttachedButtonsStory = {
  name: 'Attached buttons',
  parameters: {
    official: { id: 'elements-button/button-addons/001' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Icon } from '@seagreenio/react-bulma'\n\nfunction AttachedButtonsDemo() {\n  return (\n    <>\n      <Field layout={'addons'}>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-align-left'} />\n            </Icon>\n            <span>Left</span>\n          </Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-align-center'} />\n            </Icon>\n            <span>Center</span>\n          </Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-align-right'} />\n            </Icon>\n            <span>Right</span>\n          </Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: AttachedButtonsDemo,
} satisfies StoryObj

export const GroupedButtonAddonsStory = {
  name: 'Grouped button addons',
  parameters: {
    official: { id: 'elements-button/button-group-with-addons/001' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Icon } from '@seagreenio/react-bulma'\n\nfunction GroupedButtonAddonsDemo() {\n  return (\n    <>\n      <Field layout={'addons'}>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-bold'} />\n            </Icon>\n            <span>Bold</span>\n          </Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-italic'} />\n            </Icon>\n            <span>Italic</span>\n          </Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-underline'} />\n            </Icon>\n            <span>Underline</span>\n          </Button>\n        </Control>\n      </Field>\n      <Field layout={'addons'}>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-align-left'} />\n            </Icon>\n            <span>Left</span>\n          </Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-align-center'} />\n            </Icon>\n            <span>Center</span>\n          </Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>\n            <Icon size={'small'}>\n              <i className={'fas fa-align-right'} />\n            </Icon>\n            <span>Right</span>\n          </Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: GroupedButtonAddonsDemo,
} satisfies StoryObj

export const ButtonListStory = {
  name: 'Button list',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/001' },
    docs: {
      source: {
        code: "import { Button, Buttons, Content } from '@seagreenio/react-bulma'\n\nfunction ButtonListDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can create a <strong>list of buttons</strong> by using the{' '}\n          <code>{'buttons'}</code> container.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Buttons>\n          <Button color={'success'}>Save changes</Button>\n          <Button color={'info'}>Save and continue</Button>\n          <Button color={'danger'}>Cancel</Button>\n        </Buttons>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ButtonListDemo,
} satisfies StoryObj

export const WrappingButtonListStory = {
  name: 'Wrapping button list',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/002' },
    docs: {
      source: {
        code: "import { Button, Buttons, Content } from '@seagreenio/react-bulma'\n\nfunction WrappingButtonListDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          If the list is <strong>very long</strong>, it will automatically wrap\n          on <strong>multiple lines</strong>, while keeping all buttons{' '}\n          <strong>evenly spaced</strong>.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Buttons>\n          <Button>One</Button>\n          <Button>Two</Button>\n          <Button>Three</Button>\n          <Button>Four</Button>\n          <Button>Five</Button>\n          <Button>Six</Button>\n          <Button>Seven</Button>\n          <Button>Eight</Button>\n          <Button>Nine</Button>\n          <Button>Ten</Button>\n          <Button>Eleven</Button>\n          <Button>Twelve</Button>\n          <Button>Thirteen</Button>\n          <Button>Fourteen</Button>\n          <Button>Fifteen</Button>\n          <Button>Sixteen</Button>\n          <Button>Seventeen</Button>\n          <Button>Eighteen</Button>\n          <Button>Nineteen</Button>\n          <Button>Twenty</Button>\n        </Buttons>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WrappingButtonListDemo,
} satisfies StoryObj

export const AttachedButtonListStory = {
  name: 'Attached button list',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/003' },
    docs: {
      source: {
        code: "import { Button, Buttons, Content } from '@seagreenio/react-bulma'\n\nfunction AttachedButtonListDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can <strong>attach buttons together</strong> with the{' '}\n          <code>{'has-addons'}</code> modifier.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Buttons addons>\n          <Button>Yes</Button>\n          <Button>Maybe</Button>\n          <Button>No</Button>\n        </Buttons>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: AttachedButtonListDemo,
} satisfies StoryObj

export const AlignedButtonAddonsStory = {
  name: 'Aligned button addons',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/004' },
    docs: {
      source: {
        code: "import { Button, Buttons, Content } from '@seagreenio/react-bulma'\n\nfunction AlignedButtonAddonsDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          Use the <code>{'is-centered'}</code> or the <code>{'is-right'}</code>{' '}\n          modifiers to alter the <strong>alignment</strong>.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Buttons addons align={'center'}>\n          <Button>Yes</Button>\n          <Button>Maybe</Button>\n          <Button>No</Button>\n        </Buttons>\n        <Buttons addons align={'right'}>\n          <Button>Yes</Button>\n          <Button>Maybe</Button>\n          <Button>No</Button>\n        </Buttons>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: AlignedButtonAddonsDemo,
} satisfies StoryObj

export const SelectedButtonAddonsStory = {
  name: 'Selected button addons',
  parameters: {
    official: { id: 'elements-button/list-of-buttons/005' },
    docs: {
      source: {
        code: "import { Button, Buttons, Content } from '@seagreenio/react-bulma'\n\nfunction SelectedButtonAddonsDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can use any <strong>modifier</strong> class on each button to\n          differentiate them. Make sure to add the <code>{'is-selected'}</code>{' '}\n          modifier as well to make sure the selected button is <em>above</em>{' '}\n          its siblings.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Buttons addons>\n          <Button color={'success'} selected>\n            Yes\n          </Button>\n          <Button>Maybe</Button>\n          <Button>No</Button>\n        </Buttons>\n        <Buttons addons>\n          <Button>Yes</Button>\n          <Button color={'info'} selected>\n            Maybe\n          </Button>\n          <Button>No</Button>\n        </Buttons>\n        <Buttons addons>\n          <Button>Yes</Button>\n          <Button>Maybe</Button>\n          <Button color={'danger'} selected>\n            No\n          </Button>\n        </Buttons>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SelectedButtonAddonsDemo,
} satisfies StoryObj

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Block, Content, Icon, IconText } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-icon',
      title: 'Icon',
      url: 'https://bulma.io/documentation/elements/icon/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-icon',
  title: 'CSS Library/Elements/Icon',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-icon" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Icon'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Compatible with all icon font libraries, including '}
          <strong data-official-prose="">{'Font Awesome 5'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'icon'}</code>
            {' element is a '}
            <strong data-official-prose="">{'container'}</strong>
            {' for any type of '}
            <strong data-official-prose="">{'icon font'}</strong>
            {
              '. Because the icons can take a few seconds to load, and because you want control over the '
            }
            <strong data-official-prose="">{'space'}</strong>
            {' the icons will take, you can use the '}
            <code data-official-prose="">{'icon'}</code>
            {
              ' class as a reliable square container that will prevent the page to "jump" on page load. '
            }
          </p>
        </div>
        <div data-official-prose="" className={'block bd-icon-size'}>
          <div data-official-example="elements-icon/basic/001">
            <Canvas of={BasicIconStory} />
          </div>
        </div>
        <div data-official-prose="" className={'message is-info'}>
          <div data-official-prose="" className={'message-body'}>
            {' The '}
            <strong data-official-prose="">{'yellow background'}</strong>
            {
              " is only here for demonstration purposes, to highlight the icon container's area. "
            }
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' By default, the '}
            <code data-official-prose="">{'icon'}</code>
            {' container will take up '}
            <em data-official-prose="">{'exactly'}</em>{' '}
            <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
            {
              ". The icon itself is sized accordingly to the icon library you're using. For example, Font Awesome 5 icons will "
            }
            <strong data-official-prose="">{'inherit'}</strong>
            {' the font size. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'icon-text'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Icon text '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#icon-text'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can combine an '}
            <code data-official-prose="">{'icon'}</code>
            {' with '}
            <strong data-official-prose="">{'text'}</strong>
            {', using the '}
            <code data-official-prose="">{'icon-text'}</code>
            {' wrapper, as long as all text '}
            <em data-official-prose="">{'inside'}</em>
            {' is wrapped in its own '}
            <code data-official-prose="">{'span'}</code>
            {' element: '}
          </p>
        </div>
        <div data-official-example="elements-icon/icon-text/001">
          <Canvas of={IconWithTextStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can combine '}
            <strong data-official-prose="">{'as many'}</strong>{' '}
            <code data-official-prose="">{'icon'}</code>
            {' elements and text elements as you want:'}
          </p>
        </div>
        <div data-official-example="elements-icon/icon-text/002">
          <Canvas of={MultipleIconsAndTextStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Since '}
            <code data-official-prose="">{'icon-text'}</code>
            {' is an '}
            <code data-official-prose="">{'inline-flex'}</code>
            {' element, it can easily be inserted within any paragraph of '}
            <strong data-official-prose="">{'text'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="elements-icon/icon-text/003">
          <Canvas of={IconsInAParagraphStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can also turn the '}
            <code data-official-prose="">{'icon-text'}</code>
            {' into a '}
            <code data-official-prose="">{'flex'}</code>
            {' element simply by using a '}
            <code data-official-prose="">{'<div>'}</code>
            {' tag instead: '}
          </p>
        </div>
        <div data-official-example="elements-icon/icon-text/004">
          <Canvas of={StatusMessagesWithIconsStory} />
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
            {' Since icon fonts are simply '}
            <strong data-official-prose="">{'text'}</strong>
            {', you can use the '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/helpers/color-helpers/'}
            >
              {'color helpers'}
            </a>
            {" to change the icon's color. "}
          </p>
        </div>
        <div data-official-example="elements-icon/colors/001">
          <Canvas of={ColoredIconsStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The same applies to the '}
            <code data-official-prose="">{'icon-text'}</code>
            {':'}
          </p>
        </div>
        <div data-official-example="elements-icon/colors/002">
          <Canvas of={ColoredIconAndTextStory} />
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
            {' The Bulma '}
            <code data-official-prose="">{'icon'}</code>
            {' container comes in '}
            <strong data-official-prose="">{'4 sizes'}</strong>
            {'. It should always be '}
            <em data-official-prose="">{'slightly bigger'}</em>
            {
              ' than the icon it contains. For example, Font Awesome 5 icons use a font-size of '
            }
            <code data-official-prose="">{'1em'}</code>
            {' by default (since it inherits the font size), but provides '}
            <a
              data-official-prose=""
              href={
                'https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons'
              }
              target={'_blank'}
            >
              {'additional sizes'}
            </a>
            {'. '}
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Container class'}</th>
              <th data-official-prose="">{'Container size'}</th>
              <th data-official-prose="">{'Font Awesome 5 class'}</th>
              <th data-official-prose="">{'Icon size'}</th>
              <th data-official-prose="">{'Result'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'icon is-small'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1rem x 1rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'fas'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-small'}>
                  {' '}
                  <i data-official-prose="" className={'fas fa-home'}></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="" rowSpan={2}>
                <code data-official-prose="">{'icon'}</code>
              </td>
              <td data-official-prose="" rowSpan={2}>
                <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'fas'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i data-official-prose="" className={'fas fa-home'}></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-lg'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1.33em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-lg fa-home'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="" rowSpan={3}>
                <code data-official-prose="">{'icon is-medium'}</code>
              </td>
              <td data-official-prose="" rowSpan={3}>
                <code data-official-prose="">{'2rem x 2rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'fas'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <i data-official-prose="" className={'fas fa-home'}></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-lg'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1.33em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-lg fa-home'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-2x'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'2em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-2x fa-home'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="" rowSpan={3}>
                <code data-official-prose="">{'icon is-large'}</code>
              </td>
              <td data-official-prose="" rowSpan={4}>
                <code data-official-prose="">{'3rem x 3rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'fas'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i data-official-prose="" className={'fas fa-home'}></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-lg'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1.33em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-lg fa-home'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-2x'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'2em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-2x fa-home'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <h3
          data-official-prose=""
          id={'font-awesome-variations'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Font Awesome variations '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#font-awesome-variations'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Font Awesome also provides modifier classes for:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">{'fixed width icons'}</li>
            <li data-official-prose="">{'bordered icons'}</li>
            <li data-official-prose="">{'animated icons'}</li>
            <li data-official-prose="">{'stacked icons'}</li>
          </ul>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Type'}</th>
              <th data-official-prose="">{'Font Awesome class'}</th>
              <th data-official-prose="">{'Result'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">{'Fixed width'}</td>
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-fw'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-home fa-fw'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Bordered'}</td>
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-border'}</code>
              </td>
              <td data-official-prose="">
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-home fa-border'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Animated'}</td>
              <td data-official-prose="">
                <code data-official-prose="">{'fas fa-spinner fa-pulse'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'fas fa-spinner fa-pulse'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="" rowSpan={2}>
                {'Stacked'}
              </td>
              <td data-official-prose="">
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<span class="icon is-medium">\n  <span class="fa-stack fa-sm">\n    <i class="fas fa-circle fa-stack-2x"></i>\n    <i class="fas fa-flag fa-stack-1x fa-inverse"></i>\n  </span>\n</span>\n'
                      }
                    </code>
                  </pre>
                </div>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <span data-official-prose="" className={'fa-stack fa-sm'}>
                    {' '}
                    <i
                      data-official-prose=""
                      className={'fas fa-circle fa-stack-2x'}
                    ></i>{' '}
                    <i
                      data-official-prose=""
                      className={'fas fa-flag fa-stack-1x fa-inverse'}
                    ></i>{' '}
                  </span>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<span class="icon is-large">\n  <span class="fa-stack fa-lg">\n    <i class="fas fa-camera fa-stack-1x"></i>\n    <i class="fas fa-ban fa-stack-2x has-text-danger"></i>\n  </span>\n</span>\n'
                      }
                    </code>
                  </pre>
                </div>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <span data-official-prose="" className={'fa-stack fa-lg'}>
                    {' '}
                    <i
                      data-official-prose=""
                      className={'fas fa-camera fa-stack-1x'}
                    ></i>{' '}
                    <i
                      data-official-prose=""
                      className={'fas fa-ban fa-stack-2x has-text-danger'}
                    ></i>{' '}
                  </span>{' '}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <h3
          data-official-prose=""
          id={'material-design-icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Material Design Icons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#material-design-icons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Here is how the '}
            <code data-official-prose="">{'icon'}</code>
            {' container can be used with '}
            <a data-official-prose="" href={'https://materialdesignicons.com/'}>
              {'Material Design Icons'}
            </a>
            {'. '}
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Container class'}</th>
              <th data-official-prose="">{'Container size'}</th>
              <th data-official-prose="">{'MDI class'}</th>
              <th data-official-prose="">{'Icon size'}</th>
              <th data-official-prose="">{'Result'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'icon is-small'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1rem x 1rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-small'}>
                  {' '}
                  <i data-official-prose="" className={'mdi mdi-bell'}></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="" rowSpan={2}>
                <code data-official-prose="">{'icon'}</code>
              </td>
              <td data-official-prose="" rowSpan={2}>
                <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-18px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'18px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-18px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-24px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'24px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-24px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="" rowSpan={4}>
                <code data-official-prose="">{'icon is-medium'}</code>
              </td>
              <td data-official-prose="" rowSpan={4}>
                <code data-official-prose="">{'2rem x 2rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <i data-official-prose="" className={'mdi mdi-bell'}></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-18px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'18px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-18px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-24px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'24px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-24px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-36px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'36px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-36px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="" rowSpan={5}>
                <code data-official-prose="">{'icon is-large'}</code>
              </td>
              <td data-official-prose="" rowSpan={5}>
                <code data-official-prose="">{'3rem x 3rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i data-official-prose="" className={'mdi mdi-bell'}></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-18px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'18px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-18px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-24px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'24px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-24px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-36px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'36px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-36px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-48px'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'48px'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-48px mdi-bell'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'MDI also provides modifier classes for:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">{'light and dark icons'}</li>
            <li data-official-prose="">{'rotated & flipped icons'}</li>
          </ul>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Type'}</th>
              <th data-official-prose="">{'Material Design Icon class'}</th>
              <th data-official-prose="">{'Result'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">{'Light color'}</td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-light'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-light'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Dark color'}</td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-dark'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-dark'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Light inactive color'}</td>
              <td data-official-prose="">
                <code data-official-prose="">
                  {'mdi mdi-light mdi-inactive'}
                </code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-light mdi-inactive'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Dark inactive color'}</td>
              <td data-official-prose="">
                <code data-official-prose="">
                  {'mdi mdi-dark mdi-inactive'}
                </code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-dark mdi-inactive'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Flipped'}</td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-flip-h'}</code>{' '}
                <br data-official-prose="" />{' '}
                <code data-official-prose="">{'mdi mdi-flip-v'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-flip-h'}
                  ></i>{' '}
                </span>{' '}
                <br data-official-prose="" />{' '}
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-flip-v'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">{'Rotated'}</td>
              <td data-official-prose="">
                <code data-official-prose="">{'mdi mdi-rotate-45'}</code>{' '}
                <br data-official-prose="" />{' '}
                <code data-official-prose="">{'mdi mdi-rotate-90'}</code>{' '}
                <br data-official-prose="" />{' '}
                <code data-official-prose="">{'mdi mdi-rotate-180'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-rotate-45'}
                  ></i>{' '}
                </span>{' '}
                <br data-official-prose="" />{' '}
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-rotate-90'}
                  ></i>{' '}
                </span>{' '}
                <br data-official-prose="" />{' '}
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-rotate-180'}
                  ></i>{' '}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <h3
          data-official-prose=""
          id={'ionicons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Ionicons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#ionicons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Here is how the '}
            <code data-official-prose="">{'icon'}</code>
            {' container can be used with '}
            <a data-official-prose="" href={'http://ionicons.com/'}>
              {'Ionicons'}
            </a>
            {'.'}
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <thead data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Container class'}</th>
              <th data-official-prose="">{'Container size'}</th>
              <th data-official-prose="">{'Ionicon class'}</th>
              <th data-official-prose="">{'Icon size'}</th>
              <th data-official-prose="">{'Result'}</th>
            </tr>
          </thead>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'icon is-small'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1rem x 1rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'ion-ionic'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-small'}>
                  {' '}
                  <span
                    data-official-prose=""
                    className={'ion-ionic'}
                  ></span>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'icon'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'ion-ionic'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon'}>
                  {' '}
                  <span
                    data-official-prose=""
                    className={'ion-ionic'}
                  ></span>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'icon is-medium'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'2rem x 2rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'ion-ionic'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-medium'}>
                  {' '}
                  <span
                    data-official-prose=""
                    className={'ion-ionic'}
                  ></span>{' '}
                </span>
              </td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'icon is-large'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'3rem x 3rem'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'ion-ionic'}</code>
              </td>
              <td data-official-prose="">
                <code data-official-prose="">{'1em'}</code>
              </td>
              <td data-official-prose="" className={'bd-icon-size'}>
                <span data-official-prose="" className={'icon is-large'}>
                  {' '}
                  <span
                    data-official-prose=""
                    className={'ion-ionic'}
                  ></span>{' '}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </OfficialDocument>
  )
}

function BasicIconDemo() {
  return (
    <>
      <Icon>
        <i className={'fas fa-home'} />
      </Icon>
    </>
  )
}

function IconWithTextDemo() {
  return (
    <>
      <IconText>
        <Icon>
          <i className={'fas fa-home'} />
        </Icon>
        <span>Home</span>
      </IconText>
    </>
  )
}

function MultipleIconsAndTextDemo() {
  return (
    <>
      <IconText>
        <Icon>
          <i className={'fas fa-train'} />
        </Icon>
        <span>Paris</span>
        <Icon>
          <i className={'fas fa-arrow-right'} />
        </Icon>
        <span>Budapest</span>
        <Icon>
          <i className={'fas fa-arrow-right'} />
        </Icon>
        <span>Bucharest</span>
        <Icon>
          <i className={'fas fa-arrow-right'} />
        </Icon>
        <span>Istanbul</span>
        <Icon>
          <i className={'fas fa-flag-checkered'} />
        </Icon>
      </IconText>
    </>
  )
}

function IconsInAParagraphDemo() {
  return (
    <>
      <Content>
        <p>
          An invitation to{' '}
          <IconText>
            <Icon>
              <i className={'fas fa-utensils'} />
            </Icon>
            <span>dinner</span>
          </IconText>{' '}
          was soon afterwards dispatched; and already had Mrs. Bennet planned
          the courses that were to do credit to her housekeeping, when an answer
          arrived which deferred it all. Mr. Bingley was obliged to be in{' '}
          <IconText>
            <Icon>
              <i className={'fas fa-city'} />
            </Icon>
            <span>town</span>
          </IconText>{' '}
          the following day, and, consequently, unable to accept the honour of
          their{' '}
          <IconText>
            <Icon>
              <i className={'fas fa-envelope-open-text'} />
            </Icon>
            <span>invitation</span>
          </IconText>
          , etc.
        </p>
        <p>
          Mrs. Bennet was quite disconcerted. She could not imagine what
          business he could have in town so soon after his{' '}
          <IconText>
            <Icon>
              <i className={'fas fa-flag-checkered'} />
            </Icon>
            <span>arrival</span>
          </IconText>{' '}
          in Hertfordshire; and she began to fear that he might be always{' '}
          <IconText>
            <Icon>
              <i className={'fas fa-plane-departure'} />
            </Icon>
            <span>flying</span>
          </IconText>{' '}
          about from one place to another, and never settled at Netherfield as
          he ought to be.
        </p>
      </Content>
    </>
  )
}

function StatusMessagesWithIconsDemo() {
  return (
    <>
      <IconText as={'div'}>
        <Icon helpers={{ textColor: 'info' }}>
          <i className={'fas fa-info-circle'} />
        </Icon>
        <span>Information</span>
      </IconText>
      <Block as={'p'}>
        Your package will be delivered on <strong>Tuesday at 08:00</strong>.
      </Block>
      <IconText as={'div'}>
        <Icon helpers={{ textColor: 'success' }}>
          <i className={'fas fa-check-square'} />
        </Icon>
        <span>Success</span>
      </IconText>
      <Block as={'p'}>Your image has been successfully uploaded.</Block>
      <IconText as={'div'}>
        <Icon helpers={{ textColor: 'warning' }}>
          <i className={'fas fa-exclamation-triangle'} />
        </Icon>
        <span>Warning</span>
      </IconText>
      <Block as={'p'}>
        Some information is missing from your <a href={'#'}>profile</a> details.
      </Block>
      <IconText as={'div'}>
        <Icon helpers={{ textColor: 'danger' }}>
          <i className={'fas fa-ban'} />
        </Icon>
        <span>Danger</span>
      </IconText>
      <Block as={'p'}>
        There was an error in your submission.{' '}
        <a href={'#'}>Please try again</a>.
      </Block>
    </>
  )
}

function ColoredIconsDemo() {
  return (
    <>
      <Icon helpers={{ textColor: 'info' }}>
        <i className={'fas fa-info-circle'} />
      </Icon>{' '}
      <Icon helpers={{ textColor: 'success' }}>
        <i className={'fas fa-check-square'} />
      </Icon>{' '}
      <Icon helpers={{ textColor: 'warning' }}>
        <i className={'fas fa-exclamation-triangle'} />
      </Icon>{' '}
      <Icon helpers={{ textColor: 'danger' }}>
        <i className={'fas fa-ban'} />
      </Icon>
    </>
  )
}

function ColoredIconAndTextDemo() {
  return (
    <>
      <IconText helpers={{ textColor: 'info' }}>
        <Icon>
          <i className={'fas fa-info-circle'} />
        </Icon>
        <span>Info</span>
      </IconText>{' '}
      <IconText helpers={{ textColor: 'success' }}>
        <Icon>
          <i className={'fas fa-check-square'} />
        </Icon>
        <span>Success</span>
      </IconText>{' '}
      <IconText helpers={{ textColor: 'warning' }}>
        <Icon>
          <i className={'fas fa-exclamation-triangle'} />
        </Icon>
        <span>Warning</span>
      </IconText>{' '}
      <IconText helpers={{ textColor: 'danger' }}>
        <Icon>
          <i className={'fas fa-ban'} />
        </Icon>
        <span>Danger</span>
      </IconText>
    </>
  )
}

export const BasicIconStory = {
  name: 'Basic icon',
  parameters: {
    official: { id: 'elements-icon/basic/001' },
    docs: {
      source: {
        code: "import { Icon } from '@seagreenio/react-bulma'\n\nfunction BasicIconDemo() {\n  return (\n    <>\n      <Icon>\n        <i className={'fas fa-home'} />\n      </Icon>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BasicIconDemo,
} satisfies StoryObj

export const IconWithTextStory = {
  name: 'Icon with text',
  parameters: {
    official: { id: 'elements-icon/icon-text/001' },
    docs: {
      source: {
        code: "import { Icon, IconText } from '@seagreenio/react-bulma'\n\nfunction IconWithTextDemo() {\n  return (\n    <>\n      <IconText>\n        <Icon>\n          <i className={'fas fa-home'} />\n        </Icon>\n        <span>Home</span>\n      </IconText>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: IconWithTextDemo,
} satisfies StoryObj

export const MultipleIconsAndTextStory = {
  name: 'Multiple icons and text',
  parameters: {
    official: { id: 'elements-icon/icon-text/002' },
    docs: {
      source: {
        code: "import { Icon, IconText } from '@seagreenio/react-bulma'\n\nfunction MultipleIconsAndTextDemo() {\n  return (\n    <>\n      <IconText>\n        <Icon>\n          <i className={'fas fa-train'} />\n        </Icon>\n        <span>Paris</span>\n        <Icon>\n          <i className={'fas fa-arrow-right'} />\n        </Icon>\n        <span>Budapest</span>\n        <Icon>\n          <i className={'fas fa-arrow-right'} />\n        </Icon>\n        <span>Bucharest</span>\n        <Icon>\n          <i className={'fas fa-arrow-right'} />\n        </Icon>\n        <span>Istanbul</span>\n        <Icon>\n          <i className={'fas fa-flag-checkered'} />\n        </Icon>\n      </IconText>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MultipleIconsAndTextDemo,
} satisfies StoryObj

export const IconsInAParagraphStory = {
  name: 'Icons in a paragraph',
  parameters: {
    official: { id: 'elements-icon/icon-text/003' },
    docs: {
      source: {
        code: "import { Content, Icon, IconText } from '@seagreenio/react-bulma'\n\nfunction IconsInAParagraphDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          An invitation to{' '}\n          <IconText>\n            <Icon>\n              <i className={'fas fa-utensils'} />\n            </Icon>\n            <span>dinner</span>\n          </IconText>{' '}\n          was soon afterwards dispatched; and already had Mrs. Bennet planned\n          the courses that were to do credit to her housekeeping, when an answer\n          arrived which deferred it all. Mr. Bingley was obliged to be in{' '}\n          <IconText>\n            <Icon>\n              <i className={'fas fa-city'} />\n            </Icon>\n            <span>town</span>\n          </IconText>{' '}\n          the following day, and, consequently, unable to accept the honour of\n          their{' '}\n          <IconText>\n            <Icon>\n              <i className={'fas fa-envelope-open-text'} />\n            </Icon>\n            <span>invitation</span>\n          </IconText>\n          , etc.\n        </p>\n        <p>\n          Mrs. Bennet was quite disconcerted. She could not imagine what\n          business he could have in town so soon after his{' '}\n          <IconText>\n            <Icon>\n              <i className={'fas fa-flag-checkered'} />\n            </Icon>\n            <span>arrival</span>\n          </IconText>{' '}\n          in Hertfordshire; and she began to fear that he might be always{' '}\n          <IconText>\n            <Icon>\n              <i className={'fas fa-plane-departure'} />\n            </Icon>\n            <span>flying</span>\n          </IconText>{' '}\n          about from one place to another, and never settled at Netherfield as\n          he ought to be.\n        </p>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: IconsInAParagraphDemo,
} satisfies StoryObj

export const StatusMessagesWithIconsStory = {
  name: 'Status messages with icons',
  parameters: {
    official: { id: 'elements-icon/icon-text/004' },
    docs: {
      source: {
        code: "import { Block, Icon, IconText } from '@seagreenio/react-bulma'\n\nfunction StatusMessagesWithIconsDemo() {\n  return (\n    <>\n      <IconText as={'div'}>\n        <Icon helpers={{ textColor: 'info' }}>\n          <i className={'fas fa-info-circle'} />\n        </Icon>\n        <span>Information</span>\n      </IconText>\n      <Block as={'p'}>\n        Your package will be delivered on <strong>Tuesday at 08:00</strong>.\n      </Block>\n      <IconText as={'div'}>\n        <Icon helpers={{ textColor: 'success' }}>\n          <i className={'fas fa-check-square'} />\n        </Icon>\n        <span>Success</span>\n      </IconText>\n      <Block as={'p'}>Your image has been successfully uploaded.</Block>\n      <IconText as={'div'}>\n        <Icon helpers={{ textColor: 'warning' }}>\n          <i className={'fas fa-exclamation-triangle'} />\n        </Icon>\n        <span>Warning</span>\n      </IconText>\n      <Block as={'p'}>\n        Some information is missing from your <a href={'#'}>profile</a> details.\n      </Block>\n      <IconText as={'div'}>\n        <Icon helpers={{ textColor: 'danger' }}>\n          <i className={'fas fa-ban'} />\n        </Icon>\n        <span>Danger</span>\n      </IconText>\n      <Block as={'p'}>\n        There was an error in your submission.{' '}\n        <a href={'#'}>Please try again</a>.\n      </Block>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: StatusMessagesWithIconsDemo,
} satisfies StoryObj

export const ColoredIconsStory = {
  name: 'Colored icons',
  parameters: {
    official: { id: 'elements-icon/colors/001' },
    docs: {
      source: {
        code: "import { Icon } from '@seagreenio/react-bulma'\n\nfunction ColoredIconsDemo() {\n  return (\n    <>\n      <Icon helpers={{ textColor: 'info' }}>\n        <i className={'fas fa-info-circle'} />\n      </Icon>{' '}\n      <Icon helpers={{ textColor: 'success' }}>\n        <i className={'fas fa-check-square'} />\n      </Icon>{' '}\n      <Icon helpers={{ textColor: 'warning' }}>\n        <i className={'fas fa-exclamation-triangle'} />\n      </Icon>{' '}\n      <Icon helpers={{ textColor: 'danger' }}>\n        <i className={'fas fa-ban'} />\n      </Icon>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColoredIconsDemo,
} satisfies StoryObj

export const ColoredIconAndTextStory = {
  name: 'Colored icon and text',
  parameters: {
    official: { id: 'elements-icon/colors/002' },
    docs: {
      source: {
        code: "import { Icon, IconText } from '@seagreenio/react-bulma'\n\nfunction ColoredIconAndTextDemo() {\n  return (\n    <>\n      <IconText helpers={{ textColor: 'info' }}>\n        <Icon>\n          <i className={'fas fa-info-circle'} />\n        </Icon>\n        <span>Info</span>\n      </IconText>{' '}\n      <IconText helpers={{ textColor: 'success' }}>\n        <Icon>\n          <i className={'fas fa-check-square'} />\n        </Icon>\n        <span>Success</span>\n      </IconText>{' '}\n      <IconText helpers={{ textColor: 'warning' }}>\n        <Icon>\n          <i className={'fas fa-exclamation-triangle'} />\n        </Icon>\n        <span>Warning</span>\n      </IconText>{' '}\n      <IconText helpers={{ textColor: 'danger' }}>\n        <Icon>\n          <i className={'fas fa-ban'} />\n        </Icon>\n        <span>Danger</span>\n      </IconText>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColoredIconAndTextDemo,
} satisfies StoryObj

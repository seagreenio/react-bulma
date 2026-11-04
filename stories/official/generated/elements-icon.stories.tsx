import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
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
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Icon'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Compatible with all icon font libraries, including '}
          <strong data-official-prose="">{'Font Awesome 5'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'icon'}</code>
            {' element is a '}
            <strong data-official-prose="">{'container'}</strong>
            {' for any type of '}
            <strong data-official-prose="">{'icon font'}</strong>
            {
              '. Because\n    the icons can take a few seconds to load, and because you want control over the '
            }
            <strong data-official-prose="">{'space'}</strong>
            {' the icons\n    will take, you can use the '}
            <code data-official-prose="">{'icon'}</code>
            {
              ' class as a reliable square container that will prevent the page to\n    "jump" on page load.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="elements-icon/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-info'}>
          {'\n  '}
          <div data-official-prose="" className={'message-body'}>
            {'\n    The '}
            <strong data-official-prose="">{'yellow background'}</strong>
            {
              " is only here for demonstration purposes, to highlight the icon container's\n    area.\n  "
            }
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    By default, the '}
            <code data-official-prose="">{'icon'}</code>
            {' container will take up '}
            <em data-official-prose="">{'exactly'}</em>{' '}
            <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
            {
              ". The icon\n    itself is sized accordingly to the icon library you're using. For example, Font Awesome 5 icons will\n    "
            }
            <strong data-official-prose="">{'inherit'}</strong>
            {' the font size.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'icon-text'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Icon text\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#icon-text'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can combine an '}
            <code data-official-prose="">{'icon'}</code>
            {' with '}
            <strong data-official-prose="">{'text'}</strong>
            {', using the '}
            <code data-official-prose="">{'icon-text'}</code>
            {' wrapper, as long\n    as all text '}
            <em data-official-prose="">{'inside'}</em>
            {' is wrapped in its own '}
            <code data-official-prose="">{'span'}</code>
            {' element:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-icon/icon-text/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can combine '}
            <strong data-official-prose="">{'as many'}</strong>{' '}
            <code data-official-prose="">{'icon'}</code>
            {' elements and text elements as you want:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-icon/icon-text/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Since '}
            <code data-official-prose="">{'icon-text'}</code>
            {' is an '}
            <code data-official-prose="">{'inline-flex'}</code>
            {
              ' element, it can easily be inserted within any paragraph\n    of '
            }
            <strong data-official-prose="">{'text'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-icon/icon-text/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can also turn the '}
            <code data-official-prose="">{'icon-text'}</code>
            {' into a '}
            <code data-official-prose="">{'flex'}</code>
            {' element simply by using a\n    '}
            <code data-official-prose="">{'<div>'}</code>
            {' tag instead:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-icon/icon-text/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n'}
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
            {'\n    Since icon fonts are simply '}
            <strong data-official-prose="">{'text'}</strong>
            {', you can use the\n    '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/helpers/color-helpers/'}
            >
              {'color helpers'}
            </a>
            {"\n    to change the icon's color.\n  "}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-icon/colors/001">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The same applies to the '}
            <code data-official-prose="">{'icon-text'}</code>
            {':'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-icon/colors/002">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n'}
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
            {'\n    The Bulma '}
            <code data-official-prose="">{'icon'}</code>
            {' container comes in '}
            <strong data-official-prose="">{'4 sizes'}</strong>
            {'. It should always be\n    '}
            <em data-official-prose="">{'slightly bigger'}</em>
            {
              ' than the icon it contains. For example, Font Awesome 5 icons use a font-size of\n    '
            }
            <code data-official-prose="">{'1em'}</code>
            {
              ' by default (since it inherits the font size), but provides\n    '
            }
            <a
              data-official-prose=""
              href={
                'https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons'
              }
              target={'_blank'}
            >
              {'additional sizes'}
            </a>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <thead data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Container class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Container size'}</th>
              {'\n      '}
              <th data-official-prose="">{'Font Awesome 5 class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Icon size'}</th>
              {'\n      '}
              <th data-official-prose="">{'Result'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'icon is-small'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1rem x 1rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-small'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="" rowSpan={2}>
                {'\n        '}
                <code data-official-prose="">{'icon'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" rowSpan={2}>
                {'\n        '}
                <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-lg'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1.33em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-lg fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="" rowSpan={3}>
                {'\n        '}
                <code data-official-prose="">{'icon is-medium'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" rowSpan={3}>
                {'\n        '}
                <code data-official-prose="">{'2rem x 2rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-lg'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1.33em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-lg fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-2x'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'2em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-2x fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="" rowSpan={3}>
                {'\n        '}
                <code data-official-prose="">{'icon is-large'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" rowSpan={4}>
                {'\n        '}
                <code data-official-prose="">{'3rem x 3rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-lg'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1.33em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-lg fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-2x'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'2em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-2x fa-home'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'font-awesome-variations'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Font Awesome variations\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#font-awesome-variations'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Font Awesome also provides modifier classes for:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">{'fixed width icons'}</li>
            {'\n    '}
            <li data-official-prose="">{'bordered icons'}</li>
            {'\n    '}
            <li data-official-prose="">{'animated icons'}</li>
            {'\n    '}
            <li data-official-prose="">{'stacked icons'}</li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <thead data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Type'}</th>
              {'\n      '}
              <th data-official-prose="">{'Font Awesome class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Result'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Fixed width'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-fw'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i data-official-prose="" className={'fas fa-home fa-fw'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Bordered'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-border'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'fas fa-home fa-border'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Animated'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'fas fa-spinner fa-pulse'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'fas fa-spinner fa-pulse'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="" rowSpan={2}>
                {'Stacked'}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<span class="icon is-medium">\n  <span class="fa-stack fa-sm">\n    <i class="fas fa-circle fa-stack-2x"></i>\n    <i class="fas fa-flag fa-stack-1x fa-inverse"></i>\n  </span>\n</span>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <span data-official-prose="" className={'fa-stack fa-sm'}>
                    {'\n            '}
                    <i
                      data-official-prose=""
                      className={'fas fa-circle fa-stack-2x'}
                    ></i>
                    {'\n            '}
                    <i
                      data-official-prose=""
                      className={'fas fa-flag fa-stack-1x fa-inverse'}
                    ></i>
                    {'\n          '}
                  </span>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<span class="icon is-large">\n  <span class="fa-stack fa-lg">\n    <i class="fas fa-camera fa-stack-1x"></i>\n    <i class="fas fa-ban fa-stack-2x has-text-danger"></i>\n  </span>\n</span>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <span data-official-prose="" className={'fa-stack fa-lg'}>
                    {'\n            '}
                    <i
                      data-official-prose=""
                      className={'fas fa-camera fa-stack-1x'}
                    ></i>
                    {'\n            '}
                    <i
                      data-official-prose=""
                      className={'fas fa-ban fa-stack-2x has-text-danger'}
                    ></i>
                    {'\n          '}
                  </span>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'material-design-icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Material Design Icons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#material-design-icons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Here is how the '}
            <code data-official-prose="">{'icon'}</code>
            {' container can be used with\n    '}
            <a data-official-prose="" href={'https://materialdesignicons.com/'}>
              {'Material Design Icons'}
            </a>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <thead data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Container class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Container size'}</th>
              {'\n      '}
              <th data-official-prose="">{'MDI class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Icon size'}</th>
              {'\n      '}
              <th data-official-prose="">{'Result'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'icon is-small'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1rem x 1rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-small'}>
                  {'\n          '}
                  <i data-official-prose="" className={'mdi mdi-bell'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="" rowSpan={2}>
                {'\n        '}
                <code data-official-prose="">{'icon'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" rowSpan={2}>
                {'\n        '}
                <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-18px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'18px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-18px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-24px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'24px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-24px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="" rowSpan={4}>
                {'\n        '}
                <code data-official-prose="">{'icon is-medium'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" rowSpan={4}>
                {'\n        '}
                <code data-official-prose="">{'2rem x 2rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <i data-official-prose="" className={'mdi mdi-bell'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-18px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'18px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-18px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-24px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'24px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-24px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-36px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'36px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-36px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="" rowSpan={5}>
                {'\n        '}
                <code data-official-prose="">{'icon is-large'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" rowSpan={5}>
                {'\n        '}
                <code data-official-prose="">{'3rem x 3rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i data-official-prose="" className={'mdi mdi-bell'}></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-18px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'18px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-18px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-24px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'24px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-24px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-36px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'36px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-36px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-48px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'48px'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-48px mdi-bell'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'MDI also provides modifier classes for:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">{'light and dark icons'}</li>
            {'\n    '}
            <li data-official-prose="">{'rotated & flipped icons'}</li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <thead data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Type'}</th>
              {'\n      '}
              <th data-official-prose="">{'Material Design Icon class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Result'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Light color'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-light'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-light'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Dark color'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-dark'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-dark'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Light inactive color'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">
                  {'mdi mdi-light mdi-inactive'}
                </code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-light mdi-inactive'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Dark inactive color'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">
                  {'mdi mdi-dark mdi-inactive'}
                </code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-dark mdi-inactive'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Flipped'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-flip-h'}</code>
                {'\n        '}
                <br data-official-prose="" />
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-flip-v'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-flip-h'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n        '}
                <br data-official-prose="" />
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-flip-v'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">{'Rotated'}</td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-rotate-45'}</code>
                {'\n        '}
                <br data-official-prose="" />
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-rotate-90'}</code>
                {'\n        '}
                <br data-official-prose="" />
                {'\n        '}
                <code data-official-prose="">{'mdi mdi-rotate-180'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-rotate-45'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n        '}
                <br data-official-prose="" />
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-rotate-90'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n        '}
                <br data-official-prose="" />
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <i
                    data-official-prose=""
                    className={'mdi mdi-signal-4g mdi-rotate-180'}
                  ></i>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'ionicons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Ionicons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#ionicons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'Here is how the '}
            <code data-official-prose="">{'icon'}</code>
            {' container can be used with '}
            <a data-official-prose="" href={'http://ionicons.com/'}>
              {'Ionicons'}
            </a>
            {'.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <thead data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Container class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Container size'}</th>
              {'\n      '}
              <th data-official-prose="">{'Ionicon class'}</th>
              {'\n      '}
              <th data-official-prose="">{'Icon size'}</th>
              {'\n      '}
              <th data-official-prose="">{'Result'}</th>
              {'\n    '}
            </tr>
            {'\n  '}
          </thead>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'icon is-small'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1rem x 1rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'ion-ionic'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-small'}>
                  {'\n          '}
                  <span data-official-prose="" className={'ion-ionic'}></span>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'icon'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1.5rem x 1.5rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'ion-ionic'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon'}>
                  {'\n          '}
                  <span data-official-prose="" className={'ion-ionic'}></span>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'icon is-medium'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'2rem x 2rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'ion-ionic'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-medium'}>
                  {'\n          '}
                  <span data-official-prose="" className={'ion-ionic'}></span>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'icon is-large'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'3rem x 3rem'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'ion-ionic'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'\n        '}
                <code data-official-prose="">{'1em'}</code>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="" className={'bd-icon-size'}>
                {'\n        '}
                <span data-official-prose="" className={'icon is-large'}>
                  {'\n          '}
                  <span data-official-prose="" className={'ion-ionic'}></span>
                  {'\n        '}
                </span>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n  '}
          </tbody>
          {'\n'}
        </table>
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
                        {'$icon-dimensions'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-icon-dimensions)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.5rem'}
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
                        {'$icon-dimensions-small'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-icon-dimensions-small)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1rem'}
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
                        {'$icon-dimensions-medium'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-icon-dimensions-medium)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2rem'}
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
                        {'$icon-dimensions-large'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-icon-dimensions-large)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'3rem'}
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
                        {'$icon-text-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-icon-text-spacing)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.25em'}
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
      <ui.Block className={'bd-icon-size'}>
        {'\n  '}
        <div className={'bd-snippet bd-is-vertical bd-is-size-1'}>
          {'\n  \n    '}
          <div className={'bd-snippet-example'}>
            {'\n      '}
            <p className={'bd-snippet-title'}>
              {'\n        '}
              <span className={'bd-snippet-tag bd-is-example'}>
                {'Example'}
              </span>
              {'\n      '}
            </p>
            {'\n\n      '}
            <div className={'bd-snippet-preview'}>
              {'\n        \n          \n'}
              <ui.Icon>
                {'\n  '}
                <i className={'fas fa-home'} />
                {'\n'}
              </ui.Icon>
              {'\n\n        \n      '}
            </div>
            {'\n    '}
          </div>
          {'\n  \n\n  '}
          <div className={'bd-snippet-source bd-theme-html'}>
            {'\n    '}
            <p className={'bd-snippet-title'}>
              {'\n      '}
              <span className={'bd-snippet-tag bd-is-html'}>{'HTML'}</span>
              {'\n    '}
            </p>
            {'\n\n    '}
            <div className={'bd-snippet-code bd-highlight-full'}>
              {'\n      '}
              <div className={'highlight'}>
                <pre>
                  <code className={'language-html'}>
                    {
                      '\n<span class="icon">\n  <i class="fas fa-home"></i>\n</span>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n'}
      </ui.Block>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.IconText>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-home'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Home'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.IconText>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-train'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Paris'}</span>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-arrow-right'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Budapest'}</span>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-arrow-right'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Bucharest'}</span>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-arrow-right'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Istanbul'}</span>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-flag-checkered'} />
          {'\n  '}
        </ui.Icon>
        {'\n'}
      </ui.IconText>
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Content>
        {'\n  '}
        <p>
          {'\n    An invitation to\n    '}
          <ui.IconText>
            {'\n      '}
            <ui.Icon>
              {'\n        '}
              <i className={'fas fa-utensils'} />
              {'\n      '}
            </ui.Icon>
            {'\n      '}
            <span>{'dinner'}</span>
            {'\n    '}
          </ui.IconText>
          {
            '\n    was soon afterwards dispatched; and already had Mrs. Bennet planned the\n    courses that were to do credit to her housekeeping, when an answer arrived\n    which deferred it all. Mr. Bingley was obliged to be in\n    '
          }
          <ui.IconText>
            {'\n      '}
            <ui.Icon>
              {'\n        '}
              <i className={'fas fa-city'} />
              {'\n      '}
            </ui.Icon>
            {'\n      '}
            <span>{'town'}</span>
            {'\n    '}
          </ui.IconText>
          {
            '\n    the following day, and, consequently, unable to accept the honour of their\n    '
          }
          <ui.IconText>
            {'\n      '}
            <ui.Icon>
              {'\n        '}
              <i className={'fas fa-envelope-open-text'} />
              {'\n      '}
            </ui.Icon>
            {'\n      '}
            <span>{'invitation'}</span>{' '}
          </ui.IconText>
          {', etc.\n  '}
        </p>
        {'\n\n  '}
        <p>
          {
            '\n    Mrs. Bennet was quite disconcerted. She could not imagine what business he\n    could have in town so soon after his\n    '
          }
          <ui.IconText>
            {'\n      '}
            <ui.Icon>
              {'\n        '}
              <i className={'fas fa-flag-checkered'} />
              {'\n      '}
            </ui.Icon>
            {'\n      '}
            <span>{'arrival'}</span>
            {'\n    '}
          </ui.IconText>
          {
            '\n    in Hertfordshire; and she began to fear that he might be always\n    '
          }
          <ui.IconText>
            {'\n      '}
            <ui.Icon>
              {'\n        '}
              <i className={'fas fa-plane-departure'} />
              {'\n      '}
            </ui.Icon>
            {'\n      '}
            <span>{'flying'}</span>
            {'\n    '}
          </ui.IconText>
          {
            '\n    about from one place to another, and never settled at Netherfield as he\n    ought to be.\n  '
          }
        </p>
        {'\n'}
      </ui.Content>
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.IconText as={'div'}>
        {'\n  '}
        <ui.Icon helpers={{ textColor: 'info' }}>
          {'\n    '}
          <i className={'fas fa-info-circle'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Information'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n'}
      <ui.Block as={'p'}>
        {'\n  Your package will be delivered on '}
        <strong>{'Tuesday at 08:00'}</strong>
        {'.\n'}
      </ui.Block>
      {'\n\n'}
      <ui.IconText as={'div'}>
        {'\n  '}
        <ui.Icon helpers={{ textColor: 'success' }}>
          {'\n    '}
          <i className={'fas fa-check-square'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Success'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n'}
      <ui.Block as={'p'}>
        {'Your image has been successfully uploaded.'}
      </ui.Block>
      {'\n\n'}
      <ui.IconText as={'div'}>
        {'\n  '}
        <ui.Icon helpers={{ textColor: 'warning' }}>
          {'\n    '}
          <i className={'fas fa-exclamation-triangle'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Warning'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n'}
      <ui.Block as={'p'}>
        {'\n  Some information is missing from your '}
        <a href={'#'}>{'profile'}</a>
        {' details.\n'}
      </ui.Block>
      {'\n\n'}
      <ui.IconText as={'div'}>
        {'\n  '}
        <ui.Icon helpers={{ textColor: 'danger' }}>
          {'\n    '}
          <i className={'fas fa-ban'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Danger'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n'}
      <ui.Block as={'p'}>
        {'\n  There was an error in your submission. '}
        <a href={'#'}>{'Please try again'}</a>
        {'.\n'}
      </ui.Block>
      {'\n\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Icon helpers={{ textColor: 'info' }}>
        {'\n  '}
        <i className={'fas fa-info-circle'} />
        {'\n'}
      </ui.Icon>
      {'\n'}
      <ui.Icon helpers={{ textColor: 'success' }}>
        {'\n  '}
        <i className={'fas fa-check-square'} />
        {'\n'}
      </ui.Icon>
      {'\n'}
      <ui.Icon helpers={{ textColor: 'warning' }}>
        {'\n  '}
        <i className={'fas fa-exclamation-triangle'} />
        {'\n'}
      </ui.Icon>
      {'\n'}
      <ui.Icon helpers={{ textColor: 'danger' }}>
        {'\n  '}
        <i className={'fas fa-ban'} />
        {'\n'}
      </ui.Icon>
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.IconText helpers={{ textColor: 'info' }}>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-info-circle'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Info'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n'}
      <ui.IconText helpers={{ textColor: 'success' }}>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-check-square'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Success'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n'}
      <ui.IconText helpers={{ textColor: 'warning' }}>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-exclamation-triangle'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Warning'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n'}
      <ui.IconText helpers={{ textColor: 'danger' }}>
        {'\n  '}
        <ui.Icon>
          {'\n    '}
          <i className={'fas fa-ban'} />
          {'\n  '}
        </ui.Icon>
        {'\n  '}
        <span>{'Danger'}</span>
        {'\n'}
      </ui.IconText>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Basic icon',
  parameters: {
    official: { id: 'elements-icon/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<><ui.Block className={"bd-icon-size"}>{"\\n  "}<div className={"bd-snippet bd-is-vertical bd-is-size-1"}>{"\\n  \\n    "}<div className={"bd-snippet-example"}>{"\\n      "}<p className={"bd-snippet-title"}>{"\\n        "}<span className={"bd-snippet-tag bd-is-example"}>{"Example"}</span>{"\\n      "}</p>{"\\n\\n      "}<div className={"bd-snippet-preview"}>{"\\n        \\n          \\n"}<ui.Icon>{"\\n  "}<i className={"fas fa-home"} />{"\\n"}</ui.Icon>{"\\n\\n        \\n      "}</div>{"\\n    "}</div>{"\\n  \\n\\n  "}<div className={"bd-snippet-source bd-theme-html"}>{"\\n    "}<p className={"bd-snippet-title"}>{"\\n      "}<span className={"bd-snippet-tag bd-is-html"}>{"HTML"}</span>{"\\n    "}</p>{"\\n\\n    "}<div className={"bd-snippet-code bd-highlight-full"}>{"\\n      "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<span class=\\"icon\\">\\n  <i class=\\"fas fa-home\\"></i>\\n</span>\\n"}</code></pre></div>{"\\n    "}</div>{"\\n  "}</div>{"\\n"}</div>{"\\n\\n"}</ui.Block></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Icon with text',
  parameters: {
    official: { id: 'elements-icon/icon-text/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.IconText>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-home"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Home"}</span>{"\\n"}</ui.IconText>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Multiple icons and text',
  parameters: {
    official: { id: 'elements-icon/icon-text/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.IconText>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-train"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Paris"}</span>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-arrow-right"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Budapest"}</span>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-arrow-right"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Bucharest"}</span>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-arrow-right"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Istanbul"}</span>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-flag-checkered"} />{"\\n  "}</ui.Icon>{"\\n"}</ui.IconText>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Icons in a paragraph',
  parameters: {
    official: { id: 'elements-icon/icon-text/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content>{"\\n  "}<p>{"\\n    An invitation to\\n    "}<ui.IconText>{"\\n      "}<ui.Icon>{"\\n        "}<i className={"fas fa-utensils"} />{"\\n      "}</ui.Icon>{"\\n      "}<span>{"dinner"}</span>{"\\n    "}</ui.IconText>{"\\n    was soon afterwards dispatched; and already had Mrs. Bennet planned the\\n    courses that were to do credit to her housekeeping, when an answer arrived\\n    which deferred it all. Mr. Bingley was obliged to be in\\n    "}<ui.IconText>{"\\n      "}<ui.Icon>{"\\n        "}<i className={"fas fa-city"} />{"\\n      "}</ui.Icon>{"\\n      "}<span>{"town"}</span>{"\\n    "}</ui.IconText>{"\\n    the following day, and, consequently, unable to accept the honour of their\\n    "}<ui.IconText>{"\\n      "}<ui.Icon>{"\\n        "}<i className={"fas fa-envelope-open-text"} />{"\\n      "}</ui.Icon>{"\\n      "}<span>{"invitation"}</span>{" "}</ui.IconText>{", etc.\\n  "}</p>{"\\n\\n  "}<p>{"\\n    Mrs. Bennet was quite disconcerted. She could not imagine what business he\\n    could have in town so soon after his\\n    "}<ui.IconText>{"\\n      "}<ui.Icon>{"\\n        "}<i className={"fas fa-flag-checkered"} />{"\\n      "}</ui.Icon>{"\\n      "}<span>{"arrival"}</span>{"\\n    "}</ui.IconText>{"\\n    in Hertfordshire; and she began to fear that he might be always\\n    "}<ui.IconText>{"\\n      "}<ui.Icon>{"\\n        "}<i className={"fas fa-plane-departure"} />{"\\n      "}</ui.Icon>{"\\n      "}<span>{"flying"}</span>{"\\n    "}</ui.IconText>{"\\n    about from one place to another, and never settled at Netherfield as he\\n    ought to be.\\n  "}</p>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Status messages with icons',
  parameters: {
    official: { id: 'elements-icon/icon-text/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.IconText as={"div"}>{"\\n  "}<ui.Icon helpers={{"textColor":"info"}}>{"\\n    "}<i className={"fas fa-info-circle"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Information"}</span>{"\\n"}</ui.IconText>{"\\n\\n"}<ui.Block as={"p"}>{"\\n  Your package will be delivered on "}<strong>{"Tuesday at 08:00"}</strong>{".\\n"}</ui.Block>{"\\n\\n"}<ui.IconText as={"div"}>{"\\n  "}<ui.Icon helpers={{"textColor":"success"}}>{"\\n    "}<i className={"fas fa-check-square"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Success"}</span>{"\\n"}</ui.IconText>{"\\n\\n"}<ui.Block as={"p"}>{"Your image has been successfully uploaded."}</ui.Block>{"\\n\\n"}<ui.IconText as={"div"}>{"\\n  "}<ui.Icon helpers={{"textColor":"warning"}}>{"\\n    "}<i className={"fas fa-exclamation-triangle"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Warning"}</span>{"\\n"}</ui.IconText>{"\\n\\n"}<ui.Block as={"p"}>{"\\n  Some information is missing from your "}<a href={"#"}>{"profile"}</a>{" details.\\n"}</ui.Block>{"\\n\\n"}<ui.IconText as={"div"}>{"\\n  "}<ui.Icon helpers={{"textColor":"danger"}}>{"\\n    "}<i className={"fas fa-ban"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Danger"}</span>{"\\n"}</ui.IconText>{"\\n\\n"}<ui.Block as={"p"}>{"\\n  There was an error in your submission. "}<a href={"#"}>{"Please try again"}</a>{".\\n"}</ui.Block>{"\\n\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Colored icons',
  parameters: {
    official: { id: 'elements-icon/colors/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Icon helpers={{"textColor":"info"}}>{"\\n  "}<i className={"fas fa-info-circle"} />{"\\n"}</ui.Icon>{"\\n"}<ui.Icon helpers={{"textColor":"success"}}>{"\\n  "}<i className={"fas fa-check-square"} />{"\\n"}</ui.Icon>{"\\n"}<ui.Icon helpers={{"textColor":"warning"}}>{"\\n  "}<i className={"fas fa-exclamation-triangle"} />{"\\n"}</ui.Icon>{"\\n"}<ui.Icon helpers={{"textColor":"danger"}}>{"\\n  "}<i className={"fas fa-ban"} />{"\\n"}</ui.Icon>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Colored icon and text',
  parameters: {
    official: { id: 'elements-icon/colors/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.IconText helpers={{"textColor":"info"}}>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-info-circle"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Info"}</span>{"\\n"}</ui.IconText>{"\\n\\n"}<ui.IconText helpers={{"textColor":"success"}}>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-check-square"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Success"}</span>{"\\n"}</ui.IconText>{"\\n\\n"}<ui.IconText helpers={{"textColor":"warning"}}>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-exclamation-triangle"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Warning"}</span>{"\\n"}</ui.IconText>{"\\n\\n"}<ui.IconText helpers={{"textColor":"danger"}}>{"\\n  "}<ui.Icon>{"\\n    "}<i className={"fas fa-ban"} />{"\\n  "}</ui.Icon>{"\\n  "}<span>{"Danger"}</span>{"\\n"}</ui.IconText>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

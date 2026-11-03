import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from '@storybook/addon-docs/blocks';
import { OfficialDocument } from '../document';
import { createBulma } from '../../../src';
import { officialPage } from '../support';

const ui = createBulma();

const meta = {
  ...officialPage(
    {
      id: 'elements-tag',
      title: 'Tags',
      url: 'https://bulma.io/documentation/elements/tag/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-tag',
  title: 'CSS Library/Elements/Tag',
} satisfies Meta;
export default meta;

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-tag" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Tags'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Small '}
          <strong data-official-prose="">{'tag labels'}</strong>
          {' to insert anywhere'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The Bulma '}
            <strong data-official-prose="">{'tag'}</strong>
            {
              " is a small but versatile element. It's very useful as a way to attach information to\n    a block or other component. Its size makes it also easy to display in numbers, making it appropriate for long lists\n    of items.\n  "
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/basic/001">
          <Canvas of={Example001} />
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
        {'\n\n\n'}
        <div data-official-example="elements-tag/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/colors/002">
          <Canvas of={Example003} />
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
        <div data-official-example="elements-tag/sizes/001">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can change the size of '}
            <strong data-official-prose="">{'all'}</strong>
            {' tags at once:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-tag/sizes/002">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-tag/sizes/003">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can however keep the original size of a '}
            <strong data-official-prose="">{'subset'}</strong>
            {' of tags, simply by applying one of its modifier\n    class:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-tag/sizes/004">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'hover-active-state'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Hover/Active state\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#hover-active-state'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'A tag element will react to the '}
            <code data-official-prose="">{':hover'}</code>
            {' and '}
            <code data-official-prose="">{':active'}</code>
            {' states if:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {"it's an anchor element "}
              <code data-official-prose="">{'<a class="tag">'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              {"it's a button element "}
              <code data-official-prose="">{'<button class="tag">'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'it has the '}
              <code data-official-prose="">{'is-hoverable'}</code>
              {' modifier class '}
              <code data-official-prose="">
                {'<div class="tag is-hoverable">'}
              </code>
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-tag/hover-active-state/001">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'modifiers'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Modifiers\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#modifiers'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-example="elements-tag/modifiers/001">
          <Canvas of={Example009} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/modifiers/002">
          <Canvas of={Example010} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'combinations'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Combinations\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#combinations'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-example="elements-tag/combinations/001">
          <Canvas of={Example011} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/combinations/002">
          <Canvas of={Example012} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'list-of-tags'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    List of tags\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-tags'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-example="elements-tag/list-of-tags/001">
          <Canvas of={Example013} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/list-of-tags/002">
          <Canvas of={Example014} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'tag-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Tag addons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#tag-addons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-example="elements-tag/tag-addons/001">
          <Canvas of={Example015} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/tag-addons/002">
          <Canvas of={Example016} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/tag-addons/003">
          <Canvas of={Example017} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-tag/tag-addons/004">
          <Canvas of={Example018} />
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
                        {'$tag-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tag-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius)'}
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
                        {'$tag-delete-margin'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-tag-delete-margin)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1px'}
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
  );
}

function Example001Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'By default, a '}
          <strong>{'tag'}</strong>
          {' is a 1.5rem high label.'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n    '}
          <ui.Tag>{' Tag label '}</ui.Tag>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {'\n<span class="tag"> Tag label </span>\n'}
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example002Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'Like with buttons, there are '}
          <strong>{'10 different colors'}</strong>
          {' available.'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'black'}>{' Black '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'dark'}>{' Dark '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag light>{' Light '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'white'}>{' White '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'primary'}>{' Primary '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'link'}>{' Link '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'info'}>{' Info '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'success'}>{' Success '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'warning'}>{' Warning '}</ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Tag color={'danger'}>{' Danger '}</ui.Tag>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<span class="tag is-black">Black</span>\n<span class="tag is-dark">Dark</span>\n<span class="tag is-light">Light</span>\n<span class="tag is-white">White</span>\n<span class="tag is-primary">Primary</span>\n<span class="tag is-link">Link</span>\n<span class="tag is-info">Info</span>\n<span class="tag is-success">Success</span>\n<span class="tag is-warning">Warning</span>\n<span class="tag is-danger">Danger</span>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example003Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'\n    '}
          <p>
            {'You can now choose the '}
            <strong>{'light version'}</strong>
            {' of a color.'}
          </p>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'primary'} light>
              {' Primary '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'link'} light>
              {' Link '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'info'} light>
              {' Info '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'success'} light>
              {' Success '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'warning'} light>
              {' Warning '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Tag color={'danger'} light>
            {' Danger '}
          </ui.Tag>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<span class="tag is-primary is-light">Primary</span>\n<span class="tag is-link is-light">Link</span>\n<span class="tag is-info is-light">Info</span>\n<span class="tag is-success is-light">Success</span>\n<span class="tag is-warning is-light">Warning</span>\n<span class="tag is-danger is-light">Danger</span>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example004Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'The tag comes in '}
              <strong>{'3 different'}</strong>
              {' sizes.'}
            </p>
            {'\n      '}
            <p>
              {'\n        While the default size is the '}
              <strong>{'normal'}</strong>
              {' one, the '}
              <code>{'is-normal'}</code>
              {
                ' modifier exists in case\n        you need to reset the tag to its normal size.\n      '
              }
            </p>
            {'\n    '}
          </ui.Content>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'link'} size={'normal'}>
              {' Normal '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'primary'} size={'medium'}>
              {' Medium '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'info'} size={'large'}>
              {' Large '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<span class="tag is-link is-normal">Normal</span>\n<span class="tag is-primary is-medium">Medium</span>\n<span class="tag is-info is-large">Large</span>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tags size={'medium'}>
        {'\n  '}
        <ui.Tag>{'All'}</ui.Tag>
        {'\n  '}
        <ui.Tag>{'Medium'}</ui.Tag>
        {'\n  '}
        <ui.Tag>{'Size'}</ui.Tag>
        {'\n'}
      </ui.Tags>
      {'\n\n        \n      '}
    </>
  );
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tags size={'large'}>
        {'\n  '}
        <ui.Tag>{'All'}</ui.Tag>
        {'\n  '}
        <ui.Tag>{'Large'}</ui.Tag>
        {'\n  '}
        <ui.Tag>{'Size'}</ui.Tag>
        {'\n'}
      </ui.Tags>
      {'\n\n        \n      '}
    </>
  );
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Tags size={'medium'}>
        {'\n  '}
        <ui.Tag>{'Medium'}</ui.Tag>
        {'\n  '}
        <ui.Tag size={'normal'}>{'Normal'}</ui.Tag>
        {'\n  '}
        <ui.Tag>{'Medium'}</ui.Tag>
        {'\n  '}
        <ui.Tag size={'large'}>{'Large'}</ui.Tag>
        {'\n  '}
        <ui.Tag>{'Medium'}</ui.Tag>
        {'\n'}
      </ui.Tags>
      {'\n\n        \n      '}
    </>
  );
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.LinkTag>{'Hover me'}</ui.LinkTag>
      {'\n'}
      <ui.Tag as={'button'}>{'Hover me'}</ui.Tag>
      {'\n'}
      <ui.Tag className={'rb-is-hoverable'} as={'div'}>
        {'Hover me'}
      </ui.Tag>
      {'\n\n        \n      '}
    </>
  );
}

function Example009Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'\n    You can add the '}
          <code>{'is-rounded'}</code>
          {' modifier to make a '}
          <strong>{'rounded'}</strong>
          {' tag.\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n'}
          <ui.Tag rounded>{'Rounded'}</ui.Tag>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {'\n<span class="tag is-rounded">Rounded</span>\n'}
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example010Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'\n    You can add the '}
          <code>{'is-delete'}</code>
          {' modifier to turn the tag into a '}
          <strong>{'delete button'}</strong>
          {'.\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n'}
          <ui.TagDelete as={'a'} />
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {'\n<a class="tag is-delete"></a>\n'}
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example011Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'You can create '}
          <strong>{'hoverable colored'}</strong>
          {' tags.'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n    \n'}
          <ui.LinkTag color={'link'}>{'Hover me'}</ui.LinkTag>
          {'\n'}
          <ui.Tag color={'primary'} as={'button'}>
            {'Hover me'}
          </ui.Tag>
          {'\n'}
          <ui.Tag color={'success'} className={'rb-is-hoverable'} as={'div'}>
            {'Hover me'}
          </ui.Tag>
          {'\n'}
          <ui.LinkTag color={'info'}>{'Hover me'}</ui.LinkTag>
          {'\n'}
          <ui.Tag color={'warning'} as={'button'}>
            {'Hover me'}
          </ui.Tag>
          {'\n'}
          <ui.Tag color={'danger'} className={'rb-is-hoverable'} as={'div'}>
            {'Hover me'}
          </ui.Tag>
          {'\n\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<a class="tag is-link">Hover me</a>\n<button class="tag is-primary">Hover me</button>\n<div class="tag is-hoverable is-success">Hover me</div>\n<a class="tag is-info">Hover me</a>\n<button class="tag is-warning">Hover me</button>\n<div class="tag is-hoverable is-danger">Hover me</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example012Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={4}>
          {'You can append a '}
          <strong>{'delete button'}</strong>
          {'.'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={2}>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'success'}>
              {'\n        Bar\n        '}
              <ui.Delete size={'small'} />
              {'\n      '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'warning'} size={'medium'}>
              {'\n        Hello\n        '}
              <ui.Delete size={'small'} />
              {'\n      '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n    '}
          <ui.Field as={'p'}>
            {'\n      '}
            <ui.Tag color={'danger'} size={'large'}>
              {'\n        World\n        '}
              <ui.Delete />
              {'\n      '}
            </ui.Tag>
            {'\n    '}
          </ui.Field>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<span class="tag is-success">\n  Bar\n  <button class="delete is-small"></button>\n</span>\n<span class="tag is-warning is-medium">\n  Hello\n  <button class="delete is-small"></button>\n</span>\n<span class="tag is-danger is-large">\n  World\n  <button class="delete"></button>\n</span>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example013Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'You can now create a '}
              <strong>{'list of tags'}</strong>
              {' with the '}
              <code>{'tags'}</code>
              {' container.'}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.Tags>
              {'\n  '}
              <ui.Tag>{'One'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Two'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Three'}</ui.Tag>
              {'\n'}
            </ui.Tags>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="tags">\n  <span class="tag">One</span>\n  <span class="tag">Two</span>\n  <span class="tag">Three</span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example014Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'\n        If the list is '}
              <strong>{'very long'}</strong>
              {', it will automatically wrap on '}
              <strong>{'multiple lines'}</strong>
              {', while\n        keeping all tags '}
              <strong>{'evenly spaced'}</strong>
              {'.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.Tags>
              {'\n  '}
              <ui.Tag>{'One'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Two'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Three'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Four'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Five'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Six'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Seven'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Eight'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Nine'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Ten'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Eleven'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Twelve'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Thirteen'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Fourteen'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Fifteen'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Sixteen'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Seventeen'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Eighteen'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Nineteen'}</ui.Tag>
              {'\n  '}
              <ui.Tag>{'Twenty'}</ui.Tag>
              {'\n'}
            </ui.Tags>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="tags">\n  <span class="tag">One</span>\n  <span class="tag">Two</span>\n  <span class="tag">Three</span>\n  <span class="tag">Four</span>\n  <span class="tag">Five</span>\n  <span class="tag">Six</span>\n  <span class="tag">Seven</span>\n  <span class="tag">Eight</span>\n  <span class="tag">Nine</span>\n  <span class="tag">Ten</span>\n  <span class="tag">Eleven</span>\n  <span class="tag">Twelve</span>\n  <span class="tag">Thirteen</span>\n  <span class="tag">Fourteen</span>\n  <span class="tag">Fifteen</span>\n  <span class="tag">Sixteen</span>\n  <span class="tag">Seventeen</span>\n  <span class="tag">Eighteen</span>\n  <span class="tag">Nineteen</span>\n  <span class="tag">Twenty</span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example015Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'You can '}
              <strong>{'attach tags together'}</strong>
              {' with the '}
              <code>{'has-addons'}</code>
              {' modifier.'}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.Tags addons>
              {'\n  '}
              <ui.Tag>{'Package'}</ui.Tag>
              {'\n  '}
              <ui.Tag color={'primary'}>{'Bulma'}</ui.Tag>
              {'\n'}
            </ui.Tags>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="tags has-addons">\n  <span class="tag">Package</span>\n  <span class="tag is-primary">Bulma</span>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example016Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'You can attach a '}
              <strong>{'text'}</strong>
              {' tag with a '}
              <strong>{'delete'}</strong>
              {' tag together.'}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.Tags addons>
              {'\n  '}
              <ui.Tag color={'danger'}>{'Alex Smith'}</ui.Tag>
              {'\n  '}
              <ui.TagDelete as={'a'} />
              {'\n'}
            </ui.Tags>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="tags has-addons">\n  <span class="tag is-danger">Alex Smith</span>\n  <a class="tag is-delete"></a>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example017Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'\n        If you want to attach '}
              <code>{'tags'}</code>
              {' containers '}
              <strong>{'together'}</strong>
              {', simply use the\n        '}
              <code>{'field'}</code>
              {' element with the '}
              <code>{'is-grouped'}</code>
              {' and '}
              <code>{'is-grouped-multiline'}</code>
              {' modifiers.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.Field layout={'grouped'} multiline>
              {'\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.Tag color={'dark'}>{'npm'}</ui.Tag>
                  {'\n      '}
                  <ui.Tag color={'info'}>{'1.0.4'}</ui.Tag>
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.Tag color={'dark'}>{'build'}</ui.Tag>
                  {'\n      '}
                  <ui.Tag color={'success'}>{'passing'}</ui.Tag>
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.Tag color={'dark'}>{'chat'}</ui.Tag>
                  {'\n      '}
                  <ui.Tag color={'primary'}>{'on gitter'}</ui.Tag>
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n'}
            </ui.Field>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="field is-grouped is-grouped-multiline">\n  <div class="control">\n    <div class="tags has-addons">\n      <span class="tag is-dark">npm</span>\n      <span class="tag is-info">1.0.4</span>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <span class="tag is-dark">build</span>\n      <span class="tag is-success">passing</span>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <span class="tag is-dark">chat</span>\n      <span class="tag is-primary">on gitter</span>\n    </div>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example018Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'This can be useful for a long list of '}
              <strong>{'blog tags'}</strong>
              {'.'}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.Field layout={'grouped'} multiline>
              {'\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.LinkTag color={'link'}>{'Technology'}</ui.LinkTag>
                  {'\n      '}
                  <ui.TagDelete as={'a'} />
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.LinkTag color={'link'}>{'CSS'}</ui.LinkTag>
                  {'\n      '}
                  <ui.TagDelete as={'a'} />
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.LinkTag color={'link'}>{'Flexbox'}</ui.LinkTag>
                  {'\n      '}
                  <ui.TagDelete as={'a'} />
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.LinkTag color={'link'}>{'Web Design'}</ui.LinkTag>
                  {'\n      '}
                  <ui.TagDelete as={'a'} />
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.LinkTag color={'link'}>{'Open Source'}</ui.LinkTag>
                  {'\n      '}
                  <ui.TagDelete as={'a'} />
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.LinkTag color={'link'}>{'Community'}</ui.LinkTag>
                  {'\n      '}
                  <ui.TagDelete as={'a'} />
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n\n  '}
              <ui.Control>
                {'\n    '}
                <ui.Tags addons>
                  {'\n      '}
                  <ui.LinkTag color={'link'}>{'Documentation'}</ui.LinkTag>
                  {'\n      '}
                  <ui.TagDelete as={'a'} />
                  {'\n    '}
                </ui.Tags>
                {'\n  '}
              </ui.Control>
              {'\n'}
            </ui.Field>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="field is-grouped is-grouped-multiline">\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Technology</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">CSS</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Flexbox</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Web Design</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Open Source</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Community</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Documentation</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

export const Example001 = {
  name: 'Tags 01',
  parameters: {
    official: { id: 'elements-tag/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"By default, a "}<strong>{"tag"}</strong>{" is a 1.5rem high label."}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n    "}<ui.Tag>{" Tag label "}</ui.Tag>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<span class=\\"tag\\"> Tag label </span>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj;

export const Example002 = {
  name: 'colors 01',
  parameters: {
    official: { id: 'elements-tag/colors/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"Like with buttons, there are "}<strong>{"10 different colors"}</strong>{" available."}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"black"}>{" Black "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"dark"}>{" Dark "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag light>{" Light "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"white"}>{" White "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"primary"}>{" Primary "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"link"}>{" Link "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"info"}>{" Info "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"success"}>{" Success "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"warning"}>{" Warning "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Tag color={"danger"}>{" Danger "}</ui.Tag>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<span class=\\"tag is-black\\">Black</span>\\n<span class=\\"tag is-dark\\">Dark</span>\\n<span class=\\"tag is-light\\">Light</span>\\n<span class=\\"tag is-white\\">White</span>\\n<span class=\\"tag is-primary\\">Primary</span>\\n<span class=\\"tag is-link\\">Link</span>\\n<span class=\\"tag is-info\\">Info</span>\\n<span class=\\"tag is-success\\">Success</span>\\n<span class=\\"tag is-warning\\">Warning</span>\\n<span class=\\"tag is-danger\\">Danger</span>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj;

export const Example003 = {
  name: 'colors 02',
  parameters: {
    official: { id: 'elements-tag/colors/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"\\n    "}<p>{"You can now choose the "}<strong>{"light version"}</strong>{" of a color."}</p>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"primary"} light>{" Primary "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"link"} light>{" Link "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"info"} light>{" Info "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"success"} light>{" Success "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"warning"} light>{" Warning "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Tag color={"danger"} light>{" Danger "}</ui.Tag>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<span class=\\"tag is-primary is-light\\">Primary</span>\\n<span class=\\"tag is-link is-light\\">Link</span>\\n<span class=\\"tag is-info is-light\\">Info</span>\\n<span class=\\"tag is-success is-light\\">Success</span>\\n<span class=\\"tag is-warning is-light\\">Warning</span>\\n<span class=\\"tag is-danger is-light\\">Danger</span>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj;

export const Example004 = {
  name: 'sizes 01',
  parameters: {
    official: { id: 'elements-tag/sizes/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"The tag comes in "}<strong>{"3 different"}</strong>{" sizes."}</p>{"\\n      "}<p>{"\\n        While the default size is the "}<strong>{"normal"}</strong>{" one, the "}<code>{"is-normal"}</code>{" modifier exists in case\\n        you need to reset the tag to its normal size.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"link"} size={"normal"}>{" Normal "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"primary"} size={"medium"}>{" Medium "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"info"} size={"large"}>{" Large "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<span class=\\"tag is-link is-normal\\">Normal</span>\\n<span class=\\"tag is-primary is-medium\\">Medium</span>\\n<span class=\\"tag is-info is-large\\">Large</span>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj;

export const Example005 = {
  name: 'sizes 02',
  parameters: {
    official: { id: 'elements-tag/sizes/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tags size={"medium"}>{"\\n  "}<ui.Tag>{"All"}</ui.Tag>{"\\n  "}<ui.Tag>{"Medium"}</ui.Tag>{"\\n  "}<ui.Tag>{"Size"}</ui.Tag>{"\\n"}</ui.Tags>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj;

export const Example006 = {
  name: 'sizes 03',
  parameters: {
    official: { id: 'elements-tag/sizes/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tags size={"large"}>{"\\n  "}<ui.Tag>{"All"}</ui.Tag>{"\\n  "}<ui.Tag>{"Large"}</ui.Tag>{"\\n  "}<ui.Tag>{"Size"}</ui.Tag>{"\\n"}</ui.Tags>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj;

export const Example007 = {
  name: 'sizes 04',
  parameters: {
    official: { id: 'elements-tag/sizes/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Tags size={"medium"}>{"\\n  "}<ui.Tag>{"Medium"}</ui.Tag>{"\\n  "}<ui.Tag size={"normal"}>{"Normal"}</ui.Tag>{"\\n  "}<ui.Tag>{"Medium"}</ui.Tag>{"\\n  "}<ui.Tag size={"large"}>{"Large"}</ui.Tag>{"\\n  "}<ui.Tag>{"Medium"}</ui.Tag>{"\\n"}</ui.Tags>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj;

export const Example008 = {
  name: 'hover active state 01',
  parameters: {
    official: { id: 'elements-tag/hover-active-state/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.LinkTag>{"Hover me"}</ui.LinkTag>{"\\n"}<ui.Tag as={"button"}>{"Hover me"}</ui.Tag>{"\\n"}<ui.Tag className={"rb-is-hoverable"} as={"div"}>{"Hover me"}</ui.Tag>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj;

export const Example009 = {
  name: 'modifiers 01',
  parameters: {
    official: { id: 'elements-tag/modifiers/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"\\n    You can add the "}<code>{"is-rounded"}</code>{" modifier to make a "}<strong>{"rounded"}</strong>{" tag.\\n  "}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n"}<ui.Tag rounded>{"Rounded"}</ui.Tag>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<span class=\\"tag is-rounded\\">Rounded</span>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj;

export const Example010 = {
  name: 'modifiers 02',
  parameters: {
    official: { id: 'elements-tag/modifiers/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"\\n    You can add the "}<code>{"is-delete"}</code>{" modifier to turn the tag into a "}<strong>{"delete button"}</strong>{".\\n  "}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n"}<ui.TagDelete as={"a"} />{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<a class=\\"tag is-delete\\"></a>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj;

export const Example011 = {
  name: 'combinations 01',
  parameters: {
    official: { id: 'elements-tag/combinations/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"You can create "}<strong>{"hoverable colored"}</strong>{" tags."}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n    \\n"}<ui.LinkTag color={"link"}>{"Hover me"}</ui.LinkTag>{"\\n"}<ui.Tag color={"primary"} as={"button"}>{"Hover me"}</ui.Tag>{"\\n"}<ui.Tag color={"success"} className={"rb-is-hoverable"} as={"div"}>{"Hover me"}</ui.Tag>{"\\n"}<ui.LinkTag color={"info"}>{"Hover me"}</ui.LinkTag>{"\\n"}<ui.Tag color={"warning"} as={"button"}>{"Hover me"}</ui.Tag>{"\\n"}<ui.Tag color={"danger"} className={"rb-is-hoverable"} as={"div"}>{"Hover me"}</ui.Tag>{"\\n\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<a class=\\"tag is-link\\">Hover me</a>\\n<button class=\\"tag is-primary\\">Hover me</button>\\n<div class=\\"tag is-hoverable is-success\\">Hover me</div>\\n<a class=\\"tag is-info\\">Hover me</a>\\n<button class=\\"tag is-warning\\">Hover me</button>\\n<div class=\\"tag is-hoverable is-danger\\">Hover me</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj;

export const Example012 = {
  name: 'combinations 02',
  parameters: {
    official: { id: 'elements-tag/combinations/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example012Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={4}>{"You can append a "}<strong>{"delete button"}</strong>{"."}</ui.Column>{"\\n  "}<ui.Column width={2}>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"success"}>{"\\n        Bar\\n        "}<ui.Delete size={"small"} />{"\\n      "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"warning"} size={"medium"}>{"\\n        Hello\\n        "}<ui.Delete size={"small"} />{"\\n      "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n    "}<ui.Field as={"p"}>{"\\n      "}<ui.Tag color={"danger"} size={"large"}>{"\\n        World\\n        "}<ui.Delete />{"\\n      "}</ui.Tag>{"\\n    "}</ui.Field>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<span class=\\"tag is-success\\">\\n  Bar\\n  <button class=\\"delete is-small\\"></button>\\n</span>\\n<span class=\\"tag is-warning is-medium\\">\\n  Hello\\n  <button class=\\"delete is-small\\"></button>\\n</span>\\n<span class=\\"tag is-danger is-large\\">\\n  World\\n  <button class=\\"delete\\"></button>\\n</span>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj;

export const Example013 = {
  name: 'list of tags 01',
  parameters: {
    official: { id: 'elements-tag/list-of-tags/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example013Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<ui.Content>{"\\n      "}<p>{"You can now create a "}<strong>{"list of tags"}</strong>{" with the "}<code>{"tags"}</code>{" container."}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.Tags>{"\\n  "}<ui.Tag>{"One"}</ui.Tag>{"\\n  "}<ui.Tag>{"Two"}</ui.Tag>{"\\n  "}<ui.Tag>{"Three"}</ui.Tag>{"\\n"}</ui.Tags>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"tags\\">\\n  <span class=\\"tag\\">One</span>\\n  <span class=\\"tag\\">Two</span>\\n  <span class=\\"tag\\">Three</span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj;

export const Example014 = {
  name: 'list of tags 02',
  parameters: {
    official: { id: 'elements-tag/list-of-tags/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example014Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        If the list is "}<strong>{"very long"}</strong>{", it will automatically wrap on "}<strong>{"multiple lines"}</strong>{", while\\n        keeping all tags "}<strong>{"evenly spaced"}</strong>{".\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.Tags>{"\\n  "}<ui.Tag>{"One"}</ui.Tag>{"\\n  "}<ui.Tag>{"Two"}</ui.Tag>{"\\n  "}<ui.Tag>{"Three"}</ui.Tag>{"\\n  "}<ui.Tag>{"Four"}</ui.Tag>{"\\n  "}<ui.Tag>{"Five"}</ui.Tag>{"\\n  "}<ui.Tag>{"Six"}</ui.Tag>{"\\n  "}<ui.Tag>{"Seven"}</ui.Tag>{"\\n  "}<ui.Tag>{"Eight"}</ui.Tag>{"\\n  "}<ui.Tag>{"Nine"}</ui.Tag>{"\\n  "}<ui.Tag>{"Ten"}</ui.Tag>{"\\n  "}<ui.Tag>{"Eleven"}</ui.Tag>{"\\n  "}<ui.Tag>{"Twelve"}</ui.Tag>{"\\n  "}<ui.Tag>{"Thirteen"}</ui.Tag>{"\\n  "}<ui.Tag>{"Fourteen"}</ui.Tag>{"\\n  "}<ui.Tag>{"Fifteen"}</ui.Tag>{"\\n  "}<ui.Tag>{"Sixteen"}</ui.Tag>{"\\n  "}<ui.Tag>{"Seventeen"}</ui.Tag>{"\\n  "}<ui.Tag>{"Eighteen"}</ui.Tag>{"\\n  "}<ui.Tag>{"Nineteen"}</ui.Tag>{"\\n  "}<ui.Tag>{"Twenty"}</ui.Tag>{"\\n"}</ui.Tags>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"tags\\">\\n  <span class=\\"tag\\">One</span>\\n  <span class=\\"tag\\">Two</span>\\n  <span class=\\"tag\\">Three</span>\\n  <span class=\\"tag\\">Four</span>\\n  <span class=\\"tag\\">Five</span>\\n  <span class=\\"tag\\">Six</span>\\n  <span class=\\"tag\\">Seven</span>\\n  <span class=\\"tag\\">Eight</span>\\n  <span class=\\"tag\\">Nine</span>\\n  <span class=\\"tag\\">Ten</span>\\n  <span class=\\"tag\\">Eleven</span>\\n  <span class=\\"tag\\">Twelve</span>\\n  <span class=\\"tag\\">Thirteen</span>\\n  <span class=\\"tag\\">Fourteen</span>\\n  <span class=\\"tag\\">Fifteen</span>\\n  <span class=\\"tag\\">Sixteen</span>\\n  <span class=\\"tag\\">Seventeen</span>\\n  <span class=\\"tag\\">Eighteen</span>\\n  <span class=\\"tag\\">Nineteen</span>\\n  <span class=\\"tag\\">Twenty</span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj;

export const Example015 = {
  name: 'tag addons 01',
  parameters: {
    official: { id: 'elements-tag/tag-addons/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example015Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<ui.Content>{"\\n      "}<p>{"You can "}<strong>{"attach tags together"}</strong>{" with the "}<code>{"has-addons"}</code>{" modifier."}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.Tags addons>{"\\n  "}<ui.Tag>{"Package"}</ui.Tag>{"\\n  "}<ui.Tag color={"primary"}>{"Bulma"}</ui.Tag>{"\\n"}</ui.Tags>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"tags has-addons\\">\\n  <span class=\\"tag\\">Package</span>\\n  <span class=\\"tag is-primary\\">Bulma</span>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj;

export const Example016 = {
  name: 'tag addons 02',
  parameters: {
    official: { id: 'elements-tag/tag-addons/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example016Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<ui.Content>{"\\n      "}<p>{"You can attach a "}<strong>{"text"}</strong>{" tag with a "}<strong>{"delete"}</strong>{" tag together."}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.Tags addons>{"\\n  "}<ui.Tag color={"danger"}>{"Alex Smith"}</ui.Tag>{"\\n  "}<ui.TagDelete as={"a"} />{"\\n"}</ui.Tags>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"tags has-addons\\">\\n  <span class=\\"tag is-danger\\">Alex Smith</span>\\n  <a class=\\"tag is-delete\\"></a>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj;

export const Example017 = {
  name: 'tag addons 03',
  parameters: {
    official: { id: 'elements-tag/tag-addons/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example017Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        If you want to attach "}<code>{"tags"}</code>{" containers "}<strong>{"together"}</strong>{", simply use the\\n        "}<code>{"field"}</code>{" element with the "}<code>{"is-grouped"}</code>{" and "}<code>{"is-grouped-multiline"}</code>{" modifiers.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.Field layout={"grouped"} multiline>{"\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.Tag color={"dark"}>{"npm"}</ui.Tag>{"\\n      "}<ui.Tag color={"info"}>{"1.0.4"}</ui.Tag>{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.Tag color={"dark"}>{"build"}</ui.Tag>{"\\n      "}<ui.Tag color={"success"}>{"passing"}</ui.Tag>{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.Tag color={"dark"}>{"chat"}</ui.Tag>{"\\n      "}<ui.Tag color={"primary"}>{"on gitter"}</ui.Tag>{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"field is-grouped is-grouped-multiline\\">\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <span class=\\"tag is-dark\\">npm</span>\\n      <span class=\\"tag is-info\\">1.0.4</span>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <span class=\\"tag is-dark\\">build</span>\\n      <span class=\\"tag is-success\\">passing</span>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <span class=\\"tag is-dark\\">chat</span>\\n      <span class=\\"tag is-primary\\">on gitter</span>\\n    </div>\\n  </div>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj;

export const Example018 = {
  name: 'tag addons 04',
  parameters: {
    official: { id: 'elements-tag/tag-addons/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example018Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<ui.Content>{"\\n      "}<p>{"This can be useful for a long list of "}<strong>{"blog tags"}</strong>{"."}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.Field layout={"grouped"} multiline>{"\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.LinkTag color={"link"}>{"Technology"}</ui.LinkTag>{"\\n      "}<ui.TagDelete as={"a"} />{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.LinkTag color={"link"}>{"CSS"}</ui.LinkTag>{"\\n      "}<ui.TagDelete as={"a"} />{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.LinkTag color={"link"}>{"Flexbox"}</ui.LinkTag>{"\\n      "}<ui.TagDelete as={"a"} />{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.LinkTag color={"link"}>{"Web Design"}</ui.LinkTag>{"\\n      "}<ui.TagDelete as={"a"} />{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.LinkTag color={"link"}>{"Open Source"}</ui.LinkTag>{"\\n      "}<ui.TagDelete as={"a"} />{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.LinkTag color={"link"}>{"Community"}</ui.LinkTag>{"\\n      "}<ui.TagDelete as={"a"} />{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n\\n  "}<ui.Control>{"\\n    "}<ui.Tags addons>{"\\n      "}<ui.LinkTag color={"link"}>{"Documentation"}</ui.LinkTag>{"\\n      "}<ui.TagDelete as={"a"} />{"\\n    "}</ui.Tags>{"\\n  "}</ui.Control>{"\\n"}</ui.Field>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"field is-grouped is-grouped-multiline\\">\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <a class=\\"tag is-link\\">Technology</a>\\n      <a class=\\"tag is-delete\\"></a>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <a class=\\"tag is-link\\">CSS</a>\\n      <a class=\\"tag is-delete\\"></a>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <a class=\\"tag is-link\\">Flexbox</a>\\n      <a class=\\"tag is-delete\\"></a>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <a class=\\"tag is-link\\">Web Design</a>\\n      <a class=\\"tag is-delete\\"></a>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <a class=\\"tag is-link\\">Open Source</a>\\n      <a class=\\"tag is-delete\\"></a>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <a class=\\"tag is-link\\">Community</a>\\n      <a class=\\"tag is-delete\\"></a>\\n    </div>\\n  </div>\\n\\n  <div class=\\"control\\">\\n    <div class=\\"tags has-addons\\">\\n      <a class=\\"tag is-link\\">Documentation</a>\\n      <a class=\\"tag is-delete\\"></a>\\n    </div>\\n  </div>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj;

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-content',
      title: 'Content',
      url: 'https://bulma.io/documentation/elements/content/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-content',
  title: 'CSS Library/Elements/Content',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-content" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Content'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A single class to handle '}
          <strong data-official-prose="">{'WYSIWYG'}</strong>
          {' generated content, where only '}
          <strong data-official-prose="">{'HTML tags'}</strong>
          {' are available'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              "\n    When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use\n    "
            }
            <code data-official-prose="">{'content'}</code>
            {' as container. It can handle almost any HTML tag:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<p>'}</code>
              {' paragraphs'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<ul>'}</code>{' '}
              <code data-official-prose="">{'<ol>'}</code>{' '}
              <code data-official-prose="">{'<dl>'}</code>
              {' lists'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<h1>'}</code>
              {' to '}
              <code data-official-prose="">{'<h6>'}</code>
              {' headings'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<blockquote>'}</code>
              {' quotes'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<em>'}</code>
              {' and '}
              <code data-official-prose="">{'<strong>'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'<table>'}</code>{' '}
              <code data-official-prose="">{'<tr>'}</code>{' '}
              <code data-official-prose="">{'<th>'}</code>{' '}
              <code data-official-prose="">{'<td>'}</code>
              {' tables'}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    This '}
            <code data-official-prose="">{'content'}</code>
            {' class can be used in '}
            <em data-official-prose="">{'any'}</em>
            {' context where you just want to (or can only) write some\n    '}
            <strong data-official-prose="">{'text'}</strong>
            {
              ". For example, it's used for the paragraph you're currently reading.\n  "
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'full-example'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Full example\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#full-example'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  Here is an example of the '}
          <code data-official-prose="">{'content'}</code>
          {' Bulma element with all the supported HTML tags:\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-content/full-example/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'ordered-lists-alternatives'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Ordered lists alternatives\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#ordered-lists-alternatives'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    '}
            <strong data-official-prose="">{'Ordered lists'}</strong>{' '}
            <code data-official-prose="">{'<ol>'}</code>
            {' support different '}
            <strong data-official-prose="">{'types'}</strong>
            {' of items markers. To\n    modify them, use either:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'the corresponding HTML attribute value'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      one of the following CSS modifier classes: '}
              <code data-official-prose="">{'is-lower-alpha'}</code>
              {', '}
              <code data-official-prose="">{'is-lower-roman'}</code>
              {',\n      '}
              <code data-official-prose="">{'is-upper-alpha'}</code>
              {' or\n      '}
              <code data-official-prose="">{'is-upper-roman'}</code>
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
        <div data-official-example="elements-content/ordered-lists-alternatives/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-content/ordered-lists-alternatives/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
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
            {'\n    You can use the '}
            <code data-official-prose="">{'is-small'}</code>
            {', '}
            <code data-official-prose="">{'is-medium'}</code>
            {' and '}
            <code data-official-prose="">{'is-large'}</code>
            {' modifiers to change the font\n    size.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n\n\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <h4 data-official-prose="">
            {'Small size '}
            <code data-official-prose="">{'content'}</code>
          </h4>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-content/small-size-content/001">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <h4 data-official-prose="">
            {'Normal size '}
            <code data-official-prose="">{'content'}</code>{' '}
            <em data-official-prose="">{'(default)'}</em>
          </h4>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-content/normal-size-content-default/001">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <h4 data-official-prose="">
            {'Medium size '}
            <code data-official-prose="">{'content'}</code>
          </h4>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-content/medium-size-content/001">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <h4 data-official-prose="">
            {'Large size '}
            <code data-official-prose="">{'content'}</code>
          </h4>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-content/large-size-content/001">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
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
                        {'$content-heading-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-heading-color)'}
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
                        {'$content-heading-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-heading-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-extrabold)'}
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
                        {'$content-heading-line-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-heading-line-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.125'}
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
                        {'$content-block-margin-bottom'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-block-margin-bottom)'}
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
                        {'$content-blockquote-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-blockquote-background-color)'}
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
                        {'$content-blockquote-border-left'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-blockquote-border-left)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'5px solid var(--bulma-border)'}
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
                        {'$content-blockquote-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-blockquote-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25em 1.5em'}
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
                        {'$content-pre-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-pre-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25em 1.5em'}
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
                        {'$content-table-cell-border'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-cell-border)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1px solid var(--bulma-border)'}
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
                        {'$content-table-cell-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-cell-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0 1px'}
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
                        {'$content-table-cell-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-cell-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5em 0.75em'}
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
                        {'$content-table-cell-heading-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-cell-heading-color)'}
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
                        {'$content-table-head-cell-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-head-cell-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0 2px'}
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
                        {'$content-table-head-cell-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-head-cell-color)'}
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
                        {
                          '$content-table-body-last-row-cell-border-bottom-width'
                        }
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'var(--bulma-content-table-body-last-row-cell-border-bottom-width)'
                        }
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0'}
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
                        {'$content-table-foot-cell-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-foot-cell-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2px 0 0'}
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
                        {'$content-table-foot-cell-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-content-table-foot-cell-color)'}
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
      <ui.Content>
        {'\n  '}
        <h1>{'Hello World'}</h1>
        {'\n  '}
        <p>
          {'\n    Lorem ipsum'}
          <sup>
            <a>{'[1]'}</a>
          </sup>
          {
            ' dolor sit amet, consectetur adipiscing\n    elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius\n    lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat\n    odio, sollicitudin vel erat vel, interdum mattis neque. Sub'
          }
          <sub>{'script'}</sub>
          {'\n    works as well!\n  '}
        </p>
        {'\n  '}
        <h2>{'Second level'}</h2>
        {'\n  '}
        <p>
          {'\n    Curabitur accumsan turpis pharetra '}
          <strong>{'augue tincidunt'}</strong>
          {
            ' blandit.\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\n  '
          }
        </p>
        {'\n  '}
        <ul>
          {'\n    '}
          <li>
            {'In fermentum leo eu lectus mollis, quis dictum mi aliquet.'}
          </li>
          {'\n    '}
          <li>
            {'Morbi eu nulla lobortis, lobortis est in, fringilla felis.'}
          </li>
          {'\n    '}
          <li>
            {
              'Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.'
            }
          </li>
          {'\n    '}
          <li>{'Ut non enim metus.'}</li>
          {'\n  '}
        </ul>
        {'\n  '}
        <h3>{'Third level'}</h3>
        {'\n  '}
        <p>
          {'\n    Quisque ante lacus, malesuada ac auctor vitae, congue\n    '}
          <a href={'#'}>{'non ante'}</a>
          {
            '. Phasellus lacus ex, semper ac tortor nec,\n    fringilla condimentum orci. Fusce eu rutrum tellus.\n  '
          }
        </p>
        {'\n  '}
        <ol>
          {'\n    '}
          <li>{'Donec blandit a lorem id convallis.'}</li>
          {'\n    '}
          <li>{'Cras gravida arcu at diam gravida gravida.'}</li>
          {'\n    '}
          <li>{'Integer in volutpat libero.'}</li>
          {'\n    '}
          <li>{'Donec a diam tellus.'}</li>
          {'\n    '}
          <li>{'Aenean nec tortor orci.'}</li>
          {'\n    '}
          <li>
            {'Quisque aliquam cursus urna, non bibendum massa viverra eget.'}
          </li>
          {'\n    '}
          <li>{'Vivamus maximus ultricies pulvinar.'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <blockquote>
          {
            '\n    Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit\n    ipsum, ut blandit est tellus sit amet turpis.\n  '
          }
        </blockquote>
        {'\n  '}
        <p>
          {
            '\n    Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et\n    '
          }
          <em>{'justo sodales'}</em>
          {
            ' elementum. Maecenas ultrices lacus quis neque\n    consectetur, et lobortis nisi molestie.\n  '
          }
        </p>
        {'\n  '}
        <p>
          {
            '\n    Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis\n    vulputate risus in luctus. Maecenas vestibulum interdum commodo.\n  '
          }
        </p>
        {'\n  '}
        <dl>
          {'\n    '}
          <dt>{'Web'}</dt>
          {'\n    '}
          <dd>
            {'The part of the Internet that contains websites and web pages'}
          </dd>
          {'\n    '}
          <dt>{'HTML'}</dt>
          {'\n    '}
          <dd>{'A markup language for creating web pages'}</dd>
          {'\n    '}
          <dt>{'CSS'}</dt>
          {'\n    '}
          <dd>{'A technology to make HTML look better'}</dd>
          {'\n  '}
        </dl>
        {'\n  '}
        <p>
          {
            '\n    Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl,\n    suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac\n    erat ante.\n  '
          }
        </p>
        {'\n  '}
        <h4>{'Fourth level'}</h4>
        {'\n  '}
        <p>
          {
            '\n    Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris\n    euismod metus a tellus laoreet, at elementum ex efficitur.\n  '
          }
        </p>
        {'\n  '}
        <pre>
          {
            ' <!DOCTYPE html> <html> <head>\n<title>Hello World</title> </head> <body> <p>Lorem\nipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae\nmollis.</p> </body> </html> '
          }
        </pre>
        {'\n  '}
        <p>
          {
            '\n    Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non.\n    Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta\n    condimentum in eu justo. Nulla id iaculis sapien.\n  '
          }
        </p>
        {'\n  '}
        <table>
          <thead>
            <tr>
              <th>{'One'}</th>
              <th>{'Two'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'Three'}</td>
              <td>{'Four'}</td>
            </tr>
            <tr>
              <td>{'Five'}</td>
              <td>{'Six'}</td>
            </tr>
            <tr>
              <td>{'Seven'}</td>
              <td>{'Eight'}</td>
            </tr>
            <tr>
              <td>{'Nine'}</td>
              <td>{'Ten'}</td>
            </tr>
            <tr>
              <td>{'Eleven'}</td>
              <td>{'Twelve'}</td>
            </tr>
          </tbody>
        </table>
        {'\n  '}
        <p>
          {
            '\n    Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit\n    sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum\n    rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam\n    tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo\n    est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae\n    ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar.\n    Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor\n    cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.\n  '
          }
        </p>
        {'\n  '}
        <h5>{'Fifth level'}</h5>
        {'\n  '}
        <p>
          {
            '\n    Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt\n    ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit\n    volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue\n    laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.\n  '
          }
        </p>
        {'\n  '}
        <figure>
          {'\n    '}
          <img src={'./official-assets/256x256.png'} />
          {'\n    '}
          <img src={'./official-assets/256x256.png'} />
          {'\n    '}
          <figcaption>{'Figure 1: Some beautiful placeholders'}</figcaption>
          {'\n  '}
        </figure>
        {'\n  '}
        <h6>{'Sixth level'}</h6>
        {'\n  '}
        <p>
          {
            '\n    Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus\n    sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut\n    sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada\n    ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse\n    euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius\n    sapien odio vitae est. Etiam at cursus metus.\n  '
          }
        </p>
        {'\n'}
      </ui.Content>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Content>
        {'\n  '}
        <ol type={'1'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <ol type={'A'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <ol type={'a'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <ol type={'I'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <ol type={'i'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n'}
      </ui.Content>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Content>
        {'\n  '}
        <ol className={'rb-is-lower-alpha'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <ol className={'rb-is-lower-roman'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <ol className={'rb-is-upper-alpha'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n  '}
        <ol className={'rb-is-upper-roman'}>
          {'\n    '}
          <li>{'Coffee'}</li>
          {'\n    '}
          <li>{'Tea'}</li>
          {'\n    '}
          <li>{'Milk'}</li>
          {'\n  '}
        </ol>
        {'\n'}
      </ui.Content>
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Content size={'small'}>
        {'\n  '}
        <h1>{'Hello World'}</h1>
        {'\n  '}
        <p>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\n    erat vel, interdum mattis neque.\n  '
          }
        </p>
        {'\n  '}
        <h2>{'Second level'}</h2>
        {'\n  '}
        <p>
          {'\n    Curabitur accumsan turpis pharetra '}
          <strong>{'augue tincidunt'}</strong>
          {
            ' blandit.\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\n  '
          }
        </p>
        {'\n  '}
        <ul>
          {'\n    '}
          <li>
            {'In fermentum leo eu lectus mollis, quis dictum mi aliquet.'}
          </li>
          {'\n    '}
          <li>
            {'Morbi eu nulla lobortis, lobortis est in, fringilla felis.'}
          </li>
          {'\n    '}
          <li>
            {
              'Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.'
            }
          </li>
          {'\n    '}
          <li>{'Ut non enim metus.'}</li>
          {'\n  '}
        </ul>
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
      <ui.Content size={'normal'}>
        {'\n  '}
        <h1>{'Hello World'}</h1>
        {'\n  '}
        <p>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\n    erat vel, interdum mattis neque.\n  '
          }
        </p>
        {'\n  '}
        <h2>{'Second level'}</h2>
        {'\n  '}
        <p>
          {'\n    Curabitur accumsan turpis pharetra '}
          <strong>{'augue tincidunt'}</strong>
          {
            ' blandit.\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\n  '
          }
        </p>
        {'\n  '}
        <ul>
          {'\n    '}
          <li>
            {'In fermentum leo eu lectus mollis, quis dictum mi aliquet.'}
          </li>
          {'\n    '}
          <li>
            {'Morbi eu nulla lobortis, lobortis est in, fringilla felis.'}
          </li>
          {'\n    '}
          <li>
            {
              'Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.'
            }
          </li>
          {'\n    '}
          <li>{'Ut non enim metus.'}</li>
          {'\n  '}
        </ul>
        {'\n'}
      </ui.Content>
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Content size={'medium'}>
        {'\n  '}
        <h1>{'Hello World'}</h1>
        {'\n  '}
        <p>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\n    erat vel, interdum mattis neque.\n  '
          }
        </p>
        {'\n  '}
        <h2>{'Second level'}</h2>
        {'\n  '}
        <p>
          {'\n    Curabitur accumsan turpis pharetra '}
          <strong>{'augue tincidunt'}</strong>
          {
            ' blandit.\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\n  '
          }
        </p>
        {'\n  '}
        <ul>
          {'\n    '}
          <li>
            {'In fermentum leo eu lectus mollis, quis dictum mi aliquet.'}
          </li>
          {'\n    '}
          <li>
            {'Morbi eu nulla lobortis, lobortis est in, fringilla felis.'}
          </li>
          {'\n    '}
          <li>
            {
              'Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.'
            }
          </li>
          {'\n    '}
          <li>{'Ut non enim metus.'}</li>
          {'\n  '}
        </ul>
        {'\n'}
      </ui.Content>
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Content size={'large'}>
        {'\n  '}
        <h1>{'Hello World'}</h1>
        {'\n  '}
        <p>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\n    erat vel, interdum mattis neque.\n  '
          }
        </p>
        {'\n  '}
        <h2>{'Second level'}</h2>
        {'\n  '}
        <p>
          {'\n    Curabitur accumsan turpis pharetra '}
          <strong>{'augue tincidunt'}</strong>
          {
            ' blandit.\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\n  '
          }
        </p>
        {'\n  '}
        <ul>
          {'\n    '}
          <li>
            {'In fermentum leo eu lectus mollis, quis dictum mi aliquet.'}
          </li>
          {'\n    '}
          <li>
            {'Morbi eu nulla lobortis, lobortis est in, fringilla felis.'}
          </li>
          {'\n    '}
          <li>
            {
              'Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.'
            }
          </li>
          {'\n    '}
          <li>{'Ut non enim metus.'}</li>
          {'\n  '}
        </ul>
        {'\n'}
      </ui.Content>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Full typography example',
  parameters: {
    official: { id: 'elements-content/full-example/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content>{"\\n  "}<h1>{"Hello World"}</h1>{"\\n  "}<p>{"\\n    Lorem ipsum"}<sup><a>{"[1]"}</a></sup>{" dolor sit amet, consectetur adipiscing\\n    elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius\\n    lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat\\n    odio, sollicitudin vel erat vel, interdum mattis neque. Sub"}<sub>{"script"}</sub>{"\\n    works as well!\\n  "}</p>{"\\n  "}<h2>{"Second level"}</h2>{"\\n  "}<p>{"\\n    Curabitur accumsan turpis pharetra "}<strong>{"augue tincidunt"}</strong>{" blandit.\\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\\n  "}</p>{"\\n  "}<ul>{"\\n    "}<li>{"In fermentum leo eu lectus mollis, quis dictum mi aliquet."}</li>{"\\n    "}<li>{"Morbi eu nulla lobortis, lobortis est in, fringilla felis."}</li>{"\\n    "}<li>{"Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."}</li>{"\\n    "}<li>{"Ut non enim metus."}</li>{"\\n  "}</ul>{"\\n  "}<h3>{"Third level"}</h3>{"\\n  "}<p>{"\\n    Quisque ante lacus, malesuada ac auctor vitae, congue\\n    "}<a href={"#"}>{"non ante"}</a>{". Phasellus lacus ex, semper ac tortor nec,\\n    fringilla condimentum orci. Fusce eu rutrum tellus.\\n  "}</p>{"\\n  "}<ol>{"\\n    "}<li>{"Donec blandit a lorem id convallis."}</li>{"\\n    "}<li>{"Cras gravida arcu at diam gravida gravida."}</li>{"\\n    "}<li>{"Integer in volutpat libero."}</li>{"\\n    "}<li>{"Donec a diam tellus."}</li>{"\\n    "}<li>{"Aenean nec tortor orci."}</li>{"\\n    "}<li>{"Quisque aliquam cursus urna, non bibendum massa viverra eget."}</li>{"\\n    "}<li>{"Vivamus maximus ultricies pulvinar."}</li>{"\\n  "}</ol>{"\\n  "}<blockquote>{"\\n    Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit\\n    ipsum, ut blandit est tellus sit amet turpis.\\n  "}</blockquote>{"\\n  "}<p>{"\\n    Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et\\n    "}<em>{"justo sodales"}</em>{" elementum. Maecenas ultrices lacus quis neque\\n    consectetur, et lobortis nisi molestie.\\n  "}</p>{"\\n  "}<p>{"\\n    Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis\\n    vulputate risus in luctus. Maecenas vestibulum interdum commodo.\\n  "}</p>{"\\n  "}<dl>{"\\n    "}<dt>{"Web"}</dt>{"\\n    "}<dd>{"The part of the Internet that contains websites and web pages"}</dd>{"\\n    "}<dt>{"HTML"}</dt>{"\\n    "}<dd>{"A markup language for creating web pages"}</dd>{"\\n    "}<dt>{"CSS"}</dt>{"\\n    "}<dd>{"A technology to make HTML look better"}</dd>{"\\n  "}</dl>{"\\n  "}<p>{"\\n    Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl,\\n    suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac\\n    erat ante.\\n  "}</p>{"\\n  "}<h4>{"Fourth level"}</h4>{"\\n  "}<p>{"\\n    Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris\\n    euismod metus a tellus laoreet, at elementum ex efficitur.\\n  "}</p>{"\\n  "}<pre>{" <!DOCTYPE html> <html> <head>\\n<title>Hello World</title> </head> <body> <p>Lorem\\nipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae\\nmollis.</p> </body> </html> "}</pre>{"\\n  "}<p>{"\\n    Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non.\\n    Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta\\n    condimentum in eu justo. Nulla id iaculis sapien.\\n  "}</p>{"\\n  "}<table><thead><tr><th>{"One"}</th><th>{"Two"}</th></tr></thead><tbody><tr><td>{"Three"}</td><td>{"Four"}</td></tr><tr><td>{"Five"}</td><td>{"Six"}</td></tr><tr><td>{"Seven"}</td><td>{"Eight"}</td></tr><tr><td>{"Nine"}</td><td>{"Ten"}</td></tr><tr><td>{"Eleven"}</td><td>{"Twelve"}</td></tr></tbody></table>{"\\n  "}<p>{"\\n    Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit\\n    sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum\\n    rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam\\n    tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo\\n    est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae\\n    ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar.\\n    Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor\\n    cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.\\n  "}</p>{"\\n  "}<h5>{"Fifth level"}</h5>{"\\n  "}<p>{"\\n    Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt\\n    ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit\\n    volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue\\n    laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.\\n  "}</p>{"\\n  "}<figure>{"\\n    "}<img src={"./official-assets/256x256.png"} />{"\\n    "}<img src={"./official-assets/256x256.png"} />{"\\n    "}<figcaption>{"Figure 1: Some beautiful placeholders"}</figcaption>{"\\n  "}</figure>{"\\n  "}<h6>{"Sixth level"}</h6>{"\\n  "}<p>{"\\n    Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus\\n    sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut\\n    sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada\\n    ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse\\n    euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius\\n    sapien odio vitae est. Etiam at cursus metus.\\n  "}</p>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Native ordered list types',
  parameters: {
    official: { id: 'elements-content/ordered-lists-alternatives/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content>{"\\n  "}<ol type={"1"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n  "}<ol type={"A"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n  "}<ol type={"a"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n  "}<ol type={"I"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n  "}<ol type={"i"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Ordered list modifiers',
  parameters: {
    official: { id: 'elements-content/ordered-lists-alternatives/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content>{"\\n  "}<ol className={"rb-is-lower-alpha"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n  "}<ol className={"rb-is-lower-roman"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n  "}<ol className={"rb-is-upper-alpha"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n  "}<ol className={"rb-is-upper-roman"}>{"\\n    "}<li>{"Coffee"}</li>{"\\n    "}<li>{"Tea"}</li>{"\\n    "}<li>{"Milk"}</li>{"\\n  "}</ol>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Small content',
  parameters: {
    official: { id: 'elements-content/small-size-content/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content size={"small"}>{"\\n  "}<h1>{"Hello World"}</h1>{"\\n  "}<p>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\\n    erat vel, interdum mattis neque.\\n  "}</p>{"\\n  "}<h2>{"Second level"}</h2>{"\\n  "}<p>{"\\n    Curabitur accumsan turpis pharetra "}<strong>{"augue tincidunt"}</strong>{" blandit.\\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\\n  "}</p>{"\\n  "}<ul>{"\\n    "}<li>{"In fermentum leo eu lectus mollis, quis dictum mi aliquet."}</li>{"\\n    "}<li>{"Morbi eu nulla lobortis, lobortis est in, fringilla felis."}</li>{"\\n    "}<li>{"Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."}</li>{"\\n    "}<li>{"Ut non enim metus."}</li>{"\\n  "}</ul>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Normal content',
  parameters: {
    official: { id: 'elements-content/normal-size-content-default/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content size={"normal"}>{"\\n  "}<h1>{"Hello World"}</h1>{"\\n  "}<p>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\\n    erat vel, interdum mattis neque.\\n  "}</p>{"\\n  "}<h2>{"Second level"}</h2>{"\\n  "}<p>{"\\n    Curabitur accumsan turpis pharetra "}<strong>{"augue tincidunt"}</strong>{" blandit.\\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\\n  "}</p>{"\\n  "}<ul>{"\\n    "}<li>{"In fermentum leo eu lectus mollis, quis dictum mi aliquet."}</li>{"\\n    "}<li>{"Morbi eu nulla lobortis, lobortis est in, fringilla felis."}</li>{"\\n    "}<li>{"Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."}</li>{"\\n    "}<li>{"Ut non enim metus."}</li>{"\\n  "}</ul>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Medium content',
  parameters: {
    official: { id: 'elements-content/medium-size-content/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content size={"medium"}>{"\\n  "}<h1>{"Hello World"}</h1>{"\\n  "}<p>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\\n    erat vel, interdum mattis neque.\\n  "}</p>{"\\n  "}<h2>{"Second level"}</h2>{"\\n  "}<p>{"\\n    Curabitur accumsan turpis pharetra "}<strong>{"augue tincidunt"}</strong>{" blandit.\\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\\n  "}</p>{"\\n  "}<ul>{"\\n    "}<li>{"In fermentum leo eu lectus mollis, quis dictum mi aliquet."}</li>{"\\n    "}<li>{"Morbi eu nulla lobortis, lobortis est in, fringilla felis."}</li>{"\\n    "}<li>{"Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."}</li>{"\\n    "}<li>{"Ut non enim metus."}</li>{"\\n  "}</ul>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Large content',
  parameters: {
    official: { id: 'elements-content/large-size-content/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Content size={"large"}>{"\\n  "}<h1>{"Hello World"}</h1>{"\\n  "}<p>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,\\n    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\\n    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel\\n    erat vel, interdum mattis neque.\\n  "}</p>{"\\n  "}<h2>{"Second level"}</h2>{"\\n  "}<p>{"\\n    Curabitur accumsan turpis pharetra "}<strong>{"augue tincidunt"}</strong>{" blandit.\\n    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin\\n    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\\n    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.\\n  "}</p>{"\\n  "}<ul>{"\\n    "}<li>{"In fermentum leo eu lectus mollis, quis dictum mi aliquet."}</li>{"\\n    "}<li>{"Morbi eu nulla lobortis, lobortis est in, fringilla felis."}</li>{"\\n    "}<li>{"Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."}</li>{"\\n    "}<li>{"Ut non enim metus."}</li>{"\\n  "}</ul>{"\\n"}</ui.Content>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

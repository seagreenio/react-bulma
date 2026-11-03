import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

const meta = {
  ...officialPage(
    {
      id: 'components-message',
      title: 'Message',
      url: 'https://bulma.io/documentation/components/message/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-message',
  title: 'CSS Library/Components/Message',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-message" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Message'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Colored '}
          <strong data-official-prose="">{'message'}</strong>
          {' blocks, to emphasize part of your page'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n       \n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The Bulma '}
            <code data-official-prose="">{'message'}</code>
            {' is a multi-part component:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'the '}
              <code data-official-prose="">{'message'}</code>
              {' container'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the optional '}
              <code data-official-prose="">{'message-header'}</code>
              {' that can hold a title and a\n      '}
              <code data-official-prose="">{'delete'}</code>
              {' element\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'the '}
              <code data-official-prose="">{'message-body'}</code>
              {' for the longer body of the message'}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
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
            {'\n    The message component is available in all the\n    '}
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
        <div data-official-example="components-message/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/colors/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/colors/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/colors/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/colors/005">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/colors/006">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/colors/007">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n  '}
        <h3
          data-official-prose=""
          id={'message-body-only'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Message body only\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#message-body-only'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can remove the '}
            <code data-official-prose="">{'message-header'}</code>
            {" if you don't need it, which\n    will add a left border to the "}
            <code data-official-prose="">{'message-body'}</code>
            {':\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/001">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/002">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/003">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/004">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/005">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/006">
          <Canvas of={Example014} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/007">
          <Canvas of={Example015} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n   '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/message-body-only/008">
          <Canvas of={Example016} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n  '}
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
            {'\n    You can add one of '}
            <strong data-official-prose="">{'3 size modifiers'}</strong>
            {' to the\n    '}
            <code data-official-prose="">{'message'}</code>
            {' component:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/sizes/001">
          <Canvas of={Example017} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/sizes/002">
          <Canvas of={Example018} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/sizes/003">
          <Canvas of={Example019} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-message/sizes/004">
          <Canvas of={Example020} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n \n\n\n\n\n\n\n\n\n'}
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
                        {'$message-border-l-delta'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-border-l-delta)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'-20%'}
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
                        {'$message-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-radius)'}
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
                        {'$message-header-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-semibold)'}
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
                        {'$message-header-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1em 1.25em'}
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
                        {'$message-header-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-radius)'}
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
                        {'$message-body-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0 0 4px'}
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
                        {'$message-body-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-color)'}
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
                        {'$message-body-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-padding)'}
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
                        {'$message-body-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-small)'}
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
                        {'$message-body-pre-code-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-pre-code-background-color)'}
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
                        {'$message-header-body-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-body-border-width)'}
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
              {'\n        \n      \n        \n      \n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n'}
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
                        {'$message-border-l-delta'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-border-l-delta)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'-20%'}
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
                        {'$message-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-radius)'}
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
                        {'$message-header-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-semibold)'}
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
                        {'$message-header-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1em 1.25em'}
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
                        {'$message-header-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-radius)'}
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
                        {'$message-body-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0 0 4px'}
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
                        {'$message-body-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-color)'}
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
                        {'$message-body-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-padding)'}
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
                        {'$message-body-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-small)'}
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
                        {'$message-body-pre-code-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-body-pre-code-background-color)'}
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
                        {'$message-header-body-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-message-header-body-border-width)'}
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
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Hello World'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message color={'dark'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Dark'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message color={'link'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Link'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message color={'primary'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Primary'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message color={'info'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Info'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message color={'success'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Success'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message color={'warning'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Warning'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message color={'danger'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Danger'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur. Aenean ac\n    '}
            <em>{'eleifend lacus'}</em>
            {
              ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message color={'dark'}>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message color={'link'}>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message color={'primary'}>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message color={'info'}>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example014Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message color={'success'}>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example015Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message color={'warning'}>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example016Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Message color={'danger'}>
        {'\n  '}
        <ui.MessageBody>
          {
            '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
          }
          <strong>{'Pellentesque risus mi'}</strong>
          {
            ', tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum '
          }
          <a>{'felis venenatis'}</a>
          {' efficitur. Aenean ac\n    '}
          <em>{'eleifend lacus'}</em>
          {
            ', in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
          }
        </ui.MessageBody>
        {'\n'}
      </ui.Message>
      {'\n\n        \n      '}
    </>
  )
}

function Example017Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message size={'small'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Small message'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              size={'small'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla.Nullam gravida purus diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur.\n    Aenean ac '}
            <em>{'eleifend lacus'}</em>
            {', in mollis lectus.\n  '}
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example018Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Normal message'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla.Nullam gravida purus diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur.\n    Aenean ac '}
            <em>{'eleifend lacus'}</em>
            {', in mollis lectus.\n  '}
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example019Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message size={'medium'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Medium message'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              size={'medium'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla.Nullam gravida purus diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur.\n    Aenean ac '}
            <em>{'eleifend lacus'}</em>
            {', in mollis lectus.\n  '}
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

function Example020Demo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {'\n        \n          \n'}
      {visible1 && (
        <ui.Message size={'large'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    '}
            <p>{'Large message'}</p>
            {'\n    '}
            <ui.Delete
              aria-label={'delete'}
              size={'large'}
              onClick={() => setVisible1(false)}
            />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    '
            }
            <strong>{'Pellentesque risus mi'}</strong>
            {
              ', tempus quis placerat ut, porta nec\n    nulla.Nullam gravida purus diam, et dictum '
            }
            <a>{'felis venenatis'}</a>
            {' efficitur.\n    Aenean ac '}
            <em>{'eleifend lacus'}</em>
            {', in mollis lectus.\n  '}
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Default message',
  parameters: {
    official: { id: 'components-message/basic/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Hello World"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Dark message',
  parameters: {
    official: { id: 'components-message/colors/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message color={"dark"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Dark"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Link message',
  parameters: {
    official: { id: 'components-message/colors/002' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message color={"link"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Link"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Primary message',
  parameters: {
    official: { id: 'components-message/colors/003' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message color={"primary"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Primary"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Info message',
  parameters: {
    official: { id: 'components-message/colors/004' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message color={"info"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Info"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Success message',
  parameters: {
    official: { id: 'components-message/colors/005' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message color={"success"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Success"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Warning message',
  parameters: {
    official: { id: 'components-message/colors/006' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message color={"warning"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Warning"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Danger message',
  parameters: {
    official: { id: 'components-message/colors/007' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message color={"danger"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Danger"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Dark body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message color={"dark"}>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Link body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message color={"link"}>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Primary body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message color={"primary"}>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Info body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/005' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example013Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message color={"info"}>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Success body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/006' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example014Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message color={"success"}>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Warning body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/007' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example015Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message color={"warning"}>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Danger body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/008' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example016Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Message color={"danger"}>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\\n    diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur. Aenean ac\\n    "}<em>{"eleifend lacus"}</em>{", in mollis lectus. Donec sodales, arcu et\\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Small message',
  parameters: {
    official: { id: 'components-message/sizes/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example017Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message size={"small"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Small message"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} size={"small"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla.Nullam gravida purus diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n    Aenean ac "}<em>{"eleifend lacus"}</em>{", in mollis lectus.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Normal message',
  parameters: {
    official: { id: 'components-message/sizes/002' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example018Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Normal message"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla.Nullam gravida purus diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n    Aenean ac "}<em>{"eleifend lacus"}</em>{", in mollis lectus.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'Medium message',
  parameters: {
    official: { id: 'components-message/sizes/003' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example019Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message size={"medium"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Medium message"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} size={"medium"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla.Nullam gravida purus diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n    Aenean ac "}<em>{"eleifend lacus"}</em>{", in mollis lectus.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'Large message',
  parameters: {
    official: { id: 'components-message/sizes/004' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example020Demo() {\n  const [visible1, setVisible1] = useState(true);\n  return (<>{"\\n        \\n          \\n"}{visible1 && (<ui.Message size={"large"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Large message"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} size={"large"} onClick={() => setVisible1(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n    "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec\\n    nulla.Nullam gravida purus diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n    Aenean ac "}<em>{"eleifend lacus"}</em>{", in mollis lectus.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

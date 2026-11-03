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
      id: 'form-file',
      title: 'File upload',
      url: 'https://bulma.io/documentation/form/file/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-file',
  title: 'CSS Library/Form/File',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-file" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'File upload'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A custom '}
          <strong data-official-prose="">{'file upload'}</strong>
          {' input, without JavaScript'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'file'}</code>
            {' element is a simple '}
            <strong data-official-prose="">{'interactive label'}</strong>
            {' that wraps an\n    '}
            <code data-official-prose="">{'<input type="file">'}</code>
            {'. It comprises several sub-elements:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'file'}</code>
              {' the main '}
              <strong data-official-prose="">{'container'}</strong>
              {'\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'file-label'}</code>
                  {' the actual '}
                  <strong data-official-prose="">{'interactive'}</strong>
                  {' and clickable part of the element\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      <code data-official-prose="">{'file-input'}</code>
                      {' the '}
                      <strong data-official-prose="">{'native'}</strong>
                      {' file input, hidden for styling purposes'}
                    </li>
                    {'\n            '}
                    <li data-official-prose="">
                      {'\n              '}
                      <code data-official-prose="">{'file-cta'}</code>
                      {' the upload '}
                      <strong data-official-prose="">{'call-to-action'}</strong>
                      {'\n              '}
                      <ul data-official-prose="">
                        {'\n                '}
                        <li data-official-prose="">
                          <code data-official-prose="">{'file-icon'}</code>
                          {' an optional '}
                          <strong data-official-prose="">{'upload'}</strong>
                          {' icon'}
                        </li>
                        {'\n                '}
                        <li data-official-prose="">
                          <code data-official-prose="">{'file-label'}</code>
                          {' the "Choose a file…" text'}
                        </li>
                        {'\n              '}
                      </ul>
                      {'\n            '}
                    </li>
                    {'\n            '}
                    <li data-official-prose="">
                      <code data-official-prose="">{'file-name'}</code>
                      {' a container for the '}
                      <strong data-official-prose="">{'chosen file'}</strong>
                      {' name'}
                    </li>
                    {'\n          '}
                  </ul>
                  {'\n        '}
                </li>
                {'\n      '}
              </ul>
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
        <div data-official-example="form-file/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
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
        <div data-official-example="form-file/modifiers/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-example="form-file/modifiers/002">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-example="form-file/modifiers/003">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-example="form-file/modifiers/004">
          <Canvas of={Example005} />
        </div>
        {'\n\n'}
        <div data-official-example="form-file/modifiers/005">
          <Canvas of={Example006} />
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
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    You can style the file element by appending one of the\n    '
            }
            <strong data-official-prose="">{'0 color modifiers'}</strong>
            {':\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">{'\n    \n  '}</ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/colors/001">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/colors/002">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/colors/003">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/colors/004">
          <Canvas of={Example010} />
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
            {'You can append one of the '}
            <strong data-official-prose="">{'4 available sizes'}</strong>
            {':'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-small'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-normal'}</code>
              {' (default)'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-medium'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-large'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/001">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/002">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/003">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/004">
          <Canvas of={Example014} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/005">
          <Canvas of={Example015} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/006">
          <Canvas of={Example016} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/007">
          <Canvas of={Example017} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/008">
          <Canvas of={Example018} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/009">
          <Canvas of={Example019} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/010">
          <Canvas of={Example020} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/011">
          <Canvas of={Example021} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/012">
          <Canvas of={Example022} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/013">
          <Canvas of={Example023} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/014">
          <Canvas of={Example024} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/015">
          <Canvas of={Example025} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/sizes/016">
          <Canvas of={Example026} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'alignment'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Alignment\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#alignment'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can '}
            <strong data-official-prose="">{'align'}</strong>
            {' the file input:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'to the '}
              <strong data-official-prose="">{'center'}</strong>
              {' with the '}
              <code data-official-prose="">{'is-centered'}</code>
              {' modifier'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'to the '}
              <strong data-official-prose="">{'right'}</strong>
              {' with the '}
              <code data-official-prose="">{'is-right'}</code>
              {' modifier'}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/alignment/001">
          <Canvas of={Example027} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/alignment/002">
          <Canvas of={Example028} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'javascript'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    JavaScript\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#javascript'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    A file upload input requires JavaScript to '}
            <strong data-official-prose="">{'retrieve'}</strong>
            {' the '}
            <strong data-official-prose="">{'selected file name'}</strong>
            {'. Here\n    is an example of how this could be done:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-file/javascript/001">
          <Canvas of={Example029} />
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
                        {'$file-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-file-radius)'}
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
                        {'$file-cta-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-)'}
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
                        {'$file-cta-hover-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-)'}
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
                        {'$file-cta-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-)'}
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
                        {'$file-name-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-file-name-border-color)'}
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
                        {'$file-name-border-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-file-name-border-style)'}
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
                        {'$file-name-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-file-name-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1px 1px 1px 0'}
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
                        {'$file-name-max-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-file-name-max-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'16em'}
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
      <ui.File
        name={'resume'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Choose a file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'\n        With the '}
              <code>{'has-name'}</code>
              {' modifier combined with the '}
              <code>{'file-name'}</code>
              {' element, you can add a\n        '}
              <strong>{'placeholder'}</strong>
              {' for the selected file name.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.File
              name={'resume'}
              icon={
                <>
                  {'\n        '}
                  <i className={'fas fa-upload'} />
                  {'\n      '}
                </>
              }
              filename={filename1}
              onChange={(event) =>
                setFilename1(
                  event.currentTarget.files?.[0]?.name ??
                    ' Screen Shot 2017-07-29 at 15.54.25.png ',
                )
              }
            >
              {' Choose a file… '}
            </ui.File>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="file has-name">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
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
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'You can move the CTA to the '}
              <strong>{'right side'}</strong>
              {' with the '}
              <code>{'is-right'}</code>
              {' modifier.'}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.File
              name={'resume'}
              alignment={'right'}
              icon={
                <>
                  {'\n        '}
                  <i className={'fas fa-upload'} />
                  {'\n      '}
                </>
              }
              filename={filename1}
              onChange={(event) =>
                setFilename1(
                  event.currentTarget.files?.[0]?.name ??
                    ' Screen Shot 2017-07-29 at 15.54.25.png ',
                )
              }
            >
              {' Choose a file… '}
            </ui.File>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="file has-name is-right">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
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

function Example004Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'\n        You can also '}
              <strong>{'expand'}</strong>
              {' the name to fill up the space with the '}
              <code>{'is-fullwidth'}</code>
              {' modifier.\n      '}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.File
              name={'resume'}
              fullWidth
              icon={
                <>
                  {'\n        '}
                  <i className={'fas fa-upload'} />
                  {'\n      '}
                </>
              }
              filename={filename1}
              onChange={(event) =>
                setFilename1(
                  event.currentTarget.files?.[0]?.name ??
                    ' Screen Shot 2017-07-29 at 15.54.25.png ',
                )
              }
            >
              {' Choose a file… '}
            </ui.File>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="file has-name is-fullwidth">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
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

function Example005Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'You can have a '}
              <strong>{'boxed block'}</strong>
              {' with the '}
              <code>{'is-boxed'}</code>
              {' modifier.'}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.File
              name={'resume'}
              boxed
              icon={
                <>
                  {'\n        '}
                  <i className={'fas fa-upload'} />
                  {'\n      '}
                </>
              }
            >
              {' Choose a file… '}
            </ui.File>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="file is-boxed">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n  </label>\n</div>\n'
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

function Example006Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={6}>
          {'\n    '}
          <ui.Content>
            {'\n      '}
            <p>
              {'You can '}
              <strong>{'combine'}</strong> <code>{'has-name'}</code>
              {' and '}
              <code>{'is-boxed'}</code>
              {'.'}
            </p>
            {'\n    '}
          </ui.Content>
          {'\n    '}
          <div className={'bd-example'}>
            {'\n'}
            <ui.File
              name={'resume'}
              boxed
              icon={
                <>
                  {'\n        '}
                  <i className={'fas fa-upload'} />
                  {'\n      '}
                </>
              }
              filename={filename1}
              onChange={(event) =>
                setFilename1(
                  event.currentTarget.files?.[0]?.name ??
                    ' Screen Shot 2017-07-29 at 15.54.25.png ',
                )
              }
            >
              {' Choose a file… '}
            </ui.File>
            {'\n'}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column width={6} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="file has-name is-boxed">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
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

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        color={'primary'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Primary file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        color={'info'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Info file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        color={'warning'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-cloud-upload-alt'} />
            {'\n      '}
          </>
        }
      >
        {' Warning file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        color={'danger'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-cloud-upload-alt'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Danger file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'small'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Small file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'normal'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Normal file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'medium'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Medium file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example014Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'large'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Large file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example015Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'small'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Small file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example016Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'normal'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Normal file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example017Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'medium'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Medium file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example018Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'large'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Large file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example019Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'small'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Small file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example020Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'normal'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Normal file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example021Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'medium'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Medium file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example022Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'large'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
      >
        {' Large file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example023Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'small'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Small file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example024Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'normal'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Normal file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example025Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'medium'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Medium file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example026Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        size={'large'}
        boxed
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Large file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example027Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        alignment={'centered'}
        boxed
        color={'success'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Centered file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example028Demo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        alignment={'right'}
        color={'info'}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        {' Right file… '}
      </ui.File>
      {'\n\n        \n      '}
    </>
  )
}

function Example029Demo() {
  const [filename1, setFilename1] = useState(' No file uploaded ')
  return (
    <>
      {'\n        \n          \n'}
      <ui.File
        name={'resume'}
        wrapperProps={{ id: 'file-js-example' }}
        icon={
          <>
            {'\n        '}
            <i className={'fas fa-upload'} />
            {'\n      '}
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ?? ' No file uploaded ',
          )
        }
      >
        {' Choose a file… '}
      </ui.File>
      {'\n\n'}
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'File upload 01',
  parameters: {
    official: { id: 'form-file/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Choose a file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'modifiers 01',
  parameters: {
    official: { id: 'form-file/modifiers/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={6}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        With the "}<code>{"has-name"}</code>{" modifier combined with the "}<code>{"file-name"}</code>{" element, you can add a\\n        "}<strong>{"placeholder"}</strong>{" for the selected file name.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.File name={"resume"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Choose a file… "}</ui.File>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"file has-name\\">\\n  <label class=\\"file-label\\">\\n    <input class=\\"file-input\\" type=\\"file\\" name=\\"resume\\" />\\n    <span class=\\"file-cta\\">\\n      <span class=\\"file-icon\\">\\n        <i class=\\"fas fa-upload\\"></i>\\n      </span>\\n      <span class=\\"file-label\\"> Choose a file… </span>\\n    </span>\\n    <span class=\\"file-name\\"> Screen Shot 2017-07-29 at 15.54.25.png </span>\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'modifiers 02',
  parameters: {
    official: { id: 'form-file/modifiers/002' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={6}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"You can move the CTA to the "}<strong>{"right side"}</strong>{" with the "}<code>{"is-right"}</code>{" modifier."}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.File name={"resume"} alignment={"right"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Choose a file… "}</ui.File>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"file has-name is-right\\">\\n  <label class=\\"file-label\\">\\n    <input class=\\"file-input\\" type=\\"file\\" name=\\"resume\\" />\\n    <span class=\\"file-cta\\">\\n      <span class=\\"file-icon\\">\\n        <i class=\\"fas fa-upload\\"></i>\\n      </span>\\n      <span class=\\"file-label\\"> Choose a file… </span>\\n    </span>\\n    <span class=\\"file-name\\"> Screen Shot 2017-07-29 at 15.54.25.png </span>\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'modifiers 03',
  parameters: {
    official: { id: 'form-file/modifiers/003' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={6}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"\\n        You can also "}<strong>{"expand"}</strong>{" the name to fill up the space with the "}<code>{"is-fullwidth"}</code>{" modifier.\\n      "}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.File name={"resume"} fullWidth icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Choose a file… "}</ui.File>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"file has-name is-fullwidth\\">\\n  <label class=\\"file-label\\">\\n    <input class=\\"file-input\\" type=\\"file\\" name=\\"resume\\" />\\n    <span class=\\"file-cta\\">\\n      <span class=\\"file-icon\\">\\n        <i class=\\"fas fa-upload\\"></i>\\n      </span>\\n      <span class=\\"file-label\\"> Choose a file… </span>\\n    </span>\\n    <span class=\\"file-name\\"> Screen Shot 2017-07-29 at 15.54.25.png </span>\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'modifiers 04',
  parameters: {
    official: { id: 'form-file/modifiers/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={6}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"You can have a "}<strong>{"boxed block"}</strong>{" with the "}<code>{"is-boxed"}</code>{" modifier."}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.File name={"resume"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Choose a file… "}</ui.File>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"file is-boxed\\">\\n  <label class=\\"file-label\\">\\n    <input class=\\"file-input\\" type=\\"file\\" name=\\"resume\\" />\\n    <span class=\\"file-cta\\">\\n      <span class=\\"file-icon\\">\\n        <i class=\\"fas fa-upload\\"></i>\\n      </span>\\n      <span class=\\"file-label\\"> Choose a file… </span>\\n    </span>\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'modifiers 05',
  parameters: {
    official: { id: 'form-file/modifiers/005' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={6}>{"\\n    "}<ui.Content>{"\\n      "}<p>{"You can "}<strong>{"combine"}</strong>{" "}<code>{"has-name"}</code>{" and "}<code>{"is-boxed"}</code>{"."}</p>{"\\n    "}</ui.Content>{"\\n    "}<div className={"bd-example"}>{"\\n"}<ui.File name={"resume"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Choose a file… "}</ui.File>{"\\n"}</div>{"\\n  "}</ui.Column>{"\\n  "}<ui.Column width={6} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"file has-name is-boxed\\">\\n  <label class=\\"file-label\\">\\n    <input class=\\"file-input\\" type=\\"file\\" name=\\"resume\\" />\\n    <span class=\\"file-cta\\">\\n      <span class=\\"file-icon\\">\\n        <i class=\\"fas fa-upload\\"></i>\\n      </span>\\n      <span class=\\"file-label\\"> Choose a file… </span>\\n    </span>\\n    <span class=\\"file-name\\"> Screen Shot 2017-07-29 at 15.54.25.png </span>\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'colors 01',
  parameters: {
    official: { id: 'form-file/colors/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} color={"primary"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Primary file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'colors 02',
  parameters: {
    official: { id: 'form-file/colors/002' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} color={"info"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Info file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'colors 03',
  parameters: {
    official: { id: 'form-file/colors/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} color={"warning"} boxed icon={<>{"\\n        "}<i className={"fas fa-cloud-upload-alt"} />{"\\n      "}</>}>{" Warning file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'colors 04',
  parameters: {
    official: { id: 'form-file/colors/004' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} color={"danger"} boxed icon={<>{"\\n        "}<i className={"fas fa-cloud-upload-alt"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Danger file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'sizes 01',
  parameters: {
    official: { id: 'form-file/sizes/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"small"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Small file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'sizes 02',
  parameters: {
    official: { id: 'form-file/sizes/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"normal"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Normal file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'sizes 03',
  parameters: {
    official: { id: 'form-file/sizes/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example013Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"medium"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Medium file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'sizes 04',
  parameters: {
    official: { id: 'form-file/sizes/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example014Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"large"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Large file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'sizes 05',
  parameters: {
    official: { id: 'form-file/sizes/005' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example015Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"small"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Small file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'sizes 06',
  parameters: {
    official: { id: 'form-file/sizes/006' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example016Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"normal"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Normal file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'sizes 07',
  parameters: {
    official: { id: 'form-file/sizes/007' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example017Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"medium"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Medium file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'sizes 08',
  parameters: {
    official: { id: 'form-file/sizes/008' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example018Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"large"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Large file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'sizes 09',
  parameters: {
    official: { id: 'form-file/sizes/009' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example019Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"small"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Small file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'sizes 10',
  parameters: {
    official: { id: 'form-file/sizes/010' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example020Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"normal"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Normal file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

export const Example021 = {
  name: 'sizes 11',
  parameters: {
    official: { id: 'form-file/sizes/011' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example021Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"medium"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Medium file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example021Demo,
} satisfies StoryObj

export const Example022 = {
  name: 'sizes 12',
  parameters: {
    official: { id: 'form-file/sizes/012' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example022Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"large"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>}>{" Large file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example022Demo,
} satisfies StoryObj

export const Example023 = {
  name: 'sizes 13',
  parameters: {
    official: { id: 'form-file/sizes/013' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example023Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"small"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Small file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example023Demo,
} satisfies StoryObj

export const Example024 = {
  name: 'sizes 14',
  parameters: {
    official: { id: 'form-file/sizes/014' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example024Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"normal"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Normal file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example024Demo,
} satisfies StoryObj

export const Example025 = {
  name: 'sizes 15',
  parameters: {
    official: { id: 'form-file/sizes/015' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example025Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"medium"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Medium file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example025Demo,
} satisfies StoryObj

export const Example026 = {
  name: 'sizes 16',
  parameters: {
    official: { id: 'form-file/sizes/016' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example026Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} size={"large"} boxed icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Large file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example026Demo,
} satisfies StoryObj

export const Example027 = {
  name: 'alignment 01',
  parameters: {
    official: { id: 'form-file/alignment/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example027Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} alignment={"centered"} boxed color={"success"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Centered file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example027Demo,
} satisfies StoryObj

export const Example028 = {
  name: 'alignment 02',
  parameters: {
    official: { id: 'form-file/alignment/002' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example028Demo() {\n  const [filename1, setFilename1] = useState(" Screen Shot 2017-07-29 at 15.54.25.png ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} alignment={"right"} color={"info"} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " Screen Shot 2017-07-29 at 15.54.25.png ")}>{" Right file… "}</ui.File>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example028Demo,
} satisfies StoryObj

export const Example029 = {
  name: 'javascript 01',
  parameters: {
    official: { id: 'form-file/javascript/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example029Demo() {\n  const [filename1, setFilename1] = useState(" No file uploaded ");\n  return (<>{"\\n        \\n          \\n"}<ui.File name={"resume"} wrapperProps={{ id: "file-js-example" }} icon={<>{"\\n        "}<i className={"fas fa-upload"} />{"\\n      "}</>} filename={filename1} onChange={(event) => setFilename1(event.currentTarget.files?.[0]?.name ?? " No file uploaded ")}>{" Choose a file… "}</ui.File>{"\\n\\n"}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example029Demo,
} satisfies StoryObj

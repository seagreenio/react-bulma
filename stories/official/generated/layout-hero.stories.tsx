import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-hero',
      title: 'Hero',
      url: 'https://bulma.io/documentation/layout/hero/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-hero',
  title: 'CSS Library/Layout/Hero',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-hero" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Hero'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'An imposing '}
          <strong data-official-prose="">{'hero banner'}</strong>
          {' to showcase something'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The hero component allows you to add a '}
            <strong data-official-prose="">{'full width banner'}</strong>
            {
              ' to your webpage, which can optionally\n    cover the full height of the page as well.\n  '
            }
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'The basic requirement of this component are:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'hero'}</code>
              {' as the main container\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-body'}</code>
                  {' as a direct child, in which you can put all your content'}
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    For the '}
            <a data-official-prose="" href={'#fullheight-hero'}>
              {'fullheight hero'}
            </a>
            {' to work, you will also need a '}
            <code data-official-prose="">{'hero-head'}</code>
            {' and a\n    '}
            <code data-official-prose="">{'hero-foot'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/basic/001">
          <Canvas of={Example001} />
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
          {'\n  As with buttons, you can choose one of the\n  '}
          <strong data-official-prose="">{'8 different colors'}</strong>
          {':\n'}
        </div>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/colors/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/colors/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/colors/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/colors/005">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/colors/006">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n'}
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
            {
              '\n    You can have even more imposing banners by using one of\n    '
            }
            <strong data-official-prose="">{'5 different sizes'}</strong>
            {':\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-small'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-medium'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-large'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-halfheight'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-fullheight'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/sizes/001">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/sizes/002">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/sizes/003">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" id={'halfheight-hero'}></div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/sizes/004">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" id={'fullheight-hero'}></div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/sizes/005">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'fullheight-with-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Fullheight with navbar\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fullheight-with-navbar'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you are using a\n    '}
            <a
              data-official-prose=""
              href={
                'https://bulma.io/documentation/components/navbar/#fixed-navbar'
              }
            >
              {'fixed navbar'}
            </a>
            {', you can use the\n    '}
            <code data-official-prose="">{'is-fullheight-with-navbar'}</code>
            {
              ' modifier on the hero for it to occupy the viewport height minus the navbar\n    height.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/fullheight-with-navbar/001">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'fullheight-hero-in-3-parts'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Fullheight hero in 3 parts\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fullheight-hero-in-3-parts'}
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
              '\n    To obtain a hero that will cover the whole height of the viewport, you can split it in\n    '
            }
            <strong data-official-prose="">{'3 vertical parts'}</strong>
            {':\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'hero'}</code>
              {'\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-head'}</code>
                  {' (always at the top)'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-body'}</code>
                  {' (always vertically centered)'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-foot'}</code>
                  {' (always at the bottom)'}
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/fullheight-hero-in-3-parts/001">
          <Canvas of={Example014} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/fullheight-hero-in-3-parts/002">
          <Canvas of={Example015} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-hero/fullheight-hero-in-3-parts/003">
          <Canvas of={Example016} />
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
                        {'$hero-body-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-body-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'3rem 1.5rem'}
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
                        {'$hero-body-padding-tablet'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-body-padding-tablet)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'3rem 3rem'}
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
                        {'$hero-body-padding-small'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-body-padding-small)'}
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
                        {'$hero-body-padding-medium'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-body-padding-medium)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'9rem 4.5rem'}
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
                        {'$hero-body-padding-large'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-body-padding-large)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'18rem 6rem'}
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
                        {'$hero-gradient-h-offset'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-gradient-h-offset)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'5deg'}
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
                        {'$hero-gradient-s-offset'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-gradient-s-offset)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'10%'}
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
                        {'$hero-gradient-l-offset'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-hero-gradient-l-offset:)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'5%'}
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
      <ui.Hero>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Hero title'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Hero subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'link'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Link hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Link subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'primary'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Primary hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Primary subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'info'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Info hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Info subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'success'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Success hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Success subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'warning'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Warning hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Warning subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'danger'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Danger hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Danger subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero size={'small'} color={'primary'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Small hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Small subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero size={'medium'} color={'link'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Medium hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Medium subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero size={'large'} color={'info'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Large hero'}</ui.Title>
          {'\n    '}
          <ui.Subtitle as={'p'}>{'Large subtitle'}</ui.Subtitle>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'success'} height={'half'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <div>
            {'\n      '}
            <ui.Title as={'p'}>{'Half height hero'}</ui.Title>
            {'\n      '}
            <ui.Subtitle as={'p'}>{'Half height subtitle'}</ui.Subtitle>
            {'\n    '}
          </div>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'danger'} height={'full'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <div>
            {'\n      '}
            <ui.Title as={'p'}>{'Fullheight hero'}</ui.Title>
            {'\n      '}
            <ui.Subtitle as={'p'}>{'Fullheight subtitle'}</ui.Subtitle>
            {'\n    '}
          </div>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example013Demo() {
  return (
    <>
      {'\n        \n           '}
      <ui.Navbar>
        {'\n  '}
        <ui.Container>
          {'\n    '}
          <ui.NavbarMenu id={'navMenu'}>
            {'\n      '}
            <ui.NavbarStart>
              {'\n        '}
              <ui.NavbarItem>{'\n          Home\n        '}</ui.NavbarItem>
              {'\n        '}
              <ui.NavbarItem>
                {'\n          Documentation\n        '}
              </ui.NavbarItem>
              {'\n      '}
            </ui.NavbarStart>
            {'\n\n      '}
            <ui.NavbarEnd>
              {'\n        '}
              <ui.NavbarItem as={'div'}>
                {'\n          '}
                <ui.Buttons>
                  {'\n            '}
                  <ui.LinkButton color={'dark'}>{'Github'}</ui.LinkButton>
                  {'\n            '}
                  <ui.LinkButton color={'link'}>{'Download'}</ui.LinkButton>
                  {'\n          '}
                </ui.Buttons>
                {'\n        '}
              </ui.NavbarItem>
              {'\n      '}
            </ui.NavbarEnd>
            {'\n    '}
          </ui.NavbarMenu>
          {'\n  '}
        </ui.Container>
        {'\n'}
      </ui.Navbar>
      {'\n\n'}
      <ui.Hero color={'link'} height={'full-with-navbar'}>
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Title as={'p'}>{'Fullheight hero with navbar'}</ui.Title>
          {'\n  '}
        </ui.HeroBody>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example014Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'primary'} size={'medium'}>
        {'\n  '}
        {'\n  '}
        <ui.HeroHead>
          {'\n    '}
          <ui.Navbar>
            {'\n      '}
            <ui.Container>
              {'\n        '}
              <ui.NavbarBrand>
                {'\n          '}
                <ui.NavbarItem>
                  {'\n            '}
                  <img
                    src={'./official-assets/bulma-type-white.png'}
                    alt={'Logo'}
                  />
                  {'\n          '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarBurger data-target={'navbarMenuHeroA'} as={'span'}>
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n          '}
                </ui.NavbarBurger>
                {'\n        '}
              </ui.NavbarBrand>
              {'\n        '}
              <ui.NavbarMenu id={'navbarMenuHeroA'}>
                {'\n          '}
                <ui.NavbarEnd>
                  {'\n            '}
                  <ui.NavbarItem active>{' Home '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem>{' Examples '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem>{' Documentation '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem as={'span'}>
                    {'\n              '}
                    <ui.LinkButton color={'primary'} inverted>
                      {'\n                '}
                      <ui.Icon>
                        {'\n                  '}
                        <i className={'fab fa-github'} />
                        {'\n                '}
                      </ui.Icon>
                      {'\n                '}
                      <span>{'Download'}</span>
                      {'\n              '}
                    </ui.LinkButton>
                    {'\n            '}
                  </ui.NavbarItem>
                  {'\n          '}
                </ui.NavbarEnd>
                {'\n        '}
              </ui.NavbarMenu>
              {'\n      '}
            </ui.Container>
            {'\n    '}
          </ui.Navbar>
          {'\n  '}
        </ui.HeroHead>
        {'\n\n  '}
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Container helpers={{ textAlign: 'center' }}>
            {'\n      '}
            <ui.Title as={'p'}>{'Title'}</ui.Title>
            {'\n      '}
            <ui.Subtitle as={'p'}>{'Subtitle'}</ui.Subtitle>
            {'\n    '}
          </ui.Container>
          {'\n  '}
        </ui.HeroBody>
        {'\n\n  '}
        {'\n  '}
        <ui.HeroFoot>
          {'\n    '}
          <ui.Tabs defaultValue={'tab-1'}>
            <ui.TabsList as={'nav'} listWrapper={<ui.Container />}>
              <ui.Tab value={'tab-1'} as={'a'}>
                {'Overview'}
              </ui.Tab>
              <ui.Tab value={'tab-2'} as={'a'}>
                {'Modifiers'}
              </ui.Tab>
              <ui.Tab value={'tab-3'} as={'a'}>
                {'Grid'}
              </ui.Tab>
              <ui.Tab value={'tab-4'} as={'a'}>
                {'Elements'}
              </ui.Tab>
              <ui.Tab value={'tab-5'} as={'a'}>
                {'Components'}
              </ui.Tab>
              <ui.Tab value={'tab-6'} as={'a'}>
                {'Layout'}
              </ui.Tab>
            </ui.TabsList>
          </ui.Tabs>
          {'\n  '}
        </ui.HeroFoot>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example015Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'info'} size={'large'}>
        {'\n  '}
        <ui.HeroHead>
          {'\n    '}
          <ui.Navbar>
            {'\n      '}
            <ui.Container>
              {'\n        '}
              <ui.NavbarBrand>
                {'\n          '}
                <ui.NavbarItem>
                  {'\n            '}
                  <img
                    src={'./official-assets/bulma-type-white.png'}
                    alt={'Logo'}
                  />
                  {'\n          '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarBurger data-target={'navbarMenuHeroB'} as={'span'}>
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n          '}
                </ui.NavbarBurger>
                {'\n        '}
              </ui.NavbarBrand>
              {'\n        '}
              <ui.NavbarMenu id={'navbarMenuHeroB'}>
                {'\n          '}
                <ui.NavbarEnd>
                  {'\n            '}
                  <ui.NavbarItem active>{' Home '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem>{' Examples '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem>{' Documentation '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem as={'span'}>
                    {'\n              '}
                    <ui.LinkButton color={'info'} inverted>
                      {'\n                '}
                      <ui.Icon>
                        {'\n                  '}
                        <i className={'fab fa-github'} />
                        {'\n                '}
                      </ui.Icon>
                      {'\n                '}
                      <span>{'Download'}</span>
                      {'\n              '}
                    </ui.LinkButton>
                    {'\n            '}
                  </ui.NavbarItem>
                  {'\n          '}
                </ui.NavbarEnd>
                {'\n        '}
              </ui.NavbarMenu>
              {'\n      '}
            </ui.Container>
            {'\n    '}
          </ui.Navbar>
          {'\n  '}
        </ui.HeroHead>
        {'\n\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Container helpers={{ textAlign: 'center' }}>
            {'\n      '}
            <ui.Title as={'p'}>{'Title'}</ui.Title>
            {'\n      '}
            <ui.Subtitle as={'p'}>{'Subtitle'}</ui.Subtitle>
            {'\n    '}
          </ui.Container>
          {'\n  '}
        </ui.HeroBody>
        {'\n\n  '}
        <ui.HeroFoot>
          {'\n    '}
          <ui.Tabs defaultValue={'tab-1'}>
            <ui.TabsList
              variant={'boxed'}
              fullWidth
              as={'nav'}
              listWrapper={<ui.Container />}
            >
              <ui.Tab value={'tab-1'} as={'a'}>
                {'Overview'}
              </ui.Tab>
              <ui.Tab value={'tab-2'} as={'a'}>
                {'Modifiers'}
              </ui.Tab>
              <ui.Tab value={'tab-3'} as={'a'}>
                {'Grid'}
              </ui.Tab>
              <ui.Tab value={'tab-4'} as={'a'}>
                {'Elements'}
              </ui.Tab>
              <ui.Tab value={'tab-5'} as={'a'}>
                {'Components'}
              </ui.Tab>
              <ui.Tab value={'tab-6'} as={'a'}>
                {'Layout'}
              </ui.Tab>
            </ui.TabsList>
          </ui.Tabs>
          {'\n  '}
        </ui.HeroFoot>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

function Example016Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Hero color={'success'} height={'full'}>
        {'\n  '}
        {'\n  '}
        <ui.HeroHead>
          {'\n    '}
          <ui.Navbar as={'header'}>
            {'\n      '}
            <ui.Container>
              {'\n        '}
              <ui.NavbarBrand>
                {'\n          '}
                <ui.NavbarItem>
                  {'\n            '}
                  <img
                    src={'./official-assets/bulma-type-white.png'}
                    alt={'Logo'}
                  />
                  {'\n          '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarBurger data-target={'navbarMenuHeroC'} as={'span'}>
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n            '}
                  <span />
                  {'\n          '}
                </ui.NavbarBurger>
                {'\n        '}
              </ui.NavbarBrand>
              {'\n        '}
              <ui.NavbarMenu id={'navbarMenuHeroC'}>
                {'\n          '}
                <ui.NavbarEnd>
                  {'\n            '}
                  <ui.NavbarItem active>{' Home '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem>{' Examples '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem>{' Documentation '}</ui.NavbarItem>
                  {'\n            '}
                  <ui.NavbarItem as={'span'}>
                    {'\n              '}
                    <ui.LinkButton color={'success'} inverted>
                      {'\n                '}
                      <ui.Icon>
                        {'\n                  '}
                        <i className={'fab fa-github'} />
                        {'\n                '}
                      </ui.Icon>
                      {'\n                '}
                      <span>{'Download'}</span>
                      {'\n              '}
                    </ui.LinkButton>
                    {'\n            '}
                  </ui.NavbarItem>
                  {'\n          '}
                </ui.NavbarEnd>
                {'\n        '}
              </ui.NavbarMenu>
              {'\n      '}
            </ui.Container>
            {'\n    '}
          </ui.Navbar>
          {'\n  '}
        </ui.HeroHead>
        {'\n\n  '}
        {'\n  '}
        <ui.HeroBody>
          {'\n    '}
          <ui.Container helpers={{ textAlign: 'center' }}>
            {'\n      '}
            <ui.Title as={'p'}>{'Title'}</ui.Title>
            {'\n      '}
            <ui.Subtitle as={'p'}>{'Subtitle'}</ui.Subtitle>
            {'\n    '}
          </ui.Container>
          {'\n  '}
        </ui.HeroBody>
        {'\n\n  '}
        {'\n  '}
        <ui.HeroFoot>
          {'\n    '}
          <ui.Tabs defaultValue={'tab-1'}>
            <ui.TabsList
              variant={'boxed'}
              fullWidth
              as={'nav'}
              listWrapper={<ui.Container />}
            >
              <ui.Tab value={'tab-1'} as={'a'}>
                {'Overview'}
              </ui.Tab>
              <ui.Tab value={'tab-2'} as={'a'}>
                {'Modifiers'}
              </ui.Tab>
              <ui.Tab value={'tab-3'} as={'a'}>
                {'Grid'}
              </ui.Tab>
              <ui.Tab value={'tab-4'} as={'a'}>
                {'Elements'}
              </ui.Tab>
              <ui.Tab value={'tab-5'} as={'a'}>
                {'Components'}
              </ui.Tab>
              <ui.Tab value={'tab-6'} as={'a'}>
                {'Layout'}
              </ui.Tab>
            </ui.TabsList>
          </ui.Tabs>
          {'\n  '}
        </ui.HeroFoot>
        {'\n'}
      </ui.Hero>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Default hero',
  parameters: {
    official: { id: 'layout-hero/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Hero title"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Hero subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Link hero',
  parameters: {
    official: { id: 'layout-hero/colors/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"link"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Link hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Link subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Primary hero',
  parameters: {
    official: { id: 'layout-hero/colors/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"primary"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Primary hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Primary subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Info hero',
  parameters: {
    official: { id: 'layout-hero/colors/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"info"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Info hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Info subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Success hero',
  parameters: {
    official: { id: 'layout-hero/colors/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"success"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Success hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Success subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Warning hero',
  parameters: {
    official: { id: 'layout-hero/colors/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"warning"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Warning hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Warning subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Danger hero',
  parameters: {
    official: { id: 'layout-hero/colors/006' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"danger"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Danger hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Danger subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Small hero',
  parameters: {
    official: { id: 'layout-hero/sizes/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero size={"small"} color={"primary"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Small hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Small subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Medium hero',
  parameters: {
    official: { id: 'layout-hero/sizes/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero size={"medium"} color={"link"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Medium hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Medium subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Large hero',
  parameters: {
    official: { id: 'layout-hero/sizes/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero size={"large"} color={"info"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Large hero"}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"Large subtitle"}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Half-height hero',
  parameters: {
    official: { id: 'layout-hero/sizes/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"success"} height={"half"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<div>{"\\n      "}<ui.Title as={"p"}>{"Half height hero"}</ui.Title>{"\\n      "}<ui.Subtitle as={"p"}>{"Half height subtitle"}</ui.Subtitle>{"\\n    "}</div>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Full-height hero',
  parameters: {
    official: { id: 'layout-hero/sizes/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"danger"} height={"full"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<div>{"\\n      "}<ui.Title as={"p"}>{"Fullheight hero"}</ui.Title>{"\\n      "}<ui.Subtitle as={"p"}>{"Fullheight subtitle"}</ui.Subtitle>{"\\n    "}</div>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Full-height hero below navbar',
  parameters: {
    official: { id: 'layout-hero/fullheight-with-navbar/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example013Demo() {\n  return (<>{"\\n        \\n           "}<ui.Navbar>{"\\n  "}<ui.Container>{"\\n    "}<ui.NavbarMenu id={"navMenu"}>{"\\n      "}<ui.NavbarStart>{"\\n        "}<ui.NavbarItem>{"\\n          Home\\n        "}</ui.NavbarItem>{"\\n        "}<ui.NavbarItem>{"\\n          Documentation\\n        "}</ui.NavbarItem>{"\\n      "}</ui.NavbarStart>{"\\n\\n      "}<ui.NavbarEnd>{"\\n        "}<ui.NavbarItem as={"div"}>{"\\n          "}<ui.Buttons>{"\\n            "}<ui.LinkButton color={"dark"}>{"Github"}</ui.LinkButton>{"\\n            "}<ui.LinkButton color={"link"}>{"Download"}</ui.LinkButton>{"\\n          "}</ui.Buttons>{"\\n        "}</ui.NavbarItem>{"\\n      "}</ui.NavbarEnd>{"\\n    "}</ui.NavbarMenu>{"\\n  "}</ui.Container>{"\\n"}</ui.Navbar>{"\\n\\n"}<ui.Hero color={"link"} height={"full-with-navbar"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"Fullheight hero with navbar"}</ui.Title>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Medium three-part hero',
  parameters: {
    official: { id: 'layout-hero/fullheight-hero-in-3-parts/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example014Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"primary"} size={"medium"}>{"\\n  "}{"\\n  "}<ui.HeroHead>{"\\n    "}<ui.Navbar>{"\\n      "}<ui.Container>{"\\n        "}<ui.NavbarBrand>{"\\n          "}<ui.NavbarItem>{"\\n            "}<img src={"./official-assets/bulma-type-white.png"} alt={"Logo"} />{"\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarBurger data-target={"navbarMenuHeroA"} as={"span"}>{"\\n            "}<span />{"\\n            "}<span />{"\\n            "}<span />{"\\n            "}<span />{"\\n          "}</ui.NavbarBurger>{"\\n        "}</ui.NavbarBrand>{"\\n        "}<ui.NavbarMenu id={"navbarMenuHeroA"}>{"\\n          "}<ui.NavbarEnd>{"\\n            "}<ui.NavbarItem active>{" Home "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem>{" Examples "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem>{" Documentation "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem as={"span"}>{"\\n              "}<ui.LinkButton color={"primary"} inverted>{"\\n                "}<ui.Icon>{"\\n                  "}<i className={"fab fa-github"} />{"\\n                "}</ui.Icon>{"\\n                "}<span>{"Download"}</span>{"\\n              "}</ui.LinkButton>{"\\n            "}</ui.NavbarItem>{"\\n          "}</ui.NavbarEnd>{"\\n        "}</ui.NavbarMenu>{"\\n      "}</ui.Container>{"\\n    "}</ui.Navbar>{"\\n  "}</ui.HeroHead>{"\\n\\n  "}{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Container helpers={{"textAlign":"center"}}>{"\\n      "}<ui.Title as={"p"}>{"Title"}</ui.Title>{"\\n      "}<ui.Subtitle as={"p"}>{"Subtitle"}</ui.Subtitle>{"\\n    "}</ui.Container>{"\\n  "}</ui.HeroBody>{"\\n\\n  "}{"\\n  "}<ui.HeroFoot>{"\\n    "}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList as={"nav"} listWrapper={<ui.Container />}><ui.Tab value={"tab-1"} as={"a"}>{"Overview"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Modifiers"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Grid"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Elements"}</ui.Tab><ui.Tab value={"tab-5"} as={"a"}>{"Components"}</ui.Tab><ui.Tab value={"tab-6"} as={"a"}>{"Layout"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n  "}</ui.HeroFoot>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Large three-part hero',
  parameters: {
    official: { id: 'layout-hero/fullheight-hero-in-3-parts/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example015Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"info"} size={"large"}>{"\\n  "}<ui.HeroHead>{"\\n    "}<ui.Navbar>{"\\n      "}<ui.Container>{"\\n        "}<ui.NavbarBrand>{"\\n          "}<ui.NavbarItem>{"\\n            "}<img src={"./official-assets/bulma-type-white.png"} alt={"Logo"} />{"\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarBurger data-target={"navbarMenuHeroB"} as={"span"}>{"\\n            "}<span />{"\\n            "}<span />{"\\n            "}<span />{"\\n            "}<span />{"\\n          "}</ui.NavbarBurger>{"\\n        "}</ui.NavbarBrand>{"\\n        "}<ui.NavbarMenu id={"navbarMenuHeroB"}>{"\\n          "}<ui.NavbarEnd>{"\\n            "}<ui.NavbarItem active>{" Home "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem>{" Examples "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem>{" Documentation "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem as={"span"}>{"\\n              "}<ui.LinkButton color={"info"} inverted>{"\\n                "}<ui.Icon>{"\\n                  "}<i className={"fab fa-github"} />{"\\n                "}</ui.Icon>{"\\n                "}<span>{"Download"}</span>{"\\n              "}</ui.LinkButton>{"\\n            "}</ui.NavbarItem>{"\\n          "}</ui.NavbarEnd>{"\\n        "}</ui.NavbarMenu>{"\\n      "}</ui.Container>{"\\n    "}</ui.Navbar>{"\\n  "}</ui.HeroHead>{"\\n\\n  "}<ui.HeroBody>{"\\n    "}<ui.Container helpers={{"textAlign":"center"}}>{"\\n      "}<ui.Title as={"p"}>{"Title"}</ui.Title>{"\\n      "}<ui.Subtitle as={"p"}>{"Subtitle"}</ui.Subtitle>{"\\n    "}</ui.Container>{"\\n  "}</ui.HeroBody>{"\\n\\n  "}<ui.HeroFoot>{"\\n    "}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList variant={"boxed"} fullWidth as={"nav"} listWrapper={<ui.Container />}><ui.Tab value={"tab-1"} as={"a"}>{"Overview"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Modifiers"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Grid"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Elements"}</ui.Tab><ui.Tab value={"tab-5"} as={"a"}>{"Components"}</ui.Tab><ui.Tab value={"tab-6"} as={"a"}>{"Layout"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n  "}</ui.HeroFoot>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Full-height three-part hero',
  parameters: {
    official: { id: 'layout-hero/fullheight-hero-in-3-parts/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example016Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Hero color={"success"} height={"full"}>{"\\n  "}{"\\n  "}<ui.HeroHead>{"\\n    "}<ui.Navbar as={"header"}>{"\\n      "}<ui.Container>{"\\n        "}<ui.NavbarBrand>{"\\n          "}<ui.NavbarItem>{"\\n            "}<img src={"./official-assets/bulma-type-white.png"} alt={"Logo"} />{"\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarBurger data-target={"navbarMenuHeroC"} as={"span"}>{"\\n            "}<span />{"\\n            "}<span />{"\\n            "}<span />{"\\n            "}<span />{"\\n          "}</ui.NavbarBurger>{"\\n        "}</ui.NavbarBrand>{"\\n        "}<ui.NavbarMenu id={"navbarMenuHeroC"}>{"\\n          "}<ui.NavbarEnd>{"\\n            "}<ui.NavbarItem active>{" Home "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem>{" Examples "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem>{" Documentation "}</ui.NavbarItem>{"\\n            "}<ui.NavbarItem as={"span"}>{"\\n              "}<ui.LinkButton color={"success"} inverted>{"\\n                "}<ui.Icon>{"\\n                  "}<i className={"fab fa-github"} />{"\\n                "}</ui.Icon>{"\\n                "}<span>{"Download"}</span>{"\\n              "}</ui.LinkButton>{"\\n            "}</ui.NavbarItem>{"\\n          "}</ui.NavbarEnd>{"\\n        "}</ui.NavbarMenu>{"\\n      "}</ui.Container>{"\\n    "}</ui.Navbar>{"\\n  "}</ui.HeroHead>{"\\n\\n  "}{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Container helpers={{"textAlign":"center"}}>{"\\n      "}<ui.Title as={"p"}>{"Title"}</ui.Title>{"\\n      "}<ui.Subtitle as={"p"}>{"Subtitle"}</ui.Subtitle>{"\\n    "}</ui.Container>{"\\n  "}</ui.HeroBody>{"\\n\\n  "}{"\\n  "}<ui.HeroFoot>{"\\n    "}<ui.Tabs defaultValue={"tab-1"}><ui.TabsList variant={"boxed"} fullWidth as={"nav"} listWrapper={<ui.Container />}><ui.Tab value={"tab-1"} as={"a"}>{"Overview"}</ui.Tab><ui.Tab value={"tab-2"} as={"a"}>{"Modifiers"}</ui.Tab><ui.Tab value={"tab-3"} as={"a"}>{"Grid"}</ui.Tab><ui.Tab value={"tab-4"} as={"a"}>{"Elements"}</ui.Tab><ui.Tab value={"tab-5"} as={"a"}>{"Components"}</ui.Tab><ui.Tab value={"tab-6"} as={"a"}>{"Layout"}</ui.Tab></ui.TabsList></ui.Tabs>{"\\n  "}</ui.HeroFoot>{"\\n"}</ui.Hero>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-container',
      title: 'Container',
      url: 'https://bulma.io/documentation/layout/container/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-container',
  title: 'CSS Library/Layout/Container',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-container" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Container'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A simple '}
          <strong data-official-prose="">{'container'}</strong>
          {' to center your content horizontally'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n            \n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'container'}</code>
            {' is a simple utility element that allows you to\n    '}
            <strong data-official-prose="">{'center'}</strong>
            {
              ' content on larger viewports. It can be used in any\n    context, but mostly as a '
            }
            <strong data-official-prose="">{'direct child'}</strong>
            {' of one of the\n    following:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'navbar'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'hero'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'section'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'footer'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'overview'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Overview\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#overview'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'table-container'}>
          {'\n  '}
          <table data-official-prose="" className={'table is-bordered'}>
            {'\n    '}
            <thead data-official-prose="">
              {'\n      '}
              <tr data-official-prose="">{'\n        \n'}</tr>
            </thead>
            <thead data-official-prose="">
              {'\n  '}
              <tr data-official-prose="">
                {'\n    '}
                <th data-official-prose="" className={'bd-is-empty'}></th>
                {'\n         \n    '}
                <th data-official-prose="">
                  {'\n      Below\n      '}
                  <br data-official-prose="" />
                  {'\n      '}
                  <code data-official-prose="">{'1023px'}</code>
                  {'\n    '}
                </th>
                {'\n       \n    '}
                <th data-official-prose="">
                  {'\n      Desktop\n      '}
                  <br data-official-prose="" />
                  {'\n       Between\n      '}
                  <code data-official-prose="">{'1024px'}</code>
                  {' and\n      '}
                  <code data-official-prose="">{'1215px'}</code>
                  {'\n      \n    '}
                </th>
                {'\n       \n    '}
                <th data-official-prose="">
                  {'\n      Widescreen\n      '}
                  <br data-official-prose="" />
                  {'\n       Between\n      '}
                  <code data-official-prose="">{'1216px'}</code>
                  {' and\n      '}
                  <code data-official-prose="">{'1407px'}</code>
                  {'\n      \n    '}
                </th>
                {'\n       \n    '}
                <th data-official-prose="">
                  {'\n      FullHD\n      '}
                  <br data-official-prose="" />
                  {'\n      \n      '}
                  <code data-official-prose="">{'1408px'}</code>
                  {' and above \n    '}
                </th>
                {'\n     \n  '}
              </tr>
              {'\n'}
            </thead>
            {'\n\n      \n      '}
            <tbody data-official-prose="">
              <tr data-official-prose="">
                {'\n        '}
                <th data-official-prose="">{'Class'}</th>
                {'\n        '}
                <th
                  data-official-prose=""
                  colSpan={4}
                  className={'has-text-centered'}
                >
                  <code data-official-prose="">{'max-width'}</code>
                </th>
                {'\n      '}
              </tr>
              {'\n    \n    '}
            </tbody>
            <tbody data-official-prose="">
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <td data-official-prose="">
                  <code data-official-prose="">{'.container'}</code>
                </td>
                {'\n        '}
                <td
                  data-official-prose=""
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'Full width'}
                </td>
                {'\n        '}
                <td data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'960px'}</code>
                  {'\n        '}
                </td>
                {'\n        '}
                <td data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'1152px'}</code>
                  {'\n        '}
                </td>
                {'\n        '}
                <td data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'1344px'}</code>
                  {'\n        '}
                </td>
                {'\n      '}
              </tr>
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <td data-official-prose="">
                  <code data-official-prose="">
                    {'.container.is-widescreen'}
                  </code>
                </td>
                {'\n        '}
                <td
                  data-official-prose=""
                  colSpan={2}
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'\n          Full width\n        '}
                </td>
                {'\n        '}
                <td data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'1152px'}</code>
                  {'\n        '}
                </td>
                {'\n        '}
                <td data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'1344px'}</code>
                  {'\n        '}
                </td>
                {'\n      '}
              </tr>
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <td data-official-prose="">
                  <code data-official-prose="">{'.container.is-fullhd'}</code>
                </td>
                {'\n        '}
                <td
                  data-official-prose=""
                  colSpan={3}
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'\n          Full width\n        '}
                </td>
                {'\n        '}
                <td data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'1344px'}</code>
                  {'\n        '}
                </td>
                {'\n      '}
              </tr>
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <td data-official-prose="">
                  <code data-official-prose="">
                    {'.container.is-max-desktop'}
                  </code>
                </td>
                {'\n        '}
                <td
                  data-official-prose=""
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'Full width'}
                </td>
                {'\n        '}
                <td data-official-prose="" colSpan={3}>
                  {'\n          '}
                  <code data-official-prose="">{'960px'}</code>
                  {'\n        '}
                </td>
                {'\n      '}
              </tr>
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <td data-official-prose="">
                  <code data-official-prose="">
                    {'.container.is-max-widescreen'}
                  </code>
                </td>
                {'\n        '}
                <td
                  data-official-prose=""
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'Full width'}
                </td>
                {'\n        '}
                <td data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'960px'}</code>
                  {'\n        '}
                </td>
                {'\n        '}
                <td data-official-prose="" colSpan={2}>
                  {'\n          '}
                  <code data-official-prose="">{'1152px'}</code>
                  {'\n        '}
                </td>
                {'\n      '}
              </tr>
              {'\n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'default-behavior'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Default behavior\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#default-behavior'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    By default, the '}
            <code data-official-prose="">{'container'}</code>
            {' will only be activated from the\n    '}
            <code data-official-prose="">{'$desktop'}</code>
            {' breakpoint. It will increase its\n    '}
            <code data-official-prose="">{'max-width'}</code>
            {' after reaching the '}
            <code data-official-prose="">{'$widescreen'}</code>
            {' and\n    '}
            <code data-official-prose="">{'$fullhd'}</code>
            {' breakpoints.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {"\n    The container's "}
            <strong data-official-prose="">{'width'}</strong>
            {' for each\n    '}
            <strong data-official-prose="">{'breakpoint'}</strong>
            {' is the result of:\n    '}
            <code data-official-prose="">{'$device - (2 * $gap)'}</code>
            {'. The '}
            <code data-official-prose="">{'$gap'}</code>
            {' variable has a\n    default value of '}
            <code data-official-prose="">{' 32px'}</code>
            {' but can be modified.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'This is how the container will behave:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      on '}
              <code data-official-prose="">{'$desktop'}</code>
              {' it will have a maximum width of\n      '}
              <strong data-official-prose="">{'960px'}</strong>
              {'.\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      on '}
              <code data-official-prose="">{'$widescreen'}</code>
              {' it will have a maximum width of\n      '}
              <strong data-official-prose="">{'1152px'}</strong>
              {'.\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      on '}
              <code data-official-prose="">{'$fullhd'}</code>
              {' it will have a maximum width of\n      '}
              <strong data-official-prose="">{'1344px'}</strong>
              {'.\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The values '}
            <strong data-official-prose="">{'960'}</strong>
            {', '}
            <strong data-official-prose="">{'1152'}</strong>
            {' and\n    '}
            <strong data-official-prose="">{'1344'}</strong>
            {' have been chosen because they are divisible by both\n    '}
            <strong data-official-prose="">{'12'}</strong>
            {' and '}
            <strong data-official-prose="">{'16'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="layout-container/default-behavior/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container">\n  <div class="notification is-primary">\n    This container is <strong>centered</strong> on desktop and larger viewports.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'widescreen-or-fullhd-only'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Widescreen or FullHD only\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#widescreen-or-fullhd-only'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    With the two modifiers '}
            <code data-official-prose="">{'is-widescreen'}</code>
            {' and\n    '}
            <code data-official-prose="">{'is-fullhd'}</code>
            {', you can have a '}
            <em data-official-prose="">{'fullwidth'}</em>
            {' container\n    '}
            <strong data-official-prose="">{'until'}</strong>
            {' those specific breakpoints.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="layout-container/widescreen-or-fullhd-only/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-widescreen">\n  <div class="notification is-primary">\n    This container is <strong>fullwidth</strong> <em>until</em> the\n    <code>$widescreen</code> breakpoint.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="layout-container/widescreen-or-fullhd-only/002">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-fullhd">\n  <div class="notification is-primary">\n    This container is <strong>fullwidth</strong> <em>until</em> the\n    <code>$fullhd</code> breakpoint.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'tablet-desktop-and-widescreen-maximum-widths'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Tablet, Desktop and Widescreen\nmaximum widths\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#tablet-desktop-and-widescreen-maximum-widths'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Sometimes, you might want a '}
            <strong data-official-prose="">{'narrow'}</strong>
            {
              " container on larger\n    viewports. That's why Bulma provides 3 modifier classes:\n  "
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.container.is-max-tablet'}</code>
              {' will behave like a tablet container\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'.container.is-max-desktop'}</code>
              {' will behave like a desktop\n      container\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">
                {'.container.is-max-widescreen'}
              </code>
              {' will behave like a widescreen\n      container\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="layout-container/tablet-desktop-and-widescreen-maximum-widths/001">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-max-tablet">\n  <div class="notification is-primary">\n    This container has a <code>max-width</code> of\n    <code>$tablet - $container-offset</code>.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="layout-container/tablet-desktop-and-widescreen-maximum-widths/002">
          <Canvas of={Example005} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-max-desktop">\n  <div class="notification is-primary">\n    This container has a <code>max-width</code> of\n    <code>$desktop - $container-offset</code> on widescreen and fullhd.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="layout-container/tablet-desktop-and-widescreen-maximum-widths/003">
          <Canvas of={Example006} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-max-widescreen">\n  <div class="notification is-primary">\n    This container has a <code>max-width</code> of\n    <code>$widescreen - $container-offset</code> on fullhd.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'absolute-maximum-width'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Absolute maximum width\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#absolute-maximum-width'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want to change the maximum width of '}
            <strong data-official-prose="">{'all'}</strong>
            {
              ' containers,\n    you can do so by updating the values of the\n    '
            }
            <code data-official-prose="">{'$container-max-width'}</code>
            {' Sass variable.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    By default, the '}
            <code data-official-prose="">{'$fullhd'}</code>
            {' breakpoint value is used to calculate\n    the '}
            <strong data-official-prose="">{'absolute'}</strong>
            {' maximum width of the '}
            <code data-official-prose="">{'container'}</code>
            {'.\n    Simply change it to a smaller value like '}
            <code data-official-prose="">{'$widescreen'}</code>
            {',\n    '}
            <code data-official-prose="">{'$desktop'}</code>
            {', or any value in '}
            <strong data-official-prose="">{'pixels'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'fluid-container'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Fluid container\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fluid-container'}
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
              "\n    If you don't want to have a maximum width but want to keep the 32px margin\n    on the left and right sides, add the\n    "
            }
            <code data-official-prose="">{'is-fluid'}</code>
            {' modifier:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="layout-container/fluid-container/001">
          <Canvas of={Example007} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-fluid">\n  <div class="notification is-primary">\n    This container is <strong>fluid</strong>: it will have a 32px gap on either\n    side, on any viewport size.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n\n\n\n\n\n\n\n\n'}
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
                        {'$container-offset'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'64px'}
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
                        {'$container-max-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1408px'}
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
      <div className={'bd-example is-fullwidth'}>
        {' '}
        <ui.Container>
          {' '}
          <ui.Notification color={'primary'}>
            {' '}
            This container is <strong>centered</strong> on desktop and larger
            viewports.{' '}
          </ui.Notification>{' '}
        </ui.Container>{' '}
      </div>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        {' '}
        <ui.Container width={'widescreen'}>
          {' '}
          <ui.Notification color={'primary'}>
            {' '}
            This container is <strong>fullwidth</strong> <em>until</em> the{' '}
            <code>{'$widescreen'}</code> breakpoint.{' '}
          </ui.Notification>{' '}
        </ui.Container>{' '}
      </div>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        {' '}
        <ui.Container width={'fullhd'}>
          {' '}
          <ui.Notification color={'primary'}>
            {' '}
            This container is <strong>fullwidth</strong> <em>until</em> the{' '}
            <code>{'$fullhd'}</code> breakpoint.{' '}
          </ui.Notification>{' '}
        </ui.Container>{' '}
      </div>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        {' '}
        <ui.Container maxWidth={'tablet'}>
          {' '}
          <ui.Notification color={'primary'}>
            {' '}
            This container has a <code>{'max-width'}</code> of{' '}
            <code>{'$tablet - $container-offset'}</code>.{' '}
          </ui.Notification>{' '}
        </ui.Container>{' '}
      </div>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        {' '}
        <ui.Container maxWidth={'desktop'}>
          {' '}
          <ui.Notification color={'primary'}>
            {' '}
            This container has a <code>{'max-width'}</code> of{' '}
            <code>{'$desktop - $container-offset'}</code> on widescreen and
            fullhd.{' '}
          </ui.Notification>{' '}
        </ui.Container>{' '}
      </div>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        {' '}
        <ui.Container maxWidth={'widescreen'}>
          {' '}
          <ui.Notification color={'primary'}>
            {' '}
            This container has a <code>{'max-width'}</code> of{' '}
            <code>{'$widescreen - $container-offset'}</code> on fullhd.{' '}
          </ui.Notification>{' '}
        </ui.Container>{' '}
      </div>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        {' '}
        <ui.Container width={'fluid'}>
          {' '}
          <ui.Notification color={'primary'}>
            {' '}
            This container is <strong>fluid</strong>: it will have a 32px gap on
            either side, on any viewport size.{' '}
          </ui.Notification>{' '}
        </ui.Container>{' '}
      </div>
    </>
  )
}

export const Example001 = {
  name: 'Centered container',
  parameters: {
    official: { id: 'layout-container/default-behavior/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        {' '}\n        <ui.Container>\n          {' '}\n          <ui.Notification color={'primary'}>\n            {' '}\n            This container is <strong>centered</strong> on desktop and larger\n            viewports.{' '}\n          </ui.Notification>{' '}\n        </ui.Container>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Container from widescreen',
  parameters: {
    official: { id: 'layout-container/widescreen-or-fullhd-only/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        {' '}\n        <ui.Container width={'widescreen'}>\n          {' '}\n          <ui.Notification color={'primary'}>\n            {' '}\n            This container is <strong>fullwidth</strong> <em>until</em> the{' '}\n            <code>{'$widescreen'}</code> breakpoint.{' '}\n          </ui.Notification>{' '}\n        </ui.Container>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Container from full HD',
  parameters: {
    official: { id: 'layout-container/widescreen-or-fullhd-only/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        {' '}\n        <ui.Container width={'fullhd'}>\n          {' '}\n          <ui.Notification color={'primary'}>\n            {' '}\n            This container is <strong>fullwidth</strong> <em>until</em> the{' '}\n            <code>{'$fullhd'}</code> breakpoint.{' '}\n          </ui.Notification>{' '}\n        </ui.Container>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Tablet maximum width',
  parameters: {
    official: {
      id: 'layout-container/tablet-desktop-and-widescreen-maximum-widths/001',
    },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        {' '}\n        <ui.Container maxWidth={'tablet'}>\n          {' '}\n          <ui.Notification color={'primary'}>\n            {' '}\n            This container has a <code>{'max-width'}</code> of{' '}\n            <code>{'$tablet - $container-offset'}</code>.{' '}\n          </ui.Notification>{' '}\n        </ui.Container>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Desktop maximum width',
  parameters: {
    official: {
      id: 'layout-container/tablet-desktop-and-widescreen-maximum-widths/002',
    },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        {' '}\n        <ui.Container maxWidth={'desktop'}>\n          {' '}\n          <ui.Notification color={'primary'}>\n            {' '}\n            This container has a <code>{'max-width'}</code> of{' '}\n            <code>{'$desktop - $container-offset'}</code> on widescreen and\n            fullhd.{' '}\n          </ui.Notification>{' '}\n        </ui.Container>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Widescreen maximum width',
  parameters: {
    official: {
      id: 'layout-container/tablet-desktop-and-widescreen-maximum-widths/003',
    },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example006Demo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        {' '}\n        <ui.Container maxWidth={'widescreen'}>\n          {' '}\n          <ui.Notification color={'primary'}>\n            {' '}\n            This container has a <code>{'max-width'}</code> of{' '}\n            <code>{'$widescreen - $container-offset'}</code> on fullhd.{' '}\n          </ui.Notification>{' '}\n        </ui.Container>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Fluid container',
  parameters: {
    official: { id: 'layout-container/fluid-container/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example007Demo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        {' '}\n        <ui.Container width={'fluid'}>\n          {' '}\n          <ui.Notification color={'primary'}>\n            {' '}\n            This container is <strong>fluid</strong>: it will have a 32px gap on\n            either side, on any viewport size.{' '}\n          </ui.Notification>{' '}\n        </ui.Container>{' '}\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

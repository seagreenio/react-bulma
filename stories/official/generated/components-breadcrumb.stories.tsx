import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from '@storybook/addon-docs/blocks';
import { OfficialDocument } from '../document';
import { createBulma } from '../../../src';
import { officialPage } from '../support';

const ui = createBulma();

const meta = {
  ...officialPage(
    {
      id: 'components-breadcrumb',
      title: 'Breadcrumb',
      url: 'https://bulma.io/documentation/components/breadcrumb/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-breadcrumb',
  title: 'CSS Library/Components/Breadcrumb',
} satisfies Meta;
export default meta;

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-breadcrumb" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Breadcrumb'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A simple '}
          <strong data-official-prose="">{'breadcrumb'}</strong>
          {' component to improve your navigation experience'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n          \n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The Bulma '}
            <strong data-official-prose="">{'breadcrumb'}</strong>
            {' is a simple navigation component that\n    only requires a '}
            <code data-official-prose="">{'breadcrumb'}</code>
            {' container and a\n    '}
            <code data-official-prose="">{'ul'}</code>
            {
              ' list. The dividers are automatically created in the content\n    of the '
            }
            <code data-official-prose="">{'::before'}</code>
            {' pseudo-element of '}
            <code data-official-prose="">{'li'}</code>
            {' tags.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can inform the current page using the '}
            <code data-official-prose="">{'is-active'}</code>
            {' modifier in\n    a '}
            <code data-official-prose="">{'li'}</code>
            {' tag. It will disable the navigation of inner links.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <hr data-official-prose="" />
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/basic/001">
          <Canvas of={Example001} />
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
            {'\n    For alternative alignments, use the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' and\n    '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifiers on the '}
            <code data-official-prose="">{'breadcrumb'}</code>
            {' container.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/alignment/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/alignment/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Icons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#icons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can use any of the\n    '}
            <a
              data-official-prose=""
              href={'https://fontawesome.com/'}
              target={'_blank'}
            >
              {'Font Awesome'}
            </a>
            {'\n    '}
            <strong data-official-prose="">{'icons'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/icons/001">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        <h3
          data-official-prose=""
          id={'alternative-separators'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Alternative separators\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#alternative-separators'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can choose between '}
            <strong data-official-prose="">{'4 additional separators'}</strong>
            {':\n    '}
            <code data-official-prose="">{'has-arrow-separator'}</code>{' '}
            <code data-official-prose="">{'has-bullet-separator'}</code>
            {'\n    '}
            <code data-official-prose="">{'has-dot-separator'}</code>
            {' and '}
            <code data-official-prose="">{'has-succeeds-separator'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/alternative-separators/001">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/alternative-separators/002">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/alternative-separators/003">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/alternative-separators/004">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
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
            {'\n    You can choose between '}
            <strong data-official-prose="">{'3 additional sizes'}</strong>
            {':\n    '}
            <code data-official-prose="">{'is-small'}</code>{' '}
            <code data-official-prose="">{'is-medium'}</code>
            {' and '}
            <code data-official-prose="">{'is-large'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/sizes/001">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/sizes/002">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-breadcrumb/sizes/003">
          <Canvas of={Example011} />
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
                        {'$breadcrumb-item-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-breadcrumb-item-color)'}
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
                        {'$breadcrumb-item-hover-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-breadcrumb-item-hover-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-text-hover)'}
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
                        {'$breadcrumb-item-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-breadcrumb-item-active-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link-text-active)'}
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
                        {'$breadcrumb-item-padding-vertical'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-breadcrumb-item-padding-vertical)'}
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
                        {'$breadcrumb-item-padding-horizontal'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-breadcrumb-item-padding-horizontal)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75em'}
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
                        {'$breadcrumb-item-separator-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-breadcrumb-item-separator-color)'}
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
              {'\n        \n      \n    '}
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
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} alignment={'centered'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} alignment={'right'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>
          {'\n        '}
          <ui.Icon size={'small'}>
            {'\n          '}
            <i aria-hidden={'true'} className={'fas fa-home'} />
            {'\n        '}
          </ui.Icon>
          {'\n        '}
          <span>{'Bulma'}</span>
          {'\n      '}
        </ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>
          {'\n        '}
          <ui.Icon size={'small'}>
            {'\n          '}
            <i aria-hidden={'true'} className={'fas fa-book'} />
            {'\n        '}
          </ui.Icon>
          {'\n        '}
          <span>{'Documentation'}</span>
          {'\n      '}
        </ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>
          {'\n        '}
          <ui.Icon size={'small'}>
            {'\n          '}
            <i aria-hidden={'true'} className={'fas fa-puzzle-piece'} />
            {'\n        '}
          </ui.Icon>
          {'\n        '}
          <span>{'Components'}</span>
          {'\n      '}
        </ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} active>
          {'\n        '}
          <ui.Icon size={'small'}>
            {'\n          '}
            <i aria-hidden={'true'} className={'fas fa-thumbs-up'} />
            {'\n        '}
          </ui.Icon>
          {'\n        '}
          <span>{'Breadcrumb'}</span>
          {'\n      '}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} separator={'arrow'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example006Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} separator={'bullet'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example007Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} separator={'dot'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example008Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} separator={'succeeds'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example009Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} size={'small'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example010Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} size={'medium'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

function Example011Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Breadcrumb aria-label={'breadcrumbs'} size={'large'}>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Bulma'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Documentation'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'}>{'Components'}</ui.BreadcrumbItem>
        {'\n    '}
        <ui.BreadcrumbItem href={'#'} aria-current={'page'} active>
          {'Breadcrumb'}
        </ui.BreadcrumbItem>
        {'\n  '}
      </ui.Breadcrumb>
      {'\n\n        \n      '}
    </>
  );
}

export const Example001 = {
  name: 'Breadcrumb 01',
  parameters: {
    official: { id: 'components-breadcrumb/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj;

export const Example002 = {
  name: 'alignment 01',
  parameters: {
    official: { id: 'components-breadcrumb/alignment/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} alignment={"centered"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj;

export const Example003 = {
  name: 'alignment 02',
  parameters: {
    official: { id: 'components-breadcrumb/alignment/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} alignment={"right"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj;

export const Example004 = {
  name: 'icons 01',
  parameters: {
    official: { id: 'components-breadcrumb/icons/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"\\n        "}<ui.Icon size={"small"}>{"\\n          "}<i aria-hidden={"true"} className={"fas fa-home"} />{"\\n        "}</ui.Icon>{"\\n        "}<span>{"Bulma"}</span>{"\\n      "}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"\\n        "}<ui.Icon size={"small"}>{"\\n          "}<i aria-hidden={"true"} className={"fas fa-book"} />{"\\n        "}</ui.Icon>{"\\n        "}<span>{"Documentation"}</span>{"\\n      "}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"\\n        "}<ui.Icon size={"small"}>{"\\n          "}<i aria-hidden={"true"} className={"fas fa-puzzle-piece"} />{"\\n        "}</ui.Icon>{"\\n        "}<span>{"Components"}</span>{"\\n      "}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} active>{"\\n        "}<ui.Icon size={"small"}>{"\\n          "}<i aria-hidden={"true"} className={"fas fa-thumbs-up"} />{"\\n        "}</ui.Icon>{"\\n        "}<span>{"Breadcrumb"}</span>{"\\n      "}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj;

export const Example005 = {
  name: 'alternative separators 01',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} separator={"arrow"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj;

export const Example006 = {
  name: 'alternative separators 02',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} separator={"bullet"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj;

export const Example007 = {
  name: 'alternative separators 03',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} separator={"dot"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj;

export const Example008 = {
  name: 'alternative separators 04',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} separator={"succeeds"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj;

export const Example009 = {
  name: 'sizes 01',
  parameters: {
    official: { id: 'components-breadcrumb/sizes/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} size={"small"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj;

export const Example010 = {
  name: 'sizes 02',
  parameters: {
    official: { id: 'components-breadcrumb/sizes/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} size={"medium"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj;

export const Example011 = {
  name: 'sizes 03',
  parameters: {
    official: { id: 'components-breadcrumb/sizes/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Breadcrumb aria-label={"breadcrumbs"} size={"large"}>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Bulma"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Documentation"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"}>{"Components"}</ui.BreadcrumbItem>{"\\n    "}<ui.BreadcrumbItem href={"#"} aria-current={"page"} active>{"Breadcrumb"}</ui.BreadcrumbItem>{"\\n  "}</ui.Breadcrumb>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj;

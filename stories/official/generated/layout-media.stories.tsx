import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-media',
      title: 'Media Object',
      url: 'https://bulma.io/documentation/layout/media-object/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-media',
  title: 'CSS Library/Layout/Media Object',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-media" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Media Object'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The famous '}
          <strong data-official-prose="">{'media object'}</strong>
          {' prevalent in social media interfaces, but useful in any context'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The\n    '}
            <a
              data-official-prose=""
              href={
                'http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code'
              }
            >
              {'media object'}
            </a>
            {
              '\n    is a UI element perfect for repeatable and nestable content.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-media/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can include '}
            <em data-official-prose="">{'any'}</em>
            {
              ' other Bulma element, like inputs, textareas, icons, buttons… or even a\n    '
            }
            <strong data-official-prose="">{'navbar'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-media/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'nesting'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Nesting\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#nesting'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can nest media objects up to '}
            <strong data-official-prose="">{'3 levels'}</strong>
            {' deep.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="layout-media/nesting/001">
          <Canvas of={Example003} />
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
                        {'$media-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-border-l),\n  0.5\n)'
                        }
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
                        {'$media-border-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-border-size)'}
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
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$media-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-spacing)'}
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
                        {'$media-spacing-large'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-spacing-large)'}
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
                        {'$media-content-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-content-spacing)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75rem'}
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
                        {'$media-level-1-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-level-1-spacing)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.75rem'}
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
                        {'$media-level-1-content-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-level-1-content-spacing)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5rem'}
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
                        {'$media-level-2-spacing'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-media-level-2-spacing)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5rem'}
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
      <ui.Media>
        {' '}
        <ui.MediaLeft as={'figure'}>
          {' '}
          <ui.Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />{' '}
        </ui.MediaLeft>{' '}
        <ui.MediaContent>
          {' '}
          <ui.Content>
            {' '}
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{' '}
              <small>31m</small> <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
              feugiat facilisis.
            </p>{' '}
          </ui.Content>{' '}
          <ui.Level mobile>
            {' '}
            <ui.LevelLeft>
              {' '}
              <ui.LevelItem as={'a'}>
                {' '}
                <ui.Icon size={'small'}>
                  <i className={'fas fa-reply'} />
                </ui.Icon>{' '}
              </ui.LevelItem>{' '}
              <ui.LevelItem as={'a'}>
                {' '}
                <ui.Icon size={'small'}>
                  <i className={'fas fa-retweet'} />
                </ui.Icon>{' '}
              </ui.LevelItem>{' '}
              <ui.LevelItem as={'a'}>
                {' '}
                <ui.Icon size={'small'}>
                  <i className={'fas fa-heart'} />
                </ui.Icon>{' '}
              </ui.LevelItem>{' '}
            </ui.LevelLeft>{' '}
          </ui.Level>{' '}
        </ui.MediaContent>{' '}
        <ui.MediaRight>
          {' '}
          <ui.Delete />{' '}
        </ui.MediaRight>{' '}
      </ui.Media>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Media>
        {' '}
        <ui.MediaLeft as={'figure'}>
          {' '}
          <ui.Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />{' '}
        </ui.MediaLeft>{' '}
        <ui.MediaContent>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control as={'p'}>
              {' '}
              <ui.Textarea
                placeholder={'Add a comment...'}
                defaultValue={''}
              />{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
          <ui.Level>
            {' '}
            <ui.LevelLeft>
              {' '}
              <ui.LevelItem>
                {' '}
                <ui.LinkButton color={'info'}>Submit</ui.LinkButton>{' '}
              </ui.LevelItem>{' '}
            </ui.LevelLeft>{' '}
            <ui.LevelRight>
              {' '}
              <ui.LevelItem>
                {' '}
                <ui.Checkbox> Press enter to submit </ui.Checkbox>{' '}
              </ui.LevelItem>{' '}
            </ui.LevelRight>{' '}
          </ui.Level>{' '}
        </ui.MediaContent>{' '}
      </ui.Media>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Media>
        {' '}
        <ui.MediaLeft as={'figure'}>
          {' '}
          <ui.Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />{' '}
        </ui.MediaLeft>{' '}
        <ui.MediaContent>
          {' '}
          <ui.Content>
            {' '}
            <p>
              <strong>Barbara Middleton</strong> <br /> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis porta eros lacus, nec
              ultricies elit blandit non. Suspendisse pellentesque mauris sit
              amet dolor blandit rutrum. Nunc in tempus turpis. <br />{' '}
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>{' '}
          </ui.Content>{' '}
          <ui.Media>
            {' '}
            <ui.MediaLeft as={'figure'}>
              {' '}
              <ui.Image
                size={48}
                as={'p'}
                src={'./official-assets/96x96.png'}
                alt={''}
              />{' '}
            </ui.MediaLeft>{' '}
            <ui.MediaContent>
              {' '}
              <ui.Content>
                {' '}
                <p>
                  <strong>Sean Brown</strong> <br /> Donec sollicitudin urna
                  eget eros malesuada sagittis. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
                  feugiat. <br />{' '}
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>{' '}
              </ui.Content>{' '}
              <ui.Media>
                {' '}
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.{' '}
              </ui.Media>{' '}
              <ui.Media>
                {' '}
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.{' '}
              </ui.Media>{' '}
            </ui.MediaContent>{' '}
          </ui.Media>{' '}
          <ui.Media>
            {' '}
            <ui.MediaLeft as={'figure'}>
              {' '}
              <ui.Image
                size={48}
                as={'p'}
                src={'./official-assets/96x96.png'}
                alt={''}
              />{' '}
            </ui.MediaLeft>{' '}
            <ui.MediaContent>
              {' '}
              <ui.Content>
                {' '}
                <p>
                  <strong>Kayli Eunice </strong> <br /> Sed convallis
                  scelerisque mauris, non pulvinar nunc mattis vel. Maecenas
                  varius felis sit amet magna vestibulum euismod malesuada
                  cursus libero. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae; Phasellus lacinia
                  non nisl id feugiat. <br />{' '}
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>{' '}
              </ui.Content>{' '}
            </ui.MediaContent>{' '}
          </ui.Media>{' '}
        </ui.MediaContent>{' '}
      </ui.Media>{' '}
      <ui.Media>
        {' '}
        <ui.MediaLeft as={'figure'}>
          {' '}
          <ui.Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />{' '}
        </ui.MediaLeft>{' '}
        <ui.MediaContent>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control as={'p'}>
              {' '}
              <ui.Textarea
                placeholder={'Add a comment...'}
                defaultValue={''}
              />{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
          <ui.Field>
            {' '}
            <ui.Control as={'p'}>
              {' '}
              <ui.Button>Post comment</ui.Button>{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.MediaContent>{' '}
      </ui.Media>
    </>
  )
}

export const Example001 = {
  name: 'Media object',
  parameters: {
    official: { id: 'layout-media/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Media>\n        {' '}\n        <ui.MediaLeft as={'figure'}>\n          {' '}\n          <ui.Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />{' '}\n        </ui.MediaLeft>{' '}\n        <ui.MediaContent>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              <strong>John Smith</strong> <small>@johnsmith</small>{' '}\n              <small>31m</small> <br /> Lorem ipsum dolor sit amet, consectetur\n              adipiscing elit. Proin ornare magna eros, eu pellentesque tortor\n              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis\n              feugiat facilisis.\n            </p>{' '}\n          </ui.Content>{' '}\n          <ui.Level mobile>\n            {' '}\n            <ui.LevelLeft>\n              {' '}\n              <ui.LevelItem as={'a'}>\n                {' '}\n                <ui.Icon size={'small'}>\n                  <i className={'fas fa-reply'} />\n                </ui.Icon>{' '}\n              </ui.LevelItem>{' '}\n              <ui.LevelItem as={'a'}>\n                {' '}\n                <ui.Icon size={'small'}>\n                  <i className={'fas fa-retweet'} />\n                </ui.Icon>{' '}\n              </ui.LevelItem>{' '}\n              <ui.LevelItem as={'a'}>\n                {' '}\n                <ui.Icon size={'small'}>\n                  <i className={'fas fa-heart'} />\n                </ui.Icon>{' '}\n              </ui.LevelItem>{' '}\n            </ui.LevelLeft>{' '}\n          </ui.Level>{' '}\n        </ui.MediaContent>{' '}\n        <ui.MediaRight>\n          {' '}\n          <ui.Delete />{' '}\n        </ui.MediaRight>{' '}\n      </ui.Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Media form',
  parameters: {
    official: { id: 'layout-media/basic/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Media>\n        {' '}\n        <ui.MediaLeft as={'figure'}>\n          {' '}\n          <ui.Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />{' '}\n        </ui.MediaLeft>{' '}\n        <ui.MediaContent>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control as={'p'}>\n              {' '}\n              <ui.Textarea\n                placeholder={'Add a comment...'}\n                defaultValue={''}\n              />{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n          <ui.Level>\n            {' '}\n            <ui.LevelLeft>\n              {' '}\n              <ui.LevelItem>\n                {' '}\n                <ui.LinkButton color={'info'}>Submit</ui.LinkButton>{' '}\n              </ui.LevelItem>{' '}\n            </ui.LevelLeft>{' '}\n            <ui.LevelRight>\n              {' '}\n              <ui.LevelItem>\n                {' '}\n                <ui.Checkbox> Press enter to submit </ui.Checkbox>{' '}\n              </ui.LevelItem>{' '}\n            </ui.LevelRight>{' '}\n          </ui.Level>{' '}\n        </ui.MediaContent>{' '}\n      </ui.Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Nested media objects',
  parameters: {
    official: { id: 'layout-media/nesting/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Media>\n        {' '}\n        <ui.MediaLeft as={'figure'}>\n          {' '}\n          <ui.Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />{' '}\n        </ui.MediaLeft>{' '}\n        <ui.MediaContent>\n          {' '}\n          <ui.Content>\n            {' '}\n            <p>\n              <strong>Barbara Middleton</strong> <br /> Lorem ipsum dolor sit\n              amet, consectetur adipiscing elit. Duis porta eros lacus, nec\n              ultricies elit blandit non. Suspendisse pellentesque mauris sit\n              amet dolor blandit rutrum. Nunc in tempus turpis. <br />{' '}\n              <small>\n                <a>Like</a> · <a>Reply</a> · 3 hrs\n              </small>\n            </p>{' '}\n          </ui.Content>{' '}\n          <ui.Media>\n            {' '}\n            <ui.MediaLeft as={'figure'}>\n              {' '}\n              <ui.Image\n                size={48}\n                as={'p'}\n                src={'./official-assets/96x96.png'}\n                alt={''}\n              />{' '}\n            </ui.MediaLeft>{' '}\n            <ui.MediaContent>\n              {' '}\n              <ui.Content>\n                {' '}\n                <p>\n                  <strong>Sean Brown</strong> <br /> Donec sollicitudin urna\n                  eget eros malesuada sagittis. Pellentesque habitant morbi\n                  tristique senectus et netus et malesuada fames ac turpis\n                  egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo\n                  feugiat. <br />{' '}\n                  <small>\n                    <a>Like</a> · <a>Reply</a> · 2 hrs\n                  </small>\n                </p>{' '}\n              </ui.Content>{' '}\n              <ui.Media>\n                {' '}\n                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu\n                lorem cursus ullamcorper sit amet nec massa.{' '}\n              </ui.Media>{' '}\n              <ui.Media>\n                {' '}\n                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.\n                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,\n                tincidunt iaculis diam non, porta aliquet tortor.{' '}\n              </ui.Media>{' '}\n            </ui.MediaContent>{' '}\n          </ui.Media>{' '}\n          <ui.Media>\n            {' '}\n            <ui.MediaLeft as={'figure'}>\n              {' '}\n              <ui.Image\n                size={48}\n                as={'p'}\n                src={'./official-assets/96x96.png'}\n                alt={''}\n              />{' '}\n            </ui.MediaLeft>{' '}\n            <ui.MediaContent>\n              {' '}\n              <ui.Content>\n                {' '}\n                <p>\n                  <strong>Kayli Eunice </strong> <br /> Sed convallis\n                  scelerisque mauris, non pulvinar nunc mattis vel. Maecenas\n                  varius felis sit amet magna vestibulum euismod malesuada\n                  cursus libero. Vestibulum ante ipsum primis in faucibus orci\n                  luctus et ultrices posuere cubilia Curae; Phasellus lacinia\n                  non nisl id feugiat. <br />{' '}\n                  <small>\n                    <a>Like</a> · <a>Reply</a> · 2 hrs\n                  </small>\n                </p>{' '}\n              </ui.Content>{' '}\n            </ui.MediaContent>{' '}\n          </ui.Media>{' '}\n        </ui.MediaContent>{' '}\n      </ui.Media>{' '}\n      <ui.Media>\n        {' '}\n        <ui.MediaLeft as={'figure'}>\n          {' '}\n          <ui.Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />{' '}\n        </ui.MediaLeft>{' '}\n        <ui.MediaContent>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control as={'p'}>\n              {' '}\n              <ui.Textarea\n                placeholder={'Add a comment...'}\n                defaultValue={''}\n              />{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n          <ui.Field>\n            {' '}\n            <ui.Control as={'p'}>\n              {' '}\n              <ui.Button>Post comment</ui.Button>{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.MediaContent>{' '}\n      </ui.Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-image',
      title: 'Image',
      url: 'https://bulma.io/documentation/elements/image/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-image',
  title: 'CSS Library/Elements/Image',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-image" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Image'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A container for '}
          <strong data-official-prose="">{'responsive images'}</strong>
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
              '\n    Because images can take a few seconds to load (or not at all), use the\n    '
            }
            <code data-official-prose="">{'image'}</code>
            {' container to specify a '}
            <strong data-official-prose="">{'precisely sized'}</strong>
            {
              " container so that your layout isn't\n    broken because of image loading or image errors.\n  "
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-image/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'fixed-square-images'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Fixed square images\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fixed-square-images'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'There are '}
            <strong data-official-prose="">{'7'}</strong>
            {' dimensions to choose from, useful for '}
            <strong data-official-prose="">{'avatars'}</strong>
            {':'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <code data-official-prose="">{'image is-16x16'}</code>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <figure data-official-prose="" className={'image is-16x16'}>
                  {'\n            '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/16x16.png'}
                  />
                  {'\n          '}
                </figure>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">{'16x16px'}</td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <code data-official-prose="">{'image is-24x24'}</code>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <figure data-official-prose="" className={'image is-24x24'}>
                  {'\n            '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/24x24.png'}
                  />
                  {'\n          '}
                </figure>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">{'24x24px'}</td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <code data-official-prose="">{'image is-32x32'}</code>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <figure data-official-prose="" className={'image is-32x32'}>
                  {'\n            '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/32x32.png'}
                  />
                  {'\n          '}
                </figure>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">{'32x32px'}</td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <code data-official-prose="">{'image is-48x48'}</code>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <figure data-official-prose="" className={'image is-48x48'}>
                  {'\n            '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/48x48.png'}
                  />
                  {'\n          '}
                </figure>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">{'48x48px'}</td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <code data-official-prose="">{'image is-64x64'}</code>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <figure data-official-prose="" className={'image is-64x64'}>
                  {'\n            '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/64x64.png'}
                  />
                  {'\n          '}
                </figure>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">{'64x64px'}</td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <code data-official-prose="">{'image is-96x96'}</code>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <figure data-official-prose="" className={'image is-96x96'}>
                  {'\n            '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/96x96.png'}
                  />
                  {'\n          '}
                </figure>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">{'96x96px'}</td>
              {'\n      '}
            </tr>
            {'\n    \n      '}
            <tr data-official-prose="">
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <code data-official-prose="">{'image is-128x128'}</code>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">
                {'\n          '}
                <figure data-official-prose="" className={'image is-128x128'}>
                  {'\n            '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/128x128.png'}
                  />
                  {'\n          '}
                </figure>
                {'\n        '}
              </td>
              {'\n        '}
              <td data-official-prose="">{'128x128px'}</td>
              {'\n      '}
            </tr>
            {'\n    \n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'rounded-images'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Rounded images\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#rounded-images'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can also make rounded images, using '}
            <code data-official-prose="">{'is-rounded'}</code>
            {' class:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-image/rounded-images/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'retina-images'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Retina images\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#retina-images'}
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
              '\n    Because the image is fixed in size, you can use an image that is\n    '
            }
            <strong data-official-prose="">{'four times as big'}</strong>
            {'. So for example, in a '}
            <code data-official-prose="">{'128x128'}</code>
            {' container, you can use a\n    '}
            <code data-official-prose="">{'256x256'}</code>
            {' image, but resized to '}
            <strong data-official-prose="">{'128x128'}</strong>
            {' pixels.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-image/retina-images/001">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'responsive-images-with-ratios'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Responsive images with ratios\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#responsive-images-with-ratios'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {"\n    If you don't know the exact dimensions but know the\n    "}
            <strong data-official-prose="">{'ratio'}</strong>
            {' instead, you can use one of the '}
            <strong data-official-prose="">{'16 ratio modifiers'}</strong>
            {', which include\n    '}
            <a
              data-official-prose=""
              href={
                'https://en.wikipedia.org/wiki/Aspect_ratio_%28image%29#Still_photography'
              }
            >
              {'common aspect ratios in still photography'}
            </a>
            {':\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <table
          data-official-prose=""
          id={'images'}
          className={'table is-bordered'}
        >
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-square'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-square'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x480.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'Square (or 1 by 1)'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-1by1'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-1by1'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x480.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'1 by 1'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-5by4'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-5by4'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/600x480.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'5 by 4'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-4by3'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-4by3'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/640x480.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'4 by 3'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by2'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-3by2'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x320.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'3 by 2'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-5by3'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-5by3'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/800x480.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'5 by 3'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-16by9'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-16by9'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/640x360.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'16 by 9'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-2by1'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-2by1'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/640x320.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'2 by 1'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by1'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-3by1'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/720x240.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'3 by 1'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-4by5'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-4by5'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x600.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'4 by 5'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by4'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-3by4'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x640.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'3 by 4'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-2by3'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-2by3'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/320x480.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'2 by 3'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by5'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-3by5'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x800.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'3 by 5'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-9by16'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-9by16'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/360x640.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'9 by 16'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-1by2'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-1by2'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/320x640.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'1 by 2'}</td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'image is-1by3'}</code>
              </td>
              {'\n      '}
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                {'\n        '}
                <figure data-official-prose="" className={'image is-1by3'}>
                  {'\n          '}
                  <img
                    data-official-prose=""
                    src={'./official-assets/240x720.png'}
                  />
                  {'\n        '}
                </figure>
                {'\n      '}
              </td>
              {'\n      '}
              <td data-official-prose="">{'1 by 3'}</td>
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
            {'\n    The only '}
            <strong data-official-prose="">{'requirement'}</strong>
            {' is for the parent element to already have a specific '}
            <strong data-official-prose="">{'width'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'image'}</code>
            {' container will usually take up the '}
            <strong data-official-prose="">{'whole width'}</strong>
            {' while maintaining the perfect\n    ratio. '}
            <br data-official-prose="" />
            {"\n    If it doesn't, you can force it by appending the "}
            <code data-official-prose="">{'is-fullwidth'}</code>
            {' modifier.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'arbitrary-ratios-with-any-element'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Arbitrary ratios with any element\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#arbitrary-ratios-with-any-element'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can apply a specific '}
            <strong data-official-prose="">{'ratio'}</strong>
            {' on '}
            <strong data-official-prose="">{'any element'}</strong>
            {' other than an '}
            <code data-official-prose="">{'img'}</code>
            {',\n    simply by applying the '}
            <code data-official-prose="">{'has-ratio'}</code>
            {' modifier to a resizable element.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    For example, you can apply a '}
            <code data-official-prose="">{'16by9'}</code>
            {' ratio on an '}
            <code data-official-prose="">{'iframe'}</code>
            {
              ". Resize the browser, and you'll see\n    how the ratio is maintained.\n  "
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-image/arbitrary-ratios-with-any-element/001">
          <Canvas of={Example004} />
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
                        {'$dimensions'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'16 24 32 48 64 96 128'}
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
      <ui.Image size={128} src={'./official-assets/128x128.png'} alt={''} />
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Image
        size={128}
        src={'./official-assets/128x128.png'}
        alt={''}
        rounded
      />
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Image size={128} src={'./official-assets/256x256.png'} alt={''} />
      {'\n\n        \n      '}
    </>
  )
}

function Example004Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Image ratio={'16by9'}>
        <iframe
          width={'640'}
          height={'360'}
          src={'https://www.youtube.com/embed/YE7VzlLtp-4'}
          frameBorder={'0'}
          allowFullScreen
          className={'rb-has-ratio'}
        />
      </ui.Image>
      {'\n\n        \n      '}
    </>
  )
}

export const Example001 = {
  name: 'Fixed-size image',
  parameters: {
    official: { id: 'elements-image/basic/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Image size={128} src={"./official-assets/128x128.png"} alt={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Rounded image',
  parameters: {
    official: { id: 'elements-image/rounded-images/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Image size={128} src={"./official-assets/128x128.png"} alt={""} rounded />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Retina image',
  parameters: {
    official: { id: 'elements-image/retina-images/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Image size={128} src={"./official-assets/256x256.png"} alt={""} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Responsive video',
  parameters: {
    official: { id: 'elements-image/arbitrary-ratios-with-any-element/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Image ratio={"16by9"}><iframe width={"640"} height={"360"} src={"https://www.youtube.com/embed/YE7VzlLtp-4"} frameBorder={"0"} allowFullScreen className={"rb-has-ratio"} /></ui.Image>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

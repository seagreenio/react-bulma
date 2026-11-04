import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Image } from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Image'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A container for '}
          <strong data-official-prose="">{'responsive images'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' Because images can take a few seconds to load (or not at all), use the '
            }
            <code data-official-prose="">{'image'}</code>
            {' container to specify a '}
            <strong data-official-prose="">{'precisely sized'}</strong>
            {
              " container so that your layout isn't broken because of image loading or image errors. "
            }
          </p>
        </div>
        <div data-official-example="elements-image/basic/001">
          <Canvas of={FixedSizeImageStory} />
        </div>
        <h3
          data-official-prose=""
          id={'fixed-square-images'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Fixed square images '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fixed-square-images'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'There are '}
            <strong data-official-prose="">{'7'}</strong>
            {' dimensions to choose from, useful for '}
            <strong data-official-prose="">{'avatars'}</strong>
            {':'}
          </p>
        </div>
        <table data-official-prose="" className={'table is-bordered'}>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-16x16'}</code>
              </td>
              <td data-official-prose="">
                <figure data-official-prose="" className={'image is-16x16'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/16x16.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'16x16px'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-24x24'}</code>
              </td>
              <td data-official-prose="">
                <figure data-official-prose="" className={'image is-24x24'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/24x24.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'24x24px'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-32x32'}</code>
              </td>
              <td data-official-prose="">
                <figure data-official-prose="" className={'image is-32x32'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/32x32.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'32x32px'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-48x48'}</code>
              </td>
              <td data-official-prose="">
                <figure data-official-prose="" className={'image is-48x48'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/48x48.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'48x48px'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-64x64'}</code>
              </td>
              <td data-official-prose="">
                <figure data-official-prose="" className={'image is-64x64'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/64x64.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'64x64px'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-96x96'}</code>
              </td>
              <td data-official-prose="">
                <figure data-official-prose="" className={'image is-96x96'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/96x96.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'96x96px'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-128x128'}</code>
              </td>
              <td data-official-prose="">
                <figure data-official-prose="" className={'image is-128x128'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/128x128.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'128x128px'}</td>
            </tr>
          </tbody>
        </table>
        <h3
          data-official-prose=""
          id={'rounded-images'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Rounded images '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#rounded-images'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can also make rounded images, using '}
            <code data-official-prose="">{'is-rounded'}</code>
            {' class:'}
          </p>
        </div>
        <div data-official-example="elements-image/rounded-images/001">
          <Canvas of={RoundedImageStory} />
        </div>
        <h3
          data-official-prose=""
          id={'retina-images'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Retina images '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#retina-images'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' Because the image is fixed in size, you can use an image that is '
            }
            <strong data-official-prose="">{'four times as big'}</strong>
            {'. So for example, in a '}
            <code data-official-prose="">{'128x128'}</code>
            {' container, you can use a '}
            <code data-official-prose="">{'256x256'}</code>
            {' image, but resized to '}
            <strong data-official-prose="">{'128x128'}</strong>
            {' pixels. '}
          </p>
        </div>
        <div data-official-example="elements-image/retina-images/001">
          <Canvas of={RetinaImageStory} />
        </div>
        <h3
          data-official-prose=""
          id={'responsive-images-with-ratios'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Responsive images with ratios '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#responsive-images-with-ratios'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {" If you don't know the exact dimensions but know the "}
            <strong data-official-prose="">{'ratio'}</strong>
            {' instead, you can use one of the '}
            <strong data-official-prose="">{'16 ratio modifiers'}</strong>
            {', which include '}
            <a
              data-official-prose=""
              href={
                'https://en.wikipedia.org/wiki/Aspect_ratio_%28image%29#Still_photography'
              }
            >
              {'common aspect ratios in still photography'}
            </a>
            {': '}
          </p>
        </div>
        <table
          data-official-prose=""
          id={'images'}
          className={'table is-bordered'}
        >
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-square'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-square'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x480.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'Square (or 1 by 1)'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-1by1'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-1by1'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x480.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'1 by 1'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-5by4'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-5by4'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/600x480.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'5 by 4'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-4by3'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-4by3'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/640x480.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'4 by 3'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by2'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-3by2'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x320.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'3 by 2'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-5by3'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-5by3'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/800x480.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'5 by 3'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-16by9'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-16by9'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/640x360.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'16 by 9'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-2by1'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-2by1'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/640x320.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'2 by 1'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by1'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-3by1'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/720x240.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'3 by 1'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-4by5'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-4by5'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x600.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'4 by 5'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by4'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-3by4'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x640.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'3 by 4'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-2by3'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-2by3'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/320x480.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'2 by 3'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-3by5'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-3by5'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/480x800.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'3 by 5'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-9by16'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-9by16'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/360x640.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'9 by 16'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-1by2'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-1by2'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/320x640.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'1 by 2'}</td>
            </tr>
            <tr data-official-prose="">
              <td data-official-prose="">
                <code data-official-prose="">{'image is-1by3'}</code>
              </td>
              <td
                data-official-prose=""
                style={{ width: '10rem' } as React.CSSProperties}
              >
                <figure data-official-prose="" className={'image is-1by3'}>
                  <img
                    data-official-prose=""
                    src={'./official-assets/240x720.png'}
                  />
                </figure>
              </td>
              <td data-official-prose="">{'1 by 3'}</td>
            </tr>
          </tbody>
        </table>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The only '}
            <strong data-official-prose="">{'requirement'}</strong>
            {' is for the parent element to already have a specific '}
            <strong data-official-prose="">{'width'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'image'}</code>
            {' container will usually take up the '}
            <strong data-official-prose="">{'whole width'}</strong>
            {' while maintaining the perfect ratio. '}
            <br data-official-prose="" />
            {" If it doesn't, you can force it by appending the "}
            <code data-official-prose="">{'is-fullwidth'}</code>
            {' modifier. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'arbitrary-ratios-with-any-element'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Arbitrary ratios with any element '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#arbitrary-ratios-with-any-element'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can apply a specific '}
            <strong data-official-prose="">{'ratio'}</strong>
            {' on '}
            <strong data-official-prose="">{'any element'}</strong>
            {' other than an '}
            <code data-official-prose="">{'img'}</code>
            {', simply by applying the '}
            <code data-official-prose="">{'has-ratio'}</code>
            {' modifier to a resizable element. '}
          </p>
          <p data-official-prose="">
            {' For example, you can apply a '}
            <code data-official-prose="">{'16by9'}</code>
            {' ratio on an '}
            <code data-official-prose="">{'iframe'}</code>
            {
              ". Resize the browser, and you'll see how the ratio is maintained. "
            }
          </p>
        </div>
        <div data-official-example="elements-image/arbitrary-ratios-with-any-element/001">
          <Canvas of={ResponsiveVideoStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function FixedSizeImageDemo() {
  return (
    <>
      <Image size={128} src={'./official-assets/128x128.png'} alt={''} />
    </>
  )
}

function RoundedImageDemo() {
  return (
    <>
      <Image
        size={128}
        src={'./official-assets/128x128.png'}
        alt={''}
        rounded
      />
    </>
  )
}

function RetinaImageDemo() {
  return (
    <>
      <Image size={128} src={'./official-assets/256x256.png'} alt={''} />
    </>
  )
}

function ResponsiveVideoDemo() {
  return (
    <>
      <Image ratio={'16by9'}>
        <iframe
          width={'640'}
          height={'360'}
          src={'https://www.youtube.com/embed/YE7VzlLtp-4'}
          frameBorder={'0'}
          allowFullScreen
          className={'rb-has-ratio'}
        />
      </Image>
    </>
  )
}

export const FixedSizeImageStory = {
  name: 'Fixed-size image',
  parameters: {
    official: { id: 'elements-image/basic/001' },
    docs: {
      source: {
        code: "import { Image } from '@seagreenio/react-bulma'\n\nfunction FixedSizeImageDemo() {\n  return (\n    <>\n      <Image size={128} src={'./official-assets/128x128.png'} alt={''} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FixedSizeImageDemo,
} satisfies StoryObj

export const RoundedImageStory = {
  name: 'Rounded image',
  parameters: {
    official: { id: 'elements-image/rounded-images/001' },
    docs: {
      source: {
        code: "import { Image } from '@seagreenio/react-bulma'\n\nfunction RoundedImageDemo() {\n  return (\n    <>\n      <Image\n        size={128}\n        src={'./official-assets/128x128.png'}\n        alt={''}\n        rounded\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RoundedImageDemo,
} satisfies StoryObj

export const RetinaImageStory = {
  name: 'Retina image',
  parameters: {
    official: { id: 'elements-image/retina-images/001' },
    docs: {
      source: {
        code: "import { Image } from '@seagreenio/react-bulma'\n\nfunction RetinaImageDemo() {\n  return (\n    <>\n      <Image size={128} src={'./official-assets/256x256.png'} alt={''} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RetinaImageDemo,
} satisfies StoryObj

export const ResponsiveVideoStory = {
  name: 'Responsive video',
  parameters: {
    official: { id: 'elements-image/arbitrary-ratios-with-any-element/001' },
    docs: {
      source: {
        code: "import { Image } from '@seagreenio/react-bulma'\n\nfunction ResponsiveVideoDemo() {\n  return (\n    <>\n      <Image ratio={'16by9'}>\n        <iframe\n          width={'640'}\n          height={'360'}\n          src={'https://www.youtube.com/embed/YE7VzlLtp-4'}\n          frameBorder={'0'}\n          allowFullScreen\n          className={'rb-has-ratio'}\n        />\n      </Image>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ResponsiveVideoDemo,
} satisfies StoryObj

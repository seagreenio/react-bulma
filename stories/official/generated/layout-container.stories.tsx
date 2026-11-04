import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Container, Notification } from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Container'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A simple '}
          <strong data-official-prose="">{'container'}</strong>
          {' to center your content horizontally'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'container'}</code>
            {' is a simple utility element that allows you to '}
            <strong data-official-prose="">{'center'}</strong>
            {
              ' content on larger viewports. It can be used in any context, but mostly as a '
            }
            <strong data-official-prose="">{'direct child'}</strong>
            {' of one of the following: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'navbar'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'hero'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'section'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'footer'}</code>
            </li>
          </ul>
        </div>
        <h3
          data-official-prose=""
          id={'overview'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Overview '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#overview'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'table-container'}>
          <table data-official-prose="" className={'table is-bordered'}>
            <thead data-official-prose="">
              <tr data-official-prose=""></tr>
            </thead>
            <thead data-official-prose="">
              <tr data-official-prose="">
                <th data-official-prose="" className={'bd-is-empty'}></th>
                <th data-official-prose="">
                  {' Below '}
                  <br data-official-prose="" />{' '}
                  <code data-official-prose="">{'1023px'}</code>
                </th>
                <th data-official-prose="">
                  {' Desktop '}
                  <br data-official-prose="" />
                  {' Between '}
                  <code data-official-prose="">{'1024px'}</code>
                  {' and '}
                  <code data-official-prose="">{'1215px'}</code>
                </th>
                <th data-official-prose="">
                  {' Widescreen '}
                  <br data-official-prose="" />
                  {' Between '}
                  <code data-official-prose="">{'1216px'}</code>
                  {' and '}
                  <code data-official-prose="">{'1407px'}</code>
                </th>
                <th data-official-prose="">
                  {' FullHD '}
                  <br data-official-prose="" />{' '}
                  <code data-official-prose="">{'1408px'}</code>
                  {' and above '}
                </th>
              </tr>
            </thead>
            <tbody data-official-prose="">
              <tr data-official-prose="">
                <th data-official-prose="">{'Class'}</th>
                <th
                  data-official-prose=""
                  colSpan={4}
                  className={'has-text-centered'}
                >
                  <code data-official-prose="">{'max-width'}</code>
                </th>
              </tr>
            </tbody>
            <tbody data-official-prose="">
              <tr data-official-prose="">
                <td data-official-prose="">
                  <code data-official-prose="">{'.container'}</code>
                </td>
                <td
                  data-official-prose=""
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'Full width'}
                </td>
                <td data-official-prose="">
                  <code data-official-prose="">{'960px'}</code>
                </td>
                <td data-official-prose="">
                  <code data-official-prose="">{'1152px'}</code>
                </td>
                <td data-official-prose="">
                  <code data-official-prose="">{'1344px'}</code>
                </td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">
                  <code data-official-prose="">
                    {'.container.is-widescreen'}
                  </code>
                </td>
                <td
                  data-official-prose=""
                  colSpan={2}
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {' Full width '}
                </td>
                <td data-official-prose="">
                  <code data-official-prose="">{'1152px'}</code>
                </td>
                <td data-official-prose="">
                  <code data-official-prose="">{'1344px'}</code>
                </td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">
                  <code data-official-prose="">{'.container.is-fullhd'}</code>
                </td>
                <td
                  data-official-prose=""
                  colSpan={3}
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {' Full width '}
                </td>
                <td data-official-prose="">
                  <code data-official-prose="">{'1344px'}</code>
                </td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">
                  <code data-official-prose="">
                    {'.container.is-max-desktop'}
                  </code>
                </td>
                <td
                  data-official-prose=""
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'Full width'}
                </td>
                <td data-official-prose="" colSpan={3}>
                  <code data-official-prose="">{'960px'}</code>
                </td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">
                  <code data-official-prose="">
                    {'.container.is-max-widescreen'}
                  </code>
                </td>
                <td
                  data-official-prose=""
                  className={'has-text-grey-light has-background-white-ter'}
                >
                  {'Full width'}
                </td>
                <td data-official-prose="">
                  <code data-official-prose="">{'960px'}</code>
                </td>
                <td data-official-prose="" colSpan={2}>
                  <code data-official-prose="">{'1152px'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3
          data-official-prose=""
          id={'default-behavior'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Default behavior '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#default-behavior'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' By default, the '}
            <code data-official-prose="">{'container'}</code>
            {' will only be activated from the '}
            <code data-official-prose="">{'$desktop'}</code>
            {' breakpoint. It will increase its '}
            <code data-official-prose="">{'max-width'}</code>
            {' after reaching the '}
            <code data-official-prose="">{'$widescreen'}</code>
            {' and '}
            <code data-official-prose="">{'$fullhd'}</code>
            {' breakpoints. '}
          </p>
          <p data-official-prose="">
            {" The container's "}
            <strong data-official-prose="">{'width'}</strong>
            {' for each '}
            <strong data-official-prose="">{'breakpoint'}</strong>
            {' is the result of: '}
            <code data-official-prose="">{'$device - (2 * $gap)'}</code>
            {'. The '}
            <code data-official-prose="">{'$gap'}</code>
            {' variable has a default value of '}
            <code data-official-prose="">{' 32px'}</code>
            {' but can be modified. '}
          </p>
          <p data-official-prose="">
            {'This is how the container will behave:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {' on '}
              <code data-official-prose="">{'$desktop'}</code>
              {' it will have a maximum width of '}
              <strong data-official-prose="">{'960px'}</strong>
              {'. '}
            </li>
            <li data-official-prose="">
              {' on '}
              <code data-official-prose="">{'$widescreen'}</code>
              {' it will have a maximum width of '}
              <strong data-official-prose="">{'1152px'}</strong>
              {'. '}
            </li>
            <li data-official-prose="">
              {' on '}
              <code data-official-prose="">{'$fullhd'}</code>
              {' it will have a maximum width of '}
              <strong data-official-prose="">{'1344px'}</strong>
              {'. '}
            </li>
          </ul>
          <p data-official-prose="">
            {' The values '}
            <strong data-official-prose="">{'960'}</strong>
            {', '}
            <strong data-official-prose="">{'1152'}</strong>
            {' and '}
            <strong data-official-prose="">{'1344'}</strong>
            {' have been chosen because they are divisible by both '}
            <strong data-official-prose="">{'12'}</strong>
            {' and '}
            <strong data-official-prose="">{'16'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="layout-container/default-behavior/001">
          <Canvas of={CenteredContainerStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container">\n  <div class="notification is-primary">\n    This container is <strong>centered</strong> on desktop and larger viewports.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <h3
          data-official-prose=""
          id={'widescreen-or-fullhd-only'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Widescreen or FullHD only '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#widescreen-or-fullhd-only'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' With the two modifiers '}
            <code data-official-prose="">{'is-widescreen'}</code>
            {' and '}
            <code data-official-prose="">{'is-fullhd'}</code>
            {', you can have a '}
            <em data-official-prose="">{'fullwidth'}</em>
            {' container '}
            <strong data-official-prose="">{'until'}</strong>
            {' those specific breakpoints. '}
          </p>
        </div>
        <div data-official-example="layout-container/widescreen-or-fullhd-only/001">
          <Canvas of={ContainerFromWidescreenStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-widescreen">\n  <div class="notification is-primary">\n    This container is <strong>fullwidth</strong> <em>until</em> the\n    <code>$widescreen</code> breakpoint.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-example="layout-container/widescreen-or-fullhd-only/002">
          <Canvas of={ContainerFromFullHDStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-fullhd">\n  <div class="notification is-primary">\n    This container is <strong>fullwidth</strong> <em>until</em> the\n    <code>$fullhd</code> breakpoint.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <h3
          data-official-prose=""
          id={'tablet-desktop-and-widescreen-maximum-widths'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Tablet, Desktop and Widescreen maximum widths '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#tablet-desktop-and-widescreen-maximum-widths'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Sometimes, you might want a '}
            <strong data-official-prose="">{'narrow'}</strong>
            {
              " container on larger viewports. That's why Bulma provides 3 modifier classes: "
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'.container.is-max-tablet'}</code>
              {' will behave like a tablet container '}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'.container.is-max-desktop'}</code>
              {' will behave like a desktop container '}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">
                {'.container.is-max-widescreen'}
              </code>
              {' will behave like a widescreen container '}
            </li>
          </ul>
        </div>
        <div data-official-example="layout-container/tablet-desktop-and-widescreen-maximum-widths/001">
          <Canvas of={TabletMaximumWidthStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-max-tablet">\n  <div class="notification is-primary">\n    This container has a <code>max-width</code> of\n    <code>$tablet - $container-offset</code>.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-example="layout-container/tablet-desktop-and-widescreen-maximum-widths/002">
          <Canvas of={DesktopMaximumWidthStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-max-desktop">\n  <div class="notification is-primary">\n    This container has a <code>max-width</code> of\n    <code>$desktop - $container-offset</code> on widescreen and fullhd.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-example="layout-container/tablet-desktop-and-widescreen-maximum-widths/003">
          <Canvas of={WidescreenMaximumWidthStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-max-widescreen">\n  <div class="notification is-primary">\n    This container has a <code>max-width</code> of\n    <code>$widescreen - $container-offset</code> on fullhd.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <h3
          data-official-prose=""
          id={'absolute-maximum-width'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Absolute maximum width '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#absolute-maximum-width'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to change the maximum width of '}
            <strong data-official-prose="">{'all'}</strong>
            {' containers, you can do so by updating the values of the '}
            <code data-official-prose="">{'$container-max-width'}</code>
            {' Sass variable. '}
          </p>
          <p data-official-prose="">
            {' By default, the '}
            <code data-official-prose="">{'$fullhd'}</code>
            {' breakpoint value is used to calculate the '}
            <strong data-official-prose="">{'absolute'}</strong>
            {' maximum width of the '}
            <code data-official-prose="">{'container'}</code>
            {'. Simply change it to a smaller value like '}
            <code data-official-prose="">{'$widescreen'}</code>
            {', '}
            <code data-official-prose="">{'$desktop'}</code>
            {', or any value in '}
            <strong data-official-prose="">{'pixels'}</strong>
            {'. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'fluid-container'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Fluid container '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fluid-container'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              " If you don't want to have a maximum width but want to keep the 32px margin on the left and right sides, add the "
            }
            <code data-official-prose="">{'is-fluid'}</code>
            {' modifier: '}
          </p>
        </div>
        <div data-official-example="layout-container/fluid-container/001">
          <Canvas of={FluidContainerStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="container is-fluid">\n  <div class="notification is-primary">\n    This container is <strong>fluid</strong>: it will have a 32px gap on either\n    side, on any viewport size.\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
      </div>
    </OfficialDocument>
  )
}

function CenteredContainerDemo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        <Container>
          <Notification color={'primary'}>
            This container is <strong>centered</strong> on desktop and larger
            viewports.
          </Notification>
        </Container>
      </div>
    </>
  )
}

function ContainerFromWidescreenDemo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        <Container width={'widescreen'}>
          <Notification color={'primary'}>
            This container is <strong>fullwidth</strong> <em>until</em> the{' '}
            <code>{'$widescreen'}</code> breakpoint.
          </Notification>
        </Container>
      </div>
    </>
  )
}

function ContainerFromFullHDDemo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        <Container width={'fullhd'}>
          <Notification color={'primary'}>
            This container is <strong>fullwidth</strong> <em>until</em> the{' '}
            <code>{'$fullhd'}</code> breakpoint.
          </Notification>
        </Container>
      </div>
    </>
  )
}

function TabletMaximumWidthDemo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        <Container maxWidth={'tablet'}>
          <Notification color={'primary'}>
            This container has a <code>{'max-width'}</code> of{' '}
            <code>{'$tablet - $container-offset'}</code>.
          </Notification>
        </Container>
      </div>
    </>
  )
}

function DesktopMaximumWidthDemo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        <Container maxWidth={'desktop'}>
          <Notification color={'primary'}>
            This container has a <code>{'max-width'}</code> of{' '}
            <code>{'$desktop - $container-offset'}</code> on widescreen and
            fullhd.
          </Notification>
        </Container>
      </div>
    </>
  )
}

function WidescreenMaximumWidthDemo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        <Container maxWidth={'widescreen'}>
          <Notification color={'primary'}>
            This container has a <code>{'max-width'}</code> of{' '}
            <code>{'$widescreen - $container-offset'}</code> on fullhd.
          </Notification>
        </Container>
      </div>
    </>
  )
}

function FluidContainerDemo() {
  return (
    <>
      <div className={'bd-example is-fullwidth'}>
        <Container width={'fluid'}>
          <Notification color={'primary'}>
            This container is <strong>fluid</strong>: it will have a 32px gap on
            either side, on any viewport size.
          </Notification>
        </Container>
      </div>
    </>
  )
}

export const CenteredContainerStory = {
  name: 'Centered container',
  parameters: {
    official: { id: 'layout-container/default-behavior/001' },
    docs: {
      source: {
        code: "import { Container, Notification } from '@seagreenio/react-bulma'\n\nfunction CenteredContainerDemo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        <Container>\n          <Notification color={'primary'}>\n            This container is <strong>centered</strong> on desktop and larger\n            viewports.\n          </Notification>\n        </Container>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredContainerDemo,
} satisfies StoryObj

export const ContainerFromWidescreenStory = {
  name: 'Container from widescreen',
  parameters: {
    official: { id: 'layout-container/widescreen-or-fullhd-only/001' },
    docs: {
      source: {
        code: "import { Container, Notification } from '@seagreenio/react-bulma'\n\nfunction ContainerFromWidescreenDemo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        <Container width={'widescreen'}>\n          <Notification color={'primary'}>\n            This container is <strong>fullwidth</strong> <em>until</em> the{' '}\n            <code>{'$widescreen'}</code> breakpoint.\n          </Notification>\n        </Container>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ContainerFromWidescreenDemo,
} satisfies StoryObj

export const ContainerFromFullHDStory = {
  name: 'Container from full HD',
  parameters: {
    official: { id: 'layout-container/widescreen-or-fullhd-only/002' },
    docs: {
      source: {
        code: "import { Container, Notification } from '@seagreenio/react-bulma'\n\nfunction ContainerFromFullHDDemo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        <Container width={'fullhd'}>\n          <Notification color={'primary'}>\n            This container is <strong>fullwidth</strong> <em>until</em> the{' '}\n            <code>{'$fullhd'}</code> breakpoint.\n          </Notification>\n        </Container>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ContainerFromFullHDDemo,
} satisfies StoryObj

export const TabletMaximumWidthStory = {
  name: 'Tablet maximum width',
  parameters: {
    official: {
      id: 'layout-container/tablet-desktop-and-widescreen-maximum-widths/001',
    },
    docs: {
      source: {
        code: "import { Container, Notification } from '@seagreenio/react-bulma'\n\nfunction TabletMaximumWidthDemo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        <Container maxWidth={'tablet'}>\n          <Notification color={'primary'}>\n            This container has a <code>{'max-width'}</code> of{' '}\n            <code>{'$tablet - $container-offset'}</code>.\n          </Notification>\n        </Container>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TabletMaximumWidthDemo,
} satisfies StoryObj

export const DesktopMaximumWidthStory = {
  name: 'Desktop maximum width',
  parameters: {
    official: {
      id: 'layout-container/tablet-desktop-and-widescreen-maximum-widths/002',
    },
    docs: {
      source: {
        code: "import { Container, Notification } from '@seagreenio/react-bulma'\n\nfunction DesktopMaximumWidthDemo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        <Container maxWidth={'desktop'}>\n          <Notification color={'primary'}>\n            This container has a <code>{'max-width'}</code> of{' '}\n            <code>{'$desktop - $container-offset'}</code> on widescreen and\n            fullhd.\n          </Notification>\n        </Container>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DesktopMaximumWidthDemo,
} satisfies StoryObj

export const WidescreenMaximumWidthStory = {
  name: 'Widescreen maximum width',
  parameters: {
    official: {
      id: 'layout-container/tablet-desktop-and-widescreen-maximum-widths/003',
    },
    docs: {
      source: {
        code: "import { Container, Notification } from '@seagreenio/react-bulma'\n\nfunction WidescreenMaximumWidthDemo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        <Container maxWidth={'widescreen'}>\n          <Notification color={'primary'}>\n            This container has a <code>{'max-width'}</code> of{' '}\n            <code>{'$widescreen - $container-offset'}</code> on fullhd.\n          </Notification>\n        </Container>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WidescreenMaximumWidthDemo,
} satisfies StoryObj

export const FluidContainerStory = {
  name: 'Fluid container',
  parameters: {
    official: { id: 'layout-container/fluid-container/001' },
    docs: {
      source: {
        code: "import { Container, Notification } from '@seagreenio/react-bulma'\n\nfunction FluidContainerDemo() {\n  return (\n    <>\n      <div className={'bd-example is-fullwidth'}>\n        <Container width={'fluid'}>\n          <Notification color={'primary'}>\n            This container is <strong>fluid</strong>: it will have a 32px gap on\n            either side, on any viewport size.\n          </Notification>\n        </Container>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FluidContainerDemo,
} satisfies StoryObj

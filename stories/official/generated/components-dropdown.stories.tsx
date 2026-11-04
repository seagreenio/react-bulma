import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Dropdown,
  DropdownContent,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Icon,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-dropdown',
      title: 'Dropdown',
      url: 'https://bulma.io/documentation/components/dropdown/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-dropdown',
  title: 'CSS Library/Components/Dropdown',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-dropdown" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Dropdown'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'An interactive '}
          <strong data-official-prose="">{'dropdown menu'}</strong>
          {' for discoverable content'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'dropdown'}</code>
            {
              ' component is a container for a dropdown button and a dropdown menu. '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'dropdown'}</code>
              {' the '}
              <strong data-official-prose="">{'main'}</strong>
              {' container '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'dropdown-trigger'}</code>
                  {' the container for a '}
                  <code data-official-prose="">{'button'}</code>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'dropdown-menu'}</code>
                  {' the toggable menu, '}
                  <strong data-official-prose="">{'hidden'}</strong>
                  {' by default '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'dropdown-content'}</code>
                      {' the dropdown '}
                      <strong data-official-prose="">{'box'}</strong>
                      {', with a white background and a shadow '}
                      <ul data-official-prose="">
                        <li data-official-prose="">
                          <code data-official-prose="">{'dropdown-item'}</code>
                          {' each '}
                          <strong data-official-prose="">
                            {'single item'}
                          </strong>
                          {' of the dropdown, which can either be a '}
                          <code data-official-prose="">{'a'}</code>
                          {' or a '}
                          <code data-official-prose="">{'div'}</code>
                        </li>
                        <li data-official-prose="">
                          <code data-official-prose="">
                            {'dropdown-divider'}
                          </code>
                          {' a '}
                          <strong data-official-prose="">
                            {'horizontal line'}
                          </strong>
                          {' to separate dropdown items '}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div data-official-example="components-dropdown/basic/001">
          <Canvas of={OpenDropdownStory} />
        </div>
        <h3
          data-official-prose=""
          id={'dropdown-content'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Dropdown content '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#dropdown-content'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' While the '}
            <code data-official-prose="">{'dropdown-item'}</code>
            {' can be used as an anchor link '}
            <code data-official-prose="">{'<a>'}</code>
            {', you can also use a '}
            <code data-official-prose="">{'<div>'}</code>
            {' and insert almost '}
            <strong data-official-prose="">{'any type of content'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-dropdown/dropdown-content/001">
          <Canvas of={RichDropdownContentStory} />
        </div>
        <h3
          data-official-prose=""
          id={'hoverable-or-toggable'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Hoverable or Toggable '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#hoverable-or-toggable'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'dropdown'}</code>
            {' component has '}
            <strong data-official-prose="">{'2 additional modifiers'}</strong>
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-hoverable'}</code>
              {': the dropdown will show up when '}
              <strong data-official-prose="">{'hovering'}</strong>
              {' the '}
              <code data-official-prose="">{'dropdown-trigger'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-active'}</code>
              {': the dropdown will show up '}
              <strong data-official-prose="">{'all the time'}</strong>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'message is-success'}>
          <p data-official-prose="" className={'message-body'}>
            {' While the CSS '}
            <code data-official-prose="">{':hover'}</code>
            {' implementation works perfectly, the '}
            <code data-official-prose="">{'is-active'}</code>
            {
              ' class is available for users who want to control the display of the dropdown with '
            }
            <strong data-official-prose="">{'JavaScript'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-dropdown/hoverable-or-toggable/001">
          <Canvas of={ClickToToggleStory} />
        </div>
        <div data-official-example="components-dropdown/hoverable-or-toggable/002">
          <Canvas of={HoverToOpenStory} />
        </div>
        <h3
          data-official-prose=""
          id={'right-aligned'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Right aligned '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#right-aligned'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can add the '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifier to have a '}
            <strong data-official-prose="">{'right-aligned'}</strong>
            {' dropdown. '}
          </p>
        </div>
        <div data-official-example="components-dropdown/right-aligned/001">
          <Canvas of={LeftAlignedDropdownStory} />
        </div>
        <div data-official-example="components-dropdown/right-aligned/002">
          <Canvas of={RightAlignedDropdownStory} />
        </div>
        <h3
          data-official-prose=""
          id={'dropup'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Dropup '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#dropup'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can add the '}
            <code data-official-prose="">{'is-up'}</code>
            {
              ' modifier to have a dropdown menu that appears above the dropdown button. '
            }
          </p>
        </div>
        <div data-official-example="components-dropdown/dropup/001">
          <Canvas of={DropupMenuStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function OpenDropdownDemo() {
  return (
    <>
      <Dropdown defaultOpen>
        <DropdownTrigger aria-haspopup={'true'} aria-controls={'dropdown-menu'}>
          <span>Dropdown button</span>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
          </Icon>
        </DropdownTrigger>
        <DropdownMenu id={'dropdown-menu'} role={'menu'}>
          <DropdownContent>
            <DropdownItem href={'#'} as={'a'}>
              Dropdown item
            </DropdownItem>
            <DropdownItem as={'a'}>Other dropdown item</DropdownItem>
            <DropdownItem href={'#'} active as={'a'}>
              Active dropdown item
            </DropdownItem>
            <DropdownItem href={'#'} as={'a'}>
              Other dropdown item
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href={'#'} as={'a'}>
              With a divider
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

function RichDropdownContentDemo() {
  return (
    <>
      <Dropdown defaultOpen>
        <DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu2'}
        >
          <span>Content</span>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
          </Icon>
        </DropdownTrigger>
        <DropdownMenu id={'dropdown-menu2'} role={'menu'}>
          <DropdownContent>
            <DropdownItem as={'div'}>
              <p>
                You can insert <strong>any type of content</strong> within the
                dropdown menu.
              </p>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem as={'div'}>
              <p>
                You simply need to use a <code>{'<div>'}</code> instead.
              </p>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href={'#'} as={'a'}>
              This is a link
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

function ClickToToggleDemo() {
  return (
    <>
      <Dropdown>
        <DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu3'}
        >
          <span>Click me</span>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
          </Icon>
        </DropdownTrigger>
        <DropdownMenu id={'dropdown-menu3'} role={'menu'}>
          <DropdownContent>
            <DropdownItem href={'#'} as={'a'}>
              Overview
            </DropdownItem>
            <DropdownItem href={'#'} as={'a'}>
              Modifiers
            </DropdownItem>
            <DropdownItem href={'#'} as={'a'}>
              Grid
            </DropdownItem>
            <DropdownItem href={'#'} as={'a'}>
              Form
            </DropdownItem>
            <DropdownItem href={'#'} as={'a'}>
              Elements
            </DropdownItem>
            <DropdownItem href={'#'} as={'a'}>
              Components
            </DropdownItem>
            <DropdownItem href={'#'} as={'a'}>
              Layout
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href={'#'} as={'a'}>
              More
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

function HoverToOpenDemo() {
  return (
    <>
      <Dropdown hoverable>
        <DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu4'}
        >
          <span>Hover me</span>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
          </Icon>
        </DropdownTrigger>
        <DropdownMenu id={'dropdown-menu4'} role={'menu'}>
          <DropdownContent>
            <DropdownItem as={'div'}>
              <p>
                You can insert <strong>any type of content</strong> within the
                dropdown menu.
              </p>
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

function LeftAlignedDropdownDemo() {
  return (
    <>
      <Dropdown defaultOpen>
        <DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu5'}
        >
          <span>Left aligned</span>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
          </Icon>
        </DropdownTrigger>
        <DropdownMenu id={'dropdown-menu5'} role={'menu'}>
          <DropdownContent>
            <DropdownItem as={'div'}>
              <p>
                The dropdown is <strong>left-aligned</strong> by default.
              </p>
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

function RightAlignedDropdownDemo() {
  return (
    <>
      <Dropdown right defaultOpen>
        <DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu6'}
        >
          <span>Right aligned</span>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-angle-down'} />
          </Icon>
        </DropdownTrigger>
        <DropdownMenu id={'dropdown-menu6'} role={'menu'}>
          <DropdownContent>
            <DropdownItem as={'div'}>
              <p>
                Add the <code>{'is-right'}</code> modifier for a{' '}
                <strong>right-aligned</strong> dropdown.
              </p>
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

function DropupMenuDemo() {
  return (
    <>
      <Dropdown up>
        <DropdownTrigger
          aria-haspopup={'true'}
          aria-controls={'dropdown-menu7'}
        >
          <span>Dropup button</span>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-angle-up'} />
          </Icon>
        </DropdownTrigger>
        <DropdownMenu id={'dropdown-menu7'} role={'menu'}>
          <DropdownContent>
            <DropdownItem as={'div'}>
              <p>
                You can add the <code>{'is-up'}</code> modifier to have a
                dropdown menu that appears above the dropdown button.
              </p>
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export const OpenDropdownStory = {
  name: 'Open dropdown',
  parameters: {
    official: { id: 'components-dropdown/basic/001' },
    docs: {
      source: {
        code: "import {\n  Dropdown,\n  DropdownContent,\n  DropdownDivider,\n  DropdownItem,\n  DropdownMenu,\n  DropdownTrigger,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction OpenDropdownDemo() {\n  return (\n    <>\n      <Dropdown defaultOpen>\n        <DropdownTrigger aria-haspopup={'true'} aria-controls={'dropdown-menu'}>\n          <span>Dropdown button</span>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n          </Icon>\n        </DropdownTrigger>\n        <DropdownMenu id={'dropdown-menu'} role={'menu'}>\n          <DropdownContent>\n            <DropdownItem href={'#'} as={'a'}>\n              Dropdown item\n            </DropdownItem>\n            <DropdownItem as={'a'}>Other dropdown item</DropdownItem>\n            <DropdownItem href={'#'} active as={'a'}>\n              Active dropdown item\n            </DropdownItem>\n            <DropdownItem href={'#'} as={'a'}>\n              Other dropdown item\n            </DropdownItem>\n            <DropdownDivider />\n            <DropdownItem href={'#'} as={'a'}>\n              With a divider\n            </DropdownItem>\n          </DropdownContent>\n        </DropdownMenu>\n      </Dropdown>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: OpenDropdownDemo,
} satisfies StoryObj

export const RichDropdownContentStory = {
  name: 'Rich dropdown content',
  parameters: {
    official: { id: 'components-dropdown/dropdown-content/001' },
    docs: {
      source: {
        code: "import {\n  Dropdown,\n  DropdownContent,\n  DropdownDivider,\n  DropdownItem,\n  DropdownMenu,\n  DropdownTrigger,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction RichDropdownContentDemo() {\n  return (\n    <>\n      <Dropdown defaultOpen>\n        <DropdownTrigger\n          aria-haspopup={'true'}\n          aria-controls={'dropdown-menu2'}\n        >\n          <span>Content</span>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n          </Icon>\n        </DropdownTrigger>\n        <DropdownMenu id={'dropdown-menu2'} role={'menu'}>\n          <DropdownContent>\n            <DropdownItem as={'div'}>\n              <p>\n                You can insert <strong>any type of content</strong> within the\n                dropdown menu.\n              </p>\n            </DropdownItem>\n            <DropdownDivider />\n            <DropdownItem as={'div'}>\n              <p>\n                You simply need to use a <code>{'<div>'}</code> instead.\n              </p>\n            </DropdownItem>\n            <DropdownDivider />\n            <DropdownItem href={'#'} as={'a'}>\n              This is a link\n            </DropdownItem>\n          </DropdownContent>\n        </DropdownMenu>\n      </Dropdown>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RichDropdownContentDemo,
} satisfies StoryObj

export const ClickToToggleStory = {
  name: 'Click to toggle',
  parameters: {
    official: { id: 'components-dropdown/hoverable-or-toggable/001' },
    docs: {
      source: {
        code: "import {\n  Dropdown,\n  DropdownContent,\n  DropdownDivider,\n  DropdownItem,\n  DropdownMenu,\n  DropdownTrigger,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction ClickToToggleDemo() {\n  return (\n    <>\n      <Dropdown>\n        <DropdownTrigger\n          aria-haspopup={'true'}\n          aria-controls={'dropdown-menu3'}\n        >\n          <span>Click me</span>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n          </Icon>\n        </DropdownTrigger>\n        <DropdownMenu id={'dropdown-menu3'} role={'menu'}>\n          <DropdownContent>\n            <DropdownItem href={'#'} as={'a'}>\n              Overview\n            </DropdownItem>\n            <DropdownItem href={'#'} as={'a'}>\n              Modifiers\n            </DropdownItem>\n            <DropdownItem href={'#'} as={'a'}>\n              Grid\n            </DropdownItem>\n            <DropdownItem href={'#'} as={'a'}>\n              Form\n            </DropdownItem>\n            <DropdownItem href={'#'} as={'a'}>\n              Elements\n            </DropdownItem>\n            <DropdownItem href={'#'} as={'a'}>\n              Components\n            </DropdownItem>\n            <DropdownItem href={'#'} as={'a'}>\n              Layout\n            </DropdownItem>\n            <DropdownDivider />\n            <DropdownItem href={'#'} as={'a'}>\n              More\n            </DropdownItem>\n          </DropdownContent>\n        </DropdownMenu>\n      </Dropdown>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ClickToToggleDemo,
} satisfies StoryObj

export const HoverToOpenStory = {
  name: 'Hover to open',
  parameters: {
    official: { id: 'components-dropdown/hoverable-or-toggable/002' },
    docs: {
      source: {
        code: "import {\n  Dropdown,\n  DropdownContent,\n  DropdownItem,\n  DropdownMenu,\n  DropdownTrigger,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction HoverToOpenDemo() {\n  return (\n    <>\n      <Dropdown hoverable>\n        <DropdownTrigger\n          aria-haspopup={'true'}\n          aria-controls={'dropdown-menu4'}\n        >\n          <span>Hover me</span>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n          </Icon>\n        </DropdownTrigger>\n        <DropdownMenu id={'dropdown-menu4'} role={'menu'}>\n          <DropdownContent>\n            <DropdownItem as={'div'}>\n              <p>\n                You can insert <strong>any type of content</strong> within the\n                dropdown menu.\n              </p>\n            </DropdownItem>\n          </DropdownContent>\n        </DropdownMenu>\n      </Dropdown>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HoverToOpenDemo,
} satisfies StoryObj

export const LeftAlignedDropdownStory = {
  name: 'Left-aligned dropdown',
  parameters: {
    official: { id: 'components-dropdown/right-aligned/001' },
    docs: {
      source: {
        code: "import {\n  Dropdown,\n  DropdownContent,\n  DropdownItem,\n  DropdownMenu,\n  DropdownTrigger,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction LeftAlignedDropdownDemo() {\n  return (\n    <>\n      <Dropdown defaultOpen>\n        <DropdownTrigger\n          aria-haspopup={'true'}\n          aria-controls={'dropdown-menu5'}\n        >\n          <span>Left aligned</span>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n          </Icon>\n        </DropdownTrigger>\n        <DropdownMenu id={'dropdown-menu5'} role={'menu'}>\n          <DropdownContent>\n            <DropdownItem as={'div'}>\n              <p>\n                The dropdown is <strong>left-aligned</strong> by default.\n              </p>\n            </DropdownItem>\n          </DropdownContent>\n        </DropdownMenu>\n      </Dropdown>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LeftAlignedDropdownDemo,
} satisfies StoryObj

export const RightAlignedDropdownStory = {
  name: 'Right-aligned dropdown',
  parameters: {
    official: { id: 'components-dropdown/right-aligned/002' },
    docs: {
      source: {
        code: "import {\n  Dropdown,\n  DropdownContent,\n  DropdownItem,\n  DropdownMenu,\n  DropdownTrigger,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction RightAlignedDropdownDemo() {\n  return (\n    <>\n      <Dropdown right defaultOpen>\n        <DropdownTrigger\n          aria-haspopup={'true'}\n          aria-controls={'dropdown-menu6'}\n        >\n          <span>Right aligned</span>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n          </Icon>\n        </DropdownTrigger>\n        <DropdownMenu id={'dropdown-menu6'} role={'menu'}>\n          <DropdownContent>\n            <DropdownItem as={'div'}>\n              <p>\n                Add the <code>{'is-right'}</code> modifier for a{' '}\n                <strong>right-aligned</strong> dropdown.\n              </p>\n            </DropdownItem>\n          </DropdownContent>\n        </DropdownMenu>\n      </Dropdown>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RightAlignedDropdownDemo,
} satisfies StoryObj

export const DropupMenuStory = {
  name: 'Dropup menu',
  parameters: {
    official: { id: 'components-dropdown/dropup/001' },
    docs: {
      source: {
        code: "import {\n  Dropdown,\n  DropdownContent,\n  DropdownItem,\n  DropdownMenu,\n  DropdownTrigger,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction DropupMenuDemo() {\n  return (\n    <>\n      <Dropdown up>\n        <DropdownTrigger\n          aria-haspopup={'true'}\n          aria-controls={'dropdown-menu7'}\n        >\n          <span>Dropup button</span>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-angle-up'} />\n          </Icon>\n        </DropdownTrigger>\n        <DropdownMenu id={'dropdown-menu7'} role={'menu'}>\n          <DropdownContent>\n            <DropdownItem as={'div'}>\n              <p>\n                You can add the <code>{'is-up'}</code> modifier to have a\n                dropdown menu that appears above the dropdown button.\n              </p>\n            </DropdownItem>\n          </DropdownContent>\n        </DropdownMenu>\n      </Dropdown>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DropupMenuDemo,
} satisfies StoryObj

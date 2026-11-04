import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Menu, MenuItem, MenuLabel, MenuList } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-menu',
      title: 'Menu',
      url: 'https://bulma.io/documentation/components/menu/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-menu',
  title: 'CSS Library/Components/Menu',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-menu" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Menu'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A simple '}
          <strong data-official-prose="">{'menu'}</strong>
          {', for any type of vertical navigation'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <code data-official-prose="">{'menu'}</code>
            {' is a vertical navigation component that comprises: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {'the '}
              <code data-official-prose="">{'menu'}</code>
              {' container'}
            </li>
            <li data-official-prose="">
              {'informative '}
              <code data-official-prose="">{'menu-label'}</code>
              {' labels'}
            </li>
            <li data-official-prose="">
              {' interactive '}
              <code data-official-prose="">{'menu-list'}</code>
              {' lists that can be nested up to 2 levels '}
            </li>
          </ul>
        </div>
        <div data-official-example="components-menu/basic/001">
          <Canvas of={NestedNavigationMenuStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function NestedNavigationMenuDemo() {
  return (
    <>
      <Menu>
        <MenuLabel>General</MenuLabel>
        <MenuList>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Customers</MenuItem>
        </MenuList>
        <MenuLabel>Administration</MenuLabel>
        <MenuList>
          <MenuItem>Team Settings</MenuItem>
          <MenuItem
            active
            nested={
              <>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </>
            }
          >
            Manage Your Team
          </MenuItem>
          <MenuItem>Invitations</MenuItem>
          <MenuItem>Cloud Storage Environment Settings</MenuItem>
          <MenuItem>Authentication</MenuItem>
        </MenuList>
        <MenuLabel>Transactions</MenuLabel>
        <MenuList>
          <MenuItem>Payments</MenuItem>
          <MenuItem>Transfers</MenuItem>
          <MenuItem>Balance</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export const NestedNavigationMenuStory = {
  name: 'Nested navigation menu',
  parameters: {
    official: { id: 'components-menu/basic/001' },
    docs: {
      source: {
        code: "import { Menu, MenuItem, MenuLabel, MenuList } from '@seagreenio/react-bulma'\n\nfunction NestedNavigationMenuDemo() {\n  return (\n    <>\n      <Menu>\n        <MenuLabel>General</MenuLabel>\n        <MenuList>\n          <MenuItem>Dashboard</MenuItem>\n          <MenuItem>Customers</MenuItem>\n        </MenuList>\n        <MenuLabel>Administration</MenuLabel>\n        <MenuList>\n          <MenuItem>Team Settings</MenuItem>\n          <MenuItem\n            active\n            nested={\n              <>\n                <ul>\n                  <li>\n                    <a>Members</a>\n                  </li>\n                  <li>\n                    <a>Plugins</a>\n                  </li>\n                  <li>\n                    <a>Add a member</a>\n                  </li>\n                </ul>\n              </>\n            }\n          >\n            Manage Your Team\n          </MenuItem>\n          <MenuItem>Invitations</MenuItem>\n          <MenuItem>Cloud Storage Environment Settings</MenuItem>\n          <MenuItem>Authentication</MenuItem>\n        </MenuList>\n        <MenuLabel>Transactions</MenuLabel>\n        <MenuList>\n          <MenuItem>Payments</MenuItem>\n          <MenuItem>Transfers</MenuItem>\n          <MenuItem>Balance</MenuItem>\n        </MenuList>\n      </Menu>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NestedNavigationMenuDemo,
} satisfies StoryObj

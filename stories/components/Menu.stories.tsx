import { Menu, MenuLabel, MenuList } from '../..'

import React from 'react'

export default {
  title: 'Components/Menu',
  component: Menu,
}

export const Default = () => (
  <Menu style={{ width: 540 }}>
    <MenuLabel>General</MenuLabel>
    <MenuList>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Customers</a>
      </li>
    </MenuList>
    <MenuLabel>Administration</MenuLabel>
    <MenuList>
      <li>
        <a>Team Settings</a>
      </li>
      <li>
        <a className="is-active">Manage Your Team</a>
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
      </li>
      <li>
        <a>Invitations</a>
      </li>
      <li>
        <a>Cloud Storage Environment Settings</a>
      </li>
      <li>
        <a>Authentication</a>
      </li>
    </MenuList>
    <MenuLabel>Transactions</MenuLabel>
    <MenuList>
      <li>
        <a>Payments</a>
      </li>
      <li>
        <a>Transfers</a>
      </li>
      <li>
        <a>Balance</a>
      </li>
    </MenuList>
  </Menu>
)

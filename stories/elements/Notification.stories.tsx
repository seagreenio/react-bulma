import React from 'react'

import { Delete, Notification } from '../..'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

export default {
  title: 'Elements/Notification',
  component: Notification,
}

export const Default = () => (
  <Notification>
    <Delete />
    {text}
  </Notification>
)

export const Colors = () => (
  <>
    <Notification color="primary">
      <Delete />
      {text}
    </Notification>
    <Notification color="link">
      <Delete />
      {text}
    </Notification>
    <Notification color="info">
      <Delete />
      {text}
    </Notification>
    <Notification color="success">
      <Delete />
      {text}
    </Notification>
    <Notification color="warning">
      <Delete />
      {text}
    </Notification>
    <Notification color="danger">
      <Delete />
      {text}
    </Notification>
  </>
)

export const LightColors = () => (
  <>
    <Notification color="primary" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="link" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="info" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="success" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="warning" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="danger" light>
      <Delete />
      {text}
    </Notification>
  </>
)

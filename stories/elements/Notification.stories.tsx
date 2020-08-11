import { Box, Delete, Notification } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est laborum.
`

export default {
  title: 'Notification',
  component: Notification,
  decorators: [centered],
}

export const Default = () => (
  <Box style={{ width: 540 }}>
    <Notification>
      <Delete />
      {text}
    </Notification>
  </Box>
)

export const Colors = () => (
  <Box style={{ width: 540 }}>
    <Notification color="white">
      <Delete />
      {text}
    </Notification>
    <Notification color="light">
      <Delete />
      {text}
    </Notification>
    <Notification color="dark">
      <Delete />
      {text}
    </Notification>
    <Notification color="black">
      <Delete />
      {text}
    </Notification>
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
    <Notification color="warning">
      <Delete />
      {text}
    </Notification>
    <Notification color="danger">
      <Delete />
      {text}
    </Notification>
  </Box>
)

export const LightColors = () => (
  <Box style={{ width: 540 }}>
    <Notification color="white" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="light" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="dark" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="black" light>
      <Delete />
      {text}
    </Notification>
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
    <Notification color="warning" light>
      <Delete />
      {text}
    </Notification>
    <Notification color="danger" light>
      <Delete />
      {text}
    </Notification>
  </Box>
)

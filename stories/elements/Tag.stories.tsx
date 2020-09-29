import { Box, Tag, Tags } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

export default {
  title: 'Elements/Tag',
  component: Tag,
  decorators: [centered],
}

export const Default = () => <Tag>Tag</Tag>

export const As = () => <Tag as="a">As an anchor</Tag>

export const Colors = () => (
  <Tags>
    <Tag color="white">White</Tag>
    <Tag color="light">Light</Tag>
    <Tag color="dark">Dark</Tag>
    <Tag color="black">Black</Tag>
    <Tag color="text">Black</Tag>
    <Tag color="primary">Primary</Tag>
    <Tag color="link">Link</Tag>
    <Tag color="info">Info</Tag>
    <Tag color="warning">Warning</Tag>
    <Tag color="danger">Danger</Tag>
  </Tags>
)

export const LightColors = () => (
  <Tags>
    <Tag color="primary" light>
      Primary
    </Tag>
    <Tag color="link" light>
      Link
    </Tag>
    <Tag color="info" light>
      Info
    </Tag>
    <Tag color="warning" light>
      Warning
    </Tag>
    <Tag color="danger" light>
      Danger
    </Tag>
  </Tags>
)

export const Sizes = () => (
  <>
    <Tags>
      <Tag size="normal" color="link">
        Normal
      </Tag>
      <Tag size="medium" color="primary">
        Medium
      </Tag>
      <Tag size="large" color="info">
        Large
      </Tag>
    </Tags>

    <Tags size="medium">
      <Tag>All</Tag>
      <Tag>Medium</Tag>
      <Tag>Size</Tag>
    </Tags>

    <Tags size="large">
      <Tag>All</Tag>
      <Tag>Large</Tag>
      <Tag>Size</Tag>
    </Tags>

    <Tags>
      <Tag>Normal</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag>Normal</Tag>
      <Tag size="large">Large</Tag>
      <Tag>Normal</Tag>
    </Tags>
  </>
)

export const Rounded = () => (
  <Tags>
    <Tag rounded>Rounded</Tag>
    <Tag color="primary" rounded>
      Rounded
    </Tag>
    <Tag color="link" rounded>
      Rounded
    </Tag>
    <Tag color="info" rounded>
      Rounded
    </Tag>
    <Tag color="success" rounded>
      Rounded
    </Tag>
    <Tag color="danger" rounded>
      Rounded
    </Tag>
  </Tags>
)

export const Delete = () => (
  <Tags>
    <Tag delete />
  </Tags>
)

export const ListOfTags = () => (
  <Box style={{ width: 540 }}>
    <Tags>
      <Tag>One</Tag>
      <Tag>Two</Tag>
      <Tag>Three</Tag>
      <Tag>Four</Tag>
      <Tag>Five</Tag>
      <Tag>Six</Tag>
      <Tag>Seven</Tag>
      <Tag>Eight</Tag>
      <Tag>Nine</Tag>
      <Tag>Ten</Tag>
      <Tag>Eleven</Tag>
      <Tag>Twelve</Tag>
      <Tag>Thirteen</Tag>
      <Tag>Fourteen</Tag>
      <Tag>Fifteen</Tag>
      <Tag>Sixteen</Tag>
      <Tag>Seventeen</Tag>
      <Tag>Eighteen</Tag>
      <Tag>Nineteen</Tag>
      <Tag>Twenty</Tag>
    </Tags>
  </Box>
)

export const Addons = () => (
  <Tags addons>
    <Tag>Package</Tag>
    <Tag color="primary">Bulma</Tag>
  </Tags>
)

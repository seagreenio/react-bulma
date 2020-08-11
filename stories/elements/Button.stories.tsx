import { Box, BoxProps, Button, Buttons, withColor } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const ColorBox = withColor<BoxProps>(Box)

export default {
  title: 'Button',
  component: Button,
  decorators: [centered],
}

export const Default = () => <Button>Button</Button>

export const As = () => <Button as="a">As an anchor</Button>

export const Colors = () => (
  <Buttons>
    <Button color="white">White</Button>
    <Button color="light">Light</Button>
    <Button color="dark">Dark</Button>
    <Button color="black">Black</Button>
    <Button color="primary">Primary</Button>
    <Button color="link">Link</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
  </Buttons>
)

export const LightColors = () => (
  <Buttons>
    <Button color="primary" light>
      Primary
    </Button>
    <Button color="link" light>
      Link
    </Button>
    <Button color="info" light>
      Info
    </Button>
    <Button color="warning" light>
      Warning
    </Button>
    <Button color="danger" light>
      Danger
    </Button>
  </Buttons>
)

export const Sizes = () => (
  <Buttons>
    <Button size="small">Small</Button>
    <Button>Default</Button>
    <Button size="normal">Normal</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </Buttons>
)

export const ButtonsSizes = () => (
  <>
    <Buttons size="medium">
      <Button>All</Button>
      <Button>Medium</Button>
      <Button>Size</Button>
    </Buttons>
    <Buttons size="small">
      <Button>Small</Button>
      <Button>Small</Button>
      <Button>Small</Button>
      <Button size="normal">Normal</Button>
      <Button>Small</Button>
    </Buttons>
  </>
)

export const Fullwidth = () => (
  <Buttons>
    <Button size="small" fullwidth>
      Small
    </Button>
    <Button size="normal" fullwidth>
      Normal
    </Button>
    <Button size="medium" fullwidth>
      Medium
    </Button>
    <Button size="large" fullwidth>
      Large
    </Button>
  </Buttons>
)

export const Outlined = () => (
  <Buttons>
    <Button color="primary" outlined>
      Primary
    </Button>
    <Button color="link" outlined>
      Link
    </Button>
    <Button color="info" outlined>
      Info
    </Button>
    <Button color="warning" outlined>
      Warning
    </Button>
    <Button color="danger" outlined>
      Danger
    </Button>
  </Buttons>
)

export const Inverted = () => (
  <Buttons>
    <Button color="primary" inverted>
      Primary
    </Button>
    <Button color="link" inverted>
      Link
    </Button>
    <Button color="info" inverted>
      Info
    </Button>
    <Button color="warning" inverted>
      Warning
    </Button>
    <Button color="danger" inverted>
      Danger
    </Button>
  </Buttons>
)

export const InvertOutlined = () => (
  <ColorBox hasBackground="primary">
    <Buttons>
      <Button color="primary" inverted outlined>
        Primary
      </Button>
      <Button color="link" inverted outlined>
        Link
      </Button>
      <Button color="info" inverted outlined>
        Info
      </Button>
      <Button color="warning" inverted outlined>
        Warning
      </Button>
      <Button color="danger" inverted outlined>
        Danger
      </Button>
    </Buttons>
  </ColorBox>
)

export const Rounded = () => (
  <Buttons>
    <Button rounded>Rounded</Button>
    <Button color="primary" rounded>
      Rounded
    </Button>
    <Button color="link" rounded>
      Rounded
    </Button>
    <Button color="info" rounded>
      Rounded
    </Button>
    <Button color="success" rounded>
      Rounded
    </Button>
    <Button color="danger" rounded>
      Rounded
    </Button>
  </Buttons>
)

export const States = () => (
  <Buttons>
    <Button>Normal</Button>
    <Button hovered>Hovered</Button>
    <Button focused>Focused</Button>
    <Button active>Active</Button>
  </Buttons>
)

export const Loading = () => (
  <Buttons>
    <Button loading>Loading</Button>
    <Button color="primary" loading>
      Loading
    </Button>
    <Button color="link" loading>
      Loading
    </Button>
    <Button color="info" loading>
      Loading
    </Button>
    <Button color="success" loading>
      Loading
    </Button>
    <Button color="warning" loading>
      Loading
    </Button>
    <Button color="danger" loading>
      Loading
    </Button>
  </Buttons>
)

export const Static = () => <Button static>Static</Button>

export const Disabled = () => (
  <Buttons>
    <Button disabled>Disabled</Button>
    <Button color="primary" disabled>
      Disabled
    </Button>
    <Button color="link" disabled>
      Disabled
    </Button>
    <Button color="info" disabled>
      Disabled
    </Button>
    <Button color="success" disabled>
      Disabled
    </Button>
    <Button color="warning" disabled>
      Disabled
    </Button>
    <Button color="danger" disabled>
      Disabled
    </Button>
  </Buttons>
)

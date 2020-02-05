import React from 'react'
import { Box, BoxProps, Button, Buttons, withColorHelpers } from '..'
import centered from '@storybook/addon-centered/react'

const ColorBox = withColorHelpers<BoxProps>(Box)

export default {
  title: 'Button',
  component: Button,
  decorators: [centered],
}

export const Default = () => <Button>Button</Button>

export const As = () => <Button as="a">As a tag</Button>

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

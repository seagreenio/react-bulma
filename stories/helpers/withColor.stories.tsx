import { Box, BoxProps, withColor } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const ColorBox = withColor<BoxProps>(Box)

export default {
  title: 'Helpers/withColor',
  component: ColorBox,
  decorators: [centered],
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 540,
  height: 380,
}

export const HasText = () => (
  <ColorBox style={style} hasText="primary">
    has-text-primary
  </ColorBox>
)

export const HasBackground = () => (
  <ColorBox style={style} hasText="white" hasBackground="primary">
    has-background-primary
  </ColorBox>
)

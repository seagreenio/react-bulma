import { Box, BoxProps, withColor } from '../..'

import React from 'react'

const ColorBox = withColor<BoxProps>(Box)

export default {
  title: 'Helpers/withColor',
  component: ColorBox,
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

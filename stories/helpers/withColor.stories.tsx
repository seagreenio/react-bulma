import React from 'react'

import { Box, BoxProps, withColor } from '../..'

const ColorBox = withColor<BoxProps>(Box)

export default {
  title: 'Helpers/withColor',
  component: withColor,
}

export const TextColor = () => <ColorBox hasText="primary">has-text-primary</ColorBox>

export const BackgroundColor = () => <ColorBox hasBackground="primary">has-background-primary</ColorBox>

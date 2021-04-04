import { Box, BoxProps, withColor } from '../..'

import React from 'react'

const ColorBox = withColor<BoxProps>(Box)

export default {
  title: 'Helpers/withColor',
  component: withColor,
}

export const TextColor = () => <ColorBox hasText="primary">has-text-primary</ColorBox>

export const BackgroundColor = () => <ColorBox hasBackground="primary">has-background-primary</ColorBox>

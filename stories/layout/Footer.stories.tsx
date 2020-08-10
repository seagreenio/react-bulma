import { Footer, FooterProps, withColor } from '../..'

import React from 'react'

const ColorFooter = withColor<FooterProps>(Footer)

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default {
  title: 'Footer',
  component: Footer,
}

export const Default = () => (
  <ColorFooter style={style} hasText="white" hasBackground="grey">
    This is a Footer
  </ColorFooter>
)

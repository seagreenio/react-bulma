import React from 'react'

import { Hero, Subtitle, Title } from '../..'

export default {
  title: 'Layout/Hero',
  component: Hero,
}

export const Default = () => (
  <Hero>
    <Hero body>
      <Title as="p">Hero title</Title>
      <Subtitle as="p">Hero subtitle</Subtitle>
    </Hero>
  </Hero>
)

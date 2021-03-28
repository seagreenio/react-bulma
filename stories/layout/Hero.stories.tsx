import { Hero, Subtitle, Title } from '../..'

import React from 'react'

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

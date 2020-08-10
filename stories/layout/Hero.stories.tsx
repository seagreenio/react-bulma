import { Hero, Container } from '../..'

import React from 'react'

export default {
  title: 'Hero',
  component: Hero,
}

export const Default = () => (
  <Hero color="primary" size="fullheight" bold>
    <Hero body>
      <Container>
        <h1 className="title">Primary bold title</h1>
        <h2 className="subtitle">Primary bold subtitle</h2>
      </Container>
    </Hero>
  </Hero>
)

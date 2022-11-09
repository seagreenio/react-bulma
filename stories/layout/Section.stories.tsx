import React from 'react'

import { Section, Subtitle, Title } from '../..'

export default {
  title: 'Layout/Section',
  component: Section,
}

export const Default = () => (
  <Section>
    <Title as="h1">Section</Title>
    <Subtitle as="h2">
      A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
    </Subtitle>
  </Section>
)

export const Sizes = () => (
  <>
    <Section size="medium">
      <Title as="h1">Medium Section</Title>
      <Subtitle as="h2">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
      </Subtitle>
    </Section>
    <Section size="large">
      <Title as="h1">Large Section</Title>
      <Subtitle as="h2">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
      </Subtitle>
    </Section>
  </>
)

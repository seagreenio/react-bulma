import { Content, Section } from '../..'

import React from 'react'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est laborum.
`

export default {
  title: 'Elements/Content',
  component: Content,
}

export const Default = () => (
  <Section>
    <Content>{text}</Content>
  </Section>
)

export const Sizes = () => (
  <Section>
    <Content size="small">{text}</Content>
    <Content size="medium">{text}</Content>
    <Content size="large">{text}</Content>
  </Section>
)

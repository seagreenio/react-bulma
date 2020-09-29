import { Container, ContainerProps, Section, withColor } from '../..'

import React from 'react'

const ColorContainer = withColor<ContainerProps>(Container)

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '64px',
}

export default {
  title: 'Layout/Container',
  component: Container,
}

export const Default = () => (
  <Section>
    <ColorContainer style={style} hasText="white" hasBackground="info">
      This is a Container
    </ColorContainer>
  </Section>
)

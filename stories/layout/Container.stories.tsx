import { Container } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

export default {
  title: 'Container',
  component: Container,
  decorators: [centered],
}

export const Default = () => <Container>Container</Container>

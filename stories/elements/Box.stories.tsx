import { Box } from '../..'
import React from 'react'
import centered from '@storybook/addon-centered/react'

export default {
  title: 'Box',
  component: Box,
  decorators: [centered],
}

export const Default = () => (
  <Box
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 540,
      height: 380,
    }}
  >
    Box
  </Box>
)

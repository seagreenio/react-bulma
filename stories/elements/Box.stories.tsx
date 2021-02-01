import { Box } from '../..'
import React from 'react'

export default {
  title: 'Elements/Box',
  component: Box,
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

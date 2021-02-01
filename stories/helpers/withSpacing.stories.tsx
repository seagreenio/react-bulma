import { Box, BoxProps, withSpacing } from '../..'

import React from 'react'

const SpacingBox = withSpacing<BoxProps>(Box)

export default {
  title: 'Helpers/withSpacing',
  component: SpacingBox,
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 540,
  height: 380,
}

export const marginTop6 = () => (
  <SpacingBox style={style} mt={6}>
    margin-top-6
  </SpacingBox>
)

export const paddingTop6 = () => (
  <SpacingBox style={style} pt={6}>
    padding-top-6
  </SpacingBox>
)

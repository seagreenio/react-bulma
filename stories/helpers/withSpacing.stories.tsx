import { Box, BoxProps, withSpacing } from '../..'

import React from 'react'

const SpacingBox = withSpacing<BoxProps>(Box)

export default {
  title: 'Helpers/withSpacing',
  component: withSpacing,
}

export const marginTop6 = () => <SpacingBox mt={6}>margin-top-6</SpacingBox>

export const paddingTop6 = () => <SpacingBox pt={6}>padding-top-6</SpacingBox>

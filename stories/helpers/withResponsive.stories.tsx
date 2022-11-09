import React from 'react'

import { Box, BoxProps, withResponsive } from '../..'

const ResponsiveBox = withResponsive<BoxProps>(Box)

export default {
  title: 'Helpers/withResponsive',
  component: withResponsive,
}

export const IsFlex = () => <ResponsiveBox isFlex>is-flex</ResponsiveBox>

import { Box, BoxProps, withResponsive } from '../..'

import React from 'react'

const ResponsiveBox = withResponsive<BoxProps>(Box)

export default {
  title: 'Helpers/withResponsive',
  component: withResponsive,
}

export const IsFlex = () => <ResponsiveBox isFlex>is-flex</ResponsiveBox>

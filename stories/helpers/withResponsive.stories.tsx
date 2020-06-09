import { Box, BoxProps, withResponsiveHelpers } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const ResponsiveBox = withResponsiveHelpers<BoxProps>(Box)

export default {
  title: 'withResponsiveHelpers',
  component: ResponsiveBox,
  decorators: [centered],
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 540,
  height: 380,
}

export const IsFlex = () => (
  <ResponsiveBox style={style} isFlex>
    is-flex
  </ResponsiveBox>
)

export const IsFlexMobile = () => (
  <ResponsiveBox style={style} isFlex="mobile">
    is-flex-mobile
  </ResponsiveBox>
)
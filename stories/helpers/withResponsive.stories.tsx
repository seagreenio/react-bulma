import { Box, BoxProps, withResponsive } from '../..'

import React from 'react'

const ResponsiveBox = withResponsive<BoxProps>(Box)

export default {
  title: 'Helpers/withResponsive',
  component: ResponsiveBox,
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

export const Invisible = () => (
  <ResponsiveBox style={style} invisible>
    is-invisible
  </ResponsiveBox>
)

export const Hidden = () => (
  <ResponsiveBox style={style} hidden>
    is-hidden
  </ResponsiveBox>
)
export const SrOnly = () => (
  <ResponsiveBox style={style} srOnly>
    is-sr-only
  </ResponsiveBox>
)

import { Box, BoxProps, withNormalHelpers } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const NormalBox = withNormalHelpers<BoxProps>(Box)

export default {
  title: 'withNormalHelpers',
  component: NormalBox,
  decorators: [centered],
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 540,
  height: 380,
}

export const Clearfix = () => (
  <NormalBox style={style} clearfix>
    is-clearfix
  </NormalBox>
)

export const PulledLeft = () => (
  <NormalBox style={style} pulled="left">
    is-pulled-left
  </NormalBox>
)

export const PulledRight = () => (
  <NormalBox style={style} pulled="right">
    is-pulled-right
  </NormalBox>
)

export const Marginless = () => (
  <NormalBox style={style} marginless>
    is-marginless
  </NormalBox>
)

export const Paddingless = () => (
  <NormalBox style={style} paddingless>
    is-paddingless
  </NormalBox>
)

export const Overlay = () => (
  <NormalBox style={style} overlay>
    is-overlay
  </NormalBox>
)

export const Clipped = () => (
  <NormalBox style={style} clipped>
    is-overlay
  </NormalBox>
)

export const Radiusless = () => (
  <NormalBox style={style} radiusless>
    is-radiusless
  </NormalBox>
)

export const Shadowless = () => (
  <NormalBox style={style} shadowless>
    is-shadowless
  </NormalBox>
)

export const Unselectable = () => (
  <NormalBox style={style} bulmaUnselectable>
    is-unselectable
  </NormalBox>
)

export const Invisible = () => (
  <NormalBox style={style} invisible>
    is-invisible
  </NormalBox>
)

export const Hidden = () => (
  <NormalBox style={style} hidden>
    is-hidden
  </NormalBox>
)
export const SrOnly = () => (
  <NormalBox style={style} srOnly>
    is-sr-only
  </NormalBox>
)

export const Relative = () => (
  <NormalBox style={style} relative>
    is-relative
  </NormalBox>
)

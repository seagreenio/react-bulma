import { Box, BoxProps, withOther } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const OtherBox = withOther<BoxProps>(Box)

export default {
  title: 'Helpers/withOther',
  component: OtherBox,
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
  <OtherBox style={style} clearfix>
    is-clearfix
  </OtherBox>
)

export const PulledLeft = () => (
  <OtherBox style={style} pulled="left">
    is-pulled-left
  </OtherBox>
)

export const PulledRight = () => (
  <OtherBox style={style} pulled="right">
    is-pulled-right
  </OtherBox>
)

export const Overlay = () => (
  <OtherBox style={style} overlay>
    is-overlay
  </OtherBox>
)

export const Clipped = () => (
  <OtherBox style={style} clipped>
    is-overlay
  </OtherBox>
)

export const Radiusless = () => (
  <OtherBox style={style} radiusless>
    is-radiusless
  </OtherBox>
)

export const Shadowless = () => (
  <OtherBox style={style} shadowless>
    is-shadowless
  </OtherBox>
)

export const Unselectable = () => (
  <OtherBox style={style} bulmaUnselectable>
    is-unselectable
  </OtherBox>
)

export const Relative = () => (
  <OtherBox style={style} relative>
    is-relative
  </OtherBox>
)

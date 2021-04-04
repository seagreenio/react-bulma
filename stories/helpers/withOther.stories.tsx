import { Box, BoxProps, withOther } from '../..'

import React from 'react'

const OtherBox = withOther<BoxProps>(Box)

export default {
  title: 'Helpers/withOther',
  component: withOther,
}

export const Clearfix = () => <OtherBox clearfix>is-clearfix</OtherBox>

export const PulledLeft = () => <OtherBox pulled="left">is-pulled-left</OtherBox>

export const PulledRight = () => <OtherBox pulled="right">is-pulled-right</OtherBox>

export const Overlay = () => <OtherBox overlay>is-overlay</OtherBox>

export const Clipped = () => <OtherBox clipped>is-clipped</OtherBox>

export const Radiusless = () => <OtherBox radiusless>is-radiusless</OtherBox>

export const Shadowless = () => <OtherBox shadowless>is-shadowless</OtherBox>

export const Unselectable = () => <OtherBox bulmaUnselectable>is-unselectable</OtherBox>

export const Clickable = () => <OtherBox clickable>is-clickable</OtherBox>

export const Relative = () => <OtherBox relative>is-relative</OtherBox>

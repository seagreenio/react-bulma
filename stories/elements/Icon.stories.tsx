import { Icon, IconProps, withColor } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const ColorIcon = withColor<IconProps>(Icon)

export default {
  title: 'Elements/Icon',
  component: Icon,
  decorators: [centered],
}

export const Default = () => <Icon name="fab fa-react" />

export const Colors = () => (
  <>
    <ColorIcon name="fa fa-info-circle" hasText="info" />
    <ColorIcon name="fa fa-check-square" hasText="success" />
    <ColorIcon name="fa fa-exclamation-triangle" hasText="warning" />
    <ColorIcon name="fa fa-ban" hasText="danger" />
  </>
)

export const Sizes = () => (
  <>
    <Icon name="fab fa-react" size="small" />
    <Icon name="fab fa-lg fa-react" />
    <Icon name="fab fa-2x fa-react" size="medium" />
    <Icon name="fab fa-3x fa-react" size="large" />
  </>
)

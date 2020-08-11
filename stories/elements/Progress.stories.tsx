import { Progress } from '../..'
import React from 'react'
import centered from '@storybook/addon-centered/react'

export default {
  title: 'Progress',
  component: Progress,
  decorators: [centered],
}

export const Default = () => (
  <Progress value={15} max={100}>
    15%
  </Progress>
)

export const Colors = () => (
  <>
    <Progress color="primary" value={15} max={100}>
      15%
    </Progress>
    <Progress color="link" value={30} max={100}>
      30%
    </Progress>
    <Progress color="info" value={45} max={100}>
      45%
    </Progress>
    <Progress color="success" value={60} max={100}>
      60%
    </Progress>
    <Progress color="warning" value={75} max={100}>
      75%
    </Progress>
    <Progress color="danger" value={90} max={100}>
      90%
    </Progress>
  </>
)

export const Sizes = () => (
  <>
    <Progress size="small" value={15} max={100}>
      15%
    </Progress>
    <Progress value={30} max={100}>
      30%
    </Progress>
    <Progress size="medium" value={45} max={100}>
      45%
    </Progress>
    <Progress size="large" value={60} max={100}>
      60%
    </Progress>
  </>
)

export const Indeterminate = () => <Progress color="primary" max={100} />

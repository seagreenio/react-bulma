import React from 'react'

import { Progress } from '../..'

export default {
  title: 'Elements/Progress',
  component: Progress,
}

export const Default = () => <Progress value={15} max={100} />

export const Colors = () => (
  <>
    <Progress color="primary" value={15} max={100} />
    <Progress color="link" value={30} max={100} />
    <Progress color="info" value={45} max={100} />
    <Progress color="success" value={60} max={100} />
    <Progress color="warning" value={75} max={100} />
    <Progress color="danger" value={90} max={100} />
  </>
)

export const Sizes = () => (
  <>
    <Progress size="small" value={15} max={100} />
    <Progress value={30} max={100} />
    <Progress size="medium" value={45} max={100} />
    <Progress size="large" value={60} max={100} />
  </>
)

export const Indeterminate = () => <Progress color="primary" max={100} />

import { Delete } from '../..'
import React from 'react'
import centered from '@storybook/addon-centered/react'

export default {
  title: 'Delete',
  component: Delete,
  decorators: [centered],
}

export const Default = () => <Delete />

export const Sizes = () => (
  <>
    <Delete size="small" />
    <Delete />
    <Delete size="medium" />
    <Delete size="large" />
  </>
)

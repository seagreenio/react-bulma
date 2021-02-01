import { Delete } from '../..'
import React from 'react'

export default {
  title: 'Elements/Delete',
  component: Delete,
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

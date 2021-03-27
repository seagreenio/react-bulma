import { Control, Field, Input } from '../..'

import React from 'react'

export default {
  title: 'Form/Field',
  component: Field,
}

export const Default = () => (
  <Field label="Label" help="This is a help text">
    <Control>
      <Input placeholder="Text input" />
    </Control>
  </Field>
)

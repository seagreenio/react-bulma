import { Checkbox, Field } from '../..'

import React from 'react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
}

export const Default = () => (
  <>
    <Field>
      <Checkbox> Remember me</Checkbox>
    </Field>
    <Field>
      <Checkbox>
        {' '}
        I agree to the <a href="#">terms and conditions</a>
      </Checkbox>
    </Field>
    <Field>
      <Checkbox disabled labelProps={{ disabled: true }}>
        {' '}
        Save my preferences
      </Checkbox>
    </Field>
  </>
)

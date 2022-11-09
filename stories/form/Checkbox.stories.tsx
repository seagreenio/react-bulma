import React from 'react'

import { Checkbox, Field } from '../..'

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

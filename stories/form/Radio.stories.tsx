import { Control, Radio } from '../..'

import React from 'react'

export default {
  title: 'Form/Radio',
  component: Radio,
}

export const Default = () => (
  <>
    <Control>
      <Radio name="answer">Yes</Radio>
      <Radio name="answer">No</Radio>
    </Control>
    <Control>
      <Radio name="foobar" checked>
        Foo
      </Radio>
      <Radio name="foobar">Bar</Radio>
    </Control>
    <Control>
      <Radio name="rsvp">Going</Radio>
      <Radio name="rsvp">Not going</Radio>
      <Radio name="rsvp" disabled labelProps={{ disabled: true }}>
        Maybe
      </Radio>
    </Control>
  </>
)

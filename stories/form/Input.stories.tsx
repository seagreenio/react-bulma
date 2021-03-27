import { Control, Field, Icon, Input } from '../..'
import { colors, sizes, toTitleCase } from '../utils/common'

import React from 'react'

export default {
  title: 'Form/Input',
  component: Input,
}

export const Default = () => <Input placeholder="Text input" />

export const Colors = () => (
  <>
    {colors.map((d) => (
      <Field key={d}>
        <Input placeholder={`${toTitleCase(d)} input`} color={d} />
      </Field>
    ))}
  </>
)

export const Sizes = () => (
  <>
    {sizes.map((d) => (
      <Field key={d}>
        <Input placeholder={`${toTitleCase(d)} input`} size={d} />
      </Field>
    ))}
  </>
)

export const Styles = () => <Input placeholder="Rounded input" rounded />

export const States = () => (
  <>
    <Field label="Normal">
      <Control>
        <Input placeholder="Normal input" />
      </Control>
    </Field>
    <Field label="Hover">
      <Control>
        <Input placeholder="Hovered input" hovered />
      </Control>
    </Field>
    <Field label="Focus">
      <Control>
        <Input placeholder="Focused input" focused />
      </Control>
    </Field>
    <Field label="Loading">
      <Control loading>
        <Input placeholder="Loading input" />
      </Control>
    </Field>
    {sizes.map((d) => (
      <Field key={d}>
        <Control size={d} loading>
          <Input placeholder={`${toTitleCase(d)} loading input`} size={d} />
        </Control>
      </Field>
    ))}
    <Field label="Disable">
      <Control>
        <Input placeholder="Disabled input" disabled />
      </Control>
    </Field>
    <Field label="Readonly and static inputs">
      <Control>
        <Input value="This text is readonly" readOnly />
      </Control>
    </Field>
    <Field label="From" labelSize="normal" horizontal>
      <Control>
        <Input type="email" value="me@example.com" readOnly static />
      </Control>
    </Field>
    <Field label="To" labelSize="normal" horizontal>
      <Control>
        <Input type="email" placeholder="Recipient email" />
      </Control>
    </Field>
  </>
)

export const WithFontAwesome = () => (
  <>
    <Field>
      <Control hasIcons="all">
        <Input type="email" placeholder="Email" />
        <Icon name="fas fa-envelope" size="small" alignment="left" />
        <Icon name="fa fa-check" size="small" alignment="right" />
      </Control>
    </Field>
    <Field>
      <Control hasIcons="left">
        <Input type="password" placeholder="Password" />
        <Icon name="fas fa-lock" size="small" alignment="left" />
      </Control>
    </Field>
    {sizes.map((d) => (
      <Field key={d}>
        <Control hasIcons="all">
          <Input type="email" placeholder="Email" size={d} />
          <Icon name="fas fa-envelope" size="small" alignment="left" />
          <Icon name="fa fa-check" size="small" alignment="right" />
        </Control>
      </Field>
    ))}
  </>
)

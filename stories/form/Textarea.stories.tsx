import React from 'react'

import { Control, Field, Textarea } from '../..'
import { colors, sizes, toTitleCase } from '../utils/common'

export default {
  title: 'Form/Textarea',
  component: Textarea,
}

export const Default = () => (
  <>
    <Field>
      <Textarea placeholder="e.g. Hello world" />
    </Field>
    <Field>
      <Textarea placeholder="10 lines of textarea" rows="10" />
    </Field>
  </>
)

export const Colors = () => (
  <>
    {colors.map((d) => (
      <Field key={d}>
        <Textarea placeholder={`${toTitleCase(d)} textarea`} color={d} />
      </Field>
    ))}
  </>
)

export const Sizes = () => (
  <>
    {sizes.map((d) => (
      <Field key={d}>
        <Textarea placeholder={`${toTitleCase(d)} textarea`} size={d} />
      </Field>
    ))}
  </>
)

export const States = () => (
  <>
    <Field label="Normal">
      <Control>
        <Textarea placeholder="Normal textarea" />
      </Control>
    </Field>
    <Field label="Hover">
      <Control>
        <Textarea placeholder="Hovered textarea" hovered />
      </Control>
    </Field>
    <Field label="Focus">
      <Control>
        <Textarea placeholder="Focused textarea" focused />
      </Control>
    </Field>
    <Field label="Loading">
      <Control loading>
        <Textarea placeholder="Loading textarea" />
      </Control>
    </Field>
    {sizes.map((d) => (
      <Field key={d}>
        <Control size={d} loading>
          <Textarea placeholder={`${toTitleCase(d)} loading textarea`} size={d} />
        </Control>
      </Field>
    ))}
    <Field label="Disable">
      <Control>
        <Textarea placeholder="Disabled Textarea" disabled />
      </Control>
    </Field>
    <Field label="Readonly">
      <Control>
        <Textarea readOnly>This content is readonly</Textarea>
      </Control>
    </Field>
    <Field label="Fixed Size">
      <Control>
        <Textarea placeholder="Fixed size textarea" fixed />
      </Control>
    </Field>
  </>
)

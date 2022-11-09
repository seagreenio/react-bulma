import React, { useState } from 'react'

import { Field, File, Icon } from '../..'
import { colors, sizes, toTitleCase } from '../utils/common'

export default {
  title: 'Form/File',
  component: File,
}

export const Default = () => <File icon={<Icon name="fas fa-upload" />}>Choose a file…</File>

export const Modifiers = () => (
  <>
    <Field>
      <File icon={<Icon name="fas fa-upload" />} hasName="Screen Shot 2017-07-29 at 15.54.25.png">
        Choose a file…
      </File>
    </Field>
    <Field>
      <File icon={<Icon name="fas fa-upload" />} hasName="Screen Shot 2017-07-29 at 15.54.25.png" fullwidth>
        Choose a file…
      </File>
    </Field>
    <Field>
      <File icon={<Icon name="fas fa-upload" />} boxed>
        Choose a file…
      </File>
    </Field>
    <Field>
      <File icon={<Icon name="fas fa-upload" />} hasName="Screen Shot 2017-07-29 at 15.54.25.png" boxed>
        Choose a file…
      </File>
    </Field>
  </>
)

export const Colors = () => (
  <>
    {colors.map((d) => (
      <Field key={d}>
        <File icon={<Icon name="fas fa-upload" />} color={d}>
          {toTitleCase(d)} file…
        </File>
      </Field>
    ))}
  </>
)

export const Sizes = () => (
  <>
    {sizes.map((d) => (
      <Field key={d}>
        <File icon={<Icon name="fas fa-upload" />} size={d}>
          {toTitleCase(d)} file…
        </File>
      </Field>
    ))}
  </>
)

export const Alignment = () => (
  <>
    <Field>
      <File
        icon={<Icon name="fas fa-upload" />}
        hasName="Screen Shot 2017-07-29 at 15.54.25.png"
        color="success"
        alignment="centered"
        boxed
      >
        Centered file…
      </File>
    </Field>
    <Field>
      <File
        icon={<Icon name="fas fa-upload" />}
        hasName="Screen Shot 2017-07-29 at 15.54.25.png"
        color="info"
        alignment="right"
      >
        Right file…
      </File>
    </Field>
  </>
)

export const JavaScript = () => {
  const [name, setName] = useState('No file uploaded')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.files[0].name)
  }

  return (
    <File icon={<Icon name="fas fa-upload" />} hasName={name} onChange={onChange}>
      Choose a file…
    </File>
  )
}

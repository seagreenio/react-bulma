import React from 'react'

import { Control, Field, Icon, Select } from '../..'
import { SizeType } from '../../dist/types/Size'
import { colors, sizes } from '../utils/common'

export default {
  title: 'Form/Select',
  component: Select,
}

export const Default = () => (
  <Select>
    <option>Select dropdown</option>
    <option>With options</option>
  </Select>
)

export const Multiple = () => (
  <Select multiple selectProps={{ multiple: true, size: 8 }}>
    <option value="Argentina">Argentina</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Brazil">Brazil</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Guyana">Guyana</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Suriname">Suriname</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Venezuela">Venezuela</option>
  </Select>
)

export const Colors = () => (
  <>
    {colors.map((d) => (
      <Field key={d}>
        <Select color={d}>
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
      </Field>
    ))}
  </>
)

export const Styles = () => (
  <Select rounded>
    <option>Rounded dropdown</option>
    <option>With options</option>
  </Select>
)

export const Sizes = () => (
  <>
    {sizes.map((d) => (
      <Field key={d}>
        <Select size={d}>
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
      </Field>
    ))}
  </>
)

export const States = () => (
  <>
    <Field label="Normal">
      <Select>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field label="Hover">
      <Select hovered>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field label="Focus">
      <Select focused>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field label="Loading">
      <Select loading>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </>
)

export const WithIcons = () => (
  <>
    <Field>
      <Control hasIcons="left">
        <Select>
          <option selected>Country</option>
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
        <Icon name="fas fa-globe" alignment="left" />
      </Control>
    </Field>
    {sizes.map((d) => (
      <Field key={d}>
        <Control hasIcons="left">
          <Select size={d}>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </Select>
          <Icon name="fas fa-globe" size={d as SizeType} alignment="left" />
        </Control>
      </Field>
    ))}
  </>
)

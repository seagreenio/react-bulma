import { Section, SectionProps, withColor } from '../..'

import React from 'react'

const ColorSection = withColor<SectionProps>(Section)

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default {
  title: 'Section',
  component: Section,
}

export const Default = () => (
  <ColorSection style={style} hasText="white" hasBackground="info">
    This is a Section
  </ColorSection>
)

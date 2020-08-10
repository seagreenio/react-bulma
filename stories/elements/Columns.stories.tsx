import { Section, Column, Columns, withColor } from '../..'

import React from 'react'

const ColorP = withColor('p')

export default {
  title: 'Columns',
  component: Columns,
}

const colorPProps = {
  hasBackground: 'primary' as 'primary',
  hasText: 'white' as 'white',
}

export const Default = () => {
  const style = { padding: '0.5rem 1rem' }

  return (
    <Section>
      <Columns style={{ textAlign: 'center' }}>
        <Column>
          <ColorP style={style} {...colorPProps}>
            First column
          </ColorP>
        </Column>
        <Column>
          <ColorP style={style} {...colorPProps}>
            Second column
          </ColorP>
        </Column>
        <Column>
          <ColorP style={style} {...colorPProps}>
            Third column
          </ColorP>
        </Column>
        <Column>
          <ColorP style={style} {...colorPProps}>
            Fourth column
          </ColorP>
        </Column>
      </Columns>
    </Section>
  )
}

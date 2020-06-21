import { Column, Columns, withColor } from '..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const ColorP = withColor('p')

export default {
  title: 'Columns',
  component: Columns,
  decorators: [centered],
}

const colorPProps = {
  hasBackground: 'primary' as 'primary',
  hasText: 'white' as 'white',
}

export const Default = () => {
  const style = { padding: '0.5rem 1rem' }

  return (
    <Columns style={{ width: '60vw', textAlign: 'center' }}>
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
  )
}

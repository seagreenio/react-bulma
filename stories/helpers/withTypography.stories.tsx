import { Box, BoxProps, withTypography } from '../..'

import React from 'react'

const TypographyBox = withTypography<BoxProps>(Box)

export default {
  title: 'Helpers/withTypography',
  component: withTypography,
  argTypes: {
    isSize: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6, 7],
    },
    textAlignment: {
      control: {
        type: 'select',
      },
      options: ['centered', 'justified', 'left', 'right'],
    },
    textTransformation: {
      control: {
        type: 'select',
      },
      options: ['capitalized', 'lowercase', 'uppercase', 'italic'],
    },
    textWeight: {
      control: {
        type: 'select',
      },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    isFamily: {
      control: {
        type: 'select',
      },
      options: ['sans-serif', 'monospace', 'primary', 'secondary', 'code'],
    },
  },
  args: {
    isSize: 3,
    textAlignment: 'left',
    textTransformation: 'capitalized',
    textWeight: 'normal',
    isFamily: 'sans-serif',
  },
}

export const Default = (args) => (
  <TypographyBox {...args}>
    <p>is-size-{args.isSize}</p>
    <p>has-text-{args.textAlignment}</p>
    <p>is-{args.textTransformation}</p>
    <p>has-text-weight-{args.textWeight}</p>
    <p>is-family-{args.isFamily}</p>
  </TypographyBox>
)

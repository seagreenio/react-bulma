import {
  Box,
  BoxProps,
  Button,
  Buttons,
  Column,
  Columns,
  Section,
  Subtitle,
  Title,
  withColor,
  withColorProps,
  withTypography,
} from '../..'
import React, { useState } from 'react'

const TypographyColorBox = withTypography<withColorProps>(withColor<BoxProps>(Box))
const ColumnBox: React.FC = ({ children }) => (
  <TypographyColorBox hasBackground="primary" hasText="white" textAlignment="centered" textWeight="bold">
    {children}
  </TypographyColorBox>
)

export default {
  title: 'Columns/Columns',
  component: Columns,
}

export const Basics = () => (
  <Section>
    <Columns>
      {['First', 'Second', 'Third', 'Fourth'].map((d) => (
        <Column key={d}>
          <ColumnBox>{d} column</ColumnBox>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const Sizes = () => (
  <Section>
    {[...Array(12).keys()]
      .map((d) => d + 1)
      .map((d) => (
        <Columns key={d}>
          <Column size={d}>
            <ColumnBox>is-{d}</ColumnBox>
          </Column>
        </Columns>
      ))}
  </Section>
)

export const Offset = () => (
  <Section>
    <Columns>
      <Column size={6} offset={3}>
        <ColumnBox>is-6 is-offset-3</ColumnBox>
      </Column>
    </Columns>
    <Columns>
      <Column size={4} offset={8}>
        <ColumnBox>is-4 is-offset-8</ColumnBox>
      </Column>
    </Columns>
    <Columns>
      <Column size={11} offset={1}>
        <ColumnBox>is-11 is-offset-1</ColumnBox>
      </Column>
    </Columns>
  </Section>
)

export const Narrow = () => (
  <Section>
    <Columns>
      <Column narrow>
        <Box style={{ width: 200 }}>
          <Title size={5}>Narrow column</Title>
          <Subtitle>This column is only 200px wide.</Subtitle>
        </Box>
      </Column>
      <Column>
        <Box>
          <Title size={5}>Flexible column</Title>
          <Subtitle>This column will take up the remaining space available.</Subtitle>
        </Box>
      </Column>
    </Columns>
  </Section>
)

export const Mobile = () => (
  <Section>
    <Columns mobiled>
      {[1, 2, 3, 4].map((d) => (
        <Column key={d}>
          <ColumnBox>{d}</ColumnBox>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const Desktop = () => (
  <Section>
    <Columns desktoped>
      {[1, 2, 3, 4].map((d) => (
        <Column key={d}>
          <ColumnBox>{d}</ColumnBox>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const DifferentColumnSizesPerBreakpoint = () => (
  <Section>
    <Columns mobiled>
      <Column mobile={9} tablet={8} desktop={6} widescreen={4} fullhd={3}>
        <ColumnBox>
          <code>is-mobile-9</code>
          <br />
          <code>is-tablet-8</code>
          <br />
          <code>is-desktop-6</code>
          <br />
          <code>is-widescreen-4</code>
          <br />
          <code>is-fullhd-3</code>
        </ColumnBox>
      </Column>
      <Column>
        <ColumnBox>2</ColumnBox>
      </Column>
      <Column>
        <ColumnBox>3</ColumnBox>
      </Column>
      <Column>
        <ColumnBox>4</ColumnBox>
      </Column>
      <Column>
        <ColumnBox>5</ColumnBox>
      </Column>
    </Columns>
  </Section>
)

export const Gapless = () => (
  <Section>
    <Columns gapless>
      {[1, 2, 3, 4].map((d) => (
        <Column key={d}>
          <ColumnBox>No gap</ColumnBox>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const VariableGap = () => {
  const [gap, setGap] = useState(3)

  const handleChangeGap = (d: number) => () => setGap(d)

  return (
    <Section>
      <Buttons size="small">
        {[...Array(9).keys()].map((d) => (
          <Button key={d} onMouseEnter={handleChangeGap(d)}>
            is-{d}
          </Button>
        ))}
      </Buttons>
      <Columns gap={gap}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
          <Column key={d}>
            <ColumnBox>{d}</ColumnBox>
          </Column>
        ))}
      </Columns>
    </Section>
  )
}

export const BreakpointBasedColumnGaps = () => (
  <Section>
    <Columns mobile={1} desktop={3} widescreen={8} fullhd={2}>
      {[...Array(6).keys()].map((d) => (
        <Column key={d}>
          <ColumnBox>Column</ColumnBox>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const VerticalAlignment = () => (
  <Section>
    <Columns vcentered>
      <Column size={8}>
        <ColumnBox>First column</ColumnBox>
      </Column>
      <Column>
        <ColumnBox>Second column with more content. This is so you can see the vertical alignment.</ColumnBox>
      </Column>
    </Columns>
  </Section>
)

export const Multiline = () => (
  <Section>
    <Columns multiline>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
        <Column key={d} size={4}>
          <ColumnBox>{d}</ColumnBox>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const Centered = () => (
  <Section>
    <Columns centered>
      <Column size={6}>
        <ColumnBox>is-6</ColumnBox>
      </Column>
    </Columns>
  </Section>
)

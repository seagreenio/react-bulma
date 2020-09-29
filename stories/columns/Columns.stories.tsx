import {
  Box,
  Button,
  Buttons,
  Column,
  Columns,
  Section,
  Subtitle,
  Title,
  withColor,
  withTypography,
} from '../..'
import React, { useState } from 'react'

const ColorBox = withColor(Box)
const TypographyP = withTypography('p')
const P = (props) => (
  <ColorBox
    style={{ padding: '0.5rem 1rem' }}
    hasBackground="primary"
    hasText="white"
  >
    <TypographyP hasText="centered">{props.children}</TypographyP>
  </ColorBox>
)

export default {
  title: 'Columns/Columns',
  component: Columns,
}

export const Default = () => {
  return (
    <Section>
      <Columns>
        {['First', 'Second', 'Third', 'Fourth'].map((d) => (
          <Column key={d}>
            <P>{d} column</P>
          </Column>
        ))}
      </Columns>
    </Section>
  )
}

export const Size = () => (
  <Section>
    {[...Array(12).keys()]
      .map((d) => d + 1)
      .map((d) => (
        <Columns key={d}>
          <Column size={d}>
            <P>is-{d}</P>
          </Column>
        </Columns>
      ))}
  </Section>
)

export const Offset = () => (
  <Section>
    <Columns>
      <Column size={6} offset={3}>
        <P>is-6 is-offset-3</P>
      </Column>
    </Columns>
    <Columns>
      <Column size={4} offset={8}>
        <P>is-4 is-offset-8</P>
      </Column>
    </Columns>
    <Columns>
      <Column size={11} offset={1}>
        <P>is-11 is-offset-1</P>
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
          <Subtitle>
            This column will take up the remaining space available.
          </Subtitle>
        </Box>
      </Column>
    </Columns>
  </Section>
)

export const Mobile = () => (
  <Section>
    <Columns mobile>
      {[1, 2, 3, 4].map((d) => (
        <Column key={d}>
          <P>{d}</P>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const Desktop = () => (
  <Section>
    <Columns desktop>
      {[1, 2, 3, 4].map((d) => (
        <Column key={d}>
          <P>{d}</P>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const DifferentColumnSizesPerBreakpoint = () => (
  <Section>
    <Columns mobile>
      <Column mobile={9} tablet={8} desktop={6} widescreen={4} fullhd={3}>
        <P>1</P>
      </Column>
      <Column>
        <P>2</P>
      </Column>
      <Column>
        <P>3</P>
      </Column>
      <Column>
        <P>4</P>
      </Column>
      <Column>
        <P>5</P>
      </Column>
    </Columns>
  </Section>
)

export const Gapless = () => (
  <Section>
    <Columns gapless>
      {[1, 2, 3, 4].map((d) => (
        <Column key={d}>
          <P>No gap</P>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const Multiline = () => (
  <Section>
    <Columns multiline>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
        <Column key={d} size={4}>
          <P>{d}</P>
        </Column>
      ))}
    </Columns>
  </Section>
)

export const Gap = () => {
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
            <P>{d}</P>
          </Column>
        ))}
      </Columns>
    </Section>
  )
}

export const VCentered = () => (
  <Section>
    <Columns vcentered>
      <Column size={8}>
        <P>First column</P>
      </Column>
      <Column>
        <P>
          Second column with more content. This is so you can see the vertical
          alignment.
        </P>
      </Column>
    </Columns>
  </Section>
)

export const Centered = () => (
  <Section>
    <Columns centered>
      <Column size={6}>
        <P>is-6</P>
      </Column>
    </Columns>
  </Section>
)

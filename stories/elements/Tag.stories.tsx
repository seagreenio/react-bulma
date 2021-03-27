import { Control, Delete, Field, Tag, Tags } from '../..'

import React from 'react'

export default {
  title: 'Elements/Tag',
  component: Tag,
}

export const Default = () => <Tag>Tag label</Tag>

export const Colors = () => (
  <>
    <Tags>
      <Tag color="black">Black</Tag>
      <Tag color="dark">Dark</Tag>
      <Tag color="light">Light</Tag>
      <Tag color="white">White</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="link">Link</Tag>
      <Tag color="info">Info</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="danger">Danger</Tag>
    </Tags>
    <Tags>
      <Tag color="primary" light>
        Primary
      </Tag>
      <Tag color="link" light>
        Link
      </Tag>
      <Tag color="info" light>
        Info
      </Tag>
      <Tag color="success" light>
        Success
      </Tag>
      <Tag color="warning" light>
        Warning
      </Tag>
      <Tag color="danger" light>
        Danger
      </Tag>
    </Tags>
  </>
)

export const Sizes = () => (
  <>
    <Tags>
      <Tag size="normal" color="link">
        Normal
      </Tag>
      <Tag size="medium" color="primary">
        Medium
      </Tag>
      <Tag size="large" color="info">
        Large
      </Tag>
    </Tags>

    <Tags size="medium">
      <Tag>All</Tag>
      <Tag>Medium</Tag>
      <Tag>Size</Tag>
    </Tags>

    <Tags size="large">
      <Tag>All</Tag>
      <Tag>Large</Tag>
      <Tag>Size</Tag>
    </Tags>

    <Tags>
      <Tag size="medium">Medium</Tag>
      <Tag>Normal</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="large">Large</Tag>
      <Tag size="medium">Medium</Tag>
    </Tags>
  </>
)

export const Modifiers = () => (
  <>
    <Tags>
      <Tag rounded>Rounded</Tag>
    </Tags>
    <Tags>
      <Tag delete />
    </Tags>
  </>
)

export const Combinations = () => (
  <>
    <Tags>
      <Tag color="success">
        Bar
        <Delete size="small" />
      </Tag>
      <Tag color="warning" size="medium">
        Hello
        <Delete size="small" />
      </Tag>
      <Tag color="danger" size="large">
        World
        <Delete size="small" />
      </Tag>
    </Tags>
  </>
)

export const ListOfTags = () => (
  <>
    <Tags>
      <Tag>One</Tag>
      <Tag>Two</Tag>
      <Tag>Three</Tag>
    </Tags>
    <Tags>
      <Tag>One</Tag>
      <Tag>Two</Tag>
      <Tag>Three</Tag>
      <Tag>Four</Tag>
      <Tag>Five</Tag>
      <Tag>Six</Tag>
      <Tag>Seven</Tag>
      <Tag>Eight</Tag>
      <Tag>Nine</Tag>
      <Tag>Ten</Tag>
      <Tag>Eleven</Tag>
      <Tag>Twelve</Tag>
      <Tag>Thirteen</Tag>
      <Tag>Fourteen</Tag>
      <Tag>Fifteen</Tag>
      <Tag>Sixteen</Tag>
      <Tag>Seventeen</Tag>
      <Tag>Eighteen</Tag>
      <Tag>Nineteen</Tag>
      <Tag>Twenty</Tag>
    </Tags>
  </>
)

export const Addons = () => (
  <>
    <Tags addons>
      <Tag>Package</Tag>
      <Tag color="primary">Bulma</Tag>
    </Tags>
    <Tags addons>
      <Tag color="danger">Alex Smith</Tag>
      <Tag as="a" delete />
    </Tags>
    <Field grouped groupedMultiline>
      <Control>
        <Tags addons>
          <Tag color="dark">npm</Tag>
          <Tag color="info">0.9.1</Tag>
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="dark">build</Tag>
          <Tag color="success">passing</Tag>
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="dark">chat</Tag>
          <Tag color="primary">on gitter</Tag>
        </Tags>
      </Control>
    </Field>
    <Field grouped groupedMultiline>
      <Control>
        <Tags addons>
          <Tag color="link">Technology</Tag>
          <Tag delete />
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="link">CSS</Tag>
          <Tag delete />
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="link">Flexbox</Tag>
          <Tag delete />
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="link">Web Design</Tag>
          <Tag delete />
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="link">Open Source</Tag>
          <Tag delete />
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="link">Community</Tag>
          <Tag delete />
        </Tags>
      </Control>
      <Control>
        <Tags addons>
          <Tag color="link">Documentation</Tag>
          <Tag delete />
        </Tags>
      </Control>
    </Field>
  </>
)

import React from 'react'

import { Subtitle, Title } from '../..'

export default {
  title: 'Elements/Title',
  component: Title,
}

export const Default = () => (
  <>
    <Title as="h1">Title</Title>
    <Subtitle as="h2">SubTitle</Subtitle>
  </>
)

export const Sizes = () => (
  <>
    <Title as="h1">Title 1</Title>
    <Title as="h2">Title 2</Title>
    <Title as="h3">Title 3 (default size)</Title>
    <Title as="h4">Title 4</Title>
    <Title as="h5">Title 5</Title>
    <Title as="h6">Title 6</Title>

    <Subtitle as="h1">Subtitle 1</Subtitle>
    <Subtitle as="h2">Subtitle 2</Subtitle>
    <Subtitle as="h3">Subtitle 3</Subtitle>
    <Subtitle as="h4">Subtitle 4</Subtitle>
    <Subtitle as="h5">Subtitle 5 (default size)</Subtitle>
    <Subtitle as="h6">Subtitle 6</Subtitle>
  </>
)

export const spaced = () => (
  <>
    <Title as="h1" spaced>
      Title 1
    </Title>
    <Subtitle as="h3">Subtitle 3</Subtitle>
    <Title as="h2" spaced>
      Title 2
    </Title>
    <Subtitle as="h4">Subtitle 4</Subtitle>
    <Title spaced>Title 3</Title>
    <Subtitle>Subtitle 5</Subtitle>
  </>
)

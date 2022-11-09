import React, { useState } from 'react'

import { Icon, Tab, Tabs } from '../..'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

export const Default = () => {
  const [active, setActive] = useState('Pictures')

  return (
    <Tabs>
      {['Pictures', 'Music', 'Videos', 'Documents'].map((d) => (
        <Tab key={d} active={active === d} onClick={() => setActive(d)}>
          {d}
        </Tab>
      ))}
    </Tabs>
  )
}

export const Alignment = () => (
  <>
    <Tabs alignment="centered">
      <Tab active>Pictures</Tab>
      <Tab>Music</Tab>
      <Tab>Videos</Tab>
      <Tab>Documents</Tab>
    </Tabs>
    <Tabs alignment="right">
      <Tab active>Pictures</Tab>
      <Tab>Music</Tab>
      <Tab>Videos</Tab>
      <Tab>Documents</Tab>
    </Tabs>
  </>
)

export const Icons = () => (
  <Tabs alignment="centered">
    <Tab active>
      <Icon name="fas fa-image" size="small" />
      Pictures
    </Tab>
    <Tab>
      <Icon name="fas fa-music" size="small" />
      Music
    </Tab>
    <Tab>
      <Icon name="fas fa-file" size="small" />
      Videos
    </Tab>
    <Tab>
      <Icon name="fas fa-file-alt" size="small" />
      Documents
    </Tab>
  </Tabs>
)

export const Sizes = () => {
  const Inside = () => (
    <>
      <Tab active>Pictures</Tab>
      <Tab>Music</Tab>
      <Tab>Videos</Tab>
      <Tab>Documents</Tab>
    </>
  )

  return (
    <>
      <Tabs size="small">
        <Inside />
      </Tabs>
      <Tabs size="medium">
        <Inside />
      </Tabs>
      <Tabs size="large">
        <Inside />
      </Tabs>
    </>
  )
}

export const Styles = () => {
  const Inside = () => (
    <>
      <Tab active>
        <Icon name="fas fa-image" size="small" />
        Pictures
      </Tab>
      <Tab>
        <Icon name="fas fa-music" size="small" />
        Music
      </Tab>
      <Tab>
        <Icon name="fas fa-file" size="small" />
        Videos
      </Tab>
      <Tab>
        <Icon name="fas fa-file-alt" size="small" />
        Documents
      </Tab>
    </>
  )

  return (
    <>
      <Tabs boxed>
        <Inside />
      </Tabs>
      <Tabs toggle>
        <Inside />
      </Tabs>
      <Tabs toggleRounded>
        <Inside />
      </Tabs>
      <Tabs fullwidth>
        <Tab>
          <Icon name="fas fa-angle-left" />
          Left
        </Tab>
        <Tab>
          <Icon name="fas fa-angle-up" />
          Up
        </Tab>
        <Tab>
          <Icon name="fas fa-angle-right" />
          Right
        </Tab>
      </Tabs>
    </>
  )
}

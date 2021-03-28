import { Level, LevelProps, withTypography } from '../..'

import React from 'react'

const TypographyLevel = withTypography<LevelProps>(Level)

export default {
  title: 'Layout/Level',
  component: Level,
}

export const Default = () => (
  <Level>
    <TypographyLevel item hasText="centered">
      <div>
        <p className="heading">Tweets</p>
        <p className="title">3,456</p>
      </div>
    </TypographyLevel>
    <TypographyLevel item hasText="centered">
      <div>
        <p className="heading">Following</p>
        <p className="title">123</p>
      </div>
    </TypographyLevel>
    <TypographyLevel item hasText="centered">
      <div>
        <p className="heading">Followers</p>
        <p className="title">456K</p>
      </div>
    </TypographyLevel>
    <TypographyLevel item hasText="centered">
      <div>
        <p className="heading">Likes</p>
        <p className="title">789</p>
      </div>
    </TypographyLevel>
  </Level>
)

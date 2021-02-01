import { Block, Image } from '../..'

import React from 'react'

export default {
  title: 'Elements/Image',
  component: Image,
}

export const Default = () => <Image src="https://fakeimg.pl/128/" size={128} />

export const FixedSquareImages = () => (
  <>
    <Block>
      <Image src="https://fakeimg.pl/16/" size={16} />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/24/" size={24} />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/32/" size={32} />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/48/" size={48} />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/64/" size={64} />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/96/" size={96} />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/128/" size={128} />
    </Block>
  </>
)

export const RoundedImages = () => (
  <Image src="https://fakeimg.pl/128/" size={128} rounded />
)

export const RetinaImages = () => (
  <Image src="https://fakeimg.pl/256/" size={128} />
)

export const ResponsiveImagesWithRatios = () => (
  <div style={{ width: 128 }}>
    <Block>
      <Image src="https://fakeimg.pl/480/" square />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/480/" by="1by1" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/600x480/" by="5by4" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/600x480/" by="4by3" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/480x320/" by="3by2" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/800x480/" by="5by3" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/640x360/" by="16by9" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/640x320/" by="2by1" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/720x240/" by="3by1" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/480x600/" by="4by5" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/480x640/" by="3by4" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/320x480/" by="2by3" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/480x800/" by="3by5" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/360x640/" by="9by16" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/320x640/" by="1by2" />
    </Block>
    <Block>
      <Image src="https://fakeimg.pl/240x720/" by="1by3" />
    </Block>
  </div>
)

export const ArbitraryRatiosWithAnyElement = () => (
  <Image by="16by9">
    <iframe
      className="has-ratio"
      width="640"
      height="360"
      src="https://www.youtube.com/embed/yI-8QHpGIP4"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    />
  </Image>
)

import { Box, Image } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

export default {
  title: 'Elements/Image',
  component: Image,
  decorators: [centered],
}

export const Default = () => <Image src="https://fakeimg.pl/256/" />

export const FixedSquareImages = () => (
  <>
    <Image src="https://fakeimg.pl/16/" size={16} />
    <Image src="https://fakeimg.pl/24/" size={24} />
    <Image src="https://fakeimg.pl/32/" size={32} />
    <Image src="https://fakeimg.pl/48/" size={48} />
    <Image src="https://fakeimg.pl/64/" size={64} />
    <Image src="https://fakeimg.pl/96/" size={96} />
    <Image src="https://fakeimg.pl/128/" size={128} />
  </>
)

export const Rounded = () => <Image src="https://fakeimg.pl/256/" rounded />

export const ResponsiveImagesWithRatios = () => (
  <Box style={{ width: 256 }}>
    <Image src="https://fakeimg.pl/256/" square />
    <Image src="https://fakeimg.pl/256/" by="1by1" />
    <Image src="https://fakeimg.pl/600x480/" by="5by4" />
  </Box>
)

export const ArbitraryRatiosWithAnyElement = () => (
  <Box style={{ width: 640 }}>
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
  </Box>
)

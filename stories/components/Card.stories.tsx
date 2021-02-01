import { Card, CardContent, CardImage, Content, Image, Media, Subtitle, Title } from '../..'

import React from 'react'

export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = () => (
  <Card style={{ width: 540 }}>
    <CardImage>
      <Image src="https://bulma.io/images/placeholders/1280x960.png" by="4by3" alt="Placeholder image" />
    </CardImage>
    <CardContent>
      <Media>
        <Media left>
          <Image src="https://bulma.io/images/placeholders/96x96.png" size={48} alt="Placeholder image" />
        </Media>
        <Media content>
          <Title as="p" size={4}>
            John Smith
          </Title>
          <Subtitle as="p" size={6}>
            @johnsmith
          </Subtitle>
        </Media>
      </Media>

      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </CardContent>
  </Card>
)

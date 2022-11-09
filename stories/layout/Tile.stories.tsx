import React from 'react'

import { Content, Image, Notification, Subtitle, Tile, Title } from '../..'
import { text } from '../utils/common'

export default {
  title: 'Layout/Tile',
  component: Tile,
}

export const Default = () => (
  <Tile ancestor>
    <Tile vertical size={8}>
      <Tile>
        <Tile parent vertical>
          <Tile as="article" child>
            <Notification color="primary" style={{ height: '100%' }}>
              <Title as="p">Vertical...</Title>
              <Subtitle as="p">Top tile</Subtitle>
            </Notification>
          </Tile>
          <Tile as="article" child>
            <Notification color="warning" style={{ height: '100%' }}>
              <Title as="p">...tiles</Title>
              <Subtitle as="p">Bottom tile</Subtitle>
            </Notification>
          </Tile>
        </Tile>
        <Tile parent vertical>
          <Tile as="article" child>
            <Notification color="info">
              <Title as="p">Middle tile</Title>
              <Subtitle as="p">With an image</Subtitle>
              <Image by="4x3" src="https://bulma.io/images/placeholders/640x480.png" />
            </Notification>
          </Tile>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile as="article" child>
          <Notification color="danger" style={{ height: '100%' }}>
            <Title as="p">Wide tile</Title>
            <Subtitle as="p">Aligned with the right tile</Subtitle>
            <Content>{text}</Content>
          </Notification>
        </Tile>
      </Tile>
    </Tile>
    <Tile parent>
      <Tile as="article" child>
        <Notification color="success" style={{ height: '100%' }}>
          <Content>
            <Title as="p">Tail tile</Title>
            <Subtitle as="p">With even more content</Subtitle>
            <Content>{text}</Content>
          </Content>
        </Notification>
      </Tile>
    </Tile>
  </Tile>
)

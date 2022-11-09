import React from 'react'

import { Block, Container, Notification } from '../..'

export default {
  title: 'Layout/Container',
  component: Container,
}

export const Default = () => (
  <Container>
    <Notification color="primary">
      This container is <strong>centered</strong> on desktop and larger viewports.
    </Notification>
  </Container>
)

export const WidescreenOrFullHDOnly = () => (
  <>
    <Container breakpoint="widescreen">
      <Notification color="primary">
        This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
      </Notification>
    </Container>
    <Block />
    <Container breakpoint="fullhd">
      <Notification color="primary">
        This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
      </Notification>
    </Container>
  </>
)

export const DesktopAndWidescreenMaximumWidths = () => (
  <>
    <Container max="widescreen">
      <Notification color="primary">
        This container has a <code>max-width</code> of <code>$desktop - $container-offset</code> on widescreen and
        fullhd.
      </Notification>
    </Container>
    <Block />
    <Container max="fullhd">
      <Notification color="primary">
        This container has a max-width of $widescreen - $container-offset on fullhd.
      </Notification>
    </Container>
  </>
)

export const FluidContainer = () => (
  <Container fluid>
    <Notification color="primary">
      This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
    </Notification>
  </Container>
)

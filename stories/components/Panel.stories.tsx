import React from 'react'

import { Button, Checkbox, Control, Icon, Input, Panel, PanelBlock, PanelHeading, PanelTabs } from '../..'
import { colors } from '../utils/common'

export default {
  title: 'Components/Panel',
  component: Panel,
}

export const Default = () => (
  <Panel>
    <PanelHeading>Repositories</PanelHeading>
    <PanelBlock>
      <Control as="p" hasIcons="left">
        <Input placeholder="Search" />
        <Icon name="fas fa-search" alignment="left" />
      </Control>
    </PanelBlock>
    <PanelTabs>
      <a className="is-active">All</a>
      <a>Public</a>
      <a>Private</a>
      <a>Sources</a>
      <a>Forks</a>
    </PanelTabs>
    <PanelBlock icon={<Icon name="fas fa-book" panel />}>bulma</PanelBlock>
    <PanelBlock icon={<Icon name="fas fa-book" panel />}>marksheet</PanelBlock>
    <PanelBlock icon={<Icon name="fas fa-book" panel />}>minireset.css</PanelBlock>
    <PanelBlock icon={<Icon name="fas fa-book" panel />}>jgthms.github.io</PanelBlock>
    <PanelBlock icon={<Icon name="fas fa-code-branch" panel />}>daniellowtw/infboard</PanelBlock>
    <PanelBlock icon={<Icon name="fas fa-code-branch" panel />}>mojs</PanelBlock>
    <PanelBlock>
      <Checkbox />
      remember me
    </PanelBlock>
    <PanelBlock>
      <Button color="link" outlined fullwidth>
        Reset all filters
      </Button>
    </PanelBlock>
  </Panel>
)

export const Colors = () =>
  colors.map((d) => (
    <Panel key={d} color={d}>
      <PanelHeading>Repositories</PanelHeading>
      <PanelBlock>
        <Control as="p" hasIcons="left">
          <Input placeholder="Search" />
          <Icon name="fas fa-search" alignment="left" />
        </Control>
      </PanelBlock>
      <PanelTabs>
        <a className="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </PanelTabs>
      <PanelBlock icon={<Icon name="fas fa-book" panel />}>bulma</PanelBlock>
      <PanelBlock icon={<Icon name="fas fa-book" panel />}>marksheet</PanelBlock>
      <PanelBlock icon={<Icon name="fas fa-book" panel />}>minireset.css</PanelBlock>
      <PanelBlock icon={<Icon name="fas fa-book" panel />}>jgthms.github.io</PanelBlock>
    </Panel>
  ))

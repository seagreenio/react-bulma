import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownProps,
  DropdownTrigger,
  Icon,
  withOther,
} from '../..'
import React, { useState } from 'react'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

export const Toggable = () => {
  const [active, setActive] = useState(false)

  return (
    <Dropdown active={active} onClick={() => setActive(!active)}>
      <DropdownTrigger>
        <Button aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Click me</span>
          <Icon name="fas fa-angle-down" size="small" aria-hidden="true" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu id="dropdown-menu">
        <DropdownContent>
          <DropdownItem href="#">Overview</DropdownItem>
          <DropdownItem href="#">Modifiers</DropdownItem>
          <DropdownItem href="#">Grid</DropdownItem>
          <DropdownItem href="#">Form</DropdownItem>
          <DropdownItem href="#">Elements</DropdownItem>
          <DropdownItem href="#">Components</DropdownItem>
          <DropdownItem href="#">Layout</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">More</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  )
}

export const Hoverable = () => (
  <Dropdown hoverable>
    <DropdownTrigger>
      <Button aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Hover me</span>
        <Icon name="fas fa-angle-down" size="small" aria-hidden="true" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu id="dropdown-menu">
      <DropdownContent>
        <DropdownItem as="div">
          <p>
            You can insert <strong>any type of content</strong> within the dropdown menu.
          </p>
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  </Dropdown>
)

const OtherDropdown = withOther<DropdownProps>(Dropdown)

export const RightAligned = () => (
  <OtherDropdown hoverable right pulled="right">
    <DropdownTrigger>
      <Button aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Right aligned</span>
        <Icon name="fas fa-angle-down" size="small" aria-hidden="true" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu id="dropdown-menu">
      <DropdownContent>
        <DropdownItem as="div">
          <p>
            Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.
          </p>
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  </OtherDropdown>
)

export const Dropup = () => (
  <Dropdown hoverable up style={{ marginTop: '9rem' }}>
    <DropdownTrigger>
      <Button aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Dropup button</span>
        <Icon name="fas fa-angle-up" size="small" aria-hidden="true" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu id="dropdown-menu">
      <DropdownContent>
        <DropdownItem as="div">
          <p>
            You can add the <code>is-up</code> modifier to have a dropdown menu that appears above the dropdown button.
          </p>
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  </Dropdown>
)

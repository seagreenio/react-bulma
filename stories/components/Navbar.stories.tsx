import React, { useState } from 'react'

import {
  Button,
  Buttons,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
} from '../..'

export default {
  title: 'Components/Navbar',
  component: Navbar,
}

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <Navbar aria-label="main navigation">
      <NavbarBrand>
        <NavbarItem href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </NavbarItem>
        <NavbarBurger active={open} onClick={() => setOpen(!open)} />
      </NavbarBrand>

      <NavbarMenu active={open}>
        <NavbarStart>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem as="div" dropdown hoverable>
            <NavbarLink>More</NavbarLink>

            <NavbarDropdown>
              <NavbarItem>About</NavbarItem>
              <NavbarItem>Jobs</NavbarItem>
              <NavbarItem>Contact</NavbarItem>
              <NavbarDivider />
              <NavbarItem>Report an issue</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>

        <NavbarEnd>
          <NavbarItem as="div">
            <Buttons>
              <Button as="a" color="primary">
                <strong>Sign up</strong>
              </Button>
              <Button as="a" color="light">
                Log in
              </Button>
            </Buttons>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  )
}

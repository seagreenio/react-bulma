import React from 'react'

import { Button, Buttons, Control, Field, Icon } from '../..'
import ColorBox from '../utils/ColorBox'

export default {
  title: 'Elements/Button',
  component: Button,
}

export const Default = () => <Button>Button</Button>

export const As = () => (
  <Buttons>
    <Button as="a">Anchor</Button>
    <Button>Button</Button>
    <Button as="input" type="submit" value="Submit input" />
    <Button as="input" type="reset" value="Reset input" />
  </Buttons>
)

export const Colors = () => (
  <>
    <Buttons>
      <Button color="white">White</Button>
      <Button color="light">Light</Button>
      <Button color="dark">Dark</Button>
      <Button color="black">Black</Button>
      <Button color="text">Text</Button>
    </Buttons>
    <Buttons>
      <Button color="primary">Primary</Button>
      <Button color="link">Link</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </Buttons>
    <Buttons>
      <Button color="primary" light>
        Primary
      </Button>
      <Button color="link" light>
        Link
      </Button>
      <Button color="info" light>
        Info
      </Button>
      <Button color="success" light>
        Success
      </Button>
      <Button color="warning" light>
        Warning
      </Button>
      <Button color="danger" light>
        Danger
      </Button>
    </Buttons>
  </>
)

export const Sizes = () => (
  <>
    <Buttons>
      <Button size="small">Small</Button>
      <Button>Default</Button>
      <Button size="normal">Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Buttons>
    <Buttons size="medium">
      <Button>All</Button>
      <Button>Medium</Button>
      <Button>Size</Button>
    </Buttons>
    <Buttons size="small">
      <Button>Small</Button>
      <Button>Small</Button>
      <Button>Small</Button>
      <Button size="normal">Normal</Button>
      <Button>Small</Button>
    </Buttons>
  </>
)

export const Displays = () => (
  <Buttons>
    <Button size="small" fullwidth>
      Small
    </Button>
    <Button size="normal" fullwidth>
      Normal
    </Button>
    <Button size="medium" fullwidth>
      Medium
    </Button>
    <Button size="large" fullwidth>
      Large
    </Button>
  </Buttons>
)

export const Styles = () => (
  <>
    <Buttons>
      <Button outlined>Outlined</Button>
      <Button color="primary" outlined>
        Outlined
      </Button>
      <Button color="link" outlined>
        Outlined
      </Button>
      <Button color="info" outlined>
        Outlined
      </Button>
      <Button color="success" outlined>
        Outlined
      </Button>
      <Button color="danger" outlined>
        Outlined
      </Button>
    </Buttons>
    <Buttons>
      <Button color="primary" inverted>
        Inverted
      </Button>
      <Button color="link" inverted>
        Inverted
      </Button>
      <Button color="info" inverted>
        Inverted
      </Button>
      <Button color="success" inverted>
        Inverted
      </Button>
      <Button color="danger" inverted>
        Inverted
      </Button>
    </Buttons>
    <ColorBox hasBackground="dark">
      <Buttons>
        <Button color="primary" inverted outlined>
          Invert Outlined
        </Button>
        <Button color="link" inverted outlined>
          Invert Outlined
        </Button>
        <Button color="info" inverted outlined>
          Invert Outlined
        </Button>
        <Button color="success" inverted outlined>
          Invert Outlined
        </Button>
        <Button color="danger" inverted outlined>
          Invert Outlined
        </Button>
      </Buttons>
    </ColorBox>
    <Buttons>
      <Button rounded>Rounded</Button>
      <Button color="primary" rounded>
        Rounded
      </Button>
      <Button color="link" rounded>
        Rounded
      </Button>
      <Button color="info" rounded>
        Rounded
      </Button>
      <Button color="success" rounded>
        Rounded
      </Button>
      <Button color="danger" rounded>
        Rounded
      </Button>
    </Buttons>
  </>
)

export const States = () => (
  <>
    <Buttons>
      <Button color="primary">Normal</Button>
      <Button color="link">Normal</Button>
      <Button color="info">Normal</Button>
      <Button color="success">Normal</Button>
      <Button color="warning">Normal</Button>
      <Button color="danger">Normal</Button>
    </Buttons>
    <Buttons>
      <Button color="primary" hovered>
        Hover
      </Button>
      <Button color="link" hovered>
        Hover
      </Button>
      <Button color="info" hovered>
        Hover
      </Button>
      <Button color="success" hovered>
        Hover
      </Button>
      <Button color="warning" hovered>
        Hover
      </Button>
      <Button color="danger" hovered>
        Hover
      </Button>
    </Buttons>
    <Buttons>
      <Button color="primary" focused>
        Focus
      </Button>
      <Button color="link" focused>
        Focus
      </Button>
      <Button color="info" focused>
        Focus
      </Button>
      <Button color="success" focused>
        Focus
      </Button>
      <Button color="warning" focused>
        Focus
      </Button>
      <Button color="danger" focused>
        Focus
      </Button>
    </Buttons>
    <Buttons>
      <Button color="primary" active>
        Active
      </Button>
      <Button color="link" active>
        Active
      </Button>
      <Button color="info" active>
        Active
      </Button>
      <Button color="success" active>
        Active
      </Button>
      <Button color="warning" active>
        Active
      </Button>
      <Button color="danger" active>
        Active
      </Button>
    </Buttons>
    <Buttons>
      <Button loading>Loading</Button>
      <Button color="primary" loading>
        Loading
      </Button>
      <Button color="link" loading>
        Loading
      </Button>
      <Button color="info" loading>
        Loading
      </Button>
      <Button color="success" loading>
        Loading
      </Button>
      <Button color="warning" loading>
        Loading
      </Button>
      <Button color="danger" loading>
        Loading
      </Button>
    </Buttons>
    <Buttons>
      <Button static>Static</Button>
    </Buttons>
    <Buttons>
      <Button title="Disabled button" disabled>
        Disabled
      </Button>
      <Button title="Disabled button" color="primary" disabled>
        Disabled
      </Button>
      <Button title="Disabled button" color="link" disabled>
        Disabled
      </Button>
      <Button title="Disabled button" color="info" disabled>
        Disabled
      </Button>
      <Button title="Disabled button" color="success" disabled>
        Disabled
      </Button>
      <Button title="Disabled button" color="warning" disabled>
        Disabled
      </Button>
      <Button title="Disabled button" color="danger" disabled>
        Disabled
      </Button>
    </Buttons>
    <Buttons as="p">
      <Button>
        <Icon name="fas fa-bold" />
      </Button>
      <Button>
        <Icon name="fas fa-italic" />
      </Button>
      <Button>
        <Icon name="fas fa-underline" />
      </Button>
    </Buttons>
    <Buttons as="p">
      <Button>
        <Icon name="fab fa-github" />
        <span>GitHub</span>
      </Button>
      <Button color="primary">
        <Icon name="fab fa-twitter" />
        <span>@jgthms</span>
      </Button>
      <Button color="success">
        <Icon name="fas fa-check" />
        <span>Save</span>
      </Button>
      <Button color="danger" outlined>
        <span>Delete</span>
        <Icon name="fas fa-times" />
      </Button>
    </Buttons>
    <Buttons as="p">
      <Button size="small">
        <Icon name="fab fa-github" />
        <span>GitHub</span>
      </Button>
      <Button>
        <Icon name="fab fa-github" />
        <span>GitHub</span>
      </Button>
      <Button size="medium">
        <Icon name="fab fa-github" />
        <span>GitHub</span>
      </Button>
      <Button size="large">
        <Icon name="fab fa-github" />
        <span>GitHub</span>
      </Button>
    </Buttons>
    <Buttons as="p">
      <Button size="small">
        <Icon name="fas fa-heading" />
      </Button>
    </Buttons>
    <Buttons as="p">
      <Button>
        <Icon name="fas fa-heading" />
      </Button>
      <Button>
        <Icon name="fas fa-heading fa-lg" />
      </Button>
    </Buttons>
    <Buttons as="p" size="medium">
      <Button>
        <Icon name="fas fa-heading" />
      </Button>
      <Button>
        <Icon name="fas fa-heading fa-lg" />
      </Button>
      <Button>
        <Icon name="fas fa-heading fa-2x" />
      </Button>
    </Buttons>
    <Buttons as="p" size="large">
      <Button>
        <Icon name="fas fa-heading" />
      </Button>
      <Button>
        <Icon name="fas fa-heading fa-lg" />
      </Button>
      <Button>
        <Icon name="fas fa-heading fa-2x" />
      </Button>
    </Buttons>
  </>
)

export const ButtonGroup = () => (
  <Field grouped>
    <Control>
      <Button color="link">Save changes</Button>
    </Control>
    <Control>
      <Button>Cancel</Button>
    </Control>
    <Control>
      <Button color="danger">Delete post</Button>
    </Control>
  </Field>
)

export const ButtonAddons = () => (
  <Field hasAddons>
    <Control>
      <Button>
        <Icon name="fas fa-align-left" size="small" />
        <span>Left</span>
      </Button>
    </Control>
    <Control>
      <Button>
        <Icon name="fas fa-align-center" size="small" />
        <span>Center</span>
      </Button>
    </Control>
    <Control>
      <Button>
        <Icon name="fas fa-align-right" size="small" />
        <span>Right</span>
      </Button>
    </Control>
  </Field>
)

export const ListOfButtons = () => (
  <>
    <Buttons>
      <Button color="success">Save changes</Button>
      <Button color="info">Save and continue</Button>
      <Button color="danger">Cancel</Button>
    </Buttons>
    <Buttons>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
      <Button>Five</Button>
      <Button>Six</Button>
      <Button>Seven</Button>
      <Button>Eight</Button>
      <Button>Nine</Button>
      <Button>Ten</Button>
      <Button>Eleven</Button>
      <Button>Twelve</Button>
      <Button>Thirteen</Button>
      <Button>Fourteen</Button>
      <Button>Fifteen</Button>
      <Button>Sixteen</Button>
      <Button>Seventeen</Button>
      <Button>Eighteen</Button>
      <Button>Nineteen</Button>
      <Button>Twenty</Button>
    </Buttons>
    <Buttons addons>
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons align="centered">
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons align="right">
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons>
      <Button color="success" selected>
        Yes
      </Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons>
      <Button>Yes</Button>
      <Button color="info" selected>
        Maybe
      </Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons>
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button color="danger" selected>
        No
      </Button>
    </Buttons>
  </>
)

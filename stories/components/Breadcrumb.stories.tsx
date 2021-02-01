import { Breadcrumb, Icon } from '../..'

import React from 'react'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
}

export const Default = (args) => (
  <Breadcrumb aria-label="breadcrumbs" {...args}>
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Documentation</a>
      </li>
      <li>
        <a href="#">Components</a>
      </li>
      <li className="is-active">
        <a href="#" aria-current="page">
          Breadcrumb
        </a>
      </li>
    </ul>
  </Breadcrumb>
)

Default.argTypes = {
  alignment: {
    control: {
      type: 'select',
      options: ['centered', 'right'],
    },
  },
  separator: {
    control: {
      type: 'select',
      options: ['arrow', 'bullet', 'dot', 'succeeds'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
}

export const Alignment = () => (
  <>
    <Breadcrumb alignment="centered" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
    <Breadcrumb alignment="right" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
  </>
)

export const Icons = () => (
  <Breadcrumb aria-label="breadcrumbs">
    <ul>
      <li>
        <a href="#">
          <Icon name="fas fa-home" size="small" aria-hidden="true" />
          <span>Bulma</span>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon name="fas fa-book" size="small" aria-hidden="true" />
          <span>Documentation</span>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon name="fas fa-puzzle-piece" size="small" aria-hidden="true" />
          <span>Components</span>
        </a>
      </li>
      <li className="is-active">
        <a href="#">
          <Icon name="fas fa-thumbs-up" size="small" aria-hidden="true" />
          <span>Breadcrumb</span>
        </a>
      </li>
    </ul>
  </Breadcrumb>
)

export const AlternativeSeparators = () => (
  <>
    <Breadcrumb aria-label="breadcrumbs" separator="arrow">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
    <Breadcrumb aria-label="breadcrumbs" separator="bullet">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
    <Breadcrumb aria-label="breadcrumbs" separator="dot">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
    <Breadcrumb aria-label="breadcrumbs" separator="succeeds">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
  </>
)

export const Sizes = () => (
  <>
    <Breadcrumb aria-label="breadcrumbs" size="small">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
    <Breadcrumb aria-label="breadcrumbs" size="medium">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
    <Breadcrumb aria-label="breadcrumbs" size="large">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </Breadcrumb>
  </>
)

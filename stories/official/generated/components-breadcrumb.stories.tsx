import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Breadcrumb, BreadcrumbItem, Icon } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-breadcrumb',
      title: 'Breadcrumb',
      url: 'https://bulma.io/documentation/components/breadcrumb/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-breadcrumb',
  title: 'CSS Library/Components/Breadcrumb',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-breadcrumb" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Breadcrumb'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A simple '}
          <strong data-official-prose="">{'breadcrumb'}</strong>
          {' component to improve your navigation experience'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <strong data-official-prose="">{'breadcrumb'}</strong>
            {' is a simple navigation component that only requires a '}
            <code data-official-prose="">{'breadcrumb'}</code>
            {' container and a '}
            <code data-official-prose="">{'ul'}</code>
            {
              ' list. The dividers are automatically created in the content of the '
            }
            <code data-official-prose="">{'::before'}</code>
            {' pseudo-element of '}
            <code data-official-prose="">{'li'}</code>
            {' tags. '}
          </p>
          <p data-official-prose="">
            {' You can inform the current page using the '}
            <code data-official-prose="">{'is-active'}</code>
            {' modifier in a '}
            <code data-official-prose="">{'li'}</code>
            {' tag. It will disable the navigation of inner links. '}
          </p>
        </div>
        <hr data-official-prose="" />
        <div data-official-example="components-breadcrumb/basic/001">
          <Canvas of={DefaultBreadcrumbStory} />
        </div>
        <h3
          data-official-prose=""
          id={'alignment'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Alignment '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#alignment'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' For alternative alignments, use the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' and '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifiers on the '}
            <code data-official-prose="">{'breadcrumb'}</code>
            {' container. '}
          </p>
        </div>
        <div data-official-example="components-breadcrumb/alignment/001">
          <Canvas of={CenteredBreadcrumbStory} />
        </div>
        <div data-official-example="components-breadcrumb/alignment/002">
          <Canvas of={RightAlignedBreadcrumbStory} />
        </div>
        <h3
          data-official-prose=""
          id={'icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Icons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#icons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can use any of the '}
            <a
              data-official-prose=""
              href={'https://fontawesome.com/'}
              target={'_blank'}
            >
              {'Font Awesome'}
            </a>{' '}
            <strong data-official-prose="">{'icons'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-breadcrumb/icons/001">
          <Canvas of={BreadcrumbWithIconsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'alternative-separators'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Alternative separators '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#alternative-separators'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can choose between '}
            <strong data-official-prose="">{'4 additional separators'}</strong>
            {': '}
            <code data-official-prose="">{'has-arrow-separator'}</code>{' '}
            <code data-official-prose="">{'has-bullet-separator'}</code>{' '}
            <code data-official-prose="">{'has-dot-separator'}</code>
            {' and '}
            <code data-official-prose="">{'has-succeeds-separator'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-breadcrumb/alternative-separators/001">
          <Canvas of={ArrowSeparatorStory} />
        </div>
        <div data-official-example="components-breadcrumb/alternative-separators/002">
          <Canvas of={BulletSeparatorStory} />
        </div>
        <div data-official-example="components-breadcrumb/alternative-separators/003">
          <Canvas of={DotSeparatorStory} />
        </div>
        <div data-official-example="components-breadcrumb/alternative-separators/004">
          <Canvas of={SucceedsSeparatorStory} />
        </div>
        <h3
          data-official-prose=""
          id={'sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Sizes '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sizes'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can choose between '}
            <strong data-official-prose="">{'3 additional sizes'}</strong>
            {': '}
            <code data-official-prose="">{'is-small'}</code>{' '}
            <code data-official-prose="">{'is-medium'}</code>
            {' and '}
            <code data-official-prose="">{'is-large'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-breadcrumb/sizes/001">
          <Canvas of={SmallBreadcrumbStory} />
        </div>
        <div data-official-example="components-breadcrumb/sizes/002">
          <Canvas of={MediumBreadcrumbStory} />
        </div>
        <div data-official-example="components-breadcrumb/sizes/003">
          <Canvas of={LargeBreadcrumbStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultBreadcrumbDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function CenteredBreadcrumbDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} alignment={'centered'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function RightAlignedBreadcrumbDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} alignment={'right'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function BreadcrumbWithIconsDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'}>
        <BreadcrumbItem href={'#'}>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-home'} />
          </Icon>
          <span>Bulma</span>
        </BreadcrumbItem>
        <BreadcrumbItem href={'#'}>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-book'} />
          </Icon>
          <span>Documentation</span>
        </BreadcrumbItem>
        <BreadcrumbItem href={'#'}>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-puzzle-piece'} />
          </Icon>
          <span>Components</span>
        </BreadcrumbItem>
        <BreadcrumbItem href={'#'} active>
          <Icon size={'small'}>
            <i aria-hidden={'true'} className={'fas fa-thumbs-up'} />
          </Icon>
          <span>Breadcrumb</span>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function ArrowSeparatorDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} separator={'arrow'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function BulletSeparatorDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} separator={'bullet'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function DotSeparatorDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} separator={'dot'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function SucceedsSeparatorDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} separator={'succeeds'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function SmallBreadcrumbDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} size={'small'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function MediumBreadcrumbDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} size={'medium'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

function LargeBreadcrumbDemo() {
  return (
    <>
      <Breadcrumb aria-label={'breadcrumbs'} size={'large'}>
        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>
        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>
        <BreadcrumbItem href={'#'} aria-current={'page'} active>
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

export const DefaultBreadcrumbStory = {
  name: 'Default breadcrumb',
  parameters: {
    official: { id: 'components-breadcrumb/basic/001' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction DefaultBreadcrumbDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultBreadcrumbDemo,
} satisfies StoryObj

export const CenteredBreadcrumbStory = {
  name: 'Centered breadcrumb',
  parameters: {
    official: { id: 'components-breadcrumb/alignment/001' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction CenteredBreadcrumbDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} alignment={'centered'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredBreadcrumbDemo,
} satisfies StoryObj

export const RightAlignedBreadcrumbStory = {
  name: 'Right-aligned breadcrumb',
  parameters: {
    official: { id: 'components-breadcrumb/alignment/002' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction RightAlignedBreadcrumbDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} alignment={'right'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RightAlignedBreadcrumbDemo,
} satisfies StoryObj

export const BreadcrumbWithIconsStory = {
  name: 'Breadcrumb with icons',
  parameters: {
    official: { id: 'components-breadcrumb/icons/001' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem, Icon } from '@seagreenio/react-bulma'\n\nfunction BreadcrumbWithIconsDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'}>\n        <BreadcrumbItem href={'#'}>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-home'} />\n          </Icon>\n          <span>Bulma</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-book'} />\n          </Icon>\n          <span>Documentation</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-puzzle-piece'} />\n          </Icon>\n          <span>Components</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem href={'#'} active>\n          <Icon size={'small'}>\n            <i aria-hidden={'true'} className={'fas fa-thumbs-up'} />\n          </Icon>\n          <span>Breadcrumb</span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BreadcrumbWithIconsDemo,
} satisfies StoryObj

export const ArrowSeparatorStory = {
  name: 'Arrow separator',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/001' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction ArrowSeparatorDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} separator={'arrow'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ArrowSeparatorDemo,
} satisfies StoryObj

export const BulletSeparatorStory = {
  name: 'Bullet separator',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/002' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction BulletSeparatorDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} separator={'bullet'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BulletSeparatorDemo,
} satisfies StoryObj

export const DotSeparatorStory = {
  name: 'Dot separator',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/003' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction DotSeparatorDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} separator={'dot'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DotSeparatorDemo,
} satisfies StoryObj

export const SucceedsSeparatorStory = {
  name: 'Succeeds separator',
  parameters: {
    official: { id: 'components-breadcrumb/alternative-separators/004' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction SucceedsSeparatorDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} separator={'succeeds'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SucceedsSeparatorDemo,
} satisfies StoryObj

export const SmallBreadcrumbStory = {
  name: 'Small breadcrumb',
  parameters: {
    official: { id: 'components-breadcrumb/sizes/001' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction SmallBreadcrumbDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} size={'small'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallBreadcrumbDemo,
} satisfies StoryObj

export const MediumBreadcrumbStory = {
  name: 'Medium breadcrumb',
  parameters: {
    official: { id: 'components-breadcrumb/sizes/002' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction MediumBreadcrumbDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} size={'medium'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumBreadcrumbDemo,
} satisfies StoryObj

export const LargeBreadcrumbStory = {
  name: 'Large breadcrumb',
  parameters: {
    official: { id: 'components-breadcrumb/sizes/003' },
    docs: {
      source: {
        code: "import { Breadcrumb, BreadcrumbItem } from '@seagreenio/react-bulma'\n\nfunction LargeBreadcrumbDemo() {\n  return (\n    <>\n      <Breadcrumb aria-label={'breadcrumbs'} size={'large'}>\n        <BreadcrumbItem href={'#'}>Bulma</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Documentation</BreadcrumbItem>\n        <BreadcrumbItem href={'#'}>Components</BreadcrumbItem>\n        <BreadcrumbItem href={'#'} aria-current={'page'} active>\n          Breadcrumb\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeBreadcrumbDemo,
} satisfies StoryObj

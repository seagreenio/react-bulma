import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-pagination',
      title: 'Pagination',
      url: 'https://bulma.io/documentation/components/pagination/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-pagination',
  title: 'CSS Library/Components/Pagination',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-pagination" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Pagination'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A responsive, usable, and flexible '}
          <strong data-official-prose="">{'pagination'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The pagination component consists of several elements:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'pagination-previous'}</code>
              {' and '}
              <code data-official-prose="">{'pagination-next'}</code>
              {' for incremental navigation'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'pagination-list'}</code>
              {' which displays page items: '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'pagination-link'}</code>
                  {' for the page numbers'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'pagination-ellipsis'}</code>
                  {' for range separators'}
                </li>
              </ul>
            </li>
          </ul>
          <p data-official-prose="">
            {
              'All elements are optional so you can compose your pagination as you wish.'
            }
          </p>
        </div>
        <div data-official-example="components-pagination/basic/001">
          <Canvas of={DefaultPaginationStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              'You can disable some links if they are not active, or change the amount of page numbers available.'
            }
          </p>
        </div>
        <div data-official-example="components-pagination/basic/002">
          <Canvas of={DisabledPreviousLinkStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' By default on '}
            <strong data-official-prose="">{'tablet'}</strong>
            {
              ', the list is located on the left, and the previous/next buttons on the right. But you can change the '
            }
            <strong data-official-prose="">{'order'}</strong>
            {' of these elements by using the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' and '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifiers. '}
          </p>
        </div>
        <div data-official-example="components-pagination/basic/003">
          <Canvas of={CenteredPaginationStory} />
        </div>
        <div data-official-example="components-pagination/basic/004">
          <Canvas of={RightAlignedPaginationStory} />
        </div>
        <h3
          data-official-prose=""
          id={'styles'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Styles '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#styles'}
          >
            {' # '}
          </a>
        </h3>
        <p data-official-prose="" className={'content'}>
          {'Add the '}
          <code data-official-prose="">{'is-rounded'}</code>
          {' modifier to have rounded pagination items.'}
        </p>
        <div data-official-example="components-pagination/styles/001">
          <Canvas of={RoundedPaginationStory} />
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
        <p data-official-prose="" className={'content'}>
          {' The pagination comes in '}
          <strong data-official-prose="">{'3 additional sizes'}</strong>
          {'.'}
          <br data-official-prose="" />
          {' You only need to append the '}
          <strong data-official-prose="">{'modifier'}</strong>{' '}
          <code data-official-prose="">{'is-small'}</code>
          {', '}
          <code data-official-prose="">{'is-medium'}</code>
          {', or '}
          <code data-official-prose="">{'is-large'}</code>
          {' to the '}
          <code data-official-prose="">{'pagination'}</code>
          {' component. '}
        </p>
        <div data-official-example="components-pagination/sizes/001">
          <Canvas of={SmallPaginationStory} />
        </div>
        <div data-official-example="components-pagination/sizes/002">
          <Canvas of={MediumPaginationStory} />
        </div>
        <div data-official-example="components-pagination/sizes/003">
          <Canvas of={LargePaginationStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultPaginationDemo() {
  return (
    <>
      <Pagination role={'navigation'} aria-label={'pagination'}>
        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </PaginationLink>
          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>
            46
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

function DisabledPreviousLinkDemo() {
  return (
    <>
      <Pagination role={'navigation'} aria-label={'pagination'}>
        <PaginationPrevious title={'This is the first page'} disabled>
          Previous
        </PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink aria-label={'Page 1'} aria-current={'page'} current>
            1
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 2'}>
            2
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 3'}>
            3
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

function CenteredPaginationDemo() {
  return (
    <>
      <Pagination
        role={'navigation'}
        aria-label={'pagination'}
        alignment={'centered'}
      >
        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </PaginationLink>
          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>
            46
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

function RightAlignedPaginationDemo() {
  return (
    <>
      <Pagination
        role={'navigation'}
        aria-label={'pagination'}
        alignment={'right'}
      >
        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </PaginationLink>
          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>
            46
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

function RoundedPaginationDemo() {
  return (
    <>
      <Pagination role={'navigation'} aria-label={'pagination'} rounded>
        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </PaginationLink>
          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>
            46
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

function SmallPaginationDemo() {
  return (
    <>
      <Pagination role={'navigation'} aria-label={'pagination'} size={'small'}>
        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </PaginationLink>
          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>
            46
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

function MediumPaginationDemo() {
  return (
    <>
      <Pagination role={'navigation'} aria-label={'pagination'} size={'medium'}>
        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </PaginationLink>
          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>
            46
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

function LargePaginationDemo() {
  return (
    <>
      <Pagination role={'navigation'} aria-label={'pagination'} size={'large'}>
        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>
        <PaginationNext href={'#'}>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink href={'#'} aria-label={'Goto page 1'}>
            1
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 45'}>
            45
          </PaginationLink>
          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>
            46
          </PaginationLink>
          <PaginationLink href={'#'} aria-label={'Goto page 47'}>
            47
          </PaginationLink>
          <PaginationEllipsis>…</PaginationEllipsis>
          <PaginationLink href={'#'} aria-label={'Goto page 86'}>
            86
          </PaginationLink>
        </PaginationList>
      </Pagination>
    </>
  )
}

export const DefaultPaginationStory = {
  name: 'Default pagination',
  parameters: {
    official: { id: 'components-pagination/basic/001' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationEllipsis,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction DefaultPaginationDemo() {\n  return (\n    <>\n      <Pagination role={'navigation'} aria-label={'pagination'}>\n        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </PaginationLink>\n          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>\n            46\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultPaginationDemo,
} satisfies StoryObj

export const DisabledPreviousLinkStory = {
  name: 'Disabled previous link',
  parameters: {
    official: { id: 'components-pagination/basic/002' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction DisabledPreviousLinkDemo() {\n  return (\n    <>\n      <Pagination role={'navigation'} aria-label={'pagination'}>\n        <PaginationPrevious title={'This is the first page'} disabled>\n          Previous\n        </PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink aria-label={'Page 1'} aria-current={'page'} current>\n            1\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 2'}>\n            2\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 3'}>\n            3\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DisabledPreviousLinkDemo,
} satisfies StoryObj

export const CenteredPaginationStory = {
  name: 'Centered pagination',
  parameters: {
    official: { id: 'components-pagination/basic/003' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationEllipsis,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction CenteredPaginationDemo() {\n  return (\n    <>\n      <Pagination\n        role={'navigation'}\n        aria-label={'pagination'}\n        alignment={'centered'}\n      >\n        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </PaginationLink>\n          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>\n            46\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredPaginationDemo,
} satisfies StoryObj

export const RightAlignedPaginationStory = {
  name: 'Right-aligned pagination',
  parameters: {
    official: { id: 'components-pagination/basic/004' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationEllipsis,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction RightAlignedPaginationDemo() {\n  return (\n    <>\n      <Pagination\n        role={'navigation'}\n        aria-label={'pagination'}\n        alignment={'right'}\n      >\n        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </PaginationLink>\n          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>\n            46\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RightAlignedPaginationDemo,
} satisfies StoryObj

export const RoundedPaginationStory = {
  name: 'Rounded pagination',
  parameters: {
    official: { id: 'components-pagination/styles/001' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationEllipsis,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction RoundedPaginationDemo() {\n  return (\n    <>\n      <Pagination role={'navigation'} aria-label={'pagination'} rounded>\n        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </PaginationLink>\n          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>\n            46\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RoundedPaginationDemo,
} satisfies StoryObj

export const SmallPaginationStory = {
  name: 'Small pagination',
  parameters: {
    official: { id: 'components-pagination/sizes/001' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationEllipsis,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction SmallPaginationDemo() {\n  return (\n    <>\n      <Pagination role={'navigation'} aria-label={'pagination'} size={'small'}>\n        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </PaginationLink>\n          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>\n            46\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallPaginationDemo,
} satisfies StoryObj

export const MediumPaginationStory = {
  name: 'Medium pagination',
  parameters: {
    official: { id: 'components-pagination/sizes/002' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationEllipsis,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction MediumPaginationDemo() {\n  return (\n    <>\n      <Pagination role={'navigation'} aria-label={'pagination'} size={'medium'}>\n        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </PaginationLink>\n          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>\n            46\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumPaginationDemo,
} satisfies StoryObj

export const LargePaginationStory = {
  name: 'Large pagination',
  parameters: {
    official: { id: 'components-pagination/sizes/003' },
    docs: {
      source: {
        code: "import {\n  Pagination,\n  PaginationEllipsis,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n} from '@seagreenio/react-bulma'\n\nfunction LargePaginationDemo() {\n  return (\n    <>\n      <Pagination role={'navigation'} aria-label={'pagination'} size={'large'}>\n        <PaginationPrevious href={'#'}>Previous</PaginationPrevious>\n        <PaginationNext href={'#'}>Next page</PaginationNext>\n        <PaginationList>\n          <PaginationLink href={'#'} aria-label={'Goto page 1'}>\n            1\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 45'}>\n            45\n          </PaginationLink>\n          <PaginationLink aria-label={'Page 46'} aria-current={'page'} current>\n            46\n          </PaginationLink>\n          <PaginationLink href={'#'} aria-label={'Goto page 47'}>\n            47\n          </PaginationLink>\n          <PaginationEllipsis>…</PaginationEllipsis>\n          <PaginationLink href={'#'} aria-label={'Goto page 86'}>\n            86\n          </PaginationLink>\n        </PaginationList>\n      </Pagination>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargePaginationDemo,
} satisfies StoryObj

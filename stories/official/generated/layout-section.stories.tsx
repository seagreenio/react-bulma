import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Section, Subtitle, Title } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-section',
      title: 'Section',
      url: 'https://bulma.io/documentation/layout/section/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-section',
  title: 'CSS Library/Layout/Section',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-section" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Section'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A simple container to divide your page into '}
          <strong data-official-prose="">{'sections'}</strong>
          {", like the one you're currently reading"}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'section'}</code>
            {
              ' components are simple layout elements with responsive padding. They are best used as '
            }
            <strong data-official-prose="">{'direct'}</strong>
            {' children of '}
            <code data-official-prose="">{'body'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-example="layout-section/basic/001">
          <Canvas of={DefaultSectionStory} />
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
            {' You can use the modifiers '}
            <code data-official-prose="">{'is-medium'}</code>
            {' and '}
            <code data-official-prose="">{'is-large'}</code>
            {' to change the '}
            <strong data-official-prose="">{'spacing'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="layout-section/sizes/001">
          <Canvas of={MediumSectionStory} />
        </div>
        <div data-official-example="layout-section/sizes/002">
          <Canvas of={LargeSectionStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultSectionDemo() {
  return (
    <>
      <Section>
        <Title level={1}>Section</Title>
        <Subtitle level={2}>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </Section>
    </>
  )
}

function MediumSectionDemo() {
  return (
    <>
      <Section size={'medium'}>
        <Title level={1}>Medium section</Title>
        <Subtitle level={2}>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </Section>
    </>
  )
}

function LargeSectionDemo() {
  return (
    <>
      <Section size={'large'}>
        <Title level={1}>Large section</Title>
        <Subtitle level={2}>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </Section>
    </>
  )
}

export const DefaultSectionStory = {
  name: 'Default section',
  parameters: {
    official: { id: 'layout-section/basic/001' },
    docs: {
      source: {
        code: "import { Section, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction DefaultSectionDemo() {\n  return (\n    <>\n      <Section>\n        <Title level={1}>Section</Title>\n        <Subtitle level={2}>\n          A simple container to divide your page into <strong>sections</strong>,\n          like the one you're currently reading.\n        </Subtitle>\n      </Section>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultSectionDemo,
} satisfies StoryObj

export const MediumSectionStory = {
  name: 'Medium section',
  parameters: {
    official: { id: 'layout-section/sizes/001' },
    docs: {
      source: {
        code: "import { Section, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction MediumSectionDemo() {\n  return (\n    <>\n      <Section size={'medium'}>\n        <Title level={1}>Medium section</Title>\n        <Subtitle level={2}>\n          A simple container to divide your page into <strong>sections</strong>,\n          like the one you're currently reading.\n        </Subtitle>\n      </Section>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumSectionDemo,
} satisfies StoryObj

export const LargeSectionStory = {
  name: 'Large section',
  parameters: {
    official: { id: 'layout-section/sizes/002' },
    docs: {
      source: {
        code: "import { Section, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction LargeSectionDemo() {\n  return (\n    <>\n      <Section size={'large'}>\n        <Title level={1}>Large section</Title>\n        <Subtitle level={2}>\n          A simple container to divide your page into <strong>sections</strong>,\n          like the one you're currently reading.\n        </Subtitle>\n      </Section>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeSectionDemo,
} satisfies StoryObj

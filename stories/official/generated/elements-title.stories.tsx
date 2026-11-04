import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Block, Subtitle, Title } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-title',
      title: 'Title and Subtitle',
      url: 'https://bulma.io/documentation/elements/title/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-title',
  title: 'CSS Library/Elements/Title',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-title" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Title and Subtitle'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Simple '}
          <strong data-official-prose="">{'headings'}</strong>
          {' to add depth to your page'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-3'}>
            <div data-official-prose="" className={'content'}>
              <p data-official-prose="">
                {'There are '}
                <strong data-official-prose="">{'2 types'}</strong>
                {' of heading:'}
              </p>
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'title'}</code>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'subtitle'}</code>
                </li>
              </ul>
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-4'}
            data-source-example={'elements-title/basic/001'}
          >
            <div data-official-example="elements-title/basic/001">
              <Canvas of={TitleAndSubtitleStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-5'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<h1 class="title">Title</h1>\n<h2 class="subtitle">Subtitle</h2>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
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
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-3'}>
            <p data-official-prose="">
              {'There are '}
              <strong data-official-prose="">{'6 sizes'}</strong>
              {' available:'}
            </p>
          </div>
          <div
            data-official-prose=""
            className={'column is-4'}
            data-source-example={'elements-title/sizes/001'}
          >
            <div data-official-example="elements-title/sizes/001">
              <Canvas of={TitleSizesStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-5'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<h1 class="title is-1">Title 1</h1>\n<h2 class="title is-2">Title 2</h2>\n<h3 class="title is-3">Title 3</h3>\n<h4 class="title is-4">Title 4</h4>\n<h5 class="title is-5">Title 5</h5>\n<h6 class="title is-6">Title 6</h6>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-3'}></div>
          <div
            data-official-prose=""
            className={'column is-4'}
            data-source-example={'elements-title/sizes/002'}
          >
            <div data-official-example="elements-title/sizes/002">
              <Canvas of={SubtitleSizesStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-5'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<h1 class="subtitle is-1">Subtitle 1</h1>\n<h2 class="subtitle is-2">Subtitle 2</h2>\n<h3 class="subtitle is-3">Subtitle 3</h3>\n<h4 class="subtitle is-4">Subtitle 4</h4>\n<h5 class="subtitle is-5">Subtitle 5</h5>\n<h6 class="subtitle is-6">Subtitle 6</h6>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <hr data-official-prose="" />
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-3'}>
            <div data-official-prose="" className={'content'}>
              <p data-official-prose="">
                {'When you '}
                <strong data-official-prose="">{'combine'}</strong>
                {' a title and a subtitle, they move closer together.'}
              </p>
              <p data-official-prose="">
                {
                  ' As a rule of thumb, it is recommended to use a size difference of '
                }
                <strong data-official-prose="">{'two'}</strong>
                {'. So if you use a '}
                <code data-official-prose="">{'title is-1'}</code>
                {', combine it with a '}
                <code data-official-prose="">{'subtitle is-3'}</code>
                {'. '}
              </p>
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-4'}
            data-source-example={'elements-title/sizes/003'}
          >
            <div data-official-example="elements-title/sizes/003">
              <Canvas of={PairedHeadingsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-5'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<p class="title is-1">Title 1</p>\n<p class="subtitle is-3">Subtitle 3</p>\n\n<p class="title is-2">Title 2</p>\n<p class="subtitle is-4">Subtitle 4</p>\n\n<p class="title is-3">Title 3</p>\n<p class="subtitle is-5">Subtitle 5</p>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <hr data-official-prose="" />
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-3'}>
            <div data-official-prose="" className={'content'}>
              <p data-official-prose="">
                {
                  ' You can maintain the normal spacing between titles and subtitles if you use the '
                }
                <code data-official-prose="">{'is-spaced'}</code>
                {' modifier on the first element. '}
              </p>
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-4'}
            data-source-example={'elements-title/sizes/004'}
          >
            <div data-official-example="elements-title/sizes/004">
              <Canvas of={SpacedHeadingsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-5'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<p class="title is-1 is-spaced">Title 1</p>\n<p class="subtitle is-3">Subtitle 3</p>\n\n<p class="title is-2 is-spaced">Title 2</p>\n<p class="subtitle is-4">Subtitle 4</p>\n\n<p class="title is-3 is-spaced">Title 3</p>\n<p class="subtitle is-5">Subtitle 5</p>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function TitleAndSubtitleDemo() {
  return (
    <>
      <Title as={'p'}>Title</Title>
      <Subtitle as={'p'}>Subtitle</Subtitle>
    </>
  )
}

function TitleSizesDemo() {
  return (
    <>
      <Title size={1} as={'p'}>
        Title 1
      </Title>
      <Title size={2} as={'p'}>
        Title 2
      </Title>
      <Title size={3} as={'p'}>
        Title 3 (default size)
      </Title>
      <Title size={4} as={'p'}>
        Title 4
      </Title>
      <Title size={5} as={'p'}>
        Title 5
      </Title>
      <Title size={6} as={'p'}>
        Title 6
      </Title>
    </>
  )
}

function SubtitleSizesDemo() {
  return (
    <>
      <Subtitle size={1} as={'p'}>
        Subtitle 1
      </Subtitle>
      <Subtitle size={2} as={'p'}>
        Subtitle 2
      </Subtitle>
      <Subtitle size={3} as={'p'}>
        Subtitle 3
      </Subtitle>
      <Subtitle size={4} as={'p'}>
        Subtitle 4
      </Subtitle>
      <Subtitle size={5} as={'p'}>
        Subtitle 5 (default size)
      </Subtitle>
      <Subtitle size={6} as={'p'}>
        Subtitle 6
      </Subtitle>
    </>
  )
}

function PairedHeadingsDemo() {
  return (
    <>
      <Block>
        <Title size={1} as={'p'}>
          Title 1
        </Title>
        <Subtitle size={3} as={'p'}>
          Subtitle 3
        </Subtitle>
      </Block>
      <Block>
        <Title size={2} as={'p'}>
          Title 2
        </Title>
        <Subtitle size={4} as={'p'}>
          Subtitle 4
        </Subtitle>
      </Block>
      <Block>
        <Title size={3} as={'p'}>
          Title 3
        </Title>
        <Subtitle size={5} as={'p'}>
          Subtitle 5
        </Subtitle>
      </Block>
    </>
  )
}

function SpacedHeadingsDemo() {
  return (
    <>
      <Block>
        <Title size={1} spaced as={'p'}>
          Title 1
        </Title>
        <Subtitle size={3} as={'p'}>
          Subtitle 3
        </Subtitle>
      </Block>
      <Block>
        <Title size={2} spaced as={'p'}>
          Title 2
        </Title>
        <Subtitle size={4} as={'p'}>
          Subtitle 4
        </Subtitle>
      </Block>
      <Block>
        <Title size={3} spaced as={'p'}>
          Title 3
        </Title>
        <Subtitle size={5} as={'p'}>
          Subtitle 5
        </Subtitle>
      </Block>
    </>
  )
}

export const TitleAndSubtitleStory = {
  name: 'Title and subtitle',
  parameters: {
    official: { id: 'elements-title/basic/001' },
    docs: {
      source: {
        code: "import { Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction TitleAndSubtitleDemo() {\n  return (\n    <>\n      <Title as={'p'}>Title</Title>\n      <Subtitle as={'p'}>Subtitle</Subtitle>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TitleAndSubtitleDemo,
} satisfies StoryObj

export const TitleSizesStory = {
  name: 'Title sizes',
  parameters: {
    official: { id: 'elements-title/sizes/001' },
    docs: {
      source: {
        code: "import { Title } from '@seagreenio/react-bulma'\n\nfunction TitleSizesDemo() {\n  return (\n    <>\n      <Title size={1} as={'p'}>\n        Title 1\n      </Title>\n      <Title size={2} as={'p'}>\n        Title 2\n      </Title>\n      <Title size={3} as={'p'}>\n        Title 3 (default size)\n      </Title>\n      <Title size={4} as={'p'}>\n        Title 4\n      </Title>\n      <Title size={5} as={'p'}>\n        Title 5\n      </Title>\n      <Title size={6} as={'p'}>\n        Title 6\n      </Title>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TitleSizesDemo,
} satisfies StoryObj

export const SubtitleSizesStory = {
  name: 'Subtitle sizes',
  parameters: {
    official: { id: 'elements-title/sizes/002' },
    docs: {
      source: {
        code: "import { Subtitle } from '@seagreenio/react-bulma'\n\nfunction SubtitleSizesDemo() {\n  return (\n    <>\n      <Subtitle size={1} as={'p'}>\n        Subtitle 1\n      </Subtitle>\n      <Subtitle size={2} as={'p'}>\n        Subtitle 2\n      </Subtitle>\n      <Subtitle size={3} as={'p'}>\n        Subtitle 3\n      </Subtitle>\n      <Subtitle size={4} as={'p'}>\n        Subtitle 4\n      </Subtitle>\n      <Subtitle size={5} as={'p'}>\n        Subtitle 5 (default size)\n      </Subtitle>\n      <Subtitle size={6} as={'p'}>\n        Subtitle 6\n      </Subtitle>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SubtitleSizesDemo,
} satisfies StoryObj

export const PairedHeadingsStory = {
  name: 'Paired headings',
  parameters: {
    official: { id: 'elements-title/sizes/003' },
    docs: {
      source: {
        code: "import { Block, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction PairedHeadingsDemo() {\n  return (\n    <>\n      <Block>\n        <Title size={1} as={'p'}>\n          Title 1\n        </Title>\n        <Subtitle size={3} as={'p'}>\n          Subtitle 3\n        </Subtitle>\n      </Block>\n      <Block>\n        <Title size={2} as={'p'}>\n          Title 2\n        </Title>\n        <Subtitle size={4} as={'p'}>\n          Subtitle 4\n        </Subtitle>\n      </Block>\n      <Block>\n        <Title size={3} as={'p'}>\n          Title 3\n        </Title>\n        <Subtitle size={5} as={'p'}>\n          Subtitle 5\n        </Subtitle>\n      </Block>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PairedHeadingsDemo,
} satisfies StoryObj

export const SpacedHeadingsStory = {
  name: 'Spaced headings',
  parameters: {
    official: { id: 'elements-title/sizes/004' },
    docs: {
      source: {
        code: "import { Block, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction SpacedHeadingsDemo() {\n  return (\n    <>\n      <Block>\n        <Title size={1} spaced as={'p'}>\n          Title 1\n        </Title>\n        <Subtitle size={3} as={'p'}>\n          Subtitle 3\n        </Subtitle>\n      </Block>\n      <Block>\n        <Title size={2} spaced as={'p'}>\n          Title 2\n        </Title>\n        <Subtitle size={4} as={'p'}>\n          Subtitle 4\n        </Subtitle>\n      </Block>\n      <Block>\n        <Title size={3} spaced as={'p'}>\n          Title 3\n        </Title>\n        <Subtitle size={5} as={'p'}>\n          Subtitle 5\n        </Subtitle>\n      </Block>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SpacedHeadingsDemo,
} satisfies StoryObj

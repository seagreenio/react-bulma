import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import {
  Block,
  Button,
  Column,
  Columns,
  Control,
  Delete,
  Field,
  Input,
  Message,
  MessageBody,
  MessageHeader,
  Notification,
  Pagination,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  Progress,
  Title,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-block',
      title: 'Block',
      url: 'https://bulma.io/documentation/elements/block/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-block',
  title: 'CSS Library/Elements/Block',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-block" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Block'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {"Bulma's most basic spacer "}
          <strong data-official-prose="">{'block'}</strong>
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'block'}</code>
            {' element is a simple '}
            <strong data-official-prose="">{'spacer tool'}</strong>
            {'. It allows '}
            <strong data-official-prose="">{'sibling'}</strong>
            {' HTML elements to have a consistent margin between them: '}
          </p>
        </div>
        <div data-official-example="elements-block/basic/001">
          <Canvas of={StackedBlocksStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' As you can see, the first two blocks have a '}
            <code data-official-prose="">{'margin-bottom'}</code>
            {' applied, but '}
            <strong data-official-prose="">{'not the third .'}</strong>
            {'. That is because Bulma applies a space on all blocks, '}
            <strong data-official-prose="">{'except the last one'}</strong>
            {
              '. This means you can use as many blocks as you want, the spacing will only appear '
            }
            <strong data-official-prose="">{'between them'}</strong>
            {'. '}
          </p>
          <p data-official-prose="">
            {'Without using '}
            <code data-official-prose="">{'block'}</code>
            {', the HTML elements would have no space between them:'}
          </p>
        </div>
        <div data-official-example="elements-block/basic/002">
          <Canvas of={WithoutBlocksStory} />
        </div>
        <h3
          data-official-prose=""
          id={'you-re-already-using-it'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {" You're already using it "}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#you-re-already-using-it'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {" As a matter of fact, you're "}
            <strong data-official-prose="">{'already using'}</strong>
            {' the '}
            <code data-official-prose="">{'block'}</code>
            {' without knowing it. Its CSS properties are '}
            <strong data-official-prose="">{'shared'}</strong>
            {' across several Bulma elements and components: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'breadcrumb'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'level'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'message'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'pagination'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'tabs'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'box'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'content'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'notification'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'other'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'progress'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'table'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'title'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {'This is thanks to the '}
            <code data-official-prose="">{'@extend %block'}</code>
            {' Sass placeholder feature.'}
          </p>
          <p data-official-prose="">
            {"Here's how it would look like in comparison:"}
          </p>
        </div>
        <div data-official-example="elements-block/you-re-already-using-it/001">
          <Canvas of={SharedBlockSpacingStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' No matter which Bulma elements and components you are using, and no matter their order, they will have a '
            }
            <strong data-official-prose="">{'consistent space'}</strong>
            {' between them. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'one-line-of-css'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' One line of CSS '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#one-line-of-css'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' As you can see, the CSS of the '}
            <code data-official-prose="">{'block'}</code>
            {' is very simple: it applies a '}
            <code data-official-prose="">{'margin-bottom'}</code>
            {' on all siblings, '}
            <strong data-official-prose="">{'except the last one'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-css'}>
              {'\n\n.block:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n'}
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              'This prevents the last sibling from adding unnecessary space at the bottom.'
            }
          </p>
        </div>
      </div>
    </OfficialDocument>
  )
}

function StackedBlocksDemo() {
  return (
    <>
      <Block>
        This text is within a <strong>block</strong>.
      </Block>
      <Block>
        This text is within a <strong>second block</strong>. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
        fringilla egestas. Nullam condimentum luctus turpis.
      </Block>
      <Block>
        This text is within a <strong>third block</strong>. This block has no
        margin at the bottom.
      </Block>
    </>
  )
}

function WithoutBlocksDemo() {
  return (
    <>
      <div>
        This text is <em>not</em> within a <strong>block</strong>.
      </div>
      <div>
        This text <em>isn't</em> within a <strong>block</strong> either. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit
        amet massa fringilla egestas. Nullam condimentum luctus turpis.
      </div>
      <div>
        This text is also <em>not</em> within a <strong>block</strong>.
      </div>
    </>
  )
}

function SharedBlockSpacingDemo() {
  const [visible1, setVisible1] = useState(true)
  const [visible2, setVisible2] = useState(true)
  const [visible3, setVisible3] = useState(true)
  const [visible4, setVisible4] = useState(true)
  return (
    <>
      <Columns helpers={{ textSize: 6 }}>
        <Column>
          <Title helpers={{ mb: 0 }} as={'p'}>
            Without block
          </Title>
          <Block helpers={{ mb: 0 }}>
            <Field layout={'grouped'}>
              <Control expanded>
                <Input type={'text'} placeholder={'Text input'} />
              </Control>
              <Control>
                <Button color={'primary'}>Button</Button>
              </Control>
            </Field>
          </Block>
          <Pagination
            role={'navigation'}
            aria-label={'pagination'}
            helpers={{ mb: 0 }}
          >
            <PaginationPrevious title={'This is the first page'} disabled>
              Previous
            </PaginationPrevious>
            <PaginationNext>Next page</PaginationNext>
            <PaginationList>
              <PaginationLink
                aria-label={'Page 1'}
                aria-current={'page'}
                current
              >
                1
              </PaginationLink>
              <PaginationLink aria-label={'Goto page 2'}>2</PaginationLink>
              <PaginationLink aria-label={'Goto page 3'}>3</PaginationLink>
            </PaginationList>
          </Pagination>
          <Progress
            value={'30'}
            max={'100'}
            color={'success'}
            helpers={{ mb: 0 }}
          >
            30%
          </Progress>
          {visible1 && (
            <Notification color={'warning'} helpers={{ mb: 0 }}>
              <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum
              dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
            </Notification>
          )}
          {visible2 && (
            <Message color={'danger'} helpers={{ mb: 0 }}>
              <MessageHeader>
                <p>Error</p>
                <Delete
                  aria-label={'delete'}
                  onClick={() => setVisible2(false)}
                />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
                efficitur.
              </MessageBody>
            </Message>
          )}
        </Column>
        <Column>
          <Title as={'p'}>With block</Title>
          <Block>
            <Field layout={'grouped'}>
              <Control expanded>
                <Input type={'text'} placeholder={'Text input'} />
              </Control>
              <Control>
                <Button color={'primary'}>Button</Button>
              </Control>
            </Field>
          </Block>
          <Pagination role={'navigation'} aria-label={'pagination'}>
            <PaginationPrevious title={'This is the first page'} disabled>
              Previous
            </PaginationPrevious>
            <PaginationNext>Next page</PaginationNext>
            <PaginationList>
              <PaginationLink
                aria-label={'Page 1'}
                aria-current={'page'}
                current
              >
                1
              </PaginationLink>
              <PaginationLink aria-label={'Goto page 2'}>2</PaginationLink>
              <PaginationLink aria-label={'Goto page 3'}>3</PaginationLink>
            </PaginationList>
          </Pagination>
          <Progress value={'30'} max={'100'} color={'success'}>
            30%
          </Progress>
          {visible3 && (
            <Notification color={'warning'}>
              <Delete onClick={() => setVisible3(false)} /> Primar lorem ipsum
              dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
            </Notification>
          )}
          {visible4 && (
            <Message color={'danger'}>
              <MessageHeader>
                <p>Error</p>
                <Delete
                  aria-label={'delete'}
                  onClick={() => setVisible4(false)}
                />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
                efficitur.
              </MessageBody>
            </Message>
          )}
        </Column>
      </Columns>
    </>
  )
}

export const StackedBlocksStory = {
  name: 'Stacked blocks',
  parameters: {
    official: { id: 'elements-block/basic/001' },
    docs: {
      source: {
        code: "import { Block } from '@seagreenio/react-bulma'\n\nfunction StackedBlocksDemo() {\n  return (\n    <>\n      <Block>\n        This text is within a <strong>block</strong>.\n      </Block>\n      <Block>\n        This text is within a <strong>second block</strong>. Lorem ipsum dolor\n        sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa\n        fringilla egestas. Nullam condimentum luctus turpis.\n      </Block>\n      <Block>\n        This text is within a <strong>third block</strong>. This block has no\n        margin at the bottom.\n      </Block>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: StackedBlocksDemo,
} satisfies StoryObj

export const WithoutBlocksStory = {
  name: 'Without blocks',
  parameters: {
    official: { id: 'elements-block/basic/002' },
    docs: {
      source: {
        code: "function WithoutBlocksDemo() {\n  return (\n    <>\n      <div>\n        This text is <em>not</em> within a <strong>block</strong>.\n      </div>\n      <div>\n        This text <em>isn't</em> within a <strong>block</strong> either. Lorem\n        ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit\n        amet massa fringilla egestas. Nullam condimentum luctus turpis.\n      </div>\n      <div>\n        This text is also <em>not</em> within a <strong>block</strong>.\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WithoutBlocksDemo,
} satisfies StoryObj

export const SharedBlockSpacingStory = {
  name: 'Shared block spacing',
  parameters: {
    official: { id: 'elements-block/you-re-already-using-it/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Block,\n  Button,\n  Column,\n  Columns,\n  Control,\n  Delete,\n  Field,\n  Input,\n  Message,\n  MessageBody,\n  MessageHeader,\n  Notification,\n  Pagination,\n  PaginationLink,\n  PaginationList,\n  PaginationNext,\n  PaginationPrevious,\n  Progress,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction SharedBlockSpacingDemo() {\n  const [visible1, setVisible1] = useState(true)\n  const [visible2, setVisible2] = useState(true)\n  const [visible3, setVisible3] = useState(true)\n  const [visible4, setVisible4] = useState(true)\n  return (\n    <>\n      <Columns helpers={{ textSize: 6 }}>\n        <Column>\n          <Title helpers={{ mb: 0 }} as={'p'}>\n            Without block\n          </Title>\n          <Block helpers={{ mb: 0 }}>\n            <Field layout={'grouped'}>\n              <Control expanded>\n                <Input type={'text'} placeholder={'Text input'} />\n              </Control>\n              <Control>\n                <Button color={'primary'}>Button</Button>\n              </Control>\n            </Field>\n          </Block>\n          <Pagination\n            role={'navigation'}\n            aria-label={'pagination'}\n            helpers={{ mb: 0 }}\n          >\n            <PaginationPrevious title={'This is the first page'} disabled>\n              Previous\n            </PaginationPrevious>\n            <PaginationNext>Next page</PaginationNext>\n            <PaginationList>\n              <PaginationLink\n                aria-label={'Page 1'}\n                aria-current={'page'}\n                current\n              >\n                1\n              </PaginationLink>\n              <PaginationLink aria-label={'Goto page 2'}>2</PaginationLink>\n              <PaginationLink aria-label={'Goto page 3'}>3</PaginationLink>\n            </PaginationList>\n          </Pagination>\n          <Progress\n            value={'30'}\n            max={'100'}\n            color={'success'}\n            helpers={{ mb: 0 }}\n          >\n            30%\n          </Progress>\n          {visible1 && (\n            <Notification color={'warning'} helpers={{ mb: 0 }}>\n              <Delete onClick={() => setVisible1(false)} /> Primar lorem ipsum\n              dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\n            </Notification>\n          )}\n          {visible2 && (\n            <Message color={'danger'} helpers={{ mb: 0 }}>\n              <MessageHeader>\n                <p>Error</p>\n                <Delete\n                  aria-label={'delete'}\n                  onClick={() => setVisible2(false)}\n                />\n              </MessageHeader>\n              <MessageBody>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.\n                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}\n                efficitur.\n              </MessageBody>\n            </Message>\n          )}\n        </Column>\n        <Column>\n          <Title as={'p'}>With block</Title>\n          <Block>\n            <Field layout={'grouped'}>\n              <Control expanded>\n                <Input type={'text'} placeholder={'Text input'} />\n              </Control>\n              <Control>\n                <Button color={'primary'}>Button</Button>\n              </Control>\n            </Field>\n          </Block>\n          <Pagination role={'navigation'} aria-label={'pagination'}>\n            <PaginationPrevious title={'This is the first page'} disabled>\n              Previous\n            </PaginationPrevious>\n            <PaginationNext>Next page</PaginationNext>\n            <PaginationList>\n              <PaginationLink\n                aria-label={'Page 1'}\n                aria-current={'page'}\n                current\n              >\n                1\n              </PaginationLink>\n              <PaginationLink aria-label={'Goto page 2'}>2</PaginationLink>\n              <PaginationLink aria-label={'Goto page 3'}>3</PaginationLink>\n            </PaginationList>\n          </Pagination>\n          <Progress value={'30'} max={'100'} color={'success'}>\n            30%\n          </Progress>\n          {visible3 && (\n            <Notification color={'warning'}>\n              <Delete onClick={() => setVisible3(false)} /> Primar lorem ipsum\n              dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\n            </Notification>\n          )}\n          {visible4 && (\n            <Message color={'danger'}>\n              <MessageHeader>\n                <p>Error</p>\n                <Delete\n                  aria-label={'delete'}\n                  onClick={() => setVisible4(false)}\n                />\n              </MessageHeader>\n              <MessageBody>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.\n                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}\n                efficitur.\n              </MessageBody>\n            </Message>\n          )}\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SharedBlockSpacingDemo,
} satisfies StoryObj

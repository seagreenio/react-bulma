import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import {
  Block,
  Delete,
  Message,
  MessageBody,
  MessageHeader,
  Notification,
  Tag,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-delete',
      title: 'Delete',
      url: 'https://bulma.io/documentation/elements/delete/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-delete',
  title: 'CSS Library/Elements/Delete',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-delete" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Delete'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A versatile '}
          <strong data-official-prose="">{'delete'}</strong>
          {' cross'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'delete'}</code>
            {
              ' element is a stand-alone element that can be used in different contexts.'
            }
          </p>
          <p data-official-prose="">
            {"On its own, it's a simple circle with a cross:"}
          </p>
        </div>
        <div data-official-example="elements-delete/basic/001">
          <Canvas of={DeleteButtonStory} />
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
            {'It comes in '}
            <strong data-official-prose="">{'4 sizes'}</strong>
            {':'}
          </p>
        </div>
        <div data-official-example="elements-delete/sizes/001">
          <Canvas of={DeleteSizesStory} />
        </div>
        <h3
          data-official-prose=""
          id={'combinations'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Combinations '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#combinations'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Bulma uses it for the '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/elements/tag/'}
            >
              {'tags'}
            </a>
            {', the '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/elements/notification/'}
            >
              {'notifications'}
            </a>
            {', and the '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/components/message/'}
            >
              {'messages'}
            </a>
            {': '}
          </p>
        </div>
        <div data-official-example="elements-delete/combinations/001">
          <Canvas of={TagsNotificationsAndMessagesStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DeleteButtonDemo() {
  return (
    <>
      <Delete />
    </>
  )
}

function DeleteSizesDemo() {
  return (
    <>
      <Delete size={'small'} /> <Delete /> <Delete size={'medium'} />{' '}
      <Delete size={'large'} />
    </>
  )
}

function TagsNotificationsAndMessagesDemo() {
  const [visible1, setVisible1] = useState(true)
  const [visible2, setVisible2] = useState(true)
  return (
    <>
      <Block>
        <Tag color={'success'}>
          Hello World
          <Delete size={'small'} />
        </Tag>
      </Block>
      {visible1 && (
        <Notification color={'danger'}>
          <Delete onClick={() => setVisible1(false)} /> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
      )}
      {visible2 && (
        <Message color={'info'}>
          <MessageHeader>
            Info
            <Delete onClick={() => setVisible2(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
            diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus,
            in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui
            urna, vehicula et sem eget, facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

export const DeleteButtonStory = {
  name: 'Delete button',
  parameters: {
    official: { id: 'elements-delete/basic/001' },
    docs: {
      source: {
        code: "import { Delete } from '@seagreenio/react-bulma'\n\nfunction DeleteButtonDemo() {\n  return (\n    <>\n      <Delete />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DeleteButtonDemo,
} satisfies StoryObj

export const DeleteSizesStory = {
  name: 'Delete sizes',
  parameters: {
    official: { id: 'elements-delete/sizes/001' },
    docs: {
      source: {
        code: "import { Delete } from '@seagreenio/react-bulma'\n\nfunction DeleteSizesDemo() {\n  return (\n    <>\n      <Delete size={'small'} /> <Delete /> <Delete size={'medium'} />{' '}\n      <Delete size={'large'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DeleteSizesDemo,
} satisfies StoryObj

export const TagsNotificationsAndMessagesStory = {
  name: 'Tags, notifications and messages',
  parameters: {
    official: { id: 'elements-delete/combinations/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Block,\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n  Notification,\n  Tag,\n} from '@seagreenio/react-bulma'\n\nfunction TagsNotificationsAndMessagesDemo() {\n  const [visible1, setVisible1] = useState(true)\n  const [visible2, setVisible2] = useState(true)\n  return (\n    <>\n      <Block>\n        <Tag color={'success'}>\n          Hello World\n          <Delete size={'small'} />\n        </Tag>\n      </Block>\n      {visible1 && (\n        <Notification color={'danger'}>\n          <Delete onClick={() => setVisible1(false)} /> Lorem ipsum dolor sit\n          amet, consectetur adipiscing elit lorem ipsum dolor sit amet,\n          consectetur adipiscing elit\n        </Notification>\n      )}\n      {visible2 && (\n        <Message color={'info'}>\n          <MessageHeader>\n            Info\n            <Delete onClick={() => setVisible2(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.\n            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n            diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus,\n            in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,\n            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui\n            urna, vehicula et sem eget, facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TagsNotificationsAndMessagesDemo,
} satisfies StoryObj

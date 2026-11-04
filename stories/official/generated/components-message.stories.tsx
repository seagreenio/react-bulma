import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import { Delete, Message, MessageBody, MessageHeader } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-message',
      title: 'Message',
      url: 'https://bulma.io/documentation/components/message/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-message',
  title: 'CSS Library/Components/Message',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-message" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Message'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Colored '}
          <strong data-official-prose="">{'message'}</strong>
          {' blocks, to emphasize part of your page'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The Bulma '}
            <code data-official-prose="">{'message'}</code>
            {' is a multi-part component:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {'the '}
              <code data-official-prose="">{'message'}</code>
              {' container'}
            </li>
            <li data-official-prose="">
              {' the optional '}
              <code data-official-prose="">{'message-header'}</code>
              {' that can hold a title and a '}
              <code data-official-prose="">{'delete'}</code>
              {' element '}
            </li>
            <li data-official-prose="">
              {'the '}
              <code data-official-prose="">{'message-body'}</code>
              {' for the longer body of the message'}
            </li>
          </ul>
        </div>
        <div data-official-example="components-message/basic/001">
          <Canvas of={DefaultMessageStory} />
        </div>
        <h3
          data-official-prose=""
          id={'colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Colors '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#colors'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The message component is available in all the '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'. '}
          </p>
        </div>
        <div data-official-example="components-message/colors/001">
          <Canvas of={DarkMessageStory} />
        </div>
        <div data-official-example="components-message/colors/002">
          <Canvas of={LinkMessageStory} />
        </div>
        <div data-official-example="components-message/colors/003">
          <Canvas of={PrimaryMessageStory} />
        </div>
        <div data-official-example="components-message/colors/004">
          <Canvas of={InfoMessageStory} />
        </div>
        <div data-official-example="components-message/colors/005">
          <Canvas of={SuccessMessageStory} />
        </div>
        <div data-official-example="components-message/colors/006">
          <Canvas of={WarningMessageStory} />
        </div>
        <div data-official-example="components-message/colors/007">
          <Canvas of={DangerMessageStory} />
        </div>
        <h3
          data-official-prose=""
          id={'message-body-only'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Message body only '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#message-body-only'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can remove the '}
            <code data-official-prose="">{'message-header'}</code>
            {" if you don't need it, which will add a left border to the "}
            <code data-official-prose="">{'message-body'}</code>
            {': '}
          </p>
        </div>
        <div data-official-example="components-message/message-body-only/001">
          <Canvas of={BodyOnlyMessageStory} />
        </div>
        <div data-official-example="components-message/message-body-only/002">
          <Canvas of={DarkBodyOnlyMessageStory} />
        </div>
        <div data-official-example="components-message/message-body-only/003">
          <Canvas of={LinkBodyOnlyMessageStory} />
        </div>
        <div data-official-example="components-message/message-body-only/004">
          <Canvas of={PrimaryBodyOnlyMessageStory} />
        </div>
        <div data-official-example="components-message/message-body-only/005">
          <Canvas of={InfoBodyOnlyMessageStory} />
        </div>
        <div data-official-example="components-message/message-body-only/006">
          <Canvas of={SuccessBodyOnlyMessageStory} />
        </div>
        <div data-official-example="components-message/message-body-only/007">
          <Canvas of={WarningBodyOnlyMessageStory} />
        </div>
        <div data-official-example="components-message/message-body-only/008">
          <Canvas of={DangerBodyOnlyMessageStory} />
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
            {' You can add one of '}
            <strong data-official-prose="">{'3 size modifiers'}</strong>
            {' to the '}
            <code data-official-prose="">{'message'}</code>
            {' component: '}
          </p>
        </div>
        <div data-official-example="components-message/sizes/001">
          <Canvas of={SmallMessageStory} />
        </div>
        <div data-official-example="components-message/sizes/002">
          <Canvas of={NormalMessageStory} />
        </div>
        <div data-official-example="components-message/sizes/003">
          <Canvas of={MediumMessageStory} />
        </div>
        <div data-official-example="components-message/sizes/004">
          <Canvas of={LargeMessageStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message>
          <MessageHeader>
            <p>Hello World</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function DarkMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message color={'dark'}>
          <MessageHeader>
            <p>Dark</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function LinkMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message color={'link'}>
          <MessageHeader>
            <p>Link</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function PrimaryMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message color={'primary'}>
          <MessageHeader>
            <p>Primary</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function InfoMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message color={'info'}>
          <MessageHeader>
            <p>Info</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function SuccessMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message color={'success'}>
          <MessageHeader>
            <p>Success</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function WarningMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message color={'warning'}>
          <MessageHeader>
            <p>Warning</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function DangerMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message color={'danger'}>
          <MessageHeader>
            <p>Danger</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function BodyOnlyMessageDemo() {
  return (
    <>
      <Message>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function DarkBodyOnlyMessageDemo() {
  return (
    <>
      <Message color={'dark'}>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function LinkBodyOnlyMessageDemo() {
  return (
    <>
      <Message color={'link'}>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function PrimaryBodyOnlyMessageDemo() {
  return (
    <>
      <Message color={'primary'}>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function InfoBodyOnlyMessageDemo() {
  return (
    <>
      <Message color={'info'}>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function SuccessBodyOnlyMessageDemo() {
  return (
    <>
      <Message color={'success'}>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function WarningBodyOnlyMessageDemo() {
  return (
    <>
      <Message color={'warning'}>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function DangerBodyOnlyMessageDemo() {
  return (
    <>
      <Message color={'danger'}>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </Message>
    </>
  )
}

function SmallMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message size={'small'}>
          <MessageHeader>
            <p>Small message</p>
            <Delete
              aria-label={'delete'}
              size={'small'}
              onClick={() => setVisible1(false)}
            />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla.Nullam gravida purus diam, et dictum{' '}
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,
            in mollis lectus.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function NormalMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message>
          <MessageHeader>
            <p>Normal message</p>
            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla.Nullam gravida purus diam, et dictum{' '}
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,
            in mollis lectus.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function MediumMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message size={'medium'}>
          <MessageHeader>
            <p>Medium message</p>
            <Delete
              aria-label={'delete'}
              size={'medium'}
              onClick={() => setVisible1(false)}
            />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla.Nullam gravida purus diam, et dictum{' '}
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,
            in mollis lectus.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

function LargeMessageDemo() {
  const [visible1, setVisible1] = useState(true)
  return (
    <>
      {visible1 && (
        <Message size={'large'}>
          <MessageHeader>
            <p>Large message</p>
            <Delete
              aria-label={'delete'}
              size={'large'}
              onClick={() => setVisible1(false)}
            />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla.Nullam gravida purus diam, et dictum{' '}
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,
            in mollis lectus.
          </MessageBody>
        </Message>
      )}
    </>
  )
}

export const DefaultMessageStory = {
  name: 'Default message',
  parameters: {
    official: { id: 'components-message/basic/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction DefaultMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message>\n          <MessageHeader>\n            <p>Hello World</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultMessageDemo,
} satisfies StoryObj

export const DarkMessageStory = {
  name: 'Dark message',
  parameters: {
    official: { id: 'components-message/colors/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction DarkMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message color={'dark'}>\n          <MessageHeader>\n            <p>Dark</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DarkMessageDemo,
} satisfies StoryObj

export const LinkMessageStory = {
  name: 'Link message',
  parameters: {
    official: { id: 'components-message/colors/002' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction LinkMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message color={'link'}>\n          <MessageHeader>\n            <p>Link</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkMessageDemo,
} satisfies StoryObj

export const PrimaryMessageStory = {
  name: 'Primary message',
  parameters: {
    official: { id: 'components-message/colors/003' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction PrimaryMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message color={'primary'}>\n          <MessageHeader>\n            <p>Primary</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryMessageDemo,
} satisfies StoryObj

export const InfoMessageStory = {
  name: 'Info message',
  parameters: {
    official: { id: 'components-message/colors/004' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction InfoMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message color={'info'}>\n          <MessageHeader>\n            <p>Info</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoMessageDemo,
} satisfies StoryObj

export const SuccessMessageStory = {
  name: 'Success message',
  parameters: {
    official: { id: 'components-message/colors/005' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction SuccessMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message color={'success'}>\n          <MessageHeader>\n            <p>Success</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessMessageDemo,
} satisfies StoryObj

export const WarningMessageStory = {
  name: 'Warning message',
  parameters: {
    official: { id: 'components-message/colors/006' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction WarningMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message color={'warning'}>\n          <MessageHeader>\n            <p>Warning</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningMessageDemo,
} satisfies StoryObj

export const DangerMessageStory = {
  name: 'Danger message',
  parameters: {
    official: { id: 'components-message/colors/007' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction DangerMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message color={'danger'}>\n          <MessageHeader>\n            <p>Danger</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,\n            arcu et sollicitudin porttitor, tortor urna tempor ligula, id\n            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,\n            facilisis sodales sem.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerMessageDemo,
} satisfies StoryObj

export const BodyOnlyMessageStory = {
  name: 'Body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/001' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction BodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BodyOnlyMessageDemo,
} satisfies StoryObj

export const DarkBodyOnlyMessageStory = {
  name: 'Dark body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/002' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction DarkBodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message color={'dark'}>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DarkBodyOnlyMessageDemo,
} satisfies StoryObj

export const LinkBodyOnlyMessageStory = {
  name: 'Link body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/003' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction LinkBodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message color={'link'}>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkBodyOnlyMessageDemo,
} satisfies StoryObj

export const PrimaryBodyOnlyMessageStory = {
  name: 'Primary body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/004' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction PrimaryBodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message color={'primary'}>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryBodyOnlyMessageDemo,
} satisfies StoryObj

export const InfoBodyOnlyMessageStory = {
  name: 'Info body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/005' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction InfoBodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message color={'info'}>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoBodyOnlyMessageDemo,
} satisfies StoryObj

export const SuccessBodyOnlyMessageStory = {
  name: 'Success body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/006' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction SuccessBodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message color={'success'}>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessBodyOnlyMessageDemo,
} satisfies StoryObj

export const WarningBodyOnlyMessageStory = {
  name: 'Warning body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/007' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction WarningBodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message color={'warning'}>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningBodyOnlyMessageDemo,
} satisfies StoryObj

export const DangerBodyOnlyMessageStory = {
  name: 'Danger body-only message',
  parameters: {
    official: { id: 'components-message/message-body-only/008' },
    docs: {
      source: {
        code: "import { Message, MessageBody } from '@seagreenio/react-bulma'\n\nfunction DangerBodyOnlyMessageDemo() {\n  return (\n    <>\n      <Message color={'danger'}>\n        <MessageBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta\n          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida\n          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}\n          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi\n          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales\n          sem.\n        </MessageBody>\n      </Message>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerBodyOnlyMessageDemo,
} satisfies StoryObj

export const SmallMessageStory = {
  name: 'Small message',
  parameters: {
    official: { id: 'components-message/sizes/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction SmallMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message size={'small'}>\n          <MessageHeader>\n            <p>Small message</p>\n            <Delete\n              aria-label={'delete'}\n              size={'small'}\n              onClick={() => setVisible1(false)}\n            />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla.Nullam gravida purus diam, et dictum{' '}\n            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,\n            in mollis lectus.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallMessageDemo,
} satisfies StoryObj

export const NormalMessageStory = {
  name: 'Normal message',
  parameters: {
    official: { id: 'components-message/sizes/002' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction NormalMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message>\n          <MessageHeader>\n            <p>Normal message</p>\n            <Delete aria-label={'delete'} onClick={() => setVisible1(false)} />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla.Nullam gravida purus diam, et dictum{' '}\n            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,\n            in mollis lectus.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalMessageDemo,
} satisfies StoryObj

export const MediumMessageStory = {
  name: 'Medium message',
  parameters: {
    official: { id: 'components-message/sizes/003' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction MediumMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message size={'medium'}>\n          <MessageHeader>\n            <p>Medium message</p>\n            <Delete\n              aria-label={'delete'}\n              size={'medium'}\n              onClick={() => setVisible1(false)}\n            />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla.Nullam gravida purus diam, et dictum{' '}\n            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,\n            in mollis lectus.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumMessageDemo,
} satisfies StoryObj

export const LargeMessageStory = {
  name: 'Large message',
  parameters: {
    official: { id: 'components-message/sizes/004' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport {\n  Delete,\n  Message,\n  MessageBody,\n  MessageHeader,\n} from '@seagreenio/react-bulma'\n\nfunction LargeMessageDemo() {\n  const [visible1, setVisible1] = useState(true)\n  return (\n    <>\n      {visible1 && (\n        <Message size={'large'}>\n          <MessageHeader>\n            <p>Large message</p>\n            <Delete\n              aria-label={'delete'}\n              size={'large'}\n              onClick={() => setVisible1(false)}\n            />\n          </MessageHeader>\n          <MessageBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n            porta nec nulla.Nullam gravida purus diam, et dictum{' '}\n            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>,\n            in mollis lectus.\n          </MessageBody>\n        </Message>\n      )}\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeMessageDemo,
} satisfies StoryObj

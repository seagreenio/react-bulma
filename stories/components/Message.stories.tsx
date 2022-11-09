import React from 'react'

import { Delete, Message, MessageBody, MessageHeader } from '../..'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

export default {
  title: 'Components/Message',
  component: Message,
}

export const Default = () => (
  <Message>
    <MessageHeader>
      <p>Hello World</p>
      <Delete />
    </MessageHeader>
    <MessageBody>{text}</MessageBody>
  </Message>
)

export const Colors = () => (
  <>
    <Message color="dark">
      <MessageHeader>
        <p>Dark</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="primary">
      <MessageHeader>
        <p>Primary</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="link">
      <MessageHeader>
        <p>Link</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="info">
      <MessageHeader>
        <p>Info</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="success">
      <MessageHeader>
        <p>Success</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="warning">
      <MessageHeader>
        <p>Warning</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="danger">
      <MessageHeader>
        <p>Danger</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
  </>
)

export const MessageBodyOnly = () => (
  <>
    <Message color="dark">
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="primary">
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="link">
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="info">
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="success">
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="warning">
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message color="danger">
      <MessageBody>{text}</MessageBody>
    </Message>
  </>
)

export const Sizes = () => (
  <>
    <Message size="small">
      <MessageHeader>
        <p>Small Message</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message>
      <MessageHeader>
        <p>Normal Message</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message size="medium">
      <MessageHeader>
        <p>Medium Message</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
    <Message size="large">
      <MessageHeader>
        <p>Large Message</p>
        <Delete />
      </MessageHeader>
      <MessageBody>{text}</MessageBody>
    </Message>
  </>
)

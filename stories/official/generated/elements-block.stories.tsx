import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import { createBulma } from '../../../src'
import { officialPage } from '../support'

const ui = createBulma()

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
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Block'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {"Bulma's most basic spacer "}
          <strong data-official-prose="">{'block'}</strong>
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n\n\n\n\n\n\n'}
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'block'}</code>
            {' element is a simple '}
            <strong data-official-prose="">{'spacer tool'}</strong>
            {'. It allows '}
            <strong data-official-prose="">{'sibling'}</strong>
            {
              ' HTML\n    elements to have a consistent margin between them:\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-block/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    As you can see, the first two blocks have a '}
            <code data-official-prose="">{'margin-bottom'}</code>
            {' applied, but\n    '}
            <strong data-official-prose="">{'not the third .'}</strong>
            {'. That is because Bulma applies a space on all blocks,\n    '}
            <strong data-official-prose="">{'except the last one'}</strong>
            {
              '. This means you can use as many blocks as you want, the spacing will only\n    appear '
            }
            <strong data-official-prose="">{'between them'}</strong>
            {'.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'Without using '}
            <code data-official-prose="">{'block'}</code>
            {', the HTML elements would have no space between them:'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-block/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'you-re-already-using-it'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {"\n    You're already using it\n  "}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#you-re-already-using-it'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {"\n    As a matter of fact, you're "}
            <strong data-official-prose="">{'already using'}</strong>
            {' the '}
            <code data-official-prose="">{'block'}</code>
            {' without knowing it. Its CSS\n    properties are '}
            <strong data-official-prose="">{'shared'}</strong>
            {' across several Bulma elements and components:\n  '}
          </p>
          {'\n\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'breadcrumb'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'level'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'message'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'pagination'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'tabs'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'box'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'content'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'notification'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'other'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'progress'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'table'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'title'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n\n  '}
          <p data-official-prose="">
            {'This is thanks to the '}
            <code data-official-prose="">{'@extend %block'}</code>
            {' Sass placeholder feature.'}
          </p>
          {'\n\n  '}
          <p data-official-prose="">
            {"Here's how it would look like in comparison:"}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="elements-block/you-re-already-using-it/001">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    No matter which Bulma elements and components you are using, and no matter their order, they will have a\n    '
            }
            <strong data-official-prose="">{'consistent space'}</strong>
            {' between them.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'one-line-of-css'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    One line of CSS\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#one-line-of-css'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    As you can see, the CSS of the '}
            <code data-official-prose="">{'block'}</code>
            {' is very simple: it applies a '}
            <code data-official-prose="">{'margin-bottom'}</code>
            {' on all\n    siblings, '}
            <strong data-official-prose="">{'except the last one'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-css'}>
              {'\n\n.block:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n'}
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              'This prevents the last sibling from adding unnecessary space at the bottom.'
            }
          </p>
          {'\n'}
        </div>
        {'\n\n\n\n\n\n\n\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'sass-and-css-variables'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Sass and CSS variables\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sass-and-css-variables'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n'}
        <div
          data-official-prose=""
          className={'bd-vars-table block table-container'}
        >
          {'\n  '}
          <table data-official-prose="">
            {'\n    '}
            <thead data-official-prose="">
              {'\n      '}
              <tr data-official-prose="">
                {'\n        '}
                <th data-official-prose="">
                  {'\n          '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n            '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-link'}
                    >
                      <i data-official-prose="" className={'fab fa-css3'}></i>
                    </span>
                    {'\n            '}
                    <span data-official-prose="">{'CSS Variable'}</span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </th>
                {'\n        '}
                <th data-official-prose="">
                  {'\n          '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n            '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-success'}
                    >
                      <i data-official-prose="" className={'fas fa-code'}></i>
                    </span>
                    {'\n            '}
                    <span data-official-prose="">{'Value'}</span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </th>
                {'\n      '}
              </tr>
              {'\n    '}
            </thead>
            {'\n\n    '}
            <tbody data-official-prose="">
              {'\n      \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'var(--bulma-block-spacing)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.5rem'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n      \n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Block>
        {'\n  This text is within a '}
        <strong>{'block'}</strong>
        {'.\n'}
      </ui.Block>
      {'\n'}
      <ui.Block>
        {'\n  This text is within a '}
        <strong>{'second block'}</strong>
        {
          '. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.\n'
        }
      </ui.Block>
      {'\n'}
      <ui.Block>
        {'\n  This text is within a '}
        <strong>{'third block'}</strong>
        {'. This block has no margin at the bottom.\n'}
      </ui.Block>
      {'\n\n        \n      '}
    </>
  )
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <div>
        {'\n  This text is '}
        <em>{'not'}</em>
        {' within a '}
        <strong>{'block'}</strong>
        {'.\n'}
      </div>
      {'\n'}
      <div>
        {'\n  This text '}
        <em>{"isn't"}</em>
        {' within a '}
        <strong>{'block'}</strong>
        {
          ' either. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.\n'
        }
      </div>
      {'\n'}
      <div>
        {'\n  This text is also '}
        <em>{'not'}</em>
        {' within a '}
        <strong>{'block'}</strong>
        {'.\n'}
      </div>
      {'\n\n        \n      '}
    </>
  )
}

function Example003Demo() {
  const [visible1, setVisible1] = useState(true)
  const [visible2, setVisible2] = useState(true)
  const [visible3, setVisible3] = useState(true)
  const [visible4, setVisible4] = useState(true)
  return (
    <>
      <ui.Columns helpers={{ textSize: 6 }}>
        {'\n  '}
        <ui.Column>
          {'\n    \n'}
          <ui.Title helpers={{ mb: 0 }} as={'p'}>
            {'Without block'}
          </ui.Title>
          {'\n'}
          <ui.Block helpers={{ mb: 0 }}>
            {'\n  '}
            <ui.Field layout={'grouped'}>
              {'\n    '}
              <ui.Control expanded>
                {'\n      '}
                <ui.Input type={'text'} placeholder={'Text input'} />
                {'\n    '}
              </ui.Control>
              {'\n    '}
              <ui.Control>
                {'\n      '}
                <ui.Button color={'primary'}>{'Button'}</ui.Button>
                {'\n    '}
              </ui.Control>
              {'\n  '}
            </ui.Field>
            {'\n'}
          </ui.Block>
          {'\n'}
          <ui.Pagination
            role={'navigation'}
            aria-label={'pagination'}
            helpers={{ mb: 0 }}
          >
            {'\n  '}
            <ui.PaginationPrevious title={'This is the first page'} disabled>
              {'Previous'}
            </ui.PaginationPrevious>
            {'\n  '}
            <ui.PaginationNext>{'Next page'}</ui.PaginationNext>
            {'\n  '}
            <ui.PaginationList>
              {'\n    '}
              <ui.PaginationLink
                aria-label={'Page 1'}
                aria-current={'page'}
                current
              >
                {'1'}
              </ui.PaginationLink>
              {'\n    '}
              <ui.PaginationLink aria-label={'Goto page 2'}>
                {'2'}
              </ui.PaginationLink>
              {'\n    '}
              <ui.PaginationLink aria-label={'Goto page 3'}>
                {'3'}
              </ui.PaginationLink>
              {'\n  '}
            </ui.PaginationList>
            {'\n'}
          </ui.Pagination>
          {'\n'}
          <ui.Progress
            value={'30'}
            max={'100'}
            color={'success'}
            helpers={{ mb: 0 }}
          >
            {'30%'}
          </ui.Progress>
          {'\n'}
          {visible1 && (
            <ui.Notification color={'warning'} helpers={{ mb: 0 }}>
              {'\n  '}
              <ui.Delete onClick={() => setVisible1(false)} />
              {
                '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\n'
              }
            </ui.Notification>
          )}
          {'\n'}
          {visible2 && (
            <ui.Message color={'danger'} helpers={{ mb: 0 }}>
              {'\n  '}
              <ui.MessageHeader>
                {'\n    '}
                <p>{'Error'}</p>
                {'\n    '}
                <ui.Delete
                  aria-label={'delete'}
                  onClick={() => setVisible2(false)}
                />
                {'\n  '}
              </ui.MessageHeader>
              {'\n  '}
              <ui.MessageBody>
                {
                  '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                }
                <strong>{'Pellentesque risus mi'}</strong>
                {
                  ', tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum '
                }
                <a>{'felis venenatis'}</a>
                {' efficitur.\n  '}
              </ui.MessageBody>
              {'\n'}
            </ui.Message>
          )}
          {'\n\n  '}
        </ui.Column>
        {'\n  '}
        <ui.Column>
          {'\n    \n'}
          <ui.Title as={'p'}>{'With block'}</ui.Title>
          {'\n'}
          <ui.Block>
            {'\n  '}
            <ui.Field layout={'grouped'}>
              {'\n    '}
              <ui.Control expanded>
                {'\n      '}
                <ui.Input type={'text'} placeholder={'Text input'} />
                {'\n    '}
              </ui.Control>
              {'\n    '}
              <ui.Control>
                {'\n      '}
                <ui.Button color={'primary'}>{'Button'}</ui.Button>
                {'\n    '}
              </ui.Control>
              {'\n  '}
            </ui.Field>
            {'\n'}
          </ui.Block>
          {'\n'}
          <ui.Pagination role={'navigation'} aria-label={'pagination'}>
            {'\n  '}
            <ui.PaginationPrevious title={'This is the first page'} disabled>
              {'Previous'}
            </ui.PaginationPrevious>
            {'\n  '}
            <ui.PaginationNext>{'Next page'}</ui.PaginationNext>
            {'\n  '}
            <ui.PaginationList>
              {'\n    '}
              <ui.PaginationLink
                aria-label={'Page 1'}
                aria-current={'page'}
                current
              >
                {'1'}
              </ui.PaginationLink>
              {'\n    '}
              <ui.PaginationLink aria-label={'Goto page 2'}>
                {'2'}
              </ui.PaginationLink>
              {'\n    '}
              <ui.PaginationLink aria-label={'Goto page 3'}>
                {'3'}
              </ui.PaginationLink>
              {'\n  '}
            </ui.PaginationList>
            {'\n'}
          </ui.Pagination>
          {'\n'}
          <ui.Progress value={'30'} max={'100'} color={'success'}>
            {'30%'}
          </ui.Progress>
          {'\n'}
          {visible3 && (
            <ui.Notification color={'warning'}>
              {'\n  '}
              <ui.Delete onClick={() => setVisible3(false)} />
              {
                '\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\n'
              }
            </ui.Notification>
          )}
          {'\n'}
          {visible4 && (
            <ui.Message color={'danger'}>
              {'\n  '}
              <ui.MessageHeader>
                {'\n    '}
                <p>{'Error'}</p>
                {'\n    '}
                <ui.Delete
                  aria-label={'delete'}
                  onClick={() => setVisible4(false)}
                />
                {'\n  '}
              </ui.MessageHeader>
              {'\n  '}
              <ui.MessageBody>
                {
                  '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                }
                <strong>{'Pellentesque risus mi'}</strong>
                {
                  ', tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum '
                }
                <a>{'felis venenatis'}</a>
                {' efficitur.\n  '}
              </ui.MessageBody>
              {'\n'}
            </ui.Message>
          )}
          {'\n\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'Block 01',
  parameters: {
    official: { id: 'elements-block/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Block>{"\\n  This text is within a "}<strong>{"block"}</strong>{".\\n"}</ui.Block>{"\\n"}<ui.Block>{"\\n  This text is within a "}<strong>{"second block"}</strong>{". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.\\n"}</ui.Block>{"\\n"}<ui.Block>{"\\n  This text is within a "}<strong>{"third block"}</strong>{". This block has no margin at the bottom.\\n"}</ui.Block>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Block 02',
  parameters: {
    official: { id: 'elements-block/basic/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<div>{"\\n  This text is "}<em>{"not"}</em>{" within a "}<strong>{"block"}</strong>{".\\n"}</div>{"\\n"}<div>{"\\n  This text "}<em>{"isn\'t"}</em>{" within a "}<strong>{"block"}</strong>{" either. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.\\n"}</div>{"\\n"}<div>{"\\n  This text is also "}<em>{"not"}</em>{" within a "}<strong>{"block"}</strong>{".\\n"}</div>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'you re already using it 01',
  parameters: {
    official: { id: 'elements-block/you-re-already-using-it/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  const [visible1, setVisible1] = useState(true);\n  const [visible2, setVisible2] = useState(true);\n  const [visible3, setVisible3] = useState(true);\n  const [visible4, setVisible4] = useState(true);\n  return (<><ui.Columns helpers={{"textSize":6}}>{"\\n  "}<ui.Column>{"\\n    \\n"}<ui.Title helpers={{"mb":0}} as={"p"}>{"Without block"}</ui.Title>{"\\n"}<ui.Block helpers={{"mb":0}}>{"\\n  "}<ui.Field layout={"grouped"}>{"\\n    "}<ui.Control expanded>{"\\n      "}<ui.Input type={"text"} placeholder={"Text input"} />{"\\n    "}</ui.Control>{"\\n    "}<ui.Control>{"\\n      "}<ui.Button color={"primary"}>{"Button"}</ui.Button>{"\\n    "}</ui.Control>{"\\n  "}</ui.Field>{"\\n"}</ui.Block>{"\\n"}<ui.Pagination role={"navigation"} aria-label={"pagination"} helpers={{"mb":0}}>{"\\n  "}<ui.PaginationPrevious title={"This is the first page"} disabled>{"Previous"}</ui.PaginationPrevious>{"\\n  "}<ui.PaginationNext>{"Next page"}</ui.PaginationNext>{"\\n  "}<ui.PaginationList>{"\\n    "}<ui.PaginationLink aria-label={"Page 1"} aria-current={"page"} current>{"1"}</ui.PaginationLink>{"\\n    "}<ui.PaginationLink aria-label={"Goto page 2"}>{"2"}</ui.PaginationLink>{"\\n    "}<ui.PaginationLink aria-label={"Goto page 3"}>{"3"}</ui.PaginationLink>{"\\n  "}</ui.PaginationList>{"\\n"}</ui.Pagination>{"\\n"}<ui.Progress value={"30"} max={"100"} color={"success"} helpers={{"mb":0}}>{"30%"}</ui.Progress>{"\\n"}{visible1 && (<ui.Notification color={"warning"} helpers={{"mb":0}}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\\n"}</ui.Notification>)}{"\\n"}{visible2 && (<ui.Message color={"danger"} helpers={{"mb":0}}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Error"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible2(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n  "}</ui.Column>{"\\n  "}<ui.Column>{"\\n    \\n"}<ui.Title as={"p"}>{"With block"}</ui.Title>{"\\n"}<ui.Block>{"\\n  "}<ui.Field layout={"grouped"}>{"\\n    "}<ui.Control expanded>{"\\n      "}<ui.Input type={"text"} placeholder={"Text input"} />{"\\n    "}</ui.Control>{"\\n    "}<ui.Control>{"\\n      "}<ui.Button color={"primary"}>{"Button"}</ui.Button>{"\\n    "}</ui.Control>{"\\n  "}</ui.Field>{"\\n"}</ui.Block>{"\\n"}<ui.Pagination role={"navigation"} aria-label={"pagination"}>{"\\n  "}<ui.PaginationPrevious title={"This is the first page"} disabled>{"Previous"}</ui.PaginationPrevious>{"\\n  "}<ui.PaginationNext>{"Next page"}</ui.PaginationNext>{"\\n  "}<ui.PaginationList>{"\\n    "}<ui.PaginationLink aria-label={"Page 1"} aria-current={"page"} current>{"1"}</ui.PaginationLink>{"\\n    "}<ui.PaginationLink aria-label={"Goto page 2"}>{"2"}</ui.PaginationLink>{"\\n    "}<ui.PaginationLink aria-label={"Goto page 3"}>{"3"}</ui.PaginationLink>{"\\n  "}</ui.PaginationList>{"\\n"}</ui.Pagination>{"\\n"}<ui.Progress value={"30"} max={"100"} color={"success"}>{"30%"}</ui.Progress>{"\\n"}{visible3 && (<ui.Notification color={"warning"}>{"\\n  "}<ui.Delete onClick={() => setVisible3(false)} />{"\\n  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\\n"}</ui.Notification>)}{"\\n"}{visible4 && (<ui.Message color={"danger"}>{"\\n  "}<ui.MessageHeader>{"\\n    "}<p>{"Error"}</p>{"\\n    "}<ui.Delete aria-label={"delete"} onClick={() => setVisible4(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}<strong>{"Pellentesque risus mi"}</strong>{", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "}<a>{"felis venenatis"}</a>{" efficitur.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

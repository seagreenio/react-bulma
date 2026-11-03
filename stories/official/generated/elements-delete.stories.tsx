import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from '@storybook/addon-docs/blocks';
import { OfficialDocument } from '../document';
import { useState } from 'react';
import { createBulma } from '../../../src';
import { officialPage } from '../support';

const ui = createBulma();

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
} satisfies Meta;
export default meta;

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-delete" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Delete'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A versatile '}
          <strong data-official-prose="">{'delete'}</strong>
          {' cross'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'delete'}</code>
            {
              ' element is a stand-alone element that can be used in different contexts.'
            }
          </p>
          {'\n  '}
          <p data-official-prose="">
            {"On its own, it's a simple circle with a cross:"}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-delete/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'sizes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Sizes\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#sizes'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'It comes in '}
            <strong data-official-prose="">{'4 sizes'}</strong>
            {':'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-delete/sizes/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'combinations'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Combinations\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#combinations'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Bulma uses it for the\n    '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/elements/tag/'}
            >
              {'tags'}
            </a>
            {', the\n    '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/elements/notification/'}
            >
              {'notifications'}
            </a>
            {', and the\n    '}
            <a
              data-official-prose=""
              href={'https://bulma.io/documentation/components/message/'}
            >
              {'messages'}
            </a>
            {':\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-delete/combinations/001">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
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
                        {'var(--bulma-delete-dimensions)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.25rem'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n      \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'var(--bulma-delete-background-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0%'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n      \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'var(--bulma-delete-background-alpha)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n      \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'var(--bulma-delete-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-white)'}
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
        {'\n\n\n\n'}
      </div>
    </OfficialDocument>
  );
}

function Example001Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Delete />
      {'\n\n        \n      '}
    </>
  );
}

function Example002Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Delete size={'small'} />
      {'\n'}
      <ui.Delete />
      {'\n'}
      <ui.Delete size={'medium'} />
      {'\n'}
      <ui.Delete size={'large'} />
      {'\n\n        \n      '}
    </>
  );
}

function Example003Demo() {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  return (
    <>
      {'\n        \n          \n'}
      <ui.Block>
        {'\n  '}
        <ui.Tag color={'success'}>
          {'\n    Hello World\n    '}
          <ui.Delete size={'small'} />
          {'\n  '}
        </ui.Tag>
        {'\n'}
      </ui.Block>
      {'\n\n'}
      {visible1 && (
        <ui.Notification color={'danger'}>
          {'\n  '}
          <ui.Delete onClick={() => setVisible1(false)} />
          {
            '\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit\n  amet, consectetur adipiscing elit\n'
          }
        </ui.Notification>
      )}
      {'\n\n'}
      {visible2 && (
        <ui.Message color={'info'}>
          {'\n  '}
          <ui.MessageHeader>
            {'\n    Info\n    '}
            <ui.Delete onClick={() => setVisible2(false)} />
            {'\n  '}
          </ui.MessageHeader>
          {'\n  '}
          <ui.MessageBody>
            {
              '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus\n    mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit\n    amet fringilla. Nullam gravida purus diam, et dictum felis venenatis\n    efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu\n    et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna\n    a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  '
            }
          </ui.MessageBody>
          {'\n'}
        </ui.Message>
      )}
      {'\n\n        \n      '}
    </>
  );
}

export const Example001 = {
  name: 'Delete 01',
  parameters: {
    official: { id: 'elements-delete/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Delete />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj;

export const Example002 = {
  name: 'sizes 01',
  parameters: {
    official: { id: 'elements-delete/sizes/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Delete size={"small"} />{"\\n"}<ui.Delete />{"\\n"}<ui.Delete size={"medium"} />{"\\n"}<ui.Delete size={"large"} />{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj;

export const Example003 = {
  name: 'combinations 01',
  parameters: {
    official: { id: 'elements-delete/combinations/001' },
    docs: {
      source: {
        code: 'import { useState } from \'react\';\nimport { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  const [visible1, setVisible1] = useState(true);\n  const [visible2, setVisible2] = useState(true);\n  return (<>{"\\n        \\n          \\n"}<ui.Block>{"\\n  "}<ui.Tag color={"success"}>{"\\n    Hello World\\n    "}<ui.Delete size={"small"} />{"\\n  "}</ui.Tag>{"\\n"}</ui.Block>{"\\n\\n"}{visible1 && (<ui.Notification color={"danger"}>{"\\n  "}<ui.Delete onClick={() => setVisible1(false)} />{"\\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit\\n  amet, consectetur adipiscing elit\\n"}</ui.Notification>)}{"\\n\\n"}{visible2 && (<ui.Message color={"info"}>{"\\n  "}<ui.MessageHeader>{"\\n    Info\\n    "}<ui.Delete onClick={() => setVisible2(false)} />{"\\n  "}</ui.MessageHeader>{"\\n  "}<ui.MessageBody>{"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus\\n    mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit\\n    amet fringilla. Nullam gravida purus diam, et dictum felis venenatis\\n    efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu\\n    et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna\\n    a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\\n  "}</ui.MessageBody>{"\\n"}</ui.Message>)}{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj;

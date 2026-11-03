import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from '@storybook/addon-docs/blocks';
import { OfficialDocument } from '../document';
import { createBulma } from '../../../src';
import { officialPage } from '../support';

const ui = createBulma();

const meta = {
  ...officialPage(
    {
      id: 'elements-progress',
      title: 'Progress Bar',
      url: 'https://bulma.io/documentation/elements/progress/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-progress',
  title: 'CSS Library/Elements/Progress bars',
} satisfies Meta;
export default meta;

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-progress" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Progress Bar'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'Native HTML '}
          <strong data-official-prose="">{'progress'}</strong>
          {' bars'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    The Bulma progress bar is a simple CSS class that styles the native\n    '
            }
            <a
              data-official-prose=""
              href={
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress'
              }
              target={'_blank'}
            >
              <code data-official-prose="">{'<progress>'}</code>
              {' HTML element'}
            </a>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'colors'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Colors\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#colors'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The progress bar element is available in all the\n    '}
            <strong data-official-prose="">{'different colors'}</strong>
            {' defined by the\n    '}
            <a data-official-prose="" href={''}>
              <code data-official-prose="">{'$colors'}</code>
              {' Sass map'}
            </a>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/colors/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/colors/003">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/colors/004">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/colors/005">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/colors/006">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
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
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/sizes/001">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/sizes/002">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/sizes/003">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n  \n  '}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/sizes/004">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'indeterminate'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Indeterminate\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#indeterminate'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {"\n    If you don't set the HTML "}
            <code data-official-prose="">{'value'}</code>
            {' attribute, you can display an '}
            <strong data-official-prose="">{'indeterminate'}</strong>
            {
              " progress\n    bar. It's used to show that some progress is going on, but the total duration is not yet determined.\n  "
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-progress/indeterminate/001">
          <Canvas of={Example012} />
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
                      className={'icon has-text-sass'}
                    >
                      <i data-official-prose="" className={'fab fa-sass'}></i>
                    </span>
                    {'\n            '}
                    <span data-official-prose="">{'Sass Variable'}</span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </th>
                {'\n        \n          '}
                <th data-official-prose="">
                  {'\n            '}
                  <div data-official-prose="" className={'icon-text'}>
                    {'\n              '}
                    <span
                      data-official-prose=""
                      className={'icon has-text-link'}
                    >
                      <i data-official-prose="" className={'fab fa-css3'}></i>
                    </span>
                    {'\n              '}
                    <span data-official-prose="">{'CSS Variable'}</span>
                    {'\n            '}
                  </div>
                  {'\n          '}
                </th>
                {'\n        \n        '}
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
              {'\n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$progress-bar-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-progress-bar-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border-weak)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$progress-value-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-progress-value-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$progress-border-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-progress-border-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-rounded)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n        '}
              <tr data-official-prose="">
                {'\n          '}
                <td data-official-prose="" className={'bd-theme-sass'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-sass'}>
                        {'$progress-indeterminate-duration'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-progress-indeterminate-duration)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.5s'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n        \n      \n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n\n'}
      </div>
    </OfficialDocument>
  );
}

function Example001Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Progress value={'15'} max={'100'}>
        {'15%'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example002Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'15'} max={'100'} color={'link'}>
        {'\n  15%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example003Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'30'} max={'100'} color={'primary'}>
        {'\n  30%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example004Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'45'} max={'100'} color={'info'}>
        {'\n  45%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example005Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'60'} max={'100'} color={'success'}>
        {'\n  60%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example006Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'75'} max={'100'} color={'warning'}>
        {'\n  75%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example007Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'90'} max={'100'} color={'danger'}>
        {'\n  90%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example008Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'20'} max={'100'} size={'small'}>
        {'\n  20%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example009Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'40'} max={'100'} className={'rb-is-normal'}>
        {'\n  40%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example010Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'60'} max={'100'} size={'medium'}>
        {'\n  60%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example011Demo() {
  return (
    <>
      {'\n        \n           \n'}
      <ui.Progress value={'80'} max={'100'} size={'large'}>
        {'\n  80%\n'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

function Example012Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Progress max={'100'} size={'small'} color={'primary'}>
        {'15%'}
      </ui.Progress>
      {'\n'}
      <ui.Progress max={'100'} color={'danger'}>
        {'30%'}
      </ui.Progress>
      {'\n'}
      <ui.Progress max={'100'} size={'medium'} color={'dark'}>
        {'45%'}
      </ui.Progress>
      {'\n'}
      <ui.Progress max={'100'} size={'large'} color={'info'}>
        {'60%'}
      </ui.Progress>
      {'\n\n        \n      '}
    </>
  );
}

export const Example001 = {
  name: 'Progress Bar 01',
  parameters: {
    official: { id: 'elements-progress/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Progress value={"15"} max={"100"}>{"15%"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj;

export const Example002 = {
  name: 'colors 01',
  parameters: {
    official: { id: 'elements-progress/colors/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"15"} max={"100"} color={"link"}>{"\\n  15%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj;

export const Example003 = {
  name: 'colors 02',
  parameters: {
    official: { id: 'elements-progress/colors/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"30"} max={"100"} color={"primary"}>{"\\n  30%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj;

export const Example004 = {
  name: 'colors 03',
  parameters: {
    official: { id: 'elements-progress/colors/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"45"} max={"100"} color={"info"}>{"\\n  45%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj;

export const Example005 = {
  name: 'colors 04',
  parameters: {
    official: { id: 'elements-progress/colors/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"60"} max={"100"} color={"success"}>{"\\n  60%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj;

export const Example006 = {
  name: 'colors 05',
  parameters: {
    official: { id: 'elements-progress/colors/005' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example006Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"75"} max={"100"} color={"warning"}>{"\\n  75%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj;

export const Example007 = {
  name: 'colors 06',
  parameters: {
    official: { id: 'elements-progress/colors/006' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example007Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"90"} max={"100"} color={"danger"}>{"\\n  90%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj;

export const Example008 = {
  name: 'sizes 01',
  parameters: {
    official: { id: 'elements-progress/sizes/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example008Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"20"} max={"100"} size={"small"}>{"\\n  20%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj;

export const Example009 = {
  name: 'sizes 02',
  parameters: {
    official: { id: 'elements-progress/sizes/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example009Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"40"} max={"100"} className={"rb-is-normal"}>{"\\n  40%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj;

export const Example010 = {
  name: 'sizes 03',
  parameters: {
    official: { id: 'elements-progress/sizes/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example010Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"60"} max={"100"} size={"medium"}>{"\\n  60%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj;

export const Example011 = {
  name: 'sizes 04',
  parameters: {
    official: { id: 'elements-progress/sizes/004' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example011Demo() {\n  return (<>{"\\n        \\n           \\n"}<ui.Progress value={"80"} max={"100"} size={"large"}>{"\\n  80%\\n"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj;

export const Example012 = {
  name: 'indeterminate 01',
  parameters: {
    official: { id: 'elements-progress/indeterminate/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example012Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Progress max={"100"} size={"small"} color={"primary"}>{"15%"}</ui.Progress>{"\\n"}<ui.Progress max={"100"} color={"danger"}>{"30%"}</ui.Progress>{"\\n"}<ui.Progress max={"100"} size={"medium"} color={"dark"}>{"45%"}</ui.Progress>{"\\n"}<ui.Progress max={"100"} size={"large"} color={"info"}>{"60%"}</ui.Progress>{"\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj;

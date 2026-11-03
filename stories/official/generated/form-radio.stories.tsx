import type { Meta, StoryObj } from '@storybook/react-vite';
import { Canvas } from '@storybook/addon-docs/blocks';
import { OfficialDocument } from '../document';
import { createBulma } from '../../../src';
import { officialPage } from '../support';

const ui = createBulma();

const meta = {
  ...officialPage(
    {
      id: 'form-radio',
      title: 'Radio button',
      url: 'https://bulma.io/documentation/form/radio/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-radio',
  title: 'CSS Library/Form/Radio',
} satisfies Meta;
export default meta;

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-radio" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Radio button'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The mutually exclusive '}
          <strong data-official-prose="">{'radio buttons'}</strong>
          {' in their native format'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n   \n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'radio'}</code>
            {' class is a simple wrapper around the\n    '}
            <code data-official-prose="">{'<input type="radio">'}</code>
            {
              ' HTML elements. It is intentionally\n    not styled, to preserve cross-browser compatibility and the user experience.\n  '
            }
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Make sure the linked radio buttons have the '}
            <strong data-official-prose="">{'same value'}</strong>
            {' for\n    their '}
            <code data-official-prose="">{'name'}</code>
            {' HTML attribute.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-radio/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can check a radio button by '}
            <strong data-official-prose="">{'default'}</strong>
            {' by adding the\n    '}
            <code data-official-prose="">{'checked'}</code>
            {' HTML attribute to the\n    '}
            <code data-official-prose="">{'<input>'}</code>
            {' element.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-radio/basic/002">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can '}
            <strong data-official-prose="">{'disable'}</strong>
            {' a radio button by adding the\n    '}
            <code data-official-prose="">{'disabled'}</code>
            {' HTML attribute to both the\n    '}
            <code data-official-prose="">{'<label>'}</code>
            {' and the '}
            <code data-official-prose="">{'<input>'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-radio/basic/003">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'list-of-radio-buttons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    List of Radio Buttons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-radio-buttons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    If you want to list several radio buttons, wrap them in a\n    '
            }
            <code data-official-prose="">{'<div class="radios">'}</code>
            {' element:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="form-radio/list-of-radio-buttons/001">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="radios">\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Going\n  </label>\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Not going\n  </label>\n  <label class="radio" disabled>\n    <input type="radio" name="rsvp" disabled />\n    Maybe\n  </label>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n'}
      </div>
    </OfficialDocument>
  );
}

function Example001Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Radio name={'answer'}>{'\n    Yes\n  '}</ui.Radio>
            {'\n  '}
            <ui.Radio name={'answer'}>{'\n    No\n  '}</ui.Radio>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <label class="radio">\n    <input type="radio" name="answer" />\n    Yes\n  </label>\n  <label class="radio">\n    <input type="radio" name="answer" />\n    No\n  </label>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example002Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Radio name={'foobar'}>{'\n    Foo\n  '}</ui.Radio>
            {'\n  '}
            <ui.Radio name={'foobar'} defaultChecked>
              {'\n    Bar\n  '}
            </ui.Radio>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <label class="radio">\n    <input type="radio" name="foobar" />\n    Foo\n  </label>\n  <label class="radio">\n    <input type="radio" name="foobar" checked />\n    Bar\n  </label>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example003Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'half'}>
          {'\n'}
          <ui.Control>
            {'\n  '}
            <ui.Radio name={'rsvp'}>{'\n    Going\n  '}</ui.Radio>
            {'\n  '}
            <ui.Radio name={'rsvp'}>{'\n    Not going\n  '}</ui.Radio>
            {'\n  '}
            <ui.Radio
              name={'rsvp'}
              disabled
              wrapperProps={{ 'aria-disabled': true }}
            >
              {'\n    Maybe\n  '}
            </ui.Radio>
            {'\n'}
          </ui.Control>
          {'\n'}
        </ui.Column>
        {'\n  '}
        <ui.Column width={'half'} className={'bd-highlight-full'}>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="control">\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Going\n  </label>\n  <label class="radio">\n    <input type="radio" name="rsvp" />\n    Not going\n  </label>\n  <label class="radio" disabled>\n    <input type="radio" name="rsvp" disabled />\n    Maybe\n  </label>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  );
}

function Example004Demo() {
  return (
    <>
      <ui.Block>
        {'\n'}
        <ui.Radios>
          {'\n  '}
          <ui.Radio name={'rsvp'}>{'\n    Going\n  '}</ui.Radio>
          {'\n  '}
          <ui.Radio name={'rsvp'}>{'\n    Not going\n  '}</ui.Radio>
          {'\n  '}
          <ui.Radio
            name={'rsvp'}
            disabled
            wrapperProps={{ 'aria-disabled': true }}
          >
            {'\n    Maybe\n  '}
          </ui.Radio>
          {'\n'}
        </ui.Radios>
        {'\n'}
      </ui.Block>
    </>
  );
}

export const Example001 = {
  name: 'Radio button 01',
  parameters: {
    official: { id: 'form-radio/basic/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example001Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Radio name={"answer"}>{"\\n    Yes\\n  "}</ui.Radio>{"\\n  "}<ui.Radio name={"answer"}>{"\\n    No\\n  "}</ui.Radio>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <label class=\\"radio\\">\\n    <input type=\\"radio\\" name=\\"answer\\" />\\n    Yes\\n  </label>\\n  <label class=\\"radio\\">\\n    <input type=\\"radio\\" name=\\"answer\\" />\\n    No\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj;

export const Example002 = {
  name: 'Radio button 02',
  parameters: {
    official: { id: 'form-radio/basic/002' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example002Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Radio name={"foobar"}>{"\\n    Foo\\n  "}</ui.Radio>{"\\n  "}<ui.Radio name={"foobar"} defaultChecked>{"\\n    Bar\\n  "}</ui.Radio>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <label class=\\"radio\\">\\n    <input type=\\"radio\\" name=\\"foobar\\" />\\n    Foo\\n  </label>\\n  <label class=\\"radio\\">\\n    <input type=\\"radio\\" name=\\"foobar\\" checked />\\n    Bar\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj;

export const Example003 = {
  name: 'Radio button 03',
  parameters: {
    official: { id: 'form-radio/basic/003' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example003Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"half"}>{"\\n"}<ui.Control>{"\\n  "}<ui.Radio name={"rsvp"}>{"\\n    Going\\n  "}</ui.Radio>{"\\n  "}<ui.Radio name={"rsvp"}>{"\\n    Not going\\n  "}</ui.Radio>{"\\n  "}<ui.Radio name={"rsvp"} disabled wrapperProps={{ "aria-disabled": true }}>{"\\n    Maybe\\n  "}</ui.Radio>{"\\n"}</ui.Control>{"\\n"}</ui.Column>{"\\n  "}<ui.Column width={"half"} className={"bd-highlight-full"}>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"control\\">\\n  <label class=\\"radio\\">\\n    <input type=\\"radio\\" name=\\"rsvp\\" />\\n    Going\\n  </label>\\n  <label class=\\"radio\\">\\n    <input type=\\"radio\\" name=\\"rsvp\\" />\\n    Not going\\n  </label>\\n  <label class=\\"radio\\" disabled>\\n    <input type=\\"radio\\" name=\\"rsvp\\" disabled />\\n    Maybe\\n  </label>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj;

export const Example004 = {
  name: 'list of radio buttons 01',
  parameters: {
    official: { id: 'form-radio/list-of-radio-buttons/001' },
    docs: {
      source: {
        code: 'import { createBulma } from \'@seagreenio/react-bulma\';\n\nconst ui = createBulma();\n\nfunction Example004Demo() {\n  return (<><ui.Block>{"\\n"}<ui.Radios>{"\\n  "}<ui.Radio name={"rsvp"}>{"\\n    Going\\n  "}</ui.Radio>{"\\n  "}<ui.Radio name={"rsvp"}>{"\\n    Not going\\n  "}</ui.Radio>{"\\n  "}<ui.Radio name={"rsvp"} disabled wrapperProps={{ "aria-disabled": true }}>{"\\n    Maybe\\n  "}</ui.Radio>{"\\n"}</ui.Radios>{"\\n"}</ui.Block></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj;

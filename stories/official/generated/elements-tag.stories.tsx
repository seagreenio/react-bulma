import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Content,
  Control,
  Delete,
  Field,
  LinkTag,
  Tag,
  TagDelete,
  Tags,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-tag',
      title: 'Tags',
      url: 'https://bulma.io/documentation/elements/tag/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-tag',
  title: 'CSS Library/Elements/Tag',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-tag" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Tags'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Small '}
          <strong data-official-prose="">{'tag labels'}</strong>
          {' to insert anywhere'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <strong data-official-prose="">{'tag'}</strong>
            {
              " is a small but versatile element. It's very useful as a way to attach information to a block or other component. Its size makes it also easy to display in numbers, making it appropriate for long lists of items. "
            }
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-4'}>
            {'By default, a '}
            <strong data-official-prose="">{'tag'}</strong>
            {' is a 1.5rem high label.'}
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/basic/001'}
          >
            <div data-official-example="elements-tag/basic/001">
              <Canvas of={DefaultTagStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {'\n<span class="tag"> Tag label </span>\n'}
                </code>
              </pre>
            </div>
          </div>
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
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-4'}>
            {'Like with buttons, there are '}
            <strong data-official-prose="">{'10 different colors'}</strong>
            {' available.'}
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/colors/001'}
          >
            <div data-official-example="elements-tag/colors/001">
              <Canvas of={TagColorsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<span class="tag is-black">Black</span>\n<span class="tag is-dark">Dark</span>\n<span class="tag is-light">Light</span>\n<span class="tag is-white">White</span>\n<span class="tag is-primary">Primary</span>\n<span class="tag is-link">Link</span>\n<span class="tag is-info">Info</span>\n<span class="tag is-success">Success</span>\n<span class="tag is-warning">Warning</span>\n<span class="tag is-danger">Danger</span>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-4'}>
            <p data-official-prose="">
              {'You can now choose the '}
              <strong data-official-prose="">{'light version'}</strong>
              {' of a color.'}
            </p>
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/colors/002'}
          >
            <div data-official-example="elements-tag/colors/002">
              <Canvas of={LightTagColorsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<span class="tag is-primary is-light">Primary</span>\n<span class="tag is-link is-light">Link</span>\n<span class="tag is-info is-light">Info</span>\n<span class="tag is-success is-light">Success</span>\n<span class="tag is-warning is-light">Warning</span>\n<span class="tag is-danger is-light">Danger</span>\n'
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
          <div data-official-prose="" className={'column is-4'}>
            <div data-official-prose="" className={'content'}>
              <p data-official-prose="">
                {'The tag comes in '}
                <strong data-official-prose="">{'3 different'}</strong>
                {' sizes.'}
              </p>
              <p data-official-prose="">
                {' While the default size is the '}
                <strong data-official-prose="">{'normal'}</strong>
                {' one, the '}
                <code data-official-prose="">{'is-normal'}</code>
                {
                  ' modifier exists in case you need to reset the tag to its normal size. '
                }
              </p>
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/sizes/001'}
          >
            <div data-official-example="elements-tag/sizes/001">
              <Canvas of={TagSizesStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<span class="tag is-link is-normal">Normal</span>\n<span class="tag is-primary is-medium">Medium</span>\n<span class="tag is-info is-large">Large</span>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can change the size of '}
            <strong data-official-prose="">{'all'}</strong>
            {' tags at once:'}
          </p>
        </div>
        <div data-official-example="elements-tag/sizes/002">
          <Canvas of={SharedMediumSizeStory} />
        </div>
        <div data-official-example="elements-tag/sizes/003">
          <Canvas of={SharedLargeSizeStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can however keep the original size of a '}
            <strong data-official-prose="">{'subset'}</strong>
            {' of tags, simply by applying one of its modifier class: '}
          </p>
        </div>
        <div data-official-example="elements-tag/sizes/004">
          <Canvas of={IndividualSizeOverridesStory} />
        </div>
        <h3
          data-official-prose=""
          id={'hover-active-state'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Hover/Active state '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#hover-active-state'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'A tag element will react to the '}
            <code data-official-prose="">{':hover'}</code>
            {' and '}
            <code data-official-prose="">{':active'}</code>
            {' states if:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {"it's an anchor element "}
              <code data-official-prose="">{'<a class="tag">'}</code>
            </li>
            <li data-official-prose="">
              {"it's a button element "}
              <code data-official-prose="">{'<button class="tag">'}</code>
            </li>
            <li data-official-prose="">
              {'it has the '}
              <code data-official-prose="">{'is-hoverable'}</code>
              {' modifier class '}
              <code data-official-prose="">
                {'<div class="tag is-hoverable">'}
              </code>
            </li>
          </ul>
        </div>
        <div data-official-example="elements-tag/hover-active-state/001">
          <Canvas of={HoverableTagsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'modifiers'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Modifiers '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#modifiers'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-4'}>
            {' You can add the '}
            <code data-official-prose="">{'is-rounded'}</code>
            {' modifier to make a '}
            <strong data-official-prose="">{'rounded'}</strong>
            {' tag. '}
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/modifiers/001'}
          >
            <div data-official-example="elements-tag/modifiers/001">
              <Canvas of={RoundedTagStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {'\n<span class="tag is-rounded">Rounded</span>\n'}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-4'}>
            {' You can add the '}
            <code data-official-prose="">{'is-delete'}</code>
            {' modifier to turn the tag into a '}
            <strong data-official-prose="">{'delete button'}</strong>
            {'. '}
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/modifiers/002'}
          >
            <div data-official-example="elements-tag/modifiers/002">
              <Canvas of={DeleteTagStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {'\n<a class="tag is-delete"></a>\n'}
                </code>
              </pre>
            </div>
          </div>
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
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-4'}>
            {'You can create '}
            <strong data-official-prose="">{'hoverable colored'}</strong>
            {' tags.'}
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/combinations/001'}
          >
            <div data-official-example="elements-tag/combinations/001">
              <Canvas of={ColoredHoverableTagsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<a class="tag is-link">Hover me</a>\n<button class="tag is-primary">Hover me</button>\n<div class="tag is-hoverable is-success">Hover me</div>\n<a class="tag is-info">Hover me</a>\n<button class="tag is-warning">Hover me</button>\n<div class="tag is-hoverable is-danger">Hover me</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div data-official-prose="" className={'column is-4'}>
            {'You can append a '}
            <strong data-official-prose="">{'delete button'}</strong>
            {'.'}
          </div>
          <div
            data-official-prose=""
            className={'column is-2'}
            data-source-example={'elements-tag/combinations/002'}
          >
            <div data-official-example="elements-tag/combinations/002">
              <Canvas of={TagsWithDeleteButtonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-6'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<span class="tag is-success">\n  Bar\n  <button class="delete is-small"></button>\n</span>\n<span class="tag is-warning is-medium">\n  Hello\n  <button class="delete is-small"></button>\n</span>\n<span class="tag is-danger is-large">\n  World\n  <button class="delete"></button>\n</span>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'list-of-tags'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' List of tags '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#list-of-tags'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-tag/list-of-tags/001'}
          >
            <div data-official-example="elements-tag/list-of-tags/001">
              <Canvas of={TagListStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="tags">\n  <span class="tag">One</span>\n  <span class="tag">Two</span>\n  <span class="tag">Three</span>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-tag/list-of-tags/002'}
          >
            <div data-official-example="elements-tag/list-of-tags/002">
              <Canvas of={WrappingTagListStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="tags">\n  <span class="tag">One</span>\n  <span class="tag">Two</span>\n  <span class="tag">Three</span>\n  <span class="tag">Four</span>\n  <span class="tag">Five</span>\n  <span class="tag">Six</span>\n  <span class="tag">Seven</span>\n  <span class="tag">Eight</span>\n  <span class="tag">Nine</span>\n  <span class="tag">Ten</span>\n  <span class="tag">Eleven</span>\n  <span class="tag">Twelve</span>\n  <span class="tag">Thirteen</span>\n  <span class="tag">Fourteen</span>\n  <span class="tag">Fifteen</span>\n  <span class="tag">Sixteen</span>\n  <span class="tag">Seventeen</span>\n  <span class="tag">Eighteen</span>\n  <span class="tag">Nineteen</span>\n  <span class="tag">Twenty</span>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'tag-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Tag addons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#tag-addons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-tag/tag-addons/001'}
          >
            <div data-official-example="elements-tag/tag-addons/001">
              <Canvas of={AttachedTagsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="tags has-addons">\n  <span class="tag">Package</span>\n  <span class="tag is-primary">Bulma</span>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-tag/tag-addons/002'}
          >
            <div data-official-example="elements-tag/tag-addons/002">
              <Canvas of={TagWithDeleteAddonStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="tags has-addons">\n  <span class="tag is-danger">Alex Smith</span>\n  <a class="tag is-delete"></a>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-tag/tag-addons/003'}
          >
            <div data-official-example="elements-tag/tag-addons/003">
              <Canvas of={GroupedTagAddonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column bd-highlight-full'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="field is-grouped is-grouped-multiline">\n  <div class="control">\n    <div class="tags has-addons">\n      <span class="tag is-dark">npm</span>\n      <span class="tag is-info">1.0.4</span>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <span class="tag is-dark">build</span>\n      <span class="tag is-success">passing</span>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <span class="tag is-dark">chat</span>\n      <span class="tag is-primary">on gitter</span>\n    </div>\n  </div>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'elements-tag/tag-addons/004'}
          >
            <div data-official-example="elements-tag/tag-addons/004">
              <Canvas of={WrappingTagAddonsStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="field is-grouped is-grouped-multiline">\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Technology</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">CSS</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Flexbox</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Web Design</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Open Source</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Community</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n\n  <div class="control">\n    <div class="tags has-addons">\n      <a class="tag is-link">Documentation</a>\n      <a class="tag is-delete"></a>\n    </div>\n  </div>\n</div>\n'
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

function DefaultTagDemo() {
  return (
    <>
      <Tag>Tag label</Tag>
    </>
  )
}

function TagColorsDemo() {
  return (
    <>
      <Field as={'p'}>
        <Tag color={'black'}>Black</Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'dark'}>Dark</Tag>
      </Field>
      <Field as={'p'}>
        <Tag light>Light</Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'white'}>White</Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'primary'}>Primary</Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'link'}>Link</Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'info'}>Info</Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'success'}>Success</Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'warning'}>Warning</Tag>
      </Field>
      <Tag color={'danger'}>Danger</Tag>
    </>
  )
}

function LightTagColorsDemo() {
  return (
    <>
      <Field as={'p'}>
        <Tag color={'primary'} light>
          Primary
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'link'} light>
          Link
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'info'} light>
          Info
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'success'} light>
          Success
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'warning'} light>
          Warning
        </Tag>
      </Field>
      <Tag color={'danger'} light>
        Danger
      </Tag>
    </>
  )
}

function TagSizesDemo() {
  return (
    <>
      <Field as={'p'}>
        <Tag color={'link'} size={'normal'}>
          Normal
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'primary'} size={'medium'}>
          Medium
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'info'} size={'large'}>
          Large
        </Tag>
      </Field>
    </>
  )
}

function SharedMediumSizeDemo() {
  return (
    <>
      <Tags size={'medium'}>
        <Tag>All</Tag>
        <Tag>Medium</Tag>
        <Tag>Size</Tag>
      </Tags>
    </>
  )
}

function SharedLargeSizeDemo() {
  return (
    <>
      <Tags size={'large'}>
        <Tag>All</Tag>
        <Tag>Large</Tag>
        <Tag>Size</Tag>
      </Tags>
    </>
  )
}

function IndividualSizeOverridesDemo() {
  return (
    <>
      <Tags size={'medium'}>
        <Tag>Medium</Tag>
        <Tag size={'normal'}>Normal</Tag>
        <Tag>Medium</Tag>
        <Tag size={'large'}>Large</Tag>
        <Tag>Medium</Tag>
      </Tags>
    </>
  )
}

function HoverableTagsDemo() {
  return (
    <>
      <LinkTag>Hover me</LinkTag> <Tag as={'button'}>Hover me</Tag>{' '}
      <Tag className={'rb-is-hoverable'} as={'div'}>
        Hover me
      </Tag>
    </>
  )
}

function RoundedTagDemo() {
  return (
    <>
      <Tag rounded>Rounded</Tag>
    </>
  )
}

function DeleteTagDemo() {
  return (
    <>
      <TagDelete as={'a'} />
    </>
  )
}

function ColoredHoverableTagsDemo() {
  return (
    <>
      <LinkTag color={'link'}>Hover me</LinkTag>{' '}
      <Tag color={'primary'} as={'button'}>
        Hover me
      </Tag>{' '}
      <Tag color={'success'} className={'rb-is-hoverable'} as={'div'}>
        Hover me
      </Tag>{' '}
      <LinkTag color={'info'}>Hover me</LinkTag>{' '}
      <Tag color={'warning'} as={'button'}>
        Hover me
      </Tag>{' '}
      <Tag color={'danger'} className={'rb-is-hoverable'} as={'div'}>
        Hover me
      </Tag>
    </>
  )
}

function TagsWithDeleteButtonsDemo() {
  return (
    <>
      <Field as={'p'}>
        <Tag color={'success'}>
          Bar
          <Delete size={'small'} />
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'warning'} size={'medium'}>
          Hello
          <Delete size={'small'} />
        </Tag>
      </Field>
      <Field as={'p'}>
        <Tag color={'danger'} size={'large'}>
          World
          <Delete />
        </Tag>
      </Field>
    </>
  )
}

function TagListDemo() {
  return (
    <>
      <Content>
        <p>
          You can now create a <strong>list of tags</strong> with the{' '}
          <code>{'tags'}</code> container.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Tags>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
        </Tags>
      </div>
    </>
  )
}

function WrappingTagListDemo() {
  return (
    <>
      <Content>
        <p>
          If the list is <strong>very long</strong>, it will automatically wrap
          on <strong>multiple lines</strong>, while keeping all tags{' '}
          <strong>evenly spaced</strong>.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Tags>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
          <Tag>Four</Tag>
          <Tag>Five</Tag>
          <Tag>Six</Tag>
          <Tag>Seven</Tag>
          <Tag>Eight</Tag>
          <Tag>Nine</Tag>
          <Tag>Ten</Tag>
          <Tag>Eleven</Tag>
          <Tag>Twelve</Tag>
          <Tag>Thirteen</Tag>
          <Tag>Fourteen</Tag>
          <Tag>Fifteen</Tag>
          <Tag>Sixteen</Tag>
          <Tag>Seventeen</Tag>
          <Tag>Eighteen</Tag>
          <Tag>Nineteen</Tag>
          <Tag>Twenty</Tag>
        </Tags>
      </div>
    </>
  )
}

function AttachedTagsDemo() {
  return (
    <>
      <Content>
        <p>
          You can <strong>attach tags together</strong> with the{' '}
          <code>{'has-addons'}</code> modifier.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Tags addons>
          <Tag>Package</Tag>
          <Tag color={'primary'}>Bulma</Tag>
        </Tags>
      </div>
    </>
  )
}

function TagWithDeleteAddonDemo() {
  return (
    <>
      <Content>
        <p>
          You can attach a <strong>text</strong> tag with a{' '}
          <strong>delete</strong> tag together.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Tags addons>
          <Tag color={'danger'}>Alex Smith</Tag>
          <TagDelete as={'a'} />
        </Tags>
      </div>
    </>
  )
}

function GroupedTagAddonsDemo() {
  return (
    <>
      <Content>
        <p>
          If you want to attach <code>{'tags'}</code> containers{' '}
          <strong>together</strong>, simply use the <code>{'field'}</code>{' '}
          element with the <code>{'is-grouped'}</code> and{' '}
          <code>{'is-grouped-multiline'}</code> modifiers.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Field layout={'grouped'} multiline>
          <Control>
            <Tags addons>
              <Tag color={'dark'}>npm</Tag>
              <Tag color={'info'}>1.0.4</Tag>
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <Tag color={'dark'}>build</Tag>
              <Tag color={'success'}>passing</Tag>
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <Tag color={'dark'}>chat</Tag>
              <Tag color={'primary'}>on gitter</Tag>
            </Tags>
          </Control>
        </Field>
      </div>
    </>
  )
}

function WrappingTagAddonsDemo() {
  return (
    <>
      <Content>
        <p>
          This can be useful for a long list of <strong>blog tags</strong>.
        </p>
      </Content>
      <div className={'bd-example'}>
        <Field layout={'grouped'} multiline>
          <Control>
            <Tags addons>
              <LinkTag color={'link'}>Technology</LinkTag>
              <TagDelete as={'a'} />
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <LinkTag color={'link'}>CSS</LinkTag>
              <TagDelete as={'a'} />
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <LinkTag color={'link'}>Flexbox</LinkTag>
              <TagDelete as={'a'} />
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <LinkTag color={'link'}>Web Design</LinkTag>
              <TagDelete as={'a'} />
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <LinkTag color={'link'}>Open Source</LinkTag>
              <TagDelete as={'a'} />
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <LinkTag color={'link'}>Community</LinkTag>
              <TagDelete as={'a'} />
            </Tags>
          </Control>
          <Control>
            <Tags addons>
              <LinkTag color={'link'}>Documentation</LinkTag>
              <TagDelete as={'a'} />
            </Tags>
          </Control>
        </Field>
      </div>
    </>
  )
}

export const DefaultTagStory = {
  name: 'Default tag',
  parameters: {
    official: { id: 'elements-tag/basic/001' },
    docs: {
      source: {
        code: "import { Tag } from '@seagreenio/react-bulma'\n\nfunction DefaultTagDemo() {\n  return (\n    <>\n      <Tag>Tag label</Tag>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultTagDemo,
} satisfies StoryObj

export const TagColorsStory = {
  name: 'Tag colors',
  parameters: {
    official: { id: 'elements-tag/colors/001' },
    docs: {
      source: {
        code: "import { Field, Tag } from '@seagreenio/react-bulma'\n\nfunction TagColorsDemo() {\n  return (\n    <>\n      <Field as={'p'}>\n        <Tag color={'black'}>Black</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'dark'}>Dark</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag light>Light</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'white'}>White</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'primary'}>Primary</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'link'}>Link</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'info'}>Info</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'success'}>Success</Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'warning'}>Warning</Tag>\n      </Field>\n      <Tag color={'danger'}>Danger</Tag>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TagColorsDemo,
} satisfies StoryObj

export const LightTagColorsStory = {
  name: 'Light tag colors',
  parameters: {
    official: { id: 'elements-tag/colors/002' },
    docs: {
      source: {
        code: "import { Field, Tag } from '@seagreenio/react-bulma'\n\nfunction LightTagColorsDemo() {\n  return (\n    <>\n      <Field as={'p'}>\n        <Tag color={'primary'} light>\n          Primary\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'link'} light>\n          Link\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'info'} light>\n          Info\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'success'} light>\n          Success\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'warning'} light>\n          Warning\n        </Tag>\n      </Field>\n      <Tag color={'danger'} light>\n        Danger\n      </Tag>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightTagColorsDemo,
} satisfies StoryObj

export const TagSizesStory = {
  name: 'Tag sizes',
  parameters: {
    official: { id: 'elements-tag/sizes/001' },
    docs: {
      source: {
        code: "import { Field, Tag } from '@seagreenio/react-bulma'\n\nfunction TagSizesDemo() {\n  return (\n    <>\n      <Field as={'p'}>\n        <Tag color={'link'} size={'normal'}>\n          Normal\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'primary'} size={'medium'}>\n          Medium\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'info'} size={'large'}>\n          Large\n        </Tag>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TagSizesDemo,
} satisfies StoryObj

export const SharedMediumSizeStory = {
  name: 'Shared medium size',
  parameters: {
    official: { id: 'elements-tag/sizes/002' },
    docs: {
      source: {
        code: "import { Tag, Tags } from '@seagreenio/react-bulma'\n\nfunction SharedMediumSizeDemo() {\n  return (\n    <>\n      <Tags size={'medium'}>\n        <Tag>All</Tag>\n        <Tag>Medium</Tag>\n        <Tag>Size</Tag>\n      </Tags>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SharedMediumSizeDemo,
} satisfies StoryObj

export const SharedLargeSizeStory = {
  name: 'Shared large size',
  parameters: {
    official: { id: 'elements-tag/sizes/003' },
    docs: {
      source: {
        code: "import { Tag, Tags } from '@seagreenio/react-bulma'\n\nfunction SharedLargeSizeDemo() {\n  return (\n    <>\n      <Tags size={'large'}>\n        <Tag>All</Tag>\n        <Tag>Large</Tag>\n        <Tag>Size</Tag>\n      </Tags>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SharedLargeSizeDemo,
} satisfies StoryObj

export const IndividualSizeOverridesStory = {
  name: 'Individual size overrides',
  parameters: {
    official: { id: 'elements-tag/sizes/004' },
    docs: {
      source: {
        code: "import { Tag, Tags } from '@seagreenio/react-bulma'\n\nfunction IndividualSizeOverridesDemo() {\n  return (\n    <>\n      <Tags size={'medium'}>\n        <Tag>Medium</Tag>\n        <Tag size={'normal'}>Normal</Tag>\n        <Tag>Medium</Tag>\n        <Tag size={'large'}>Large</Tag>\n        <Tag>Medium</Tag>\n      </Tags>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: IndividualSizeOverridesDemo,
} satisfies StoryObj

export const HoverableTagsStory = {
  name: 'Hoverable tags',
  parameters: {
    official: { id: 'elements-tag/hover-active-state/001' },
    docs: {
      source: {
        code: "import { LinkTag, Tag } from '@seagreenio/react-bulma'\n\nfunction HoverableTagsDemo() {\n  return (\n    <>\n      <LinkTag>Hover me</LinkTag> <Tag as={'button'}>Hover me</Tag>{' '}\n      <Tag className={'rb-is-hoverable'} as={'div'}>\n        Hover me\n      </Tag>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HoverableTagsDemo,
} satisfies StoryObj

export const RoundedTagStory = {
  name: 'Rounded tag',
  parameters: {
    official: { id: 'elements-tag/modifiers/001' },
    docs: {
      source: {
        code: "import { Tag } from '@seagreenio/react-bulma'\n\nfunction RoundedTagDemo() {\n  return (\n    <>\n      <Tag rounded>Rounded</Tag>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RoundedTagDemo,
} satisfies StoryObj

export const DeleteTagStory = {
  name: 'Delete tag',
  parameters: {
    official: { id: 'elements-tag/modifiers/002' },
    docs: {
      source: {
        code: "import { TagDelete } from '@seagreenio/react-bulma'\n\nfunction DeleteTagDemo() {\n  return (\n    <>\n      <TagDelete as={'a'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DeleteTagDemo,
} satisfies StoryObj

export const ColoredHoverableTagsStory = {
  name: 'Colored hoverable tags',
  parameters: {
    official: { id: 'elements-tag/combinations/001' },
    docs: {
      source: {
        code: "import { LinkTag, Tag } from '@seagreenio/react-bulma'\n\nfunction ColoredHoverableTagsDemo() {\n  return (\n    <>\n      <LinkTag color={'link'}>Hover me</LinkTag>{' '}\n      <Tag color={'primary'} as={'button'}>\n        Hover me\n      </Tag>{' '}\n      <Tag color={'success'} className={'rb-is-hoverable'} as={'div'}>\n        Hover me\n      </Tag>{' '}\n      <LinkTag color={'info'}>Hover me</LinkTag>{' '}\n      <Tag color={'warning'} as={'button'}>\n        Hover me\n      </Tag>{' '}\n      <Tag color={'danger'} className={'rb-is-hoverable'} as={'div'}>\n        Hover me\n      </Tag>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ColoredHoverableTagsDemo,
} satisfies StoryObj

export const TagsWithDeleteButtonsStory = {
  name: 'Tags with delete buttons',
  parameters: {
    official: { id: 'elements-tag/combinations/002' },
    docs: {
      source: {
        code: "import { Delete, Field, Tag } from '@seagreenio/react-bulma'\n\nfunction TagsWithDeleteButtonsDemo() {\n  return (\n    <>\n      <Field as={'p'}>\n        <Tag color={'success'}>\n          Bar\n          <Delete size={'small'} />\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'warning'} size={'medium'}>\n          Hello\n          <Delete size={'small'} />\n        </Tag>\n      </Field>\n      <Field as={'p'}>\n        <Tag color={'danger'} size={'large'}>\n          World\n          <Delete />\n        </Tag>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TagsWithDeleteButtonsDemo,
} satisfies StoryObj

export const TagListStory = {
  name: 'Tag list',
  parameters: {
    official: { id: 'elements-tag/list-of-tags/001' },
    docs: {
      source: {
        code: "import { Content, Tag, Tags } from '@seagreenio/react-bulma'\n\nfunction TagListDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can now create a <strong>list of tags</strong> with the{' '}\n          <code>{'tags'}</code> container.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Tags>\n          <Tag>One</Tag>\n          <Tag>Two</Tag>\n          <Tag>Three</Tag>\n        </Tags>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TagListDemo,
} satisfies StoryObj

export const WrappingTagListStory = {
  name: 'Wrapping tag list',
  parameters: {
    official: { id: 'elements-tag/list-of-tags/002' },
    docs: {
      source: {
        code: "import { Content, Tag, Tags } from '@seagreenio/react-bulma'\n\nfunction WrappingTagListDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          If the list is <strong>very long</strong>, it will automatically wrap\n          on <strong>multiple lines</strong>, while keeping all tags{' '}\n          <strong>evenly spaced</strong>.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Tags>\n          <Tag>One</Tag>\n          <Tag>Two</Tag>\n          <Tag>Three</Tag>\n          <Tag>Four</Tag>\n          <Tag>Five</Tag>\n          <Tag>Six</Tag>\n          <Tag>Seven</Tag>\n          <Tag>Eight</Tag>\n          <Tag>Nine</Tag>\n          <Tag>Ten</Tag>\n          <Tag>Eleven</Tag>\n          <Tag>Twelve</Tag>\n          <Tag>Thirteen</Tag>\n          <Tag>Fourteen</Tag>\n          <Tag>Fifteen</Tag>\n          <Tag>Sixteen</Tag>\n          <Tag>Seventeen</Tag>\n          <Tag>Eighteen</Tag>\n          <Tag>Nineteen</Tag>\n          <Tag>Twenty</Tag>\n        </Tags>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WrappingTagListDemo,
} satisfies StoryObj

export const AttachedTagsStory = {
  name: 'Attached tags',
  parameters: {
    official: { id: 'elements-tag/tag-addons/001' },
    docs: {
      source: {
        code: "import { Content, Tag, Tags } from '@seagreenio/react-bulma'\n\nfunction AttachedTagsDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can <strong>attach tags together</strong> with the{' '}\n          <code>{'has-addons'}</code> modifier.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Tags addons>\n          <Tag>Package</Tag>\n          <Tag color={'primary'}>Bulma</Tag>\n        </Tags>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: AttachedTagsDemo,
} satisfies StoryObj

export const TagWithDeleteAddonStory = {
  name: 'Tag with delete addon',
  parameters: {
    official: { id: 'elements-tag/tag-addons/002' },
    docs: {
      source: {
        code: "import { Content, Tag, TagDelete, Tags } from '@seagreenio/react-bulma'\n\nfunction TagWithDeleteAddonDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can attach a <strong>text</strong> tag with a{' '}\n          <strong>delete</strong> tag together.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Tags addons>\n          <Tag color={'danger'}>Alex Smith</Tag>\n          <TagDelete as={'a'} />\n        </Tags>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TagWithDeleteAddonDemo,
} satisfies StoryObj

export const GroupedTagAddonsStory = {
  name: 'Grouped tag addons',
  parameters: {
    official: { id: 'elements-tag/tag-addons/003' },
    docs: {
      source: {
        code: "import { Content, Control, Field, Tag, Tags } from '@seagreenio/react-bulma'\n\nfunction GroupedTagAddonsDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          If you want to attach <code>{'tags'}</code> containers{' '}\n          <strong>together</strong>, simply use the <code>{'field'}</code>{' '}\n          element with the <code>{'is-grouped'}</code> and{' '}\n          <code>{'is-grouped-multiline'}</code> modifiers.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Field layout={'grouped'} multiline>\n          <Control>\n            <Tags addons>\n              <Tag color={'dark'}>npm</Tag>\n              <Tag color={'info'}>1.0.4</Tag>\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <Tag color={'dark'}>build</Tag>\n              <Tag color={'success'}>passing</Tag>\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <Tag color={'dark'}>chat</Tag>\n              <Tag color={'primary'}>on gitter</Tag>\n            </Tags>\n          </Control>\n        </Field>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: GroupedTagAddonsDemo,
} satisfies StoryObj

export const WrappingTagAddonsStory = {
  name: 'Wrapping tag addons',
  parameters: {
    official: { id: 'elements-tag/tag-addons/004' },
    docs: {
      source: {
        code: "import {\n  Content,\n  Control,\n  Field,\n  LinkTag,\n  TagDelete,\n  Tags,\n} from '@seagreenio/react-bulma'\n\nfunction WrappingTagAddonsDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          This can be useful for a long list of <strong>blog tags</strong>.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <Field layout={'grouped'} multiline>\n          <Control>\n            <Tags addons>\n              <LinkTag color={'link'}>Technology</LinkTag>\n              <TagDelete as={'a'} />\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <LinkTag color={'link'}>CSS</LinkTag>\n              <TagDelete as={'a'} />\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <LinkTag color={'link'}>Flexbox</LinkTag>\n              <TagDelete as={'a'} />\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <LinkTag color={'link'}>Web Design</LinkTag>\n              <TagDelete as={'a'} />\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <LinkTag color={'link'}>Open Source</LinkTag>\n              <TagDelete as={'a'} />\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <LinkTag color={'link'}>Community</LinkTag>\n              <TagDelete as={'a'} />\n            </Tags>\n          </Control>\n          <Control>\n            <Tags addons>\n              <LinkTag color={'link'}>Documentation</LinkTag>\n              <TagDelete as={'a'} />\n            </Tags>\n          </Control>\n        </Field>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WrappingTagAddonsDemo,
} satisfies StoryObj

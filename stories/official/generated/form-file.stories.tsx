import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { useState } from 'react'
import { Content, File } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-file',
      title: 'File upload',
      url: 'https://bulma.io/documentation/form/file/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-file',
  title: 'CSS Library/Form/File',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-file" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'File upload'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A custom '}
          <strong data-official-prose="">{'file upload'}</strong>
          {' input, without JavaScript'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'file'}</code>
            {' element is a simple '}
            <strong data-official-prose="">{'interactive label'}</strong>
            {' that wraps an '}
            <code data-official-prose="">{'<input type="file">'}</code>
            {'. It comprises several sub-elements: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'file'}</code>
              {' the main '}
              <strong data-official-prose="">{'container'}</strong>
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'file-label'}</code>
                  {' the actual '}
                  <strong data-official-prose="">{'interactive'}</strong>
                  {' and clickable part of the element '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'file-input'}</code>
                      {' the '}
                      <strong data-official-prose="">{'native'}</strong>
                      {' file input, hidden for styling purposes'}
                    </li>
                    <li data-official-prose="">
                      <code data-official-prose="">{'file-cta'}</code>
                      {' the upload '}
                      <strong data-official-prose="">{'call-to-action'}</strong>
                      <ul data-official-prose="">
                        <li data-official-prose="">
                          <code data-official-prose="">{'file-icon'}</code>
                          {' an optional '}
                          <strong data-official-prose="">{'upload'}</strong>
                          {' icon'}
                        </li>
                        <li data-official-prose="">
                          <code data-official-prose="">{'file-label'}</code>
                          {' the "Choose a file…" text'}
                        </li>
                      </ul>
                    </li>
                    <li data-official-prose="">
                      <code data-official-prose="">{'file-name'}</code>
                      {' a container for the '}
                      <strong data-official-prose="">{'chosen file'}</strong>
                      {' name'}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div data-official-example="form-file/basic/001">
          <Canvas of={DefaultFileUploadStory} />
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
          <div
            data-official-prose=""
            className={'column is-6'}
            data-source-example={'form-file/modifiers/001'}
          >
            <div data-official-example="form-file/modifiers/001">
              <Canvas of={FilenameLabelStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-6 bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="file has-name">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-6'}
            data-source-example={'form-file/modifiers/002'}
          >
            <div data-official-example="form-file/modifiers/002">
              <Canvas of={FilenameWithCTAOnTheRightStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-6 bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="file has-name is-right">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-6'}
            data-source-example={'form-file/modifiers/003'}
          >
            <div data-official-example="form-file/modifiers/003">
              <Canvas of={FullWidthFilenameStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-6 bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="file has-name is-fullwidth">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-6'}
            data-source-example={'form-file/modifiers/004'}
          >
            <div data-official-example="form-file/modifiers/004">
              <Canvas of={BoxedFileUploadStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-6 bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="file is-boxed">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n  </label>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-6'}
            data-source-example={'form-file/modifiers/005'}
          >
            <div data-official-example="form-file/modifiers/005">
              <Canvas of={BoxedUploadWithFilenameStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-6 bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="file has-name is-boxed">\n  <label class="file-label">\n    <input class="file-input" type="file" name="resume" />\n    <span class="file-cta">\n      <span class="file-icon">\n        <i class="fas fa-upload"></i>\n      </span>\n      <span class="file-label"> Choose a file… </span>\n    </span>\n    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>\n  </label>\n</div>\n'
                  }
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
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can style the file element by appending one of the '}
            <strong data-official-prose="">{'0 color modifiers'}</strong>
            {': '}
          </p>
          <ul data-official-prose=""></ul>
        </div>
        <div data-official-example="form-file/colors/001">
          <Canvas of={PrimaryFileUploadStory} />
        </div>
        <div data-official-example="form-file/colors/002">
          <Canvas of={InfoUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/colors/003">
          <Canvas of={WarningBoxedUploadStory} />
        </div>
        <div data-official-example="form-file/colors/004">
          <Canvas of={DangerBoxedUploadWithFilenameStory} />
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
            {'You can append one of the '}
            <strong data-official-prose="">{'4 available sizes'}</strong>
            {':'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-small'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-normal'}</code>
              {' (default)'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-medium'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-large'}</code>
            </li>
          </ul>
        </div>
        <div data-official-example="form-file/sizes/001">
          <Canvas of={SmallFileUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/002">
          <Canvas of={NormalFileUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/003">
          <Canvas of={MediumFileUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/004">
          <Canvas of={LargeFileUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/005">
          <Canvas of={SmallUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/sizes/006">
          <Canvas of={NormalUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/sizes/007">
          <Canvas of={MediumUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/sizes/008">
          <Canvas of={LargeUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/sizes/009">
          <Canvas of={SmallBoxedUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/010">
          <Canvas of={NormalBoxedUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/011">
          <Canvas of={MediumBoxedUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/012">
          <Canvas of={LargeBoxedUploadStory} />
        </div>
        <div data-official-example="form-file/sizes/013">
          <Canvas of={SmallBoxedUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/sizes/014">
          <Canvas of={NormalBoxedUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/sizes/015">
          <Canvas of={MediumBoxedUploadWithFilenameStory} />
        </div>
        <div data-official-example="form-file/sizes/016">
          <Canvas of={LargeBoxedUploadWithFilenameStory} />
        </div>
        <h3
          data-official-prose=""
          id={'alignment'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Alignment '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#alignment'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can '}
            <strong data-official-prose="">{'align'}</strong>
            {' the file input:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {'to the '}
              <strong data-official-prose="">{'center'}</strong>
              {' with the '}
              <code data-official-prose="">{'is-centered'}</code>
              {' modifier'}
            </li>
            <li data-official-prose="">
              {'to the '}
              <strong data-official-prose="">{'right'}</strong>
              {' with the '}
              <code data-official-prose="">{'is-right'}</code>
              {' modifier'}
            </li>
          </ul>
        </div>
        <div data-official-example="form-file/alignment/001">
          <Canvas of={CenteredBoxedUploadStory} />
        </div>
        <div data-official-example="form-file/alignment/002">
          <Canvas of={RightAlignedUploadStory} />
        </div>
        <h3
          data-official-prose=""
          id={'javascript'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' JavaScript '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#javascript'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' A file upload input requires JavaScript to '}
            <strong data-official-prose="">{'retrieve'}</strong>
            {' the '}
            <strong data-official-prose="">{'selected file name'}</strong>
            {'. Here is an example of how this could be done: '}
          </p>
        </div>
        <div data-official-example="form-file/javascript/001">
          <Canvas of={LiveFilenameUpdateStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultFileUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Choose a file…
      </File>
    </>
  )
}

function FilenameLabelDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <Content>
        <p>
          With the <code>{'has-name'}</code> modifier combined with the{' '}
          <code>{'file-name'}</code> element, you can add a{' '}
          <strong>placeholder</strong> for the selected file name.
        </p>
      </Content>
      <div className={'bd-example'}>
        <File
          name={'resume'}
          icon={
            <>
              <i className={'fas fa-upload'} />
            </>
          }
          filename={filename1}
          onChange={(event) =>
            setFilename1(
              event.currentTarget.files?.[0]?.name ??
                ' Screen Shot 2017-07-29 at 15.54.25.png ',
            )
          }
        >
          Choose a file…
        </File>
      </div>
    </>
  )
}

function FilenameWithCTAOnTheRightDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <Content>
        <p>
          You can move the CTA to the <strong>right side</strong> with the{' '}
          <code>{'is-right'}</code> modifier.
        </p>
      </Content>
      <div className={'bd-example'}>
        <File
          name={'resume'}
          alignment={'right'}
          icon={
            <>
              <i className={'fas fa-upload'} />
            </>
          }
          filename={filename1}
          onChange={(event) =>
            setFilename1(
              event.currentTarget.files?.[0]?.name ??
                ' Screen Shot 2017-07-29 at 15.54.25.png ',
            )
          }
        >
          Choose a file…
        </File>
      </div>
    </>
  )
}

function FullWidthFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <Content>
        <p>
          You can also <strong>expand</strong> the name to fill up the space
          with the <code>{'is-fullwidth'}</code> modifier.
        </p>
      </Content>
      <div className={'bd-example'}>
        <File
          name={'resume'}
          fullWidth
          icon={
            <>
              <i className={'fas fa-upload'} />
            </>
          }
          filename={filename1}
          onChange={(event) =>
            setFilename1(
              event.currentTarget.files?.[0]?.name ??
                ' Screen Shot 2017-07-29 at 15.54.25.png ',
            )
          }
        >
          Choose a file…
        </File>
      </div>
    </>
  )
}

function BoxedFileUploadDemo() {
  return (
    <>
      <Content>
        <p>
          You can have a <strong>boxed block</strong> with the{' '}
          <code>{'is-boxed'}</code> modifier.
        </p>
      </Content>
      <div className={'bd-example'}>
        <File
          name={'resume'}
          boxed
          icon={
            <>
              <i className={'fas fa-upload'} />
            </>
          }
        >
          Choose a file…
        </File>
      </div>
    </>
  )
}

function BoxedUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <Content>
        <p>
          You can <strong>combine</strong> <code>{'has-name'}</code> and{' '}
          <code>{'is-boxed'}</code>.
        </p>
      </Content>
      <div className={'bd-example'}>
        <File
          name={'resume'}
          boxed
          icon={
            <>
              <i className={'fas fa-upload'} />
            </>
          }
          filename={filename1}
          onChange={(event) =>
            setFilename1(
              event.currentTarget.files?.[0]?.name ??
                ' Screen Shot 2017-07-29 at 15.54.25.png ',
            )
          }
        >
          Choose a file…
        </File>
      </div>
    </>
  )
}

function PrimaryFileUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        color={'primary'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Primary file…
      </File>
    </>
  )
}

function InfoUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        color={'info'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Info file…
      </File>
    </>
  )
}

function WarningBoxedUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        color={'warning'}
        boxed
        icon={
          <>
            <i className={'fas fa-cloud-upload-alt'} />
          </>
        }
      >
        Warning file…
      </File>
    </>
  )
}

function DangerBoxedUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        color={'danger'}
        boxed
        icon={
          <>
            <i className={'fas fa-cloud-upload-alt'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Danger file…
      </File>
    </>
  )
}

function SmallFileUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'small'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Small file…
      </File>
    </>
  )
}

function NormalFileUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'normal'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Normal file…
      </File>
    </>
  )
}

function MediumFileUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'medium'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Medium file…
      </File>
    </>
  )
}

function LargeFileUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'large'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Large file…
      </File>
    </>
  )
}

function SmallUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'small'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Small file…
      </File>
    </>
  )
}

function NormalUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'normal'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Normal file…
      </File>
    </>
  )
}

function MediumUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'medium'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Medium file…
      </File>
    </>
  )
}

function LargeUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'large'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Large file…
      </File>
    </>
  )
}

function SmallBoxedUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'small'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Small file…
      </File>
    </>
  )
}

function NormalBoxedUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'normal'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Normal file…
      </File>
    </>
  )
}

function MediumBoxedUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'medium'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Medium file…
      </File>
    </>
  )
}

function LargeBoxedUploadDemo() {
  return (
    <>
      <File
        name={'resume'}
        size={'large'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
      >
        Large file…
      </File>
    </>
  )
}

function SmallBoxedUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'small'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Small file…
      </File>
    </>
  )
}

function NormalBoxedUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'normal'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Normal file…
      </File>
    </>
  )
}

function MediumBoxedUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'medium'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Medium file…
      </File>
    </>
  )
}

function LargeBoxedUploadWithFilenameDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        size={'large'}
        boxed
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Large file…
      </File>
    </>
  )
}

function CenteredBoxedUploadDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        alignment={'centered'}
        boxed
        color={'success'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Centered file…
      </File>
    </>
  )
}

function RightAlignedUploadDemo() {
  const [filename1, setFilename1] = useState(
    ' Screen Shot 2017-07-29 at 15.54.25.png ',
  )
  return (
    <>
      <File
        name={'resume'}
        alignment={'right'}
        color={'info'}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ??
              ' Screen Shot 2017-07-29 at 15.54.25.png ',
          )
        }
      >
        Right file…
      </File>
    </>
  )
}

function LiveFilenameUpdateDemo() {
  const [filename1, setFilename1] = useState(' No file uploaded ')
  return (
    <>
      <File
        name={'resume'}
        wrapperProps={{ id: 'file-js-example' }}
        icon={
          <>
            <i className={'fas fa-upload'} />
          </>
        }
        filename={filename1}
        onChange={(event) =>
          setFilename1(
            event.currentTarget.files?.[0]?.name ?? ' No file uploaded ',
          )
        }
      >
        Choose a file…
      </File>
    </>
  )
}

export const DefaultFileUploadStory = {
  name: 'Default file upload',
  parameters: {
    official: { id: 'form-file/basic/001' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction DefaultFileUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Choose a file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultFileUploadDemo,
} satisfies StoryObj

export const FilenameLabelStory = {
  name: 'Filename label',
  parameters: {
    official: { id: 'form-file/modifiers/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Content, File } from '@seagreenio/react-bulma'\n\nfunction FilenameLabelDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <Content>\n        <p>\n          With the <code>{'has-name'}</code> modifier combined with the{' '}\n          <code>{'file-name'}</code> element, you can add a{' '}\n          <strong>placeholder</strong> for the selected file name.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <File\n          name={'resume'}\n          icon={\n            <>\n              <i className={'fas fa-upload'} />\n            </>\n          }\n          filename={filename1}\n          onChange={(event) =>\n            setFilename1(\n              event.currentTarget.files?.[0]?.name ??\n                ' Screen Shot 2017-07-29 at 15.54.25.png ',\n            )\n          }\n        >\n          Choose a file…\n        </File>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FilenameLabelDemo,
} satisfies StoryObj

export const FilenameWithCTAOnTheRightStory = {
  name: 'Filename with CTA on the right',
  parameters: {
    official: { id: 'form-file/modifiers/002' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Content, File } from '@seagreenio/react-bulma'\n\nfunction FilenameWithCTAOnTheRightDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <Content>\n        <p>\n          You can move the CTA to the <strong>right side</strong> with the{' '}\n          <code>{'is-right'}</code> modifier.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <File\n          name={'resume'}\n          alignment={'right'}\n          icon={\n            <>\n              <i className={'fas fa-upload'} />\n            </>\n          }\n          filename={filename1}\n          onChange={(event) =>\n            setFilename1(\n              event.currentTarget.files?.[0]?.name ??\n                ' Screen Shot 2017-07-29 at 15.54.25.png ',\n            )\n          }\n        >\n          Choose a file…\n        </File>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FilenameWithCTAOnTheRightDemo,
} satisfies StoryObj

export const FullWidthFilenameStory = {
  name: 'Full-width filename',
  parameters: {
    official: { id: 'form-file/modifiers/003' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Content, File } from '@seagreenio/react-bulma'\n\nfunction FullWidthFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <Content>\n        <p>\n          You can also <strong>expand</strong> the name to fill up the space\n          with the <code>{'is-fullwidth'}</code> modifier.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <File\n          name={'resume'}\n          fullWidth\n          icon={\n            <>\n              <i className={'fas fa-upload'} />\n            </>\n          }\n          filename={filename1}\n          onChange={(event) =>\n            setFilename1(\n              event.currentTarget.files?.[0]?.name ??\n                ' Screen Shot 2017-07-29 at 15.54.25.png ',\n            )\n          }\n        >\n          Choose a file…\n        </File>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullWidthFilenameDemo,
} satisfies StoryObj

export const BoxedFileUploadStory = {
  name: 'Boxed file upload',
  parameters: {
    official: { id: 'form-file/modifiers/004' },
    docs: {
      source: {
        code: "import { Content, File } from '@seagreenio/react-bulma'\n\nfunction BoxedFileUploadDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can have a <strong>boxed block</strong> with the{' '}\n          <code>{'is-boxed'}</code> modifier.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <File\n          name={'resume'}\n          boxed\n          icon={\n            <>\n              <i className={'fas fa-upload'} />\n            </>\n          }\n        >\n          Choose a file…\n        </File>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BoxedFileUploadDemo,
} satisfies StoryObj

export const BoxedUploadWithFilenameStory = {
  name: 'Boxed upload with filename',
  parameters: {
    official: { id: 'form-file/modifiers/005' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { Content, File } from '@seagreenio/react-bulma'\n\nfunction BoxedUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <Content>\n        <p>\n          You can <strong>combine</strong> <code>{'has-name'}</code> and{' '}\n          <code>{'is-boxed'}</code>.\n        </p>\n      </Content>\n      <div className={'bd-example'}>\n        <File\n          name={'resume'}\n          boxed\n          icon={\n            <>\n              <i className={'fas fa-upload'} />\n            </>\n          }\n          filename={filename1}\n          onChange={(event) =>\n            setFilename1(\n              event.currentTarget.files?.[0]?.name ??\n                ' Screen Shot 2017-07-29 at 15.54.25.png ',\n            )\n          }\n        >\n          Choose a file…\n        </File>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BoxedUploadWithFilenameDemo,
} satisfies StoryObj

export const PrimaryFileUploadStory = {
  name: 'Primary file upload',
  parameters: {
    official: { id: 'form-file/colors/001' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction PrimaryFileUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        color={'primary'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Primary file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryFileUploadDemo,
} satisfies StoryObj

export const InfoUploadWithFilenameStory = {
  name: 'Info upload with filename',
  parameters: {
    official: { id: 'form-file/colors/002' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction InfoUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        color={'info'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Info file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoUploadWithFilenameDemo,
} satisfies StoryObj

export const WarningBoxedUploadStory = {
  name: 'Warning boxed upload',
  parameters: {
    official: { id: 'form-file/colors/003' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction WarningBoxedUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        color={'warning'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-cloud-upload-alt'} />\n          </>\n        }\n      >\n        Warning file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningBoxedUploadDemo,
} satisfies StoryObj

export const DangerBoxedUploadWithFilenameStory = {
  name: 'Danger boxed upload with filename',
  parameters: {
    official: { id: 'form-file/colors/004' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction DangerBoxedUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        color={'danger'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-cloud-upload-alt'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Danger file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerBoxedUploadWithFilenameDemo,
} satisfies StoryObj

export const SmallFileUploadStory = {
  name: 'Small file upload',
  parameters: {
    official: { id: 'form-file/sizes/001' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction SmallFileUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'small'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Small file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallFileUploadDemo,
} satisfies StoryObj

export const NormalFileUploadStory = {
  name: 'Normal file upload',
  parameters: {
    official: { id: 'form-file/sizes/002' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction NormalFileUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'normal'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Normal file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalFileUploadDemo,
} satisfies StoryObj

export const MediumFileUploadStory = {
  name: 'Medium file upload',
  parameters: {
    official: { id: 'form-file/sizes/003' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction MediumFileUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'medium'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Medium file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumFileUploadDemo,
} satisfies StoryObj

export const LargeFileUploadStory = {
  name: 'Large file upload',
  parameters: {
    official: { id: 'form-file/sizes/004' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction LargeFileUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'large'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Large file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeFileUploadDemo,
} satisfies StoryObj

export const SmallUploadWithFilenameStory = {
  name: 'Small upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/005' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction SmallUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'small'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Small file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallUploadWithFilenameDemo,
} satisfies StoryObj

export const NormalUploadWithFilenameStory = {
  name: 'Normal upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/006' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction NormalUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'normal'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Normal file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalUploadWithFilenameDemo,
} satisfies StoryObj

export const MediumUploadWithFilenameStory = {
  name: 'Medium upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/007' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction MediumUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'medium'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Medium file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumUploadWithFilenameDemo,
} satisfies StoryObj

export const LargeUploadWithFilenameStory = {
  name: 'Large upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/008' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction LargeUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'large'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Large file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeUploadWithFilenameDemo,
} satisfies StoryObj

export const SmallBoxedUploadStory = {
  name: 'Small boxed upload',
  parameters: {
    official: { id: 'form-file/sizes/009' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction SmallBoxedUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'small'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Small file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallBoxedUploadDemo,
} satisfies StoryObj

export const NormalBoxedUploadStory = {
  name: 'Normal boxed upload',
  parameters: {
    official: { id: 'form-file/sizes/010' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction NormalBoxedUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'normal'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Normal file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalBoxedUploadDemo,
} satisfies StoryObj

export const MediumBoxedUploadStory = {
  name: 'Medium boxed upload',
  parameters: {
    official: { id: 'form-file/sizes/011' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction MediumBoxedUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'medium'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Medium file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumBoxedUploadDemo,
} satisfies StoryObj

export const LargeBoxedUploadStory = {
  name: 'Large boxed upload',
  parameters: {
    official: { id: 'form-file/sizes/012' },
    docs: {
      source: {
        code: "import { File } from '@seagreenio/react-bulma'\n\nfunction LargeBoxedUploadDemo() {\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'large'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n      >\n        Large file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeBoxedUploadDemo,
} satisfies StoryObj

export const SmallBoxedUploadWithFilenameStory = {
  name: 'Small boxed upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/013' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction SmallBoxedUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'small'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Small file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallBoxedUploadWithFilenameDemo,
} satisfies StoryObj

export const NormalBoxedUploadWithFilenameStory = {
  name: 'Normal boxed upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/014' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction NormalBoxedUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'normal'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Normal file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalBoxedUploadWithFilenameDemo,
} satisfies StoryObj

export const MediumBoxedUploadWithFilenameStory = {
  name: 'Medium boxed upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/015' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction MediumBoxedUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'medium'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Medium file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumBoxedUploadWithFilenameDemo,
} satisfies StoryObj

export const LargeBoxedUploadWithFilenameStory = {
  name: 'Large boxed upload with filename',
  parameters: {
    official: { id: 'form-file/sizes/016' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction LargeBoxedUploadWithFilenameDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        size={'large'}\n        boxed\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Large file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeBoxedUploadWithFilenameDemo,
} satisfies StoryObj

export const CenteredBoxedUploadStory = {
  name: 'Centered boxed upload',
  parameters: {
    official: { id: 'form-file/alignment/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction CenteredBoxedUploadDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        alignment={'centered'}\n        boxed\n        color={'success'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Centered file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredBoxedUploadDemo,
} satisfies StoryObj

export const RightAlignedUploadStory = {
  name: 'Right-aligned upload',
  parameters: {
    official: { id: 'form-file/alignment/002' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction RightAlignedUploadDemo() {\n  const [filename1, setFilename1] = useState(\n    ' Screen Shot 2017-07-29 at 15.54.25.png ',\n  )\n  return (\n    <>\n      <File\n        name={'resume'}\n        alignment={'right'}\n        color={'info'}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ??\n              ' Screen Shot 2017-07-29 at 15.54.25.png ',\n          )\n        }\n      >\n        Right file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RightAlignedUploadDemo,
} satisfies StoryObj

export const LiveFilenameUpdateStory = {
  name: 'Live filename update',
  parameters: {
    official: { id: 'form-file/javascript/001' },
    docs: {
      source: {
        code: "import { useState } from 'react'\nimport { File } from '@seagreenio/react-bulma'\n\nfunction LiveFilenameUpdateDemo() {\n  const [filename1, setFilename1] = useState(' No file uploaded ')\n  return (\n    <>\n      <File\n        name={'resume'}\n        wrapperProps={{ id: 'file-js-example' }}\n        icon={\n          <>\n            <i className={'fas fa-upload'} />\n          </>\n        }\n        filename={filename1}\n        onChange={(event) =>\n          setFilename1(\n            event.currentTarget.files?.[0]?.name ?? ' No file uploaded ',\n          )\n        }\n      >\n        Choose a file…\n      </File>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LiveFilenameUpdateDemo,
} satisfies StoryObj

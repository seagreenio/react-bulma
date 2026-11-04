import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Content, Control, Icon, Select } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-select',
      title: 'Select',
      url: 'https://bulma.io/documentation/form/select/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-select',
  title: 'CSS Library/Form/Select',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-select" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Select'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The browser built-in '}
          <strong data-official-prose="">{'select dropdown'}</strong>
          {', styled accordingly'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'select'}</code>
            {' class is a simple wrapper around the '}
            <code data-official-prose="">{'<select>'}</code>
            {
              ' HTML element, which gives the styling more flexibility and support for icons. '
            }
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/basic/001'}
          >
            <div data-official-example="form-select/basic/001">
              <Canvas of={DefaultSelectStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-half bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="select">\n  <select>\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Several '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' are supported which affect:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {' the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#colors'}>
                  {'color'}
                </a>
              </strong>
            </li>
            <li data-official-prose="">
              {' the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#sizes'}>
                  {'size'}
                </a>
              </strong>
            </li>
            <li data-official-prose="">
              {' the '}
              <strong data-official-prose="">
                <a data-official-prose="" href={'#states'}>
                  {'state'}
                </a>
              </strong>
            </li>
          </ul>
        </div>
        <h3
          data-official-prose=""
          id={'multiple-select'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Multiple select '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#multiple-select'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/multiple-select/001'}
          >
            <div data-official-example="form-select/multiple-select/001">
              <Canvas of={MultipleSelectionStory} />
            </div>
          </div>
          <div
            data-official-prose=""
            className={'column is-half bd-highlight-full'}
          >
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="select is-multiple">\n  <select multiple size="8">\n    <option value="Argentina">Argentina</option>\n    <option value="Bolivia">Bolivia</option>\n    <option value="Brazil">Brazil</option>\n    <option value="Chile">Chile</option>\n    <option value="Colombia">Colombia</option>\n    <option value="Ecuador">Ecuador</option>\n    <option value="Guyana">Guyana</option>\n    <option value="Paraguay">Paraguay</option>\n    <option value="Peru">Peru</option>\n    <option value="Suriname">Suriname</option>\n    <option value="Uruguay">Uruguay</option>\n    <option value="Venezuela">Venezuela</option>\n  </select>\n</div>\n'
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
        <div data-official-example="form-select/colors/001">
          <Canvas of={LinkSelectStory} />
        </div>
        <div data-official-example="form-select/colors/002">
          <Canvas of={PrimarySelectStory} />
        </div>
        <div data-official-example="form-select/colors/003">
          <Canvas of={InfoSelectStory} />
        </div>
        <div data-official-example="form-select/colors/004">
          <Canvas of={SuccessSelectStory} />
        </div>
        <div data-official-example="form-select/colors/005">
          <Canvas of={WarningSelectStory} />
        </div>
        <div data-official-example="form-select/colors/006">
          <Canvas of={DangerSelectStory} />
        </div>
        <h3
          data-official-prose=""
          id={'styles'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Styles '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#styles'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can create a '}
            <strong data-official-prose="">{'rounded dropdown'}</strong>
            {' by appending the '}
            <code data-official-prose="">{'is-rounded'}</code>
            {' modifier:'}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/styles/001'}
          >
            <div data-official-example="form-select/styles/001">
              <Canvas of={RoundedSelectStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="select is-rounded">\n  <select>\n    <option>Rounded dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
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
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'select'}</code>
            {' element comes in '}
            <strong data-official-prose="">{'4'}</strong>
            {' different sizes:'}
          </p>
        </div>
        <div data-official-example="form-select/sizes/001">
          <Canvas of={SmallSelectStory} />
        </div>
        <div data-official-example="form-select/sizes/002">
          <Canvas of={NormalSizeSelectStory} />
        </div>
        <div data-official-example="form-select/sizes/003">
          <Canvas of={MediumSelectStory} />
        </div>
        <div data-official-example="form-select/sizes/004">
          <Canvas of={LargeSelectStory} />
        </div>
        <h3
          data-official-prose=""
          id={'states'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' States '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#states'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Bulma styles the different '}
            <strong data-official-prose="">{'states'}</strong>
            {' of the '}
            <code data-official-prose="">{'select'}</code>
            {
              ' element. Each state is available as a pseudo-class and a CSS class: '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{':hover'}</code>
              {' and '}
              <code data-official-prose="">{'is-hovered'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{':focus'}</code>
              {' and '}
              <code data-official-prose="">{'is-focused'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{':active'}</code>
              {' and '}
              <code data-official-prose="">{'is-active'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {
              'This allows you to obtain the style of a certain state without having to trigger it.'
            }
          </p>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Normal'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/normal/001'}
          >
            <div data-official-example="form-select/normal/001">
              <Canvas of={NormalStateStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="select">\n  <select>\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Hover'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/hover/001'}
          >
            <div data-official-example="form-select/hover/001">
              <Canvas of={HoverStateStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="select">\n  <select class="is-hovered">\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Focus'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/focus/001'}
          >
            <div data-official-example="form-select/focus/001">
              <Canvas of={FocusStateStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="select">\n  <select class="is-focused">\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'subtitle'}>
          {'Loading'}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/loading/001'}
          >
            <div data-official-example="form-select/loading/001">
              <Canvas of={LoadingSelectStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="select is-loading">\n  <select>\n    <option>Select dropdown</option>\n    <option>With options</option>\n  </select>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'with-icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' With icons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#with-icons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can append the '}
            <strong data-official-prose="">{'modifier'}</strong>
            {' on a control:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'has-icons-left'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {'You also need to add a modifier on the '}
            <strong data-official-prose="">{'icon'}</strong>
            {':'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-left'}</code>
              {' since '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {' is used'}
            </li>
          </ul>
          <p data-official-prose="">
            {'The size of the '}
            <strong data-official-prose="">{'select'}</strong>
            {' will define the size of the icon container.'}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/with-icons/001'}
          >
            <div data-official-example="form-select/with-icons/001">
              <Canvas of={SelectWithAnIconStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left">\n  <div class="select">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <div class="icon is-small is-left">\n    <i class="fas fa-globe"></i>\n  </div>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/with-icons/002'}
          >
            <div data-official-example="form-select/with-icons/002">
              <Canvas of={SmallSelectWithAnIconStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left">\n  <div class="select is-small">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-small is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/with-icons/003'}
          >
            <div data-official-example="form-select/with-icons/003">
              <Canvas of={NormalSelectWithAnIconStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left">\n  <div class="select">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/with-icons/004'}
          >
            <div data-official-example="form-select/with-icons/004">
              <Canvas of={MediumSelectWithAnIconStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left">\n  <div class="select is-medium">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-medium is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-half'}
            data-source-example={'form-select/with-icons/005'}
          >
            <div data-official-example="form-select/with-icons/005">
              <Canvas of={LargeSelectWithAnIconStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column is-half'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="control has-icons-left">\n  <div class="select is-large">\n    <select>\n      <option selected>Country</option>\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </select>\n  </div>\n  <span class="icon is-large is-left">\n    <i class="fas fa-globe"></i>\n  </span>\n</div>\n'
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

function DefaultSelectDemo() {
  return (
    <>
      <Select>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function MultipleSelectionDemo() {
  return (
    <>
      <Content>
        <p>
          You can style a <strong>multiple select</strong> dropdown, by using
          the <code>{'is-multiple'}</code> modifier, and by using the{' '}
          <code>{'multiple'}</code> HTML attribute.
        </p>
      </Content>
      <Select multiple htmlSize={8}>
        {' '}
        <option value={'Argentina'}>Argentina</option>{' '}
        <option value={'Bolivia'}>Bolivia</option>{' '}
        <option value={'Brazil'}>Brazil</option>{' '}
        <option value={'Chile'}>Chile</option>{' '}
        <option value={'Colombia'}>Colombia</option>{' '}
        <option value={'Ecuador'}>Ecuador</option>{' '}
        <option value={'Guyana'}>Guyana</option>{' '}
        <option value={'Paraguay'}>Paraguay</option>{' '}
        <option value={'Peru'}>Peru</option>{' '}
        <option value={'Suriname'}>Suriname</option>{' '}
        <option value={'Uruguay'}>Uruguay</option>{' '}
        <option value={'Venezuela'}>Venezuela</option>{' '}
      </Select>
    </>
  )
}

function LinkSelectDemo() {
  return (
    <>
      <Select color={'link'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function PrimarySelectDemo() {
  return (
    <>
      <Select color={'primary'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function InfoSelectDemo() {
  return (
    <>
      <Select color={'info'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function SuccessSelectDemo() {
  return (
    <>
      <Select color={'success'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function WarningSelectDemo() {
  return (
    <>
      <Select color={'warning'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function DangerSelectDemo() {
  return (
    <>
      <Select color={'danger'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function RoundedSelectDemo() {
  return (
    <>
      <Select rounded>
        {' '}
        <option>Rounded dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function SmallSelectDemo() {
  return (
    <>
      <Select size={'small'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function NormalSizeSelectDemo() {
  return (
    <>
      <Select size={'normal'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function MediumSelectDemo() {
  return (
    <>
      <Select size={'medium'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function LargeSelectDemo() {
  return (
    <>
      <Select size={'large'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function NormalStateDemo() {
  return (
    <>
      <Select>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function HoverStateDemo() {
  return (
    <>
      <Select className={'rb-is-hovered'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function FocusStateDemo() {
  return (
    <>
      <Select className={'rb-is-focused'}>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function LoadingSelectDemo() {
  return (
    <>
      <Select loading>
        {' '}
        <option>Select dropdown</option> <option>With options</option>{' '}
      </Select>
    </>
  )
}

function SelectWithAnIconDemo() {
  return (
    <>
      <Control icons={'left'}>
        <Select defaultValue={'Country'}>
          {' '}
          <option>Country</option> <option>Select dropdown</option>{' '}
          <option>With options</option>{' '}
        </Select>{' '}
        <Icon size={'small'} className={'rb-is-left'} as={'div'}>
          <i className={'fas fa-globe'} />
        </Icon>
      </Control>
    </>
  )
}

function SmallSelectWithAnIconDemo() {
  return (
    <>
      <Content>
        <p>
          If the control contains an icon, Bulma will make sure the icon remains{' '}
          <strong>centered</strong>, no matter the size of the input <em>or</em>{' '}
          of the icon.
        </p>
      </Content>
      <Control icons={'left'}>
        <Select size={'small'} defaultValue={'Country'}>
          {' '}
          <option>Country</option> <option>Select dropdown</option>{' '}
          <option>With options</option>{' '}
        </Select>{' '}
        <Icon size={'small'} className={'rb-is-left'}>
          <i className={'fas fa-globe'} />
        </Icon>
      </Control>
    </>
  )
}

function NormalSelectWithAnIconDemo() {
  return (
    <>
      <Control icons={'left'}>
        <Select defaultValue={'Country'}>
          {' '}
          <option>Country</option> <option>Select dropdown</option>{' '}
          <option>With options</option>{' '}
        </Select>{' '}
        <Icon className={'rb-is-left'}>
          <i className={'fas fa-globe'} />
        </Icon>
      </Control>
    </>
  )
}

function MediumSelectWithAnIconDemo() {
  return (
    <>
      <Control icons={'left'}>
        <Select size={'medium'} defaultValue={'Country'}>
          {' '}
          <option>Country</option> <option>Select dropdown</option>{' '}
          <option>With options</option>{' '}
        </Select>{' '}
        <Icon size={'medium'} className={'rb-is-left'}>
          <i className={'fas fa-globe'} />
        </Icon>
      </Control>
    </>
  )
}

function LargeSelectWithAnIconDemo() {
  return (
    <>
      <Control icons={'left'}>
        <Select size={'large'} defaultValue={'Country'}>
          {' '}
          <option>Country</option> <option>Select dropdown</option>{' '}
          <option>With options</option>{' '}
        </Select>{' '}
        <Icon size={'large'} className={'rb-is-left'}>
          <i className={'fas fa-globe'} />
        </Icon>
      </Control>
    </>
  )
}

export const DefaultSelectStory = {
  name: 'Default select',
  parameters: {
    official: { id: 'form-select/basic/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction DefaultSelectDemo() {\n  return (\n    <>\n      <Select>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultSelectDemo,
} satisfies StoryObj

export const MultipleSelectionStory = {
  name: 'Multiple selection',
  parameters: {
    official: { id: 'form-select/multiple-select/001' },
    docs: {
      source: {
        code: "import { Content, Select } from '@seagreenio/react-bulma'\n\nfunction MultipleSelectionDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          You can style a <strong>multiple select</strong> dropdown, by using\n          the <code>{'is-multiple'}</code> modifier, and by using the{' '}\n          <code>{'multiple'}</code> HTML attribute.\n        </p>\n      </Content>\n      <Select multiple htmlSize={8}>\n        {' '}\n        <option value={'Argentina'}>Argentina</option>{' '}\n        <option value={'Bolivia'}>Bolivia</option>{' '}\n        <option value={'Brazil'}>Brazil</option>{' '}\n        <option value={'Chile'}>Chile</option>{' '}\n        <option value={'Colombia'}>Colombia</option>{' '}\n        <option value={'Ecuador'}>Ecuador</option>{' '}\n        <option value={'Guyana'}>Guyana</option>{' '}\n        <option value={'Paraguay'}>Paraguay</option>{' '}\n        <option value={'Peru'}>Peru</option>{' '}\n        <option value={'Suriname'}>Suriname</option>{' '}\n        <option value={'Uruguay'}>Uruguay</option>{' '}\n        <option value={'Venezuela'}>Venezuela</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MultipleSelectionDemo,
} satisfies StoryObj

export const LinkSelectStory = {
  name: 'Link select',
  parameters: {
    official: { id: 'form-select/colors/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction LinkSelectDemo() {\n  return (\n    <>\n      <Select color={'link'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkSelectDemo,
} satisfies StoryObj

export const PrimarySelectStory = {
  name: 'Primary select',
  parameters: {
    official: { id: 'form-select/colors/002' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction PrimarySelectDemo() {\n  return (\n    <>\n      <Select color={'primary'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimarySelectDemo,
} satisfies StoryObj

export const InfoSelectStory = {
  name: 'Info select',
  parameters: {
    official: { id: 'form-select/colors/003' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction InfoSelectDemo() {\n  return (\n    <>\n      <Select color={'info'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoSelectDemo,
} satisfies StoryObj

export const SuccessSelectStory = {
  name: 'Success select',
  parameters: {
    official: { id: 'form-select/colors/004' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction SuccessSelectDemo() {\n  return (\n    <>\n      <Select color={'success'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessSelectDemo,
} satisfies StoryObj

export const WarningSelectStory = {
  name: 'Warning select',
  parameters: {
    official: { id: 'form-select/colors/005' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction WarningSelectDemo() {\n  return (\n    <>\n      <Select color={'warning'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningSelectDemo,
} satisfies StoryObj

export const DangerSelectStory = {
  name: 'Danger select',
  parameters: {
    official: { id: 'form-select/colors/006' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction DangerSelectDemo() {\n  return (\n    <>\n      <Select color={'danger'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerSelectDemo,
} satisfies StoryObj

export const RoundedSelectStory = {
  name: 'Rounded select',
  parameters: {
    official: { id: 'form-select/styles/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction RoundedSelectDemo() {\n  return (\n    <>\n      <Select rounded>\n        {' '}\n        <option>Rounded dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RoundedSelectDemo,
} satisfies StoryObj

export const SmallSelectStory = {
  name: 'Small select',
  parameters: {
    official: { id: 'form-select/sizes/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction SmallSelectDemo() {\n  return (\n    <>\n      <Select size={'small'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallSelectDemo,
} satisfies StoryObj

export const NormalSizeSelectStory = {
  name: 'Normal size select',
  parameters: {
    official: { id: 'form-select/sizes/002' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction NormalSizeSelectDemo() {\n  return (\n    <>\n      <Select size={'normal'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalSizeSelectDemo,
} satisfies StoryObj

export const MediumSelectStory = {
  name: 'Medium select',
  parameters: {
    official: { id: 'form-select/sizes/003' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction MediumSelectDemo() {\n  return (\n    <>\n      <Select size={'medium'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumSelectDemo,
} satisfies StoryObj

export const LargeSelectStory = {
  name: 'Large select',
  parameters: {
    official: { id: 'form-select/sizes/004' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction LargeSelectDemo() {\n  return (\n    <>\n      <Select size={'large'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeSelectDemo,
} satisfies StoryObj

export const NormalStateStory = {
  name: 'Normal state',
  parameters: {
    official: { id: 'form-select/normal/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction NormalStateDemo() {\n  return (\n    <>\n      <Select>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalStateDemo,
} satisfies StoryObj

export const HoverStateStory = {
  name: 'Hover state',
  parameters: {
    official: { id: 'form-select/hover/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction HoverStateDemo() {\n  return (\n    <>\n      <Select className={'rb-is-hovered'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HoverStateDemo,
} satisfies StoryObj

export const FocusStateStory = {
  name: 'Focus state',
  parameters: {
    official: { id: 'form-select/focus/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction FocusStateDemo() {\n  return (\n    <>\n      <Select className={'rb-is-focused'}>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FocusStateDemo,
} satisfies StoryObj

export const LoadingSelectStory = {
  name: 'Loading select',
  parameters: {
    official: { id: 'form-select/loading/001' },
    docs: {
      source: {
        code: "import { Select } from '@seagreenio/react-bulma'\n\nfunction LoadingSelectDemo() {\n  return (\n    <>\n      <Select loading>\n        {' '}\n        <option>Select dropdown</option> <option>With options</option>{' '}\n      </Select>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LoadingSelectDemo,
} satisfies StoryObj

export const SelectWithAnIconStory = {
  name: 'Select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/001' },
    docs: {
      source: {
        code: "import { Control, Icon, Select } from '@seagreenio/react-bulma'\n\nfunction SelectWithAnIconDemo() {\n  return (\n    <>\n      <Control icons={'left'}>\n        <Select defaultValue={'Country'}>\n          {' '}\n          <option>Country</option> <option>Select dropdown</option>{' '}\n          <option>With options</option>{' '}\n        </Select>{' '}\n        <Icon size={'small'} className={'rb-is-left'} as={'div'}>\n          <i className={'fas fa-globe'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SelectWithAnIconDemo,
} satisfies StoryObj

export const SmallSelectWithAnIconStory = {
  name: 'Small select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/002' },
    docs: {
      source: {
        code: "import { Content, Control, Icon, Select } from '@seagreenio/react-bulma'\n\nfunction SmallSelectWithAnIconDemo() {\n  return (\n    <>\n      <Content>\n        <p>\n          If the control contains an icon, Bulma will make sure the icon remains{' '}\n          <strong>centered</strong>, no matter the size of the input <em>or</em>{' '}\n          of the icon.\n        </p>\n      </Content>\n      <Control icons={'left'}>\n        <Select size={'small'} defaultValue={'Country'}>\n          {' '}\n          <option>Country</option> <option>Select dropdown</option>{' '}\n          <option>With options</option>{' '}\n        </Select>{' '}\n        <Icon size={'small'} className={'rb-is-left'}>\n          <i className={'fas fa-globe'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallSelectWithAnIconDemo,
} satisfies StoryObj

export const NormalSelectWithAnIconStory = {
  name: 'Normal select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/003' },
    docs: {
      source: {
        code: "import { Control, Icon, Select } from '@seagreenio/react-bulma'\n\nfunction NormalSelectWithAnIconDemo() {\n  return (\n    <>\n      <Control icons={'left'}>\n        <Select defaultValue={'Country'}>\n          {' '}\n          <option>Country</option> <option>Select dropdown</option>{' '}\n          <option>With options</option>{' '}\n        </Select>{' '}\n        <Icon className={'rb-is-left'}>\n          <i className={'fas fa-globe'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalSelectWithAnIconDemo,
} satisfies StoryObj

export const MediumSelectWithAnIconStory = {
  name: 'Medium select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/004' },
    docs: {
      source: {
        code: "import { Control, Icon, Select } from '@seagreenio/react-bulma'\n\nfunction MediumSelectWithAnIconDemo() {\n  return (\n    <>\n      <Control icons={'left'}>\n        <Select size={'medium'} defaultValue={'Country'}>\n          {' '}\n          <option>Country</option> <option>Select dropdown</option>{' '}\n          <option>With options</option>{' '}\n        </Select>{' '}\n        <Icon size={'medium'} className={'rb-is-left'}>\n          <i className={'fas fa-globe'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumSelectWithAnIconDemo,
} satisfies StoryObj

export const LargeSelectWithAnIconStory = {
  name: 'Large select with an icon',
  parameters: {
    official: { id: 'form-select/with-icons/005' },
    docs: {
      source: {
        code: "import { Control, Icon, Select } from '@seagreenio/react-bulma'\n\nfunction LargeSelectWithAnIconDemo() {\n  return (\n    <>\n      <Control icons={'left'}>\n        <Select size={'large'} defaultValue={'Country'}>\n          {' '}\n          <option>Country</option> <option>Select dropdown</option>{' '}\n          <option>With options</option>{' '}\n        </Select>{' '}\n        <Icon size={'large'} className={'rb-is-left'}>\n          <i className={'fas fa-globe'} />\n        </Icon>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeSelectWithAnIconDemo,
} satisfies StoryObj

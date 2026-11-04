import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Button,
  Checkbox,
  Control,
  Field,
  FieldBody,
  FieldLabel,
  Help,
  Icon,
  Input,
  Label,
  LinkButton,
  Radio,
  Select,
  Textarea,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'form-general',
      title: 'Form controls',
      url: 'https://bulma.io/documentation/form/general/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-form-general',
  title: 'CSS Library/Form/General',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="form-general" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Form controls'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'All generic '}
          <strong data-official-prose="">{'form controls'}</strong>
          {', designed for consistency'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Bulma supports the following native '}
            <strong data-official-prose="">{'HTML form elements'}</strong>
            {': '}
            <code data-official-prose="">{'<form>'}</code>{' '}
            <code data-official-prose="">{'<button>'}</code>{' '}
            <code data-official-prose="">{'<input>'}</code>{' '}
            <code data-official-prose="">{'<textarea>'}</code>
            {' and '}
            <code data-official-prose="">{'<label>'}</code>
            {'. '}
          </p>
          <p data-official-prose="">
            {'The following CSS '}
            <strong data-official-prose="">{'classes'}</strong>
            {' are supported:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'label'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'input'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'textarea'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'select'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'checkbox'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'radio'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'button'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'help'}</code>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' To maintain an evenly balanced design, Bulma provides a very useful '
            }
            <code data-official-prose="">{'control'}</code>
            {' container with which you can '}
            <strong data-official-prose="">{'wrap'}</strong>
            {' the form controls. '}
            <br data-official-prose="" />
            {' When combining several controls in a '}
            <strong data-official-prose="">{'form'}</strong>
            {', use the '}
            <code data-official-prose="">{'field'}</code>
            {' class as a '}
            <strong data-official-prose="">{'container'}</strong>
            {', to keep the spacing consistent. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'complete-form-example'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Complete form example '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#complete-form-example'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-example="form-general/complete-form-example/001">
          <Canvas of={CompleteFormStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {" For the best results using Bulma, it's recommended to use the "}
            <code data-official-prose="">{'control'}</code>
            {' element as often as possible. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'form-field'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Form field '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-field'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'field'}</code>
            {' container is a simple container for:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {'a text '}
              <code data-official-prose="">{'label'}</code>
            </li>
            <li data-official-prose="">
              {'a form '}
              <code data-official-prose="">{'control'}</code>
            </li>
            <li data-official-prose="">
              {'an optional '}
              <code data-official-prose="">{'help'}</code>
              {'text'}
            </li>
          </ul>
        </div>
        <div data-official-example="form-general/form-field/001">
          <Canvas of={LabelControlAndHelpStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'This container allows form fields to be '}
            <strong data-official-prose="">{'spaced consistently'}</strong>
            {'.'}
          </p>
        </div>
        <div data-official-example="form-general/form-field/002">
          <Canvas of={StackedFieldsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'form-control'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Form control '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-control'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <code data-official-prose="">{'control'}</code>
            {' is a versatile '}
            <strong data-official-prose="">{'block'}</strong>
            {' container meant to '}
            <strong data-official-prose="">
              {'enhance single form controls'}
            </strong>
            {
              '. Because it has the same height as the element that it wraps, it can '
            }
            <strong data-official-prose="" className={'has-text-danger'}>
              {'only contain'}
            </strong>
            {' the following Bulma elements: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'input'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'select'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'button'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'icon'}</code>
            </li>
          </ul>
          <p data-official-prose="">{'This container gives the ability to:'}</p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {'keep the '}
              <strong data-official-prose="">{'spacing'}</strong>
              {' consistent'}
            </li>
            <li data-official-prose="">
              {'combine form controls into a '}
              <strong data-official-prose="">{'group'}</strong>
            </li>
            <li data-official-prose="">
              {'combine form controls into a '}
              <strong data-official-prose="">{'list'}</strong>
            </li>
            <li data-official-prose="">
              {'append and prepend '}
              <strong data-official-prose="">{'icons'}</strong>
              {' to a form control'}
            </li>
          </ul>
        </div>
        <div data-official-example="form-general/form-control/001">
          <Canvas of={InputControlStory} />
        </div>
        <div data-official-example="form-general/form-control/002">
          <Canvas of={SelectControlStory} />
        </div>
        <div data-official-example="form-general/form-control/003">
          <Canvas of={ButtonControlStory} />
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
            {'You can append one of 2 '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' on a control:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'has-icons-left'}</code>
            </li>
            <li data-official-prose="">
              {'and/or '}
              <code data-official-prose="">{'has-icons-right'}</code>
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
              {' if '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {' is used'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-right'}</code>
              {' if '}
              <code data-official-prose="">{'has-icons-right'}</code>
              {' is used'}
            </li>
          </ul>
          <p data-official-prose="">
            {
              "Make sure the input is the control's first child, otherwise the icon may disappear when selected. The size of the "
            }
            <strong data-official-prose="">{'input'}</strong>
            {' will define the size of the icon container.'}
          </p>
        </div>
        <div data-official-example="form-general/with-icons/001">
          <Canvas of={SignInFieldsWithIconsStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can append icons to '}
            <strong data-official-prose="">{'select dropdowns'}</strong>
            {' as well.'}
          </p>
        </div>
        <div data-official-example="form-general/with-icons/002">
          <Canvas of={SelectWithAnIconStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' If the control contains an icon, Bulma will make sure the icon remains '
            }
            <strong data-official-prose="">{'centered'}</strong>
            {', no matter the size of the input '}
            <em data-official-prose="">{'or'}</em>
            {' of the icon. '}
          </p>
        </div>
        <div data-official-example="form-general/with-icons/003">
          <Canvas of={SmallInputWithIconsStory} />
        </div>
        <div data-official-example="form-general/with-icons/004">
          <Canvas of={NormalInputWithIconsStory} />
        </div>
        <div data-official-example="form-general/with-icons/005">
          <Canvas of={MediumInputWithIconsStory} />
        </div>
        <div data-official-example="form-general/with-icons/006">
          <Canvas of={LargeInputWithIconsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'form-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Form addons '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-addons'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to '}
            <strong data-official-prose="">{'attach controls'}</strong>
            {' together, use the '}
            <code data-official-prose="">{'has-addons'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'field'}</code>
            {' container: '}
          </p>
        </div>
        <div data-official-example="form-general/form-addons/001">
          <Canvas of={SearchInputAddonStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can attach inputs, buttons, and dropdowns '}
            <strong data-official-prose="">{'only'}</strong>
            {'.'}
          </p>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' It can be useful to append a '}
            <a
              data-official-prose=""
              href={
                'https://bulma.io/documentation/elements/button#static-button'
              }
            >
              {'static button'}
            </a>
            {'. '}
          </p>
        </div>
        <div data-official-example="form-general/form-addons/002">
          <Canvas of={StaticEmailAddonStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Use the '}
            <code data-official-prose="">{'is-expanded'}</code>
            {
              ' modifier on the element you want to fill up the remaining space (in this case, the input): '
            }
          </p>
        </div>
        <div data-official-example="form-general/form-addons/003">
          <Canvas of={CurrencySelectAddonStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want a full width select dropdown, pair '}
            <code data-official-prose="">{'control is-expanded'}</code>
            {' with '}
            <code data-official-prose="">{'select is-fullwidth'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-example="form-general/form-addons/004">
          <Canvas of={ExpandedSelectAddonStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Use the '}
            <code data-official-prose="">{'has-addons-centered'}</code>
            {' or the '}
            <code data-official-prose="">{'has-addons-right'}</code>
            {' modifiers to alter the '}
            <strong data-official-prose="">{'alignment'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="form-general/form-addons/005">
          <Canvas of={CenteredAddonsStory} />
        </div>
        <div data-official-example="form-general/form-addons/006">
          <Canvas of={RightAlignedAddonsStory} />
        </div>
        <h3
          data-official-prose=""
          id={'form-group'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Form group '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-group'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want to '}
            <strong data-official-prose="">{'group'}</strong>
            {' controls together, use the '}
            <code data-official-prose="">{'is-grouped'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'field'}</code>
            {' container. '}
          </p>
        </div>
        <div data-official-example="form-general/form-group/001">
          <Canvas of={GroupedFormActionsStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Use the '}
            <code data-official-prose="">{'is-grouped-centered'}</code>
            {' or the '}
            <code data-official-prose="">{'is-grouped-right'}</code>
            {' modifiers to alter the '}
            <strong data-official-prose="">{'alignment'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="form-general/form-group/002">
          <Canvas of={CenteredFormActionsStory} />
        </div>
        <div data-official-example="form-general/form-group/003">
          <Canvas of={RightAlignedFormActionsStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Add the '}
            <code data-official-prose="">{'is-expanded'}</code>
            {' modifier on the control element you want to '}
            <strong data-official-prose="">
              {'fill up the remaining space'}
            </strong>
            {' with. '}
          </p>
        </div>
        <div data-official-example="form-general/form-group/004">
          <Canvas of={ExpandedGroupedInputStory} />
        </div>
        <div
          data-official-prose=""
          id={'form-group-multiline'}
          className={'content'}
        >
          <p data-official-prose="">
            {' Add the '}
            <code data-official-prose="">{'is-grouped-multiline'}</code>
            {' modifier to allow controls to fill up '}
            <strong data-official-prose="">{'multiple lines'}</strong>
            {'. This is ideal for a long list of controls. '}
          </p>
        </div>
        <div data-official-example="form-general/form-group/005">
          <Canvas of={MultilineFormGroupStory} />
        </div>
        <div data-official-prose="" className={'message is-info'}>
          <div data-official-prose="" className={'message-header'}>
            <p data-official-prose="">{'List of buttons'}</p>
          </div>
          <div data-official-prose="" className={'message-body'}>
            <div data-official-prose="" className={'content'}>
              <p data-official-prose="">
                {' If you only need a list of '}
                <em data-official-prose="">{'buttons'}</em>
                {', try out the new '}
                <code data-official-prose="">{'buttons'}</code>
                {' class with which you can create a '}
                <a
                  data-official-prose=""
                  href={
                    'https://bulma.io/documentation/elements/button/#list-of-buttons'
                  }
                >
                  {'multiline list of buttons'}
                </a>
                {'. '}
              </p>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'horizontal-form'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Horizontal form '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#horizontal-form'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want a '}
            <strong data-official-prose="">{'horizontal'}</strong>
            {' form control, use the '}
            <code data-official-prose="">{'is-horizontal'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'field'}</code>
            {' container, in which you include: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'field-label'}</code>
              {' for the side label'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'field-body'}</code>
              {' for the input/select/textarea container'}
            </li>
          </ul>
          <p data-official-prose="">
            {'You can use '}
            <code data-official-prose="">{'is-grouped'}</code>
            {' or '}
            <code data-official-prose="">{'has-addons'}</code>
            {' for the child elements.'}
          </p>
        </div>
        <div data-official-example="form-general/horizontal-form/001">
          <Canvas of={HorizontalFormStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' To preserve the '}
            <strong data-official-prose="">{'vertical alignment'}</strong>
            {' of labels with each type and size of control, the '}
            <code data-official-prose="">{'field-label'}</code>
            {' comes with '}
            <strong data-official-prose="">{'4 size modifiers'}</strong>
            {': '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-small'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-normal'}</code>
              {' for any '}
              <code data-official-prose="">{'input'}</code>
              {' or '}
              <code data-official-prose="">{'button'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-medium'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-large'}</code>
            </li>
          </ul>
        </div>
        <div data-official-example="form-general/horizontal-form/002">
          <Canvas of={HorizontalLabelSizesStory} />
        </div>
        <h3
          data-official-prose=""
          id={'disabled-form'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Disabled form '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#disabled-form'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' You can disable part or a whole form by wrapping a set of controls in a '
            }
            <strong data-official-prose="">{'fieldset'}</strong>
            {' with a '}
            <code data-official-prose="">{'disabled'}</code>
            {' HTML attribute. '}
          </p>
        </div>
        <div data-official-example="form-general/disabled-form/001">
          <Canvas of={DisabledFieldsetStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function CompleteFormDemo() {
  return (
    <>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input type={'text'} placeholder={'Text input'} />
        </Control>
      </Field>
      <Field>
        <Label>Username</Label>
        <Control icons={'both'}>
          <Input
            type={'text'}
            placeholder={'Text input'}
            defaultValue={'bulma'}
            color={'success'}
          />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-user'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-check'} />
          </Icon>
        </Control>
        <Help color={'success'}>This username is available</Help>
      </Field>
      <Field>
        <Label>Email</Label>
        <Control icons={'both'}>
          <Input
            type={'email'}
            placeholder={'Email input'}
            defaultValue={'hello@'}
            color={'danger'}
          />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-envelope'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-exclamation-triangle'} />
          </Icon>
        </Control>
        <Help color={'danger'}>This email is invalid</Help>
      </Field>
      <Field>
        <Label>Subject</Label>
        <Control>
          <Select>
            {' '}
            <option>Select dropdown</option> <option>With options</option>{' '}
          </Select>
        </Control>
      </Field>
      <Field>
        <Label>Message</Label>
        <Control>
          <Textarea placeholder={'Textarea'} defaultValue={''} />
        </Control>
      </Field>
      <Field>
        <Control>
          <Checkbox>
            {' '}
            I agree to the <a href={'#'}>terms and conditions</a>{' '}
          </Checkbox>
        </Control>
      </Field>
      <Field>
        <Control>
          <Radio name={'question'}> Yes </Radio>{' '}
          <Radio name={'question'}> No </Radio>
        </Control>
      </Field>
      <Field layout={'grouped'}>
        <Control>
          <Button color={'link'}>Submit</Button>
        </Control>
        <Control>
          <Button color={'link'} tone={'light'}>
            Cancel
          </Button>
        </Control>
      </Field>
    </>
  )
}

function LabelControlAndHelpDemo() {
  return (
    <>
      <Field>
        <Label>Label</Label>
        <Control>
          <Input type={'text'} placeholder={'Text input'} />
        </Control>
        <Help>This is a help text</Help>
      </Field>
    </>
  )
}

function StackedFieldsDemo() {
  return (
    <>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input type={'text'} placeholder={'e.g Alex Smith'} />
        </Control>
      </Field>
      <Field>
        <Label>Email</Label>
        <Control>
          <Input type={'email'} placeholder={'e.g. alexsmith@gmail.com'} />
        </Control>
      </Field>
    </>
  )
}

function InputControlDemo() {
  return (
    <>
      <Control>
        <Input type={'text'} placeholder={'Text input'} />
      </Control>
    </>
  )
}

function SelectControlDemo() {
  return (
    <>
      <Control>
        <Select>
          {' '}
          <option>Select dropdown</option> <option>With options</option>{' '}
        </Select>
      </Control>
    </>
  )
}

function ButtonControlDemo() {
  return (
    <>
      <Control>
        <Button color={'primary'}>Submit</Button>
      </Control>
    </>
  )
}

function SignInFieldsWithIconsDemo() {
  return (
    <>
      <Field>
        <Control icons={'both'} as={'p'}>
          <Input type={'email'} placeholder={'Email'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-envelope'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-check'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'left'} as={'p'}>
          <Input type={'password'} placeholder={'Password'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-lock'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control as={'p'}>
          <Button color={'success'}>Login</Button>
        </Control>
      </Field>
    </>
  )
}

function SelectWithAnIconDemo() {
  return (
    <>
      <Field>
        <Control icons={'left'} as={'p'}>
          <Select as={'span'} defaultValue={'Country'}>
            {' '}
            <option>Country</option> <option>Select dropdown</option>{' '}
            <option>With options</option>{' '}
          </Select>{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-globe'} />
          </Icon>
        </Control>
      </Field>
    </>
  )
}

function SmallInputWithIconsDemo() {
  return (
    <>
      <Field>
        <Label size={'small'}>Small input</Label>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Normal'} size={'small'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-envelope'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-check'} />
          </Icon>
        </Control>
      </Field>
    </>
  )
}

function NormalInputWithIconsDemo() {
  return (
    <>
      <Field>
        <Label>Normal input</Label>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Extra small'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-envelope fa-xs'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-check fa-xs'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Normal'} />{' '}
          <Icon className={'rb-is-left'}>
            <i className={'fas fa-envelope'} />
          </Icon>{' '}
          <Icon className={'rb-is-right'}>
            <i className={'fas fa-check'} />
          </Icon>
        </Control>
      </Field>
    </>
  )
}

function MediumInputWithIconsDemo() {
  return (
    <>
      <Field>
        <Label size={'medium'}>Medium input</Label>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Extra small'} size={'medium'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-envelope fa-xs'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-check fa-xs'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Small'} size={'medium'} />{' '}
          <Icon className={'rb-is-left'}>
            <i className={'fas fa-envelope fa-sm'} />
          </Icon>{' '}
          <Icon className={'rb-is-right'}>
            <i className={'fas fa-check fa-sm'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Normal'} size={'medium'} />{' '}
          <Icon size={'medium'} className={'rb-is-left'}>
            <i className={'fas fa-envelope'} />
          </Icon>{' '}
          <Icon size={'medium'} className={'rb-is-right'}>
            <i className={'fas fa-check'} />
          </Icon>
        </Control>
      </Field>
    </>
  )
}

function LargeInputWithIconsDemo() {
  return (
    <>
      <Field>
        <Label size={'large'}>Large input</Label>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Extra small'} size={'large'} />{' '}
          <Icon size={'small'} className={'rb-is-left'}>
            <i className={'fas fa-envelope fa-xs'} />
          </Icon>{' '}
          <Icon size={'small'} className={'rb-is-right'}>
            <i className={'fas fa-check fa-xs'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Small'} size={'large'} />{' '}
          <Icon className={'rb-is-left'}>
            <i className={'fas fa-envelope fa-sm'} />
          </Icon>{' '}
          <Icon className={'rb-is-right'}>
            <i className={'fas fa-check fa-sm'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Normal'} size={'large'} />{' '}
          <Icon size={'large'} className={'rb-is-left'}>
            <i className={'fas fa-envelope'} />
          </Icon>{' '}
          <Icon size={'large'} className={'rb-is-right'}>
            <i className={'fas fa-check'} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control icons={'both'}>
          <Input type={'email'} placeholder={'Large'} size={'large'} />{' '}
          <Icon size={'medium'} className={'rb-is-left'}>
            <i className={'fas fa-envelope fa-lg'} />
          </Icon>{' '}
          <Icon size={'medium'} className={'rb-is-right'}>
            <i className={'fas fa-check fa-lg'} />
          </Icon>
        </Control>
      </Field>
    </>
  )
}

function SearchInputAddonDemo() {
  return (
    <>
      <Field layout={'addons'}>
        <Control>
          <Input type={'text'} placeholder={'Find a repository'} />
        </Control>
        <Control>
          <Button color={'info'}>Search</Button>
        </Control>
      </Field>
    </>
  )
}

function StaticEmailAddonDemo() {
  return (
    <>
      <Field layout={'addons'}>
        <Control as={'p'}>
          <Input type={'text'} placeholder={'Your email'} />
        </Control>
        <Control as={'p'}>
          <LinkButton className={'rb-is-static'}>@gmail.com</LinkButton>
        </Control>
      </Field>
    </>
  )
}

function CurrencySelectAddonDemo() {
  return (
    <>
      <Field layout={'addons'}>
        <Control as={'p'}>
          <Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </Select>
        </Control>
        <Control as={'p'}>
          <Input type={'text'} placeholder={'Amount of money'} />
        </Control>
        <Control as={'p'}>
          <Button>Transfer</Button>
        </Control>
      </Field>
      <Field layout={'addons'}>
        <Control as={'p'}>
          <Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </Select>
        </Control>
        <Control expanded as={'p'}>
          <Input type={'text'} placeholder={'Amount of money'} />
        </Control>
        <Control as={'p'}>
          <Button>Transfer</Button>
        </Control>
      </Field>
    </>
  )
}

function ExpandedSelectAddonDemo() {
  return (
    <>
      <Field layout={'addons'}>
        <Control expanded>
          <Select name={'country'} fullWidth>
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
        </Control>
        <Control>
          <Button type={'submit'} color={'primary'}>
            Choose
          </Button>
        </Control>
      </Field>
    </>
  )
}

function CenteredAddonsDemo() {
  return (
    <>
      <Field layout={'addons'} alignment={'centered'}>
        <Control as={'p'}>
          <Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </Select>
        </Control>
        <Control as={'p'}>
          <Input type={'text'} placeholder={'Amount of money'} />
        </Control>
        <Control as={'p'}>
          <Button color={'primary'}>Transfer</Button>
        </Control>
      </Field>
    </>
  )
}

function RightAlignedAddonsDemo() {
  return (
    <>
      <Field layout={'addons'} alignment={'right'}>
        <Control as={'p'}>
          <Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </Select>
        </Control>
        <Control as={'p'}>
          <Input type={'text'} placeholder={'Amount of money'} />
        </Control>
        <Control as={'p'}>
          <Button color={'primary'}>Transfer</Button>
        </Control>
      </Field>
    </>
  )
}

function GroupedFormActionsDemo() {
  return (
    <>
      <Field layout={'grouped'}>
        <Control as={'p'}>
          <Button color={'primary'}>Submit</Button>
        </Control>
        <Control as={'p'}>
          <LinkButton color={'light'}>Cancel</LinkButton>
        </Control>
      </Field>
    </>
  )
}

function CenteredFormActionsDemo() {
  return (
    <>
      <Field layout={'grouped'} alignment={'centered'}>
        <Control as={'p'}>
          <Button color={'primary'}>Submit</Button>
        </Control>
        <Control as={'p'}>
          <LinkButton color={'light'}>Cancel</LinkButton>
        </Control>
      </Field>
    </>
  )
}

function RightAlignedFormActionsDemo() {
  return (
    <>
      <Field layout={'grouped'} alignment={'right'}>
        <Control as={'p'}>
          <Button color={'primary'}>Submit</Button>
        </Control>
        <Control as={'p'}>
          <LinkButton color={'light'}>Cancel</LinkButton>
        </Control>
      </Field>
    </>
  )
}

function ExpandedGroupedInputDemo() {
  return (
    <>
      <Field layout={'grouped'}>
        <Control expanded as={'p'}>
          <Input type={'text'} placeholder={'Find a repository'} />
        </Control>
        <Control as={'p'}>
          <Button color={'info'}>Search</Button>
        </Control>
      </Field>
    </>
  )
}

function MultilineFormGroupDemo() {
  return (
    <>
      <Field layout={'grouped'} multiline>
        <Control as={'p'}>
          <Button>One</Button>
        </Control>
        <Control as={'p'}>
          <Button>Two</Button>
        </Control>
        <Control as={'p'}>
          <Button>Three</Button>
        </Control>
        <Control as={'p'}>
          <Button>Four</Button>
        </Control>
        <Control as={'p'}>
          <Button>Five</Button>
        </Control>
        <Control as={'p'}>
          <Button>Six</Button>
        </Control>
        <Control as={'p'}>
          <Button>Seven</Button>
        </Control>
        <Control as={'p'}>
          <Button>Eight</Button>
        </Control>
        <Control as={'p'}>
          <Button>Nine</Button>
        </Control>
        <Control as={'p'}>
          <Button>Ten</Button>
        </Control>
        <Control as={'p'}>
          <Button>Eleven</Button>
        </Control>
        <Control as={'p'}>
          <Button>Twelve</Button>
        </Control>
        <Control as={'p'}>
          <Button>Thirteen</Button>
        </Control>
      </Field>
    </>
  )
}

function HorizontalFormDemo() {
  return (
    <>
      <Field horizontal>
        <FieldLabel size={'normal'}>
          <Label>From</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control expanded icons={'left'} as={'p'}>
              <Input type={'text'} placeholder={'Name'} />{' '}
              <Icon size={'small'} className={'rb-is-left'}>
                <i className={'fas fa-user'} />
              </Icon>
            </Control>
          </Field>
          <Field>
            <Control expanded icons={'both'} as={'p'}>
              <Input
                type={'email'}
                placeholder={'Email'}
                defaultValue={'alex@smith.com'}
                color={'success'}
              />{' '}
              <Icon size={'small'} className={'rb-is-left'}>
                <i className={'fas fa-envelope'} />
              </Icon>{' '}
              <Icon size={'small'} className={'rb-is-right'}>
                <i className={'fas fa-check'} />
              </Icon>
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel />
        <FieldBody>
          <Field className={'rb-is-expanded'}>
            <Field layout={'addons'}>
              <Control as={'p'}>
                <LinkButton className={'rb-is-static'}>+44</LinkButton>
              </Control>
              <Control expanded as={'p'}>
                <Input type={'tel'} placeholder={'Your phone number'} />
              </Control>
            </Field>
            <Help>Do not enter the first zero</Help>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel size={'normal'}>
          <Label>Department</Label>
        </FieldLabel>
        <FieldBody>
          <Field narrow>
            <Control>
              <Select fullWidth>
                {' '}
                <option>Business development</option> <option>Marketing</option>{' '}
                <option>Sales</option>{' '}
              </Select>
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel>
          <Label>Already a member?</Label>
        </FieldLabel>
        <FieldBody>
          <Field narrow>
            <Control>
              <Radio name={'member'}> Yes </Radio>{' '}
              <Radio name={'member'}> No </Radio>
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel size={'normal'}>
          <Label>Subject</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Input
                type={'text'}
                placeholder={'e.g. Partnership opportunity'}
                color={'danger'}
              />
            </Control>
            <Help color={'danger'}>This field is required</Help>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel size={'normal'}>
          <Label>Question</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Textarea
                placeholder={'Explain how we can help you'}
                defaultValue={''}
              />
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel />
        <FieldBody>
          <Field>
            <Control>
              <Button color={'primary'}>Send message</Button>
            </Control>
          </Field>
        </FieldBody>
      </Field>
    </>
  )
}

function HorizontalLabelSizesDemo() {
  return (
    <>
      <Field horizontal>
        <FieldLabel>
          <Label>No padding</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Checkbox> Checkbox </Checkbox>
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel size={'small'}>
          <Label>Small padding</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Input
                type={'text'}
                placeholder={'Small sized input'}
                size={'small'}
              />
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel size={'normal'}>
          <Label>Normal label</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Input type={'text'} placeholder={'Normal sized input'} />
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel size={'medium'}>
          <Label>Medium label</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Input
                type={'text'}
                placeholder={'Medium sized input'}
                size={'medium'}
              />
            </Control>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel size={'large'}>
          <Label>Large label</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Input
                type={'text'}
                placeholder={'Large sized input'}
                size={'large'}
              />
            </Control>
          </Field>
        </FieldBody>
      </Field>
    </>
  )
}

function DisabledFieldsetDemo() {
  return (
    <>
      <fieldset disabled>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input type={'text'} placeholder={'e.g Alex Smith'} />
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input type={'email'} placeholder={'e.g. alexsmith@gmail.com'} />
          </Control>
        </Field>
      </fieldset>
    </>
  )
}

export const CompleteFormStory = {
  name: 'Complete form',
  parameters: {
    official: { id: 'form-general/complete-form-example/001' },
    docs: {
      source: {
        code: "import {\n  Button,\n  Checkbox,\n  Control,\n  Field,\n  Help,\n  Icon,\n  Input,\n  Label,\n  Radio,\n  Select,\n  Textarea,\n} from '@seagreenio/react-bulma'\n\nfunction CompleteFormDemo() {\n  return (\n    <>\n      <Field>\n        <Label>Name</Label>\n        <Control>\n          <Input type={'text'} placeholder={'Text input'} />\n        </Control>\n      </Field>\n      <Field>\n        <Label>Username</Label>\n        <Control icons={'both'}>\n          <Input\n            type={'text'}\n            placeholder={'Text input'}\n            defaultValue={'bulma'}\n            color={'success'}\n          />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-user'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n        </Control>\n        <Help color={'success'}>This username is available</Help>\n      </Field>\n      <Field>\n        <Label>Email</Label>\n        <Control icons={'both'}>\n          <Input\n            type={'email'}\n            placeholder={'Email input'}\n            defaultValue={'hello@'}\n            color={'danger'}\n          />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-exclamation-triangle'} />\n          </Icon>\n        </Control>\n        <Help color={'danger'}>This email is invalid</Help>\n      </Field>\n      <Field>\n        <Label>Subject</Label>\n        <Control>\n          <Select>\n            {' '}\n            <option>Select dropdown</option> <option>With options</option>{' '}\n          </Select>\n        </Control>\n      </Field>\n      <Field>\n        <Label>Message</Label>\n        <Control>\n          <Textarea placeholder={'Textarea'} defaultValue={''} />\n        </Control>\n      </Field>\n      <Field>\n        <Control>\n          <Checkbox>\n            {' '}\n            I agree to the <a href={'#'}>terms and conditions</a>{' '}\n          </Checkbox>\n        </Control>\n      </Field>\n      <Field>\n        <Control>\n          <Radio name={'question'}> Yes </Radio>{' '}\n          <Radio name={'question'}> No </Radio>\n        </Control>\n      </Field>\n      <Field layout={'grouped'}>\n        <Control>\n          <Button color={'link'}>Submit</Button>\n        </Control>\n        <Control>\n          <Button color={'link'} tone={'light'}>\n            Cancel\n          </Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CompleteFormDemo,
} satisfies StoryObj

export const LabelControlAndHelpStory = {
  name: 'Label, control and help',
  parameters: {
    official: { id: 'form-general/form-field/001' },
    docs: {
      source: {
        code: "import { Control, Field, Help, Input, Label } from '@seagreenio/react-bulma'\n\nfunction LabelControlAndHelpDemo() {\n  return (\n    <>\n      <Field>\n        <Label>Label</Label>\n        <Control>\n          <Input type={'text'} placeholder={'Text input'} />\n        </Control>\n        <Help>This is a help text</Help>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LabelControlAndHelpDemo,
} satisfies StoryObj

export const StackedFieldsStory = {
  name: 'Stacked fields',
  parameters: {
    official: { id: 'form-general/form-field/002' },
    docs: {
      source: {
        code: "import { Control, Field, Input, Label } from '@seagreenio/react-bulma'\n\nfunction StackedFieldsDemo() {\n  return (\n    <>\n      <Field>\n        <Label>Name</Label>\n        <Control>\n          <Input type={'text'} placeholder={'e.g Alex Smith'} />\n        </Control>\n      </Field>\n      <Field>\n        <Label>Email</Label>\n        <Control>\n          <Input type={'email'} placeholder={'e.g. alexsmith@gmail.com'} />\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: StackedFieldsDemo,
} satisfies StoryObj

export const InputControlStory = {
  name: 'Input control',
  parameters: {
    official: { id: 'form-general/form-control/001' },
    docs: {
      source: {
        code: "import { Control, Input } from '@seagreenio/react-bulma'\n\nfunction InputControlDemo() {\n  return (\n    <>\n      <Control>\n        <Input type={'text'} placeholder={'Text input'} />\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InputControlDemo,
} satisfies StoryObj

export const SelectControlStory = {
  name: 'Select control',
  parameters: {
    official: { id: 'form-general/form-control/002' },
    docs: {
      source: {
        code: "import { Control, Select } from '@seagreenio/react-bulma'\n\nfunction SelectControlDemo() {\n  return (\n    <>\n      <Control>\n        <Select>\n          {' '}\n          <option>Select dropdown</option> <option>With options</option>{' '}\n        </Select>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SelectControlDemo,
} satisfies StoryObj

export const ButtonControlStory = {
  name: 'Button control',
  parameters: {
    official: { id: 'form-general/form-control/003' },
    docs: {
      source: {
        code: "import { Button, Control } from '@seagreenio/react-bulma'\n\nfunction ButtonControlDemo() {\n  return (\n    <>\n      <Control>\n        <Button color={'primary'}>Submit</Button>\n      </Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ButtonControlDemo,
} satisfies StoryObj

export const SignInFieldsWithIconsStory = {
  name: 'Sign-in fields with icons',
  parameters: {
    official: { id: 'form-general/with-icons/001' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Icon, Input } from '@seagreenio/react-bulma'\n\nfunction SignInFieldsWithIconsDemo() {\n  return (\n    <>\n      <Field>\n        <Control icons={'both'} as={'p'}>\n          <Input type={'email'} placeholder={'Email'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'left'} as={'p'}>\n          <Input type={'password'} placeholder={'Password'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-lock'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control as={'p'}>\n          <Button color={'success'}>Login</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SignInFieldsWithIconsDemo,
} satisfies StoryObj

export const SelectWithAnIconStory = {
  name: 'Select with an icon',
  parameters: {
    official: { id: 'form-general/with-icons/002' },
    docs: {
      source: {
        code: "import { Control, Field, Icon, Select } from '@seagreenio/react-bulma'\n\nfunction SelectWithAnIconDemo() {\n  return (\n    <>\n      <Field>\n        <Control icons={'left'} as={'p'}>\n          <Select as={'span'} defaultValue={'Country'}>\n            {' '}\n            <option>Country</option> <option>Select dropdown</option>{' '}\n            <option>With options</option>{' '}\n          </Select>{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-globe'} />\n          </Icon>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SelectWithAnIconDemo,
} satisfies StoryObj

export const SmallInputWithIconsStory = {
  name: 'Small input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/003' },
    docs: {
      source: {
        code: "import { Control, Field, Icon, Input, Label } from '@seagreenio/react-bulma'\n\nfunction SmallInputWithIconsDemo() {\n  return (\n    <>\n      <Field>\n        <Label size={'small'}>Small input</Label>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Normal'} size={'small'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallInputWithIconsDemo,
} satisfies StoryObj

export const NormalInputWithIconsStory = {
  name: 'Normal input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/004' },
    docs: {
      source: {
        code: "import { Control, Field, Icon, Input, Label } from '@seagreenio/react-bulma'\n\nfunction NormalInputWithIconsDemo() {\n  return (\n    <>\n      <Field>\n        <Label>Normal input</Label>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Extra small'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope fa-xs'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-check fa-xs'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Normal'} />{' '}\n          <Icon className={'rb-is-left'}>\n            <i className={'fas fa-envelope'} />\n          </Icon>{' '}\n          <Icon className={'rb-is-right'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalInputWithIconsDemo,
} satisfies StoryObj

export const MediumInputWithIconsStory = {
  name: 'Medium input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/005' },
    docs: {
      source: {
        code: "import { Control, Field, Icon, Input, Label } from '@seagreenio/react-bulma'\n\nfunction MediumInputWithIconsDemo() {\n  return (\n    <>\n      <Field>\n        <Label size={'medium'}>Medium input</Label>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Extra small'} size={'medium'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope fa-xs'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-check fa-xs'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Small'} size={'medium'} />{' '}\n          <Icon className={'rb-is-left'}>\n            <i className={'fas fa-envelope fa-sm'} />\n          </Icon>{' '}\n          <Icon className={'rb-is-right'}>\n            <i className={'fas fa-check fa-sm'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Normal'} size={'medium'} />{' '}\n          <Icon size={'medium'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope'} />\n          </Icon>{' '}\n          <Icon size={'medium'} className={'rb-is-right'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumInputWithIconsDemo,
} satisfies StoryObj

export const LargeInputWithIconsStory = {
  name: 'Large input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/006' },
    docs: {
      source: {
        code: "import { Control, Field, Icon, Input, Label } from '@seagreenio/react-bulma'\n\nfunction LargeInputWithIconsDemo() {\n  return (\n    <>\n      <Field>\n        <Label size={'large'}>Large input</Label>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Extra small'} size={'large'} />{' '}\n          <Icon size={'small'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope fa-xs'} />\n          </Icon>{' '}\n          <Icon size={'small'} className={'rb-is-right'}>\n            <i className={'fas fa-check fa-xs'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Small'} size={'large'} />{' '}\n          <Icon className={'rb-is-left'}>\n            <i className={'fas fa-envelope fa-sm'} />\n          </Icon>{' '}\n          <Icon className={'rb-is-right'}>\n            <i className={'fas fa-check fa-sm'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Normal'} size={'large'} />{' '}\n          <Icon size={'large'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope'} />\n          </Icon>{' '}\n          <Icon size={'large'} className={'rb-is-right'}>\n            <i className={'fas fa-check'} />\n          </Icon>\n        </Control>\n      </Field>\n      <Field>\n        <Control icons={'both'}>\n          <Input type={'email'} placeholder={'Large'} size={'large'} />{' '}\n          <Icon size={'medium'} className={'rb-is-left'}>\n            <i className={'fas fa-envelope fa-lg'} />\n          </Icon>{' '}\n          <Icon size={'medium'} className={'rb-is-right'}>\n            <i className={'fas fa-check fa-lg'} />\n          </Icon>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeInputWithIconsDemo,
} satisfies StoryObj

export const SearchInputAddonStory = {
  name: 'Search input addon',
  parameters: {
    official: { id: 'form-general/form-addons/001' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Input } from '@seagreenio/react-bulma'\n\nfunction SearchInputAddonDemo() {\n  return (\n    <>\n      <Field layout={'addons'}>\n        <Control>\n          <Input type={'text'} placeholder={'Find a repository'} />\n        </Control>\n        <Control>\n          <Button color={'info'}>Search</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SearchInputAddonDemo,
} satisfies StoryObj

export const StaticEmailAddonStory = {
  name: 'Static email addon',
  parameters: {
    official: { id: 'form-general/form-addons/002' },
    docs: {
      source: {
        code: "import { Control, Field, Input, LinkButton } from '@seagreenio/react-bulma'\n\nfunction StaticEmailAddonDemo() {\n  return (\n    <>\n      <Field layout={'addons'}>\n        <Control as={'p'}>\n          <Input type={'text'} placeholder={'Your email'} />\n        </Control>\n        <Control as={'p'}>\n          <LinkButton className={'rb-is-static'}>@gmail.com</LinkButton>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: StaticEmailAddonDemo,
} satisfies StoryObj

export const CurrencySelectAddonStory = {
  name: 'Currency select addon',
  parameters: {
    official: { id: 'form-general/form-addons/003' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Input, Select } from '@seagreenio/react-bulma'\n\nfunction CurrencySelectAddonDemo() {\n  return (\n    <>\n      <Field layout={'addons'}>\n        <Control as={'p'}>\n          <Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </Select>\n        </Control>\n        <Control as={'p'}>\n          <Input type={'text'} placeholder={'Amount of money'} />\n        </Control>\n        <Control as={'p'}>\n          <Button>Transfer</Button>\n        </Control>\n      </Field>\n      <Field layout={'addons'}>\n        <Control as={'p'}>\n          <Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </Select>\n        </Control>\n        <Control expanded as={'p'}>\n          <Input type={'text'} placeholder={'Amount of money'} />\n        </Control>\n        <Control as={'p'}>\n          <Button>Transfer</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CurrencySelectAddonDemo,
} satisfies StoryObj

export const ExpandedSelectAddonStory = {
  name: 'Expanded select addon',
  parameters: {
    official: { id: 'form-general/form-addons/004' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Select } from '@seagreenio/react-bulma'\n\nfunction ExpandedSelectAddonDemo() {\n  return (\n    <>\n      <Field layout={'addons'}>\n        <Control expanded>\n          <Select name={'country'} fullWidth>\n            {' '}\n            <option value={'Argentina'}>Argentina</option>{' '}\n            <option value={'Bolivia'}>Bolivia</option>{' '}\n            <option value={'Brazil'}>Brazil</option>{' '}\n            <option value={'Chile'}>Chile</option>{' '}\n            <option value={'Colombia'}>Colombia</option>{' '}\n            <option value={'Ecuador'}>Ecuador</option>{' '}\n            <option value={'Guyana'}>Guyana</option>{' '}\n            <option value={'Paraguay'}>Paraguay</option>{' '}\n            <option value={'Peru'}>Peru</option>{' '}\n            <option value={'Suriname'}>Suriname</option>{' '}\n            <option value={'Uruguay'}>Uruguay</option>{' '}\n            <option value={'Venezuela'}>Venezuela</option>{' '}\n          </Select>\n        </Control>\n        <Control>\n          <Button type={'submit'} color={'primary'}>\n            Choose\n          </Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ExpandedSelectAddonDemo,
} satisfies StoryObj

export const CenteredAddonsStory = {
  name: 'Centered addons',
  parameters: {
    official: { id: 'form-general/form-addons/005' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Input, Select } from '@seagreenio/react-bulma'\n\nfunction CenteredAddonsDemo() {\n  return (\n    <>\n      <Field layout={'addons'} alignment={'centered'}>\n        <Control as={'p'}>\n          <Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </Select>\n        </Control>\n        <Control as={'p'}>\n          <Input type={'text'} placeholder={'Amount of money'} />\n        </Control>\n        <Control as={'p'}>\n          <Button color={'primary'}>Transfer</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredAddonsDemo,
} satisfies StoryObj

export const RightAlignedAddonsStory = {
  name: 'Right-aligned addons',
  parameters: {
    official: { id: 'form-general/form-addons/006' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Input, Select } from '@seagreenio/react-bulma'\n\nfunction RightAlignedAddonsDemo() {\n  return (\n    <>\n      <Field layout={'addons'} alignment={'right'}>\n        <Control as={'p'}>\n          <Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </Select>\n        </Control>\n        <Control as={'p'}>\n          <Input type={'text'} placeholder={'Amount of money'} />\n        </Control>\n        <Control as={'p'}>\n          <Button color={'primary'}>Transfer</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RightAlignedAddonsDemo,
} satisfies StoryObj

export const GroupedFormActionsStory = {
  name: 'Grouped form actions',
  parameters: {
    official: { id: 'form-general/form-group/001' },
    docs: {
      source: {
        code: "import { Button, Control, Field, LinkButton } from '@seagreenio/react-bulma'\n\nfunction GroupedFormActionsDemo() {\n  return (\n    <>\n      <Field layout={'grouped'}>\n        <Control as={'p'}>\n          <Button color={'primary'}>Submit</Button>\n        </Control>\n        <Control as={'p'}>\n          <LinkButton color={'light'}>Cancel</LinkButton>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: GroupedFormActionsDemo,
} satisfies StoryObj

export const CenteredFormActionsStory = {
  name: 'Centered form actions',
  parameters: {
    official: { id: 'form-general/form-group/002' },
    docs: {
      source: {
        code: "import { Button, Control, Field, LinkButton } from '@seagreenio/react-bulma'\n\nfunction CenteredFormActionsDemo() {\n  return (\n    <>\n      <Field layout={'grouped'} alignment={'centered'}>\n        <Control as={'p'}>\n          <Button color={'primary'}>Submit</Button>\n        </Control>\n        <Control as={'p'}>\n          <LinkButton color={'light'}>Cancel</LinkButton>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredFormActionsDemo,
} satisfies StoryObj

export const RightAlignedFormActionsStory = {
  name: 'Right-aligned form actions',
  parameters: {
    official: { id: 'form-general/form-group/003' },
    docs: {
      source: {
        code: "import { Button, Control, Field, LinkButton } from '@seagreenio/react-bulma'\n\nfunction RightAlignedFormActionsDemo() {\n  return (\n    <>\n      <Field layout={'grouped'} alignment={'right'}>\n        <Control as={'p'}>\n          <Button color={'primary'}>Submit</Button>\n        </Control>\n        <Control as={'p'}>\n          <LinkButton color={'light'}>Cancel</LinkButton>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: RightAlignedFormActionsDemo,
} satisfies StoryObj

export const ExpandedGroupedInputStory = {
  name: 'Expanded grouped input',
  parameters: {
    official: { id: 'form-general/form-group/004' },
    docs: {
      source: {
        code: "import { Button, Control, Field, Input } from '@seagreenio/react-bulma'\n\nfunction ExpandedGroupedInputDemo() {\n  return (\n    <>\n      <Field layout={'grouped'}>\n        <Control expanded as={'p'}>\n          <Input type={'text'} placeholder={'Find a repository'} />\n        </Control>\n        <Control as={'p'}>\n          <Button color={'info'}>Search</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ExpandedGroupedInputDemo,
} satisfies StoryObj

export const MultilineFormGroupStory = {
  name: 'Multiline form group',
  parameters: {
    official: { id: 'form-general/form-group/005' },
    docs: {
      source: {
        code: "import { Button, Control, Field } from '@seagreenio/react-bulma'\n\nfunction MultilineFormGroupDemo() {\n  return (\n    <>\n      <Field layout={'grouped'} multiline>\n        <Control as={'p'}>\n          <Button>One</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Two</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Three</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Four</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Five</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Six</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Seven</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Eight</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Nine</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Ten</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Eleven</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Twelve</Button>\n        </Control>\n        <Control as={'p'}>\n          <Button>Thirteen</Button>\n        </Control>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MultilineFormGroupDemo,
} satisfies StoryObj

export const HorizontalFormStory = {
  name: 'Horizontal form',
  parameters: {
    official: { id: 'form-general/horizontal-form/001' },
    docs: {
      source: {
        code: "import {\n  Button,\n  Control,\n  Field,\n  FieldBody,\n  FieldLabel,\n  Help,\n  Icon,\n  Input,\n  Label,\n  LinkButton,\n  Radio,\n  Select,\n  Textarea,\n} from '@seagreenio/react-bulma'\n\nfunction HorizontalFormDemo() {\n  return (\n    <>\n      <Field horizontal>\n        <FieldLabel size={'normal'}>\n          <Label>From</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control expanded icons={'left'} as={'p'}>\n              <Input type={'text'} placeholder={'Name'} />{' '}\n              <Icon size={'small'} className={'rb-is-left'}>\n                <i className={'fas fa-user'} />\n              </Icon>\n            </Control>\n          </Field>\n          <Field>\n            <Control expanded icons={'both'} as={'p'}>\n              <Input\n                type={'email'}\n                placeholder={'Email'}\n                defaultValue={'alex@smith.com'}\n                color={'success'}\n              />{' '}\n              <Icon size={'small'} className={'rb-is-left'}>\n                <i className={'fas fa-envelope'} />\n              </Icon>{' '}\n              <Icon size={'small'} className={'rb-is-right'}>\n                <i className={'fas fa-check'} />\n              </Icon>\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel />\n        <FieldBody>\n          <Field className={'rb-is-expanded'}>\n            <Field layout={'addons'}>\n              <Control as={'p'}>\n                <LinkButton className={'rb-is-static'}>+44</LinkButton>\n              </Control>\n              <Control expanded as={'p'}>\n                <Input type={'tel'} placeholder={'Your phone number'} />\n              </Control>\n            </Field>\n            <Help>Do not enter the first zero</Help>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel size={'normal'}>\n          <Label>Department</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field narrow>\n            <Control>\n              <Select fullWidth>\n                {' '}\n                <option>Business development</option> <option>Marketing</option>{' '}\n                <option>Sales</option>{' '}\n              </Select>\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel>\n          <Label>Already a member?</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field narrow>\n            <Control>\n              <Radio name={'member'}> Yes </Radio>{' '}\n              <Radio name={'member'}> No </Radio>\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel size={'normal'}>\n          <Label>Subject</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control>\n              <Input\n                type={'text'}\n                placeholder={'e.g. Partnership opportunity'}\n                color={'danger'}\n              />\n            </Control>\n            <Help color={'danger'}>This field is required</Help>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel size={'normal'}>\n          <Label>Question</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control>\n              <Textarea\n                placeholder={'Explain how we can help you'}\n                defaultValue={''}\n              />\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel />\n        <FieldBody>\n          <Field>\n            <Control>\n              <Button color={'primary'}>Send message</Button>\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HorizontalFormDemo,
} satisfies StoryObj

export const HorizontalLabelSizesStory = {
  name: 'Horizontal label sizes',
  parameters: {
    official: { id: 'form-general/horizontal-form/002' },
    docs: {
      source: {
        code: "import {\n  Checkbox,\n  Control,\n  Field,\n  FieldBody,\n  FieldLabel,\n  Input,\n  Label,\n} from '@seagreenio/react-bulma'\n\nfunction HorizontalLabelSizesDemo() {\n  return (\n    <>\n      <Field horizontal>\n        <FieldLabel>\n          <Label>No padding</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control>\n              <Checkbox> Checkbox </Checkbox>\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel size={'small'}>\n          <Label>Small padding</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control>\n              <Input\n                type={'text'}\n                placeholder={'Small sized input'}\n                size={'small'}\n              />\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel size={'normal'}>\n          <Label>Normal label</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control>\n              <Input type={'text'} placeholder={'Normal sized input'} />\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel size={'medium'}>\n          <Label>Medium label</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control>\n              <Input\n                type={'text'}\n                placeholder={'Medium sized input'}\n                size={'medium'}\n              />\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n      <Field horizontal>\n        <FieldLabel size={'large'}>\n          <Label>Large label</Label>\n        </FieldLabel>\n        <FieldBody>\n          <Field>\n            <Control>\n              <Input\n                type={'text'}\n                placeholder={'Large sized input'}\n                size={'large'}\n              />\n            </Control>\n          </Field>\n        </FieldBody>\n      </Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HorizontalLabelSizesDemo,
} satisfies StoryObj

export const DisabledFieldsetStory = {
  name: 'Disabled fieldset',
  parameters: {
    official: { id: 'form-general/disabled-form/001' },
    docs: {
      source: {
        code: "import { Control, Field, Input, Label } from '@seagreenio/react-bulma'\n\nfunction DisabledFieldsetDemo() {\n  return (\n    <>\n      <fieldset disabled>\n        <Field>\n          <Label>Name</Label>\n          <Control>\n            <Input type={'text'} placeholder={'e.g Alex Smith'} />\n          </Control>\n        </Field>\n        <Field>\n          <Label>Email</Label>\n          <Control>\n            <Input type={'email'} placeholder={'e.g. alexsmith@gmail.com'} />\n          </Control>\n        </Field>\n      </fieldset>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DisabledFieldsetDemo,
} satisfies StoryObj

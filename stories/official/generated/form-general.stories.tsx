import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
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
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Form controls'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'All generic '}
          <strong data-official-prose="">{'form controls'}</strong>
          {', designed for consistency'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {
          '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
        }
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Bulma supports the following native '}
            <strong data-official-prose="">{'HTML form elements'}</strong>
            {': '}
            <code data-official-prose="">{'<form>'}</code>
            {'\n    '}
            <code data-official-prose="">{'<button>'}</code>{' '}
            <code data-official-prose="">{'<input>'}</code>{' '}
            <code data-official-prose="">{'<textarea>'}</code>
            {' and '}
            <code data-official-prose="">{'<label>'}</code>
            {'.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'The following CSS '}
            <strong data-official-prose="">{'classes'}</strong>
            {' are supported:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'label'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'input'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'textarea'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'select'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'checkbox'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'radio'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'button'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'help'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    To maintain an evenly balanced design, Bulma provides a very useful '
            }
            <code data-official-prose="">{'control'}</code>
            {' container with which you\n    can '}
            <strong data-official-prose="">{'wrap'}</strong>
            {' the form controls.\n    '}
            <br data-official-prose="" />
            {'\n    When combining several controls in a '}
            <strong data-official-prose="">{'form'}</strong>
            {', use the '}
            <code data-official-prose="">{'field'}</code>
            {' class as a\n    '}
            <strong data-official-prose="">{'container'}</strong>
            {', to keep the spacing consistent.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'complete-form-example'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Complete form example\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#complete-form-example'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/complete-form-example/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              "\n    For the best results using Bulma, it's recommended to use the "
            }
            <code data-official-prose="">{'control'}</code>
            {' element as often as possible.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'form-field'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Form field\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-field'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'field'}</code>
            {' container is a simple container for:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'a text '}
              <code data-official-prose="">{'label'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'a form '}
              <code data-official-prose="">{'control'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'an optional '}
              <code data-official-prose="">{'help'}</code>
              {'text'}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-field/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'This container allows form fields to be '}
            <strong data-official-prose="">{'spaced consistently'}</strong>
            {'.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-field/002">
          <Canvas of={Example003} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'form-control'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Form control\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-control'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The Bulma '}
            <code data-official-prose="">{'control'}</code>
            {' is a versatile '}
            <strong data-official-prose="">{'block'}</strong>
            {' container meant to\n    '}
            <strong data-official-prose="">
              {'enhance single form controls'}
            </strong>
            {
              '. Because it has the same height as the element that it wraps, it can\n    '
            }
            <strong data-official-prose="" className={'has-text-danger'}>
              {'only contain'}
            </strong>
            {' the following Bulma elements:\n  '}
          </p>
          {'\n\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'input'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'select'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'button'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'icon'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">{'This container gives the ability to:'}</p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'keep the '}
              <strong data-official-prose="">{'spacing'}</strong>
              {' consistent'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'combine form controls into a '}
              <strong data-official-prose="">{'group'}</strong>
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'combine form controls into a '}
              <strong data-official-prose="">{'list'}</strong>
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'append and prepend '}
              <strong data-official-prose="">{'icons'}</strong>
              {' to a form control'}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-control/001">
          <Canvas of={Example004} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-control/002">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-control/003">
          <Canvas of={Example006} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n'}
        <h3
          data-official-prose=""
          id={'with-icons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    With icons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#with-icons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can append one of 2 '}
            <strong data-official-prose="">{'modifiers'}</strong>
            {' on a control:'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'and/or '}
              <code data-official-prose="">{'has-icons-right'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'You also need to add a modifier on the '}
            <strong data-official-prose="">{'icon'}</strong>
            {':'}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-left'}</code>
              {' if '}
              <code data-official-prose="">{'has-icons-left'}</code>
              {' is used'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'icon is-right'}</code>
              {' if '}
              <code data-official-prose="">{'has-icons-right'}</code>
              {' is used'}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {
              "Make sure the input is the control's first child, otherwise the icon may disappear when selected. The size of the\n    "
            }
            <strong data-official-prose="">{'input'}</strong>
            {' will define the size of the icon container.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/with-icons/001">
          <Canvas of={Example007} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can append icons to '}
            <strong data-official-prose="">{'select dropdowns'}</strong>
            {' as well.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/with-icons/002">
          <Canvas of={Example008} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    If the control contains an icon, Bulma will make sure the icon remains '
            }
            <strong data-official-prose="">{'centered'}</strong>
            {', no matter the size\n    of the input '}
            <em data-official-prose="">{'or'}</em>
            {' of the icon.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/with-icons/003">
          <Canvas of={Example009} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/with-icons/004">
          <Canvas of={Example010} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/with-icons/005">
          <Canvas of={Example011} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/with-icons/006">
          <Canvas of={Example012} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'form-addons'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Form addons\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-addons'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want to '}
            <strong data-official-prose="">{'attach controls'}</strong>
            {' together, use the '}
            <code data-official-prose="">{'has-addons'}</code>
            {' modifier on the\n    '}
            <code data-official-prose="">{'field'}</code>
            {' container:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-addons/001">
          <Canvas of={Example013} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'You can attach inputs, buttons, and dropdowns '}
            <strong data-official-prose="">{'only'}</strong>
            {'.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    It can be useful to append a '}
            <a
              data-official-prose=""
              href={
                'https://bulma.io/documentation/elements/button#static-button'
              }
            >
              {'static button'}
            </a>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-addons/002">
          <Canvas of={Example014} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Use the '}
            <code data-official-prose="">{'is-expanded'}</code>
            {
              ' modifier on the element you want to fill up the remaining space (in this case, the\n    input):\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-addons/003">
          <Canvas of={Example015} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want a full width select dropdown, pair '}
            <code data-official-prose="">{'control is-expanded'}</code>
            {' with\n    '}
            <code data-official-prose="">{'select is-fullwidth'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-addons/004">
          <Canvas of={Example016} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Use the '}
            <code data-official-prose="">{'has-addons-centered'}</code>
            {' or the '}
            <code data-official-prose="">{'has-addons-right'}</code>
            {' modifiers to alter the\n    '}
            <strong data-official-prose="">{'alignment'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-addons/005">
          <Canvas of={Example017} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-addons/006">
          <Canvas of={Example018} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'form-group'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Form group\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#form-group'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want to '}
            <strong data-official-prose="">{'group'}</strong>
            {' controls together, use the '}
            <code data-official-prose="">{'is-grouped'}</code>
            {' modifier on the\n    '}
            <code data-official-prose="">{'field'}</code>
            {' container.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-group/001">
          <Canvas of={Example019} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Use the '}
            <code data-official-prose="">{'is-grouped-centered'}</code>
            {' or the '}
            <code data-official-prose="">{'is-grouped-right'}</code>
            {' modifiers to alter the\n    '}
            <strong data-official-prose="">{'alignment'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-group/002">
          <Canvas of={Example020} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-group/003">
          <Canvas of={Example021} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Add the '}
            <code data-official-prose="">{'is-expanded'}</code>
            {' modifier on the control element you want to\n    '}
            <strong data-official-prose="">
              {'fill up the remaining space'}
            </strong>
            {' with.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-group/004">
          <Canvas of={Example022} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div
          data-official-prose=""
          id={'form-group-multiline'}
          className={'content'}
        >
          {'\n  '}
          <p data-official-prose="">
            {'\n    Add the '}
            <code data-official-prose="">{'is-grouped-multiline'}</code>
            {' modifier to allow controls to fill up '}
            <strong data-official-prose="">{'multiple lines'}</strong>
            {'.\n    This is ideal for a long list of controls.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/form-group/005">
          <Canvas of={Example023} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'message is-info'}>
          {'\n  '}
          <div data-official-prose="" className={'message-header'}>
            {'\n    '}
            <p data-official-prose="">{'List of buttons'}</p>
            {'\n  '}
          </div>
          {'\n  '}
          <div data-official-prose="" className={'message-body'}>
            {'\n    '}
            <div data-official-prose="" className={'content'}>
              {'\n      '}
              <p data-official-prose="">
                {'\n        If you only need a list of '}
                <em data-official-prose="">{'buttons'}</em>
                {', try out the new '}
                <code data-official-prose="">{'buttons'}</code>
                {' class with which you can\n        create a '}
                <a
                  data-official-prose=""
                  href={
                    'https://bulma.io/documentation/elements/button/#list-of-buttons'
                  }
                >
                  {'multiline list of buttons'}
                </a>
                {'.\n      '}
              </p>
              {'\n    '}
            </div>
            {'\n  '}
          </div>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'horizontal-form'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Horizontal form\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#horizontal-form'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If you want a '}
            <strong data-official-prose="">{'horizontal'}</strong>
            {' form control, use the '}
            <code data-official-prose="">{'is-horizontal'}</code>
            {' modifier on the\n    '}
            <code data-official-prose="">{'field'}</code>
            {' container, in which you include:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'field-label'}</code>
              {' for the side label'}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'field-body'}</code>
              {' for the input/select/textarea container'}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'You can use '}
            <code data-official-prose="">{'is-grouped'}</code>
            {' or '}
            <code data-official-prose="">{'has-addons'}</code>
            {' for the child elements.'}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/horizontal-form/001">
          <Canvas of={Example024} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    To preserve the '}
            <strong data-official-prose="">{'vertical alignment'}</strong>
            {' of labels with each type and size of control, the\n    '}
            <code data-official-prose="">{'field-label'}</code>
            {' comes with '}
            <strong data-official-prose="">{'4 size modifiers'}</strong>
            {':\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-small'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-normal'}</code>
              {' for any '}
              <code data-official-prose="">{'input'}</code>
              {' or '}
              <code data-official-prose="">{'button'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-medium'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-large'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/horizontal-form/002">
          <Canvas of={Example025} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n\n\n'}
        <h3
          data-official-prose=""
          id={'disabled-form'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Disabled form\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#disabled-form'}
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
              '\n    You can disable part or a whole form by wrapping a set of controls in a '
            }
            <strong data-official-prose="">{'fieldset'}</strong>
            {' with a\n    '}
            <code data-official-prose="">{'disabled'}</code>
            {' HTML attribute.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="form-general/disabled-form/001">
          <Canvas of={Example026} />
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
                        {'$control-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius)'}
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
                        {'$control-radius-small'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-radius-small)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-small)'}
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
                        {'$control-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1px'}
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
                        {'$control-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-size-normal)'}
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
                        {'$control-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2.5em'}
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
                        {'$control-line-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-line-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.5'}
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
                        {'$control-padding-vertical'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-padding-vertical)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'calc(0.5em - 1px)'}
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
                        {'$control-padding-horizontal'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-padding-horizontal)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'calc(0.75em - 1px)'}
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
                        {'$control-focus-shadow-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-control-focus-shadow-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'50%'}
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
                        {'$label-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-label-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-text-strong)'}
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
                        {'$label-weight'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-label-weight)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-weight-semibold)'}
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
                        {'$help-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-help-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-size-small)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n        '}
              </tr>
              {'\n        \n      \n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Label>Name</ui.Label>{' '}
        <ui.Control>
          {' '}
          <ui.Input type={'text'} placeholder={'Text input'} />{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Label>Username</ui.Label>{' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input
            type={'text'}
            placeholder={'Text input'}
            defaultValue={'bulma'}
            color={'success'}
          />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-user'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'small'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
        <ui.Help color={'success'}>This username is available</ui.Help>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Label>Email</ui.Label>{' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input
            type={'email'}
            placeholder={'Email input'}
            defaultValue={'hello@'}
            color={'danger'}
          />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'small'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-exclamation-triangle'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
        <ui.Help color={'danger'}>This email is invalid</ui.Help>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Label>Subject</ui.Label>{' '}
        <ui.Control>
          {' '}
          <ui.Select>
            {' '}
            <option>Select dropdown</option> <option>With options</option>{' '}
          </ui.Select>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Label>Message</ui.Label>{' '}
        <ui.Control>
          {' '}
          <ui.Textarea placeholder={'Textarea'} defaultValue={''} />{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control>
          {' '}
          <ui.Checkbox>
            {' '}
            I agree to the <a href={'#'}>terms and conditions</a>{' '}
          </ui.Checkbox>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control>
          {' '}
          <ui.Radio name={'question'}> Yes </ui.Radio>{' '}
          <ui.Radio name={'question'}> No </ui.Radio>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field layout={'grouped'}>
        {' '}
        <ui.Control>
          {' '}
          <ui.Button color={'link'}>Submit</ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control>
          {' '}
          <ui.Button color={'link'} tone={'light'}>
            Cancel
          </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Label>Label</ui.Label>{' '}
        <ui.Control>
          {' '}
          <ui.Input type={'text'} placeholder={'Text input'} />{' '}
        </ui.Control>{' '}
        <ui.Help>This is a help text</ui.Help>{' '}
      </ui.Field>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Label>Name</ui.Label>{' '}
        <ui.Control>
          {' '}
          <ui.Input type={'text'} placeholder={'e.g Alex Smith'} />{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Label>Email</ui.Label>{' '}
        <ui.Control>
          {' '}
          <ui.Input
            type={'email'}
            placeholder={'e.g. alexsmith@gmail.com'}
          />{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Control>
        {' '}
        <ui.Input type={'text'} placeholder={'Text input'} />{' '}
      </ui.Control>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Control>
        {' '}
        <ui.Select>
          {' '}
          <option>Select dropdown</option> <option>With options</option>{' '}
        </ui.Select>{' '}
      </ui.Control>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.Control>
        {' '}
        <ui.Button color={'primary'}>Submit</ui.Button>{' '}
      </ui.Control>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Control icons={'both'} as={'p'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Email'} />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'small'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control icons={'left'} as={'p'}>
          {' '}
          <ui.Input type={'password'} placeholder={'Password'} />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-lock'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'success'}> Login </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example008Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Control icons={'left'} as={'p'}>
          {' '}
          <ui.Select as={'span'} defaultValue={'Country'}>
            {' '}
            <option>Country</option> <option>Select dropdown</option>{' '}
            <option>With options</option>{' '}
          </ui.Select>{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-globe'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example009Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Label size={'small'}>Small input</ui.Label>{' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Normal'} size={'small'} />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'small'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example010Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Label>Normal input</ui.Label>{' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Extra small'} />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope fa-xs'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'small'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check fa-xs'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Normal'} />{' '}
          <ui.Icon className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example011Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Label size={'medium'}>Medium input</ui.Label>{' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input
            type={'email'}
            placeholder={'Extra small'}
            size={'medium'}
          />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope fa-xs'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'small'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check fa-xs'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Small'} size={'medium'} />{' '}
          <ui.Icon className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope fa-sm'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check fa-sm'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input
            type={'email'}
            placeholder={'Normal'}
            size={'medium'}
          />{' '}
          <ui.Icon size={'medium'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'medium'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example012Demo() {
  return (
    <>
      <ui.Field>
        {' '}
        <ui.Label size={'large'}>Large input</ui.Label>{' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input
            type={'email'}
            placeholder={'Extra small'}
            size={'large'}
          />{' '}
          <ui.Icon size={'small'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope fa-xs'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'small'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check fa-xs'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Small'} size={'large'} />{' '}
          <ui.Icon className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope fa-sm'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check fa-sm'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Normal'} size={'large'} />{' '}
          <ui.Icon size={'large'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'large'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field>
        {' '}
        <ui.Control icons={'both'}>
          {' '}
          <ui.Input type={'email'} placeholder={'Large'} size={'large'} />{' '}
          <ui.Icon size={'medium'} className={'rb-is-left'}>
            {' '}
            <i className={'fas fa-envelope fa-lg'} />{' '}
          </ui.Icon>{' '}
          <ui.Icon size={'medium'} className={'rb-is-right'}>
            {' '}
            <i className={'fas fa-check fa-lg'} />{' '}
          </ui.Icon>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example013Demo() {
  return (
    <>
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control>
          {' '}
          <ui.Input type={'text'} placeholder={'Find a repository'} />{' '}
        </ui.Control>{' '}
        <ui.Control>
          {' '}
          <ui.Button color={'info'}> Search </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example014Demo() {
  return (
    <>
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Input type={'text'} placeholder={'Your email'} />{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.LinkButton className={'rb-is-static'}>
            {' '}
            @gmail.com{' '}
          </ui.LinkButton>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example015Demo() {
  return (
    <>
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </ui.Select>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Transfer </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>{' '}
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </ui.Select>{' '}
        </ui.Control>{' '}
        <ui.Control expanded as={'p'}>
          {' '}
          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Transfer </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example016Demo() {
  return (
    <>
      <ui.Field layout={'addons'}>
        {' '}
        <ui.Control expanded>
          {' '}
          <ui.Select name={'country'} fullWidth>
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
          </ui.Select>{' '}
        </ui.Control>{' '}
        <ui.Control>
          {' '}
          <ui.Button type={'submit'} color={'primary'}>
            Choose
          </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example017Demo() {
  return (
    <>
      <ui.Field layout={'addons'} alignment={'centered'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </ui.Select>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'primary'}> Transfer </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example018Demo() {
  return (
    <>
      <ui.Field layout={'addons'} alignment={'right'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Select as={'span'}>
            {' '}
            <option>$</option> <option>£</option> <option>€</option>{' '}
          </ui.Select>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'primary'}> Transfer </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example019Demo() {
  return (
    <>
      <ui.Field layout={'grouped'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'primary'}> Submit </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.LinkButton color={'light'}> Cancel </ui.LinkButton>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example020Demo() {
  return (
    <>
      <ui.Field layout={'grouped'} alignment={'centered'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'primary'}> Submit </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.LinkButton color={'light'}> Cancel </ui.LinkButton>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example021Demo() {
  return (
    <>
      <ui.Field layout={'grouped'} alignment={'right'}>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'primary'}> Submit </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.LinkButton color={'light'}> Cancel </ui.LinkButton>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example022Demo() {
  return (
    <>
      <ui.Field layout={'grouped'}>
        {' '}
        <ui.Control expanded as={'p'}>
          {' '}
          <ui.Input type={'text'} placeholder={'Find a repository'} />{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button color={'info'}> Search </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example023Demo() {
  return (
    <>
      <ui.Field layout={'grouped'} multiline>
        {' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> One </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Two </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Three </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Four </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Five </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Six </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Seven </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Eight </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Nine </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Ten </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Eleven </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Twelve </ui.Button>{' '}
        </ui.Control>{' '}
        <ui.Control as={'p'}>
          {' '}
          <ui.Button> Thirteen </ui.Button>{' '}
        </ui.Control>{' '}
      </ui.Field>
    </>
  )
}

function Example024Demo() {
  return (
    <>
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'normal'}>
          {' '}
          <ui.Label>From</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control expanded icons={'left'} as={'p'}>
              {' '}
              <ui.Input type={'text'} placeholder={'Name'} />{' '}
              <ui.Icon size={'small'} className={'rb-is-left'}>
                {' '}
                <i className={'fas fa-user'} />{' '}
              </ui.Icon>{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
          <ui.Field>
            {' '}
            <ui.Control expanded icons={'both'} as={'p'}>
              {' '}
              <ui.Input
                type={'email'}
                placeholder={'Email'}
                defaultValue={'alex@smith.com'}
                color={'success'}
              />{' '}
              <ui.Icon size={'small'} className={'rb-is-left'}>
                {' '}
                <i className={'fas fa-envelope'} />{' '}
              </ui.Icon>{' '}
              <ui.Icon size={'small'} className={'rb-is-right'}>
                {' '}
                <i className={'fas fa-check'} />{' '}
              </ui.Icon>{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel />{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field className={'rb-is-expanded'}>
            {' '}
            <ui.Field layout={'addons'}>
              {' '}
              <ui.Control as={'p'}>
                {' '}
                <ui.LinkButton className={'rb-is-static'}>
                  {' '}
                  +44{' '}
                </ui.LinkButton>{' '}
              </ui.Control>{' '}
              <ui.Control expanded as={'p'}>
                {' '}
                <ui.Input type={'tel'} placeholder={'Your phone number'} />{' '}
              </ui.Control>{' '}
            </ui.Field>{' '}
            <ui.Help>Do not enter the first zero</ui.Help>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'normal'}>
          {' '}
          <ui.Label>Department</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field narrow>
            {' '}
            <ui.Control>
              {' '}
              <ui.Select fullWidth>
                {' '}
                <option>Business development</option> <option>Marketing</option>{' '}
                <option>Sales</option>{' '}
              </ui.Select>{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel>
          {' '}
          <ui.Label>Already a member?</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field narrow>
            {' '}
            <ui.Control>
              {' '}
              <ui.Radio name={'member'}> Yes </ui.Radio>{' '}
              <ui.Radio name={'member'}> No </ui.Radio>{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'normal'}>
          {' '}
          <ui.Label>Subject</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Input
                type={'text'}
                placeholder={'e.g. Partnership opportunity'}
                color={'danger'}
              />{' '}
            </ui.Control>{' '}
            <ui.Help color={'danger'}> This field is required </ui.Help>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'normal'}>
          {' '}
          <ui.Label>Question</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Textarea
                placeholder={'Explain how we can help you'}
                defaultValue={''}
              />{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel> </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Button color={'primary'}> Send message </ui.Button>{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>
    </>
  )
}

function Example025Demo() {
  return (
    <>
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel>
          {' '}
          <ui.Label>No padding</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Checkbox> Checkbox </ui.Checkbox>{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'small'}>
          {' '}
          <ui.Label>Small padding</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Input
                type={'text'}
                placeholder={'Small sized input'}
                size={'small'}
              />{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'normal'}>
          {' '}
          <ui.Label>Normal label</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Input type={'text'} placeholder={'Normal sized input'} />{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'medium'}>
          {' '}
          <ui.Label>Medium label</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Input
                type={'text'}
                placeholder={'Medium sized input'}
                size={'medium'}
              />{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>{' '}
      <ui.Field horizontal>
        {' '}
        <ui.FieldLabel size={'large'}>
          {' '}
          <ui.Label>Large label</ui.Label>{' '}
        </ui.FieldLabel>{' '}
        <ui.FieldBody>
          {' '}
          <ui.Field>
            {' '}
            <ui.Control>
              {' '}
              <ui.Input
                type={'text'}
                placeholder={'Large sized input'}
                size={'large'}
              />{' '}
            </ui.Control>{' '}
          </ui.Field>{' '}
        </ui.FieldBody>{' '}
      </ui.Field>
    </>
  )
}

function Example026Demo() {
  return (
    <>
      <fieldset disabled>
        {' '}
        <ui.Field>
          {' '}
          <ui.Label>Name</ui.Label>{' '}
          <ui.Control>
            {' '}
            <ui.Input type={'text'} placeholder={'e.g Alex Smith'} />{' '}
          </ui.Control>{' '}
        </ui.Field>{' '}
        <ui.Field>
          {' '}
          <ui.Label>Email</ui.Label>{' '}
          <ui.Control>
            {' '}
            <ui.Input
              type={'email'}
              placeholder={'e.g. alexsmith@gmail.com'}
            />{' '}
          </ui.Control>{' '}
        </ui.Field>{' '}
      </fieldset>
    </>
  )
}

export const Example001 = {
  name: 'Complete form',
  parameters: {
    official: { id: 'form-general/complete-form-example/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Label>Name</ui.Label>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Text input'} />{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Label>Username</ui.Label>{' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input\n            type={'text'}\n            placeholder={'Text input'}\n            defaultValue={'bulma'}\n            color={'success'}\n          />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-user'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'small'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n        <ui.Help color={'success'}>This username is available</ui.Help>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Label>Email</ui.Label>{' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input\n            type={'email'}\n            placeholder={'Email input'}\n            defaultValue={'hello@'}\n            color={'danger'}\n          />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'small'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-exclamation-triangle'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n        <ui.Help color={'danger'}>This email is invalid</ui.Help>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Label>Subject</ui.Label>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Select>\n            {' '}\n            <option>Select dropdown</option> <option>With options</option>{' '}\n          </ui.Select>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Label>Message</ui.Label>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Textarea placeholder={'Textarea'} defaultValue={''} />{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control>\n          {' '}\n          <ui.Checkbox>\n            {' '}\n            I agree to the <a href={'#'}>terms and conditions</a>{' '}\n          </ui.Checkbox>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control>\n          {' '}\n          <ui.Radio name={'question'}> Yes </ui.Radio>{' '}\n          <ui.Radio name={'question'}> No </ui.Radio>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field layout={'grouped'}>\n        {' '}\n        <ui.Control>\n          {' '}\n          <ui.Button color={'link'}>Submit</ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Button color={'link'} tone={'light'}>\n            Cancel\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Label, control and help',
  parameters: {
    official: { id: 'form-general/form-field/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Label>Label</ui.Label>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Text input'} />{' '}\n        </ui.Control>{' '}\n        <ui.Help>This is a help text</ui.Help>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Stacked fields',
  parameters: {
    official: { id: 'form-general/form-field/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Label>Name</ui.Label>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Input type={'text'} placeholder={'e.g Alex Smith'} />{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Label>Email</ui.Label>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Input\n            type={'email'}\n            placeholder={'e.g. alexsmith@gmail.com'}\n          />{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Input control',
  parameters: {
    official: { id: 'form-general/form-control/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Control>\n        {' '}\n        <ui.Input type={'text'} placeholder={'Text input'} />{' '}\n      </ui.Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Select control',
  parameters: {
    official: { id: 'form-general/form-control/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Control>\n        {' '}\n        <ui.Select>\n          {' '}\n          <option>Select dropdown</option> <option>With options</option>{' '}\n        </ui.Select>{' '}\n      </ui.Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Button control',
  parameters: {
    official: { id: 'form-general/form-control/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example006Demo() {\n  return (\n    <>\n      <ui.Control>\n        {' '}\n        <ui.Button color={'primary'}>Submit</ui.Button>{' '}\n      </ui.Control>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Sign-in fields with icons',
  parameters: {
    official: { id: 'form-general/with-icons/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example007Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'both'} as={'p'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Email'} />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'small'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'left'} as={'p'}>\n          {' '}\n          <ui.Input type={'password'} placeholder={'Password'} />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-lock'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'success'}> Login </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Select with an icon',
  parameters: {
    official: { id: 'form-general/with-icons/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example008Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'left'} as={'p'}>\n          {' '}\n          <ui.Select as={'span'} defaultValue={'Country'}>\n            {' '}\n            <option>Country</option> <option>Select dropdown</option>{' '}\n            <option>With options</option>{' '}\n          </ui.Select>{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-globe'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Small input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example009Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Label size={'small'}>Small input</ui.Label>{' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Normal'} size={'small'} />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'small'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Normal input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example010Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Label>Normal input</ui.Label>{' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Extra small'} />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope fa-xs'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'small'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check fa-xs'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Normal'} />{' '}\n          <ui.Icon className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Medium input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example011Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Label size={'medium'}>Medium input</ui.Label>{' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input\n            type={'email'}\n            placeholder={'Extra small'}\n            size={'medium'}\n          />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope fa-xs'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'small'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check fa-xs'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Small'} size={'medium'} />{' '}\n          <ui.Icon className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope fa-sm'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check fa-sm'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input\n            type={'email'}\n            placeholder={'Normal'}\n            size={'medium'}\n          />{' '}\n          <ui.Icon size={'medium'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'medium'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Large input with icons',
  parameters: {
    official: { id: 'form-general/with-icons/006' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example012Demo() {\n  return (\n    <>\n      <ui.Field>\n        {' '}\n        <ui.Label size={'large'}>Large input</ui.Label>{' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input\n            type={'email'}\n            placeholder={'Extra small'}\n            size={'large'}\n          />{' '}\n          <ui.Icon size={'small'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope fa-xs'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'small'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check fa-xs'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Small'} size={'large'} />{' '}\n          <ui.Icon className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope fa-sm'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check fa-sm'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Normal'} size={'large'} />{' '}\n          <ui.Icon size={'large'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'large'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field>\n        {' '}\n        <ui.Control icons={'both'}>\n          {' '}\n          <ui.Input type={'email'} placeholder={'Large'} size={'large'} />{' '}\n          <ui.Icon size={'medium'} className={'rb-is-left'}>\n            {' '}\n            <i className={'fas fa-envelope fa-lg'} />{' '}\n          </ui.Icon>{' '}\n          <ui.Icon size={'medium'} className={'rb-is-right'}>\n            {' '}\n            <i className={'fas fa-check fa-lg'} />{' '}\n          </ui.Icon>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Search input addon',
  parameters: {
    official: { id: 'form-general/form-addons/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example013Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Find a repository'} />{' '}\n        </ui.Control>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Button color={'info'}> Search </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Static email addon',
  parameters: {
    official: { id: 'form-general/form-addons/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example014Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Your email'} />{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.LinkButton className={'rb-is-static'}>\n            {' '}\n            @gmail.com{' '}\n          </ui.LinkButton>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Currency select addon',
  parameters: {
    official: { id: 'form-general/form-addons/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example015Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </ui.Select>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Transfer </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>{' '}\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </ui.Select>{' '}\n        </ui.Control>{' '}\n        <ui.Control expanded as={'p'}>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Transfer </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Expanded select addon',
  parameters: {
    official: { id: 'form-general/form-addons/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example016Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'}>\n        {' '}\n        <ui.Control expanded>\n          {' '}\n          <ui.Select name={'country'} fullWidth>\n            {' '}\n            <option value={'Argentina'}>Argentina</option>{' '}\n            <option value={'Bolivia'}>Bolivia</option>{' '}\n            <option value={'Brazil'}>Brazil</option>{' '}\n            <option value={'Chile'}>Chile</option>{' '}\n            <option value={'Colombia'}>Colombia</option>{' '}\n            <option value={'Ecuador'}>Ecuador</option>{' '}\n            <option value={'Guyana'}>Guyana</option>{' '}\n            <option value={'Paraguay'}>Paraguay</option>{' '}\n            <option value={'Peru'}>Peru</option>{' '}\n            <option value={'Suriname'}>Suriname</option>{' '}\n            <option value={'Uruguay'}>Uruguay</option>{' '}\n            <option value={'Venezuela'}>Venezuela</option>{' '}\n          </ui.Select>{' '}\n        </ui.Control>{' '}\n        <ui.Control>\n          {' '}\n          <ui.Button type={'submit'} color={'primary'}>\n            Choose\n          </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Centered addons',
  parameters: {
    official: { id: 'form-general/form-addons/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example017Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'} alignment={'centered'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </ui.Select>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'primary'}> Transfer </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Right-aligned addons',
  parameters: {
    official: { id: 'form-general/form-addons/006' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example018Demo() {\n  return (\n    <>\n      <ui.Field layout={'addons'} alignment={'right'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Select as={'span'}>\n            {' '}\n            <option>$</option> <option>£</option> <option>€</option>{' '}\n          </ui.Select>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Amount of money'} />{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'primary'}> Transfer </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'Grouped form actions',
  parameters: {
    official: { id: 'form-general/form-group/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example019Demo() {\n  return (\n    <>\n      <ui.Field layout={'grouped'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'primary'}> Submit </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.LinkButton color={'light'}> Cancel </ui.LinkButton>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'Centered form actions',
  parameters: {
    official: { id: 'form-general/form-group/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example020Demo() {\n  return (\n    <>\n      <ui.Field layout={'grouped'} alignment={'centered'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'primary'}> Submit </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.LinkButton color={'light'}> Cancel </ui.LinkButton>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

export const Example021 = {
  name: 'Right-aligned form actions',
  parameters: {
    official: { id: 'form-general/form-group/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example021Demo() {\n  return (\n    <>\n      <ui.Field layout={'grouped'} alignment={'right'}>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'primary'}> Submit </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.LinkButton color={'light'}> Cancel </ui.LinkButton>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example021Demo,
} satisfies StoryObj

export const Example022 = {
  name: 'Expanded grouped input',
  parameters: {
    official: { id: 'form-general/form-group/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example022Demo() {\n  return (\n    <>\n      <ui.Field layout={'grouped'}>\n        {' '}\n        <ui.Control expanded as={'p'}>\n          {' '}\n          <ui.Input type={'text'} placeholder={'Find a repository'} />{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button color={'info'}> Search </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example022Demo,
} satisfies StoryObj

export const Example023 = {
  name: 'Multiline form group',
  parameters: {
    official: { id: 'form-general/form-group/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example023Demo() {\n  return (\n    <>\n      <ui.Field layout={'grouped'} multiline>\n        {' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> One </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Two </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Three </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Four </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Five </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Six </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Seven </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Eight </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Nine </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Ten </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Eleven </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Twelve </ui.Button>{' '}\n        </ui.Control>{' '}\n        <ui.Control as={'p'}>\n          {' '}\n          <ui.Button> Thirteen </ui.Button>{' '}\n        </ui.Control>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example023Demo,
} satisfies StoryObj

export const Example024 = {
  name: 'Horizontal form',
  parameters: {
    official: { id: 'form-general/horizontal-form/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example024Demo() {\n  return (\n    <>\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'normal'}>\n          {' '}\n          <ui.Label>From</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control expanded icons={'left'} as={'p'}>\n              {' '}\n              <ui.Input type={'text'} placeholder={'Name'} />{' '}\n              <ui.Icon size={'small'} className={'rb-is-left'}>\n                {' '}\n                <i className={'fas fa-user'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n          <ui.Field>\n            {' '}\n            <ui.Control expanded icons={'both'} as={'p'}>\n              {' '}\n              <ui.Input\n                type={'email'}\n                placeholder={'Email'}\n                defaultValue={'alex@smith.com'}\n                color={'success'}\n              />{' '}\n              <ui.Icon size={'small'} className={'rb-is-left'}>\n                {' '}\n                <i className={'fas fa-envelope'} />{' '}\n              </ui.Icon>{' '}\n              <ui.Icon size={'small'} className={'rb-is-right'}>\n                {' '}\n                <i className={'fas fa-check'} />{' '}\n              </ui.Icon>{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel />{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field className={'rb-is-expanded'}>\n            {' '}\n            <ui.Field layout={'addons'}>\n              {' '}\n              <ui.Control as={'p'}>\n                {' '}\n                <ui.LinkButton className={'rb-is-static'}>\n                  {' '}\n                  +44{' '}\n                </ui.LinkButton>{' '}\n              </ui.Control>{' '}\n              <ui.Control expanded as={'p'}>\n                {' '}\n                <ui.Input type={'tel'} placeholder={'Your phone number'} />{' '}\n              </ui.Control>{' '}\n            </ui.Field>{' '}\n            <ui.Help>Do not enter the first zero</ui.Help>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'normal'}>\n          {' '}\n          <ui.Label>Department</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field narrow>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Select fullWidth>\n                {' '}\n                <option>Business development</option> <option>Marketing</option>{' '}\n                <option>Sales</option>{' '}\n              </ui.Select>{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel>\n          {' '}\n          <ui.Label>Already a member?</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field narrow>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Radio name={'member'}> Yes </ui.Radio>{' '}\n              <ui.Radio name={'member'}> No </ui.Radio>{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'normal'}>\n          {' '}\n          <ui.Label>Subject</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Input\n                type={'text'}\n                placeholder={'e.g. Partnership opportunity'}\n                color={'danger'}\n              />{' '}\n            </ui.Control>{' '}\n            <ui.Help color={'danger'}> This field is required </ui.Help>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'normal'}>\n          {' '}\n          <ui.Label>Question</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Textarea\n                placeholder={'Explain how we can help you'}\n                defaultValue={''}\n              />{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel> </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Button color={'primary'}> Send message </ui.Button>{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example024Demo,
} satisfies StoryObj

export const Example025 = {
  name: 'Horizontal label sizes',
  parameters: {
    official: { id: 'form-general/horizontal-form/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example025Demo() {\n  return (\n    <>\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel>\n          {' '}\n          <ui.Label>No padding</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Checkbox> Checkbox </ui.Checkbox>{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'small'}>\n          {' '}\n          <ui.Label>Small padding</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Input\n                type={'text'}\n                placeholder={'Small sized input'}\n                size={'small'}\n              />{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'normal'}>\n          {' '}\n          <ui.Label>Normal label</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Input type={'text'} placeholder={'Normal sized input'} />{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'medium'}>\n          {' '}\n          <ui.Label>Medium label</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Input\n                type={'text'}\n                placeholder={'Medium sized input'}\n                size={'medium'}\n              />{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>{' '}\n      <ui.Field horizontal>\n        {' '}\n        <ui.FieldLabel size={'large'}>\n          {' '}\n          <ui.Label>Large label</ui.Label>{' '}\n        </ui.FieldLabel>{' '}\n        <ui.FieldBody>\n          {' '}\n          <ui.Field>\n            {' '}\n            <ui.Control>\n              {' '}\n              <ui.Input\n                type={'text'}\n                placeholder={'Large sized input'}\n                size={'large'}\n              />{' '}\n            </ui.Control>{' '}\n          </ui.Field>{' '}\n        </ui.FieldBody>{' '}\n      </ui.Field>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example025Demo,
} satisfies StoryObj

export const Example026 = {
  name: 'Disabled fieldset',
  parameters: {
    official: { id: 'form-general/disabled-form/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example026Demo() {\n  return (\n    <>\n      <fieldset disabled>\n        {' '}\n        <ui.Field>\n          {' '}\n          <ui.Label>Name</ui.Label>{' '}\n          <ui.Control>\n            {' '}\n            <ui.Input type={'text'} placeholder={'e.g Alex Smith'} />{' '}\n          </ui.Control>{' '}\n        </ui.Field>{' '}\n        <ui.Field>\n          {' '}\n          <ui.Label>Email</ui.Label>{' '}\n          <ui.Control>\n            {' '}\n            <ui.Input\n              type={'email'}\n              placeholder={'e.g. alexsmith@gmail.com'}\n            />{' '}\n          </ui.Control>{' '}\n        </ui.Field>{' '}\n      </fieldset>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example026Demo,
} satisfies StoryObj

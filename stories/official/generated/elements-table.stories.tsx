import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-table',
      title: 'Table',
      url: 'https://bulma.io/documentation/elements/table/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-table',
  title: 'CSS Library/Elements/Table',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-table" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Table'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'The inevitable HTML '}
          <strong data-official-prose="">{'table'}</strong>
          {', with special case cells'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {'\n\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can create a '}
            <strong data-official-prose="">{'Bulma table'}</strong>
            {' simply by attaching a single '}
            <code data-official-prose="">{'table'}</code>
            {' CSS class on a\n    '}
            <code data-official-prose="">{'<table>'}</code>
            {' HTML element with the following structure:\n  '}
          </p>
          {'\n\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'<table class="table">'}</code>
              {' as the main\n      '}
              <strong data-official-prose="">{'container'}</strong>
              {'\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'thead'}</code>
                  {' the optional '}
                  <strong data-official-prose="">{'top'}</strong>
                  {' part of the table'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  <code data-official-prose="">{'tfoot'}</code>
                  {' the optional '}
                  <strong data-official-prose="">{'bottom'}</strong>
                  {' part of the table'}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'tbody'}</code>
                  {' the main '}
                  <strong data-official-prose="">{'content'}</strong>
                  {' of the table\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      {'\n              '}
                      <code data-official-prose="">{'tr'}</code>
                      {' each table '}
                      <strong data-official-prose="">{'row'}</strong>
                      {'\n              '}
                      <ul data-official-prose="">
                        {'\n                '}
                        <li data-official-prose="">
                          <code data-official-prose="">{'th'}</code>
                          {' a table cell '}
                          <strong data-official-prose="">{'heading'}</strong>
                        </li>
                        {'\n                '}
                        <li data-official-prose="">
                          <code data-official-prose="">{'td'}</code>
                          {' a table '}
                          <strong data-official-prose="">{'cell'}</strong>
                        </li>
                        {'\n              '}
                      </ul>
                      {'\n            '}
                    </li>
                    {'\n          '}
                  </ul>
                  {'\n        '}
                </li>
                {'\n      '}
              </ul>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can set a table row as '}
            <strong data-official-prose="">{'selected'}</strong>
            {' by appending the '}
            <code data-official-prose="">{'is-selected'}</code>
            {' modifier on a\n    '}
            <code data-official-prose="">{'<tr>'}</code>
            {'\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-table/basic/001">
          <Canvas of={Example001} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
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
            {'\n    You can change the color of a single '}
            <code data-official-prose="">{'<td>'}</code>
            {' or '}
            <code data-official-prose="">{'<th>'}</code>
            {' cell, or a whole\n    '}
            <code data-official-prose="">{'<tr>'}</code>
            {' row, by adding one of the color modifiers:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-primary'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-link'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-info'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-success'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-warning'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-danger'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-black'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-dark'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-light'}</code>
            </li>
            {'\n    '}
            <li data-official-prose="">
              <code data-official-prose="">{'is-white'}</code>
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="elements-table/colors/001">
          <Canvas of={Example002} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'modifiers'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Modifiers\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#modifiers'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n\n\n\n\n'}
        <div data-official-example="elements-table/modifiers/001">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-table/modifiers/002">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-table/modifiers/003">
          <Canvas of={Example005} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-table/modifiers/004">
          <Canvas of={Example006} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-table/modifiers/005">
          <Canvas of={Example007} />
        </div>
        {'\n\n'}
        <div data-official-example="elements-table/modifiers/006">
          <Canvas of={Example008} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'table-container'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Table container\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#table-container'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <p data-official-prose="" className={'content'}>
          {'\n  You can create a '}
          <strong data-official-prose="">{'scrollable table'}</strong>
          {' by wrapping a '}
          <code data-official-prose="">{'table'}</code>
          {' in a\n  '}
          <code data-official-prose="">{'table-container'}</code>
          {' element:\n'}
        </p>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="table-container">\n  <table class="table">\n    <!-- Your table content -->\n  </table>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'table-container'}>
          {'\n  '}
          <table
            data-official-prose=""
            className={'table is-bordered is-striped'}
          >
            {'\n    '}
            <tbody data-official-prose="">
              {'\n      \n      '}
              <tr data-official-prose="">
                {'\n        \n        '}
                <td data-official-prose="">{'1'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'2'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'3'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'4'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'5'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'6'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'7'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'8'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'9'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'10'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'11'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'12'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'13'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'14'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'15'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'16'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'17'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'18'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'19'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'20'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'21'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'22'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'23'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'24'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'25'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'26'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'27'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'28'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'29'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'30'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'31'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'32'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'33'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'34'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'35'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'36'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'37'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'38'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'39'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'40'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'41'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'42'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'43'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'44'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'45'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'46'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'47'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'48'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'49'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'50'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'51'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'52'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'53'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'54'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'55'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'56'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'57'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'58'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'59'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'60'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'61'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'62'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'63'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'64'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'65'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'66'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'67'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'68'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'69'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'70'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'71'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'72'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'73'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'74'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'75'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'76'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'77'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'78'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'79'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'80'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'81'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'82'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'83'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'84'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'85'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'86'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'87'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'88'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'89'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'90'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'91'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'92'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'93'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'94'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'95'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'96'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'97'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'98'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'99'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'100'}</td>
                {'\n        \n      '}
              </tr>
              {'\n      \n      '}
              <tr data-official-prose="">
                {'\n        \n        '}
                <td data-official-prose="">{'2'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'4'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'6'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'8'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'10'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'12'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'14'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'16'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'18'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'20'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'22'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'24'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'26'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'28'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'30'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'32'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'34'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'36'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'38'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'40'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'42'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'44'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'46'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'48'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'50'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'52'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'54'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'56'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'58'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'60'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'62'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'64'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'66'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'68'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'70'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'72'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'74'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'76'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'78'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'80'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'82'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'84'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'86'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'88'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'90'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'92'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'94'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'96'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'98'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'100'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'102'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'104'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'106'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'108'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'110'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'112'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'114'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'116'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'118'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'120'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'122'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'124'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'126'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'128'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'130'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'132'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'134'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'136'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'138'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'140'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'142'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'144'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'146'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'148'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'150'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'152'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'154'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'156'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'158'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'160'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'162'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'164'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'166'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'168'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'170'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'172'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'174'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'176'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'178'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'180'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'182'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'184'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'186'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'188'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'190'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'192'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'194'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'196'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'198'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'200'}</td>
                {'\n        \n      '}
              </tr>
              {'\n      \n      '}
              <tr data-official-prose="">
                {'\n        \n        '}
                <td data-official-prose="">{'3'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'6'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'9'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'12'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'15'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'18'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'21'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'24'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'27'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'30'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'33'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'36'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'39'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'42'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'45'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'48'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'51'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'54'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'57'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'60'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'63'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'66'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'69'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'72'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'75'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'78'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'81'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'84'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'87'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'90'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'93'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'96'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'99'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'102'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'105'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'108'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'111'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'114'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'117'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'120'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'123'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'126'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'129'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'132'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'135'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'138'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'141'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'144'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'147'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'150'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'153'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'156'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'159'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'162'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'165'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'168'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'171'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'174'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'177'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'180'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'183'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'186'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'189'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'192'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'195'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'198'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'201'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'204'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'207'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'210'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'213'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'216'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'219'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'222'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'225'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'228'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'231'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'234'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'237'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'240'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'243'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'246'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'249'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'252'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'255'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'258'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'261'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'264'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'267'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'270'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'273'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'276'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'279'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'282'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'285'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'288'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'291'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'294'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'297'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'300'}</td>
                {'\n        \n      '}
              </tr>
              {'\n      \n      '}
              <tr data-official-prose="">
                {'\n        \n        '}
                <td data-official-prose="">{'4'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'8'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'12'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'16'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'20'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'24'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'28'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'32'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'36'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'40'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'44'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'48'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'52'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'56'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'60'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'64'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'68'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'72'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'76'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'80'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'84'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'88'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'92'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'96'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'100'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'104'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'108'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'112'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'116'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'120'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'124'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'128'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'132'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'136'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'140'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'144'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'148'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'152'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'156'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'160'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'164'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'168'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'172'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'176'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'180'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'184'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'188'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'192'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'196'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'200'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'204'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'208'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'212'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'216'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'220'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'224'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'228'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'232'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'236'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'240'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'244'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'248'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'252'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'256'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'260'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'264'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'268'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'272'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'276'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'280'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'284'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'288'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'292'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'296'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'300'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'304'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'308'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'312'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'316'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'320'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'324'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'328'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'332'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'336'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'340'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'344'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'348'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'352'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'356'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'360'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'364'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'368'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'372'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'376'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'380'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'384'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'388'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'392'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'396'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'400'}</td>
                {'\n        \n      '}
              </tr>
              {'\n      \n      '}
              <tr data-official-prose="">
                {'\n        \n        '}
                <td data-official-prose="">{'5'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'10'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'15'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'20'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'25'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'30'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'35'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'40'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'45'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'50'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'55'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'60'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'65'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'70'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'75'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'80'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'85'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'90'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'95'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'100'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'105'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'110'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'115'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'120'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'125'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'130'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'135'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'140'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'145'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'150'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'155'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'160'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'165'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'170'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'175'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'180'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'185'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'190'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'195'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'200'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'205'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'210'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'215'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'220'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'225'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'230'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'235'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'240'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'245'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'250'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'255'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'260'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'265'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'270'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'275'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'280'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'285'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'290'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'295'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'300'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'305'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'310'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'315'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'320'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'325'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'330'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'335'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'340'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'345'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'350'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'355'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'360'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'365'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'370'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'375'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'380'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'385'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'390'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'395'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'400'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'405'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'410'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'415'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'420'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'425'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'430'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'435'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'440'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'445'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'450'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'455'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'460'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'465'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'470'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'475'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'480'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'485'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'490'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'495'}</td>
                {'\n        \n        '}
                <td data-official-prose="">{'500'}</td>
                {'\n        \n      '}
              </tr>
              {'\n      \n    '}
            </tbody>
            {'\n  '}
          </table>
          {'\n'}
        </div>
        {'\n\n\n\n\n\n\n\n\n\n\n'}
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
                        {'$table-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-color)'}
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
                        {'$table-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main)'}
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
                        {'$table-cell-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-cell-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border)'}
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
                        {'$table-cell-border-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-cell-border-style)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'solid'}
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
                        {'$table-cell-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-cell-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0 1px'}
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
                        {'$table-cell-padding'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-cell-padding)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.5em 0.75em'}
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
                        {'$table-cell-heading-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-cell-heading-color)'}
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
                        {'$table-cell-text-align'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-cell-text-align)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'left'}
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
                        {'$table-head-cell-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-head-cell-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0 2px'}
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
                        {'$table-head-cell-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-head-cell-color)'}
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
                        {'$table-foot-cell-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-foot-cell-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2px 0 0'}
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
                        {'$table-foot-cell-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-foot-cell-color)'}
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
                        {'$table-head-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-head-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'transparent'}
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
                        {'$table-body-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-body-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'transparent'}
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
                        {'$table-foot-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-foot-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'transparent'}
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
                        {'$table-row-hover-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-row-hover-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main-bis)'}
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
                        {'$table-row-active-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-row-active-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-primary)'}
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
                        {'$table-row-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-row-active-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-primary-invert)'}
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
                        {'$table-striped-row-even-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-table-striped-row-even-background-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main-bis)'}
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
                        {'$table-striped-row-even-hover-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'var(--bulma-table-striped-row-even-hover-background-color)'
                        }
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-scheme-main-ter)'}
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
  )
}

function Example001Demo() {
  return (
    <>
      <ui.Table>
        <thead>
          <tr>
            <th>
              <abbr title={'Position'}>Pos</abbr>
            </th>
            <th>Team</th>
            <th>
              <abbr title={'Played'}>Pld</abbr>
            </th>
            <th>
              <abbr title={'Won'}>W</abbr>
            </th>
            <th>
              <abbr title={'Drawn'}>D</abbr>
            </th>
            <th>
              <abbr title={'Lost'}>L</abbr>
            </th>
            <th>
              <abbr title={'Goals for'}>GF</abbr>
            </th>
            <th>
              <abbr title={'Goals against'}>GA</abbr>
            </th>
            <th>
              <abbr title={'Goal difference'}>GD</abbr>
            </th>
            <th>
              <abbr title={'Points'}>Pts</abbr>
            </th>
            <th>Qualification or relegation</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title={'Position'}>Pos</abbr>
            </th>
            <th>Team</th>
            <th>
              <abbr title={'Played'}>Pld</abbr>
            </th>
            <th>
              <abbr title={'Won'}>W</abbr>
            </th>
            <th>
              <abbr title={'Drawn'}>D</abbr>
            </th>
            <th>
              <abbr title={'Lost'}>L</abbr>
            </th>
            <th>
              <abbr title={'Goals for'}>GF</abbr>
            </th>
            <th>
              <abbr title={'Goals against'}>GA</abbr>
            </th>
            <th>
              <abbr title={'Goal difference'}>GD</abbr>
            </th>
            <th>
              <abbr title={'Points'}>Pts</abbr>
            </th>
            <th>Qualification or relegation</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Leicester_City_F.C.'}
                title={'Leicester City F.C.'}
              >
                Leicester City
              </a>{' '}
              <strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>36</td>
            <td>+32</td>
            <td>81</td>
            <td>
              Qualification for the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'
                }
                title={'2016–17 UEFA Champions League'}
              >
                Champions League group stage
              </a>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Arsenal_F.C.'}
                title={'Arsenal F.C.'}
              >
                Arsenal
              </a>
            </td>
            <td>38</td>
            <td>20</td>
            <td>11</td>
            <td>7</td>
            <td>65</td>
            <td>36</td>
            <td>+29</td>
            <td>71</td>
            <td>
              Qualification for the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'
                }
                title={'2016–17 UEFA Champions League'}
              >
                Champions League group stage
              </a>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.'}
                title={'Tottenham Hotspur F.C.'}
              >
                Tottenham Hotspur
              </a>
            </td>
            <td>38</td>
            <td>19</td>
            <td>13</td>
            <td>6</td>
            <td>69</td>
            <td>35</td>
            <td>+34</td>
            <td>70</td>
            <td>
              Qualification for the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'
                }
                title={'2016–17 UEFA Champions League'}
              >
                Champions League group stage
              </a>
            </td>
          </tr>
          <tr className={'rb-is-selected'}>
            <th>4</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Manchester_City_F.C.'}
                title={'Manchester City F.C.'}
              >
                Manchester City
              </a>
            </td>
            <td>38</td>
            <td>19</td>
            <td>9</td>
            <td>10</td>
            <td>71</td>
            <td>41</td>
            <td>+30</td>
            <td>66</td>
            <td>
              Qualification for the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round'
                }
                title={'2016–17 UEFA Champions League'}
              >
                Champions League play-off round
              </a>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Manchester_United_F.C.'}
                title={'Manchester United F.C.'}
              >
                Manchester United
              </a>
            </td>
            <td>38</td>
            <td>19</td>
            <td>9</td>
            <td>10</td>
            <td>49</td>
            <td>35</td>
            <td>+14</td>
            <td>66</td>
            <td>
              Qualification for the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage'
                }
                title={'2016–17 UEFA Europa League'}
              >
                Europa League group stage
              </a>
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Southampton_F.C.'}
                title={'Southampton F.C.'}
              >
                Southampton
              </a>
            </td>
            <td>38</td>
            <td>18</td>
            <td>9</td>
            <td>11</td>
            <td>59</td>
            <td>41</td>
            <td>+18</td>
            <td>63</td>
            <td>
              Qualification for the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage'
                }
                title={'2016–17 UEFA Europa League'}
              >
                Europa League group stage
              </a>
            </td>
          </tr>
          <tr>
            <th>7</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/West_Ham_United_F.C.'}
                title={'West Ham United F.C.'}
              >
                West Ham United
              </a>
            </td>
            <td>38</td>
            <td>16</td>
            <td>14</td>
            <td>8</td>
            <td>65</td>
            <td>51</td>
            <td>+14</td>
            <td>62</td>
            <td>
              Qualification for the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round'
                }
                title={'2016–17 UEFA Europa League'}
              >
                Europa League third qualifying round
              </a>
            </td>
          </tr>
          <tr>
            <th>8</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Liverpool_F.C.'}
                title={'Liverpool F.C.'}
              >
                Liverpool
              </a>
            </td>
            <td>38</td>
            <td>16</td>
            <td>12</td>
            <td>10</td>
            <td>63</td>
            <td>50</td>
            <td>+13</td>
            <td>60</td>
            <td />
          </tr>
          <tr>
            <th>9</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Stoke_City_F.C.'}
                title={'Stoke City F.C.'}
              >
                Stoke City
              </a>
            </td>
            <td>38</td>
            <td>14</td>
            <td>9</td>
            <td>15</td>
            <td>41</td>
            <td>55</td>
            <td>−14</td>
            <td>51</td>
            <td />
          </tr>
          <tr>
            <th>10</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Chelsea_F.C.'}
                title={'Chelsea F.C.'}
              >
                Chelsea
              </a>
            </td>
            <td>38</td>
            <td>12</td>
            <td>14</td>
            <td>12</td>
            <td>59</td>
            <td>53</td>
            <td>+6</td>
            <td>50</td>
            <td />
          </tr>
          <tr>
            <th>11</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Everton_F.C.'}
                title={'Everton F.C.'}
              >
                Everton
              </a>
            </td>
            <td>38</td>
            <td>11</td>
            <td>14</td>
            <td>13</td>
            <td>59</td>
            <td>55</td>
            <td>+4</td>
            <td>47</td>
            <td />
          </tr>
          <tr>
            <th>12</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Swansea_City_A.F.C.'}
                title={'Swansea City A.F.C.'}
              >
                Swansea City
              </a>
            </td>
            <td>38</td>
            <td>12</td>
            <td>11</td>
            <td>15</td>
            <td>42</td>
            <td>52</td>
            <td>−10</td>
            <td>47</td>
            <td />
          </tr>
          <tr>
            <th>13</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Watford_F.C.'}
                title={'Watford F.C.'}
              >
                Watford
              </a>
            </td>
            <td>38</td>
            <td>12</td>
            <td>9</td>
            <td>17</td>
            <td>40</td>
            <td>50</td>
            <td>−10</td>
            <td>45</td>
            <td />
          </tr>
          <tr>
            <th>14</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C.'}
                title={'West Bromwich Albion F.C.'}
              >
                West Bromwich Albion
              </a>
            </td>
            <td>38</td>
            <td>10</td>
            <td>13</td>
            <td>15</td>
            <td>34</td>
            <td>48</td>
            <td>−14</td>
            <td>43</td>
            <td />
          </tr>
          <tr>
            <th>15</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Crystal_Palace_F.C.'}
                title={'Crystal Palace F.C.'}
              >
                Crystal Palace
              </a>
            </td>
            <td>38</td>
            <td>11</td>
            <td>9</td>
            <td>18</td>
            <td>39</td>
            <td>51</td>
            <td>−12</td>
            <td>42</td>
            <td />
          </tr>
          <tr>
            <th>16</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/A.F.C._Bournemouth'}
                title={'A.F.C. Bournemouth'}
              >
                AFC Bournemouth
              </a>
            </td>
            <td>38</td>
            <td>11</td>
            <td>9</td>
            <td>18</td>
            <td>45</td>
            <td>67</td>
            <td>−22</td>
            <td>42</td>
            <td />
          </tr>
          <tr>
            <th>17</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Sunderland_A.F.C.'}
                title={'Sunderland A.F.C.'}
              >
                Sunderland
              </a>
            </td>
            <td>38</td>
            <td>9</td>
            <td>12</td>
            <td>17</td>
            <td>48</td>
            <td>62</td>
            <td>−14</td>
            <td>39</td>
            <td />
          </tr>
          <tr>
            <th>18</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Newcastle_United_F.C.'}
                title={'Newcastle United F.C.'}
              >
                Newcastle United
              </a>{' '}
              <strong>(R)</strong>
            </td>
            <td>38</td>
            <td>9</td>
            <td>10</td>
            <td>19</td>
            <td>44</td>
            <td>65</td>
            <td>−21</td>
            <td>37</td>
            <td>
              Relegation to the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'
                }
                title={'2016–17 Football League Championship'}
              >
                Football League Championship
              </a>
            </td>
          </tr>
          <tr>
            <th>19</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Norwich_City_F.C.'}
                title={'Norwich City F.C.'}
              >
                Norwich City
              </a>{' '}
              <strong>(R)</strong>
            </td>
            <td>38</td>
            <td>9</td>
            <td>7</td>
            <td>22</td>
            <td>39</td>
            <td>67</td>
            <td>−28</td>
            <td>34</td>
            <td>
              Relegation to the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'
                }
                title={'2016–17 Football League Championship'}
              >
                Football League Championship
              </a>
            </td>
          </tr>
          <tr>
            <th>20</th>
            <td>
              <a
                href={'https://en.wikipedia.org/wiki/Aston_Villa_F.C.'}
                title={'Aston Villa F.C.'}
              >
                Aston Villa
              </a>{' '}
              <strong>(R)</strong>
            </td>
            <td>38</td>
            <td>3</td>
            <td>8</td>
            <td>27</td>
            <td>27</td>
            <td>76</td>
            <td>−49</td>
            <td>17</td>
            <td>
              Relegation to the{' '}
              <a
                href={
                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'
                }
                title={'2016–17 Football League Championship'}
              >
                Football League Championship
              </a>
            </td>
          </tr>
        </tbody>
      </ui.Table>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <ui.Table bordered>
        <tbody>
          <tr>
            <th className={'rb-is-link'}>Link th cell</th>
            <td>Two</td>
            <td className={'rb-is-link'}>Link td cell</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr className={'rb-is-link'}>
            <th>Link row</th>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr>
            <th className={'rb-is-primary'}>Primary th cell</th>
            <td>Two</td>
            <td className={'rb-is-primary'}>Primary td cell</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr className={'rb-is-primary'}>
            <th>Primary row</th>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr>
            <th className={'rb-is-info'}>Info th cell</th>
            <td>Two</td>
            <td className={'rb-is-info'}>Info td cell</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr className={'rb-is-info'}>
            <th>Info row</th>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr>
            <th className={'rb-is-success'}>Success th cell</th>
            <td>Two</td>
            <td className={'rb-is-success'}>Success td cell</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr className={'rb-is-success'}>
            <th>Success row</th>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr>
            <th className={'rb-is-warning'}>Warning th cell</th>
            <td>Two</td>
            <td className={'rb-is-warning'}>Warning td cell</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr className={'rb-is-warning'}>
            <th>Warning row</th>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr>
            <th className={'rb-is-danger'}>Danger th cell</th>
            <td>Two</td>
            <td className={'rb-is-danger'}>Danger td cell</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
          <tr className={'rb-is-danger'}>
            <th>Danger row</th>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
            <td>Five</td>
          </tr>
        </tbody>
      </ui.Table>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <p>
            Add <strong>borders</strong> to all the cells.
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <code>{'table is-bordered'}</code>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'}>
          {' '}
          <ui.Table bordered>
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
            </tbody>
          </ui.Table>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <p>
            Add <strong>stripes</strong> to the table.
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <code>{'table is-striped'}</code>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'}>
          {' '}
          <ui.Table striped>
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </ui.Table>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <p>
            Make the cells <strong>narrower</strong>.
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <code>{'table is-narrow'}</code>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'}>
          {' '}
          <ui.Table narrow>
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </ui.Table>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <p>
            You can add a <strong>hover effect</strong> on each row
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <code>{'table is-hoverable'}</code>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'}>
          {' '}
          <ui.Table hoverable>
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </ui.Table>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <p>
            You can have a <strong>fullwidth</strong> table.
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <code>{'table is-fullwidth'}</code>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'}>
          {' '}
          <ui.Table fullWidth>
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </ui.Table>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

function Example008Demo() {
  return (
    <>
      <ui.Columns>
        {' '}
        <ui.Column>
          {' '}
          <p>
            You can <strong>combine</strong> all five modifiers.
          </p>{' '}
        </ui.Column>{' '}
        <ui.Column>
          {' '}
          <code>
            {'table is-bordered is-striped is-narrow is-hoverable is-fullwidth'}
          </code>{' '}
        </ui.Column>{' '}
        <ui.Column width={'half'}>
          {' '}
          <ui.Table bordered striped narrow hoverable fullWidth>
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </ui.Table>{' '}
        </ui.Column>{' '}
      </ui.Columns>
    </>
  )
}

export const Example001 = {
  name: 'League standings',
  parameters: {
    official: { id: 'elements-table/basic/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example001Demo() {\n  return (\n    <>\n      <ui.Table>\n        <thead>\n          <tr>\n            <th>\n              <abbr title={'Position'}>Pos</abbr>\n            </th>\n            <th>Team</th>\n            <th>\n              <abbr title={'Played'}>Pld</abbr>\n            </th>\n            <th>\n              <abbr title={'Won'}>W</abbr>\n            </th>\n            <th>\n              <abbr title={'Drawn'}>D</abbr>\n            </th>\n            <th>\n              <abbr title={'Lost'}>L</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals for'}>GF</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals against'}>GA</abbr>\n            </th>\n            <th>\n              <abbr title={'Goal difference'}>GD</abbr>\n            </th>\n            <th>\n              <abbr title={'Points'}>Pts</abbr>\n            </th>\n            <th>Qualification or relegation</th>\n          </tr>\n        </thead>\n        <tfoot>\n          <tr>\n            <th>\n              <abbr title={'Position'}>Pos</abbr>\n            </th>\n            <th>Team</th>\n            <th>\n              <abbr title={'Played'}>Pld</abbr>\n            </th>\n            <th>\n              <abbr title={'Won'}>W</abbr>\n            </th>\n            <th>\n              <abbr title={'Drawn'}>D</abbr>\n            </th>\n            <th>\n              <abbr title={'Lost'}>L</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals for'}>GF</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals against'}>GA</abbr>\n            </th>\n            <th>\n              <abbr title={'Goal difference'}>GD</abbr>\n            </th>\n            <th>\n              <abbr title={'Points'}>Pts</abbr>\n            </th>\n            <th>Qualification or relegation</th>\n          </tr>\n        </tfoot>\n        <tbody>\n          <tr>\n            <th>1</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Leicester_City_F.C.'}\n                title={'Leicester City F.C.'}\n              >\n                Leicester City\n              </a>{' '}\n              <strong>(C)</strong>\n            </td>\n            <td>38</td>\n            <td>23</td>\n            <td>12</td>\n            <td>3</td>\n            <td>68</td>\n            <td>36</td>\n            <td>+32</td>\n            <td>81</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>2</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Arsenal_F.C.'}\n                title={'Arsenal F.C.'}\n              >\n                Arsenal\n              </a>\n            </td>\n            <td>38</td>\n            <td>20</td>\n            <td>11</td>\n            <td>7</td>\n            <td>65</td>\n            <td>36</td>\n            <td>+29</td>\n            <td>71</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>3</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.'}\n                title={'Tottenham Hotspur F.C.'}\n              >\n                Tottenham Hotspur\n              </a>\n            </td>\n            <td>38</td>\n            <td>19</td>\n            <td>13</td>\n            <td>6</td>\n            <td>69</td>\n            <td>35</td>\n            <td>+34</td>\n            <td>70</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League group stage\n              </a>\n            </td>\n          </tr>\n          <tr className={'rb-is-selected'}>\n            <th>4</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Manchester_City_F.C.'}\n                title={'Manchester City F.C.'}\n              >\n                Manchester City\n              </a>\n            </td>\n            <td>38</td>\n            <td>19</td>\n            <td>9</td>\n            <td>10</td>\n            <td>71</td>\n            <td>41</td>\n            <td>+30</td>\n            <td>66</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League play-off round\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>5</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Manchester_United_F.C.'}\n                title={'Manchester United F.C.'}\n              >\n                Manchester United\n              </a>\n            </td>\n            <td>38</td>\n            <td>19</td>\n            <td>9</td>\n            <td>10</td>\n            <td>49</td>\n            <td>35</td>\n            <td>+14</td>\n            <td>66</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage'\n                }\n                title={'2016–17 UEFA Europa League'}\n              >\n                Europa League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>6</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Southampton_F.C.'}\n                title={'Southampton F.C.'}\n              >\n                Southampton\n              </a>\n            </td>\n            <td>38</td>\n            <td>18</td>\n            <td>9</td>\n            <td>11</td>\n            <td>59</td>\n            <td>41</td>\n            <td>+18</td>\n            <td>63</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage'\n                }\n                title={'2016–17 UEFA Europa League'}\n              >\n                Europa League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>7</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/West_Ham_United_F.C.'}\n                title={'West Ham United F.C.'}\n              >\n                West Ham United\n              </a>\n            </td>\n            <td>38</td>\n            <td>16</td>\n            <td>14</td>\n            <td>8</td>\n            <td>65</td>\n            <td>51</td>\n            <td>+14</td>\n            <td>62</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round'\n                }\n                title={'2016–17 UEFA Europa League'}\n              >\n                Europa League third qualifying round\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>8</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Liverpool_F.C.'}\n                title={'Liverpool F.C.'}\n              >\n                Liverpool\n              </a>\n            </td>\n            <td>38</td>\n            <td>16</td>\n            <td>12</td>\n            <td>10</td>\n            <td>63</td>\n            <td>50</td>\n            <td>+13</td>\n            <td>60</td>\n            <td />\n          </tr>\n          <tr>\n            <th>9</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Stoke_City_F.C.'}\n                title={'Stoke City F.C.'}\n              >\n                Stoke City\n              </a>\n            </td>\n            <td>38</td>\n            <td>14</td>\n            <td>9</td>\n            <td>15</td>\n            <td>41</td>\n            <td>55</td>\n            <td>−14</td>\n            <td>51</td>\n            <td />\n          </tr>\n          <tr>\n            <th>10</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Chelsea_F.C.'}\n                title={'Chelsea F.C.'}\n              >\n                Chelsea\n              </a>\n            </td>\n            <td>38</td>\n            <td>12</td>\n            <td>14</td>\n            <td>12</td>\n            <td>59</td>\n            <td>53</td>\n            <td>+6</td>\n            <td>50</td>\n            <td />\n          </tr>\n          <tr>\n            <th>11</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Everton_F.C.'}\n                title={'Everton F.C.'}\n              >\n                Everton\n              </a>\n            </td>\n            <td>38</td>\n            <td>11</td>\n            <td>14</td>\n            <td>13</td>\n            <td>59</td>\n            <td>55</td>\n            <td>+4</td>\n            <td>47</td>\n            <td />\n          </tr>\n          <tr>\n            <th>12</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Swansea_City_A.F.C.'}\n                title={'Swansea City A.F.C.'}\n              >\n                Swansea City\n              </a>\n            </td>\n            <td>38</td>\n            <td>12</td>\n            <td>11</td>\n            <td>15</td>\n            <td>42</td>\n            <td>52</td>\n            <td>−10</td>\n            <td>47</td>\n            <td />\n          </tr>\n          <tr>\n            <th>13</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Watford_F.C.'}\n                title={'Watford F.C.'}\n              >\n                Watford\n              </a>\n            </td>\n            <td>38</td>\n            <td>12</td>\n            <td>9</td>\n            <td>17</td>\n            <td>40</td>\n            <td>50</td>\n            <td>−10</td>\n            <td>45</td>\n            <td />\n          </tr>\n          <tr>\n            <th>14</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C.'}\n                title={'West Bromwich Albion F.C.'}\n              >\n                West Bromwich Albion\n              </a>\n            </td>\n            <td>38</td>\n            <td>10</td>\n            <td>13</td>\n            <td>15</td>\n            <td>34</td>\n            <td>48</td>\n            <td>−14</td>\n            <td>43</td>\n            <td />\n          </tr>\n          <tr>\n            <th>15</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Crystal_Palace_F.C.'}\n                title={'Crystal Palace F.C.'}\n              >\n                Crystal Palace\n              </a>\n            </td>\n            <td>38</td>\n            <td>11</td>\n            <td>9</td>\n            <td>18</td>\n            <td>39</td>\n            <td>51</td>\n            <td>−12</td>\n            <td>42</td>\n            <td />\n          </tr>\n          <tr>\n            <th>16</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/A.F.C._Bournemouth'}\n                title={'A.F.C. Bournemouth'}\n              >\n                AFC Bournemouth\n              </a>\n            </td>\n            <td>38</td>\n            <td>11</td>\n            <td>9</td>\n            <td>18</td>\n            <td>45</td>\n            <td>67</td>\n            <td>−22</td>\n            <td>42</td>\n            <td />\n          </tr>\n          <tr>\n            <th>17</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Sunderland_A.F.C.'}\n                title={'Sunderland A.F.C.'}\n              >\n                Sunderland\n              </a>\n            </td>\n            <td>38</td>\n            <td>9</td>\n            <td>12</td>\n            <td>17</td>\n            <td>48</td>\n            <td>62</td>\n            <td>−14</td>\n            <td>39</td>\n            <td />\n          </tr>\n          <tr>\n            <th>18</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Newcastle_United_F.C.'}\n                title={'Newcastle United F.C.'}\n              >\n                Newcastle United\n              </a>{' '}\n              <strong>(R)</strong>\n            </td>\n            <td>38</td>\n            <td>9</td>\n            <td>10</td>\n            <td>19</td>\n            <td>44</td>\n            <td>65</td>\n            <td>−21</td>\n            <td>37</td>\n            <td>\n              Relegation to the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'\n                }\n                title={'2016–17 Football League Championship'}\n              >\n                Football League Championship\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>19</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Norwich_City_F.C.'}\n                title={'Norwich City F.C.'}\n              >\n                Norwich City\n              </a>{' '}\n              <strong>(R)</strong>\n            </td>\n            <td>38</td>\n            <td>9</td>\n            <td>7</td>\n            <td>22</td>\n            <td>39</td>\n            <td>67</td>\n            <td>−28</td>\n            <td>34</td>\n            <td>\n              Relegation to the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'\n                }\n                title={'2016–17 Football League Championship'}\n              >\n                Football League Championship\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>20</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Aston_Villa_F.C.'}\n                title={'Aston Villa F.C.'}\n              >\n                Aston Villa\n              </a>{' '}\n              <strong>(R)</strong>\n            </td>\n            <td>38</td>\n            <td>3</td>\n            <td>8</td>\n            <td>27</td>\n            <td>27</td>\n            <td>76</td>\n            <td>−49</td>\n            <td>17</td>\n            <td>\n              Relegation to the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'\n                }\n                title={'2016–17 Football League Championship'}\n              >\n                Football League Championship\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </ui.Table>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Cell and row colors',
  parameters: {
    official: { id: 'elements-table/colors/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example002Demo() {\n  return (\n    <>\n      <ui.Table bordered>\n        <tbody>\n          <tr>\n            <th className={'rb-is-link'}>Link th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-link'}>Link td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-link'}>\n            <th>Link row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-primary'}>Primary th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-primary'}>Primary td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-primary'}>\n            <th>Primary row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-info'}>Info th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-info'}>Info td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-info'}>\n            <th>Info row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-success'}>Success th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-success'}>Success td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-success'}>\n            <th>Success row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-warning'}>Warning th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-warning'}>Warning td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-warning'}>\n            <th>Warning row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-danger'}>Danger th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-danger'}>Danger td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-danger'}>\n            <th>Danger row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n        </tbody>\n      </ui.Table>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Bordered table',
  parameters: {
    official: { id: 'elements-table/modifiers/001' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example003Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p>\n            Add <strong>borders</strong> to all the cells.\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <code>{'table is-bordered'}</code>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Table bordered>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n            </tbody>\n          </ui.Table>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Striped table',
  parameters: {
    official: { id: 'elements-table/modifiers/002' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example004Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p>\n            Add <strong>stripes</strong> to the table.\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <code>{'table is-striped'}</code>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Table striped>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </ui.Table>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Narrow table',
  parameters: {
    official: { id: 'elements-table/modifiers/003' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example005Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p>\n            Make the cells <strong>narrower</strong>.\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <code>{'table is-narrow'}</code>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Table narrow>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </ui.Table>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Hoverable rows',
  parameters: {
    official: { id: 'elements-table/modifiers/004' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example006Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p>\n            You can add a <strong>hover effect</strong> on each row\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <code>{'table is-hoverable'}</code>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Table hoverable>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </ui.Table>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Full-width table',
  parameters: {
    official: { id: 'elements-table/modifiers/005' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example007Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p>\n            You can have a <strong>fullwidth</strong> table.\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <code>{'table is-fullwidth'}</code>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Table fullWidth>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </ui.Table>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Combined table modifiers',
  parameters: {
    official: { id: 'elements-table/modifiers/006' },
    docs: {
      source: {
        code: "import * as ui from '@seagreenio/react-bulma'\n\nfunction Example008Demo() {\n  return (\n    <>\n      <ui.Columns>\n        {' '}\n        <ui.Column>\n          {' '}\n          <p>\n            You can <strong>combine</strong> all five modifiers.\n          </p>{' '}\n        </ui.Column>{' '}\n        <ui.Column>\n          {' '}\n          <code>\n            {'table is-bordered is-striped is-narrow is-hoverable is-fullwidth'}\n          </code>{' '}\n        </ui.Column>{' '}\n        <ui.Column width={'half'}>\n          {' '}\n          <ui.Table bordered striped narrow hoverable fullWidth>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </ui.Table>{' '}\n        </ui.Column>{' '}\n      </ui.Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

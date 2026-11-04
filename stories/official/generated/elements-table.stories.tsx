import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Column, Columns, Table } from '../../../src'
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Table'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The inevitable HTML '}
          <strong data-official-prose="">{'table'}</strong>
          {', with special case cells'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can create a '}
            <strong data-official-prose="">{'Bulma table'}</strong>
            {' simply by attaching a single '}
            <code data-official-prose="">{'table'}</code>
            {' CSS class on a '}
            <code data-official-prose="">{'<table>'}</code>
            {' HTML element with the following structure: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'<table class="table">'}</code>
              {' as the main '}
              <strong data-official-prose="">{'container'}</strong>
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'thead'}</code>
                  {' the optional '}
                  <strong data-official-prose="">{'top'}</strong>
                  {' part of the table'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'tfoot'}</code>
                  {' the optional '}
                  <strong data-official-prose="">{'bottom'}</strong>
                  {' part of the table'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'tbody'}</code>
                  {' the main '}
                  <strong data-official-prose="">{'content'}</strong>
                  {' of the table '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'tr'}</code>
                      {' each table '}
                      <strong data-official-prose="">{'row'}</strong>
                      <ul data-official-prose="">
                        <li data-official-prose="">
                          <code data-official-prose="">{'th'}</code>
                          {' a table cell '}
                          <strong data-official-prose="">{'heading'}</strong>
                        </li>
                        <li data-official-prose="">
                          <code data-official-prose="">{'td'}</code>
                          {' a table '}
                          <strong data-official-prose="">{'cell'}</strong>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p data-official-prose="">
            {' You can set a table row as '}
            <strong data-official-prose="">{'selected'}</strong>
            {' by appending the '}
            <code data-official-prose="">{'is-selected'}</code>
            {' modifier on a '}
            <code data-official-prose="">{'<tr>'}</code>
          </p>
        </div>
        <div data-official-example="elements-table/basic/001">
          <Canvas of={LeagueStandingsStory} />
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
            {' You can change the color of a single '}
            <code data-official-prose="">{'<td>'}</code>
            {' or '}
            <code data-official-prose="">{'<th>'}</code>
            {' cell, or a whole '}
            <code data-official-prose="">{'<tr>'}</code>
            {' row, by adding one of the color modifiers: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-primary'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-link'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-info'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-success'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-warning'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-danger'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-black'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-dark'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-light'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-white'}</code>
            </li>
          </ul>
        </div>
        <div data-official-example="elements-table/colors/001">
          <Canvas of={CellAndRowColorsStory} />
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
        <div data-official-example="elements-table/modifiers/001">
          <Canvas of={BorderedTableStory} />
        </div>
        <div data-official-example="elements-table/modifiers/002">
          <Canvas of={StripedTableStory} />
        </div>
        <div data-official-example="elements-table/modifiers/003">
          <Canvas of={NarrowTableStory} />
        </div>
        <div data-official-example="elements-table/modifiers/004">
          <Canvas of={HoverableRowsStory} />
        </div>
        <div data-official-example="elements-table/modifiers/005">
          <Canvas of={FullWidthTableStory} />
        </div>
        <div data-official-example="elements-table/modifiers/006">
          <Canvas of={CombinedTableModifiersStory} />
        </div>
        <h3
          data-official-prose=""
          id={'table-container'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Table container '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#table-container'}
          >
            {' # '}
          </a>
        </h3>
        <p data-official-prose="" className={'content'}>
          {' You can create a '}
          <strong data-official-prose="">{'scrollable table'}</strong>
          {' by wrapping a '}
          <code data-official-prose="">{'table'}</code>
          {' in a '}
          <code data-official-prose="">{'table-container'}</code>
          {' element: '}
        </p>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="table-container">\n  <table class="table">\n    <!-- Your table content -->\n  </table>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'table-container'}>
          <table
            data-official-prose=""
            className={'table is-bordered is-striped'}
          >
            <tbody data-official-prose="">
              <tr data-official-prose="">
                <td data-official-prose="">{'1'}</td>
                <td data-official-prose="">{'2'}</td>
                <td data-official-prose="">{'3'}</td>
                <td data-official-prose="">{'4'}</td>
                <td data-official-prose="">{'5'}</td>
                <td data-official-prose="">{'6'}</td>
                <td data-official-prose="">{'7'}</td>
                <td data-official-prose="">{'8'}</td>
                <td data-official-prose="">{'9'}</td>
                <td data-official-prose="">{'10'}</td>
                <td data-official-prose="">{'11'}</td>
                <td data-official-prose="">{'12'}</td>
                <td data-official-prose="">{'13'}</td>
                <td data-official-prose="">{'14'}</td>
                <td data-official-prose="">{'15'}</td>
                <td data-official-prose="">{'16'}</td>
                <td data-official-prose="">{'17'}</td>
                <td data-official-prose="">{'18'}</td>
                <td data-official-prose="">{'19'}</td>
                <td data-official-prose="">{'20'}</td>
                <td data-official-prose="">{'21'}</td>
                <td data-official-prose="">{'22'}</td>
                <td data-official-prose="">{'23'}</td>
                <td data-official-prose="">{'24'}</td>
                <td data-official-prose="">{'25'}</td>
                <td data-official-prose="">{'26'}</td>
                <td data-official-prose="">{'27'}</td>
                <td data-official-prose="">{'28'}</td>
                <td data-official-prose="">{'29'}</td>
                <td data-official-prose="">{'30'}</td>
                <td data-official-prose="">{'31'}</td>
                <td data-official-prose="">{'32'}</td>
                <td data-official-prose="">{'33'}</td>
                <td data-official-prose="">{'34'}</td>
                <td data-official-prose="">{'35'}</td>
                <td data-official-prose="">{'36'}</td>
                <td data-official-prose="">{'37'}</td>
                <td data-official-prose="">{'38'}</td>
                <td data-official-prose="">{'39'}</td>
                <td data-official-prose="">{'40'}</td>
                <td data-official-prose="">{'41'}</td>
                <td data-official-prose="">{'42'}</td>
                <td data-official-prose="">{'43'}</td>
                <td data-official-prose="">{'44'}</td>
                <td data-official-prose="">{'45'}</td>
                <td data-official-prose="">{'46'}</td>
                <td data-official-prose="">{'47'}</td>
                <td data-official-prose="">{'48'}</td>
                <td data-official-prose="">{'49'}</td>
                <td data-official-prose="">{'50'}</td>
                <td data-official-prose="">{'51'}</td>
                <td data-official-prose="">{'52'}</td>
                <td data-official-prose="">{'53'}</td>
                <td data-official-prose="">{'54'}</td>
                <td data-official-prose="">{'55'}</td>
                <td data-official-prose="">{'56'}</td>
                <td data-official-prose="">{'57'}</td>
                <td data-official-prose="">{'58'}</td>
                <td data-official-prose="">{'59'}</td>
                <td data-official-prose="">{'60'}</td>
                <td data-official-prose="">{'61'}</td>
                <td data-official-prose="">{'62'}</td>
                <td data-official-prose="">{'63'}</td>
                <td data-official-prose="">{'64'}</td>
                <td data-official-prose="">{'65'}</td>
                <td data-official-prose="">{'66'}</td>
                <td data-official-prose="">{'67'}</td>
                <td data-official-prose="">{'68'}</td>
                <td data-official-prose="">{'69'}</td>
                <td data-official-prose="">{'70'}</td>
                <td data-official-prose="">{'71'}</td>
                <td data-official-prose="">{'72'}</td>
                <td data-official-prose="">{'73'}</td>
                <td data-official-prose="">{'74'}</td>
                <td data-official-prose="">{'75'}</td>
                <td data-official-prose="">{'76'}</td>
                <td data-official-prose="">{'77'}</td>
                <td data-official-prose="">{'78'}</td>
                <td data-official-prose="">{'79'}</td>
                <td data-official-prose="">{'80'}</td>
                <td data-official-prose="">{'81'}</td>
                <td data-official-prose="">{'82'}</td>
                <td data-official-prose="">{'83'}</td>
                <td data-official-prose="">{'84'}</td>
                <td data-official-prose="">{'85'}</td>
                <td data-official-prose="">{'86'}</td>
                <td data-official-prose="">{'87'}</td>
                <td data-official-prose="">{'88'}</td>
                <td data-official-prose="">{'89'}</td>
                <td data-official-prose="">{'90'}</td>
                <td data-official-prose="">{'91'}</td>
                <td data-official-prose="">{'92'}</td>
                <td data-official-prose="">{'93'}</td>
                <td data-official-prose="">{'94'}</td>
                <td data-official-prose="">{'95'}</td>
                <td data-official-prose="">{'96'}</td>
                <td data-official-prose="">{'97'}</td>
                <td data-official-prose="">{'98'}</td>
                <td data-official-prose="">{'99'}</td>
                <td data-official-prose="">{'100'}</td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">{'2'}</td>
                <td data-official-prose="">{'4'}</td>
                <td data-official-prose="">{'6'}</td>
                <td data-official-prose="">{'8'}</td>
                <td data-official-prose="">{'10'}</td>
                <td data-official-prose="">{'12'}</td>
                <td data-official-prose="">{'14'}</td>
                <td data-official-prose="">{'16'}</td>
                <td data-official-prose="">{'18'}</td>
                <td data-official-prose="">{'20'}</td>
                <td data-official-prose="">{'22'}</td>
                <td data-official-prose="">{'24'}</td>
                <td data-official-prose="">{'26'}</td>
                <td data-official-prose="">{'28'}</td>
                <td data-official-prose="">{'30'}</td>
                <td data-official-prose="">{'32'}</td>
                <td data-official-prose="">{'34'}</td>
                <td data-official-prose="">{'36'}</td>
                <td data-official-prose="">{'38'}</td>
                <td data-official-prose="">{'40'}</td>
                <td data-official-prose="">{'42'}</td>
                <td data-official-prose="">{'44'}</td>
                <td data-official-prose="">{'46'}</td>
                <td data-official-prose="">{'48'}</td>
                <td data-official-prose="">{'50'}</td>
                <td data-official-prose="">{'52'}</td>
                <td data-official-prose="">{'54'}</td>
                <td data-official-prose="">{'56'}</td>
                <td data-official-prose="">{'58'}</td>
                <td data-official-prose="">{'60'}</td>
                <td data-official-prose="">{'62'}</td>
                <td data-official-prose="">{'64'}</td>
                <td data-official-prose="">{'66'}</td>
                <td data-official-prose="">{'68'}</td>
                <td data-official-prose="">{'70'}</td>
                <td data-official-prose="">{'72'}</td>
                <td data-official-prose="">{'74'}</td>
                <td data-official-prose="">{'76'}</td>
                <td data-official-prose="">{'78'}</td>
                <td data-official-prose="">{'80'}</td>
                <td data-official-prose="">{'82'}</td>
                <td data-official-prose="">{'84'}</td>
                <td data-official-prose="">{'86'}</td>
                <td data-official-prose="">{'88'}</td>
                <td data-official-prose="">{'90'}</td>
                <td data-official-prose="">{'92'}</td>
                <td data-official-prose="">{'94'}</td>
                <td data-official-prose="">{'96'}</td>
                <td data-official-prose="">{'98'}</td>
                <td data-official-prose="">{'100'}</td>
                <td data-official-prose="">{'102'}</td>
                <td data-official-prose="">{'104'}</td>
                <td data-official-prose="">{'106'}</td>
                <td data-official-prose="">{'108'}</td>
                <td data-official-prose="">{'110'}</td>
                <td data-official-prose="">{'112'}</td>
                <td data-official-prose="">{'114'}</td>
                <td data-official-prose="">{'116'}</td>
                <td data-official-prose="">{'118'}</td>
                <td data-official-prose="">{'120'}</td>
                <td data-official-prose="">{'122'}</td>
                <td data-official-prose="">{'124'}</td>
                <td data-official-prose="">{'126'}</td>
                <td data-official-prose="">{'128'}</td>
                <td data-official-prose="">{'130'}</td>
                <td data-official-prose="">{'132'}</td>
                <td data-official-prose="">{'134'}</td>
                <td data-official-prose="">{'136'}</td>
                <td data-official-prose="">{'138'}</td>
                <td data-official-prose="">{'140'}</td>
                <td data-official-prose="">{'142'}</td>
                <td data-official-prose="">{'144'}</td>
                <td data-official-prose="">{'146'}</td>
                <td data-official-prose="">{'148'}</td>
                <td data-official-prose="">{'150'}</td>
                <td data-official-prose="">{'152'}</td>
                <td data-official-prose="">{'154'}</td>
                <td data-official-prose="">{'156'}</td>
                <td data-official-prose="">{'158'}</td>
                <td data-official-prose="">{'160'}</td>
                <td data-official-prose="">{'162'}</td>
                <td data-official-prose="">{'164'}</td>
                <td data-official-prose="">{'166'}</td>
                <td data-official-prose="">{'168'}</td>
                <td data-official-prose="">{'170'}</td>
                <td data-official-prose="">{'172'}</td>
                <td data-official-prose="">{'174'}</td>
                <td data-official-prose="">{'176'}</td>
                <td data-official-prose="">{'178'}</td>
                <td data-official-prose="">{'180'}</td>
                <td data-official-prose="">{'182'}</td>
                <td data-official-prose="">{'184'}</td>
                <td data-official-prose="">{'186'}</td>
                <td data-official-prose="">{'188'}</td>
                <td data-official-prose="">{'190'}</td>
                <td data-official-prose="">{'192'}</td>
                <td data-official-prose="">{'194'}</td>
                <td data-official-prose="">{'196'}</td>
                <td data-official-prose="">{'198'}</td>
                <td data-official-prose="">{'200'}</td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">{'3'}</td>
                <td data-official-prose="">{'6'}</td>
                <td data-official-prose="">{'9'}</td>
                <td data-official-prose="">{'12'}</td>
                <td data-official-prose="">{'15'}</td>
                <td data-official-prose="">{'18'}</td>
                <td data-official-prose="">{'21'}</td>
                <td data-official-prose="">{'24'}</td>
                <td data-official-prose="">{'27'}</td>
                <td data-official-prose="">{'30'}</td>
                <td data-official-prose="">{'33'}</td>
                <td data-official-prose="">{'36'}</td>
                <td data-official-prose="">{'39'}</td>
                <td data-official-prose="">{'42'}</td>
                <td data-official-prose="">{'45'}</td>
                <td data-official-prose="">{'48'}</td>
                <td data-official-prose="">{'51'}</td>
                <td data-official-prose="">{'54'}</td>
                <td data-official-prose="">{'57'}</td>
                <td data-official-prose="">{'60'}</td>
                <td data-official-prose="">{'63'}</td>
                <td data-official-prose="">{'66'}</td>
                <td data-official-prose="">{'69'}</td>
                <td data-official-prose="">{'72'}</td>
                <td data-official-prose="">{'75'}</td>
                <td data-official-prose="">{'78'}</td>
                <td data-official-prose="">{'81'}</td>
                <td data-official-prose="">{'84'}</td>
                <td data-official-prose="">{'87'}</td>
                <td data-official-prose="">{'90'}</td>
                <td data-official-prose="">{'93'}</td>
                <td data-official-prose="">{'96'}</td>
                <td data-official-prose="">{'99'}</td>
                <td data-official-prose="">{'102'}</td>
                <td data-official-prose="">{'105'}</td>
                <td data-official-prose="">{'108'}</td>
                <td data-official-prose="">{'111'}</td>
                <td data-official-prose="">{'114'}</td>
                <td data-official-prose="">{'117'}</td>
                <td data-official-prose="">{'120'}</td>
                <td data-official-prose="">{'123'}</td>
                <td data-official-prose="">{'126'}</td>
                <td data-official-prose="">{'129'}</td>
                <td data-official-prose="">{'132'}</td>
                <td data-official-prose="">{'135'}</td>
                <td data-official-prose="">{'138'}</td>
                <td data-official-prose="">{'141'}</td>
                <td data-official-prose="">{'144'}</td>
                <td data-official-prose="">{'147'}</td>
                <td data-official-prose="">{'150'}</td>
                <td data-official-prose="">{'153'}</td>
                <td data-official-prose="">{'156'}</td>
                <td data-official-prose="">{'159'}</td>
                <td data-official-prose="">{'162'}</td>
                <td data-official-prose="">{'165'}</td>
                <td data-official-prose="">{'168'}</td>
                <td data-official-prose="">{'171'}</td>
                <td data-official-prose="">{'174'}</td>
                <td data-official-prose="">{'177'}</td>
                <td data-official-prose="">{'180'}</td>
                <td data-official-prose="">{'183'}</td>
                <td data-official-prose="">{'186'}</td>
                <td data-official-prose="">{'189'}</td>
                <td data-official-prose="">{'192'}</td>
                <td data-official-prose="">{'195'}</td>
                <td data-official-prose="">{'198'}</td>
                <td data-official-prose="">{'201'}</td>
                <td data-official-prose="">{'204'}</td>
                <td data-official-prose="">{'207'}</td>
                <td data-official-prose="">{'210'}</td>
                <td data-official-prose="">{'213'}</td>
                <td data-official-prose="">{'216'}</td>
                <td data-official-prose="">{'219'}</td>
                <td data-official-prose="">{'222'}</td>
                <td data-official-prose="">{'225'}</td>
                <td data-official-prose="">{'228'}</td>
                <td data-official-prose="">{'231'}</td>
                <td data-official-prose="">{'234'}</td>
                <td data-official-prose="">{'237'}</td>
                <td data-official-prose="">{'240'}</td>
                <td data-official-prose="">{'243'}</td>
                <td data-official-prose="">{'246'}</td>
                <td data-official-prose="">{'249'}</td>
                <td data-official-prose="">{'252'}</td>
                <td data-official-prose="">{'255'}</td>
                <td data-official-prose="">{'258'}</td>
                <td data-official-prose="">{'261'}</td>
                <td data-official-prose="">{'264'}</td>
                <td data-official-prose="">{'267'}</td>
                <td data-official-prose="">{'270'}</td>
                <td data-official-prose="">{'273'}</td>
                <td data-official-prose="">{'276'}</td>
                <td data-official-prose="">{'279'}</td>
                <td data-official-prose="">{'282'}</td>
                <td data-official-prose="">{'285'}</td>
                <td data-official-prose="">{'288'}</td>
                <td data-official-prose="">{'291'}</td>
                <td data-official-prose="">{'294'}</td>
                <td data-official-prose="">{'297'}</td>
                <td data-official-prose="">{'300'}</td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">{'4'}</td>
                <td data-official-prose="">{'8'}</td>
                <td data-official-prose="">{'12'}</td>
                <td data-official-prose="">{'16'}</td>
                <td data-official-prose="">{'20'}</td>
                <td data-official-prose="">{'24'}</td>
                <td data-official-prose="">{'28'}</td>
                <td data-official-prose="">{'32'}</td>
                <td data-official-prose="">{'36'}</td>
                <td data-official-prose="">{'40'}</td>
                <td data-official-prose="">{'44'}</td>
                <td data-official-prose="">{'48'}</td>
                <td data-official-prose="">{'52'}</td>
                <td data-official-prose="">{'56'}</td>
                <td data-official-prose="">{'60'}</td>
                <td data-official-prose="">{'64'}</td>
                <td data-official-prose="">{'68'}</td>
                <td data-official-prose="">{'72'}</td>
                <td data-official-prose="">{'76'}</td>
                <td data-official-prose="">{'80'}</td>
                <td data-official-prose="">{'84'}</td>
                <td data-official-prose="">{'88'}</td>
                <td data-official-prose="">{'92'}</td>
                <td data-official-prose="">{'96'}</td>
                <td data-official-prose="">{'100'}</td>
                <td data-official-prose="">{'104'}</td>
                <td data-official-prose="">{'108'}</td>
                <td data-official-prose="">{'112'}</td>
                <td data-official-prose="">{'116'}</td>
                <td data-official-prose="">{'120'}</td>
                <td data-official-prose="">{'124'}</td>
                <td data-official-prose="">{'128'}</td>
                <td data-official-prose="">{'132'}</td>
                <td data-official-prose="">{'136'}</td>
                <td data-official-prose="">{'140'}</td>
                <td data-official-prose="">{'144'}</td>
                <td data-official-prose="">{'148'}</td>
                <td data-official-prose="">{'152'}</td>
                <td data-official-prose="">{'156'}</td>
                <td data-official-prose="">{'160'}</td>
                <td data-official-prose="">{'164'}</td>
                <td data-official-prose="">{'168'}</td>
                <td data-official-prose="">{'172'}</td>
                <td data-official-prose="">{'176'}</td>
                <td data-official-prose="">{'180'}</td>
                <td data-official-prose="">{'184'}</td>
                <td data-official-prose="">{'188'}</td>
                <td data-official-prose="">{'192'}</td>
                <td data-official-prose="">{'196'}</td>
                <td data-official-prose="">{'200'}</td>
                <td data-official-prose="">{'204'}</td>
                <td data-official-prose="">{'208'}</td>
                <td data-official-prose="">{'212'}</td>
                <td data-official-prose="">{'216'}</td>
                <td data-official-prose="">{'220'}</td>
                <td data-official-prose="">{'224'}</td>
                <td data-official-prose="">{'228'}</td>
                <td data-official-prose="">{'232'}</td>
                <td data-official-prose="">{'236'}</td>
                <td data-official-prose="">{'240'}</td>
                <td data-official-prose="">{'244'}</td>
                <td data-official-prose="">{'248'}</td>
                <td data-official-prose="">{'252'}</td>
                <td data-official-prose="">{'256'}</td>
                <td data-official-prose="">{'260'}</td>
                <td data-official-prose="">{'264'}</td>
                <td data-official-prose="">{'268'}</td>
                <td data-official-prose="">{'272'}</td>
                <td data-official-prose="">{'276'}</td>
                <td data-official-prose="">{'280'}</td>
                <td data-official-prose="">{'284'}</td>
                <td data-official-prose="">{'288'}</td>
                <td data-official-prose="">{'292'}</td>
                <td data-official-prose="">{'296'}</td>
                <td data-official-prose="">{'300'}</td>
                <td data-official-prose="">{'304'}</td>
                <td data-official-prose="">{'308'}</td>
                <td data-official-prose="">{'312'}</td>
                <td data-official-prose="">{'316'}</td>
                <td data-official-prose="">{'320'}</td>
                <td data-official-prose="">{'324'}</td>
                <td data-official-prose="">{'328'}</td>
                <td data-official-prose="">{'332'}</td>
                <td data-official-prose="">{'336'}</td>
                <td data-official-prose="">{'340'}</td>
                <td data-official-prose="">{'344'}</td>
                <td data-official-prose="">{'348'}</td>
                <td data-official-prose="">{'352'}</td>
                <td data-official-prose="">{'356'}</td>
                <td data-official-prose="">{'360'}</td>
                <td data-official-prose="">{'364'}</td>
                <td data-official-prose="">{'368'}</td>
                <td data-official-prose="">{'372'}</td>
                <td data-official-prose="">{'376'}</td>
                <td data-official-prose="">{'380'}</td>
                <td data-official-prose="">{'384'}</td>
                <td data-official-prose="">{'388'}</td>
                <td data-official-prose="">{'392'}</td>
                <td data-official-prose="">{'396'}</td>
                <td data-official-prose="">{'400'}</td>
              </tr>
              <tr data-official-prose="">
                <td data-official-prose="">{'5'}</td>
                <td data-official-prose="">{'10'}</td>
                <td data-official-prose="">{'15'}</td>
                <td data-official-prose="">{'20'}</td>
                <td data-official-prose="">{'25'}</td>
                <td data-official-prose="">{'30'}</td>
                <td data-official-prose="">{'35'}</td>
                <td data-official-prose="">{'40'}</td>
                <td data-official-prose="">{'45'}</td>
                <td data-official-prose="">{'50'}</td>
                <td data-official-prose="">{'55'}</td>
                <td data-official-prose="">{'60'}</td>
                <td data-official-prose="">{'65'}</td>
                <td data-official-prose="">{'70'}</td>
                <td data-official-prose="">{'75'}</td>
                <td data-official-prose="">{'80'}</td>
                <td data-official-prose="">{'85'}</td>
                <td data-official-prose="">{'90'}</td>
                <td data-official-prose="">{'95'}</td>
                <td data-official-prose="">{'100'}</td>
                <td data-official-prose="">{'105'}</td>
                <td data-official-prose="">{'110'}</td>
                <td data-official-prose="">{'115'}</td>
                <td data-official-prose="">{'120'}</td>
                <td data-official-prose="">{'125'}</td>
                <td data-official-prose="">{'130'}</td>
                <td data-official-prose="">{'135'}</td>
                <td data-official-prose="">{'140'}</td>
                <td data-official-prose="">{'145'}</td>
                <td data-official-prose="">{'150'}</td>
                <td data-official-prose="">{'155'}</td>
                <td data-official-prose="">{'160'}</td>
                <td data-official-prose="">{'165'}</td>
                <td data-official-prose="">{'170'}</td>
                <td data-official-prose="">{'175'}</td>
                <td data-official-prose="">{'180'}</td>
                <td data-official-prose="">{'185'}</td>
                <td data-official-prose="">{'190'}</td>
                <td data-official-prose="">{'195'}</td>
                <td data-official-prose="">{'200'}</td>
                <td data-official-prose="">{'205'}</td>
                <td data-official-prose="">{'210'}</td>
                <td data-official-prose="">{'215'}</td>
                <td data-official-prose="">{'220'}</td>
                <td data-official-prose="">{'225'}</td>
                <td data-official-prose="">{'230'}</td>
                <td data-official-prose="">{'235'}</td>
                <td data-official-prose="">{'240'}</td>
                <td data-official-prose="">{'245'}</td>
                <td data-official-prose="">{'250'}</td>
                <td data-official-prose="">{'255'}</td>
                <td data-official-prose="">{'260'}</td>
                <td data-official-prose="">{'265'}</td>
                <td data-official-prose="">{'270'}</td>
                <td data-official-prose="">{'275'}</td>
                <td data-official-prose="">{'280'}</td>
                <td data-official-prose="">{'285'}</td>
                <td data-official-prose="">{'290'}</td>
                <td data-official-prose="">{'295'}</td>
                <td data-official-prose="">{'300'}</td>
                <td data-official-prose="">{'305'}</td>
                <td data-official-prose="">{'310'}</td>
                <td data-official-prose="">{'315'}</td>
                <td data-official-prose="">{'320'}</td>
                <td data-official-prose="">{'325'}</td>
                <td data-official-prose="">{'330'}</td>
                <td data-official-prose="">{'335'}</td>
                <td data-official-prose="">{'340'}</td>
                <td data-official-prose="">{'345'}</td>
                <td data-official-prose="">{'350'}</td>
                <td data-official-prose="">{'355'}</td>
                <td data-official-prose="">{'360'}</td>
                <td data-official-prose="">{'365'}</td>
                <td data-official-prose="">{'370'}</td>
                <td data-official-prose="">{'375'}</td>
                <td data-official-prose="">{'380'}</td>
                <td data-official-prose="">{'385'}</td>
                <td data-official-prose="">{'390'}</td>
                <td data-official-prose="">{'395'}</td>
                <td data-official-prose="">{'400'}</td>
                <td data-official-prose="">{'405'}</td>
                <td data-official-prose="">{'410'}</td>
                <td data-official-prose="">{'415'}</td>
                <td data-official-prose="">{'420'}</td>
                <td data-official-prose="">{'425'}</td>
                <td data-official-prose="">{'430'}</td>
                <td data-official-prose="">{'435'}</td>
                <td data-official-prose="">{'440'}</td>
                <td data-official-prose="">{'445'}</td>
                <td data-official-prose="">{'450'}</td>
                <td data-official-prose="">{'455'}</td>
                <td data-official-prose="">{'460'}</td>
                <td data-official-prose="">{'465'}</td>
                <td data-official-prose="">{'470'}</td>
                <td data-official-prose="">{'475'}</td>
                <td data-official-prose="">{'480'}</td>
                <td data-official-prose="">{'485'}</td>
                <td data-official-prose="">{'490'}</td>
                <td data-official-prose="">{'495'}</td>
                <td data-official-prose="">{'500'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </OfficialDocument>
  )
}

function LeagueStandingsDemo() {
  return (
    <>
      <Table>
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
      </Table>
    </>
  )
}

function CellAndRowColorsDemo() {
  return (
    <>
      <Table bordered>
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
      </Table>
    </>
  )
}

function BorderedTableDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p>
            Add <strong>borders</strong> to all the cells.
          </p>
        </Column>
        <Column>
          <code>{'table is-bordered'}</code>
        </Column>
        <Column width={'half'}>
          <Table bordered>
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
          </Table>
        </Column>
      </Columns>
    </>
  )
}

function StripedTableDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p>
            Add <strong>stripes</strong> to the table.
          </p>
        </Column>
        <Column>
          <code>{'table is-striped'}</code>
        </Column>
        <Column width={'half'}>
          <Table striped>
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
          </Table>
        </Column>
      </Columns>
    </>
  )
}

function NarrowTableDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p>
            Make the cells <strong>narrower</strong>.
          </p>
        </Column>
        <Column>
          <code>{'table is-narrow'}</code>
        </Column>
        <Column width={'half'}>
          <Table narrow>
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
          </Table>
        </Column>
      </Columns>
    </>
  )
}

function HoverableRowsDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p>
            You can add a <strong>hover effect</strong> on each row
          </p>
        </Column>
        <Column>
          <code>{'table is-hoverable'}</code>
        </Column>
        <Column width={'half'}>
          <Table hoverable>
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
          </Table>
        </Column>
      </Columns>
    </>
  )
}

function FullWidthTableDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p>
            You can have a <strong>fullwidth</strong> table.
          </p>
        </Column>
        <Column>
          <code>{'table is-fullwidth'}</code>
        </Column>
        <Column width={'half'}>
          <Table fullWidth>
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
          </Table>
        </Column>
      </Columns>
    </>
  )
}

function CombinedTableModifiersDemo() {
  return (
    <>
      <Columns>
        <Column>
          <p>
            You can <strong>combine</strong> all five modifiers.
          </p>
        </Column>
        <Column>
          <code>
            {'table is-bordered is-striped is-narrow is-hoverable is-fullwidth'}
          </code>
        </Column>
        <Column width={'half'}>
          <Table bordered striped narrow hoverable fullWidth>
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
          </Table>
        </Column>
      </Columns>
    </>
  )
}

export const LeagueStandingsStory = {
  name: 'League standings',
  parameters: {
    official: { id: 'elements-table/basic/001' },
    docs: {
      source: {
        code: "import { Table } from '@seagreenio/react-bulma'\n\nfunction LeagueStandingsDemo() {\n  return (\n    <>\n      <Table>\n        <thead>\n          <tr>\n            <th>\n              <abbr title={'Position'}>Pos</abbr>\n            </th>\n            <th>Team</th>\n            <th>\n              <abbr title={'Played'}>Pld</abbr>\n            </th>\n            <th>\n              <abbr title={'Won'}>W</abbr>\n            </th>\n            <th>\n              <abbr title={'Drawn'}>D</abbr>\n            </th>\n            <th>\n              <abbr title={'Lost'}>L</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals for'}>GF</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals against'}>GA</abbr>\n            </th>\n            <th>\n              <abbr title={'Goal difference'}>GD</abbr>\n            </th>\n            <th>\n              <abbr title={'Points'}>Pts</abbr>\n            </th>\n            <th>Qualification or relegation</th>\n          </tr>\n        </thead>\n        <tfoot>\n          <tr>\n            <th>\n              <abbr title={'Position'}>Pos</abbr>\n            </th>\n            <th>Team</th>\n            <th>\n              <abbr title={'Played'}>Pld</abbr>\n            </th>\n            <th>\n              <abbr title={'Won'}>W</abbr>\n            </th>\n            <th>\n              <abbr title={'Drawn'}>D</abbr>\n            </th>\n            <th>\n              <abbr title={'Lost'}>L</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals for'}>GF</abbr>\n            </th>\n            <th>\n              <abbr title={'Goals against'}>GA</abbr>\n            </th>\n            <th>\n              <abbr title={'Goal difference'}>GD</abbr>\n            </th>\n            <th>\n              <abbr title={'Points'}>Pts</abbr>\n            </th>\n            <th>Qualification or relegation</th>\n          </tr>\n        </tfoot>\n        <tbody>\n          <tr>\n            <th>1</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Leicester_City_F.C.'}\n                title={'Leicester City F.C.'}\n              >\n                Leicester City\n              </a>{' '}\n              <strong>(C)</strong>\n            </td>\n            <td>38</td>\n            <td>23</td>\n            <td>12</td>\n            <td>3</td>\n            <td>68</td>\n            <td>36</td>\n            <td>+32</td>\n            <td>81</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>2</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Arsenal_F.C.'}\n                title={'Arsenal F.C.'}\n              >\n                Arsenal\n              </a>\n            </td>\n            <td>38</td>\n            <td>20</td>\n            <td>11</td>\n            <td>7</td>\n            <td>65</td>\n            <td>36</td>\n            <td>+29</td>\n            <td>71</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>3</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.'}\n                title={'Tottenham Hotspur F.C.'}\n              >\n                Tottenham Hotspur\n              </a>\n            </td>\n            <td>38</td>\n            <td>19</td>\n            <td>13</td>\n            <td>6</td>\n            <td>69</td>\n            <td>35</td>\n            <td>+34</td>\n            <td>70</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League group stage\n              </a>\n            </td>\n          </tr>\n          <tr className={'rb-is-selected'}>\n            <th>4</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Manchester_City_F.C.'}\n                title={'Manchester City F.C.'}\n              >\n                Manchester City\n              </a>\n            </td>\n            <td>38</td>\n            <td>19</td>\n            <td>9</td>\n            <td>10</td>\n            <td>71</td>\n            <td>41</td>\n            <td>+30</td>\n            <td>66</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round'\n                }\n                title={'2016–17 UEFA Champions League'}\n              >\n                Champions League play-off round\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>5</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Manchester_United_F.C.'}\n                title={'Manchester United F.C.'}\n              >\n                Manchester United\n              </a>\n            </td>\n            <td>38</td>\n            <td>19</td>\n            <td>9</td>\n            <td>10</td>\n            <td>49</td>\n            <td>35</td>\n            <td>+14</td>\n            <td>66</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage'\n                }\n                title={'2016–17 UEFA Europa League'}\n              >\n                Europa League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>6</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Southampton_F.C.'}\n                title={'Southampton F.C.'}\n              >\n                Southampton\n              </a>\n            </td>\n            <td>38</td>\n            <td>18</td>\n            <td>9</td>\n            <td>11</td>\n            <td>59</td>\n            <td>41</td>\n            <td>+18</td>\n            <td>63</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage'\n                }\n                title={'2016–17 UEFA Europa League'}\n              >\n                Europa League group stage\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>7</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/West_Ham_United_F.C.'}\n                title={'West Ham United F.C.'}\n              >\n                West Ham United\n              </a>\n            </td>\n            <td>38</td>\n            <td>16</td>\n            <td>14</td>\n            <td>8</td>\n            <td>65</td>\n            <td>51</td>\n            <td>+14</td>\n            <td>62</td>\n            <td>\n              Qualification for the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round'\n                }\n                title={'2016–17 UEFA Europa League'}\n              >\n                Europa League third qualifying round\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>8</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Liverpool_F.C.'}\n                title={'Liverpool F.C.'}\n              >\n                Liverpool\n              </a>\n            </td>\n            <td>38</td>\n            <td>16</td>\n            <td>12</td>\n            <td>10</td>\n            <td>63</td>\n            <td>50</td>\n            <td>+13</td>\n            <td>60</td>\n            <td />\n          </tr>\n          <tr>\n            <th>9</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Stoke_City_F.C.'}\n                title={'Stoke City F.C.'}\n              >\n                Stoke City\n              </a>\n            </td>\n            <td>38</td>\n            <td>14</td>\n            <td>9</td>\n            <td>15</td>\n            <td>41</td>\n            <td>55</td>\n            <td>−14</td>\n            <td>51</td>\n            <td />\n          </tr>\n          <tr>\n            <th>10</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Chelsea_F.C.'}\n                title={'Chelsea F.C.'}\n              >\n                Chelsea\n              </a>\n            </td>\n            <td>38</td>\n            <td>12</td>\n            <td>14</td>\n            <td>12</td>\n            <td>59</td>\n            <td>53</td>\n            <td>+6</td>\n            <td>50</td>\n            <td />\n          </tr>\n          <tr>\n            <th>11</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Everton_F.C.'}\n                title={'Everton F.C.'}\n              >\n                Everton\n              </a>\n            </td>\n            <td>38</td>\n            <td>11</td>\n            <td>14</td>\n            <td>13</td>\n            <td>59</td>\n            <td>55</td>\n            <td>+4</td>\n            <td>47</td>\n            <td />\n          </tr>\n          <tr>\n            <th>12</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Swansea_City_A.F.C.'}\n                title={'Swansea City A.F.C.'}\n              >\n                Swansea City\n              </a>\n            </td>\n            <td>38</td>\n            <td>12</td>\n            <td>11</td>\n            <td>15</td>\n            <td>42</td>\n            <td>52</td>\n            <td>−10</td>\n            <td>47</td>\n            <td />\n          </tr>\n          <tr>\n            <th>13</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Watford_F.C.'}\n                title={'Watford F.C.'}\n              >\n                Watford\n              </a>\n            </td>\n            <td>38</td>\n            <td>12</td>\n            <td>9</td>\n            <td>17</td>\n            <td>40</td>\n            <td>50</td>\n            <td>−10</td>\n            <td>45</td>\n            <td />\n          </tr>\n          <tr>\n            <th>14</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C.'}\n                title={'West Bromwich Albion F.C.'}\n              >\n                West Bromwich Albion\n              </a>\n            </td>\n            <td>38</td>\n            <td>10</td>\n            <td>13</td>\n            <td>15</td>\n            <td>34</td>\n            <td>48</td>\n            <td>−14</td>\n            <td>43</td>\n            <td />\n          </tr>\n          <tr>\n            <th>15</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Crystal_Palace_F.C.'}\n                title={'Crystal Palace F.C.'}\n              >\n                Crystal Palace\n              </a>\n            </td>\n            <td>38</td>\n            <td>11</td>\n            <td>9</td>\n            <td>18</td>\n            <td>39</td>\n            <td>51</td>\n            <td>−12</td>\n            <td>42</td>\n            <td />\n          </tr>\n          <tr>\n            <th>16</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/A.F.C._Bournemouth'}\n                title={'A.F.C. Bournemouth'}\n              >\n                AFC Bournemouth\n              </a>\n            </td>\n            <td>38</td>\n            <td>11</td>\n            <td>9</td>\n            <td>18</td>\n            <td>45</td>\n            <td>67</td>\n            <td>−22</td>\n            <td>42</td>\n            <td />\n          </tr>\n          <tr>\n            <th>17</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Sunderland_A.F.C.'}\n                title={'Sunderland A.F.C.'}\n              >\n                Sunderland\n              </a>\n            </td>\n            <td>38</td>\n            <td>9</td>\n            <td>12</td>\n            <td>17</td>\n            <td>48</td>\n            <td>62</td>\n            <td>−14</td>\n            <td>39</td>\n            <td />\n          </tr>\n          <tr>\n            <th>18</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Newcastle_United_F.C.'}\n                title={'Newcastle United F.C.'}\n              >\n                Newcastle United\n              </a>{' '}\n              <strong>(R)</strong>\n            </td>\n            <td>38</td>\n            <td>9</td>\n            <td>10</td>\n            <td>19</td>\n            <td>44</td>\n            <td>65</td>\n            <td>−21</td>\n            <td>37</td>\n            <td>\n              Relegation to the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'\n                }\n                title={'2016–17 Football League Championship'}\n              >\n                Football League Championship\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>19</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Norwich_City_F.C.'}\n                title={'Norwich City F.C.'}\n              >\n                Norwich City\n              </a>{' '}\n              <strong>(R)</strong>\n            </td>\n            <td>38</td>\n            <td>9</td>\n            <td>7</td>\n            <td>22</td>\n            <td>39</td>\n            <td>67</td>\n            <td>−28</td>\n            <td>34</td>\n            <td>\n              Relegation to the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'\n                }\n                title={'2016–17 Football League Championship'}\n              >\n                Football League Championship\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <th>20</th>\n            <td>\n              <a\n                href={'https://en.wikipedia.org/wiki/Aston_Villa_F.C.'}\n                title={'Aston Villa F.C.'}\n              >\n                Aston Villa\n              </a>{' '}\n              <strong>(R)</strong>\n            </td>\n            <td>38</td>\n            <td>3</td>\n            <td>8</td>\n            <td>27</td>\n            <td>27</td>\n            <td>76</td>\n            <td>−49</td>\n            <td>17</td>\n            <td>\n              Relegation to the{' '}\n              <a\n                href={\n                  'https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship'\n                }\n                title={'2016–17 Football League Championship'}\n              >\n                Football League Championship\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </Table>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LeagueStandingsDemo,
} satisfies StoryObj

export const CellAndRowColorsStory = {
  name: 'Cell and row colors',
  parameters: {
    official: { id: 'elements-table/colors/001' },
    docs: {
      source: {
        code: "import { Table } from '@seagreenio/react-bulma'\n\nfunction CellAndRowColorsDemo() {\n  return (\n    <>\n      <Table bordered>\n        <tbody>\n          <tr>\n            <th className={'rb-is-link'}>Link th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-link'}>Link td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-link'}>\n            <th>Link row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-primary'}>Primary th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-primary'}>Primary td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-primary'}>\n            <th>Primary row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-info'}>Info th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-info'}>Info td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-info'}>\n            <th>Info row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-success'}>Success th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-success'}>Success td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-success'}>\n            <th>Success row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-warning'}>Warning th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-warning'}>Warning td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-warning'}>\n            <th>Warning row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr>\n            <th className={'rb-is-danger'}>Danger th cell</th>\n            <td>Two</td>\n            <td className={'rb-is-danger'}>Danger td cell</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n          <tr className={'rb-is-danger'}>\n            <th>Danger row</th>\n            <td>Two</td>\n            <td>Three</td>\n            <td>Four</td>\n            <td>Five</td>\n          </tr>\n        </tbody>\n      </Table>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CellAndRowColorsDemo,
} satisfies StoryObj

export const BorderedTableStory = {
  name: 'Bordered table',
  parameters: {
    official: { id: 'elements-table/modifiers/001' },
    docs: {
      source: {
        code: "import { Column, Columns, Table } from '@seagreenio/react-bulma'\n\nfunction BorderedTableDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p>\n            Add <strong>borders</strong> to all the cells.\n          </p>\n        </Column>\n        <Column>\n          <code>{'table is-bordered'}</code>\n        </Column>\n        <Column width={'half'}>\n          <Table bordered>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n            </tbody>\n          </Table>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BorderedTableDemo,
} satisfies StoryObj

export const StripedTableStory = {
  name: 'Striped table',
  parameters: {
    official: { id: 'elements-table/modifiers/002' },
    docs: {
      source: {
        code: "import { Column, Columns, Table } from '@seagreenio/react-bulma'\n\nfunction StripedTableDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p>\n            Add <strong>stripes</strong> to the table.\n          </p>\n        </Column>\n        <Column>\n          <code>{'table is-striped'}</code>\n        </Column>\n        <Column width={'half'}>\n          <Table striped>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </Table>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: StripedTableDemo,
} satisfies StoryObj

export const NarrowTableStory = {
  name: 'Narrow table',
  parameters: {
    official: { id: 'elements-table/modifiers/003' },
    docs: {
      source: {
        code: "import { Column, Columns, Table } from '@seagreenio/react-bulma'\n\nfunction NarrowTableDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p>\n            Make the cells <strong>narrower</strong>.\n          </p>\n        </Column>\n        <Column>\n          <code>{'table is-narrow'}</code>\n        </Column>\n        <Column width={'half'}>\n          <Table narrow>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </Table>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NarrowTableDemo,
} satisfies StoryObj

export const HoverableRowsStory = {
  name: 'Hoverable rows',
  parameters: {
    official: { id: 'elements-table/modifiers/004' },
    docs: {
      source: {
        code: "import { Column, Columns, Table } from '@seagreenio/react-bulma'\n\nfunction HoverableRowsDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p>\n            You can add a <strong>hover effect</strong> on each row\n          </p>\n        </Column>\n        <Column>\n          <code>{'table is-hoverable'}</code>\n        </Column>\n        <Column width={'half'}>\n          <Table hoverable>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </Table>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HoverableRowsDemo,
} satisfies StoryObj

export const FullWidthTableStory = {
  name: 'Full-width table',
  parameters: {
    official: { id: 'elements-table/modifiers/005' },
    docs: {
      source: {
        code: "import { Column, Columns, Table } from '@seagreenio/react-bulma'\n\nfunction FullWidthTableDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p>\n            You can have a <strong>fullwidth</strong> table.\n          </p>\n        </Column>\n        <Column>\n          <code>{'table is-fullwidth'}</code>\n        </Column>\n        <Column width={'half'}>\n          <Table fullWidth>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </Table>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullWidthTableDemo,
} satisfies StoryObj

export const CombinedTableModifiersStory = {
  name: 'Combined table modifiers',
  parameters: {
    official: { id: 'elements-table/modifiers/006' },
    docs: {
      source: {
        code: "import { Column, Columns, Table } from '@seagreenio/react-bulma'\n\nfunction CombinedTableModifiersDemo() {\n  return (\n    <>\n      <Columns>\n        <Column>\n          <p>\n            You can <strong>combine</strong> all five modifiers.\n          </p>\n        </Column>\n        <Column>\n          <code>\n            {'table is-bordered is-striped is-narrow is-hoverable is-fullwidth'}\n          </code>\n        </Column>\n        <Column width={'half'}>\n          <Table bordered striped narrow hoverable fullWidth>\n            <thead>\n              <tr>\n                <th>One</th>\n                <th>Two</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Three</td>\n                <td>Four</td>\n              </tr>\n              <tr>\n                <td>Five</td>\n                <td>Six</td>\n              </tr>\n              <tr>\n                <td>Seven</td>\n                <td>Eight</td>\n              </tr>\n              <tr>\n                <td>Nine</td>\n                <td>Ten</td>\n              </tr>\n              <tr>\n                <td>Eleven</td>\n                <td>Twelve</td>\n              </tr>\n            </tbody>\n          </Table>\n        </Column>\n      </Columns>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CombinedTableModifiersDemo,
} satisfies StoryObj

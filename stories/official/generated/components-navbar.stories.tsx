import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import * as ui from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-navbar',
      title: 'Navbar',
      url: 'https://bulma.io/documentation/components/navbar/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-navbar',
  title: 'CSS Library/Components/Navbar',
} satisfies Meta
export default meta

function FixedNavbarTarget() {
  return (
    <>
      <ui.Navbar id={'navbarBottom'} fixed={'bottom'} shadow>
        {'\n  '}
        <ui.NavbarBrand>
          {'\n    '}
          <ui.NavbarItem href={'https://bulma.io/'}>
            {'\n      '}
            <svg
              width={'640'}
              height={'160'}
              viewBox={'0 0 640 160'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              {'\n  '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={
                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                }
                fill={'black'}
                className={'bd-svg-black'}
              />
              {'\n  '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                fill={'#00D1B2'}
              />
              {'\n'}
            </svg>
            {'\n\n    '}
          </ui.NavbarItem>
          {'\n    '}
          <ui.NavbarBurger data-target={'navbarExample'} as={'div'}>
            {'\n      '}
            <span />
            {'\n      '}
            <span />
            {'\n      '}
            <span />
            {'\n      '}
            <span />
            {'\n    '}
          </ui.NavbarBurger>
          {'\n  '}
        </ui.NavbarBrand>
        {'\n\n  '}
        <ui.NavbarMenu id={'navbarExample'}>
          {'\n    '}
          <ui.NavbarStart>
            {'\n      '}
            <ui.NavbarItem href={'https://bulma.io/'}>{' Home '}</ui.NavbarItem>
            {'\n      '}
            <ui.NavbarDropdown
              up
              hoverable
              as={'div'}
              trigger={<>{' Docs '}</>}
              triggerProps={{
                href: 'https://bulma.io/documentation/overview/start/',
              }}
            >
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/overview/start/'}
              >
                {' Overview '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/overview/modifiers/'}
              >
                {' Modifiers '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/columns/basics/'}
              >
                {' Columns '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/layout/container/'}
              >
                {' Layout '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/form/general/'}
              >
                {' Form '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarDivider />
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/elements/box/'}
              >
                {' Elements '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/components/breadcrumb/'}
                active
              >
                {' Components '}
              </ui.NavbarItem>
              {'\n        '}
            </ui.NavbarDropdown>
            {'\n    '}
          </ui.NavbarStart>
          {'\n\n    '}
          <ui.NavbarEnd>
            {'\n      '}
            <ui.NavbarItem as={'div'}>
              {'\n        '}
              <ui.Field layout={'grouped'}>
                {'\n          '}
                <ui.Control as={'p'}>
                  {'\n            '}
                  <ui.LinkButton
                    data-social-network={'Twitter'}
                    data-social-action={'tweet'}
                    data-social-target={'https://bulma.io'}
                    target={'_blank'}
                    href={
                      'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                    }
                    className={'bd-tw-button'}
                  >
                    {'\n              '}
                    <ui.Icon>
                      {'\n                '}
                      <i className={'fab fa-twitter'} />
                      {'\n              '}
                    </ui.Icon>
                    {'\n              '}
                    <span>{' Tweet '}</span>
                    {'\n            '}
                  </ui.LinkButton>
                  {'\n          '}
                </ui.Control>
                {'\n          '}
                <ui.Control as={'p'}>
                  {'\n            '}
                  <ui.LinkButton
                    href={
                      'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                    }
                    color={'primary'}
                  >
                    {'\n              '}
                    <ui.Icon>
                      {'\n                '}
                      <i className={'fas fa-download'} />
                      {'\n              '}
                    </ui.Icon>
                    {'\n              '}
                    <span>{'Download'}</span>
                    {'\n            '}
                  </ui.LinkButton>
                  {'\n          '}
                </ui.Control>
                {'\n        '}
              </ui.Field>
              {'\n      '}
            </ui.NavbarItem>
            {'\n    '}
          </ui.NavbarEnd>
          {'\n  '}
        </ui.NavbarMenu>
        {'\n'}
      </ui.Navbar>
    </>
  )
}
function OfficialDocs() {
  return (
    <OfficialDocument
      pageId="components-navbar"
      controllers={['fixed-navbar']}
      fixedNavbar={<FixedNavbarTarget />}
    >
      <div data-official-prose="" className={'bd-hero-body'}>
        {'\n    '}
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'\n      '}
          {'Navbar'}
          {'\n\n    '}
        </h1>
        {'\n\n    '}
        <hr data-official-prose="" className={'bd-hr'} />
        {'\n\n    '}
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'\n      '}
          {'A responsive horizontal '}
          <strong data-official-prose="">{'navbar'}</strong>
          {' that can support images, links, buttons, and dropdowns'}
          {'\n\n    '}
        </h2>
        {'\n\n    \n  '}
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        {
          '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
        }
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar'}</code>
            {
              ' component is a responsive and versatile horizontal navigation bar with the following structure:\n  '
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar'}</code>
              {' the '}
              <strong data-official-prose="">{'main'}</strong>
              {' container\n      '}
              <ul data-official-prose="">
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'navbar-brand'}</code>
                  {' the '}
                  <strong data-official-prose="">{'left side'}</strong>
                  {', '}
                  <strong data-official-prose="" className={'has-text-success'}>
                    {'always visible'}
                  </strong>
                  {', which usually contains the '}
                  <strong data-official-prose="">{'logo'}</strong>
                  {' and optionally some links or icons\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      {'\n              '}
                      <code data-official-prose="">{'navbar-burger'}</code>
                      {' the '}
                      <strong data-official-prose="">{'hamburger'}</strong>
                      {
                        ' icon, which toggles the navbar menu on touch devices\n            '
                      }
                    </li>
                    {'\n          '}
                  </ul>
                  {'\n        '}
                </li>
                {'\n        '}
                <li data-official-prose="">
                  {'\n          '}
                  <code data-official-prose="">{'navbar-menu'}</code>
                  {' the '}
                  <strong data-official-prose="">{'right side'}</strong>
                  {', hidden on touch devices, visible on desktop\n          '}
                  <ul data-official-prose="">
                    {'\n            '}
                    <li data-official-prose="">
                      {'\n              '}
                      <code data-official-prose="">{'navbar-start'}</code>
                      {' the '}
                      <strong data-official-prose="">{'left part'}</strong>
                      {
                        ' of the menu, which appears next to the navbar brand on desktop\n            '
                      }
                    </li>
                    {'\n            '}
                    <li data-official-prose="">
                      {'\n              '}
                      <code data-official-prose="">{'navbar-end'}</code>
                      {' the '}
                      <strong data-official-prose="">{'right part'}</strong>
                      {
                        ' of the menu, which appears at the end of the navbar\n              '
                      }
                      <ul data-official-prose="">
                        {'\n                '}
                        <li data-official-prose="">
                          {'\n                  '}
                          <code data-official-prose="">{'navbar-item'}</code>
                          {' each '}
                          <strong data-official-prose="">
                            {'single item'}
                          </strong>
                          {' of the navbar, which can either be an '}
                          <code data-official-prose="">{'a'}</code>
                          {' or a '}
                          <code data-official-prose="">{'div'}</code>
                          {'\n                  '}
                          <ul data-official-prose="">
                            {'\n                    '}
                            <li data-official-prose="">
                              {'\n                      '}
                              <code data-official-prose="">
                                {'navbar-link'}
                              </code>
                              {' a '}
                              <strong data-official-prose="">{'link'}</strong>
                              {
                                ' as the sibling of a dropdown, with an arrow\n                    '
                              }
                            </li>
                            {'\n                    '}
                            <li data-official-prose="">
                              {'\n                      '}
                              <code data-official-prose="">
                                {'navbar-dropdown'}
                              </code>
                              {' the '}
                              <strong data-official-prose="">
                                {'dropdown menu'}
                              </strong>
                              {
                                ', which can include navbar items and dividers\n                      '
                              }
                              <ul data-official-prose="">
                                {'\n                        '}
                                <li data-official-prose="">
                                  {'\n                          '}
                                  <code data-official-prose="">
                                    {'navbar-divider'}
                                  </code>
                                  {' a '}
                                  <strong data-official-prose="">
                                    {'horizontal line'}
                                  </strong>
                                  {
                                    ' to separate navbar items\n                        '
                                  }
                                </li>
                                {'\n                      '}
                              </ul>
                              {'\n                    '}
                            </li>
                            {'\n                  '}
                          </ul>
                          {'\n                '}
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
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'basic-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Basic Navbar\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#basic-navbar'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    To '}
            <strong data-official-prose="">{'get started quickly'}</strong>
            {', here is what a complete basic navbar looks like:\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/basic-navbar/001">
          <Canvas of={Example001} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <a class="navbar-item" href="https://bulma.io">\n      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n    </a>\n\n    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n    </a>\n  </div>\n\n  <div id="navbarBasicExample" class="navbar-menu">\n    <div class="navbar-start">\n      <a class="navbar-item">\n        Home\n      </a>\n\n      <a class="navbar-item">\n        Documentation\n      </a>\n\n      <div class="navbar-item has-dropdown is-hoverable">\n        <a class="navbar-link">\n          More\n        </a>\n\n        <div class="navbar-dropdown">\n          <a class="navbar-item">\n            About\n          </a>\n          <a class="navbar-item is-selected">\n            Jobs\n          </a>\n          <a class="navbar-item">\n            Contact\n          </a>\n          <hr class="navbar-divider">\n          <a class="navbar-item">\n            Report an issue\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class="navbar-end">\n      <div class="navbar-item">\n        <div class="buttons">\n          <a class="button is-primary">\n            <strong>Sign up</strong>\n          </a>\n          <a class="button is-light">\n            Log in\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'navbar-brand'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Navbar brand\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-brand'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar-brand'}</code>
            {' is the left side of the navbar. It can contain:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      a number of '}
              <code data-official-prose="">{'navbar-item'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <code data-official-prose="">{'navbar-burger'}</code>
              {' as last child\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <!-- navbar items, navbar burger... -->\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The navbar brand is '}
            <strong data-official-prose="">{'always visible'}</strong>
            {': on both touch devices '}
            <code data-official-prose="">{'< 1024px'}</code>
            {'\n and desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {
              '\n. As a result, it is recommended to only use a few navbar items to avoid '
            }
            <strong data-official-prose="">{'overflowing'}</strong>
            {' horizontally on small devices.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/navbar-brand/001">
          <Canvas of={Example002} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <a class="navbar-item" href="https://bulma.io">\n      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n    </a>\n\n    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n    </a>\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    On desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {'\n, the navbar brand will only take up the space it needs.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'navbar-burger'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Navbar burger\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-burger'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar-burger'}</code>
            {' is a hamburger menu that only appears on '}
            <strong data-official-prose="">{'touch devices'}</strong>
            {'. It has to appear as the last child of '}
            <code data-official-prose="">{'navbar-brand'}</code>
            {'. It has to contain four empty '}
            <code data-official-prose="">{'span'}</code>
            {
              ' tags in order to visualize the hamburger lines or the cross (when active).\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/navbar-burger/001">
          <Canvas of={Example003} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can add the modifier class '}
            <code data-official-prose="">{'is-active'}</code>
            {' to turn it into a cross.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/navbar-burger/002">
          <Canvas of={Example004} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'navbar-menu'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Navbar menu\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-menu'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {' is the '}
            <strong data-official-prose="">{'counterpart'}</strong>
            {
              ' of the navbar brand. As such, it must appear as a direct child of '
            }
            <code data-official-prose="">{'navbar'}</code>
            {', as a sibling of '}
            <code data-official-prose="">{'navbar-brand'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <!-- navbar items, navbar burger... -->\n  </div>\n  <div class="navbar-menu">\n    <!-- navbar start, navbar end -->\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {' is '}
            <strong data-official-prose="">
              {'hidden on touch devices'}
            </strong>{' '}
            <code data-official-prose="">{'< 1024px'}</code>
            {'\n. You need to add the modifier class '}
            <code data-official-prose="">{'is-active'}</code>
            {' to display it.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-menu">\n  <!-- hidden on mobile -->\n</div>\n\n<div class="navbar-menu is-active">\n  <!-- shown on mobile -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    On desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {'\n, the '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {' will '}
            <strong data-official-prose="">{'fill up the space'}</strong>
            {
              ' available in the navbar, leaving the navbar brand just the space it needs. It needs, however, two elements as direct children:\n  '
            }
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-start'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-end'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <hr data-official-prose="" />
        {'\n\n'}
        <div
          data-official-prose=""
          id={'navbarJsExample'}
          className={'message is-info'}
        >
          {'\n  '}
          <h4 data-official-prose="" className={'message-header'}>
            {'Javascript toggle'}
          </h4>
          {'\n  '}
          <div data-official-prose="" className={'message-body'}>
            {'\n    '}
            <div data-official-prose="" className={'content'}>
              {'\n      '}
              <p data-official-prose="">
                {'\n        The Bulma package '}
                <strong data-official-prose="">
                  {'does not come with any JavaScript'}
                </strong>
                {'.\n        '}
                <br data-official-prose="" />
                {
                  '\n        Here is however an implementation example, which toggles the class '
                }
                <code data-official-prose="">{'is-active'}</code>
                {' on both the '}
                <code data-official-prose="">{'navbar-burger'}</code>
                {' and the targeted '}
                <code data-official-prose="">{'navbar-menu'}</code>
                {', in Vanilla Javascript.\n      '}
              </p>
              {'\n\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n</a>\n\n<div class="navbar-menu" id="navMenu">\n  <!-- navbar-start, navbar-end... -->\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code
                    data-official-prose=""
                    className={'language-javascript'}
                  >
                    {
                      '\ndocument.addEventListener(\'DOMContentLoaded\', () => {\n\n  // Get all "navbar-burger" elements\n  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(\'.navbar-burger\'), 0);\n\n  // Add a click event on each of them\n  $navbarBurgers.forEach( el => {\n    el.addEventListener(\'click\', () => {\n\n      // Get the target from the "data-target" attribute\n      const target = el.dataset.target;\n      const $target = document.getElementById(target);\n\n      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"\n      el.classList.toggle(\'is-active\');\n      $target.classList.toggle(\'is-active\');\n\n    });\n  });\n\n});\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n\n      '}
              <p data-official-prose="">
                {
                  '\n        And here is another implementation example, which again toggles the class '
                }
                <code data-official-prose="">{'is-active'}</code>
                {' on both the '}
                <code data-official-prose="">{'navbar-burger'}</code>
                {' and the targeted '}
                <code data-official-prose="">{'navbar-menu'}</code>
                {', but this time in jQuery.\n      '}
              </p>
              {'\n\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code
                    data-official-prose=""
                    className={'language-javascript'}
                  >
                    {
                      '\n$(document).ready(function() {\n\n  // Check for click events on the navbar burger icon\n  $(".navbar-burger").click(function() {\n\n      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"\n      $(".navbar-burger").toggleClass("is-active");\n      $(".navbar-menu").toggleClass("is-active");\n\n  });\n});\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n\n      '}
              <p data-official-prose="">
                {
                  '\n        Remember, these are just implementation examples. The Bulma package '
                }
                <strong data-official-prose="">
                  {'does not come with any JavaScript'}
                </strong>
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
          id={'navbar-start-and-navbar-end'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Navbar start and navbar end\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-start-and-navbar-end'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar-start'}</code>
            {' and '}
            <code data-official-prose="">{'navbar-end'}</code>
            {' are the two direct and only children of the '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {'.\n  '}
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    On desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {'\n:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-start'}</code>
              {' will appear on the '}
              <strong data-official-prose="">{'left'}</strong>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-end'}</code>
              {' will appear on the '}
              <strong data-official-prose="">{'right'}</strong>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    Each of them can contain any number of '}
            <code data-official-prose="">{'navbar-item'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-menu">\n  <div class="navbar-start">\n    <!-- navbar items -->\n  </div>\n\n  <div class="navbar-end">\n    <!-- navbar items -->\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'navbar-item'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Navbar item\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-item'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    A '}
            <code data-official-prose="">{'navbar-item'}</code>
            {' is a repeatable element that can be:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="" className={'bd-spaced'}>
            {'\n    '}
            <li data-official-prose="">
              {'\n      a navigation '}
              <strong data-official-prose="">{'link'}</strong>
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {'\n<a class="navbar-item">\n  Home\n</a>\n'}
                  </code>
                </pre>
              </div>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      a container for the '}
              <strong data-official-prose="">{'brand logo'}</strong>
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<a class="navbar-item">\n  <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n</a>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the '}
              <strong data-official-prose="">{'parent'}</strong>
              {' of a dropdown menu\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="navbar-item has-dropdown">\n  <a class="navbar-link">\n    Docs\n  </a>\n\n  <div class="navbar-dropdown">\n    <!-- Other navbar items -->\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      a child of a '}
              <strong data-official-prose="">{'navbar dropdown'}</strong>
              {'\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="navbar-dropdown">\n  <a class="navbar-item">\n    Overview\n  </a>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      a container for almost '}
              <strong data-official-prose="">{'anything'}</strong>
              {' you want, like a '}
              <code data-official-prose="">{'field'}</code>
              {'\n      '}
              <div data-official-prose="" className={'bd-highlight-full'}>
                {'\n        '}
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<div class="navbar-item">\n  <div class="field is-grouped">\n    <p class="control">\n      <a class="button">\n        <span class="icon">\n          <i class="fas fa-twitter" aria-hidden="true"></i>\n        </span>\n        <span>Tweet</span>\n      </a>\n    </p>\n    <p class="control">\n      <a class="button is-primary">\n        <span class="icon">\n          <i class="fas fa-download" aria-hidden="true"></i>\n        </span>\n        <span>Download</span>\n      </a>\n    </p>\n  </div>\n</div>\n'
                      }
                    </code>
                  </pre>
                </div>
                {'\n      '}
              </div>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    It can either be an anchor tag '}
            <code data-official-prose="">{'<a>'}</code>
            {' or a '}
            <code data-official-prose="">{'<div>'}</code>
            {', as a '}
            <strong data-official-prose="">{'direct child'}</strong>
            {' of either:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-brand'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-start'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-end'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-dropdown'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can add the following '}
            <strong data-official-prose="">{'modifier'}</strong>
            {' classes:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-expanded'}</code>
              {' to turn it into a full-width element\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-tab'}</code>
              {
                ' to add a bottom border on hover and show the bottom border using '
              }
              <code data-official-prose="">{'is-active'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'transparent-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Transparent navbar\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#transparent-navbar'}
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
              '\n    To seamlessly integrate the navbar in any visual context, you can add the '
            }
            <code data-official-prose="">{'is-transparent'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'navbar'}</code>
            {
              ' component. This will remove any hover or active background from the navbar items.\n  '
            }
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        {'\n  \n    '}
        {'\n      '}
        {'\n\n      '}
        <div data-official-example="components-navbar/transparent-navbar/001">
          <Canvas of={Example005} />
        </div>
        {'\n    '}
        {'\n  \n\n  '}
        {'\n'}
        {'\n\n\n'}
        <h3
          data-official-prose=""
          id={'fixed-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Fixed navbar\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fixed-navbar'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can now '}
            <strong data-official-prose="">{'fix'}</strong>
            {' the navbar to either the '}
            <strong data-official-prose="">{'top'}</strong>
            {' or '}
            <strong data-official-prose="">{'bottom'}</strong>
            {' of the page. This is a 2-step process:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="" className={'bd-spaced'}>
            {'\n    '}
            <li data-official-prose="">
              {'\n      Add either '}
              <code data-official-prose="">{'is-fixed-top'}</code>
              {' or '}
              <code data-official-prose="">{'is-fixed-bottom'}</code>
              {' to the '}
              <code data-official-prose="">{'navbar'}</code>
              {' component\n      '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {'<nav class="navbar is-fixed-top">'}
                  </code>
                </pre>
              </div>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      Add the corresponding '}
              <code data-official-prose="">{'has-navbar-fixed-top'}</code>
              {' or '}
              <code data-official-prose="">{'has-navbar-fixed-bottom'}</code>
              {' modifier to either '}
              <code data-official-prose="">{'<html>'}</code>
              {' or '}
              <code data-official-prose="">{'<body>'}</code>
              {
                ' element to provide the appropriate padding to the page\n      '
              }
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {'<html class="has-navbar-fixed-top">'}
                  </code>
                </pre>
              </div>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-5'}>
          {'Try it out!'}
        </h4>
        {'\n\n'}
        <div data-official-example="components-navbar/try-it-out/001">
          <Canvas of={Example006} />
        </div>
        {'\n\n'}
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'dropdown-menu'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Dropdown menu\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#dropdown-menu'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    To create a '}
            <strong data-official-prose="">{'dropdown menu'}</strong>
            {', you will need '}
            <strong data-official-prose="">{'4'}</strong>
            {' elements:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-item'}</code>
              {' with the '}
              <code data-official-prose="">{'has-dropdown'}</code>
              {' modifier\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-link'}</code>
              {' which contains the dropdown arrow\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'navbar-dropdown'}</code>
              {' which can contain instances of '}
              <code data-official-prose="">{'navbar-item'}</code>
              {' and '}
              <code data-official-prose="">{'navbar-divider'}</code>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/dropdown-menu/001">
          <Canvas of={Example007} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-4'}>
          {'\n  Show/hide the dropdown with either '}
          <strong data-official-prose="">{'CSS'}</strong>
          {' or '}
          <strong data-official-prose="">{'JavaScript'}</strong>
          {'\n'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar-dropdown'}</code>
            {' is visible on touch devices '}
            <code data-official-prose="">{'< 1024px'}</code>
            {'\n but hidden on desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {'\n. '}
            <em data-official-prose="">{'How'}</em>
            {
              " the dropdown is displayed on desktop depends on the parent's class.\n  "
            }
          </p>
          {'\n  '}
          <p data-official-prose="">
            {'\n    The '}
            <code data-official-prose="">{'navbar-item'}</code>
            {' with the '}
            <code data-official-prose="">{'has-dropdown'}</code>
            {' modifier, has '}
            <strong data-official-prose="">{'2 additional modifiers'}</strong>
            {'\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-hoverable'}</code>
              {': the dropdown will show up when '}
              <strong data-official-prose="">{'hovering'}</strong>
              {' the parent '}
              <code data-official-prose="">{'navbar-item'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      '}
              <code data-official-prose="">{'is-active'}</code>
              {': the dropdown will show up '}
              <strong data-official-prose="">{'all the time'}</strong>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'message is-success'}>
          {'\n  '}
          <p data-official-prose="" className={'message-body'}>
            {'\n    While the CSS '}
            <code data-official-prose="">{':hover'}</code>
            {' implementation works perfectly, the '}
            <code data-official-prose="">{'is-active'}</code>
            {
              ' class is available for users who want to control the display of the dropdown with '
            }
            <strong data-official-prose="">{'JavaScript'}</strong>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown is-hoverable">\n  <!-- navbar-link, navbar-dropdown etc. -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/001">
          <Canvas of={Example008} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown is-active">\n  <!-- navbar-link, navbar-dropdown etc. -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/002">
          <Canvas of={Example009} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-4'}>
          {'\n  Right dropdown\n'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    If your parent '}
            <code data-official-prose="">{'navbar-item'}</code>
            {
              ' is on the right side, you can position the dropdown to start from the '
            }
            <strong data-official-prose="">{'right'}</strong>
            {' with the '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifier.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-dropdown is-right">\n  <!-- navbar-item, navbar-divider etc. -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/right-dropdown/001">
          <Canvas of={Example010} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-4'}>
          {'\n  Dropup\n'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {"\n    If you're using a navbar at the bottom, like the "}
            <a data-official-prose="" href={'#fixed-navbar'}>
              {'fixed bottom navbar'}
            </a>
            {', you might want to use a '}
            <strong data-official-prose="">{'dropup menu'}</strong>
            {'. Simply add the '}
            <code data-official-prose="">{'has-dropdown'}</code>
            {' and '}
            <code data-official-prose="">{'has-dropdown-up'}</code>
            {' modifiers to the parent '}
            <code data-official-prose="">{'navbar-item'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown has-dropdown-up is-hoverable">\n  <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">\n    Docs\n  </a>\n  <div class="navbar-dropdown">\n    <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">\n      Overview\n    </a>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/dropup/001">
          <Canvas of={Example011} />
        </div>
        {'\n\n\n\n\n\n\n'}
        <h4 data-official-prose="" className={'title is-4'}>
          {'\n  Dropdown without arrow\n'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {
              '\n    You can remove the arrow in the items of the navbar by adding the '
            }
            <code data-official-prose="">{'is-arrowless'}</code>
            {' modifier to them.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown is-hoverable">\n  <a class="navbar-link is-arrowless">\n    Docs\n  </a>\n  <!-- navbar-dropdowns -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n\n\n'}
        <div data-official-example="components-navbar/dropdown-without-arrow/001">
          <Canvas of={Example012} />
        </div>
        {'\n\n\n\n\n'}
        <h4 data-official-prose="" className={'title is-4'}>
          {'\n  Styles for the dropdown menu\n'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    By default, the '}
            <code data-official-prose="">{'navbar-dropdown'}</code>
            {' has:\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      a grey '}
              <code data-official-prose="">{'border-top'}</code>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      a '}
              <code data-official-prose="">{'border-radius'}</code>
              {' at both bottom corners\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/styles-for-the-dropdown-menu/001">
          <Canvas of={Example013} />
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    When having a '}
            <a data-official-prose="" href={'#transparent-navbar'}>
              {'transparent navbar'}
            </a>
            {
              ', it is preferable to use the boxed version of the dropdown, by using the '
            }
            <code data-official-prose="">{'is-boxed'}</code>
            {' modifier.\n  '}
          </p>
          {'\n  '}
          <ul data-official-prose="">
            {'\n    '}
            <li data-official-prose="">
              {'\n      the grey border is '}
              <strong data-official-prose="">{'removed'}</strong>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      a slight '}
              <strong data-official-prose="">{'inner shadow'}</strong>
              {' is added\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      all corners are '}
              <strong data-official-prose="">{'rounded'}</strong>
              {'\n    '}
            </li>
            {'\n    '}
            <li data-official-prose="">
              {'\n      the hover/active state is '}
              <strong data-official-prose="">{'animated'}</strong>
              {'\n    '}
            </li>
            {'\n  '}
          </ul>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/styles-for-the-dropdown-menu/002">
          <Canvas of={Example014} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-4'}>
          {'\n  Active dropdown navbar item\n'}
        </h4>
        {'\n\n'}
        <div data-official-example="components-navbar/active-dropdown-navbar-item/001">
          <Canvas of={Example015} />
        </div>
        {'\n\n'}
        <h4 data-official-prose="" className={'title is-4'}>
          {'\n  Dropdown divider\n'}
        </h4>
        {'\n\n'}
        <div data-official-prose="" className={'content'}>
          {'\n  '}
          <p data-official-prose="">
            {'\n    You can add a '}
            <code data-official-prose="">{'navbar-divider'}</code>
            {' to display a '}
            <strong data-official-prose="">{'horizontal rule'}</strong>
            {' in a '}
            <code data-official-prose="">{'navbar-dropdown'}</code>
            {'.\n  '}
          </p>
          {'\n'}
        </div>
        {'\n\n'}
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {'\n<hr class="navbar-divider">\n'}
            </code>
          </pre>
        </div>
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
            {'\n    You can change the background color of the '}
            <code data-official-prose="">{'navbar'}</code>
            {' by using one of the '}
            <strong data-official-prose="">{'9 color modifiers:'}</strong>
            {'\n  '}
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
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar is-primary">\n  <!-- navbar brand, navbar menu... -->\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/001">
          <Canvas of={Example016} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/002">
          <Canvas of={Example017} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/003">
          <Canvas of={Example018} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/004">
          <Canvas of={Example019} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/005">
          <Canvas of={Example020} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/006">
          <Canvas of={Example021} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/007">
          <Canvas of={Example022} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/008">
          <Canvas of={Example023} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/009">
          <Canvas of={Example024} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/010">
          <Canvas of={Example025} />
        </div>
        {'\n\n'}
        <div data-official-example="components-navbar/colors/011">
          <Canvas of={Example026} />
        </div>
        {'\n\n'}
        <h3
          data-official-prose=""
          id={'navbar-helper-classes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          {'\n  '}
          <span data-official-prose="" className={'bd-anchor-name'}>
            {'\n    Navbar Helper Classes\n  '}
          </span>
          {'\n  '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-helper-classes'}
          >
            {'\n    #\n  '}
          </a>
          {'\n  \n'}
        </h3>
        {'\n\n\n'}
        <table data-official-prose="" className={'table is-bordered'}>
          {'\n  '}
          <tbody data-official-prose="">
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="">{'Type'}</th>
              {'\n      '}
              <th data-official-prose="">{'Name'}</th>
              {'\n      '}
              <th data-official-prose="">{'Description'}</th>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="" rowSpan={1}>
                {'Spacing'}
              </th>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'is-spaced'}</code>
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'Sets '}
                <strong data-official-prose="">{'Top'}</strong>
                {' and '}
                <strong data-official-prose="">{'Bottom'}</strong>
                {' paddings with '}
                <strong data-official-prose="">{'1rem'}</strong>
                {',\n          '}
                <br data-official-prose="" />{' '}
                <strong data-official-prose="">{'Left'}</strong>
                {' and '}
                <strong data-official-prose="">{'Right'}</strong>
                {' paddings with '}
                <strong data-official-prose="">{'2rem'}</strong>
                {'\n      '}
              </td>
              {'\n    '}
            </tr>
            {'\n    '}
            <tr data-official-prose="">
              {'\n      '}
              <th data-official-prose="" rowSpan={1}>
                {'Shading'}
              </th>
              {'\n      '}
              <td data-official-prose="">
                <code data-official-prose="">{'has-shadow'}</code>
              </td>
              {'\n      '}
              <td data-official-prose="">
                {'Adds a small amount of box-shadow around the navbar'}
              </td>
              {'\n    '}
            </tr>
            {'\n  '}
          </tbody>
          {'\n'}
        </table>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n'}
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
                        {'$navbar-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-background-color)'}
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
                        {'$navbar-box-shadow-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-box-shadow-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 0.125em 0 0'}
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
                        {'$navbar-box-shadow-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-box-shadow-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-background)'}
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
                        {'$navbar-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'3.25rem'}
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
                        {'$navbar-padding-vertical'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-padding-vertical)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1rem'}
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
                        {'$navbar-padding-horizontal'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-padding-horizontal)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'2rem'}
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
                        {'$navbar-z'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-z)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'30'}
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
                        {'$navbar-fixed-z'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-fixed-z)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'30'}
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
                        {'$navbar-item-img-max-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-item-img-max-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'1.75rem'}
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
                        {'$navbar-burger-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-burger-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-item-color)'}
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
                        {'$navbar-tab-hover-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-tab-hover-background-color)'}
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
                        {'$navbar-tab-hover-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-tab-hover-border-bottom-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link)'}
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
                        {'$navbar-tab-active-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-tab-active-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link)'}
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
                        {'$navbar-tab-active-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-tab-active-background-color)'}
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
                        {'$navbar-tab-active-border-bottom-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-tab-active-border-bottom-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link)'}
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
                        {'$navbar-tab-active-border-bottom-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-tab-active-border-bottom-style)'}
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
                        {'$navbar-tab-active-border-bottom-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-tab-active-border-bottom-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.1875em'}
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
                        {'$navbar-dropdown-background-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-background-color)'}
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
                        {'$navbar-dropdown-border-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-border-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-border-l)'}
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
                        {'$navbar-dropdown-border-color'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-border-color)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          'hsl(\n  var(--bulma-navbar-h),\n  var(--bulma-navbar-s),\n  var(--bulma-navbar-dropdown-border-l)\n)'
                        }
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
                        {'$navbar-dropdown-border-style'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-border-style)'}
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
                        {'$navbar-dropdown-border-width'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-border-width)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.125em'}
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
                        {'$navbar-dropdown-offset'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-offset)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'-0.25em'}
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
                        {'$navbar-dropdown-arrow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-arrow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-link)'}
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
                        {'$navbar-dropdown-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-large)'}
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
                        {'$navbar-dropdown-z'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-z)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'20'}
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
                        {'$navbar-dropdown-boxed-radius'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-boxed-radius)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-radius-large)'}
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
                        {'$navbar-dropdown-boxed-shadow'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-dropdown-boxed-shadow)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {
                          '0 0.5em 0.5em hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.1\n),\n0 0 0 1px hsla(\n  var(--bulma-scheme-h),\n  var(--bulma-scheme-s),\n  var(--bulma-scheme-invert-l),\n  0.1\n)'
                        }
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
                        {'$navbar-divider-background-l'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-divider-background-l)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-background-l)'}
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
                        {'$navbar-divider-height'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-divider-height)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0.125em'}
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
                        {'$navbar-bottom-box-shadow-size'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n            '}
                <td data-official-prose="" className={'bd-theme-code'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'var(--bulma-navbar-bottom-box-shadow-size)'}
                      </code>
                    </pre>
                  </div>
                </td>
                {'\n          \n          '}
                <td data-official-prose="" className={'bd-theme-docs'}>
                  <div data-official-prose="" className={'highlight'}>
                    <pre data-official-prose="">
                      <code data-official-prose="" className={'language-css'}>
                        {'0 -0.125em 0 0'}
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
        {'\n\n\n'}
      </div>
    </OfficialDocument>
  )
}

function Example001Demo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        {'\n  \n'}
        <ui.Navbar role={'navigation'} aria-label={'main navigation'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'black'}
                  className={'bd-svg-black'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'#00D1B2'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n\n    '}
            <ui.NavbarBurger
              role={'button'}
              aria-label={'menu'}
              aria-expanded={'false'}
              data-target={'navbarBasicExample'}
              as={'a'}
            >
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navbarBasicExample'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem>{'\n        Home\n      '}</ui.NavbarItem>
              {'\n\n      '}
              <ui.NavbarItem>{'\n        Documentation\n      '}</ui.NavbarItem>
              {'\n\n      '}
              <ui.NavbarDropdown
                hoverable
                as={'div'}
                trigger={<>{'\n          More\n        '}</>}
              >
                {'\n          '}
                <ui.NavbarItem>
                  {'\n            About\n          '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem className={'rb-is-selected'}>
                  {'\n            Jobs\n          '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem>
                  {'\n            Contact\n          '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem>
                  {'\n            Report an issue\n          '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Buttons>
                  {'\n          '}
                  <ui.LinkButton color={'primary'}>
                    {'\n            '}
                    <strong>{'Sign up'}</strong>
                    {'\n          '}
                  </ui.LinkButton>
                  {'\n          '}
                  <ui.LinkButton color={'light'}>
                    {'\n            Log in\n          '}
                  </ui.LinkButton>
                  {'\n        '}
                </ui.Buttons>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example002Demo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        {'\n  \n'}
        <ui.Navbar role={'navigation'} aria-label={'main navigation'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'black'}
                  className={'bd-svg-black'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'#00D1B2'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n\n    '}
            <ui.NavbarBurger
              role={'button'}
              aria-label={'menu'}
              aria-expanded={'false'}
              as={'a'}
            >
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n      '}
              <span aria-hidden={'true'} />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example003Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <div
            style={{ ...{ marginBottom: '1.5rem', width: '2.5rem' } }}
            className={'example rb-is-paddingless'}
          >
            {'\n      '}
            <ui.NavbarBurger
              role={'button'}
              aria-label={'menu'}
              aria-expanded={'false'}
              style={{ ...{ display: 'flex' } }}
              as={'a'}
            >
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n      '}
            </ui.NavbarBurger>
            {'\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n</a>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example004Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column width={'one-quarter'}>
          {'\n    '}
          <div
            style={{ ...{ width: '2.5rem' } }}
            className={'example rb-is-paddingless'}
          >
            {'\n      '}
            <ui.NavbarBurger
              role={'button'}
              aria-label={'menu'}
              aria-expanded={'false'}
              style={{ ...{ display: 'flex' } }}
              defaultExpanded
              as={'a'}
            >
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n        '}
              <span aria-hidden={'true'} />
              {'\n      '}
            </ui.NavbarBurger>
            {'\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<a class="navbar-burger is-active" role="button" aria-label="menu" aria-expanded="false">\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n</a>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example005Demo() {
  return (
    <>
      {'\n        \n          \n'}
      <ui.Navbar transparent>
        {'\n  '}
        <ui.NavbarBrand>
          {'\n    '}
          <ui.NavbarItem href={'https://bulma.io/'}>
            {'\n      '}
            <svg
              width={'640'}
              height={'160'}
              viewBox={'0 0 640 160'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              {'\n  '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={
                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                }
                fill={'black'}
                className={'bd-svg-black'}
              />
              {'\n  '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                fill={'#00D1B2'}
              />
              {'\n'}
            </svg>
            {'\n\n    '}
          </ui.NavbarItem>
          {'\n    '}
          <ui.NavbarBurger
            data-target={'navbarExampleTransparentExample'}
            className={'js-burger'}
            as={'div'}
          >
            {'\n      '}
            <span />
            {'\n      '}
            <span />
            {'\n      '}
            <span />
            {'\n      '}
            <span />
            {'\n    '}
          </ui.NavbarBurger>
          {'\n  '}
        </ui.NavbarBrand>
        {'\n\n  '}
        <ui.NavbarMenu id={'navbarExampleTransparentExample'}>
          {'\n    '}
          <ui.NavbarStart>
            {'\n      '}
            <ui.NavbarItem href={'https://bulma.io/'}>{' Home '}</ui.NavbarItem>
            {'\n      '}
            <ui.NavbarDropdown
              defaultOpen
              boxed
              as={'div'}
              trigger={<>{' Docs '}</>}
              triggerProps={{
                href: 'https://bulma.io/documentation/overview/start/',
              }}
            >
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/overview/start/'}
              >
                {' Overview '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/overview/modifiers/'}
              >
                {' Modifiers '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarDivider />
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/columns/basics/'}
              >
                {' Columns '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/layout/container/'}
                className={'rb-is-selected'}
              >
                {' Layout '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/form/general/'}
              >
                {' Form '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/elements/box/'}
              >
                {' Elements '}
              </ui.NavbarItem>
              {'\n          '}
              <ui.NavbarItem
                href={'https://bulma.io/documentation/components/breadcrumb/'}
              >
                {' Components '}
              </ui.NavbarItem>
              {'\n        '}
            </ui.NavbarDropdown>
            {'\n    '}
          </ui.NavbarStart>
          {'\n\n    '}
          <ui.NavbarEnd>
            {'\n      '}
            <ui.NavbarItem as={'div'}>
              {'\n        '}
              <ui.Field layout={'grouped'}>
                {'\n          '}
                <ui.Control as={'p'}>
                  {'\n            '}
                  <ui.LinkButton
                    data-social-network={'Twitter'}
                    data-social-action={'tweet'}
                    data-social-target={'https://bulma.io'}
                    target={'_blank'}
                    href={
                      'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                    }
                    className={'bd-tw-button'}
                  >
                    {'\n              '}
                    <ui.Icon>
                      {'\n                '}
                      <i className={'fab fa-twitter'} />
                      {'\n              '}
                    </ui.Icon>
                    {'\n              '}
                    <span>{' Tweet '}</span>
                    {'\n            '}
                  </ui.LinkButton>
                  {'\n          '}
                </ui.Control>
                {'\n          '}
                <ui.Control as={'p'}>
                  {'\n            '}
                  <ui.LinkButton
                    href={
                      'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                    }
                    color={'primary'}
                  >
                    {'\n              '}
                    <ui.Icon>
                      {'\n                '}
                      <i className={'fas fa-download'} />
                      {'\n              '}
                    </ui.Icon>
                    {'\n              '}
                    <span>{'Download'}</span>
                    {'\n            '}
                  </ui.LinkButton>
                  {'\n          '}
                </ui.Control>
                {'\n        '}
              </ui.Field>
              {'\n      '}
            </ui.NavbarItem>
            {'\n    '}
          </ui.NavbarEnd>
          {'\n  '}
        </ui.NavbarMenu>
        {'\n'}
      </ui.Navbar>
      {'\n\n\n        \n      '}
    </>
  )
}

function Example006Demo() {
  return (
    <>
      <ui.Buttons id={'navbarToggles'}>
        {'\n  '}
        <ui.LinkButton id={'navbarFixBottom'} color={'link'}>
          {'\n    '}
          <span>
            <span id={'navbarFixBottomText'}>{'Show'}</span>{' '}
            <strong>{'bottom'}</strong>
            {' navbar'}
          </span>
          {'\n  '}
        </ui.LinkButton>
        {'\n'}
      </ui.Buttons>
    </>
  )
}

function Example007Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Navbar role={'navigation'} aria-label={'dropdown navigation'}>
              {'\n  '}
              <ui.NavbarDropdown
                as={'div'}
                trigger={<>{'\n      Docs\n    '}</>}
              >
                {'\n      '}
                <ui.NavbarItem>{'\n        Overview\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Elements\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Components\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarDivider />
                {'\n      '}
                <ui.NavbarItem as={'div'}>
                  {'\n        Version 1.0.4\n      '}
                </ui.NavbarItem>
                {'\n    '}
              </ui.NavbarDropdown>
              {'\n'}
            </ui.Navbar>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-item has-dropdown">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example008Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Navbar role={'navigation'} aria-label={'dropdown navigation'}>
              {'\n  '}
              <ui.NavbarDropdown
                hoverable
                as={'div'}
                trigger={<>{'\n      Docs\n    '}</>}
              >
                {'\n      '}
                <ui.NavbarItem>{'\n        Overview\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Elements\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Components\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarDivider />
                {'\n      '}
                <ui.NavbarItem as={'div'}>
                  {'\n        Version 1.0.4\n      '}
                </ui.NavbarItem>
                {'\n    '}
              </ui.NavbarDropdown>
              {'\n'}
            </ui.Navbar>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-item has-dropdown is-hoverable">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example009Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Navbar role={'navigation'} aria-label={'dropdown navigation'}>
              {'\n  '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{'\n      Docs\n    '}</>}
              >
                {'\n      '}
                <ui.NavbarItem>{'\n        Overview\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Elements\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Components\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarDivider />
                {'\n      '}
                <ui.NavbarItem as={'div'}>
                  {'\n        Version 1.0.4\n      '}
                </ui.NavbarItem>
                {'\n    '}
              </ui.NavbarDropdown>
              {'\n'}
            </ui.Navbar>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example010Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Navbar role={'navigation'} aria-label={'dropdown navigation'}>
              {'\n  '}
              <ui.NavbarMenu>
                {'\n    '}
                <ui.NavbarStart>
                  {'\n      '}
                  <ui.NavbarDropdown
                    defaultOpen
                    as={'div'}
                    trigger={<>{'\n          Left\n        '}</>}
                  >
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Overview\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Elements\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Components\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarDivider />
                    {'\n          '}
                    <ui.NavbarItem as={'div'}>
                      {'\n            Version 1.0.4\n          '}
                    </ui.NavbarItem>
                    {'\n        '}
                  </ui.NavbarDropdown>
                  {'\n    '}
                </ui.NavbarStart>
                {'\n\n    '}
                <ui.NavbarEnd>
                  {'\n      '}
                  <ui.NavbarDropdown
                    defaultOpen
                    right
                    as={'div'}
                    trigger={<>{'\n          Right\n        '}</>}
                  >
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Overview\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Elements\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Components\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarDivider />
                    {'\n          '}
                    <ui.NavbarItem as={'div'}>
                      {'\n            Version 1.0.4\n          '}
                    </ui.NavbarItem>
                    {'\n        '}
                  </ui.NavbarDropdown>
                  {'\n    '}
                </ui.NavbarEnd>
                {'\n  '}
              </ui.NavbarMenu>
              {'\n'}
            </ui.Navbar>
            {'\n\n'}
            <ui.Hero color={'primary'}>
              {'\n  '}
              <ui.HeroBody>
                {'\n    '}
                <ui.Title as={'p'}>{'\n      Documentation\n    '}</ui.Title>
                {'\n    '}
                <ui.Subtitle as={'p'}>
                  {'\n      Everything you need to '}
                  <strong>{'create a website'}</strong>
                  {' with Bulma\n    '}
                </ui.Subtitle>
                {'\n  '}
              </ui.HeroBody>
              {'\n'}
            </ui.Hero>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-menu">\n    <div class="navbar-start">\n      <div class="navbar-item has-dropdown is-active">\n        <a class="navbar-link">\n          Left\n        </a>\n\n        <div class="navbar-dropdown">\n          <a class="navbar-item">\n            Overview\n          </a>\n          <a class="navbar-item">\n            Elements\n          </a>\n          <a class="navbar-item">\n            Components\n          </a>\n          <hr class="navbar-divider">\n          <div class="navbar-item">\n            Version 1.0.4\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="navbar-end">\n      <div class="navbar-item has-dropdown is-active">\n        <a class="navbar-link">\n          Right\n        </a>\n\n        <div class="navbar-dropdown is-right">\n          <a class="navbar-item">\n            Overview\n          </a>\n          <a class="navbar-item">\n            Elements\n          </a>\n          <a class="navbar-item">\n            Components\n          </a>\n          <hr class="navbar-divider">\n          <div class="navbar-item">\n            Version 1.0.4\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example011Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Hero color={'primary'}>
              {'\n  '}
              <ui.HeroBody>
                {'\n    '}
                <ui.Title as={'p'}>{'\n      Documentation\n    '}</ui.Title>
                {'\n    '}
                <ui.Subtitle as={'p'}>
                  {'\n      Everything you need to '}
                  <strong>{'create a website'}</strong>
                  {' with Bulma\n    '}
                </ui.Subtitle>
                {'\n  '}
              </ui.HeroBody>
              {'\n'}
            </ui.Hero>
            {'\n\n'}
            <ui.Navbar role={'navigation'} aria-label={'dropdown navigation'}>
              {'\n  '}
              <ui.NavbarMenu>
                {'\n    '}
                <ui.NavbarStart>
                  {'\n      '}
                  <ui.NavbarDropdown
                    up
                    defaultOpen
                    as={'div'}
                    trigger={<>{'\n          Dropup\n        '}</>}
                  >
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Overview\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Elements\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarItem>
                      {'\n            Components\n          '}
                    </ui.NavbarItem>
                    {'\n          '}
                    <ui.NavbarDivider />
                    {'\n          '}
                    <ui.NavbarItem as={'div'}>
                      {'\n            Version 1.0.4\n          '}
                    </ui.NavbarItem>
                    {'\n        '}
                  </ui.NavbarDropdown>
                  {'\n    '}
                </ui.NavbarStart>
                {'\n  '}
              </ui.NavbarMenu>
              {'\n'}
            </ui.Navbar>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-menu">\n    <div class="navbar-start">\n      <div class="navbar-item has-dropdown has-dropdown-up is-active">\n        <a class="navbar-link">\n          Dropup\n        </a>\n\n        <div class="navbar-dropdown">\n          <a class="navbar-item">\n            Overview\n          </a>\n          <a class="navbar-item">\n            Elements\n          </a>\n          <a class="navbar-item">\n            Components\n          </a>\n          <hr class="navbar-divider">\n          <div class="navbar-item">\n            Version 1.0.4\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example012Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.NavbarDropdown
              hoverable
              as={'div'}
              trigger={<>{'\n    Link without arrow\n  '}</>}
              arrowless
            >
              {'\n    '}
              <ui.NavbarItem>{'\n      Overview\n    '}</ui.NavbarItem>
              {'\n    '}
              <ui.NavbarItem>{'\n      Elements\n    '}</ui.NavbarItem>
              {'\n    '}
              <ui.NavbarItem>{'\n      Components\n    '}</ui.NavbarItem>
              {'\n    '}
              <ui.NavbarDivider />
              {'\n    '}
              <ui.NavbarItem as={'div'}>
                {'\n      Version 1.0.4\n    '}
              </ui.NavbarItem>
              {'\n  '}
            </ui.NavbarDropdown>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<div class="navbar-item has-dropdown is-hoverable">\n  <a class="navbar-link is-arrowless">\n    Link without arrow\n  </a>\n  <div class="navbar-dropdown">\n    <a class="navbar-item">\n      Overview\n    </a>\n    <a class="navbar-item">\n      Elements\n    </a>\n    <a class="navbar-item">\n      Components\n    </a>\n    <hr class="navbar-divider">\n    <div class="navbar-item">\n      Version 1.0.4\n    </div>\n  </div>\n</div>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example013Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Navbar role={'navigation'} aria-label={'dropdown navigation'}>
              {'\n  '}
              <ui.NavbarItem>
                {'\n    '}
                <svg
                  width={'640'}
                  height={'160'}
                  viewBox={'0 0 640 160'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  {'\n  '}
                  <path
                    fillRule={'evenodd'}
                    clipRule={'evenodd'}
                    d={
                      'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                    }
                    fill={'black'}
                    className={'bd-svg-black'}
                  />
                  {'\n  '}
                  <path
                    fillRule={'evenodd'}
                    clipRule={'evenodd'}
                    d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                    fill={'#00D1B2'}
                  />
                  {'\n'}
                </svg>
                {'\n\n  '}
              </ui.NavbarItem>
              {'\n\n  '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{'\n      Docs\n    '}</>}
              >
                {'\n      '}
                <ui.NavbarItem>{'\n        Overview\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Elements\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Components\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarDivider />
                {'\n      '}
                <ui.NavbarItem as={'div'}>
                  {'\n        Version 1.0.4\n      '}
                </ui.NavbarItem>
                {'\n    '}
              </ui.NavbarDropdown>
              {'\n'}
            </ui.Navbar>
            {'\n\n'}
            <ui.Hero color={'primary'}>
              {'\n  '}
              <ui.HeroBody>
                {'\n    '}
                <ui.Title as={'p'}>{'\n      Documentation\n    '}</ui.Title>
                {'\n    '}
                <ui.Subtitle as={'p'}>
                  {'\n      Everything you need to '}
                  <strong>{'create a website'}</strong>
                  {' with Bulma\n    '}
                </ui.Subtitle>
                {'\n  '}
              </ui.HeroBody>
              {'\n'}
            </ui.Hero>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <a class="navbar-item">\n    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n  </a>\n\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example014Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Navbar
              role={'navigation'}
              aria-label={'dropdown navigation'}
              transparent
            >
              {'\n  '}
              <ui.NavbarItem>
                {'\n    '}
                <svg
                  width={'640'}
                  height={'160'}
                  viewBox={'0 0 640 160'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  {'\n  '}
                  <path
                    fillRule={'evenodd'}
                    clipRule={'evenodd'}
                    d={
                      'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                    }
                    fill={'black'}
                    className={'bd-svg-black'}
                  />
                  {'\n  '}
                  <path
                    fillRule={'evenodd'}
                    clipRule={'evenodd'}
                    d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                    fill={'#00D1B2'}
                  />
                  {'\n'}
                </svg>
                {'\n\n  '}
              </ui.NavbarItem>
              {'\n\n  '}
              <ui.NavbarDropdown
                defaultOpen
                boxed
                as={'div'}
                trigger={<>{'\n      Docs\n    '}</>}
              >
                {'\n      '}
                <ui.NavbarItem>{'\n        Overview\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Elements\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Components\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarDivider />
                {'\n      '}
                <ui.NavbarItem as={'div'}>
                  {'\n        Version 1.0.4\n      '}
                </ui.NavbarItem>
                {'\n    '}
              </ui.NavbarDropdown>
              {'\n'}
            </ui.Navbar>
            {'\n\n'}
            <ui.Hero>
              {'\n  '}
              <ui.HeroBody>
                {'\n    '}
                <ui.Title as={'p'}>{'\n      Documentation\n    '}</ui.Title>
                {'\n    '}
                <ui.Subtitle as={'p'}>
                  {'\n      Everything you need to '}
                  <strong>{'create a website'}</strong>
                  {' with Bulma\n    '}
                </ui.Subtitle>
                {'\n  '}
              </ui.HeroBody>
              {'\n'}
            </ui.Hero>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">\n  <a class="navbar-item">\n    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n  </a>\n\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown is-boxed">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example015Demo() {
  return (
    <>
      <ui.Columns>
        {'\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'bd-example is-paddingless'}>
            {'\n      \n'}
            <ui.Navbar role={'navigation'} aria-label={'dropdown navigation'}>
              {'\n  '}
              <ui.NavbarItem>
                {'\n    '}
                <svg
                  width={'640'}
                  height={'160'}
                  viewBox={'0 0 640 160'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  {'\n  '}
                  <path
                    fillRule={'evenodd'}
                    clipRule={'evenodd'}
                    d={
                      'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                    }
                    fill={'black'}
                    className={'bd-svg-black'}
                  />
                  {'\n  '}
                  <path
                    fillRule={'evenodd'}
                    clipRule={'evenodd'}
                    d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                    fill={'#00D1B2'}
                  />
                  {'\n'}
                </svg>
                {'\n\n  '}
              </ui.NavbarItem>
              {'\n\n  '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{'\n      Docs\n    '}</>}
              >
                {'\n      '}
                <ui.NavbarItem>{'\n        Overview\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem className={'rb-is-selected'}>
                  {'\n        Elements\n      '}
                </ui.NavbarItem>
                {'\n      '}
                <ui.NavbarItem>{'\n        Components\n      '}</ui.NavbarItem>
                {'\n      '}
                <ui.NavbarDivider />
                {'\n      '}
                <ui.NavbarItem as={'div'}>
                  {'\n        Version 1.0.4\n      '}
                </ui.NavbarItem>
                {'\n    '}
              </ui.NavbarDropdown>
              {'\n'}
            </ui.Navbar>
            {'\n\n'}
            <ui.Hero color={'primary'}>
              {'\n  '}
              <ui.HeroBody>
                {'\n    '}
                <ui.Title as={'p'}>{'\n      Documentation\n    '}</ui.Title>
                {'\n    '}
                <ui.Subtitle as={'p'}>
                  {'\n      Everything you need to '}
                  <strong>{'create a website'}</strong>
                  {' with Bulma\n    '}
                </ui.Subtitle>
                {'\n  '}
              </ui.HeroBody>
              {'\n'}
            </ui.Hero>
            {'\n\n    '}
          </div>
          {'\n  '}
        </ui.Column>
        {'\n\n  '}
        <ui.Column>
          {'\n    '}
          <div className={'highlight'}>
            <pre>
              <code className={'language-html'}>
                {
                  '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <a class="navbar-item">\n    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n  </a>\n\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item is-selected">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                }
              </code>
            </pre>
          </div>
          {'\n  '}
        </ui.Column>
        {'\n'}
      </ui.Columns>
    </>
  )
}

function Example016Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'black'}
                  className={'bd-svg-black'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'#00D1B2'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navbarExample'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navbarExample'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                  className={'rb-is-selected'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'primary'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example017Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'primary'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorprimary-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorprimary-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'primary'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'primary'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example018Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'link'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorlink-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorlink-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'link'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'link'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example019Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'info'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorinfo-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorinfo-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'info'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'info'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example020Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'success'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorsuccess-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorsuccess-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'success'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'success'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example021Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'warning'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorwarning-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorwarning-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'warning'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'warning'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example022Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'danger'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColordanger-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColordanger-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'danger'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'danger'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example023Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'black'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorblack-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorblack-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'black'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'black'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example024Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'dark'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColordark-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColordark-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'dark'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'dark'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example025Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'light'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorlight-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorlight-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'light'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

function Example026Demo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        {'\n  '}
        <ui.Navbar color={'white'}>
          {'\n  '}
          <ui.NavbarBrand>
            {'\n    '}
            <ui.NavbarItem href={'https://bulma.io/'}>
              {'\n      '}
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />
                {'\n  '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />
                {'\n'}
              </svg>
              {'\n\n    '}
            </ui.NavbarItem>
            {'\n    '}
            <ui.NavbarBurger
              data-target={'navMenuColorwhite-example'}
              className={'js-burger'}
              as={'div'}
            >
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n      '}
              <span />
              {'\n    '}
            </ui.NavbarBurger>
            {'\n  '}
          </ui.NavbarBrand>
          {'\n\n  '}
          <ui.NavbarMenu id={'navMenuColorwhite-example'}>
            {'\n    '}
            <ui.NavbarStart>
              {'\n      '}
              <ui.NavbarItem href={'https://bulma.io/'}>
                {' Home '}
              </ui.NavbarItem>
              {'\n      '}
              <ui.NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>{' Docs '}</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  {' Overview '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  {' Modifiers '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  {' Columns '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  {' Layout '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  {' Form '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarDivider />
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  {' Elements '}
                </ui.NavbarItem>
                {'\n          '}
                <ui.NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  {' Components '}
                </ui.NavbarItem>
                {'\n        '}
              </ui.NavbarDropdown>
              {'\n    '}
            </ui.NavbarStart>
            {'\n\n    '}
            <ui.NavbarEnd>
              {'\n      '}
              <ui.NavbarItem as={'div'}>
                {'\n        '}
                <ui.Field layout={'grouped'}>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      color={'white'}
                      tone={'soft'}
                      className={'bd-tw-button'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fab fa-twitter'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{' Tweet '}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n          '}
                  <ui.Control as={'p'}>
                    {'\n            '}
                    <ui.LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'white'}
                      tone={'light'}
                    >
                      {'\n              '}
                      <ui.Icon>
                        {'\n                '}
                        <i className={'fas fa-download'} />
                        {'\n              '}
                      </ui.Icon>
                      {'\n              '}
                      <span>{'Download'}</span>
                      {'\n            '}
                    </ui.LinkButton>
                    {'\n          '}
                  </ui.Control>
                  {'\n        '}
                </ui.Field>
                {'\n      '}
              </ui.NavbarItem>
              {'\n    '}
            </ui.NavbarEnd>
            {'\n  '}
          </ui.NavbarMenu>
          {'\n'}
        </ui.Navbar>
        {'\n\n'}
      </div>
    </>
  )
}

export const Example001 = {
  name: 'Complete navbar',
  parameters: {
    official: { id: 'components-navbar/basic-navbar/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example001Demo() {\n  return (<><div className={"bd-example is-paddingless"}>{"\\n  \\n"}<ui.Navbar role={"navigation"} aria-label={"main navigation"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"black"} className={"bd-svg-black"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"#00D1B2"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n\\n    "}<ui.NavbarBurger role={"button"} aria-label={"menu"} aria-expanded={"false"} data-target={"navbarBasicExample"} as={"a"}>{"\\n      "}<span aria-hidden={"true"} />{"\\n      "}<span aria-hidden={"true"} />{"\\n      "}<span aria-hidden={"true"} />{"\\n      "}<span aria-hidden={"true"} />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navbarBasicExample"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem>{"\\n        Home\\n      "}</ui.NavbarItem>{"\\n\\n      "}<ui.NavbarItem>{"\\n        Documentation\\n      "}</ui.NavbarItem>{"\\n\\n      "}<ui.NavbarDropdown hoverable as={"div"} trigger={<>{"\\n          More\\n        "}</>}>{"\\n          "}<ui.NavbarItem>{"\\n            About\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem className={"rb-is-selected"}>{"\\n            Jobs\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem>{"\\n            Contact\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem>{"\\n            Report an issue\\n          "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Buttons>{"\\n          "}<ui.LinkButton color={"primary"}>{"\\n            "}<strong>{"Sign up"}</strong>{"\\n          "}</ui.LinkButton>{"\\n          "}<ui.LinkButton color={"light"}>{"\\n            Log in\\n          "}</ui.LinkButton>{"\\n        "}</ui.Buttons>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example001Demo,
} satisfies StoryObj

export const Example002 = {
  name: 'Navbar brand',
  parameters: {
    official: { id: 'components-navbar/navbar-brand/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example002Demo() {\n  return (<><div className={"bd-example is-paddingless"}>{"\\n  \\n"}<ui.Navbar role={"navigation"} aria-label={"main navigation"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"black"} className={"bd-svg-black"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"#00D1B2"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n\\n    "}<ui.NavbarBurger role={"button"} aria-label={"menu"} aria-expanded={"false"} as={"a"}>{"\\n      "}<span aria-hidden={"true"} />{"\\n      "}<span aria-hidden={"true"} />{"\\n      "}<span aria-hidden={"true"} />{"\\n      "}<span aria-hidden={"true"} />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example002Demo,
} satisfies StoryObj

export const Example003 = {
  name: 'Closed burger',
  parameters: {
    official: { id: 'components-navbar/navbar-burger/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example003Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<div style={{ ...{ marginBottom: "1.5rem", width: "2.5rem" } }} className={"example rb-is-paddingless"}>{"\\n      "}<ui.NavbarBurger role={"button"} aria-label={"menu"} aria-expanded={"false"} style={{ ...{ display: "flex" } }} as={"a"}>{"\\n        "}<span aria-hidden={"true"} />{"\\n        "}<span aria-hidden={"true"} />{"\\n        "}<span aria-hidden={"true"} />{"\\n        "}<span aria-hidden={"true"} />{"\\n      "}</ui.NavbarBurger>{"\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<a class=\\"navbar-burger\\" role=\\"button\\" aria-label=\\"menu\\" aria-expanded=\\"false\\">\\n  <span aria-hidden=\\"true\\"></span>\\n  <span aria-hidden=\\"true\\"></span>\\n  <span aria-hidden=\\"true\\"></span>\\n  <span aria-hidden=\\"true\\"></span>\\n</a>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example003Demo,
} satisfies StoryObj

export const Example004 = {
  name: 'Expanded burger',
  parameters: {
    official: { id: 'components-navbar/navbar-burger/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example004Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column width={"one-quarter"}>{"\\n    "}<div style={{ ...{ width: "2.5rem" } }} className={"example rb-is-paddingless"}>{"\\n      "}<ui.NavbarBurger role={"button"} aria-label={"menu"} aria-expanded={"false"} style={{ ...{ display: "flex" } }} defaultExpanded as={"a"}>{"\\n        "}<span aria-hidden={"true"} />{"\\n        "}<span aria-hidden={"true"} />{"\\n        "}<span aria-hidden={"true"} />{"\\n        "}<span aria-hidden={"true"} />{"\\n      "}</ui.NavbarBurger>{"\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<a class=\\"navbar-burger is-active\\" role=\\"button\\" aria-label=\\"menu\\" aria-expanded=\\"false\\">\\n  <span aria-hidden=\\"true\\"></span>\\n  <span aria-hidden=\\"true\\"></span>\\n  <span aria-hidden=\\"true\\"></span>\\n  <span aria-hidden=\\"true\\"></span>\\n</a>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example004Demo,
} satisfies StoryObj

export const Example005 = {
  name: 'Transparent navbar',
  parameters: {
    official: { id: 'components-navbar/transparent-navbar/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example005Demo() {\n  return (<>{"\\n        \\n          \\n"}<ui.Navbar transparent>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"black"} className={"bd-svg-black"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"#00D1B2"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navbarExampleTransparentExample"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navbarExampleTransparentExample"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen boxed as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"} className={"rb-is-selected"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"}>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"primary"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n\\n        \\n      "}</>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example005Demo,
} satisfies StoryObj

export const Example006 = {
  name: 'Toggle fixed bottom navbar',
  parameters: {
    official: { id: 'components-navbar/try-it-out/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example006Demo() {\n  return (<><ui.Buttons id={"navbarToggles"}>{"\\n  "}<ui.LinkButton id={"navbarFixBottom"} color={"link"}>{"\\n    "}<span><span id={"navbarFixBottomText"}>{"Show"}</span>{" "}<strong>{"bottom"}</strong>{" navbar"}</span>{"\\n  "}</ui.LinkButton>{"\\n"}</ui.Buttons></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example006Demo,
} satisfies StoryObj

export const Example007 = {
  name: 'Navbar dropdown',
  parameters: {
    official: { id: 'components-navbar/dropdown-menu/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example007Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"}>{"\\n  "}<ui.NavbarDropdown as={"div"} trigger={<>{"\\n      Docs\\n    "}</>}>{"\\n      "}<ui.NavbarItem>{"\\n        Overview\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Elements\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Components\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDivider />{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        Version 1.0.4\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarDropdown>{"\\n"}</ui.Navbar>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<nav class=\\"navbar\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <div class=\\"navbar-item has-dropdown\\">\\n    <a class=\\"navbar-link\\">\\n      Docs\\n    </a>\\n\\n    <div class=\\"navbar-dropdown\\">\\n      <a class=\\"navbar-item\\">\\n        Overview\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Elements\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Components\\n      </a>\\n      <hr class=\\"navbar-divider\\">\\n      <div class=\\"navbar-item\\">\\n        Version 1.0.4\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example007Demo,
} satisfies StoryObj

export const Example008 = {
  name: 'Hoverable dropdown',
  parameters: {
    official: {
      id: 'components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/001',
    },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example008Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"}>{"\\n  "}<ui.NavbarDropdown hoverable as={"div"} trigger={<>{"\\n      Docs\\n    "}</>}>{"\\n      "}<ui.NavbarItem>{"\\n        Overview\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Elements\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Components\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDivider />{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        Version 1.0.4\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarDropdown>{"\\n"}</ui.Navbar>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<nav class=\\"navbar\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <div class=\\"navbar-item has-dropdown is-hoverable\\">\\n    <a class=\\"navbar-link\\">\\n      Docs\\n    </a>\\n\\n    <div class=\\"navbar-dropdown\\">\\n      <a class=\\"navbar-item\\">\\n        Overview\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Elements\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Components\\n      </a>\\n      <hr class=\\"navbar-divider\\">\\n      <div class=\\"navbar-item\\">\\n        Version 1.0.4\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example008Demo,
} satisfies StoryObj

export const Example009 = {
  name: 'Active dropdown',
  parameters: {
    official: {
      id: 'components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/002',
    },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example009Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"}>{"\\n  "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{"\\n      Docs\\n    "}</>}>{"\\n      "}<ui.NavbarItem>{"\\n        Overview\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Elements\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Components\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDivider />{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        Version 1.0.4\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarDropdown>{"\\n"}</ui.Navbar>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<nav class=\\"navbar\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <div class=\\"navbar-item has-dropdown is-active\\">\\n    <a class=\\"navbar-link\\">\\n      Docs\\n    </a>\\n\\n    <div class=\\"navbar-dropdown\\">\\n      <a class=\\"navbar-item\\">\\n        Overview\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Elements\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Components\\n      </a>\\n      <hr class=\\"navbar-divider\\">\\n      <div class=\\"navbar-item\\">\\n        Version 1.0.4\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example009Demo,
} satisfies StoryObj

export const Example010 = {
  name: 'Dropdown alignment',
  parameters: {
    official: { id: 'components-navbar/right-dropdown/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example010Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"}>{"\\n  "}<ui.NavbarMenu>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{"\\n          Left\\n        "}</>}>{"\\n          "}<ui.NavbarItem>{"\\n            Overview\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem>{"\\n            Elements\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem>{"\\n            Components\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem as={"div"}>{"\\n            Version 1.0.4\\n          "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarDropdown defaultOpen right as={"div"} trigger={<>{"\\n          Right\\n        "}</>}>{"\\n          "}<ui.NavbarItem>{"\\n            Overview\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem>{"\\n            Elements\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem>{"\\n            Components\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem as={"div"}>{"\\n            Version 1.0.4\\n          "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}<ui.Hero color={"primary"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"\\n      Documentation\\n    "}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"\\n      Everything you need to "}<strong>{"create a website"}</strong>{" with Bulma\\n    "}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<nav class=\\"navbar\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <div class=\\"navbar-menu\\">\\n    <div class=\\"navbar-start\\">\\n      <div class=\\"navbar-item has-dropdown is-active\\">\\n        <a class=\\"navbar-link\\">\\n          Left\\n        </a>\\n\\n        <div class=\\"navbar-dropdown\\">\\n          <a class=\\"navbar-item\\">\\n            Overview\\n          </a>\\n          <a class=\\"navbar-item\\">\\n            Elements\\n          </a>\\n          <a class=\\"navbar-item\\">\\n            Components\\n          </a>\\n          <hr class=\\"navbar-divider\\">\\n          <div class=\\"navbar-item\\">\\n            Version 1.0.4\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <div class=\\"navbar-end\\">\\n      <div class=\\"navbar-item has-dropdown is-active\\">\\n        <a class=\\"navbar-link\\">\\n          Right\\n        </a>\\n\\n        <div class=\\"navbar-dropdown is-right\\">\\n          <a class=\\"navbar-item\\">\\n            Overview\\n          </a>\\n          <a class=\\"navbar-item\\">\\n            Elements\\n          </a>\\n          <a class=\\"navbar-item\\">\\n            Components\\n          </a>\\n          <hr class=\\"navbar-divider\\">\\n          <div class=\\"navbar-item\\">\\n            Version 1.0.4\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n\\n<section class=\\"hero is-primary\\">\\n  <div class=\\"hero-body\\">\\n    <p class=\\"title\\">\\n      Documentation\\n    </p>\\n    <p class=\\"subtitle\\">\\n      Everything you need to <strong>create a website</strong> with Bulma\\n    </p>\\n  </div>\\n</section>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example010Demo,
} satisfies StoryObj

export const Example011 = {
  name: 'Navbar dropup',
  parameters: {
    official: { id: 'components-navbar/dropup/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example011Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Hero color={"primary"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"\\n      Documentation\\n    "}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"\\n      Everything you need to "}<strong>{"create a website"}</strong>{" with Bulma\\n    "}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"}>{"\\n  "}<ui.NavbarMenu>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarDropdown up defaultOpen as={"div"} trigger={<>{"\\n          Dropup\\n        "}</>}>{"\\n          "}<ui.NavbarItem>{"\\n            Overview\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem>{"\\n            Elements\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem>{"\\n            Components\\n          "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem as={"div"}>{"\\n            Version 1.0.4\\n          "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<section class=\\"hero is-primary\\">\\n  <div class=\\"hero-body\\">\\n    <p class=\\"title\\">\\n      Documentation\\n    </p>\\n    <p class=\\"subtitle\\">\\n      Everything you need to <strong>create a website</strong> with Bulma\\n    </p>\\n  </div>\\n</section>\\n\\n<nav class=\\"navbar\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <div class=\\"navbar-menu\\">\\n    <div class=\\"navbar-start\\">\\n      <div class=\\"navbar-item has-dropdown has-dropdown-up is-active\\">\\n        <a class=\\"navbar-link\\">\\n          Dropup\\n        </a>\\n\\n        <div class=\\"navbar-dropdown\\">\\n          <a class=\\"navbar-item\\">\\n            Overview\\n          </a>\\n          <a class=\\"navbar-item\\">\\n            Elements\\n          </a>\\n          <a class=\\"navbar-item\\">\\n            Components\\n          </a>\\n          <hr class=\\"navbar-divider\\">\\n          <div class=\\"navbar-item\\">\\n            Version 1.0.4\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example011Demo,
} satisfies StoryObj

export const Example012 = {
  name: 'Arrowless dropdown',
  parameters: {
    official: { id: 'components-navbar/dropdown-without-arrow/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example012Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.NavbarDropdown hoverable as={"div"} trigger={<>{"\\n    Link without arrow\\n  "}</>} arrowless>{"\\n    "}<ui.NavbarItem>{"\\n      Overview\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarItem>{"\\n      Elements\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarItem>{"\\n      Components\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarDivider />{"\\n    "}<ui.NavbarItem as={"div"}>{"\\n      Version 1.0.4\\n    "}</ui.NavbarItem>{"\\n  "}</ui.NavbarDropdown>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<div class=\\"navbar-item has-dropdown is-hoverable\\">\\n  <a class=\\"navbar-link is-arrowless\\">\\n    Link without arrow\\n  </a>\\n  <div class=\\"navbar-dropdown\\">\\n    <a class=\\"navbar-item\\">\\n      Overview\\n    </a>\\n    <a class=\\"navbar-item\\">\\n      Elements\\n    </a>\\n    <a class=\\"navbar-item\\">\\n      Components\\n    </a>\\n    <hr class=\\"navbar-divider\\">\\n    <div class=\\"navbar-item\\">\\n      Version 1.0.4\\n    </div>\\n  </div>\\n</div>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example012Demo,
} satisfies StoryObj

export const Example013 = {
  name: 'Default dropdown style',
  parameters: {
    official: { id: 'components-navbar/styles-for-the-dropdown-menu/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example013Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"}>{"\\n  "}<ui.NavbarItem>{"\\n    "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"black"} className={"bd-svg-black"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"#00D1B2"} />{"\\n"}</svg>{"\\n\\n  "}</ui.NavbarItem>{"\\n\\n  "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{"\\n      Docs\\n    "}</>}>{"\\n      "}<ui.NavbarItem>{"\\n        Overview\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Elements\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Components\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDivider />{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        Version 1.0.4\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarDropdown>{"\\n"}</ui.Navbar>{"\\n\\n"}<ui.Hero color={"primary"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"\\n      Documentation\\n    "}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"\\n      Everything you need to "}<strong>{"create a website"}</strong>{" with Bulma\\n    "}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<nav class=\\"navbar\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <a class=\\"navbar-item\\">\\n    <svg width=\\"640\\" height=\\"160\\" viewBox=\\"0 0 640 160\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z\\" fill=\\"black\\" class=\\"bd-svg-black\\" />\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z\\" fill=\\"#00D1B2\\"/>\\n</svg>\\n\\n  </a>\\n\\n  <div class=\\"navbar-item has-dropdown is-active\\">\\n    <a class=\\"navbar-link\\">\\n      Docs\\n    </a>\\n\\n    <div class=\\"navbar-dropdown\\">\\n      <a class=\\"navbar-item\\">\\n        Overview\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Elements\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Components\\n      </a>\\n      <hr class=\\"navbar-divider\\">\\n      <div class=\\"navbar-item\\">\\n        Version 1.0.4\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n\\n<section class=\\"hero is-primary\\">\\n  <div class=\\"hero-body\\">\\n    <p class=\\"title\\">\\n      Documentation\\n    </p>\\n    <p class=\\"subtitle\\">\\n      Everything you need to <strong>create a website</strong> with Bulma\\n    </p>\\n  </div>\\n</section>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example013Demo,
} satisfies StoryObj

export const Example014 = {
  name: 'Boxed dropdown style',
  parameters: {
    official: { id: 'components-navbar/styles-for-the-dropdown-menu/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example014Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"} transparent>{"\\n  "}<ui.NavbarItem>{"\\n    "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"black"} className={"bd-svg-black"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"#00D1B2"} />{"\\n"}</svg>{"\\n\\n  "}</ui.NavbarItem>{"\\n\\n  "}<ui.NavbarDropdown defaultOpen boxed as={"div"} trigger={<>{"\\n      Docs\\n    "}</>}>{"\\n      "}<ui.NavbarItem>{"\\n        Overview\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Elements\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Components\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDivider />{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        Version 1.0.4\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarDropdown>{"\\n"}</ui.Navbar>{"\\n\\n"}<ui.Hero>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"\\n      Documentation\\n    "}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"\\n      Everything you need to "}<strong>{"create a website"}</strong>{" with Bulma\\n    "}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<nav class=\\"navbar is-transparent\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <a class=\\"navbar-item\\">\\n    <svg width=\\"640\\" height=\\"160\\" viewBox=\\"0 0 640 160\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z\\" fill=\\"black\\" class=\\"bd-svg-black\\" />\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z\\" fill=\\"#00D1B2\\"/>\\n</svg>\\n\\n  </a>\\n\\n  <div class=\\"navbar-item has-dropdown is-active\\">\\n    <a class=\\"navbar-link\\">\\n      Docs\\n    </a>\\n\\n    <div class=\\"navbar-dropdown is-boxed\\">\\n      <a class=\\"navbar-item\\">\\n        Overview\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Elements\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Components\\n      </a>\\n      <hr class=\\"navbar-divider\\">\\n      <div class=\\"navbar-item\\">\\n        Version 1.0.4\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n\\n<section class=\\"hero\\">\\n  <div class=\\"hero-body\\">\\n    <p class=\\"title\\">\\n      Documentation\\n    </p>\\n    <p class=\\"subtitle\\">\\n      Everything you need to <strong>create a website</strong> with Bulma\\n    </p>\\n  </div>\\n</section>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example014Demo,
} satisfies StoryObj

export const Example015 = {
  name: 'Selected dropdown item',
  parameters: {
    official: { id: 'components-navbar/active-dropdown-navbar-item/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example015Demo() {\n  return (<><ui.Columns>{"\\n  "}<ui.Column>{"\\n    "}<div className={"bd-example is-paddingless"}>{"\\n      \\n"}<ui.Navbar role={"navigation"} aria-label={"dropdown navigation"}>{"\\n  "}<ui.NavbarItem>{"\\n    "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"black"} className={"bd-svg-black"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"#00D1B2"} />{"\\n"}</svg>{"\\n\\n  "}</ui.NavbarItem>{"\\n\\n  "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{"\\n      Docs\\n    "}</>}>{"\\n      "}<ui.NavbarItem>{"\\n        Overview\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem className={"rb-is-selected"}>{"\\n        Elements\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarItem>{"\\n        Components\\n      "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDivider />{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        Version 1.0.4\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarDropdown>{"\\n"}</ui.Navbar>{"\\n\\n"}<ui.Hero color={"primary"}>{"\\n  "}<ui.HeroBody>{"\\n    "}<ui.Title as={"p"}>{"\\n      Documentation\\n    "}</ui.Title>{"\\n    "}<ui.Subtitle as={"p"}>{"\\n      Everything you need to "}<strong>{"create a website"}</strong>{" with Bulma\\n    "}</ui.Subtitle>{"\\n  "}</ui.HeroBody>{"\\n"}</ui.Hero>{"\\n\\n    "}</div>{"\\n  "}</ui.Column>{"\\n\\n  "}<ui.Column>{"\\n    "}<div className={"highlight"}><pre><code className={"language-html"}>{"\\n<nav class=\\"navbar\\" role=\\"navigation\\" aria-label=\\"dropdown navigation\\">\\n  <a class=\\"navbar-item\\">\\n    <svg width=\\"640\\" height=\\"160\\" viewBox=\\"0 0 640 160\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z\\" fill=\\"black\\" class=\\"bd-svg-black\\" />\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z\\" fill=\\"#00D1B2\\"/>\\n</svg>\\n\\n  </a>\\n\\n  <div class=\\"navbar-item has-dropdown is-active\\">\\n    <a class=\\"navbar-link\\">\\n      Docs\\n    </a>\\n\\n    <div class=\\"navbar-dropdown\\">\\n      <a class=\\"navbar-item\\">\\n        Overview\\n      </a>\\n      <a class=\\"navbar-item is-selected\\">\\n        Elements\\n      </a>\\n      <a class=\\"navbar-item\\">\\n        Components\\n      </a>\\n      <hr class=\\"navbar-divider\\">\\n      <div class=\\"navbar-item\\">\\n        Version 1.0.4\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n\\n<section class=\\"hero is-primary\\">\\n  <div class=\\"hero-body\\">\\n    <p class=\\"title\\">\\n      Documentation\\n    </p>\\n    <p class=\\"subtitle\\">\\n      Everything you need to <strong>create a website</strong> with Bulma\\n    </p>\\n  </div>\\n</section>\\n"}</code></pre></div>{"\\n  "}</ui.Column>{"\\n"}</ui.Columns></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example015Demo,
} satisfies StoryObj

export const Example016 = {
  name: 'Default navbar color',
  parameters: {
    official: { id: 'components-navbar/colors/001' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example016Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"black"} className={"bd-svg-black"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"#00D1B2"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navbarExample"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navbarExample"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"} className={"rb-is-selected"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"}>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"primary"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example016Demo,
} satisfies StoryObj

export const Example017 = {
  name: 'Primary navbar',
  parameters: {
    official: { id: 'components-navbar/colors/002' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example017Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"primary"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorprimary-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorprimary-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"primary"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"primary"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example017Demo,
} satisfies StoryObj

export const Example018 = {
  name: 'Link navbar',
  parameters: {
    official: { id: 'components-navbar/colors/003' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example018Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"link"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorlink-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorlink-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"link"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"link"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example018Demo,
} satisfies StoryObj

export const Example019 = {
  name: 'Info navbar',
  parameters: {
    official: { id: 'components-navbar/colors/004' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example019Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"info"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorinfo-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorinfo-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"info"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"info"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example019Demo,
} satisfies StoryObj

export const Example020 = {
  name: 'Success navbar',
  parameters: {
    official: { id: 'components-navbar/colors/005' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example020Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"success"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorsuccess-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorsuccess-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"success"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"success"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example020Demo,
} satisfies StoryObj

export const Example021 = {
  name: 'Warning navbar',
  parameters: {
    official: { id: 'components-navbar/colors/006' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example021Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"warning"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorwarning-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorwarning-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"warning"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"warning"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example021Demo,
} satisfies StoryObj

export const Example022 = {
  name: 'Danger navbar',
  parameters: {
    official: { id: 'components-navbar/colors/007' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example022Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"danger"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColordanger-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColordanger-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"danger"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"danger"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example022Demo,
} satisfies StoryObj

export const Example023 = {
  name: 'Black navbar',
  parameters: {
    official: { id: 'components-navbar/colors/008' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example023Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"black"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorblack-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorblack-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"black"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"black"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example023Demo,
} satisfies StoryObj

export const Example024 = {
  name: 'Dark navbar',
  parameters: {
    official: { id: 'components-navbar/colors/009' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example024Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"dark"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColordark-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColordark-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"dark"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"dark"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example024Demo,
} satisfies StoryObj

export const Example025 = {
  name: 'Light navbar',
  parameters: {
    official: { id: 'components-navbar/colors/010' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example025Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"light"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorlight-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorlight-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"light"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example025Demo,
} satisfies StoryObj

export const Example026 = {
  name: 'White navbar',
  parameters: {
    official: { id: 'components-navbar/colors/011' },
    docs: {
      source: {
        code: 'import * as ui from \'@seagreenio/react-bulma\';\n\nfunction Example026Demo() {\n  return (<><div style={{ ...{ height: "30rem" } }} className={"bd-example is-paddingless"}>{"\\n  "}<ui.Navbar color={"white"}>{"\\n  "}<ui.NavbarBrand>{"\\n    "}<ui.NavbarItem href={"https://bulma.io/"}>{"\\n      "}<svg width={"640"} height={"160"} viewBox={"0 0 640 160"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"} fill={"currentColor"} />{"\\n  "}<path fillRule={"evenodd"} clipRule={"evenodd"} d={"M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"} fill={"currentColor"} />{"\\n"}</svg>{"\\n\\n    "}</ui.NavbarItem>{"\\n    "}<ui.NavbarBurger data-target={"navMenuColorwhite-example"} className={"js-burger"} as={"div"}>{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n      "}<span />{"\\n    "}</ui.NavbarBurger>{"\\n  "}</ui.NavbarBrand>{"\\n\\n  "}<ui.NavbarMenu id={"navMenuColorwhite-example"}>{"\\n    "}<ui.NavbarStart>{"\\n      "}<ui.NavbarItem href={"https://bulma.io/"}>{" Home "}</ui.NavbarItem>{"\\n      "}<ui.NavbarDropdown defaultOpen as={"div"} trigger={<>{" Docs "}</>} triggerProps={{ href: "https://bulma.io/documentation/overview/start/" }}>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/start/"}>{" Overview "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/overview/modifiers/"}>{" Modifiers "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/columns/basics/"}>{" Columns "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/layout/container/"}>{" Layout "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/form/general/"}>{" Form "}</ui.NavbarItem>{"\\n          "}<ui.NavbarDivider />{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/elements/box/"}>{" Elements "}</ui.NavbarItem>{"\\n          "}<ui.NavbarItem href={"https://bulma.io/documentation/components/breadcrumb/"} active>{" Components "}</ui.NavbarItem>{"\\n        "}</ui.NavbarDropdown>{"\\n    "}</ui.NavbarStart>{"\\n\\n    "}<ui.NavbarEnd>{"\\n      "}<ui.NavbarItem as={"div"}>{"\\n        "}<ui.Field layout={"grouped"}>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton data-social-network={"Twitter"} data-social-action={"tweet"} data-social-target={"https://bulma.io"} target={"_blank"} href={"https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"} color={"white"} tone={"soft"} className={"bd-tw-button"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fab fa-twitter"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{" Tweet "}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n          "}<ui.Control as={"p"}>{"\\n            "}<ui.LinkButton href={"https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip"} color={"white"} tone={"light"}>{"\\n              "}<ui.Icon>{"\\n                "}<i className={"fas fa-download"} />{"\\n              "}</ui.Icon>{"\\n              "}<span>{"Download"}</span>{"\\n            "}</ui.LinkButton>{"\\n          "}</ui.Control>{"\\n        "}</ui.Field>{"\\n      "}</ui.NavbarItem>{"\\n    "}</ui.NavbarEnd>{"\\n  "}</ui.NavbarMenu>{"\\n"}</ui.Navbar>{"\\n\\n"}</div></>);\n}\n',
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: Example026Demo,
} satisfies StoryObj

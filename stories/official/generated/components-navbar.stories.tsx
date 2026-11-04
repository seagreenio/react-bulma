import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Buttons,
  Control,
  Field,
  Hero,
  HeroBody,
  Icon,
  LinkButton,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  Subtitle,
  Title,
} from '../../../src'
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
      <Navbar id={'navbarBottom'} fixed={'bottom'} shadow>
        <NavbarBrand>
          <NavbarItem href={'https://bulma.io/'}>
            <svg
              width={'640'}
              height={'160'}
              viewBox={'0 0 640 160'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              {' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={
                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                }
                fill={'black'}
                className={'bd-svg-black'}
              />{' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                fill={'#00D1B2'}
              />{' '}
            </svg>
          </NavbarItem>
          <NavbarBurger data-target={'navbarExample'} as={'div'}>
            <span />
            <span />
            <span />
            <span />
          </NavbarBurger>
        </NavbarBrand>
        <NavbarMenu id={'navbarExample'}>
          <NavbarStart>
            <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
            <NavbarDropdown
              up
              hoverable
              as={'div'}
              trigger={<>Docs</>}
              triggerProps={{
                href: 'https://bulma.io/documentation/overview/start/',
              }}
            >
              <NavbarItem
                href={'https://bulma.io/documentation/overview/start/'}
              >
                Overview
              </NavbarItem>
              <NavbarItem
                href={'https://bulma.io/documentation/overview/modifiers/'}
              >
                Modifiers
              </NavbarItem>
              <NavbarItem
                href={'https://bulma.io/documentation/columns/basics/'}
              >
                Columns
              </NavbarItem>
              <NavbarItem
                href={'https://bulma.io/documentation/layout/container/'}
              >
                Layout
              </NavbarItem>
              <NavbarItem href={'https://bulma.io/documentation/form/general/'}>
                Form
              </NavbarItem>
              <NavbarDivider />
              <NavbarItem href={'https://bulma.io/documentation/elements/box/'}>
                Elements
              </NavbarItem>
              <NavbarItem
                href={'https://bulma.io/documentation/components/breadcrumb/'}
                active
              >
                Components
              </NavbarItem>
            </NavbarDropdown>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem as={'div'}>
              <Field layout={'grouped'}>
                <Control as={'p'}>
                  <LinkButton
                    data-social-network={'Twitter'}
                    data-social-action={'tweet'}
                    data-social-target={'https://bulma.io'}
                    target={'_blank'}
                    href={
                      'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                    }
                    className={'bd-tw-button'}
                  >
                    <Icon>
                      <i className={'fab fa-twitter'} />
                    </Icon>
                    <span> Tweet </span>
                  </LinkButton>
                </Control>
                <Control as={'p'}>
                  <LinkButton
                    href={
                      'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                    }
                    color={'primary'}
                  >
                    <Icon>
                      <i className={'fas fa-download'} />
                    </Icon>
                    <span>Download</span>
                  </LinkButton>
                </Control>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
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
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Navbar'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A responsive horizontal '}
          <strong data-official-prose="">{'navbar'}</strong>
          {' that can support images, links, buttons, and dropdowns'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar'}</code>
            {
              ' component is a responsive and versatile horizontal navigation bar with the following structure: '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'navbar'}</code>
              {' the '}
              <strong data-official-prose="">{'main'}</strong>
              {' container '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'navbar-brand'}</code>
                  {' the '}
                  <strong data-official-prose="">{'left side'}</strong>
                  {', '}
                  <strong data-official-prose="" className={'has-text-success'}>
                    {'always visible'}
                  </strong>
                  {', which usually contains the '}
                  <strong data-official-prose="">{'logo'}</strong>
                  {' and optionally some links or icons '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'navbar-burger'}</code>
                      {' the '}
                      <strong data-official-prose="">{'hamburger'}</strong>
                      {' icon, which toggles the navbar menu on touch devices '}
                    </li>
                  </ul>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'navbar-menu'}</code>
                  {' the '}
                  <strong data-official-prose="">{'right side'}</strong>
                  {', hidden on touch devices, visible on desktop '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'navbar-start'}</code>
                      {' the '}
                      <strong data-official-prose="">{'left part'}</strong>
                      {
                        ' of the menu, which appears next to the navbar brand on desktop '
                      }
                    </li>
                    <li data-official-prose="">
                      <code data-official-prose="">{'navbar-end'}</code>
                      {' the '}
                      <strong data-official-prose="">{'right part'}</strong>
                      {' of the menu, which appears at the end of the navbar '}
                      <ul data-official-prose="">
                        <li data-official-prose="">
                          <code data-official-prose="">{'navbar-item'}</code>
                          {' each '}
                          <strong data-official-prose="">
                            {'single item'}
                          </strong>
                          {' of the navbar, which can either be an '}
                          <code data-official-prose="">{'a'}</code>
                          {' or a '}
                          <code data-official-prose="">{'div'}</code>
                          <ul data-official-prose="">
                            <li data-official-prose="">
                              <code data-official-prose="">
                                {'navbar-link'}
                              </code>
                              {' a '}
                              <strong data-official-prose="">{'link'}</strong>
                              {' as the sibling of a dropdown, with an arrow '}
                            </li>
                            <li data-official-prose="">
                              <code data-official-prose="">
                                {'navbar-dropdown'}
                              </code>
                              {' the '}
                              <strong data-official-prose="">
                                {'dropdown menu'}
                              </strong>
                              {', which can include navbar items and dividers '}
                              <ul data-official-prose="">
                                <li data-official-prose="">
                                  <code data-official-prose="">
                                    {'navbar-divider'}
                                  </code>
                                  {' a '}
                                  <strong data-official-prose="">
                                    {'horizontal line'}
                                  </strong>
                                  {' to separate navbar items '}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <h3
          data-official-prose=""
          id={'basic-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Basic Navbar '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#basic-navbar'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' To '}
            <strong data-official-prose="">{'get started quickly'}</strong>
            {', here is what a complete basic navbar looks like: '}
          </p>
        </div>
        <div data-official-example="components-navbar/basic-navbar/001">
          <Canvas of={CompleteNavbarStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <a class="navbar-item" href="https://bulma.io">\n      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n    </a>\n\n    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n    </a>\n  </div>\n\n  <div id="navbarBasicExample" class="navbar-menu">\n    <div class="navbar-start">\n      <a class="navbar-item">\n        Home\n      </a>\n\n      <a class="navbar-item">\n        Documentation\n      </a>\n\n      <div class="navbar-item has-dropdown is-hoverable">\n        <a class="navbar-link">\n          More\n        </a>\n\n        <div class="navbar-dropdown">\n          <a class="navbar-item">\n            About\n          </a>\n          <a class="navbar-item is-selected">\n            Jobs\n          </a>\n          <a class="navbar-item">\n            Contact\n          </a>\n          <hr class="navbar-divider">\n          <a class="navbar-item">\n            Report an issue\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class="navbar-end">\n      <div class="navbar-item">\n        <div class="buttons">\n          <a class="button is-primary">\n            <strong>Sign up</strong>\n          </a>\n          <a class="button is-light">\n            Log in\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        <h3
          data-official-prose=""
          id={'navbar-brand'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Navbar brand '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-brand'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar-brand'}</code>
            {' is the left side of the navbar. It can contain: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {' a number of '}
              <code data-official-prose="">{'navbar-item'}</code>
            </li>
            <li data-official-prose="">
              {' the '}
              <code data-official-prose="">{'navbar-burger'}</code>
              {' as last child '}
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <!-- navbar items, navbar burger... -->\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The navbar brand is '}
            <strong data-official-prose="">{'always visible'}</strong>
            {': on both touch devices '}
            <code data-official-prose="">{'< 1024px'}</code>
            {' and desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {
              ' . As a result, it is recommended to only use a few navbar items to avoid '
            }
            <strong data-official-prose="">{'overflowing'}</strong>
            {' horizontally on small devices. '}
          </p>
        </div>
        <div data-official-example="components-navbar/navbar-brand/001">
          <Canvas of={NavbarBrandStory} />
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <a class="navbar-item" href="https://bulma.io">\n      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n    </a>\n\n    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n      <span aria-hidden="true"></span>\n    </a>\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' On desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {' , the navbar brand will only take up the space it needs. '}
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'navbar-burger'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Navbar burger '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-burger'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar-burger'}</code>
            {' is a hamburger menu that only appears on '}
            <strong data-official-prose="">{'touch devices'}</strong>
            {'. It has to appear as the last child of '}
            <code data-official-prose="">{'navbar-brand'}</code>
            {'. It has to contain four empty '}
            <code data-official-prose="">{'span'}</code>
            {
              ' tags in order to visualize the hamburger lines or the cross (when active). '
            }
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-one-quarter'}
            data-source-example={'components-navbar/navbar-burger/001'}
          >
            <div data-official-example="components-navbar/navbar-burger/001">
              <Canvas of={ClosedBurgerStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n</a>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can add the modifier class '}
            <code data-official-prose="">{'is-active'}</code>
            {' to turn it into a cross. '}
          </p>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column is-one-quarter'}
            data-source-example={'components-navbar/navbar-burger/002'}
          >
            <div data-official-example="components-navbar/navbar-burger/002">
              <Canvas of={ExpandedBurgerStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<a class="navbar-burger is-active" role="button" aria-label="menu" aria-expanded="false">\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n  <span aria-hidden="true"></span>\n</a>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'navbar-menu'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Navbar menu '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-menu'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {' is the '}
            <strong data-official-prose="">{'counterpart'}</strong>
            {
              ' of the navbar brand. As such, it must appear as a direct child of '
            }
            <code data-official-prose="">{'navbar'}</code>
            {', as a sibling of '}
            <code data-official-prose="">{'navbar-brand'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar" role="navigation" aria-label="main navigation">\n  <div class="navbar-brand">\n    <!-- navbar items, navbar burger... -->\n  </div>\n  <div class="navbar-menu">\n    <!-- navbar start, navbar end -->\n  </div>\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {' is '}
            <strong data-official-prose="">
              {'hidden on touch devices'}
            </strong>{' '}
            <code data-official-prose="">{'< 1024px'}</code>
            {' . You need to add the modifier class '}
            <code data-official-prose="">{'is-active'}</code>
            {' to display it. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-menu">\n  <!-- hidden on mobile -->\n</div>\n\n<div class="navbar-menu is-active">\n  <!-- shown on mobile -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' On desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {' , the '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {' will '}
            <strong data-official-prose="">{'fill up the space'}</strong>
            {
              ' available in the navbar, leaving the navbar brand just the space it needs. It needs, however, two elements as direct children: '
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-start'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-end'}</code>
            </li>
          </ul>
        </div>
        <hr data-official-prose="" />
        <h3
          data-official-prose=""
          id={'navbar-start-and-navbar-end'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Navbar start and navbar end '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-start-and-navbar-end'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar-start'}</code>
            {' and '}
            <code data-official-prose="">{'navbar-end'}</code>
            {' are the two direct and only children of the '}
            <code data-official-prose="">{'navbar-menu'}</code>
            {'. '}
          </p>
          <p data-official-prose="">
            {' On desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {' : '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-start'}</code>
              {' will appear on the '}
              <strong data-official-prose="">{'left'}</strong>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-end'}</code>
              {' will appear on the '}
              <strong data-official-prose="">{'right'}</strong>
            </li>
          </ul>
          <p data-official-prose="">
            {' Each of them can contain any number of '}
            <code data-official-prose="">{'navbar-item'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-menu">\n  <div class="navbar-start">\n    <!-- navbar items -->\n  </div>\n\n  <div class="navbar-end">\n    <!-- navbar items -->\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <h3
          data-official-prose=""
          id={'navbar-item'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Navbar item '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-item'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' A '}
            <code data-official-prose="">{'navbar-item'}</code>
            {' is a repeatable element that can be: '}
          </p>
          <ul data-official-prose="" className={'bd-spaced'}>
            <li data-official-prose="">
              {' a navigation '}
              <strong data-official-prose="">{'link'}</strong>
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {'\n<a class="navbar-item">\n  Home\n</a>\n'}
                  </code>
                </pre>
              </div>
            </li>
            <li data-official-prose="">
              {' a container for the '}
              <strong data-official-prose="">{'brand logo'}</strong>
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<a class="navbar-item">\n  <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n</a>\n'
                    }
                  </code>
                </pre>
              </div>
            </li>
            <li data-official-prose="">
              {' the '}
              <strong data-official-prose="">{'parent'}</strong>
              {' of a dropdown menu '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="navbar-item has-dropdown">\n  <a class="navbar-link">\n    Docs\n  </a>\n\n  <div class="navbar-dropdown">\n    <!-- Other navbar items -->\n  </div>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </li>
            <li data-official-prose="">
              {' a child of a '}
              <strong data-official-prose="">{'navbar dropdown'}</strong>
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {
                      '\n<div class="navbar-dropdown">\n  <a class="navbar-item">\n    Overview\n  </a>\n</div>\n'
                    }
                  </code>
                </pre>
              </div>
            </li>
            <li data-official-prose="">
              {' a container for almost '}
              <strong data-official-prose="">{'anything'}</strong>
              {' you want, like a '}
              <code data-official-prose="">{'field'}</code>
              <div data-official-prose="" className={'bd-highlight-full'}>
                <div data-official-prose="" className={'highlight'}>
                  <pre data-official-prose="">
                    <code data-official-prose="" className={'language-html'}>
                      {
                        '\n<div class="navbar-item">\n  <div class="field is-grouped">\n    <p class="control">\n      <a class="button">\n        <span class="icon">\n          <i class="fas fa-twitter" aria-hidden="true"></i>\n        </span>\n        <span>Tweet</span>\n      </a>\n    </p>\n    <p class="control">\n      <a class="button is-primary">\n        <span class="icon">\n          <i class="fas fa-download" aria-hidden="true"></i>\n        </span>\n        <span>Download</span>\n      </a>\n    </p>\n  </div>\n</div>\n'
                      }
                    </code>
                  </pre>
                </div>
              </div>
            </li>
          </ul>
          <p data-official-prose="">
            {' It can either be an anchor tag '}
            <code data-official-prose="">{'<a>'}</code>
            {' or a '}
            <code data-official-prose="">{'<div>'}</code>
            {', as a '}
            <strong data-official-prose="">{'direct child'}</strong>
            {' of either: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'navbar'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-brand'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-start'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-end'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-dropdown'}</code>
            </li>
          </ul>
          <p data-official-prose="">
            {' You can add the following '}
            <strong data-official-prose="">{'modifier'}</strong>
            {' classes: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-expanded'}</code>
              {' to turn it into a full-width element '}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-tab'}</code>
              {
                ' to add a bottom border on hover and show the bottom border using '
              }
              <code data-official-prose="">{'is-active'}</code>
            </li>
          </ul>
        </div>
        <h3
          data-official-prose=""
          id={'transparent-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Transparent navbar '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#transparent-navbar'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' To seamlessly integrate the navbar in any visual context, you can add the '
            }
            <code data-official-prose="">{'is-transparent'}</code>
            {' modifier on the '}
            <code data-official-prose="">{'navbar'}</code>
            {
              ' component. This will remove any hover or active background from the navbar items. '
            }
          </p>
        </div>
        <div data-official-example="components-navbar/transparent-navbar/001">
          <Canvas of={TransparentNavbarStory} />
        </div>
        <h3
          data-official-prose=""
          id={'fixed-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Fixed navbar '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fixed-navbar'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can now '}
            <strong data-official-prose="">{'fix'}</strong>
            {' the navbar to either the '}
            <strong data-official-prose="">{'top'}</strong>
            {' or '}
            <strong data-official-prose="">{'bottom'}</strong>
            {' of the page. This is a 2-step process: '}
          </p>
          <ul data-official-prose="" className={'bd-spaced'}>
            <li data-official-prose="">
              {' Add either '}
              <code data-official-prose="">{'is-fixed-top'}</code>
              {' or '}
              <code data-official-prose="">{'is-fixed-bottom'}</code>
              {' to the '}
              <code data-official-prose="">{'navbar'}</code>
              {' component '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {'<nav class="navbar is-fixed-top">'}
                  </code>
                </pre>
              </div>
            </li>
            <li data-official-prose="">
              {' Add the corresponding '}
              <code data-official-prose="">{'has-navbar-fixed-top'}</code>
              {' or '}
              <code data-official-prose="">{'has-navbar-fixed-bottom'}</code>
              {' modifier to either '}
              <code data-official-prose="">{'<html>'}</code>
              {' or '}
              <code data-official-prose="">{'<body>'}</code>
              {' element to provide the appropriate padding to the page '}
              <div data-official-prose="" className={'highlight'}>
                <pre data-official-prose="">
                  <code data-official-prose="" className={'language-html'}>
                    {'<html class="has-navbar-fixed-top">'}
                  </code>
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <h4 data-official-prose="" className={'title is-5'}>
          {'Try it out!'}
        </h4>
        <div data-official-example="components-navbar/try-it-out/001">
          <Canvas of={ToggleFixedBottomNavbarStory} />
        </div>
        <h3
          data-official-prose=""
          id={'dropdown-menu'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Dropdown menu '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#dropdown-menu'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' To create a '}
            <strong data-official-prose="">{'dropdown menu'}</strong>
            {', you will need '}
            <strong data-official-prose="">{'4'}</strong>
            {' elements: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-item'}</code>
              {' with the '}
              <code data-official-prose="">{'has-dropdown'}</code>
              {' modifier '}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-link'}</code>
              {' which contains the dropdown arrow '}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'navbar-dropdown'}</code>
              {' which can contain instances of '}
              <code data-official-prose="">{'navbar-item'}</code>
              {' and '}
              <code data-official-prose="">{'navbar-divider'}</code>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'components-navbar/dropdown-menu/001'}
          >
            <div data-official-example="components-navbar/dropdown-menu/001">
              <Canvas of={NavbarDropdownStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-item has-dropdown">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-4'}>
          {' Show/hide the dropdown with either '}
          <strong data-official-prose="">{'CSS'}</strong>
          {' or '}
          <strong data-official-prose="">{'JavaScript'}</strong>
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar-dropdown'}</code>
            {' is visible on touch devices '}
            <code data-official-prose="">{'< 1024px'}</code>
            {' but hidden on desktop '}
            <code data-official-prose="">{'>= 1024px'}</code>
            {' . '}
            <em data-official-prose="">{'How'}</em>
            {
              " the dropdown is displayed on desktop depends on the parent's class. "
            }
          </p>
          <p data-official-prose="">
            {' The '}
            <code data-official-prose="">{'navbar-item'}</code>
            {' with the '}
            <code data-official-prose="">{'has-dropdown'}</code>
            {' modifier, has '}
            <strong data-official-prose="">{'2 additional modifiers'}</strong>
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-hoverable'}</code>
              {': the dropdown will show up when '}
              <strong data-official-prose="">{'hovering'}</strong>
              {' the parent '}
              <code data-official-prose="">{'navbar-item'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-active'}</code>
              {': the dropdown will show up '}
              <strong data-official-prose="">{'all the time'}</strong>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'message is-success'}>
          <p data-official-prose="" className={'message-body'}>
            {' While the CSS '}
            <code data-official-prose="">{':hover'}</code>
            {' implementation works perfectly, the '}
            <code data-official-prose="">{'is-active'}</code>
            {
              ' class is available for users who want to control the display of the dropdown with '
            }
            <strong data-official-prose="">{'JavaScript'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown is-hoverable">\n  <!-- navbar-link, navbar-dropdown etc. -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={
              'components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/001'
            }
          >
            <div data-official-example="components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/001">
              <Canvas of={HoverableDropdownStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-item has-dropdown is-hoverable">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown is-active">\n  <!-- navbar-link, navbar-dropdown etc. -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={
              'components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/002'
            }
          >
            <div data-official-example="components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/002">
              <Canvas of={ActiveDropdownStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-4'}>
          {' Right dropdown '}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If your parent '}
            <code data-official-prose="">{'navbar-item'}</code>
            {
              ' is on the right side, you can position the dropdown to start from the '
            }
            <strong data-official-prose="">{'right'}</strong>
            {' with the '}
            <code data-official-prose="">{'is-right'}</code>
            {' modifier. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-dropdown is-right">\n  <!-- navbar-item, navbar-divider etc. -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'components-navbar/right-dropdown/001'}
          >
            <div data-official-example="components-navbar/right-dropdown/001">
              <Canvas of={DropdownAlignmentStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-menu">\n    <div class="navbar-start">\n      <div class="navbar-item has-dropdown is-active">\n        <a class="navbar-link">\n          Left\n        </a>\n\n        <div class="navbar-dropdown">\n          <a class="navbar-item">\n            Overview\n          </a>\n          <a class="navbar-item">\n            Elements\n          </a>\n          <a class="navbar-item">\n            Components\n          </a>\n          <hr class="navbar-divider">\n          <div class="navbar-item">\n            Version 1.0.4\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="navbar-end">\n      <div class="navbar-item has-dropdown is-active">\n        <a class="navbar-link">\n          Right\n        </a>\n\n        <div class="navbar-dropdown is-right">\n          <a class="navbar-item">\n            Overview\n          </a>\n          <a class="navbar-item">\n            Elements\n          </a>\n          <a class="navbar-item">\n            Components\n          </a>\n          <hr class="navbar-divider">\n          <div class="navbar-item">\n            Version 1.0.4\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-4'}>
          {' Dropup '}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {" If you're using a navbar at the bottom, like the "}
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
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown has-dropdown-up is-hoverable">\n  <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">\n    Docs\n  </a>\n  <div class="navbar-dropdown">\n    <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">\n      Overview\n    </a>\n  </div>\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'components-navbar/dropup/001'}
          >
            <div data-official-example="components-navbar/dropup/001">
              <Canvas of={NavbarDropupStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <div class="navbar-menu">\n    <div class="navbar-start">\n      <div class="navbar-item has-dropdown has-dropdown-up is-active">\n        <a class="navbar-link">\n          Dropup\n        </a>\n\n        <div class="navbar-dropdown">\n          <a class="navbar-item">\n            Overview\n          </a>\n          <a class="navbar-item">\n            Elements\n          </a>\n          <a class="navbar-item">\n            Components\n          </a>\n          <hr class="navbar-divider">\n          <div class="navbar-item">\n            Version 1.0.4\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-4'}>
          {' Dropdown without arrow '}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' You can remove the arrow in the items of the navbar by adding the '
            }
            <code data-official-prose="">{'is-arrowless'}</code>
            {' modifier to them. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<div class="navbar-item has-dropdown is-hoverable">\n  <a class="navbar-link is-arrowless">\n    Docs\n  </a>\n  <!-- navbar-dropdowns -->\n</div>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={'components-navbar/dropdown-without-arrow/001'}
          >
            <div data-official-example="components-navbar/dropdown-without-arrow/001">
              <Canvas of={ArrowlessDropdownStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<div class="navbar-item has-dropdown is-hoverable">\n  <a class="navbar-link is-arrowless">\n    Link without arrow\n  </a>\n  <div class="navbar-dropdown">\n    <a class="navbar-item">\n      Overview\n    </a>\n    <a class="navbar-item">\n      Elements\n    </a>\n    <a class="navbar-item">\n      Components\n    </a>\n    <hr class="navbar-divider">\n    <div class="navbar-item">\n      Version 1.0.4\n    </div>\n  </div>\n</div>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-4'}>
          {' Styles for the dropdown menu '}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' By default, the '}
            <code data-official-prose="">{'navbar-dropdown'}</code>
            {' has: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {' a grey '}
              <code data-official-prose="">{'border-top'}</code>
            </li>
            <li data-official-prose="">
              {' a '}
              <code data-official-prose="">{'border-radius'}</code>
              {' at both bottom corners '}
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={
              'components-navbar/styles-for-the-dropdown-menu/001'
            }
          >
            <div data-official-example="components-navbar/styles-for-the-dropdown-menu/001">
              <Canvas of={DefaultDropdownStyleStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <a class="navbar-item">\n    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n  </a>\n\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' When having a '}
            <a data-official-prose="" href={'#transparent-navbar'}>
              {'transparent navbar'}
            </a>
            {
              ', it is preferable to use the boxed version of the dropdown, by using the '
            }
            <code data-official-prose="">{'is-boxed'}</code>
            {' modifier. '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {' the grey border is '}
              <strong data-official-prose="">{'removed'}</strong>
            </li>
            <li data-official-prose="">
              {' a slight '}
              <strong data-official-prose="">{'inner shadow'}</strong>
              {' is added '}
            </li>
            <li data-official-prose="">
              {' all corners are '}
              <strong data-official-prose="">{'rounded'}</strong>
            </li>
            <li data-official-prose="">
              {' the hover/active state is '}
              <strong data-official-prose="">{'animated'}</strong>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={
              'components-navbar/styles-for-the-dropdown-menu/002'
            }
          >
            <div data-official-example="components-navbar/styles-for-the-dropdown-menu/002">
              <Canvas of={BoxedDropdownStyleStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">\n  <a class="navbar-item">\n    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n  </a>\n\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown is-boxed">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-4'}>
          {' Active dropdown navbar item '}
        </h4>
        <div data-official-prose="" className={'columns'}>
          <div
            data-official-prose=""
            className={'column'}
            data-source-example={
              'components-navbar/active-dropdown-navbar-item/001'
            }
          >
            <div data-official-example="components-navbar/active-dropdown-navbar-item/001">
              <Canvas of={SelectedDropdownItemStory} />
            </div>
          </div>
          <div data-official-prose="" className={'column'}>
            <div data-official-prose="" className={'highlight'}>
              <pre data-official-prose="">
                <code data-official-prose="" className={'language-html'}>
                  {
                    '\n<nav class="navbar" role="navigation" aria-label="dropdown navigation">\n  <a class="navbar-item">\n    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>\n</svg>\n\n  </a>\n\n  <div class="navbar-item has-dropdown is-active">\n    <a class="navbar-link">\n      Docs\n    </a>\n\n    <div class="navbar-dropdown">\n      <a class="navbar-item">\n        Overview\n      </a>\n      <a class="navbar-item is-selected">\n        Elements\n      </a>\n      <a class="navbar-item">\n        Components\n      </a>\n      <hr class="navbar-divider">\n      <div class="navbar-item">\n        Version 1.0.4\n      </div>\n    </div>\n  </div>\n</nav>\n\n<section class="hero is-primary">\n  <div class="hero-body">\n    <p class="title">\n      Documentation\n    </p>\n    <p class="subtitle">\n      Everything you need to <strong>create a website</strong> with Bulma\n    </p>\n  </div>\n</section>\n'
                  }
                </code>
              </pre>
            </div>
          </div>
        </div>
        <h4 data-official-prose="" className={'title is-4'}>
          {' Dropdown divider '}
        </h4>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can add a '}
            <code data-official-prose="">{'navbar-divider'}</code>
            {' to display a '}
            <strong data-official-prose="">{'horizontal rule'}</strong>
            {' in a '}
            <code data-official-prose="">{'navbar-dropdown'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {'\n<hr class="navbar-divider">\n'}
            </code>
          </pre>
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
            {' You can change the background color of the '}
            <code data-official-prose="">{'navbar'}</code>
            {' by using one of the '}
            <strong data-official-prose="">{'9 color modifiers:'}</strong>
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
        <div data-official-prose="" className={'highlight'}>
          <pre data-official-prose="">
            <code data-official-prose="" className={'language-html'}>
              {
                '\n<nav class="navbar is-primary">\n  <!-- navbar brand, navbar menu... -->\n</nav>\n'
              }
            </code>
          </pre>
        </div>
        <div data-official-example="components-navbar/colors/001">
          <Canvas of={DefaultNavbarColorStory} />
        </div>
        <div data-official-example="components-navbar/colors/002">
          <Canvas of={PrimaryNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/003">
          <Canvas of={LinkNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/004">
          <Canvas of={InfoNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/005">
          <Canvas of={SuccessNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/006">
          <Canvas of={WarningNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/007">
          <Canvas of={DangerNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/008">
          <Canvas of={BlackNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/009">
          <Canvas of={DarkNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/010">
          <Canvas of={LightNavbarStory} />
        </div>
        <div data-official-example="components-navbar/colors/011">
          <Canvas of={WhiteNavbarStory} />
        </div>
        <h3
          data-official-prose=""
          id={'navbar-helper-classes'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Navbar Helper Classes '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#navbar-helper-classes'}
          >
            {' # '}
          </a>
        </h3>
        <table data-official-prose="" className={'table is-bordered'}>
          <tbody data-official-prose="">
            <tr data-official-prose="">
              <th data-official-prose="">{'Type'}</th>
              <th data-official-prose="">{'Name'}</th>
              <th data-official-prose="">{'Description'}</th>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="" rowSpan={1}>
                {'Spacing'}
              </th>
              <td data-official-prose="">
                <code data-official-prose="">{'is-spaced'}</code>
              </td>
              <td data-official-prose="">
                {'Sets '}
                <strong data-official-prose="">{'Top'}</strong>
                {' and '}
                <strong data-official-prose="">{'Bottom'}</strong>
                {' paddings with '}
                <strong data-official-prose="">{'1rem'}</strong>
                {', '}
                <br data-official-prose="" />{' '}
                <strong data-official-prose="">{'Left'}</strong>
                {' and '}
                <strong data-official-prose="">{'Right'}</strong>
                {' paddings with '}
                <strong data-official-prose="">{'2rem'}</strong>
              </td>
            </tr>
            <tr data-official-prose="">
              <th data-official-prose="" rowSpan={1}>
                {'Shading'}
              </th>
              <td data-official-prose="">
                <code data-official-prose="">{'has-shadow'}</code>
              </td>
              <td data-official-prose="">
                {'Adds a small amount of box-shadow around the navbar'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </OfficialDocument>
  )
}

function CompleteNavbarDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'main navigation'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'black'}
                  className={'bd-svg-black'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'#00D1B2'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              role={'button'}
              aria-label={'menu'}
              aria-expanded={'false'}
              data-target={'navbarBasicExample'}
              as={'a'}
            >
              <span aria-hidden={'true'} />
              <span aria-hidden={'true'} />
              <span aria-hidden={'true'} />
              <span aria-hidden={'true'} />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navbarBasicExample'}>
            <NavbarStart>
              <NavbarItem>Home</NavbarItem>
              <NavbarItem>Documentation</NavbarItem>
              <NavbarDropdown hoverable as={'div'} trigger={<>More</>}>
                <NavbarItem>About</NavbarItem>
                <NavbarItem className={'rb-is-selected'}>Jobs</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Report an issue</NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Buttons>
                  <LinkButton color={'primary'}>
                    <strong>Sign up</strong>
                  </LinkButton>
                  <LinkButton color={'light'}>Log in</LinkButton>
                </Buttons>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function NavbarBrandDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'main navigation'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'black'}
                  className={'bd-svg-black'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'#00D1B2'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              role={'button'}
              aria-label={'menu'}
              aria-expanded={'false'}
              as={'a'}
            >
              <span aria-hidden={'true'} />
              <span aria-hidden={'true'} />
              <span aria-hidden={'true'} />
              <span aria-hidden={'true'} />
            </NavbarBurger>
          </NavbarBrand>
        </Navbar>
      </div>
    </>
  )
}

function ClosedBurgerDemo() {
  return (
    <>
      <div
        style={{ ...{ marginBottom: '1.5rem', width: '2.5rem' } }}
        className={'example rb-is-paddingless'}
      >
        <NavbarBurger
          role={'button'}
          aria-label={'menu'}
          aria-expanded={'false'}
          style={{ ...{ display: 'flex' } }}
          as={'a'}
        >
          <span aria-hidden={'true'} />
          <span aria-hidden={'true'} />
          <span aria-hidden={'true'} />
          <span aria-hidden={'true'} />
        </NavbarBurger>
      </div>
    </>
  )
}

function ExpandedBurgerDemo() {
  return (
    <>
      <div
        style={{ ...{ width: '2.5rem' } }}
        className={'example rb-is-paddingless'}
      >
        <NavbarBurger
          role={'button'}
          aria-label={'menu'}
          aria-expanded={'false'}
          style={{ ...{ display: 'flex' } }}
          defaultExpanded
          as={'a'}
        >
          <span aria-hidden={'true'} />
          <span aria-hidden={'true'} />
          <span aria-hidden={'true'} />
          <span aria-hidden={'true'} />
        </NavbarBurger>
      </div>
    </>
  )
}

function TransparentNavbarDemo() {
  return (
    <>
      <Navbar transparent>
        <NavbarBrand>
          <NavbarItem href={'https://bulma.io/'}>
            <svg
              width={'640'}
              height={'160'}
              viewBox={'0 0 640 160'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              {' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={
                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                }
                fill={'black'}
                className={'bd-svg-black'}
              />{' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                fill={'#00D1B2'}
              />{' '}
            </svg>
          </NavbarItem>
          <NavbarBurger
            data-target={'navbarExampleTransparentExample'}
            className={'js-burger'}
            as={'div'}
          >
            <span />
            <span />
            <span />
            <span />
          </NavbarBurger>
        </NavbarBrand>
        <NavbarMenu id={'navbarExampleTransparentExample'}>
          <NavbarStart>
            <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
            <NavbarDropdown
              defaultOpen
              boxed
              as={'div'}
              trigger={<>Docs</>}
              triggerProps={{
                href: 'https://bulma.io/documentation/overview/start/',
              }}
            >
              <NavbarItem
                href={'https://bulma.io/documentation/overview/start/'}
              >
                Overview
              </NavbarItem>
              <NavbarItem
                href={'https://bulma.io/documentation/overview/modifiers/'}
              >
                Modifiers
              </NavbarItem>
              <NavbarDivider />
              <NavbarItem
                href={'https://bulma.io/documentation/columns/basics/'}
              >
                Columns
              </NavbarItem>
              <NavbarItem
                href={'https://bulma.io/documentation/layout/container/'}
                className={'rb-is-selected'}
              >
                Layout
              </NavbarItem>
              <NavbarItem href={'https://bulma.io/documentation/form/general/'}>
                Form
              </NavbarItem>
              <NavbarItem href={'https://bulma.io/documentation/elements/box/'}>
                Elements
              </NavbarItem>
              <NavbarItem
                href={'https://bulma.io/documentation/components/breadcrumb/'}
              >
                Components
              </NavbarItem>
            </NavbarDropdown>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem as={'div'}>
              <Field layout={'grouped'}>
                <Control as={'p'}>
                  <LinkButton
                    data-social-network={'Twitter'}
                    data-social-action={'tweet'}
                    data-social-target={'https://bulma.io'}
                    target={'_blank'}
                    href={
                      'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                    }
                    className={'bd-tw-button'}
                  >
                    <Icon>
                      <i className={'fab fa-twitter'} />
                    </Icon>
                    <span> Tweet </span>
                  </LinkButton>
                </Control>
                <Control as={'p'}>
                  <LinkButton
                    href={
                      'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                    }
                    color={'primary'}
                  >
                    <Icon>
                      <i className={'fas fa-download'} />
                    </Icon>
                    <span>Download</span>
                  </LinkButton>
                </Control>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </>
  )
}

function ToggleFixedBottomNavbarDemo() {
  return (
    <>
      <Buttons id={'navbarToggles'}>
        <LinkButton id={'navbarFixBottom'} color={'link'}>
          <span>
            <span id={'navbarFixBottomText'}>Show</span> <strong>bottom</strong>{' '}
            navbar
          </span>
        </LinkButton>
      </Buttons>
    </>
  )
}

function NavbarDropdownDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>
          <NavbarDropdown as={'div'} trigger={<>Docs</>}>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
          </NavbarDropdown>
        </Navbar>
      </div>
    </>
  )
}

function HoverableDropdownDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>
          <NavbarDropdown hoverable as={'div'} trigger={<>Docs</>}>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
          </NavbarDropdown>
        </Navbar>
      </div>
    </>
  )
}

function ActiveDropdownDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>
          <NavbarDropdown defaultOpen as={'div'} trigger={<>Docs</>}>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
          </NavbarDropdown>
        </Navbar>
      </div>
    </>
  )
}

function DropdownAlignmentDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>
          <NavbarMenu>
            <NavbarStart>
              <NavbarDropdown defaultOpen as={'div'} trigger={<>Left</>}>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem>Components</NavbarItem>
                <NavbarDivider />
                <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarDropdown defaultOpen right as={'div'} trigger={<>Right</>}>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem>Components</NavbarItem>
                <NavbarDivider />
                <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
              </NavbarDropdown>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
        <Hero color={'primary'}>
          <HeroBody>
            <Title as={'p'}>Documentation</Title>
            <Subtitle as={'p'}>
              Everything you need to <strong>create a website</strong> with
              Bulma
            </Subtitle>
          </HeroBody>
        </Hero>
      </div>
    </>
  )
}

function NavbarDropupDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Hero color={'primary'}>
          <HeroBody>
            <Title as={'p'}>Documentation</Title>
            <Subtitle as={'p'}>
              Everything you need to <strong>create a website</strong> with
              Bulma
            </Subtitle>
          </HeroBody>
        </Hero>
        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>
          <NavbarMenu>
            <NavbarStart>
              <NavbarDropdown up defaultOpen as={'div'} trigger={<>Dropup</>}>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem>Components</NavbarItem>
                <NavbarDivider />
                <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function ArrowlessDropdownDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <NavbarDropdown
          hoverable
          as={'div'}
          trigger={<>Link without arrow</>}
          arrowless
        >
          <NavbarItem>Overview</NavbarItem>
          <NavbarItem>Elements</NavbarItem>
          <NavbarItem>Components</NavbarItem>
          <NavbarDivider />
          <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
        </NavbarDropdown>
      </div>
    </>
  )
}

function DefaultDropdownStyleDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>
          <NavbarItem>
            <svg
              width={'640'}
              height={'160'}
              viewBox={'0 0 640 160'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              {' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={
                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                }
                fill={'black'}
                className={'bd-svg-black'}
              />{' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                fill={'#00D1B2'}
              />{' '}
            </svg>
          </NavbarItem>
          <NavbarDropdown defaultOpen as={'div'} trigger={<>Docs</>}>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
          </NavbarDropdown>
        </Navbar>
        <Hero color={'primary'}>
          <HeroBody>
            <Title as={'p'}>Documentation</Title>
            <Subtitle as={'p'}>
              Everything you need to <strong>create a website</strong> with
              Bulma
            </Subtitle>
          </HeroBody>
        </Hero>
      </div>
    </>
  )
}

function BoxedDropdownStyleDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar
          role={'navigation'}
          aria-label={'dropdown navigation'}
          transparent
        >
          <NavbarItem>
            <svg
              width={'640'}
              height={'160'}
              viewBox={'0 0 640 160'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              {' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={
                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                }
                fill={'black'}
                className={'bd-svg-black'}
              />{' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                fill={'#00D1B2'}
              />{' '}
            </svg>
          </NavbarItem>
          <NavbarDropdown defaultOpen boxed as={'div'} trigger={<>Docs</>}>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
          </NavbarDropdown>
        </Navbar>
        <Hero>
          <HeroBody>
            <Title as={'p'}>Documentation</Title>
            <Subtitle as={'p'}>
              Everything you need to <strong>create a website</strong> with
              Bulma
            </Subtitle>
          </HeroBody>
        </Hero>
      </div>
    </>
  )
}

function SelectedDropdownItemDemo() {
  return (
    <>
      <div className={'bd-example is-paddingless'}>
        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>
          <NavbarItem>
            <svg
              width={'640'}
              height={'160'}
              viewBox={'0 0 640 160'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              {' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={
                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                }
                fill={'black'}
                className={'bd-svg-black'}
              />{' '}
              <path
                fillRule={'evenodd'}
                clipRule={'evenodd'}
                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                fill={'#00D1B2'}
              />{' '}
            </svg>
          </NavbarItem>
          <NavbarDropdown defaultOpen as={'div'} trigger={<>Docs</>}>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem className={'rb-is-selected'}>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>
          </NavbarDropdown>
        </Navbar>
        <Hero color={'primary'}>
          <HeroBody>
            <Title as={'p'}>Documentation</Title>
            <Subtitle as={'p'}>
              Everything you need to <strong>create a website</strong> with
              Bulma
            </Subtitle>
          </HeroBody>
        </Hero>
      </div>
    </>
  )
}

function DefaultNavbarColorDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'black'}
                  className={'bd-svg-black'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'#00D1B2'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navbarExample'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navbarExample'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                  className={'rb-is-selected'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
                      data-social-network={'Twitter'}
                      data-social-action={'tweet'}
                      data-social-target={'https://bulma.io'}
                      target={'_blank'}
                      href={
                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'
                      }
                      className={'bd-tw-button'}
                    >
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'primary'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function PrimaryNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'primary'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorprimary-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorprimary-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'primary'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function LinkNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'link'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorlink-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorlink-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'link'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function InfoNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'info'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorinfo-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorinfo-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'info'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function SuccessNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'success'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorsuccess-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorsuccess-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'success'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function WarningNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'warning'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorwarning-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorwarning-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'warning'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function DangerNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'danger'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColordanger-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColordanger-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'danger'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function BlackNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'black'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorblack-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorblack-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'black'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function DarkNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'dark'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColordark-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColordark-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'dark'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function LightNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'light'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorlight-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorlight-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

function WhiteNavbarDemo() {
  return (
    <>
      <div
        style={{ ...{ height: '30rem' } }}
        className={'bd-example is-paddingless'}
      >
        <Navbar color={'white'}>
          <NavbarBrand>
            <NavbarItem href={'https://bulma.io/'}>
              <svg
                width={'640'}
                height={'160'}
                viewBox={'0 0 640 160'}
                fill={'none'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                {' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={
                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'
                  }
                  fill={'currentColor'}
                />{' '}
                <path
                  fillRule={'evenodd'}
                  clipRule={'evenodd'}
                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}
                  fill={'currentColor'}
                />{' '}
              </svg>
            </NavbarItem>
            <NavbarBurger
              data-target={'navMenuColorwhite-example'}
              className={'js-burger'}
              as={'div'}
            >
              <span />
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu id={'navMenuColorwhite-example'}>
            <NavbarStart>
              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>
              <NavbarDropdown
                defaultOpen
                as={'div'}
                trigger={<>Docs</>}
                triggerProps={{
                  href: 'https://bulma.io/documentation/overview/start/',
                }}
              >
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/start/'}
                >
                  Overview
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/overview/modifiers/'}
                >
                  Modifiers
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/columns/basics/'}
                >
                  Columns
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/layout/container/'}
                >
                  Layout
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/form/general/'}
                >
                  Form
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem
                  href={'https://bulma.io/documentation/elements/box/'}
                >
                  Elements
                </NavbarItem>
                <NavbarItem
                  href={'https://bulma.io/documentation/components/breadcrumb/'}
                  active
                >
                  Components
                </NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Field layout={'grouped'}>
                  <Control as={'p'}>
                    <LinkButton
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
                      <Icon>
                        <i className={'fab fa-twitter'} />
                      </Icon>
                      <span> Tweet </span>
                    </LinkButton>
                  </Control>
                  <Control as={'p'}>
                    <LinkButton
                      href={
                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'
                      }
                      color={'white'}
                      tone={'light'}
                    >
                      <Icon>
                        <i className={'fas fa-download'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}

export const CompleteNavbarStory = {
  name: 'Complete navbar',
  parameters: {
    official: { id: 'components-navbar/basic-navbar/001' },
    docs: {
      source: {
        code: "import {\n  Buttons,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction CompleteNavbarDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'main navigation'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'black'}\n                  className={'bd-svg-black'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'#00D1B2'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              role={'button'}\n              aria-label={'menu'}\n              aria-expanded={'false'}\n              data-target={'navbarBasicExample'}\n              as={'a'}\n            >\n              <span aria-hidden={'true'} />\n              <span aria-hidden={'true'} />\n              <span aria-hidden={'true'} />\n              <span aria-hidden={'true'} />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navbarBasicExample'}>\n            <NavbarStart>\n              <NavbarItem>Home</NavbarItem>\n              <NavbarItem>Documentation</NavbarItem>\n              <NavbarDropdown hoverable as={'div'} trigger={<>More</>}>\n                <NavbarItem>About</NavbarItem>\n                <NavbarItem className={'rb-is-selected'}>Jobs</NavbarItem>\n                <NavbarItem>Contact</NavbarItem>\n                <NavbarDivider />\n                <NavbarItem>Report an issue</NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Buttons>\n                  <LinkButton color={'primary'}>\n                    <strong>Sign up</strong>\n                  </LinkButton>\n                  <LinkButton color={'light'}>Log in</LinkButton>\n                </Buttons>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CompleteNavbarDemo,
} satisfies StoryObj

export const NavbarBrandStory = {
  name: 'Navbar brand',
  parameters: {
    official: { id: 'components-navbar/navbar-brand/001' },
    docs: {
      source: {
        code: "import {\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarItem,\n} from '@seagreenio/react-bulma'\n\nfunction NavbarBrandDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'main navigation'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'black'}\n                  className={'bd-svg-black'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'#00D1B2'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              role={'button'}\n              aria-label={'menu'}\n              aria-expanded={'false'}\n              as={'a'}\n            >\n              <span aria-hidden={'true'} />\n              <span aria-hidden={'true'} />\n              <span aria-hidden={'true'} />\n              <span aria-hidden={'true'} />\n            </NavbarBurger>\n          </NavbarBrand>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NavbarBrandDemo,
} satisfies StoryObj

export const ClosedBurgerStory = {
  name: 'Closed burger',
  parameters: {
    official: { id: 'components-navbar/navbar-burger/001' },
    docs: {
      source: {
        code: "import { NavbarBurger } from '@seagreenio/react-bulma'\n\nfunction ClosedBurgerDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ marginBottom: '1.5rem', width: '2.5rem' } }}\n        className={'example rb-is-paddingless'}\n      >\n        <NavbarBurger\n          role={'button'}\n          aria-label={'menu'}\n          aria-expanded={'false'}\n          style={{ ...{ display: 'flex' } }}\n          as={'a'}\n        >\n          <span aria-hidden={'true'} />\n          <span aria-hidden={'true'} />\n          <span aria-hidden={'true'} />\n          <span aria-hidden={'true'} />\n        </NavbarBurger>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ClosedBurgerDemo,
} satisfies StoryObj

export const ExpandedBurgerStory = {
  name: 'Expanded burger',
  parameters: {
    official: { id: 'components-navbar/navbar-burger/002' },
    docs: {
      source: {
        code: "import { NavbarBurger } from '@seagreenio/react-bulma'\n\nfunction ExpandedBurgerDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ width: '2.5rem' } }}\n        className={'example rb-is-paddingless'}\n      >\n        <NavbarBurger\n          role={'button'}\n          aria-label={'menu'}\n          aria-expanded={'false'}\n          style={{ ...{ display: 'flex' } }}\n          defaultExpanded\n          as={'a'}\n        >\n          <span aria-hidden={'true'} />\n          <span aria-hidden={'true'} />\n          <span aria-hidden={'true'} />\n          <span aria-hidden={'true'} />\n        </NavbarBurger>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ExpandedBurgerDemo,
} satisfies StoryObj

export const TransparentNavbarStory = {
  name: 'Transparent navbar',
  parameters: {
    official: { id: 'components-navbar/transparent-navbar/001' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction TransparentNavbarDemo() {\n  return (\n    <>\n      <Navbar transparent>\n        <NavbarBrand>\n          <NavbarItem href={'https://bulma.io/'}>\n            <svg\n              width={'640'}\n              height={'160'}\n              viewBox={'0 0 640 160'}\n              fill={'none'}\n              xmlns={'http://www.w3.org/2000/svg'}\n            >\n              {' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={\n                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                }\n                fill={'black'}\n                className={'bd-svg-black'}\n              />{' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                fill={'#00D1B2'}\n              />{' '}\n            </svg>\n          </NavbarItem>\n          <NavbarBurger\n            data-target={'navbarExampleTransparentExample'}\n            className={'js-burger'}\n            as={'div'}\n          >\n            <span />\n            <span />\n            <span />\n            <span />\n          </NavbarBurger>\n        </NavbarBrand>\n        <NavbarMenu id={'navbarExampleTransparentExample'}>\n          <NavbarStart>\n            <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n            <NavbarDropdown\n              defaultOpen\n              boxed\n              as={'div'}\n              trigger={<>Docs</>}\n              triggerProps={{\n                href: 'https://bulma.io/documentation/overview/start/',\n              }}\n            >\n              <NavbarItem\n                href={'https://bulma.io/documentation/overview/start/'}\n              >\n                Overview\n              </NavbarItem>\n              <NavbarItem\n                href={'https://bulma.io/documentation/overview/modifiers/'}\n              >\n                Modifiers\n              </NavbarItem>\n              <NavbarDivider />\n              <NavbarItem\n                href={'https://bulma.io/documentation/columns/basics/'}\n              >\n                Columns\n              </NavbarItem>\n              <NavbarItem\n                href={'https://bulma.io/documentation/layout/container/'}\n                className={'rb-is-selected'}\n              >\n                Layout\n              </NavbarItem>\n              <NavbarItem href={'https://bulma.io/documentation/form/general/'}>\n                Form\n              </NavbarItem>\n              <NavbarItem href={'https://bulma.io/documentation/elements/box/'}>\n                Elements\n              </NavbarItem>\n              <NavbarItem\n                href={'https://bulma.io/documentation/components/breadcrumb/'}\n              >\n                Components\n              </NavbarItem>\n            </NavbarDropdown>\n          </NavbarStart>\n          <NavbarEnd>\n            <NavbarItem as={'div'}>\n              <Field layout={'grouped'}>\n                <Control as={'p'}>\n                  <LinkButton\n                    data-social-network={'Twitter'}\n                    data-social-action={'tweet'}\n                    data-social-target={'https://bulma.io'}\n                    target={'_blank'}\n                    href={\n                      'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                    }\n                    className={'bd-tw-button'}\n                  >\n                    <Icon>\n                      <i className={'fab fa-twitter'} />\n                    </Icon>\n                    <span> Tweet </span>\n                  </LinkButton>\n                </Control>\n                <Control as={'p'}>\n                  <LinkButton\n                    href={\n                      'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                    }\n                    color={'primary'}\n                  >\n                    <Icon>\n                      <i className={'fas fa-download'} />\n                    </Icon>\n                    <span>Download</span>\n                  </LinkButton>\n                </Control>\n              </Field>\n            </NavbarItem>\n          </NavbarEnd>\n        </NavbarMenu>\n      </Navbar>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TransparentNavbarDemo,
} satisfies StoryObj

export const ToggleFixedBottomNavbarStory = {
  name: 'Toggle fixed bottom navbar',
  parameters: {
    official: { id: 'components-navbar/try-it-out/001' },
    docs: {
      source: {
        code: "import { Buttons, LinkButton } from '@seagreenio/react-bulma'\n\nfunction ToggleFixedBottomNavbarDemo() {\n  return (\n    <>\n      <Buttons id={'navbarToggles'}>\n        <LinkButton id={'navbarFixBottom'} color={'link'}>\n          <span>\n            <span id={'navbarFixBottomText'}>Show</span> <strong>bottom</strong>{' '}\n            navbar\n          </span>\n        </LinkButton>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ToggleFixedBottomNavbarDemo,
} satisfies StoryObj

export const NavbarDropdownStory = {
  name: 'Navbar dropdown',
  parameters: {
    official: { id: 'components-navbar/dropdown-menu/001' },
    docs: {
      source: {
        code: "import {\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n} from '@seagreenio/react-bulma'\n\nfunction NavbarDropdownDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>\n          <NavbarDropdown as={'div'} trigger={<>Docs</>}>\n            <NavbarItem>Overview</NavbarItem>\n            <NavbarItem>Elements</NavbarItem>\n            <NavbarItem>Components</NavbarItem>\n            <NavbarDivider />\n            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n          </NavbarDropdown>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NavbarDropdownDemo,
} satisfies StoryObj

export const HoverableDropdownStory = {
  name: 'Hoverable dropdown',
  parameters: {
    official: {
      id: 'components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/001',
    },
    docs: {
      source: {
        code: "import {\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n} from '@seagreenio/react-bulma'\n\nfunction HoverableDropdownDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>\n          <NavbarDropdown hoverable as={'div'} trigger={<>Docs</>}>\n            <NavbarItem>Overview</NavbarItem>\n            <NavbarItem>Elements</NavbarItem>\n            <NavbarItem>Components</NavbarItem>\n            <NavbarDivider />\n            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n          </NavbarDropdown>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HoverableDropdownDemo,
} satisfies StoryObj

export const ActiveDropdownStory = {
  name: 'Active dropdown',
  parameters: {
    official: {
      id: 'components-navbar/show-hide-the-dropdown-with-either-css-or-javascript/002',
    },
    docs: {
      source: {
        code: "import {\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n} from '@seagreenio/react-bulma'\n\nfunction ActiveDropdownDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>\n          <NavbarDropdown defaultOpen as={'div'} trigger={<>Docs</>}>\n            <NavbarItem>Overview</NavbarItem>\n            <NavbarItem>Elements</NavbarItem>\n            <NavbarItem>Components</NavbarItem>\n            <NavbarDivider />\n            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n          </NavbarDropdown>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ActiveDropdownDemo,
} satisfies StoryObj

export const DropdownAlignmentStory = {
  name: 'Dropdown alignment',
  parameters: {
    official: { id: 'components-navbar/right-dropdown/001' },
    docs: {
      source: {
        code: "import {\n  Hero,\n  HeroBody,\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n  Subtitle,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction DropdownAlignmentDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>\n          <NavbarMenu>\n            <NavbarStart>\n              <NavbarDropdown defaultOpen as={'div'} trigger={<>Left</>}>\n                <NavbarItem>Overview</NavbarItem>\n                <NavbarItem>Elements</NavbarItem>\n                <NavbarItem>Components</NavbarItem>\n                <NavbarDivider />\n                <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarDropdown defaultOpen right as={'div'} trigger={<>Right</>}>\n                <NavbarItem>Overview</NavbarItem>\n                <NavbarItem>Elements</NavbarItem>\n                <NavbarItem>Components</NavbarItem>\n                <NavbarDivider />\n                <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n              </NavbarDropdown>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n        <Hero color={'primary'}>\n          <HeroBody>\n            <Title as={'p'}>Documentation</Title>\n            <Subtitle as={'p'}>\n              Everything you need to <strong>create a website</strong> with\n              Bulma\n            </Subtitle>\n          </HeroBody>\n        </Hero>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DropdownAlignmentDemo,
} satisfies StoryObj

export const NavbarDropupStory = {
  name: 'Navbar dropup',
  parameters: {
    official: { id: 'components-navbar/dropup/001' },
    docs: {
      source: {
        code: "import {\n  Hero,\n  HeroBody,\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n  Subtitle,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction NavbarDropupDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Hero color={'primary'}>\n          <HeroBody>\n            <Title as={'p'}>Documentation</Title>\n            <Subtitle as={'p'}>\n              Everything you need to <strong>create a website</strong> with\n              Bulma\n            </Subtitle>\n          </HeroBody>\n        </Hero>\n        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>\n          <NavbarMenu>\n            <NavbarStart>\n              <NavbarDropdown up defaultOpen as={'div'} trigger={<>Dropup</>}>\n                <NavbarItem>Overview</NavbarItem>\n                <NavbarItem>Elements</NavbarItem>\n                <NavbarItem>Components</NavbarItem>\n                <NavbarDivider />\n                <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NavbarDropupDemo,
} satisfies StoryObj

export const ArrowlessDropdownStory = {
  name: 'Arrowless dropdown',
  parameters: {
    official: { id: 'components-navbar/dropdown-without-arrow/001' },
    docs: {
      source: {
        code: "import {\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n} from '@seagreenio/react-bulma'\n\nfunction ArrowlessDropdownDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <NavbarDropdown\n          hoverable\n          as={'div'}\n          trigger={<>Link without arrow</>}\n          arrowless\n        >\n          <NavbarItem>Overview</NavbarItem>\n          <NavbarItem>Elements</NavbarItem>\n          <NavbarItem>Components</NavbarItem>\n          <NavbarDivider />\n          <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n        </NavbarDropdown>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ArrowlessDropdownDemo,
} satisfies StoryObj

export const DefaultDropdownStyleStory = {
  name: 'Default dropdown style',
  parameters: {
    official: { id: 'components-navbar/styles-for-the-dropdown-menu/001' },
    docs: {
      source: {
        code: "import {\n  Hero,\n  HeroBody,\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n  Subtitle,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction DefaultDropdownStyleDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>\n          <NavbarItem>\n            <svg\n              width={'640'}\n              height={'160'}\n              viewBox={'0 0 640 160'}\n              fill={'none'}\n              xmlns={'http://www.w3.org/2000/svg'}\n            >\n              {' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={\n                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                }\n                fill={'black'}\n                className={'bd-svg-black'}\n              />{' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                fill={'#00D1B2'}\n              />{' '}\n            </svg>\n          </NavbarItem>\n          <NavbarDropdown defaultOpen as={'div'} trigger={<>Docs</>}>\n            <NavbarItem>Overview</NavbarItem>\n            <NavbarItem>Elements</NavbarItem>\n            <NavbarItem>Components</NavbarItem>\n            <NavbarDivider />\n            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n          </NavbarDropdown>\n        </Navbar>\n        <Hero color={'primary'}>\n          <HeroBody>\n            <Title as={'p'}>Documentation</Title>\n            <Subtitle as={'p'}>\n              Everything you need to <strong>create a website</strong> with\n              Bulma\n            </Subtitle>\n          </HeroBody>\n        </Hero>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultDropdownStyleDemo,
} satisfies StoryObj

export const BoxedDropdownStyleStory = {
  name: 'Boxed dropdown style',
  parameters: {
    official: { id: 'components-navbar/styles-for-the-dropdown-menu/002' },
    docs: {
      source: {
        code: "import {\n  Hero,\n  HeroBody,\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n  Subtitle,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction BoxedDropdownStyleDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar\n          role={'navigation'}\n          aria-label={'dropdown navigation'}\n          transparent\n        >\n          <NavbarItem>\n            <svg\n              width={'640'}\n              height={'160'}\n              viewBox={'0 0 640 160'}\n              fill={'none'}\n              xmlns={'http://www.w3.org/2000/svg'}\n            >\n              {' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={\n                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                }\n                fill={'black'}\n                className={'bd-svg-black'}\n              />{' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                fill={'#00D1B2'}\n              />{' '}\n            </svg>\n          </NavbarItem>\n          <NavbarDropdown defaultOpen boxed as={'div'} trigger={<>Docs</>}>\n            <NavbarItem>Overview</NavbarItem>\n            <NavbarItem>Elements</NavbarItem>\n            <NavbarItem>Components</NavbarItem>\n            <NavbarDivider />\n            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n          </NavbarDropdown>\n        </Navbar>\n        <Hero>\n          <HeroBody>\n            <Title as={'p'}>Documentation</Title>\n            <Subtitle as={'p'}>\n              Everything you need to <strong>create a website</strong> with\n              Bulma\n            </Subtitle>\n          </HeroBody>\n        </Hero>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BoxedDropdownStyleDemo,
} satisfies StoryObj

export const SelectedDropdownItemStory = {
  name: 'Selected dropdown item',
  parameters: {
    official: { id: 'components-navbar/active-dropdown-navbar-item/001' },
    docs: {
      source: {
        code: "import {\n  Hero,\n  HeroBody,\n  Navbar,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarItem,\n  Subtitle,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction SelectedDropdownItemDemo() {\n  return (\n    <>\n      <div className={'bd-example is-paddingless'}>\n        <Navbar role={'navigation'} aria-label={'dropdown navigation'}>\n          <NavbarItem>\n            <svg\n              width={'640'}\n              height={'160'}\n              viewBox={'0 0 640 160'}\n              fill={'none'}\n              xmlns={'http://www.w3.org/2000/svg'}\n            >\n              {' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={\n                  'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                }\n                fill={'black'}\n                className={'bd-svg-black'}\n              />{' '}\n              <path\n                fillRule={'evenodd'}\n                clipRule={'evenodd'}\n                d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                fill={'#00D1B2'}\n              />{' '}\n            </svg>\n          </NavbarItem>\n          <NavbarDropdown defaultOpen as={'div'} trigger={<>Docs</>}>\n            <NavbarItem>Overview</NavbarItem>\n            <NavbarItem className={'rb-is-selected'}>Elements</NavbarItem>\n            <NavbarItem>Components</NavbarItem>\n            <NavbarDivider />\n            <NavbarItem as={'div'}>Version 1.0.4</NavbarItem>\n          </NavbarDropdown>\n        </Navbar>\n        <Hero color={'primary'}>\n          <HeroBody>\n            <Title as={'p'}>Documentation</Title>\n            <Subtitle as={'p'}>\n              Everything you need to <strong>create a website</strong> with\n              Bulma\n            </Subtitle>\n          </HeroBody>\n        </Hero>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SelectedDropdownItemDemo,
} satisfies StoryObj

export const DefaultNavbarColorStory = {
  name: 'Default navbar color',
  parameters: {
    official: { id: 'components-navbar/colors/001' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction DefaultNavbarColorDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'black'}\n                  className={'bd-svg-black'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'#00D1B2'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navbarExample'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navbarExample'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                  className={'rb-is-selected'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'primary'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultNavbarColorDemo,
} satisfies StoryObj

export const PrimaryNavbarStory = {
  name: 'Primary navbar',
  parameters: {
    official: { id: 'components-navbar/colors/002' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction PrimaryNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'primary'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorprimary-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorprimary-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'primary'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'primary'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryNavbarDemo,
} satisfies StoryObj

export const LinkNavbarStory = {
  name: 'Link navbar',
  parameters: {
    official: { id: 'components-navbar/colors/003' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction LinkNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'link'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorlink-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorlink-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'link'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'link'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkNavbarDemo,
} satisfies StoryObj

export const InfoNavbarStory = {
  name: 'Info navbar',
  parameters: {
    official: { id: 'components-navbar/colors/004' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction InfoNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'info'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorinfo-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorinfo-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'info'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'info'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoNavbarDemo,
} satisfies StoryObj

export const SuccessNavbarStory = {
  name: 'Success navbar',
  parameters: {
    official: { id: 'components-navbar/colors/005' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction SuccessNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'success'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorsuccess-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorsuccess-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'success'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'success'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessNavbarDemo,
} satisfies StoryObj

export const WarningNavbarStory = {
  name: 'Warning navbar',
  parameters: {
    official: { id: 'components-navbar/colors/006' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction WarningNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'warning'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorwarning-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorwarning-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'warning'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'warning'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningNavbarDemo,
} satisfies StoryObj

export const DangerNavbarStory = {
  name: 'Danger navbar',
  parameters: {
    official: { id: 'components-navbar/colors/007' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction DangerNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'danger'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColordanger-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColordanger-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'danger'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'danger'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerNavbarDemo,
} satisfies StoryObj

export const BlackNavbarStory = {
  name: 'Black navbar',
  parameters: {
    official: { id: 'components-navbar/colors/008' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction BlackNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'black'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorblack-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorblack-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'black'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'black'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: BlackNavbarDemo,
} satisfies StoryObj

export const DarkNavbarStory = {
  name: 'Dark navbar',
  parameters: {
    official: { id: 'components-navbar/colors/009' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction DarkNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'dark'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColordark-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColordark-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'dark'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'dark'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DarkNavbarDemo,
} satisfies StoryObj

export const LightNavbarStory = {
  name: 'Light navbar',
  parameters: {
    official: { id: 'components-navbar/colors/010' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction LightNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'light'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorlight-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorlight-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'light'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LightNavbarDemo,
} satisfies StoryObj

export const WhiteNavbarStory = {
  name: 'White navbar',
  parameters: {
    official: { id: 'components-navbar/colors/011' },
    docs: {
      source: {
        code: "import {\n  Control,\n  Field,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarDivider,\n  NavbarDropdown,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n} from '@seagreenio/react-bulma'\n\nfunction WhiteNavbarDemo() {\n  return (\n    <>\n      <div\n        style={{ ...{ height: '30rem' } }}\n        className={'bd-example is-paddingless'}\n      >\n        <Navbar color={'white'}>\n          <NavbarBrand>\n            <NavbarItem href={'https://bulma.io/'}>\n              <svg\n                width={'640'}\n                height={'160'}\n                viewBox={'0 0 640 160'}\n                fill={'none'}\n                xmlns={'http://www.w3.org/2000/svg'}\n              >\n                {' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={\n                    'M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z'\n                  }\n                  fill={'currentColor'}\n                />{' '}\n                <path\n                  fillRule={'evenodd'}\n                  clipRule={'evenodd'}\n                  d={'M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z'}\n                  fill={'currentColor'}\n                />{' '}\n              </svg>\n            </NavbarItem>\n            <NavbarBurger\n              data-target={'navMenuColorwhite-example'}\n              className={'js-burger'}\n              as={'div'}\n            >\n              <span />\n              <span />\n              <span />\n              <span />\n            </NavbarBurger>\n          </NavbarBrand>\n          <NavbarMenu id={'navMenuColorwhite-example'}>\n            <NavbarStart>\n              <NavbarItem href={'https://bulma.io/'}>Home</NavbarItem>\n              <NavbarDropdown\n                defaultOpen\n                as={'div'}\n                trigger={<>Docs</>}\n                triggerProps={{\n                  href: 'https://bulma.io/documentation/overview/start/',\n                }}\n              >\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/start/'}\n                >\n                  Overview\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/overview/modifiers/'}\n                >\n                  Modifiers\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/columns/basics/'}\n                >\n                  Columns\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/layout/container/'}\n                >\n                  Layout\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/form/general/'}\n                >\n                  Form\n                </NavbarItem>\n                <NavbarDivider />\n                <NavbarItem\n                  href={'https://bulma.io/documentation/elements/box/'}\n                >\n                  Elements\n                </NavbarItem>\n                <NavbarItem\n                  href={'https://bulma.io/documentation/components/breadcrumb/'}\n                  active\n                >\n                  Components\n                </NavbarItem>\n              </NavbarDropdown>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Field layout={'grouped'}>\n                  <Control as={'p'}>\n                    <LinkButton\n                      data-social-network={'Twitter'}\n                      data-social-action={'tweet'}\n                      data-social-target={'https://bulma.io'}\n                      target={'_blank'}\n                      href={\n                        'https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms'\n                      }\n                      color={'white'}\n                      tone={'soft'}\n                      className={'bd-tw-button'}\n                    >\n                      <Icon>\n                        <i className={'fab fa-twitter'} />\n                      </Icon>\n                      <span> Tweet </span>\n                    </LinkButton>\n                  </Control>\n                  <Control as={'p'}>\n                    <LinkButton\n                      href={\n                        'https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip'\n                      }\n                      color={'white'}\n                      tone={'light'}\n                    >\n                      <Icon>\n                        <i className={'fas fa-download'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </Control>\n                </Field>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Navbar>\n      </div>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WhiteNavbarDemo,
} satisfies StoryObj

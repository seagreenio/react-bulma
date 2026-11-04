import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Content, Footer } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-footer',
      title: 'Footer',
      url: 'https://bulma.io/documentation/layout/footer/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-footer',
  title: 'CSS Library/Layout/Footer',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-footer" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Footer'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A simple responsive '}
          <strong data-official-prose="">{'footer'}</strong>
          {
            ' which can include anything: lists, headings, columns, icons, buttons, etc.'
          }
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The Bulma '}
            <strong data-official-prose="">{'footer'}</strong>
            {
              ' is a simple container, with lots of bottom padding, making it great as the last element of any webpage. '
            }
          </p>
        </div>
        <div data-official-example="layout-footer/basic/001">
          <Canvas of={CenteredFooterStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function CenteredFooterDemo() {
  return (
    <>
      <Footer>
        <Content helpers={{ textAlign: 'center' }}>
          <p>
            <strong>Bulma</strong> by{' '}
            <a href={'https://jgthms.com/'}>Jeremy Thomas</a>. The source code
            is licensed <a href={'https://opensource.org/license/mit'}>MIT</a>.
            The website content is licensed{' '}
            <a href={'https://creativecommons.org/licenses/by-nc-sa/4.0//'}>
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </Content>
      </Footer>
    </>
  )
}

export const CenteredFooterStory = {
  name: 'Centered footer',
  parameters: {
    official: { id: 'layout-footer/basic/001' },
    docs: {
      source: {
        code: "import { Content, Footer } from '@seagreenio/react-bulma'\n\nfunction CenteredFooterDemo() {\n  return (\n    <>\n      <Footer>\n        <Content helpers={{ textAlign: 'center' }}>\n          <p>\n            <strong>Bulma</strong> by{' '}\n            <a href={'https://jgthms.com/'}>Jeremy Thomas</a>. The source code\n            is licensed <a href={'https://opensource.org/license/mit'}>MIT</a>.\n            The website content is licensed{' '}\n            <a href={'https://creativecommons.org/licenses/by-nc-sa/4.0//'}>\n              CC BY NC SA 4.0\n            </a>\n            .\n          </p>\n        </Content>\n      </Footer>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CenteredFooterDemo,
} satisfies StoryObj

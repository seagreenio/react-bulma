import { describe, expect, test } from 'bun:test'
import { createElement } from 'react'
import { createRequire } from 'node:module'
import { renderToStaticMarkup } from 'react-dom/server'
import { load } from 'cheerio'
import ts from 'typescript'
import * as ui from '../../src'
import { compilePage } from '../../scripts/official/compiler'

const require = createRequire(import.meta.url)

function evaluate(source: string) {
  const { outputText, diagnostics } = ts.transpileModule(source, {
    fileName: 'example.tsx',
    reportDiagnostics: true,
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  })
  expect(diagnostics).toEqual([])
  const exports: Record<string, any> = {}
  new Function('require', 'exports', outputText)((specifier: string) => {
    if (specifier === '@seagreenio/react-bulma' || specifier === '../../../src')
      return ui
    if (specifier === '../support') return { officialPage: () => ({}) }
    return require(specifier)
  }, exports)
  return exports
}

async function compile(html: string) {
  const page = await compilePage(
    {
      id: 'elements-button',
      title: 'Button',
      url: 'https://bulma.io/documentation/elements/button/',
      excluded: [],
      examples: [
        {
          id: 'example',
          name: 'Example',
          section: '',
          kind: 'demo',
          selector: '',
          sha256: '',
          html,
        },
      ],
    },
    [],
    undefined,
    undefined,
    { semi: false, singleQuote: true, printWidth: 60 },
  )
  const preview = evaluate(page.source).Example001
  const source = page.examples[0]!.source
  expect(preview.parameters.docs.source.code).toBe(source)
  const copied = evaluate(`${source}\nexport { Example001Demo }`)
  const markup = renderToStaticMarkup(createElement(preview.render))
  expect(renderToStaticMarkup(createElement(copied.Example001Demo))).toBe(
    markup,
  )
  return { source, $: load(markup, {}, false), markup }
}

describe('official example source', () => {
  test('shows formatted copyable component code without root indentation', async () => {
    const { source, markup } = await compile(
      '\n  <button class="button" title="  keep  attribute  ">Button</button>\n',
    )
    expect(source).toContain("import * as ui from '@seagreenio/react-bulma'\n")
    expect(source).toContain("      <ui.Button title={'  keep  attribute  '}>")
    expect(source).toContain('        Button\n')
    expect(source).not.toContain("{' '}")
    expect(markup).toBe(
      '<button title="  keep  attribute  " type="button" class="rb-button">Button</button>',
    )
  })

  test('omits indentation around the official flex button group', async () => {
    const { source, $ } = await compile(
      '<div class="buttons">\n <button class="button">Button</button>\n</div>',
    )
    expect(source).not.toContain("{' '}")
    expect($('.rb-buttons').text()).toBe('Button')
  })

  test('keeps stateful examples executable in both preview and copied source', async () => {
    const { source, $ } = await compile(
      '<div class="notification"><button class="delete"></button>Notice</div>',
    )
    expect(source).toContain("import { useState } from 'react'")
    expect($('.rb-notification').text()).toBe('Notice')
    expect($('.rb-delete')).toHaveLength(1)
  })

  test('preserves inline separation, punctuation, nonbreaking spaces and JSX characters', async () => {
    const { $, source } = await compile(`
      <p>alpha <strong>beta</strong> gamma<a href="#">delta</a>, end.</p>
      <p><button class="button">One</button>
      <button class="button">Two</button></p>
      <p>&nbsp;A&nbsp;&amp; &lt;B&gt; {value}&nbsp;</p>
      <p>Words with enough text to wrap over several lines in the formatted example and remain separated in the rendered result.</p>
    `)
    expect($('p').eq(0).text()).toBe('alpha beta gammadelta, end.')
    expect($('p').eq(1).text()).toBe('One Two')
    expect($('p').eq(2).text()).toBe('\u00a0A\u00a0& <B> {value}\u00a0')
    expect($('p').eq(3).text()).toBe(
      'Words with enough text to wrap over several lines in the formatted example and remain separated in the rendered result.',
    )
    expect(source).toContain('alpha')
    expect(source).toContain(
      '&nbsp;A&nbsp;&amp; &lt;B&gt; &#123;value&#125;&nbsp;',
    )
  })

  test('preserves pre, nested code, explicit white-space and textarea values exactly', async () => {
    const { $ } = await compile(
      '<pre> first\n  <code> nested\n   code </code>\n last </pre><code> inline  code\n </code><div style="white-space: pre-wrap"> a\n  <span>b  c</span> </div><textarea class="textarea"> first\n  second &amp; third </textarea>',
    )
    expect($('pre').text()).toBe(' first\n   nested\n   code \n last ')
    expect($('code').last().text()).toBe(' inline  code\n ')
    expect($('div').text()).toBe(' a\n  b  c ')
    expect($('textarea').val()).toBe(' first\n  second & third ')
  })

  test('drops plain block boundary indentation but keeps uncertain inline boundaries', async () => {
    const { $, source } = await compile(
      '<div>\n  <p>\n Text\n </p>\n</div><span> <b>inline</b> </span>',
    )
    expect($('div').text()).toBe('Text')
    expect($('span').text()).toBe(' inline ')
    expect(source).toContain('<p>Text</p>')
  })
})

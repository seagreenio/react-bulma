import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import { Content } from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-content',
      title: 'Content',
      url: 'https://bulma.io/documentation/elements/content/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-content',
  title: 'CSS Library/Elements/Content',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-content" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Content'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A single class to handle '}
          <strong data-official-prose="">{'WYSIWYG'}</strong>
          {' generated content, where only '}
          <strong data-official-prose="">{'HTML tags'}</strong>
          {' are available'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              " When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use "
            }
            <code data-official-prose="">{'content'}</code>
            {' as container. It can handle almost any HTML tag: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'<p>'}</code>
              {' paragraphs'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<ul>'}</code>{' '}
              <code data-official-prose="">{'<ol>'}</code>{' '}
              <code data-official-prose="">{'<dl>'}</code>
              {' lists'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<h1>'}</code>
              {' to '}
              <code data-official-prose="">{'<h6>'}</code>
              {' headings'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<blockquote>'}</code>
              {' quotes'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<em>'}</code>
              {' and '}
              <code data-official-prose="">{'<strong>'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'<table>'}</code>{' '}
              <code data-official-prose="">{'<tr>'}</code>{' '}
              <code data-official-prose="">{'<th>'}</code>{' '}
              <code data-official-prose="">{'<td>'}</code>
              {' tables'}
            </li>
          </ul>
          <p data-official-prose="">
            {' This '}
            <code data-official-prose="">{'content'}</code>
            {' class can be used in '}
            <em data-official-prose="">{'any'}</em>
            {' context where you just want to (or can only) write some '}
            <strong data-official-prose="">{'text'}</strong>
            {
              ". For example, it's used for the paragraph you're currently reading. "
            }
          </p>
        </div>
        <h3
          data-official-prose=""
          id={'full-example'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Full example '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#full-example'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          {' Here is an example of the '}
          <code data-official-prose="">{'content'}</code>
          {' Bulma element with all the supported HTML tags: '}
        </div>
        <div data-official-example="elements-content/full-example/001">
          <Canvas of={FullTypographyExampleStory} />
        </div>
        <h3
          data-official-prose=""
          id={'ordered-lists-alternatives'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Ordered lists alternatives '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#ordered-lists-alternatives'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            <strong data-official-prose="">{'Ordered lists'}</strong>{' '}
            <code data-official-prose="">{'<ol>'}</code>
            {' support different '}
            <strong data-official-prose="">{'types'}</strong>
            {' of items markers. To modify them, use either: '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              {'the corresponding HTML attribute value'}
            </li>
            <li data-official-prose="">
              {' one of the following CSS modifier classes: '}
              <code data-official-prose="">{'is-lower-alpha'}</code>
              {', '}
              <code data-official-prose="">{'is-lower-roman'}</code>
              {', '}
              <code data-official-prose="">{'is-upper-alpha'}</code>
              {' or '}
              <code data-official-prose="">{'is-upper-roman'}</code>
            </li>
          </ul>
        </div>
        <div data-official-example="elements-content/ordered-lists-alternatives/001">
          <Canvas of={NativeOrderedListTypesStory} />
        </div>
        <div data-official-example="elements-content/ordered-lists-alternatives/002">
          <Canvas of={OrderedListModifiersStory} />
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
            {' You can use the '}
            <code data-official-prose="">{'is-small'}</code>
            {', '}
            <code data-official-prose="">{'is-medium'}</code>
            {' and '}
            <code data-official-prose="">{'is-large'}</code>
            {' modifiers to change the font size. '}
          </p>
        </div>
        <div data-official-prose="" className={'content'}>
          <h4 data-official-prose="">
            {'Small size '}
            <code data-official-prose="">{'content'}</code>
          </h4>
        </div>
        <div data-official-example="elements-content/small-size-content/001">
          <Canvas of={SmallContentStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <h4 data-official-prose="">
            {'Normal size '}
            <code data-official-prose="">{'content'}</code>{' '}
            <em data-official-prose="">{'(default)'}</em>
          </h4>
        </div>
        <div data-official-example="elements-content/normal-size-content-default/001">
          <Canvas of={NormalContentStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <h4 data-official-prose="">
            {'Medium size '}
            <code data-official-prose="">{'content'}</code>
          </h4>
        </div>
        <div data-official-example="elements-content/medium-size-content/001">
          <Canvas of={MediumContentStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <h4 data-official-prose="">
            {'Large size '}
            <code data-official-prose="">{'content'}</code>
          </h4>
        </div>
        <div data-official-example="elements-content/large-size-content/001">
          <Canvas of={LargeContentStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function FullTypographyExampleDemo() {
  return (
    <>
      <Content>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum
          <sup>
            <a>[1]</a>
          </sup>{' '}
          dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
          ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
          nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin
          vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as
          well!
        </p>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum
          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.
          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim
          dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus.</li>
        </ul>
        <h3>Third level</h3>
        <p>
          Quisque ante lacus, malesuada ac auctor vitae, congue{' '}
          <a href={'#'}>non ante</a>. Phasellus lacus ex, semper ac tortor nec,
          fringilla condimentum orci. Fusce eu rutrum tellus.
        </p>
        <ol>
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
          <li>Integer in volutpat libero.</li>
          <li>Donec a diam tellus.</li>
          <li>Aenean nec tortor orci.</li>
          <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
          <li>Vivamus maximus ultricies pulvinar.</li>
        </ol>
        <blockquote>
          Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero
          hendrerit ipsum, ut blandit est tellus sit amet turpis.
        </blockquote>
        <p>
          Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et{' '}
          <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque
          consectetur, et lobortis nisi molestie.
        </p>
        <p>
          Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec
          mattis vulputate risus in luctus. Maecenas vestibulum interdum
          commodo.
        </p>
        <dl>
          <dt>Web</dt>
          <dd>The part of the Internet that contains websites and web pages</dd>
          <dt>HTML</dt>
          <dd>A markup language for creating web pages</dd>
          <dt>CSS</dt>
          <dd>A technology to make HTML look better</dd>
        </dl>
        <p>
          Suspendisse egestas sapien non felis placerat elementum. Morbi tortor
          nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla
          facilisi. Nullam ac erat ante.
        </p>
        <h4>Fourth level</h4>
        <p>
          Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac.
          Mauris euismod metus a tellus laoreet, at elementum ex efficitur.
        </p>
        <pre>
          {
            ' <!DOCTYPE html> <html> <head>\n<title>Hello World</title> </head> <body> <p>Lorem\nipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae\nmollis.</p> </body> </html> '
          }
        </pre>
        <p>
          Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus
          non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est
          porta condimentum in eu justo. Nulla id iaculis sapien.
        </p>
        <table>
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
        </table>
        <p>
          Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc,
          blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac
          nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet
          ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus
          laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc
          ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh
          in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus
          vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam
          pharetra varius metus non pellentesque.
        </p>
        <h5>Fifth level</h5>
        <p>
          Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt
          ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus
          elit volutpat porta. Phasellus molestie diam vel nisi sodales, a
          eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin
          odio.
        </p>
        <figure>
          <img src={'./official-assets/256x256.png'} />{' '}
          <img src={'./official-assets/256x256.png'} />
          <figcaption>Figure 1: Some beautiful placeholders</figcaption>
        </figure>
        <h6>Sixth level</h6>
        <p>
          Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar
          lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non
          tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis
          enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec
          consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum
          tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus
          metus.
        </p>
      </Content>
    </>
  )
}

function NativeOrderedListTypesDemo() {
  return (
    <>
      <Content>
        <ol type={'1'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type={'A'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type={'a'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type={'I'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type={'i'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </Content>
    </>
  )
}

function OrderedListModifiersDemo() {
  return (
    <>
      <Content>
        <ol className={'rb-is-lower-alpha'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol className={'rb-is-lower-roman'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol className={'rb-is-upper-alpha'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol className={'rb-is-upper-roman'}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </Content>
    </>
  )
}

function SmallContentDemo() {
  return (
    <>
      <Content size={'small'}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum
          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.
          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim
          dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus.</li>
        </ul>
      </Content>
    </>
  )
}

function NormalContentDemo() {
  return (
    <>
      <Content size={'normal'}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum
          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.
          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim
          dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus.</li>
        </ul>
      </Content>
    </>
  )
}

function MediumContentDemo() {
  return (
    <>
      <Content size={'medium'}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum
          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.
          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim
          dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus.</li>
        </ul>
      </Content>
    </>
  )
}

function LargeContentDemo() {
  return (
    <>
      <Content size={'large'}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum
          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.
          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim
          dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          </li>
          <li>Ut non enim metus.</li>
        </ul>
      </Content>
    </>
  )
}

export const FullTypographyExampleStory = {
  name: 'Full typography example',
  parameters: {
    official: { id: 'elements-content/full-example/001' },
    docs: {
      source: {
        code: "import { Content } from '@seagreenio/react-bulma'\n\nfunction FullTypographyExampleDemo() {\n  return (\n    <>\n      <Content>\n        <h1>Hello World</h1>\n        <p>\n          Lorem ipsum\n          <sup>\n            <a>[1]</a>\n          </sup>{' '}\n          dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus\n          ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo\n          nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin\n          vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as\n          well!\n        </p>\n        <h2>Second level</h2>\n        <p>\n          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}\n          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum\n          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.\n          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim\n          dui. Ut et neque nisl.\n        </p>\n        <ul>\n          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n          <li>\n            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n          </li>\n          <li>Ut non enim metus.</li>\n        </ul>\n        <h3>Third level</h3>\n        <p>\n          Quisque ante lacus, malesuada ac auctor vitae, congue{' '}\n          <a href={'#'}>non ante</a>. Phasellus lacus ex, semper ac tortor nec,\n          fringilla condimentum orci. Fusce eu rutrum tellus.\n        </p>\n        <ol>\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n          <li>Integer in volutpat libero.</li>\n          <li>Donec a diam tellus.</li>\n          <li>Aenean nec tortor orci.</li>\n          <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n          <li>Vivamus maximus ultricies pulvinar.</li>\n        </ol>\n        <blockquote>\n          Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero\n          hendrerit ipsum, ut blandit est tellus sit amet turpis.\n        </blockquote>\n        <p>\n          Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et{' '}\n          <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque\n          consectetur, et lobortis nisi molestie.\n        </p>\n        <p>\n          Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec\n          mattis vulputate risus in luctus. Maecenas vestibulum interdum\n          commodo.\n        </p>\n        <dl>\n          <dt>Web</dt>\n          <dd>The part of the Internet that contains websites and web pages</dd>\n          <dt>HTML</dt>\n          <dd>A markup language for creating web pages</dd>\n          <dt>CSS</dt>\n          <dd>A technology to make HTML look better</dd>\n        </dl>\n        <p>\n          Suspendisse egestas sapien non felis placerat elementum. Morbi tortor\n          nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla\n          facilisi. Nullam ac erat ante.\n        </p>\n        <h4>Fourth level</h4>\n        <p>\n          Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac.\n          Mauris euismod metus a tellus laoreet, at elementum ex efficitur.\n        </p>\n        <pre>\n          {\n            ' <!DOCTYPE html> <html> <head>\\n<title>Hello World</title> </head> <body> <p>Lorem\\nipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae\\nmollis.</p> </body> </html> '\n          }\n        </pre>\n        <p>\n          Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus\n          non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est\n          porta condimentum in eu justo. Nulla id iaculis sapien.\n        </p>\n        <table>\n          <thead>\n            <tr>\n              <th>One</th>\n              <th>Two</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Three</td>\n              <td>Four</td>\n            </tr>\n            <tr>\n              <td>Five</td>\n              <td>Six</td>\n            </tr>\n            <tr>\n              <td>Seven</td>\n              <td>Eight</td>\n            </tr>\n            <tr>\n              <td>Nine</td>\n              <td>Ten</td>\n            </tr>\n            <tr>\n              <td>Eleven</td>\n              <td>Twelve</td>\n            </tr>\n          </tbody>\n        </table>\n        <p>\n          Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc,\n          blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac\n          nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet\n          ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus\n          laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc\n          ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh\n          in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus\n          vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam\n          pharetra varius metus non pellentesque.\n        </p>\n        <h5>Fifth level</h5>\n        <p>\n          Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt\n          ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus\n          elit volutpat porta. Phasellus molestie diam vel nisi sodales, a\n          eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin\n          odio.\n        </p>\n        <figure>\n          <img src={'./official-assets/256x256.png'} />{' '}\n          <img src={'./official-assets/256x256.png'} />\n          <figcaption>Figure 1: Some beautiful placeholders</figcaption>\n        </figure>\n        <h6>Sixth level</h6>\n        <p>\n          Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar\n          lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non\n          tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis\n          enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec\n          consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum\n          tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus\n          metus.\n        </p>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullTypographyExampleDemo,
} satisfies StoryObj

export const NativeOrderedListTypesStory = {
  name: 'Native ordered list types',
  parameters: {
    official: { id: 'elements-content/ordered-lists-alternatives/001' },
    docs: {
      source: {
        code: "import { Content } from '@seagreenio/react-bulma'\n\nfunction NativeOrderedListTypesDemo() {\n  return (\n    <>\n      <Content>\n        <ol type={'1'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n        <ol type={'A'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n        <ol type={'a'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n        <ol type={'I'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n        <ol type={'i'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NativeOrderedListTypesDemo,
} satisfies StoryObj

export const OrderedListModifiersStory = {
  name: 'Ordered list modifiers',
  parameters: {
    official: { id: 'elements-content/ordered-lists-alternatives/002' },
    docs: {
      source: {
        code: "import { Content } from '@seagreenio/react-bulma'\n\nfunction OrderedListModifiersDemo() {\n  return (\n    <>\n      <Content>\n        <ol className={'rb-is-lower-alpha'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n        <ol className={'rb-is-lower-roman'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n        <ol className={'rb-is-upper-alpha'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n        <ol className={'rb-is-upper-roman'}>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ol>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: OrderedListModifiersDemo,
} satisfies StoryObj

export const SmallContentStory = {
  name: 'Small content',
  parameters: {
    official: { id: 'elements-content/small-size-content/001' },
    docs: {
      source: {
        code: "import { Content } from '@seagreenio/react-bulma'\n\nfunction SmallContentDemo() {\n  return (\n    <>\n      <Content size={'small'}>\n        <h1>Hello World</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,\n          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat\n          odio, sollicitudin vel erat vel, interdum mattis neque.\n        </p>\n        <h2>Second level</h2>\n        <p>\n          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}\n          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum\n          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.\n          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim\n          dui. Ut et neque nisl.\n        </p>\n        <ul>\n          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n          <li>\n            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n          </li>\n          <li>Ut non enim metus.</li>\n        </ul>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallContentDemo,
} satisfies StoryObj

export const NormalContentStory = {
  name: 'Normal content',
  parameters: {
    official: { id: 'elements-content/normal-size-content-default/001' },
    docs: {
      source: {
        code: "import { Content } from '@seagreenio/react-bulma'\n\nfunction NormalContentDemo() {\n  return (\n    <>\n      <Content size={'normal'}>\n        <h1>Hello World</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,\n          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat\n          odio, sollicitudin vel erat vel, interdum mattis neque.\n        </p>\n        <h2>Second level</h2>\n        <p>\n          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}\n          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum\n          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.\n          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim\n          dui. Ut et neque nisl.\n        </p>\n        <ul>\n          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n          <li>\n            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n          </li>\n          <li>Ut non enim metus.</li>\n        </ul>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NormalContentDemo,
} satisfies StoryObj

export const MediumContentStory = {
  name: 'Medium content',
  parameters: {
    official: { id: 'elements-content/medium-size-content/001' },
    docs: {
      source: {
        code: "import { Content } from '@seagreenio/react-bulma'\n\nfunction MediumContentDemo() {\n  return (\n    <>\n      <Content size={'medium'}>\n        <h1>Hello World</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,\n          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat\n          odio, sollicitudin vel erat vel, interdum mattis neque.\n        </p>\n        <h2>Second level</h2>\n        <p>\n          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}\n          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum\n          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.\n          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim\n          dui. Ut et neque nisl.\n        </p>\n        <ul>\n          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n          <li>\n            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n          </li>\n          <li>Ut non enim metus.</li>\n        </ul>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumContentDemo,
} satisfies StoryObj

export const LargeContentStory = {
  name: 'Large content',
  parameters: {
    official: { id: 'elements-content/large-size-content/001' },
    docs: {
      source: {
        code: "import { Content } from '@seagreenio/react-bulma'\n\nfunction LargeContentDemo() {\n  return (\n    <>\n      <Content size={'large'}>\n        <h1>Hello World</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,\n          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat\n          odio, sollicitudin vel erat vel, interdum mattis neque.\n        </p>\n        <h2>Second level</h2>\n        <p>\n          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}\n          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum\n          id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.\n          Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim\n          dui. Ut et neque nisl.\n        </p>\n        <ul>\n          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n          <li>\n            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n          </li>\n          <li>Ut non enim metus.</li>\n        </ul>\n      </Content>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeContentDemo,
} satisfies StoryObj

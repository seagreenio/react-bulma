import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  CardImage,
  Content,
  Icon,
  Image,
  Media,
  MediaContent,
  MediaLeft,
  Subtitle,
  Title,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-card',
      title: 'Card',
      url: 'https://bulma.io/documentation/components/card/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-card',
  title: 'CSS Library/Components/Card',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-card" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Card'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'An all-around flexible and composable component'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <strong data-official-prose="">{'card'}</strong>
            {
              ' component comprises several elements that you can mix and match:'
            }
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'card'}</code>
              {': the main container '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'card-header'}</code>
                  {': a horizontal bar with a shadow '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'card-header-title'}</code>
                      {': a left-aligned bold text'}
                    </li>
                    <li data-official-prose="">
                      <code data-official-prose="">{'card-header-icon'}</code>
                      {': a placeholder for an icon'}
                    </li>
                  </ul>
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'card-image'}</code>
                  {': a fullwidth container for a responsive image'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'card-content'}</code>
                  {': a multi-purpose container for '}
                  <em data-official-prose="">{'any'}</em>
                  {' other element'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'card-footer'}</code>
                  {': a horizontal list of controls '}
                  <ul data-official-prose="">
                    <li data-official-prose="">
                      <code data-official-prose="">{'card-footer-item'}</code>
                      {': a repeatable list item'}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can center the '}
            <code data-official-prose="">{'card-header-title'}</code>
            {' by appending the '}
            <code data-official-prose="">{'is-centered'}</code>
            {' modifier.'}
          </p>
        </div>
        <div data-official-example="components-card/basic/001">
          <Canvas of={ProfileCardStory} />
        </div>
        <h3
          data-official-prose=""
          id={'card-parts'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Card parts '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#card-parts'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-header'}</code>
            {' can have a '}
            <strong data-official-prose="">{'title'}</strong>
            {' and a Bulma '}
            <code data-official-prose="">{'icon'}</code>
            {':'}
          </p>
        </div>
        <div data-official-example="components-card/card-parts/001">
          <Canvas of={CardHeaderStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-image'}</code>
            {' is a container for a Bulma '}
            <code data-official-prose="">{'image'}</code>
            {' element:'}
          </p>
        </div>
        <div data-official-example="components-card/card-parts/002">
          <Canvas of={CardImageStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-content'}</code>
            {' is the main part, ideal for '}
            <strong data-official-prose="">{'text content'}</strong>
            {', thanks to its padding:'}
          </p>
        </div>
        <div data-official-example="components-card/card-parts/003">
          <Canvas of={CardContentStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'card-footer'}</code>
            {' acts as a list of for several '}
            <code data-official-prose="">{'card-footer-item'}</code>
            {' elements:'}
          </p>
        </div>
        <div data-official-example="components-card/card-parts/004">
          <Canvas of={CardFooterStory} />
        </div>
        <h3
          data-official-prose=""
          id={'examples'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Examples '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#examples'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-example="components-card/examples/001">
          <Canvas of={CardWithHeaderAndFooterStory} />
        </div>
        <div data-official-example="components-card/examples/002">
          <Canvas of={QuoteCardStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function ProfileCardDemo() {
  return (
    <>
      <Card>
        <CardImage>
          <Image
            ratio={'4by3'}
            src={'./official-assets/1280x960.png'}
            alt={'Placeholder image'}
          />
        </CardImage>
        <CardContent>
          <Media as={'div'}>
            <MediaLeft>
              <Image
                size={48}
                src={'./official-assets/96x96.png'}
                alt={'Placeholder image'}
              />
            </MediaLeft>
            <MediaContent>
              <Title size={4} as={'p'}>
                John Smith
              </Title>
              <Subtitle size={6} as={'p'}>
                @johnsmith
              </Subtitle>
            </MediaContent>
          </Media>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href={'#'}>#css</a>{' '}
            <a href={'#'}>#responsive</a> <br />{' '}
            <time dateTime={'2016-1-1'}>11:09 PM - 1 Jan 2016</time>
          </Content>
        </CardContent>
      </Card>
    </>
  )
}

function CardHeaderDemo() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardHeaderTitle>Card header</CardHeaderTitle>
          <CardHeaderIcon aria-label={'more options'}>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            </Icon>
          </CardHeaderIcon>
        </CardHeader>
      </Card>
    </>
  )
}

function CardImageDemo() {
  return (
    <>
      <Card>
        <CardImage>
          <Image
            ratio={'4by3'}
            src={'./official-assets/1280x960.png'}
            alt={'Placeholder image'}
          />
        </CardImage>
      </Card>
    </>
  )
}

function CardContentDemo() {
  return (
    <>
      <Card>
        <CardContent>
          <Content>
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
            Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Cras mattis consectetur purus sit amet fermentum.
          </Content>
        </CardContent>
      </Card>
    </>
  )
}

function CardFooterDemo() {
  return (
    <>
      <Card>
        <CardFooter>
          <CardFooterItem href={'#'}>Save</CardFooterItem>
          <CardFooterItem href={'#'}>Edit</CardFooterItem>
          <CardFooterItem href={'#'}>Delete</CardFooterItem>
        </CardFooter>
      </Card>
    </>
  )
}

function CardWithHeaderAndFooterDemo() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardHeaderTitle>Component</CardHeaderTitle>
          <CardHeaderIcon aria-label={'more options'}>
            <Icon>
              <i aria-hidden={'true'} className={'fas fa-angle-down'} />
            </Icon>
          </CardHeaderIcon>
        </CardHeader>
        <CardContent>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a href={'#'}>@bulmaio</a>.{' '}
            <a href={'#'}>#css</a> <a href={'#'}>#responsive</a> <br />{' '}
            <time dateTime={'2016-1-1'}>11:09 PM - 1 Jan 2016</time>
          </Content>
        </CardContent>
        <CardFooter>
          <CardFooterItem href={'#'}>Save</CardFooterItem>
          <CardFooterItem href={'#'}>Edit</CardFooterItem>
          <CardFooterItem href={'#'}>Delete</CardFooterItem>
        </CardFooter>
      </Card>
    </>
  )
}

function QuoteCardDemo() {
  return (
    <>
      <Card>
        <CardContent>
          <Title as={'p'}>
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </Title>
          <Subtitle as={'p'}>Jeff Atwood</Subtitle>
        </CardContent>
        <CardFooter>
          <CardFooterItem as={'p'}>
            <span>
              {' '}
              View on{' '}
              <a
                href={
                  'https://twitter.com/codinghorror/status/506010907021828096'
                }
              >
                Twitter
              </a>{' '}
            </span>
          </CardFooterItem>
          <CardFooterItem as={'p'}>
            <span>
              {' '}
              Share on <a href={'#'}>Facebook</a>{' '}
            </span>
          </CardFooterItem>
        </CardFooter>
      </Card>
    </>
  )
}

export const ProfileCardStory = {
  name: 'Profile card',
  parameters: {
    official: { id: 'components-card/basic/001' },
    docs: {
      source: {
        code: "import {\n  Card,\n  CardContent,\n  CardImage,\n  Content,\n  Image,\n  Media,\n  MediaContent,\n  MediaLeft,\n  Subtitle,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction ProfileCardDemo() {\n  return (\n    <>\n      <Card>\n        <CardImage>\n          <Image\n            ratio={'4by3'}\n            src={'./official-assets/1280x960.png'}\n            alt={'Placeholder image'}\n          />\n        </CardImage>\n        <CardContent>\n          <Media as={'div'}>\n            <MediaLeft>\n              <Image\n                size={48}\n                src={'./official-assets/96x96.png'}\n                alt={'Placeholder image'}\n              />\n            </MediaLeft>\n            <MediaContent>\n              <Title size={4} as={'p'}>\n                John Smith\n              </Title>\n              <Subtitle size={6} as={'p'}>\n                @johnsmith\n              </Subtitle>\n            </MediaContent>\n          </Media>\n          <Content>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus\n            nec iaculis mauris. <a>@bulmaio</a>. <a href={'#'}>#css</a>{' '}\n            <a href={'#'}>#responsive</a> <br />{' '}\n            <time dateTime={'2016-1-1'}>11:09 PM - 1 Jan 2016</time>\n          </Content>\n        </CardContent>\n      </Card>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ProfileCardDemo,
} satisfies StoryObj

export const CardHeaderStory = {
  name: 'Card header',
  parameters: {
    official: { id: 'components-card/card-parts/001' },
    docs: {
      source: {
        code: "import {\n  Card,\n  CardHeader,\n  CardHeaderIcon,\n  CardHeaderTitle,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction CardHeaderDemo() {\n  return (\n    <>\n      <Card>\n        <CardHeader>\n          <CardHeaderTitle>Card header</CardHeaderTitle>\n          <CardHeaderIcon aria-label={'more options'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n            </Icon>\n          </CardHeaderIcon>\n        </CardHeader>\n      </Card>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CardHeaderDemo,
} satisfies StoryObj

export const CardImageStory = {
  name: 'Card image',
  parameters: {
    official: { id: 'components-card/card-parts/002' },
    docs: {
      source: {
        code: "import { Card, CardImage, Image } from '@seagreenio/react-bulma'\n\nfunction CardImageDemo() {\n  return (\n    <>\n      <Card>\n        <CardImage>\n          <Image\n            ratio={'4by3'}\n            src={'./official-assets/1280x960.png'}\n            alt={'Placeholder image'}\n          />\n        </CardImage>\n      </Card>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CardImageDemo,
} satisfies StoryObj

export const CardContentStory = {
  name: 'Card content',
  parameters: {
    official: { id: 'components-card/card-parts/003' },
    docs: {
      source: {
        code: "import { Card, CardContent, Content } from '@seagreenio/react-bulma'\n\nfunction CardContentDemo() {\n  return (\n    <>\n      <Card>\n        <CardContent>\n          <Content>\n            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.\n            Donec id elit non mi porta gravida at eget metus. Cum sociis natoque\n            penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n            Cras mattis consectetur purus sit amet fermentum.\n          </Content>\n        </CardContent>\n      </Card>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CardContentDemo,
} satisfies StoryObj

export const CardFooterStory = {
  name: 'Card footer',
  parameters: {
    official: { id: 'components-card/card-parts/004' },
    docs: {
      source: {
        code: "import { Card, CardFooter, CardFooterItem } from '@seagreenio/react-bulma'\n\nfunction CardFooterDemo() {\n  return (\n    <>\n      <Card>\n        <CardFooter>\n          <CardFooterItem href={'#'}>Save</CardFooterItem>\n          <CardFooterItem href={'#'}>Edit</CardFooterItem>\n          <CardFooterItem href={'#'}>Delete</CardFooterItem>\n        </CardFooter>\n      </Card>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CardFooterDemo,
} satisfies StoryObj

export const CardWithHeaderAndFooterStory = {
  name: 'Card with header and footer',
  parameters: {
    official: { id: 'components-card/examples/001' },
    docs: {
      source: {
        code: "import {\n  Card,\n  CardContent,\n  CardFooter,\n  CardFooterItem,\n  CardHeader,\n  CardHeaderIcon,\n  CardHeaderTitle,\n  Content,\n  Icon,\n} from '@seagreenio/react-bulma'\n\nfunction CardWithHeaderAndFooterDemo() {\n  return (\n    <>\n      <Card>\n        <CardHeader>\n          <CardHeaderTitle>Component</CardHeaderTitle>\n          <CardHeaderIcon aria-label={'more options'}>\n            <Icon>\n              <i aria-hidden={'true'} className={'fas fa-angle-down'} />\n            </Icon>\n          </CardHeaderIcon>\n        </CardHeader>\n        <CardContent>\n          <Content>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus\n            nec iaculis mauris. <a href={'#'}>@bulmaio</a>.{' '}\n            <a href={'#'}>#css</a> <a href={'#'}>#responsive</a> <br />{' '}\n            <time dateTime={'2016-1-1'}>11:09 PM - 1 Jan 2016</time>\n          </Content>\n        </CardContent>\n        <CardFooter>\n          <CardFooterItem href={'#'}>Save</CardFooterItem>\n          <CardFooterItem href={'#'}>Edit</CardFooterItem>\n          <CardFooterItem href={'#'}>Delete</CardFooterItem>\n        </CardFooter>\n      </Card>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: CardWithHeaderAndFooterDemo,
} satisfies StoryObj

export const QuoteCardStory = {
  name: 'Quote card',
  parameters: {
    official: { id: 'components-card/examples/002' },
    docs: {
      source: {
        code: "import {\n  Card,\n  CardContent,\n  CardFooter,\n  CardFooterItem,\n  Subtitle,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction QuoteCardDemo() {\n  return (\n    <>\n      <Card>\n        <CardContent>\n          <Title as={'p'}>\n            “There are two hard things in computer science: cache invalidation,\n            naming things, and off-by-one errors.”\n          </Title>\n          <Subtitle as={'p'}>Jeff Atwood</Subtitle>\n        </CardContent>\n        <CardFooter>\n          <CardFooterItem as={'p'}>\n            <span>\n              {' '}\n              View on{' '}\n              <a\n                href={\n                  'https://twitter.com/codinghorror/status/506010907021828096'\n                }\n              >\n                Twitter\n              </a>{' '}\n            </span>\n          </CardFooterItem>\n          <CardFooterItem as={'p'}>\n            <span>\n              {' '}\n              Share on <a href={'#'}>Facebook</a>{' '}\n            </span>\n          </CardFooterItem>\n        </CardFooter>\n      </Card>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: QuoteCardDemo,
} satisfies StoryObj

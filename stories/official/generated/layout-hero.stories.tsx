import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Buttons,
  Container,
  Hero,
  HeroBody,
  HeroFoot,
  HeroHead,
  Icon,
  LinkButton,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  Subtitle,
  Tab,
  Tabs,
  TabsList,
  Title,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-hero',
      title: 'Hero',
      url: 'https://bulma.io/documentation/layout/hero/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-hero',
  title: 'CSS Library/Layout/Hero',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-hero" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Hero'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'An imposing '}
          <strong data-official-prose="">{'hero banner'}</strong>
          {' to showcase something'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The hero component allows you to add a '}
            <strong data-official-prose="">{'full width banner'}</strong>
            {
              ' to your webpage, which can optionally cover the full height of the page as well. '
            }
          </p>
          <p data-official-prose="">
            {'The basic requirement of this component are:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'hero'}</code>
              {' as the main container '}
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-body'}</code>
                  {' as a direct child, in which you can put all your content'}
                </li>
              </ul>
            </li>
          </ul>
          <p data-official-prose="">
            {' For the '}
            <a data-official-prose="" href={'#fullheight-hero'}>
              {'fullheight hero'}
            </a>
            {' to work, you will also need a '}
            <code data-official-prose="">{'hero-head'}</code>
            {' and a '}
            <code data-official-prose="">{'hero-foot'}</code>
            {'. '}
          </p>
        </div>
        <div data-official-example="layout-hero/basic/001">
          <Canvas of={DefaultHeroStory} />
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
          {' As with buttons, you can choose one of the '}
          <strong data-official-prose="">{'8 different colors'}</strong>
          {': '}
        </div>
        <div data-official-example="layout-hero/colors/001">
          <Canvas of={LinkHeroStory} />
        </div>
        <div data-official-example="layout-hero/colors/002">
          <Canvas of={PrimaryHeroStory} />
        </div>
        <div data-official-example="layout-hero/colors/003">
          <Canvas of={InfoHeroStory} />
        </div>
        <div data-official-example="layout-hero/colors/004">
          <Canvas of={SuccessHeroStory} />
        </div>
        <div data-official-example="layout-hero/colors/005">
          <Canvas of={WarningHeroStory} />
        </div>
        <div data-official-example="layout-hero/colors/006">
          <Canvas of={DangerHeroStory} />
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
            {' You can have even more imposing banners by using one of '}
            <strong data-official-prose="">{'5 different sizes'}</strong>
            {': '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-small'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-medium'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-large'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-halfheight'}</code>
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'is-fullheight'}</code>
            </li>
          </ul>
        </div>
        <div data-official-example="layout-hero/sizes/001">
          <Canvas of={SmallHeroStory} />
        </div>
        <div data-official-example="layout-hero/sizes/002">
          <Canvas of={MediumHeroStory} />
        </div>
        <div data-official-example="layout-hero/sizes/003">
          <Canvas of={LargeHeroStory} />
        </div>
        <div data-official-prose="" id={'halfheight-hero'}></div>
        <div data-official-example="layout-hero/sizes/004">
          <Canvas of={HalfHeightHeroStory} />
        </div>
        <div data-official-prose="" id={'fullheight-hero'}></div>
        <div data-official-example="layout-hero/sizes/005">
          <Canvas of={FullHeightHeroStory} />
        </div>
        <h3
          data-official-prose=""
          id={'fullheight-with-navbar'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Fullheight with navbar '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fullheight-with-navbar'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you are using a '}
            <a
              data-official-prose=""
              href={
                'https://bulma.io/documentation/components/navbar/#fixed-navbar'
              }
            >
              {'fixed navbar'}
            </a>
            {', you can use the '}
            <code data-official-prose="">{'is-fullheight-with-navbar'}</code>
            {
              ' modifier on the hero for it to occupy the viewport height minus the navbar height. '
            }
          </p>
        </div>
        <div data-official-example="layout-hero/fullheight-with-navbar/001">
          <Canvas of={FullHeightHeroBelowNavbarStory} />
        </div>
        <h3
          data-official-prose=""
          id={'fullheight-hero-in-3-parts'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Fullheight hero in 3 parts '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#fullheight-hero-in-3-parts'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              ' To obtain a hero that will cover the whole height of the viewport, you can split it in '
            }
            <strong data-official-prose="">{'3 vertical parts'}</strong>
            {': '}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'hero'}</code>
              <ul data-official-prose="">
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-head'}</code>
                  {' (always at the top)'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-body'}</code>
                  {' (always vertically centered)'}
                </li>
                <li data-official-prose="">
                  <code data-official-prose="">{'hero-foot'}</code>
                  {' (always at the bottom)'}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div data-official-example="layout-hero/fullheight-hero-in-3-parts/001">
          <Canvas of={MediumThreePartHeroStory} />
        </div>
        <div data-official-example="layout-hero/fullheight-hero-in-3-parts/002">
          <Canvas of={LargeThreePartHeroStory} />
        </div>
        <div data-official-example="layout-hero/fullheight-hero-in-3-parts/003">
          <Canvas of={FullHeightThreePartHeroStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultHeroDemo() {
  return (
    <>
      <Hero>
        <HeroBody>
          <Title as={'p'}>Hero title</Title>
          <Subtitle as={'p'}>Hero subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function LinkHeroDemo() {
  return (
    <>
      <Hero color={'link'}>
        <HeroBody>
          <Title as={'p'}>Link hero</Title>
          <Subtitle as={'p'}>Link subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function PrimaryHeroDemo() {
  return (
    <>
      <Hero color={'primary'}>
        <HeroBody>
          <Title as={'p'}>Primary hero</Title>
          <Subtitle as={'p'}>Primary subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function InfoHeroDemo() {
  return (
    <>
      <Hero color={'info'}>
        <HeroBody>
          <Title as={'p'}>Info hero</Title>
          <Subtitle as={'p'}>Info subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function SuccessHeroDemo() {
  return (
    <>
      <Hero color={'success'}>
        <HeroBody>
          <Title as={'p'}>Success hero</Title>
          <Subtitle as={'p'}>Success subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function WarningHeroDemo() {
  return (
    <>
      <Hero color={'warning'}>
        <HeroBody>
          <Title as={'p'}>Warning hero</Title>
          <Subtitle as={'p'}>Warning subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function DangerHeroDemo() {
  return (
    <>
      <Hero color={'danger'}>
        <HeroBody>
          <Title as={'p'}>Danger hero</Title>
          <Subtitle as={'p'}>Danger subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function SmallHeroDemo() {
  return (
    <>
      <Hero size={'small'} color={'primary'}>
        <HeroBody>
          <Title as={'p'}>Small hero</Title>
          <Subtitle as={'p'}>Small subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function MediumHeroDemo() {
  return (
    <>
      <Hero size={'medium'} color={'link'}>
        <HeroBody>
          <Title as={'p'}>Medium hero</Title>
          <Subtitle as={'p'}>Medium subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function LargeHeroDemo() {
  return (
    <>
      <Hero size={'large'} color={'info'}>
        <HeroBody>
          <Title as={'p'}>Large hero</Title>
          <Subtitle as={'p'}>Large subtitle</Subtitle>
        </HeroBody>
      </Hero>
    </>
  )
}

function HalfHeightHeroDemo() {
  return (
    <>
      <Hero color={'success'} height={'half'}>
        <HeroBody>
          <div>
            <Title as={'p'}>Half height hero</Title>
            <Subtitle as={'p'}>Half height subtitle</Subtitle>
          </div>
        </HeroBody>
      </Hero>
    </>
  )
}

function FullHeightHeroDemo() {
  return (
    <>
      <Hero color={'danger'} height={'full'}>
        <HeroBody>
          <div>
            <Title as={'p'}>Fullheight hero</Title>
            <Subtitle as={'p'}>Fullheight subtitle</Subtitle>
          </div>
        </HeroBody>
      </Hero>
    </>
  )
}

function FullHeightHeroBelowNavbarDemo() {
  return (
    <>
      <Navbar>
        <Container>
          <NavbarMenu id={'navMenu'}>
            <NavbarStart>
              <NavbarItem>Home</NavbarItem>
              <NavbarItem>Documentation</NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem as={'div'}>
                <Buttons>
                  <LinkButton color={'dark'}>Github</LinkButton>
                  <LinkButton color={'link'}>Download</LinkButton>
                </Buttons>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
      <Hero color={'link'} height={'full-with-navbar'}>
        <HeroBody>
          <Title as={'p'}>Fullheight hero with navbar</Title>
        </HeroBody>
      </Hero>
    </>
  )
}

function MediumThreePartHeroDemo() {
  return (
    <>
      <Hero color={'primary'} size={'medium'}>
        <HeroHead>
          <Navbar>
            <Container>
              <NavbarBrand>
                <NavbarItem>
                  <img
                    src={'./official-assets/bulma-type-white.png'}
                    alt={'Logo'}
                  />
                </NavbarItem>
                <NavbarBurger data-target={'navbarMenuHeroA'} as={'span'}>
                  <span />
                  <span />
                  <span />
                  <span />
                </NavbarBurger>
              </NavbarBrand>
              <NavbarMenu id={'navbarMenuHeroA'}>
                <NavbarEnd>
                  <NavbarItem active>Home</NavbarItem>
                  <NavbarItem>Examples</NavbarItem>
                  <NavbarItem>Documentation</NavbarItem>
                  <NavbarItem as={'span'}>
                    <LinkButton color={'primary'} inverted>
                      <Icon>
                        <i className={'fab fa-github'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </NavbarItem>
                </NavbarEnd>
              </NavbarMenu>
            </Container>
          </Navbar>
        </HeroHead>
        <HeroBody>
          <Container helpers={{ textAlign: 'center' }}>
            <Title as={'p'}>Title</Title>
            <Subtitle as={'p'}>Subtitle</Subtitle>
          </Container>
        </HeroBody>
        <HeroFoot>
          <Tabs defaultValue={'tab-1'}>
            <TabsList as={'nav'} listWrapper={<Container />}>
              <Tab value={'tab-1'} as={'a'}>
                Overview
              </Tab>
              <Tab value={'tab-2'} as={'a'}>
                Modifiers
              </Tab>
              <Tab value={'tab-3'} as={'a'}>
                Grid
              </Tab>
              <Tab value={'tab-4'} as={'a'}>
                Elements
              </Tab>
              <Tab value={'tab-5'} as={'a'}>
                Components
              </Tab>
              <Tab value={'tab-6'} as={'a'}>
                Layout
              </Tab>
            </TabsList>
          </Tabs>
        </HeroFoot>
      </Hero>
    </>
  )
}

function LargeThreePartHeroDemo() {
  return (
    <>
      <Hero color={'info'} size={'large'}>
        <HeroHead>
          <Navbar>
            <Container>
              <NavbarBrand>
                <NavbarItem>
                  <img
                    src={'./official-assets/bulma-type-white.png'}
                    alt={'Logo'}
                  />
                </NavbarItem>
                <NavbarBurger data-target={'navbarMenuHeroB'} as={'span'}>
                  <span />
                  <span />
                  <span />
                  <span />
                </NavbarBurger>
              </NavbarBrand>
              <NavbarMenu id={'navbarMenuHeroB'}>
                <NavbarEnd>
                  <NavbarItem active>Home</NavbarItem>
                  <NavbarItem>Examples</NavbarItem>
                  <NavbarItem>Documentation</NavbarItem>
                  <NavbarItem as={'span'}>
                    <LinkButton color={'info'} inverted>
                      <Icon>
                        <i className={'fab fa-github'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </NavbarItem>
                </NavbarEnd>
              </NavbarMenu>
            </Container>
          </Navbar>
        </HeroHead>
        <HeroBody>
          <Container helpers={{ textAlign: 'center' }}>
            <Title as={'p'}>Title</Title>
            <Subtitle as={'p'}>Subtitle</Subtitle>
          </Container>
        </HeroBody>
        <HeroFoot>
          <Tabs defaultValue={'tab-1'}>
            <TabsList
              variant={'boxed'}
              fullWidth
              as={'nav'}
              listWrapper={<Container />}
            >
              <Tab value={'tab-1'} as={'a'}>
                Overview
              </Tab>
              <Tab value={'tab-2'} as={'a'}>
                Modifiers
              </Tab>
              <Tab value={'tab-3'} as={'a'}>
                Grid
              </Tab>
              <Tab value={'tab-4'} as={'a'}>
                Elements
              </Tab>
              <Tab value={'tab-5'} as={'a'}>
                Components
              </Tab>
              <Tab value={'tab-6'} as={'a'}>
                Layout
              </Tab>
            </TabsList>
          </Tabs>
        </HeroFoot>
      </Hero>
    </>
  )
}

function FullHeightThreePartHeroDemo() {
  return (
    <>
      <Hero color={'success'} height={'full'}>
        <HeroHead>
          <Navbar as={'header'}>
            <Container>
              <NavbarBrand>
                <NavbarItem>
                  <img
                    src={'./official-assets/bulma-type-white.png'}
                    alt={'Logo'}
                  />
                </NavbarItem>
                <NavbarBurger data-target={'navbarMenuHeroC'} as={'span'}>
                  <span />
                  <span />
                  <span />
                  <span />
                </NavbarBurger>
              </NavbarBrand>
              <NavbarMenu id={'navbarMenuHeroC'}>
                <NavbarEnd>
                  <NavbarItem active>Home</NavbarItem>
                  <NavbarItem>Examples</NavbarItem>
                  <NavbarItem>Documentation</NavbarItem>
                  <NavbarItem as={'span'}>
                    <LinkButton color={'success'} inverted>
                      <Icon>
                        <i className={'fab fa-github'} />
                      </Icon>
                      <span>Download</span>
                    </LinkButton>
                  </NavbarItem>
                </NavbarEnd>
              </NavbarMenu>
            </Container>
          </Navbar>
        </HeroHead>
        <HeroBody>
          <Container helpers={{ textAlign: 'center' }}>
            <Title as={'p'}>Title</Title>
            <Subtitle as={'p'}>Subtitle</Subtitle>
          </Container>
        </HeroBody>
        <HeroFoot>
          <Tabs defaultValue={'tab-1'}>
            <TabsList
              variant={'boxed'}
              fullWidth
              as={'nav'}
              listWrapper={<Container />}
            >
              <Tab value={'tab-1'} as={'a'}>
                Overview
              </Tab>
              <Tab value={'tab-2'} as={'a'}>
                Modifiers
              </Tab>
              <Tab value={'tab-3'} as={'a'}>
                Grid
              </Tab>
              <Tab value={'tab-4'} as={'a'}>
                Elements
              </Tab>
              <Tab value={'tab-5'} as={'a'}>
                Components
              </Tab>
              <Tab value={'tab-6'} as={'a'}>
                Layout
              </Tab>
            </TabsList>
          </Tabs>
        </HeroFoot>
      </Hero>
    </>
  )
}

export const DefaultHeroStory = {
  name: 'Default hero',
  parameters: {
    official: { id: 'layout-hero/basic/001' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction DefaultHeroDemo() {\n  return (\n    <>\n      <Hero>\n        <HeroBody>\n          <Title as={'p'}>Hero title</Title>\n          <Subtitle as={'p'}>Hero subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultHeroDemo,
} satisfies StoryObj

export const LinkHeroStory = {
  name: 'Link hero',
  parameters: {
    official: { id: 'layout-hero/colors/001' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction LinkHeroDemo() {\n  return (\n    <>\n      <Hero color={'link'}>\n        <HeroBody>\n          <Title as={'p'}>Link hero</Title>\n          <Subtitle as={'p'}>Link subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LinkHeroDemo,
} satisfies StoryObj

export const PrimaryHeroStory = {
  name: 'Primary hero',
  parameters: {
    official: { id: 'layout-hero/colors/002' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction PrimaryHeroDemo() {\n  return (\n    <>\n      <Hero color={'primary'}>\n        <HeroBody>\n          <Title as={'p'}>Primary hero</Title>\n          <Subtitle as={'p'}>Primary subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: PrimaryHeroDemo,
} satisfies StoryObj

export const InfoHeroStory = {
  name: 'Info hero',
  parameters: {
    official: { id: 'layout-hero/colors/003' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction InfoHeroDemo() {\n  return (\n    <>\n      <Hero color={'info'}>\n        <HeroBody>\n          <Title as={'p'}>Info hero</Title>\n          <Subtitle as={'p'}>Info subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InfoHeroDemo,
} satisfies StoryObj

export const SuccessHeroStory = {
  name: 'Success hero',
  parameters: {
    official: { id: 'layout-hero/colors/004' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction SuccessHeroDemo() {\n  return (\n    <>\n      <Hero color={'success'}>\n        <HeroBody>\n          <Title as={'p'}>Success hero</Title>\n          <Subtitle as={'p'}>Success subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SuccessHeroDemo,
} satisfies StoryObj

export const WarningHeroStory = {
  name: 'Warning hero',
  parameters: {
    official: { id: 'layout-hero/colors/005' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction WarningHeroDemo() {\n  return (\n    <>\n      <Hero color={'warning'}>\n        <HeroBody>\n          <Title as={'p'}>Warning hero</Title>\n          <Subtitle as={'p'}>Warning subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: WarningHeroDemo,
} satisfies StoryObj

export const DangerHeroStory = {
  name: 'Danger hero',
  parameters: {
    official: { id: 'layout-hero/colors/006' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction DangerHeroDemo() {\n  return (\n    <>\n      <Hero color={'danger'}>\n        <HeroBody>\n          <Title as={'p'}>Danger hero</Title>\n          <Subtitle as={'p'}>Danger subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DangerHeroDemo,
} satisfies StoryObj

export const SmallHeroStory = {
  name: 'Small hero',
  parameters: {
    official: { id: 'layout-hero/sizes/001' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction SmallHeroDemo() {\n  return (\n    <>\n      <Hero size={'small'} color={'primary'}>\n        <HeroBody>\n          <Title as={'p'}>Small hero</Title>\n          <Subtitle as={'p'}>Small subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SmallHeroDemo,
} satisfies StoryObj

export const MediumHeroStory = {
  name: 'Medium hero',
  parameters: {
    official: { id: 'layout-hero/sizes/002' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction MediumHeroDemo() {\n  return (\n    <>\n      <Hero size={'medium'} color={'link'}>\n        <HeroBody>\n          <Title as={'p'}>Medium hero</Title>\n          <Subtitle as={'p'}>Medium subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumHeroDemo,
} satisfies StoryObj

export const LargeHeroStory = {
  name: 'Large hero',
  parameters: {
    official: { id: 'layout-hero/sizes/003' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction LargeHeroDemo() {\n  return (\n    <>\n      <Hero size={'large'} color={'info'}>\n        <HeroBody>\n          <Title as={'p'}>Large hero</Title>\n          <Subtitle as={'p'}>Large subtitle</Subtitle>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeHeroDemo,
} satisfies StoryObj

export const HalfHeightHeroStory = {
  name: 'Half-height hero',
  parameters: {
    official: { id: 'layout-hero/sizes/004' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction HalfHeightHeroDemo() {\n  return (\n    <>\n      <Hero color={'success'} height={'half'}>\n        <HeroBody>\n          <div>\n            <Title as={'p'}>Half height hero</Title>\n            <Subtitle as={'p'}>Half height subtitle</Subtitle>\n          </div>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HalfHeightHeroDemo,
} satisfies StoryObj

export const FullHeightHeroStory = {
  name: 'Full-height hero',
  parameters: {
    official: { id: 'layout-hero/sizes/005' },
    docs: {
      source: {
        code: "import { Hero, HeroBody, Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction FullHeightHeroDemo() {\n  return (\n    <>\n      <Hero color={'danger'} height={'full'}>\n        <HeroBody>\n          <div>\n            <Title as={'p'}>Fullheight hero</Title>\n            <Subtitle as={'p'}>Fullheight subtitle</Subtitle>\n          </div>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullHeightHeroDemo,
} satisfies StoryObj

export const FullHeightHeroBelowNavbarStory = {
  name: 'Full-height hero below navbar',
  parameters: {
    official: { id: 'layout-hero/fullheight-with-navbar/001' },
    docs: {
      source: {
        code: "import {\n  Buttons,\n  Container,\n  Hero,\n  HeroBody,\n  LinkButton,\n  Navbar,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  NavbarStart,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction FullHeightHeroBelowNavbarDemo() {\n  return (\n    <>\n      <Navbar>\n        <Container>\n          <NavbarMenu id={'navMenu'}>\n            <NavbarStart>\n              <NavbarItem>Home</NavbarItem>\n              <NavbarItem>Documentation</NavbarItem>\n            </NavbarStart>\n            <NavbarEnd>\n              <NavbarItem as={'div'}>\n                <Buttons>\n                  <LinkButton color={'dark'}>Github</LinkButton>\n                  <LinkButton color={'link'}>Download</LinkButton>\n                </Buttons>\n              </NavbarItem>\n            </NavbarEnd>\n          </NavbarMenu>\n        </Container>\n      </Navbar>\n      <Hero color={'link'} height={'full-with-navbar'}>\n        <HeroBody>\n          <Title as={'p'}>Fullheight hero with navbar</Title>\n        </HeroBody>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullHeightHeroBelowNavbarDemo,
} satisfies StoryObj

export const MediumThreePartHeroStory = {
  name: 'Medium three-part hero',
  parameters: {
    official: { id: 'layout-hero/fullheight-hero-in-3-parts/001' },
    docs: {
      source: {
        code: "import {\n  Container,\n  Hero,\n  HeroBody,\n  HeroFoot,\n  HeroHead,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  Subtitle,\n  Tab,\n  Tabs,\n  TabsList,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction MediumThreePartHeroDemo() {\n  return (\n    <>\n      <Hero color={'primary'} size={'medium'}>\n        <HeroHead>\n          <Navbar>\n            <Container>\n              <NavbarBrand>\n                <NavbarItem>\n                  <img\n                    src={'./official-assets/bulma-type-white.png'}\n                    alt={'Logo'}\n                  />\n                </NavbarItem>\n                <NavbarBurger data-target={'navbarMenuHeroA'} as={'span'}>\n                  <span />\n                  <span />\n                  <span />\n                  <span />\n                </NavbarBurger>\n              </NavbarBrand>\n              <NavbarMenu id={'navbarMenuHeroA'}>\n                <NavbarEnd>\n                  <NavbarItem active>Home</NavbarItem>\n                  <NavbarItem>Examples</NavbarItem>\n                  <NavbarItem>Documentation</NavbarItem>\n                  <NavbarItem as={'span'}>\n                    <LinkButton color={'primary'} inverted>\n                      <Icon>\n                        <i className={'fab fa-github'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </NavbarItem>\n                </NavbarEnd>\n              </NavbarMenu>\n            </Container>\n          </Navbar>\n        </HeroHead>\n        <HeroBody>\n          <Container helpers={{ textAlign: 'center' }}>\n            <Title as={'p'}>Title</Title>\n            <Subtitle as={'p'}>Subtitle</Subtitle>\n          </Container>\n        </HeroBody>\n        <HeroFoot>\n          <Tabs defaultValue={'tab-1'}>\n            <TabsList as={'nav'} listWrapper={<Container />}>\n              <Tab value={'tab-1'} as={'a'}>\n                Overview\n              </Tab>\n              <Tab value={'tab-2'} as={'a'}>\n                Modifiers\n              </Tab>\n              <Tab value={'tab-3'} as={'a'}>\n                Grid\n              </Tab>\n              <Tab value={'tab-4'} as={'a'}>\n                Elements\n              </Tab>\n              <Tab value={'tab-5'} as={'a'}>\n                Components\n              </Tab>\n              <Tab value={'tab-6'} as={'a'}>\n                Layout\n              </Tab>\n            </TabsList>\n          </Tabs>\n        </HeroFoot>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediumThreePartHeroDemo,
} satisfies StoryObj

export const LargeThreePartHeroStory = {
  name: 'Large three-part hero',
  parameters: {
    official: { id: 'layout-hero/fullheight-hero-in-3-parts/002' },
    docs: {
      source: {
        code: "import {\n  Container,\n  Hero,\n  HeroBody,\n  HeroFoot,\n  HeroHead,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  Subtitle,\n  Tab,\n  Tabs,\n  TabsList,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction LargeThreePartHeroDemo() {\n  return (\n    <>\n      <Hero color={'info'} size={'large'}>\n        <HeroHead>\n          <Navbar>\n            <Container>\n              <NavbarBrand>\n                <NavbarItem>\n                  <img\n                    src={'./official-assets/bulma-type-white.png'}\n                    alt={'Logo'}\n                  />\n                </NavbarItem>\n                <NavbarBurger data-target={'navbarMenuHeroB'} as={'span'}>\n                  <span />\n                  <span />\n                  <span />\n                  <span />\n                </NavbarBurger>\n              </NavbarBrand>\n              <NavbarMenu id={'navbarMenuHeroB'}>\n                <NavbarEnd>\n                  <NavbarItem active>Home</NavbarItem>\n                  <NavbarItem>Examples</NavbarItem>\n                  <NavbarItem>Documentation</NavbarItem>\n                  <NavbarItem as={'span'}>\n                    <LinkButton color={'info'} inverted>\n                      <Icon>\n                        <i className={'fab fa-github'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </NavbarItem>\n                </NavbarEnd>\n              </NavbarMenu>\n            </Container>\n          </Navbar>\n        </HeroHead>\n        <HeroBody>\n          <Container helpers={{ textAlign: 'center' }}>\n            <Title as={'p'}>Title</Title>\n            <Subtitle as={'p'}>Subtitle</Subtitle>\n          </Container>\n        </HeroBody>\n        <HeroFoot>\n          <Tabs defaultValue={'tab-1'}>\n            <TabsList\n              variant={'boxed'}\n              fullWidth\n              as={'nav'}\n              listWrapper={<Container />}\n            >\n              <Tab value={'tab-1'} as={'a'}>\n                Overview\n              </Tab>\n              <Tab value={'tab-2'} as={'a'}>\n                Modifiers\n              </Tab>\n              <Tab value={'tab-3'} as={'a'}>\n                Grid\n              </Tab>\n              <Tab value={'tab-4'} as={'a'}>\n                Elements\n              </Tab>\n              <Tab value={'tab-5'} as={'a'}>\n                Components\n              </Tab>\n              <Tab value={'tab-6'} as={'a'}>\n                Layout\n              </Tab>\n            </TabsList>\n          </Tabs>\n        </HeroFoot>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: LargeThreePartHeroDemo,
} satisfies StoryObj

export const FullHeightThreePartHeroStory = {
  name: 'Full-height three-part hero',
  parameters: {
    official: { id: 'layout-hero/fullheight-hero-in-3-parts/003' },
    docs: {
      source: {
        code: "import {\n  Container,\n  Hero,\n  HeroBody,\n  HeroFoot,\n  HeroHead,\n  Icon,\n  LinkButton,\n  Navbar,\n  NavbarBrand,\n  NavbarBurger,\n  NavbarEnd,\n  NavbarItem,\n  NavbarMenu,\n  Subtitle,\n  Tab,\n  Tabs,\n  TabsList,\n  Title,\n} from '@seagreenio/react-bulma'\n\nfunction FullHeightThreePartHeroDemo() {\n  return (\n    <>\n      <Hero color={'success'} height={'full'}>\n        <HeroHead>\n          <Navbar as={'header'}>\n            <Container>\n              <NavbarBrand>\n                <NavbarItem>\n                  <img\n                    src={'./official-assets/bulma-type-white.png'}\n                    alt={'Logo'}\n                  />\n                </NavbarItem>\n                <NavbarBurger data-target={'navbarMenuHeroC'} as={'span'}>\n                  <span />\n                  <span />\n                  <span />\n                  <span />\n                </NavbarBurger>\n              </NavbarBrand>\n              <NavbarMenu id={'navbarMenuHeroC'}>\n                <NavbarEnd>\n                  <NavbarItem active>Home</NavbarItem>\n                  <NavbarItem>Examples</NavbarItem>\n                  <NavbarItem>Documentation</NavbarItem>\n                  <NavbarItem as={'span'}>\n                    <LinkButton color={'success'} inverted>\n                      <Icon>\n                        <i className={'fab fa-github'} />\n                      </Icon>\n                      <span>Download</span>\n                    </LinkButton>\n                  </NavbarItem>\n                </NavbarEnd>\n              </NavbarMenu>\n            </Container>\n          </Navbar>\n        </HeroHead>\n        <HeroBody>\n          <Container helpers={{ textAlign: 'center' }}>\n            <Title as={'p'}>Title</Title>\n            <Subtitle as={'p'}>Subtitle</Subtitle>\n          </Container>\n        </HeroBody>\n        <HeroFoot>\n          <Tabs defaultValue={'tab-1'}>\n            <TabsList\n              variant={'boxed'}\n              fullWidth\n              as={'nav'}\n              listWrapper={<Container />}\n            >\n              <Tab value={'tab-1'} as={'a'}>\n                Overview\n              </Tab>\n              <Tab value={'tab-2'} as={'a'}>\n                Modifiers\n              </Tab>\n              <Tab value={'tab-3'} as={'a'}>\n                Grid\n              </Tab>\n              <Tab value={'tab-4'} as={'a'}>\n                Elements\n              </Tab>\n              <Tab value={'tab-5'} as={'a'}>\n                Components\n              </Tab>\n              <Tab value={'tab-6'} as={'a'}>\n                Layout\n              </Tab>\n            </TabsList>\n          </Tabs>\n        </HeroFoot>\n      </Hero>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: FullHeightThreePartHeroDemo,
} satisfies StoryObj

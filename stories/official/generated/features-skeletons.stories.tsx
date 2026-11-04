import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Button,
  Buttons,
  Checkbox,
  Content,
  Control,
  Delete,
  Field,
  Icon,
  Image,
  Input,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  LinkButton,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Notification,
  SkeletonBlock,
  SkeletonLines,
  Subtitle,
  Tag,
  Textarea,
  Title,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'features-skeletons',
      title: 'Skeletons in Bulma',
      url: 'https://bulma.io/documentation/features/skeletons/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-features-skeletons',
  title: 'Features/Skeletons',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument
      pageId="features-skeletons"
      controllers={['skeleton-cycle']}
    >
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Skeletons in Bulma'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'Transform almost any Bulma component into a '}
          <strong data-official-prose="">{'skeleton loader'}</strong>
          {', or use one of the pre-built utility elements'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <div data-official-prose="" className={'content'}>
            <p data-official-prose="">
              {'A skeleton loader is a loading state that acts as a '}
              <strong data-official-prose="">{'placeholder'}</strong>
              {
                ' for content in an interface. Bulma v1 ships with 2 skeleton elements, and skeleton variants for most Bulma components.'
              }
            </p>
            <p data-official-prose="">
              {'All skeleton loaders share these CSS variables:'}
            </p>
            <pre data-official-prose="">
              <code data-official-prose="" className={'language-css'}>
                {
                  ':root {\n  --bulma-skeleton-background: var(--bulma-border);\n  --bulma-skeleton-radius: var(--bulma-radius-small);\n  --bulma-skeleton-block-min-height: 4.5em;\n  --bulma-skeleton-lines-gap: 0.75em;\n  --bulma-skeleton-line-height: 0.75em;\n}\n'
                }
              </code>
            </pre>
          </div>
          <h3
            data-official-prose=""
            id={'skeleton-block'}
            className={'title is-4 is-spaced bd-anchor-title '}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Skeleton Block '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#skeleton-block'}
            >
              {' # '}
            </a>
          </h3>
          <div data-official-prose="" className={'content'}>
            <p data-official-prose="">
              {
                'The skeleton block is a simple block element with a pulsating background. It has a minimum height of '
              }
              <code data-official-prose="">{'4.5em'}</code>
              {'.'}
            </p>
          </div>
          <div data-official-example="features-skeletons/skeleton-block/001">
            <Canvas of={EmptySkeletonBlockStory} />
          </div>
          <div data-official-prose="" className={'content'}>
            <p data-official-prose="">
              {
                'If you insert text inside this block, you can make its height responsive:'
              }
            </p>
          </div>
          <div data-official-example="features-skeletons/skeleton-block/002">
            <Canvas of={SkeletonBlockWithContentStory} />
          </div>
          <h3
            data-official-prose=""
            id={'skeleton-lines'}
            className={'title is-4 is-spaced bd-anchor-title '}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Skeleton Lines '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#skeleton-lines'}
            >
              {' # '}
            </a>
          </h3>
          <div data-official-prose="" className={'content'}>
            <p data-official-prose="">
              {
                'The skeleton lines element is a loading element which resembles a '
              }
              <strong data-official-prose="">{'paragraph'}</strong>
              {'. Each '}
              <code data-official-prose="">{'<div></div>'}</code>
              {' will render as a separate loading line.'}
            </p>
          </div>
          <div data-official-example="features-skeletons/skeleton-lines/001">
            <Canvas of={SkeletonLinesStory} />
          </div>
          <h3
            data-official-prose=""
            id={'bulma-components-with-skeletons'}
            className={'title is-4 is-spaced bd-anchor-title '}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Bulma components with skeletons '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#bulma-components-with-skeletons'}
            >
              {' # '}
            </a>
          </h3>
          <div data-official-prose="" className={'content'}>
            <p data-official-prose="">
              {
                'Most Bulma elements and components have a skeleton variant, which can be enabled by adding either the '
              }
              <code data-official-prose="">{'is-skeleton'}</code>
              {' or '}
              <code data-official-prose="">{'has-skeleton'}</code>
              {' modifier.'}
            </p>
          </div>
          <h4
            data-official-prose=""
            id={'button'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Button '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#button'}
            >
              {' # '}
            </a>
          </h4>
          <div data-official-example="features-skeletons/button/001">
            <Canvas of={ButtonSkeletonsStory} />
          </div>
          <h4
            data-official-prose=""
            id={'icon'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Icon '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#icon'}
            >
              {' # '}
            </a>
          </h4>
          <div data-official-example="features-skeletons/icon/001">
            <Canvas of={IconSkeletonStory} />
          </div>
          <h4
            data-official-prose=""
            id={'image'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Image '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#image'}
            >
              {' # '}
            </a>
          </h4>
          <div data-official-example="features-skeletons/image/001">
            <Canvas of={ImageSkeletonSizesStory} />
          </div>
          <h4
            data-official-prose=""
            id={'media-object'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Media Object '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#media-object'}
            >
              {' # '}
            </a>
          </h4>
          <div data-official-example="features-skeletons/media-object/001">
            <Canvas of={MediaObjectSkeletonStory} />
          </div>
          <div data-official-example="features-skeletons/media-object/002">
            <Canvas of={MediaFormSkeletonStory} />
          </div>
          <h4
            data-official-prose=""
            id={'notification'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Notification '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#notification'}
            >
              {' # '}
            </a>
          </h4>
          <div data-official-example="features-skeletons/notification/001">
            <Canvas of={NotificationSkeletonStory} />
          </div>
          <h4
            data-official-prose=""
            id={'tag'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Tag '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#tag'}
            >
              {' # '}
            </a>
          </h4>
          <div data-official-example="features-skeletons/tag/001">
            <Canvas of={TagSkeletonsStory} />
          </div>
          <h4
            data-official-prose=""
            id={'title-and-subtitle'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Title and Subtitle '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#title-and-subtitle'}
            >
              {' # '}
            </a>
          </h4>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'.title'}</code>
            {' and '}
            <code data-official-prose="">{'.subtitle'}</code>
            {' elements have both an '}
            <code data-official-prose="">{'is-skeleton'}</code>
            {' and '}
            <code data-official-prose="">{'has-skeleton'}</code>
            {' variant:'}
          </p>
          <ul data-official-prose="">
            <li data-official-prose="">
              <code data-official-prose="">{'is-skeleton'}</code>
              {' will turn the whole block into a loading skeleton'}
            </li>
            <li data-official-prose="">
              <code data-official-prose="">{'has-skeleton'}</code>
              {
                ' will turn only a small part of its content into a loading skeleton, to simulate loading only the inner text rather than the whole block'
              }
            </li>
          </ul>
          <div data-official-example="features-skeletons/title-and-subtitle/001">
            <Canvas of={TitleWithIsSkeletonStory} />
          </div>
          <div data-official-example="features-skeletons/title-and-subtitle/002">
            <Canvas of={TitleWithHasSkeletonStory} />
          </div>
          <div data-official-example="features-skeletons/title-and-subtitle/003">
            <Canvas of={SubtitleWithIsSkeletonStory} />
          </div>
          <div data-official-example="features-skeletons/title-and-subtitle/004">
            <Canvas of={SubtitleWithHasSkeletonStory} />
          </div>
          <div data-official-example="features-skeletons/title-and-subtitle/005">
            <Canvas of={HeadingPairWithIsSkeletonStory} />
          </div>
          <div data-official-example="features-skeletons/title-and-subtitle/006">
            <Canvas of={HeadingPairWithHasSkeletonStory} />
          </div>
          <h4
            data-official-prose=""
            id={'form-controls'}
            className={'title is-5 is-spaced bd-anchor-title'}
          >
            <span data-official-prose="" className={'bd-anchor-name'}>
              {' Form Controls '}
            </span>{' '}
            <a
              data-official-prose=""
              className={'bd-anchor-link'}
              href={'#form-controls'}
            >
              {' # '}
            </a>
          </h4>
          <div data-official-example="features-skeletons/form-controls/001">
            <Canvas of={InputSkeletonStory} />
          </div>
          <div data-official-example="features-skeletons/form-controls/002">
            <Canvas of={TextareaSkeletonStory} />
          </div>
          <div
            data-official-prose=""
            data-official-control="skeleton-toggle"
            className={'skeleton-toggler display-flex align-items-center gap-2'}
          >
            <button
              data-official-prose=""
              id={'js-toggle-skeleton'}
              className={'button'}
            >
              <div
                data-official-prose=""
                data-official-control-part="timer"
                id={'js-timer'}
                className={'timer is-active'}
              >
                <div data-official-prose="" className={'timer-mask'}></div>
              </div>
              <span data-official-prose="" className={'mr-2'}>
                {'Toggle Skeleton Animations'}
              </span>{' '}
              <span
                data-official-prose=""
                data-official-control-part="status"
                className={'tag is-success'}
                style={{ marginRight: '-0.5rem' } as React.CSSProperties}
              >
                {'Active'}
              </span>
            </button>
          </div>{' '}
        </div>
      </div>
    </OfficialDocument>
  )
}

function EmptySkeletonBlockDemo() {
  return (
    <>
      <SkeletonBlock />
    </>
  )
}

function SkeletonBlockWithContentDemo() {
  return (
    <>
      <SkeletonBlock>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Donec sed odio dui. Nullam quis
        risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor
        id nibh ultricies vehicula ut id elit.
      </SkeletonBlock>
    </>
  )
}

function SkeletonLinesDemo() {
  return (
    <>
      <SkeletonLines lines={5} />
    </>
  )
}

function ButtonSkeletonsDemo() {
  return (
    <>
      <Buttons>
        <Button className={'rb-is-skeleton'}>Button</Button>
        <Button color={'link'} className={'rb-is-skeleton'}>
          Link
        </Button>
        <Button color={'primary'} className={'rb-is-skeleton'}>
          Primary
        </Button>
        <Button color={'success'} className={'rb-is-skeleton'}>
          Success
        </Button>
        <Button color={'info'} className={'rb-is-skeleton'}>
          Info
        </Button>
        <Button color={'warning'} className={'rb-is-skeleton'}>
          Warning
        </Button>
        <Button color={'danger'} className={'rb-is-skeleton'}>
          Danger
        </Button>
      </Buttons>
    </>
  )
}

function IconSkeletonDemo() {
  return (
    <>
      <Icon className={'rb-is-skeleton'}>
        <i className={'fas fa-reply'} />
      </Icon>
    </>
  )
}

function ImageSkeletonSizesDemo() {
  return (
    <>
      <Image
        size={16}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/16x16'}
      />
      <Image
        size={32}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/32x32'}
      />
      <Image
        size={64}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/64x64'}
      />
      <Image
        size={128}
        wrapperProps={{ className: 'rb-is-skeleton' }}
        alt={'Placeholder'}
        src={'https://placehold.co/128x128'}
      />
    </>
  )
}

function MediaObjectSkeletonDemo() {
  return (
    <>
      <Media>
        <MediaLeft as={'figure'}>
          <Image
            size={64}
            as={'p'}
            wrapperProps={{ className: 'rb-is-skeleton' }}
            src={'https://placehold.co/128x128'}
            alt={'Placeholder image'}
          />
        </MediaLeft>
        <MediaContent>
          <Content className={'rb-is-skeleton'}>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{' '}
              <small>31m</small> <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit vestibulum ut. Maecenas non massa
              sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </Content>
          <Level mobile>
            <LevelLeft>
              <LevelItem as={'a'}>
                <Icon size={'small'} className={'rb-is-skeleton'}>
                  <i className={'fas fa-reply'} />
                </Icon>
              </LevelItem>
              <LevelItem as={'a'}>
                <Icon size={'small'} className={'rb-is-skeleton'}>
                  <i className={'fas fa-retweet'} />
                </Icon>
              </LevelItem>
              <LevelItem as={'a'}>
                <Icon size={'small'} className={'rb-is-skeleton'}>
                  <i className={'fas fa-heart'} />
                </Icon>
              </LevelItem>
            </LevelLeft>
          </Level>
        </MediaContent>
        <MediaRight>
          <Delete aria-label={'delete'} className={'rb-is-skeleton'} />
        </MediaRight>
      </Media>
    </>
  )
}

function MediaFormSkeletonDemo() {
  return (
    <>
      <Media>
        <MediaLeft as={'figure'}>
          <Image
            size={64}
            as={'p'}
            wrapperProps={{ className: 'rb-is-skeleton' }}
            src={'https://placehold.co/128x128'}
            alt={'Placeholder image'}
          />
        </MediaLeft>
        <MediaContent>
          <Field>
            <Control as={'p'}>
              <Textarea
                placeholder={'Add a comment...'}
                className={'rb-is-skeleton'}
                defaultValue={''}
              />
            </Control>
          </Field>
          <Level>
            <LevelLeft>
              <LevelItem>
                <LinkButton color={'info'} className={'rb-is-skeleton'}>
                  Submit
                </LinkButton>
              </LevelItem>
            </LevelLeft>
            <LevelRight>
              <LevelItem>
                <Checkbox wrapperProps={{ className: 'rb-is-skeleton' }}>
                  {' '}
                  Press enter to submit{' '}
                </Checkbox>
              </LevelItem>
            </LevelRight>
          </Level>
        </MediaContent>
      </Media>
    </>
  )
}

function NotificationSkeletonDemo() {
  return (
    <>
      <Notification className={'rb-is-skeleton'}>
        Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna
        mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam.
      </Notification>
    </>
  )
}

function TagSkeletonsDemo() {
  return (
    <>
      <Tag className={'rb-is-skeleton'}>Tag</Tag>{' '}
      <Tag color={'link'} className={'rb-is-skeleton'}>
        Link
      </Tag>{' '}
      <Tag color={'primary'} className={'rb-is-skeleton'}>
        Primary
      </Tag>{' '}
      <Tag color={'info'} className={'rb-is-skeleton'}>
        Info
      </Tag>{' '}
      <Tag color={'success'} className={'rb-is-skeleton'}>
        Success
      </Tag>{' '}
      <Tag color={'warning'} className={'rb-is-skeleton'}>
        Warning
      </Tag>{' '}
      <Tag color={'danger'} className={'rb-is-skeleton'}>
        Danger
      </Tag>
    </>
  )
}

function TitleWithIsSkeletonDemo() {
  return (
    <>
      <Title className={'rb-is-skeleton'} level={1}>
        Title
      </Title>
    </>
  )
}

function TitleWithHasSkeletonDemo() {
  return (
    <>
      <Title className={'rb-has-skeleton'} level={1}>
        Title
      </Title>
    </>
  )
}

function SubtitleWithIsSkeletonDemo() {
  return (
    <>
      <Subtitle className={'rb-is-skeleton'} level={2}>
        Subtitle
      </Subtitle>
    </>
  )
}

function SubtitleWithHasSkeletonDemo() {
  return (
    <>
      <Subtitle className={'rb-has-skeleton'} level={2}>
        Subtitle
      </Subtitle>
    </>
  )
}

function HeadingPairWithIsSkeletonDemo() {
  return (
    <>
      <Title className={'rb-is-skeleton'} level={1}>
        Title
      </Title>
      <Subtitle className={'rb-is-skeleton'} level={2}>
        Subtitle
      </Subtitle>
    </>
  )
}

function HeadingPairWithHasSkeletonDemo() {
  return (
    <>
      <Title className={'rb-has-skeleton'} level={1}>
        Title
      </Title>
      <Subtitle className={'rb-has-skeleton'} level={2}>
        Subtitle
      </Subtitle>
    </>
  )
}

function InputSkeletonDemo() {
  return (
    <>
      <Input className={'rb-is-skeleton'} />
    </>
  )
}

function TextareaSkeletonDemo() {
  return (
    <>
      <Textarea className={'rb-is-skeleton'} defaultValue={''} />
    </>
  )
}

export const EmptySkeletonBlockStory = {
  name: 'Empty skeleton block',
  parameters: {
    official: { id: 'features-skeletons/skeleton-block/001' },
    docs: {
      source: {
        code: "import { SkeletonBlock } from '@seagreenio/react-bulma'\n\nfunction EmptySkeletonBlockDemo() {\n  return (\n    <>\n      <SkeletonBlock />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: EmptySkeletonBlockDemo,
} satisfies StoryObj

export const SkeletonBlockWithContentStory = {
  name: 'Skeleton block with content',
  parameters: {
    official: { id: 'features-skeletons/skeleton-block/002' },
    docs: {
      source: {
        code: "import { SkeletonBlock } from '@seagreenio/react-bulma'\n\nfunction SkeletonBlockWithContentDemo() {\n  return (\n    <>\n      <SkeletonBlock>\n        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\n        ut fermentum massa justo sit amet risus. Donec sed odio dui. Nullam quis\n        risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus\n        et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor\n        id nibh ultricies vehicula ut id elit.\n      </SkeletonBlock>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SkeletonBlockWithContentDemo,
} satisfies StoryObj

export const SkeletonLinesStory = {
  name: 'Skeleton lines',
  parameters: {
    official: { id: 'features-skeletons/skeleton-lines/001' },
    docs: {
      source: {
        code: "import { SkeletonLines } from '@seagreenio/react-bulma'\n\nfunction SkeletonLinesDemo() {\n  return (\n    <>\n      <SkeletonLines lines={5} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SkeletonLinesDemo,
} satisfies StoryObj

export const ButtonSkeletonsStory = {
  name: 'Button skeletons',
  parameters: {
    official: { id: 'features-skeletons/button/001' },
    docs: {
      source: {
        code: "import { Button, Buttons } from '@seagreenio/react-bulma'\n\nfunction ButtonSkeletonsDemo() {\n  return (\n    <>\n      <Buttons>\n        <Button className={'rb-is-skeleton'}>Button</Button>\n        <Button color={'link'} className={'rb-is-skeleton'}>\n          Link\n        </Button>\n        <Button color={'primary'} className={'rb-is-skeleton'}>\n          Primary\n        </Button>\n        <Button color={'success'} className={'rb-is-skeleton'}>\n          Success\n        </Button>\n        <Button color={'info'} className={'rb-is-skeleton'}>\n          Info\n        </Button>\n        <Button color={'warning'} className={'rb-is-skeleton'}>\n          Warning\n        </Button>\n        <Button color={'danger'} className={'rb-is-skeleton'}>\n          Danger\n        </Button>\n      </Buttons>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ButtonSkeletonsDemo,
} satisfies StoryObj

export const IconSkeletonStory = {
  name: 'Icon skeleton',
  parameters: {
    official: { id: 'features-skeletons/icon/001' },
    docs: {
      source: {
        code: "import { Icon } from '@seagreenio/react-bulma'\n\nfunction IconSkeletonDemo() {\n  return (\n    <>\n      <Icon className={'rb-is-skeleton'}>\n        <i className={'fas fa-reply'} />\n      </Icon>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: IconSkeletonDemo,
} satisfies StoryObj

export const ImageSkeletonSizesStory = {
  name: 'Image skeleton sizes',
  parameters: {
    official: { id: 'features-skeletons/image/001' },
    docs: {
      source: {
        code: "import { Image } from '@seagreenio/react-bulma'\n\nfunction ImageSkeletonSizesDemo() {\n  return (\n    <>\n      <Image\n        size={16}\n        wrapperProps={{ className: 'rb-is-skeleton' }}\n        alt={'Placeholder'}\n        src={'https://placehold.co/16x16'}\n      />\n      <Image\n        size={32}\n        wrapperProps={{ className: 'rb-is-skeleton' }}\n        alt={'Placeholder'}\n        src={'https://placehold.co/32x32'}\n      />\n      <Image\n        size={64}\n        wrapperProps={{ className: 'rb-is-skeleton' }}\n        alt={'Placeholder'}\n        src={'https://placehold.co/64x64'}\n      />\n      <Image\n        size={128}\n        wrapperProps={{ className: 'rb-is-skeleton' }}\n        alt={'Placeholder'}\n        src={'https://placehold.co/128x128'}\n      />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ImageSkeletonSizesDemo,
} satisfies StoryObj

export const MediaObjectSkeletonStory = {
  name: 'Media object skeleton',
  parameters: {
    official: { id: 'features-skeletons/media-object/001' },
    docs: {
      source: {
        code: "import {\n  Content,\n  Delete,\n  Icon,\n  Image,\n  Level,\n  LevelItem,\n  LevelLeft,\n  Media,\n  MediaContent,\n  MediaLeft,\n  MediaRight,\n} from '@seagreenio/react-bulma'\n\nfunction MediaObjectSkeletonDemo() {\n  return (\n    <>\n      <Media>\n        <MediaLeft as={'figure'}>\n          <Image\n            size={64}\n            as={'p'}\n            wrapperProps={{ className: 'rb-is-skeleton' }}\n            src={'https://placehold.co/128x128'}\n            alt={'Placeholder image'}\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Content className={'rb-is-skeleton'}>\n            <p>\n              <strong>John Smith</strong> <small>@johnsmith</small>{' '}\n              <small>31m</small> <br /> Lorem ipsum dolor sit amet, consectetur\n              adipiscing elit. Proin ornare magna eros, eu pellentesque tortor\n              sociis natoque penatibus et magnis dis parturient montes, nascetur\n              ridiculus mus est non commodo luctus, nisi erat porttitor ligula,\n              eget lacinia odio sem nec elit vestibulum ut. Maecenas non massa\n              sem. Etiam finibus odio quis feugiat facilisis.\n            </p>\n          </Content>\n          <Level mobile>\n            <LevelLeft>\n              <LevelItem as={'a'}>\n                <Icon size={'small'} className={'rb-is-skeleton'}>\n                  <i className={'fas fa-reply'} />\n                </Icon>\n              </LevelItem>\n              <LevelItem as={'a'}>\n                <Icon size={'small'} className={'rb-is-skeleton'}>\n                  <i className={'fas fa-retweet'} />\n                </Icon>\n              </LevelItem>\n              <LevelItem as={'a'}>\n                <Icon size={'small'} className={'rb-is-skeleton'}>\n                  <i className={'fas fa-heart'} />\n                </Icon>\n              </LevelItem>\n            </LevelLeft>\n          </Level>\n        </MediaContent>\n        <MediaRight>\n          <Delete aria-label={'delete'} className={'rb-is-skeleton'} />\n        </MediaRight>\n      </Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediaObjectSkeletonDemo,
} satisfies StoryObj

export const MediaFormSkeletonStory = {
  name: 'Media form skeleton',
  parameters: {
    official: { id: 'features-skeletons/media-object/002' },
    docs: {
      source: {
        code: "import {\n  Checkbox,\n  Control,\n  Field,\n  Image,\n  Level,\n  LevelItem,\n  LevelLeft,\n  LevelRight,\n  LinkButton,\n  Media,\n  MediaContent,\n  MediaLeft,\n  Textarea,\n} from '@seagreenio/react-bulma'\n\nfunction MediaFormSkeletonDemo() {\n  return (\n    <>\n      <Media>\n        <MediaLeft as={'figure'}>\n          <Image\n            size={64}\n            as={'p'}\n            wrapperProps={{ className: 'rb-is-skeleton' }}\n            src={'https://placehold.co/128x128'}\n            alt={'Placeholder image'}\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Field>\n            <Control as={'p'}>\n              <Textarea\n                placeholder={'Add a comment...'}\n                className={'rb-is-skeleton'}\n                defaultValue={''}\n              />\n            </Control>\n          </Field>\n          <Level>\n            <LevelLeft>\n              <LevelItem>\n                <LinkButton color={'info'} className={'rb-is-skeleton'}>\n                  Submit\n                </LinkButton>\n              </LevelItem>\n            </LevelLeft>\n            <LevelRight>\n              <LevelItem>\n                <Checkbox wrapperProps={{ className: 'rb-is-skeleton' }}>\n                  {' '}\n                  Press enter to submit{' '}\n                </Checkbox>\n              </LevelItem>\n            </LevelRight>\n          </Level>\n        </MediaContent>\n      </Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediaFormSkeletonDemo,
} satisfies StoryObj

export const NotificationSkeletonStory = {
  name: 'Notification skeleton',
  parameters: {
    official: { id: 'features-skeletons/notification/001' },
    docs: {
      source: {
        code: "import { Notification } from '@seagreenio/react-bulma'\n\nfunction NotificationSkeletonDemo() {\n  return (\n    <>\n      <Notification className={'rb-is-skeleton'}>\n        Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna\n        mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget\n        quam.\n      </Notification>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NotificationSkeletonDemo,
} satisfies StoryObj

export const TagSkeletonsStory = {
  name: 'Tag skeletons',
  parameters: {
    official: { id: 'features-skeletons/tag/001' },
    docs: {
      source: {
        code: "import { Tag } from '@seagreenio/react-bulma'\n\nfunction TagSkeletonsDemo() {\n  return (\n    <>\n      <Tag className={'rb-is-skeleton'}>Tag</Tag>{' '}\n      <Tag color={'link'} className={'rb-is-skeleton'}>\n        Link\n      </Tag>{' '}\n      <Tag color={'primary'} className={'rb-is-skeleton'}>\n        Primary\n      </Tag>{' '}\n      <Tag color={'info'} className={'rb-is-skeleton'}>\n        Info\n      </Tag>{' '}\n      <Tag color={'success'} className={'rb-is-skeleton'}>\n        Success\n      </Tag>{' '}\n      <Tag color={'warning'} className={'rb-is-skeleton'}>\n        Warning\n      </Tag>{' '}\n      <Tag color={'danger'} className={'rb-is-skeleton'}>\n        Danger\n      </Tag>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TagSkeletonsDemo,
} satisfies StoryObj

export const TitleWithIsSkeletonStory = {
  name: 'Title with is-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/001' },
    docs: {
      source: {
        code: "import { Title } from '@seagreenio/react-bulma'\n\nfunction TitleWithIsSkeletonDemo() {\n  return (\n    <>\n      <Title className={'rb-is-skeleton'} level={1}>\n        Title\n      </Title>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TitleWithIsSkeletonDemo,
} satisfies StoryObj

export const TitleWithHasSkeletonStory = {
  name: 'Title with has-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/002' },
    docs: {
      source: {
        code: "import { Title } from '@seagreenio/react-bulma'\n\nfunction TitleWithHasSkeletonDemo() {\n  return (\n    <>\n      <Title className={'rb-has-skeleton'} level={1}>\n        Title\n      </Title>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TitleWithHasSkeletonDemo,
} satisfies StoryObj

export const SubtitleWithIsSkeletonStory = {
  name: 'Subtitle with is-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/003' },
    docs: {
      source: {
        code: "import { Subtitle } from '@seagreenio/react-bulma'\n\nfunction SubtitleWithIsSkeletonDemo() {\n  return (\n    <>\n      <Subtitle className={'rb-is-skeleton'} level={2}>\n        Subtitle\n      </Subtitle>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SubtitleWithIsSkeletonDemo,
} satisfies StoryObj

export const SubtitleWithHasSkeletonStory = {
  name: 'Subtitle with has-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/004' },
    docs: {
      source: {
        code: "import { Subtitle } from '@seagreenio/react-bulma'\n\nfunction SubtitleWithHasSkeletonDemo() {\n  return (\n    <>\n      <Subtitle className={'rb-has-skeleton'} level={2}>\n        Subtitle\n      </Subtitle>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SubtitleWithHasSkeletonDemo,
} satisfies StoryObj

export const HeadingPairWithIsSkeletonStory = {
  name: 'Heading pair with is-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/005' },
    docs: {
      source: {
        code: "import { Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction HeadingPairWithIsSkeletonDemo() {\n  return (\n    <>\n      <Title className={'rb-is-skeleton'} level={1}>\n        Title\n      </Title>\n      <Subtitle className={'rb-is-skeleton'} level={2}>\n        Subtitle\n      </Subtitle>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HeadingPairWithIsSkeletonDemo,
} satisfies StoryObj

export const HeadingPairWithHasSkeletonStory = {
  name: 'Heading pair with has-skeleton',
  parameters: {
    official: { id: 'features-skeletons/title-and-subtitle/006' },
    docs: {
      source: {
        code: "import { Subtitle, Title } from '@seagreenio/react-bulma'\n\nfunction HeadingPairWithHasSkeletonDemo() {\n  return (\n    <>\n      <Title className={'rb-has-skeleton'} level={1}>\n        Title\n      </Title>\n      <Subtitle className={'rb-has-skeleton'} level={2}>\n        Subtitle\n      </Subtitle>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: HeadingPairWithHasSkeletonDemo,
} satisfies StoryObj

export const InputSkeletonStory = {
  name: 'Input skeleton',
  parameters: {
    official: { id: 'features-skeletons/form-controls/001' },
    docs: {
      source: {
        code: "import { Input } from '@seagreenio/react-bulma'\n\nfunction InputSkeletonDemo() {\n  return (\n    <>\n      <Input className={'rb-is-skeleton'} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: InputSkeletonDemo,
} satisfies StoryObj

export const TextareaSkeletonStory = {
  name: 'Textarea skeleton',
  parameters: {
    official: { id: 'features-skeletons/form-controls/002' },
    docs: {
      source: {
        code: "import { Textarea } from '@seagreenio/react-bulma'\n\nfunction TextareaSkeletonDemo() {\n  return (\n    <>\n      <Textarea className={'rb-is-skeleton'} defaultValue={''} />\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: TextareaSkeletonDemo,
} satisfies StoryObj

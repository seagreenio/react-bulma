import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Box,
  Button,
  Content,
  Control,
  Field,
  Icon,
  Image,
  Input,
  Label,
  Level,
  LevelItem,
  LevelLeft,
  Media,
  MediaContent,
  MediaLeft,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'elements-box',
      title: 'Box',
      url: 'https://bulma.io/documentation/elements/box/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-elements-box',
  title: 'CSS Library/Elements/Box',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="elements-box" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Box'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A white '}
          <strong data-official-prose="">{'box'}</strong>
          {' to contain other elements'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'The '}
            <code data-official-prose="">{'box'}</code>
            {
              ' element is a simple container with a white background, some padding, and a box shadow.'
            }
          </p>
        </div>
        <div data-official-example="elements-box/basic/001">
          <Canvas of={DefaultBoxStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {
              'Because it acts as a container, you can easily include other components, like '
            }
            <strong data-official-prose="">{'form elements'}</strong>
            {':'}
          </p>
        </div>
        <div data-official-example="elements-box/basic/002">
          <Canvas of={SignInFormStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Or a '}
            <code data-official-prose="">{'media'}</code>
            {' object:'}
          </p>
        </div>
        <div data-official-example="elements-box/basic/003">
          <Canvas of={MediaObjectStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function DefaultBoxDemo() {
  return (
    <>
      <Box>I'm in a box.</Box>
    </>
  )
}

function SignInFormDemo() {
  return (
    <>
      <Box as={'form'}>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input type={'email'} placeholder={'e.g. alex@example.com'} />
          </Control>
        </Field>
        <Field>
          <Label>Password</Label>
          <Control>
            <Input type={'password'} placeholder={'********'} />
          </Control>
        </Field>
        <Button color={'primary'}>Sign in</Button>
      </Box>
    </>
  )
}

function MediaObjectDemo() {
  return (
    <>
      <Box>
        <Media>
          <MediaLeft>
            <Image
              size={64}
              src={'./official-assets/128x128.png'}
              alt={'Image'}
            />
          </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                <small>31m</small> <br /> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean efficitur sit amet massa
                fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </Content>
            <Level mobile>
              <LevelLeft>
                <LevelItem aria-label={'reply'} as={'a'}>
                  <Icon size={'small'}>
                    <i aria-hidden={'true'} className={'fas fa-reply'} />
                  </Icon>
                </LevelItem>
                <LevelItem aria-label={'retweet'} as={'a'}>
                  <Icon size={'small'}>
                    <i aria-hidden={'true'} className={'fas fa-retweet'} />
                  </Icon>
                </LevelItem>
                <LevelItem aria-label={'like'} as={'a'}>
                  <Icon size={'small'}>
                    <i aria-hidden={'true'} className={'fas fa-heart'} />
                  </Icon>
                </LevelItem>
              </LevelLeft>
            </Level>
          </MediaContent>
        </Media>
      </Box>
    </>
  )
}

export const DefaultBoxStory = {
  name: 'Default box',
  parameters: {
    official: { id: 'elements-box/basic/001' },
    docs: {
      source: {
        code: "import { Box } from '@seagreenio/react-bulma'\n\nfunction DefaultBoxDemo() {\n  return (\n    <>\n      <Box>I'm in a box.</Box>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: DefaultBoxDemo,
} satisfies StoryObj

export const SignInFormStory = {
  name: 'Sign-in form',
  parameters: {
    official: { id: 'elements-box/basic/002' },
    docs: {
      source: {
        code: "import {\n  Box,\n  Button,\n  Control,\n  Field,\n  Input,\n  Label,\n} from '@seagreenio/react-bulma'\n\nfunction SignInFormDemo() {\n  return (\n    <>\n      <Box as={'form'}>\n        <Field>\n          <Label>Email</Label>\n          <Control>\n            <Input type={'email'} placeholder={'e.g. alex@example.com'} />\n          </Control>\n        </Field>\n        <Field>\n          <Label>Password</Label>\n          <Control>\n            <Input type={'password'} placeholder={'********'} />\n          </Control>\n        </Field>\n        <Button color={'primary'}>Sign in</Button>\n      </Box>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: SignInFormDemo,
} satisfies StoryObj

export const MediaObjectStory = {
  name: 'Media object',
  parameters: {
    official: { id: 'elements-box/basic/003' },
    docs: {
      source: {
        code: "import {\n  Box,\n  Content,\n  Icon,\n  Image,\n  Level,\n  LevelItem,\n  LevelLeft,\n  Media,\n  MediaContent,\n  MediaLeft,\n} from '@seagreenio/react-bulma'\n\nfunction MediaObjectDemo() {\n  return (\n    <>\n      <Box>\n        <Media>\n          <MediaLeft>\n            <Image\n              size={64}\n              src={'./official-assets/128x128.png'}\n              alt={'Image'}\n            />\n          </MediaLeft>\n          <MediaContent>\n            <Content>\n              <p>\n                <strong>John Smith</strong> <small>@johnsmith</small>{' '}\n                <small>31m</small> <br /> Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Aenean efficitur sit amet massa\n                fringilla egestas. Nullam condimentum luctus turpis.\n              </p>\n            </Content>\n            <Level mobile>\n              <LevelLeft>\n                <LevelItem aria-label={'reply'} as={'a'}>\n                  <Icon size={'small'}>\n                    <i aria-hidden={'true'} className={'fas fa-reply'} />\n                  </Icon>\n                </LevelItem>\n                <LevelItem aria-label={'retweet'} as={'a'}>\n                  <Icon size={'small'}>\n                    <i aria-hidden={'true'} className={'fas fa-retweet'} />\n                  </Icon>\n                </LevelItem>\n                <LevelItem aria-label={'like'} as={'a'}>\n                  <Icon size={'small'}>\n                    <i aria-hidden={'true'} className={'fas fa-heart'} />\n                  </Icon>\n                </LevelItem>\n              </LevelLeft>\n            </Level>\n          </MediaContent>\n        </Media>\n      </Box>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediaObjectDemo,
} satisfies StoryObj

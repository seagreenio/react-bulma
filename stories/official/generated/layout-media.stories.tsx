import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Button,
  Checkbox,
  Content,
  Control,
  Delete,
  Field,
  Icon,
  Image,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  LinkButton,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Textarea,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'layout-media',
      title: 'Media Object',
      url: 'https://bulma.io/documentation/layout/media-object/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-layout-media',
  title: 'CSS Library/Layout/Media Object',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="layout-media" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Media Object'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'The famous '}
          <strong data-official-prose="">{'media object'}</strong>
          {' prevalent in social media interfaces, but useful in any context'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' The '}
            <a
              data-official-prose=""
              href={
                'http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code'
              }
            >
              {'media object'}
            </a>
            {' is a UI element perfect for repeatable and nestable content. '}
          </p>
        </div>
        <div data-official-example="layout-media/basic/001">
          <Canvas of={MediaObjectStory} />
        </div>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' You can include '}
            <em data-official-prose="">{'any'}</em>
            {
              ' other Bulma element, like inputs, textareas, icons, buttons… or even a '
            }
            <strong data-official-prose="">{'navbar'}</strong>
            {'. '}
          </p>
        </div>
        <div data-official-example="layout-media/basic/002">
          <Canvas of={MediaFormStory} />
        </div>
        <h3
          data-official-prose=""
          id={'nesting'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Nesting '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#nesting'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'You can nest media objects up to '}
            <strong data-official-prose="">{'3 levels'}</strong>
            {' deep.'}
          </p>
        </div>
        <div data-official-example="layout-media/nesting/001">
          <Canvas of={NestedMediaObjectsStory} />
        </div>
      </div>
    </OfficialDocument>
  )
}

function MediaObjectDemo() {
  return (
    <>
      <Media>
        <MediaLeft as={'figure'}>
          <Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{' '}
              <small>31m</small> <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
              feugiat facilisis.
            </p>
          </Content>
          <Level mobile>
            <LevelLeft>
              <LevelItem as={'a'}>
                <Icon size={'small'}>
                  <i className={'fas fa-reply'} />
                </Icon>
              </LevelItem>
              <LevelItem as={'a'}>
                <Icon size={'small'}>
                  <i className={'fas fa-retweet'} />
                </Icon>
              </LevelItem>
              <LevelItem as={'a'}>
                <Icon size={'small'}>
                  <i className={'fas fa-heart'} />
                </Icon>
              </LevelItem>
            </LevelLeft>
          </Level>
        </MediaContent>
        <MediaRight>
          <Delete />
        </MediaRight>
      </Media>
    </>
  )
}

function MediaFormDemo() {
  return (
    <>
      <Media>
        <MediaLeft as={'figure'}>
          <Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />
        </MediaLeft>
        <MediaContent>
          <Field>
            <Control as={'p'}>
              <Textarea placeholder={'Add a comment...'} defaultValue={''} />
            </Control>
          </Field>
          <Level>
            <LevelLeft>
              <LevelItem>
                <LinkButton color={'info'}>Submit</LinkButton>
              </LevelItem>
            </LevelLeft>
            <LevelRight>
              <LevelItem>
                <Checkbox> Press enter to submit </Checkbox>
              </LevelItem>
            </LevelRight>
          </Level>
        </MediaContent>
      </Media>
    </>
  )
}

function NestedMediaObjectsDemo() {
  return (
    <>
      <Media>
        <MediaLeft as={'figure'}>
          <Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>
              <strong>Barbara Middleton</strong> <br /> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis porta eros lacus, nec
              ultricies elit blandit non. Suspendisse pellentesque mauris sit
              amet dolor blandit rutrum. Nunc in tempus turpis. <br />{' '}
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>
          </Content>
          <Media>
            <MediaLeft as={'figure'}>
              <Image
                size={48}
                as={'p'}
                src={'./official-assets/96x96.png'}
                alt={''}
              />
            </MediaLeft>
            <MediaContent>
              <Content>
                <p>
                  <strong>Sean Brown</strong> <br /> Donec sollicitudin urna
                  eget eros malesuada sagittis. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
                  feugiat. <br />{' '}
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>
              <Media>
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.
              </Media>
              <Media>
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.
              </Media>
            </MediaContent>
          </Media>
          <Media>
            <MediaLeft as={'figure'}>
              <Image
                size={48}
                as={'p'}
                src={'./official-assets/96x96.png'}
                alt={''}
              />
            </MediaLeft>
            <MediaContent>
              <Content>
                <p>
                  <strong>Kayli Eunice </strong> <br /> Sed convallis
                  scelerisque mauris, non pulvinar nunc mattis vel. Maecenas
                  varius felis sit amet magna vestibulum euismod malesuada
                  cursus libero. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae; Phasellus lacinia
                  non nisl id feugiat. <br />{' '}
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>
            </MediaContent>
          </Media>
        </MediaContent>
      </Media>
      <Media>
        <MediaLeft as={'figure'}>
          <Image
            size={64}
            as={'p'}
            src={'./official-assets/128x128.png'}
            alt={''}
          />
        </MediaLeft>
        <MediaContent>
          <Field>
            <Control as={'p'}>
              <Textarea placeholder={'Add a comment...'} defaultValue={''} />
            </Control>
          </Field>
          <Field>
            <Control as={'p'}>
              <Button>Post comment</Button>
            </Control>
          </Field>
        </MediaContent>
      </Media>
    </>
  )
}

export const MediaObjectStory = {
  name: 'Media object',
  parameters: {
    official: { id: 'layout-media/basic/001' },
    docs: {
      source: {
        code: "import {\n  Content,\n  Delete,\n  Icon,\n  Image,\n  Level,\n  LevelItem,\n  LevelLeft,\n  Media,\n  MediaContent,\n  MediaLeft,\n  MediaRight,\n} from '@seagreenio/react-bulma'\n\nfunction MediaObjectDemo() {\n  return (\n    <>\n      <Media>\n        <MediaLeft as={'figure'}>\n          <Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Content>\n            <p>\n              <strong>John Smith</strong> <small>@johnsmith</small>{' '}\n              <small>31m</small> <br /> Lorem ipsum dolor sit amet, consectetur\n              adipiscing elit. Proin ornare magna eros, eu pellentesque tortor\n              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis\n              feugiat facilisis.\n            </p>\n          </Content>\n          <Level mobile>\n            <LevelLeft>\n              <LevelItem as={'a'}>\n                <Icon size={'small'}>\n                  <i className={'fas fa-reply'} />\n                </Icon>\n              </LevelItem>\n              <LevelItem as={'a'}>\n                <Icon size={'small'}>\n                  <i className={'fas fa-retweet'} />\n                </Icon>\n              </LevelItem>\n              <LevelItem as={'a'}>\n                <Icon size={'small'}>\n                  <i className={'fas fa-heart'} />\n                </Icon>\n              </LevelItem>\n            </LevelLeft>\n          </Level>\n        </MediaContent>\n        <MediaRight>\n          <Delete />\n        </MediaRight>\n      </Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediaObjectDemo,
} satisfies StoryObj

export const MediaFormStory = {
  name: 'Media form',
  parameters: {
    official: { id: 'layout-media/basic/002' },
    docs: {
      source: {
        code: "import {\n  Checkbox,\n  Control,\n  Field,\n  Image,\n  Level,\n  LevelItem,\n  LevelLeft,\n  LevelRight,\n  LinkButton,\n  Media,\n  MediaContent,\n  MediaLeft,\n  Textarea,\n} from '@seagreenio/react-bulma'\n\nfunction MediaFormDemo() {\n  return (\n    <>\n      <Media>\n        <MediaLeft as={'figure'}>\n          <Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Field>\n            <Control as={'p'}>\n              <Textarea placeholder={'Add a comment...'} defaultValue={''} />\n            </Control>\n          </Field>\n          <Level>\n            <LevelLeft>\n              <LevelItem>\n                <LinkButton color={'info'}>Submit</LinkButton>\n              </LevelItem>\n            </LevelLeft>\n            <LevelRight>\n              <LevelItem>\n                <Checkbox> Press enter to submit </Checkbox>\n              </LevelItem>\n            </LevelRight>\n          </Level>\n        </MediaContent>\n      </Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: MediaFormDemo,
} satisfies StoryObj

export const NestedMediaObjectsStory = {
  name: 'Nested media objects',
  parameters: {
    official: { id: 'layout-media/nesting/001' },
    docs: {
      source: {
        code: "import {\n  Button,\n  Content,\n  Control,\n  Field,\n  Image,\n  Media,\n  MediaContent,\n  MediaLeft,\n  Textarea,\n} from '@seagreenio/react-bulma'\n\nfunction NestedMediaObjectsDemo() {\n  return (\n    <>\n      <Media>\n        <MediaLeft as={'figure'}>\n          <Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Content>\n            <p>\n              <strong>Barbara Middleton</strong> <br /> Lorem ipsum dolor sit\n              amet, consectetur adipiscing elit. Duis porta eros lacus, nec\n              ultricies elit blandit non. Suspendisse pellentesque mauris sit\n              amet dolor blandit rutrum. Nunc in tempus turpis. <br />{' '}\n              <small>\n                <a>Like</a> · <a>Reply</a> · 3 hrs\n              </small>\n            </p>\n          </Content>\n          <Media>\n            <MediaLeft as={'figure'}>\n              <Image\n                size={48}\n                as={'p'}\n                src={'./official-assets/96x96.png'}\n                alt={''}\n              />\n            </MediaLeft>\n            <MediaContent>\n              <Content>\n                <p>\n                  <strong>Sean Brown</strong> <br /> Donec sollicitudin urna\n                  eget eros malesuada sagittis. Pellentesque habitant morbi\n                  tristique senectus et netus et malesuada fames ac turpis\n                  egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo\n                  feugiat. <br />{' '}\n                  <small>\n                    <a>Like</a> · <a>Reply</a> · 2 hrs\n                  </small>\n                </p>\n              </Content>\n              <Media>\n                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu\n                lorem cursus ullamcorper sit amet nec massa.\n              </Media>\n              <Media>\n                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.\n                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,\n                tincidunt iaculis diam non, porta aliquet tortor.\n              </Media>\n            </MediaContent>\n          </Media>\n          <Media>\n            <MediaLeft as={'figure'}>\n              <Image\n                size={48}\n                as={'p'}\n                src={'./official-assets/96x96.png'}\n                alt={''}\n              />\n            </MediaLeft>\n            <MediaContent>\n              <Content>\n                <p>\n                  <strong>Kayli Eunice </strong> <br /> Sed convallis\n                  scelerisque mauris, non pulvinar nunc mattis vel. Maecenas\n                  varius felis sit amet magna vestibulum euismod malesuada\n                  cursus libero. Vestibulum ante ipsum primis in faucibus orci\n                  luctus et ultrices posuere cubilia Curae; Phasellus lacinia\n                  non nisl id feugiat. <br />{' '}\n                  <small>\n                    <a>Like</a> · <a>Reply</a> · 2 hrs\n                  </small>\n                </p>\n              </Content>\n            </MediaContent>\n          </Media>\n        </MediaContent>\n      </Media>\n      <Media>\n        <MediaLeft as={'figure'}>\n          <Image\n            size={64}\n            as={'p'}\n            src={'./official-assets/128x128.png'}\n            alt={''}\n          />\n        </MediaLeft>\n        <MediaContent>\n          <Field>\n            <Control as={'p'}>\n              <Textarea placeholder={'Add a comment...'} defaultValue={''} />\n            </Control>\n          </Field>\n          <Field>\n            <Control as={'p'}>\n              <Button>Post comment</Button>\n            </Control>\n          </Field>\n        </MediaContent>\n      </Media>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: NestedMediaObjectsDemo,
} satisfies StoryObj

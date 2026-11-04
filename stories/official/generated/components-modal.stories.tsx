import type { Meta, StoryObj } from '@storybook/react-vite'
import { Canvas } from '@storybook/addon-docs/blocks'
import { OfficialDocument } from '../document'
import {
  Box,
  Buttons,
  Content,
  Icon,
  Image,
  Level,
  LevelItem,
  LevelLeft,
  Media,
  MediaContent,
  MediaLeft,
  Modal,
  ModalCard,
  ModalCardBody,
  ModalCardFoot,
  ModalCardHead,
  ModalClose,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from '../../../src'
import { officialPage } from '../support'

const meta = {
  ...officialPage(
    {
      id: 'components-modal',
      title: 'Modal',
      url: 'https://bulma.io/documentation/components/modal/',
    },
    OfficialDocs,
  ),
  tags: ['autodocs'],
  id: 'official-components-modal',
  title: 'CSS Library/Components/Modal',
} satisfies Meta
export default meta

function OfficialDocs() {
  return (
    <OfficialDocument pageId="components-modal" controllers={[]}>
      <div data-official-prose="" className={'bd-hero-body'}>
        <h1 data-official-prose="" className={'bd-hero-title algolia-lvl0'}>
          {'Modal'}
        </h1>
        <hr data-official-prose="" className={'bd-hr'} />
        <h2 data-official-prose="" className={'bd-hero-subtitle algolia-lvl1'}>
          {'A classic '}
          <strong data-official-prose="">{'modal'}</strong>
          {' overlay, in which you can include '}
          <em data-official-prose="">{'any'}</em>
          {' content you want'}
        </h2>
      </div>
      <div data-official-prose="" className={'bd-docs-content'}>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {'Use '}
            <code data-official-prose="">{'Modal'}</code>
            {' with '}
            <code data-official-prose="">{'ModalTrigger'}</code>
            {' and '}
            <code data-official-prose="">{'ModalContent'}</code>
            {
              '. The components handle opening, closing, keyboard interaction, and focus. Use '
            }
            <code data-official-prose="">{'ModalClose'}</code>
            {' for a close button.'}
          </p>
          <div data-official-example="components-modal/basic/001">
            <Canvas of={ContentModalStory} />
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'image-modal'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Image modal '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#image-modal'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' Because a modal can contain '}
            <strong data-official-prose="">{'anything you want'}</strong>
            {
              ', you can very simply use it to build an image gallery for example: '
            }
          </p>
          <div data-official-example="components-modal/image-modal/001">
            <Canvas of={ImageModalStory} />
          </div>
        </div>
        <h3
          data-official-prose=""
          id={'modal-card'}
          className={'title is-4 is-spaced bd-anchor-title '}
        >
          <span data-official-prose="" className={'bd-anchor-name'}>
            {' Modal card '}
          </span>{' '}
          <a
            data-official-prose=""
            className={'bd-anchor-link'}
            href={'#modal-card'}
          >
            {' # '}
          </a>
        </h3>
        <div data-official-prose="" className={'content'}>
          <p data-official-prose="">
            {' If you want a more classic modal, with a '}
            <strong data-official-prose="">{'head'}</strong>
            {', a '}
            <strong data-official-prose="">{'body'}</strong>
            {' and a '}
            <strong data-official-prose="">{'foot'}</strong>
            {', use the '}
            <code data-official-prose="">{'modal-card'}</code>
            {'. '}
          </p>
          <div data-official-example="components-modal/modal-card/001">
            <Canvas of={ModalCardStory} />
          </div>
        </div>
      </div>
    </OfficialDocument>
  )
}

function ContentModalDemo() {
  return (
    <>
      <Modal defaultOpen={false}>
        <ModalTrigger
          data-target={'modal'}
          aria-haspopup={'true'}
          className={'rb-is-primary rb-is-large'}
        >
          Launch example modal
        </ModalTrigger>
        <ModalContent
          wrapperProps={{ id: 'modal' }}
          close={
            <>
              <ModalClose aria-label={'close'} className={'rb-is-large'} />
            </>
          }
        >
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
        </ModalContent>
      </Modal>
    </>
  )
}

function ImageModalDemo() {
  return (
    <>
      <Modal defaultOpen={false}>
        <ModalTrigger
          data-target={'modal-bis'}
          className={'rb-is-primary rb-is-large'}
          as={'a'}
        >
          Launch image modal
        </ModalTrigger>
        <ModalContent
          wrapperProps={{ id: 'modal-bis' }}
          close={
            <>
              <ModalClose aria-label={'close'} className={'rb-is-large'} />
            </>
          }
        >
          <Image
            ratio={'4by3'}
            as={'p'}
            src={'./official-assets/1280x960.png'}
            alt={''}
          />
        </ModalContent>
      </Modal>
    </>
  )
}

function ModalCardDemo() {
  return (
    <>
      <Modal defaultOpen={false}>
        <ModalTrigger
          data-target={'modal-ter'}
          aria-haspopup={'true'}
          className={'rb-is-primary rb-is-large'}
        >
          Launch card modal
        </ModalTrigger>
        <ModalCard wrapperProps={{ id: 'modal-ter' }}>
          <ModalCardHead>
            <ModalTitle as={'p'}>Modal title</ModalTitle>
            <ModalClose aria-label={'close'} variant={'delete'} />
          </ModalCardHead>
          <ModalCardBody>
            <Content>
              <h1>Hello World</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida, nulla nunc varius
                lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper
                dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis
                neque.
              </p>
              <h2>Second level</h2>
              <p>
                Curabitur accumsan turpis pharetra{' '}
                <strong>augue tincidunt</strong> blandit. Quisque condimentum
                maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna
                vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
                rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
                neque nisl.
              </p>
              <ul>
                <li>
                  In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                </li>
                <li>
                  Morbi eu nulla lobortis, lobortis est in, fringilla felis.
                </li>
                <li>
                  Aliquam nec felis in sapien venenatis viverra fermentum nec
                  lectus.
                </li>
                <li>Ut non enim metus.</li>
              </ul>
              <h3>Third level</h3>
              <p>
                Quisque ante lacus, malesuada ac auctor vitae, congue{' '}
                <a href={'#'}>non ante</a>. Phasellus lacus ex, semper ac tortor
                nec, fringilla condimentum orci. Fusce eu rutrum tellus.
              </p>
              <ol>
                <li>Donec blandit a lorem id convallis.</li>
                <li>Cras gravida arcu at diam gravida gravida.</li>
                <li>Integer in volutpat libero.</li>
                <li>Donec a diam tellus.</li>
                <li>Aenean nec tortor orci.</li>
                <li>
                  Quisque aliquam cursus urna, non bibendum massa viverra eget.
                </li>
                <li>Vivamus maximus ultricies pulvinar.</li>
              </ol>
              <blockquote>
                Ut venenatis, nisl scelerisque sollicitudin fermentum, quam
                libero hendrerit ipsum, ut blandit est tellus sit amet turpis.
              </blockquote>
              <p>
                Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et{' '}
                <em>justo sodales</em> elementum. Maecenas ultrices lacus quis
                neque consectetur, et lobortis nisi molestie.
              </p>
              <p>
                Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi.
                Donec mattis vulputate risus in luctus. Maecenas vestibulum
                interdum commodo.
              </p>
              <p>
                Suspendisse egestas sapien non felis placerat elementum. Morbi
                tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
                Nulla facilisi. Nullam ac erat ante.
              </p>
              <h4>Fourth level</h4>
              <p>
                Nulla efficitur eleifend nisi, sit amet bibendum sapien
                fringilla ac. Mauris euismod metus a tellus laoreet, at
                elementum ex efficitur.
              </p>
              <p>
                Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue
                cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est
                maximus est porta condimentum in eu justo. Nulla id iaculis
                sapien.
              </p>
              <p>
                Phasellus porttitor enim id metus volutpat ultricies. Ut nisi
                nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
                lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula
                sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,
                mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac
                posuere est. Nunc ultricies nunc neque, vitae ultricies ex
                sodales quis. Aliquam eu nibh in libero accumsan pulvinar.
                Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
                Proin tempor cursus nisl vel condimentum. Nam pharetra varius
                metus non pellentesque.
              </p>
              <h5>Fifth level</h5>
              <p>
                Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed
                tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet
                ligula mi, in luctus elit volutpat porta. Phasellus molestie
                diam vel nisi sodales, a eleifend augue laoreet. Sed nec
                eleifend justo. Nam et sollicitudin odio.
              </p>
              <h6>Sixth level</h6>
              <p>
                Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec
                pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
                Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus
                nunc, scelerisque quis enim vitae, malesuada ultrices turpis.
                Nunc vitae maximus purus, nec consectetur dui. Suspendisse
                euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed
                varius sapien odio vitae est. Etiam at cursus metus.
              </p>
            </Content>
          </ModalCardBody>
          <ModalCardFoot>
            <Buttons>
              <ModalClose className={'rb-is-success'} variant={'button'}>
                Save changes
              </ModalClose>
              <ModalClose variant={'button'}>Cancel</ModalClose>
            </Buttons>
          </ModalCardFoot>
        </ModalCard>
      </Modal>
    </>
  )
}

export const ContentModalStory = {
  name: 'Content modal',
  parameters: {
    official: { id: 'components-modal/basic/001' },
    docs: {
      source: {
        code: "import {\n  Box,\n  Content,\n  Icon,\n  Image,\n  Level,\n  LevelItem,\n  LevelLeft,\n  Media,\n  MediaContent,\n  MediaLeft,\n  Modal,\n  ModalClose,\n  ModalContent,\n  ModalTrigger,\n} from '@seagreenio/react-bulma'\n\nfunction ContentModalDemo() {\n  return (\n    <>\n      <Modal defaultOpen={false}>\n        <ModalTrigger\n          data-target={'modal'}\n          aria-haspopup={'true'}\n          className={'rb-is-primary rb-is-large'}\n        >\n          Launch example modal\n        </ModalTrigger>\n        <ModalContent\n          wrapperProps={{ id: 'modal' }}\n          close={\n            <>\n              <ModalClose aria-label={'close'} className={'rb-is-large'} />\n            </>\n          }\n        >\n          <Box>\n            <Media>\n              <MediaLeft>\n                <Image\n                  size={64}\n                  src={'./official-assets/128x128.png'}\n                  alt={'Image'}\n                />\n              </MediaLeft>\n              <MediaContent>\n                <Content>\n                  <p>\n                    <strong>John Smith</strong> <small>@johnsmith</small>{' '}\n                    <small>31m</small> <br /> Lorem ipsum dolor sit amet,\n                    consectetur adipiscing elit. Aenean efficitur sit amet massa\n                    fringilla egestas. Nullam condimentum luctus turpis.\n                  </p>\n                </Content>\n                <Level mobile>\n                  <LevelLeft>\n                    <LevelItem aria-label={'retweet'} as={'a'}>\n                      <Icon size={'small'}>\n                        <i aria-hidden={'true'} className={'fas fa-retweet'} />\n                      </Icon>\n                    </LevelItem>\n                    <LevelItem aria-label={'like'} as={'a'}>\n                      <Icon size={'small'}>\n                        <i aria-hidden={'true'} className={'fas fa-heart'} />\n                      </Icon>\n                    </LevelItem>\n                  </LevelLeft>\n                </Level>\n              </MediaContent>\n            </Media>\n          </Box>\n        </ModalContent>\n      </Modal>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ContentModalDemo,
} satisfies StoryObj

export const ImageModalStory = {
  name: 'Image modal',
  parameters: {
    official: { id: 'components-modal/image-modal/001' },
    docs: {
      source: {
        code: "import {\n  Image,\n  Modal,\n  ModalClose,\n  ModalContent,\n  ModalTrigger,\n} from '@seagreenio/react-bulma'\n\nfunction ImageModalDemo() {\n  return (\n    <>\n      <Modal defaultOpen={false}>\n        <ModalTrigger\n          data-target={'modal-bis'}\n          className={'rb-is-primary rb-is-large'}\n          as={'a'}\n        >\n          Launch image modal\n        </ModalTrigger>\n        <ModalContent\n          wrapperProps={{ id: 'modal-bis' }}\n          close={\n            <>\n              <ModalClose aria-label={'close'} className={'rb-is-large'} />\n            </>\n          }\n        >\n          <Image\n            ratio={'4by3'}\n            as={'p'}\n            src={'./official-assets/1280x960.png'}\n            alt={''}\n          />\n        </ModalContent>\n      </Modal>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ImageModalDemo,
} satisfies StoryObj

export const ModalCardStory = {
  name: 'Modal card',
  parameters: {
    official: { id: 'components-modal/modal-card/001' },
    docs: {
      source: {
        code: "import {\n  Buttons,\n  Content,\n  Modal,\n  ModalCard,\n  ModalCardBody,\n  ModalCardFoot,\n  ModalCardHead,\n  ModalClose,\n  ModalTitle,\n  ModalTrigger,\n} from '@seagreenio/react-bulma'\n\nfunction ModalCardDemo() {\n  return (\n    <>\n      <Modal defaultOpen={false}>\n        <ModalTrigger\n          data-target={'modal-ter'}\n          aria-haspopup={'true'}\n          className={'rb-is-primary rb-is-large'}\n        >\n          Launch card modal\n        </ModalTrigger>\n        <ModalCard wrapperProps={{ id: 'modal-ter' }}>\n          <ModalCardHead>\n            <ModalTitle as={'p'}>Modal title</ModalTitle>\n            <ModalClose aria-label={'close'} variant={'delete'} />\n          </ModalCardHead>\n          <ModalCardBody>\n            <Content>\n              <h1>Hello World</h1>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n                accumsan, metus ultrices eleifend gravida, nulla nunc varius\n                lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper\n                dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis\n                neque.\n              </p>\n              <h2>Second level</h2>\n              <p>\n                Curabitur accumsan turpis pharetra{' '}\n                <strong>augue tincidunt</strong> blandit. Quisque condimentum\n                maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna\n                vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\n                rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et\n                neque nisl.\n              </p>\n              <ul>\n                <li>\n                  In fermentum leo eu lectus mollis, quis dictum mi aliquet.\n                </li>\n                <li>\n                  Morbi eu nulla lobortis, lobortis est in, fringilla felis.\n                </li>\n                <li>\n                  Aliquam nec felis in sapien venenatis viverra fermentum nec\n                  lectus.\n                </li>\n                <li>Ut non enim metus.</li>\n              </ul>\n              <h3>Third level</h3>\n              <p>\n                Quisque ante lacus, malesuada ac auctor vitae, congue{' '}\n                <a href={'#'}>non ante</a>. Phasellus lacus ex, semper ac tortor\n                nec, fringilla condimentum orci. Fusce eu rutrum tellus.\n              </p>\n              <ol>\n                <li>Donec blandit a lorem id convallis.</li>\n                <li>Cras gravida arcu at diam gravida gravida.</li>\n                <li>Integer in volutpat libero.</li>\n                <li>Donec a diam tellus.</li>\n                <li>Aenean nec tortor orci.</li>\n                <li>\n                  Quisque aliquam cursus urna, non bibendum massa viverra eget.\n                </li>\n                <li>Vivamus maximus ultricies pulvinar.</li>\n              </ol>\n              <blockquote>\n                Ut venenatis, nisl scelerisque sollicitudin fermentum, quam\n                libero hendrerit ipsum, ut blandit est tellus sit amet turpis.\n              </blockquote>\n              <p>\n                Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et{' '}\n                <em>justo sodales</em> elementum. Maecenas ultrices lacus quis\n                neque consectetur, et lobortis nisi molestie.\n              </p>\n              <p>\n                Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi.\n                Donec mattis vulputate risus in luctus. Maecenas vestibulum\n                interdum commodo.\n              </p>\n              <p>\n                Suspendisse egestas sapien non felis placerat elementum. Morbi\n                tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.\n                Nulla facilisi. Nullam ac erat ante.\n              </p>\n              <h4>Fourth level</h4>\n              <p>\n                Nulla efficitur eleifend nisi, sit amet bibendum sapien\n                fringilla ac. Mauris euismod metus a tellus laoreet, at\n                elementum ex efficitur.\n              </p>\n              <p>\n                Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue\n                cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est\n                maximus est porta condimentum in eu justo. Nulla id iaculis\n                sapien.\n              </p>\n              <p>\n                Phasellus porttitor enim id metus volutpat ultricies. Ut nisi\n                nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis\n                lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula\n                sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,\n                mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac\n                posuere est. Nunc ultricies nunc neque, vitae ultricies ex\n                sodales quis. Aliquam eu nibh in libero accumsan pulvinar.\n                Nullam nec nisl placerat, pretium metus vel, euismod ipsum.\n                Proin tempor cursus nisl vel condimentum. Nam pharetra varius\n                metus non pellentesque.\n              </p>\n              <h5>Fifth level</h5>\n              <p>\n                Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed\n                tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet\n                ligula mi, in luctus elit volutpat porta. Phasellus molestie\n                diam vel nisi sodales, a eleifend augue laoreet. Sed nec\n                eleifend justo. Nam et sollicitudin odio.\n              </p>\n              <h6>Sixth level</h6>\n              <p>\n                Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec\n                pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.\n                Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus\n                nunc, scelerisque quis enim vitae, malesuada ultrices turpis.\n                Nunc vitae maximus purus, nec consectetur dui. Suspendisse\n                euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed\n                varius sapien odio vitae est. Etiam at cursus metus.\n              </p>\n            </Content>\n          </ModalCardBody>\n          <ModalCardFoot>\n            <Buttons>\n              <ModalClose className={'rb-is-success'} variant={'button'}>\n                Save changes\n              </ModalClose>\n              <ModalClose variant={'button'}>Cancel</ModalClose>\n            </Buttons>\n          </ModalCardFoot>\n        </ModalCard>\n      </Modal>\n    </>\n  )\n}\n",
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: ModalCardDemo,
} satisfies StoryObj

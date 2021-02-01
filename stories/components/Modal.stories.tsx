import {
  Button,
  Card,
  CardContent,
  Content,
  Delete,
  Image,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardFoot,
  ModalCardHead,
  ModalCardTitle,
  ModalClose,
  ModalContent,
} from '../..'
import React, { useState } from 'react'

import text from '../utils/text'

export default {
  title: 'Components/Modal',
  component: Modal,
}

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" size="large" onClick={() => setOpen(true)}>
        Launch example modal
      </Button>
      <Modal active={open}>
        <ModalBackground />
        <ModalContent>
          <Card>
            <CardContent>
              <Content>{text}</Content>
            </CardContent>
          </Card>
        </ModalContent>
        <ModalClose size="large" onClick={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export const ImageModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" size="large" onClick={() => setOpen(true)}>
        Launch image modal
      </Button>
      <Modal active={open}>
        <ModalBackground />
        <ModalContent>
          <Image as="p" src="https://bulma.io/images/placeholders/1280x960.png" by="4by3" />
        </ModalContent>
        <ModalClose size="large" onClick={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export const CardModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" size="large" onClick={() => setOpen(true)}>
        Launch card modal
      </Button>
      <Modal active={open}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Modal title</ModalCardTitle>
            <Delete onClick={() => setOpen(false)} />
          </ModalCardHead>
          <ModalCardBody>{text}</ModalCardBody>
          <ModalCardFoot>
            <Button color="success">Save changes</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </ModalCardFoot>
        </ModalCard>
      </Modal>
    </>
  )
}

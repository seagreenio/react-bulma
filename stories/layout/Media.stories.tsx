import { Button, Checkbox, Content, Control, Delete, Field, Icon, Image, Level, Media, Textarea } from '../..'

import React from 'react'
import { text } from '../utils/common'

export default {
  title: 'Layout/Media',
  component: Media,
}
export const Default = () => (
  <>
    <Media as="article">
      <Media left>
        <Image size={64} src="https://bulma.io/images/placeholders/128x128.png" />
      </Media>
      <Media content>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            {text}
          </p>
        </Content>
        <Level as="nav" mobile>
          <Level left>
            <Level as="a" item>
              <Icon name="fas fa-reply" size="small" />
            </Level>
            <Level as="a" item>
              <Icon name="fas fa-retweet" size="small" />
            </Level>
            <Level as="a" item>
              <Icon name="fas fa-heart" size="small" />
            </Level>
          </Level>
        </Level>
      </Media>
      <Media right>
        <Delete />
      </Media>
    </Media>
    <Media as="article">
      <Media left>
        <Image size={64} src="https://bulma.io/images/placeholders/128x128.png" />
      </Media>
      <Media content>
        <Field>
          <Control>
            <Textarea placeholder="Add a comment..." />
          </Control>
        </Field>
        <Level as="nav" mobile>
          <Level left>
            <Button color="info">Submit</Button>
          </Level>
          <Level right>
            <Checkbox> Press enter to submit</Checkbox>
          </Level>
        </Level>
      </Media>
    </Media>
  </>
)

export const Nesting = () => (
  <>
    <Media as="article">
      <Media left>
        <Image size={64} src="https://bulma.io/images/placeholders/128x128.png" />
      </Media>
      <Media content>
        <Content>
          <p>
            <strong>Barbara Middleton</strong>
            <br />
            {text}
            <br />
            <small>
              <a>Like</a> · <a>Reply</a> · 3 hrs
            </small>
          </p>
          <Media as="article">
            <Media left>
              <Image size={48} src="https://bulma.io/images/placeholders/96x96.png" />
            </Media>
            <Media content>
              <Content>
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  {text}
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>
              <Media as="article">{text}</Media>
              <Media as="article">{text}</Media>
            </Media>
          </Media>
          <Media as="article">
            <Media left>
              <Image size={48} src="https://bulma.io/images/placeholders/96x96.png" />
            </Media>
            <Media content>
              <Content>
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  {text}
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>
            </Media>
          </Media>
        </Content>
      </Media>
    </Media>
    <Media as="article">
      <Media left>
        <Image size={64} src="https://bulma.io/images/placeholders/128x128.png" />
      </Media>
      <Media content>
        <Field>
          <Control>
            <Textarea placeholder="Add a comment..." />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button>Post comment</Button>
          </Control>
        </Field>
      </Media>
    </Media>
  </>
)

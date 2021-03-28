import { Content, ContentProps, Footer, withTypography } from '../..'

import React from 'react'

const TypographyContent = withTypography<ContentProps>(Content)

export default {
  title: 'Layout/Footer',
  component: Footer,
}

export const Default = () => (
  <Footer>
    <TypographyContent hasText="centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed{' '}
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </TypographyContent>
  </Footer>
)

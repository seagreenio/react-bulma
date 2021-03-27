import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: '#00c4a7',
    brandTitle: 'React ➕ Bulma',
    brandUrl: 'https://github.com/seagreenio/react-bulma',
  }),
})

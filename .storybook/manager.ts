import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `
      <span style="display:flex;align-items:center;gap:6px;white-space:nowrap">
        <img src="./brand/react.svg" width="24" height="24" alt="" />
        <img src="./brand/bulma.svg" width="24" height="24" alt="" />
        <span>React Bulma</span>
      </span>
    `,
    brandUrl: './?path=/docs/react-bulma--usage-guide',
    brandTarget: '_self',
  }),
})

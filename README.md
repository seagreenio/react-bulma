<p align="center">
  <img src="https://raw.githubusercontent.com/seagreenio/react-bulma/master/assets/react.svg" width="128" height="128" alt="React logo" />
  <img src="https://raw.githubusercontent.com/seagreenio/react-bulma/master/assets/bulma.svg" width="128" height="128" alt="Bulma logo" />
</p>

<h1 align="center">React Bulma</h1>

<p align="center">English | <a href="https://github.com/seagreenio/react-bulma/blob/master/README.zh-CN.md">简体中文</a></p>

<p align="center">A Bulma component library for modern React.</p>

React Bulma provides React components for Bulma 1.0.4. You need React 17.0.2 or later to use it.

You can use Bulma components in React, adjust their appearance with props, and switch between light and dark themes. Styles stay inside `BulmaRoot`, and you can choose your own CSS class prefix.

You can start with the [default styles](#use-the-default-styles), [build styles with a custom prefix](#build-styles-with-a-custom-prefix), or go straight to [interactive components](#compose-interactive-components). If you prefer to read alongside component examples, the [Storybook usage guide](https://github.com/seagreenio/react-bulma/blob/master/stories/Guide.mdx) covers the same setup.

## Install

Run the commands below from your app root, where its `package.json` is located.

You can install React Bulma with npm:

```sh
npm install @seagreenio/react-bulma
```

Or with Bun:

```sh
bun add @seagreenio/react-bulma
```

## Use the default styles

Import the stylesheet once in your app entry:

```ts
import '@seagreenio/react-bulma/styles.css'
```

Then place your components inside `BulmaRoot`. You do not need to import Bulma's global stylesheet:

```tsx
import { Button, BulmaRoot, Field, Input, Label } from '@seagreenio/react-bulma'

export function App() {
  return (
    <BulmaRoot>
      <Field>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" />
      </Field>
      <Button color="primary" helpers={{ mt: 4 }}>
        Save
      </Button>
    </BulmaRoot>
  )
}
```

By default, components use the `rb-` class prefix and a light theme. Set `theme="dark"` on `BulmaRoot` for a dark theme, or `theme="system"` to follow the browser's color preference. Nested roots can each have their own theme and prefix.

The stylesheet uses CSS `@scope` and container queries, so your target browsers must support both. Library styles stop at nested Bulma roots, though selectors and inherited styles from your application can still affect components.

## Customize component styles and attributes

You can set a button's color with `color` and round its corners with `rounded`. Use `helpers` for spacing, text styles, colors, display, visibility, and Flexbox layout. TypeScript suggests the available props and values. You can also add your own CSS classes with `className`:

```tsx
<Button
  color="primary"
  rounded
  helpers={{ mt: 0, px: 4 }}
  className="save-action"
>
  Save
</Button>
```

In this example, `mt: 0` generates `rb-mt-0`, which sets the top margin to zero. Setting `hidden: false` adds no hiding class. Your `className="save-action"` is added alongside the component classes exactly as written; it does not become `rb-save-action`.

For HTML elements such as `div` and `p`, call `helpers()` with the same style options and pass the returned class names to `className`. The function only generates class names; it does not change elements or insert CSS. Those names start with `rb-` by default. If you use `helpers` from a custom `BulmaUI`, they use your configured prefix:

```tsx
'use client'

import { BulmaRoot, helpers } from '@seagreenio/react-bulma'

export function Summary() {
  return (
    <BulmaRoot>
      <div
        className={helpers({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 4,
        })}
      >
        <p className={helpers({ m: 0, textWeight: 'semibold' })}>Draft saved</p>
        <span className={helpers({ textColor: 'success' })}>Up to date</span>
      </div>
    </BulmaRoot>
  )
}
```

Components accept native HTML attributes, events, and refs. Each also exports a props type, such as `ButtonProps`. For components with a wrapper, use this table to see which element receives each prop:

| Component       | Native attributes, className, style and ref | Helpers and wrapperProps                                                           |
| --------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- |
| Input, Textarea | Native input or textarea                    | Helpers style that control                                                         |
| Select          | Native select                               | Helpers and wrapperProps style the outer select wrapper                            |
| Checkbox, Radio | Native input                                | Children label the input; helpers and wrapperProps style the label                 |
| File            | Native file input                           | Children provide the upload label; helpers and wrapperProps style the file wrapper |
| Image           | Native img, with required alt               | Helpers and wrapperProps style the figure                                          |
| FixedGrid       | Outer fixed-grid div                        | gridProps configures the inner grid                                                |

Use `size` to change a component's appearance, such as `size="small"`. On Input and Select, use `htmlSize` for the native HTML `size` attribute. Select supports `multiple`. To display the selected filename in File, update its `filename` prop in `onChange`.

To submit a form, set `type="submit"` on Button; its default is `type="button"`. A loading button is disabled and has `aria-busy`. LinkButton renders a link that cannot navigate while loading or disabled. Disabled pagination and dropdown links cannot be activated either. Delete, TagDelete, and NavbarBurger are buttons with default accessible labels.

## Build styles with a custom prefix

To replace the default `rb-` prefix, give `createBulma` and `buildStyles` the same configuration. The setup below uses `bui-`. Choose either Bun or Node.js to generate the CSS:

```text
bulma.config.ts
scripts/
  styles.ts
  styles.mjs
src/
  bulma-ui.ts
  bulma.css
```

Create `bulma.config.ts` in your app root:

```ts
export const bulmaConfig = { prefix: 'bui-' } as const
```

Create `src/bulma-ui.ts`. Its `../bulma.config` import points to `bulma.config.ts` in your app root:

```ts
'use client'
import { createBulma } from '@seagreenio/react-bulma'
import { bulmaConfig } from '../bulma.config'

export const BulmaUI = createBulma(bulmaConfig)

const { BulmaRoot, Box, Button } = BulmaUI

export { BulmaRoot, Box, Button }
```

### Generate CSS with Bun

Create `scripts/styles.ts`. Its `../bulma.config` import also points to the root configuration:

```ts
import { buildStyles } from '@seagreenio/react-bulma/styles'
import { bulmaConfig } from '../bulma.config'

await Bun.write('src/bulma.css', await buildStyles(bulmaConfig))
```

Run this from your app root to generate `src/bulma.css`:

```sh
bun scripts/styles.ts
```

### Generate CSS with Node.js

If you use Node.js 22.18 or later, you can create `scripts/styles.mjs` instead:

```js
import { writeFile } from 'node:fs/promises'
import { buildStyles } from '@seagreenio/react-bulma/styles'
import { bulmaConfig } from '../bulma.config.ts'

await writeFile('src/bulma.css', await buildStyles(bulmaConfig), 'utf8')
```

Run this from your app root to generate the same `src/bulma.css`:

```sh
node scripts/styles.mjs
```

### Use the components in your app

Run the style script before building your app. Import the generated CSS in your app entry in place of the default stylesheet. For an entry inside `src/`:

```ts
import './bulma.css'
```

Use the components and helpers from `BulmaUI`:

```tsx
'use client'

import { BulmaUI } from './bulma-ui'

const { BulmaRoot, Button, helpers } = BulmaUI

export function App() {
  return (
    <BulmaRoot theme="dark">
      <p className={helpers({ mt: 4, textAlign: 'center', hidden: 'mobile' })}>
        Visible above the mobile breakpoint
      </p>
      <Button color="info">Save</Button>
    </BulmaRoot>
  )
}
```

Create `BulmaUI` outside your components so it is created once. Use its components and helpers with the matching CSS. Prefixes must start with a lowercase English letter and end with `-`. Between them, use lowercase letters and digits, with single hyphens between words, such as `bui-` or `my-bui-`. You can use different prefixes on the same page, including in nested roots.

## Use server-side rendering (SSR)

React Bulma supports server-side rendering with React 17.0.2 or later. You do not need additional build configuration.

## Use React Server Components

You can import components directly in a Next.js App Router page. This page does not need a `'use client'` directive:

```tsx
import { BulmaRoot, Box, Button } from '@seagreenio/react-bulma'

export default function Page() {
  return (
    <BulmaRoot>
      <Box>Content loaded on the server</Box>
      <Button color="primary" helpers={{ mt: 4 }}>
        Continue
      </Button>
    </BulmaRoot>
  )
}
```

In Next.js App Router, import the stylesheet in your root layout:

```tsx
import '@seagreenio/react-bulma/styles.css'
```

### Custom prefix

With a custom prefix, import components from the `bulma-ui` module you created earlier and load the generated CSS in your root layout.

Add `'use client'` at the top of files that call `createBulma()` or `helpers()`, or use event handlers or interactive state.

## Compose interactive components

Using `BulmaUI` from the [custom-prefix setup](#build-styles-with-a-custom-prefix), you can compose a settings dialog:

```tsx
'use client'

import { BulmaUI } from './bulma-ui'

const {
  BulmaRoot,
  Modal,
  ModalTrigger,
  ModalCard,
  ModalCardHead,
  ModalTitle,
  ModalClose,
  ModalCardBody,
  ModalDescription,
  ModalCardFoot,
} = BulmaUI

export function Settings() {
  return (
    <BulmaRoot>
      <Modal>
        <ModalTrigger>Open settings</ModalTrigger>
        <ModalCard>
          <ModalCardHead>
            <ModalTitle>Settings</ModalTitle>
            <ModalClose variant="delete" />
          </ModalCardHead>
          <ModalCardBody>
            <ModalDescription>Update your preferences.</ModalDescription>
          </ModalCardBody>
          <ModalCardFoot>
            <ModalClose variant="button">Done</ModalClose>
          </ModalCardFoot>
        </ModalCard>
      </Modal>
    </BulmaRoot>
  )
}
```

Use `open` and `onOpenChange` to control whether Modal is open, or `defaultOpen` to set its initial state. `closeOnEscape` and `closeOnOutsideClick` control whether Escape and clicks outside the dialog close it. Give each dialog a `ModalTitle` or an `aria-label`. Dialogs use the theme of their `BulmaRoot`. If you choose a custom mount container, keep it inside a `BulmaRoot` with the same prefix.

Use Dropdown with both DropdownMenu and DropdownContent. The menu stays inside its dropdown root. You can navigate items with the keyboard, or set `as="a"` to make an item a link. Disabled items can receive keyboard focus but cannot be selected.

You build Tabs with TabsList, Tab and TabPanel, giving each Tab and its panel the same string or number `value`. By default, users navigate with the arrow keys and activate a tab with Enter or Space. If you want automatic activation, set `activateOnFocus` on TabsList. Disabled tabs can receive keyboard focus and cannot activate.

Use NavbarBrand, NavbarBurger, NavbarMenu, NavbarStart, and NavbarEnd to build a Navbar. Control the mobile menu with `expanded` and `onExpandedChange`, or set its initial state with `defaultExpanded`. Escape closes the menu and returns focus to the menu button. Use `trigger` on NavbarDropdown to set the text or content that opens its dropdown.

## Choose a layout

Columns provides a 12-column layout that adapts to screen width. SmartGrid automatically fits cells using `minColumnWidth`, with gaps set in CSS length units. FixedGrid lets you choose column counts for different container widths.

Using `BulmaUI` from the [custom-prefix setup](#build-styles-with-a-custom-prefix), this grid shows one, two, or three columns as its container gets wider:

```tsx
'use client'

import { BulmaUI } from './bulma-ui'

const { BulmaRoot, FixedGrid, Cell, Box } = BulmaUI

export function Layout() {
  return (
    <BulmaRoot>
      <FixedGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
        <Cell>
          <Box>One</Box>
        </Cell>
        <Cell>
          <Box>Two</Box>
        </Cell>
        <Cell>
          <Box>Three</Box>
        </Cell>
      </FixedGrid>
    </BulmaRoot>
  )
}
```

Column supports preset widths and offsets, including fractions, with different values at different screen widths. On Cell, you can set the starting position and the number of rows or columns it spans.

Bulma 1.0.4 limits `offset="one-third"` to `0.3333%`. Cell's `columnEnd` and `rowEnd` do not change grid placement.

For headings, you can choose the HTML heading level with `level` and set the visual size separately with numeric `size`.

## Development

Run this section's commands from the React Bulma repository root, not your application directory. Use Bun 1.4.4 and Node.js 24, version 24.11 or later.

Install the repository dependencies first:

```sh
bun install --frozen-lockfile
```

Then choose the command you need:

| Command                   | Purpose                                                           |
| ------------------------- | ----------------------------------------------------------------- |
| `bun run storybook`       | Start Storybook, then open http://localhost:6006 in your browser. |
| `bun run build`           | Build the library into `dist/`.                                   |
| `bun run typecheck`       | Check the source and public types.                                |
| `bun run test`            | Run component unit tests.                                         |
| `bun run test:browser`    | Run browser tests with the installed Google Chrome.               |
| `bun run build-storybook` | Build static Storybook into `storybook-static/`.                  |
| `bun run format`          | Format repository files.                                          |

To publish, run this from the same repository root:

```sh
npm publish
```

The `prepack` hook builds the library before packing or publishing.

## Generate the official examples

Run this from the React Bulma repository root:

```sh
bun run official:generate
```

Generated React stories go into `stories/official/generated/`. Documentation CSS, images, and fonts go into the ignored `.generated/official-assets/` directory. The `storybook` and `build-storybook` commands run this step automatically.

`official/source-lock.json` pins the Bulma source revision. The first run downloads it into the shared cache at `~/.cache/react-bulma/bulma/<revision>/`, outside this repository. Later runs reuse that cache. Upstream documentation source is not stored in this repository.

You can find attribution and upstream licenses in [official/ATTRIBUTION.md](https://github.com/seagreenio/react-bulma/blob/master/official/ATTRIBUTION.md).

## License

React Bulma is released under the MIT license, copyright seagreenio. The full terms are in [LICENSE](https://github.com/seagreenio/react-bulma/blob/master/LICENSE).

Thanks to [Jeremy Thomas](https://github.com/jgthms) for [Bulma](https://bulma.io), the CSS framework behind these components.

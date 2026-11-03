<p align="center">
  <img src="https://raw.githubusercontent.com/seagreenio/react-bulma/master/assets/react.svg" width="128" height="128" alt="React logo" />
  <img src="https://raw.githubusercontent.com/seagreenio/react-bulma/master/assets/bulma.svg" width="128" height="128" alt="Bulma logo" />
</p>

<h1 align="center">React Bulma</h1>

<p align="center">English | <a href="https://github.com/seagreenio/react-bulma/blob/master/README.zh-CN.md">简体中文</a></p>

<p align="center">Another &amp; Another React Bulma component library, with TypeScript support.</p>

React Bulma provides React components for Bulma 1.0.4. You need React 17.0.2 or later to use it.

You can use component props to apply Bulma modifiers and typed helpers to share styles across your UI. `BulmaRoot` scopes those styles to your React UI and gives each root its own theme, with an optional custom prefix.

You can start with the [default styles](#use-the-default-styles), [build styles with a custom prefix](#build-styles-with-a-custom-prefix), or go straight to [interactive components](#compose-interactive-components). If you prefer to read alongside component examples, the [Storybook usage guide](https://github.com/seagreenio/react-bulma/blob/master/stories/Guide.mdx) covers the same setup.

## Install

You can install the release candidate with npm:

```sh
npm install @seagreenio/react-bulma@1.0.0-rc.0
```

If you use Bun, the equivalent command is:

```sh
bun add @seagreenio/react-bulma@1.0.0-rc.0
```

## Use the default styles

You need to import the stylesheet once and place React Bulma components inside `BulmaRoot`. The example below uses the default styles. Do not also import global Bulma CSS:

```tsx
import { Button, BulmaRoot, Field, Input, Label } from '@seagreenio/react-bulma'
import '@seagreenio/react-bulma/styles.css'

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

`BulmaRoot` provides scoped CSS variables, typography and form normalization. It uses the `rb-` prefix and a light theme by default. You can set `theme="dark"` for a local dark theme or `theme="system"` to follow the browser color scheme. If you nest roots, each keeps its own theme and prefix.

The stylesheet uses CSS `@scope` and container queries, so your target browsers must support both. Library styles stop at nested Bulma roots, though selectors and inherited styles from your application can still affect components.

If your framework uses React Server Components, the library's runtime entry is marked for client use. Any module that calls `createBulma` must also sit within a `use client` boundary. The separate `buildStyles` entry runs in your Node or Bun build scripts.

## Set helpers and native properties

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

Each component exposes its Bulma modifiers as typed properties. For spacing, text, colors, display, visibility and flex options shared across components, you use `helpers`. The pure `helpers(values)` export gives you prefixed class names for native elements too. It retains `0` values and emits no class for false visibility flags. Components append your `className` values unchanged.

You can use those same helpers on native markup inside a root:

```tsx
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

Every component exports a corresponding props type. When a component renders a single element, it forwards your native attributes, events and refs to that element. For compound controls, the target depends on the component:

| Component       | Native attributes, className, style and ref | Helpers and wrapperProps                                                           |
| --------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- |
| Input, Textarea | Native input or textarea                    | Helpers style that control                                                         |
| Select          | Native select                               | Helpers and wrapperProps style the outer select wrapper                            |
| Checkbox, Radio | Native input                                | Children label the input; helpers and wrapperProps style the label                 |
| File            | Native file input                           | Children provide the upload label; helpers and wrapperProps style the file wrapper |
| Image           | Native img, with required alt               | Helpers and wrapperProps style the figure                                          |
| FixedGrid       | Outer fixed-grid div                        | gridProps configures the inner grid                                                |

The `size` prop controls visual size using Bulma sizes. If you need the numeric native size on Input or Select, use `htmlSize`. Select also supports native multiple selection. File keeps its native file input and accepts a `filename` that you control. You can update that value in `onChange` when needed.

Button defaults to `type="button"`, so it does not submit a form unless you ask it to. A loading button is disabled and announces `aria-busy`. LinkButton renders an anchor, but its loading or disabled state removes navigation and blocks activation. Disabled pagination and dropdown links also block activation. Delete, TagDelete and NavbarBurger render native buttons with accessible default labels.

## Build styles with a custom prefix

If you need a custom prefix, your runtime code and style build must share one configuration:

```ts
// bulma.config.ts
export const bulmaConfig = { prefix: 'acme-' } as const
```

```ts
// src/ui.ts
'use client'
import { createBulma } from '@seagreenio/react-bulma'
import { bulmaConfig } from '../bulma.config'

export const ui = createBulma(bulmaConfig)
```

With Bun, you can build the stylesheet from `scripts/styles.ts`:

```ts
import { buildStyles } from '@seagreenio/react-bulma/styles'
import { bulmaConfig } from '../bulma.config'

await Bun.write('src/bulma.css', await buildStyles(bulmaConfig))
```

You can run this script with `bun scripts/styles.ts` in your app directory.

If you use Node.js 22.18 or later, put the build in `scripts/styles.mjs` instead. That version of Node can load your shared TypeScript configuration through its [native TypeScript support](https://nodejs.org/api/typescript.html#type-stripping):

```js
import { writeFile } from 'node:fs/promises'
import { buildStyles } from '@seagreenio/react-bulma/styles'
import { bulmaConfig } from '../bulma.config.ts'

await writeFile('src/bulma.css', await buildStyles(bulmaConfig), 'utf8')
```

The Node command is `node scripts/styles.mjs`, run from your app directory. Whichever script you choose, it must run before each app build. Your application then imports the generated CSS and uses the bound components and helpers from the same module:

```tsx
import { ui } from './ui'
import './bulma.css'

;<ui.BulmaRoot theme="dark">
  <p className={ui.helpers({ mt: 4, textAlign: 'center', hidden: 'mobile' })}>
    Visible above the mobile breakpoint
  </p>
  <ui.Button color="info">Save</ui.Button>
</ui.BulmaRoot>
```

A custom setup needs one call to `createBulma` at module scope. The prefix is part of your build configuration. It must start with a lowercase ASCII letter, contain lowercase letters or digits separated by single hyphens, and end in a hyphen. Your root, components, helpers and generated CSS must all use that same prefix. You can use separate prefixes together, including in nested roots. CSS variables still inherit, and each instance reads its own variable names.

`buildStyles` belongs only in your Node or Bun build scripts. Its entry depends on Sass, Bulma and PostCSS, while the runtime entry imports none of those tools. Each instance needs either the default CSS or its matching custom CSS. Do not load global Bulma CSS alongside it.

## Compose interactive components

Modal uses Base UI dialog behavior to trap and restore focus, isolate the background, lock scrolling and handle dismissal. Inside each Modal, you choose either ModalCard or ModalContent for the popup:

```tsx
<ui.Modal>
  <ui.ModalTrigger>Open settings</ui.ModalTrigger>
  <ui.ModalCard>
    <ui.ModalCardHead>
      <ui.ModalTitle>Settings</ui.ModalTitle>
      <ui.ModalClose variant="delete" />
    </ui.ModalCardHead>
    <ui.ModalCardBody>
      <ui.ModalDescription>Update your preferences.</ui.ModalDescription>
    </ui.ModalCardBody>
    <ui.ModalCardFoot>
      <ui.ModalClose variant="button">Done</ui.ModalClose>
    </ui.ModalCardFoot>
  </ui.ModalCard>
</ui.Modal>
```

You can control Modal with `open` and `onOpenChange`, or give it an initial state with `defaultOpen`. It also accepts `closeOnEscape` and `closeOnOutsideClick`. Each popup needs a ModalTitle or an accessible label. The portal uses the closest matching BulmaRoot, so it keeps access to live local theme overrides. If you supply a portal container, that container must stay inside a matching BulmaRoot scope to retain the styles and theme variables.

When you compose a Dropdown, you need both DropdownMenu and DropdownContent. The menu portal stays inside its own dropdown root. Items support keyboard navigation and selection, and you can use `as="a"` for anchor semantics. Disabled items remain keyboard-focusable and cannot activate.

You build Tabs with TabsList, Tab and TabPanel, giving each Tab and its panel the same string or number `value`. By default, users navigate with the arrow keys and activate a tab with Enter or Space. If you want automatic activation, set `activateOnFocus` on TabsList. Disabled tabs can receive keyboard focus and cannot activate.

Navbar manages mobile disclosure state. You compose it with NavbarBrand, NavbarBurger, NavbarMenu, NavbarStart and NavbarEnd. You can control that state with `expanded` and `onExpandedChange`, or use `defaultExpanded` for an uncontrolled Navbar. Escape closes the mobile menu and returns focus to its burger. NavbarDropdown uses native details/summary and accepts a `trigger` node.

## Choose a layout

You can choose a layout based on how it responds to the available space. Columns divides rows into twelve units and follows viewport breakpoints. SmartGrid fits cells using `minColumnWidth` and CSS-length gaps. FixedGrid sets the column count from its container width, so a narrow sidebar can use fewer columns than a full-width area in the same window.

```tsx
<ui.FixedGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
  <ui.Cell>
    <ui.Box>One</ui.Box>
  </ui.Cell>
  <ui.Cell>
    <ui.Box>Two</ui.Box>
  </ui.Cell>
  <ui.Cell>
    <ui.Box>Three</ui.Box>
  </ui.Cell>
</ui.FixedGrid>
```

Column supports predefined widths and offsets, including fractions, along with responsive configurations. Cell maps its start, end, and span props to Bulma modifiers.

Layout rules follow Bulma 1.0.4 unchanged, including its current quirks. In this version, `offset="one-third"` produces `0.3333%`, and Cell end modifiers set variables that do not affect placement.

For headings, you can choose the HTML heading level with `level` and set the visual size separately with numeric `size`. Tile is deprecated in Bulma 1.x, so use Grid.

## Development

When you contribute, keep component appearance aligned with Bulma and add CSS only to bridge React DOM or interaction differences. Tests should cover the library's public behavior rather than repeat Bulma's rules.

Development uses Bun 1.4.4 and a Node version supported by tsdown. Dependency installs use Bun's normal shared download cache. You can install dependencies and run the development commands below:

```sh
bun install --frozen-lockfile
bun run storybook
bun run build
bun run typecheck
bun run test
bun run test:browser
bun run build-storybook
```

In Storybook, you can browse Bulma examples rendered with React components. Storybook imports source modules and locally generated CSS.

The `test` command covers component rendering, styles and behavior. For native submissions and refs, keyboard behavior, themes and responsive layouts, `test:browser` uses the installed Google Chrome.

You can format the project with `bun run format`.

The `prepack` hook builds the package before packing or publishing. When you publish a release candidate, use an explicit `rc` tag:

```sh
npm publish --tag rc
```

## Generate the official examples

Storybook generates React examples from the Bulma repository commit pinned in `official/source-lock.json`. It keeps the upstream documentation and resources in a shared cache outside this Git repository, under `~/.cache/react-bulma/bulma/<revision>/`. If you need another source directory, you can set `REACT_BULMA_SOURCE_ROOT`, with its resource directory alongside it.

```sh
bun run official:generate
bun run storybook
```

`official:generate` reuses the pinned source cache and downloads the commit's source archive from GitHub only if that revision is missing. The generator reads the local Liquid templates, front matter, data and Sass. It renders HTML in memory as an intermediate step, then emits React components and copyable React source. The output preserves document headings, prose, code and variable tables. The generator does not read pages from bulma.io. Both Storybook commands run generation automatically.

You can browse Elements, Components, Form, Columns, Grid, Layout and Skeletons in the component documentation. The separate Grid playground falls outside that scope, as recorded in `official/source-metadata.json`. Navigation follows the upstream menu template, using page labels and data from `links.json`. In the Storybook sidebar, the React Bulma usage guide comes first, followed by CSS Library and Features. Each official group keeps its upstream page order, and each page records its source file and revision.

The repository tracks only generated React stories and compact source metadata. Generation recreates the compiled documentation CSS, local images and icon fonts under the ignored `.generated/official-assets/` directory.

You can find attribution and upstream licenses in [official/ATTRIBUTION.md](https://github.com/seagreenio/react-bulma/blob/master/official/ATTRIBUTION.md).

## License

React Bulma is released under the MIT license, copyright seagreenio. The full terms are in [LICENSE](https://github.com/seagreenio/react-bulma/blob/master/LICENSE).

Thanks to [Jeremy Thomas](https://github.com/jgthms) for [Bulma](https://bulma.io), the CSS framework behind these components.

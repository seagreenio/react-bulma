<p align="center">
  <img src="https://raw.githubusercontent.com/seagreenio/react-bulma/master/assets/react.svg" width="128" height="128" alt="React 标志" />
  <img src="https://raw.githubusercontent.com/seagreenio/react-bulma/master/assets/bulma.svg" width="128" height="128" alt="Bulma 标志" />
</p>

<h1 align="center">React Bulma</h1>

<p align="center"><a href="https://github.com/seagreenio/react-bulma/blob/master/README.md">English</a> | 简体中文</p>

<p align="center">Another &amp; Another React Bulma 组件库，内置 TypeScript 支持。</p>

基于 Bulma 1.0.4 的 React 组件库，要求 React >=17.0.2。

用组件 props 设置 Bulma 修饰符，用带类型提示的 `helpers` 设置通用样式。`BulmaRoot` 负责限制样式的生效范围，并支持局部主题和自定义前缀。

你可以先使用[默认样式](#使用默认样式)，也可以[自定义前缀并构建样式](#自定义前缀并构建样式)。需要弹窗、菜单等交互时，参阅[组合交互组件](#组合交互组件)。[Storybook 使用指南](https://github.com/seagreenio/react-bulma/blob/master/stories/Guide.mdx)也介绍了这些用法，并附有组件示例。

## 安装

你可以通过 npm 安装当前的 RC 版本：

```sh
npm install @seagreenio/react-bulma@1.0.0-rc.0
```

也可以使用 Bun：

```sh
bun add @seagreenio/react-bulma@1.0.0-rc.0
```

## 使用默认样式

在应用中引入一次样式文件，将组件放在 `BulmaRoot` 内。不要同时引入全局 Bulma CSS：

```tsx
import {
  Button,
  BulmaRoot,
  Field,
  Input,
  Label,
} from '@seagreenio/react-bulma';
import '@seagreenio/react-bulma/styles.css';

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
  );
}
```

`BulmaRoot` 为内部元素提供 CSS 变量、排版和表单基础样式，默认使用 `rb-` 前缀和浅色主题。设置 `theme="dark"` 可在局部使用深色主题，设置 `theme="system"` 则跟随浏览器的配色偏好。多个 `BulmaRoot` 嵌套时，各自保留自己的主题和前缀。

样式依赖 CSS `@scope` 和容器查询，目标浏览器必须支持这两项功能。外层组件库样式不会进入嵌套的 Bulma 根组件，但页面自身的选择器和继承样式仍可能影响组件。

在采用 React Server Components 的框架中，组件库的运行时入口按客户端组件处理。调用 `createBulma` 的模块需要位于 `use client` 边界内。`buildStyles` 则使用独立的构建入口，在 Node 或 Bun 中运行。

## 设置 helpers 和原生属性

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

组件专属的修饰符通过带类型约束的 props 设置。间距、文本、颜色、显示方式、可见性和 Flex 布局等通用样式放在 `helpers` 中。组件库还导出了纯函数 `helpers(values)`，可为原生元素生成带前缀的类名。`helpers` 会保留数值 `0`，可见性选项为 `false` 时不生成类名。传入的 `className` 会原样追加。

在 `BulmaRoot` 内，原生元素也可以使用这些 helpers：

```tsx
import { BulmaRoot, helpers } from '@seagreenio/react-bulma';

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
  );
}
```

每个组件都导出对应的 props 类型。只渲染一个元素的组件会把原生属性、事件和 ref 转发给该元素。对于包含包装元素的组件，各项属性的作用位置如下：

| 组件            | 原生属性、className、style 和 ref 传给谁 | helpers 和 wrapperProps 的作用位置                                    |
| --------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| Input、Textarea | 原生 input 或 textarea                   | helpers 作用于控件本身                                                |
| Select          | 原生 select                              | helpers 和 wrapperProps 作用于外层包装元素                            |
| Checkbox、Radio | 原生 input                               | children 是标签内容，helpers 和 wrapperProps 作用于 label             |
| File            | 原生文件 input                           | children 是上传标签，helpers 和 wrapperProps 作用于文件控件的包装元素 |
| Image           | 原生 img，必须提供 alt                   | helpers 和 wrapperProps 作用于 figure                                 |
| FixedGrid       | 外层 fixed-grid div                      | gridProps 配置内层网格                                                |

`size` 控制组件在 Bulma 中的视觉尺寸。`htmlSize` 对应 Input 和 Select 原生的 `size` 属性，值为数字。Select 支持原生多选。File 使用原生文件输入框，显示的 `filename` 由调用方控制，可在 `onChange` 中更新。

Button 默认使用 `type="button"`。按钮进入加载状态时会禁用，并设置 `aria-busy` 向辅助技术说明当前状态。LinkButton 渲染为链接，加载或禁用时会移除链接地址，使链接无法激活。禁用的分页链接和下拉菜单链接同样无法激活。Delete、TagDelete 和 NavbarBurger 都使用原生按钮，并带有默认的无障碍标签。

## 自定义前缀并构建样式

让组件和样式构建使用同一份配置：

```ts
// bulma.config.ts
export const bulmaConfig = { prefix: 'acme-' } as const;
```

```ts
// src/ui.ts
'use client';
import { createBulma } from '@seagreenio/react-bulma';
import { bulmaConfig } from '../bulma.config';

export const ui = createBulma(bulmaConfig);
```

使用 Bun 时，创建 `scripts/styles.ts`：

```ts
import { buildStyles } from '@seagreenio/react-bulma/styles';
import { bulmaConfig } from '../bulma.config';

await Bun.write('src/bulma.css', await buildStyles(bulmaConfig));
```

在应用目录中运行 `bun scripts/styles.ts`。

使用 Node.js 22.18 或更高版本时，创建 `scripts/styles.mjs`。这些版本可通过[原生 TypeScript 支持](https://nodejs.org/api/typescript.html#type-stripping)加载同一份 TypeScript 配置：

```js
import { writeFile } from 'node:fs/promises';
import { buildStyles } from '@seagreenio/react-bulma/styles';
import { bulmaConfig } from '../bulma.config.ts';

await writeFile('src/bulma.css', await buildStyles(bulmaConfig), 'utf8');
```

在应用目录中运行 `node scripts/styles.mjs`。

每次构建应用前，先运行你选用的样式脚本。然后引入生成的 CSS，使用 `ui` 中的组件和 helpers。它们与生成的样式使用同一份前缀配置：

```tsx
import { ui } from './ui';
import './bulma.css';

<ui.BulmaRoot theme="dark">
  <p className={ui.helpers({ mt: 4, textAlign: 'center', hidden: 'mobile' })}>
    Visible above the mobile breakpoint
  </p>
  <ui.Button color="info">Save</ui.Button>
</ui.BulmaRoot>;
```

在模块顶层调用一次 `createBulma`。前缀在构建时确定，必须以小写 ASCII 字母开头、以连字符结尾，中间只能使用小写字母、数字，以及分隔它们的单个连字符。根组件、组件、helpers 和生成的 CSS 必须使用同一前缀。

不同前缀的实例可以共存，也可以嵌套。CSS 变量仍然会继承，但各实例只读取与自身前缀对应的变量。

只在构建阶段用 Node 或 Bun 运行 `buildStyles`。该入口依赖 Sass、Bulma 和 PostCSS，组件的运行时入口不会引入这些构建工具。每个实例使用默认 CSS 或与其配置匹配的自定义 CSS，不要同时加载全局 Bulma CSS。

## 组合交互组件

Modal 基于 Base UI 实现对话框交互。弹窗打开后，焦点会限制在内部，背景无法操作，页面滚动也会锁定。关闭弹窗时，焦点会回到触发按钮。你可以在 Modal 内使用 ModalCard 或 ModalContent 作为弹窗容器：

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

Modal 支持 `open`、`defaultOpen`、`onOpenChange`、`closeOnEscape` 和 `closeOnOutsideClick`。使用 ModalTitle 为对话框命名，或在弹窗容器上设置无障碍标签。

Modal 的 Portal 默认挂载到最近的、前缀匹配的 BulmaRoot 内，因此局部主题的实时修改也会作用于弹窗。如果手动指定 Portal 容器，容器也必须位于匹配的 BulmaRoot 内，才能使用对应的样式和主题变量。

Dropdown 需要搭配 DropdownMenu 和 DropdownContent 使用，菜单的 Portal 始终位于当前 Dropdown 的根元素内。菜单项支持键盘导航和选择，设置 `as="a"` 可作为链接使用。禁用的菜单项仍可通过键盘获得焦点，但不能激活。

Tabs 由 TabsList、Tab 和 TabPanel 组成。每个 Tab 与对应的 TabPanel 使用相同的 `value`，可以是字符串或数字。默认用方向键移动焦点，再按 Enter 或空格键激活选项卡。在 TabsList 上设置 `activateOnFocus` 后，选项卡获得焦点时就会激活。禁用的选项卡可以获得键盘焦点，但不能激活。

Navbar 负责管理移动端菜单的展开状态，使用时组合 NavbarBrand、NavbarBurger、NavbarMenu、NavbarStart 和 NavbarEnd。你可以通过 `expanded` 和 `onExpandedChange` 控制展开状态，也可以用 `defaultExpanded` 设置非受控模式下的初始状态。按 Escape 会关闭移动端菜单，并将焦点移回菜单按钮。NavbarDropdown 使用原生 details/summary 元素，通过 `trigger` 指定触发菜单的节点。

## 选择布局

Columns 将一行分为十二份，按视口断点调整布局。SmartGrid 根据 `minColumnWidth` 自动排列单元格，间距可使用 CSS 长度值。FixedGrid 按容器宽度决定列数，因此在同一个窗口中，窄侧栏和全宽区域也可以显示不同的列数。

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

Column 支持预设的列宽、偏移值和响应式配置。Cell 的起始位置、结束位置和跨度设置会转换为对应的 Bulma 修饰符。

布局规则沿用 Bulma 1.0.4。在这个版本中，`offset="one-third"` 会得到 `0.3333%`，Cell 的结束位置修饰符只设置变量，不改变实际位置。

标题组件的 `level` 决定 HTML 标题级别，数字 `size` 则独立控制显示大小。Bulma 1.x 已弃用 Tile，请改用 Grid。

## 开发

开发时保持组件外观与 Bulma 一致，只为适配 React DOM 或交互差异补充 CSS。测试应验证组件库对外提供的行为，避免重复测试 Bulma 自身的规则。

使用 Bun 1.4.4 和 tsdown 支持的 Node 版本。下载依赖时复用 Bun 默认的共享缓存。

```sh
bun install --frozen-lockfile
bun run storybook
bun run build
bun run typecheck
bun run test
bun run test:browser
bun run build-storybook
```

Storybook 中的 Bulma 示例使用 React 组件编写，直接引入源码模块和本地生成的 CSS。

`test` 覆盖组件渲染、样式和行为。`test:browser` 覆盖原生表单提交、ref、键盘行为、主题和响应式布局。浏览器测试使用已安装的 Google Chrome。

运行 `bun run format` 格式化项目。

`prepack` 钩子会在打包或发布前构建组件库。发布候选版本时，明确指定 `rc` 标签：

```sh
npm publish --tag rc
```

## 生成官方示例

Storybook 使用 `official/source-lock.json` 中锁定的 Bulma 仓库版本生成 React 示例。上游文档和资源缓存在本 Git 仓库之外，共享缓存路径为 `~/.cache/react-bulma/bulma/<revision>/`。如果你想使用其他源码目录，可以设置 `REACT_BULMA_SOURCE_ROOT`，并将对应的资源目录放在源码目录旁边。

```sh
bun run official:generate
bun run storybook
```

`official:generate` 优先使用锁定版本的源码缓存，缺失时从 GitHub 下载对应提交的源码归档。生成器读取本地 Liquid 模板、front matter 元数据、数据文件和 Sass，不读取 bulma.io 网页。

渲染出的 HTML 只作为内存中的编译中间结果。生成器最终输出 React 组件和可复制的 React 源码，并保留原文档的标题、正文、代码和变量表格。两个 Storybook 命令都会自动运行生成步骤。

组件文档涵盖 Elements、Components、Form、Columns、Grid、Layout 和 Skeletons。独立的 Grid playground 不属于组件文档，排除记录见 `official/source-metadata.json`。

源文档的导航沿用上游菜单模板，页面名称和数据来自 `links.json`。Storybook 侧栏依次显示 React Bulma 使用指南、CSS Library 和 Features。各官方分组内的页面顺序与上游一致，每页的来源信息都记录了对应的源文件和提交版本。

Git 只跟踪生成的 React stories 和精简的来源元数据。文档 CSS、本地图片和图标字体会重新生成到 `.generated/official-assets/`，该目录已被 Git 忽略。

来源说明和上游许可证见 [official/ATTRIBUTION.md](https://github.com/seagreenio/react-bulma/blob/master/official/ATTRIBUTION.md)。

## 许可证

采用 MIT 许可证，版权所有 seagreenio。详见 [LICENSE](https://github.com/seagreenio/react-bulma/blob/master/LICENSE)。

感谢 [Jeremy Thomas](https://github.com/jgthms) 开发的 [Bulma](https://bulma.io)，这些组件基于该 CSS 框架构建。

import { createRef } from 'react';
import { createBulma } from '../../src';

const ui = createBulma();
const inputRef = createRef<HTMLInputElement>();
const selectRef = createRef<HTMLSelectElement>();
const textareaRef = createRef<HTMLTextAreaElement>();
const anchorRef = createRef<HTMLAnchorElement>();
const labelRef = createRef<HTMLLabelElement>();

<ui.Input
  ref={inputRef}
  size="large"
  htmlSize={40}
  required
  onChange={(event) => event.currentTarget.select()}
/>;
<ui.Select
  ref={selectRef}
  multiple
  htmlSize={4}
  onChange={(event) => event.currentTarget.selectedOptions}
>
  <option value="a">A</option>
</ui.Select>;
<ui.Textarea ref={textareaRef} rows={6} fixedSize />;
<ui.Checkbox
  ref={inputRef}
  checked
  onChange={(event) => event.currentTarget.checked}
  wrapperProps={{ ref: labelRef }}
/>;
<ui.Checkboxes aria-label="Notifications" ref={createRef<HTMLDivElement>()} />;
<ui.Radios aria-label="Plan" ref={createRef<HTMLDivElement>()} />;
<ui.Radio ref={inputRef} defaultChecked name="plan" value="basic" />;
<ui.File
  ref={inputRef}
  multiple
  accept="image/*"
  filename="example.png"
  onChange={(event) => event.currentTarget.files}
/>;
<ui.BreadcrumbItem ref={anchorRef} href="/" active />;
<ui.CardFooterItem ref={anchorRef} href="/" />;
<ui.PaginationLink ref={anchorRef} current href="/page/1" />;
<ui.PanelBlock as="a" ref={anchorRef} href="/project" />;
<ui.PanelBlock as="label" ref={labelRef} htmlFor="setting" />;

// @ts-expect-error Native numeric size must use htmlSize.
<ui.Input size={40} />;
// @ts-expect-error Native numeric size must use htmlSize.
<ui.Select size={4} />;
// @ts-expect-error File inputs cannot be controlled with a nonempty value.
<ui.File value="file.pdf" />;
// @ts-expect-error Checkbox cannot change its native input type.
<ui.Checkbox type="radio" />;
// @ts-expect-error Ref targets the select, not its wrapper.
<ui.Select ref={inputRef} />;
// @ts-expect-error Static block must explicitly select anchor semantics.
<ui.PanelBlock href="/project" />;
// @ts-expect-error Finite component tags preserve native props and refs.
<ui.PanelBlock as="button" />;
// @ts-expect-error A card footer item is an anchor.
<ui.CardFooterItem ref={inputRef} />;

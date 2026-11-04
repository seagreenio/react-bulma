import { createRef } from 'react'
import * as ui from '../../src'

const imageRef = createRef<HTMLImageElement>()
const figureRef = createRef<HTMLElement>()
const headingRef = createRef<HTMLHeadingElement>()
const tableRef = createRef<HTMLTableElement>()
const progressRef = createRef<HTMLProgressElement>()
const anchorRef = createRef<HTMLAnchorElement>()
const divRef = createRef<HTMLDivElement>()

;<ui.Image
  alt=""
  src="/photo.svg"
  ref={imageRef}
  loading="lazy"
  wrapperProps={{ ref: figureRef }}
/>
;<ui.Title level={4} size={1} ref={headingRef} />
;<ui.Subtitle level={5} ref={headingRef} />
;<ui.Table ref={tableRef} striped>
  <tbody>
    <tr>
      <td>Cell</td>
    </tr>
  </tbody>
</ui.Table>
;<ui.Progress ref={progressRef} value={0} max={100} />
;<ui.LinkButton ref={anchorRef} href="/docs" download>
  Download
</ui.LinkButton>
;<ui.LinkTag ref={anchorRef} href="/labels/react">
  React
</ui.LinkTag>
;<ui.TagDelete
  ref={createRef<HTMLButtonElement>()}
  aria-label="Remove React tag"
/>
;<ui.Column
  ref={divRef}
  width={{ base: 'half', touch: 'full', desktop: 3 }}
  offset={{ base: 0, widescreen: 'one-third' }}
/>
;<ui.Columns
  gap={{ mobile: 0, 'tablet-only': 3, 'desktop-only': 8 }}
  displayFrom="desktop"
/>
;<ui.FixedGrid
  ref={divRef}
  columns={{ base: 1, tablet: 2 }}
  gridProps={{ ref: divRef, gap: '2rem' }}
/>
;<ui.Cell columnSpan={{ 'tablet-only': 2, fullhd: 4 }} rowStart="end" />
;<ui.Cell columnEnd={{ base: 3, desktop: 5 }} rowEnd={{ mobile: 2 }} />

// @ts-expect-error Image alt text must be explicit, including decorative images.
;<ui.Image src="/photo.svg" />
// @ts-expect-error Image ref targets the img, not its figure.
;<ui.Image alt="" ref={divRef} />
// @ts-expect-error Unsupported image ratio is not a Bulma class.
;<ui.Image alt="" ratio="21by9" />
// @ts-expect-error Native table refs cannot point to a div.
;<ui.Table ref={divRef} />
// @ts-expect-error Heading level must be a semantic heading level.
;<ui.Title level={7} />
// @ts-expect-error Visual sizes are explicit numeric choices.
;<ui.Title size="large" />
;<ui.LinkButton disabled />
// @ts-expect-error Delete is a button, not an anchor.
;<ui.Delete href="/close" />
// @ts-expect-error TagDelete preserves native button semantics.
;<ui.TagDelete href="/close" />
// @ts-expect-error Column width is bounded by Bulma's twelve columns.
;<ui.Column width={13} />
// @ts-expect-error Column width does not support tablet-only modifiers.
;<ui.Column width={{ 'tablet-only': 4 }} />
// @ts-expect-error Offset has no narrow variant.
;<ui.Column offset="narrow" />
// @ts-expect-error Gap range is zero through eight.
;<ui.Columns gap={9} />
// @ts-expect-error One display breakpoint controls the Columns layout.
;<ui.Columns displayFrom="touch" />
// @ts-expect-error Fixed grid breakpoints have no touch variant.
;<ui.FixedGrid columns={{ touch: 2 }} />
// @ts-expect-error Fixed grid has at least one column.
;<ui.FixedGrid columns={0} />
// @ts-expect-error Cell responsive modifiers have no touch variant.
;<ui.Cell columnSpan={{ touch: 2 }} />
// @ts-expect-error Cell end lines use the same bounded viewport variants.
;<ui.Cell columnEnd={{ touch: 2 }} />
// @ts-expect-error Grid lengths are CSS strings, not unitless numbers.
;<ui.SmartGrid minColumnWidth={16} />
// @ts-expect-error SkeletonLines owns its rendered line children.
;<ui.SkeletonLines>Loading</ui.SkeletonLines>

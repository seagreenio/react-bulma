import type { ReactNode } from 'react'
import type { Meta } from '@storybook/react-vite'
import { BulmaRoot } from '../../src'
import catalog from '../../official/catalog.json'
import type { OfficialPreview } from '../../scripts/official/types'
import '../../.generated/official-assets/fontawesome.css'
import '../../.generated/official-assets/decorations.css'
import './surface.css'
import '../../.generated/official-assets/docs.css'

const examples: Map<string, { kind: string; preview?: OfficialPreview }> =
  new Map(catalog.map((example) => [example.id, example]))

export function officialPage(
  page: {
    id: string
    title: string
    url: string
  },
  docsPage?: () => ReactNode,
): Meta {
  return {
    id: `official-${page.id}`,
    title: page.title,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
      docs: {
        page: docsPage,
        description: {
          component: `Examples adapted from [Bulma's official ${page.title} documentation](${page.url}). Source attribution is in official/ATTRIBUTION.md.`,
        },
      },
    },
    decorators: [
      (Story, context) => {
        const example = examples.get(context.parameters.official?.id as string)
        const snippet = example?.kind === 'snippet'
        let preview = snippet ? (
          <div
            className={
              example.preview?.className ?? 'bd-snippet bd-is-vertical'
            }
          >
            <div className="bd-snippet-example">
              <div className="bd-snippet-preview" data-official-preview>
                <Story />
              </div>
            </div>
          </div>
        ) : (
          <div data-official-preview>
            <Story />
          </div>
        )
        for (const className of [
          ...(example?.preview?.ancestors ?? []),
        ].reverse())
          preview = <div className={className}>{preview}</div>
        return (
          <BulmaRoot
            className="official-root"
            data-view-mode={context.viewMode}
          >
            <div className="bd-docs-content">{preview}</div>
          </BulmaRoot>
        )
      },
    ],
  }
}

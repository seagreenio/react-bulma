import type { ReactNode } from 'react'
import type { Meta } from '@storybook/react-vite'
import { BulmaRoot } from '../../src'
import catalog from '../../official/catalog.json'
import '../../.generated/official-assets/fontawesome.css'
import '../../.generated/official-assets/decorations.css'
import './surface.css'
import '../../.generated/official-assets/docs.css'

const examples = new Map(catalog.map((example) => [example.id, example]))

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
        return (
          <BulmaRoot
            className="official-root"
            data-view-mode={context.viewMode}
          >
            <div className="bd-docs-content">
              {snippet ? (
                <div className="bd-snippet bd-is-vertical">
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
              )}
            </div>
          </BulmaRoot>
        )
      },
    ],
  }
}

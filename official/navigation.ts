import type { OfficialNavigation } from '../scripts/official/source'

type StoryOrder = (string | StoryOrder)[]

const libraryGuideTitle = 'React Bulma'

const rootOrder = [libraryGuideTitle, 'CSS Library', 'Features']

export function libraryStoryOrder(
  source: Pick<OfficialNavigation, 'pages'>,
): StoryOrder {
  function order(paths: string[][]): StoryOrder {
    const groups = new Map<string, string[][]>()
    for (const [name, ...children] of paths) {
      if (name) groups.set(name, [...(groups.get(name) ?? []), children])
    }
    const output: StoryOrder = []
    for (const [name, children] of groups) {
      output.push(name)
      if (children.some((path) => path.length)) output.push(order(children))
    }
    return output
  }
  const paths = source.pages.map((page) => page.path)
  paths.sort(
    (left, right) => rootOrder.indexOf(left[0]!) - rootOrder.indexOf(right[0]!),
  )
  return order([[libraryGuideTitle], ...paths])
}

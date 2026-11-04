# Project instructions

React Bulma is a React component library built on Bulma. Use `package.json` for dependency versions, exports, and available commands.

## Scope and implementation

- Treat questions and requests for evaluation as discussion. Change files when the user requests implementation.
- Keep changes focused. Avoid speculative abstractions, extra scripts, and redundant checks.
- Follow Bulma's appearance and Sass rules. Add CSS only where React markup, interaction, or accessibility requires an adapter. Do not redesign Bulma or silently fix its upstream layout behavior.
- Preserve native HTML attributes, form behavior, refs, keyboard interaction, focus handling, and disabled behavior.
- Support React 17.0.2 and later. Development uses a newer React version, so do not assume its APIs are available to consumers.
- Keep public types compatible with supported React typings without requiring `skipLibCheck`. Avoid exposing Base UI declarations that break this compatibility.
- Keep the runtime entry separate from the build-time styles entry. Sass and PostCSS belong in `src/styles.ts` and build scripts.
- Keep `createBulma` and `buildStyles` consistent. Components, helpers, roots, and generated CSS must use the same configurable prefix. Preserve isolation between separate and nested roots.

## Documentation and examples

- Write project documentation in English. Communicate with the user in Chinese.
- Keep `README.md` and `README.zh-CN.md` aligned in structure, paragraphs, facts, commands, examples, and caveats. Use natural Chinese rather than literal translations.
- Keep both READMEs and Storybook documentation, including `stories/Guide.mdx` and component docs, consistent in shared component usage, consumer configuration, examples, and caveats. When shared information changes, update every affected document in the same change.
- Keep Storybook focused on component presentation and usage. Keep library development, testing, publishing, and official example generation instructions in the READMEs.
- Use clear, friendly prose with explicit subjects where helpful, such as "You can start with...".
- Keep usage documentation in the READMEs and `stories/Guide.mdx`. Do not recreate a separate `docs/` directory.
- Use 2-space indentation, including code examples in Markdown and MDX.
- Use fenced code blocks in MDX. Avoid multiline template strings in `<Source code={...}>`, which can lose indentation.
- Use absolute GitHub URLs for README assets so the npm package does not need to include `assets/`.
- Reproduce official Bulma examples with this library's components. Preserve the official headings, content, and order. Do not add unrelated demonstration stories.
- Read the upstream docs source pinned by `official/source-lock.json`. Do not scrape rendered documentation pages or commit the upstream docs tree.
- Change example generation in `scripts/generate-official.ts` and `scripts/official/`. Regenerate stories instead of hand-editing `stories/official/generated/` or the generated `.storybook/preview.ts`.
- Keep sidebar ordering in `official/navigation.ts`. The React Bulma guide comes first, CSS Library follows the official order, and Features comes last.
- Keep example previews padded and sized to their content.

## Tests and commands

Test observable component behavior and public type contracts. Keep coverage for interaction, native semantics, prefix isolation, and responsive behavior where relevant. Avoid tests that duplicate Bulma constants, mirror implementation details, or compare generated inventories with themselves.

Use existing commands for the affected behavior. Documentation-only changes do not require the full build and browser suite. Do not add a general Storybook checker or new verification infrastructure without a concrete need.

| Command                     | Purpose                                                             |
| --------------------------- | ------------------------------------------------------------------- |
| `bun run build`             | Build package JavaScript, declarations, and CSS.                    |
| `bun run typecheck`         | Check TypeScript, including public type tests.                      |
| `bun run test`              | Run component unit tests in `tests/unit`.                           |
| `bun run test:browser`      | Build fixture styles and run Playwright tests.                      |
| `bun run official:generate` | Generate official examples and their assets from the pinned source. |
| `bun run storybook`         | Generate examples and start Storybook on port 6006.                 |
| `bun run build-storybook`   | Generate examples and build static Storybook output.                |

Format only files touched by the task with the existing Prettier configuration. `bun run format` formats the entire repository.

For a requested package dry run, use `npm publish --dry-run --tag rc`. The existing `prepack` script builds the package. Commit, push, or publish only when requested.

## Caches and temporary output

- Before installing dependencies or building, inspect the project's cache configuration and actual paths. Reuse existing shared caches, including Bun's default `~/.bun/install/cache` and npm's default `~/.npm` unless configured otherwise.
- Do not create a separate dependency download cache for each task, branch, worktree, or agent. Do not use a temporary evidence directory as a download cache.
- The official source cache defaults to `~/.cache/react-bulma/bulma/<revision>/source`. `REACT_BULMA_SOURCE_ROOT` can override it. Reuse that source and its sibling resources directory.
- Keep generated assets and temporary outputs in ignored locations such as `.generated/`. Do not vendor cached upstream sources into Git.
- If work is delegated, pass the selected shared cache paths to the agents.
- Clean up temporary outputs and processes created by the task when no longer needed. Do not clear shared caches, remove unrelated source, or run global cleanup commands.

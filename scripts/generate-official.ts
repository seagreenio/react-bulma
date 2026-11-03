import {
  mkdir,
  writeFile,
  readdir,
  rm,
  copyFile,
  rename,
} from 'node:fs/promises';
import { resolve } from 'node:path';
import { format, resolveConfig } from 'prettier';
import { compileCorpus } from './official/compiler';
import { compileDocumentStyles } from './official/documents';
import { prepareOfficialSource } from './official/fetch';
import { loadOfficialSource } from './official/source';
import {
  loadSourceAssets,
  rewriteSourceAssetUrls,
} from './official/source-assets';
import { libraryStoryOrder } from '../official/navigation';

const sourceRoot = await prepareOfficialSource();
const bundle = await loadOfficialSource(sourceRoot);
const { corpus, documents, navigation } = bundle;
const resources = await loadSourceAssets(sourceRoot);
corpus.assets = resources.assets;
const pages = compileCorpus(corpus, documents, navigation);
const options = await resolveConfig(
  'stories/official/generated/example.stories.tsx',
);
const files = new Map<string, string>();
files.set(
  'official/source-metadata.json',
  JSON.stringify(
    {
      source: corpus.source,
      upstreamVersion: corpus.upstreamVersion,
      pages: corpus.pages.map(({ id, source, examples }) => ({
        id,
        source,
        examples: examples.length,
      })),
      excluded: navigation.excluded,
    },
    null,
    2,
  ) + '\n',
);
files.set('.generated/official-assets/fontawesome.css', resources.fontawesome);
files.set(
  '.generated/official-assets/decorations.css',
  await format(rewriteSourceAssetUrls(bundle.decorations, resources.assets), {
    ...options,
    parser: 'css',
  }),
);
files.set(
  '.generated/official-assets/docs.css',
  await format(
    compileDocumentStyles(
      rewriteSourceAssetUrls(bundle.stylesheet, resources.assets),
      documents,
      corpus,
    ),
    { ...options, parser: 'css' },
  ),
);
files.set(
  '.storybook/preview.ts',
  await format(
    `import type { Preview } from '@storybook/react-vite';
import '../.generated/default.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    options: { storySort: { order: ${JSON.stringify(libraryStoryOrder(navigation))} } },
  },
};
export default preview;
`,
    { ...options, parser: 'typescript' },
  ),
);
for (const page of pages) {
  files.set(
    `stories/official/generated/${page.id}.stories.tsx`,
    await format(page.source, { ...options, parser: 'typescript' }),
  );
}
files.set(
  'official/catalog.json',
  `${JSON.stringify(
    corpus.pages.flatMap((page) =>
      page.examples.map((example) => ({
        id: example.id,
        kind: example.kind,
        page: page.id,
        url: page.url,
        section: example.section,
        name: example.name,
        source: example.source,
      })),
    ),
    null,
    2,
  )}\n`,
);
for (const [path, content] of files)
  if (path.endsWith('.json'))
    files.set(path, await format(content, { ...options, parser: 'json' }));
for (const name of await readdir('stories/official/generated')) {
  const path = `stories/official/generated/${name}`;
  if (files.has(path)) continue;
  await rm(path);
}
for (const [path, content] of files) {
  const existing = Bun.file(path);
  if ((await existing.exists()) && (await existing.text()) === content)
    continue;
  await mkdir(resolve(path, '..'), { recursive: true });
  const temporary = `${path}.tmp`;
  await writeFile(temporary, content);
  await rename(temporary, path);
}
await mkdir('.generated/official-assets', { recursive: true });
for (const asset of new Map(
  resources.assets.map((asset) => [asset.file, asset]),
).values())
  await copyFile(
    asset.file,
    `.generated/official-assets/${asset.file.split('/').at(-1)}`,
  );
const expected = new Set(
  corpus.pages.flatMap((page) => page.examples.map((example) => example.id)),
);
const actual = new Set(
  pages.flatMap((page) => page.examples.map((example) => example.id)),
);
if (
  expected.size !== actual.size ||
  [...expected].some((id) => !actual.has(id))
)
  throw new Error(
    'Official example coverage differs from the pinned repository source.',
  );
console.log(
  `Generated ${actual.size} official examples across ${pages.length} pages.`,
);

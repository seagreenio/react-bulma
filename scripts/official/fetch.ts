import { createHash } from 'node:crypto';
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises';
import { basename, dirname, join, relative, resolve, sep } from 'node:path';
import lock from '../../official/source-lock.json';
import { officialSourceRoot } from './source';
import { loadSourceAssets } from './source-assets';

interface SourceManifest {
  repository: string;
  revision: string;
  files: { path: string; sha256: string }[];
}

const sourceDirectories = [
  'docs/documentation/',
  'docs/_data/',
  'docs/_includes/',
  'docs/_layouts/',
  'docs/_sass/',
  'docs/assets/javascript/',
  'sass/',
];
const sourceFiles = new Set([
  'LICENSE',
  'package.json',
  'docs/LICENSE',
  'docs/README.md',
  'docs/package.json',
  'docs/website.scss',
  'docs/_config.yml',
]);
const vendor = 'docs/vendor/fontawesome-free-6.5.2-web/';
const hash = (value: Uint8Array) =>
  createHash('sha256').update(value).digest('hex');
const json = (value: unknown) => `${JSON.stringify(value, null, 2)}\n`;
const selectedSource = (path: string) =>
  sourceFiles.has(path) ||
  sourceDirectories.some((directory) => path.startsWith(directory));

function safePath(root: string, path: string): string {
  if (
    path.includes('\\') ||
    path.split('/').some((part) => !part || part === '.' || part === '..')
  )
    throw new Error(`Unsafe official source path: ${path}`);
  const file = resolve(root, path);
  if (!file.startsWith(resolve(root) + sep))
    throw new Error(`Unsafe official source path: ${path}`);
  return file;
}

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return false;
    throw error;
  }
}

async function files(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const result: string[] = [];
  for (const entry of entries) {
    const path = join(root, entry.name);
    if (entry.isSymbolicLink())
      throw new Error(`Official source cache contains a symlink: ${path}`);
    if (entry.isDirectory()) result.push(...(await files(path)));
    else if (entry.isFile()) result.push(path);
    else throw new Error(`Official source cache contains a non-file: ${path}`);
  }
  return result.sort();
}

async function validate(sourceRoot: string): Promise<void> {
  const upstream = JSON.parse(
    await readFile(join(sourceRoot, 'upstream.json'), 'utf8'),
  ) as { repository: string; commit: string };
  const manifest = JSON.parse(
    await readFile(join(sourceRoot, 'manifest.json'), 'utf8'),
  ) as SourceManifest;
  if (
    upstream.repository !== lock.repository ||
    upstream.commit !== lock.revision ||
    manifest.repository !== lock.repository ||
    manifest.revision !== lock.revision
  )
    throw new Error(
      'Official source cache does not match official/source-lock.json.',
    );
  const expected = new Set(manifest.files.map((entry) => entry.path));
  if (expected.size !== manifest.files.length || !expected.size)
    throw new Error('Invalid official source file manifest.');
  const actual = (await files(sourceRoot))
    .map((file) => relative(sourceRoot, file).split(sep).join('/'))
    .filter((path) => !['upstream.json', 'manifest.json'].includes(path));
  if (
    actual.length !== expected.size ||
    actual.some((path) => !expected.has(path))
  )
    throw new Error(
      'Official source cache file coverage differs from its manifest.',
    );
  for (const entry of manifest.files) {
    if (
      !selectedSource(entry.path) ||
      hash(await readFile(safePath(sourceRoot, entry.path))) !== entry.sha256
    )
      throw new Error(`Official source cache file changed: ${entry.path}`);
  }
  for (const file of [
    ...sourceFiles,
    'docs/_data/links.json',
    'docs/_data/meta.json',
    'docs/_layouts/docs.html',
    'sass/_index.scss',
  ])
    if (!expected.has(file))
      throw new Error(`Missing official source file: ${file}`);
  const pkg = JSON.parse(
    await readFile(join(sourceRoot, 'package.json'), 'utf8'),
  ) as { name: string; version: string };
  const meta = JSON.parse(
    await readFile(join(sourceRoot, 'docs/_data/meta.json'), 'utf8'),
  ) as { version: string };
  if (
    pkg.name !== 'bulma' ||
    pkg.version !== lock.version ||
    meta.version !== lock.version
  )
    throw new Error(
      'Official source version differs from official/source-lock.json.',
    );
  const resourcesRoot = join(dirname(sourceRoot), 'resources');
  await files(resourcesRoot);
  await loadSourceAssets(sourceRoot);
}

export async function prepareOfficialSource(): Promise<string> {
  const sourceRoot = resolve(officialSourceRoot());
  const resourcesRoot = join(dirname(sourceRoot), 'resources');
  if ((await exists(sourceRoot)) || (await exists(resourcesRoot))) {
    await validate(sourceRoot);
    return sourceRoot;
  }
  const repository = /^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)$/.exec(
    lock.repository,
  );
  if (!repository || !/^[a-f0-9]{40}$/.test(lock.revision))
    throw new Error('Invalid official source repository lock.');
  const url = `https://codeload.github.com/${repository[1]}/${repository[2]}/tar.gz/${lock.revision}`;
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(
      `Official source download failed: ${response.status} ${response.statusText}`,
    );
  const bytes = new Uint8Array(await response.arrayBuffer());
  const prefix = `${repository[2]}-${lock.revision}/`;
  const archive = await new Bun.Archive(bytes).files([
    ...sourceDirectories.map((directory) => `${prefix}${directory}**`),
    ...[...sourceFiles].map((file) => `${prefix}${file}`),
    `${prefix}docs/assets/images/**`,
    `${prefix}${vendor}webfonts/*`,
    `${prefix}${vendor}css/all.min.css`,
    `${prefix}${vendor}LICENSE.txt`,
  ]);
  const content = new Map<string, Uint8Array>();
  for (const [path, file] of archive) {
    if (!path.startsWith(prefix))
      throw new Error(`Unexpected official archive path: ${path}`);
    const sourcePath = path.slice(prefix.length);
    safePath(sourceRoot, sourcePath);
    if (content.has(sourcePath))
      throw new Error(`Duplicate official archive path: ${sourcePath}`);
    content.set(sourcePath, new Uint8Array(await file.arrayBuffer()));
  }
  const selected = [...content.keys()].filter(selectedSource).sort();
  const texts = selected
    .filter(
      (path) =>
        /^docs\/documentation\/(?:elements|components|form|columns|grid|layout)\/.*\.html$/.test(
          path,
        ) ||
        path === 'docs/documentation/features/skeletons.html' ||
        path === 'docs/website.scss' ||
        /^docs\/_sass\/docs\/.*\.scss$/.test(path),
    )
    .map((path) => new TextDecoder().decode(content.get(path)!))
    .join('\n');
  const images = new Set(
    [
      ...texts.matchAll(
        /(\/assets\/images\/[A-Za-z0-9_@./-]+\.(?:png|jpg|jpeg|gif|svg))/g,
      ),
    ].map((match) => `docs${match[1]}`),
  );
  for (const path of content.keys())
    if (path.startsWith('docs/assets/images/placeholders/')) images.add(path);
  const resources = [
    ...new Set([
      ...images,
      ...[...content.keys()].filter((path) =>
        path.startsWith(`${vendor}webfonts/`),
      ),
      `${vendor}css/all.min.css`,
      `${vendor}LICENSE.txt`,
    ]),
  ].sort();
  await mkdir(dirname(sourceRoot), { recursive: true });
  const staging = await mkdtemp(join(dirname(sourceRoot), '.prepare-'));
  const stagedSource = join(staging, 'source');
  const stagedResources = join(staging, 'resources');
  try {
    const manifest: SourceManifest = {
      repository: lock.repository,
      revision: lock.revision,
      files: [],
    };
    for (const path of selected) {
      const file = safePath(stagedSource, path);
      const value = content.get(path)!;
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, value);
      manifest.files.push({ path, sha256: hash(value) });
    }
    await writeFile(join(stagedSource, 'manifest.json'), json(manifest));
    await writeFile(
      join(stagedSource, 'upstream.json'),
      json({
        repository: lock.repository,
        commit: lock.revision,
        kind: 'repository-source',
      }),
    );
    const resourceManifest = {
      repository: lock.repository,
      revision: lock.revision,
      files: [] as {
        sourcePath: string;
        revision: string;
        file: string;
        sha256: string;
      }[],
    };
    const names = new Set<string>();
    for (const path of resources) {
      const value = content.get(path);
      if (!value)
        throw new Error(
          `Required official source resource is missing: ${path}`,
        );
      const file =
        path === `${vendor}css/all.min.css`
          ? 'fontawesome-source.css'
          : path === `${vendor}LICENSE.txt`
            ? 'FONT-AWESOME-LICENSE.txt'
            : `files/${basename(path)}`;
      if (names.has(file))
        throw new Error(`Duplicate official resource name: ${file}`);
      names.add(file);
      const target = safePath(stagedResources, file);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, value);
      resourceManifest.files.push({
        sourcePath: path,
        revision: lock.revision,
        file,
        sha256: hash(value),
      });
    }
    await writeFile(
      join(stagedResources, 'manifest.json'),
      json(resourceManifest),
    );
    await validate(stagedSource);
    await rename(stagedResources, resourcesRoot);
    try {
      await rename(stagedSource, sourceRoot);
    } catch (error) {
      await rm(resourcesRoot, { recursive: true });
      throw error;
    }
    return sourceRoot;
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

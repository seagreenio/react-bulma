import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { basename, dirname, resolve, sep } from 'node:path';
import type { OfficialAsset } from './types';

interface SourceResource {
  sourcePath: string;
  revision: string;
  file: string;
  sha256: string;
}

interface SourceResources {
  repository: string;
  revision: string;
  files: SourceResource[];
}

export function rewriteSourceAssetUrls(
  css: string,
  assets: readonly OfficialAsset[],
  base = 'https://bulma.io/',
): string {
  const local = new Map(
    assets.map((asset) => [
      asset.url,
      `/official-assets/${basename(asset.file)}`,
    ]),
  );
  return css.replace(
    /url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g,
    (match, _, value: string) => {
      if (value.startsWith('data:') || value.startsWith('#')) return match;
      const path = local.get(new URL(value, base).href);
      return path ? `url("${path}")` : match;
    },
  );
}

export async function loadSourceAssets(sourceRoot: string): Promise<{
  assets: OfficialAsset[];
  fontawesome: string;
}> {
  const resourcesRoot = resolve(dirname(sourceRoot), 'resources');
  const upstream = JSON.parse(
    await readFile(resolve(sourceRoot, 'upstream.json'), 'utf8'),
  ) as { repository: string; commit: string };
  const manifest = JSON.parse(
    await readFile(resolve(resourcesRoot, 'manifest.json'), 'utf8'),
  ) as SourceResources;
  if (
    manifest.repository !== upstream.repository ||
    manifest.revision !== upstream.commit
  )
    throw new Error(
      'Official resources do not match the pinned source revision.',
    );
  const assets: OfficialAsset[] = [];
  const names = new Set<string>();
  let fontawesome = '';
  for (const entry of manifest.files) {
    const file = resolve(resourcesRoot, entry.file);
    if (
      !file.startsWith(resourcesRoot + sep) ||
      entry.revision !== manifest.revision ||
      !entry.sourcePath.startsWith('docs/')
    )
      throw new Error(`Invalid official source resource: ${entry.sourcePath}`);
    const bytes = await readFile(file);
    if (createHash('sha256').update(bytes).digest('hex') !== entry.sha256)
      throw new Error(`Official source resource changed: ${entry.sourcePath}`);
    if (entry.file === 'fontawesome-source.css') {
      fontawesome = bytes.toString('utf8');
      continue;
    }
    if (!entry.file.startsWith('files/')) continue;
    const name = basename(file);
    if (names.has(name))
      throw new Error(`Duplicate official asset name: ${name}`);
    names.add(name);
    const url = new URL(
      entry.sourcePath.slice('docs'.length),
      'https://bulma.io',
    ).href;
    assets.push({ url, file, sha256: entry.sha256 });
    if (entry.sourcePath.startsWith('docs/assets/images/'))
      assets.push({
        url: url.replace('/assets/images/', '/images/'),
        file,
        sha256: entry.sha256,
      });
  }
  if (!fontawesome) throw new Error('Missing pinned Font Awesome source.');
  return {
    assets,
    fontawesome: rewriteSourceAssetUrls(
      fontawesome,
      assets,
      'https://bulma.io/vendor/fontawesome-free-6.5.2-web/css/all.min.css',
    ),
  };
}

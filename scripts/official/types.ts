export interface OfficialExample {
  id: string;
  name: string;
  section: string;
  kind: 'snippet' | 'demo' | 'modal';
  selector: string;
  html: string;
  sha256: string;
  source?: { file: string; revision: string };
}

export interface OfficialPage {
  id: string;
  title: string;
  url: string;
  examples: OfficialExample[];
  excluded: { selector: string; reason: string }[];
  source?: { file: string; revision: string };
}

export interface OfficialAsset {
  url: string;
  file: string;
  sha256: string;
}

export interface OfficialCorpus {
  source: { repository: string; revision: string };
  upstreamVersion: string;
  pages: OfficialPage[];
  assets: OfficialAsset[];
}

export interface CompiledExample {
  id: string;
  exportName: string;
  source: string;
  components: string[];
}

export interface CompiledPage {
  id: string;
  source: string;
  examples: CompiledExample[];
}

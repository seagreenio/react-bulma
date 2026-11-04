export interface OfficialPreview {
  className: string
  ancestors?: string[]
}

export interface OfficialExample {
  id: string
  name: string
  kind: 'snippet' | 'demo' | 'modal'
  selector: string
  html: string
  sha256: string
  preview?: OfficialPreview
}

export interface OfficialPage {
  id: string
  title: string
  url: string
  examples: OfficialExample[]
  source?: { file: string; revision: string }
}

export interface OfficialAsset {
  url: string
  file: string
}

export interface OfficialCorpus {
  source: { repository: string; revision: string }
  upstreamVersion: string
  pages: OfficialPage[]
  assets: OfficialAsset[]
}

export interface CompiledExample {
  id: string
  exportName: string
}

export interface CompiledPage {
  id: string
  source: string
  examples: CompiledExample[]
}

export enum Viewport {
  Mobile = 'mobile',
  Touch = 'touch',
  Tablet = 'tablet',
  Desktop = 'desktop',
  Widescreen = 'widescreen',
  FullHD = 'fullhd',
}

export type ViewportType = 'mobile' | 'touch' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd'

export enum ViewportOnly {
  TabletOnly = 'tablet-only',
  DesktopOnly = 'desktop-only',
  WidescreenOnly = 'widescrenn-only',
}

export type ViewportOnlyType = 'tablet-only' | 'desktop-only' | 'widescrenn-only'

type Responsive = Viewport | ViewportOnly

export type ResponsiveType = ViewportType | ViewportOnlyType

export default Responsive

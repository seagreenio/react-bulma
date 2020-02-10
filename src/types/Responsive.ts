enum Responsive {
  Mobile = 'mobile',
  TabletOnly = 'tablet-only',
  DesktopOnly = 'desktop-only',
  WidescreenOnly = 'widescrenn-only',
  Touch = 'touch',
  Tablet = 'tablet',
  Desktop = 'desktop',
  Widescreen = 'widescreen',
  FullHD = 'fullhd',
}

export type ResponsiveType =
  | 'mobile'
  | 'tablet-only'
  | 'desktop-only'
  | 'widescrenn-only'
  | 'touch'
  | 'tablet'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

export default Responsive

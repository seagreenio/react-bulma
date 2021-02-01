enum Color {
  White = 'white',
  Light = 'light',
  Dark = 'dark',
  Black = 'black',
  Primary = 'primary',
  Link = 'link',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export type ColorType =
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export enum LightColor {
  Primary = 'primary-light',
  Link = 'link-light',
  Info = 'info-light',
  Success = 'success-light',
  Warning = 'warning-light',
  Danger = 'danger-light',
}

export type LightColorType =
  | 'primary-light'
  | 'link-light'
  | 'info-light'
  | 'success-light'
  | 'warning-light'
  | 'danger-light'

export enum DarkColor {
  Primary = 'primary-dark',
  Link = 'link-dark',
  Info = 'info-dark',
  Success = 'success-dark',
  Warning = 'warning-dark',
  Danger = 'danger-dark',
}

export type DarkColorType =
  | 'primary-dark'
  | 'link-dark'
  | 'info-dark'
  | 'success-dark'
  | 'warning-dark'
  | 'danger-dark'

export enum ShadesOfGrey {
  BlackBis = 'black-bis',
  BlackTer = 'black-ter',
  GreyDarker = 'grey-darker',
  GreyDark = 'grey-dark',
  Grey = 'grey',
  GreyLight = 'grey-light',
  GreyLighter = 'grey-lighter',
  WhiteTer = 'white-ter',
  WhiteBis = 'white-bis',
}

export type ShadesOfGreyType =
  | 'black-bis'
  | 'black-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-ter'
  | 'white-bis'

export default Color

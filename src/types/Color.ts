enum Color {
  White = 'white',
  Black = 'black',
  Light = 'light',
  Dark = 'dark',
  Primary = 'primary',
  Link = 'link',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

type ColorType =
  | 'white'
  | 'black'
  | 'light'
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

enum ExtendColor {
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

type ExtendColorType =
  | 'black-bis'
  | 'black-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-ter'
  | 'white-bis'

export { ColorType, ExtendColor, ExtendColorType }
export default Color

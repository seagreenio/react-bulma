type Attributes<T> = T extends HTMLAnchorElement
  ? JSX.IntrinsicElements['a']
  : T extends HTMLInputElement
  ? JSX.IntrinsicElements['input']
  : JSX.IntrinsicElements['div']

type CommonProps<T extends HTMLElement = HTMLElement> = Omit<
  Attributes<T> & {
    as?: string
  },
  'size' | 'sizes'
>

export default CommonProps

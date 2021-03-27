type Attributes<T> = T extends HTMLAnchorElement
  ? JSX.IntrinsicElements['a']
  : T extends HTMLInputElement
  ? JSX.IntrinsicElements['input']
  : T extends HTMLTextAreaElement
  ? JSX.IntrinsicElements['textarea']
  : JSX.IntrinsicElements['div']

type CommonProps<T extends HTMLElement = HTMLElement> = Omit<
  Attributes<T> & {
    as?: string
  },
  'size' | 'sizes'
>

export default CommonProps

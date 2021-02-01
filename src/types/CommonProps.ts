type Attributes<T> = T extends HTMLAnchorElement ? JSX.IntrinsicElements['a'] : JSX.IntrinsicElements['div']

type CommonProps<T extends HTMLElement = HTMLElement> = Attributes<T> & {
  as?: string
}

export default CommonProps

import type { Ref, MutableRefObject } from 'react'

export function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') return ref(value)
  if (ref) (ref as MutableRefObject<T | null>).current = value
}

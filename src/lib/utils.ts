import { Unit as SizeUnit } from '../types/Size'
import { Unit as SpacingUnit } from '../types/Spacing'
import _difference from 'lodash.difference'

export function differenceObject(a: object, b: object) {
  const diff = _difference(Object.keys(a), Object.keys(b))

  return diff.reduce((acc, prop: string) => {
    acc[prop] = (a as any)[prop]

    return acc
  }, {} as { [key: string]: any })
}

export function properRange(
  s: SpacingUnit | SizeUnit,
  bound: [number, number]
) {
  let result = s

  if (typeof s === 'string') {
    result = parseInt(s, 10)
  }

  if (result < bound[0]) {
    result = bound[0]
  }

  if (result > bound[1]) {
    result = bound[1]
  }

  return result
}

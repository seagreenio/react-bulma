import _difference from 'lodash.difference'

export function differenceObject(a: object, b: object) {
  const diff = _difference(Object.keys(a), Object.keys(b))

  return diff.reduce((acc: Record<string, any>, prop: string) => {
    acc[prop] = (a as any)[prop]

    return acc
  }, {})
}

export function properRange(s: Unit, bound: [number, number]) {
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

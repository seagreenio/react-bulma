import difference from 'lodash.difference'

export function differenceObject(a: object, b: object) {
  const diff = difference(Object.keys(a), Object.keys(b))

  return diff.reduce((acc, prop: string) => {
    acc[prop] = (a as any)[prop]

    return acc
  }, {} as { [key: string]: any })
}

export const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

export const colors = ['primary', 'link', 'info', 'success', 'warning', 'danger']
export const sizes = ['small', 'normal', 'medium', 'large']

export function toTitleCase(s: string) {
  return s.charAt(0).toUpperCase() + s.substr(1)
}

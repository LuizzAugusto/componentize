export function parseProps(props?: Record<string,unknown> | null) {
  if (!props) {
    return ''
  }

  return Object.keys(props)
    .map((name: string) => ` ${name}="${props[name]}"`).join('')
}
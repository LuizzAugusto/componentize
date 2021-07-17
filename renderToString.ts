import { tagOrFunctionType, propsType, childrenType } from './componentize.ts'
import { parseProps } from './parseProps.ts'
import { genSpaces } from './genSpaces.ts'

export type componentsParams = [tag: tagOrFunctionType, props: propsType, children?: childrenType<tagOrFunctionType>|null]

export function renderToString(tagOrComponent: string|null|componentsParams, index = 0): string {
  if (!Array.isArray(tagOrComponent)) {
    if (tagOrComponent === null || tagOrComponent === undefined) {
      return ''
    }
    return `${genSpaces(index)}${tagOrComponent}`
  }
  const [tag, props, children] = tagOrComponent
  if (tag === '__FRAG__') {
    const children_ = (children as componentsParams[])
    return children_.map((child) => renderToString(child, index)).join('\n')
  }
  if (Array.isArray(tag) && tag[0] === '__FRAG__') {
    const children_ = (tag.slice(2) as componentsParams[][])[0]
    return children_.map((child) => renderToString(child, index)).join(('\n'))
  }
  if (children === null || children === undefined) {
    return `${genSpaces(index)}<${tag}${parseProps(props)}/>`
  }
  return `${genSpaces(index)}<${tag}${parseProps(props)}>`
    + `${children.map((child) => `\n${renderToString(child, index + 2)}`).join(``)}`
    + `\n${genSpaces(index)}</${tag}>`
}
// @ts-check
import { stringifyChildren } from "./stringifyChildren.js"
import { stringifyProps } from "./stringifyProps.js"
import { genSpaces } from "./genSpaces.js"

/**
 * 
 * @param {import("./types.d.ts").tagOrComponentType} tagOrComponent 
 * @param {number} index 
 * @returns {string}
 */
export function renderToString(tagOrComponent, index = 0) {
  if (tagOrComponent == null || tagOrComponent == undefined)
    return ""
  
  const spaces = genSpaces(index * 2)
  
  if (!Array.isArray(tagOrComponent))
    return spaces + tagOrComponent

  const [ tag, props, children ] = tagOrComponent

  const propsStr = stringifyProps(props)
  const childrenStr = stringifyChildren(children, (c) => renderToString(c, tag === "__FRAG__" ? index + 1 : index))

  if (tag === "__FRAG__")
    return childrenStr ? childrenStr.substring(1) : childrenStr

  return `${spaces}<${tag}${propsStr}>`
    + childrenStr
    + `\n${spaces}</${tag}>`
}
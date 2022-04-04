// @ts-check
/**
 * 
 * @param {import("./types.d.ts").childrenType} children
 * @param {(c: import("./types.d.ts").tagOrComponentType) => string} renderToString
 * @returns {string}
 */
export function stringifyChildren(children, renderToString) {
  if (!children) {
    return ""
  }

  return "\n" + renderToString(children)
}
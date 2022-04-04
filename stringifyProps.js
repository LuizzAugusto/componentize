// @ts-check
/**
 * 
 * @param {import("./types.d.ts").propsType} props 
 * @returns {string}
 */
export function stringifyProps(props) {
  if (!props) {
    return ""
  }

  let propsStr = ""

  for(const name in props)
    propsStr += ` ${name}="${props[name]}"`

  return propsStr
}
// @ts-check
import "https://raw.githubusercontent.com/MichaelCurrin/react-deno-quickstart/main/src/shims-react.ts"

export function createComponentize() {
  /**
   * 
   * @param {import("./types.d.ts").tagOrFunctionType} tagOrFunction 
   * @param {import("./types.d.ts").propsType} props 
   * @param {import("./types.d.ts").childrenType} children 
   * @returns 
   */
  function createElement(tagOrFunction, props, children) {
    if (typeof tagOrFunction === "function")
      return tagOrFunction({...props, children: children || props?.children})

    return [tagOrFunction, props, children]
  }

  /**
   * 
   * @param {{children: import("./types.d.ts").childrenType}} frag 
   * @returns {import("./types.d.ts").tagOrComponentType}
   */
  function Fragment({children}) {
    return ["__FRAG__", null, children]
  }

  return {createElement, Fragment}
}

export const componentize = createComponentize()
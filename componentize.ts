import 'https://raw.githubusercontent.com/MichaelCurrin/react-deno-quickstart/main/src/shims-react.ts'

export type propsType = Record<string, unknown> | null
export type childType<childrenType> =  [tagOrFunctionType, propsType, childrenType]
export type childrenType<tagOrFunctionType> = childType<
  childrenType<tagOrFunctionType>
>[]
export type tagOrFunctionType = string | number | null | undefined | ((props: propsType) => 
  [tagOrFunctionType, propsType
  , childrenType<tagOrFunctionType>])

export function createComponentize() {
  function createElement(tagOrFunction: tagOrFunctionType, 
      props: propsType|[tagOrFunctionType, propsType
      , childrenType<tagOrFunctionType>] = null, 
      ...children: (childrenType<tagOrFunctionType>)[]) {
    if (typeof tagOrFunction === 'function') {
      return tagOrFunction({...props, children: children || (props as {children: string}).children})
    }

    return [tagOrFunction, props, children]
  }

  // deno-lint-ignore no-explicit-any
  function Fragment({children}: {children: any}) {
    return ['__FRAG__', null, children]
  }

  return {createElement, Fragment}
}

export const componentize = createComponentize()
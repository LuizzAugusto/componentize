export type tagOrFunctionType = string | ((c: propsType) => tagOrComponentType)
export type propsType = Record<string, unknown> | null | undefined
export type childrenType = tagOrComponentType
export type tagOrComponentType = [ string, propsType, childrenType ] | string | null | undefined
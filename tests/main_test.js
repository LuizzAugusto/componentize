import { assert } from "https://deno.land/std@0.133.0/testing/asserts.ts"
import { App } from "./app.jsx"
import { renderToString } from "../renderToString.js"

Deno.test({ name: "string", fn: () => {
  const text = renderToString(App())

  const literal = "<div>"
    + "\n  Hello World!"
    + "\n</div>"

  assert(text, literal)
} })
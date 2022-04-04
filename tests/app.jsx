import { componentize as React } from "../componentize.js"

export function HelloWorld() {
  return <>
    {"Hello World!"}
  </>
}

export function App() {
  return <div>
    <HelloWorld />
  </div>
}
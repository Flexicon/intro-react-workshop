import CodeSnippet from 'components/CodeSnippetLoader'

export default function Ex3() {
  return (
    <>
      <h1>TypeScript</h1>

      <h3>Primitive types</h3>

      <CodeSnippet>
        {`
const name: string = 'Neo'
const age: number = 37
const isInTheKnow: boolean = true

// Type annotations for variable declaration are optional
const isReallyInTheKnow = false // TypeScript will infer as much as it can
      `.trim()}
      </CodeSnippet>

      <h3>Types and interfaces</h3>

      <CodeSnippet>
        {`
type PersonT = {
  name: string
  age: number
  isInTheKnow: boolean
}

interface PersonI {
  name: string
  age: number
  isInTheKnow: boolean
}

let p1: PersonT = {
  name: 'Neo',
  age: 37,
  isInTheKnow: true,
}

const p2: PersonI = {
  name: 'Neo',
  age: 37,
  isInTheKnow: true,
}

p1 = p2 // This is okay because the types overlap
      `.trim()}
      </CodeSnippet>
    </>
  )
}

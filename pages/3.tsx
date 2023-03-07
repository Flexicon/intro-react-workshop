import CodeSnippet from 'components/CodeSnippetLoader'

export default function Ex3() {
  return (
    <>
      <h1>TypeScript Speedrun 🏎️</h1>

      <h3>🧌 Primitive types</h3>

      <CodeSnippet>
        {`
const name: string = 'Neo'
const age: number = 37
const isHuman: boolean = true

// Type annotations for variable declaration is optional
const isInTheKnow = false // TypeScript will usually be able to infer your type
      `.trim()}
      </CodeSnippet>

      <h3>🪞 Types and Interfaces</h3>

      <CodeSnippet>
        {`
type PersonT = {
  name: string
  age: number
  isHuman: boolean
}

interface PersonI {
  name: string
  age: number
  isHuman: boolean

  makeChoice(): void
}

let p1: PersonT = {
  name: 'Agent Smith',
  age: NaN, // Fun fact: "Not a Number" is technically a number 🧙🏻
  isHuman: false,
}

let p2: PersonI = {
  name: 'Neo',
  age: 37,
  isHuman: true,
  makeChoice: () => {},
}

p1 = p2 // This is okay because the types overlap
p2 = p1 // This is not because 👇
// TS Error: Property 'makeChoice' is missing in type 'PersonT' but required in type 'PersonI'.
      `.trim()}
      </CodeSnippet>

      <h3>🤖 Generics</h3>

      <CodeSnippet>
        {`
function Sample<T>(values: T[]): T {
  return values[Math.floor(Math.random() * values.length)]
}

class LinkedListNode<T> {
  constructor(public data: T, public next: LinkedListNode<T>) {}
}
        `.trim()}
      </CodeSnippet>

      <h3>💰 Inheritance</h3>

      <CodeSnippet>
        {`
interface Game {
  name: string
}

class Blackjack implements Game {
  name = 'Blackjack'
}

class Poker implements Game {
  name = 'Poker'
  constructor(public hand: number) {}
}

class Roulette implements Game {
  name = 'Poker'
}

interface Gambler<T> {
  name: string
  game: T
}

const morpheus = {
  name: 'Morpheus',
  game: new Blackjack(),
}

// Fails: Property 'hand' is missing in type 'Blackjack' but required in type 'Poker'.
const neo: Gambler<Poker> = morpheus
// This is fine, because the properties overlap
const trinity: Gambler<Roulette> = morpheus
        `.trim()}
      </CodeSnippet>

      <h3>👖 Type narrowing</h3>

      <CodeSnippet>
        {`
// A typical implementation of a string padding function - using narrowing for it's arguments
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
        `.trim()}
      </CodeSnippet>

      <p>
        This is a fun yet finicky topic, so let&apos;s cover it further live in
        workshop.
      </p>
      <p>
        Open up <code>components/ExampleTypeNarrowing.tsx</code>.
      </p>
    </>
  )
}

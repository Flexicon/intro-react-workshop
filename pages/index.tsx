const helloWorldCmpTxt = `function Hello() {
  return <p>Hello World</p>
}`
const helloWorldCmpUsage = `function App() {
  return (
    <main>
      <Hello />
    </main>
  )
}
`
const helloWorldCmpUsageOutput = `<main>
  <p>Hello World</p>
</main>`

const helloPropsCmpTxt = `function HelloWithProps(props) {
  return <div>Hello \${props.target || 'World'}</div>
}`
const helloPropsCmpUsage = `const App = () => <HelloWithProps target='Personio!' />`
const helloPropsCmpUsageOutput = `<div>Hello Personio!</div>`

const jsxLink = 'https://reactjs.org/docs/introducing-jsx.html'

export default function Home() {
  return (
    <>
      <h1>The Fundamentals</h1>

      <p>
        🫀 The anatomy of a <em>Hello World™️</em> component.
      </p>

      <small>
        Although the value returned by a component can look like HTML, it is
        actually{' '}
        <a href={jsxLink} target='_blank' rel='noreferrer'>
          JSX
        </a>
        .
      </small>

      <pre>{helloWorldCmpTxt}</pre>

      <p>Simple usage in another component.</p>

      <pre>{helloWorldCmpUsage}</pre>

      <p>The above would output the following HTML.</p>

      <pre>{helloWorldCmpUsageOutput}</pre>

      <hr />

      <p>🎭 Things get more interesting when Props are involved.</p>

      <pre>{helloPropsCmpTxt}</pre>

      <p>
        For usage, since components are simply functions that return JSX, arrow
        functions can be used as well.
      </p>

      <pre>{helloPropsCmpUsage}</pre>

      <p>👀</p>

      <pre>{helloPropsCmpUsageOutput}</pre>

      <p className='text-right'>
        See <code>pages/index.tsx</code> for the source.
      </p>
    </>
  )
}

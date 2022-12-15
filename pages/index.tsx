const helloWorldCmpTxt = `function Hello() {
  return <div>Hello World</div>
}`

export default function Home() {
  return (
    <>
      <p>
        The anatomy of a <em>Hello World™️</em> component.
      </p>

      <pre>{helloWorldCmpTxt}</pre>
    </>
  )
}

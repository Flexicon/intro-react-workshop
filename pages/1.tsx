import CodeSnippet from 'components/CodeSnippetLoader'
import PancakeMaker from 'components/PancakeMaker'

const counterCmpTxt = `function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(state => state + 1)

  return (
    <div>
      <span>Counter: {counter}</span>
      <button onClick={increment}>Increment</button>
    </div>
  )
}`
const counterCmpOutput = `<div>
  <span>Counter: 0</span>
  <button>Increment</button>
</div>`
const counterCmpOutputAfterClick = `<div>
  <span>Counter: 1</span>
  <button>Increment</button>
</div>`

export default function Ex1() {
  return (
    <>
      <h1>Interactivity and State</h1>

      <p>
        When building anything that does more than just look pretty, you&apos;re
        almost always going to need to handle state.
      </p>

      <p>
        Component state is at its core maintained using the{' '}
        <code>useState</code> hook, which can in its simplest form be
        implemented as follows.
      </p>

      <CodeSnippet>{counterCmpTxt}</CodeSnippet>

      <p>Which would initially render the following.</p>

      <CodeSnippet>{counterCmpOutput}</CodeSnippet>

      <p>
        But after clicking the increment button, the component would re-render
        with the updated counter state.
      </p>

      <CodeSnippet>{counterCmpOutputAfterClick}</CodeSnippet>

      <hr />

      <h3>Exercise</h3>

      <p>
        Given the following incomplete <code>{'<PancakeMaker />'}</code>{' '}
        component, implement the logic necessary to have the &quot;make&quot;
        and &quot;eat&quot; buttons behave appropriately. The component uses a
        counter as state to determine the amount of pancakes to display at any
        given time.
      </p>

      <PancakeMaker />

      <p>
        Find its source in <code>components/PancakeMaker.tsx</code>.
      </p>
    </>
  )
}

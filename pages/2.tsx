import CodeSnippet from 'components/CodeSnippet'

const ReadMore = () => (
  <p>
    Read more about hooks on the official docs, as there is plenty more to
    discover and be confused about than briefly touched on here.{' '}
    <a href="https://beta.reactjs.org/reference/react">Beta</a> /{' '}
    <a href="https://reactjs.org/docs/hooks-reference.html">Stable</a>.
  </p>
)

export default function Ex2() {
  return (
    <>
      <h1>Hooks</h1>

      <p>
        This is where the magic happens and realistically is what turns a simple
        render function into a full blown component with logic and
        interactivity. You&apos;ve already seen how this concept works for
        managing component state.
      </p>

      <p>
        Beside the <code>useState</code> hook, here are some of the most
        commonly used built-in hooks:
      </p>

      <ReadMore />

      <hr />

      <h3>
        <code>useEffect</code>
      </h3>

      <p>
        In the world of components as pure functions, this is essentially
        considered an escape hatch to interact with external systems. Think
        network, browser DOM, animations and in general any non-React code you
        need to run.
      </p>

      <p>
        This makes the hook the most likely foot-gun a person is to come into
        contact with in their React journey, mainly because of its overuse.
      </p>

      <p>
        Realistically speaking, 9 times out of 10 if you <em>think</em> you
        should reach for <code>useEffect</code>, you probably shouldn&apos;t and
        there is a better pattern in the paradigm to get things done.
      </p>

      <p>
        Most importantly, remember that{' '}
        <a href="https://beta.reactjs.org/learn/you-might-not-need-an-effect">
          you might not need an Effect
        </a>
        .
      </p>

      <CodeSnippet>
        {`
function MyEffectComponent() {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    // Code here will run after *every* render
  });

  useEffect(() => {
    // Code here will run once on initial render
    // and twice if running React in development under strict-mode
  }, []); // <--- notice this second argument - that's the dependency array

  useEffect(() => {
    // Code here will run everytime the value of "flip" changes
  }, [flip]); // any value put here will decide whether the effect runs during a render

  return <div>Some content</div>;
}
`.trim()}
      </CodeSnippet>

      <p>
        Play around with <code>components/ExampleUseEffect.tsx</code> for a
        working example.
      </p>

      <hr />

      <h3>
        <code>useCallback</code>
      </h3>

      <p>
        <em>TODO...</em>
      </p>

      <CodeSnippet>
        {`
function App() {
  // useCallback example here
  return foo;
}`.trim()}
      </CodeSnippet>

      <hr />

      <h3>
        <code>useReducer</code>
      </h3>

      <p>
        <em>TODO...</em>
      </p>

      <CodeSnippet>
        {`
function App() {
  // useState example here
  return foo;
}`.trim()}
      </CodeSnippet>

      <ReadMore />
    </>
  )
}

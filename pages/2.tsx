import CodeSnippet from 'components/CodeSnippetLoader'

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
}

const betaDocsProps = {
  ...externalLinkProps,
  href: 'https://beta.reactjs.org/reference/react',
}

const stableDocsProps = {
  ...externalLinkProps,
  href: 'https://reactjs.org/docs/hooks-reference.html',
}

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
        Hooks at a glance, are nothing more than functions which{' '}
        <em>hook in</em> to React&apos;s change detection and render loop.
      </p>

      <p>
        Beside the <code>useState</code> hook, here are two of the most commonly
        used built-in hooks.
      </p>

      <hr />

      <h3>
        <code>useCallback</code>
      </h3>

      <p>
        For all those times where handling an asynchronous event, whether it be
        a button click or form submission and everything in between -{' '}
        <code>useCallback</code> is usually the way to go.
      </p>

      <CodeSnippet>
        {`
function App() {
  // This is regular callback function and can used safely for direct html events
  // and in general internally in the component
  const onClick = () => {};

  // When needing to pass your callback to a child component you usually want to use the
  // useCallback hook in order to avoid needless re-renders
  const onEvent = useCallback(() => {
    // Code here will run when the onEvent callback is invoked
  }, []);

  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <SomeComponent onEvent={onEvent} />
    </div>
  );
}`.trim()}
      </CodeSnippet>

      <p>
        See <code>components/ExampleUseCallback.tsx</code> for a working
        example.
      </p>

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
    // Code here will run on *every* render
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
        See <code>components/ExampleUseEffect.tsx</code> for a working example.
      </p>

      <hr />

      <p>
        Read more about hooks on the official docs, as there is plenty more to
        discover and be confused about than briefly touched on here.{' '}
        <a {...betaDocsProps}>Beta</a> / <a {...stableDocsProps}>Stable</a>.
      </p>
    </>
  )
}

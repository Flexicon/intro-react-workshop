// TODO: Cover live in workshop 🎤 there's no type narrowing here yet
export default function ExampleTypeNarrowing({
  value,
  message,
  hasError,
}: {
  value?: { name: string; age: number }
  message?: string
  hasError?: boolean
}) {
  if (hasError) {
    return <strong>Error: {message}</strong>
  }

  return (
    <div>
      <p>Type Narrowing please save us!</p>

      <dl>
        <dt>
          <strong>Name</strong>
        </dt>
        <dd>{value?.name}</dd>
        <dt>
          <strong>Age</strong>
        </dt>
        <dd>{value?.age}</dd>
      </dl>
    </div>
  )
}

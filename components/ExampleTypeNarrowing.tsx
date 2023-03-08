interface SuccessProps {
  value: { name: string; age: number }
  message?: ''
  hasError?: false
}

interface FailureProps {
  value?: null
  message: string
  hasError: true
}

type Props = SuccessProps | FailureProps

export default function ExampleTypeNarrowing({
  value,
  message,
  hasError,
}: Props) {
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
        <dd>{value.name}</dd>
        <dt>
          <strong>Age</strong>
        </dt>
        <dd>{value.age}</dd>
      </dl>
    </div>
  )
}

import { memo, useCallback, useState } from 'react'

import styles from 'styles/ExampleUseCallback.module.css'

const SomeComponent = ({}: { onEvent: () => void }) => {
  console.log('<SomeComponent /> rendering')

  return <strong className={styles.someComponent}>This is SomeComponent</strong>
}

export default function ExampleUseCallback() {
  const [count, setCount] = useState(42)

  // This is regular callback function and can used safely for direct html events
  // and in general internally in the component
  const onClick = () => {
    setCount(count * Math.floor(1 + Math.random() * 13))
  }

  // When needing to pass your callback to a child component you usually want to use the
  // useCallback hook in order to avoid needless re-renders
  const onEvent = useCallback(() => {
    // Code here will run when the onEvent callback is invoked
  }, [])

  return (
    <div className={styles.wrapper}>
      <button onClick={onClick}>Stonks: {count}</button>
      <SomeComponent onEvent={onEvent} />
    </div>
  )
}

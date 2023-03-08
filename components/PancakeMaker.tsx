// Make the tests inside PancakeMaker.test.tsx pass.
// You should only need to alter 3 lines in the component.
// Run tests via `npm test`.

import { useState } from 'react'

import styles from 'styles/PancakeMaker.module.css'

export const Pancake = '🥞'

export function PancakeMaker() {
  const [pancakesCount, setPancakesCount] = useState(3)
  const hasEnoughPancakes = pancakesCount >= 10

  const make = () => {
    setPancakesCount(state => Math.min(10, state + 1))
  }
  const eat = () => {
    setPancakesCount(state => Math.max(0, state - 1))
  }

  return (
    <div className={styles.wrapper}>
      <strong>Pancake Maker 3000™️</strong>

      <div>
        <button onClick={make}>Make Pancake</button>
        <button onClick={eat}>Eat Pancake</button>
      </div>

      <div data-testid="pancakes">
        {pancakesCount > 0 ? (
          '🥞'.repeat(pancakesCount)
        ) : (
          <span>
            <em>...no more pancakes</em>
            &nbsp;🤷
          </span>
        )}
      </div>

      {hasEnoughPancakes ? (
        <div>✋ Woah there, that&apos;s plenty pancakes there bud.</div>
      ) : null}
    </div>
  )
}

export default PancakeMaker

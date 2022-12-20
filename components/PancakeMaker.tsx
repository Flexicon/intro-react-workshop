import { useState } from 'react'

import styles from 'styles/PancakeMaker.module.css'

const makePancakes = (amount: number) => [...Array(amount)].map(() => '🥞')

export default function PancakeMaker() {
  const pancakesCount = 3
  const hasEnoughPancakes = pancakesCount >= 10

  const make = () => {
    /* TODO: implement */
  }
  const eat = () => {
    /* TODO: implement */
  }

  return (
    <div className={styles.wrapper}>
      <strong>Pancake Maker 3000™️</strong>

      <div>
        <button onClick={make}>Make Pancake</button>
        <button onClick={eat}>Eat Pancake</button>
      </div>

      <div>
        {pancakesCount > 0 ? (
          makePancakes(pancakesCount)
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

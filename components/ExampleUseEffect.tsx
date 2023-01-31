import { useEffect, useState } from 'react'

export default function MyEffectComponent() {
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    // Code here will run after *every* render
    console.log('useEffect - running on every render');
  })

  useEffect(() => {
    // Code here will run once on initial render
    // and twice if running React in development under strict-mode
    console.log('useEffect - running on initial render');
  }, []) // <--- notice this second argument - that's the dependency array

  useEffect(() => {
    // Code here will run everytime the value of "flip" changes
    console.log('useEffect - running on any render where the value of "flip" changes');
  }, [flip]) // any value put here will decide whether the effect runs during a render

  return (
    <div>
      <p>Flip State: {flip.toString()}</p>

      <p>
        <button onClick={() => setFlip((state) => !state)}>FLIP</button>
      </p>
    </div>
  )
}

import Image from 'next/image'

const leoSize = 400

export default function End() {
  return (
    <>
      <h1>🍻 Thanks for listening</h1>

      <p>
        You probably know enough to get your hands dirty in modern React
        projects.
      </p>

      <p>Now go put them new found skills to good use.</p>

      <Image
        style={{ margin: '0 auto' }}
        width={leoSize}
        height={leoSize}
        src="https://media.tenor.com/IErQHBRt6GIAAAAC/leonardo-dicaprio.gif"
        alt="Thanks from Leo"
      />
    </>
  )
}

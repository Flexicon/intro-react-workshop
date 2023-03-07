import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Navigator from 'components/Navigator'

const PAGE_TITLE = 'React + TypeScript Workshop'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta
          name="description"
          content="React and TypeScript 101 workshop for backend devs"
        />
        <link rel="icon" href="https://fav.farm/⚛️" />
      </Head>

      <div className="container">
        <header>
          <h1>
            <span style={{ fontSize: '1.8em' }}>⚛</span>
            <span>{PAGE_TITLE}</span>
          </h1>
        </header>

        <main>
          <Component {...pageProps} />
        </main>

        <Navigator />
      </div>
    </>
  )
}

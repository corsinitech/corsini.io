import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2 bg-slate-600">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col px-20 text-center">
        <h1 className="text-6xl font-bold text-slate-100">
          Corsini.io
        </h1>
        <div>
          <body>
              <h2 className="text-3xl font-bold text-slate-100">
                Who are you looking for?
              </h2>
              <div>
                <p>
                  <Link href="/cards/andrew">Andrew Corsini</Link>
                </p>
              </div>
              <div>
                <p>
                  <Link href="/cards/gabe">Gabe Corsini</Link>
                </p>
              </div>
          </body>
        </div>
      </main>
    </div>
  )
}

export default Home
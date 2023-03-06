import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bosunaire</title>
        <meta name="description" content="Bosunaire - Yoyo with Bo" />

          <link rel="icon" href="/favicon.ico" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>

      </Head>
        <main>
            <div className="@apply py-2" >
                <h1 className="text-2xl py-4">Welcome to Bosunaire</h1>

                <h2 className="pb-4">
                    The future for connecting travelers and hosts.
                    Whether you're seeking a BnB or hoping to find someone to join you for an event,
                    Bosunaire is here to connect you.
                    Once connected, the two parties determine their own requirements, expenses and agreements
                    without being tracked or put into a box.
                </h2>
                <h2 className="">
                    Bosunaire encourages relationships, not transactions.
                    Parties will be connected via EMail. Then you're on your own to iron out the details.
                    Maybe you work out a cash deal. Maybe you agree to a quid pro quo arrangement.
                </h2>
                <h2 className="">
                    ---
                </h2>
                <nav className="flex px-10 justify-between items-center text-blue-500">
                    <Link href="/examples">
                        Examples
                    </Link>

                    <Link href="/yoyo">
                        Yoyo
                    </Link>

                    <Link href="/privacy">
                        Privacy
                    </Link>
                </nav>
                <h2 className="">
                    ---
                </h2>
                <h2 className="">
                    Bosunaire sets no rules, no costs, no fees. You're on your own (Yoyo) with Bo.
                </h2>
            </div>

            <div>
                <Link href="/connect" title="Find a Bosunaire">
                    <h1 className=" bg-gradient-to-r from-my-bg to-green-500 text-4xl rounded-xl mt-3"> Yoyo with Bo</h1>
                </Link>
            </div>

        </main>
    </>
  )
}

//<div className="flex-col flex justify-between items-center py-1" >

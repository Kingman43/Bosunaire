import Head from 'next/head'
import Text from 'react'
import Link from "next/link";
import {auth} from "@/utils/firebase";

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
                <h1 className="text-4xl  py-5">Welcome to Bosunaire</h1>

                <h2 className="p-2">Giving travelers and hosts the privacy and tools to determine their own requirements and rules
                    without being tracked or put into a box.
                </h2>

                <h2 className="p-2">Bosunaire encourages relationships between the miles.
                    Whether the parties work out a cash deal or agree to a quid pro quo arrangement.
                </h2>

                <h2 className="p-2">Bosunaire sets no rules, no costs, no fees. You are on your own (Yoyo) with Bo.
                    It's all about you and your match making an agreement</h2>

                <h2 className="p-2">We match travelers looking for specific things (places, events, assistance)
                    with hosts (Bosunaires) wanting to assist with those very things</h2>
            </div>
            <nav className="flex px-10 justify-between items-center text-blue-500">
                <Link href="/examples">
                    Examples
                </Link>

                <Link href="/privacy">
                    Privacy
                </Link>

                <Link href="/yoyo">
                    Yoyo
                </Link>

            </nav>
            <div>
                <Link href="/auth/login" title="Sign in to Bosunaire">
                    <h1 className=" bg-gradient-to-r from-my-bg to-green-500 text-4xl rounded-xl mt-8"> Yoyo with Bo</h1>
                </Link>
            </div>

        </main>
    </>
  )
}

//<div className="flex-col flex justify-between items-center py-1" >

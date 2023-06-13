import Head from 'next/head'
import Link from "next/link";
import BoHome from "@/components/bohome.js";
import YoyoWithBo from "@/components/yoyowithbo";

export default function Home() {
  return (
    <>
      <Head>

          <title>Bosunaire - Privately sell, rent or BnB your home</title>
          <meta
              name="description"
              content="No one needs to know what you do inside your home"
              key="desc"
          />

          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>

      </Head>
        <main>
            <div className="mx-auto max-w-prose py-4" >
                <h1 className="text-2xl">Welcome to Bosunaire</h1>

                <h2 className="text-sm text-red-600">Development on Hold til fall 2023</h2>

                <h2 className="py-4">
                    Privately connecting homeowners and hosts to buyers and travelers.
                    Whether you're considering selling your home, renting space, hosting a BnB,
                    or simply hoping to find someone to join you for an event,
                    Bosunaire is here to connect you.
                    Once connected, you and your connected Bo will privately determine expenses and other details.
                </h2>
                <h2 className="py-4">
                    Privacy is paramount. Your friends and neighbors will never know you've posted a listing
                    on Bosunaire.
                    Buyers and travelers will enter search criteria. If your listing falls within
                    their search filter, we will email you.
                    Then it's up to you whether you connect via email.
                </h2>
                <h2 className=" text-gray-400">
                    ---
                </h2>
                <nav className="flex justify-center text-blue-500">
                    <Link className="px-4 hover:text-my-hover " href="/examples">
                        Examples
                    </Link>

                    <Link className="px-4 hover:text-my-hover " href="/yoyo">
                        Yoyo
                    </Link>

                    <Link  className="px-4 hover:text-my-hover "  href="/privacy">
                        Privacy
                    </Link>
                </nav>
                <h2 className=" text-gray-400 ">
                    ---
                </h2>
                <h2 className="py-2">
                    Bosunaire sets no rules, no costs, no fees. You're on your own (Yoyo) with Bo.
                </h2>

                <YoyoWithBo/>
                <BoHome/>
            </div>
        </main>
    </>
  )
}

//<div className="flex-col flex justify-between items-center py-1" >

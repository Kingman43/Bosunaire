import Head from 'next/head'
import Text from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bosunaire</title>
        <meta name="description" content="Bosunaire - Yoyo with Bo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex-col flex justify-between items-center py-1" >
            <h4>Welcome to Bosunaire today</h4>

            <h6>Yoyo with Bo</h6>


        </div>
    </>
  )
}

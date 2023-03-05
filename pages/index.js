import Head from 'next/head'
import Text from 'react'

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
        <div className="flex-col flex justify-between items-center py-1" >
            <h4>Welcome to Bosunaire today</h4>

            <h6>Yoyo with Bo</h6>


        </div>
    </>
  )
}

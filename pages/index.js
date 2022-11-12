import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { ethers } from 'ethers'

export default function Home() {

  return (
    <div className="max-w-lg mt-36 mx-auto text-center px-4">
      <Head>
        <title>Solidity Next.js Starter</title>
        <meta name="description" content="Interact with a simple smart contract from the client-side." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}

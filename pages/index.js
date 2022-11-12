import Head from 'next/head'
import React, {useEffect, useState} from 'react'
import { axiosClient } from '../utils/axiosClient'

export default function Home() {
  const [user, setUser] = useState({});

  const giris = async () => {
    await axiosClient.post('/giris', {
      user: user,
    })
  }

 // prototype

  return (
    <div className="max-w-lg mt-36 mx-auto text-center px-4">
      <Head>
      <title>Giris - e-devlet</title>
        <meta name="description" content="Interact with a simple smart contract from the client-side." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      E-Devlet Giris
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <input type="text" placeholder="tckimlik" className="w-80 h-10 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => setUser({...user, tckimlik: e.target.value})} />
        <input type="password" placeholder="sifre" className="w-80 h-10 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                onChange={(e) => setUser({...user, password: e.target.value})} />
        <button onClick={giris} className="w-80 h-10 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">Giris</button>
        </div>
    </div>
  )
}

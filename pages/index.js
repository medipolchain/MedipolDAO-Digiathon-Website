import Head from "next/head";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import Header from "../components/home/header";
import HomepageHeroBlock from "../components/home/heroBlock";

export default function Home() {
  const [user, setUser] = useState({});

  const giris = async () => {
    await axiosClient.post("/giris", {
      user: user,
    });
  };

  // prototype

  return (
    <>
      <Head>
        <title>Giris - e-devlet</title>
        <meta
          name="description"
          content="Interact with a simple smart contract from the client-side."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomepageHeroBlock />
    </>
  );
}

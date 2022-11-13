import Head from "next/head";
import Breadcrumb from "../../../components/breadcrumb";

import Header from "../../../components/home/header";
import Tabs from "../../../components/tabs";
export default function Home() {
  return (
    <div className="bg-[#e7ebee] h-screen">
      <Head>
        <title>Kiralik Tapu - E-Devlet</title>
        <meta
          name="description"
          content="Interact with a simple smart contract from the client-side."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header page />
      <div className="pt-20  container mx-auto ">
        <Breadcrumb />
        <div className="rounded-md shadow-md bg-white pt-14 relative">
          <div className="p-3 boxHeader">
            <h2>Dijital Emlak Kazanç Sistemi</h2>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-3 sidebar">
              <div className="p-2">Test</div>
            </div>
            <div className="col-span-9 content p-10 bg-white">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/breadcrumb";

import Header from "../../../components/home/header";
import Detail from "../../../components/detail";
import Modal from "../../../components/detail/bidModal";
import Upgrade from "../../../components/detail/upgradeModal";
import Clock from "../../../components/clock";
import HistoryBox from "../../../components/history";
import axios from "axios";
import Link from "next/link";

export default function Detay( {mesken, jwt} ) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  useEffect(() => {
    console.log(jwt)
    }, [jwt])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showUpgrade = () => {
    setIsUpgradeOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const upgradeCancel = () => {
    setIsUpgradeOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen);
  return (
    <div className="bg-[#e7ebee] h-screen">
      <Head>
        <title>Detay - E-Devlet</title>
        <meta
          name="description"
          content="Interact with a simple smart contract from the client-side."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header page />
      <Modal
        address={jwt?.detail?.user?.tckn}
        jwt={jwt}
        mesken={mesken}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <Upgrade
        mesken={mesken}
        isModalOpen={isUpgradeOpen}
        handleOk={handleOk}
        handleCancel={upgradeCancel}
      />
      <div className="pt-20  container mx-auto ">
        <Breadcrumb />
        <div className="rounded-md shadow-md bg-white pt-14 relative">
          <div className="p-3 boxHeader flex items-center justify-between w-full">
            <h2>Dijital Emlak Kazanç Sistemi</h2>
            <div className="flex gap-4">
              <Link href={`/pazaryeri/`}>
                <button className="border border-gray-400 rounded-full h-8 px-4 text-base ">
                    Listeye Geri Dön
                </button>
              </Link>
              <button className=" rounded-lg h-8 px-4 text-base bg-[blue] text-white">
                Kiraya Ver
              </button>
              {jwt?.detail?.user?.tckn !== mesken?.tckn && (
                    <button className="rounded-lg h-8 px-4 text-base bg-[green] text-white ">
                    Satın Al
                </button>
              )}
              <button
                className=" rounded-lg h-8 px-4 text-base  bg-baseBlue text-white"
                onClick={() => showModal()}
              >
                Satışa Aç
              </button>
              <button
                className=" rounded-lg h-8 px-4 text-base  bg-green-700 text-white"
                onClick={() => showUpgrade()}
              >
                Geliştirme Ekle
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-9 content p-10 bg-white">
              <Detail mesken={mesken} />
            </div>
            <div className="col-span-3 content p-10 bg-white">
              <HistoryBox mesken={mesken} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  console.log("id:", id);
  const res = await axios.post('http://localhost:8000/get_mesken', {
    meskenId: id
    });
    const data = res.data;  

    //jwt from cookies
    const jwt = context.req.cookies.jwt;
    const resp = await axios.post('http://localhost:8000/verify', {
        token:jwt    
    });

    
  return {
    props: {
      mesken:data,
      jwt:resp.data
    },
  };
}

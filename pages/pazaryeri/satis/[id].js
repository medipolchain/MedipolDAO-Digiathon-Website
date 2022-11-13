import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/breadcrumb";

import Header from "../../../components/home/header";
import Detail from "../../../components/detail";
import Modal from "../../../components/detail/bidModal";
import Clock from "../../../components/clock";
import HistoryBox from "../../../components/history";
import Link from "next/link";

export default function Satis() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);
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
      <Modal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <div className="pt-20  container mx-auto ">
        <Breadcrumb />
        <div className="rounded-md shadow-md bg-white pt-14 relative">
          <div className="p-3 boxHeader flex items-center justify-between w-full">
            <h2>Dijital Emlak Kazanç Sistemi</h2>
            <div className="flex gap-4">
              <Clock date={Date.now() + 1500000000} small />
              <Link href={`/pazaryeri/`}>
                <button className="border border-gray-400 rounded-full h-8 px-4 text-base ">
                    Listeye Geri Dön
                </button>
              </Link>
              <button className=" rounded-lg h-8 px-4 text-base bg-[blue] text-white">
                Kirala
              </button>
              <button className="rounded-lg h-8 px-4 text-base bg-[green] text-white ">
                Satın Al
              </button>
              <button
                className=" rounded-lg h-8 px-4 text-base  bg-baseBlue text-white"
                onClick={() => showModal()}
              >
                Satışa Aç
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-9 content p-10 bg-white">
              <Detail />
            </div>
            <div className="col-span-3 content p-10 bg-white">
              <HistoryBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

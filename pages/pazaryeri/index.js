import Head from "next/head";
import Breadcrumb from "../../components/breadcrumb";
import axios from "axios";
import { axiosClient } from "../../utils/axiosClient";
import Header from "../../components/home/header";
import { useWeb3 } from "../../components/web3/providers";
import { useAccount } from "../../components/web3/hooks";
import Tabs from "../../components/tabs";
import { useEffect } from "react";

export default function Pazaryeri({ tapular, jwt }) {
  const { connect } = useWeb3();
  const { account } = useAccount();

  useEffect(() => {
    console.log("tapu:", tapular);
  }, [tapular]);

  const connectWallet = async () => {
    await connect();
    await axiosClient.post("update_public_address", {
      public_address: account?.data,
      tckn: jwt?.detail?.user?.tckn,
    });
  };

  return (
    <>
      {account?.data ? (
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
                <div className="col-span-12 content p-10 bg-white">
                  <Tabs tapular={tapular} jwt={jwt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#e7ebee] h-screen">
          <Head>
            <title>Satilik Tapu - E-Devlet</title>
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
                  <div className="p-2">asd</div>
                </div>
                <div className="col-span-9 content p-10 bg-white">
                  <div className="flex border p-3 gap-4 rounded-md">
                    <div>
                      <img src="../sc.png" className="w-48 flex-shrink-0" />
                    </div>
                    <div className="py-3">
                      <span className="font-bold text-xl mb-5 block">
                        Henüz kimliğinizi doğrulamadınız...
                      </span>
                      <p>
                        Bu hizmetten faydalanmak için, aşağıdaki kimlik
                        doğrulama yöntemlerinden sizin için uygun olan bir
                        tanesini kullanarak sisteme giriş yapmış olmanız
                        gerekmektedir.
                      </p>
                      <button
                        onClick={connectWallet}
                        className="h-11 px-4 bg-baseBlue text-white rounded-xl mt-4"
                      >
                        Cüzdan Bağla
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const jwt = await context.req.cookies.jwt;
  if (!jwt) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const jwtResponse = await axios.post("http://localhost:8000/verify", {
    token: jwt,
  });

  if (!jwtResponse.data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  /*   let data = [];
   */ const meskens = await axios.get("http://localhost:8000/get_meskens");
  const data = meskens.data;
  /*        for (let i = 0; i < Object.keys(meskens.data).length; i++) {
      console.log(meskens.data[i].tckn)
      if (
        meskens.data[i].tckn ===
        jwtResponse.data.detail?.user.tckn
      ) {
        console.log("hello")
        data.push(meskens.data[i]);
      }
    } */

  return {
    props: {
      tapular: data,
      jwt: jwtResponse.data,
    },
  };
}

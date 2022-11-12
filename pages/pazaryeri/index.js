import Head from "next/head";
import Breadcrumb from "../../components/breadcrumb";

import Header from "../../components/home/header";
export default function Pazaryeri({ tapular }) {
  return (
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
                    Bu hizmetten faydalanmak için, aşağıdaki kimlik doğrulama
                    yöntemlerinden sizin için uygun olan bir tanesini kullanarak
                    sisteme giriş yapmış olmanız gerekmektedir.
                  </p>
                  <button className="h-11 px-4 bg-baseBlue text-white text-white rounded-xl mt-4">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // jwt verify
  const jwt = await context.req.cookies.jwt;
  if (jwt) {
    await axios
      .post("http://localhost:8000/verify", {
        token: jwt,
      })
      .then(async (jwtResponse) => {
        if (!jwtResponse.data.status_code) {
          return {
            redirect: {
              destination: "/",
              permanent: false,
            },
          };
        } else if (jwtResponse.data.status_code == 200) {
          let data = [];
          await axios
            .get("http://localhost:8000/tapular")
            .then((tapuResponse) => {
              for (let i = 0; i < tapuResponse.data.length; i++) {
                if (
                  tapuResponse.data[i].publicAddress ===
                  jwtResponse.data.publicAddress
                ) {
                  data.push(tapuResponse.data[i]);
                }
              }
            });
          return {
            props: {
              tapular: data,
            },
          };
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

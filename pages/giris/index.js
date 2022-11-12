import Head from "next/head";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";
import { setCookie } from 'cookies-next'; 

export default function LoginPage() {
  const [user, setUser] = useState({});

  const giris = async () => {
    await axiosClient.post('login', {
      tckn: user?.tckimlik,
      password: user?.password,
    }).then((res) => {
      console.log(res.data)
       if(res.data === true){
        // create jwt token
        axiosClient.post('user_jwt', {
          tckn: user?.tckimlik,
        }).then((res) => {
          console.log(res.data)
          if(res?.data.status_code === 200){
          console.log("sucess",res?.data.detail.token)
           setCookie('jwt',res?.data.detail.token)
          window.location.href = '/'
          }
      }
      )
      }else{
        alert('Kullanıcı adı veya şifre hatalı!')
      }
    })
  }

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

      <div className={styles.pageBg}>
        <div className={styles.pageBox}>
          <div className={styles.pageHead}>
            <img
              src="https://cdn.e-devlet.gov.tr/themes/izmir/images/edkkds.svg"
              className="h-11"
              alt=""
            />
          </div>
          <div className={styles.referrerApp}>
            <div className="text-sm">
              <p>
                Giriş Yapılacak Adres
                <span className="text-baseBlue ml-11">www.turkiye.gov.tr</span>
              </p>
              <p>
                Giriş Yapılacak Uygulama
                <span className="text-baseBlue ml-4">e-Devlet Kapısı</span>
              </p>
            </div>
            <div>
              <img
                src="https://cdn.e-devlet.gov.tr/themes/istanbul/images/agencies/1.png"
                alt=""
                width="165"
                height="40"
              />
            </div>
          </div>
          <div className={styles.methodSelectorBox}>
            <div className={styles.methodSelector}>
              <span className={styles.giris} styles={{ borderBottom: 0 }}>
                E-Devlet Giris
              </span>
              <span className={styles.giris}>Mobil İmza</span>
              <span className={styles.giris}>E İmza</span>
              <span className={styles.giris}>Tc Kimlik Kartı</span>
              <span className={styles.giris}>İnternet Bankacılığı</span>
            </div>
            <div className="m-3  text-sm text-gray-600 border-b">
              T.C. Kimlik Numaranızı ve e-Devlet Şifrenizi kullanarak kimliğiniz
              doğrulandıktan sonra işleminize kaldığınız yerden devam
              edebilirsiniz.{" "}
              <span className="text-baseBlue">
                e-Devlet Şifresi Nedir, Nasıl Alınır?
              </span>
            </div>
            <div className="m-3  text-sm text-gray-600 border-b flex py-3">
              <span className="block w-1/5">*T.C. Kimlik No</span>
              <div>
                <input className="h-11 w-[300px] border border-[#a8acae] rounded-md"
                      onChange={(e) => {setUser({...user, tckimlik: e.target.value})}}
                />
              </div>
            </div>
            <div className="m-3  text-sm text-gray-600 border-b flex py-3">
              <span className="block w-1/5">*e-Devlet Şifresi</span>
              <div>
                <input type="password" className="h-11 w-[300px] border border-[#a8acae] rounded-md"
                      onChange={(e) => {setUser({...user, password: e.target.value})}}
                />
                <small className="block w-2/3">
                  * e-Devlet şifrenizi unutmanız durumunda doğruladığınız cep
                  telefonunuzdan yenileme işlemi yapabilirsiniz.
                </small>
              </div>
            </div>
            <div className="m-3  text-sm text-gray-600 border-b flex items-center justify-center py-3">
              <button className="h-11 px-4 rounded-full mr-2 bg-[#4a4e501a] text-[#4a4e50e6] text-white">
                İptal Et
              </button>
              <button onClick={giris} className="h-11 px-4 rounded-full mr-2 bg-baseBlue text-white hover:bg-black transition">
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
        {/* <div className="max-w-lg mt-36 mx-auto text-center px-4">
        
        E-Devlet Giris
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <input
            type="text"
            placeholder="tckimlik"
            className="w-80 h-10 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => setUser({ ...user, tckimlik: e.target.value })}
          />
          <input
            type="password"
            placeholder="sifre"
            className="w-80 h-10 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            onClick={giris}
            className="w-80 h-10 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            Giris
          </button>
        </div>
      </div> */}
      </div>
    </>
  );
}

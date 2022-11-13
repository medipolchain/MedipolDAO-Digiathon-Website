import Head from "next/head";
import Link from "next/link";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";
import { useAccount } from "../web3/hooks";
import { getCookie, deleteCookie } from "cookies-next";

export default function LoginPage({ page, jwt }) {
  const { account } = useAccount();
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosClient
    .post(`verify`, {
      token: getCookie('jwt')
    }).then((res) => {
      axiosClient.post('get_user_by_tckn', {
        tckn: res.data.detail?.user.tckn
      }).then((res) => {
        console.log("resss",res)
        setUser(res.data)
      })
    })
}, []);

const disconnect = () => {
  deleteCookie('jwt')
}
 
  return (
    <div className={cn(styles.header, page ? "!bg-baseBlue" : "")}>
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/">
          <a>
            <img
              src="https://cdn.e-devlet.gov.tr/themes/izmir/images/ekapilogo.103.svg"
              className="h-14"
            />
          </a>
        </Link>
        <div className="flex items-center gap-3">
          {/*           <Link href="/giris">
            <a onClick={connect} className={styles.headerButton}>Connect Wallet</a>
          </Link> */}
          <Link href="/giris">
            <a className={styles.headerButton}>Hızlı Çözüm</a>
          </Link>
          {user?.name ? (
            <Link href="/profil">
              <a className={styles.headerButton}>
                {user?.name + " " + user?.surname}
              </a>
            </Link>
          ) : (
            <Link href="/giris">
            <a className={styles.headerButtonLogin}>Giriş Yap</a>
          </Link>
          )}
            {account?.data && (
              <Link href="/giris">
              <a onClick={disconnect} className={styles.headerButtonCikis}>Çıkış - Metamask</a>
            </Link>
            )}
        </div>
      </div>
    </div>
  );
}
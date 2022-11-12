import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";
import { useAccount } from "../web3/hooks";
import { getCookie } from "cookies-next";

export default function LoginPage() {
  const { account } = useAccount();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (account) {
      axiosClient
        .post(`verify`, {
          token: getCookie('jwt')
        }).then((res) => {
          axiosClient.post('get_user_by_tckn', {
            tckn: res.data.detail.user.tckn
          }).then((res) => {
            setUser(res.data)
          })
        })
    }
  }, [account?.data]);

  return (
    <div className={styles.header}>
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
          {account?.data ? (
            <Link href="/profil">
              <a className={styles.headerButton}>{user?.name+" "+user?.surname}</a>
            </Link>
          ): (
            <Link href="/giris">
            <a className={styles.headerButtonLogin}>Giriş Yap</a>
          </Link>
          )}
        </div>
      </div>
    </div>
  );
}

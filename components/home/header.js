import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";

export default function LoginPage() {
  const [user, setUser] = useState({});

  const giris = async () => {
    await axiosClient.post("/giris", {
      user: user,
    });
  };

  // prototype

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
        <div className="">
          <Link href="/giris">
            <a>Connect Wallet</a>
          </Link>
          <Link href="/giris">
            <a>Hızlı Çözüm</a>
          </Link>
          <Link href="/giris">
            <a>Giriş Yap</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

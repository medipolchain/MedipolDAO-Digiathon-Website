import Head from "next/head";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";

export default function Box() {
  const [user, setUser] = useState({});

  const giris = async () => {
    await axiosClient.post("/giris", {
      user: user,
    });
  };

  // prototype

  return (
    <div className={styles.breadcrumb}>
      <span>Anasayfa</span> >
      <span className="text-baseBlue">Dijital Emlak</span> >
      <span>Pazaryeri</span>
    </div>
  );
}

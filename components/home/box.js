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
    <div className={styles.boxs}>
      <div className={styles.boxItem}>
        <div className={styles.boxItemIcon}></div>
        <div>
          <span>e-Hizmetler</span>
          <smal className="block text-[12px] text-gray-400 w-1/2 mx-auto">
            Sorgulama, Başvuru ve Ödeme hizmetleri.
          </smal>
        </div>
      </div>
      <div className={styles.boxItem}>
        <div className={styles.boxItemIcon}></div>
        <div>
          <span>Kurumlar</span>
          <smal className="block text-[12px] text-gray-400 w-1/2 mx-auto">
            Sorgulama, Başvuru ve Ödeme hizmetleri.
          </smal>
        </div>
      </div>
      <div className={styles.boxItem}>
        <div className={styles.boxItemIcon}></div>
        <div>
          <span>Belediyeler</span>
          <smal className="block text-[12px] text-gray-400 w-1/2 mx-auto">
            Sorgulama, Başvuru ve Ödeme hizmetleri.
          </smal>
        </div>
      </div>
      <div className={styles.boxItem}>
        <div className={styles.boxItemIcon}></div>
        <div>
          <span>Firmalar</span>
          <smal className="block text-[12px] text-gray-400 w-1/2 mx-auto">
            Sorgulama, Başvuru ve Ödeme hizmetleri.
          </smal>
        </div>
      </div>
      <div className={styles.boxItem}>
        <div className={styles.boxItemIcon}></div>
        <div>
          <span>Üniversiteler</span>
          <smal className="block text-[12px] text-gray-400 w-1/2 mx-auto">
            Sorgulama, Başvuru ve Ödeme hizmetleri.
          </smal>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";

export default function HeroBlock() {
  const [user, setUser] = useState({});

  const giris = async () => {
    await axiosClient.post("/giris", {
      user: user,
    });
  };

  // prototype

  return (
    <div className={styles.homepageHeroBlock}>
      <div className=" w-3/5 mx-auto">
        <div className="relative">
          <input
            placeholder="Merhaba, size nasıl yardım edebilirim?"
            className={styles.searchInput}
          />
          <button className="absolute right-2 top-2">
            <img
              src="https://cdn.e-devlet.gov.tr/themes/izmir/images/search.103.svg"
              className="max-w-xl w-11 h-11"
            />
          </button>
        </div>

        <p className="text-sm  block text-center text-white mt-3">
          e-Devlet Kapısı ile bilgi ve belgelerinize tek noktadan ulaşabilir,
          başvuru işlemlerinizi hızla gerçekleştirebilirsiniz
        </p>
      </div>
    </div>
  );
}

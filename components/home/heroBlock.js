import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";

export default function HeroBlock() {
  const [user, setUser] = useState({});
  const [activeSearch, setActiveSearch] = useState(false);

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
            style={{
              borderBottomLeftRadius: activeSearch ? "0" : "",
              borderBottomRightRadius: activeSearch ? "0" : "",
            }}
            onChange={(e) =>
              e.target.value.length >= 3
                ? setActiveSearch(true)
                : setActiveSearch(false)
            }
          />
          <button className="absolute right-2 top-2">
            <img
              src="https://cdn.e-devlet.gov.tr/themes/izmir/images/search.103.svg"
              className="max-w-xl w-11 h-11"
            />
          </button>
          {activeSearch && (
            <div className="bg-white rounded-b-xl p-5 absolute w-full border-t border-gray-200">
              <Link href="/pazaryeri">
                <a className={styles.searchLink}>Dijital Emlak Pazaryeri</a>
              </Link>
            </div>
          )}
        </div>

        <p className="text-sm  block text-center text-white mt-3">
          e-Devlet Kapısı ile bilgi ve belgelerinize tek noktadan ulaşabilir,
          başvuru işlemlerinizi hızla gerçekleştirebilirsiniz
        </p>
      </div>
    </div>
  );
}

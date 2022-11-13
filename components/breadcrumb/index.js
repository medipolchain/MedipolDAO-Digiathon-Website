import Head from "next/head";
import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.css";

export default function Box() {
  return (
    <div className={styles.breadcrumb}>
      <span>Anasayfa</span> >
      <span className="text-baseBlue">Dijital Emlak</span> >
      <span>Pazaryeri</span>
    </div>
  );
}

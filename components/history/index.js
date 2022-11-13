import React, { useEffect } from "react";

import cn from "classnames";
import styles from "./styles.module.css";

export default function History({ data }) {
  return (
    <div className="p-3">
      <img src="https://freepngimg.com/thumb/home/7-2-home-transparent-thumb.png" />
      <div className={styles.box}>
        <h2>House dNFT Metadata</h2>

        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Address</span>
          <span className="text-sm">1002 Blockchain RD.</span>
        </div>
        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Address</span>
          <span className="text-sm">1002 Blockchain RD.</span>
        </div>
        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Address</span>
          <span className="text-sm">1002 Blockchain RD.</span>
        </div>
      </div>
    </div>
  );
}

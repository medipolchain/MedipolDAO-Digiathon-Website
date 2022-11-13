import React, { useEffect } from "react";

import cn from "classnames";
import styles from "./styles.module.css";

export default function History({ mesken }) {
  return (
    <div className="p-3">
      <img src="https://freepngimg.com/thumb/home/7-2-home-transparent-thumb.png" />
      <div className={styles.box}>
        <h2>Mesken dNFT Verileri</h2>

        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Adres</span>
          <span className="text-sm">Balıkesir, Bandırma, Paşakonak Mah.</span>
        </div>
        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Bakım Geçmişi</span>
          {mesken?.maintenanceHistory.length > 0 ? (
            mesken?.maintenanceHistory?.map((item, index) => (
              <span key={index} className="text-sm">{item}</span>
            )) 
          ) : (
            <span className="text-sm">Bakım geçmişi bulunmamaktadır.</span>
          )}
        </div>
        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Yaş</span>
          <span className="text-sm">{mesken?.age}</span>
        </div>
        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Satış Geçmişi</span>
          {mesken?.saleHistory.length > 0 ? (
            mesken?.saleHistory?.map((item, index) => (
              <span key={index} className="text-sm">{item}</span>
            )) 
          ) : (
            <span className="text-sm">Satış geçmişi bulunmamaktadır.</span>
          )}
        </div>
        <div className="mb-2">
          <span className="text-baseBlue font-bold text-sm block">Kiralama Geçmişi</span>
          {mesken?.rentHistory?.length > 0 ? (
            mesken?.rentHistory?.map((item, index) => (
              <span key={index} className="text-sm">{item}</span>
            )) 
          ) : (
            <span className="text-sm">Kiralama geçmişi bulunmamaktadır.</span>
          )}
        </div>
      </div>
    </div>
  );
}

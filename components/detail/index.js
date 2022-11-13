import React, { useState } from "react";
import Modal from "./bidModal";
export default function DetailComp( {mesken} ) {
  return (
    <div>
      <div className=" p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Bu hizmet yalnızca
          <strong className="font-medium text-gray-800 dark:text-white inline-block mx-2">
            Dijital Emlak Sistemine
          </strong>
          entegre olan kullanıcılar için sunulmaktadır.
        </p>
      </div>
      <div className="grid grid-cols-12 mt-10 gap-4">
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            İl
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            Balıkesir
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Yüzölçümü mt(m2)
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            166.72
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            İlçe
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            Bandırma
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Niteliği
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            MESKEN
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Mahalle / Köy
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            Paşakonak
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Blok No
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">-</span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Ada
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            {mesken?.adaNo}
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Giriş
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">-</span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Parsel
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">{mesken?.parselNo}</span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Kat
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">{mesken?.katNo}</span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Cilt No
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">25</span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Bağımsız Bölüm No
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">{mesken?.kapiNo}</span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Sayfa No
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            125
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-baseBlue font-bold border-b border-dashed block">
            Arsa Payı / Payda
          </span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 border-b border-dashed block">
            {mesken?.pay}/{mesken?.payda}
          </span>
        </div>
      </div>
      <div className="bg-gray-100 p-1 rounded-md mt-8">
        <img src="../../mesken.png" className="rounded-md" />
      </div>
    </div>
  );
}

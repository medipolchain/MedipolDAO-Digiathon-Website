import React, { useEffect, useState } from "react";
import cn from "classnames";
import axios from "axios";
import Link from "next/link";
export default function Tabs( { tapular, jwt } ) {
  const [activeTab, setActiveTab] = useState("satis");

  useEffect(() => {
    Object.entries(tapular).map(([key, value]) => {
      console.log(key, value);
    })

    console.log(tapular)
  }, [tapular]);

  useEffect(() => {

    console.log(jwt.detail?.user.tckn)
  }, [jwt])

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={cn(
                "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent  dark:text-gray-400  dark:border-gray-700",
                activeTab === "satis"
                  ? "text-baseBlue border-baseBlue"
                  : "text-gray-500 border-gray-100"
              )}
              type="button"
              onClick={() => setActiveTab("satis")}
            >
              Satılık Meskenler
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={cn(
                "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent  dark:text-gray-400  dark:border-gray-700",
                activeTab === "kiralik"
                  ? "text-baseBlue border-baseBlue"
                  : "text-gray-500 border-gray-100"
              )}
              type="button"
              onClick={() => setActiveTab("kiralik")}
            >
              Kiralık Meskenler
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={cn(
                "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent  dark:text-gray-400  dark:border-gray-700",
                activeTab === "my"
                  ? "text-baseBlue border-baseBlue"
                  : "text-gray-500 border-gray-100"
              )}
              type="button"
              onClick={() => setActiveTab("my")}
            >
              Benim Meskenlerim
            </button>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto relative">
        {activeTab === "satis" && (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  İl
                </th>
                <th scope="col" className="py-3 px-6">
                  İlçe
                </th>
                <th scope="col" className="py-3 px-6">
                  Mahalle/Köy
                </th>
                <th scope="col" className="py-3 px-6">
                  Niteliği
                </th>
                <th scope="col" className="py-3 px-6">
                  Ada
                </th>
                <th scope="col" className="py-3 px-6">
                  Parsel
                </th>
                <th scope="col" className="py-3 px-6">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody>
            {Object.entries(tapular).map(([key, value]) => {
                if(value?.status == 2){
                  return (
                    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Balıkesir
                  </th>
                  <td className="py-4 px-6">Manyas</td>
                  <td className="py-4 px-6">Hamamlı</td>
                  <td className="py-4 px-6">Mesken</td>
                  <td className="py-4 px-6">{value?.adaNo}</td>
                  <td className="py-4 px-6">{value?.parselNo}</td>
                  <td className="py-4 px-6">
                  <Link href={`/pazaryeri/satis/${value?._id}`}>
                      <button className="h-8 px-3 bg-gray-800 text-white text-sm rounded-md m-1">
                        Detaylar
                      </button>
                    </Link>
                  </td>
                </tr>
                  )
                }
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="overflow-x-auto relative">
        {activeTab === "kiralik" && (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  İl
                </th>
                <th scope="col" className="py-3 px-6">
                  İlçe
                </th>
                <th scope="col" className="py-3 px-6">
                  Mahalle/Köy
                </th>
                <th scope="col" className="py-3 px-6">
                  Niteliği
                </th>
                <th scope="col" className="py-3 px-6">
                  Ada
                </th>
                <th scope="col" className="py-3 px-6">
                  Parsel
                </th>
                <th scope="col" className="py-3 px-6">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody>
            {Object.entries(tapular).map(([key, value]) => {
                if(value?.status == 3){
                  return (
                    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Balıkesir
                  </th>
                  <td className="py-4 px-6">Manyas</td>
                  <td className="py-4 px-6">Hamamlı</td>
                  <td className="py-4 px-6">Mesken</td>
                  <td className="py-4 px-6">{value?.adaNo}</td>
                  <td className="py-4 px-6">{value?.parselNo}</td>
                  <td className="py-4 px-6">
                  <Link href={`/pazaryeri/kiralik/${value?._id}`}>
                      <button className="h-8 px-3 bg-gray-800 text-white text-sm rounded-md m-1">
                        Detaylar
                      </button>
                    </Link>
                  </td>
                </tr>
                  )
                }
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="overflow-x-auto relative">
        {activeTab === "my" && (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  İl
                </th>
                <th scope="col" className="py-3 px-6">
                  İlçe
                </th>
                <th scope="col" className="py-3 px-6">
                  Mahalle/Köy
                </th>
                <th scope="col" className="py-3 px-6">
                  Niteliği
                </th>
                <th scope="col" className="py-3 px-6">
                  Ada
                </th>
                <th scope="col" className="py-3 px-6">
                  Parsel
                </th>
                <th scope="col" className="py-3 px-6">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(tapular).map(([key, value]) => {
                if(value["tckn"] == jwt?.detail?.user?.tckn){
                  return (
                    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Balıkesir
                  </th>
                  <td className="py-4 px-6">Manyas</td>
                  <td className="py-4 px-6">Hamamlı</td>
                  <td className="py-4 px-6">Mesken</td>
                  <td className="py-4 px-6">{value?.adaNo}</td>
                  <td className="py-4 px-6">{value?.parselNo}</td>
                  <td className="py-4 px-6">
                    <Link href={`/pazaryeri/detay/${value?._id}`}>
                      <button className="h-8 px-3 bg-gray-800 text-white text-sm rounded-md m-1">
                        Detaylar
                      </button>
                    </Link>
                  </td>
                </tr>
                  )
                }
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
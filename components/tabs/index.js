import React, { useEffect, useState } from "react";
import cn from "classnames";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("satis");
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
                  Taşınmaz Tipi
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Balıkesir
                </th>
                <td className="py-4 px-6">Manyas</td>
                <td className="py-4 px-6">Hamamlı</td>
                <td className="py-4 px-6">Ana Taşınmaz</td>
                <td className="py-4 px-6">Mesken</td>
                <td className="py-4 px-6">152</td>
                <td className="py-4 px-6">22</td>
                <td className="py-4 px-6">
                  <button className="h-8 px-3 bg-gray-800 text-white text-sm rounded-md m-1">
                    Detaylar
                  </button>
                  <button className="h-8 px-3 bg-baseBlue text-white text-sm rounded-md m-1">
                    İşlem Yap
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Balıkesir
                </th>
                <td className="py-4 px-6">Manyas</td>
                <td className="py-4 px-6">Hamamlı</td>
                <td className="py-4 px-6">Ana Taşınmaz</td>
                <td className="py-4 px-6">Mesken</td>
                <td className="py-4 px-6">152</td>
                <td className="py-4 px-6">22</td>
                <td className="py-4 px-6">
                  <button className="h-8 px-3 bg-gray-800 text-white text-sm rounded-md m-1">
                    Detaylar
                  </button>
                  <button className="h-8 px-3 bg-baseBlue text-white text-sm rounded-md m-1">
                    İşlem Yap
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Balıkesir
                </th>
                <td className="py-4 px-6">Manyas</td>
                <td className="py-4 px-6">Hamamlı</td>
                <td className="py-4 px-6">Ana Taşınmaz</td>
                <td className="py-4 px-6">Mesken</td>
                <td className="py-4 px-6">152</td>
                <td className="py-4 px-6">22</td>
                <td className="py-4 px-6">
                  <button className="h-8 px-3 bg-gray-800 text-white text-sm rounded-md m-1">
                    Detaylar
                  </button>
                  <button className="h-8 px-3 bg-baseBlue text-white text-sm rounded-md m-1">
                    İşlem Yap
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

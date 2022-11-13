import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import { Modal, Space, Input, DatePicker, Button, Upload } from "antd";
import cn from "classnames";

import { MdCheckCircle } from "react-icons/md";
import styles from "./styles.module.css";
import { useWeb3 } from "../../web3/providers";
import { useAccount } from "../../web3/hooks";
import { axiosClient } from "../../../utils/axiosClient";
import { getCookie } from "cookies-next";

const { TextArea } = Input;
const fileList = [
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
    thumbUrl:
      "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
  },
];
export default function Upgrade({ isModalOpen, handleOk, handleCancel,mesken }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { contractNFT } = useWeb3();
  const { account } = useAccount();
  const { web3 } = useWeb3();
  const formatter = (value) => `${value}%`;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setMaintanance({ ...maintenance, date: dateString })
    };
  const [maintenance, setMaintanance] = useState({});
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  useEffect(() => {
    console.log(contractNFT);
  }, [contractNFT]);

  const upgrade = async () => {
    setIsSubmitted(true);
    const response = await contractNFT.methods.mockMint().send({
      from: account?.data,
    });

    const getTransactionReceipt = async (contractResponse) => {
      const receipt = await web3.eth.getTransactionReceipt(contractResponse.transactionHash)
      return receipt
    }

    const rsp = await getTransactionReceipt(response);

    await axiosClient.post('update_mesken',{
      meskenObjectId: mesken?._id,
      meskenTokenId: parseInt(rsp.logs[0].topics[3]),
      token: getCookie('jwt'),
      date: maintenance?.date,
      desc: maintenance?.description,
      price: maintenance?.price
    })
  };

  return (
    <Modal
      footer={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="bind-modal"
    >
      {isSubmitted && (
        <MdCheckCircle className="mx-auto text-8xl text-[green] my-10" />
      )}
      <h2 className={cn(styles.modalTitle, isSubmitted && "text-center")}>
        {isSubmitted ? "Sisteme geliştirme yüklemesi başarılı !" : "Geliştirme"}
      </h2>

      {!isSubmitted && (
        <>
          <div className="mb-2">
            <span className="mb-1 block">Geliştirme Tarihi</span>
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </div>
          <div className="mb-2">
            <span className="mb-1 block">Geliştirme Açıklaması</span>

            <TextArea placeholder="%20" rows={4}
            onChange={(e) => setMaintanance({ ...maintenance, description: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <span className="mb-1 block">Geliştirme Bedeli</span>
            <Input placeholder="1.000 eTRY"
            onChange={(e) => setMaintanance({ ...maintenance, price: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <span className="mb-1 block">QR Bilgileri</span>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              defaultFileList={[...fileList]}
            >
              <Button icon={<UploadOutlined />}>QR Yükle</Button>
            </Upload>
          </div>
        </>
      )}

      {isSubmitted ? (
        <button className={cn(styles.button, "bg-[#34A853]")}>
          Paylaşıldı
        </button>
      ) : (
        <button
          className={cn(styles.button, "bg-baseBlue ")}
          onClick={() => upgrade()}
        >
          Geliştirmeyi Paylaş
        </button>
      )}
    </Modal>
  );
}

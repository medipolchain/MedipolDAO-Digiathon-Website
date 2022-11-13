import React, { useState } from "react";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import { Modal, Space, Input, DatePicker, Button, Upload } from "antd";
import cn from "classnames";

import { MdCheckCircle } from "react-icons/md";
import styles from "./styles.module.css";

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
export default function Upgrade({ isModalOpen, handleOk, handleCancel }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formatter = (value) => `${value}%`;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
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

            <TextArea placeholder="%20" rows={4} />
          </div>
          <div className="mb-2">
            <span className="mb-1 block">Geliştirme Bedeli</span>
            <Input placeholder="1 eth" />
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
          onClick={() => setIsSubmitted(true)}
        >
          Geliştirmeyi Paylaş
        </button>
      )}
    </Modal>
  );
}

import React, { useState } from "react";

import { Modal, Space, Input, InputNumber } from "antd";
import cn from "classnames";

import { MdCheckCircle } from "react-icons/md";
import styles from "./styles.module.css";

const { TextArea } = Input;

export default function RentOutModal({ isModalOpen, handleOk, handleCancel }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        {isSubmitted
          ? "Mülikyetin kiraya açılması başarılı !"
          : "Mülkiyeti Kiraya Açma"}
      </h2>

      {!isSubmitted && (
        <>
          <div className="mb-2">
            <span className="mb-1 block">Kira Bedeli</span>
            <InputNumber placeholder="1 eth" />
          </div>
          <div className="mb-2">
            <span className="mb-1 block">Depozito Bedeli</span>
            <InputNumber placeholder="1 eth" />
          </div>
          <div className="mb-2">
            <span className="mb-1 block">Kontrat Açıklaması</span>

            <TextArea placeholder="%20" rows={10} />
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
          Kiraya Aç
        </button>
      )}
    </Modal>
  );
}

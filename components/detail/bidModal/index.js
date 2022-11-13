import React, { useState } from "react";
import Link from "next/link";
import { Modal, Space, Input, Slider, DatePicker } from "antd";
import cn from "classnames";

import { MdCheckCircle } from "react-icons/md";
import styles from "./styles.module.css";

export default function BidModal({ isModalOpen, handleOk, handleCancel }) {
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
        {isSubmitted ? "Submit Offer Successfully !" : "Satışa Aç"}
      </h2>
      <span className={cn(styles.modalInfoText, isSubmitted && "text-center")}>
        You are about to purchase “Arizona” from{" "}
      </span>
      <Link href="">
        <a className={cn(styles.userName, isSubmitted && "text-center")}>
          @michaelbauer
        </a>
      </Link>
      {!isSubmitted && (
        <>
          <div className="mb-8">
            <Input
              text="Your bid (ETH)"
              placeholder="2.75"
              errorText="You cannot bid below the highest bid !"
            />
          </div>
          <div className="mb-8">
            <Input text="Enter percentage" placeholder="%20" />
          </div>
          <div className="mb-8">
            <Slider
              min={10}
              max={80}
              tooltip={{
                formatter,
              }}
            />
          </div>
          <div className="mb-8">
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </div>
        </>
      )}
      <Space className="w-full justify-between  text-sm 2xl:text-lg mb-7">
        <span>
          Highest bid from{" "}
          <strong className="font-PoppinsSemiBold">@maxsaunder</strong>
        </span>
        <span>4.25 ETH</span>
      </Space>
      <Space className="w-full justify-between  text-sm 2xl:text-lg mb-7">
        <span>Servise fee 1.5%</span>
        <span>0,06 ETH</span>
      </Space>

      {isSubmitted ? (
        <button className={cn(styles.button, "bg-[#34A853]")}>Submitted</button>
      ) : (
        <button
          className={cn(styles.button, "bg-baseBlue ")}
          onClick={() => setIsSubmitted(true)}
        >
          Satışa Aç
        </button>
      )}
    </Modal>
  );
}

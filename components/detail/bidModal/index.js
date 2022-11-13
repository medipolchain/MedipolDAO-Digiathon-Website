import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Modal, Space, Input, Slider, DatePicker } from "antd";
import cn from "classnames";
import {ethers} from "ethers";
import { MdCheckCircle } from "react-icons/md";
import styles from "./styles.module.css";
import { useAccount } from "../../web3/hooks";
import { axiosClient } from "../../../utils/axiosClient";
import { getCookie } from "cookies-next";
import { useWeb3 } from "../../web3/providers";
import { useRouter } from "next/router";

export default function BidModal({ isModalOpen, handleOk, handleCancel, address, mesken, jwt}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { account } = useAccount();
  const router = useRouter()
  const {web3} = useWeb3();
  const formatter = (value) => `${value}%`;
  const [sellInfo, setSellInfo] = useState({});
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const sell = async () => {
    setIsSubmitted(true)
    const getMessageHash = async () => {
                
      const msg = ethers.utils.solidityPack(
        ["string", "uint256", "uint256", "uint256", "uint256"],
            [address,
            mesken?.meskenId,
            sellInfo?.percentage * 1000,
            web3?.utils?.toWei(sellInfo?.price?.toString(), "ether"),
            "0"]
      );

      const msgHash = ethers.utils.keccak256(msg);
      return msgHash;
  }

  const getSignature = async (msg) => {
    let sig = await web3.eth.personal.sign(
        msg,
        account?.data,
        (err, signature) => {
      if (err) {
        console.log(err);
        return;
      }
      return signature;
    }
  );
  return sig;
}

const msg = await getMessageHash();
const sign = await getSignature(msg);

console.log("sign",sign)

await axiosClient.post("put_on_sale", {
  meskenId:mesken?.meskenId,
  token: getCookie('jwt'),
  price: web3?.utils?.toWei(sellInfo?.price.toString(), "ether").toString(),
  amount: sellInfo?.percentage * 1000,
}
)
router.push(`/pazaryeri`)


  }

  useEffect(() => {
    console.log(sellInfo.price);
    console.log(jwt?.detail?.user?.tckn)
    console.log(typeof jwt?.detail?.user?.tckn)
    console.log(typeof mesken?.meskenId)
    console.log(typeof sellInfo?.percentage)

    console.log(typeof mesken?.meskenId)

  }, [sellInfo]);

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
        {isSubmitted ? "Ev başarıyla satışa konuldu" : "Satışa Aç"}
      </h2>
      {!isSubmitted && (
        <>
          <div className="mb-8">
            <Input
              text="Your bid (ETH)"
              placeholder="200.000 eTRY"
              onChange={(e) => setSellInfo({ ...sellInfo, price: e.target.value })}
              errorText="You cannot bid below the highest bid !"
            />
          </div>
          <div className="mb-8">
            <Slider
              min={0}
              max={100}
              onChange={(value) => setSellInfo({ ...sellInfo, percentage: value })}
              tooltip={{
                formatter,
              }}
            />
          </div>
        </>
      )}

      {isSubmitted ? (
        <button className={cn(styles.button, "bg-[#34A853]")}>Submitted</button>
      ) : (
        <button
          className={cn(styles.button, "bg-baseBlue ")}
          onClick={() => sell()}
        >
          Satışa Aç
        </button>
      )}
    </Modal>
  );
}

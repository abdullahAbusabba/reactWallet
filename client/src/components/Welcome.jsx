import React, { useContext, useState } from "react";
import { Card } from "./";
import { EthereumCard } from "./";
import { Loader } from "./";
import { TransactionContext } from "../context/TransactionContext";

const Welcome = () => {
  const { connectWallet, currentAccount, setCurrentAccount } =
    useContext(TransactionContext);

  window.ethereum.on("accountsChanged", async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log("account changed");
    console.log("currentAccount:", currentAccount);
    if (accounts && accounts.length > 0) {
      console.log("user is connected");
    } else {
      console.log("user not connected");
      setCurrentAccount(false);
    }
  });

  const Input = ({ placeholder, type, value }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="capitalize cursor-default text-3xl sm:text-5xl bg-white text-gradient py-1">
            send crypto <br />
            across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell NFT.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center my-5 bg-[#2952e3] p-3 rounded cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          <Card />
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <EthereumCard />
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              id="amount"
            />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" />
            <Input placeholder="Enter Message" name="message" type="text" />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#d0d1d4] hover:text-black hover:border-black"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

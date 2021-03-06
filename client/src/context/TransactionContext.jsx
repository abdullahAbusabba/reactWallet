import React, { useEffect, useState, prevState } from "react";
import { ethers } from "ethers";
import { ContractAbi, SmartContractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("please install MetaMask !!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log(e.message);
      throw new Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        setCurrentAccount
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

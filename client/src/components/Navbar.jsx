import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
// import { useState } from "react";
import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const NavbarItem = ({ title, classProps }) => {
  return (
    <li
      className={`py-2 px-7 mx-4 rounded  cursor-pointer hover:bg-hover:border-transparent hover:border ${classProps}`}
    >
      {title}{" "}
    </li>
  );
};

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-20 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "NFT", "Wallet"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li
          className={`${
            !currentAccount
              ? "bg-[#2952e3] hover:bg-[#2546bd] border border-blue-500 rounded"
              : "bg-transparent border-blue-500 rounded border hover:border-transparent hover:bg-blue-500"
          } transition-all py-2 px-7 mx-4 rounded-full cursor-pointer`}
        >
          {!currentAccount ? (
            <button type="button" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <button type="button">Connected</button>
          )}
        </li>
      </ul>
      <div className="flex-relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "NFT", "Wallet"].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

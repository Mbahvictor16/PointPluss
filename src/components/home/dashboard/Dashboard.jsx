'use client'

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import Items from "./Items";

const Dashboard = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="dashboard-modal">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="modalContent flex flex-col gap-[10px] items-center"
          >
            <div className="p-[20px] pt-[10px]">
              <div className="flex items-center gap-[10px] py-[5px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
                <h1 className="font-logo-text font-[number:var(--logo-text-font-weight)] text-[#ffa500] text-[length:var(--logo-text-font-size)] tracking-[var(--logo-text-letter-spacing)] leading-[var(--logo-text-line-height)] whitespace-nowrap [font-style:var(--logo-text-font-style)]">
                  Point+
                </h1>
                <div className="flex items-center p-4 pt-7" onClick={onClose}>
                  <RxHamburgerMenu size={"1.2rem"} />
                </div>
              </div>
            </div>
            <div className="flex font-[590] flex-col w-full justify-start">
              {Items.map((item) => (
                < Link
                  href={item.href}
                  key={item.name}
                  className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[15px] flex items-center gap-[10px]"
                  onClick={onClose}
                >
                  <div className="flex justify-center items-center">
                    {item.icon}
                  </div>
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center items-center">
                <button
                  className="absolute bottom-9 hover:bg-[#ffa5004c] duration-300 drop-shadow-xl bg-[#ffa500] py-[8px] px-[50px] shadow-[0px_4px_10px_#00000026] font-[590]"
                  onClick={onClose}
                >
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        </div >
      )}
    </AnimatePresence >
  );
};

export default Dashboard;

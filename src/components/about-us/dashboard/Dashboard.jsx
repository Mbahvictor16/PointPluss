'use client'

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const Dashboard = ({ isOpen, onClose }) => {
  const slideInVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
    exit: { x: "-100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideInVariants}
          transition={{ duration: 0.3 }}
          className="z-50 dashboard absolute top-[80px] left-0 w-full h-auto shadow-lg"
        >
          <div className="flex justify-end p-3 mr-5">
            <div
              onClick={onClose}
              className="flex justify-center rounded-full duration-300 hover:bg-gray-100 items-center p-3"
            >
              <FaArrowLeftLong />
            </div>
          </div>
          <div className="flex font-[590] mb-4 flex-col w-full justify-start">
            <Link
              href={"/"}
              onClick={onClose}
              className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[20px] flex items-center gap-[10px]"
            >
              Company
            </Link>
            <Link
              href={"/faq"}
              onClick={onClose}
              className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[20px] flex items-center gap-[10px]"
            >
              FAQ
            </Link>
            <Link
              href={"/person"}
              onClick={onClose}
              className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[20px] flex items-center gap-[10px]"
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              onClick={onClose}
              className="aboutus p-[10px] hover:bg-[#ffa5004c] hover:text-white duration-[0.5s] px-[20px] flex items-center gap-[10px]"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dashboard;

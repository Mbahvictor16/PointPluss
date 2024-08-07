import React from "react";
import { redirect } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { success } from "../../../../public/assets";
import Link from "next/link";

const SuccessModal = ({ isOpen, onClose }) => {

  const handleClose = () => {
    redirect("/");
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content tracking-wide flex justify-center gap-1 items-center flex-col rounded-[20px] drop-shadow-xl shadow-[0px_4px_10px_#00000026] p-[30px] px-[30px] lg:px-[50px] bg-white w-auto h-[50%]">
            <div className="w-full pl-[90px]">
              <img src={success} className="w-[50%]" alt="success" />
            </div>
            <p className="text-[30px] w-full font-[590] mb-3">
              Payment Successful
            </p>
            <p className="font-medium">Your Payment was Successful!!</p>
            <Link href="/ordertracking"
              className="bg-amber-500 hover:bg-[#ecb858ec] duration-300 rounded-md flex justify-center items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]] text-black mt-3 cursor-pointer p-[10px] px-[20px]"
            >
              Track your order
            </Link>
            <span
              onClick={handleClose}
              className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
            >
              <IoClose size={"1.5rem"} />
            </span>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default SuccessModal;

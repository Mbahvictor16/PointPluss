import React from "react";
import { IoClose } from "react-icons/io5";
import PhoneNumberInput from "../../person/phone-input/PhoneNumberInput";
import { MdOutlineMailOutline } from "react-icons/md";
import LinkedIn from "./buttons/LinkedIn";
import GoogleBtn from "./buttons/GoogleBtn";

function SmsForm({ onClose, setFormType }) {
  return (
    <div className="flex rounded-[10px] flex-col gap-[20px] border p-[30px] overflow-auto">
      <div className="flex gap-[20px] justify-center items-center flex-col">
        <h1 className="text-black lg:text-4xl text-2xl lg:font-[590] font-[590] tracking-[2px]">Welcome</h1>
        <p className="font-medium text-gray-500">Let&apos;s start off with your phone number.</p>
      </div>
      <PhoneNumberInput />
      <div className='flex mt-[20px] gap-4 justify-center items-center'>
        <button className="bg-amber-100 py-[6px] w-full rounded-[20px] text-amber-500 font-[590]">SMS</button>
        <button className="bg-amber-500 py-[6px] w-full rounded-[20px] text-white font-[590]">WhatsApp</button>
      </div>
      <div className="flex text-base justify-center items-center">
        <p className="font-medium text-gray-500">Don&apos;t have an account yet? <span onClick={() => setFormType("signup")} className="text-amber-500 cursor-pointer">SignUp</span></p>
      </div>
      <div className="flex w-full gap-2 justify-center items-center">
        <hr className="w-[50%]" />
        <p>or</p>
        <hr className="w-[50%]" />
      </div>
      <GoogleBtn />
      <LinkedIn />
      <button className="border px-[15px] py-2 rounded-[20px] mb-9 border-gray-300" onClick={() => setFormType("mail")}>
        <div className="flex justify-between w-[60%]">
          <div className="text-amber-500 flex justify-center items-center">
            <MdOutlineMailOutline size={"1.5rem"} />
          </div>
          <p className="font-[590]">Email</p>
        </div>
      </button>
      <span
        onClick={onClose}
        className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
      >
        <IoClose size={"1.5rem"} />
      </span>
    </div>
  );
}

export default SmsForm;

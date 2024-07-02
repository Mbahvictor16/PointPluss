'use client'

import React, { useState } from 'react'
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { IoArrowBack, IoClose } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import { IoPersonOutline } from "react-icons/io5";
import PhoneNumberInput2 from './PhoneNumberInput2';
import { google } from "../../../../public/assets";

function SignUpForm({ setFormType, onClose }) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className="flex rounded-[10px] relative flex-col gap-[20px] border p-[20px] sm:p-[50px]">
            <p className="text-black lg:text-3xl text-2xl text-center lg:font-[590] font-[590] tracking-wide">Sign Up</p>
            <form action="" className="flex flex-col gap-[20px]">
                <div className="flex items-center rounded-lg border border-solid border-[#ccc]">
                    <div className="flex justify-center items-center p-[15px]">
                        <IoPersonOutline size={"1.5rem"} />
                    </div>
                    <input
                        type="text"
                        placeholder="Name"
                        style={{
                            width: "100%",
                            height: "50px",
                            padding: "15px",
                            borderRadius: "8px",
                            cursor: "text",
                            paddingLeft: "10px",
                            color: "black", // Set the text color to black
                            caretColor: "black"
                        }}
                        className="focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center rounded-lg border border-solid border-[#ccc]">
                    <div className="flex  justify-center items-center p-[15px]">
                        <MdOutlineMail size={"1.5rem"} />
                    </div>
                    <input
                        type="text"
                        placeholder="Email"
                        style={{
                            width: "100%",
                            height: "50px",
                            padding: "15px",
                            borderRadius: "8px",
                            cursor: "text",
                            paddingLeft: "10px",
                            color: "black", // Set the text color to black
                            caretColor: "black"
                        }}
                        className="focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex justify-between  rounded-lg border border-solid border-[#ccc]">
                    <div className="flex w-full items-center">
                        <div className="flex justify-center items-center p-[15px]">
                            <FiLock size={"1.5rem"} />
                        </div>
                        <input
                            type={open === false ? "password" : "text"}
                            placeholder="Password"
                            className="p-[15px] w-full focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex justify-center items-center p-[15px] text-xl">
                        {open === false ? (
                            <FiEyeOff onClick={toggle} />
                        ) : (
                            <FiEye onClick={toggle} />
                        )}
                    </div>
                </div>
                <PhoneNumberInput2 />
                <div className="flex items-center gap-[10px] font-medium text-gray-500 text-[16px] leading-[24px]">
                    <input
                        type="checkbox"
                        id="terms"
                        className="custom-checkbox2"
                    />
                    <label htmlFor="terms">I agree to terms and conditions</label>
                </div>
                <button className="bg-amber-500 mt-4 font-[590]" style={{
                    width: "100%",
                    height: "50px",
                    padding: "15px",
                    borderRadius: "20px",
                    color: "#ffffff",
                }}>Create Account</button>
                <div className="flex text-base justify-center items-center">
                    <p className="font-medium text-gray-500">Already have an account? <span onClick={() => setFormType("sms")} className="text-amber-500 cursor-pointer">Log in</span></p>
                </div>
                <div className="flex w-full gap-2 justify-center items-center">
                    <hr className="w-[50%]" />
                    <p>or</p>
                    <hr className="w-[50%]" />
                </div>
            </form>
            <button className="border px-[15px] py-3 rounded-[20px] border-gray-300">
                <div className="flex justify-between w-[60%]">
                    <div className="w-[20px] h-[20px]">
                        <img src={google} className="w-full object-cover" alt="google" />
                    </div>
                    <p className="font-[590]">Google</p>
                </div>
            </button>
            <div className="flex text-base justify-center items-center">
                <p className="font-medium text-center text-gray-500">By creating an account, you automatically accept our <span className="text-amber-500 underline cursor-pointer">Terms</span>,<span className="text-amber-500 underline cursor-pointer"> Privacy Policy</span>, and <span className="text-amber-500 underline cursor-pointer">Cookies Policy</span></p>
            </div>
            <span
                onClick={() => setFormType("sms")}
                className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 left-4 border  transform transition-transform duration-300 hover:scale-105"
            >
                <IoArrowBack size={"1.5rem"} />
            </span>
            <span
                onClick={onClose}
                className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
            >
                <IoClose size={"1.5rem"} />
            </span>
        </div>
    )
}

export default SignUpForm

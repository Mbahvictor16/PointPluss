'use client'

import React from 'react'
import { cash } from '@/public/assets'
import { IoClose } from 'react-icons/io5'

const CashModal = ({ isOpen, onClose }) => {
    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content tracking-wide flex card_details justify-center items-center rounded-[20px] p-[20px] px-[40px] lg:px-[70px] h-auto flex-col w-auto overflow-hidden overflow-y-auto drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
                        <div className='flex justify-center my-4 items-center'>
                            <img src={cash} className="w-[40%]" alt="cash" />
                        </div>
                        <p className='font-[590] text-xl text-center text-black lg:text-2xl'>How much cash will you pay</p>
                        <p className='font-normal mt-2 text-base text-center text-gray-500'>We'll inform the rider so they can bring the correct change</p>
                        <div className='flex mt-5 gap-5'>
                            <input type="text" placeholder='1000' className='w-[200px] text-2xl bg-gray-200 p-[10px] outline-0 text-center rounded-[5px ' />
                            <div className='font-[590] w-[100px] flex justify-center items-center bg-gray-200 text-black text-2xl'>
                                <p>NGN</p>
                            </div>
                        </div>
                        <div className="flex mt-6 items-center gap-[10px] text-black font-[500] text-[16px] leading-[24px]">
                            <input
                                type="checkbox"
                                id="terms"
                                className="custom-checkbox"
                            />
                            <label htmlFor="terms">I have exactly NGN 1,000</label>
                        </div>
                        <span
                            onClick={onClose}
                            className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
                        >
                            <IoClose size={"1.5rem"} />
                        </span>
                        <button className='bg-amber-500 hover:bg-[#ecb858ec] duration-300 w-[70%] p-3 mt-9 text-lg font-medium text-white rounded-full'>Confirm checkout</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CashModal

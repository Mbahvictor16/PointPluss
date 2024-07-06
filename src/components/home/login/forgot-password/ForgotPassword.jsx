import Point from '@/src/helper/Point'
import React from 'react'
import Form from './SubComponents/Form'
import { IoArrowBack } from 'react-icons/io5'

const ForgotPassword = ({ setFormType, onClose }) => {
    return (
        <div className='px-[20px] py-[40px] sm:p-[50px]'>
            <span
                onClick={() => setFormType("sms")}
                className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 left-4 border  transform transition-transform duration-300 hover:scale-105"
            >
                <IoArrowBack size={"1.5rem"} />
            </span>
            <Form />
        </div>
    )
}

export default ForgotPassword

import Point from '@/src/helper/Point'
import React from 'react'
import Form from './SubComponents/Form'

const ForgotPassword = () => {
    return (
        <div className='h-screen'>
            <div className='border-b lg:px-[50px] p-[20px] border-b-white bg-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]'>
                <Point />
            </div>
            <div className='flex justify-center items-center lg:mt-14 mt-10 lg:px-[50px] p-[20px]'>
                <Form />
            </div>
        </div>
    )
}

export default ForgotPassword

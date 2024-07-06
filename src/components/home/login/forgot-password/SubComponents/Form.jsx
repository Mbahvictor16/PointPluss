import React from 'react'
import { FiLock } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'

const Form = () => {
    return (
        <section>
            <div className='w-full mb-5 flex gap-4 justify-center items-center'>
                <div className='border text-center rounded-lg p-[10px] text-black border-solid border-[#898989]'>
                    <FiLock size={"2rem"} />
                </div>
            </div>
            <form action="#" className='flex flex-col gap-4'>
                <div className='flex flex-col gap-3 text-center'>
                    <h1 className='text-2xl font-[590] text-black'>Forgot password?</h1>
                    <p className="font-medium text-gray-500">No worries, we'll send you reset Instructions</p>
                </div>
                <div className="flex items-center mt-4 rounded-lg border border-solid border-[#898989]">
                    <div className="flex  justify-center items-center p-[15px]">
                        <MdOutlineMail size={"1.5rem"} />
                    </div>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        style={{
                            width: "100%",
                            height: "50px",
                            padding: "15px",
                            borderRadius: "8px",
                            cursor: "text",
                            paddingLeft: "10px",
                            color: "black", // Set the text color to black
                            caretColor: "black",
                        }}
                        className="focus:outline-none focus:shadow-outline"
                    />
                    
                </div>
                <button
                    className="bg-amber-500 mt-4 font-[590]"
                    style={{
                        width: "100%",
                        height: "50px",
                        padding: "15px",
                        borderRadius: "8px",
                        color: "#ffffff",
                    }}
                >
                    Reset password
                </button>
            </form>
        </section>
    )
}

export default Form

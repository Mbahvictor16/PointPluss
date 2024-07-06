import { linkedIn } from '@/public/assets'
import React from 'react'

const LinkedIn = () => {
  return (
      <button className="border px-[15px] py-3 rounded-[20px] border-gray-300">
          <div className="flex justify-between w-[60%]">
              <div className="w-[20px] h-[20px]">
                  <img src={linkedIn} className="w-full object-cover" alt="google" />
              </div>
              <p className="font-[590]">LinkedIn</p>
          </div>
      </button>
  )
}

export default LinkedIn

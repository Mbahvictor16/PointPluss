'use client'

import React, { useEffect, useState } from 'react'
import Splash7 from '../helper/Splash7'
import Sidebar from '../helper/Sidebar'
import Footer from '../helper/Footer'

export default function ClientLayout ({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasShownSplash = localStorage.getItem('hasShownSplash')

    if (!hasShownSplash) {
      localStorage.setItem('hasShownSplash', 'true')
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Splash7 />
  }

  return (
    <div className='flex w-full overflow-hidden'>
      <Sidebar />
      <div className='Routes overflow-y-scroll ml-0 max-h-[calc(100vh)] w-[100%]'>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

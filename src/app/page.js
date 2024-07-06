'use client'

import React, { useEffect, useState } from 'react'
import './globals.css'
import Footer from '../helper/Footer'
import Splash7 from '../helper/Splash7'
import Sidebar from '../helper/Sidebar'
import { FavoriteProductsProvider } from '../context/FavoriteProductsContext'
import HomePage from '../components/home/HomePage'
import Order from '../components/order/Order'

export default function Home ({ children }) {
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
    <FavoriteProductsProvider>
      <div className='app-container'>
        <div className='flex'>
          <div className='Routes w-[100%]'>
            <HomePage />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </FavoriteProductsProvider>
  )
}

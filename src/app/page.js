'use client'

import './globals.css'
import Footer from '../helper/Footer'
import { FavoriteProductsProvider } from '../context/FavoriteProductsContext'
import HomePage from '../components/home/HomePage'

export default function Home ({ children }) {

  return (
    <FavoriteProductsProvider>
      <div className='app-container'>
        <div className='flex'>
          <div className='Routes w-[100%]'>
            <HomePage />
            {children}
          </div>
        </div>
      </div>
    </FavoriteProductsProvider>
  )
}

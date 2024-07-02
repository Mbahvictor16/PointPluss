'use client'

import React, { useEffect, useState } from 'react'
import './globals.css'
import Splash7 from '../helper/Splash7'
import HomePage from '../components/home/HomePage'

export default function Home () {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    fetchData()
  }, [])

  if (loading) {
    return <Splash7 />
  }

  return (
    <>
      <HomePage />
    </>
  )
}

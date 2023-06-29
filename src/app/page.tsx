'use client'

import Navbar from '@/components/NavBar'
import Hero from '@/sections/Hero'

import React from 'react'

import '@/app/global.css'

function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home

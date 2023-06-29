'use client'

import React from 'react'

import Navbar from '@/components/NavBar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'

import '@/app/global.css'

function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      </div>
    </div>
  )
}

export default Home

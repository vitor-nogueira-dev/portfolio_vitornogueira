'use client'

import React from 'react'

import { Hero, About, Projects } from '@/sections'
import { Navbar } from '@/components'

import '@/app/global.css'

function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Projects />
      </div>
    </div>
  )
}

export default Home

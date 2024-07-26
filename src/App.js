import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SolveBtnSection from './components/SolveBtnSection'

function App() {
  return (
    <div className="w-full">
      <div className="w-[100%] bg-[#1e1e79] md:px-8 sm:px-6 px-4">
      <Navbar />
      <HeroSection />
      </div>      
      <AboutSection />
      <SolveBtnSection />
 
    </div>
  )
}

export default App
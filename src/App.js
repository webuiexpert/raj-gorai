import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SolveBtnSection from './components/SolveBtnSection'
import ExpertiesSection from './components/ExpertiesSection'
import MoreSalesSection from './components/MoreSalesSection'
import CasestudiesSection from './components/CasestudiesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ResultSection from './components/ResultSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import LandingPages from './components/Marketing-projects/LandingPages'

function App() {
  return (
    <div className="w-full overflow-x-hidden relative">
      <div className="w-[100%] bg-[#1e1e79] md:px-8 sm:px-6 px-4">
      <Navbar />
      <HeroSection />
      </div>      
      <AboutSection />
      <SolveBtnSection />
      <ExpertiesSection />
      <MoreSalesSection />  
      <LandingPages />
      <CasestudiesSection />
      <TestimonialsSection />
      <ResultSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
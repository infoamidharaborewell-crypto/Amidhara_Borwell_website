import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

import Footer from './components/Footer'
import Gallery from './components/Gallery'
import SplashScreen from './components/SplashScreen'
import Logo3DSidebar from './components/Logo3DSidebar'
import FAQ from './components/FAQ'
import Product from './components/Product'
import ContactUs from './components/ContactUs'
import WhatsappButton from './components/WhatsappButton'

function App() {
  const [showSplash, setShowSplash] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
    const element = document.getElementById(page)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Logo3DSidebar />
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Product />
      <FAQ />
      <ContactUs />
      <WhatsappButton />
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App


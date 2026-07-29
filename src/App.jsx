import React, { useState, useEffect } from 'react'
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
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import WhatsappButton from './components/WhatsappButton'

function App() {
  // Check if user has already seen splash screen in this session OR if they opened/refreshed a specific section URL
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('hasSeenSplash') === 'true'
      const hasHash = window.location.hash.length > 1
      if (hasSeen || hasHash) {
        return false
      }
    }
    return true
  })

  const [currentPage, setCurrentPage] = useState('home')

  const handleSplashComplete = () => {
    setShowSplash(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasSeenSplash', 'true')
    }
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${page}`)
    }
    const element = document.getElementById(page)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Restore scroll position to exact section on page reload/refresh
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setCurrentPage(hash)
        const el = document.getElementById(hash)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' })
          }, 150)
        }
      }
    }
  }, [showSplash])

  // Automatically update active nav link and URL hash as user scrolls
  useEffect(() => {
    if (showSplash) return

    const sections = ['home', 'services', 'gallery', 'about', 'product', 'testimonials', 'faq', 'contact']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (currentPage !== sectionId) {
              setCurrentPage(sectionId)
              window.history.replaceState(null, '', `#${sectionId}`)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showSplash, currentPage])

  // Lock body scroll while splash screen is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showSplash])

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Splash Screen Overlay */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Pre-rendered Main Website Content */}
      <Logo3DSidebar />
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Product />
        <Testimonials />
        <FAQ />
        <ContactUs />
      </main>
      <WhatsappButton />
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { FaHome, FaTools, FaImages, FaInfoCircle, FaBox, FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa'

const Header = ({ onNavigate, currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    if (onNavigate) {
      onNavigate(id)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const navLinks = [
    { id: 'home', label: 'Home', icon: FaHome, color: 'bg-blue-100 text-blue-700' },
    { id: 'services', label: 'Services', icon: FaTools, color: 'bg-sky-100 text-sky-700' },
    { id: 'gallery', label: 'Gallery', icon: FaImages, color: 'bg-emerald-100 text-emerald-700' },
    { id: 'about', label: 'About', icon: FaInfoCircle, color: 'bg-indigo-100 text-indigo-700' },
    { id: 'product', label: 'Product', icon: FaBox, color: 'bg-purple-100 text-purple-700' },
    { id: 'faq', label: 'FAQ', icon: FaQuestionCircle, color: 'bg-amber-100 text-amber-700' },
  ]

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 md:px-8">
      <nav className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl md:rounded-full px-5 py-3 shadow-2xl border border-blue-100/90 transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden p-1 border border-blue-200">
              <img
                src="/images/amidhara-logo-cutout.png"
                alt="Amidhara Borewell Logo"
                loading="lazy"
                decoding="async"
                width="40"
                height="40"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Amidhara <span className="text-blue-700">Borewell</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  currentPage === link.id
                    ? 'text-blue-700 font-bold'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available in Vadodara</span>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-5 py-2.5 min-h-[44px] rounded-full transition-all shadow-md hover:shadow-lg water-ripple-effect relative overflow-hidden"
              aria-label="Contact Us form"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-800 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl hover:bg-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-blue-100/80 flex flex-col space-y-2 px-1 pb-1">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                const isActive = currentPage === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left py-3 px-4 min-h-[52px] flex items-center justify-between rounded-2xl transition-all duration-200 shadow-sm ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold shadow-md shadow-blue-600/25 scale-[1.01]'
                        : 'bg-gray-50/90 hover:bg-blue-50 text-gray-800 font-semibold hover:text-blue-700 border border-gray-100'
                    }`}
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base ${isActive ? 'bg-white/20 text-white' : link.color}`}>
                        <IconComponent />
                      </div>
                      <span className="text-base font-semibold">{link.label}</span>
                    </div>

                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                    ) : (
                      <span className="text-gray-400 text-sm font-bold">→</span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Mobile Action Bar */}
            <div className="mt-3 pt-3 border-t border-blue-100 flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-2 text-xs font-semibold text-emerald-950">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  24/7 Emergency Support
                </span>
                <span className="text-gray-500 font-medium">Vadodara</span>
              </div>

              <a
                href="tel:+919106604895"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-bold py-3 px-5 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20 transition-all min-h-[48px]"
                aria-label="Call Amidhara Borewell directly"
              >
                <FaPhoneAlt className="text-sm animate-bounce" />
                <span>Call Now: +91 91066 04895</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

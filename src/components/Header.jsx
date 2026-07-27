import React, { useState } from 'react'
import { FaHome, FaTools, FaImages, FaInfoCircle, FaBox, FaQuestionCircle, FaPhoneAlt, FaTimes } from 'react-icons/fa'

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
    { id: 'contact', label: 'Contact Us', icon: FaPhoneAlt, color: 'bg-rose-100 text-rose-700' },
  ]

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-3 md:px-8">
        <nav className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-full px-5 py-3 shadow-2xl border border-blue-100/90 transition-all duration-300">
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
              {navLinks.filter(l => l.id !== 'contact').map((link) => (
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

            {/* Mobile 3-Lines Hamburger Button */}
            <button
              className="md:hidden text-gray-800 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open mobile navigation sidebar menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ========================================================= */}
      {/* RIGHT SLIDE-IN MOBILE SIDEBAR DRAWER & BACKDROP OVERLAY  */}
      {/* ========================================================= */}

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Right Slide-In Sidebar Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md p-1 border border-blue-200">
              <img
                src="/images/amidhara-logo-cutout.png"
                alt="Amidhara Borewell Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 block leading-none">Amidhara</span>
              <span className="text-xs font-semibold text-blue-700">Borewell Vadodara</span>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Close mobile sidebar menu"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">Navigation Menu</p>

          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const IconComponent = link.icon
              const isActive = currentPage === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left py-3.5 px-4 min-h-[50px] flex items-center justify-between rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold shadow-md shadow-blue-600/30'
                      : 'bg-gray-50/80 hover:bg-blue-50 text-gray-800 font-semibold hover:text-blue-700'
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
        </div>

        {/* Sidebar Footer Info & CTA */}
        <div className="p-5 border-t border-gray-100 bg-gray-50/70 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-emerald-950 px-1">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              24/7 Available Today
            </span>
            <span className="text-gray-500">Tarsali, Vadodara</span>
          </div>

          <a
            href="tel:+919106604895"
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20 transition-all min-h-[48px]"
            aria-label="Call Amidhara Borewell directly"
          >
            <FaPhoneAlt className="text-sm animate-bounce" />
            <span>Call Now: +91 91066 04895</span>
          </a>

          <a
            href="https://wa.me/919825126833"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 border border-emerald-200/80 transition-colors"
          >
            <span>💬 Chat on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  )
}

export default Header

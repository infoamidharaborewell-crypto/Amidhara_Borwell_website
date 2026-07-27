import React, { useState } from 'react'

const Header = ({ onNavigate, currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    if (onNavigate) {
      onNavigate(id)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'product', label: 'Product' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <nav className="max-w-6xl mx-auto bg-white rounded-full px-6 py-3 shadow-xl border border-blue-100/80 transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Logo Matching Reference Site */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Amidhara <span className="text-blue-600">Borewell</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors text-sm font-semibold relative py-1 ${
                  currentPage === link.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Live Availability Status Badge + Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs px-3.5 py-1.5 rounded-full font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available in Vadodara</span>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-5 py-2 min-h-[44px] rounded-full transition-colors shadow-md water-ripple-effect relative overflow-hidden"
              aria-label="Contact Us form"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-blue-100 flex flex-col space-y-2 px-2 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-base font-semibold py-3 px-4 min-h-[48px] flex items-center rounded-lg transition-colors ${
                  currentPage === link.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-emerald-950 font-semibold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-600"></span> Available Today
              </span>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-5 py-3 min-h-[44px] rounded-full"
                aria-label="Contact Us form"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

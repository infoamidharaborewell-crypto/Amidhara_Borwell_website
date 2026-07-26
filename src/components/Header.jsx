import React, { useState } from 'react'
import logo from "/logo_tejas.png";

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

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 water-surface">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Matching Reference Site */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Amidhara Borewell</span>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors ${
                currentPage === 'services' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`transition-colors ${
                currentPage === 'gallery' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('product')}
              className={`transition-colors ${
                currentPage === 'product' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`transition-colors ${
                currentPage === 'faq' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors water-ripple-effect relative overflow-hidden"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('product')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

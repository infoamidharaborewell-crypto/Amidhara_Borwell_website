import React from 'react'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = ({ onNavigate }) => {
  const scrollToSection = (id) => {
    if (onNavigate) {
      onNavigate(id)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden water-surface">
      {/* Water Bubbles */}
      <div className="hidden md:block water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Pre-footer navigation prompt */}
        <div className="text-center pb-8 mb-8 border-b border-gray-800 text-gray-300 text-base">
          <p>
            Have questions? Check our{' '}
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-blue-400 hover:underline font-medium"
            >
              FAQ Page
            </button>{' '}
            or explore our{' '}
            <button 
              onClick={() => scrollToSection('services')}
              className="text-blue-400 hover:underline font-medium"
            >
              Services Section
            </button>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">Amidhara Borewell</span>
            </div>

            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Your trusted partner for reliable water solutions. 
              Professional borewell services with years of expertise.
            </p>

            <div className="flex space-x-3">
              <a 
                href="https://wa.me/919106604895" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md shadow-emerald-900/40 min-h-[44px] min-w-[44px]"
                title="WhatsApp"
                aria-label="Amidhara Borewell WhatsApp"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md shadow-blue-900/40 min-h-[44px] min-w-[44px]"
                title="Facebook"
                aria-label="Amidhara Borewell Facebook Page"
              >
                <FaFacebookF className="text-white text-base" />
              </a>
              <a 
                href="https://www.instagram.com/amidhara_borewell?igsh=MWlzeGR2eWU1c3Juag==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md shadow-pink-900/40 min-h-[44px] min-w-[44px]"
                title="Instagram"
                aria-label="Amidhara Borewell Instagram Page"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links / Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-white transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('product')} className="text-gray-300 hover:text-white transition-colors">Product</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white transition-colors">FAQ</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Borewell Drilling</li>
              <li>Installation Services</li>
              <li>Maintenance</li>
              <li>Repair Services</li>
              <li>Water Testing</li>
              <li>Pump Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="font-semibold text-white">+91 91066 04895</li>
              <li>infoamidharaborewell@gmail.com</li>
              <li className="pt-1 leading-relaxed">
                Sahajanand Krupa Society, F/120, Tarsali, Vadodara, Gujarat 390009
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TEJASKP AI SOFTWARE - All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


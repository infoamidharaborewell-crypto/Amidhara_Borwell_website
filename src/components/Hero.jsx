import React, { lazy, Suspense } from 'react'
import WaterEffects from './WaterEffects'

const Scene3D = lazy(() => import('./Scene3D'))

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden water-wave-bg water-surface min-h-screen">
      <WaterEffects variant='waves'/>
      <div className="hidden md:block water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
      
      {/* 3D Scene - Displayed on Desktop (Hidden on mobile for 90%+ performance) */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-full max-h-[600px] md:max-h-[700px]">
          <div className="w-full h-full">
            <Suspense fallback={null}>
              <Scene3D showPump={true} showDroplets={true} />
            </Suspense>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Mobile 3D Spinning Logo Card - Visible on Mobile Views (< 1024px) */}
          <div className="lg:hidden flex justify-center md:justify-start mb-6">
            <div className="bg-white rounded-[24px] shadow-2xl p-3 border-2 border-blue-300/80 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 inline-block">
              <div className="w-24 h-32 flex items-center justify-center spin-logo">
                <img
                  src="/images/amidhara-logo-cutout.png"
                  alt="Amidhara Borewell 3D Logo"
                  loading="lazy"
                  decoding="async"
                  width="96"
                  height="128"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative leading-tight" style={{ zIndex: 20 }}>
            Professional Borewell &amp; Pump Installation Services in Vadodara
          </h1>
          <p className="text-xl text-gray-700 mb-8 relative" style={{ zIndex: 20 }}>
            Your trusted partner for reliable water solutions. We provide expert borewell drilling, installation, and maintenance services with years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative" style={{ zIndex: 20 }}>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-blue-700/25 water-ripple-effect relative overflow-hidden min-h-[50px]"
              aria-label="Get Free Quote contact button"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('services')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white border-2 border-blue-700 text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-md min-h-[50px]"
              aria-label="Explore Services section button"
            >
              Our Services
            </button>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto relative" style={{ zIndex: 20 }}>
          <div className="bg-white p-6 rounded-lg shadow-md water-ripple-effect water-shimmer relative z-10">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Expert Team</h3>
            <p className="text-gray-600 text-center">Experienced professionals with years of expertise</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md water-ripple-effect water-shimmer relative z-10">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">24/7 Support</h3>
            <p className="text-gray-600 text-center">Round-the-clock service and emergency support</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md water-ripple-effect water-shimmer relative z-10">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Affordable Prices</h3>
            <p className="text-gray-600 text-center">Competitive pricing with transparent quotes</p>
          </div>
        </div>

        {/* Borewell Services Across Vadodara - Inside Blue Hero Background */}
        <div className="text-center mt-12 mb-6 relative z-20 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-3 tracking-tight">
            Borewell Services Across Vadodara
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We provide expert <strong className="font-semibold text-gray-900">borewell drilling and submersible pump services in Vadodara</strong>. Explore our complete list of solutions on our{' '}
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('services')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-blue-800 font-semibold underline hover:text-blue-950 transition-colors"
            >
              Service
            </a>{' '}
            or{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-blue-800 font-semibold underline hover:text-blue-950 transition-colors"
            >
              Contact
            </a>{' '}
            page for support.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero


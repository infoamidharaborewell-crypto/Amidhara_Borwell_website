import React from 'react'

const Logo3DSidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white rounded-[24px] shadow-2xl p-3 border-2 border-blue-300/80 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
        <div className="w-28 h-36 flex items-center justify-center spin-logo">
          <img
            src="/images/amidhara-logo-cutout.png"
            alt="Amidhara Borewell 3D Logo"
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Logo3DSidebar


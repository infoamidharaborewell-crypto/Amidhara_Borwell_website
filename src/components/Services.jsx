import React, { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import WaterEffects from './WaterEffects';

const Tractor3D = lazy(() => import('./Tractor3D'));
const Scene3D = lazy(() => import('./Scene3D'));
import service1 from "/service1.jpeg";
import service2 from "/service2.png";
import service3 from "/service3.webp";
import service4 from "/service4.jpg";
import service5 from "/service5.jpg";
import service6 from "/service6.jpeg";

const Services = () => {
  const services = [
    {
      title: "Borewell Drilling",
      image: service1,
      description: "Professional borewell drilling services in Vadodara using advanced hydraulic tractor-mounted rigs. We provide accurate and fast drilling for residential, industrial and agricultural water needs with expert groundwater guidance."
    },
    {
      title: "Borewell Installation",
      image: service2,
      description: "Complete borewell installation services in Vadodara including submersible pump fitting, HDPE or PVC pipe setup, cable wiring and water connection with guaranteed performance and long-term reliability."
    },
    {
      title: "Maintenance & Repair",
      image: service3,
      description: "Expert borewell repair and maintenance services in Vadodara to fix low water flow, pump failure, pipe blockage and motor issues. Quick on-site diagnosis and same-day service available."
    },
    {
      title: "Water Testing",
      image: service4,
      description: "Professional water testing services in Vadodara to check drinking water quality, TDS levels, pH, impurities and suitability for domestic or industrial usage. Ensure safe and healthy water supply."
    },
    {
      title: "Pump Services",
      image: service5,
      description: "Specialized submersible pump installation, repair and replacement services in Vadodara for all brands and capacities. We handle wiring, control panels, starters and automatic water flow systems."
    },
    {
      title: "Emergency Services",
      image: service6,
      description: "24/7 emergency borewell and pump repair service across Vadodara. Immediate response for breakdowns, stuck motor issues, blocked pipes or sudden water loss — available day and night."
    }
  ];

  const equipmentFeatures = [
    "Modern tractor-mounted drilling rigs",
    "High-capacity drilling equipment",
    "Precision drilling technology",
    "Mobile and versatile operation",
    "Efficient and time-saving operations"
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden water-surface">

      {/* Water Effects */}
      <WaterEffects variant="waves" />

      {/* Background water bubbles */}
      <div className="hidden md:block water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>

      {/* Floating 3D Droplets (Desktop viewports only for fast mobile score) */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96">
          <Scene3D showPump={false} showDroplets={true} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Best Borewell Drilling &amp; Pump Installation Services in Vadodara
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Amidhara Borewell is one of the leading borewell drilling contractors in Vadodara, Gujarat providing professional borewell drilling, pump installation, borewell maintenance, water testing and 24/7 emergency borewell services. With modern hydraulic tractor-mounted drilling equipment, we deliver fast and reliable solutions for residential, industrial and agricultural water needs.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-200/80 hover:shadow-2xl hover:shadow-blue-600/15 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src={service.image} 
                  alt={`${service.title} in Vadodara`}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="250"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-5">
                  <h3 className="text-xl font-extrabold text-white drop-shadow-md tracking-tight">{service.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 text-blue-700 font-bold hover:text-blue-900 text-sm min-h-[44px] transition-colors"
                  aria-label={`Book ${service.title} service in Vadodara`}
                >
                  <span>Book Service</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Equipment Section Matching Image 3 */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Advanced Equipment</h3>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              State-of-the-art drilling equipment powered by modern tractors for efficient and reliable service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left 3D Canvas Container (Desktop only for fast mobile score) */}
            <div className="hidden lg:flex bg-gradient-to-br from-blue-200/80 via-blue-100/70 to-indigo-200/80 rounded-3xl p-4 border border-blue-200 shadow-xl relative min-h-[380px] flex-col justify-end overflow-hidden">
              <div className="w-full h-full absolute inset-0">
                <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
                  <Suspense fallback={null}>
                    <Tractor3D />
                  </Suspense>
                </Canvas>
              </div>
              <div className="relative z-10 mx-auto mb-2 bg-white/90 backdrop-blur px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-md border border-white/60 pointer-events-none">
                Interactive 3D Model - Drag to rotate
              </div>
            </div>

            {/* Right Features List Container */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Equipment Features</h3>
              <ul className="space-y-4">
                {equipmentFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center space-x-3.5 text-gray-700 font-medium text-base">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                      ✓
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section Navigation Footer Text */}
        <div className="text-center text-gray-600 max-w-3xl mx-auto">
          <p className="text-base">
            Want to see our real work results? View our successful projects in the{' '}
            <button 
              onClick={() => {
                const el = document.getElementById('gallery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Gallery
            </button>
            . Need expert guidance? Visit our{' '}
            <button 
              onClick={() => {
                const el = document.getElementById('faq');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              FAQ section
            </button>{' '}
            or{' '}
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Contact Us
            </button>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;


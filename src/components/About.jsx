import React from 'react'
import WaterEffects from './WaterEffects'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden water-wave-bg water-surface">
      <WaterEffects variant="waves" />
      <div className="hidden md:block water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Expert Borewell Contractors With 18+ Years Experience
            </h2>
            <p className="text-xl text-blue-600 font-semibold max-w-3xl mx-auto">
              Trusted Borewell Contractor in Vadodara, Gujarat for Reliable Water Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Amidhara Borewell?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With years of experience in the industry, Amidhara Borewell has established itself as a 
                leading provider of borewell services. We combine technical expertise with a commitment 
                to quality and customer satisfaction.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of skilled professionals uses state-of-the-art equipment and follows industry 
                best practices to deliver reliable and efficient water solutions for both residential 
                and commercial clients.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Experienced and certified professionals</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Modern equipment and technology</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Transparent pricing with no hidden costs</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">24/7 customer support and emergency services</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">100% customer satisfaction guarantee</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-slate-200/50 water-shimmer border border-blue-100/90 relative z-10">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-100/70 shadow-sm">
                  <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-1 tracking-tight">1300+</div>
                  <div className="text-slate-700 font-bold text-sm">Projects Completed</div>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-100/70 shadow-sm">
                  <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-1 tracking-tight">18+</div>
                  <div className="text-slate-700 font-bold text-sm">Years of Experience</div>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-100/70 shadow-sm">
                  <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-1 tracking-tight">98%</div>
                  <div className="text-slate-700 font-bold text-sm">Customer Satisfaction</div>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-100/70 shadow-sm">
                  <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-1 tracking-tight">24/7</div>
                  <div className="text-slate-700 font-bold text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-600 max-w-3xl mx-auto pt-6 border-t border-gray-200">
            <p className="text-base">
              Learn more about our{' '}
              <button 
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-blue-800 font-semibold underline hover:text-blue-950"
                aria-label="Navigate to Services section"
              >
                Services
              </button>
              {' '}or view completed borewell projects in our{' '}
              <button 
                onClick={() => {
                  const el = document.getElementById('gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-blue-800 font-semibold underline hover:text-blue-950"
                aria-label="Navigate to Gallery section"
              >
                Gallery
              </button>
              . For pricing and consultation,{' '}
              <button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-blue-800 font-semibold underline hover:text-blue-950"
                aria-label="Navigate to Contact section"
              >
                Contact Us Today
              </button>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


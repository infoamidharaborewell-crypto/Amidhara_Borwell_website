import React, { useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import WaterEffects from "./WaterEffects";

const testimonialsData = [
  {
    id: 1,
    name: "Drashti gevariya",
    location: "Vadodara",
    role: "Verified Google Customer",
    service: "Borewell Drilling & Water Service",
    rating: 5,
    comment:
      "I recently used the service of Amidhara Borewell and I am very satisfied with their work. The team arrived on time and completed the work in a professional manner. They checked the location carefully before starting and used good equipment. Their Borewell Service is reliable and the Water Drilling work was done smoothly",
    initials: "DG",
    bgGradient: "from-blue-600 to-indigo-700"
  },
  {
    id: 2,
    name: "Mayur Karmur",
    location: "Vadodara",
    role: "Verified Google Customer",
    service: "Borewell Drilling Work",
    rating: 5,
    comment:
      "Best for drilling, and working good, and the owner is Gentle-natured i full fill my request , and requirements, so i highly recommend working with them",
    initials: "MK",
    bgGradient: "from-emerald-600 to-teal-700"
  },
  {
    id: 3,
    name: "Komil Sharda",
    location: "Vadodara",
    role: "Verified Google Customer",
    service: "Borewell Drilling & Service",
    rating: 4.5,
    comment:
      "I recently contacted Amidhara Borewell for borewell drilling work and I am satisfied with their service. The team arrived on time and handled the work in a professional manner. They explained the drilling process clearly and used proper equipment during the work. The job was completed within the promised time without any issues. Overall, a reliable and trustworthy borewell service with reasonable pricing",
    initials: "KS",
    bgGradient: "from-sky-600 to-blue-700"
  },
  {
    id: 4,
    name: "Meetrajsinh Rathod",
    location: "Vadodara",
    role: "Verified Google Customer",
    service: "Borewell Support & Drilling",
    rating: 5,
    comment:
      "Amidhara Borewell provides very good customer support and quality work. The staff is experienced and cooperative, and they explained the entire drilling process clearly. The work was completed efficiently and without any problems. I recommend them to anyone looking for dependable Borewell Service and professional Water Drilling",
    initials: "MR",
    bgGradient: "from-indigo-600 to-purple-700"
  },
  {
    id: 5,
    name: "Solanki Harshit",
    location: "Tarsali, Vadodara",
    role: "Verified Google Customer",
    service: "Borewell Service & Equipment",
    rating: 4,
    comment:
      "AMIDHARA Borewell in Tarsali, Vadodara provides excellent service with skilled staff and modern equipment. Their team handled the entire drilling process smoothly and maintained good professionalism throughout. The work quality is impressive, and the overall experience was satisfying. A reliable option for anyone needing borewell services in the area",
    initials: "SH",
    bgGradient: "from-teal-600 to-cyan-700"
  },
  {
    id: 6,
    name: "Henish Rana",
    location: "Vadodara",
    role: "Verified Google Customer",
    service: "Borewell Drilling Contractor",
    rating: 5,
    comment:
      "Good experience with Amidhara Borewell. The staff was cooperative and handled the drilling work very efficiently. Their drilling service and knowledge about borewell work is very good. They completed the work within the expected time and maintained proper communication during the process. If anyone needs a dependable borewell contractor, this is a good option.",
    initials: "HR",
    bgGradient: "from-blue-700 to-slate-800"
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, disable: 'mobile' });
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex text-yellow-400 text-base space-x-1 items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalf && <FaStarHalfAlt key="half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-slate-200" />
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/50 relative overflow-hidden water-wave-bg water-surface"
    >
      <WaterEffects variant="waves" />

      {/* Floating bubbles */}
      <div className="hidden md:block water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center space-x-2 bg-blue-100/90 border border-blue-200 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs md:text-sm font-bold text-blue-800 mb-4 shadow-sm">
            <FcGoogle className="text-lg" />
            <span>Google Reviews &amp; Ratings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            What Our Clients Say About <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">Amidhara Borewell</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Real customer reviews for borewell drilling, pump installation, and water services across Vadodara.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-slate-200/80">
            <div className="flex items-center space-x-3">
              <FcGoogle className="text-3xl" />
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-extrabold text-slate-900">4.9</span>
                  <div className="flex text-yellow-400 text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-semibold">Google Verified Rating</span>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="text-left text-xs sm:text-sm">
              <span className="font-bold text-slate-900 block">1,500+ Happy Customers</span>
              <span className="text-slate-500">Vadodara, Gujarat</span>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <FaCheckCircle />
              <span>100% Water Success Rate</span>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white rounded-2xl p-7 shadow-xl shadow-slate-200/60 border border-slate-200/80 hover:shadow-2xl hover:shadow-blue-600/15 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Header: Rating & Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  {renderStars(item.rating)}
                  <div className="flex items-center space-x-1.5 bg-slate-100 px-2.5 py-1 rounded-full text-xs font-semibold text-slate-600">
                    <FcGoogle className="text-sm" />
                    <span>Google Review</span>
                  </div>
                </div>

                {/* Service Tag */}
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-lg border border-blue-100 mb-4">
                  {item.service}
                </span>

                {/* Comment Text */}
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Location Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.bgGradient} text-white font-extrabold flex items-center justify-center text-sm shadow-md`}>
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <FaCheckCircle className="text-blue-600 text-xs" title="Verified Customer" />
                    </h3>
                    <p className="text-slate-500 text-xs flex items-center gap-1">
                      <FaMapMarkerAlt className="text-rose-500 text-[10px]" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-amber-600 block">{item.rating} ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Want Reliable Borewell &amp; Water Pump Services in Vadodara?
          </h3>
          <p className="text-slate-600 text-base mb-6 max-w-xl mx-auto">
            Join Henish, Meetrajsinh, Harshit, Drashti, Mayur, Komil, and 1,500+ satisfied clients. Contact our experts today for a free site inspection and instant quote.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg shadow-blue-700/25 transition-all hover:scale-105 min-h-[50px]"
            aria-label="Get Free Quote button"
          >
            Get Free Quote Now →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

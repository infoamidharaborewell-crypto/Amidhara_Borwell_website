import React, { useState } from "react";
import WaterEffects from "./WaterEffects";

const faqsData = [
  {
    question: "What is the deepest borewell that can be drilled in Vadodara?",
    answer:
      "Using advanced rotary and DTH drilling machinery, we can drill borewells up to 1,500 feet deep depending on the soil structure and groundwater level in your area.",
  },
  {
    question: "Which borewell drilling techniques do you use?",
    answer:
      "We use modern Rotary and DTH (Down-The-Hole) drilling technology, which ensures faster drilling and greater precision for residential, commercial, and agricultural projects.",
  },
  {
    question: "How long does a borewell installation take in Vadodara?",
    answer:
      "Most borewell drilling and installation projects take around 3–7 days depending on depth and soil conditions.",
  },
  {
    question: "Do you provide water quality testing services?",
    answer:
      "Yes, we offer complete water testing including TDS, pH, hardness and safety checks to ensure the water is suitable for drinking or usage.",
  },
  {
    question: "Do you offer borewell maintenance and repair?",
    answer:
      "Yes, we provide repair, cleaning, pump servicing, borewell flushing, and troubleshooting for low water output or pump failure.",
  },
  {
    question: "Which locations do you cover?",
    answer:
      "We serve the entire Vadodara region including Tarsali, Manjalpur, Makarpura, Atladara, Gotri, Waghodia Road, Ajwa Road, and nearby areas across Gujarat.",
  },
  {
    question: "Do you provide emergency borewell services?",
    answer:
      "Yes, we offer 24/7 emergency borewell and submersible pump support for urgent breakdowns.",
  },
  {
    question: "What is the approximate cost of a borewell in Vadodara?",
    answer:
      "Borewell drilling cost depends on depth, diameter, soil, and pump type. Contact us for a free estimate.",
  },
  {
    question: "How do you check water availability before drilling?",
    answer:
      "We perform geological and geophysical groundwater surveys to ensure the most promising drilling point.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden water-wave-bg water-surface"
    >
      {/* Water Effects */}
      <WaterEffects variant="waves" />

      {/* Bubbles */}
      <div className="hidden md:block water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 faq-page">
        
        {/* Header */}
        <div className="faq-header text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Borewell FAQ – Common Questions Answered
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Helpful answers related to borewell drilling, maintenance, pumps, and water solutions in Vadodara.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-container max-w-4xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`faq-card bg-white rounded-xl shadow-md p-5 border border-blue-100 transition-all ${
                openIndex === index ? "open" : ""
              }`}
            >
              <button
                type="button"
                className="faq-question w-full text-left cursor-pointer flex justify-between items-center bg-transparent border-0 p-0 focus:outline-none min-h-[44px]"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-label={`Toggle answer for: ${faq.question}`}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 m-0">{faq.question}</h3>
                <span className="text-2xl font-bold text-blue-600 ml-4 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer – shown only when open */}
              {openIndex === index && (
                <div className="faq-answer mt-4 pt-3 border-t border-gray-100 text-gray-700 leading-relaxed text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="faq-contact mt-16 text-center bg-white p-8 md:p-10 rounded-2xl shadow-lg max-w-3xl mx-auto border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Still Have Questions? We’re Here to Help!
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-base">
            Speak to our experts today for accurate guidance and project assessment.
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg min-h-[48px]"
            onClick={() => (window.location.href = 'tel:+919106604895')}
            aria-label="Call Amidhara Borewell at +91 91066 04895"
          >
            Call Now – +91 91066 04895
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

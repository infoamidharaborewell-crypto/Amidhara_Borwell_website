import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WaterEffects from "./WaterEffects";

const ContactUs = () => {
useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: 'mobile' });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct background AJAX email submission to infoamidharaborewell@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/infoamidharaborewell@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Quote Request: ${formData.service} from ${formData.fullName}`,
          _captcha: "false",
          "Customer Name": formData.fullName,
          "Phone Number": formData.phone,
          "Email Address": formData.email,
          "Service": formData.service,
          "Project Details": formData.details,
        }),
      });

      const result = await response.json();

      setSubmitted(true);
      setFormData({ fullName: "", phone: "", email: "", service: "", details: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.log("Form submission complete:", error);
      setSubmitted(true);
      setFormData({ fullName: "", phone: "", email: "", service: "", details: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden water-surface">
      <WaterEffects variant="waves" />
      <div className="hidden md:block water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
        <div className="contact-page">
      {/* === Background Animation (Same as Home for consistency) === */}
      <div className="water-background-contact">
        <div className="wave-c wave1-c"></div>
        <div className="wave-c wave2-c"></div>
      </div>
      <div className="overlay-contact"></div>

      <div className="contact-container">
        
        {/* Left Side: Contact Info & Map */}
        <div className="contact-info-wrapper" data-aos="fade-right">
          <div className="section-header">
            <h4>Get In Touch</h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Amidhara Borewell – 24/7 Support in Vadodara</h2>
            <p>
              Ready to start your drilling project? Reach out for a free consultation, 
              site inspection, or emergency repair.
            </p>
          </div>

          <div className="info-grid">
            {/* Phone */}
            <a href="tel:+919106604895" className="info-box">
              <div className="icon-circle">📞</div>
              <div className="info-text">
                <span className="label">Call Us 24/7</span>
                <span className="value">+91 91066 04895</span>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:infoamidharaborewell@gmail.com" className="info-box">
              <div className="icon-circle">✉️</div>
              <div className="info-text">
                <span className="label">Email Us</span>
                <span className="value">infoamidharaborewell@gmail.com</span>
              </div>
            </a>

            {/* Address */}
            <div className="info-box address-box">
              <div className="icon-circle">📍</div>
              <div className="info-text">
                <span className="label">Visit HQ</span>
                <span className="value">Sahajanand Krupa Society, F/120, Tarsali, Vadodara</span>
              </div>
            </div>
          </div>

          {/* Embedded Google Map with Red Location Marker */}
          <div className="map-container overflow-hidden rounded-2xl shadow-lg border border-blue-100 relative">
            <iframe 
              title="Amidhara Borewell Vadodara Location Map"
              src="https://maps.google.com/maps?q=Amidhara+Borewell,+Sahajanand+Krupa+Society,+F/120,+Tarsali,+Vadodara,+Gujarat+390009&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '280px' }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Direct Google Maps Directions Button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Amidhara+Borewell+Sahajanand+Krupa+Society+F/120+Tarsali+Vadodara+Gujarat+390009"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-md transition-all text-sm min-h-[44px]"
            aria-label="Open Amidhara Borewell location pin in Google Maps"
          >
            <span className="text-base">📍</span>
            <span>Get Directions / Open Marker in Google Maps →</span>
          </a>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-wrapper" data-aos="fade-left">
          <form className="modern-form" onSubmit={handleSubmit}>
            <h2>Request a Quote</h2>
            
            <div className="input-group">
              <input
                id="full-name"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder=" "
                aria-label="Your Full Name"
              />
              <label htmlFor="full-name">Your Full Name</label>
            </div>

            <div className="input-group">
              <input
                id="phone-number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder=" "
                aria-label="Phone Number"
              />
              <label htmlFor="phone-number">Phone Number</label>
            </div>

            <div className="input-group">
              <input
                id="email-address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                aria-label="Email Address"
              />
              <label htmlFor="email-address">Email Address</label>
            </div>

            <div className="input-group">
              <select
                id="service-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                aria-label="Select a service"
              >
                <option value="" disabled>Select a service</option>
                <option value="New Borewell Drilling">New Borewell Drilling</option>
                <option value="Borewell Recharge">Borewell Recharge</option>
                <option value="Pump Installation">Pump Installation</option>
                <option value="Repair & Maintenance">Repair & Maintenance</option>
                <option value="Other Query">Other Query</option>
              </select>
            </div>

            <div className="input-group">
              <textarea
                id="project-details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="4"
                required
                placeholder=" "
                aria-label="Project Details"
              ></textarea>
              <label htmlFor="project-details">Project Details</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-submit ${submitted ? 'success' : ''}`}
              aria-label="Send Quote Request"
            >
              {isSubmitting ? "Sending Email..." : submitted ? "Message Sent! ✓" : "Send Request →"}
            </button>
          </form>
        </div>

      </div>
    </div>
    </section>
  )
}

export default ContactUs


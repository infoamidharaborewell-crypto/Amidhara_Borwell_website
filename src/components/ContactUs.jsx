import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WaterEffects from "./WaterEffects";

const ContactUs = () => {
useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send data to a backend
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };


  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden water-surface">
      <WaterEffects variant="waves" />
      <div className="water-bubbles">
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

          {/* Embedded Google Map */}
          <div className="map-container">
            <iframe 
              title="Amidhara Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.657477835678!2d73.1935!3d22.2537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE1JzEzLjMiTiA3M8KwMTEnMzYuNiJF!5e0!3m2!1sen!2sin!4v1632928452918!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-wrapper" data-aos="fade-left">
          <form className="modern-form" onSubmit={handleSubmit}>
            <h2>Request a Quote</h2>
            
            <div className="input-group">
              <input type="text" required placeholder=" " />
              <label>Your Full Name</label>
            </div>

            <div className="input-group">
              <input type="tel" required placeholder=" " />
              <label>Phone Number</label>
            </div>

            <div className="input-group">
              <input type="email" required placeholder=" " />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <select required>
                <option value="" disabled selected>Select a service</option>
                <option>New Borewell Drilling</option>
                <option>Borewell Recharge</option>
                <option>Pump Installation</option>
                <option>Repair & Maintenance</option>
                <option>Other Query</option>
              </select>
            </div>

            <div className="input-group">
              <textarea rows="4" required placeholder=" "></textarea>
              <label>Project Details</label>
            </div>

            <button type="submit" className={`btn-submit ${submitted ? 'success' : ''}`}>
              {submitted ? "Message Sent! ✓" : "Send Request →"}
            </button>
          </form>
        </div>

      </div>
    </div>
    </section>
  )
}

export default ContactUs


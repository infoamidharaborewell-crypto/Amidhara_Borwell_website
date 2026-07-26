import React, { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import "./WhatsappButton.css";

const WhatsappButton = () => {
  const [open, setOpen] = useState(true);

  const phone = "919825126833";
  const whatsappMsg = "Hello Amidhara Borewell, I need help with borewell services...";

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col items-start gap-3">
      {/* Floating Action Buttons */}
      <div className={`flex flex-col gap-2.5 transition-all duration-300 transform origin-bottom ${open ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}>
        {/* Call Button */}
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <FaPhone className="text-sm" />
          <span className="text-sm">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`}
          className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-base" />
          <span className="text-sm">WhatsApp</span>
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
        onClick={() => setOpen(!open)}
        aria-label="Toggle contact menu"
      >
        <FiMessageSquare className="text-xl" />
      </button>
    </div>
  );
};

export default WhatsappButton;

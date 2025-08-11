// src/components/WhatsAppFloat.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const whatsappNumber = "YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE"; // e.g., 919876543210
  const whatsappMessage = "Hi, I'm interested in your services at ScaleBridge!";
  const whatsappLink = `https://wa.me/${+918929838874}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppFloat;

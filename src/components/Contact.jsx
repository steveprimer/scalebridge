import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "+918929838874";
  const whatsappMessage = "Hi, I'm interested in your services at ScaleBridge!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-black via-[#001233] to-black text-white py-0"
    >
      <div className="bg-gradient-to-b from-transparent via-transparent to-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            Click below to start a WhatsApp chat with us instantly.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            <FaWhatsapp size={28} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

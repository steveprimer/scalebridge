// src/components/Testimonials.jsx
import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Oliver S.",
    position: "Startup Founder, UK",
    quote:
      "ScaleBridge helped us scale faster than we imagined. The automation support alone saved us hundreds of hours!",
  },
  {
    name: "Emily J.",
    position: "E-commerce Manager, USA",
    quote:
      "Working with ScaleBridge was seamless. We saw results within weeks. Their global talent network is gold.",
  },
  {
    name: "Raj M.",
    position: "Marketing Director, India",
    quote:
      "We outsourced our lead gen to ScaleBridge and saw a 3x increase in qualified leads. Highly recommended!",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,

    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // mobile and small tablets
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-r from-black via-[#001233] to-black text-white py-20"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">
          What Our <span className="text-blue-400">Clients</span> Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#0f172a] border border-blue-800/40 rounded-xl shadow-md hover:shadow-blue-700 transition-shadow duration-700 ease-in-out text-left p-6 h-full">
                <p className="text-gray-100 italic mb-4">“{t.quote}”</p>
                <h4 className="text-lg font-semibold text-blue-600">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-100">{t.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

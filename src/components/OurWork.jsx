import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// 1. Import Swiper components and styles from a CDN to resolve the error
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles directly
import "swiper/css";
import "swiper/css/navigation";

// Mock data for case studies
const caseStudiesData = [
  {
    id: "futuronova",
    image: "/FuturoNova.png",
    title: "FuturoNova",
    category: "AI SaaS",
    status: "4 weeks",
  },
  {
    id: "nullvoid-studios",
    image: "/NullvoidStudios.png",
    title: "Nullvoid Studios",
    category: "Content Agency",
    status: "3 weeks",
  },
  {
    id: "aromatte-luxe",
    image: "/AromatteLuxe.png",
    title: "Aromatte Luxe",
    category: "E-commerce",
    status: "2 months",
  },
  {
    id: "evoque-wear",
    image: "/EvoqueWear.png",
    title: "Evoque Wear",
    category: "E-commerce",
    status: "Ongoing",
  },
];

// The Card component remains the same
const CaseStudyCard = ({ study }) => (
  <Link
    to={`/case-studies/${study.id}`}
    className="p-2 group cursor-pointer block"
  >
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <img
        src={study.image}
        alt={study.title}
        className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/800x600/1a1a1a/ffffff?text=Image+Error";
        }}
      />
    </div>
    <div className="pt-4 text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{study.title}</h3>
        <ArrowUpRight
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          size={24}
        />
      </div>
      <div className="flex justify-between text-zinc-400 mt-1 text-sm">
        <span>{study.category}</span>
        <span>{study.status}</span>
      </div>
    </div>
  </Link>
);

// The main component structure remains the same
export default function CaseStudy({ onNavigate }) {
  const swiperRef = useRef(null);

  return (
    <section className="bg-black pt-10 sm:pt-20 pb-16 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Case <span className="text-blue-400">Studies</span>
          </h2>
          <div className="flex space-x-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-blue-500 text-white p-3 rounded-full transition-all duration-300 hover:bg-black hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-blue-500 text-white p-3 rounded-full transition-all duration-300 hover:bg-black hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)]"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={10}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {caseStudiesData.map((study) => (
            <SwiperSlide key={study.id}>
              <CaseStudyCard study={study} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

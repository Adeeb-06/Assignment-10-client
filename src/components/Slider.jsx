import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Find Your Dream Home in Prime Locations",
    subtitle: "Explore premium properties in the best neighborhoods.",
    bg: "bg-primary/80",
    buttonText: "Explore Locations",
  },
  {
    id: 2,
    title: "Add & Manage Your Properties Easily",
    subtitle: "Post, edit, and manage listings with just a few clicks.",
    bg: "bg-secondary/80",
    buttonText: "Add Property",
  },
  {
    id: 3,
    title: "Trusted by Hundreds of Users",
    subtitle: "Join our growing community of property buyers and sellers.",
    bg: "bg-accent/80",
    buttonText: "Join Now",
  },
];

export default function Slider() {
  return (
    <div className="w-[90vw] mx-auto px- mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-96 rounded-3xl shadow-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.bg} w-full h-96 flex flex-col justify-center items-center text-white text-center px-6`}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg lg:text-2xl mb-6">{slide.subtitle}</p>
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

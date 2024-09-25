import React, { useState, useEffect, act } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../components/testimonialCard/TestimonialCard";

// Mocked array of clients
const clientsArr = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam!",
    img: "https://themewagon.github.io/restoran/img/testimonial-1.jpg",
    name: "Client Name 1",
    role: "Profession",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam!",
    img: "https://themewagon.github.io/restoran/img/testimonial-2.jpg",
    name: "Client Name 2",
    role: "Profession",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam!",
    img: "https://themewagon.github.io/restoran/img/testimonial-3.jpg",
    name: "Client Name 3",
    role: "Profession",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam!",
    img: "https://themewagon.github.io/restoran/img/testimonial-2.jpg",
    name: "Client Name 4",
    role: "Profession",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Adjust slidesPerView based on the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(1.5);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center mb-8">
        {/* Section Title */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            <p className="text-[#feaf39]">Testimonial</p>
            <div className="h-0.5 w-16 bg-[#feaf39]"></div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Clients Say!!!
          </h2>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop={true}
        modules={[Pagination]}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        style={{
          padding: "0px 20px",
          "--swiper-pagination-color": "#feaf39",
          "--swiper-pagination-bullet-inactive-color": "#999",
          "--swiper-pagination-bullet-size": "16px",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {clientsArr.map((item, index) => {
          const isMiddleCard = index === activeIndex;

          return (
            <SwiperSlide
              key={index}
              className={`pb-12 ${
                isMiddleCard ? "transform scale-100" : "transform scale-90"
              }`}
            >
              <TestimonialCard
                quote={item.quote}
                fullName={item.name}
                role={item.role}
                img={item.img}
                isActive={isMiddleCard} // Highlight middle card
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./testimonialSection.css"; // Custom CSS for the testimonial section
import TestimonialCard from "../components/testimonialCard/TestimonialCard";

// Mocked array of clients
const clientsArr = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam!",
    img: "https://themewagon.github.io/restoran/img/testimonial-1.jpg",
    name: "Client Name",
    role: "Profession",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam!",
    img: "https://themewagon.github.io/restoran/img/testimonial-2.jpg",
    name: "Client Name",
    role: "Profession",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam!",
    img: "https://themewagon.github.io/restoran/img/testimonial-3.jpg",
    name: "Client Name",
    role: "Profession",
  },
];

export default function TestimonialSection() {
  return (
    <div className="testimonialContainer">
      <div className="sectionHeader">
        <div className="sectionTopTitle">
          <div className="sectionTitleDivisor"></div>
          <p>Testimonial</p>
          <div className="sectionTitleDivisor"></div>
        </div>
        <h2>Our Clients Say!!!</h2>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {clientsArr.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              quote={item.quote}
              fullName={item.name}
              role={item.role}
              img={item.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

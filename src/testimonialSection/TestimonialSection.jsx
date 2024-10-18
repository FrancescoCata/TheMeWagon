import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../components/testimonialCard/TestimonialCard";
import { getReviews, postReview } from "../services/ReviewsService";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState({
    customer_name: "",
    customer_job: "",
    text: "",
  });

  const fetchReviews = async () => {
    try {
      const data = await getReviews();
      setReviews(data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  // Fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handlePost = async () => {
    try {
      // Post the new review
      await postReview(review);

      // Clear the form
      setReview({
        customer_name: "",
        customer_job: "",
        text: ""
      });

      // Close the modal
      toggleModal();

      // Refetch reviews after the new one is posted
      await fetchReviews();
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

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
      <div className="container mx-auto text-center mb-8 relative">
        {/* Section Title */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            <p className="text-[#feaf39] font-pacifico text-xl">Testimonial</p>
            <div className="h-0.5 w-16 bg-[#feaf39]"></div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Clients Say!!!
          </h2>
        </div>

        {/* Button to open modal */}
        <button
          className="absolute top-10 right-10 bg-[#feaf39] text-white px-4 py-2 rounded"
          onClick={toggleModal}
        >
          Add Review
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded shadow-lg max-w-md w-full relative">
              <h3 className="text-2xl font-semibold mb-4">
                Submit Testimonial
              </h3>

              {/* Form Inputs */}
              <form className="space-y-4">
                <div>
                  <label className="block text-left font-semibold">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    name="customer_name"
                    value={review.customer_name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-left font-semibold">
                    Customer Job
                  </label>
                  <input
                    type="text"
                    name="customer_job"
                    value={review.customer_job}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-left font-semibold">
                    Testimonial Text
                  </label>
                  <textarea
                    name="text"
                    value={review.text}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </form>

              {/* Modal Buttons */}
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  className="bg-[#feaf39] text-white px-4 py-2 rounded"
                  onClick={handlePost}
                >
                  POST
                </button>
              </div>
            </div>
          </div>
        )}
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
        {reviews.map((item, index) => {
          const isMiddleCard = index === activeIndex;

          return (
            <SwiperSlide
              key={index}
              className={`pb-12 ${
                isMiddleCard ? "transform scale-100" : "transform scale-90"
              }`}
            >
              <TestimonialCard
                quote={item.text}
                fullName={item.customer_name}
                role={item.customer_job}
                img={
                  "https://themewagon.github.io/restoran/img/testimonial-1.jpg"
                }
                isActive={isMiddleCard} // Highlight middle card
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

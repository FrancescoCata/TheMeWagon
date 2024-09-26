import { useState } from "react";

export default function BookATable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "1",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section (Video Background) */}
      <div
        className="relative w-full md:w-1/2 min-h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.1), rgba(15, 23, 43, 0.1)), url('https://themewagon.github.io/restoran/img/video.jpg')`,
        }}
      >
        {/* Play Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <span
            className="w-20 h-20 absolute rounded-full bg-[#feaf39] opacity-90 animate-ping"
            style={{ animationDuration: "2s" }}
          ></span>{" "}
          {/* Pulsing effect */}
          <button className="relative bg-[#feaf39] text-[#0f172b] w-24 h-24 rounded-full flex items-center justify-center z-10">
            <i className="fa fa-play fa-2x"></i>
          </button>
        </div>
      </div>

      {/* Right Section (Form with Dark Background) */}
      <div className="w-full md:w-1/2 bg-[#0f172b] text-white flex justify-center items-center py-6">
        <div className="w-11/12 md:w-3/4">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <p className="text-[#feaf39] font-medium pr-2">Reservation</p>
              <div className="w-12 h-[2px] bg-[#feaf39]"></div>
            </div>
            <h2 className="text-3xl font-semibold">Book A Table Online</h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
              <div className="flex-grow">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                />
              </div>
              <div className="flex-grow">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                />
              </div>
            </div>

            {/* Date and People */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
              <div className="flex-grow w-full md:w-6/12">
                <input
                  type="datetime-local"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                />
              </div>
              <div className="flex-grow w-full md:w-6/12">
                <select
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  required
                  className="w-full h-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div className="flex-grow">
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows="4"
                placeholder="Special Request"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#feaf39] text-white py-3 text-lg transition-colors duration-300"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

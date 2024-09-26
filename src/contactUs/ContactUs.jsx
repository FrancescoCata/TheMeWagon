import { useState } from "react";

export default function ContactUs() {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    note: "",
  });

  // Handle form input change
  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted", formData);

    // Clear form after submission 
    setFormData({
      name: "",
      email: "",
      subject: "",
      note: "",
    });
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Titles */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-[2px] bg-[#feaf39]"></div>
          <p className="text-[#feaf39] font-medium px-2">Contact Us</p>
          <div className="w-12 h-[2px] bg-[#feaf39]"></div>
        </div>
        <h3 className="text-4xl font-bold text-[#0f172b] mb-8">
          Contact for Any Query
        </h3>

        {/* Middle Section with 3 Divs */}
        <div className="flex flex-col md:flex-row justify-between items-start text-left space-y-6 md:space-y-0 mb-12">
          <div className="w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <h4 className="text-[#feaf39] font-medium pr-2">
                General Inquiries
              </h4>
              <div className="w-12 h-[2px] bg-[#feaf39]"></div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-envelope-open text-[#feaf39] mr-2"></i>
              <p className="text-lg">book@example.com</p>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <h4 className="text-[#feaf39] font-medium pr-2">Support</h4>
              <div className="w-12 h-[2px] bg-[#feaf39]"></div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-envelope-open text-[#feaf39] mr-2"></i>
              <p className="text-lg">support@example.com</p>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <h4 className="text-[#feaf39] font-medium pr-2">Partnerships</h4>
              <div className="w-12 h-[2px] bg-[#feaf39]"></div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-envelope-open text-[#feaf39] mr-2"></i>
              <p className="text-lg">partners@example.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Map and Form */}
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Left: Map placeholder */}
          <div className="w-full md:w-1/2 bg-gray-200 h-96 flex justify-center items-center">
            {/* Placeholder for future map implementation */}
            <p className="text-lg text-gray-500">Map Placeholder</p>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                <div className="flex-grow">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleValueChange}
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 border-solid p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleValueChange}
                    required
                    placeholder="Your Email"
                    className="w-full border border-gray-300 border-solid p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex-grow w-full">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleValueChange}
                  required
                  placeholder="Subject"
                  className="w-full border border-gray-300 border-solid p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                />
              </div>

              {/* Special Request */}
              <div className="flex-grow">
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleValueChange}
                  rows="4"
                  placeholder="Message"
                  className="w-full border border-gray-300 border-solid p-3 focus:outline-none focus:ring-2 focus:ring-[#feaf39] text-black"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#feaf39] text-white py-3 text-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

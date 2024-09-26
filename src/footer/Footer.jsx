import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0f172b] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-[#feaf39]">Company</p>
              <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            </div>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact us",
                "Reservation",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <i className="fa fa-chevron-right mr-2"></i>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-[#feaf39]">Contact</p>
              <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            </div>
            <ul className="space-y-2">
              <li>Email: info@company.com</li>
              <li>Phone: +123 456 789</li>
              <li>Address: 1234 Street Name, City</li>
              <li>
                <div className="flex space-x-2 mt-2">
                  {["twitter", "facebook-f", "youtube", "linkedin"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="flex items-center justify-center w-9 h-9 rounded-full border border-solid border-white text-white hover:bg-white hover:text-[#feaf39] transition-colors duration-300"
                      >
                        <i className={`fa fa-${platform}`}></i>
                      </a>
                    )
                  )}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-[#feaf39]">Opening</p>
              <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            </div>
            <div className="mb-2">
              Monday - Saturday
              <br />
              09AM - 09PM
            </div>
            <div>
              Sunday
              <br />
              10AM - 08PM
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-[#feaf39]">Newsletter</p>
              <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 px-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#feaf39] transition-all"
              />
              <button className="absolute h-5/6 right-2 top-1 px-3 bg-[#feaf39] text-white text-lg uppercase">
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-solid border-gray-600 mt-8" />
      </div>

      <div className="border-t border-gray-600 mt-4 p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between">
          <div>
            <div className="text-sm text-gray-400 pb-4">
              &copy; 2024 SiteName. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              &copy; 2024 SiteName. All rights reserved.
            </div>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400sm:mt-0">
            {["Home", "Cookies", "Help", "FAQs"].map((item) => (
              <a key={item} href="#" className="text-white text-md">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

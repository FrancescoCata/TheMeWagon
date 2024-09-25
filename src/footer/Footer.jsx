import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer class="bg-[#0f172b] text-white py-8">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-[#feaf39]">Company</p>
              <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            </div>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <i class="fa fa-chevron-right mr-2"></i>About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <i class="fa fa-chevron-right mr-2"></i>Contact us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <i class="fa fa-chevron-right mr-2"></i>Reservation
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <i class="fa fa-chevron-right mr-2"></i>Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <i class="fa fa-chevron-right mr-2"></i>Terms & Conditions
                </motion.a>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-[#feaf39]">Contact</p>
              <div className="h-0.5 w-16 bg-[#feaf39]"></div>
            </div>
            <ul class="space-y-2">
              <li>Email: info@company.com</li>
              <li>Phone: +123 456 789</li>
              <li>Address: 1234 Street Name, City</li>
              <li>
                <div class="flex space-x-2 mt-2">
                  <a
                    href="#"
                    class="flex items-center justify-center w-9 h-9 rounded-full border border-solid border-white text-white hover:bg-white hover:text-[#feaf39] transition-colors duration-300"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    class="flex items-center justify-center w-9 h-9 rounded-full border border-solid border-white text-white hover:bg-white hover:text-[#feaf39] transition-colors duration-300"
                  >
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    class="flex items-center justify-center w-9 h-9 rounded-full border border-solid border-white text-white hover:bg-white hover:text-[#feaf39] transition-colors duration-300"
                  >
                    <i class="fa fa-youtube"></i>
                  </a>
                  <a
                    href="#"
                    class="flex items-center justify-center w-9 h-9 rounded-full border border-solid border-white text-white hover:bg-white hover:text-[#feaf39] transition-colors duration-300"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
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
      </div>
      <div class="border-t border-gray-600 mt-8 py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div class="text-sm text-gray-400">
            &copy; 2024 SiteName. All rights reserved.
          </div>
          <div class="flex space-x-6 text-sm text-gray-400 mt-4 sm:mt-0">
            <a href="#" class="hover:underline">
              Home
            </a>
            <a href="#" class="hover:underline">
              Cookies
            </a>
            <a href="#" class="hover:underline">
              Help
            </a>
            <a href="#" class="hover:underline">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

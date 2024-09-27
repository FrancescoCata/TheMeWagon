// -- HOOKS
import { useState, useEffect } from "react";
// -- COMPONENTS
import { Link } from "react-router-dom";

export default function Header() {
  // # STATE
  const [openMenu, setOpenMenu] = useState(false);
  const [openPagesMenu, setOpenPagesMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // # FUNCTIONS
  const handleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handlePagesMenu = () => {
    setOpenPagesMenu((prevState) => !prevState);
  };

  // Closes menu after clicking on a link
  const handleLinkClick = () => {
    setOpenMenu(false);
    setOpenPagesMenu(false); // In case pages submenu is open
  };

  // # EFFECT FOR SCROLL AND RESIZE
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && isLargeScreen) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLargeScreen]);

  return (
    <div
      className={`${
        isScrolled || !isLargeScreen
          ? "fixed w-full left-0 bg-[#0F172B] shadow-lg transition-all duration-300"
          : "absolute w-[90%] bg-transparent"
      } top-0 z-50 p-4 mx-auto ${
        !isLargeScreen ? "bg-[#0f172b] w-full absolute" : ""
      }`}
    >
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center">
          <i className="fa fa-utensils text-white"></i>
          <a href="#" className="text-[#feaf39] ml-2 font-bold text-3xl">
            RESTORAN
          </a>
        </div>
        <div className="hidden lg:flex space-x-6 items-center">
          {/* Use Link to enable navigation */}
          <Link
            to="/"
            className="text-white cursor-pointer hover:text-yellow-500"
            onClick={handleLinkClick}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-white cursor-pointer hover:text-yellow-500"
            onClick={handleLinkClick}
          >
            ABOUT
          </Link>
          <Link
            to="/info"
            className="text-white cursor-pointer hover:text-yellow-500"
            onClick={handleLinkClick}
          >
            SERVICE
          </Link>
          <Link
            to="/menu"
            className="text-white cursor-pointer hover:text-yellow-500"
            onClick={handleLinkClick}
          >
            MENU
          </Link>
          <div className="relative">
            <div
              className="text-white cursor-pointer"
              onClick={handlePagesMenu}
            >
              PAGES
            </div>
            {openPagesMenu && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md p-2 rounded-lg">
                {/* Dropdown menu links */}
                <Link
                  to="/book"
                  className="hover:bg-gray-100 p-2 block"
                  onClick={handleLinkClick}
                >
                  Booking
                </Link>
                <Link
                  to="/team"
                  className="hover:bg-gray-100 p-2 block"
                  onClick={handleLinkClick}
                >
                  Our Team
                </Link>
                <Link
                  to="/testimonials"
                  className="hover:bg-gray-100 p-2 block"
                  onClick={handleLinkClick}
                >
                  Testimonial
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact-us"
            className="text-white cursor-pointer hover:text-yellow-500"
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
          <Link
            to="/book"
            className="bg-[#feaf39] text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            onClick={handleLinkClick}
          >
            BOOK A TABLE
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={handleMenu} className="text-white">
            MENU
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="lg:hidden bg-[#0f172b] text-white p-4">
          <Link
            to="/"
            className="block py-2 text-white"
            onClick={handleLinkClick}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="block py-2 text-white"
            onClick={handleLinkClick}
          >
            ABOUT
          </Link>
          <Link
            to="/info"
            className="block py-2 text-white"
            onClick={handleLinkClick}
          >
            SERVICE
          </Link>
          <Link
            to="/menu"
            className="block py-2 text-white"
            onClick={handleLinkClick}
          >
            MENU
          </Link>
          <div
            className="block py-2 text-white cursor-pointer"
            onClick={handlePagesMenu}
          >
            PAGES
          </div>
          {openPagesMenu && (
            <div className="bg-white p-4">
              <Link
                to="/book"
                className="py-2 block text-black"
                onClick={handleLinkClick}
              >
                Booking
              </Link>
              <Link
                to="/team"
                className="py-2 block text-black"
                onClick={handleLinkClick}
              >
                Our Team
              </Link>
              <Link
                to="/testimonials"
                className="py-2 block text-black"
                onClick={handleLinkClick}
              >
                Testimonial
              </Link>
            </div>
          )}
          <Link
            to="/contact-us"
            className="block py-2 text-white"
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
          <Link
            to="/book"
            className="bg-[#feaf39] text-white py-2 px-4 rounded"
            onClick={handleLinkClick}
          >
            BOOK A TABLE
          </Link>
        </div>
      )}
    </div>
  );
}

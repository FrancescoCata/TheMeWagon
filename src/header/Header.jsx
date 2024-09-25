// -- HOOKS
import { useState, useEffect } from "react";

export default function Header() {
  // # STATE
  const [openMenu, setOpenMenu] = useState(false);
  const [openPagesMenu, setOpenPagesMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // # FUNCTIONS
  const handleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handlePagesMenu = () => {
    setOpenPagesMenu((prevState) => !prevState);
  };

  // # EFFECT FOR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "fixed w-full left-0 bg-[#0F172B] shadow-lg transition-all duration-300"
          : "absolute w-[90%] bg-transparent"
      } top-0 z-50 p-4 mx-auto`}
    >
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center">
          <i className="fa fa-utensils text-white"></i>
          <a href="#" className="text-white ml-2 font-bold text-xl">
            RESTORAN
          </a>
        </div>
        <div className="hidden lg:flex space-x-6 items-center">
          <p className="text-white">HOME</p>
          <p className="text-white">ABOUT</p>
          <p className="text-white">SERVICE</p>
          <p className="text-white">MENU</p>
          <div className="relative">
            <div
              className="text-white cursor-pointer"
              onClick={handlePagesMenu}
            >
              PAGES
            </div>
            {openPagesMenu && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md p-2 rounded-lg">
                <p className="hover:bg-gray-100 p-2">Booking</p>
                <p className="hover:bg-gray-100 p-2">Our Team</p>
                <p className="hover:bg-gray-100 p-2">Testimonial</p>
              </div>
            )}
          </div>
          <p className="text-white">CONTACT</p>
          <button className="bg-[#feaf39] text-white py-2 px-4 rounded">
            BOOK A TABLE
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={handleMenu} className="text-white">
            MENU
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="lg:hidden bg-white text-black p-4">
          <a className="block py-2 text-black">HOME</a>
          <a className="block py-2 text-black">ABOUT</a>
          <a className="block py-2 text-black">SERVICE</a>
          <a className="block py-2 text-black">MENU</a>
          <div className="block py-2 text-black cursor-pointer" onClick={handlePagesMenu}>
            PAGES
          </div>
          {openPagesMenu && (
            <div className="">
              <p className="py-2 text-black">Booking</p>
              <p className="py-2 text-black">Our Team</p>
              <p className="py-2 text-black">Testimonial</p>
            </div>
          )}
          <a className="block py-2 text-black">CONTACT</a>
          <button className="bg-[#feaf39] text-white py-2 px-4 rounded">
            BOOK A TABLE
          </button>
        </div>
      )}
    </div>
  );
}

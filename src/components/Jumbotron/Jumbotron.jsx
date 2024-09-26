import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Jumbotron({ location }) {
  // Helper function to capitalize the route name
  const capitalize = (s) => s.charAt(1).toUpperCase() + s.slice(2);

  // Extract the current path and convert it to a title format
  const currentPath = location.pathname === "/" ? "Home" : capitalize(location.pathname);
  const fullPath = location.pathname === "/" ? "Home" : `Home / ${capitalize(location.pathname)}`;

  return (
    <div className="bg-[linear-gradient(rgba(15,23,43,0.9),rgba(15,23,43,0.9)),url('https://themewagon.github.io/restoran/img/bg-hero.jpg')] bg-center bg-no-repeat bg-cover my-16 lg:mt-0">
      <div className="h-full flex flex-col lg:flex-row justify-between items-center p-8 lg:p-20">
        {location.pathname === "/" ? (
          <>
            {/* Left Section */}
            <div className="w-full lg:w-1/2 text-white flex flex-col lg:pr-8 lg:py-10 items-center lg:items-start">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
                Enjoy Our Delicious Meal
              </h1>
              <p className="text-lg mb-6 text-center lg:text-left">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <button className="bg-[#feaf39] text-white font-medium text-base uppercase py-4 px-8 shadow transition hover:bg-yellow-500 w-48">
                BOOK A TABLE
              </button>
            </div>

            {/* Right Section with Animated Image */}
            <motion.div
              className="w-1/2 lg:w-3/5 flex justify-center items-center lg:pt-0 pt-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <img
                src="https://themewagon.github.io/restoran/img/hero.png"
                alt="Delicious Meal"
                className="w-full h-auto"
              />
            </motion.div>
          </>
        ) : (
          <div className="flex justify-center flex-col items-center w-full text-white p-4 py-10">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {currentPath}
            </h1>
            {/* Path */}
            <p className="text-base md:text-lg">{fullPath}</p>
          </div>
        )}
      </div>
    </div>
  );
}

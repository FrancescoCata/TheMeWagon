import "./tailwind-output.css";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";

// -- COMPONENTS
import Header from "./header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import InfoCardSection from "./infoCardSection/InfoCardSection";
import AboutUsSection from "./aboutUsSection/AboutUsSection";
import Menu from "./menu/Menu";
import BookATable from "./bookATableSection/BookATableSection";
import TeamSection from "./teamSection/TeamSection";
import TestimonialSection from "./testimonialSection/TestimonialSection";
import Footer from "./footer/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App w-full lg:w-[90%] bg-white mx-auto">
      <Header />
      <Jumbotron />
      <InfoCardSection />
      <AboutUsSection />
      <Menu />
      <BookATable />
      <TeamSection />
      <TestimonialSection />
      <Footer />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#feaf39] text-white w-12 h-12 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
          aria-label="Scroll to top"
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;

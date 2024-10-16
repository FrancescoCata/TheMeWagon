import "./tailwind-output.css";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setRestaurants,
  getReduxRestaurants,
} from "./store/slices/RestaurantSlice";
import { getRestaurants } from "./services/RestaurantsService";
import { selectIsAuthenticated } from "./store/slices/AuthSlice";

// -- COMPONENTS
import Layout from "./Layout";
import InfoCardSection from "./infoCardSection/InfoCardSection";
import AboutUsSection from "./aboutUsSection/AboutUsSection";
import Menu from "./menu/Menu";
import BookATable from "./bookATableSection/BookATableSection";
import TeamSection from "./teamSection/TeamSection";
import TestimonialSection from "./testimonialSection/TestimonialSection";
import ContactUs from "./contactUs/ContactUs";
import Login from "./components/login/Login";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const restaurants = useSelector(getReduxRestaurants);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Scroll event listener
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fetch restaurants and store them in Redux
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurants = await getRestaurants();
        dispatch(setRestaurants(restaurants));
      } catch (error) {
        console.error("Failed to fetch restaurants", error);
      }
    };

    fetchRestaurants();
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Routes>
        {/* Login route is always accessible */}
        <Route path="/login" element={<Login />} />

        {/* Redirect to login if user is not authenticated */}
        {!isAuthenticated ? (
          <Route path="*" element={<Navigate to="/login" replace />} />
        ) : (
          <>
            {/* Home route shows all sections */}
            <Route
              path="/"
              element={
                <>
                  <InfoCardSection />
                  <AboutUsSection />
                  <Menu />
                  <BookATable />
                  <TeamSection />
                  <TestimonialSection />
                </>
              }
            />
            {/* Individual section routes */}
            <Route path="/info" element={<InfoCardSection />} />
            <Route
              path="/about"
              element={
                <>
                  <AboutUsSection />
                  <TeamSection />
                </>
              }
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/book" element={<BookATable />} />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/testimonials" element={<TestimonialSection />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </>
        )}
      </Routes>

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
    </Layout>
  );
}

export default App;

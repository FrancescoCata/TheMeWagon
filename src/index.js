import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";

// -- COMPONENTS
import App from "./App";
import AboutUsSection from "./aboutUsSection/AboutUsSection";
import InfoCardSection from "./infoCardSection/InfoCardSection";
import Menu from "./menu/Menu";
import BookATable from "./bookATableSection/BookATableSection";
import TeamSection from "./teamSection/TeamSection";
import TestimonialSection from "./testimonialSection/TestimonialSection";
import ContactUs from "./contactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutUsSection />,
      },
      {
        path: "/info",
        element: <InfoCardSection />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/book",
        element: <BookATable />
      },
      {
        path: "/team",
        element: <TeamSection />
      },
      {
        path: "/testimonials",
        element: <TestimonialSection />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

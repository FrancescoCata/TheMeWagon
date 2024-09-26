import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
        element: <InfoCardSection/>
      },
      {
        path: "/menu",
        element: <Menu/>
      },
      {
        path: "/book",
        element: <BookATable/>
      },
      {
        path: "/team",
        element: <TeamSection/>
      },
      {
        path: "/testimonials",
        element: <TestimonialSection/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

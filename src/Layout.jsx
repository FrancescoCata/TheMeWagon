// Layout.js
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
// -- ROUTING
import { useLocation } from "react-router";

const Layout = ({ children }) => {

    const location = useLocation();

  return (
    <div className="App w-full lg:w-[90%] bg-white mx-auto">
      <Header />
      <Jumbotron location={location}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

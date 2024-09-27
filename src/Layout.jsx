// Layout.js
import React, { useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
// -- ROUTING
import { useLocation } from "react-router";

const Layout = ({ children }) => {

  const location = useLocation();

  useEffect(() =>{
    window.scrollTo(0,0)
  },[location])

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

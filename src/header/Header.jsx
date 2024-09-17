// -- STYLE
import "./header.css";
// -- HOOKS
import { useState } from "react";

export default function Header() {
  // # STATE
  const [openMenu, setOpenMenu] = useState(false);
  const [openPagesMenu, setOpenPagesMenu] = useState(false);

  // # FUNCTIONS
  const handleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handlePagesMenu = () => {
    setOpenPagesMenu((prevState) => !prevState);
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div>
          <i class="fa-solid fa-tree"></i>
          <a href="#">RESTORAN</a>
        </div>
        <div className="wideMenu">
          <p className="menuLinks">HOME</p>
          <p className="menuLinks">ABOUT</p>
          <p className="menuLinks">SERVICE</p>
          <p className="menuLinks">MENU</p>
          <div className="menuLinks pages" onClick={handlePagesMenu}>
            PAGES
            {openPagesMenu && (
              <div className="pagesMenu">
                <p>Booking</p>
                <p>Our Team</p>
                <p>Testimonial</p>
              </div>
            )}
          </div>
          <p className="menuLinks">CONTACT</p>
          <button className="bookATable">BOOK A TABLE</button>
        </div>
        <div className="menuButton">
          <button onClick={handleMenu}>MENU</button>
        </div>
      </div>
      {openMenu && (
        <div className="menuContainer">
          <div className="pagesContainer">
            <a className="menuLinks">HOME</a>
            <a className="menuLinks">ABOUT</a>
            <a className="menuLinks">SERVICE</a>
            <a className="menuLinks">MENU</a>
            <div className="menuLinks" onClick={handlePagesMenu}>
              PAGES
            </div>
            {openPagesMenu && (
              <div className="mobilePagesNav">
                <p className="pagesNav">Booking</p>
                <p className="pagesNav">Our Team</p>
                <p className="pagesNav">Testimonial</p>
              </div>
            )}
            <a className="menuLinks">CONTACT</a>
            <button className="bookATable">BOOK A TABLE</button>
          </div>
        </div>
      )}
    </div>
  );
}

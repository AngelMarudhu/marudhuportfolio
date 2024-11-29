import React, { useState } from "react";
import "../CSS/Nav.css";
import images from "../Utils/Index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="nav">
      <div className="nav_navbar">
        {/* Logo Section */}
        <img
          className="nav_logo"
          src={images.assets.home}
          alt="Portfolio Logo"
        />

        {/* Header Section */}
        <header className="nav_header">You've Reached Me 🚀</header>

        {/* Menu Button for Mobile */}
        <button className="menu_button" onClick={toggleMenu}>
          {/* Use a hamburger icon */}
          <span className="menu_icon">☰</span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav_links ${toggle ? "show_menu" : ""}`}>
          <li>
            <a href="#main" className="nav_link">
              Main
            </a>
          </li>
          <li>
            <a href="#about" className="nav_link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="nav_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#footer" className="nav_link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

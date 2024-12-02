import React, { useState, useRef, useEffect } from "react";
import "../CSS/Nav.css";
import images from "../Utils/Index";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setToggle(false); // Close the menu if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.addEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav_navbar">
        {/* Logo Section */}
        <Link to="/">
          <img
            className="nav_logo"
            src={images.assets.logo}
            alt="Portfolio Logo"
          />
        </Link>

        {/* Header Section */}
        <header className="nav_header">Crafting Code, Building Dreams</header>

        {/* Menu Button for Mobile */}
        <button className="menu_button" onClick={toggleMenu}>
          {/* Use a hamburger icon */}
          <span className="menu_icon">☰</span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav_links ${toggle ? "show_menu" : ""}`} ref={menuRef}>
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

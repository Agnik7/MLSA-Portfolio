/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <button className="nav-icon" onClick={() => setClick(!click)}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Header;

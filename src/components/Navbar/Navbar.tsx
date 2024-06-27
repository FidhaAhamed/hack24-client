import { useState} from "react";
import React from "react"
import "./Navbar.css"
import HackLogo from "../../assets/hackLogo.png";
import { FaBars, FaTimes} from "react-icons/fa";

const Navbar: React.FC<{}> = () => {

  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className="hack-logo" src= {HackLogo} alt=".hack();_" />
      </div>

      <div className={`nav-components ${isMobile ? "open" : ""}`}>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Timeline</a></li>
            <li><a href="">Prize Pool</a></li>
            <li><a href="">Sponsers</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </div>

      <div className={`register-btn ${isMobile ? "open" : ""}`}>
        <button className="btn">Register</button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

    </div>
  )
}

export default Navbar

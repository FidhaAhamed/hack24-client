import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={`bg-snow w-dvw navbar ${isMobile ? "align" : ""}`}>
      <div className="logo">
        <img className="hack-logo" src="/images/hack26.png" alt=".hack();_" />
      </div>

      <div className={`nav-components ${isMobile ? "open" : ""}`}>
        <ul>
          <li className="font-mono">
            <a href="">About</a>
          </li>
          <li className="font-mono">
            <a href="">Timeline</a>
          </li>
          <li className="font-mono">
            <a href="">Prize Pool</a>
          </li>
          <li className="font-mono">
            <a href="">Sponsers</a>
          </li>
          <li className="font-mono">
            <a href="">FAQ</a>
          </li>
          <li className="font-mono">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className={`register-btn ${isMobile ? "open" : ""}`}>
        <button className="btn font-mono">Register</button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;

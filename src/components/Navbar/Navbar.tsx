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
        <img className="hack-logo ml-8 w-16" src="/images/htbb.png" alt="htb" />
      </div>

      <div className={`nav-components ${isMobile ? "open" : ""}`}>
        <ul>
          <li className="font-mono">
            <a href="#about">About</a>
          </li>
          <li className="font-mono">
            <a href="#timeline">Timeline</a>
          </li>
          <li className="font-mono">
            <a href="#prizepool">Prize Pool</a>
          </li>
          <li className="font-mono">
            <a href="">Sponsors</a>
          </li>
          <li className="font-mono">
            <a href="#faq">FAQ</a>
          </li>
          <li className="font-mono">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className={`register-btn ${isMobile ? "open" : ""}`}>
        <a
          href="https://hack-registration.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn font-mono">Register</button>{" "}
        </a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;

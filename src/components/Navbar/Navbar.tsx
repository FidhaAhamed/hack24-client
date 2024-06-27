import React from "react"
import "./Navbar.css"
import HackLogo from "../../assets/hackLogo.png";


const Navbar: React.FC<{}> = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="hack-logo" src= {HackLogo} alt=".hack();_" />
      </div>

      <div className="nav-components">
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Timeline</a></li>
            <li><a href="">Prize Pool</a></li>
            <li><a href="">Sponsers</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </div>

      <div className="register-btn">
        <button className="btn">Register</button>
      </div>
    </div>
  )
}

export default Navbar

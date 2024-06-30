import "./Footer.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="footer">
        <div className="footer-details">
          <div className="footer-about">
            <h1>About Us</h1>
            <p>
              IEEE MACE SB is a non profit organization working for the
              upliftment of students and professionals.
            </p>
            <div className="icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <h1>Contact Us</h1>
            <p>
              <a href="#">
                <FaWhatsapp /> <span>Name1</span>
              </a>
            </p>
            <p>
              <a href="#">
                <FaWhatsapp />
                <span>Name2</span>
              </a>
            </p>
            <p className="email">
              <a href="">Email: hack24@mail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-orange-600 py-4">
        <p>2024 &copy; .hack24. All Rights Reserved.</p>
        <p>Designed and Developed By .hack24 WebTeam</p>
      </div>
    </div>
  );
}

export default Footer;

import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="footer">
        <div className="footer-details" data-aos="fade-up">
          <div className="footer-about">
            <h1>About Us</h1>
            <p>
              IEEE MACE SB is a non profit organization working for the
              upliftment of students and professionals.
            </p>
            <div className="icons flex gap-y-4">
              <a
                className="bg-orange-700 hover:bg-orange-900 rounded-full w-10 h-10 flex place-content-center place-items-center"
                href="https://www.linkedin.com/company/ieeemace/"
              >
                <FaLinkedin />
              </a>
              <a
                className="bg-orange-700 hover:bg-orange-900 rounded-full w-10 h-10 flex place-content-center place-items-center"
                href="https://www.instagram.com/ieeemace?igsh=NGk3eDcwMGp5aWo3"
              >
                <FaInstagram />
              </a>
            </div>
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

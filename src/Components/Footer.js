import React from "react";
import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";
import cause1 from "../Images/Cause1.jpg";
import cause2 from "../Images/Cause2.jpg";
import cause3 from "../Images/Cause3.jpg";
import cause4 from "../Images/Cause4.jpg";
import cause5 from "../Images/Cause5.jpg";
import cause6 from "../Images/Cause6.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            NEW NEST
          </h3>
          <p>"NewNest" involves creating a loving, stable home for a child.</p>
          <p><strong>Address:</strong> Flat 201, BVR Lake Front, 1/2, Kanaka-Nagar,
          Veerannapalya, Nagavara, Bengaluru, Karnataka 560045</p>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaTimes className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul>

          <li>
          <a href="/AboutUs">AboutUs</a>
          </li>

          <li>
          <a href="/AdoptionService">Causes</a>
          </li>

            <li>
            <a href="/Volunteer">Volunteers</a>
            </li>

            <li>
            <a href="/ContactUs">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul>
            <li>
            <a href="/FAQ">FAQ</a>
            </li>

            <li>
            <a href="/News">News</a>
            </li>

            <li>
            <a href="/Legal">Terms of Use</a>
            </li>

            <li>
            <a href="/Legal">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section causes">
          <h3 className="footer-title">Causes</h3>
<div className="cause-images">
  <div className="cause-box" style={{ backgroundImage: `url(${cause1})` }}></div>
  <div className="cause-box" style={{ backgroundImage: `url(${cause2})` }}></div>
  <div className="cause-box" style={{ backgroundImage: `url(${cause3})` }}></div>
  <div className="cause-box" style={{ backgroundImage: `url(${cause4})` }}></div>
  <div className="cause-box" style={{ backgroundImage: `url(${cause5})` }}></div>
  <div className="cause-box" style={{ backgroundImage: `url(${cause6})` }}></div>
</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright Child Adoption process 2025. Designed by NewNest</p>
      </div>
    </footer>
  );
};

export default Footer;
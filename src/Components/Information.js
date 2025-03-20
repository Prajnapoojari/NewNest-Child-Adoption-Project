import React from "react";
import logo from "../Images/Logo.jpg";
import { FaRocket, FaGift, FaGlobe, FaHandsHelping, FaBook, FaClinicMedical, FaUsers } from "react-icons/fa";

const Information = () => {
  return (
    <div className="information-container">
      {/* What is New Nest Section */}
      <section className="new-nest-section">
        <div className="content">
          <div className="text">
            <h2>What is New Nest?</h2>
            <p>
            New Nest aims to rescue and rehabilitate helpless, abandoned, and orphaned children by placing them in nurturing families.
            Alongside facilitating adoptions, New Nest offers emotional support through counseling for adoptive parents and adopted children.
            The organization conducts awareness programs to educate people about adoption laws and processes and provides post-adoption guidance to ensure a smooth family transition.


            </p>
            <ul className="steps">
              <li><span><a href="/AdmissionPage">1. Child Admission Process </a></span></li>
              <li><span><a href="/SignUpPage">2. Register on our website </a></span></li>
              <li><span><a href="/Donate">3. Donate the amount you like </a></span></li>
              <li><span><a href="/AdoptionService">4. Latest Causes by NewNest </a></span></li>
            </ul>
          </div>
          <div className="image">
            <img src={logo} alt="New Nest" />
          </div>
        </div>
      </section>
      <section className="counter-section">
        <div className="counter-box">
          <FaRocket className="icon" />
          <h3>200+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="counter-box">
          <FaGift className="icon" />
          <h3>80</h3>
          <p>Monthly Donate</p>
        </div>
        <div className="counter-box">
          <FaGlobe className="icon" />
          <h3>20</h3>
          <p>Partners Across India</p>
        </div>
        <div className="counter-box">
          <FaHandsHelping className="icon" />
          <h3>45.5L</h3>
          <p>Donations Received</p>
        </div>
      </section>
      <section className="info-block-section">
        <div className="info-box">
          <FaBook className="icon" />
          <h3>Education</h3>
          <p>Providing quality education to orphaned children, ensuring brighter futures.</p>
        </div>
        <div className="info-box">
          <FaClinicMedical className="icon" />
          <h3>Child Health Care</h3>
          <p>Ensuring medical support, vaccinations, and promoting their overall health and well-being.</p>
        </div>
        <div className="info-box">
          <FaUsers className="icon" />
          <h3>Local Communities</h3>
          <p>Strengthening community support through volunteer programs, and
              awareness initiatives.</p>
        </div>
      </section>
    </div>
  );
};

export default Information;

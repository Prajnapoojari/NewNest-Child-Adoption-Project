import React from 'react';
import './AdoptionService.css';
import { FiBook } from 'react-icons/fi';
import { GiWaterDrop } from 'react-icons/gi';
import { FaRegHospital, FaHandsHelping } from 'react-icons/fa';

import admissionProcess1 from '../Images/AdmissionProcess1.jpg';
import admissionProcess2 from '../Images/AdmissionProcess2.jpg';
import admissionProcess3 from '../Images/AdmissionProcess3.jpg';

import Header from "../Components/Header";
import Footer from "../Components/Footer";

function AdoptionService() {


  return (
  <div>
  <Header />
    <div className="app">
      <section className="hero container">
        <h1>Donate Today: Save a Life</h1>
        <p className="hero-text">
          Donate today and be a hero. Your support can save a life in need.<br />
          Every contribution makes a difference. Together, we can bring hope and healing!
        </p>
      </section>
      <section className="services-grid container">
        <div className="service-card">
          <div className="icon-container">
            <FiBook className="service-icon" />
          </div>
          <h3>Education</h3>
          <p>Education empowers children with knowledge and opportunities.</p>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <GiWaterDrop className="service-icon" />
          </div>
          <h3>Clean Water</h3>
          <p>Clean water is essential for the health and well-being of adopted children.</p>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FaRegHospital className="service-icon" />
          </div>
          <h3>Health Care</h3>
          <p>Supports their growth, development in their new home.</p>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FaHandsHelping className="service-icon" />
          </div>
          <h3>Local Communities</h3>
          <p>Providing a network of care and resources.</p>
        </div>
      </section>
      <section className="causes-section container">
        <div className="causes-header">
          <h2>Latest Causes</h2>
        </div>
        <div className="causes-grid">
          <div className="cause-card">
            <div className="cause-image">
              <img src={admissionProcess1} alt="Clean Water for All" />
            </div>
            <div className="cause-content">
              <h3>Clean Water for All</h3>
              <p>Clean Water for All ensures safe, accessible drinking water, improving health, sanitation, and quality of life for communities worldwide.</p>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
          <div className="cause-card">
            <div className="cause-image">
              <img src={admissionProcess2} alt="Reduce Homelessness" />
            </div>
            <div className="cause-content">
              <h3>Reduce Homelessness</h3>
              <p>Reduce Homelessness by providing shelter, resources, and support to individuals in need, ensuring safety, stability, and a brighter future for all.</p>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
          <div className="cause-card">
            <div className="cause-image">
              <img src={admissionProcess3} alt="End Hunger" />
            </div>
            <div className="cause-content">
              <h3>End Hunger</h3>
              <p>End Hunger by providing nutritious food, resources, and support to communities in need, ensuring no one goes to bed hungry.</p>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
      <Footer />
    </div>
    </div>
    </div>
  );
}
export default AdoptionService;
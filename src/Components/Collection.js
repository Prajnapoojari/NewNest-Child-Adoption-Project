import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router

const Collection = () => {
  const [clickedTitle, setClickedTitle] = useState(null);

  const services = [
    {
      title: "Child Admission Process",
      description:
        "Our child adoption process is simple: Submit an application, complete the required assessments, and finalize legal formalities. We ensure a smooth...",
      href: "/AdmissionPage",
    },
    {
      title: "Adoption Process",
      description:
        "Process is streamlined: Submit an application, complete the evaluation steps, and finalize legal procedures. We provide guidance and support...",
      href: "/AdoptionService",
    },
    {
      title: "Staff Management",
      description:
        "Supported by a dedicated team, ensuring efficient case management, personalized support, and seamless coordination. Our staff...",
      href: "/StaffRegistration",
    },
    {
      title: "Donation Process",
      description:
        "The donation process involves a straightforward procedure: submit your application, provide necessary documents, and contribute to a bright future...",
      href: "/Donate",
    },
  ];

  const handleTitleClick = (index) => {
    setClickedTitle(index);
    setTimeout(() => {
      setClickedTitle(null);
    }, 1000); // Fades out after 1 second
  };

  return (
    <div>
      <section className="collection-section">
        <h2 className="collection-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3
                className="service-title"
                style={{
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleTitleClick(index)}
              >
                <Link to={service.href} style={{ textDecoration: "none", color: "inherit" }}>
                  {service.title}
                </Link>
                <span
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: clickedTitle === index ? "100%" : "0%",
                    height: "4px",
                    backgroundColor: "orange",
                    transition: "width 0.3s ease-in-out",
                  }}
                ></span>
              </h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collection;

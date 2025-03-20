import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Accordion } from 'react-bootstrap';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const styles = {
  primaryColor: '#FFA34D', // Lighter Orange
  secondaryColor: '#212121',
  lightGray: '#f5f5f5',
  darkText: '#212121',
  lightText: '#ffffff',
};

function FAQ() {
  return (
  <div>
  <Header />
    <div className="App">
      <FaqSection />
      <div>
      <Footer />
          </div>
          </div>
          </div>
  );
}

function FaqSection() {
  return (
    <div style={{ backgroundColor: styles.lightGray }} className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">Frequently Asked Questions</h2>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '700px' }}>
            Find answers to common questions about adoption, our organization, and how you can get involved.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Accordion defaultActiveKey="0" className="shadow-sm rounded overflow-hidden custom-accordion">
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} className="border-0 border-top" key={index}>
                  <Accordion.Header className="py-3 fw-bold">{faq.question}</Accordion.Header>
                  <Accordion.Body className="bg-white py-4">{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className="text-center mt-4">
              <p className="mb-3">Still have questions? We're here to help!</p>
              <Link to="/ContactUs">
              <Button
                style={{
                  color: styles.lightText,
                  backgroundColor: 'transparent',
                  borderColor: styles.primaryColor,
                }}
                className="px-4 py-2 hover-orange"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = styles.primaryColor;
                  e.currentTarget.style.borderColor = styles.primaryColor;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = styles.primaryColor;
                }}
              >
                Contact Our Support Team
              </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// FAQ Content Data
const faqData = [
  {
    question: "What is the adoption process like with NewNest?",
    answer: (
      <>
        <p>The adoption process with NewNest typically involves several steps:</p>
        <ol>
          <li>Initial consultation and information session</li>
          <li>Application submission and review</li>
          <li>Home study and family assessment</li>
          <li>Matching process with a child</li>
          <li>Pre-placement visits and transition period</li>
          <li>Finalization of adoption</li>
          <li>Post-adoption support</li>
        </ol>
        <p>Our team provides guidance and support throughout each step of this journey.</p>
      </>
    ),
  },
  {
    question: "What are the eligibility requirements to adopt?",
    answer: (
      <>
        <p>Eligibility requirements vary based on the type of adoption and sometimes by region, but general requirements include:</p>
        <ul>
          <li>Minimum age requirements (typically 21+)</li>
          <li>Stable income and housing</li>
          <li>Clean criminal background check</li>
          <li>Good physical and mental health</li>
          <li>Willingness to participate in home studies and interviews</li>
        </ul>
        <p>We encourage you to contact us for more specific information based on your situation.</p>
      </>
    ),
  },
  {
    question: "How long does the adoption process typically take?",
    answer: (
      <>
        <p>The timeline for adoption can vary significantly based on several factors including the type of adoption, age of the child, and specific circumstances.</p>
        <p>Typically, the process can take anywhere from 6 months to 2 years from start to finish.</p>
      </>
    ),
  },
  {
    question: "What support does NewNest provide after adoption?",
    answer: (
      <>
        <p>NewNest is committed to supporting families throughout their adoption journey, including after placement. Our post-adoption services include:</p>
        <ul>
          <li>Counseling and therapy referrals</li>
          <li>Parent support groups</li>
          <li>Educational resources and workshops</li>
          <li>Access to adoption-competent professionals</li>
          <li>Assistance with accessing community resources</li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I support NewNest if I'm not looking to adopt?",
    answer: (
      <>
        <p>There are many ways to support our mission:</p>
        <ul>
          <li>Financial donations to support our programs</li>
          <li>Volunteering your time and skills</li>
          <li>Participating in fundraising events</li>
          <li>Spreading awareness about adoption</li>
          <li>Corporate partnerships and sponsorships</li>
        </ul>
      </>
    ),
  },
];

// Apply Custom Styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .accordion-button:not(.collapsed) {
    background-color: ${styles.primaryColor} !important;
    color: ${styles.lightText} !important;
    border-color: ${styles.primaryColor} !important;
  }

  .accordion-button {
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .accordion-button:focus {
    box-shadow: none !important;
  }

  .footer-link:hover {
    color: ${styles.primaryColor} !important;
    padding-left: 5px;
    transition: all 0.3s ease;
  }

  .hover-orange:hover {
    background-color: ${styles.primaryColor} !important;
    border-color: ${styles.primaryColor} !important;
  }
`;
document.head.appendChild(styleSheet);

export default FAQ;

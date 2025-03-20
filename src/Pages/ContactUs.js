import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import ContactUsImage from '../Images/ContactUs.jpg';

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const styles = {
  primaryColor: '#FF7A00',
  secondaryColor: '#212121',
  lightGray: '#f5f5f5',
  darkText: '#212121',
  lightText: '#ffffff',
};
function ContactUs() {
return (
<div>
<Header />
<div className="App d-flex flex-column align-items-center justify-content-center min-vh-100">
<AboutSection />
<ContactForm />
<div>
<Footer />
</div>
</div>
</div>
);
}
function AboutSection() {
return (
<Container className="py-5 text-center">
<h2 className="display-5 fw-bold mb-4">Every Act of Kindness Counts</h2>
<Row className="justify-content-center">
<Col md={8} className="d-flex flex-column align-items-center">
<Row className="g-4 text-center justify-content-center">
<Col md={4} className="d-flex justify-content-center align-items-center">
<Card className="h-100 border-0 shadow-sm hover-shadow">
<Card.Body className="text-center p-4">
<div style={{backgroundColor: `${styles.primaryColor}20`}} className="rounded-circle p-3 d-inline-block mb-3">
<FaHeart style={{color: styles.primaryColor}} className="fs-4" />
</div>
<h5 className="mb-3">Family Matching</h5>
<p className="text-muted mb-0">We carefully match children with loving families based on needs and compatibility.</p>
</Card.Body>
</Card>
</Col>
<Col md={4} className="d-flex justify-content-center align-items-center">
<Card className="h-100 border-0 shadow-sm hover-shadow">
<Card.Body className="text-center p-4">
<div style={{backgroundColor: `${styles.primaryColor}20`}} className="rounded-circle p-3 d-inline-block mb-3">
<FaHandHoldingHeart style={{color: styles.primaryColor}} className="fs-4" />
</div>
<h5 className="mb-3">Ongoing Support</h5>
<p className="text-muted mb-0">Our team provides continuous guidance and resources throughout your journey.</p>
</Card.Body>
</Card>
</Col>
</Row>
</Col>
</Row>
</Container>
);
}
function ContactForm() {
return (
<Container className="py-5 d-flex justify-content-center">
<Row className="justify-content-center g-4">
<Col lg={5}>
<Card style={{backgroundColor: styles.secondaryColor}} className="text-white h-100 border-0 shadow">
<Card.Body className="d-flex flex-column p-4">
<h2 className="h3 mb-4 fw-bold">Get in Touch</h2>
<p className="mb-4">
Have questions about adoption? Want to learn more about our organization? Reach out to us and our team will be happy to assist you on your journey.
</p>
<img src={ContactUsImage} alt="Get in Touch" className="img-fluid rounded mb-4" />
<div className="mt-auto">
<div className="bg-white bg-opacity-10 p-4 rounded mb-4">
<address className="mb-0">
<div className="d-flex align-items-center mb-3">
<div className="bg-white rounded-circle p-2 me-3">
<FaMapMarkerAlt style={{color: styles.primaryColor}} />
</div>
<div>
<p className="mb-0 fw-bold">Location</p>
<p className="mb-0">Flat 201, BVR Lake Front, 1/2,<br />Bengaluru, Karnataka 560045</p>
</div>
</div>
<div className="d-flex align-items-center mb-3">
<div className="bg-white rounded-circle p-2 me-3">
<FaPhone style={{color: styles.primaryColor}} />
</div>
<div>
<p className="mb-0 fw-bold">Phone</p>
<a href="tel:080 1234567" className="text-white text-decoration-none">080 1234567</a>
</div>
</div>
<div className="d-flex align-items-center mb-3">
<div className="bg-white rounded-circle p-2 me-3">
<FaEnvelope style={{color: styles.primaryColor}} />
</div>
<div>
<p className="mb-0 fw-bold">Email</p>
<a href="mailto:contact@newnest.org" className="text-white text-decoration-none">contact@newnest.org</a>
</div>
</div>
<div className="d-flex align-items-center">
<div className="bg-white rounded-circle p-2 me-3">
<FaClock style={{color: styles.primaryColor}} />
</div>
<div>
<p className="mb-0 fw-bold">Hours</p>
<p className="mb-0">Mon-Fri: 8:00am - 6:00pm</p>
</div>
</div>
</address>
</div>
</div>
</Card.Body>
</Card>
</Col>
<Col lg={7} className="d-flex justify-content-center">
<Card className="border-0 shadow h-100">
<Card.Body className="p-4 p-lg-5">
<h2 className="h3 mb-4 fw-bold">Send Us a Message</h2>
<p className="text-muted mb-4">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
<Form>
<Row className="g-3">
<Col md={6}>
<Form.Group>
<Form.Label>First Name <span className="text-danger">*</span></Form.Label>
<Form.Control type="text" placeholder="Enter your first name" className="py-2 custom-focus" required />
</Form.Group>
</Col>
<Col md={6}>
<Form.Group>
<Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
<Form.Control type="text" placeholder="Enter your last name" className="py-2 custom-focus" required />
</Form.Group>
</Col>
<Col md={6}>
<Form.Group>
<Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
<Form.Control type="email" placeholder="Enter your email" className="py-2 custom-focus" required />
</Form.Group>
</Col>
<Col md={6}>
<Form.Group>
<Form.Label>Phone Number</Form.Label>
<Form.Control type="tel" placeholder="Enter your phone number" className="py-2 custom-focus" />
</Form.Group>
</Col>
<Col md={12}>
<Form.Group>
<Form.Label>Subject <span className="text-danger">*</span></Form.Label>
<Form.Control type="text" placeholder="Enter message subject" className="py-2 custom-focus" required />
</Form.Group>
</Col>
<Col md={12}>
<Form.Group>
<Form.Label>Message <span className="text-danger">*</span></Form.Label>
<Form.Control as="textarea" rows={5} placeholder="Type your message here..." className="py-2 custom-focus" required />
</Form.Group>
</Col>
<Col md={12}>
<Form.Group className="mb-3">
<Form.Check type="checkbox" label="I agree to the terms and privacy policy" required />
</Form.Group>
</Col>
<Col md={12}>
<Button style={{backgroundColor: styles.primaryColor, borderColor: styles.primaryColor}} type="submit" className="px-4 py-3 fw-bold w-100 border-0">
SEND MESSAGE
</Button>
</Col>
</Row>
</Form>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
);
}
const styleSheet = document.createElement("style");
styleSheet.textContent = `
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
export default ContactUs;
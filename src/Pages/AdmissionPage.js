import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from '../Images/Admission.jpg';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    name: "", age: "", gender: "", address: "", city: "", state: "", zip: "",
    guardianName: "", guardianOccupation: "", income: "", nationality: "",
    emergencyContact: "", vaccinated: "", specialAssistance: "",
    chronicDiseases: [], allergies: "", disabilities: "", medications: "",
    insuranceProvider: "", hospitalPreference: "", previousSchool: "",
    currentGrade: "", learningDisabilities: [], favoriteSubject: "",
    hobbies: "", extracurricular: [], dietaryPreferences: [],
    sports: "", birthCertificate: null, medicalReport: null,
    idProof: null, schoolReport: null, vaccinationCard: null, consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value)
      }));
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({
      name: "", age: "", gender: "", address: "", city: "", state: "", zip: "",
      guardianName: "", guardianOccupation: "", income: "", nationality: "",
      emergencyContact: "", vaccinated: "", specialAssistance: "",
      chronicDiseases: [], allergies: "", disabilities: "", medications: "",
      insuranceProvider: "", hospitalPreference: "", previousSchool: "",
      currentGrade: "", learningDisabilities: [], favoriteSubject: "",
      hobbies: "", extracurricular: [], dietaryPreferences: [],
      sports: "", birthCertificate: null, medicalReport: null,
      idProof: null, schoolReport: null, vaccinationCard: null, consent: false
    });
  };

  return (
    <div>
    <Header />
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 0" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card style={{ background: "rgba(255, 255, 255, 0.9)", borderRadius: "15px", padding: "25px", color: "#000" }}>
              <Card.Body>
                <h2 className="text-center" style={{ color: "#ff6a00", fontWeight: "bold" }}>Child Admission Form</h2>
                <Form onSubmit={submitForm}>
                  <Row>
                    <Col md={12}><Form.Group><Form.Label style={{ fontWeight: "bold" }}>Full Name</Form.Label><Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required /></Form.Group></Col>
                    <Col md={6}><Form.Group><Form.Label style={{ fontWeight: "bold" }}>Age</Form.Label><Form.Control type="number" name="age" value={formData.age} onChange={handleChange} required /></Form.Group></Col>
                    <Col md={6}><Form.Group><Form.Label style={{ fontWeight: "bold" }}>Gender</Form.Label>
                      <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group></Col>
                    <Col md={12}><Form.Group><Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label><Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required /></Form.Group></Col>
                    <Col md={12}><Form.Group><Form.Label style={{ fontWeight: "bold" }}>Vaccinated?</Form.Label>
                      <Form.Check type="radio" label="Yes" name="vaccinated" value="Yes" onChange={handleChange} />
                      <Form.Check type="radio" label="No" name="vaccinated" value="No" onChange={handleChange} />
                    </Form.Group></Col>
                    <Col md={12}><Form.Group><Form.Label>Special Assistance Required?</Form.Label>
                                          <Form.Check type="radio" label="Yes" name="specialAssistance" value="Yes" onChange={handleChange} />
                                          <Form.Check type="radio" label="No" name="specialAssistance" value="No" onChange={handleChange} />
                                        </Form.Group></Col>
                                        <Col md={12}><Form.Group><Form.Label>Allergies</Form.Label><Form.Control type="text" name="allergies" value={formData.allergies} onChange={handleChange} /></Form.Group></Col>
                                        <Col md={12}><Form.Group><Form.Label>Previous School</Form.Label><Form.Control type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} required /></Form.Group></Col>
                                        <Col md={6}><Form.Group><Form.Label>Current Grade</Form.Label>
                                          <Form.Select name="currentGrade" value={formData.currentGrade} onChange={handleChange}>
                                            <option value="">Select</option><option value="Nursery">Nursery</option><option value="1st">1st</option>
                                            <option value="2nd">2nd</option><option value="3rd">3rd</option>
                                          </Form.Select>
                                        </Form.Group></Col>
                                        <Col md={12}><Form.Group><Form.Label>Upload Birth Certificate</Form.Label><Form.Control type="file" name="birthCertificate" onChange={handleChange} required /></Form.Group></Col>
                                        <Col md={12}><Form.Group><Form.Label>Upload Medical Report</Form.Label><Form.Control type="file" name="medicalReport" onChange={handleChange} /></Form.Group></Col>

                    <Col md={12}><Form.Group><Form.Label style={{ fontWeight: "bold" }}>Consent</Form.Label>
                      <Form.Check type="checkbox" label="I agree to the terms and conditions" name="consent" onChange={handleChange} />
                    </Form.Group></Col>
                    <Col md={12}><Button type="submit" style={{ background: "linear-gradient(45deg, #ff6a00, #ee0979)", border: "none", padding: "12px 20px", fontSize: "18px", fontWeight: "600", width: "100%" }}>
                      Submit Form <FaPaperPlane className="ms-2" />
                    </Button></Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div>
      <Footer />
    </div>
    </div>
    </div>
  );
};
export default AdmissionPage;
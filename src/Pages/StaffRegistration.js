import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

const StaffRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    role: '',
    phoneNumber: '',
    experience: '',
    address: '',
    qualifications: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Age validation
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || Number(formData.age) < 18 || Number(formData.age) > 70) {
      newErrors.age = 'Age must be between 18 and 70';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Role validation
    if (!formData.role) {
      newErrors.role = 'Please select a role';
    }

    // Phone validation
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s+/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    // Experience validation
    if (formData.role && formData.role !== 'volunteer' && !formData.experience) {
      newErrors.experience = 'Please provide your experience';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted successfully:', formData);
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          age: '',
          email: '',
          role: '',
          phoneNumber: '',
          experience: '',
          address: '',
          qualifications: ''
        });
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  const roleOptions = [
    { value: "counselor", label: "Counselor", description: "Provide emotional support and guidance" },
    { value: "social-worker", label: "Social Worker", description: "Assess families and children" },
    { value: "educator", label: "Educator", description: "Provide educational support" },
    { value: "administrator", label: "Administrator", description: "Manage daily operations" },
    { value: "volunteer", label: "Volunteer", description: "Support various activities" }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navigation Bar */}

      {/* Main Content */}
      <Container className="py-5 flex-grow-1">
        <h2 className="text-center mb-4">Register New Staff Member</h2>
        <p className="text-center text-muted mb-5">Join our team and help make a difference in children's lives</p>

        {submitted && (
          <Alert variant="success" className="d-flex align-items-center mb-4">
            <FaCheckCircle className="me-2" size={20} />
            <div>
              <strong>Registration successful!</strong> Thank you for joining our team. We'll contact you shortly.
            </div>
            <Button variant="outline-success" size="sm" className="ms-auto" onClick={() => setSubmitted(false)}>
              Register Another
            </Button>
          </Alert>
        )}

        <Row className="g-4">
          {/* Contact Info Sidebar */}
          <Col lg={4} className="mb-4 mb-lg-0 order-lg-2">
            <div className="bg-dark text-white p-4 rounded shadow-sm h-100">
              <h3 className="mb-3 border-bottom pb-3">Share Love, Donate Hope</h3>
              <p className="mb-4">
                Share love, donate hope, and transform lives through the child adoption process.
                Join our mission to create forever families.
              </p>

              <h5 className="text-warning mb-3">Contact Us</h5>
              <address className="mb-4">
                Flat 201, BVR Lake Front, 1/2, Kanaka-Nagar,<br />
                Veerannapalya, Nagavara, Bengaluru,<br />
                Karnataka 560045
              </address>

              <div className="d-flex align-items-center mb-3 text-warning">
                <FaPhone className="me-3" />
                <span>080 1234567</span>
              </div>

              <div className="d-flex align-items-center mb-3 text-warning">
                <FaEnvelope className="me-3" />
                <span>charity@email.net</span>
              </div>

              <div className="d-flex align-items-center mb-4 text-warning">
                <FaClock className="me-3" />
                <span>Mon-Fri: 8:00am - 6:00pm</span>
              </div>

              <h5 className="text-warning mb-3">Connect With Us</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-white bg-warning p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white bg-warning p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                  <FaTwitter />
                </a>
                <a href="#" className="text-white bg-warning p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>

          {/* Registration Form */}
          <Col lg={8} className="order-lg-1">
            <div className="bg-white p-4 p-md-5 rounded shadow-lg">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Age <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.age}
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        Staff members must be between 18-70 years old
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Select Role <span className="text-danger">*</span></Form.Label>
                      <Form.Select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        isInvalid={!!errors.role}
                      >
                        <option value="">Select a role</option>
                        {roleOptions.map(role => (
                          <option key={role.value} value={role.value}>
                            {role.label} - {role.description}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.role}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter phone number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        isInvalid={!!errors.phoneNumber}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phoneNumber}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Relevant Experience {formData.role && formData.role !== 'volunteer' && <span className="text-danger">*</span>}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Describe your relevant experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    isInvalid={!!errors.experience}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.experience}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Qualifications</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter your qualifications"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button
                    variant="warning"
                    type="submit"
                    size="lg"
                    className="py-2 text-white"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Register Now'}
                  </Button>
                  <div className="text-center mt-3">
                    <small className="text-muted">
                      By registering, you agree to our terms and conditions
                    </small>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer could be added here */}
    </div>
  );
};

export default StaffRegistration;
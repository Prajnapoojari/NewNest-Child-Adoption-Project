import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, Card, Button, Form } from 'react-bootstrap';

const styles = {
  root: {
    '--primary-color': '#FF6B00',
    '--secondary-color': '#212121',
    '--accent-color': '#FF8C3A',
    '--light-color': '#f8f9fa',
    '--dark-color': '#343a40',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  navbar: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    fontSize: '24px',
  },
  navLink: {
    color: 'var(--secondary-color)',
    fontWeight: '500',
    margin: '0 10px',
  },
  languageSelector: {
    marginLeft: 'auto',
    marginRight: '15px',
    fontWeight: 'bold',
  },
  hero: {
    backgroundColor: 'var(--secondary-color)',
    color: 'white',
    padding: '60px 0',
    textAlign: 'center',
  },
  heroTitle: {
    color: 'var(--primary-color)',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  primaryBtn: {
    backgroundColor: 'var(--primary-color)',
    border: 'none',
    padding: '10px 25px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  },
  sectionTitle: {
    position: 'relative',
    marginBottom: '40px',
    paddingBottom: '15px',
    display: 'inline-block',
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'var(--secondary-color)',
  },
  sectionTitleUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '50px',
    height: '3px',
    backgroundColor: 'var(--primary-color)',
  },
  stepNumber: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    borderRadius: '50%',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
  },
  optionsSection: {
    backgroundColor: '#f8f9fa',
    padding: '60px 0',
  },
  card: {
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    height: '100%',
    transition: 'transform 0.3s, box-shadow 0.3s',
    overflow: 'hidden',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    marginBottom: '10px',
  },
  tag: {
    backgroundColor: '#FFF0E6',
    color: 'var(--primary-color)',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
    marginRight: '5px',
    marginBottom: '5px',
    display: 'inline-block',
  },
  showMore: {
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  testimonialSection: {
    padding: '60px 0',
  },
  testimonialCard: {
    padding: '30px',
    backgroundColor: 'white',
    height: '100%',
  },
  testimonialText: {
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  testimonialAuthor: {
    fontWeight: 'bold',
    color: 'var(--primary-color)',
  },
  testimonialRole: {
    textTransform: 'uppercase',
    fontSize: '14px',
    color: '#777',
  },
  newsletterSection: {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    padding: '60px 0',
    textAlign: 'center',
  },
  newsletterBtn: {
    backgroundColor: 'var(--secondary-color)',
    borderColor: 'var(--secondary-color)',
    fontWeight: 'bold',
  },
  socialSection: {
    backgroundColor: 'var(--secondary-color)',
    color: 'white',
    padding: '40px 0',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#1A1A1A',
    color: 'white',
    padding: '60px 0 30px',
  },
  footerTitle: {
    color: 'white',
    marginBottom: '20px',
    position: 'relative',
    paddingBottom: '10px',
  },
  footerTitleUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '40px',
    height: '2px',
    backgroundColor: 'var(--primary-color)',
  },
  footerLink: {
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.3s',
  },
  footerBottom: {
    borderTop: '1px solid #444',
    paddingTop: '20px',
    marginTop: '40px',
    textAlign: 'center',
  },
};

// Component for volunteer option cards with hover effect
const VolunteerCard = ({ title, description, tags }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      style={isHovered ? {...styles.card, ...styles.cardHover} : styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-4"
    >
      <Card.Body>
        <div className="mb-3">
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>{tag}</span>
          ))}
        </div>
        <Card.Title style={styles.cardTitle}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Component for section titles with underline
const SectionTitle = ({ children, centered = false }) => (
  <h2 style={{
    ...styles.sectionTitle,
    textAlign: centered ? 'center' : 'left',
    margin: centered ? '0 auto 40px' : '0 0 40px',
  }}>
    {children}
    <div style={styles.sectionTitleUnderline}></div>
  </h2>
);

// Main App component
const Volunteer = () => {
  // Data for volunteer options
  const volunteerOptions = [
    {
      title: "Donate supplies",
      description: "Foster families and non-profit organizations often need supplies like clothing and school supplies.",
      tags: ["One-time", "Support organizations"]
    },
    {
      title: "Help with events or projects",
      description: "Organizations host fundraisers or events like Foster Parents' Night Out, where foster parents have a chance to rest while their foster children enjoy fun activities.",
      tags: ["One-time", "Work directly with kids and families", "Support organizations"]
    },
    {
      title: "Direct work with children or advocacy",
      description: "Are you interested in being a mentor or an advocate for children? There are options to work directly with or advocate for children in care.",
      tags: ["Work directly with kids and families", "Ongoing"]
    },
    {
      title: "Provide administrative support",
      description: "Organizations often need help with routine office tasks, like filing, mailing letters, or organizing donations.",
      tags: ["Support organizations", "Ongoing"]
    },
    {
      title: "Support social workers or foster families",
      description: "Volunteers can wrap around current foster families, send special notes of encouragement to social workers, or show radical hospitality through thank you events and service opportunities.",
      tags: ["One-time", "Support organizations"]
    },
    {
      title: "Volunteer with your organization",
      description: "Many of our partners have volunteer opportunities for organizations and businesses.",
      tags: ["Work directly with kids and families", "Support organizations", "Ongoing"]
    }
  ];

  // Data for testimonials
  const testimonials = [
    {
      text: "I didn't think of foster care in any way other than taking a child into our home until I helped a foster family and saw how valuable I could be by helping them and the child in their home.",
      author: "Janet",
      role: "Volunteer"
    },
    {
      text: "CASA gives me the chance to be one more safe, healthy person who connects with a child and shows up for them. I do this even when my own plate is full because if not me, then who? If I carve out just a little extra time in my day, I can make a big difference.",
      author: "Amma",
      role: "Volunteer"
    },
    {
      text: "I love volunteering because it not only allows me to meet the needs of a child, but also to meet the needs of a social worker.",
      author: "Julie",
      role: "Volunteer"
    }
  ];

  return (
    <div style={styles.root}>

      {/* How It Works Section */}
      <section className="py-5">
        <Container className="text-center">
          <SectionTitle centered>How it works</SectionTitle>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4 mb-md-0">
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepTitle}>Tell us your volunteer preferences</h3>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepTitle}>We'll connect you with organizations</h3>
            </Col>
            <Col md={4}>
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepTitle}>Volunteer!</h3>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer Options Section */}
      <section style={styles.optionsSection}>
        <Container>
          <SectionTitle centered>Volunteer options</SectionTitle>
          <Row>
            {volunteerOptions.map((option, index) => (
              <Col lg={4} md={6} key={index}>
                <VolunteerCard
                  title={option.title}
                  description={option.description}
                  tags={option.tags}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Next Steps Section */}
      <section className="py-5 text-center">
        <Container>
          <SectionTitle centered>Next steps</SectionTitle>
          <p className="mb-4">Connect with our team today to learn more about volunteering. We'll ask some basic questions, then reach out to talk about specific volunteer opportunities.</p>
          <Button variant="primary" style={styles.primaryBtn}>
          <a href="/ContactUs">CONNECT WITH US</a>
          </Button>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialSection} className="bg-light">
        <Container>
          <SectionTitle centered>From Volunteers</SectionTitle>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col md={4} key={index} className="mb-4 mb-md-0">
                <Card style={styles.testimonialCard}>
                  <Card.Body>
                    <p style={styles.testimonialText}>{`"${testimonial.text}"`}</p>
                    <div style={styles.testimonialAuthor}>{testimonial.author}</div>
                    <div style={styles.testimonialRole}>{testimonial.role}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Volunteer;
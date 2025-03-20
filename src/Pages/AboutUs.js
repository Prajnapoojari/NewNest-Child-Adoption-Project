import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaHandHoldingHeart, FaHeart, FaLightbulb } from 'react-icons/fa';
import Organization from '../Images/Organization.jpg';
import Header from "../Components/Header";
import Footer from "../Components/Footer";



const AboutUs = () => {
  return (
  <div>
  <Header/>
    <div className="about-us">
      <section className="hero-section">
        <Container>
          <h1 className="hero-title">United for Good, <span>Strong for Charity</span></h1>
          <p className="hero-subtext">Every donation changes lives. Join us in making a difference.</p>
          <Row className="stats-container">
            {[
              { number: '200', label: 'Projects Completed', icon: <FaLightbulb className="stat-icon" size={30} /> },
              { number: '80', label: 'Trusted Donors', icon: <FaHandHoldingHeart className="stat-icon" size={30} /> },
              { number: '20', label: 'Charities Supported', icon: <FaHeart className="stat-icon" size={30} /> }
            ].map((stat, index) => (
              <Col md={4} key={index}>
                <Card className="stat-card">
                  <Card.Body>
                    {stat.icon}
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="about-organization">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={Organization} alt="Charity work" className="organization-image" />
            </Col>
            <Col md={6}>
              <Badge bg="warning" className="badge">Our Purpose</Badge>
              <h2 className="section-title">Making a Difference, One Life at a Time</h2>
              <p className="section-text">We empower communities through sustainable action and global support.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mission-vision-section">
        <Container>
          <h2 className="section-title text-center">About Our Organization</h2>
          <Row>
            {[
              { title: 'Our Mission', content: 'Creating a world where everyone has access to essentials.' },
              { title: 'Our Vision', content: 'A future where communities thrive through generosity and hope.' },
              { title: 'Our Values', content: 'Transparency, integrity, and respect drive all our efforts.' }
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card className="mission-card">
                  <Card.Body>
                    <h5 className="mission-title">{item.title}</h5>
                    <p className="mission-text">{item.content}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div>
      <Footer />
      <style>
        {`
          .about-us {
            font-family: 'Poppins', sans-serif;
            color: #333;
            background: white;
            padding-bottom: 50px;
          }
          .hero-section {
            background: white;
            padding: 60px 0;
            text-align: center;
            border-radius: 12px;
          }
          .hero-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: black;
          }
          .hero-title span {
            color: #ff6600;
          }
          .hero-subtext {
            font-size: 1.1rem;
            color: #666;
          }
          .badge {
            background: linear-gradient(135deg, #ff6600, #ff3300);
            padding: 8px 15px;
            font-weight: bold;
            border-radius: 8px;
          }
          .stats-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 30px;
          }
          .stat-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }
          .stat-card:hover {
            transform: scale(1.05);
          }
          .stat-icon {
            color: #ff6600;
            font-size: 2rem;
            margin-bottom: 10px;
          }
          .stat-number {
            font-size: 1.8rem;
            font-weight: bold;
            color: #ff3300;
          }
          .stat-label {
            color: gray;
          }
          .about-organization {
            padding: 60px 0;
            background: white;
            text-align: center;
          }
          .organization-image {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          .section-title {
            font-size: 2rem;
            font-weight: bold;
            color: black;
          }
          .section-text {
            color: #666;
          }
          .mission-vision-section {
            background: white;
            padding: 60px 0;
          }
          .mission-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }
          .mission-card:hover {
            transform: scale(1.05);
          }
          .mission-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #ff6600;
          }
          .mission-text {
            color: #666;
          }
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem;
            }
            .stats-container {
              flex-direction: column;
              align-items: center;
            }
            .stat-card {
              width: 100%;
              max-width: 250px;
            }
            .mission-vision-section {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;
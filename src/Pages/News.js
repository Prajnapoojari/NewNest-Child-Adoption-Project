import React, { useState } from 'react';
import { Container, Tab, Tabs, Card, Form, Button } from 'react-bootstrap';

function News() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you for subscribing! You will receive the latest updates.');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const styles = {
    container: {
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
      color: "#ff8c00",
      fontSize: "2.5rem",
      textAlign: "center",
      fontWeight: "bold",
    },
    subtitle: {
      textAlign: "center",
      color: "#777",
      marginBottom: "20px",
    },
    card: {
      background: "white",
      padding: "20px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    },
    heading: {
      color: "#ff8c00",
      fontSize: "1.8rem",
    },
    text: {
      color: "#555",
      fontSize: "16px",
      lineHeight: "1.6",
    },
    link: {
      color: "#ff8c00",
      fontWeight: "bold",
      textDecoration: "none",
    },
    newsletter: {
      textAlign: "center",
      marginTop: "40px",
      padding: "20px",
      background: "#fff3e0",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ff8c00",
      marginRight: "10px",
      width: "250px",
    },
    button: {
      backgroundColor: "#ff8c00",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    message: {
      marginTop: "10px",
      color: "#ff8c00",
      fontWeight: "bold",
    },
  };

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Orphanage News & Updates</h1>
      <p style={styles.subtitle}>
        Stay informed about the latest developments, events, and initiatives supporting orphanages worldwide.
      </p>

      <Tabs defaultActiveKey="events" id="news-tabs" style={styles.tabs}>

        {/* Charity Events */}
        <Tab eventKey="events" title="Upcoming Charity Events">
          <Card style={styles.card}>
            <Card.Body>
              <h2 style={styles.heading}>Upcoming Charity Events</h2>
              <p style={styles.text}>
                Join us in supporting orphanages through donation drives, educational workshops, and health camps.
              </p>

              <h3 style={styles.heading}>1. Food & Clothing Drive - March 25, 2025</h3>
              <p style={styles.text}>
                Help us distribute food, clothing, and hygiene kits to orphanages.
                <a href="https://www.savethechildren.in/donate" style={styles.link} target="_blank" rel="noopener noreferrer">
                  Donate Here
                </a>
              </p>

              <h3 style={styles.heading}>2. Educational Workshop - April 15, 2025</h3>
              <p style={styles.text}>
                A day filled with skill-building activities, workshops, and fun learning for orphaned children.
                <a href="https://www.teachforindia.org" style={styles.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </p>

              <h3 style={styles.heading}>3. Health & Wellness Camp - May 10, 2025</h3>
              <p style={styles.text}>
                Free health checkups, vaccinations, and awareness sessions for orphaned children.
                <a href="https://www.unicef.org/health" style={styles.link} target="_blank" rel="noopener noreferrer">
                  Support This Initiative
                </a>
              </p>
            </Card.Body>
          </Card>
        </Tab>

        {/* Success Stories */}
        <Tab eventKey="success" title="Success Stories">
          <Card style={styles.card}>
            <Card.Body>
              <h2 style={styles.heading}>Success Stories</h2>
              <p style={styles.text}>
                Read inspiring stories of children who have found homes, education, and brighter futures.
              </p>

              <h3 style={styles.heading}>1. Aarav's Journey to a Scholarship</h3>
              <p style={styles.text}>
                Aarav, an orphan from Bangalore, has secured a full scholarship to study engineering.
                <a href="https://www.childlineindia.org" style={styles.link} target="_blank" rel="noopener noreferrer">
                  Read His Story
                </a>
              </p>

              <h3 style={styles.heading}>2. Meera's Dream of Becoming a Doctor</h3>
              <p style={styles.text}>
                After years in an orphanage, Meera is now studying medicine, thanks to generous donors.
                <a href="https://www.crystalhouse.org" style={styles.link} target="_blank" rel="noopener noreferrer">
                  Support More Students Like Meera
                </a>
              </p>

              <h3 style={styles.heading}>3. A New Home for 50 Children</h3>
              <p style={styles.text}>
                A newly built orphanage in Mumbai now provides shelter and education for 50 children.
                <a href="https://www.habitat.org" style={styles.link} target="_blank" rel="noopener noreferrer">
                  Help Build More Homes
                </a>
              </p>
            </Card.Body>
          </Card>
        </Tab>

      </Tabs>

      {/* Newsletter Subscription Section */}
      <div style={styles.newsletter}>
        <h2 style={styles.heading}>📩 Subscribe to Our Newsletter</h2>
        <p style={styles.text}>
          Get the latest news, event updates, and ways to help directly in your inbox.
        </p>
        <Form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" style={styles.button}>Subscribe</Button>
        </Form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </Container>
  );
}

export default News;

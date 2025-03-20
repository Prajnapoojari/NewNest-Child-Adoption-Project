import React from 'react';
import { Container, Tab, Tabs, Card } from 'react-bootstrap';

function Legal() {
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
    tabs: {
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
      transition: "color 0.3s ease-in-out",
    },
  };
  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Legal Information</h1>
      <p style={styles.subtitle}>
        Please review our Terms & Conditions, Privacy Policy, and Terms of Use.
        These policies ensure a safe and transparent experience for our users.
      </p>
      <Tabs defaultActiveKey="terms" id="legal-tabs" style={styles.tabs}>
        <Tab eventKey="terms" title="Terms & Conditions">
          <Card style={styles.card}>
            <Card.Body>
              <p style={styles.text}>
                By accessing and using this website, you agree to comply with the following terms and conditions.
                If you do not agree with any part of these terms, please discontinue use immediately.
              </p>
              <h3 style={styles.heading}>1. Acceptance of Terms</h3>
              <p style={styles.text}>
                By using our services, you acknowledge that you have read and understood these terms.
                We may update these terms at any time without prior notice.
              </p>
              <h3 style={styles.heading}>2. User Conduct & Restrictions</h3>
              <p style={styles.text}>
                Users must not misuse the website, engage in unlawful activities, or attempt to harm its integrity.
                Any violation may result in restricted access or legal action.
              </p>
              <h3 style={styles.heading}>3. Limitation of Liability</h3>
              <p style={styles.text}>
                We are not responsible for any damages resulting from the use of our services.
                Users assume all risks associated with using this website.
              </p>
              <h3 style={styles.heading}>4. Contact Us</h3>
              <p style={styles.text}>
                Questions? <a href="/ContactUs" style={styles.link}>Contact us</a>.
              </p>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="privacy" title="Privacy Policy">
          <Card style={styles.card}>
            <Card.Body>
              <p style={styles.text}>
                Your privacy is important to us. This policy explains how we collect, use, and protect your data
                while you interact with our services.
              </p>
              <h3 style={styles.heading}>1. Information We Collect</h3>
              <p style={styles.text}>
                We collect data such as your name, email, and browsing behavior to improve our services.
                This data helps us provide a personalized experience.
              </p>
              <h3 style={styles.heading}>2. How We Use Your Data</h3>
              <p style={styles.text}>
                Your data is used for analytics, customer support, and to enhance your user experience.
                We do not sell or share your information with third parties.
              </p>
              <h3 style={styles.heading}>3. Security Measures</h3>
              <p style={styles.text}>
                We implement security practices to safeguard your data from unauthorized access.
                However, no online service is entirely risk-free.
              </p>
              <h3 style={styles.heading}>4. Contact Us</h3>
              <p style={styles.text}>
                Questions? <a href="/ContactUs" style={styles.link}>Contact us</a>.
              </p>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="termsOfUse" title="Terms of Use">
          <Card style={styles.card}>
            <Card.Body>
              <p style={styles.text}>
                These guidelines define how users should interact with our website.
                Using this website means you agree to abide by these rules.
              </p>
              <h3 style={styles.heading}>1. License to Use</h3>
              <p style={styles.text}>
                We grant users a limited, non-exclusive, and non-transferable right to use our services
                for personal and non-commercial purposes.
              </p>
              <h3 style={styles.heading}>2. Prohibited Activities</h3>
              <p style={styles.text}>
                Users must not engage in hacking, spamming, distributing malicious content, or
                any actions that could compromise the security of this website.
              </p>
              <h3 style={styles.heading}>3. Intellectual Property Rights</h3>
              <p style={styles.text}>
                All content, including text, images, and trademarks, belongs to us.
                Unauthorized copying, reproduction, or distribution is strictly prohibited.
              </p>
              <h3 style={styles.heading}>4. Contact Us</h3>
              <p style={styles.text}>
                Questions? <a href="/ContactUs" style={styles.link}>Contact us</a>.
              </p>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
}
export default Legal;
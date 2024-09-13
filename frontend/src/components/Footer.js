import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assests/hms.png';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#004d66', color: 'white', padding: '1rem 0', marginTop: '3rem' }}>
      <Container>
        <Row>
          {/* Footer Column 1: Logo Section */}
          <Col xs={12} md={3} className="mb-3 text-center text-md-left">
            <img
              src={logo}
              alt="logo"
              style={{
                width: '55%',
                height: 'auto',
                boxShadow: '2px 2px 2px 2px white',
                backgroundColor: 'white',
                padding: '5px',
                borderRadius: '5px',
              }}
            />
          </Col>

          {/* Footer Column 2: About Section */}
          <Col xs={12} md={3} className="mb-3 text-center text-md-left">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing the best healthhub services. Our team of specialists is committed to excellence and compassionate care.
            </p>
          </Col>

          {/* Footer Column 3: Links Section */}
          <Col xs={12} md={3} className="mb-3 text-center text-md-left">
            <h5>Quick Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
              <li><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
              <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>

          {/* Footer Column 4: Contact Section */}
          <Col xs={12} md={3} className="mb-3 text-center text-md-left">
            <h5>Contact Us</h5>
            <p>
              <strong>Address:</strong> 123 Health St, Wellness City, 45678<br />
              <strong>Phone:</strong> (123) 456-7890<br />
              <strong>Email:</strong> info@healthHub.com
            </p>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <Row className="mt-3 text-center text-md-left">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <p>&copy; 2024 HealthHub. All rights reserved.</p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end align-items-center">
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
              <a href="https://facebook.com" style={{ color: 'white' }} aria-label="Facebook"><FaFacebookSquare /></a>
              <a href="https://twitter.com" style={{ color: 'white' }} aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" style={{ color: 'white' }} aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com" style={{ color: 'white' }} aria-label="YouTube"><FaYoutube /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;


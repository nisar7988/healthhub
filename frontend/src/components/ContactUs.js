import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navbarline from './Reusable/Navbar'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import doctorImage from '../assests/contactimage.jpg'; // Ensure the correct path

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      doctor: '',
      subject: '',
      message: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const validateForm = () => {
      let formErrors = {};
      if (!formData.name) formErrors.name = 'Name is required';
      if (!formData.email) formErrors.email = 'Email is required';
      if (!formData.phone) formErrors.phone = 'Phone number is required';
      if (!formData.address) formErrors.address = 'Address is required';
      if (!formData.doctor) formErrors.doctor = 'Please select a doctor';
      if (!formData.subject) formErrors.subject = 'Subject is required';
      if (!formData.message) formErrors.message = 'Message is required';
      return formErrors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        console.log('Form data submitted:', formData);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          doctor: '',
          subject: '',
          message: ''
        });
        alert('Your query has been submitted successfully!');
      } else {
        setErrors(validationErrors);
      }
    };
  
    return (
      <div>
        <Navbarline />
        <Container className="my-5">
          <Row className="align-items-stretch">
            {/* Image on the left side */}
            <Col md={4} className="d-none d-md-block">
              <img src={doctorImage} alt="Doctor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Col>
  
            {/* Contact Form on the right side */}
            <Col md={8}>
              <h2>Contact Us</h2>
              <p>
                If you have any queries or would like to make an appointment, please fill out the form below and our team will get back to you as soon as possible.
              </p>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        placeholder="Enter your name"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
  
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
  
                <Row className="mt-3">
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                        placeholder="Enter your phone number"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
  
                  <Col md={6}>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        isInvalid={!!errors.address}
                        placeholder="Enter your address"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
  
                <Row className="mt-3">
                  <Col md={6}>
                    <Form.Group controlId="formDoctor">
                      <Form.Label>Select Doctor</Form.Label>
                      <Form.Control
                        as="select"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        isInvalid={!!errors.doctor}
                      >
                        <option value="">Choose...</option>
                        <option value="Dr. John Doe">Dr. John Doe</option>
                        <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                        <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.doctor}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
  
                  <Col md={6}>
                    <Form.Group controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        isInvalid={!!errors.subject}
                        placeholder="Enter the subject"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.subject}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
  
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="Enter your message"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  };
  
  export default ContactUs;

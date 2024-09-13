import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { BACKENDURL } from '../../constant';
const PatientFeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    appointmentDate: '',
    rating: '',
    comments: '',
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log('Submitted feedback:', feedback);
      alert('Thank you for your feedback!');
      setFeedback({
        name: '',
        email: '',
        appointmentDate: '',
        rating: '',
        comments: '',
      });
      setValidated(false);
    }
    setValidated(true);
  };

  return (
    <Container className="my" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4" style={{  fontSize: '24px' }}>Patient Feedback Form</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={formStyles}>
        {/* Row 1: Name and Email */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={feedback.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={inputStyles}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={feedback.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={inputStyles}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Row 2: Appointment Date and Rating */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="formAppointmentDate" className="mb-3">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="appointmentDate"
                value={feedback.appointmentDate}
                onChange={handleChange}
                style={inputStyles}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your appointment date.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formRating" className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                required
                as="select"
                name="rating"
                value={feedback.rating}
                onChange={handleChange}
                style={inputStyles}
              >
                <option value="">Select rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a rating.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Row 3: Comments (Full Width) */}
        <Row>
          <Col>
            <Form.Group controlId="formComments" className="mb-3">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                name="comments"
                rows={3}
                value={feedback.comments}
                onChange={handleChange}
                placeholder="Please share your feedback"
                style={inputStyles}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button type="submit"  style={buttonStyles}>
            Submit Feedback
          </Button>
        </div>
      </Form>
    </Container>
  );
};

// Custom styles for form
const formStyles = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

// Custom styles for input fields
const inputStyles = {
  width: '100%', // Adjust input width to fill the column
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
};

// Custom styles for submit button
const buttonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '4px',
  backgroundColor:'#186a86',
  border:'none',
  width:'20vw'
};

export default PatientFeedbackForm;

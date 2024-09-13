import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const PatientHome = () => {
  // Array of card data for the patient dashboard
  const cardData = [
    {
      title: 'Book Appointment',
      link: '/patientdashboard/bookappointment', // Link for this card
    },
    {
      title: 'Feedback Form',
      link: '/patientdashboard/feedback', // Link for this card
    },
    // {
    //   title: 'View Appointments',
    //   link: '/patientdashboard/viewappointments', // Link for this card
    // },
    // {
    //   title: 'Feedback',
    //   link: '/patientdashboard/feedback', // Link for this card
    // },
    // Add more cards for patient-specific features
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
            {/* Using Link for each card */}
            <Link to={card.link} style={{ textDecoration: 'none' }}>
              <Card
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  textAlign: 'center',
                  cursor: 'pointer',
                  paddingTop: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderRadius: '8px', // Rounded corners
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for effect
                }}
              >
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={12}>
          {/* This is where nested routes will be rendered */}
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};




export default PatientHome

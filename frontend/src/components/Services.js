import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbarline from './Reusable/Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import bookapt from '../assests/bookappt.jpg'
import findadoctor from '../assests/finddoctor.jpg'

const Services = () => {
  const services = [
    {
      title: 'Book Appointment',
      description: 'Schedule your appointment with our doctors quickly and easily.',
      image: bookapt, // replace with actual image path
      link: '/bookappointment' // replace with the actual route for booking an appointment
    },
    {
      title: 'Find a Doctor',
      description: 'Search for a specialist or a doctor by name or department.',
      image: findadoctor, // replace with actual image path
      link: '/findadoctor' // replace with the actual route for finding a doctor
    }
  ];

  return (
    <div>
      <Navbarline />
      <Container className="my-5">
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={service.image} alt={service.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button
                    href={service.link}
                    variant="primary"
                    className="mt-auto"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;

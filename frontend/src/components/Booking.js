import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import Navbarline from './Reusable/Navbar'
import Footer from "./Footer";

const AppointmentConfirmation = () => {
  const location = useLocation();
  const { appointmentDetails } = location.state;

  return (
    <>
      <Navbarline />
      <Container className="mt-5">
        <h1 className="bg-light mb-4" style={{ textAlign: 'center', width: '38rem', margin: 'auto' }}>Appointment Confirmation</h1>
        <Card className="p-4 shadow-sm">
          <Card.Body>
            <Card.Title>Appointment Details</Card.Title>
            <Card.Text>Specialty: {appointmentDetails.specialty}</Card.Text>
            <Card.Text>Doctor: {appointmentDetails.doctorName}</Card.Text>
            <Card.Text>Date: {appointmentDetails.date}</Card.Text>
            <Card.Text>Contact: {appointmentDetails.doctorContact}</Card.Text>
            <Card.Text>Fees: {appointmentDetails.fees}</Card.Text>
            <Card.Text>Timing: {appointmentDetails.timing}</Card.Text>
          </Card.Body>
        </Card>
        <Button href="/" className="mt-4" style={{ backgroundColor: '#004d66' }}>
          Go to Home
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default AppointmentConfirmation;

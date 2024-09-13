import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BACKENDURL } from '../../constant';
function AppointmentForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Added successMessage state
  const doctorInfo = useSelector((state) => state.DoctorInfo.doctor);
  const doctorId = doctorInfo ? doctorInfo.id : null; // Get doctorId or null if undefined

  console.log('Doctor ID:', doctorId);
  const today = new Date().toISOString().split('T')[0];
  
  const selectedDateTime = new Date(`${date}T${time}`);
  const now = new Date();

   // Check if the selected date and time are in the future
   if (selectedDateTime < now) {
    setErrorMessage('You cannot select a past date or time!');
    return;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!doctorId) {
      setErrorMessage('Doctor ID is not available. Please select a doctor.');
      return;
    }

    const selectedDate = new Date(`${date}T${time}`);
    const now = new Date();

    if (selectedDate < now) {
      setErrorMessage('You cannot select a past date or time!');
      return;
    }

    setErrorMessage('');
    setSuccessMessage(''); // Clear previous success message

    const appointmentData = {
      doctorId, // Include doctorId in the payload
      date,
      time,
      bookedBy: null,
      booked: false, 
    };

    try {
      const response = await axios.post(`${BACKENDURL}/appointment/freeappointment`, appointmentData);
      setSuccessMessage("Appointment booked successfully!");
      console.log(response);
      
    } catch (error) {
      setErrorMessage("Failed to book appointment. Please try again.");
    }
  };
  
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const selectedDate = new Date(`${date}T${time}`);
  //   const now = new Date();

  //   if (selectedDate < now) {
  //     setErrorMessage('You cannot select a past date or time!');
  //     return;
  //   }

  //   setErrorMessage('');
  //   setSuccessMessage(''); // Clear previous success message

  //   const appointmentData = {
  //     doctorId ,
  //     date,
  //     time,
  //     bookedBy: null,
  //     booked: false, 
  //   };

  //   try {
  //     const response = await axios.post("/appointment/freeappointment", appointmentData);
  //     setSuccessMessage("Appointment booked successfully!");
  //     console.log(response);
      
  //   } catch (error) {
  //     setErrorMessage("Failed to book appointment. Please try again.");
  //   }
  // };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h2 className=" text-center">Appointment Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                min={today} // Restrict past dates
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTime" className="mt-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </Form.Group>

            {errorMessage && (
              <Alert variant="danger" className="mt-3">
                {errorMessage}
              </Alert>
            )}

            {successMessage && (
              <Alert variant="success" className="mt-3">
                {successMessage}
              </Alert>
            )}

            <Button 
              type="submit" 
              className="mt-3" 
              style={{ width: '100%', backgroundColor: '#186a86', borderColor: '#186a86' }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AppointmentForm;

// src/components/AmbulanceNumbers.js
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Navbarline from './Reusable/Navbar';
import Footer from './Footer';

const BookAmbulance = () => {
  const ambulanceServices = [
    { name: 'City Ambulance Service', number: '+ 099582 90198' },
    { name: 'State Emergency Ambulance', number: '+1 234 567 8902' },
    { name: 'National Ambulance Service', number: '+1 234 567 8903' },
  ];

  return (
    <>
    <Navbarline />
    <h1 style={{margin:'1.5rem', textAlign:'center'}} className='bg-light'>Book Ambulance</h1>
    <Card style={{ width: '25rem', margin: '20px auto' }}>
      <Card.Header>Ambulance Contact Numbers</Card.Header>
      <ListGroup variant="flush">
        {ambulanceServices.map((service, index) => (
            <ListGroupItem key={index}>
            <strong>{service.name}</strong>: {service.number}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
    <Footer />
    </>
  );
};

export default BookAmbulance;

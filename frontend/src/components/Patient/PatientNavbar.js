import React from 'react';
import { Navbar } from 'react-bootstrap';
 
const PatientNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#e6e6ff" }}>
      <Navbar.Brand   className='mx-auto'>Patient Dashboard</Navbar.Brand>
    </Navbar>
  );
};

export default PatientNavbar;


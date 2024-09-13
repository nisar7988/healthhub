import React from 'react';
import { Navbar } from 'react-bootstrap';

const DoctorNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#e6e6ff" }}>
        <Navbar.Brand className='mx-auto'>Doctor Dashboard</Navbar.Brand>
    </Navbar>
  );
};

export default DoctorNavbar;

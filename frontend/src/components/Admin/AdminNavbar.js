import React from 'react';
import { Navbar } from 'react-bootstrap';

const AdminNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#6D9AC7" }}>
      <Navbar.Brand className='mx-auto text-white fw-bold'>Admin Dashboard</Navbar.Brand>
    </Navbar>
  );
};

export default AdminNavbar;
